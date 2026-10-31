import type { Lang } from '../../i18n';
import type { CityId } from '../budget/data';

/**
 * Les huit villes universitaires couvertes par le réseau RusStudy.
 * Les trois premières correspondent aux villes du simulateur de budget
 * (translations[lang].simulator.cities) ; les cinq suivantes sont les villes
 * de région qui accueillent les autres universités partenaires.
 */
export const CITY_SLUGS = ['moscou', 'saint-petersbourg', 'kazan', 'toula', 'elets', 'lipetsk', 'voronej', 'orel'] as const;

export type CitySlug = (typeof CITY_SLUGS)[number];

export function cityIndexFromSlug(slug: string): number {
  return CITY_SLUGS.indexOf(slug as CitySlug);
}

/** Nom de chaque ville dans les quatre langues du site. */
export const CITY_NAMES: Record<CitySlug, Record<Lang, string>> = {
  moscou: { fr: 'Moscou', en: 'Moscow', ar: 'موسكو', ru: 'Москва' },
  'saint-petersbourg': { fr: 'Saint-Pétersbourg', en: 'Saint Petersburg', ar: 'سان بطرسبورغ', ru: 'Санкт-Петербург' },
  kazan: { fr: 'Kazan', en: 'Kazan', ar: 'قازان', ru: 'Казань' },
  toula: { fr: 'Toula', en: 'Tula', ar: 'تولا', ru: 'Тула' },
  elets: { fr: 'Elets', en: 'Yelets', ar: 'يلتس', ru: 'Елец' },
  lipetsk: { fr: 'Lipetsk', en: 'Lipetsk', ar: 'ليبتسك', ru: 'Липецк' },
  voronej: { fr: 'Voronej', en: 'Voronezh', ar: 'فورونيج', ru: 'Воронеж' },
  orel: { fr: 'Orel', en: 'Oryol', ar: 'أوريول', ru: 'Орёл' },
};

/** Indices dans UNIVERSITY_SLUGS des universités partenaires situées dans chaque ville */
export const CITY_UNIVERSITY_INDICES: Record<CitySlug, number[]> = {
  moscou: [0, 2, 3, 4, 6],
  'saint-petersbourg': [1],
  kazan: [5],
  toula: [7],
  elets: [8],
  lipetsk: [9],
  voronej: [10],
  orel: [11],
};

/** Correspondance avec l'identifiant de ville utilisé pour les coûts de la vie */
export const CITY_BUDGET_ID: Record<CitySlug, CityId> = {
  moscou: 'moscow',
  'saint-petersbourg': 'spb',
  kazan: 'kazan',
  toula: 'tula',
  elets: 'yelets',
  lipetsk: 'lipetsk',
  voronej: 'voronezh',
  orel: 'orel',
};

/** Ville d'implantation d'une université partenaire (index dans UNIVERSITY_SLUGS). */
export function citySlugForUniversity(universityIndex: number): CitySlug | undefined {
  return (Object.keys(CITY_UNIVERSITY_INDICES) as CitySlug[]).find((slug) =>
    CITY_UNIVERSITY_INDICES[slug].includes(universityIndex)
  );
}
