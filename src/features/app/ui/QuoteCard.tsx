import type { AppDictionary, AppLang } from '../i18n';
import type { Quote } from '../types';
import { formatAmount, formatDate } from '../utils/format';
import { interpolate } from '../i18n';
import { StatusPill } from './primitives';
import { paymentBadge } from './status';

/** Devis et échéancier — écran étudiant et espace consultant. */
export default function QuoteCard({ quote, t, lang }: { quote: Quote; t: AppDictionary; lang: AppLang }) {
  return (
    <>
      <section className="rs-card rs-gradient p-5 border-transparent">
        <p className="text-[12px] font-medium text-white/80">{t.payments.total}</p>
        <p className="mt-1 text-[30px] font-bold leading-none">{formatAmount(quote.totalAmount, quote.currency, lang)}</p>
        <p className="mt-2 text-[11px] text-white/70">{quote.reference}</p>
      </section>

      <ul className="rs-card mt-3 px-4 divide-y divide-[var(--rs-line)]">
        {quote.items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 py-3.5">
            <span className="text-[14px] text-[var(--rs-muted)]">{item.label}</span>
            <span className="text-[14px] font-semibold shrink-0">{formatAmount(item.amount, quote.currency, lang)}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-6 mb-2.5 text-[15px] font-semibold">{t.payments.schedule}</h2>

      <ul className="rs-card px-4 divide-y divide-[var(--rs-line)]">
        {quote.payments.map((payment) => (
          <li key={payment.id} className="flex items-center gap-3 py-3.5">
            <span className="flex-1 min-w-0">
              <span className="block text-[14px] font-medium truncate">{payment.label}</span>
              <span className="block text-[12px] text-[var(--rs-muted)]">
                {payment.paidAt
                  ? interpolate(t.payments.paidOn, { date: formatDate(payment.paidAt, lang) })
                  : interpolate(t.payments.dueOn, { date: formatDate(payment.dueDate, lang) })}
              </span>
            </span>
            <span className="text-end shrink-0">
              <span className="block text-[14px] font-semibold">{formatAmount(payment.amount, quote.currency, lang)}</span>
              <StatusPill {...paymentBadge(payment.status, t)} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
