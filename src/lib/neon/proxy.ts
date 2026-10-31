import { NextResponse, type NextRequest } from 'next/server';
import { getAuth } from './auth';
import { isNeonConfigured } from './env';

/** Écrans de `/app` accessibles sans session. */
const PUBLIC_APP_PATHS = ['/app', '/app/connexion', '/app/inscription', '/app/mot-de-passe', '/app/auth/callback'];
const LOGIN_PATH = '/app/connexion';
/** Paramètre ajouté par Neon Auth au retour d'un fournisseur OAuth (Google). */
const OAUTH_VERIFIER_PARAM = 'neon_auth_session_verifier';

function isPublicAppPath(pathname: string): boolean {
  return PUBLIC_APP_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/**
 * Garde d'accès de `/app/*` : valide (et rafraîchit si besoin) la session Neon
 * Auth portée par des cookies httpOnly, et renvoie vers la connexion lorsqu'un
 * écran privé est demandé sans session.
 *
 * Le contrôle de rôle n'est volontairement pas fait ici : il appartient aux
 * layouts serveur de chaque espace, qui disposent du profil complet.
 */
export async function updateAppSession(request: NextRequest): Promise<NextResponse> {
  const auth = getAuth();
  if (!auth || !isNeonConfigured()) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Retour de Google : l'URL porte un jeton à échanger contre le cookie de
  // session. Cet échange est fait par le middleware Neon, qui doit donc voir
  // la requête même sur une page publique (`/app/auth/callback`) — sinon la
  // session est créée chez Neon mais le navigateur ne la reçoit jamais.
  const returningFromOAuth = request.nextUrl.searchParams.has(OAUTH_VERIFIER_PARAM);
  if (isPublicAppPath(pathname) && !returningFromOAuth) return NextResponse.next();

  // Les routes publiques sont déjà écartées ci-dessus : le middleware Neon ne
  // reçoit que des écrans privés (sinon `/app` ouvrirait tous ses sous-chemins).
  const response = (await auth.middleware({ loginUrl: LOGIN_PATH })(request)) ?? NextResponse.next();

  const location = response.headers.get('location');
  if (location) {
    const target = new URL(location, request.url);
    if (target.pathname === LOGIN_PATH) {
      // Reprendre l'écran demandé après la connexion.
      target.search = `?suivant=${encodeURIComponent(pathname)}`;
      const redirect = NextResponse.redirect(target);
      for (const cookie of response.cookies.getAll()) redirect.cookies.set(cookie);
      return redirect;
    }
  }

  return response as NextResponse;
}
