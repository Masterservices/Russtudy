import type { Lang } from '../../../i18n';
import type { CitySlug } from '../registry';
import type { DeepCityByLang, DeepCityContent } from './types';
import { MOSCOU_DEEP, SAINT_PETERSBOURG_DEEP, KAZAN_DEEP } from './grandes-villes';
import { TOULA_DEEP, ELETS_DEEP, LIPETSK_DEEP, VORONEJ_DEEP, OREL_DEEP } from './villes-de-region';

export type { DeepCityContent, DeepCitySection } from './types';

/**
 * Contenu profond des pages villes. Les pages ne portaient qu'un chapô, un
 * tableau de coûts et deux questions de FAQ : trop peu pour être indexées
 * durablement. L'absence d'entrée ici reste un repli valide.
 */
const DEEP_CONTENT: Record<CitySlug, DeepCityByLang> = {
  moscou: MOSCOU_DEEP,
  'saint-petersbourg': SAINT_PETERSBOURG_DEEP,
  kazan: KAZAN_DEEP,
  toula: TOULA_DEEP,
  elets: ELETS_DEEP,
  lipetsk: LIPETSK_DEEP,
  voronej: VORONEJ_DEEP,
  orel: OREL_DEEP,
};

export function getDeepCityContent(slug: CitySlug, lang: Lang): DeepCityContent | null {
  return DEEP_CONTENT[slug]?.[lang] ?? null;
}
