import type { Metadata } from 'next';
import type { PageSEO } from '../types/seo';
import { generatePageMeta } from './meta';
import { buildOpenGraph } from './opengraph';
import { buildHreflangAlternates } from './canonical';

export function buildMetadata(page: PageSEO): Metadata {
  const meta = generatePageMeta(page);
  const og = buildOpenGraph(page);

  return {
    title: meta.title,
    description: meta.description,
    keywords: page.keywords,
    robots: meta.robots,
    alternates: {
      canonical: meta.canonical,
      languages: buildHreflangAlternates(page.slug),
    },
    openGraph: {
      siteName: og['og:site_name'],
      title: og['og:title'],
      description: og['og:description'],
      type: 'website',
      url: og['og:url'],
      locale: og['og:locale'],
      images: [{ url: og['og:image'], width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: og['og:title'],
      description: og['og:description'],
      images: [og['og:image']],
    },
  };
}
