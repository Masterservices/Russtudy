import type { Metadata } from 'next';
import { requireRole } from '../../../../../features/app/data/session';
import { getStudentDossier } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import NewConversationForm from '../../../../../features/app/ui/messages/NewConversationForm';
import { EmptyState } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Nouvelle conversation' };

/** Ouverture d'une conversation par l'étudiant, sur son propre dossier. */
export default async function StudentNewConversationPage() {
  const { user, demo } = await requireRole(['student']);
  const { t } = await getAppI18n(user.lang);

  const dossier = await getStudentDossier(user.id, demo);

  return (
    <>
      <AppHeader title={t.messages.newConversation} backHref="/app/etudiant/messages" />

      <main className="rs-main">
        {/* Sans dossier, aucun interlocuteur n'est rattaché : la conversation
            serait rejetée par la RLS. On explique plutôt que d'échouer. */}
        {dossier ? (
          <>
            <p className="mb-4 text-[13px] text-[var(--rs-muted)]">{t.messages.universityViaAdmin}</p>
            <NewConversationForm dossiers={[{ id: dossier.id, label: dossier.reference }]} t={t} disabled={demo} />
          </>
        ) : (
          <EmptyState title={t.student.noDossier} hint={t.student.noDossierHint} />
        )}
      </main>
    </>
  );
}
