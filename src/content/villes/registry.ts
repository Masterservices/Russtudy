import type { CityId } from '../budget/data';

/** Ordre identique à translations[lang].simulator.cities dans src/i18n.ts */
export const CITY_SLUGS = ['moscou', 'saint-petersbourg', 'kazan'] as const;

export type CitySlug = (typeof CITY_SLUGS)[number];

export function cityIndexFromSlug(slug: string): number {
  return CITY_SLUGS.indexOf(slug as CitySlug);
}

/** Indices dans UNIVERSITY_SLUGS des universités partenaires situées dans chaque ville */
export const CITY_UNIVERSITY_INDICES: Record<CitySlug, number[]> = {
  moscou: [0, 2, 3, 4, 6],
  'saint-petersbourg': [1],
  kazan: [5],
};

/** Correspondance avec l'identifiant de ville utilisé par le simulateur de budget */
export const CITY_BUDGET_ID: Record<CitySlug, CityId> = {
  moscou: 'moscow',
  'saint-petersbourg': 'spb',
  kazan: 'kazan',
};
