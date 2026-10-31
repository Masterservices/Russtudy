import type { Metadata } from 'next';
import Link from 'next/link';
import { PenSquare } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getAllDossiers, getThreads } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import ConversationList from '../../../../features/app/ui/ConversationList';

export const metadata: Metadata = { title: 'Messages' };

/** Messagerie de l'administration : tous les dossiers, tous les canaux. */
export default async function AdminMessagesPage() {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);

  const dossiers = await getAllDossiers(demo);
  const threads = await getThreads(dossiers.map((d) => d.id), user.id, demo);

  return (
    <>
      <AppHeader title={t.messages.title} backHref="/app/admin" />

      <main className="rs-main">
        <Link href="/app/admin/messages/nouveau" className="rs-btn rs-btn-primary mb-3.5">
          <PenSquare size={17} aria-hidden="true" />
          {t.messages.newConversation}
        </Link>

        <ConversationList threads={threads} basePath="/app/admin/messages" t={t} lang={lang} />
      </main>
    </>
  );
}
