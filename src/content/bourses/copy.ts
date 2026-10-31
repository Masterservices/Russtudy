import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';

/**
 * Page pilier « Bourses et financement ».
 * Elle sert de référence structurée (comparaison des voies de financement) ;
 * la méthode de candidature détaillée vit dans l'article de blog
 * « bourse-etudes-russie-tunisien », vers lequel cette page renvoie.
 */
export interface FundingRoute {
  name: string;
  awardedBy: string;
  tuition: string;
  housing: string;
  allowance: string;
  selection: string;
}

export interface BoursesCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  tableTitle: string;
  tableIntro: string;
  columns: { route: string; awardedBy: string; tuition: string; housing: string; allowance: string; selection: string };
  routes: FundingRoute[];
  coveredTitle: string;
  covered: string[];
  notCoveredTitle: string;
  notCovered: string[];
  criteriaTitle: string;
  criteria: string[];
  guideTitle: string;
  guideText: string;
  guideCta: string;
  faq: FaqEntry[];
}

const COPY: Record<Lang, BoursesCopy> = {
  fr: {
    title: "Bourses d'études en Russie pour étudiants tunisiens | RusStudy",
    description:
      "Quota d'État russe, réductions au mérite et inscription directe : comparez les voies de financement des études en Russie, ce qu'elles couvrent et les critères de sélection.",
    h1: "Bourses et financement des études en Russie",
    intro:
      "Étudier en Russie peut être financé de plusieurs façons, et elles n'ont ni le même niveau de sélection ni le même calendrier. Cette page compare les voies existantes et dit précisément ce que chacune prend en charge, pour que vous sachiez laquelle viser avant de constituer votre dossier.",
    tableTitle: 'Les voies de financement comparées',
    tableIntro:
      "Le quota d'État est le plus avantageux mais le plus sélectif. L'inscription directe reste la voie majoritaire, et elle demeure accessible : les frais de scolarité de nos universités partenaires démarrent à 2 200 € par an.",
    columns: {
      route: 'Voie',
      awardedBy: 'Attribuée par',
      tuition: 'Frais de scolarité',
      housing: 'Logement',
      allowance: 'Allocation',
      selection: 'Sélection',
    },
    routes: [
      {
        name: "Quota d'État russe",
        awardedBy: 'Gouvernement russe',
        tuition: 'Pris en charge',
        housing: 'Place en résidence au tarif étudiant',
        allowance: 'Allocation mensuelle modeste',
        selection: 'Dossier + entretien, places limitées',
      },
      {
        name: 'Réduction au mérite',
        awardedBy: "L'université elle-même",
        tuition: 'Réduction partielle selon les résultats',
        housing: 'Au tarif étudiant habituel',
        allowance: 'Aucune',
        selection: "Variable d'une université à l'autre",
      },
      {
        name: 'Inscription directe',
        awardedBy: 'Aucune sélection financière',
        tuition: 'À partir de 2 200 € par an',
        housing: "À partir de 30 € par mois en région",
        allowance: 'Aucune',
        selection: 'Admission sur dossier scolaire',
      },
    ],
    coveredTitle: "Ce que le quota d'État prend en charge",
    covered: [
      "Les frais de scolarité pour toute la durée du cursus, année préparatoire comprise",
      'Une place en résidence universitaire au tarif étudiant',
      "Une allocation mensuelle versée par l'université",
    ],
    notCoveredTitle: 'Ce qui reste à votre charge dans tous les cas',
    notCovered: [
      "Le billet d'avion et les retours en Tunisie",
      "L'assurance médicale obligatoire, renouvelée chaque année",
      'Les frais de visa, les traductions assermentées et les légalisations',
      'La nourriture, le transport local et la vie courante',
    ],
    criteriaTitle: 'Ce qui pèse réellement dans la sélection',
    criteria: [
      'La cohérence entre vos résultats au baccalauréat et la filière demandée',
      'La précocité du dépôt : les dossiers déposés dès l’ouverture passent avant ceux de la dernière semaine',
      'Le réalisme des vœux : inclure des universités de région augmente nettement les chances',
      'La complétude du dossier : une pièce manquante suffit à écarter une candidature',
    ],
    guideTitle: 'La méthode de candidature, étape par étape',
    guideText:
      "Notre article détaillé reprend la procédure complète : constitution du dossier, dépôt sur le portail officiel, entretien de sélection, puis enchaînement sur la lettre d'invitation et le visa.",
    guideCta: "Lire le guide de candidature →",
    faq: [
      {
        question: "Les études en Russie sont-elles gratuites pour les étudiants tunisiens ?",
        answer:
          "Elles le sont pour les bénéficiaires du quota d'État, qui prend en charge les frais de scolarité. Hors quota, les frais restent payants mais accessibles : à partir de 2 200 € par an dans nos universités partenaires.",
      },
      {
        question: "Peut-on candidater au quota d'État et s'inscrire en parallèle ?",
        answer:
          "Oui, et c'est même prudent. Le nombre de places du quota est limité : préparer en parallèle un dossier d'inscription directe évite de perdre une année si la bourse n'est pas obtenue.",
      },
      {
        question: "L'allocation mensuelle suffit-elle pour vivre ?",
        answer:
          "Non. Elle est volontairement modeste et ne remplace pas un budget de vie. Prévoyez un soutien familial ou une épargne pour la nourriture, le transport et les dépenses courantes.",
      },
      {
        question: 'Faut-il parler russe pour obtenir une bourse ?',
        answer:
          "Non. L'année préparatoire de langue russe est intégrée au cursus et au financement : la langue s'apprend sur place, avant l'entrée en spécialité.",
      },
    ],
  },
  en: {
    title: 'Scholarships to Study in Russia for Tunisian Students | RusStudy',
    description:
      'Russian state quota, merit reductions and direct enrolment: compare the funding routes for studying in Russia, what each covers and the selection criteria.',
    h1: 'Scholarships and funding for studies in Russia',
    intro:
      'Studying in Russia can be funded in several ways, and they differ in both selectivity and timeline. This page compares the existing routes and states precisely what each one covers, so you know which to aim for before assembling your file.',
    tableTitle: 'Funding routes compared',
    tableIntro:
      'The state quota is the most advantageous but the most selective. Direct enrolment remains the majority route, and it stays affordable: tuition at our partner universities starts at €2,200 a year.',
    columns: {
      route: 'Route',
      awardedBy: 'Awarded by',
      tuition: 'Tuition',
      housing: 'Housing',
      allowance: 'Allowance',
      selection: 'Selection',
    },
    routes: [
      {
        name: 'Russian state quota',
        awardedBy: 'Russian government',
        tuition: 'Covered',
        housing: 'University housing at student rates',
        allowance: 'Modest monthly allowance',
        selection: 'Application + interview, limited places',
      },
      {
        name: 'Merit reduction',
        awardedBy: 'The university itself',
        tuition: 'Partial reduction based on results',
        housing: 'Usual student rates',
        allowance: 'None',
        selection: 'Varies from one university to another',
      },
      {
        name: 'Direct enrolment',
        awardedBy: 'No financial selection',
        tuition: 'From €2,200 a year',
        housing: 'From €30 a month in regional cities',
        allowance: 'None',
        selection: 'Admission on academic record',
      },
    ],
    coveredTitle: 'What the state quota covers',
    covered: [
      'Tuition for the whole programme, including the preparatory year',
      'A place in university housing at student rates',
      'A monthly allowance paid by the university',
    ],
    notCoveredTitle: 'What you pay for in every case',
    notCovered: [
      'Flights and trips home to Tunisia',
      'Mandatory medical insurance, renewed every year',
      'Visa fees, sworn translations and legalisations',
      'Food, local transport and daily living',
    ],
    criteriaTitle: 'What really counts in the selection',
    criteria: [
      'Consistency between your Baccalaureate results and the programme requested',
      'How early you apply: files submitted as the window opens come before last-week ones',
      'Realistic choices: including regional universities clearly improves the odds',
      'A complete file: a single missing document is enough to set an application aside',
    ],
    guideTitle: 'The application method, step by step',
    guideText:
      'Our detailed article covers the full procedure: assembling the file, submitting on the official portal, the selection interview, then moving on to the invitation letter and visa.',
    guideCta: 'Read the application guide →',
    faq: [
      {
        question: 'Is studying in Russia free for Tunisian students?',
        answer:
          'It is for state quota holders, whose tuition is covered. Outside the quota, tuition is payable but affordable: from €2,200 a year at our partner universities.',
      },
      {
        question: 'Can I apply for the quota and enrol in parallel?',
        answer:
          'Yes, and it is the prudent approach. Quota places are limited, so preparing a direct enrolment file in parallel avoids losing a year if the scholarship is not granted.',
      },
      {
        question: 'Is the monthly allowance enough to live on?',
        answer:
          'No. It is deliberately modest and does not replace a living budget. Plan for family support or savings for food, transport and daily expenses.',
      },
      {
        question: 'Do I need to speak Russian to get a scholarship?',
        answer:
          'No. The preparatory year of Russian is part of the programme and of the funding: you learn the language on site, before entering your specialty.',
      },
    ],
  },
  ar: {
    title: 'منح الدراسة في روسيا للطلبة التونسيين | RusStudy',
    description:
      'حصة الدولة الروسية، وتخفيضات الاستحقاق، والتسجيل المباشر: قارن طرق تمويل الدراسة في روسيا وما تغطيه ومعايير الانتقاء.',
    h1: 'المنح وتمويل الدراسة في روسيا',
    intro:
      'يمكن تمويل الدراسة في روسيا بعدة طرق، وهي تختلف في مستوى الانتقاء وفي الرزنامة. تقارن هذه الصفحة الطرق المتاحة وتحدد بدقة ما تتكفل به كل واحدة، لتعرف أيها تستهدف قبل إعداد ملفك.',
    tableTitle: 'مقارنة طرق التمويل',
    tableIntro:
      'حصة الدولة هي الأكثر فائدة لكنها الأشد انتقاءً. ويبقى التسجيل المباشر الطريق الأوسع انتشارًا وفي المتناول: تنطلق رسوم جامعاتنا الشريكة من 2200 € في السنة.',
    columns: {
      route: 'الطريق',
      awardedBy: 'الجهة المانحة',
      tuition: 'رسوم الدراسة',
      housing: 'السكن',
      allowance: 'المنحة',
      selection: 'الانتقاء',
    },
    routes: [
      {
        name: 'حصة الدولة الروسية',
        awardedBy: 'الحكومة الروسية',
        tuition: 'متكفَّل بها',
        housing: 'مقعد في الإقامة بالتعريفة الطلابية',
        allowance: 'منحة شهرية متواضعة',
        selection: 'ملف ومقابلة، مقاعد محدودة',
      },
      {
        name: 'تخفيض على الاستحقاق',
        awardedBy: 'الجامعة نفسها',
        tuition: 'تخفيض جزئي حسب النتائج',
        housing: 'بالتعريفة الطلابية المعتادة',
        allowance: 'لا توجد',
        selection: 'يختلف من جامعة إلى أخرى',
      },
      {
        name: 'التسجيل المباشر',
        awardedBy: 'دون انتقاء مالي',
        tuition: 'ابتداءً من 2200 € في السنة',
        housing: 'ابتداءً من 30 € شهريًا في الأقاليم',
        allowance: 'لا توجد',
        selection: 'قبول على أساس الملف الدراسي',
      },
    ],
    coveredTitle: 'ما تتكفل به حصة الدولة',
    covered: [
      'رسوم الدراسة طيلة مدة التكوين، بما فيها السنة التحضيرية',
      'مقعد في الإقامة الجامعية بالتعريفة الطلابية',
      'منحة شهرية تصرفها الجامعة',
    ],
    notCoveredTitle: 'ما يبقى على عاتقك في كل الحالات',
    notCovered: [
      'تذكرة الطائرة والعودة إلى تونس',
      'التأمين الصحي الإجباري، ويُجدَّد كل سنة',
      'رسوم التأشيرة والترجمات المحلّفة والتصديقات',
      'الأكل والنقل المحلي والمعيشة اليومية',
    ],
    criteriaTitle: 'ما يؤثر فعلاً في الانتقاء',
    criteria: [
      'الانسجام بين نتائجك في البكالوريا والاختصاص المطلوب',
      'التبكير في الإيداع: الملفات المودعة فور فتح الباب تسبق ملفات الأسبوع الأخير',
      'واقعية الاختيارات: إدراج جامعات الأقاليم يرفع الحظوظ بوضوح',
      'اكتمال الملف: وثيقة ناقصة واحدة تكفي لإقصاء الترشح',
    ],
    guideTitle: 'طريقة الترشح خطوة بخطوة',
    guideText:
      'يستعرض مقالنا المفصل الإجراء الكامل: إعداد الملف، والإيداع على البوابة الرسمية، ومقابلة الانتقاء، ثم الانتقال إلى رسالة الدعوة والتأشيرة.',
    guideCta: 'اقرأ دليل الترشح ←',
    faq: [
      {
        question: 'هل الدراسة في روسيا مجانية للطلبة التونسيين؟',
        answer:
          'هي كذلك لأصحاب حصة الدولة التي تتكفل برسوم الدراسة. خارج الحصة تبقى الرسوم مدفوعة لكنها في المتناول: ابتداءً من 2200 € في السنة في جامعاتنا الشريكة.',
      },
      {
        question: 'هل يمكن الترشح للحصة والتسجيل بالتوازي؟',
        answer:
          'نعم، بل هو تصرف حكيم. مقاعد الحصة محدودة، وإعداد ملف تسجيل مباشر بالتوازي يتفادى إضاعة سنة إذا لم تُمنح المنحة.',
      },
      {
        question: 'هل تكفي المنحة الشهرية للعيش؟',
        answer:
          'لا. هي متواضعة عن قصد ولا تعوّض ميزانية معيشة. احسب دعمًا عائليًا أو مدخرات للأكل والنقل والمصاريف اليومية.',
      },
      {
        question: 'هل يجب إتقان الروسية للحصول على منحة؟',
        answer:
          'لا. السنة التحضيرية للغة الروسية مدمجة في التكوين وفي التمويل: تُتعلَّم اللغة في عين المكان قبل دخول الاختصاص.',
      },
    ],
  },
  ru: {
    title: 'Стипендии на учёбу в России для студентов из Туниса | RusStudy',
    description:
      'Российская государственная квота, скидки за успеваемость и платное поступление: сравнение путей финансирования учёбы в России, что покрывается и критерии отбора.',
    h1: 'Стипендии и финансирование учёбы в России',
    intro:
      'Учёбу в России можно финансировать несколькими способами, и они различаются по уровню отбора и по срокам. Эта страница сравнивает существующие пути и точно указывает, что покрывает каждый, чтобы вы знали, на что ориентироваться до подготовки досье.',
    tableTitle: 'Сравнение путей финансирования',
    tableIntro:
      'Государственная квота самая выгодная, но и самая конкурсная. Платное поступление остаётся основным путём и сохраняет доступность: обучение в наших партнёрских вузах начинается от 2 200 € в год.',
    columns: {
      route: 'Путь',
      awardedBy: 'Кто предоставляет',
      tuition: 'Обучение',
      housing: 'Жильё',
      allowance: 'Стипендия',
      selection: 'Отбор',
    },
    routes: [
      {
        name: 'Государственная квота',
        awardedBy: 'Правительство России',
        tuition: 'Покрывается',
        housing: 'Общежитие по студенческому тарифу',
        allowance: 'Скромная ежемесячная стипендия',
        selection: 'Документы и собеседование, мест мало',
      },
      {
        name: 'Скидка за успеваемость',
        awardedBy: 'Сам университет',
        tuition: 'Частичная скидка по результатам',
        housing: 'Обычный студенческий тариф',
        allowance: 'Нет',
        selection: 'Различается от вуза к вузу',
      },
      {
        name: 'Платное поступление',
        awardedBy: 'Без финансового отбора',
        tuition: 'От 2 200 € в год',
        housing: 'От 30 € в месяц в регионах',
        allowance: 'Нет',
        selection: 'Зачисление по академическому досье',
      },
    ],
    coveredTitle: 'Что покрывает государственная квота',
    covered: [
      'Обучение на весь срок программы, включая подготовительный год',
      'Место в общежитии по студенческому тарифу',
      'Ежемесячная стипендия от вуза',
    ],
    notCoveredTitle: 'Что вы оплачиваете в любом случае',
    notCovered: [
      'Авиабилеты и поездки домой в Тунис',
      'Обязательная медицинская страховка, ежегодно продлеваемая',
      'Визовые сборы, присяжные переводы и легализации',
      'Питание, местный транспорт и повседневные расходы',
    ],
    criteriaTitle: 'Что действительно влияет на отбор',
    criteria: [
      'Соответствие результатов бакалавриата запрашиваемому направлению',
      'Ранняя подача: досье, поданные в начале окна, идут раньше поданных в последнюю неделю',
      'Реалистичный список: включение региональных вузов заметно повышает шансы',
      'Полнота досье: одного недостающего документа достаточно, чтобы заявку отложили',
    ],
    guideTitle: 'Порядок подачи, шаг за шагом',
    guideText:
      'В нашей подробной статье разобрана вся процедура: сбор документов, подача на официальном портале, отборочное собеседование, затем приглашение и виза.',
    guideCta: 'Читать гид по подаче →',
    faq: [
      {
        question: 'Бесплатна ли учёба в России для тунисских студентов?',
        answer:
          'Бесплатна для обладателей государственной квоты, которая покрывает обучение. Вне квоты обучение платное, но доступное: от 2 200 € в год в наших партнёрских вузах.',
      },
      {
        question: 'Можно ли подавать на квоту и параллельно поступать платно?',
        answer:
          'Да, и это разумно. Мест по квоте мало, поэтому параллельная подготовка платного досье избавляет от потери года, если стипендия не получена.',
      },
      {
        question: 'Хватает ли ежемесячной стипендии на жизнь?',
        answer:
          'Нет. Она намеренно скромная и не заменяет бюджет на жизнь. Планируйте поддержку семьи или накопления на питание, транспорт и текущие расходы.',
      },
      {
        question: 'Нужно ли знать русский, чтобы получить стипендию?',
        answer:
          'Нет. Подготовительный год русского входит в программу и в финансирование: язык изучается на месте, до поступления на специальность.',
      },
    ],
  },
};

export function buildBoursesCopy(lang: Lang): BoursesCopy {
  return COPY[lang];
}
