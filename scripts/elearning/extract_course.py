#!/usr/bin/env python3
"""
Extraction d'un cours depuis un PowerPoint ou un PDF.

Produit, pour un fichier source :
  * une image PNG par diapositive (ou par page) ;
  * un fichier lesson.json décrivant la leçon, prêt à être relu, corrigé
    puis importé dans Supabase.

Ce script ne devine rien et n'invente rien : il transcrit ce que le
fichier contient. Le texte extrait sert de point de départ au script de
voix off (`narrate.py`), qui lit `narration` — un champ laissé vide ici
et rempli à la main ou par un modèle, parce qu'un texte de diapositive
n'est presque jamais un bon texte lu à voix haute.

Usage :
    python3 -I extract_course.py <source.pptx|source.pdf> <dossier-sortie> \
        [--lesson-slug salutations] [--lang ru] [--ui fr]

Dépendances : python-pptx, pymupdf. Pour le rendu des diapositives d'un
PPTX en image, LibreOffice est utilisé s'il est disponible ; sinon seul
le texte est extrait et `media` reste vide.
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from pptx.enum.shapes import MSO_SHAPE_TYPE


def slugify(value: str, fallback: str = "lecon") -> str:
    value = re.sub(r"[^\w\s-]", "", value, flags=re.UNICODE).strip().lower()
    value = re.sub(r"[\s_]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-")
    return value or fallback


def iter_text(shape) -> list[str]:
    """Texte d'une forme, en descendant dans les groupes."""
    lines: list[str] = []
    if shape.shape_type == MSO_SHAPE_TYPE.GROUP:
        for child in shape.shapes:
            lines.extend(iter_text(child))
        return lines
    if getattr(shape, "has_table", False):
        for row in shape.table.rows:
            cells = [c.text.strip() for c in row.cells if c.text.strip()]
            if cells:
                lines.append(" | ".join(cells))
        return lines
    if shape.has_text_frame:
        for paragraph in shape.text_frame.paragraphs:
            text = paragraph.text.strip()
            if text:
                lines.append(text)
    return lines


def export_slide_pictures(source: Path, out_dir: Path) -> list[str]:
    """
    Images des diapositives faites d'une seule photo pleine page.

    Beaucoup de decks exportés depuis un outil de design n'ont aucun
    texte : chaque diapositive est une image. Dans ce cas l'image
    d'origine est le meilleur rendu possible, et elle s'extrait sans
    LibreOffice.
    """
    from pptx import Presentation

    out_dir.mkdir(parents=True, exist_ok=True)
    deck = Presentation(str(source))
    names: list[str] = []

    for index, slide in enumerate(deck.slides):
        pictures = [sh for sh in slide.shapes if sh.shape_type == MSO_SHAPE_TYPE.PICTURE]
        if len(pictures) != 1:
            names.append("")
            continue
        image = pictures[0].image
        name = f"slide-{index + 1:02d}.{image.ext}"
        (out_dir / name).write_bytes(image.blob)
        names.append(name)

    return names if any(names) else []


def extract_pptx(source: Path, out_dir: Path) -> list[dict]:
    """Texte de chaque diapositive, plus son rendu image si possible."""
    from pptx import Presentation

    images = render_pptx_slides(source, out_dir) or export_slide_pictures(source, out_dir)
    deck = Presentation(str(source))
    blocks: list[dict] = []

    for index, slide in enumerate(deck.slides):
        lines: list[str] = []
        for shape in slide.shapes:
            lines.extend(iter_text(shape))

        notes = ""
        if slide.has_notes_slide and slide.notes_slide.notes_text_frame is not None:
            notes = slide.notes_slide.notes_text_frame.text.strip()

        blocks.append(
            {
                "position": index,
                "kind": "slide",
                "title": lines[0] if lines else "",
                "lines": lines[1:] if len(lines) > 1 else [],
                # Les notes du conférencier sont souvent déjà rédigées pour
                # être dites : on les propose comme base de narration.
                "narration": notes,
                "media": images[index] if index < len(images) else "",
            }
        )

    return blocks


def render_pptx_slides(source: Path, out_dir: Path) -> list[str]:
    """Rend chaque diapositive en PNG via LibreOffice, si disponible."""
    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    if not soffice:
        print("  LibreOffice absent : diapositives non rendues en image.", file=sys.stderr)
        return []

    with tempfile.TemporaryDirectory() as tmp:
        try:
            subprocess.run(
                [soffice, "--headless", "--convert-to", "pdf", "--outdir", tmp, str(source)],
                check=True,
                capture_output=True,
                timeout=600,
            )
        except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as exc:
            print(f"  Conversion LibreOffice échouée : {exc}", file=sys.stderr)
            return []

        produced = list(Path(tmp).glob("*.pdf"))
        if not produced:
            return []
        return render_pdf_pages(produced[0], out_dir)


def render_pdf_pages(source: Path, out_dir: Path, zoom: float = 2.0) -> list[str]:
    """Rend chaque page en PNG. Retourne les chemins relatifs au dossier."""
    import pymupdf

    out_dir.mkdir(parents=True, exist_ok=True)
    names: list[str] = []
    with pymupdf.open(str(source)) as doc:
        matrix = pymupdf.Matrix(zoom, zoom)
        for index, page in enumerate(doc):
            name = f"slide-{index + 1:02d}.png"
            page.get_pixmap(matrix=matrix).save(str(out_dir / name))
            names.append(name)
    return names


def extract_pdf(source: Path, out_dir: Path) -> list[dict]:
    import pymupdf

    images = render_pdf_pages(source, out_dir)
    blocks: list[dict] = []

    with pymupdf.open(str(source)) as doc:
        for index, page in enumerate(doc):
            lines = [line.strip() for line in page.get_text().splitlines() if line.strip()]
            blocks.append(
                {
                    "position": index,
                    "kind": "slide",
                    "title": lines[0] if lines else "",
                    "lines": lines[1:],
                    "narration": "",
                    "media": images[index] if index < len(images) else "",
                }
            )

    return blocks


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="fichier .pptx ou .pdf")
    parser.add_argument("out_dir", type=Path, help="dossier de sortie")
    parser.add_argument("--lesson-slug", default="", help="identifiant de la leçon")
    parser.add_argument("--lang", default="ru", help="langue enseignée (ru, fr…)")
    parser.add_argument("--ui", default="fr", help="langue d'interface (fr, ar, ru…)")
    args = parser.parse_args()

    source: Path = args.source
    if not source.is_file():
        print(f"Fichier introuvable : {source}", file=sys.stderr)
        return 1

    out_dir: Path = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    suffix = source.suffix.lower()
    if suffix == ".pptx":
        blocks = extract_pptx(source, out_dir)
    elif suffix == ".pdf":
        blocks = extract_pdf(source, out_dir)
    else:
        print(f"Format non pris en charge : {suffix} (attendu .pptx ou .pdf)", file=sys.stderr)
        return 1

    slug = args.lesson_slug or slugify(source.stem)
    first_title = next((b["title"] for b in blocks if b["title"]), source.stem)

    lesson = {
        "slug": slug,
        "target_lang": args.lang,
        "ui_lang": args.ui,
        "title": {args.ui: first_title},
        "summary": {args.ui: ""},
        "objectives": [],
        "is_free": False,
        "duration_min": max(5, len(blocks) * 2),
        "source_file": source.name,
        "blocks": blocks,
        "exercises": [],
    }

    target = out_dir / "lesson.json"
    target.write_text(json.dumps(lesson, ensure_ascii=False, indent=2), encoding="utf-8")

    narrated = sum(1 for b in blocks if b["narration"])
    illustrated = sum(1 for b in blocks if b["media"])
    print(f"{len(blocks)} bloc(s) extrait(s) -> {target}")
    print(f"  illustrés : {illustrated}/{len(blocks)}")
    print(f"  narration déjà présente : {narrated}/{len(blocks)}")
    if narrated < len(blocks):
        print("  Complétez `narration` avant de lancer narrate.py.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
