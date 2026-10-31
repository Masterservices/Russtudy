import type { Metadata } from 'next';
import { requireRole } from '../../../../../features/app/data/session';
import {
  getProfilesByRole,
  getStudentsWithoutDossier,
  getUniversities,
} from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import DossierForm from '../../../../../features/app/ui/admin/DossierForm';

export const metadata: Metadata = { title: 'Nouveau dossier' };

/** Écran 32 — Ouverture d'un dossier. */
export default async function AdminNewDossierPage() {
  const { user, demo } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);

  const [students, consultants, universities] = await Promise.all([
    getStudentsWithoutDossier(demo),
    getProfilesByRole('consultant', demo),
    getUniversities(demo),
  ]);

  return (
    <>
      <AppHeader title={t.admin.newDossier} backHref="/app/admin/dossiers" />
      <main className="rs-main">
        <DossierForm
          students={students}
          consultants={consultants}
          universities={universities}
          t={t}
          disabled={demo}
        />
      </main>
    </>
  );
}
