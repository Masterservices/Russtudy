'use client';

import { useEffect, useState } from 'react';
import {
  createRealtimeClient,
  type LiveQuerySnapshot,
  type RawLiveQuerySubscription,
  type SealedLiveQuery,
} from '@neon/realtime/client';

interface LiveUpdate {
  id: string;
  message: string;
  created_at: Date;
}

type Status = 'connecting' | 'live' | 'stale' | 'error' | 'closed';

export interface LiveUpdatesLabels {
  empty: string;
  status: Record<Status, string>;
}

const REALTIME_URL = process.env.NEXT_PUBLIC_NEON_REALTIME_URL ?? '';
const RENEW_EARLY_MS = 10_000;
const RETRY_MS = 1_000;

/** Demande au serveur une requête scellée : lui seul vérifie que l'on est administrateur. */
async function fetchSealed(): Promise<SealedLiveQuery<LiveUpdate>> {
  const response = await fetch('/api/realtime/live-updates', { method: 'POST', cache: 'no-store' });
  if (!response.ok) throw new Error(`Requête scellée refusée (${response.status})`);
  return (await response.json()) as SealedLiveQuery<LiveUpdate>;
}

/**
 * Liste mise à jour en direct par Neon Realtime : le navigateur s'abonne à la requête
 * scellée par le serveur et reçoit chaque ligne ajoutée, modifiée ou supprimée.
 * La capacité ne dure que 60 secondes ; elle est renouvelée avant l'échéance.
 */
export default function LiveUpdates({ labels }: { labels: LiveUpdatesLabels }) {
  const [snapshot, setSnapshot] = useState<LiveQuerySnapshot<LiveUpdate> | null>(null);

  useEffect(() => {
    if (!REALTIME_URL) return;

    const client = createRealtimeClient({ url: REALTIME_URL });
    let subscription: RawLiveQuerySubscription<LiveUpdate> | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let stopped = false;

    function scheduleRenewal(delay: number) {
      clearTimeout(timer);
      if (!stopped) timer = setTimeout(renew, Math.max(0, delay));
    }

    async function renew() {
      let next: SealedLiveQuery<LiveUpdate>;
      try {
        next = await fetchSealed();
      } catch {
        scheduleRenewal(RETRY_MS);
        return;
      }
      scheduleRenewal(next.expiresAt - Date.now() - RENEW_EARLY_MS);
      subscription?.renew(next).catch(() => {
        stopped = true;
        clearTimeout(timer);
      });
    }

    fetchSealed()
      .then((sealed) => {
        if (stopped) return;
        const live = client.subscribe(sealed);
        subscription = live as unknown as RawLiveQuerySubscription<LiveUpdate>;
        live.onChange(setSnapshot);
        scheduleRenewal(sealed.expiresAt - Date.now() - RENEW_EARLY_MS);
      })
      .catch(() => {
        /* Non autorisé ou Realtime indisponible : la liste reste vide. */
      });

    return () => {
      stopped = true;
      clearTimeout(timer);
      client.close();
    };
  }, []);

  const rows = snapshot?.data ?? [];
  const status: Status = snapshot?.status ?? 'connecting';

  return (
    <section aria-live="polite">
      <p className="mb-3 text-[12px] text-[var(--rs-muted)]">{labels.status[status]}</p>

      {rows.length === 0 ? (
        <p className="rs-card-flat px-4 py-3 text-[13px] text-[var(--rs-muted)]">{labels.empty}</p>
      ) : (
        <ul className="space-y-2">
          {rows.map((row) => (
            <li key={row.id} className="rs-card px-4 py-3">
              <p className="text-[14px]">{row.message}</p>
              <p className="mt-1 text-[11px] text-[var(--rs-muted)]">{row.created_at.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
