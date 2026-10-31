import { SITE } from '../../config/site';
import type { Article } from '../../types/content';
import { buildCanonicalUrl } from '../canonical';

/**
 * JSON-LD Article. `image`, `mainEntityOfPage` et `inLanguage` sont attendus
 * par Google pour les résultats enrichis d'articles : l'image vient de la
 * photo de la page (article.ogImage), l'URL canonique est dérivée du slug pour
 * rester alignée avec le <link rel="canonical"> et le sitemap.
 */
export function buildArticleSchema(article: Article) {
  const url = buildCanonicalUrl(article.lang, article.slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: article.lang,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(article.ogImage ? { image: [article.ogImage] } : {}),
    ...(article.tags && article.tags.length > 0 ? { keywords: article.tags.join(', ') } : {}),
    author: { '@type': 'Organization', name: article.author ?? SITE.name },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.domain}/assets/img/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
    },
  };
}
