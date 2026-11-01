import { notFound } from 'next/navigation';
import type { Lang } from '../../i18n';
import { UNIVERSITY_SLUGS, universityIndexFromSlug } from '../../content/universites/registry';
import { FILIERE_SLUGS, filiereIndexFromSlug } from '../../content/filieres/registry';
import { CITY_SLUGS, cityIndexFromSlug } from '../../content/villes/registry';

const ROUTED_LANGS: Lang[] = ['en', 'ar', 'ru'];
const PAGE_ROOTS = ['universites', 'filieres', 'comparatif', 'villes', 'visa', 'cout-des-etudes', 'faq'];

export type Route =
  | { type: 'home'; lang: Lang }
  | { type: 'universites-index'; lang: Lang }
  | { type: 'universites-detail'; lang: Lang; slug: string; index: number }
  | { type: 'filieres-index'; lang: Lang }
  | { type: 'filieres-detail'; lang: Lang; slug: string; index: number }
  | { type: 'comparatif'; lang: Lang }
  | { type: 'villes-index'; lang: Lang }
  | { type: 'villes-detail'; lang: Lang; slug: string; index: number }
  | { type: 'visa'; lang: Lang }
  | { type: 'cout-des-etudes'; lang: Lang }
  | { type: 'faq'; lang: Lang };

/**
 * `/` -> accueil fr ; `/en|ar|ru` -> accueil traduit ;
 * `/universites`, `/universites/:slug`, `/filieres`, `/filieres/:slug`,
 * `/villes`, `/villes/:slug`, `/visa`, `/cout-des-etudes`, `/faq` (et leurs
 * equivalents `/en|ar|ru/...`) -> pages de contenu ; toute autre route -> 404.
 */
export function resolveRoute(segments: string[] | undefined): Route {
  const parts = segments ?? [];
  let lang: Lang = 'fr';
  let rest = parts;

  if (parts.length > 0 && (ROUTED_LANGS as string[]).includes(parts[0])) {
    lang = parts[0] as Lang;
    rest = parts.slice(1);
  } else if (parts.length > 0 && !PAGE_ROOTS.includes(parts[0])) {
    notFound();
  }

  if (rest.length === 0) return { type: 'home', lang };

  if (rest[0] === 'universites') {
    if (rest.length === 1) return { type: 'universites-index', lang };
    if (rest.length === 2) {
      const index = universityIndexFromSlug(rest[1]);
      if (index === -1) notFound();
      return { type: 'universites-detail', lang, slug: rest[1], index };
    }
    notFound();
  }

  if (rest[0] === 'filieres') {
    if (rest.length === 1) return { type: 'filieres-index', lang };
    if (rest.length === 2) {
      const index = filiereIndexFromSlug(rest[1]);
      if (index === -1) notFound();
      return { type: 'filieres-detail', lang, slug: rest[1], index };
    }
    notFound();
  }

  if (rest[0] === 'comparatif') {
    if (rest.length === 1) return { type: 'comparatif', lang };
    notFound();
  }

  if (rest[0] === 'villes') {
    if (rest.length === 1) return { type: 'villes-index', lang };
    if (rest.length === 2) {
      const index = cityIndexFromSlug(rest[1]);
      if (index === -1) notFound();
      return { type: 'villes-detail', lang, slug: rest[1], index };
    }
    notFound();
  }

  if (rest[0] === 'visa') {
    if (rest.length === 1) return { type: 'visa', lang };
    notFound();
  }

  if (rest[0] === 'cout-des-etudes') {
    if (rest.length === 1) return { type: 'cout-des-etudes', lang };
    notFound();
  }

  if (rest[0] === 'faq') {
    if (rest.length === 1) return { type: 'faq', lang };
    notFound();
  }

  notFound();
}

export function allRouteParams(): { lang: string[] }[] {
  const langs: (Lang | null)[] = [null, 'en', 'ar', 'ru'];
  const params: { lang: string[] }[] = [];

  for (const l of langs) {
    const prefix = l ? [l] : [];
    params.push({ lang: prefix });
    params.push({ lang: [...prefix, 'universites'] });
    params.push({ lang: [...prefix, 'filieres'] });
    params.push({ lang: [...prefix, 'comparatif'] });
    params.push({ lang: [...prefix, 'villes'] });
    params.push({ lang: [...prefix, 'visa'] });
    params.push({ lang: [...prefix, 'cout-des-etudes'] });
    params.push({ lang: [...prefix, 'faq'] });
    for (const slug of UNIVERSITY_SLUGS) params.push({ lang: [...prefix, 'universites', slug] });
    for (const slug of FILIERE_SLUGS) params.push({ lang: [...prefix, 'filieres', slug] });
    for (const slug of CITY_SLUGS) params.push({ lang: [...prefix, 'villes', slug] });
  }
  return params;
}
