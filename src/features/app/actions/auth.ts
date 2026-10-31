'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getServerSupabase } from '../../../lib/supabase/server';
import { isSupabaseConfigured } from '../../../lib/supabase/env';
import { DEMO_ROLE_COOKIE, HOME_BY_ROLE } from '../data/session';
import type { AppRole } from '../types';

export interface AuthFormState {
  error?: string;
  /** Renseigné par la demande de réinitialisation de mot de passe. */
  sent?: boolean;
}

/**
 * Traduit une erreur GoTrue en clé de message.
 *
 * `over_email_send_rate_limit` mérite son propre libellé : sans SMTP dédié,
 * le service d'e-mails intégré à Supabase est limité à quelques envois par
 * heure, et un « réessayez » générique laisserait l'utilisateur boucler.
 */
function mapAuthError(code: string | undefined, message: string): string {
  // Échec réseau : la requête n'a jamais atteint Supabase. Le distinguer
  // évite de faire chercher une cause côté compte alors que rien n'est parti.
  if (message.includes('fetch') || message.includes('network') || code === 'unexpected_failure') {
    return 'unreachable';
  }
  if (code === 'over_email_send_rate_limit' || code === 'over_request_rate_limit') return 'rate_limited';
  if (code === 'user_already_exists' || message.includes('already')) return 'email_taken';
  if (code === 'email_address_invalid') return 'invalid_email';
  if (code === 'weak_password') return 'weak_password';
  if (code === 'signup_disabled') return 'signup_disabled';
  return 'signup_failed';
}

/** Empêche la redirection ouverte : seules les routes internes sont acceptées. */
function safeNext(value: FormDataEntryValue | null): string | null {
  const raw = typeof value === 'string' ? value : '';
  return raw.startsWith('/app/') && !raw.startsWith('/app//') ? raw : null;
}

export async function signIn(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const next = safeNext(formData.get('suivant'));

  if (!email || !password) return { error: 'missing_credentials' };

  if (!isSupabaseConfigured()) {
    // Mode démonstration : aucune authentification réelle, on ouvre l'espace étudiant.
    redirect(next ?? HOME_BY_ROLE.student);
  }

  const supabase = await getServerSupabase();
  if (!supabase) return { error: 'unavailable' };

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('[app][signin]', error.status, error.code, error.message);
    if (error.code === 'email_not_confirmed') return { error: 'email_not_confirmed' };
    if (error.code === 'over_request_rate_limit') return { error: 'rate_limited' };
    return { error: 'invalid_credentials' };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let role: AppRole = 'student';
  if (user) {
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
    if (profile?.role) role = profile.role;
  }

  revalidatePath('/app', 'layout');
  redirect(next ?? HOME_BY_ROLE[role]);
}

export async function signUp(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const fullName = String(formData.get('fullName') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!fullName || !email) return { error: 'missing_fields' };
  if (password.length < 8) return { error: 'weak_password' };

  if (!isSupabaseConfigured()) redirect(HOME_BY_ROLE.student);

  const supabase = await getServerSupabase();
  if (!supabase) return { error: 'unavailable' };

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName, lang: 'fr' } },
  });

  if (error) {
    // La cause réelle reste dans les logs serveur : l'utilisateur, lui, ne
    // doit voir qu'un message actionnable.
    console.error('[app][signup]', error.status, error.code, error.message);
    return { error: mapAuthError(error.code, error.message) };
  }

  revalidatePath('/app', 'layout');

  // Quand la confirmation d'adresse est active, l'inscription ne crée pas de
  // session : rediriger vers l'espace étudiant renverrait aussitôt vers la
  // connexion. On affiche donc l'invitation à consulter sa boîte mail.
  if (!data.session) return { sent: true };

  redirect(HOME_BY_ROLE.student);
}

export async function requestPasswordReset(_prev: AuthFormState, formData: FormData): Promise<AuthFormState & { sent?: boolean }> {
  const email = String(formData.get('email') ?? '').trim();
  if (!email) return { error: 'missing_fields' };

  const supabase = await getServerSupabase();
  // Réponse volontairement identique qu'un compte existe ou non : ne jamais
  // révéler quelles adresses sont enregistrées.
  if (supabase) {
    const origin = process.env.APP_URL ?? 'https://www.russieetudes.com';
    await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${origin}/app/connexion` });
  }

  return { sent: true };
}

export async function signOut(): Promise<void> {
  const supabase = await getServerSupabase();
  if (supabase) await supabase.auth.signOut();

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
  if (isSupabaseConfigured()) return;
  const store = await cookies();
  store.set(DEMO_ROLE_COOKIE, role, { path: '/app', maxAge: 60 * 60 * 24 });
  revalidatePath('/app', 'layout');
  redirect(HOME_BY_ROLE[role]);
}
