import { NextResponse } from 'next/server';
import { isNeonConfigured } from '../../../../lib/neon/env';
import { flushPushQueue, isPushConfigured, sendPushForNotification } from '../../../../lib/neon/push';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Porteur d'envoi des notifications système, appelable à la main.
 *
 * En fonctionnement normal, la file `net.http_request_queue` est vidée par le
 * code serveur juste après chaque écriture (voir `lib/neon/push.ts`). Cette
 * route reste le point d'entrée protégé par secret pour relancer un envoi :
 * avec `notificationId`, elle notifie ce destinataire ; sans, elle vide la file.
 *
 * Le texte n'est pas traduit ici : le service worker n'a pas de dictionnaire, il
 * affiche donc le libellé français stocké dans la notification.
 */
export async function POST(request: Request) {
  const secret = process.env.PUSH_HOOK_SECRET;

  // Le secret d'abord : lui seul autorise à en savoir plus sur la
  // configuration. Sans lui, la réponse reste muette.
  if (!secret) return NextResponse.json({ skipped: 'not_configured' }, { status: 200 });
  if (request.headers.get('x-push-secret') !== secret) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }

  // Diagnostic réservé à l'appelant légitime : les noms manquants, jamais les
  // valeurs. Chercher à l'aveugle laquelle des variables fait défaut coûte un
  // redéploiement par tentative.
  const missing = [
    !process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && 'NEXT_PUBLIC_VAPID_PUBLIC_KEY',
    !process.env.VAPID_PRIVATE_KEY && 'VAPID_PRIVATE_KEY',
    !process.env.DATABASE_URL && 'DATABASE_URL',
  ].filter((name): name is string => Boolean(name));

  if (missing.length > 0 || !isPushConfigured() || !isNeonConfigured()) {
    return NextResponse.json({ skipped: 'not_configured', missing }, { status: 200 });
  }

  const { notificationId } = (await request.json().catch(() => ({}))) as { notificationId?: string };

  if (!notificationId) {
    return NextResponse.json({ flushed: await flushPushQueue() });
  }

  const result = await sendPushForNotification(notificationId);
  return NextResponse.json(result);
}
