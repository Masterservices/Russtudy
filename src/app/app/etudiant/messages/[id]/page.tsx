import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { requireRole } from '../../../../../features/app/data/session';
import { getMessages, getStudentDossier, getThreads } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import MessageComposer from '../../../../../features/app/ui/MessageComposer';
import MessageThread from '../../../../../features/app/ui/MessageThread';

export const metadata: Metadata = { title: 'Conversation' };

/** Écran 9b — Fil de discussion. */
export default async function StudentThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const dossier = await getStudentDossier(user.id, demo);
  const threads = await getThreads(dossier ? [dossier.id] : [], user.id, demo);
  const thread = threads.find((item) => item.id === id);
  if (!thread) notFound();

  const messages = await getMessages(id, user.id, demo);

  return (
    <>
      <AppHeader title={thread.title} backHref="/app/etudiant/messages" />

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
