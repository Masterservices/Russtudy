import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getDocuments, getStudentDossier } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { interpolate } from '../../../../features/app/i18n';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import Tabs from '../../../../features/app/ui/Tabs';
import DocumentUpload from '../../../../features/app/ui/DocumentUpload';
import { EmptyState, StatusPill } from '../../../../features/app/ui/primitives';
import { documentBadge } from '../../../../features/app/ui/status';
import { formatDate } from '../../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Documents' };

const FILTERS = ['tous', 'requis', 'recus'] as const;
type Filter = (typeof FILTERS)[number];

/** Écran 7 — Documents du dossier. */
export default async function StudentDocumentsPage({ searchParams }: { searchParams: Promise<{ filtre?: string }> }) {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const { filtre } = await searchParams;
  const active: Filter = FILTERS.includes(filtre as Filter) ? (filtre as Filter) : 'tous';

  const dossier = await getStudentDossier(user.id, demo);
  const documents = await getDocuments(dossier?.id ?? null, demo);

  const visible = documents.filter((doc) => {
    if (active === 'requis') return doc.status === 'missing' || doc.status === 'rejected' || doc.status === 'pending';
    if (active === 'recus') return doc.status === 'received' || doc.status === 'validated';
    return true;
  });

  return (
    <>
      <AppHeader title={t.documents.title} subtitle={dossier?.reference} backHref="/app/etudiant/dossier" />

      <main className="rs-main">
        <Tabs
          active={active}
          items={[
            { key: 'tous', label: t.documents.tabs.all, href: '/app/etudiant/documents' },
            { key: 'requis', label: t.documents.tabs.required, href: '/app/etudiant/documents?filtre=requis' },
            { key: 'recus', label: t.documents.tabs.received, href: '/app/etudiant/documents?filtre=recus' },
          ]}
        />

        <div className="mt-3.5 space-y-2.5">
          {visible.length === 0 ? (
            <EmptyState title={t.common.empty} />
          ) : (
            visible.map((doc) => (
              <Link key={doc.id} href={`/app/etudiant/documents/${doc.id}`} className="block">
                <article className="rs-card flex items-center gap-3 px-4 py-3.5">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0" aria-hidden="true">
                    <FileText size={17} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[14px] font-semibold truncate">{doc.name}</span>
                    <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                      {doc.receivedAt
                        ? interpolate(t.documents.receivedOn, { date: formatDate(doc.receivedAt, lang) })
                        : doc.note ?? t.documents.statuses[doc.status]}
                    </span>
                  </span>
                  <StatusPill {...documentBadge(doc.status, t)} />
                  <ChevronRight size={15} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />
                </article>
              </Link>
            ))
          )}
        </div>

        {dossier ? (
          <div className="mt-5">
            <DocumentUpload
              dossierId={dossier.id}
              label={t.documents.add}
              sizeError={t.documents.tooLarge}
              genericError={t.common.error}
            />
            <p className="mt-2 text-center text-[11px] text-[var(--rs-muted)]">{t.documents.uploadHint}</p>
          </div>
        ) : null}
      </main>
    </>
  );
}
