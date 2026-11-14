// Fichier généré par scripts/elearning/shorts/fonds.py — ne pas modifier à la main.

export interface ShortBackground {
  /** Photo verticale, 576 × 1024. */
  src: string;
  /** Vignette, 144 × 256. */
  thumb: string;
  /** Couleur d'attente, le temps que la photo arrive. */
  color: string;
  /** Crédit exigé par la licence de la photo. */
  credit?: string;
}

export const SHORT_BACKGROUNDS = {
  "kremlin": { src: "/elearning/shorts/fonds/kremlin.webp", thumb: "/elearning/shorts/fonds/kremlin-s.webp", color: "#47423f" },
  "saint-basile": { src: "/elearning/shorts/fonds/saint-basile.webp", thumb: "/elearning/shorts/fonds/saint-basile-s.webp", color: "#362c23" },
  "neva": { src: "/elearning/shorts/fonds/neva.webp", thumb: "/elearning/shorts/fonds/neva-s.webp", color: "#2e2b28" },
  "metro": { src: "/elearning/shorts/fonds/metro.webp", thumb: "/elearning/shorts/fonds/metro-s.webp", color: "#372d21", credit: "Photo : A.Savin — CC BY-SA 3.0, Wikimedia Commons" },
  "marche": { src: "/elearning/shorts/fonds/marche.webp", thumb: "/elearning/shorts/fonds/marche-s.webp", color: "#272212" },
  "classe": { src: "/elearning/shorts/fonds/classe.webp", thumb: "/elearning/shorts/fonds/classe-s.webp", color: "#383633" },
  "poignee": { src: "/elearning/shorts/fonds/poignee.webp", thumb: "/elearning/shorts/fonds/poignee-s.webp", color: "#332d27" },
  "etudiantes": { src: "/elearning/shorts/fonds/etudiantes.webp", thumb: "/elearning/shorts/fonds/etudiantes-s.webp", color: "#464346" },
  "sourire": { src: "/elearning/shorts/fonds/sourire.webp", thumb: "/elearning/shorts/fonds/sourire-s.webp", color: "#26231d" },
  "agenda": { src: "/elearning/shorts/fonds/agenda.webp", thumb: "/elearning/shorts/fonds/agenda-s.webp", color: "#585857" },
  "calcul": { src: "/elearning/shorts/fonds/calcul.webp", thumb: "/elearning/shorts/fonds/calcul-s.webp", color: "#444340" },
  "envol": { src: "/elearning/shorts/fonds/envol.webp", thumb: "/elearning/shorts/fonds/envol-s.webp", color: "#545352" },
  "couchant": { src: "/elearning/shorts/fonds/couchant.webp", thumb: "/elearning/shorts/fonds/couchant-s.webp", color: "#3a312a" },
  "cafe": { src: "/elearning/shorts/fonds/cafe.webp", thumb: "/elearning/shorts/fonds/cafe-s.webp", color: "#423931" },
  "bibliotheque": { src: "/elearning/shorts/fonds/bibliotheque.webp", thumb: "/elearning/shorts/fonds/bibliotheque-s.webp", color: "#403430" },
  "equipe": { src: "/elearning/shorts/fonds/equipe.webp", thumb: "/elearning/shorts/fonds/equipe-s.webp", color: "#262420" },
  "sorbonne": { src: "/elearning/shorts/fonds/sorbonne.webp", thumb: "/elearning/shorts/fonds/sorbonne-s.webp", color: "#45423d", credit: "Photo : Pline — CC BY-SA 3.0, Wikimedia Commons" },
} as const satisfies Record<string, ShortBackground>;

export type ShortBackgroundKey = keyof typeof SHORT_BACKGROUNDS;
