#!/usr/bin/env python3
"""
Fonds verticaux des shorts.

    python3 -I scripts/elearning/shorts/fonds.py

Un short occupe un écran de téléphone tenu debout. Les photos du site
sont en paysage (1600 × 1000) : servies telles quelles, le navigateur
téléchargerait trois fois plus de pixels qu'il n'en montre. On en tire
donc un recadrage 9:16, et une vignette pour les listes.

Seules des photos déjà publiées sur le site sont reprises : leur licence
est connue et consignée dans `src/content/images/registry.ts`. Celles de
Wikimedia Commons gardent leur crédit, que le short affiche.

Écrit :

    public/elearning/shorts/fonds/<clé>.webp      576 × 1024
    public/elearning/shorts/fonds/<clé>-s.webp    144 × 256
    src/content/shorts/fonds.generated.ts

Dépendance : Pillow.
"""
import json
from pathlib import Path

from PIL import Image

RACINE = Path(__file__).resolve().parents[3]
SOURCES = RACINE / "public" / "assets" / "img" / "pages"
SORTIE = RACINE / "public" / "elearning" / "shorts" / "fonds"
SORTIE_TS = RACINE / "src" / "content" / "shorts" / "fonds.generated.ts"

GRAND = (576, 1024)
PETIT = (144, 256)

# clé du fond → photo du site, centre horizontal du recadrage (0 = bord
# gauche, 1 = bord droit) et crédit quand la licence l'exige.
FONDS: dict[str, dict] = {
    "kremlin": {"photo": "villes", "centre": 0.5},
    "saint-basile": {"photo": "ville-moscou", "centre": 0.42},
    "neva": {"photo": "ville-saint-petersbourg", "centre": 0.5},
    "metro": {
        "photo": "transport-mobilite",
        "centre": 0.5,
        "credit": "Photo : A.Savin — CC BY-SA 3.0, Wikimedia Commons",
    },
    "marche": {"photo": "vie-quotidienne", "centre": 0.5},
    "classe": {"photo": "annee-preparatoire", "centre": 0.5},
    "poignee": {"photo": "comparatif", "centre": 0.5},
    "etudiantes": {"photo": "bourses", "centre": 0.5},
    "sourire": {"photo": "filieres", "centre": 0.5},
    "agenda": {"photo": "calendrier-candidature", "centre": 0.5},
    "calcul": {"photo": "cout-des-etudes", "centre": 0.5},
    "envol": {"photo": "visa", "centre": 0.5},
    "couchant": {"photo": "famille-parents", "centre": 0.5},
    "cafe": {"photo": "blog", "centre": 0.5},
    "bibliotheque": {"photo": "faq", "centre": 0.5},
    "equipe": {"photo": "travail-etudiant", "centre": 0.55},
    "sorbonne": {
        "photo": "comparatif-france",
        "centre": 0.5,
        "credit": "Photo : Pline — CC BY-SA 3.0, Wikimedia Commons",
    },
}


def recadrer(image: Image.Image, centre: float) -> Image.Image:
    largeur, hauteur = image.size
    coupe = round(hauteur * 9 / 16)
    gauche = round((largeur - coupe) * centre)
    gauche = max(0, min(largeur - coupe, gauche))
    return image.crop((gauche, 0, gauche + coupe, hauteur))


def teinte(image: Image.Image) -> str:
    """Couleur moyenne, affichée le temps que la photo arrive."""
    r, g, b = image.resize((1, 1), Image.Resampling.BOX).getpixel((0, 0))[:3]
    # Assombrie : le texte du short est blanc, et un aplat clair le
    # rendrait illisible pendant le chargement.
    return "#{:02x}{:02x}{:02x}".format(*(round(v * 0.45) for v in (r, g, b)))


def main() -> None:
    SORTIE.mkdir(parents=True, exist_ok=True)
    registre: dict[str, dict] = {}

    for cle, fiche in FONDS.items():
        source = SOURCES / f"{fiche['photo']}.webp"
        portrait = recadrer(Image.open(source).convert("RGB"), fiche["centre"])

        grand = portrait.resize(GRAND, Image.Resampling.LANCZOS)
        grand.save(SORTIE / f"{cle}.webp", "WEBP", quality=62, method=6)
        petit = portrait.resize(PETIT, Image.Resampling.LANCZOS)
        petit.save(SORTIE / f"{cle}-s.webp", "WEBP", quality=58, method=6)

        registre[cle] = {
            "src": f"/elearning/shorts/fonds/{cle}.webp",
            "thumb": f"/elearning/shorts/fonds/{cle}-s.webp",
            "color": teinte(portrait),
            **({"credit": fiche["credit"]} if "credit" in fiche else {}),
        }
        poids = (SORTIE / f"{cle}.webp").stat().st_size // 1024
        print(f"  {cle:14s} ← {fiche['photo']:26s} {poids:3d} Ko")

    lignes = [
        "// Fichier généré par scripts/elearning/shorts/fonds.py — ne pas modifier à la main.",
        "",
        "export interface ShortBackground {",
        "  /** Photo verticale, 576 × 1024. */",
        "  src: string;",
        "  /** Vignette, 144 × 256. */",
        "  thumb: string;",
        "  /** Couleur d'attente, le temps que la photo arrive. */",
        "  color: string;",
        "  /** Crédit exigé par la licence de la photo. */",
        "  credit?: string;",
        "}",
        "",
        "export const SHORT_BACKGROUNDS = {",
    ]
    for cle, fiche in registre.items():
        champs = ", ".join(f"{nom}: {json.dumps(valeur, ensure_ascii=False)}" for nom, valeur in fiche.items())
        lignes.append(f"  {json.dumps(cle)}: {{ {champs} }},")
    lignes += [
        "} as const satisfies Record<string, ShortBackground>;",
        "",
        "export type ShortBackgroundKey = keyof typeof SHORT_BACKGROUNDS;",
        "",
    ]
    SORTIE_TS.write_text("\n".join(lignes), encoding="utf-8")
    print(f"→ {SORTIE_TS.relative_to(RACINE)}")


if __name__ == "__main__":
    main()
