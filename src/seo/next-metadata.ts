import type { Metadata } from 'next';
import type { PageSEO } from '../types/seo';
import { SITE } from '../config/site';
import { generatePageMeta } from './meta';
import { buildOpenGraph } from './opengraph';
import { buildHreflangAlternates } from './canonical';

export function buildMetadata(page: PageSEO): Metadata {
  const meta = generatePageMeta(page);
  const og = buildOpenGraph(page);

  return {
    metadataBase: new URL(SITE.domain),
    title: meta.title,
    description: meta.description,
    keywords: page.keywords,
    robots: meta.robots,
    alternates: {
      canonical: meta.canonical,
      languages: buildHreflangAlternates(page.slug, page.langs),
    },
    openGraph: {
      siteName: og['og:site_name'],
      title: og['og:title'],
      description: og['og:description'],
      type: 'website',
      url: og['og:url'],
      locale: og['og:locale'],
      images: [
        {
          url: og['og:image'],
          width: page.ogImageWidth ?? 1200,
          height: page.ogImageHeight ?? 630,
          alt: page.ogImageAlt ?? page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: og['og:title'],
      description: og['og:description'],
      images: [og['og:image']],
    },
  };
}
