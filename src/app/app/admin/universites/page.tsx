import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getUniversities } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import UniversityList from '../../../../features/app/ui/UniversityList';

export const metadata: Metadata = { title: 'Universités' };

/** Écran 26 — Universités partenaires. */
export default async function AdminUniversitiesPage() {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);
  const universities = await getUniversities(demo);

  return (
    <>
      <AppHeader title={t.nav.universities} subtitle={`${universities.length}`} backHref="/app/admin" />
      <main className="rs-main">
        <UniversityList universities={universities} t={t} lang={lang} />
      </main>
    </>
  );
}
