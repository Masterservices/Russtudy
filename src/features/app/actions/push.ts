'use server';

import { getServerDb } from '../../../lib/neon/server';
import { getAppSession } from '../data/session';

interface SubscriptionInput {
  endpoint: string;
  p256dh: string;
  auth: string;
  userAgent: string;
}

/**
 * Enregistre l'abonnement Web Push de cet appareil pour l'utilisateur connecté.
 * L'identifiant du propriétaire vient de la session, jamais du navigateur.
 */
export async function savePushSubscription(input: SubscriptionInput): Promise<{ ok: boolean }> {
  const session = await getAppSession();
  if (!session || session.demo) return { ok: false };
  if (!input.endpoint.startsWith('https://') || !input.p256dh || !input.auth) return { ok: false };

  const db = await getServerDb();
  if (!db) return { ok: false };

  const { error } = await db.from('push_subscriptions').upsert(
    {
      user_id: session.user.id,
      endpoint: input.endpoint,
      p256dh: input.p256dh,
      auth: input.auth,
      user_agent: input.userAgent.slice(0, 300),
    },
    { onConflict: 'endpoint' },
  );

  return { ok: !error };
}

/** Retire l'abonnement de cet appareil (la RLS limite la suppression aux siens). */
export async function removePushSubscription(endpoint: string): Promise<{ ok: boolean }> {
  const session = await getAppSession();
  if (!session || session.demo) return { ok: false };

  const db = await getServerDb();
  if (!db) return { ok: false };

  const { error } = await db.from('push_subscriptions').delete().eq('endpoint', endpoint);
  return { ok: !error };
}
