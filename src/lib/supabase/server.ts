import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from './env';

/**
 * Client Supabase côté serveur (Server Components, Server Actions, Route
 * Handlers). Renvoie `null` en mode démonstration.
 *
 * L'écriture des cookies échoue silencieusement dans un Server Component :
 * c'est attendu, le rafraîchissement de session est assuré par `src/proxy.ts`.
 */
export async function getServerSupabase(): Promise<SupabaseClient<Database> | null> {
  if (!isSupabaseConfigured()) return null;
  const cookieStore = await cookies();

  return createServerClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          /* Server Component en lecture seule : géré par le proxy. */
        }
      },
    },
  });
}
