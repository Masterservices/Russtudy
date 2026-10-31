import type { Lang } from '../../i18n';

/**
 * Accord en nombre.
 *
 * « 1 уроков » est agrammatical, et le russe ne se contente pas d'un
 * singulier et d'un pluriel : il distingue 1, 2–4 et le reste, avec des
 * exceptions de 11 à 14. Afficher un compteur sans cette règle trahit
 * immédiatement une interface traduite à la machine, dans la langue
 * même que le cours prétend enseigner.
 */
type Forms = { one: string; few?: string; many: string };

const LESSON: Record<Lang, Forms> = {
  fr: { one: 'leçon', many: 'leçons' },
  en: { one: 'lesson', many: 'lessons' },
  ru: { one: 'урок', few: 'урока', many: 'уроков' },
  ar: { one: 'درس', few: 'درسان', many: 'دروس' },
};

const MODULE: Record<Lang, Forms> = {
  fr: { one: 'module', many: 'modules' },
  en: { one: 'module', many: 'modules' },
  ru: { one: 'модуль', few: 'модуля', many: 'модулей' },
  ar: { one: 'وحدة', few: 'وحدتان', many: 'وحدات' },
};

function pickForm(lang: Lang, count: number, forms: Forms): string {
  if (lang === 'ru') {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return forms.one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms.few ?? forms.many;
    return forms.many;
  }
  if (lang === 'ar') {
    if (count === 1) return forms.one;
    if (count === 2) return forms.few ?? forms.many;
    return forms.many;
  }
  return count > 1 ? forms.many : forms.one;
}

export function lessonCount(lang: Lang, count: number): string {
  return `${count} ${pickForm(lang, count, LESSON[lang])}`;
}

export function moduleCount(lang: Lang, count: number): string {
  return `${count} ${pickForm(lang, count, MODULE[lang])}`;
}
