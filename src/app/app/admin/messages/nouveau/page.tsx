import type { Metadata } from 'next';
import { requireRole } from '../../../../../features/app/data/session';
import { getAllDossiers } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import NewConversationForm from '../../../../../features/app/ui/messages/NewConversationForm';
import { EmptyState } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Nouvelle conversation' };

/**
 * Ouverture d'une conversation par l'administration. C'est le seul espace où
 * le canal « Université » est proposé : toute communication avec une
 * université passe par une validation de l'administration.
 */
export default async function AdminNewConversationPage() {
  const { user, demo } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);

  const dossiers = await getAllDossiers(demo);
  const targets = dossiers.map((dossier) => ({
    id: dossier.id,
    label: `${dossier.student.fullName || dossier.student.email} — ${dossier.reference}`,
  }));

  return (
    <>
      <AppHeader title={t.messages.newConversation} backHref="/app/admin/messages" />

      <main className="rs-main">
        {targets.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <NewConversationForm dossiers={targets} allowUniversity t={t} disabled={demo} />
        )}
      </main>
    </>
  );
}
