import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import {
  getDocument,
  getDocumentDownloadUrl,
  getDocumentPreviewUrls,
  getDocuments,
} from '../../../../../features/app/data/queries';
import { setDocumentStatus } from '../../../../../features/app/actions/app';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import DocumentDetail from '../../../../../features/app/ui/DocumentDetail';
import DocumentSiblings from '../../../../../features/app/ui/DocumentSiblings';
import { SectionTitle } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Examen de la pièce' };

/**
 * Examen d'une pièce par le consultant. L'écran vit hors de la fiche étudiant
 * pour ne pas empiler deux en-têtes ; le retour ramène à l'onglet Documents du
 * dossier concerné.
 */
export default async function ConsultantDocumentPage({ params }: { params: Promise<{ docId: string }> }) {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const { docId } = await params;

  const document = await getDocument(docId, demo);
  if (!document) notFound();

  const [downloadUrl, siblings] = await Promise.all([
    getDocumentDownloadUrl(document.storagePath, demo),
    getDocuments(document.dossierId, demo),
  ]);
  const previewUrls = await getDocumentPreviewUrls(siblings, demo);

  return (
    <>
      <AppHeader
        title={document.name}
        subtitle={t.documents.detail}
        backHref={`/app/consultant/etudiants/${document.dossierId}/documents`}
      />

      <main className="rs-main">
        <DocumentDetail document={document} downloadUrl={downloadUrl} t={t} lang={lang} />

        {!demo && document.status !== 'missing' ? (
          <div className="mt-3 flex gap-2">
            <form action={setDocumentStatus} className="flex-1">
              <input type="hidden" name="documentId" value={document.id} />
              <input type="hidden" name="status" value="validated" />
              <button type="submit" className="rs-btn rs-btn-secondary text-[var(--rs-success)]">
                {t.documents.validate}
              </button>
            </form>
            <form action={setDocumentStatus} className="flex-1">
              <input type="hidden" name="documentId" value={document.id} />
              <input type="hidden" name="status" value="rejected" />
              <button type="submit" className="rs-btn rs-btn-secondary text-[var(--rs-danger)]">
                {t.documents.reject}
              </button>
            </form>
          </div>
        ) : null}

        <SectionTitle>{t.documents.otherDocuments}</SectionTitle>
        <DocumentSiblings
          documents={siblings}
          currentId={document.id}
          detailBase="/app/consultant/documents"
          previewUrls={previewUrls}
          t={t}
        />
      </main>
    </>
  );
}
