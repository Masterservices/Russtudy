import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getNotifications } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import NotificationList from '../../../../features/app/ui/NotificationList';
import PushToggle from '../../../../features/app/ui/PushToggle';

export const metadata: Metadata = { title: 'Notifications' };

/** Écran 10 — Notifications. */
export default async function StudentNotificationsPage() {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const notifications = await getNotifications(user.id, demo);

  return (
    <>
      <AppHeader title={t.notifications.title} backHref="/app/etudiant" />

      <main className="rs-main">
        {/* L'alerte système est propre à chaque appareil : le réglage vit
            donc au plus près de la liste qu'il concerne. */}
        {demo ? null : (
          <div className="mb-4">
            <PushToggle t={t} />
          </div>
        )}

        <NotificationList notifications={notifications} t={t} lang={lang} demo={demo} />
      </main>
    </>
  );
}
