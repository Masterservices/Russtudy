import { SITE } from '../config/site';
import type { PageSEO } from '../types/seo';
import { buildCanonicalUrl } from './canonical';

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

/**
 * Transforme une liste de pages (issues de src/content/**) en entrées de
 * sitemap. Appelé depuis app/sitemap.ts une fois la migration Next.js faite
 * (V6.1) — aucune page réelle ne consomme encore cette fonction.
 */
export function buildSitemapEntries(pages: PageSEO[], priority = 0.6): SitemapEntry[] {
  return pages
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: buildCanonicalUrl(page.lang, page.slug),
      lastModified: page.updatedAt,
      changeFrequency: 'monthly',
      priority,
    }));
}

export function buildHomeSitemapEntry(): SitemapEntry {
  return {
    url: SITE.domain,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0,
  };
}
