import type { SectionImageKey } from '../images/registry';

/** Ordre identique aux entrées GUIDES dans src/content/guides/copy.ts */
export const GUIDE_SLUGS = [
  'documents-et-legalisation',
  'logement-etudiant',
  'sante-et-assurance',
  'vie-quotidienne',
  'banque-et-argent',
  'transport-et-mobilite',
  'culture-et-integration',
] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];

export function guideIndexFromSlug(slug: string): number {
  return GUIDE_SLUGS.indexOf(slug as GuideSlug);
}

/** Photo de chaque guide, prise dans le registre d'images des sections. */
export const GUIDE_IMAGE_KEYS: Record<GuideSlug, SectionImageKey> = {
  'documents-et-legalisation': 'dossier-inscription',
  'logement-etudiant': 'logement-etudiant',
  'sante-et-assurance': 'sante-assurance',
  'vie-quotidienne': 'vie-quotidienne',
  'banque-et-argent': 'banque-argent',
  'transport-et-mobilite': 'transport-mobilite',
  'culture-et-integration': 'culture-integration',
};
