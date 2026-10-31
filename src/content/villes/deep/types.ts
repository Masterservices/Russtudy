import type { Lang } from '../../../i18n';

/** Une section H2 du contenu profond d'une page ville. */
export interface DeepCitySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

/**
 * Contenu long et unique d'une page ville, par langue.
 *
 * Règle de sourcing : seuls des faits géographiques, climatiques et
 * historiques publics et vérifiables sont énoncés ici, ainsi que les montants
 * déjà publiés sur le site (CITY_COSTS dans src/content/budget/data.ts).
 * Aucune statistique, aucun classement et aucun effectif ne sont avancés.
 */
export interface DeepCityContent {
  intro: string;
  sections: DeepCitySection[];
}

export type DeepCityByLang = Record<Lang, DeepCityContent>;
