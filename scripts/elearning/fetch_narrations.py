#!/usr/bin/env python3
"""
Récupère depuis l'historique ElevenLabs les voix off d'une leçon.

    export ELEVENLABS_API_KEY=...
    python3 -I fetch_narrations.py <dossier-lecon>

Complément de narrate.py, pour le cas où les générations ont été
lancées autrement — par le connecteur, par exemple, seule voie ouverte
aux voix de bibliothèque sur un plan gratuit. Les fichiers restent
nommés d'après le texte narré, comme partout ailleurs : corriger une
phrase produit un nouveau fichier, et l'ancien n'est jamais servi.

L'appariement se fait sur le texte exact. Une narration absente de
l'historique est signalée, jamais remplacée par une approximation.
"""

from __future__ import annotations

import hashlib
import json
import os
import sys
import urllib.request
from pathlib import Path

API = "https://api.elevenlabs.io/v1"


def key() -> str:
    value = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    if not value:
        print("ELEVENLABS_API_KEY absente de l'environnement.", file=sys.stderr)
        raise SystemExit(2)
    return value


def history() -> dict[str, str]:
    """Texte narré -> identifiant, le plus récent l'emportant."""
    req = urllib.request.Request(f"{API}/history?page_size=200", headers={"xi-api-key": key()})
    items = json.loads(urllib.request.urlopen(req, timeout=90).read()).get("history", [])
    found: dict[str, str] = {}
    for item in reversed(items):
        text = (item.get("text") or "").strip()
        if text:
            found[text] = item["history_item_id"]
    return found


def download(item_id: str, target: Path) -> None:
    req = urllib.request.Request(f"{API}/history/{item_id}/audio", headers={"xi-api-key": key()})
    target.write_bytes(urllib.request.urlopen(req, timeout=180).read())


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage : fetch_narrations.py <dossier-lecon>", file=sys.stderr)
        return 2

    folder = Path(sys.argv[1])
    path = folder / "lesson.json"
    lesson = json.loads(path.read_text(encoding="utf-8"))

    known = history()
    taken = missing = 0

    for block in lesson.get("blocks", []):
        text = (block.get("narration") or "").strip()
        if not text:
            continue

        item_id = known.get(text)
        if not item_id:
            missing += 1
            print(f"  absente de l'historique : bloc {block.get('position')}")
            continue

        digest = hashlib.sha1(text.encode("utf-8")).hexdigest()[:10]
        name = f"audio-{block.get('position', 0) + 1:02d}-{digest}.mp3"
        if not (folder / name).exists():
            download(item_id, folder / name)
        block["audio"] = name
        taken += 1

    path.write_text(json.dumps(lesson, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{taken} voix off rattachée(s), {missing} manquante(s)")
    return 1 if missing else 0


if __name__ == "__main__":
    raise SystemExit(main())
