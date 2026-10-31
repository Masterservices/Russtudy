import type { Lang } from '../../../i18n';
import type { FiliereSlug } from '../registry';
import type { DeepFiliereByLang, DeepFiliereContent } from './types';
import { PHARMACIE_DEEP } from './pharmacie';
import { MEDECINE_DENTAIRE_DEEP } from './medecineDentaire';
import { MEDECINE_GENERALE_DEEP } from './medecineGenerale';
import { INGENIERIE_TECH_DEEP } from './ingenierieTech';
import { ECONOMIE_BUSINESS_DEEP } from './economieBusiness';

export type { DeepFiliereContent, DeepSection, DeepLink } from './types';

/**
 * Contenu profond (1000-1400 mots) de chaque filière. Les cinq filières du
 * registre en disposent désormais ; le type reste partiel pour qu'une filière
 * ajoutée plus tard puisse se replier sur le gabarit court le temps que son
 * contenu soit écrit.
 */
const DEEP_CONTENT: Partial<Record<FiliereSlug, DeepFiliereByLang>> = {
  pharmacie: PHARMACIE_DEEP,
  'medecine-dentaire': MEDECINE_DENTAIRE_DEEP,
  'medecine-generale': MEDECINE_GENERALE_DEEP,
  'ingenierie-tech': INGENIERIE_TECH_DEEP,
  'economie-business': ECONOMIE_BUSINESS_DEEP,
};

export function getDeepFiliereContent(slug: FiliereSlug, lang: Lang): DeepFiliereContent | null {
  return DEEP_CONTENT[slug]?.[lang] ?? null;
}

export function hasDeepFiliereContent(slug: FiliereSlug): boolean {
  return slug in DEEP_CONTENT;
}
