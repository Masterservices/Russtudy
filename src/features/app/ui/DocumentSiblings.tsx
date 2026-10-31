import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import type { AppDictionary } from '../i18n';
import type { DocumentItem } from '../types';
import { StatusPill } from './primitives';
import { documentBadge } from './status';

/**
 * Les autres pièces du même dossier, listées sous la pièce consultée.
 *
 * Examiner un document isolément oblige à faire des allers-retours pour juger
 * de l'ensemble : la liste reste donc sous la main, avec le statut de chacune.
 */
export default function DocumentSiblings({
  documents,
  currentId,
  detailBase,
  previewUrls,
  t,
}: {
  documents: DocumentItem[];
  currentId: string;
  detailBase: string;
  previewUrls: Map<string, string>;
  t: AppDictionary;
}) {
  const others = documents.filter((doc) => doc.id !== currentId);
  if (others.length === 0) return null;

  return (
    <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
      {others.map((doc) => {
        const previewUrl = doc.storagePath ? previewUrls.get(doc.storagePath) : undefined;
        const isImage = (doc.mimeType ?? '').startsWith('image/');

        const inner = (
          <>
            <span className="grid place-items-center w-9 h-9 rounded-lg overflow-hidden bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0">
              {isImage && previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <FileText size={15} aria-hidden="true" />
              )}
            </span>
            <span className="flex-1 min-w-0 text-[14px] font-medium truncate">{doc.name}</span>
            <StatusPill {...documentBadge(doc.status, t)} />
          </>
        );

        return (
          <li key={doc.id}>
            {doc.storagePath ? (
              <Link href={`${detailBase}/${doc.id}`} className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors">
                {inner}
                <ChevronRight size={15} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />
              </Link>
            ) : (
              <span className="rs-row">{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
