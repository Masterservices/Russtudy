import type { Metadata } from 'next';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getConsultantDossiers } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import { Avatar, EmptyState, ProgressBar, StatusPill } from '../../../../features/app/ui/primitives';
import { leadBadge } from '../../../../features/app/ui/status';

export const metadata: Metadata = { title: 'Étudiants' };

/** Écran 14 — Portefeuille d'étudiants et de leads du consultant. */
export default async function ConsultantStudentsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { user, demo } = await requireRole(['consultant']);
  const { t } = await getAppI18n(user.lang);
  const { q } = await searchParams;
  const query = (q ?? '').trim().toLowerCase();

  const dossiers = await getConsultantDossiers(user.id, demo);
  const visible = query
    ? dossiers.filter((d) =>
        [d.student.fullName, d.student.email, d.university?.name ?? '', d.program ?? '']
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
    : dossiers;

  return (
    <>
      <AppHeader title={t.nav.students} subtitle={`${dossiers.length}`} />

      <main className="rs-main">
        <form method="get" role="search" className="relative">
          <Search
            size={17}
            className="absolute top-1/2 -translate-y-1/2 start-3.5 text-[var(--rs-muted)] pointer-events-none"
            aria-hidden="true"
          />
          <label className="sr-only" htmlFor="q">{t.common.search}</label>
          <input id="q" name="q" defaultValue={q ?? ''} placeholder={t.common.search} className="rs-input ps-10" />
        </form>

        <div className="mt-3.5">
          {visible.length === 0 ? (
            <EmptyState title={t.common.empty} />
          ) : (
            <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
              {visible.map((dossier) => (
                <li key={dossier.id}>
                  <Link href={`/app/consultant/etudiants/${dossier.id}`} className="rs-row hover:bg-[var(--rs-primary-soft)]">
                    <Avatar name={dossier.student.fullName} url={dossier.student.avatarUrl} size={38} />
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="flex-1 text-[14px] font-semibold truncate">{dossier.student.fullName}</span>
                        <span className="text-[12px] font-semibold text-[var(--rs-primary)] shrink-0">{dossier.progress}%</span>
                      </span>
                      <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                        {dossier.university?.name ?? dossier.program ?? dossier.reference}
                      </span>
                      <span className="mt-1.5 block">
                        <ProgressBar value={dossier.progress} tone="dark" />
                      </span>
                    </span>
                    <StatusPill {...leadBadge(dossier.leadStatus, t)} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
