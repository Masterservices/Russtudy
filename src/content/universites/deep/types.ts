import type { Lang } from '../../../i18n';

/** Une section H2 du contenu profond d'une fiche université. */
export interface DeepUniversitySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

/**
 * Carte d'identité factuelle de l'établissement, affichée en tableau.
 * Chaque champ est optionnel : un champ absent n'est pas rendu, plutôt que
 * d'être comblé par une approximation.
 */
export interface UniversityIdentity {
  officialNameLabel: string;
  officialName: string;
  transliterationLabel: string;
  transliteration: string;
  foundedLabel: string;
  /** Absent lorsque la date n'a pas pu être vérifiée auprès d'une source institutionnelle. */
  founded?: string;
  statusLabel: string;
  status: string;
}

/**
 * Contenu long et unique d'une fiche université, par langue.
 *
 * Règle de sourcing : seuls les éléments confirmés par une source
 * institutionnelle sont publiés — dénomination officielle, année de
 * fondation, statut, faits historiques et anciens élèves notoires. Les
 * informations non vérifiées (filières réellement ouvertes aux
 * internationaux, langue exacte d'enseignement, disponibilité effective
 * d'une place en résidence) ne sont jamais affirmées : elles figurent dans
 * la section de vérification, propre à chaque établissement.
 */
export interface DeepUniversityContent {
  identity: UniversityIdentity;
  sections: DeepUniversitySection[];
}

export type DeepUniversityByLang = Record<Lang, DeepUniversityContent>;
