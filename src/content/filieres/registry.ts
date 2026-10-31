/**
 * Slugs des pages filières (/filieres/:slug). Depuis la scission de
 * pharmacie-dentaire (V6), ce registre est découplé de
 * translations[lang].programs.items : les faits par filière viennent de
 * getFiliereFacts (src/content/filieres/facts.ts).
 */
export const FILIERE_SLUGS = [
  'medecine-generale',
  'ingenierie-tech',
  'pharmacie',
  'medecine-dentaire',
  'economie-business',
] as const;

export type FiliereSlug = (typeof FILIERE_SLUGS)[number];

/**
 * Correspondance slug -> index dans translations[lang].programs.items
 * (source des faits pour les filières historiques ; les nouvelles filières
 * issues de la scission ont leurs faits dans facts.ts).
 *
 * L'entrée 2 de programs.items — l'ancienne offre combinée « Pharmacie &
 * Dentaire » — n'est plus affichée nulle part : Pharmacie et Médecine
 * dentaire tirent leurs faits de SPLIT_FACTS. Elle reste en place pour ne pas
 * décaler les index 0, 1 et 3 encore utilisés ici.
 */
export const LEGACY_PROGRAM_INDEX: Partial<Record<FiliereSlug, number>> = {
  'medecine-generale': 0,
  'ingenierie-tech': 1,
  'economie-business': 3,
};

/**
 * Ordre d'affichage des cartes filières (accueil, guide, simulateur, page
 * coûts). Les cartes ne sont plus index-alignées sur programs.items : elles
 * se construisent depuis ce tableau et getFiliereFacts, ce qui permet à
 * Pharmacie et Médecine dentaire d'avoir chacune la sienne sans décaler les
 * données de prix.
 *
 * Médecine dentaire est insérée à côté de Pharmacie plutôt qu'en fin de
 * liste : l'ordre des cartes existantes est conservé.
 */
export const PROGRAM_CARD_SLUGS: FiliereSlug[] = [
  'medecine-generale',
  'ingenierie-tech',
  'pharmacie',
  'medecine-dentaire',
  'economie-business',
];

export function filiereIndexFromSlug(slug: string): number {
  return FILIERE_SLUGS.indexOf(slug as FiliereSlug);
}
