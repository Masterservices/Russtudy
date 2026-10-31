import type { Metadata } from 'next';
import { CalendarDays, CreditCard } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getConsultantDossiers, getQuotesForDossiers } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import MonthCalendar from '../../../../features/app/ui/MonthCalendar';
import { EmptyState, SectionTitle } from '../../../../features/app/ui/primitives';
import { formatDate } from '../../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Agenda' };

interface AgendaEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  kind: 'payment' | 'start';
}

/**
 * Écran 21 — Agenda.
 * Les événements sont déduits des données réelles du portefeuille (échéances
 * de paiement et dates de rentrée) : aucun calendrier séparé à maintenir.
 */
export default async function ConsultantCalendarPage() {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);

  const dossiers = await getConsultantDossiers(user.id, demo);
  const quotes = await getQuotesForDossiers(dossiers.map((d) => d.id), demo);
  const byDossier = new Map(dossiers.map((d) => [d.id, d]));

  const events: AgendaEvent[] = [];

  for (const quote of quotes) {
    const dossier = byDossier.get(quote.dossierId);
    for (const payment of quote.payments) {
      if (!payment.dueDate || payment.status === 'paid') continue;
      events.push({
        id: `${quote.id}-${payment.id}`,
        date: payment.dueDate,
        title: payment.label,
        subtitle: dossier?.student.fullName ?? quote.reference,
        kind: 'payment',
      });
    }
  }

  for (const dossier of dossiers) {
    if (!dossier.startDate) continue;
    events.push({
      id: `start-${dossier.id}`,
      date: dossier.startDate,
      title: t.student.startDate,
      subtitle: dossier.student.fullName,
      kind: 'start',
    });
  }

  events.sort((a, b) => a.date.localeCompare(b.date));

  const now = new Date();
  const markedDays = events
    .map((event) => new Date(event.date))
    .filter((date) => date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth())
    .map((date) => date.getDate());

  return (
    <>
      <AppHeader title={t.consultant.calendar} />

      <main className="rs-main">
        <MonthCalendar lang={lang} markedDays={markedDays} />

        <SectionTitle>{t.consultant.events}</SectionTitle>

        {events.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
            {events.map((event) => (
              <li key={event.id} className="rs-row">
                <span
                  className={`grid place-items-center w-9 h-9 rounded-xl shrink-0 ${
                    event.kind === 'payment'
                      ? 'bg-[var(--rs-warning-soft)] text-[var(--rs-warning)]'
                      : 'bg-[var(--rs-primary-soft)] text-[var(--rs-primary)]'
                  }`}
                  aria-hidden="true"
                >
                  {event.kind === 'payment' ? <CreditCard size={17} /> : <CalendarDays size={17} />}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-medium truncate">{event.title}</span>
                  <span className="block text-[12px] text-[var(--rs-muted)] truncate">{event.subtitle}</span>
                </span>
                <span className="text-[12px] text-[var(--rs-muted)] shrink-0">{formatDate(event.date, lang)}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
