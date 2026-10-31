import 'server-only';

import { isStorageConfigured } from '../../../lib/neon/env';
import { COURSE_ASSETS_PREFIX, signedDownloadUrl } from '../../../lib/neon/storage';
import type { Localized, LocalizedList } from './types';

/**
 * Durée de validité d'une URL de média.
 *
 * Assez longue pour qu'une leçon se suive sans coupure, assez courte
 * pour qu'un lien copié ne circule pas : un parcours payant ne doit pas
 * se rediffuser par simple partage d'adresse.
 */
export const SIGNED_URL_TTL = 60 * 60;

export type Row = Record<string, unknown>;

export function asLocalized(value: unknown): Localized {
  return (value && typeof value === 'object' ? value : {}) as Localized;
}

export function asLocalizedList(value: unknown): LocalizedList {
  return (value && typeof value === 'object' ? value : {}) as LocalizedList;
}

/**
 * URL signée d'un média de cours, ou null si le chemin est vide.
 *
 * Le stockage objet ne connaît pas la RLS. La protection tient donc au fait
 * que les chemins ne viennent que de lignes lues au nom de l'appelant : un
 * visiteur non connecté obtient le média d'une leçon d'essai, mais la base ne
 * lui montre jamais le chemin d'une leçon payante, donc rien n'est signé.
 * Ne jamais appeler cette fonction avec un chemin reçu du navigateur.
 */
export async function signed(path: unknown): Promise<string | null> {
  if (typeof path !== 'string' || !path || !isStorageConfigured()) return null;
  return signedDownloadUrl(`${COURSE_ASSETS_PREFIX}${path}`, SIGNED_URL_TTL);
}
