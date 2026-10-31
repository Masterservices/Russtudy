/**
 * Parcours de langue présentés publiquement.
 *
 * Les slugs sont en français comme le reste du site (/filieres/…,
 * /cout-des-etudes), et désignent la langue **enseignée**, pas celle de
 * la page.
 *
 * Chaque page existe dans les quatre langues du site, mais chacune a son
 * public principal : /cours/russe est lu en français et en arabe par les
 * Tunisiens, /cours/francais est lu en russe par les russophones. Les
 * autres versions évitent un trou dans le maillage et dans les hreflang.
 */
export const COURSE_SLUGS = ['russe', 'francais'] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];

export function courseIndexFromSlug(slug: string): number {
  return COURSE_SLUGS.indexOf(slug as CourseSlug);
}

/** Identifiant du parcours correspondant dans la table `courses`. */
export const COURSE_DB_SLUG: Record<CourseSlug, string> = {
  russe: 'russe-a1',
  francais: 'francais-a1',
};
