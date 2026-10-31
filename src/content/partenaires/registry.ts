import type { PartnerProfile } from './types';
import { TSSR } from './tssr';

/**
 * Ajouter un partenaire = ajouter une fiche ici et son module de contenu.
 * Aucune modification du gabarit n'est nécessaire.
 */
export const PARTNERS: PartnerProfile[] = [TSSR];

export const PARTNER_SLUGS = PARTNERS.map((p) => p.slug);

export function getPartner(slug: string): PartnerProfile | undefined {
  return PARTNERS.find((p) => p.slug === slug);
}

/** Partenaires dont la page est publiée : seuls ceux-ci entrent au sitemap. */
export function publishedPartners(): PartnerProfile[] {
  return PARTNERS.filter((p) => p.published);
}
