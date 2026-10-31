import type { Metadata } from 'next';
import { requireRole } from '../../../../../features/app/data/session';
import { getConsultantDossiers } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import NewConversationForm from '../../../../../features/app/ui/messages/NewConversationForm';
import { EmptyState } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Nouvelle conversation' };

/** Ouverture d'une conversation par le consultant, sur l'un de ses dossiers. */
export default async function ConsultantNewConversationPage() {
  const { user, demo } = await requireRole(['consultant']);
  const { t } = await getAppI18n(user.lang);

  const dossiers = await getConsultantDossiers(user.id, demo);
  const targets = dossiers.map((dossier) => ({
    id: dossier.id,
    label: `${dossier.student.fullName || dossier.student.email} — ${dossier.reference}`,
  }));

  return (
    <>
      <AppHeader title={t.messages.newConversation} backHref="/app/consultant/messages" />

      <main className="rs-main">
        {targets.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <NewConversationForm dossiers={targets} t={t} disabled={demo} />
        )}
      </main>
    </>
  );
}
