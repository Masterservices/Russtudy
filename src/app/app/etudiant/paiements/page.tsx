import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getQuote, getStudentDossier } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import PrintButton from '../../../../features/app/ui/PrintButton';
import QuoteCard from '../../../../features/app/ui/QuoteCard';
import { EmptyState } from '../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Devis & paiements' };

/** Écran 11 — Devis et échéancier de paiement. */
export default async function StudentPaymentsPage() {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);

  const dossier = await getStudentDossier(user.id, demo);
  const quote = await getQuote(dossier?.id ?? null, demo);

  return (
    <>
      <AppHeader title={t.payments.title} subtitle={dossier?.reference} backHref="/app/etudiant" />

      <main className="rs-main">
        {!quote ? (
          <EmptyState title={t.payments.noQuote} />
        ) : (
          <>
            <QuoteCard quote={quote} t={t} lang={lang} />
            <div className="mt-4">
              <PrintButton label={t.payments.downloadQuote} />
            </div>
          </>
        )}
      </main>
    </>
  );
}
