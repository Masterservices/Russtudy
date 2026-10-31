import type { Lang } from '../../i18n';

/** Libellé du segment « elearning » dans le fil d'Ariane. */
export const ELEARNING_LABEL: Record<Lang, string> = {
  fr: 'Leçons',
  en: 'Lessons',
  ar: 'الدروس',
  ru: 'Уроки',
};

const RUSSTUDY_WHATSAPP = '79964334489';

const ACCESS_MESSAGE: Record<Lang, string> = {
  fr: 'Bonjour, je suis les leçons de langue sur RusStudy et je souhaite ouvrir la suite du parcours.',
  en: 'Hello, I am following the language lessons on RusStudy and would like access to the rest of the track.',
  ar: 'مرحبًا، أتابع دروس اللغة على RusStudy وأرغب في فتح بقية المسار.',
  ru: 'Здравствуйте! Я прохожу уроки языка на RusStudy и хочу открыть остальной курс.',
};

/**
 * Demande d'accès aux leçons réservées.
 *
 * L'e-learning ne renvoie pas vers la plateforme de suivi de dossier :
 * apprendre une langue et déposer une candidature universitaire sont
 * deux démarches distinctes, et un visiteur venu pour la première n'a
 * rien à faire dans la seconde. L'accès payant s'ouvre aujourd'hui à la
 * main, donc le chemin honnête est la conversation.
 */
export function accessRequestHref(lang: Lang, courseTitle?: string): string {
  const message = courseTitle
    ? `${ACCESS_MESSAGE[lang]} (${courseTitle})`
    : ACCESS_MESSAGE[lang];
  return `https://wa.me/${RUSSTUDY_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/**
 * Page publique qui présente un parcours, d'après la langue enseignée.
 *
 * Les deux vitrines existantes sont /cours/russe et /cours/francais ;
 * un parcours d'une autre langue retomberait sur l'index, qui reste une
 * destination valable.
 */
export function publicCourseSlug(targetLang: string): string {
  if (targetLang === 'ru') return 'russe';
  if (targetLang === 'fr') return 'francais';
  return '';
}

/**
 * Langue enseignée, telle qu'elle s'annonce sur une carte de parcours.
 *
 * Un niveau seul — « A1 » — ne dit pas de quelle langue il s'agit, et
 * le titre du parcours de français est écrit en russe : un lecteur
 * francophone ne le déchiffre pas. Le drapeau se lit avant le texte.
 *
 * Un drapeau pour une langue est un raccourci (une langue n'est pas un
 * pays), acceptable ici où chaque parcours vise une langue nationale.
 */
export const TAUGHT_LANGUAGE: Record<string, { flag: string; label: Record<Lang, string> }> = {
  ru: {
    flag: '🇷🇺',
    label: { fr: 'Russe', en: 'Russian', ar: 'الروسية', ru: 'Русский' },
  },
  fr: {
    flag: '🇫🇷',
    label: { fr: 'Français', en: 'French', ar: 'الفرنسية', ru: 'Французский' },
  },
};
