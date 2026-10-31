import 'server-only';

import { cache } from 'react';
import { getAuth } from './auth';
import { isNeonConfigured } from './env';
import { createDb, type Db } from './query';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

/**
 * Utilisateur Neon Auth de la requête en cours, ou `null` sans session (ou en
 * mode démonstration). Mémorisé pour la durée du rendu.
 */
export const getAuthUser = cache(async function getAuthUser(): Promise<AuthUser | null> {
  const auth = getAuth();
  if (!auth) return null;

  const { data, error } = await auth.getSession({ query: {} });
  if (error) console.error('[neon][session]', error.status, error.code, error.message);
  const user = data?.user;
  if (!user) return null;

  return { id: user.id, email: user.email, name: user.name ?? '' };
});

/**
 * Accès à la base au nom de l'utilisateur connecté (rôle `authenticated`, RLS
 * appliquée), ou au rôle `anon` sans session. Renvoie `null` en mode
 * démonstration. Même contrat que l'ancien `getServerSupabase()`.
 */
export const getServerDb = cache(async function getServerDb(): Promise<Db | null> {
  if (!isNeonConfigured()) return null;
  const user = await getAuthUser();
  return createDb(user ? { kind: 'user', userId: user.id } : { kind: 'anon' });
});

/**
 * Accès propriétaire, RLS contournée. Réservé au code serveur de confiance
 * (envoi des notifications, import) : jamais pour répondre à un visiteur.
 */
export function getAdminDb(): Db | null {
  if (!isNeonConfigured()) return null;
  return createDb({ kind: 'admin' });
}
