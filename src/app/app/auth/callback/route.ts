import { NextResponse, type NextRequest } from 'next/server';
import { HOME_BY_ROLE, getAppSession } from '../../../../features/app/data/session';

export const dynamic = 'force-dynamic';

/**
 * Retour de la connexion Google (Neon Auth) : la session est déjà posée par le
 * proxy d'authentification (`/api/auth`). Cet écran n'a plus qu'à renvoyer vers
 * l'espace du rôle, ou vers l'écran demandé avant la connexion.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const next = searchParams.get('suivant');

  const session = await getAppSession();
  if (!session) return NextResponse.redirect(`${origin}/app/connexion`);

  const target = next?.startsWith('/app/') && !next.startsWith('/app//') ? next : HOME_BY_ROLE[session.user.role];
  return NextResponse.redirect(`${origin}${target}`);
}
