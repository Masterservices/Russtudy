import type { SchemaType } from '../types/seo';

export type PageTypeKey =
  | 'universites'
  | 'filieres'
  | 'villes'
  | 'visa'
  | 'programmes'
  | 'blog'
  | 'guides'
  | 'temoignages'
  | 'comparatif';

export interface PageTypeDefinition {
  key: PageTypeKey;
  basePath: string;
  schemaType: SchemaType;
  hasIndexPage: boolean;
}

export const PAGE_TYPES: Record<PageTypeKey, PageTypeDefinition> = {
  universites: { key: 'universites', basePath: '/universites', schemaType: 'EducationalOrganization', hasIndexPage: true },
  filieres: { key: 'filieres', basePath: '/filieres', schemaType: 'Course', hasIndexPage: true },
  villes: { key: 'villes', basePath: '/villes', schemaType: 'Place', hasIndexPage: true },
  visa: { key: 'visa', basePath: '/visa', schemaType: 'Article', hasIndexPage: true },
  programmes: { key: 'programmes', basePath: '/programmes', schemaType: 'Product', hasIndexPage: false },
  blog: { key: 'blog', basePath: '/blog', schemaType: 'Article', hasIndexPage: true },
  guides: { key: 'guides', basePath: '/guides', schemaType: 'Article', hasIndexPage: true },
  temoignages: { key: 'temoignages', basePath: '/temoignages', schemaType: 'Article', hasIndexPage: true },
  comparatif: { key: 'comparatif', basePath: '/comparatif', schemaType: 'Article', hasIndexPage: true },
};
