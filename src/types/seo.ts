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
  schemaType: SchemaType;
  updatedAt: string;
  noindex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
