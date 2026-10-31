import { NextResponse, type NextRequest } from 'next/server';
import { getServerSupabase } from '../../../../lib/supabase/server';

export const dynamic = 'force-dynamic';

/**
 * Retour OAuth Supabase : échange le code d'autorisation contre une session
 * (cookies httpOnly) puis renvoie vers l'écran demandé.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get('code');
  const next = searchParams.get('suivant');
  const target = next?.startsWith('/app/') ? next : '/app/etudiant';

  if (!code) return NextResponse.redirect(`${origin}/app/connexion`);

  const supabase = await getServerSupabase();
  if (!supabase) return NextResponse.redirect(`${origin}/app/connexion`);

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(`${origin}/app/connexion`);

  return NextResponse.redirect(`${origin}${target}`);
}
