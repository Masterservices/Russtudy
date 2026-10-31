import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';
import type { SectionImageKey } from '../images/registry';
import { EXTRA_COMPARISONS } from './destinations';

/** Ordre identique aux entrées COMPARISONS ci-dessous. */
export const COMPARISON_SLUGS = [
  'russie-vs-france',
  'russie-vs-roumanie',
  'russie-vs-tunisie',
  'russie-vs-turquie',
  'russie-vs-allemagne',
  'russie-vs-italie',
  'russie-vs-chine',
] as const;

export type ComparisonSlug = (typeof COMPARISON_SLUGS)[number];

export function comparisonIndexFromSlug(slug: string): number {
  return COMPARISON_SLUGS.indexOf(slug as ComparisonSlug);
}

export const COMPARISON_IMAGE_KEYS: Record<ComparisonSlug, SectionImageKey> = {
  'russie-vs-france': 'comparatif-france',
  'russie-vs-roumanie': 'comparatif-roumanie',
  'russie-vs-tunisie': 'comparatif-tunisie',
  'russie-vs-turquie': 'comparatif-turquie',
  'russie-vs-allemagne': 'comparatif-allemagne',
  'russie-vs-italie': 'comparatif-italie',
  'russie-vs-chine': 'comparatif-chine',
};

export interface ComparisonRow {
  criterion: string;
  russia: string;
  other: string;
}

export interface CountryComparisonCopy {
  title: string;
  description: string;
  h1: string;
  summary: string;
  intro: string;
  tableTitle: string;
  columns: { criterion: string; russia: string; other: string };
  rows: ComparisonRow[];
  disclaimer: string;
  otherWinsTitle: string;
  otherWins: string[];
  russiaWinsTitle: string;
  russiaWins: string[];
  verdictTitle: string;
  verdict: string;
  faq: FaqEntry[];
  keywords: string[];
}

export interface ComparisonEntry {
  slug: string;
  updatedAt: string;
  copy: Record<Lang, CountryComparisonCopy>;
}

const COMPARISONS: ComparisonEntry[] = [
  {
    slug: 'russie-vs-france',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: 'Étudier en Russie ou en France : comparatif honnête pour un bachelier tunisien | RusStudy',
        description:
          "Frais, sélection, langue, coût de la vie et reconnaissance du diplôme : comparaison factuelle entre les études en Russie et en France pour un étudiant tunisien.",
        h1: 'Étudier en Russie ou en France ?',
        summary: 'Sélection, budget réel et reconnaissance : ce qui sépare vraiment les deux destinations.',
        intro:
          "La France est la destination réflexe des bacheliers tunisiens, et pour de bonnes raisons. Mais entre la sélectivité en médecine, le coût de la vie et les justificatifs de ressources exigés au visa, le projet échoue souvent avant d'avoir commencé. Voici une comparaison honnête, y compris là où la France reste le meilleur choix.",
        tableTitle: 'Le comparatif, critère par critère',
        columns: { criterion: 'Critère', russia: 'Russie', other: 'France' },
        rows: [
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière',
            other: "Frais différenciés pour non-UE, de l'ordre de 2 800 à 3 800 €, avec exonérations possibles",
          },
          {
            criterion: 'Sélection en médecine',
            russia: 'Admission sur dossier scolaire, sans concours',
            other: 'Parcours PASS/LAS, très sélectif, redoublement interdit en première année',
          },
          {
            criterion: "Langue d'enseignement",
            russia: 'Russe après une année préparatoire, ou anglais selon les cursus',
            other: 'Français, niveau attesté exigé au dossier',
          },
          {
            criterion: 'Durée des études de médecine',
            russia: '6 ans, plus l’année préparatoire de langue',
            other: 'Minimum 9 ans jusqu’au diplôme de docteur',
          },
          {
            criterion: 'Coût de la vie mensuel',
            russia: 'De 140 à 260 € selon la ville, logement en résidence de 30 à 90 €',
            other: 'Nettement plus élevé, très variable selon la région',
          },
          {
            criterion: 'Justificatif de ressources au visa',
            russia: 'Non exigé sous cette forme',
            other: 'Ressources mensuelles à justifier pour obtenir le visa étudiant',
          },
          {
            criterion: 'Reconnaissance du diplôme',
            russia: "Diplôme d'État russe, procédure d'équivalence établie en Tunisie",
            other: 'Diplôme français, reconnaissance très large',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Les montants côté France sont des ordres de grandeur issus de sources publiques, à vérifier auprès de l'établissement visé avant toute décision.",
        otherWinsTitle: 'Là où la France reste le meilleur choix',
        otherWins: [
          "Si vous visez une carrière en France ou dans l'Union européenne, le diplôme français y est immédiatement lisible",
          "Si vous parlez déjà français couramment, vous économisez l'année préparatoire de langue",
          'Si votre dossier scolaire est excellent et vous permet de viser une filière sélective',
          "Si votre famille peut assumer un coût de la vie sensiblement plus élevé sur toute la durée du cursus",
        ],
        russiaWinsTitle: 'Là où la Russie prend l’avantage',
        russiaWins: [
          "L'accès direct à la médecine sans concours d'entrée éliminatoire",
          'Un budget total maîtrisé, frais de scolarité et logement compris',
          "Un logement universitaire garanti et pré-réservé avant l'arrivée",
          'Une durée de cursus plus courte jusqu’au diplôme de médecin',
          'Une session complémentaire en février, qui évite de perdre une année entière',
        ],
        verdictTitle: 'Comment trancher',
        verdict:
          "Posez-vous une seule question : où voulez-vous exercer ? Si la réponse est la France ou l'Union européenne et que votre dossier vous ouvre une filière sélective, tentez la France. Si votre priorité est d'entrer réellement en médecine, dans un budget tenable et sans jouer votre avenir sur un concours, la Russie est le choix pragmatique.",
        faq: [
          {
            question: 'Le diplôme russe vaut-il le diplôme français en Tunisie ?',
            answer:
              "Les deux suivent une procédure de reconnaissance en Tunisie. La condition déterminante côté russe est que l'université soit un établissement d'État accrédité et la filière reconnue — à vérifier avant l'inscription.",
          },
          {
            question: 'Peut-on étudier en Russie sans parler russe ?',
            answer:
              "Oui. L'année préparatoire de langue est intégrée au cursus, et certaines universités proposent des cursus enseignés en anglais, généralement plus chers.",
          },
          {
            question: 'Pourquoi la médecine est-elle plus accessible en Russie ?',
            answer:
              "L'admission se fait sur dossier scolaire et non par un concours à numerus clausus. Cela ne rend pas les études plus faciles : la sélection se déplace vers la réussite des examens pendant le cursus.",
          },
        ],
        keywords: [
          'étudier en Russie ou en France', 'médecine Russie ou France', 'comparatif études Russie France',
          'PASS LAS alternative', 'études médecine sans concours', 'coût études France Russie',
        ],
      },
      en: {
        title: 'Studying in Russia or France: An Honest Comparison for Tunisian Students | RusStudy',
        description:
          'Fees, selection, language, cost of living and degree recognition: a factual comparison between studying in Russia and in France for a Tunisian student.',
        h1: 'Study in Russia or in France?',
        summary: 'Selection, real budget and recognition: what genuinely separates the two destinations.',
        intro:
          'France is the reflex destination for Tunisian school-leavers, and for good reasons. But between selectivity in medicine, the cost of living and the proof of funds required for the visa, the project often fails before it starts. Here is an honest comparison, including where France remains the better choice.',
        tableTitle: 'The comparison, criterion by criterion',
        columns: { criterion: 'Criterion', russia: 'Russia', other: 'France' },
        rows: [
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme',
            other: 'Differentiated non-EU fees, in the region of €2,800 to €3,800, with possible exemptions',
          },
          {
            criterion: 'Selection in medicine',
            russia: 'Admission on academic record, no entrance exam',
            other: 'PASS/LAS pathway, highly selective, no repeat of the first year',
          },
          {
            criterion: 'Language of instruction',
            russia: 'Russian after a preparatory year, or English on some programmes',
            other: 'French, with a certified level required in the application',
          },
          {
            criterion: 'Length of medical studies',
            russia: '6 years, plus the preparatory language year',
            other: 'At least 9 years to the doctorate in medicine',
          },
          {
            criterion: 'Monthly cost of living',
            russia: 'From €140 to €260 depending on the city, housing from €30 to €90',
            other: 'Markedly higher, varying widely by region',
          },
          {
            criterion: 'Proof of funds for the visa',
            russia: 'Not required in this form',
            other: 'Monthly resources must be evidenced to obtain the student visa',
          },
          {
            criterion: 'Degree recognition',
            russia: 'Russian state diploma, established recognition procedure in Tunisia',
            other: 'French degree, very broadly recognised',
          },
        ],
        disclaimer:
          'The Russian figures are those applied at our partner universities. The French figures are orders of magnitude from public sources, to be verified with the target institution before any decision.',
        otherWinsTitle: 'Where France remains the better choice',
        otherWins: [
          'If you aim for a career in France or the European Union, a French degree is immediately legible there',
          'If you already speak fluent French, you save the preparatory language year',
          'If your academic record is excellent and opens a selective programme',
          'If your family can absorb a significantly higher cost of living for the whole programme',
        ],
        russiaWinsTitle: 'Where Russia has the edge',
        russiaWins: [
          'Direct access to medicine without an eliminatory entrance exam',
          'A controlled total budget, tuition and housing included',
          'Guaranteed university housing, pre-booked before arrival',
          'A shorter path to the medical degree',
          'A February intake that avoids losing a whole year',
        ],
        verdictTitle: 'How to decide',
        verdict:
          'Ask yourself one question: where do you want to practise? If the answer is France or the European Union and your record opens a selective programme, try France. If your priority is actually getting into medicine, within a sustainable budget and without staking your future on one exam, Russia is the pragmatic choice.',
        faq: [
          {
            question: 'Is a Russian degree worth as much as a French one in Tunisia?',
            answer:
              'Both go through a recognition procedure in Tunisia. The decisive condition on the Russian side is that the university is an accredited state institution and the programme recognised — to be checked before enrolment.',
          },
          {
            question: 'Can you study in Russia without speaking Russian?',
            answer:
              'Yes. The preparatory language year is part of the programme, and some universities offer English-taught programmes, generally more expensive.',
          },
          {
            question: 'Why is medicine more accessible in Russia?',
            answer:
              'Admission is on academic record rather than a capped entrance exam. That does not make the studies easier: selection shifts to passing exams during the programme.',
          },
        ],
        keywords: [
          'study in Russia or France', 'medicine Russia or France', 'compare studies Russia France',
          'PASS LAS alternative', 'medicine without entrance exam', 'cost of studies France Russia',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا أم في فرنسا: مقارنة صادقة للطالب التونسي | RusStudy',
        description:
          'الرسوم والانتقاء واللغة وتكلفة المعيشة والاعتراف بالشهادة: مقارنة واقعية بين الدراسة في روسيا وفي فرنسا للطالب التونسي.',
        h1: 'الدراسة في روسيا أم في فرنسا؟',
        summary: 'الانتقاء والميزانية الحقيقية والاعتراف: ما يفصل فعلاً بين الوجهتين.',
        intro:
          'فرنسا هي الوجهة التلقائية لحاملي البكالوريا التونسيين، ولأسباب وجيهة. لكن بين صعوبة الانتقاء في الطب وتكلفة المعيشة وإثبات الموارد المطلوب للتأشيرة، كثيرًا ما يفشل المشروع قبل أن يبدأ. إليك مقارنة صادقة، بما في ذلك حيث تبقى فرنسا الخيار الأفضل.',
        tableTitle: 'المقارنة معيارًا بمعيار',
        columns: { criterion: 'المعيار', russia: 'روسيا', other: 'فرنسا' },
        rows: [
          {
            criterion: 'رسوم الدراسة السنوية',
            russia: 'من 2200 إلى 3500 € حسب الاختصاص',
            other: 'رسوم متمايزة لغير الأوروبيين، في حدود 2800 إلى 3800 €، مع إعفاءات ممكنة',
          },
          {
            criterion: 'الانتقاء في الطب',
            russia: 'قبول على أساس الملف الدراسي دون مناظرة',
            other: 'مسار PASS/LAS، انتقائي جدًا، دون إعادة السنة الأولى',
          },
          {
            criterion: 'لغة التدريس',
            russia: 'الروسية بعد سنة تحضيرية، أو الإنجليزية في بعض التكوينات',
            other: 'الفرنسية، مع مستوى مثبت مطلوب في الملف',
          },
          {
            criterion: 'مدة دراسة الطب',
            russia: '6 سنوات إضافة إلى السنة التحضيرية للغة',
            other: '9 سنوات على الأقل حتى شهادة الدكتوراه في الطب',
          },
          {
            criterion: 'تكلفة المعيشة الشهرية',
            russia: 'من 140 إلى 260 € حسب المدينة، والسكن الجامعي من 30 إلى 90 €',
            other: 'أعلى بوضوح، ومتفاوتة كثيرًا حسب الجهة',
          },
          {
            criterion: 'إثبات الموارد للتأشيرة',
            russia: 'غير مطلوب بهذا الشكل',
            other: 'يجب إثبات موارد شهرية للحصول على تأشيرة الدراسة',
          },
          {
            criterion: 'الاعتراف بالشهادة',
            russia: 'شهادة دولة روسية، مع إجراء معادلة مستقر في تونس',
            other: 'شهادة فرنسية، معترف بها على نطاق واسع جدًا',
          },
        ],
        disclaimer:
          'المبالغ في جانب روسيا هي المعتمدة في جامعاتنا الشريكة. أما مبالغ الجانب الفرنسي فهي أرقام تقريبية من مصادر عمومية، يجب التحقق منها لدى المؤسسة المستهدفة قبل أي قرار.',
        otherWinsTitle: 'حيث تبقى فرنسا الخيار الأفضل',
        otherWins: [
          'إذا كنت تستهدف مسارًا مهنيًا في فرنسا أو الاتحاد الأوروبي، فالشهادة الفرنسية مقروءة هناك فورًا',
          'إذا كنت تتقن الفرنسية أصلاً، فأنت توفر السنة التحضيرية للغة',
          'إذا كان ملفك الدراسي ممتازًا ويفتح لك اختصاصًا انتقائيًا',
          'إذا كانت عائلتك قادرة على تحمل تكلفة معيشة أعلى بكثير طيلة التكوين',
        ],
        russiaWinsTitle: 'حيث تتفوق روسيا',
        russiaWins: [
          'الدخول المباشر إلى الطب دون مناظرة إقصائية',
          'ميزانية إجمالية متحكم فيها، بما في ذلك الرسوم والسكن',
          'سكن جامعي مضمون ومحجوز قبل الوصول',
          'مدة أقصر للوصول إلى شهادة الطب',
          'دورة تكميلية في فيفري تتفادى إضاعة سنة كاملة',
        ],
        verdictTitle: 'كيف تحسم',
        verdict:
          'اطرح على نفسك سؤالاً واحدًا: أين تريد أن تمارس؟ إذا كان الجواب فرنسا أو الاتحاد الأوروبي وكان ملفك يفتح لك اختصاصًا انتقائيًا، فجرّب فرنسا. أما إذا كانت أولويتك الدخول فعليًا إلى الطب بميزانية محتملة ودون رهن مستقبلك على مناظرة، فروسيا هي الخيار العملي.',
        faq: [
          {
            question: 'هل تعادل الشهادة الروسية الشهادة الفرنسية في تونس؟',
            answer:
              'كلتاهما تمر بإجراء اعتراف في تونس. والشرط الحاسم في الجانب الروسي أن تكون الجامعة مؤسسة حكومية معتمدة والاختصاص معترفًا به، ويُتحقق من ذلك قبل الترسيم.',
          },
          {
            question: 'هل يمكن الدراسة في روسيا دون إتقان الروسية؟',
            answer:
              'نعم. السنة التحضيرية للغة مدمجة في التكوين، وبعض الجامعات تقترح تكوينات بالإنجليزية، وهي أغلى عمومًا.',
          },
          {
            question: 'لماذا الطب أكثر إتاحة في روسيا؟',
            answer:
              'لأن القبول يتم على أساس الملف الدراسي لا بمناظرة بعدد مقاعد محدود. وهذا لا يجعل الدراسة أسهل: ينتقل الانتقاء إلى النجاح في الامتحانات أثناء التكوين.',
          },
        ],
        keywords: [
          'الدراسة في روسيا أم فرنسا', 'الطب في روسيا أو فرنسا', 'مقارنة الدراسة روسيا فرنسا',
          'بديل PASS LAS', 'دراسة الطب دون مناظرة', 'تكلفة الدراسة فرنسا روسيا',
        ],
      },
      ru: {
        title: 'Учёба в России или во Франции: честное сравнение для тунисского студента | RusStudy',
        description:
          'Стоимость, отбор, язык, стоимость жизни и признание диплома: фактическое сравнение учёбы в России и во Франции для тунисского студента.',
        h1: 'Учиться в России или во Франции?',
        summary: 'Отбор, реальный бюджет и признание: что действительно различает два направления.',
        intro:
          'Франция — направление «по умолчанию» для тунисских выпускников, и на то есть основания. Но между конкурсом на медицину, стоимостью жизни и подтверждением средств для визы проект часто срывается ещё до старта. Вот честное сравнение, включая то, где Франция остаётся лучшим выбором.',
        tableTitle: 'Сравнение по критериям',
        columns: { criterion: 'Критерий', russia: 'Россия', other: 'Франция' },
        rows: [
          {
            criterion: 'Годовая стоимость обучения',
            russia: 'От 2 200 до 3 500 € в зависимости от направления',
            other: 'Дифференцированные сборы для не-ЕС, порядка 2 800–3 800 €, возможны освобождения',
          },
          {
            criterion: 'Отбор на медицину',
            russia: 'Зачисление по академическому досье, без вступительного конкурса',
            other: 'Путь PASS/LAS, очень конкурсный, без права пересдать первый год',
          },
          {
            criterion: 'Язык обучения',
            russia: 'Русский после подготовительного года либо английский на части программ',
            other: 'Французский с подтверждённым уровнем в досье',
          },
          {
            criterion: 'Длительность медицинского образования',
            russia: '6 лет плюс подготовительный языковой год',
            other: 'Не менее 9 лет до диплома врача',
          },
          {
            criterion: 'Ежемесячные расходы на жизнь',
            russia: 'От 140 до 260 € в зависимости от города, общежитие от 30 до 90 €',
            other: 'Заметно выше, сильно различается по регионам',
          },
          {
            criterion: 'Подтверждение средств для визы',
            russia: 'В такой форме не требуется',
            other: 'Для учебной визы нужно подтвердить ежемесячные средства',
          },
          {
            criterion: 'Признание диплома',
            russia: 'Диплом российского государственного образца, установленная процедура признания в Тунисе',
            other: 'Французский диплом, очень широкое признание',
          },
        ],
        disclaimer:
          'Суммы по России — это тарифы наших партнёрских вузов. Суммы по Франции — порядки величин из открытых источников, их нужно уточнить в выбранном учреждении до принятия решения.',
        otherWinsTitle: 'Где Франция остаётся лучшим выбором',
        otherWins: [
          'Если вы нацелены на карьеру во Франции или в Евросоюзе, французский диплом там считывается сразу',
          'Если вы уже свободно говорите по-французски, вы экономите подготовительный год',
          'Если ваше академическое досье отличное и открывает конкурсную программу',
          'Если семья может нести заметно более высокие расходы на жизнь весь срок обучения',
        ],
        russiaWinsTitle: 'В чём преимущество России',
        russiaWins: [
          'Прямой доступ к медицине без отсеивающего вступительного конкурса',
          'Контролируемый общий бюджет, с обучением и жильём',
          'Гарантированное общежитие, забронированное до приезда',
          'Более короткий путь до диплома врача',
          'Февральский набор, позволяющий не терять целый год',
        ],
        verdictTitle: 'Как решить',
        verdict:
          'Задайте себе один вопрос: где вы хотите работать? Если ответ — Франция или ЕС, и досье открывает конкурсную программу, пробуйте Францию. Если приоритет — реально поступить на медицину в посильном бюджете и не ставить будущее на один экзамен, прагматичный выбор — Россия.',
        faq: [
          {
            question: 'Стоит ли российский диплом столько же, сколько французский, в Тунисе?',
            answer:
              'Оба проходят процедуру признания в Тунисе. Решающее условие с российской стороны — аккредитованный государственный вуз и признанная программа, что проверяют до зачисления.',
          },
          {
            question: 'Можно ли учиться в России, не зная русского?',
            answer:
              'Да. Подготовительный языковой год входит в программу, а некоторые вузы предлагают англоязычные программы, обычно дороже.',
          },
          {
            question: 'Почему медицина доступнее в России?',
            answer:
              'Зачисление идёт по академическому досье, а не по конкурсу с ограниченным числом мест. Учёба от этого не становится легче: отбор смещается на сдачу экзаменов в ходе программы.',
          },
        ],
        keywords: [
          'учёба в России или во Франции', 'медицина Россия или Франция', 'сравнение учёбы Россия Франция',
          'альтернатива PASS LAS', 'медицина без вступительного конкурса', 'стоимость учёбы Франция Россия',
        ],
      },
    },
  },
  {
    slug: 'russie-vs-roumanie',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: 'Étudier la médecine en Russie ou en Roumanie : comparatif pour un étudiant tunisien | RusStudy',
        description:
          "Diplôme européen, frais de scolarité, langue d'enseignement et budget global : comparaison factuelle entre la Roumanie et la Russie pour des études de médecine.",
        h1: 'Étudier en Russie ou en Roumanie ?',
        summary: "Le diplôme européen d'un côté, le budget de l'autre : la comparaison sans complaisance.",
        intro:
          "La Roumanie est devenue la destination de référence pour la médecine en anglais ou en français à coût maîtrisé, et elle offre un avantage que la Russie n'a pas : un diplôme de l'Union européenne. C'est la comparaison la plus serrée des trois, et elle mérite d'être faite honnêtement.",
        tableTitle: 'Le comparatif, critère par critère',
        columns: { criterion: 'Critère', russia: 'Russie', other: 'Roumanie' },
        rows: [
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière',
            other: "De l'ordre de 5 000 à 8 000 € en médecine pour un non-UE",
          },
          {
            criterion: 'Reconnaissance du diplôme',
            russia: "Diplôme d'État russe, procédure d'équivalence en Tunisie",
            other: "Diplôme de l'Union européenne, reconnu automatiquement dans tous les États membres",
          },
          {
            criterion: "Langue d'enseignement",
            russia: 'Russe après année préparatoire, anglais sur certains cursus',
            other: 'Anglais, français ou roumain selon les universités',
          },
          {
            criterion: 'Année préparatoire de langue',
            russia: 'Oui pour les cursus en russe',
            other: 'Non pour les cursus en anglais ou en français',
          },
          {
            criterion: 'Admission',
            russia: 'Sur dossier scolaire',
            other: "Sur dossier ou épreuve d'entrée selon l'université",
          },
          {
            criterion: 'Coût de la vie mensuel',
            russia: 'De 140 à 260 € selon la ville',
            other: 'Plus élevé, mais nettement inférieur à l’Europe de l’Ouest',
          },
          {
            criterion: 'Logement',
            russia: 'Résidence universitaire pré-réservée, de 30 à 90 € par mois',
            other: 'Résidences universitaires en nombre limité, secteur privé souvent nécessaire',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Les montants côté Roumanie sont des ordres de grandeur issus de sources publiques, à vérifier auprès de l'établissement visé.",
        otherWinsTitle: 'Là où la Roumanie prend l’avantage',
        otherWins: [
          "Le diplôme est européen : il ouvre l'exercice dans l'Union européenne sans procédure d'équivalence lourde",
          "Pas d'année préparatoire de langue si vous choisissez le cursus en français ou en anglais, soit un an gagné",
          'Un environnement culturel et un alphabet latin plus familiers pour un étudiant tunisien',
          'Une proximité géographique qui rend les retours en Tunisie plus simples et moins coûteux',
        ],
        russiaWinsTitle: 'Là où la Russie prend l’avantage',
        russiaWins: [
          'Des frais de scolarité souvent deux fois inférieurs à ceux de la médecine en Roumanie',
          'Un logement universitaire garanti et pré-réservé, poste souvent sous-estimé en Roumanie',
          "Un accompagnement de bout en bout, de l'inscription à l'accueil à l'aéroport",
          'Une session complémentaire en février qui évite de perdre une année',
        ],
        verdictTitle: 'Comment trancher',
        verdict:
          "Si votre objectif explicite est d'exercer en Europe et que votre famille peut absorber des frais de scolarité deux fois plus élevés, la Roumanie est un choix cohérent. Si le budget total est le facteur déterminant, ou si vous visez un retour en Tunisie après le diplôme, la Russie offre le même niveau d'études pour un coût sensiblement moindre.",
        faq: [
          {
            question: 'Le diplôme roumain est-il meilleur que le diplôme russe ?',
            answer:
              "Il est différent : un diplôme roumain est un diplôme de l'Union européenne, automatiquement reconnu dans les États membres. Un diplôme russe d'université d'État suit une procédure d'équivalence en Tunisie. Le meilleur choix dépend du pays où vous comptez exercer.",
          },
          {
            question: 'La médecine en Roumanie coûte-t-elle vraiment plus cher ?',
            answer:
              'Les frais de scolarité en médecine y sont généralement plus élevés, souvent du simple au double par rapport à nos universités partenaires. Le coût de la vie et le logement creusent encore l’écart.',
          },
          {
            question: "Peut-on éviter l'année préparatoire dans les deux pays ?",
            answer:
              "En Roumanie, oui, en choisissant un cursus en anglais ou en français. En Russie, certains cursus en anglais l'allègent, mais un niveau minimal de russe reste nécessaire au quotidien et en stage.",
          },
        ],
        keywords: [
          'médecine Russie ou Roumanie', 'étudier en Roumanie ou en Russie', 'médecine Roumanie prix',
          'diplôme européen médecine', 'comparatif médecine étranger', 'médecine en anglais étranger',
        ],
      },
      en: {
        title: 'Studying Medicine in Russia or Romania: A Comparison for Tunisian Students | RusStudy',
        description:
          'European degree, tuition, language of instruction and overall budget: a factual comparison between Romania and Russia for medical studies.',
        h1: 'Study in Russia or in Romania?',
        summary: 'A European degree on one side, the budget on the other: the comparison without spin.',
        intro:
          'Romania has become the reference destination for medicine taught in English or French at a controlled cost, and it offers an advantage Russia does not: a European Union degree. This is the closest of the three comparisons, and it deserves to be made honestly.',
        tableTitle: 'The comparison, criterion by criterion',
        columns: { criterion: 'Criterion', russia: 'Russia', other: 'Romania' },
        rows: [
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme',
            other: 'In the region of €5,000 to €8,000 for non-EU medicine',
          },
          {
            criterion: 'Degree recognition',
            russia: 'Russian state diploma, recognition procedure in Tunisia',
            other: 'European Union degree, automatically recognised across member states',
          },
          {
            criterion: 'Language of instruction',
            russia: 'Russian after a preparatory year, English on some programmes',
            other: 'English, French or Romanian depending on the university',
          },
          {
            criterion: 'Preparatory language year',
            russia: 'Yes for Russian-taught programmes',
            other: 'No for English- or French-taught programmes',
          },
          {
            criterion: 'Admission',
            russia: 'On academic record',
            other: 'On record or entrance test depending on the university',
          },
          {
            criterion: 'Monthly cost of living',
            russia: 'From €140 to €260 depending on the city',
            other: 'Higher, but clearly below Western Europe',
          },
          {
            criterion: 'Housing',
            russia: 'Pre-booked university residence, €30 to €90 a month',
            other: 'Limited university housing, private market often necessary',
          },
        ],
        disclaimer:
          'The Russian figures are those applied at our partner universities. The Romanian figures are orders of magnitude from public sources, to be verified with the target institution.',
        otherWinsTitle: 'Where Romania has the edge',
        otherWins: [
          'The degree is European: it opens practice in the EU without a heavy equivalence procedure',
          'No preparatory language year if you choose the French or English track — a year saved',
          'A cultural environment and Latin alphabet more familiar to a Tunisian student',
          'Geographical proximity making trips home simpler and cheaper',
        ],
        russiaWinsTitle: 'Where Russia has the edge',
        russiaWins: [
          'Tuition often half that of medicine in Romania',
          'Guaranteed, pre-booked university housing — a line often underestimated in Romania',
          'End-to-end support, from enrolment to airport pickup',
          'A February intake that avoids losing a year',
        ],
        verdictTitle: 'How to decide',
        verdict:
          'If your explicit goal is to practise in Europe and your family can absorb tuition twice as high, Romania is a coherent choice. If total budget is the deciding factor, or you plan to return to Tunisia after graduating, Russia offers the same level of study at a markedly lower cost.',
        faq: [
          {
            question: 'Is a Romanian degree better than a Russian one?',
            answer:
              'It is different: a Romanian degree is an EU degree, automatically recognised in member states. A Russian state university degree follows a recognition procedure in Tunisia. The better choice depends on where you intend to practise.',
          },
          {
            question: 'Does medicine in Romania really cost more?',
            answer:
              'Medical tuition there is generally higher, often double that of our partner universities. Cost of living and housing widen the gap further.',
          },
          {
            question: 'Can the preparatory year be avoided in both countries?',
            answer:
              'In Romania, yes, by choosing an English- or French-taught programme. In Russia, some English-taught programmes shorten it, but a minimum level of Russian remains necessary day to day and on placement.',
          },
        ],
        keywords: [
          'medicine Russia or Romania', 'study in Romania or Russia', 'Romania medicine tuition',
          'European medical degree', 'compare medicine abroad', 'medicine in English abroad',
        ],
      },
      ar: {
        title: 'دراسة الطب في روسيا أم رومانيا: مقارنة للطالب التونسي | RusStudy',
        description:
          'الشهادة الأوروبية ورسوم الدراسة ولغة التدريس والميزانية الإجمالية: مقارنة واقعية بين رومانيا وروسيا لدراسة الطب.',
        h1: 'الدراسة في روسيا أم في رومانيا؟',
        summary: 'الشهادة الأوروبية من جهة والميزانية من جهة أخرى: مقارنة بلا مجاملة.',
        intro:
          'أصبحت رومانيا الوجهة المرجعية لدراسة الطب بالإنجليزية أو الفرنسية بتكلفة متحكم فيها، وهي تقدم ميزة لا تملكها روسيا: شهادة من الاتحاد الأوروبي. وهذه أدق المقارنات الثلاث وتستحق أن تُجرى بصدق.',
        tableTitle: 'المقارنة معيارًا بمعيار',
        columns: { criterion: 'المعيار', russia: 'روسيا', other: 'رومانيا' },
        rows: [
          {
            criterion: 'رسوم الدراسة السنوية',
            russia: 'من 2200 إلى 3500 € حسب الاختصاص',
            other: 'في حدود 5000 إلى 8000 € في الطب لغير الأوروبيين',
          },
          {
            criterion: 'الاعتراف بالشهادة',
            russia: 'شهادة دولة روسية مع إجراء معادلة في تونس',
            other: 'شهادة من الاتحاد الأوروبي، معترف بها تلقائيًا في كل الدول الأعضاء',
          },
          {
            criterion: 'لغة التدريس',
            russia: 'الروسية بعد سنة تحضيرية، والإنجليزية في بعض التكوينات',
            other: 'الإنجليزية أو الفرنسية أو الرومانية حسب الجامعات',
          },
          {
            criterion: 'السنة التحضيرية للغة',
            russia: 'نعم في التكوينات بالروسية',
            other: 'لا في التكوينات بالإنجليزية أو الفرنسية',
          },
          { criterion: 'القبول', russia: 'على أساس الملف الدراسي', other: 'على أساس الملف أو اختبار دخول حسب الجامعة' },
          {
            criterion: 'تكلفة المعيشة الشهرية',
            russia: 'من 140 إلى 260 € حسب المدينة',
            other: 'أعلى، لكنها أقل بوضوح من أوروبا الغربية',
          },
          {
            criterion: 'السكن',
            russia: 'إقامة جامعية محجوزة مسبقًا من 30 إلى 90 € شهريًا',
            other: 'إقامات جامعية بعدد محدود، والقطاع الخاص ضروري غالبًا',
          },
        ],
        disclaimer:
          'المبالغ في جانب روسيا هي المعتمدة في جامعاتنا الشريكة. أما مبالغ الجانب الروماني فهي أرقام تقريبية من مصادر عمومية يجب التحقق منها لدى المؤسسة المستهدفة.',
        otherWinsTitle: 'حيث تتفوق رومانيا',
        otherWins: [
          'الشهادة أوروبية: تفتح الممارسة في الاتحاد الأوروبي دون إجراء معادلة ثقيل',
          'لا سنة تحضيرية للغة إذا اخترت التكوين بالفرنسية أو الإنجليزية، أي سنة مكسوبة',
          'محيط ثقافي وأبجدية لاتينية أكثر ألفة للطالب التونسي',
          'قرب جغرافي يجعل العودة إلى تونس أبسط وأقل كلفة',
        ],
        russiaWinsTitle: 'حيث تتفوق روسيا',
        russiaWins: [
          'رسوم دراسة أقل غالبًا بالنصف مقارنة بالطب في رومانيا',
          'سكن جامعي مضمون ومحجوز مسبقًا، وهو بند يُستهان به غالبًا في رومانيا',
          'مرافقة من البداية إلى النهاية، من التسجيل إلى الاستقبال في المطار',
          'دورة تكميلية في فيفري تتفادى إضاعة سنة',
        ],
        verdictTitle: 'كيف تحسم',
        verdict:
          'إذا كان هدفك الصريح ممارسة المهنة في أوروبا وكانت عائلتك قادرة على تحمل رسوم مضاعفة، فرومانيا خيار منسجم. أما إذا كانت الميزانية الإجمالية هي العامل الحاسم، أو كنت تنوي العودة إلى تونس بعد التخرج، فروسيا تقدم نفس مستوى الدراسة بكلفة أقل بوضوح.',
        faq: [
          {
            question: 'هل الشهادة الرومانية أفضل من الروسية؟',
            answer:
              'هي مختلفة: الشهادة الرومانية شهادة من الاتحاد الأوروبي معترف بها تلقائيًا في الدول الأعضاء، بينما تتبع الشهادة الروسية من جامعة حكومية إجراء معادلة في تونس. والأفضل يتوقف على البلد الذي تنوي الممارسة فيه.',
          },
          {
            question: 'هل الطب في رومانيا أغلى فعلاً؟',
            answer:
              'رسوم الطب هناك أعلى عمومًا، وغالبًا بالضعف مقارنة بجامعاتنا الشريكة. وتكلفة المعيشة والسكن توسّع الفارق أكثر.',
          },
          {
            question: 'هل يمكن تجنب السنة التحضيرية في البلدين؟',
            answer:
              'في رومانيا نعم، باختيار تكوين بالإنجليزية أو الفرنسية. وفي روسيا تخفّفها بعض التكوينات بالإنجليزية، لكن حدًا أدنى من الروسية يبقى ضروريًا في اليومي وفي التربص.',
          },
        ],
        keywords: [
          'الطب في روسيا أم رومانيا', 'الدراسة في رومانيا أو روسيا', 'أسعار الطب في رومانيا',
          'شهادة طب أوروبية', 'مقارنة دراسة الطب بالخارج', 'الطب بالإنجليزية في الخارج',
        ],
      },
      ru: {
        title: 'Учёба на медика в России или Румынии: сравнение для тунисского студента | RusStudy',
        description:
          'Европейский диплом, стоимость обучения, язык преподавания и общий бюджет: фактическое сравнение Румынии и России для медицинского образования.',
        h1: 'Учиться в России или в Румынии?',
        summary: 'Европейский диплом с одной стороны, бюджет — с другой: сравнение без прикрас.',
        intro:
          'Румыния стала эталонным направлением для медицины на английском или французском при умеренной стоимости, и у неё есть преимущество, которого нет у России: диплом Евросоюза. Это самое близкое из трёх сравнений, и провести его стоит честно.',
        tableTitle: 'Сравнение по критериям',
        columns: { criterion: 'Критерий', russia: 'Россия', other: 'Румыния' },
        rows: [
          {
            criterion: 'Годовая стоимость обучения',
            russia: 'От 2 200 до 3 500 € в зависимости от направления',
            other: 'Порядка 5 000–8 000 € на медицине для не-ЕС',
          },
          {
            criterion: 'Признание диплома',
            russia: 'Диплом российского государственного образца, процедура признания в Тунисе',
            other: 'Диплом Евросоюза, автоматически признаваемый в странах-членах',
          },
          {
            criterion: 'Язык обучения',
            russia: 'Русский после подготовительного года, английский на части программ',
            other: 'Английский, французский или румынский в зависимости от вуза',
          },
          {
            criterion: 'Подготовительный языковой год',
            russia: 'Да для русскоязычных программ',
            other: 'Нет для англо- и франкоязычных программ',
          },
          { criterion: 'Зачисление', russia: 'По академическому досье', other: 'По досье или вступительному тесту, зависит от вуза' },
          {
            criterion: 'Ежемесячные расходы на жизнь',
            russia: 'От 140 до 260 € в зависимости от города',
            other: 'Выше, но заметно ниже Западной Европы',
          },
          {
            criterion: 'Жильё',
            russia: 'Забронированное общежитие, 30–90 € в месяц',
            other: 'Общежитий немного, часто нужен частный рынок',
          },
        ],
        disclaimer:
          'Суммы по России — тарифы наших партнёрских вузов. Суммы по Румынии — порядки величин из открытых источников, их следует уточнить в выбранном учреждении.',
        otherWinsTitle: 'В чём преимущество Румынии',
        otherWins: [
          'Диплом европейский: он открывает практику в ЕС без тяжёлой процедуры признания',
          'Нет подготовительного языкового года при выборе франко- или англоязычной программы — год экономии',
          'Более привычная тунисскому студенту культурная среда и латинский алфавит',
          'Географическая близость, делающая поездки домой проще и дешевле',
        ],
        russiaWinsTitle: 'В чём преимущество России',
        russiaWins: [
          'Стоимость обучения часто вдвое ниже, чем на медицине в Румынии',
          'Гарантированное забронированное общежитие — статья, которую в Румынии часто недооценивают',
          'Сопровождение от начала до конца, от зачисления до встречи в аэропорту',
          'Февральский набор, позволяющий не терять год',
        ],
        verdictTitle: 'Как решить',
        verdict:
          'Если ваша явная цель — работать в Европе и семья готова нести вдвое большую плату за обучение, Румыния — логичный выбор. Если решающим фактором является общий бюджет или вы планируете вернуться в Тунис после диплома, Россия даёт тот же уровень обучения заметно дешевле.',
        faq: [
          {
            question: 'Румынский диплом лучше российского?',
            answer:
              'Он другой: румынский — это диплом ЕС, автоматически признаваемый в странах-членах, а российский диплом государственного вуза проходит процедуру признания в Тунисе. Что лучше — зависит от страны, где вы намерены работать.',
          },
          {
            question: 'Медицина в Румынии действительно дороже?',
            answer:
              'Стоимость обучения там, как правило, выше — часто вдвое по сравнению с нашими партнёрскими вузами. Расходы на жизнь и жильё увеличивают разрыв.',
          },
          {
            question: 'Можно ли избежать подготовительного года в обеих странах?',
            answer:
              'В Румынии — да, выбрав программу на английском или французском. В России часть англоязычных программ его сокращает, но минимальный русский всё равно нужен в быту и на практике.',
          },
        ],
        keywords: [
          'медицина Россия или Румыния', 'учёба в Румынии или России', 'стоимость медицины в Румынии',
          'европейский медицинский диплом', 'сравнение медицины за рубежом', 'медицина на английском за рубежом',
        ],
      },
    },
  },
  {
    slug: 'russie-vs-tunisie',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: 'Rester étudier en Tunisie ou partir en Russie : comment décider | RusStudy',
        description:
          "Score d'orientation, université publique, école privée ou départ en Russie : comparaison honnête des options qui s'offrent à un bachelier tunisien.",
        h1: 'Rester en Tunisie ou partir en Russie ?',
        summary: "Université publique, école privée ou départ : ce que chaque option coûte et ouvre réellement.",
        intro:
          "C'est la vraie question, celle qui se pose avant même de choisir un pays. Partir n'est pas toujours la bonne décision, et nous le disons clairement : si votre score d'orientation vous ouvre la filière que vous visez dans une université publique tunisienne, restez. Cette page est pour tous les autres cas.",
        tableTitle: 'Les trois options comparées',
        columns: { criterion: 'Critère', russia: 'Partir en Russie', other: 'Rester en Tunisie' },
        rows: [
          {
            criterion: 'Accès à la filière voulue',
            russia: 'Admission sur dossier scolaire, sans score éliminatoire',
            other: "Conditionné au score d'orientation, très sélectif en médecine",
          },
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière',
            other: 'Université publique quasi gratuite ; école privée souvent bien plus chère',
          },
          {
            criterion: 'Coût de la vie',
            russia: 'De 140 à 260 € par mois, logement en résidence de 30 à 90 €',
            other: 'Souvent réduit grâce au domicile familial',
          },
          {
            criterion: 'Langue',
            russia: 'Russe après une année préparatoire, ou anglais selon les cursus',
            other: 'Français et arabe, aucun apprentissage supplémentaire',
          },
          {
            criterion: 'Sessions d’admission',
            russia: 'Rentrée principale, plus une session complémentaire en février',
            other: 'Une seule session annuelle via l’orientation nationale',
          },
          {
            criterion: 'Ouverture internationale',
            russia: 'Diplôme et expérience internationale, réseau à l’étranger',
            other: 'Cursus national, mobilité à construire après le diplôme',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Les coûts en Tunisie varient fortement entre public et privé : comparez avec les tarifs réels de l'établissement que vous envisagez.",
        otherWinsTitle: 'Restez en Tunisie si…',
        otherWins: [
          "Votre score d'orientation vous ouvre la filière que vous visez dans le public : c'est la meilleure option, et de loin",
          'Vous ne souhaitez pas être éloigné de votre famille pendant plusieurs années',
          'Votre projet professionnel est strictement national et ne demande pas de mobilité',
          'Votre situation personnelle ou de santé rend un départ prolongé difficile',
        ],
        russiaWinsTitle: 'Envisagez la Russie si…',
        russiaWins: [
          'Votre score ne vous ouvre pas la filière que vous voulez, en particulier en médecine',
          "La seule alternative locale est une école privée dont le coût dépasse celui d'un cursus complet en Russie",
          'Vous êtes prêt à apprendre une langue et à vivre une expérience internationale',
          'Vous voulez éviter une année blanche : la session de février permet de partir en cours d’année',
        ],
        verdictTitle: 'Notre position, en toute franchise',
        verdict:
          "Nous accompagnons des départs vers la Russie, et nous avons donc un intérêt évident. Cela ne nous empêche pas de le dire : une place en médecine dans une université publique tunisienne vaut mieux qu'un départ. La Russie devient pertinente quand la porte locale est fermée, ou quand le privé coûte davantage pour un diplôme équivalent.",
        faq: [
          {
            question: 'Faut-il partir si mon score est insuffisant ?',
            answer:
              "Pas nécessairement : comparez d'abord le coût réel d'une école privée tunisienne dans la même spécialité avec le budget complet d'un cursus en Russie, logement et vie courante compris. La comparaison chiffrée tranche souvent d'elle-même.",
          },
          {
            question: 'Puis-je partir après avoir commencé mes études en Tunisie ?',
            answer:
              "Oui. Des étudiants déjà inscrits se réorientent, souvent via la session de février qui évite d'attendre la fin de l'année universitaire.",
          },
          {
            question: 'Le diplôme russe me permettra-t-il de revenir travailler en Tunisie ?',
            answer:
              "Un diplôme d'État d'une université russe accréditée suit une procédure de reconnaissance établie. Pour les professions de santé, une étape de validation supplémentaire est à prévoir avant l'exercice.",
          },
        ],
        keywords: [
          'rester en Tunisie ou étudier à l’étranger', 'score orientation insuffisant', 'école privée Tunisie ou étranger',
          'étudier à l’étranger après le bac tunisien', 'alternative orientation Tunisie', 'partir étudier en Russie',
        ],
      },
      en: {
        title: 'Staying in Tunisia or Leaving for Russia: How to Decide | RusStudy',
        description:
          'Orientation score, public university, private school or leaving for Russia: an honest comparison of the options open to a Tunisian school-leaver.',
        h1: 'Stay in Tunisia or leave for Russia?',
        summary: 'Public university, private school or leaving: what each option really costs and opens.',
        intro:
          'This is the real question, the one that comes before choosing a country. Leaving is not always the right decision, and we say so plainly: if your orientation score opens the programme you want at a Tunisian public university, stay. This page is for every other case.',
        tableTitle: 'The three options compared',
        columns: { criterion: 'Criterion', russia: 'Leaving for Russia', other: 'Staying in Tunisia' },
        rows: [
          {
            criterion: 'Access to the programme you want',
            russia: 'Admission on academic record, no eliminatory score',
            other: 'Conditional on the orientation score, highly selective in medicine',
          },
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme',
            other: 'Public university nearly free; private school often far more expensive',
          },
          {
            criterion: 'Cost of living',
            russia: 'From €140 to €260 a month, residence housing €30 to €90',
            other: 'Often reduced by living at the family home',
          },
          {
            criterion: 'Language',
            russia: 'Russian after a preparatory year, or English on some programmes',
            other: 'French and Arabic, no additional language to learn',
          },
          {
            criterion: 'Admission sessions',
            russia: 'Main intake plus a complementary intake in February',
            other: 'A single annual session through national orientation',
          },
          {
            criterion: 'International exposure',
            russia: 'International degree and experience, a network abroad',
            other: 'National programme, mobility to be built after graduation',
          },
        ],
        disclaimer:
          'The Russian figures are those applied at our partner universities. Costs in Tunisia vary widely between public and private: compare with the actual fees of the institution you are considering.',
        otherWinsTitle: 'Stay in Tunisia if…',
        otherWins: [
          'Your orientation score opens the programme you want in the public system — the best option by far',
          'You do not wish to be away from your family for several years',
          'Your career plan is strictly national and requires no mobility',
          'Your personal or health situation makes a long stay abroad difficult',
        ],
        russiaWinsTitle: 'Consider Russia if…',
        russiaWins: [
          'Your score does not open the programme you want, particularly in medicine',
          'The only local alternative is a private school costing more than a full programme in Russia',
          'You are ready to learn a language and take on an international experience',
          'You want to avoid a lost year: the February intake allows a mid-year departure',
        ],
        verdictTitle: 'Our position, stated plainly',
        verdict:
          'We support departures to Russia, so we have an obvious interest. That does not stop us saying it: a place in medicine at a Tunisian public university is worth more than leaving. Russia becomes relevant when the local door is closed, or when private schooling costs more for an equivalent degree.',
        faq: [
          {
            question: 'Should I leave if my score is insufficient?',
            answer:
              'Not necessarily: first compare the real cost of a Tunisian private school in the same specialty with the full budget of a programme in Russia, housing and living included. The figures often settle it.',
          },
          {
            question: 'Can I leave after starting my studies in Tunisia?',
            answer:
              'Yes. Students already enrolled do change direction, often through the February intake, which avoids waiting for the end of the academic year.',
          },
          {
            question: 'Will a Russian degree let me come back and work in Tunisia?',
            answer:
              'A state diploma from an accredited Russian university follows an established recognition procedure. For health professions, expect an additional validation step before practising.',
          },
        ],
        keywords: [
          'stay in Tunisia or study abroad', 'insufficient orientation score', 'Tunisian private school or abroad',
          'study abroad after Tunisian baccalaureate', 'orientation alternative Tunisia', 'leave to study in Russia',
        ],
      },
      ar: {
        title: 'البقاء للدراسة في تونس أم السفر إلى روسيا: كيف تقرر | RusStudy',
        description:
          'مجموع التوجيه، والجامعة العمومية، والمدرسة الخاصة، أو السفر إلى روسيا: مقارنة صادقة للخيارات المتاحة أمام حامل البكالوريا التونسي.',
        h1: 'البقاء في تونس أم السفر إلى روسيا؟',
        summary: 'جامعة عمومية أم مدرسة خاصة أم سفر: ما تكلفه كل خيار وما يفتحه فعلاً.',
        intro:
          'هذا هو السؤال الحقيقي، وهو يسبق اختيار البلد. السفر ليس دائمًا القرار الصائب، ونقولها بوضوح: إذا كان مجموع توجيهك يفتح لك الاختصاص الذي تريده في جامعة عمومية تونسية، فابقَ. هذه الصفحة موجهة لكل الحالات الأخرى.',
        tableTitle: 'مقارنة الخيارات الثلاثة',
        columns: { criterion: 'المعيار', russia: 'السفر إلى روسيا', other: 'البقاء في تونس' },
        rows: [
          {
            criterion: 'الوصول إلى الاختصاص المرغوب',
            russia: 'قبول على أساس الملف الدراسي دون مجموع إقصائي',
            other: 'مشروط بمجموع التوجيه، وانتقائي جدًا في الطب',
          },
          {
            criterion: 'رسوم الدراسة السنوية',
            russia: 'من 2200 إلى 3500 € حسب الاختصاص',
            other: 'الجامعة العمومية شبه مجانية، والمدرسة الخاصة أغلى بكثير غالبًا',
          },
          {
            criterion: 'تكلفة المعيشة',
            russia: 'من 140 إلى 260 € شهريًا، والسكن الجامعي من 30 إلى 90 €',
            other: 'منخفضة غالبًا بفضل السكن مع العائلة',
          },
          {
            criterion: 'اللغة',
            russia: 'الروسية بعد سنة تحضيرية، أو الإنجليزية حسب التكوينات',
            other: 'الفرنسية والعربية، دون تعلم لغة إضافية',
          },
          {
            criterion: 'دورات القبول',
            russia: 'الدخول الرئيسي إضافة إلى دورة تكميلية في فيفري',
            other: 'دورة سنوية واحدة عبر التوجيه الوطني',
          },
          {
            criterion: 'الانفتاح الدولي',
            russia: 'شهادة وتجربة دولية وشبكة علاقات في الخارج',
            other: 'تكوين وطني، والتنقل يُبنى بعد التخرج',
          },
        ],
        disclaimer:
          'المبالغ في جانب روسيا هي المعتمدة في جامعاتنا الشريكة. أما التكاليف في تونس فتتفاوت كثيرًا بين العمومي والخاص: قارن بالأسعار الفعلية للمؤسسة التي تفكر فيها.',
        otherWinsTitle: 'ابقَ في تونس إذا…',
        otherWins: [
          'كان مجموع توجيهك يفتح لك الاختصاص المرغوب في العمومي: هذا أفضل خيار بفارق كبير',
          'كنت لا ترغب في الابتعاد عن عائلتك لسنوات',
          'كان مشروعك المهني وطنيًا بحتًا ولا يتطلب تنقلاً',
          'كانت وضعيتك الشخصية أو الصحية تجعل إقامة طويلة بالخارج صعبة',
        ],
        russiaWinsTitle: 'فكّر في روسيا إذا…',
        russiaWins: [
          'لم يفتح لك مجموعك الاختصاص الذي تريده، خاصة في الطب',
          'كان البديل المحلي الوحيد مدرسة خاصة تفوق كلفتها كلفة تكوين كامل في روسيا',
          'كنت مستعدًا لتعلم لغة وخوض تجربة دولية',
          'كنت تريد تفادي سنة بيضاء: دورة فيفري تتيح السفر أثناء السنة',
        ],
        verdictTitle: 'موقفنا بكل صراحة',
        verdict:
          'نحن نرافق السفر إلى روسيا، ولنا إذن مصلحة واضحة. وهذا لا يمنعنا من قولها: مقعد في الطب بجامعة عمومية تونسية أفضل من السفر. وتصبح روسيا وجيهة عندما يُغلق الباب المحلي، أو عندما يكلف الخاص أكثر مقابل شهادة مماثلة.',
        faq: [
          {
            question: 'هل يجب السفر إذا كان مجموعي غير كافٍ؟',
            answer:
              'ليس بالضرورة: قارن أولاً الكلفة الحقيقية لمدرسة خاصة تونسية في نفس الاختصاص بالميزانية الكاملة لتكوين في روسيا، بما فيها السكن والمعيشة. المقارنة بالأرقام تحسم غالبًا من تلقاء نفسها.',
          },
          {
            question: 'هل يمكنني السفر بعد بدء دراستي في تونس؟',
            answer:
              'نعم. طلبة مسجلون بالفعل يعيدون توجيههم، وغالبًا عبر دورة فيفري التي تتفادى انتظار نهاية السنة الجامعية.',
          },
          {
            question: 'هل تتيح لي الشهادة الروسية العودة للعمل في تونس؟',
            answer:
              'شهادة دولة من جامعة روسية معتمدة تتبع إجراء اعتراف مستقرًا. وفي مهن الصحة يجب توقّع مرحلة مصادقة إضافية قبل الممارسة.',
          },
        ],
        keywords: [
          'البقاء في تونس أم الدراسة بالخارج', 'مجموع التوجيه غير كافٍ', 'مدرسة خاصة تونس أم الخارج',
          'الدراسة بالخارج بعد البكالوريا التونسية', 'بديل التوجيه الجامعي تونس', 'السفر للدراسة في روسيا',
        ],
      },
      ru: {
        title: 'Остаться учиться в Тунисе или уехать в Россию: как решить | RusStudy',
        description:
          'Балл распределения, государственный вуз, частная школа или отъезд в Россию: честное сравнение вариантов для тунисского выпускника.',
        h1: 'Остаться в Тунисе или уехать в Россию?',
        summary: 'Государственный вуз, частная школа или отъезд: во что реально обходится и что открывает каждый вариант.',
        intro:
          'Это настоящий вопрос, он возникает ещё до выбора страны. Уехать — не всегда верное решение, и мы говорим это прямо: если ваш балл распределения открывает нужную программу в тунисском государственном вузе, оставайтесь. Эта страница — для всех остальных случаев.',
        tableTitle: 'Сравнение трёх вариантов',
        columns: { criterion: 'Критерий', russia: 'Уехать в Россию', other: 'Остаться в Тунисе' },
        rows: [
          {
            criterion: 'Доступ к желаемой программе',
            russia: 'Зачисление по академическому досье, без отсекающего балла',
            other: 'Зависит от балла распределения, очень конкурсно на медицине',
          },
          {
            criterion: 'Годовая стоимость обучения',
            russia: 'От 2 200 до 3 500 € в зависимости от направления',
            other: 'Государственный вуз почти бесплатен; частная школа часто существенно дороже',
          },
          {
            criterion: 'Стоимость жизни',
            russia: 'От 140 до 260 € в месяц, общежитие 30–90 €',
            other: 'Часто ниже благодаря проживанию с семьёй',
          },
          {
            criterion: 'Язык',
            russia: 'Русский после подготовительного года либо английский на части программ',
            other: 'Французский и арабский, без дополнительного языка',
          },
          {
            criterion: 'Наборы',
            russia: 'Основной набор плюс дополнительный в феврале',
            other: 'Один ежегодный набор через национальное распределение',
          },
          {
            criterion: 'Международная перспектива',
            russia: 'Международный диплом и опыт, сеть контактов за рубежом',
            other: 'Национальная программа, мобильность выстраивается после диплома',
          },
        ],
        disclaimer:
          'Суммы по России — тарифы наших партнёрских вузов. Расходы в Тунисе сильно различаются между государственным и частным сектором: сравнивайте с реальными тарифами интересующего вас учреждения.',
        otherWinsTitle: 'Оставайтесь в Тунисе, если…',
        otherWins: [
          'Ваш балл открывает желаемую программу в государственном вузе — это лучший вариант, и с большим отрывом',
          'Вы не хотите быть вдали от семьи несколько лет',
          'Ваш профессиональный план строго национальный и не требует мобильности',
          'Личные обстоятельства или здоровье затрудняют длительное пребывание за рубежом',
        ],
        russiaWinsTitle: 'Рассмотрите Россию, если…',
        russiaWins: [
          'Балл не открывает нужную программу, особенно на медицине',
          'Единственная местная альтернатива — частная школа дороже полного обучения в России',
          'Вы готовы выучить язык и получить международный опыт',
          'Вы хотите избежать потерянного года: февральский набор позволяет уехать в середине года',
        ],
        verdictTitle: 'Наша позиция без прикрас',
        verdict:
          'Мы сопровождаем отъезды в Россию, и у нас есть очевидный интерес. Это не мешает нам сказать: место на медицине в тунисском государственном вузе лучше отъезда. Россия становится уместной, когда местная дверь закрыта или когда частное образование стоит дороже при равноценном дипломе.',
        faq: [
          {
            question: 'Нужно ли уезжать, если балла не хватает?',
            answer:
              'Не обязательно: сначала сравните реальную стоимость тунисской частной школы по той же специальности с полным бюджетом обучения в России, включая жильё и быт. Цифры часто решают сами.',
          },
          {
            question: 'Можно ли уехать, уже начав учёбу в Тунисе?',
            answer:
              'Да. Уже зачисленные студенты меняют направление, часто через февральский набор, чтобы не ждать конца учебного года.',
          },
          {
            question: 'Позволит ли российский диплом вернуться работать в Тунис?',
            answer:
              'Диплом государственного образца из аккредитованного российского вуза проходит установленную процедуру признания. Для медицинских профессий предусмотрите дополнительный этап аттестации до практики.',
          },
        ],
        keywords: [
          'остаться в Тунисе или учиться за рубежом', 'недостаточный балл распределения', 'частная школа Тунис или за рубежом',
          'учёба за рубежом после тунисского бакалавриата', 'альтернатива распределению Тунис', 'уехать учиться в Россию',
        ],
      },
    },
  },
  ...EXTRA_COMPARISONS,
];

export function buildCountryComparisonCopy(lang: Lang, index: number): CountryComparisonCopy {
  return COMPARISONS[index].copy[lang];
}

export function comparisonUpdatedAt(index: number): string {
  return COMPARISONS[index].updatedAt;
}

export const COMPARISONS_COUNT = COMPARISONS.length;
