import { NextResponse } from 'next/server';
import { getAppSession } from '../../../../features/app/data/session';
import { getRealtime, liveUpdatesQuery } from '../../../../lib/neon/realtime';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Délivre au navigateur la requête scellée des annonces en direct.
 *
 * L'autorisation se joue ici : seul un administrateur connecté obtient la
 * capacité. Elle est valable 60 secondes ; le navigateur la renouvelle en
 * rappelant cette route. Elle est confidentielle (porteur) : ne jamais la
 * mettre dans une URL ni dans les journaux.
 */
export async function POST() {
  const session = await getAppSession();
  if (!session || session.demo) return NextResponse.json({ error: 'unauthenticated' }, { status: 401 });
  if (session.user.role !== 'admin') return NextResponse.json({ error: 'forbidden' }, { status: 403 });

  const realtime = getRealtime();
  if (!realtime) return NextResponse.json({ error: 'unavailable' }, { status: 503 });

  const sealed = await realtime.seal({ query: liveUpdatesQuery() });
  return NextResponse.json(sealed, { headers: { 'Cache-Control': 'no-store' } });
}
