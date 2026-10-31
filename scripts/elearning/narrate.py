#!/usr/bin/env python3
"""
Voix off d'une leçon, via l'API ElevenLabs.

Lit le `lesson.json` produit par extract_course.py, génère un MP3 par
bloc dont le champ `narration` est renseigné, et réécrit le fichier avec
le chemin de chaque audio.

Le script est volontairement indépendant du connecteur ElevenLabs de
l'assistant : il n'a besoin que d'une clé d'API, ce qui le rend
rejouable en local, en intégration continue, ou par n'importe qui dans
l'équipe.

    export ELEVENLABS_API_KEY=...
    python3 -I narrate.py <dossier-lecon> --voice <voice_id>

Choisir la voix :
    python3 -I narrate.py --list-voices

Un bloc déjà narré n'est pas régénéré : chaque appel coûte des crédits.
Forcer avec --force.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

API_ROOT = "https://api.elevenlabs.io/v1"
# Modèle multilingue : rend correctement le russe et le français, qui
# sont les deux langues enseignées.
DEFAULT_MODEL = "eleven_multilingual_v2"


def api_key() -> str:
    key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    if not key:
        print("ELEVENLABS_API_KEY absente de l'environnement.", file=sys.stderr)
        raise SystemExit(2)
    return key


def request_json(path: str) -> dict:
    req = urllib.request.Request(f"{API_ROOT}{path}", headers={"xi-api-key": api_key()})
    with urllib.request.urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode("utf-8"))


def list_voices() -> int:
    data = request_json("/voices")
    for voice in data.get("voices", []):
        labels = voice.get("labels") or {}
        descriptors = ", ".join(f"{k}={v}" for k, v in labels.items() if v)
        print(f"{voice.get('voice_id')}  {voice.get('name', '')}  {descriptors}")
    return 0


def synthesize(text: str, voice: str, model: str, target: Path) -> None:
    payload = json.dumps(
        {
            "text": text,
            "model_id": model,
            "voice_settings": {"stability": 0.45, "similarity_boost": 0.75},
        }
    ).encode("utf-8")

    req = urllib.request.Request(
        f"{API_ROOT}/text-to-speech/{voice}",
        data=payload,
        headers={
            "xi-api-key": api_key(),
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=180) as response:
        target.write_bytes(response.read())


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("lesson_dir", nargs="?", type=Path, help="dossier contenant lesson.json")
    parser.add_argument("--voice", default="", help="identifiant de voix ElevenLabs")
    parser.add_argument("--model", default=DEFAULT_MODEL)
    parser.add_argument("--list-voices", action="store_true")
    parser.add_argument("--force", action="store_true", help="régénérer même si l'audio existe")
    parser.add_argument("--dry-run", action="store_true", help="n'appelle pas l'API, liste le travail")
    args = parser.parse_args()

    if args.list_voices:
        return list_voices()

    if not args.lesson_dir:
        parser.error("dossier de leçon requis (ou --list-voices)")
    if not args.voice and not args.dry_run:
        parser.error("--voice requis : lancez --list-voices pour choisir")

    lesson_path: Path = args.lesson_dir / "lesson.json"
    if not lesson_path.is_file():
        print(f"lesson.json introuvable dans {args.lesson_dir}", file=sys.stderr)
        return 1

    lesson = json.loads(lesson_path.read_text(encoding="utf-8"))
    blocks = lesson.get("blocks", [])

    produced = skipped = empty = 0
    for block in blocks:
        text = (block.get("narration") or "").strip()
        if not text:
            empty += 1
            continue

        # Le nom du fichier dépend du texte : un texte corrigé produit un
        # nouveau fichier, et l'ancien n'est jamais servi par erreur.
        digest = hashlib.sha1(text.encode("utf-8")).hexdigest()[:10]
        name = f"audio-{block.get('position', 0) + 1:02d}-{digest}.mp3"
        target = args.lesson_dir / name

        if target.exists() and not args.force:
            block["audio"] = name
            skipped += 1
            continue

        if args.dry_run:
            print(f"  [à générer] {name} — {text[:60]}…")
            produced += 1
            continue

        try:
            synthesize(text, args.voice, args.model, target)
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", "replace")[:300]
            print(f"Échec sur le bloc {block.get('position')} : {exc.code} {detail}", file=sys.stderr)
            return 1

        block["audio"] = name
        produced += 1
        print(f"  {name}")

    lesson_path.write_text(json.dumps(lesson, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"{produced} audio(s) généré(s), {skipped} déjà présent(s), {empty} bloc(s) sans narration.")
    if empty:
        print("  Les blocs sans narration resteront muets dans le lecteur.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
