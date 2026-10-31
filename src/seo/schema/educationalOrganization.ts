import { SITE } from '../../config/site';

// Ne jamais réintroduire d'aggregateRating/Review sur ce schéma : noter notre
// propre Organization sur notre propre site est un avis "self-serving" interdit
// par les consignes Google (voir CLAUDE.md, section SEO).
export function buildEducationalOrganizationSchema() {
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
  };
}
