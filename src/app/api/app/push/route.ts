import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../../../lib/supabase/database.types';
import { SUPABASE_URL } from '../../../../lib/supabase/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Porteur d'envoi des notifications système.
 *
 * Appelé par la base à chaque insertion dans `notifications` (pg_net), il
 * retrouve les appareils du destinataire et leur adresse l'alerte. Le texte
 * n'est pas traduit ici : le service worker n'a pas de dictionnaire, il
 * affiche donc le libellé français stocké dans la notification.
 */
export async function POST(request: Request) {
  const secret = process.env.PUSH_HOOK_SECRET;
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const url = SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Le secret d'abord : lui seul autorise à en savoir plus sur la
  // configuration. Sans lui, la réponse reste muette.
  if (!secret) return NextResponse.json({ skipped: 'not_configured' }, { status: 200 });
  if (request.headers.get('x-push-secret') !== secret) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }

  // Diagnostic réservé à l'appelant légitime : les noms manquants, jamais les
  // valeurs. Chercher à l'aveugle laquelle des quatre variables fait défaut
  // coûte un redéploiement par tentative.
  const missing = [
    !publicKey && 'NEXT_PUBLIC_VAPID_PUBLIC_KEY',
    !privateKey && 'VAPID_PRIVATE_KEY',
    !url && 'NEXT_PUBLIC_SUPABASE_URL',
    !serviceRoleKey && 'SUPABASE_SERVICE_ROLE_KEY',
  ].filter((name): name is string => Boolean(name));

  if (missing.length > 0 || !url || !serviceRoleKey || !publicKey || !privateKey) {
    return NextResponse.json({ skipped: 'not_configured', missing }, { status: 200 });
  }

  const { notificationId } = (await request.json().catch(() => ({}))) as { notificationId?: string };
  if (!notificationId) return NextResponse.json({ error: 'missing_id' }, { status: 400 });

  // Clé de service : la route doit lire la notification d'un autre utilisateur
  // et ses abonnements, ce que la RLS interdit à juste titre au client.
  const db = createClient<Database>(url, serviceRoleKey, { auth: { persistSession: false } });

  const { data: notification } = await db
    .from('notifications')
    .select('*')
    .eq('id', notificationId)
    .maybeSingle();

  if (!notification) return NextResponse.json({ error: 'not_found' }, { status: 404 });

  const { data: subscriptions } = await db
    .from('push_subscriptions')
    .select('*')
    .eq('user_id', notification.user_id);

  if (!subscriptions || subscriptions.length === 0) {
    return NextResponse.json({ sent: 0 });
  }

  webpush.setVapidDetails('mailto:contact@russieetudes.com', publicKey, privateKey);

  const payload = JSON.stringify({
    title: notification.title,
    body: notification.body ?? '',
    href: notification.href ?? '/app',
    tag: notification.kind,
  });

  const results = await Promise.allSettled(
    subscriptions.map((subscription) =>
      webpush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: { p256dh: subscription.p256dh, auth: subscription.auth },
        },
        payload,
      ),
    ),
  );

  // Un abonnement révoqué (410) ou invalide (404) ne se répare pas : on le
  // retire pour ne pas réessayer indéfiniment à chaque notification.
  const stale = results.flatMap((result, index) => {
    if (result.status !== 'rejected') return [];
    const status = (result.reason as { statusCode?: number } | undefined)?.statusCode;
    return status === 404 || status === 410 ? [subscriptions[index].endpoint] : [];
  });

  if (stale.length > 0) {
    await db.from('push_subscriptions').delete().in('endpoint', stale);
  }

  return NextResponse.json({
    sent: results.filter((result) => result.status === 'fulfilled').length,
    removed: stale.length,
  });
}
