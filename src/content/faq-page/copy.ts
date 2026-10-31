import type { Lang } from '../../i18n';

export interface FaqPageCopy {
  title: string;
  description: string;
}

const COPY: Record<Lang, FaqPageCopy> = {
  fr: {
    title: 'Questions fréquentes sur les études en Russie | RusStudy',
    description:
      "Reconnaissance des diplômes, langue d'enseignement, coûts, bourses d'État, délais d'admission, communauté étudiante tunisienne : toutes les réponses.",
  },
  en: {
    title: 'Frequently asked questions about studying in Russia | RusStudy',
    description:
      'Degree recognition, language of instruction, costs, state scholarships, admission timelines, Tunisian student community: all the answers.',
  },
  ar: {
    title: 'الأسئلة الشائعة حول الدراسة في روسيا | RusStudy',
    description: 'الاعتراف بالشهادات، لغة الدراسة، التكاليف، المنح الحكومية، آجال القبول، الجالية الطلابية التونسية: كل الأجوبة.',
  },
  ru: {
    title: 'Часто задаваемые вопросы об учёбе в России | RusStudy',
    description: 'Признание дипломов, язык обучения, стоимость, государственные стипендии, сроки поступления, тунисское студенческое сообщество: все ответы.',
  },
};

export function buildFaqPageCopy(lang: Lang): FaqPageCopy {
  return COPY[lang];
}
