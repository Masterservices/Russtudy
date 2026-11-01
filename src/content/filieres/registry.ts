/** Ordre identique à translations[lang].programs.items dans src/i18n.ts */
export const FILIERE_SLUGS = ['medecine-generale', 'ingenierie-tech', 'pharmacie-dentaire', 'economie-business'] as const;

export type FiliereSlug = (typeof FILIERE_SLUGS)[number];

export function filiereIndexFromSlug(slug: string): number {
  return FILIERE_SLUGS.indexOf(slug as FiliereSlug);
}
