import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import { getDocument, getDocumentDownloadUrl } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import DocumentDetail from '../../../../../features/app/ui/DocumentDetail';

export const metadata: Metadata = { title: 'Document' };

/** Écran 8 — Détail d'un document. */
export default async function StudentDocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const document = await getDocument(id, demo);
  if (!document) notFound();

  const downloadUrl = await getDocumentDownloadUrl(document.storagePath, demo);

  return (
    <>
      <AppHeader title={document.name} subtitle={t.documents.detail} backHref="/app/etudiant/documents" />

      <main className="rs-main">
        <DocumentDetail document={document} downloadUrl={downloadUrl} t={t} lang={lang} />
      </main>
    </>
  );
}
