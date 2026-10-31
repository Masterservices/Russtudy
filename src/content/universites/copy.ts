import type { Lang } from '../../i18n';

export interface UniversityFacts {
  name: string;
  city: string;
  rank: string;
}

type UniversityCopy = { title: string; description: string; intro: string };

const DETAIL: Record<Lang, (f: UniversityFacts) => UniversityCopy> = {
  fr: (f) => ({
    title: `${f.name} — ${f.city} | RusStudy`,
    description: `${f.name} à ${f.city} (${f.rank}) : université d'État partenaire de RusStudy. Admission directe, dossier accompagné et logement universitaire.`,
    intro: `${f.name}, à ${f.city}, fait partie du réseau d'universités d'État russes partenaires de RusStudy (${f.rank}). RusStudy accompagne directement les étudiants tunisiens dans leur admission : constitution du dossier, lettre d'invitation, visa et installation sur place.`,
  }),
  en: (f) => ({
    title: `${f.name} — ${f.city} | RusStudy`,
    description: `${f.name} in ${f.city} (${f.rank}): a RusStudy partner state university. Direct admission, full application support and university housing.`,
    intro: `${f.name}, in ${f.city}, is part of RusStudy's network of partner Russian state universities (${f.rank}). RusStudy directly supports Tunisian students through admission: application file, invitation letter, visa and settling in.`,
  }),
  ar: (f) => ({
    title: `${f.name} — ${f.city} | RusStudy`,
    description: `${f.name} في ${f.city} (${f.rank}): جامعة حكومية شريكة لـ RusStudy. قبول مباشر ومرافقة كاملة للملف وسكن جامعي.`,
    intro: `تُعد ${f.name} في ${f.city} جزءًا من شبكة الجامعات الحكومية الروسية الشريكة لـ RusStudy (${f.rank}). ترافق RusStudy الطلبة التونسيين مباشرة في القبول: إعداد الملف، رسالة الدعوة، التأشيرة والاستقرار في عين المكان.`,
  }),
  ru: (f) => ({
    title: `${f.name} — ${f.city} | RusStudy`,
    description: `${f.name} в городе ${f.city} (${f.rank}): партнёрский государственный вуз RusStudy. Прямое поступление, полное сопровождение досье и общежитие.`,
    intro: `${f.name} в городе ${f.city} входит в сеть партнёрских государственных вузов России RusStudy (${f.rank}). RusStudy напрямую сопровождает тунисских студентов при поступлении: досье, приглашение, виза и обустройство на месте.`,
  }),
};

const INDEX: Record<Lang, { title: string; description: string; intro: string }> = {
  fr: {
    title: 'Universités partenaires en Russie | RusStudy',
    description: "Découvrez les universités d'État russes partenaires de RusStudy : Moscou, Saint-Pétersbourg, Kazan, Toula, Voronej et plus. Admission directe et accompagnement complet.",
    intro: "RusStudy travaille avec un réseau d'universités d'État russes reconnues, réparties dans huit villes : Moscou, Saint-Pétersbourg, Kazan, Toula, Elets, Lipetsk, Voronej et Orel. Chaque fiche présente l'établissement et le parcours d'admission direct proposé aux étudiants tunisiens.",
  },
  en: {
    title: 'Partner universities in Russia | RusStudy',
    description: "Discover RusStudy's partner Russian state universities: Moscow, Saint Petersburg, Kazan, Tula, Voronezh and more. Direct admission and full support.",
    intro: 'RusStudy works with a network of recognized Russian state universities across eight cities: Moscow, Saint Petersburg, Kazan, Tula, Yelets, Lipetsk, Voronezh and Oryol. Each page presents the institution and the direct admission path offered to Tunisian students.',
  },
  ar: {
    title: 'الجامعات الشريكة في روسيا | RusStudy',
    description: 'اكتشف الجامعات الحكومية الروسية الشريكة لـ RusStudy: موسكو، سان بطرسبورغ، قازان، تولا، فورونيج وغيرها. قبول مباشر ومرافقة كاملة.',
    intro: 'تتعاون RusStudy مع شبكة من الجامعات الحكومية الروسية المعترف بها موزعة على ثماني مدن: موسكو وسان بطرسبورغ وقازان وتولا ويلتس وليبتسك وفورونيج وأوريول. تعرض كل صفحة المؤسسة ومسار القبول المباشر المتاح للطلبة التونسيين.',
  },
  ru: {
    title: 'Партнёрские вузы в России | RusStudy',
    description: 'Партнёрские государственные вузы RusStudy: Москва, Санкт-Петербург, Казань, Тула, Воронеж и другие. Прямое поступление и полное сопровождение.',
    intro: 'RusStudy сотрудничает с сетью признанных государственных вузов России в восьми городах: Москве, Санкт-Петербурге, Казани, Туле, Ельце, Липецке, Воронеже и Орле. На каждой странице представлен вуз и путь прямого поступления для тунисских студентов.',
  },
};

export function buildUniversityDetailCopy(lang: Lang, facts: UniversityFacts): UniversityCopy {
  return DETAIL[lang](facts);
}

export function buildUniversityIndexCopy(lang: Lang) {
  return INDEX[lang];
}
