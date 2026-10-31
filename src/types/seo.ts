export type Lang = 'fr' | 'en' | 'ar' | 'ru';

export type SchemaType =
  | 'EducationalOrganization'
  | 'Course'
  | 'Place'
  | 'Article'
  | 'FAQPage'
  | 'BreadcrumbList'
  | 'Product'
  | 'WebSite';

export interface PageSEO {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  h1: string;
  keywords?: string[];
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
  schemaType: SchemaType;
  updatedAt: string;
  noindex?: boolean;
  /** Langues réellement publiées pour cette page (défaut : les 4 du site). */
  langs?: Lang[];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
