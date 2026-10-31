#!/usr/bin/env python3
"""
Import d'une leçon dans Supabase : médias dans le stockage, contenu en base.

    export SUPABASE_URL=https://xxxx.supabase.co
    export SUPABASE_SECRET_KEY=sb_secret_...      # ou SUPABASE_SERVICE_ROLE_KEY
    python3 -I import_lesson.py <dossier-lecon> --course <slug-du-parcours>

Le script est idempotent : relancé sur le même dossier, il met à jour la
leçon au lieu d'en créer une seconde. Les blocs sont remplacés en bloc,
parce qu'une leçon corrigée n'a pas à conserver ses anciennes diapos.

La clé de service contourne la RLS : ce script ne doit jamais tourner
dans le navigateur ni être embarqué dans le site.
"""

from __future__ import annotations

import argparse
import json
import mimetypes
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

BUCKET = "course-assets"


def env(name: str) -> str:
    """
    Variable d'environnement, avec les deux noms de clé de service.

    Supabase a renommé ses clés : `service_role` (ancien JWT) s'appelle
    désormais `secret` (`sb_secret_…`). Les deux noms sont acceptés pour
    que le script fonctionne sur les projets anciens comme récents.
    """
    candidates = [name]
    if name == "SUPABASE_SERVICE_ROLE_KEY":
        candidates.append("SUPABASE_SECRET_KEY")

    for candidate in candidates:
        value = os.environ.get(candidate, "").strip()
        if value:
            return value.rstrip("/")

    print(f"{' ou '.join(candidates)} absente de l'environnement.", file=sys.stderr)
    raise SystemExit(2)


def headers(extra: dict[str, str] | None = None) -> dict[str, str]:
    key = env("SUPABASE_SERVICE_ROLE_KEY")
    base = {"apikey": key, "Authorization": f"Bearer {key}"}
    base.update(extra or {})
    return base


def rest(method: str, path: str, body: object | None = None, prefer: str = "") -> list | dict:
    url = f"{env('SUPABASE_URL')}/rest/v1{path}"
    data = json.dumps(body).encode("utf-8") if body is not None else None
    extra = {"Content-Type": "application/json"}
    if prefer:
        extra["Prefer"] = prefer
    req = urllib.request.Request(url, data=data, headers=headers(extra), method=method)
    try:
        with urllib.request.urlopen(req, timeout=60) as response:
            raw = response.read().decode("utf-8")
            return json.loads(raw) if raw else []
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")[:400]
        print(f"{method} {path} -> {exc.code}\n{detail}", file=sys.stderr)
        raise SystemExit(1) from exc


def upload(local: Path, remote_path: str) -> str:
    """Dépose un fichier dans le compartiment et retourne son chemin."""
    url = f"{env('SUPABASE_URL')}/storage/v1/object/{BUCKET}/{urllib.parse.quote(remote_path)}"
    content_type = mimetypes.guess_type(local.name)[0] or "application/octet-stream"
    req = urllib.request.Request(
        url,
        data=local.read_bytes(),
        headers=headers({"Content-Type": content_type, "x-upsert": "true"}),
        method="POST",
    )
    try:
        urllib.request.urlopen(req, timeout=300)
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")[:400]
        print(f"Envoi de {local.name} -> {exc.code}\n{detail}", file=sys.stderr)
        raise SystemExit(1) from exc
    return remote_path


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("lesson_dir", type=Path)
    parser.add_argument("--course", required=True, help="slug du parcours existant")
    parser.add_argument("--position", type=int, default=None, help="rang de la leçon")
    parser.add_argument("--free", action="store_true", help="marquer la leçon comme leçon d'essai")
    parser.add_argument("--publish", action="store_true", help="publier immédiatement")
    args = parser.parse_args()

    lesson_path = args.lesson_dir / "lesson.json"
    if not lesson_path.is_file():
        print(f"lesson.json introuvable dans {args.lesson_dir}", file=sys.stderr)
        return 1

    lesson = json.loads(lesson_path.read_text(encoding="utf-8"))

    courses = rest("GET", f"/courses?slug=eq.{urllib.parse.quote(args.course)}&select=id")
    if not courses:
        print(f"Parcours « {args.course} » introuvable. Créez-le avant d'importer.", file=sys.stderr)
        return 1
    course_id = courses[0]["id"]

    slug = lesson["slug"]
    position = args.position if args.position is not None else lesson.get("position", 0)

    row = {
        "course_id": course_id,
        "slug": slug,
        "position": position,
        "title": lesson.get("title", {}),
        "summary": lesson.get("summary", {}),
        "objectives": lesson.get("objectives", []),
        "is_free": args.free or lesson.get("is_free", False),
        "duration_min": lesson.get("duration_min", 10),
        "is_published": args.publish,
        "source_file": lesson.get("source_file"),
    }

    saved = rest(
        "POST",
        "/lessons?on_conflict=course_id,slug",
        [row],
        prefer="resolution=merge-duplicates,return=representation",
    )
    lesson_id = saved[0]["id"]
    print(f"Leçon {slug} -> {lesson_id}")

    # Les blocs sont remplacés intégralement : une leçon réimportée ne
    # doit pas conserver les diapositives d'une version précédente.
    rest("DELETE", f"/lesson_blocks?lesson_id=eq.{lesson_id}")

    blocks = []
    for block in lesson.get("blocks", []):
        media_name = block.get("media") or ""
        audio_name = block.get("audio") or ""
        prefix = f"{args.course}/{slug}"

        media_path = upload(args.lesson_dir / media_name, f"{prefix}/{media_name}") if media_name else None
        audio_path = upload(args.lesson_dir / audio_name, f"{prefix}/{audio_name}") if audio_name else None

        ui = lesson.get("ui_lang", "fr")
        # La voix off parle la langue enseignée : on n'apprend pas une
        # prononciation dans sa langue maternelle. `narration` est donc
        # dans la langue cible, et `narration_translation` la rend dans
        # la langue d'interface pour que l'étudiant suive ce qu'il entend.
        spoken = lesson.get("target_lang", ui)
        transcript = {spoken: block.get("narration", "")}
        translation = block.get("narration_translation", "")
        if translation and ui != spoken:
            transcript[ui] = translation

        blocks.append(
            {
                "lesson_id": lesson_id,
                "position": block.get("position", 0),
                "kind": block.get("kind", "slide"),
                "content": {
                    "title": {ui: block.get("title", "")},
                    "lines": {ui: block.get("lines", [])},
                },
                "media_url": media_path,
                "audio_url": audio_path,
                "transcript": transcript,
            }
        )

    if blocks:
        rest("POST", "/lesson_blocks", blocks, prefer="return=minimal")
    print(f"  {len(blocks)} bloc(s) importé(s)")

    exercises = lesson.get("exercises", [])
    if exercises:
        rest("DELETE", f"/exercises?lesson_id=eq.{lesson_id}")
        rows = [{**e, "lesson_id": lesson_id} for e in exercises]
        rest("POST", "/exercises", rows, prefer="return=minimal")
        print(f"  {len(rows)} exercice(s) importé(s)")

    state = "publiée" if args.publish else "en brouillon"
    access = "leçon d'essai" if row["is_free"] else "réservée aux inscrits"
    print(f"Terminé : {state}, {access}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
