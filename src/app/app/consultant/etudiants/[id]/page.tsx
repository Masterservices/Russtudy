import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import { getDossierById } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import DossierInfoCard from '../../../../../features/app/ui/DossierInfoCard';
import { ProgressBar } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Fiche étudiant' };

/** Écran 15 — Informations du dossier vues par le consultant. */
export default async function ConsultantStudentInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const dossier = await getDossierById(id, demo);
  if (!dossier) notFound();

  return (
    <main className="rs-main pt-4">
      <div className="rs-card p-4 mb-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] text-[var(--rs-muted)]">{t.consultant.admissionRate}</span>
          <span className="text-[15px] font-bold text-[var(--rs-primary)]">{dossier.progress}%</span>
        </div>
        <div className="mt-2.5">
          <ProgressBar value={dossier.progress} tone="dark" />
        </div>
      </div>

      <DossierInfoCard dossier={dossier} t={t} lang={lang} />
    </main>
  );
}
