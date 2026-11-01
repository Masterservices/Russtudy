import type { MetadataRoute } from 'next';
import { SITE } from '../config/site';
import { buildCanonicalUrl } from '../seo/canonical';
import { UNIVERSITY_SLUGS } from '../content/universites/registry';
import { FILIERE_SLUGS } from '../content/filieres/registry';
import { CITY_SLUGS } from '../content/villes/registry';

const PATHS: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: 'universites', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'filieres', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'comparatif', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'villes', changeFrequency: 'monthly', priority: 0.7 },
  { path: 'visa', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'cout-des-etudes', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'faq', changeFrequency: 'monthly', priority: 0.7 },
  ...UNIVERSITY_SLUGS.map((slug) => ({ path: `universites/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ...FILIERE_SLUGS.map((slug) => ({ path: `filieres/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ...CITY_SLUGS.map((slug) => ({ path: `villes/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const lang of SITE.supportedLangs) {
    for (const { path, changeFrequency, priority } of PATHS) {
      entries.push({
        url: buildCanonicalUrl(lang, path),
        lastModified: '2026-07-08',
        changeFrequency,
        priority,
      });
    }
  }
  return entries;
}
