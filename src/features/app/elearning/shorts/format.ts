import type { AppLang } from '../../i18n';

/**
 * Mise en forme des durées et des dates des shorts.
 *
 * Tout passe par `Intl` : « 3 дня », « 5 дней » et « ٣ أيام »
 * s'accordent seuls, sans table de pluriels à tenir pour quatre langues.
 */

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;

type Unit = 'minute' | 'hour' | 'day' | 'month';

function split(ms: number): { value: number; unit: Unit } {
  const abs = Math.abs(ms);
  if (abs < HOUR) return { value: Math.max(1, Math.round(abs / MINUTE)), unit: 'minute' };
  if (abs < DAY) return { value: Math.round(abs / HOUR), unit: 'hour' };
  if (abs < MONTH) return { value: Math.round(abs / DAY), unit: 'day' };
  return { value: Math.round(abs / MONTH), unit: 'month' };
}

/** Durée courte : « 15 min », « 3 j », « 1 mois ». */
export function formatSpan(ms: number, lang: AppLang): string {
  const { value, unit } = split(ms);
  return new Intl.NumberFormat(lang, { style: 'unit', unit, unitDisplay: 'short' }).format(value);
}

/** Échéance relative : « dans 15 min », « demain ». */
export function formatDue(due: number, now: number, lang: AppLang): string {
  const { value, unit } = split(due - now);
  return new Intl.RelativeTimeFormat(lang, { numeric: 'auto', style: 'short' }).format(value, unit);
}

/** Initiale du jour de la semaine, pour l'axe du graphique. */
export function formatWeekday(time: number, lang: AppLang): string {
  return new Intl.DateTimeFormat(lang, { weekday: 'narrow' }).format(time);
}

/** Jour complet, pour la description accessible du graphique. */
export function formatDay(time: number, lang: AppLang): string {
  return new Intl.DateTimeFormat(lang, { weekday: 'long', day: 'numeric', month: 'long' }).format(time);
}

export function formatPercent(ratio: number, lang: AppLang): string {
  return new Intl.NumberFormat(lang, { style: 'percent', maximumFractionDigits: 0 }).format(ratio);
}
