'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getAuth } from '../../../lib/neon/auth';
import { isNeonConfigured } from '../../../lib/neon/env';
import { createDb } from '../../../lib/neon/query';
import { DEMO_ROLE_COOKIE, HOME_BY_ROLE } from '../data/session';
import type { AppRole } from '../types';

export interface AuthFormState {
  error?: string;
  /** Renseigné par la demande de réinitialisation de mot de passe et l'inscription à confirmer. */
  sent?: boolean;
  /** Renseigné quand le nouveau mot de passe est enregistré. */
  done?: boolean;
}

/** Forme commune des erreurs renvoyées par Neon Auth (Better Auth). */
interface AuthError {
  message?: string;
  code?: string;
  status?: number;
}

function isNetworkFailure(error: AuthError): boolean {
  return Boolean(error.code?.startsWith('NETWORK_')) || (error.message ?? '').toLowerCase().includes('fetch failed');
}

/**
 * Traduit une erreur d'inscription en clé de message.
 *
 * L'échec réseau mérite son propre libellé : il évite de faire chercher une
 * cause côté compte alors que la requête n'a jamais atteint le service.
 */
function mapSignUpError(error: AuthError): string {
  if (isNetworkFailure(error)) return 'unreachable';
  if (error.status === 429) return 'rate_limited';
  if (error.code === 'USER_ALREADY_EXISTS' || error.code === 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL') return 'email_taken';
  if (error.code === 'INVALID_EMAIL') return 'invalid_email';
  if (error.code === 'PASSWORD_TOO_SHORT' || error.code === 'PASSWORD_TOO_LONG') return 'weak_password';
  if (error.code === 'EMAIL_AND_PASSWORD_SIGN_UP_IS_NOT_ENABLED') return 'signup_disabled';
  return 'signup_failed';
}

/** Empêche la redirection ouverte : seules les routes internes sont acceptées. */
function safeNext(value: FormDataEntryValue | null): string | null {
  const raw = typeof value === 'string' ? value : '';
  return raw.startsWith('/app/') && !raw.startsWith('/app//') ? raw : null;
}

/** Origine publique du site, pour les liens envoyés par e-mail. */
async function siteOrigin(): Promise<string> {
  if (process.env.APP_URL) return process.env.APP_URL;
  const list = await headers();
  const host = list.get('x-forwarded-host') ?? list.get('host');
  const proto = list.get('x-forwarded-proto') ?? 'https';
  return host ? `${proto}://${host}` : 'https://www.russieetudes.com';
}

export async function signIn(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const next = safeNext(formData.get('suivant'));

  if (!email || !password) return { error: 'missing_credentials' };

  if (!isNeonConfigured()) {
    // Mode démonstration : aucune authentification réelle, on ouvre l'espace étudiant.
    redirect(next ?? HOME_BY_ROLE.student);
  }

  const auth = getAuth();
  if (!auth) return { error: 'unavailable' };

  const { data, error } = await auth.signIn.email({ email, password });
  if (error || !data?.user) {
    const failure = (error ?? {}) as AuthError;
    console.error('[app][signin]', failure.status, failure.code, failure.message);
    if (isNetworkFailure(failure)) return { error: 'unreachable' };
    if (failure.code === 'EMAIL_NOT_VERIFIED') return { error: 'email_not_confirmed' };
    if (failure.status === 429) return { error: 'rate_limited' };
    return { error: 'invalid_credentials' };
  }

  // Les cookies posés par la connexion ne sont pas encore visibles dans cette
  // requête : l'identifiant vient de la réponse, pas d'une relecture de session.
  let role: AppRole = 'student';
  const { data: profile } = await createDb({ kind: 'user', userId: data.user.id })
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .maybeSingle();
  if (profile?.role) role = profile.role;

  revalidatePath('/app', 'layout');
  redirect(next ?? HOME_BY_ROLE[role]);
}

export async function signUp(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const fullName = String(formData.get('fullName') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!fullName || !email) return { error: 'missing_fields' };
  if (password.length < 8) return { error: 'weak_password' };

  if (!isNeonConfigured()) redirect(HOME_BY_ROLE.student);

  const auth = getAuth();
  if (!auth) return { error: 'unavailable' };

  const { data, error } = await auth.signUp.email({ email, password, name: fullName });

  if (error) {
    // La cause réelle reste dans les logs serveur : l'utilisateur, lui, ne
    // doit voir qu'un message actionnable.
    const failure = error as AuthError;
    console.error('[app][signup]', failure.status, failure.code, failure.message);
    return { error: mapSignUpError(failure) };
  }

  revalidatePath('/app', 'layout');

  // Quand la confirmation d'adresse est active, l'inscription ne crée pas de
  // session : rediriger vers l'espace étudiant renverrait aussitôt vers la
  // connexion. On affiche donc l'invitation à consulter sa boîte mail.
  if (!data?.token) return { sent: true };

  redirect(HOME_BY_ROLE.student);
}

export async function requestPasswordReset(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const email = String(formData.get('email') ?? '').trim();
  if (!email) return { error: 'missing_fields' };

  const auth = getAuth();
  // Réponse volontairement identique qu'un compte existe ou non : ne jamais
  // révéler quelles adresses sont enregistrées.
  if (auth) {
    const origin = await siteOrigin();
    const { error } = await auth.requestPasswordReset({ email, redirectTo: `${origin}/app/mot-de-passe/nouveau` });
    if (error) console.error('[app][reset]', (error as AuthError).status, (error as AuthError).code);
  }

  return { sent: true };
}

/** Enregistre le nouveau mot de passe à partir du jeton reçu par e-mail. */
export async function resetPassword(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const token = String(formData.get('token') ?? '');
  const password = String(formData.get('password') ?? '');

  if (!token) return { error: 'invalid_link' };
  if (password.length < 8) return { error: 'weak_password' };

  const auth = getAuth();
  if (!auth) return { error: 'unavailable' };

  const { error } = await auth.resetPassword({ newPassword: password, token });
  if (error) {
    const failure = error as AuthError;
    console.error('[app][reset-password]', failure.status, failure.code, failure.message);
    if (isNetworkFailure(failure)) return { error: 'unreachable' };
    if (failure.code === 'INVALID_TOKEN') return { error: 'invalid_link' };
    if (failure.code === 'PASSWORD_TOO_SHORT') return { error: 'weak_password' };
    return { error: 'signup_failed' };
  }

  return { done: true };
}

export async function signOut(): Promise<void> {
  const auth = getAuth();
  if (auth) await auth.signOut({});

  const store = await cookies();
  store.delete(DEMO_ROLE_COOKIE);

  revalidatePath('/app', 'layout');
  redirect('/app/connexion');
}

/**
 * Bascule d'espace en mode démonstration uniquement : sans base connectée, le
 * rôle simulé est mémorisé dans un cookie pour parcourir les trois espaces.
 */
export async function setDemoRole(role: AppRole): Promise<void> {
  if (isNeonConfigured()) return;
  const store = await cookies();
  store.set(DEMO_ROLE_COOKIE, role, { path: '/app', maxAge: 60 * 60 * 24 });
  revalidatePath('/app', 'layout');
  redirect(HOME_BY_ROLE[role]);
}
