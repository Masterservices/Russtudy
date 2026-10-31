import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import {
  getDocumentPreviewUrls,
  getDocuments,
  getDossierById,
  getTimeline,
} from '../../../../../features/app/data/queries';
import { validateStep } from '../../../../../features/app/actions/app';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import DocumentReviewList from '../../../../../features/app/ui/DocumentReviewList';
import DossierInfoCard from '../../../../../features/app/ui/DossierInfoCard';
import StepGestureButton from '../../../../../features/app/ui/StepGestureButton';
import Timeline from '../../../../../features/app/ui/Timeline';
import { EmptyState, SectionTitle } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Dossier' };

/**
 * Dossier vu par l'administration : informations, pièces et frise.
 *
 * C'est ici que se pose la signature d'une étape. L'administration n'attend
 * pas le consultant : la séquence demande → confirmation → signature reste la
 * voie normale, mais un consultant absent ne doit pas immobiliser un dossier.
 */
export default async function AdminDossierPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const dossier = await getDossierById(id, demo);
  if (!dossier) notFound();

  const [steps, documents] = await Promise.all([getTimeline(dossier.id, demo), getDocuments(dossier.id, demo)]);
  const previewUrls = await getDocumentPreviewUrls(documents, demo);

  return (
    <>
      <AppHeader title={dossier.student.fullName} subtitle={dossier.reference} backHref="/app/admin/dossiers" />

      <main className="rs-main">
        <DossierInfoCard dossier={dossier} t={t} lang={lang} />

        <SectionTitle>{t.documents.title}</SectionTitle>
        <DocumentReviewList
          documents={documents}
          previewUrls={previewUrls}
          detailBase="/app/admin/documents"
          t={t}
          lang={lang}
          canDecide={!demo}
        />

        <SectionTitle>{t.nav.timeline}</SectionTitle>
        {steps.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <Timeline
            steps={steps}
            lang={lang}
            upcomingLabel={t.status.upcoming}
            currentLabel={t.status.current}
            t={t}
            renderAction={(step) =>
              !demo && step.status !== 'done' ? (
                <StepGestureButton
                  action={validateStep}
                  stepId={step.id}
                  label={t.validation.sign}
                  tone={step.validation === 'confirmed' ? 'primary' : 'secondary'}
                />
              ) : null
            }
          />
        )}
      </main>
    </>
  );
}
