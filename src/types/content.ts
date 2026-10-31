import type { PageSEO } from './seo';

export interface University extends PageSEO {
  name: string;
  city: string;
  rank?: string;
  programs: string[];
  tuitionFrom?: string;
}

export interface Program extends PageSEO {
  name: string;
  duration: string;
  priceFrom: string;
  language: string[];
}

export interface City extends PageSEO {
  name: string;
  region?: string;
  costOfLivingFrom?: string;
}

export interface VisaGuide extends PageSEO {
  name: string;
}

export interface Article extends PageSEO {
  excerpt: string;
  publishedAt: string;
  author?: string;
  tags?: string[];
}

export interface Testimonial extends PageSEO {
  name: string;
  role: string;
  text: string;
  stars: number;
}

export interface Comparison extends PageSEO {
  subject: string;
}
