import { translations, type Lang } from '../../i18n';
import type { FiliereFacts } from './copy';
import { LEGACY_PROGRAM_INDEX, type FiliereSlug } from './registry';

export interface FiliereDetailFacts extends FiliereFacts {
  details: string[];
}

/*
 * Faits des filières issues de la scission de « Pharmacie & Dentaire ».
 * Durée et frais reprennent les données réelles déjà publiées pour l'offre
 * combinée (5 ans, 3 200 € / an — voir PROGRAM_BASE_TUITION[2] dans
 * src/content/budget/data.ts) : les deux spécialités russes (33.05.01 et
 * 31.05.03) durent 5 ans.
 * TODO produit : confirmer un tarif différencié pharmacie vs dentaire si les
 * universités partenaires en publient un.
 */
const SPLIT_FACTS: Record<'pharmacie' | 'medecine-dentaire', Record<Lang, FiliereDetailFacts>> = {
  pharmacie: {
    fr: {
      name: 'Pharmacie',
      duration: '5 ans',
      price: '3 200 € / an',
      tag: 'SÉLECTIF',
      details: ['Spécialité russe 33.05.01', 'Diplômes accrédités internationalement', 'Frais de scolarité très abordables', 'Stages en officine et en industrie'],
    },
    en: {
      name: 'Pharmacy',
      duration: '5 years',
      price: '€3,200 / year',
      tag: 'SELECTIVE',
      details: ['Russian specialty 33.05.01', 'Internationally accredited degrees', 'Very affordable tuition', 'Community and industrial pharmacy internships'],
    },
    ar: {
      name: 'الصيدلة',
      duration: '5 سنوات',
      price: '3200 € / سنة',
      tag: 'انتقائي',
      details: ['التخصص الروسي 33.05.01', 'شهادات معتمدة دوليًا', 'رسوم دراسية معقولة جدًا', 'تربصات في الصيدليات والصناعة الدوائية'],
    },
    ru: {
      name: 'Фармация',
      duration: '5 лет',
      price: '3 200 € / год',
      tag: 'ОТБОРНОЕ',
      details: ['Специальность 33.05.01', 'Дипломы международной аккредитации', 'Очень доступная стоимость', 'Практика в аптеках и на фармпроизводстве'],
    },
  },
  'medecine-dentaire': {
    fr: {
      name: 'Médecine dentaire',
      duration: '5 ans',
      price: '3 200 € / an',
      tag: 'SÉLECTIF',
      details: ['Spécialité russe 31.05.03', 'Pratique clinique précoce', 'Écoles dentaires équipées en simulateurs 3D', 'Diplômes accrédités internationalement'],
    },
    en: {
      name: 'Dentistry',
      duration: '5 years',
      price: '€3,200 / year',
      tag: 'SELECTIVE',
      details: ['Russian specialty 31.05.03', 'Early clinical practice', 'Dental schools with 3D simulators', 'Internationally accredited degrees'],
    },
    ar: {
      name: 'طب الأسنان',
      duration: '5 سنوات',
      price: '3200 € / سنة',
      tag: 'انتقائي',
      details: ['التخصص الروسي 31.05.03', 'ممارسة سريرية مبكرة', 'مدارس أسنان مجهزة بمحاكيات ثلاثية الأبعاد', 'شهادات معتمدة دوليًا'],
    },
    ru: {
      name: 'Стоматология',
      duration: '5 лет',
      price: '3 200 € / год',
      tag: 'ОТБОРНОЕ',
      details: ['Специальность 31.05.03', 'Ранняя клиническая практика', 'Стоматологические школы с 3D-симуляторами', 'Дипломы международной аккредитации'],
    },
  },
};

/** Source unique des faits d'une filière (nom, durée, frais, tag, puces). */
export function getFiliereFacts(lang: Lang, slug: FiliereSlug): FiliereDetailFacts {
  const legacyIndex = LEGACY_PROGRAM_INDEX[slug];
  if (legacyIndex !== undefined) return translations[lang].programs.items[legacyIndex];
  return SPLIT_FACTS[slug as 'pharmacie' | 'medecine-dentaire'][lang];
}
