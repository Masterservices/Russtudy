import 'server-only';

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Localized, LocalizedList } from './types';

export const BUCKET = 'course-assets';

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
 * URL signée d'un objet du compartiment, ou null si le chemin est vide.
 *
 * La signature est demandée avec les droits de l'appelant : un visiteur
 * non connecté l'obtient pour une leçon d'essai et se la voit refuser
 * pour une leçon payante, sans que l'application ait à trancher.
 */
export async function signed(client: SupabaseClient, path: unknown): Promise<string | null> {
  if (typeof path !== 'string' || !path) return null;
  const { data } = await client.storage.from(BUCKET).createSignedUrl(path, SIGNED_URL_TTL);
  return data?.signedUrl ?? null;
}
