import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getProfilesByRole } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import PeopleList from '../../../../features/app/ui/PeopleList';

export const metadata: Metadata = { title: 'Gestion des étudiants' };

/** Écran 25 — Gestion des étudiants. */
export default async function AdminStudentsPage() {
  const { user, demo } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);
  const students = await getProfilesByRole('student', demo);

  return (
    <>
      <AppHeader title={t.admin.manageStudents} subtitle={`${students.length}`} backHref="/app/admin" />
      <main className="rs-main">
        <PeopleList people={students} t={t} badge={t.roles.student} hrefFor={(person) => `/app/admin/etudiants/${person.id}`} />
      </main>
    </>
  );
}
