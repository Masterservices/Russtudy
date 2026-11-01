import type { Lang } from '../../i18n';

export interface CoutCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  tableTitle: string;
  scholarshipTitle: string;
}

const COPY: Record<Lang, CoutCopy> = {
  fr: {
    title: 'Coût des études en Russie & bourses | RusStudy',
    description:
      "Frais de scolarité par filière et par ville, coût du logement et de la vie courante, bourses d'État russes : le budget réel des études en Russie.",
    h1: 'Coût des études en Russie et bourses disponibles',
    intro:
      "Frais de scolarité payés directement à l'université, logement et vie courante : voici une estimation réaliste du budget annuel selon la filière et la ville, ainsi que les bourses d'État russes accessibles aux étudiants tunisiens.",
    tableTitle: 'Frais de scolarité indicatifs par filière et par ville',
    scholarshipTitle: "Bourses d'État russes",
  },
  en: {
    title: 'Cost of studying in Russia & scholarships | RusStudy',
    description:
      'Tuition fees by field of study and city, housing and daily living costs, Russian state scholarships: the real budget for studying in Russia.',
    h1: 'Cost of studying in Russia and available scholarships',
    intro:
      "Tuition paid directly to the university, housing and daily living: here is a realistic estimate of the annual budget depending on your field of study and city, along with the Russian state scholarships available to Tunisian students.",
    tableTitle: 'Indicative tuition fees by field of study and city',
    scholarshipTitle: 'Russian state scholarships',
  },
  ar: {
    title: 'تكلفة الدراسة في روسيا والمنح | RusStudy',
    description: 'الرسوم الدراسية حسب التخصص والمدينة، تكلفة السكن والمعيشة اليومية، المنح الحكومية الروسية: الميزانية الحقيقية للدراسة في روسيا.',
    h1: 'تكلفة الدراسة في روسيا والمنح المتاحة',
    intro: 'رسوم دراسية تُدفع مباشرة للجامعة، سكن ومعيشة يومية: إليك تقديرًا واقعيًا للميزانية السنوية حسب التخصص والمدينة، إضافة إلى المنح الحكومية الروسية المتاحة للطلبة التونسيين.',
    tableTitle: 'الرسوم الدراسية التقريبية حسب التخصص والمدينة',
    scholarshipTitle: 'المنح الحكومية الروسية',
  },
  ru: {
    title: 'Стоимость обучения в России и стипендии | RusStudy',
    description: 'Стоимость обучения по специальности и городу, расходы на жильё и повседневную жизнь, государственные стипендии России: реальный бюджет обучения в России.',
    h1: 'Стоимость обучения в России и доступные стипендии',
    intro: 'Оплата обучения напрямую вузу, проживание и повседневные расходы: реалистичная оценка годового бюджета в зависимости от специальности и города, а также государственные стипендии России, доступные тунисским студентам.',
    tableTitle: 'Ориентировочная стоимость обучения по специальности и городу',
    scholarshipTitle: 'Государственные стипендии России',
  },
};

export function buildCoutCopy(lang: Lang): CoutCopy {
  return COPY[lang];
}
