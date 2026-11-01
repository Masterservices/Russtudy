import { SITE } from '../config/site';
import type { PageSEO } from '../types/seo';
import { buildCanonicalUrl } from './canonical';

const OG_LOCALES: Record<string, string> = {
  fr: 'fr_TN',
  en: 'en_US',
  ar: 'ar_TN',
  ru: 'ru_RU',
};

export interface GeneratedOpenGraph {
  'og:site_name': string;
  'og:title': string;
  'og:description': string;
  'og:type': string;
  'og:url': string;
  'og:locale': string;
  'og:locale:alternate': string[];
  'og:image': string;
}

export function buildOpenGraph(page: PageSEO): GeneratedOpenGraph {
  return {
    'og:site_name': SITE.name,
    'og:title': page.title,
    'og:description': page.description,
    'og:type': 'website',
    'og:url': buildCanonicalUrl(page.lang, page.slug),
    'og:locale': OG_LOCALES[page.lang],
    'og:locale:alternate': SITE.supportedLangs
      .filter((lang) => lang !== page.lang)
      .map((lang) => OG_LOCALES[lang]),
    'og:image': page.ogImage ?? SITE.ogImage,
  };
}
