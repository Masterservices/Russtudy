'use client';

import { useEffect, useState } from 'react';
import { BellRing, BellOff } from 'lucide-react';
import { getBrowserSupabase } from '../../../lib/supabase/client';
import type { AppDictionary } from '../i18n';

type State = 'loading' | 'unsupported' | 'blocked' | 'off' | 'on' | 'busy';

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? '';

/** Base64url → Uint8Array, format attendu par `pushManager.subscribe`. */
function decodeKey(value: string): Uint8Array {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(padded.padEnd(padded.length + ((4 - (padded.length % 4)) % 4), '='));
  return Uint8Array.from(raw, (char) => char.charCodeAt(0));
}

/** Ce que ce navigateur sait faire, et où en est l'abonnement. */
async function detect(): Promise<State> {
  if (!VAPID_PUBLIC_KEY) return 'unsupported';
  if (!('serviceWorker' in navigator) || !('PushManager' in window) || !('Notification' in window)) {
    return 'unsupported';
  }
  if (Notification.permission === 'denied') return 'blocked';

  try {
    const registration = await navigator.serviceWorker.register('/app-sw.js', { scope: '/app' });
    const subscription = await registration.pushManager.getSubscription();
    return subscription ? 'on' : 'off';
  } catch {
    return 'unsupported';
  }
}

/**
 * Active les notifications système sur cet appareil.
 *
 * Trois conditions doivent être réunies : un navigateur qui gère le Web Push,
 * l'autorisation de l'utilisateur, et un abonnement enregistré côté serveur.
 * Chaque échec est annoncé plutôt que silencieux — une notification qu'on
 * croit active alors qu'elle ne l'est pas est pire que pas de notification.
 */
export default function PushToggle({ t }: { t: AppDictionary }) {
  const [state, setState] = useState<State>('loading');

  // L'état initial reste `loading` jusqu'à l'hydratation : le serveur ne peut
  // pas savoir ce que ce navigateur sait faire, et un écart entre les deux
  // rendus casserait l'hydratation.
  useEffect(() => {
    let cancelled = false;

    detect().then((next) => {
      if (!cancelled) setState(next);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  async function enable() {
    setState('busy');
    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') return setState(permission === 'denied' ? 'blocked' : 'off');

      const registration = await navigator.serviceWorker.register('/app-sw.js', { scope: '/app' });
      await navigator.serviceWorker.ready;

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: decodeKey(VAPID_PUBLIC_KEY) as BufferSource,
      });

      const db = getBrowserSupabase();
      const { data } = (await db?.auth.getUser()) ?? { data: { user: null } };
      if (!db || !data.user) return setState('off');

      const json = subscription.toJSON();
      const { error } = await db.from('push_subscriptions').upsert(
        {
          user_id: data.user.id,
          endpoint: subscription.endpoint,
          p256dh: json.keys?.p256dh ?? '',
          auth: json.keys?.auth ?? '',
          user_agent: navigator.userAgent.slice(0, 300),
        },
        { onConflict: 'endpoint' },
      );

      setState(error ? 'off' : 'on');
    } catch {
      setState('off');
    }
  }

  async function disable() {
    setState('busy');
    try {
      const registration = await navigator.serviceWorker.getRegistration('/app');
      const subscription = await registration?.pushManager.getSubscription();

      if (subscription) {
        const db = getBrowserSupabase();
        await db?.from('push_subscriptions').delete().eq('endpoint', subscription.endpoint);
        await subscription.unsubscribe();
      }
      setState('off');
    } catch {
      setState('on');
    }
  }

  if (state === 'loading') return null;

  if (state === 'unsupported' || state === 'blocked') {
    return (
      <p className="rs-card-flat px-4 py-3 text-[13px] text-[var(--rs-muted)]">
        {state === 'blocked' ? t.push.blocked : t.push.unsupported}
      </p>
    );
  }

  const active = state === 'on';

  return (
    <div className="rs-card p-4">
      <p className="text-[14px] font-semibold">{t.push.title}</p>
      <p className="mt-1 text-[13px] text-[var(--rs-muted)]">{active ? t.push.onHint : t.push.offHint}</p>
      <button
        type="button"
        onClick={active ? disable : enable}
        disabled={state === 'busy'}
        aria-busy={state === 'busy'}
        className={`rs-btn mt-3 ${active ? 'rs-btn-secondary' : 'rs-btn-primary'}`}
      >
        {active ? <BellOff size={17} aria-hidden="true" /> : <BellRing size={17} aria-hidden="true" />}
        {active ? t.push.disable : t.push.enable}
      </button>
    </div>
  );
}
