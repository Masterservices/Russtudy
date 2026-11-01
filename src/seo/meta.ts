import type { PageSEO } from '../types/seo';
import { buildCanonicalUrl } from './canonical';

export interface GeneratedMeta {
  title: string;
  description: string;
  canonical: string;
  robots: string;
}

export function generatePageMeta(page: PageSEO): GeneratedMeta {
  return {
    title: page.title,
    description: page.description,
    canonical: buildCanonicalUrl(page.lang, page.slug),
    robots: page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
  };
}
