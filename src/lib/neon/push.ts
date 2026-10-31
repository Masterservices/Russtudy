import 'server-only';

import { after } from 'next/server';
import webpush from 'web-push';
import { getPool } from './db';

/**
 * Notifications système (Web Push).
 *
 * Neon n'a pas `pg_net` : le trigger `dispatch_push_notification` dépose donc
 * une ligne dans `net.http_request_queue` (voir
 * `neon/migrations/00000000000000_supabase_compat.sql`). Le code serveur vide
 * cette file juste après chaque écriture, hors du chemin de réponse.
 */

interface QueuedRequest {
  id: number;
  body: { notificationId?: string };
}

interface NotificationRow {
  user_id: string;
  title: string;
  body: string | null;
  href: string | null;
  kind: string;
}

interface SubscriptionRow {
  endpoint: string;
  p256dh: string;
  auth: string;
}

export function isPushConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
}

/** Envoie une notification à tous les appareils de son destinataire. */
export async function sendPushForNotification(notificationId: string): Promise<{ sent: number; removed: number }> {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  if (!publicKey || !privateKey) return { sent: 0, removed: 0 };

  // Accès propriétaire : la notification est celle d'un autre utilisateur, ce
  // que la RLS interdit à juste titre à une session ordinaire.
  const pool = getPool();
  const { rows: notifications } = await pool.query<NotificationRow>(
    'select user_id, title, body, href, kind from public.notifications where id = $1',
    [notificationId],
  );
  const notification = notifications[0];
  if (!notification) return { sent: 0, removed: 0 };

  const { rows: subscriptions } = await pool.query<SubscriptionRow>(
    'select endpoint, p256dh, auth from public.push_subscriptions where user_id = $1',
    [notification.user_id],
  );
  if (subscriptions.length === 0) return { sent: 0, removed: 0 };

  webpush.setVapidDetails('mailto:contact@russieetudes.com', publicKey, privateKey);

  // Le service worker n'a pas de dictionnaire : il affiche le libellé français stocké.
  const payload = JSON.stringify({
    title: notification.title,
    body: notification.body ?? '',
    href: notification.href ?? '/app',
    tag: notification.kind,
  });

  const results = await Promise.allSettled(
    subscriptions.map((subscription) =>
      webpush.sendNotification(
        { endpoint: subscription.endpoint, keys: { p256dh: subscription.p256dh, auth: subscription.auth } },
        payload,
      ),
    ),
  );

  // Un abonnement révoqué (410) ou invalide (404) ne se répare pas : on le
  // retire pour ne pas réessayer indéfiniment.
  const stale = results.flatMap((result, index) => {
    if (result.status !== 'rejected') return [];
    const status = (result.reason as { statusCode?: number } | undefined)?.statusCode;
    return status === 404 || status === 410 ? [subscriptions[index].endpoint] : [];
  });

  if (stale.length > 0) {
    await pool.query('delete from public.push_subscriptions where endpoint = any($1::text[])', [stale]);
  }

  return { sent: results.filter((result) => result.status === 'fulfilled').length, removed: stale.length };
}

/** Vide la file : chaque demande est marquée envoyée même si l'envoi échoue, pour ne jamais boucler. */
export async function flushPushQueue(): Promise<number> {
  if (!isPushConfigured()) return 0;

  const pool = getPool();
  // `skip locked` : deux vidages simultanés ne traitent jamais la même ligne.
  const { rows } = await pool.query<QueuedRequest>(
    `update net.http_request_queue
        set sent_at = now()
      where id in (
        select id from net.http_request_queue
         where sent_at is null
         order by id
         limit 50
         for update skip locked
      )
      returning id, body`,
  );

  await Promise.allSettled(
    rows.map((row) => (row.body.notificationId ? sendPushForNotification(row.body.notificationId) : null)),
  );
  return rows.length;
}

let scheduled = false;

/**
 * Programme un vidage de la file après la réponse en cours. Sans effet hors
 * d'une requête Next.js (scripts, tests) ou sans clés VAPID.
 */
export function schedulePushFlush(): void {
  if (scheduled || !isPushConfigured()) return;
  scheduled = true;
  try {
    after(async () => {
      scheduled = false;
      try {
        await flushPushQueue();
      } catch (error) {
        console.error('[push] vidage de la file :', (error as Error).message);
      }
    });
  } catch {
    scheduled = false;
  }
}
