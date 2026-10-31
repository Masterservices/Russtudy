import { SITE } from '../../config/site';
import type { Program } from '../../types/content';

/** Offre de scolarité rattachée au cours (prix « à partir de », en euros). */
export interface CourseOffer {
  /** Montant numérique seul, ex. "3200". */
  price: string;
  /** Devise ISO 4217, ex. "EUR". */
  priceCurrency: string;
  /** URL canonique de la page du cours (auto-référente). */
  url: string;
}

export function buildCourseSchema(program: Program, offer?: CourseOffer) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.name,
    description: program.description,
    provider: { '@type': 'EducationalOrganization', name: SITE.name, sameAs: `${SITE.domain}/` },
    ...(offer
      ? {
          offers: {
            '@type': 'Offer',
            category: 'Tuition',
            price: offer.price,
            priceCurrency: offer.priceCurrency,
            availability: 'https://schema.org/InStock',
            url: offer.url,
          },
        }
      : {}),
  };
}
