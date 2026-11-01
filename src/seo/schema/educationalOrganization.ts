import { SITE } from '../../config/site';

export interface OrganizationRating {
  ratingValue: string;
  reviewCount: string;
}

export function buildEducationalOrganizationSchema(rating?: OrganizationRating) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: `${SITE.domain}/`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    areaServed: { '@type': 'Country', name: 'Tunisie' },
    address: { '@type': 'PostalAddress', addressCountry: 'TN' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone,
      availableLanguage: SITE.supportedLangs,
    },
    ...(rating ? { aggregateRating: { '@type': 'AggregateRating', ...rating } } : {}),
  };
}
