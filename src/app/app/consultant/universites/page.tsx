import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getUniversities } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import UniversityList from '../../../../features/app/ui/UniversityList';

export const metadata: Metadata = { title: 'Universités' };

/** Écran 20 — Universités partenaires (consultation). */
export default async function ConsultantUniversitiesPage() {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const universities = await getUniversities(demo);

  return (
    <>
      <AppHeader title={t.nav.universities} backHref="/app/consultant" />
      <main className="rs-main">
        <UniversityList universities={universities} t={t} lang={lang} />
      </main>
    </>
  );
}
