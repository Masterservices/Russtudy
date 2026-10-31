'use client';

import { useEffect, useState } from 'react';
import { getBrowserSupabase } from '../../../../lib/supabase/client';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../../../../lib/supabase/env';

/**
 * Connexion via Google (OAuth Supabase).
 *
 * La disponibilité du fournisseur est vérifiée **depuis le navigateur**,
 * et non côté serveur. Deux raisons :
 *
 *  - c'est le navigateur qui exécutera ensuite la redirection OAuth ; tester
 *    ailleurs revient à supposer que les deux environnements voient la même
 *    chose, ce qui s'est révélé faux en production ;
 *  - le rendu serveur n'a alors plus à joindre Supabase pour afficher un
 *    écran de connexion, ce qui le rend insensible aux aléas de sortie
 *    réseau de l'hébergeur.
 *
 * Sans ce garde-fou, un fournisseur désactivé enverrait l'utilisateur sur
 * une page d'erreur brute (« Unsupported provider: provider is not enabled »).
 */
export default function GoogleButton({
  label,
  dividerLabel,
  next,
}: {
  label: string;
  dividerLabel: string;
  next?: string;
}) {
  const [pending, setPending] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const supabase = getBrowserSupabase();

  useEffect(() => {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;
    let cancelled = false;

    fetch(`${SUPABASE_URL}/auth/v1/settings`, { headers: { apikey: SUPABASE_ANON_KEY } })
      .then((response) => (response.ok ? response.json() : null))
      .then((settings: { external?: Record<string, boolean> } | null) => {
        if (!cancelled && settings?.external?.google === true) setEnabled(true);
      })
      .catch(() => {
        /* Fournisseur indéterminable : ne pas proposer un bouton qui échouerait. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Le séparateur « ou continuer avec » disparaît avec le bouton : sans lui,
  // il resterait suspendu au-dessus du vide.
  if (!supabase || !enabled) return null;

  async function signInWithGoogle() {
    if (!supabase) return;
    setPending(true);
    const target = new URL('/app/auth/callback', window.location.origin);
    if (next) target.searchParams.set('suivant', next);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: target.toString(),
        // `select_account` force l'affichage du sélecteur de comptes Google.
        // Sans ce paramètre, Google réutilise silencieusement la dernière
        // session du navigateur : sur un téléphone où plusieurs comptes
        // cohabitent, l'utilisateur se retrouve connecté avec le mauvais
        // sans jamais avoir eu le choix.
        queryParams: { prompt: 'select_account' },
      },
    });
    if (error) setPending(false);
  }

  return (
    <>
      <div className="my-5 flex items-center gap-3 text-[12px] text-[var(--rs-muted)]">
        <span className="flex-1 h-px bg-[var(--rs-line)]" />
        {dividerLabel}
        <span className="flex-1 h-px bg-[var(--rs-line)]" />
      </div>
      <button type="button" onClick={signInWithGoogle} disabled={pending} className="rs-btn rs-btn-secondary">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.6z" />
          <path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3C3.7 21.4 7.6 24 12 24z" />
          <path fill="#FBBC05" d="M5.6 14.7a7.2 7.2 0 0 1 0-4.6v-3H1.8a12 12 0 0 0 0 10.7l3.8-3z" />
          <path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.2 15.1 0 12 0 7.6 0 3.7 2.6 1.8 6.1l3.8 3C6.5 6.7 9 4.8 12 4.8z" />
        </svg>
        {label}
      </button>
    </>
  );
}
