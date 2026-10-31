import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { AppDictionary } from '../i18n';
import type { Dossier } from '../types';
import { EmptyState, ProgressBar, StatusPill } from './primitives';
import { dossierBadge } from './status';

/**
 * Dossiers rattachés à une personne, en une ligne chacun : référence,
 * université, consultant, avancement et statut. C'est le minimum utile pour
 * savoir où en est quelqu'un sans ouvrir son dossier.
 */
export default function DossierSummaryList({
  dossiers,
  t,
  emptyLabel,
}: {
  dossiers: Dossier[];
  t: AppDictionary;
  emptyLabel?: string;
}) {
  if (dossiers.length === 0) return <EmptyState title={emptyLabel ?? t.common.empty} />;

  return (
    <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
      {dossiers.map((dossier) => (
        <li key={dossier.id}>
          <Link
            href={`/app/admin/dossiers/${dossier.id}`}
            className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors"
          >
            <span className="flex-1 min-w-0">
              <span className="flex items-center gap-2">
                <span className="flex-1 text-[14px] font-semibold truncate">{dossier.reference}</span>
                <span className="text-[12px] font-semibold text-[var(--rs-primary)] shrink-0">{dossier.progress}%</span>
              </span>
              <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                {dossier.university?.name ?? dossier.program ?? '—'}
                {dossier.consultant ? ` · ${dossier.consultant.fullName}` : ''}
              </span>
              <span className="mt-1.5 block">
                <ProgressBar value={dossier.progress} tone="dark" />
              </span>
            </span>
            <StatusPill {...dossierBadge(dossier.status, t)} />
            <ChevronRight size={16} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
