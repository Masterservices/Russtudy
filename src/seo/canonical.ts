import { SITE } from '../config/site';
import type { Lang } from '../types/seo';

export function buildCanonicalUrl(lang: Lang, path: string): string {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const langPrefix = lang === SITE.defaultLang ? '' : `/${lang}`;
  const suffix = cleanPath ? `/${cleanPath}` : '';
  // Pas de "/" final : Next.js (trailingSlash: false) normalise déjà ainsi
  // les <link rel="canonical"> générés — le sitemap doit produire exactement
  // la même URL pour éviter tout écart canonical/sitemap sur l'accueil.
  return `${SITE.domain}${langPrefix}${suffix}`;
}

export function buildHreflangAlternates(path: string, langs?: readonly Lang[]): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const lang of langs ?? SITE.supportedLangs) {
    alternates[lang] = buildCanonicalUrl(lang, path);
  }
  alternates['x-default'] = buildCanonicalUrl(SITE.defaultLang, path);
  return alternates;
}
