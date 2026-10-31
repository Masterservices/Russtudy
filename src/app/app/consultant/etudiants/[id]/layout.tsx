import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import { getDossierById } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import DetailTabs from '../../../../../features/app/ui/DetailTabs';
import { Avatar } from '../../../../../features/app/ui/primitives';

/** Ossature de la fiche étudiant : en-tête, identité et onglets (écrans 15 à 18). */
export default async function ConsultantStudentLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { user, demo } = await requireRole(['consultant']);
  const { t } = await getAppI18n(user.lang);
  const { id } = await params;

  const dossier = await getDossierById(id, demo);
  if (!dossier) notFound();

  const base = `/app/consultant/etudiants/${id}`;

  return (
    <>
      <AppHeader title={t.consultant.studentSheet} subtitle={dossier.reference} backHref="/app/consultant/etudiants" />

      <div className="px-4 pt-4">
        <div className="rs-card flex items-center gap-3.5 p-4">
          <Avatar name={dossier.student.fullName} url={dossier.student.avatarUrl} size={50} />
          <div className="min-w-0">
            <p className="text-[16px] font-bold truncate">{dossier.student.fullName}</p>
            <p className="text-[12px] text-[var(--rs-muted)] truncate">{dossier.student.email}</p>
          </div>
        </div>

        <div className="mt-3.5">
          <DetailTabs
            tabs={[
              { href: base, label: t.consultant.tabs.info },
              { href: `${base}/documents`, label: t.consultant.tabs.documents },
              { href: `${base}/timeline`, label: t.nav.timeline },
              { href: `${base}/devis`, label: t.nav.quotes },
            ]}
          />
        </div>
      </div>

      {children}
    </>
  );
}
