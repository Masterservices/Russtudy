import { fr, type AppDictionary } from './dictionaries/fr';
import { en } from './dictionaries/en';
import { ar } from './dictionaries/ar';
import { ru } from './dictionaries/ru';

export type { AppDictionary };

export type AppLang = 'fr' | 'en' | 'ar' | 'ru';

export const APP_LANGS: { code: AppLang; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'ru', label: 'Русский', dir: 'ltr' },
];

export const APP_LANG_COOKIE = 'rs_app_lang';

const DICTIONARIES: Record<AppLang, AppDictionary> = { fr, en, ar, ru };

export function isAppLang(value: string | undefined | null): value is AppLang {
  return value === 'fr' || value === 'en' || value === 'ar' || value === 'ru';
}

export function getAppDictionary(lang: AppLang): AppDictionary {
  return DICTIONARIES[lang];
}

export function dirFor(lang: AppLang): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

/** Remplace les jetons `{clé}` d'un libellé traduit. */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}
