import type { AppLang } from '../i18n';
import { localeOf } from '../utils/format';

/**
 * Grille du mois courant. Les jours porteurs d'un événement sont mis en
 * évidence ; la grille est purement indicative, le détail est listé dessous.
 */
export default function MonthCalendar({ lang, markedDays }: { lang: AppLang; markedDays: number[] }) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Lundi en première colonne (getDay() renvoie 0 pour dimanche).
  const offset = (firstDay.getDay() + 6) % 7;

  const locale = localeOf(lang);
  const monthLabel = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(firstDay);
  const weekdays = Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(new Date(2024, 0, 1 + index)),
  );

  const marked = new Set(markedDays);

  return (
    <section className="rs-card p-4">
      <p className="mb-3 text-[14px] font-semibold capitalize">{monthLabel}</p>

      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((day, index) => (
          <span key={`${day}-${index}`} className="text-[10px] font-semibold text-[var(--rs-muted)] py-1">
            {day}
          </span>
        ))}

        {Array.from({ length: offset }, (_, index) => (
          <span key={`pad-${index}`} aria-hidden="true" />
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const isToday = day === today;
          const hasEvent = marked.has(day);
          return (
            <span
              key={day}
              className={`aspect-square grid place-items-center rounded-full text-[12px] ${
                isToday
                  ? 'bg-[var(--rs-primary)] text-white font-bold'
                  : hasEvent
                    ? 'bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] font-semibold'
                    : 'text-[var(--rs-ink)]'
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </section>
  );
}
