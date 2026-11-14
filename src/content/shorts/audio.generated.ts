// Fichier généré par scripts/elearning/shorts/decouper.py — ne pas modifier à la main.

export interface ShortAudio {
  /** Chemin public du MP3. */
  src: string;
  /** Durée du fichier, en secondes. */
  duration: number;
  /** Début et fin de la parole de chaque réplique, en secondes. */
  lines: [number, number][];
}

/** Extraits audio des shorts, par « cours/identifiant ». */
export const SHORT_AUDIO: Record<string, ShortAudio> = {
  "francais-a1/au-revoir": { src: "/elearning/shorts/francais-a1/au-revoir.mp3", duration: 1.855, lines: [[0.06, 1.66]] },
  "francais-a1/bonjour": { src: "/elearning/shorts/francais-a1/bonjour.mp3", duration: 0.784, lines: [[0.0, 0.59]] },
  "francais-a1/bonsoir": { src: "/elearning/shorts/francais-a1/bonsoir.mp3", duration: 0.888, lines: [[0.06, 0.69]] },
  "francais-a1/c-est-combien": { src: "/elearning/shorts/francais-a1/c-est-combien.mp3", duration: 0.993, lines: [[0.06, 0.8]] },
  "francais-a1/ca-va-bien": { src: "/elearning/shorts/francais-a1/ca-va-bien.mp3", duration: 2.038, lines: [[0.06, 1.84]] },
  "francais-a1/comment-allez-vous": { src: "/elearning/shorts/francais-a1/comment-allez-vous.mp3", duration: 0.967, lines: [[0.0, 0.78]] },
  "francais-a1/de-rien": { src: "/elearning/shorts/francais-a1/de-rien.mp3", duration: 0.653, lines: [[0.06, 0.45]] },
  "francais-a1/dialogue-cafe": { src: "/elearning/shorts/francais-a1/dialogue-cafe.mp3", duration: 7.654, lines: [[0.06, 0.69], [1.23, 2.99], [3.59, 4.33], [4.93, 5.58], [6.18, 7.45]] },
  "francais-a1/dialogue-rencontre": { src: "/elearning/shorts/francais-a1/dialogue-rencontre.mp3", duration: 9.43, lines: [[0.0, 0.59], [1.13, 1.91], [2.51, 4.29], [4.89, 5.83], [6.43, 7.02], [7.62, 9.22]] },
  "francais-a1/enchante": { src: "/elearning/shorts/francais-a1/enchante.mp3", duration: 0.862, lines: [[0.06, 0.65]] },
  "francais-a1/excusez-moi": { src: "/elearning/shorts/francais-a1/excusez-moi.mp3", duration: 0.993, lines: [[0.0, 0.79]] },
  "francais-a1/je-m-appelle": { src: "/elearning/shorts/francais-a1/je-m-appelle.mp3", duration: 1.202, lines: [[0.06, 1.0]] },
  "francais-a1/je-ne-comprends-pas": { src: "/elearning/shorts/francais-a1/je-ne-comprends-pas.mp3", duration: 1.149, lines: [[0.06, 0.95]] },
  "francais-a1/je-suis-etudiant": { src: "/elearning/shorts/francais-a1/je-suis-etudiant.mp3", duration: 1.228, lines: [[0.06, 1.02]] },
  "francais-a1/je-viens-de": { src: "/elearning/shorts/francais-a1/je-viens-de.mp3", duration: 1.254, lines: [[0.0, 1.06]] },
  "francais-a1/je-voudrais-un-cafe": { src: "/elearning/shorts/francais-a1/je-voudrais-un-cafe.mp3", duration: 1.959, lines: [[0.0, 1.76]] },
  "francais-a1/l-addition": { src: "/elearning/shorts/francais-a1/l-addition.mp3", duration: 1.541, lines: [[0.06, 1.33]] },
  "francais-a1/merci-beaucoup": { src: "/elearning/shorts/francais-a1/merci-beaucoup.mp3", duration: 0.914, lines: [[0.06, 0.71]] },
  "francais-a1/pouvez-vous-repeter": { src: "/elearning/shorts/francais-a1/pouvez-vous-repeter.mp3", duration: 1.802, lines: [[0.06, 1.61]] },
  "francais-a1/s-il-vous-plait": { src: "/elearning/shorts/francais-a1/s-il-vous-plait.mp3", duration: 0.914, lines: [[0.06, 0.71]] },
  "francais-a1/salut": { src: "/elearning/shorts/francais-a1/salut.mp3", duration: 0.653, lines: [[0.06, 0.45]] },
  "russe-a1/da-pozhaluysta": { src: "/elearning/shorts/russe-a1/da-pozhaluysta.mp3", duration: 1.045, lines: [[0.06, 0.85]] },
  "russe-a1/dialogue-rencontre": { src: "/elearning/shorts/russe-a1/dialogue-rencontre.mp3", duration: 7.445, lines: [[0.0, 0.71], [1.08, 1.55], [2.01, 2.95], [3.32, 4.0], [4.34, 5.24], [5.54, 6.32], [6.54, 7.24]] },
  "russe-a1/dialogue-rue": { src: "/elearning/shorts/russe-a1/dialogue-rue.mp3", duration: 6.034, lines: [[0.0, 1.33], [1.6, 2.51], [2.66, 3.22], [3.47, 4.4], [4.61, 5.01], [5.28, 5.83]] },
  "russe-a1/do-svidaniya": { src: "/elearning/shorts/russe-a1/do-svidaniya.mp3", duration: 0.94, lines: [[0.06, 0.73]] },
  "russe-a1/do-zavtra": { src: "/elearning/shorts/russe-a1/do-zavtra.mp3", duration: 0.758, lines: [[0.06, 0.56]] },
  "russe-a1/dobroe-utro": { src: "/elearning/shorts/russe-a1/dobroe-utro.mp3", duration: 0.914, lines: [[0.0, 0.77]] },
  "russe-a1/dobryy-den": { src: "/elearning/shorts/russe-a1/dobryy-den.mp3", duration: 0.862, lines: [[0.06, 0.73]] },
  "russe-a1/dobryy-vecher": { src: "/elearning/shorts/russe-a1/dobryy-vecher.mp3", duration: 0.94, lines: [[0.06, 0.75]] },
  "russe-a1/dorogo": { src: "/elearning/shorts/russe-a1/dorogo.mp3", duration: 0.679, lines: [[0.0, 0.47]] },
  "russe-a1/izvinite": { src: "/elearning/shorts/russe-a1/izvinite.mp3", duration: 0.705, lines: [[0.06, 0.59]] },
  "russe-a1/kak-dela": { src: "/elearning/shorts/russe-a1/kak-dela.mp3", duration: 0.731, lines: [[0.036, 0.536]] },
  "russe-a1/kak-vas-zovut": { src: "/elearning/shorts/russe-a1/kak-vas-zovut.mp3", duration: 0.888, lines: [[0.036, 0.706]] },
  "russe-a1/khorosho-spasibo": { src: "/elearning/shorts/russe-a1/khorosho-spasibo.mp3", duration: 1.097, lines: [[0.04, 0.91]] },
  "russe-a1/medlenno": { src: "/elearning/shorts/russe-a1/medlenno.mp3", duration: 1.332, lines: [[0.06, 1.14]] },
  "russe-a1/menya-zovut": { src: "/elearning/shorts/russe-a1/menya-zovut.mp3", duration: 1.176, lines: [[0.0, 1.01]] },
  "russe-a1/net-spasibo": { src: "/elearning/shorts/russe-a1/net-spasibo.mp3", duration: 0.914, lines: [[0.06, 0.71]] },
  "russe-a1/ochen-khorosho": { src: "/elearning/shorts/russe-a1/ochen-khorosho.mp3", duration: 0.94, lines: [[0.06, 0.79]] },
  "russe-a1/ochen-priyatno": { src: "/elearning/shorts/russe-a1/ochen-priyatno.mp3", duration: 1.149, lines: [[0.06, 0.94]] },
  "russe-a1/poka": { src: "/elearning/shorts/russe-a1/poka.mp3", duration: 0.549, lines: [[0.06, 0.35]] },
  "russe-a1/povtorite": { src: "/elearning/shorts/russe-a1/povtorite.mp3", duration: 1.28, lines: [[0.04, 1.08]] },
  "russe-a1/pozhaluysta": { src: "/elearning/shorts/russe-a1/pozhaluysta.mp3", duration: 0.731, lines: [[0.06, 0.6]] },
  "russe-a1/privet": { src: "/elearning/shorts/russe-a1/privet.mp3", duration: 1.045, lines: [[0.06, 0.85]] },
  "russe-a1/seychas-dva-chasa": { src: "/elearning/shorts/russe-a1/seychas-dva-chasa.mp3", duration: 1.254, lines: [[0.06, 1.05]] },
  "russe-a1/skolko-eto-stoit": { src: "/elearning/shorts/russe-a1/skolko-eto-stoit.mp3", duration: 1.149, lines: [[0.0, 1.02]] },
  "russe-a1/skolko-vremeni": { src: "/elearning/shorts/russe-a1/skolko-vremeni.mp3", duration: 1.593, lines: [[0.06, 1.39]] },
  "russe-a1/spasibo": { src: "/elearning/shorts/russe-a1/spasibo.mp3", duration: 0.731, lines: [[0.0, 0.6]] },
  "russe-a1/ya-iz-tunisa": { src: "/elearning/shorts/russe-a1/ya-iz-tunisa.mp3", duration: 1.045, lines: [[0.0, 0.84]] },
  "russe-a1/ya-student": { src: "/elearning/shorts/russe-a1/ya-student.mp3", duration: 0.784, lines: [[0.06, 0.62]] },
  "russe-a1/zdravstvuyte": { src: "/elearning/shorts/russe-a1/zdravstvuyte.mp3", duration: 0.914, lines: [[0.0, 0.71]] },
};
