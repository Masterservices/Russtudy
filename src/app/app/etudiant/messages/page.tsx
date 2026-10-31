import type { Metadata } from 'next';
import Link from 'next/link';
import { PenSquare } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getStudentDossier, getThreads } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import ConversationList from '../../../../features/app/ui/ConversationList';
import Tabs from '../../../../features/app/ui/Tabs';

export const metadata: Metadata = { title: 'Messages' };

const FILTERS = ['tous', 'consultant', 'universite'] as const;
type Filter = (typeof FILTERS)[number];

/** Écran 9 — Messagerie de l'étudiant. */
export default async function StudentMessagesPage({ searchParams }: { searchParams: Promise<{ filtre?: string }> }) {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const { filtre } = await searchParams;
  const active: Filter = FILTERS.includes(filtre as Filter) ? (filtre as Filter) : 'tous';

  const dossier = await getStudentDossier(user.id, demo);
  const threads = await getThreads(dossier ? [dossier.id] : [], user.id, demo);

  const visible = threads.filter((thread) => {
    if (active === 'consultant') return thread.topic === 'consultant';
    if (active === 'universite') return thread.topic === 'university';
    return true;
  });

  return (
    <>
      <AppHeader title={t.messages.title} />

      <main className="rs-main">
        <Tabs
          active={active}
          items={[
            { key: 'tous', label: t.messages.tabs.all, href: '/app/etudiant/messages' },
            { key: 'consultant', label: t.messages.tabs.consultant, href: '/app/etudiant/messages?filtre=consultant' },
            { key: 'universite', label: t.messages.tabs.university, href: '/app/etudiant/messages?filtre=universite' },
          ]}
        />

        <Link href="/app/etudiant/messages/nouveau" className="rs-btn rs-btn-primary mt-3.5">
          <PenSquare size={17} aria-hidden="true" />
          {t.messages.newConversation}
        </Link>

        <div className="mt-3.5">
          <ConversationList threads={visible} basePath="/app/etudiant/messages" t={t} lang={lang} />
        </div>
      </main>
    </>
  );
}
