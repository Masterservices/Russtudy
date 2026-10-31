import type { Metadata } from 'next';
import { requireRole } from '../../../../../../features/app/data/session';
import { getDocumentPreviewUrls, getDocuments } from '../../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../../features/app/i18n/server';
import DocumentReviewList from '../../../../../../features/app/ui/DocumentReviewList';

export const metadata: Metadata = { title: 'Documents de l’étudiant' };

/** Écran 16 — Revue des pièces du dossier par le consultant. */
export default async function ConsultantStudentDocumentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const documents = await getDocuments(id, demo);
  const previewUrls = await getDocumentPreviewUrls(documents, demo);

  return (
    <main className="rs-main pt-4">
      <DocumentReviewList
        documents={documents}
        previewUrls={previewUrls}
        detailBase="/app/consultant/documents"
        t={t}
        lang={lang}
        canDecide={!demo}
      />
    </main>
  );
}
