import type { Metadata } from 'next';
import { requireRole } from '../../../../../features/app/data/session';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import ProfileForm from '../../../../../features/app/ui/ProfileForm';

export const metadata: Metadata = { title: 'Informations personnelles' };

/** Écran 12b — Édition des informations personnelles. */
export default async function StudentProfileInfoPage() {
  const { user, demo } = await requireRole(['student']);
  const { t } = await getAppI18n(user.lang);

  return (
    <>
      <AppHeader title={t.profile.personalInfo} backHref="/app/etudiant/profil" />
      <main className="rs-main">
        <ProfileForm user={user} t={t} disabled={demo} />
      </main>
    </>
  );
}
