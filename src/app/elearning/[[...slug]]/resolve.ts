import { cache } from 'react';
import type { Lang } from '../../../i18n';
import { getPublicCatalogue, type PublicCourse } from '../../../features/app/elearning/public';

export type ElearningRoute =
  | { kind: 'catalogue'; lang: Lang; courses: PublicCourse[] }
  | { kind: 'visio'; lang: Lang }
  | { kind: 'signin'; lang: Lang }
  | { kind: 'course'; lang: Lang; courseSlug: string; course: PublicCourse }
  | { kind: 'lesson'; lang: Lang; courseSlug: string; lessonSlug: string; course: PublicCourse }
  | { kind: 'unknown' };

const LANGS: Lang[] = ['fr', 'en', 'ar', 'ru'];

function asLang(value: string | undefined): Lang {
  return LANGS.includes(value as Lang) ? (value as Lang) : 'fr';
}

/**
 * Route d'une page e-learning, et langue dans laquelle elle s'affiche.
 *
 * La langue n'est pas dans l'URL : elle suit le parcours. Un cours de
 * français destiné à des russophones se lit en russe, un cours de russe
 * destiné à des Tunisiens se lit en français. C'est `courses.ui_langs`
 * qui en décide, donc la base, et non une table de correspondance à
 * tenir à jour dans le code.
 *
 * Mémorisé pour la durée du rendu : la disposition et la page posent la
 * même question, et une seule lecture de la base y répond.
 */
export const resolveElearning = cache(async function resolveElearning(
  slug: string[] | undefined,
): Promise<ElearningRoute> {
  const segments = slug ?? [];

  if (segments.length === 0) {
    return { kind: 'catalogue', lang: 'fr', courses: await getPublicCatalogue() };
  }

  if (segments.length === 1 && segments[0] === 'visio') {
    return { kind: 'visio', lang: 'fr' };
  }

  if (segments.length === 1 && segments[0] === 'connexion') {
    return { kind: 'signin', lang: 'fr' };
  }

  if (segments.length === 1) {
    const course = (await getPublicCatalogue()).find((c) => c.slug === segments[0]);
    if (!course) return { kind: 'unknown' };
    return { kind: 'course', lang: asLang(course.uiLangs[0]), courseSlug: segments[0], course };
  }

  if (segments.length === 2) {
    const [courseSlug, lessonSlug] = segments;
    const course = (await getPublicCatalogue()).find((c) => c.slug === courseSlug);
    if (!course) return { kind: 'unknown' };
    return {
      kind: 'lesson',
      lang: asLang(course.uiLangs[0]),
      courseSlug,
      lessonSlug,
      course,
    };
  }

  return { kind: 'unknown' };
});
