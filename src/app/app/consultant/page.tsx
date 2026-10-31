import type { Metadata } from 'next';
import Link from 'next/link';
import { requireRole } from '../../../features/app/data/session';
import {
  getConsultantDossiers,
  getConsultantOverview,
  getNotifications,
  getPendingSteps,
} from '../../../features/app/data/queries';
import { getAppI18n } from '../../../features/app/i18n/server';
import { AppHeader } from '../../../features/app/ui/AppShell';
import NotificationBell from '../../../features/app/ui/NotificationBell';
import PendingSteps from '../../../features/app/ui/PendingSteps';
import { Avatar, EmptyState, ProgressBar, SectionTitle, StatTile, StatusPill } from '../../../features/app/ui/primitives';
import { dossierBadge } from '../../../features/app/ui/status';

export const metadata: Metadata = { title: 'Aperçu consultant' };

/** Écran 13 — Aperçu de l'activité du consultant. */
export default async function ConsultantHomePage() {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const [overview, dossiers, notifications] = await Promise.all([
    getConsultantOverview(user.id, demo),
    getConsultantDossiers(user.id, demo),
    getNotifications(user.id, demo),
  ]);
  const pending = await getPendingSteps(dossiers, demo);
  const unread = notifications.filter((n) => !n.readAt).length;

  return (
    <>
      <AppHeader
        title={t.consultant.overview}
        subtitle={user.fullName}
        action={<NotificationBell href="/app/consultant/notifications" count={unread} label={t.notifications.title} />}
      />

      <main className="rs-main">
        <div className="grid grid-cols-2 gap-3">
          <StatTile value={overview.studentCount} label={t.consultant.students} />
          <StatTile value={overview.activeDossierCount} label={t.consultant.activeDossiers} />
          <StatTile value={overview.admittedCount} label={t.consultant.admissions} />
          <StatTile value={overview.invitationCount} label={t.consultant.invitations} />
        </div>

        {/* Les déclarations d'étudiants passent avant l'activité récente :
            ce sont les seules lignes qui appellent un geste du consultant. */}
        <SectionTitle>{t.validation.pendingTitle}</SectionTitle>
        <PendingSteps
          items={pending}
          hrefFor={(item) => `/app/consultant/etudiants/${item.dossierId}/timeline`}
          t={t}
          lang={lang}
        />

        <SectionTitle
          action={
            <Link href="/app/consultant/etudiants" className="text-[12px] font-semibold text-[var(--rs-primary)]">
              {t.common.seeAll}
            </Link>
          }
        >
          {t.consultant.recentActivity}
        </SectionTitle>

        {overview.recentDossiers.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
            {overview.recentDossiers.map((dossier) => (
              <li key={dossier.id}>
                <Link href={`/app/consultant/etudiants/${dossier.id}`} className="rs-row hover:bg-[var(--rs-primary-soft)]">
                  <Avatar name={dossier.student.fullName} url={dossier.student.avatarUrl} size={38} />
                  <span className="flex-1 min-w-0">
                    <span className="block text-[14px] font-semibold truncate">{dossier.student.fullName}</span>
                    <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                      {dossier.university?.name ?? dossier.program ?? '—'}
                    </span>
                    <span className="mt-1.5 block">
                      <ProgressBar value={dossier.progress} tone="dark" />
                    </span>
                  </span>
                  <StatusPill {...dossierBadge(dossier.status, t)} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
