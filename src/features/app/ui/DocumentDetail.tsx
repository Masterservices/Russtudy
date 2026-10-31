import { Download, FileText } from 'lucide-react';
import type { AppDictionary, AppLang } from '../i18n';
import type { DocumentItem } from '../types';
import { KeyValue, StatusPill } from './primitives';
import { documentBadge } from './status';
import { formatDate, formatFileSize } from '../utils/format';

/**
 * Détail d'une pièce : aperçu, métadonnées et téléchargement. Partagé par
 * l'étudiant qui consulte son document et par le consultant qui doit l'examiner
 * avant de le valider ou de le refuser.
 */
export default function DocumentDetail({
  document,
  downloadUrl,
  t,
  lang,
}: {
  document: DocumentItem;
  downloadUrl: string | null;
  t: AppDictionary;
  lang: AppLang;
}) {
  const isImage = (document.mimeType ?? '').startsWith('image/');
  const isPdf = (document.mimeType ?? '') === 'application/pdf';

  return (
    <>
      <div className="rs-card overflow-hidden">
        <div className="aspect-[3/4] max-h-[280px] bg-[var(--rs-primary-soft)] grid place-items-center">
          {isImage && downloadUrl ? (
            // Fichier privé servi par URL signée temporaire : pas d'optimisation Next possible.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={downloadUrl} alt={document.name} className="w-full h-full object-contain" />
          ) : isPdf && downloadUrl ? (
            <object data={downloadUrl} type="application/pdf" className="w-full h-full">
              <span className="text-center text-[var(--rs-primary)] grid place-items-center h-full">
                <FileText size={40} aria-hidden="true" />
              </span>
            </object>
          ) : (
            <span className="text-center text-[var(--rs-primary)]">
              <FileText size={40} className="mx-auto" aria-hidden="true" />
              <span className="mt-2 block text-[12px] text-[var(--rs-muted)]">{t.documents.noPreview}</span>
            </span>
          )}
        </div>

        <div className="px-4 divide-y divide-[var(--rs-line)]">
          <KeyValue label={t.student.status} value={<StatusPill {...documentBadge(document.status, t)} />} />
          <KeyValue label={t.documents.receivedOn.replace(' {date}', '')} value={formatDate(document.receivedAt, lang)} />
          <KeyValue label={t.documents.type} value={document.docType} />
          <KeyValue
            label={t.documents.file}
            value={`${document.mimeType ?? '—'} · ${formatFileSize(document.sizeBytes)}`}
          />
          {document.note ? <KeyValue label={t.documents.note} value={document.note} /> : null}
        </div>
      </div>

      {downloadUrl ? (
        <a href={downloadUrl} download className="rs-btn rs-btn-secondary mt-4" rel="noopener">
          <Download size={17} aria-hidden="true" />
          {t.common.download}
        </a>
      ) : null}
    </>
  );
}
