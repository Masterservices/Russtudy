import type { Metadata } from 'next';
import Link from 'next/link';
import { requireRole } from '../../../../features/app/data/session';
import { getStudentDossier } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import DossierInfoCard from '../../../../features/app/ui/DossierInfoCard';
import { EmptyState } from '../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Mon dossier' };

/** Écran 5 — Mon dossier. */
export default async function StudentDossierPage() {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const dossier = await getStudentDossier(user.id, demo);

  return (
    <>
      <AppHeader
        title={t.student.myDossier}
        subtitle={dossier?.university?.name ?? undefined}
        backHref="/app/etudiant"
      />

      <main className="rs-main">
        {!dossier ? (
          <EmptyState title={t.student.noDossier} hint={t.student.noDossierHint} />
        ) : (
          <>
            <p className="mb-3 text-[12px] text-[var(--rs-muted)]">
              {t.student.reference} · <span className="font-semibold text-[var(--rs-ink)]">{dossier.reference}</span>
            </p>

            <DossierInfoCard dossier={dossier} t={t} lang={lang} />

            <div className="mt-4 space-y-2.5">
              <Link href="/app/etudiant/dossier/timeline" className="rs-btn rs-btn-primary">
                {t.student.seeTimeline}
              </Link>
              <Link href="/app/etudiant/documents" className="rs-btn rs-btn-secondary">
                {t.documents.title}
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}
