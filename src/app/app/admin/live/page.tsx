import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import LiveUpdates from '../../../../features/app/ui/LiveUpdates';

export const metadata: Metadata = { title: 'En direct', robots: { index: false } };

/** Annonces en direct : la liste se met à jour seule, sans recharger la page (Neon Realtime). */
export default async function AdminLivePage() {
  const { user } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);

  return (
    <>
      <AppHeader title={t.live.title} backHref="/app/admin" />

      <main className="rs-main">
        <p className="mb-4 text-[13px] text-[var(--rs-muted)]">{t.live.hint}</p>
        <LiveUpdates labels={{ empty: t.live.empty, status: t.live.status }} />
      </main>
    </>
  );
}
