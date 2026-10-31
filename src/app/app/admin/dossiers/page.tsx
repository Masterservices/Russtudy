import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getAllDossiers } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import { Avatar, EmptyState, ProgressBar, StatusPill } from '../../../../features/app/ui/primitives';
import { dossierBadge } from '../../../../features/app/ui/status';

export const metadata: Metadata = { title: 'Dossiers' };

/** Écran 30 — Vue globale des dossiers. */
export default async function AdminDossiersPage() {
  const { user, demo } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);
  const dossiers = await getAllDossiers(demo);

  return (
    <>
      <AppHeader title={t.admin.dossiers} subtitle={`${dossiers.length}`} backHref="/app/admin" />

      <main className="rs-main">
        <Link href="/app/admin/dossiers/nouveau" className="rs-btn rs-btn-primary mb-4">
          <Plus size={17} aria-hidden="true" />
          {t.admin.newDossier}
        </Link>

        {dossiers.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
            {dossiers.map((dossier) => (
              <li key={dossier.id}>
                <Link href={`/app/admin/dossiers/${dossier.id}`} className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors">
                  <Avatar name={dossier.student.fullName} url={dossier.student.avatarUrl} size={38} />
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="flex-1 text-[14px] font-semibold truncate">{dossier.student.fullName}</span>
                      <span className="text-[12px] font-semibold text-[var(--rs-primary)] shrink-0">{dossier.progress}%</span>
                    </span>
                    <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                      {dossier.reference}
                      {dossier.consultant ? ` · ${dossier.consultant.fullName}` : ''}
                    </span>
                    <span className="mt-1.5 block">
                      <ProgressBar value={dossier.progress} tone="dark" />
                    </span>
                  </span>
                  <StatusPill {...dossierBadge(dossier.status, t)} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
