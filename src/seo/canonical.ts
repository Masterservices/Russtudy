import { SITE } from '../config/site';
import type { Lang } from '../types/seo';

export function buildCanonicalUrl(lang: Lang, path: string): string {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const langPrefix = lang === SITE.defaultLang ? '' : `/${lang}`;
  const suffix = cleanPath ? `/${cleanPath}` : '';
  if (!langPrefix && !suffix) return `${SITE.domain}/`;
  return `${SITE.domain}${langPrefix}${suffix}`;
}

export function buildHreflangAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const lang of SITE.supportedLangs) {
    alternates[lang] = buildCanonicalUrl(lang, path);
  }
  alternates['x-default'] = buildCanonicalUrl(SITE.defaultLang, path);
  return alternates;
}
