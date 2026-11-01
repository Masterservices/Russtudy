import type { Lang } from '../i18n';

export function basePathFor(lang: Lang): string {
  return lang === 'fr' ? '' : `/${lang}`;
}
