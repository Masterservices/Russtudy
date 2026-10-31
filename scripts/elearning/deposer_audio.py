#!/usr/bin/env python3
"""
Dépose une narration générée hors du script (connecteur ElevenLabs) dans
le dossier de sa leçon, sous le nom que narrate.py lui aurait donné.

    python3 -I scripts/elearning/deposer_audio.py <dossier-lecon> <numero-bloc> <url-mp3>

Le nom dépend du texte narré (audio-NN-<sha1[:10]>.mp3) : une phrase
corrigée produit un autre fichier, et l'ancien n'est jamais servi par
erreur. Le lesson.json est mis à jour dans la foulée.
"""
import hashlib
import io
import json
import sys
import urllib.request
from pathlib import Path


def main() -> None:
    dossier, numero, url = Path(sys.argv[1]), int(sys.argv[2]), sys.argv[3]
    chemin = dossier / "lesson.json"
    lecon = json.loads(chemin.read_text(encoding="utf-8"))
    blocs = [b for b in lecon["blocks"] if b.get("kind") == "slide"]
    bloc = blocs[numero - 1]
    texte = (bloc.get("narration") or "").strip()
    if not texte:
        sys.exit(f"bloc {numero} : pas de narration")

    empreinte = hashlib.sha1(texte.encode("utf-8")).hexdigest()[:10]
    nom = f"audio-{bloc.get('position', 0) + 1:02d}-{empreinte}.mp3"
    with urllib.request.urlopen(url, timeout=60) as r:
        donnees = r.read()
    if donnees[:3] != b"ID3" and donnees[:2] not in (b"\xff\xfb", b"\xff\xf3", b"\xff\xf2"):
        sys.exit("le fichier reçu n'est pas un MP3")
    (dossier / nom).write_bytes(donnees)

    bloc["audio"] = nom
    chemin.write_text(json.dumps(lecon, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{nom}  {len(donnees) // 1024} Ko")


if __name__ == "__main__":
    main()
