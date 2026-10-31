import 'server-only';

import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAuthUser, getServerDb } from '../../../lib/neon/server';
import { isNeonConfigured } from '../../../lib/neon/env';
import type { AppRole, AppSession, AppUser } from '../types';
import { DEMO_ADMIN, DEMO_CONSULTANT, DEMO_STUDENT } from './demo';

export const DEMO_ROLE_COOKIE = 'rs_app_demo_role';

/** Écran d'accueil de chaque espace, utilisé pour les redirections après connexion. */
export const HOME_BY_ROLE: Record<AppRole, string> = {
  student: '/app/etudiant',
  consultant: '/app/consultant',
  admin: '/app/admin',
};

function demoUser(role: AppRole): AppUser {
  if (role === 'admin') return DEMO_ADMIN;
  if (role === 'consultant') return DEMO_CONSULTANT;
  return DEMO_STUDENT;
}

function parseRole(value: string | undefined): AppRole {
  return value === 'admin' || value === 'consultant' ? value : 'student';
}

/**
 * Session applicative courante.
 *
 * Sans Neon configuré, une session de démonstration est renvoyée ; le rôle
 * simulé est porté par un cookie, ce qui permet de parcourir les trois espaces.
 *
 * Mémorisée pour la durée du rendu : chaque layout traversé et la page
 * appelaient `requireRole`, soit deux allers-retours vers la base à chaque
 * fois — jusqu'à six sur une fiche imbriquée. Ils n'en font plus qu'un.
 */
export const getAppSession = cache(async function getAppSession(): Promise<AppSession | null> {
  if (!isNeonConfigured()) {
    const store = await cookies();
    return { user: demoUser(parseRole(store.get(DEMO_ROLE_COOKIE)?.value)), demo: true };
  }

  const user = await getAuthUser();
  if (!user) return null;

  const db = await getServerDb();
  if (!db) return null;

  const { data: profile } = await db
    .from('profiles')
    .select('id, role, full_name, email, phone, avatar_url, lang, city')
    .eq('id', user.id)
    .maybeSingle();

  if (!profile) return null;

  return {
    demo: false,
    user: {
      id: profile.id,
      role: profile.role,
      fullName: profile.full_name || user.name || user.email || '',
      email: profile.email || user.email || '',
      phone: profile.phone,
      avatarUrl: profile.avatar_url,
      lang: profile.lang,
      city: profile.city,
    },
  };
});

/**
 * Garde d'accès des layouts d'espace : exige une session et l'un des rôles
 * attendus. Un utilisateur connecté au mauvais endroit est renvoyé vers son
 * propre espace plutôt que vers une page d'erreur.
 */
export async function requireRole(allowed: AppRole[]): Promise<AppSession> {
  const session = await getAppSession();
  if (!session) redirect('/app/connexion');
  if (!allowed.includes(session.user.role)) redirect(HOME_BY_ROLE[session.user.role]);
  return session;
}
