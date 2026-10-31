import type { Lang } from '../../i18n';

export const COURSES_LABEL: Record<Lang, string> = {
  fr: 'Cours de langues',
  en: 'Language courses',
  ar: 'دروس اللغات',
  ru: 'Курсы языков',
};

/**
 * Espace connecté des leçons. Il n'est pas préfixé par la langue : la
 * plateforme /app gère sa propre langue d'interface, indépendamment du
 * site public.
 */
export const ELEARNING_PATH = '/elearning';

export const APP_CTA: Record<Lang, string> = {
  fr: 'Accéder aux leçons',
  en: 'Go to the lessons',
  ar: 'الدخول إلى الدروس',
  ru: 'Перейти к урокам',
};

export const FAQ_LABEL: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة متكرّرة',
  ru: 'Частые вопросы',
};
