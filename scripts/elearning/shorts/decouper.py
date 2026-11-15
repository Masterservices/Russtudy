#!/usr/bin/env python3
"""
Découpe les extraits audio des shorts.

    python3 -I scripts/elearning/shorts/decouper.py                 # tout
    python3 -I scripts/elearning/shorts/decouper.py russe-a1        # un cours
    python3 -I scripts/elearning/shorts/decouper.py --analyser <fichier.mp3>

Un short dit une phrase, dans la voix de son cours. Plutôt que de
générer une seconde fois ce qu'une leçon dit déjà, on prélève la phrase
dans la narration existante : c'est la même voix par construction, et
cela ne coûte aucun crédit. Quand la phrase n'existe dans aucune leçon,
on la génère avec la voix inscrite dans `scripts/elearning/voix.json`,
on dépose la prise dans `supabase/seed/shorts/<cours>/`, puis on la
découpe ici de la même façon.

Les bornes de chaque extrait sont écrites à la main dans `decoupe.json`,
d'après ce que montre `--analyser`. Ce script ajoute la marge, les
fondus et la mise à niveau, puis écrit :

    public/elearning/shorts/<cours>/<id>.mp3
    src/content/shorts/audio.generated.ts     durées et bornes de parole

Dépendances : ffmpeg et ffprobe.
"""
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

RACINE = Path(__file__).resolve().parents[3]
PLAN = Path(__file__).with_name("decoupe.json")
SORTIE_AUDIO = RACINE / "public" / "elearning" / "shorts"
SORTIE_TS = RACINE / "src" / "content" / "shorts" / "audio.generated.ts"

# Seuil sous lequel on considère qu'il n'y a pas de parole. Les voix de
# synthèse ont un fond parfaitement silencieux : -34 dB sépare nettement
# une consonne sourde d'une pause.
BRUIT = "-34dB"
PAUSE_MIN = 0.09

MARGE_AVANT = 0.06
MARGE_APRES = 0.16
FONDU_ENTREE = 0.012
FONDU_SORTIE = 0.05
# Silence entre deux répliques d'un dialogue assemblé.
RESPIRATION = 0.38
# Crête visée après mise à niveau, et gain maximal toléré.
CRETE_DB = -1.5
GAIN_MAX_DB = 9.0


def lancer(*args: str) -> subprocess.CompletedProcess:
    return subprocess.run(args, capture_output=True, text=True, check=False)


def duree(chemin: Path) -> float:
    sortie = lancer(
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", str(chemin),
    ).stdout.strip()
    return float(sortie)


_segments: dict[Path, list[tuple[float, float]]] = {}


def segments(chemin: Path) -> list[tuple[float, float]]:
    """Intervalles de parole d'un fichier, complément de ses silences."""
    if chemin in _segments:
        return _segments[chemin]
    journal = lancer(
        "ffmpeg", "-hide_banner", "-i", str(chemin),
        "-af", f"silencedetect=noise={BRUIT}:d={PAUSE_MIN}", "-f", "null", "-",
    ).stderr
    total = duree(chemin)
    debuts = [float(x) for x in re.findall(r"silence_start: ([0-9.]+)", journal)]
    fins = [float(x) for x in re.findall(r"silence_end: ([0-9.]+)", journal)]
    fins += [total] * (len(debuts) - len(fins))

    parole: list[tuple[float, float]] = []
    curseur = 0.0
    for debut, fin in zip(debuts, fins):
        if debut - curseur > 0.05:
            parole.append((round(curseur, 3), round(debut, 3)))
        curseur = fin
    if total - curseur > 0.05:
        parole.append((round(curseur, 3), round(total, 3)))
    _segments[chemin] = parole
    return parole


def marges(chemin: Path, debut: float, fin: float) -> tuple[float, float]:
    """
    Marge avant et après un extrait, bornée par ses voisins.

    Une marge fixe mordrait sur le mot suivant quand la voix enchaîne :
    on ne prend donc qu'une fraction du silence réellement disponible.
    """
    total = duree(chemin)
    avant_libre = debut
    apres_libre = total - fin
    for seg_debut, seg_fin in segments(chemin):
        if seg_fin <= debut + 0.02:
            avant_libre = min(avant_libre, debut - seg_fin)
        if seg_debut >= fin - 0.02:
            apres_libre = min(apres_libre, seg_debut - fin)
    return (
        max(0.0, min(MARGE_AVANT, avant_libre * 0.4)),
        max(0.0, min(MARGE_APRES, apres_libre * 0.6)),
    )


def crete(chemin: Path) -> float:
    journal = lancer(
        "ffmpeg", "-hide_banner", "-i", str(chemin),
        "-af", "volumedetect", "-f", "null", "-",
    ).stderr
    trouve = re.search(r"max_volume: (-?[0-9.]+) dB", journal)
    return float(trouve.group(1)) if trouve else 0.0


def extraire(source: Path, debut: float, fin: float, cible: Path) -> tuple[float, float]:
    """Écrit l'extrait en WAV. Renvoie le début et la fin de la parole dedans."""
    avant, apres = marges(source, debut, fin)
    longueur = (fin - debut) + avant + apres
    filtre = (
        f"atrim=start={debut - avant:.3f}:end={fin + apres:.3f},asetpts=PTS-STARTPTS,"
        f"afade=t=in:st=0:d={FONDU_ENTREE},"
        f"afade=t=out:st={max(0.0, longueur - FONDU_SORTIE):.3f}:d={FONDU_SORTIE}"
    )
    resultat = lancer(
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(source),
        "-af", filtre, "-ac", "1", "-ar", "44100", str(cible),
    )
    if resultat.returncode != 0:
        sys.exit(f"ffmpeg : {source.name} — {resultat.stderr.strip()}")
    return (round(avant, 3), round(avant + (fin - debut), 3))


def encoder(wav: Path, cible: Path) -> float:
    """Met l'extrait à niveau et l'encode en MP3. Renvoie sa durée."""
    gain = max(-GAIN_MAX_DB, min(GAIN_MAX_DB, CRETE_DB - crete(wav)))
    cible.parent.mkdir(parents=True, exist_ok=True)
    resultat = lancer(
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(wav),
        "-af", f"volume={gain:.2f}dB", "-ac", "1", "-ar", "44100",
        "-codec:a", "libmp3lame", "-b:a", "96k", "-map_metadata", "-1", str(cible),
    )
    if resultat.returncode != 0:
        sys.exit(f"ffmpeg : {cible.name} — {resultat.stderr.strip()}")
    return round(duree(cible), 3)


def assembler(morceaux: list[Path], cible: Path) -> list[tuple[float, float]]:
    """Concatène des extraits, séparés par une respiration."""
    entrees: list[str] = []
    for morceau in morceaux:
        entrees += ["-i", str(morceau)]
    etapes = []
    libelles = []
    for index in range(len(morceaux)):
        pad = "" if index == len(morceaux) - 1 else f",apad=pad_dur={RESPIRATION}"
        etapes.append(f"[{index}:a]aresample=44100{pad}[a{index}]")
        libelles.append(f"[a{index}]")
    graphe = ";".join(etapes) + ";" + "".join(libelles) + f"concat=n={len(morceaux)}:v=0:a=1[out]"
    resultat = lancer(
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", *entrees,
        "-filter_complex", graphe, "-map", "[out]", "-ac", "1", "-ar", "44100", str(cible),
    )
    if resultat.returncode != 0:
        sys.exit(f"ffmpeg : assemblage {cible.name} — {resultat.stderr.strip()}")

    bornes: list[tuple[float, float]] = []
    curseur = 0.0
    for index, morceau in enumerate(morceaux):
        longueur = duree(morceau)
        bornes.append((round(curseur, 3), round(curseur + longueur, 3)))
        curseur += longueur + (0 if index == len(morceaux) - 1 else RESPIRATION)
    return bornes


def analyser(chemin: Path) -> None:
    print(f"{chemin.name} — {duree(chemin):.2f} s")
    for index, (debut, fin) in enumerate(segments(chemin)):
        print(f"  {index:2d}  {debut:6.2f} → {fin:6.2f}   ({fin - debut:.2f} s)")


def traiter(cours: str, plan: dict, registre: dict) -> None:
    travail = Path(tempfile.mkdtemp(prefix=f"shorts-{cours}-"))
    wavs: dict[str, Path] = {}
    paroles: dict[str, tuple[float, float]] = {}

    for clip in plan["clips"]:
        ident = clip["id"]
        wav = travail / f"{ident}.wav"
        cible = SORTIE_AUDIO / cours / f"{ident}.mp3"
        fiche: dict = {"src": f"/elearning/shorts/{cours}/{ident}.mp3"}

        if "assemble" in clip:
            manquants = [m for m in clip["assemble"] if m not in wavs]
            if manquants:
                sys.exit(f"{cours}/{ident} : extraits inconnus {manquants} (les déclarer avant)")
            bornes = assembler([wavs[m] for m in clip["assemble"]], wav)
            # Chaque réplique garde les marges de son extrait d'origine :
            # la parole commence un peu après le début du morceau.
            fiche["lines"] = [
                [round(debut + paroles[m][0], 3), round(debut + paroles[m][1], 3)]
                for (debut, _fin), m in zip(bornes, clip["assemble"])
            ]
        else:
            source = RACINE / clip["source"]
            if not source.exists():
                sys.exit(f"{cours}/{ident} : source absente — {clip['source']}")
            debut, fin = float(clip["debut"]), float(clip["fin"])
            parole = extraire(source, debut, fin, wav)
            paroles[ident] = parole
            if "lignes" in clip:
                decalage = parole[0] - debut
                fiche["lines"] = [
                    [round(a + decalage, 3), round(b + decalage, 3)] for a, b in clip["lignes"]
                ]
            else:
                fiche["lines"] = [list(parole)]

        wavs[ident] = wav
        fiche["duration"] = encoder(wav, cible)
        registre[f"{cours}/{ident}"] = fiche
        print(f"  {ident:28s} {fiche['duration']:5.2f} s  {cible.stat().st_size // 1024:3d} Ko")


def ecrire_registre(registre: dict) -> None:
    lignes = [
        "// Fichier généré par scripts/elearning/shorts/decouper.py — ne pas modifier à la main.",
        "",
        "export interface ShortAudio {",
        "  /** Chemin public du MP3. */",
        "  src: string;",
        "  /** Durée du fichier, en secondes. */",
        "  duration: number;",
        "  /** Début et fin de la parole de chaque réplique, en secondes. */",
        "  lines: [number, number][];",
        "}",
        "",
        "/** Extraits audio des shorts, par « cours/identifiant ». */",
        "export const SHORT_AUDIO: Record<string, ShortAudio> = {",
    ]
    for cle in sorted(registre):
        fiche = registre[cle]
        bornes = ", ".join(f"[{a}, {b}]" for a, b in fiche["lines"])
        lignes.append(
            f"  {json.dumps(cle)}: {{ src: {json.dumps(fiche['src'])}, "
            f"duration: {fiche['duration']}, lines: [{bornes}] }},"
        )
    lignes += ["};", ""]
    SORTIE_TS.parent.mkdir(parents=True, exist_ok=True)
    SORTIE_TS.write_text("\n".join(lignes), encoding="utf-8")


def relire_registre() -> dict:
    """Fiches déjà générées, pour ne retraiter qu'un cours à la fois."""
    if not SORTIE_TS.exists():
        return {}
    registre: dict = {}
    motif = re.compile(
        r'^\s+"(?P<cle>[^"]+)": \{ src: "(?P<src>[^"]+)", duration: (?P<duree>[0-9.]+), '
        r"lines: \[(?P<lignes>.*)\] \},$"
    )
    for ligne in SORTIE_TS.read_text(encoding="utf-8").splitlines():
        trouve = motif.match(ligne)
        if not trouve:
            continue
        bornes = re.findall(r"\[([0-9.]+), ([0-9.]+)\]", trouve.group("lignes"))
        registre[trouve.group("cle")] = {
            "src": trouve.group("src"),
            "duration": float(trouve.group("duree")),
            "lines": [[float(a), float(b)] for a, b in bornes],
        }
    return registre


def main() -> None:
    args = sys.argv[1:]
    if args[:1] == ["--analyser"]:
        for chemin in args[1:]:
            analyser(Path(chemin))
        return

    plan = json.loads(PLAN.read_text(encoding="utf-8"))
    cours_demandes = args or [cle for cle in plan if not cle.startswith("_")]
    registre = relire_registre()

    for cours in cours_demandes:
        if cours not in plan:
            sys.exit(f"cours inconnu dans decoupe.json : {cours}")
        print(cours)
        # Un cours retraité repart de zéro : un extrait retiré du plan ne
        # doit pas survivre dans le registre.
        for cle in [c for c in registre if c.startswith(f"{cours}/")]:
            del registre[cle]
        traiter(cours, plan[cours], registre)

    ecrire_registre(registre)
    print(f"→ {SORTIE_TS.relative_to(RACINE)}")


if __name__ == "__main__":
    main()
