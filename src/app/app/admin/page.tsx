import type { Metadata } from 'next';
import Link from 'next/link';
import { FolderPlus, MessageSquare, Users } from 'lucide-react';
import { requireRole } from '../../../features/app/data/session';
import { getAdminOverview, getAllDossiers, getNotifications, getPendingSteps } from '../../../features/app/data/queries';
import { getAppI18n } from '../../../features/app/i18n/server';
import { AppHeader } from '../../../features/app/ui/AppShell';
import { LineChart } from '../../../features/app/ui/charts';
import NotificationBell from '../../../features/app/ui/NotificationBell';
import PendingSteps from '../../../features/app/ui/PendingSteps';
import { Card, CardList, EmptyState, LinkRow, SectionTitle, StatTile } from '../../../features/app/ui/primitives';
import { Avatar } from '../../../features/app/ui/primitives';
import { formatCompactAmount } from '../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Tableau de bord' };

/** Écran 23 — Tableau de bord de l'administration. */
export default async function AdminHomePage() {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);
  // Trois lectures indépendantes en parallèle ; seules les étapes en attente
  // dépendent des dossiers et attendent donc leur tour.
  const [overview, dossiers, notifications] = await Promise.all([
    getAdminOverview(demo),
    getAllDossiers(demo),
    getNotifications(user.id, demo),
  ]);
  const pending = await getPendingSteps(dossiers, demo);
  const unread = notifications.filter((n) => !n.readAt).length;

  return (
    <>
      <AppHeader
        title={t.admin.dashboard}
        subtitle={user.fullName}
        action={<NotificationBell href="/app/admin/notifications" count={unread} label={t.notifications.title} />}
      />

      <main className="rs-main">
        <div className="grid grid-cols-2 gap-3">
          <StatTile value={overview.studentCount} label={t.admin.students} href="/app/admin/etudiants" />
          <StatTile value={overview.consultantCount} label={t.admin.consultants} href="/app/admin/consultants" />
          <StatTile value={overview.dossierCount} label={t.admin.dossiers} href="/app/admin/dossiers" />
          <StatTile
            value={formatCompactAmount(overview.revenue, overview.currency, lang)}
            label={t.admin.revenue}
            href="/app/admin/tarification"
          />
        </div>

        {/* Ce qui attend une décision passe avant les graphiques. */}
        <SectionTitle>{t.validation.pendingTitle}</SectionTitle>
        <PendingSteps items={pending} hrefFor={(item) => `/app/admin/dossiers/${item.dossierId}`} t={t} lang={lang} />

        <SectionTitle>{t.admin.quickActions}</SectionTitle>
        <CardList>
          <LinkRow href="/app/admin/dossiers/nouveau" icon={<FolderPlus size={18} />} title={t.admin.newDossier} />
          <LinkRow href="/app/admin/utilisateurs" icon={<Users size={18} />} title={t.admin.usersRoles} />
          <LinkRow href="/app/admin/messages" icon={<MessageSquare size={18} />} title={t.messages.title} />
        </CardList>

        <SectionTitle>{t.admin.admissionsChart}</SectionTitle>
        <Card>
          <LineChart points={overview.admissionsSeries} label={t.admin.admissionsChart} />
        </Card>

        <SectionTitle
          action={
            <Link href="/app/admin/consultants" className="text-[12px] font-semibold text-[var(--rs-primary)]">
              {t.common.seeAll}
            </Link>
          }
        >
          {t.admin.topConsultants}
        </SectionTitle>

        {overview.topConsultants.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
            {overview.topConsultants.map((entry) => (
              <li key={entry.consultant.id || entry.consultant.fullName} className="rs-row">
                <Avatar name={entry.consultant.fullName} url={entry.consultant.avatarUrl} size={36} />
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-semibold truncate">{entry.consultant.fullName}</span>
                  <span className="block text-[12px] text-[var(--rs-muted)]">
                    {entry.dossierCount} {t.admin.dossiers.toLowerCase()}
                  </span>
                </span>
                {entry.revenue > 0 ? (
                  <span className="text-[13px] font-semibold text-[var(--rs-primary)] shrink-0">
                    {formatCompactAmount(entry.revenue, overview.currency, lang)}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
