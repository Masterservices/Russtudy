import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import type { Database } from './database.types';
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from './env';

/** Écrans de `/app` accessibles sans session. */
const PUBLIC_APP_PATHS = ['/app', '/app/connexion', '/app/inscription', '/app/mot-de-passe', '/app/auth/callback'];

function isPublicAppPath(pathname: string): boolean {
  return PUBLIC_APP_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/**
 * Rafraîchit la session Supabase à chaque requête `/app/*` (les jetons sont
 * portés par des cookies httpOnly) et redirige vers la connexion lorsqu'un
 * écran privé est demandé sans session.
 *
 * Le contrôle de rôle n'est volontairement pas fait ici : il appartient aux
 * layouts serveur de chaque espace, qui disposent du profil complet.
 */
export async function updateAppSession(request: NextRequest): Promise<NextResponse> {
  if (!isSupabaseConfigured()) return NextResponse.next();

  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }
        response = NextResponse.next({ request });
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  if (!user && !isPublicAppPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/app/connexion';
    url.search = `?suivant=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  return response;
}
