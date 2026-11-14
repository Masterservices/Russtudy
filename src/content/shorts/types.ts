import type { Lang } from '../../i18n';
import type { Localized } from '../../features/app/elearning/types';
import type { ShortBackground, ShortBackgroundKey } from './fonds.generated';

/**
 * Shorts de langue.
 *
 * Un short tient en un écran et en une phrase : on l'entend dans la
 * voix du cours, on la lit, on en retient une expression. Le fil défile
 * comme un fil de vidéos courtes, mais chaque écran demande quelque
 * chose — écouter, comprendre, redire — au lieu de seulement passer.
 */

export type ShortThemeId =
  | 'saluer'
  | 'converser'
  | 'se-presenter'
  | 'politesse'
  | 'comprendre'
  | 'acheter'
  | 'heure'
  | 'cafe'
  | 'dialogue';

/** Réplique telle qu'elle est écrite dans le contenu. */
export interface ShortLineSource {
  /** Texte dans la langue enseignée, tel qu'il est prononcé. */
  text: string;
  translation: Localized;
}

/** Short tel qu'il est écrit dans le contenu, toutes langues confondues. */
export interface ShortSource {
  /** Identifiant stable : nom du fichier audio et ancre du lien de partage. */
  id: string;
  theme: ShortThemeId;
  /** Une réplique pour une expression, plusieurs pour un dialogue. */
  lines: ShortLineSource[];
  /** Expression à retenir : sous-chaîne exacte d'une des répliques. */
  key: string;
  keyMeaning: Localized;
  /** Quand et comment l'employer, en une phrase. */
  note: Localized;
  /** Prononciation approchée, celle des diapositives de la leçon. */
  pron?: string;
  bg: ShortBackgroundKey;
  /** Leçon du parcours qui enseigne l'expression. */
  lesson?: string;
}

export interface ShortDeckSource {
  courseSlug: string;
  /** Langue enseignée : celle de la voix et des répliques. */
  targetLang: Lang;
  /** Langues d'interface du parcours, la première par défaut. */
  uiLangs: Lang[];
  level: string;
  /** Titre du parcours, pour les pages servies sans la base. */
  title: Localized;
  shorts: ShortSource[];
}

/** Réplique résolue : une langue d'interface, et ses bornes dans l'audio. */
export interface ShortLine {
  text: string;
  translation: string;
  /** Début et fin de la parole, en secondes. */
  start: number;
  end: number;
}

/**
 * Short résolu dans une langue d'interface.
 *
 * C'est la seule forme envoyée au navigateur : les traductions des
 * autres langues restent sur le serveur.
 */
export interface Short {
  id: string;
  theme: ShortThemeId;
  themeLabel: string;
  lines: ShortLine[];
  key: string;
  keyMeaning: string;
  note: string;
  pron: string | null;
  audio: string;
  /** Durée du fichier audio, en secondes. */
  duration: number;
  bg: ShortBackground;
  /** Slug de la leçon qui enseigne l'expression, si elle existe. */
  lesson: string | null;
}
