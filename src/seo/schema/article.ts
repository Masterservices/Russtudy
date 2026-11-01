import { SITE } from '../../config/site';
import type { Article } from '../../types/content';

export function buildArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { '@type': 'Organization', name: article.author ?? SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
  };
}
