import { notFound } from 'next/navigation';
import type { Lang } from '../../i18n';
import { UNIVERSITY_SLUGS, universityIndexFromSlug } from '../../content/universites/registry';
import { FILIERE_SLUGS, filiereIndexFromSlug } from '../../content/filieres/registry';
import { CITY_SLUGS, cityIndexFromSlug } from '../../content/villes/registry';
import { PARTNER_SLUGS } from '../../content/partenaires/registry';
import { COURSE_SLUGS, type CourseSlug } from '../../content/cours/registry';
import { BLOG_SLUGS, blogIndexFromSlug } from '../../content/blog/registry';
import { GUIDE_SLUGS, guideIndexFromSlug } from '../../content/guides/registry';
import { COMPARISON_SLUGS, comparisonIndexFromSlug } from '../../content/comparatif/countries';

const ROUTED_LANGS: Lang[] = ['en', 'ar', 'ru'];
const PAGE_ROOTS = ['universites', 'filieres', 'comparatif', 'visa', 'cout-des-etudes', 'bourses', 'accompagnement', 'villes', 'guide', 'guides', 'faq', 'blog', 'politique-de-confidentialite', 'cookies', 'mentions-legales', 'conditions-generales-utilisation', 'conditions-generales-vente', 'partenaires', 'cours'];

export type Route =
  | { type: 'home'; lang: Lang }
  | { type: 'universites-index'; lang: Lang }
  | { type: 'universites-detail'; lang: Lang; slug: string; index: number }
  | { type: 'filieres-index'; lang: Lang }
  | { type: 'filieres-detail'; lang: Lang; slug: string; index: number }
  | { type: 'comparatif'; lang: Lang }
  | { type: 'comparatif-detail'; lang: Lang; slug: string; index: number }
  | { type: 'visa'; lang: Lang }
  | { type: 'cout-des-etudes'; lang: Lang }
  | { type: 'bourses'; lang: Lang }
  | { type: 'accompagnement'; lang: Lang }
  | { type: 'villes-index'; lang: Lang }
  | { type: 'villes-detail'; lang: Lang; slug: string; index: number }
  | { type: 'guide'; lang: Lang }
  | { type: 'guides-index'; lang: Lang }
  | { type: 'guides-detail'; lang: Lang; slug: string; index: number }
  | { type: 'faq'; lang: Lang }
  | { type: 'blog-index'; lang: Lang }
  | { type: 'blog-detail'; lang: Lang; slug: string; index: number }
  | { type: 'privacy'; lang: Lang }
  | { type: 'cookies'; lang: Lang }
  | { type: 'legal-notice'; lang: Lang }
  | { type: 'terms-of-use'; lang: Lang }
  | { type: 'terms-of-sale'; lang: Lang }
  | { type: 'partner'; lang: Lang; slug: string }
  | { type: 'cours-index'; lang: Lang }
  | { type: 'cours-detail'; lang: Lang; slug: CourseSlug };

/**
 * `/` -> accueil fr ; `/en|ar|ru` -> accueil traduit ;
 * `/universites`, `/universites/:slug`, `/filieres`, `/filieres/:slug`,
 * `/visa`, `/cout-des-etudes`, `/villes`, `/villes/:slug`, `/guide`, `/faq`,
 * `/blog`, `/blog/:slug`
 * (et leurs equivalents `/en|ar|ru/...`) -> pages de contenu ; toute autre
 * route -> 404.
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
    if (rest.length === 2) {
      const index = comparisonIndexFromSlug(rest[1]);
      if (index === -1) notFound();
      return { type: 'comparatif-detail', lang, slug: rest[1], index };
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

  if (rest[0] === 'bourses') {
    if (rest.length === 1) return { type: 'bourses', lang };
    notFound();
  }

  if (rest[0] === 'accompagnement') {
    if (rest.length === 1) return { type: 'accompagnement', lang };
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

  if (rest[0] === 'guide') {
    if (rest.length === 1) return { type: 'guide', lang };
    notFound();
  }

  if (rest[0] === 'guides') {
    if (rest.length === 1) return { type: 'guides-index', lang };
    if (rest.length === 2) {
      const index = guideIndexFromSlug(rest[1]);
      if (index === -1) notFound();
      return { type: 'guides-detail', lang, slug: rest[1], index };
    }
    notFound();
  }

  if (rest[0] === 'faq') {
    if (rest.length === 1) return { type: 'faq', lang };
    notFound();
  }

  if (rest[0] === 'blog') {
    if (rest.length === 1) return { type: 'blog-index', lang };
    if (rest.length === 2) {
      const index = blogIndexFromSlug(rest[1]);
      if (index === -1) notFound();
      return { type: 'blog-detail', lang, slug: rest[1], index };
    }
    notFound();
  }

  if (rest[0] === 'politique-de-confidentialite') {
    if (rest.length === 1) return { type: 'privacy', lang };
    notFound();
  }

  if (rest[0] === 'cookies') {
    if (rest.length === 1) return { type: 'cookies', lang };
    notFound();
  }

  if (rest[0] === 'cours') {
    if (rest.length === 1) return { type: 'cours-index', lang };
    if (rest.length === 2 && COURSE_SLUGS.includes(rest[1] as CourseSlug)) {
      return { type: 'cours-detail', lang, slug: rest[1] as CourseSlug };
    }
    notFound();
  }

  // Pages partenaires : français et arabe uniquement (audience d'acquisition
  // tunisienne). Les autres langues renvoient un 404 plutôt qu'une page vide.
  if (rest[0] === 'partenaires') {
    if (rest.length === 2 && (lang === 'fr' || lang === 'ar') && PARTNER_SLUGS.includes(rest[1])) {
      return { type: 'partner', lang, slug: rest[1] };
    }
    notFound();
  }

  if (rest[0] === 'mentions-legales') {
    if (rest.length === 1) return { type: 'legal-notice', lang };
    notFound();
  }

  if (rest[0] === 'conditions-generales-utilisation') {
    if (rest.length === 1) return { type: 'terms-of-use', lang };
    notFound();
  }

  if (rest[0] === 'conditions-generales-vente') {
    if (rest.length === 1) return { type: 'terms-of-sale', lang };
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
    params.push({ lang: [...prefix, 'visa'] });
    params.push({ lang: [...prefix, 'cout-des-etudes'] });
    params.push({ lang: [...prefix, 'bourses'] });
    params.push({ lang: [...prefix, 'accompagnement'] });
    params.push({ lang: [...prefix, 'villes'] });
    params.push({ lang: [...prefix, 'guide'] });
    params.push({ lang: [...prefix, 'guides'] });
    params.push({ lang: [...prefix, 'faq'] });
    params.push({ lang: [...prefix, 'blog'] });
    params.push({ lang: [...prefix, 'politique-de-confidentialite'] });
    params.push({ lang: [...prefix, 'cookies'] });
    params.push({ lang: [...prefix, 'mentions-legales'] });
    params.push({ lang: [...prefix, 'conditions-generales-utilisation'] });
    params.push({ lang: [...prefix, 'conditions-generales-vente'] });
    params.push({ lang: [...prefix, 'cours'] });
    for (const slug of COURSE_SLUGS) params.push({ lang: [...prefix, 'cours', slug] });
    if (l === null || l === 'ar') {
      for (const slug of PARTNER_SLUGS) params.push({ lang: [...prefix, 'partenaires', slug] });
    }
    for (const slug of UNIVERSITY_SLUGS) params.push({ lang: [...prefix, 'universites', slug] });
    for (const slug of FILIERE_SLUGS) params.push({ lang: [...prefix, 'filieres', slug] });
    for (const slug of CITY_SLUGS) params.push({ lang: [...prefix, 'villes', slug] });
    for (const slug of BLOG_SLUGS) params.push({ lang: [...prefix, 'blog', slug] });
    for (const slug of GUIDE_SLUGS) params.push({ lang: [...prefix, 'guides', slug] });
    for (const slug of COMPARISON_SLUGS) params.push({ lang: [...prefix, 'comparatif', slug] });
  }
  return params;
}
