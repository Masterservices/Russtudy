import type { AppLang } from '../i18n';

const LOCALES: Record<AppLang, string> = { fr: 'fr-FR', en: 'en-GB', ar: 'ar-MA', ru: 'ru-RU' };

export function localeOf(lang: AppLang): string {
  return LOCALES[lang];
}

export function formatDate(value: string | null, lang: AppLang): string {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat(LOCALES[lang], { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}

export function formatDateTime(value: string | null, lang: AppLang): string {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat(LOCALES[lang], {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatAmount(value: number, currency: string, lang: AppLang): string {
  const formatted = new Intl.NumberFormat(LOCALES[lang], { maximumFractionDigits: 0 }).format(value);
  return `${formatted} ${currency}`;
}

/** Abrège les grands montants pour les tuiles statistiques (3,2 M RUB). */
export function formatCompactAmount(value: number, currency: string, lang: AppLang): string {
  const formatted = new Intl.NumberFormat(LOCALES[lang], {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
  return `${formatted} ${currency}`;
}

export function formatFileSize(bytes: number | null): string {
  if (!bytes || bytes <= 0) return '—';
  const units = ['o', 'Ko', 'Mo', 'Go'];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** exponent).toFixed(exponent === 0 ? 0 : 1)} ${units[exponent]}`;
}

export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

/** Nombre de jours entiers restants avant une date (0 si passée). */
export function daysUntil(value: string | null): number {
  if (!value) return 0;
  const target = new Date(value).getTime();
  if (Number.isNaN(target)) return 0;
  return Math.max(0, Math.ceil((target - Date.now()) / 86_400_000));
}
