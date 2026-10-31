import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getProfilesByRole } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import PeopleList from '../../../../features/app/ui/PeopleList';

export const metadata: Metadata = { title: 'Gestion des consultants' };

/** Écran 24 — Gestion des consultants. */
export default async function AdminConsultantsPage() {
  const { user, demo } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);
  const consultants = await getProfilesByRole('consultant', demo);

  return (
    <>
      <AppHeader title={t.admin.manageConsultants} subtitle={`${consultants.length}`} backHref="/app/admin" />
      <main className="rs-main">
        <PeopleList people={consultants} t={t} badge={t.roles.consultant} hrefFor={(person) => `/app/admin/consultants/${person.id}`} />
      </main>
    </>
  );
}
