import type { Lang } from '../../i18n';
import type { ShortThemeId } from './types';

/**
 * Thèmes des shorts, dans l'ordre où le filtre les propose.
 *
 * Un thème regroupe des situations, pas des points de grammaire : on
 * cherche « acheter » ou « l'heure », jamais « le génitif pluriel ».
 */
export const SHORT_THEMES: { id: ShortThemeId; label: Record<Lang, string> }[] = [
  {
    id: 'saluer',
    label: { fr: 'Saluer', en: 'Greetings', ar: 'التحية', ru: 'Приветствия' },
  },
  {
    id: 'converser',
    label: { fr: 'Prendre des nouvelles', en: 'Small talk', ar: 'السؤال عن الحال', ru: 'Как дела' },
  },
  {
    id: 'se-presenter',
    label: { fr: 'Se présenter', en: 'Introductions', ar: 'التعارف', ru: 'Знакомство' },
  },
  {
    id: 'politesse',
    label: { fr: 'Politesse', en: 'Politeness', ar: 'المجاملة', ru: 'Вежливость' },
  },
  {
    id: 'comprendre',
    label: { fr: 'Se faire comprendre', en: 'Getting understood', ar: 'التفاهم', ru: 'Понять друг друга' },
  },
  {
    id: 'acheter',
    label: { fr: 'Acheter', en: 'Shopping', ar: 'الشراء', ru: 'Покупки' },
  },
  {
    id: 'heure',
    label: { fr: 'L’heure', en: 'Telling time', ar: 'الوقت', ru: 'Время' },
  },
  {
    id: 'cafe',
    label: { fr: 'Au café', en: 'At the café', ar: 'في المقهى', ru: 'В кафе' },
  },
  {
    id: 'dialogue',
    label: { fr: 'Dialogues', en: 'Dialogues', ar: 'حوارات', ru: 'Диалоги' },
  },
];

export function themeLabel(id: ShortThemeId, lang: Lang): string {
  return SHORT_THEMES.find((theme) => theme.id === id)?.label[lang] ?? id;
}
