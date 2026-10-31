import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import { getAllDossiers, getMessages, getThreads } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import MessageComposer from '../../../../../features/app/ui/MessageComposer';
import MessageThread from '../../../../../features/app/ui/MessageThread';

export const metadata: Metadata = { title: 'Conversation' };

/** Fil de discussion côté administration. */
export default async function AdminThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const dossiers = await getAllDossiers(demo);
  const threads = await getThreads(dossiers.map((d) => d.id), user.id, demo);
  const thread = threads.find((item) => item.id === id);
  if (!thread) notFound();

  const messages = await getMessages(id, user.id, demo);

  return (
    <>
      <AppHeader title={thread.title} backHref="/app/admin/messages" />

      <main className="rs-main">
        <MessageThread messages={messages} lang={lang} emptyLabel={t.messages.empty} />
        <MessageComposer
          conversationId={id}
          placeholder={t.messages.placeholder}
          sendLabel={t.common.send}
          disabled={demo}
        />
      </main>
    </>
  );
}
