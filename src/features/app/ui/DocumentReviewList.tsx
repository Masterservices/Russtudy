import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import { setDocumentStatus } from '../actions/app';
import DocumentPreview from './DocumentPreview';
import type { AppDictionary, AppLang } from '../i18n';
import { interpolate } from '../i18n';
import type { DocumentItem } from '../types';
import { EmptyState, StatusPill } from './primitives';
import { documentBadge } from './status';
import { formatDate } from '../utils/format';

/**
 * Revue des pièces d'un dossier, partagée par le consultant et l'administration.
 *
 * Chaque ligne porte un aperçu : vignette pour une image, bouton d'ouverture
 * sinon. Se prononcer sur un nom de fichier n'est pas se prononcer sur une
 * pièce — l'aperçu doit être à portée de pouce, pas à deux écrans.
 */
export default function DocumentReviewList({
  documents,
  previewUrls,
  detailBase,
  t,
  lang,
  canDecide,
}: {
  documents: DocumentItem[];
  previewUrls: Map<string, string>;
  /** Racine des fiches de pièce, propre à l'espace (`/app/admin/documents`…). */
  detailBase: string;
  t: AppDictionary;
  lang: AppLang;
  canDecide: boolean;
}) {
  if (documents.length === 0) return <EmptyState title={t.common.empty} />;

  return (
    <ul className="space-y-2.5">
      {documents.map((doc) => {
        const previewUrl = doc.storagePath ? previewUrls.get(doc.storagePath) : undefined;
        const isImage = (doc.mimeType ?? '').startsWith('image/');

        const identity = (
          <>
            <span className="grid place-items-center w-11 h-11 rounded-xl overflow-hidden bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0">
              {isImage && previewUrl ? (
                // Vignette servie par URL signée temporaire : pas d'optimisation Next possible.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <FileText size={17} aria-hidden="true" />
              )}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-[14px] font-semibold truncate">{doc.name}</span>
              <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                {doc.receivedAt
                  ? interpolate(t.documents.receivedOn, { date: formatDate(doc.receivedAt, lang) })
                  : doc.note ?? '—'}
              </span>
            </span>
            <StatusPill {...documentBadge(doc.status, t)} />
          </>
        );

        return (
          <li key={doc.id} className="rs-card p-4">
            {doc.storagePath ? (
              <Link
                href={`${detailBase}/${doc.id}`}
                className="flex items-center gap-3 -m-1 p-1 rounded-xl hover:bg-[var(--rs-primary-soft)] transition-colors"
              >
                {identity}
                <ChevronRight size={16} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />
              </Link>
            ) : (
              <div className="flex items-center gap-3">{identity}</div>
            )}

            {previewUrl ? (
              <DocumentPreview
                url={previewUrl}
                name={doc.name}
                mimeType={doc.mimeType}
                label={t.documents.preview}
                closeLabel={t.documents.closePreview}
                openLabel={t.documents.openExternal}
              />
            ) : null}

            {canDecide && doc.status !== 'missing' ? (
              <div className="mt-2 flex gap-2">
                <form action={setDocumentStatus} className="flex-1">
                  <input type="hidden" name="documentId" value={doc.id} />
                  <input type="hidden" name="status" value="validated" />
                  <button type="submit" className="rs-btn rs-btn-secondary min-h-[38px] text-[13px] text-[var(--rs-success)]">
                    {t.documents.validate}
                  </button>
                </form>
                <form action={setDocumentStatus} className="flex-1">
                  <input type="hidden" name="documentId" value={doc.id} />
                  <input type="hidden" name="status" value="rejected" />
                  <button type="submit" className="rs-btn rs-btn-secondary min-h-[38px] text-[13px] text-[var(--rs-danger)]">
                    {t.documents.reject}
                  </button>
                </form>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
