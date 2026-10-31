import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AtSign, CalendarDays, FolderPlus, MapPin, Phone } from 'lucide-react';
import { requireRole } from '../../../../../features/app/data/session';
import { getProfileDetail, getStudentDossiers } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import DossierSummaryList from '../../../../../features/app/ui/DossierSummaryList';
import { Avatar, KeyValue, SectionTitle } from '../../../../../features/app/ui/primitives';
import { formatDate } from '../../../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Fiche étudiant' };

/** Fiche d'un étudiant vue par l'administration : coordonnées et dossiers. */
export default async function AdminStudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const [profile, dossiers] = await Promise.all([getProfileDetail(id, demo), getStudentDossiers(id, demo)]);
  if (!profile) notFound();

  return (
    <>
      <AppHeader title={profile.fullName || profile.email} subtitle={t.roles.student} backHref="/app/admin/etudiants" />

      <main className="rs-main">
        <div className="rs-card flex items-center gap-3.5 p-4">
          <Avatar name={profile.fullName || profile.email} url={profile.avatarUrl} size={50} />
          <div className="min-w-0">
            <p className="text-[16px] font-bold truncate">{profile.fullName || '—'}</p>
            <p className="text-[12px] text-[var(--rs-muted)] truncate">{profile.email}</p>
          </div>
        </div>

        <div className="rs-card px-4 mt-3 divide-y divide-[var(--rs-line)]">
          <KeyValue icon={<AtSign size={17} />} label={t.profile.email} value={profile.email} />
          <KeyValue icon={<Phone size={17} />} label={t.profile.phone} value={profile.phone ?? '—'} />
          <KeyValue icon={<MapPin size={17} />} label={t.profile.city} value={profile.city ?? '—'} />
          <KeyValue
            icon={<CalendarDays size={17} />}
            label={t.student.createdAt}
            value={formatDate(profile.createdAt, lang)}
          />
        </div>

        <SectionTitle>{t.admin.dossiers}</SectionTitle>
        <DossierSummaryList dossiers={dossiers} t={t} emptyLabel={t.admin.noDossierForStudent} />

        {dossiers.length === 0 ? (
          <Link href="/app/admin/dossiers/nouveau" className="rs-btn rs-btn-primary mt-3">
            <FolderPlus size={17} aria-hidden="true" />
            {t.admin.newDossier}
          </Link>
        ) : null}
      </main>
    </>
  );
}
