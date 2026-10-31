import type { Metadata } from 'next';
import { requireRole } from '../../../../../../features/app/data/session';
import { getPricing, getQuote } from '../../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../../features/app/i18n/server';
import PrintButton from '../../../../../../features/app/ui/PrintButton';
import QuoteCard from '../../../../../../features/app/ui/QuoteCard';
import QuoteForm from '../../../../../../features/app/ui/admin/QuoteForm';
import { SectionTitle } from '../../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Devis' };

/** Écran 18 — Devis du dossier : consultation, ou émission s'il n'en existe pas. */
export default async function ConsultantStudentQuotePage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const [quote, pricing] = await Promise.all([getQuote(id, demo), getPricing(demo)]);

  return (
    <main className="rs-main pt-4">
      {quote ? (
        <>
          <QuoteCard quote={quote} t={t} lang={lang} />
          <div className="mt-4">
            <PrintButton label={t.payments.downloadQuote} />
          </div>
        </>
      ) : (
        <>
          <p className="mb-4 text-[13px] text-[var(--rs-muted)]">{t.payments.noQuote}</p>
          <SectionTitle>{t.payments.createQuote}</SectionTitle>
          <QuoteForm dossierId={id} pricing={pricing} t={t} disabled={demo} />
        </>
      )}
    </main>
  );
}
