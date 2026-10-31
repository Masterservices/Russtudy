import type { Lang } from '../../i18n';

export interface FiliereFacts {
  name: string;
  duration: string;
  price: string;
  tag: string;
}

type FiliereCopy = { title: string; description: string; intro: string };

const DETAIL: Record<Lang, (f: FiliereFacts) => FiliereCopy> = {
  fr: (f) => ({
    title: `${f.name} en Russie — ${f.duration}, dès ${f.price} | RusStudy`,
    description: `Étudier ${f.name} en Russie avec RusStudy : ${f.duration}, ${f.price}. Admission directe, dossier accompagné et logement universitaire.`,
    intro: `RusStudy accompagne les étudiants tunisiens vers la filière ${f.name} dans ses universités partenaires russes : ${f.duration} d'études, ${f.price} de frais de scolarité payés directement à l'université.`,
  }),
  en: (f) => ({
    title: `${f.name} in Russia — ${f.duration}, from ${f.price} | RusStudy`,
    description: `Study ${f.name} in Russia with RusStudy: ${f.duration}, ${f.price}. Direct admission, full application support and university housing.`,
    intro: `RusStudy supports Tunisian students into ${f.name} at its partner Russian universities: ${f.duration} of study, ${f.price} in tuition paid directly to the university.`,
  }),
  ar: (f) => ({
    title: `${f.name} في روسيا — ${f.duration}، ابتداءً من ${f.price} | RusStudy`,
    description: `ادرس ${f.name} في روسيا مع RusStudy: ${f.duration}، ${f.price}. قبول مباشر ومرافقة كاملة للملف وسكن جامعي.`,
    intro: `ترافق RusStudy الطلبة التونسيين نحو تخصص ${f.name} في جامعاتها الشريكة الروسية: ${f.duration} من الدراسة، ${f.price} رسوم تُدفع مباشرة للجامعة.`,
  }),
  ru: (f) => ({
    title: `${f.name} в России — ${f.duration}, от ${f.price} | RusStudy`,
    description: `Учитесь на ${f.name} в России с RusStudy: ${f.duration}, ${f.price}. Прямое поступление, полное сопровождение и общежитие.`,
    intro: `RusStudy сопровождает тунисских студентов по направлению «${f.name}» в партнёрских российских вузах: ${f.duration} обучения, ${f.price} — оплата напрямую в университет.`,
  }),
};

const INDEX: Record<Lang, { title: string; description: string; intro: string }> = {
  fr: {
    title: 'Filières et programmes en Russie | RusStudy',
    description: "Médecine, ingénierie, pharmacie, business : découvrez les filières accréditées accessibles avec RusStudy, frais et durée d'études.",
    intro: "RusStudy accompagne les étudiants tunisiens vers des filières accréditées dans ses universités partenaires russes, avec des frais de scolarité transparents payés directement à l'université.",
  },
  en: {
    title: 'Fields of study in Russia | RusStudy',
    description: 'Medicine, engineering, pharmacy, business: discover the accredited fields of study available with RusStudy, tuition and duration.',
    intro: "RusStudy supports Tunisian students into accredited fields of study at its partner Russian universities, with transparent tuition fees paid directly to the university.",
  },
  ar: {
    title: 'التخصصات والبرامج في روسيا | RusStudy',
    description: 'الطب، الهندسة، الصيدلة، الأعمال: اكتشف التخصصات المعتمدة المتاحة مع RusStudy، الرسوم ومدة الدراسة.',
    intro: 'ترافق RusStudy الطلبة التونسيين نحو تخصصات معتمدة في جامعاتها الشريكة الروسية، برسوم دراسية شفافة تُدفع مباشرة للجامعة.',
  },
  ru: {
    title: 'Направления обучения в России | RusStudy',
    description: 'Медицина, инженерия, фармация, бизнес: аккредитованные направления обучения с RusStudy, стоимость и длительность.',
    intro: 'RusStudy сопровождает тунисских студентов по аккредитованным направлениям в партнёрских российских вузах с прозрачной оплатой напрямую в университет.',
  },
};

export function buildFiliereDetailCopy(lang: Lang, facts: FiliereFacts): FiliereCopy {
  return DETAIL[lang](facts);
}

export function buildFiliereIndexCopy(lang: Lang) {
  return INDEX[lang];
}
