/** Ordre identique à translations[lang].universities.items dans src/i18n.ts */
export const UNIVERSITY_SLUGS = [
  'universite-detat-de-moscou',
  'polytechnique-de-saint-petersbourg',
  'universite-de-medecine-pirogov',
  'universite-rudn',
  'universite-technique-bauman',
  'universite-de-kazan',
  'institut-stroganov-dart',
  'universite-detat-de-toula',
  'universite-detat-elets-bounine',
  'universite-technique-detat-de-lipetsk',
  'universite-detat-de-voronej',
  'universite-detat-tourgueniev-dorel',
] as const;

export type UniversitySlug = (typeof UNIVERSITY_SLUGS)[number];

export function universityIndexFromSlug(slug: string): number {
  return UNIVERSITY_SLUGS.indexOf(slug as UniversitySlug);
}
