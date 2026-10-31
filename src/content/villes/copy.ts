import type { Lang } from '../../i18n';
import { CITY_COSTS, type CityId } from '../budget/data';

export interface CityFacts {
  name: string;
  budgetId: CityId;
  universityCount: number;
}

type CityCopy = { title: string; description: string; intro: string };

const DETAIL: Record<Lang, (f: CityFacts) => CityCopy> = {
  fr: (f) => {
    const c = CITY_COSTS[f.budgetId];
    return {
      title: `Étudier à ${f.name} | RusStudy`,
      description: `${f.name} : ${f.universityCount} université(s) partenaire(s) RusStudy. Logement en dortoir dès ${c.dorm} €/mois, vie courante estimée à ${c.living} €/mois.`,
      intro: `${f.name} accueille ${f.universityCount} des universités d'État partenaires de RusStudy. Le logement en dortoir universitaire y coûte à partir de ${c.dorm} €/mois (ou ${c.shared} €/mois en appartement partagé), pour un coût de vie courante estimé à ${c.living} €/mois.`,
    };
  },
  en: (f) => {
    const c = CITY_COSTS[f.budgetId];
    return {
      title: `Studying in ${f.name} | RusStudy`,
      description: `${f.name}: ${f.universityCount} RusStudy partner university(ies). Dorm housing from €${c.dorm}/month, daily living estimated at €${c.living}/month.`,
      intro: `${f.name} is home to ${f.universityCount} of RusStudy's partner state universities. University dorm housing starts at €${c.dorm}/month (or €${c.shared}/month for a shared apartment), with estimated daily living costs of €${c.living}/month.`,
    };
  },
  ar: (f) => {
    const c = CITY_COSTS[f.budgetId];
    return {
      title: `الدراسة في ${f.name} | RusStudy`,
      description: `${f.name}: ${f.universityCount} جامعة شريكة لـ RusStudy. سكن جامعي ابتداءً من ${c.dorm}€ شهريًا، ومصاريف معيشة تقدر بـ ${c.living}€ شهريًا.`,
      intro: `تضم ${f.name} ${f.universityCount} من الجامعات الحكومية الشريكة لـ RusStudy. يبدأ سعر السكن الجامعي من ${c.dorm}€ شهريًا (أو ${c.shared}€ شهريًا في شقة مشتركة)، بتكلفة معيشة يومية تقدر بـ ${c.living}€ شهريًا.`,
    };
  },
  ru: (f) => {
    const c = CITY_COSTS[f.budgetId];
    return {
      title: `Учёба в городе ${f.name} | RusStudy`,
      description: `${f.name}: ${f.universityCount} партнёрских вузов RusStudy. Общежитие от ${c.dorm}€/мес, повседневные расходы ≈ ${c.living}€/мес.`,
      intro: `В городе ${f.name} находится ${f.universityCount} партнёрских государственных вузов RusStudy. Проживание в общежитии стоит от ${c.dorm}€/мес (или ${c.shared}€/мес за долю в квартире), при ориентировочных повседневных расходах от ${c.living}€/мес.`,
    };
  },
};

const INDEX: Record<Lang, CityCopy> = {
  fr: {
    title: 'Villes universitaires en Russie | RusStudy',
    description:
      'Moscou, Saint-Pétersbourg, Kazan, Toula, Elets, Lipetsk, Voronej, Orel : coût de la vie et universités partenaires RusStudy dans chaque ville.',
    intro:
      "RusStudy accompagne les étudiants tunisiens dans huit villes universitaires russes : Moscou, Saint-Pétersbourg et Kazan, mais aussi Toula, Elets, Lipetsk, Voronej et Orel, des villes de région au coût de la vie nettement plus abordable. Chaque page présente les universités partenaires et une estimation du coût de la vie sur place.",
  },
  en: {
    title: 'University cities in Russia | RusStudy',
    description:
      'Moscow, Saint Petersburg, Kazan, Tula, Yelets, Lipetsk, Voronezh, Oryol: cost of living and RusStudy partner universities in each city.',
    intro:
      'RusStudy supports Tunisian students in eight Russian university cities: Moscow, Saint Petersburg and Kazan, as well as Tula, Yelets, Lipetsk, Voronezh and Oryol — regional cities with a much more affordable cost of living. Each page presents the partner universities and an estimated cost of living.',
  },
  ar: {
    title: 'المدن الجامعية في روسيا | RusStudy',
    description:
      'موسكو، سان بطرسبورغ، قازان، تولا، يلتس، ليبتسك، فورونيج، أوريول: تكلفة المعيشة والجامعات الشريكة لـ RusStudy في كل مدينة.',
    intro:
      'ترافق RusStudy الطلبة التونسيين في ثماني مدن جامعية روسية: موسكو وسان بطرسبورغ وقازان، وكذلك تولا ويلتس وليبتسك وفورونيج وأوريول، وهي مدن إقليمية بتكلفة معيشة أقل بكثير. تعرض كل صفحة الجامعات الشريكة وتقديرًا لتكلفة المعيشة.',
  },
  ru: {
    title: 'Университетские города России | RusStudy',
    description:
      'Москва, Санкт-Петербург, Казань, Тула, Елец, Липецк, Воронеж, Орёл: стоимость жизни и партнёрские вузы RusStudy в каждом городе.',
    intro:
      'RusStudy сопровождает тунисских студентов в восьми университетских городах России: Москве, Санкт-Петербурге и Казани, а также в Туле, Ельце, Липецке, Воронеже и Орле — региональных городах с заметно более доступной стоимостью жизни. На каждой странице представлены партнёрские вузы и ориентировочная стоимость жизни.',
  },
};

export function buildCityDetailCopy(lang: Lang, facts: CityFacts): CityCopy {
  return DETAIL[lang](facts);
}

export function buildCityIndexCopy(lang: Lang): CityCopy {
  return INDEX[lang];
}

const UNIVERSITY_COUNT_LABEL: Record<Lang, (count: number) => string> = {
  fr: (n) => `${n} université${n > 1 ? 's' : ''} partenaire${n > 1 ? 's' : ''}`,
  en: (n) => `${n} partner universit${n > 1 ? 'ies' : 'y'}`,
  ar: (n) => `${n} جامعة شريكة`,
  ru: (n) => `${n} партнёрских вуз${n > 1 ? 'ов' : ''}`,
};

export function buildUniversityCountLabel(lang: Lang, count: number): string {
  return UNIVERSITY_COUNT_LABEL[lang](count);
}

export const PER_MONTH_LABEL: Record<Lang, string> = {
  fr: '/ mois',
  en: '/ month',
  ar: '/ شهر',
  ru: '/ мес.',
};

export const COST_OF_LIVING_HEADING: Record<Lang, string> = {
  fr: 'Coût de la vie',
  en: 'Cost of living',
  ar: 'تكلفة المعيشة',
  ru: 'Стоимость жизни',
};

export const LIVING_MONTHLY_LABEL: Record<Lang, string> = {
  fr: 'Vie courante mensuelle (repas, transport)',
  en: 'Monthly living costs (food, transport)',
  ar: 'المعيشة الشهرية (طعام، تنقل)',
  ru: 'Ежемесячные расходы (еда, транспорт)',
};
