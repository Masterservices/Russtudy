import type { Lang } from '../../i18n';

export interface ComparatifSection {
  heading: string;
  text: string;
}

export interface ComparatifTableRow {
  criterion: string;
  rusStudy: string;
  values: string[];
}

export interface ComparatifCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: ComparatifSection[];
  tableTitle: string;
  tableIntro: string;
  tableSourceNote: string;
  competitors: string[];
  table: ComparatifTableRow[];
  othersIntro: string;
  others: string[];
}

/**
 * Faits verifies aupres des sources publiques de chaque agence (sites
 * officiels), juillet 2026. "Non communique" = information absente du
 * site public consulte, pas une affirmation que le service n'existe pas.
 */
const COMPETITORS = ['TSSR', 'RACUS', 'Ksiba International Education', 'Leader Study Abroad'];

const COPY: Record<Lang, ComparatifCopy> = {
  fr: {
    title: 'RusStudy, votre spécialiste Russie | RusStudy',
    description:
      "RusStudy ne remplace pas votre consultant d'orientation : nous intervenons spécifiquement sur la partie Russie de votre dossier — admission directe, visa, logement et suivi sur place.",
    h1: 'RusStudy complète votre parcours, il ne le remplace pas',
    intro:
      "Vous avez peut-être déjà consulté un conseiller d'orientation généraliste pour explorer plusieurs destinations d'études. RusStudy n'est pas un concurrent de cette démarche : nous sommes le spécialiste exclusif de la Russie qui prend le relais dès que cette destination est envisagée.",
    sections: [
      {
        heading: 'Un conseiller généraliste pour explorer les options',
        text: "Un consultant d'orientation généraliste vous aide à comparer plusieurs pays et filières, et à clarifier votre projet. C'est une étape utile, surtout si vous hésitez encore entre plusieurs destinations.",
      },
      {
        heading: 'RusStudy, spécialiste exclusif de la Russie',
        text: "Dès que la Russie devient une option sérieuse, RusStudy prend le relais avec ce qu'un accompagnement généraliste ne couvre pas dans le détail : une présence physique dans les villes universitaires russes (Moscou, Saint-Pétersbourg, Kazan), une admission directe auprès de nos universités partenaires, un accompagnement complet du visa et de l'invitation officielle, la réservation du logement universitaire, et une plateforme numérique pour suivre votre dossier.",
      },
      {
        heading: 'Pourquoi associer les deux',
        text: "Vous n'avez pas à choisir entre votre consultant habituel et RusStudy. De nombreux étudiants utilisent un accompagnement généraliste pour affiner leur projet, puis font appel à RusStudy spécifiquement pour la partie russe de leur dossier : universités, visa, logement et installation sur place. C'est notre spécialisation exclusive sur la Russie qui nous permet d'apporter ce niveau de détail sur ce pays précis.",
      },
    ],
    tableTitle: "Comparatif des agences d'orientation vers la Russie",
    tableIntro:
      "Voici comment RusStudy se situe, sur des critères vérifiables publiquement, face à d'autres agences actives sur le marché tunisien de l'orientation vers la Russie : TSSR, RACUS, Ksiba International Education et Leader Study Abroad.",
    tableSourceNote:
      "Comparatif établi à partir des informations publiques disponibles sur les sites officiels de chaque agence, à titre indicatif (juillet 2026). « Non communiqué » signifie que l'information n'apparaît pas sur le site consulté, pas que le service n'existe pas.",
    competitors: COMPETITORS,
    table: [
      {
        criterion: 'Spécialisation',
        rusStudy: 'Exclusivement la Russie',
        values: ['Russie + Allemagne', 'Exclusivement la Russie', 'Multi-pays (Russie incluse)', '12 destinations (Russie incluse)'],
      },
      {
        criterion: 'Ancienneté',
        rusStudy: '7 ans (Master Services, depuis 2018)',
        values: ['Depuis 2009', 'Depuis 1998', 'Non communiqué', 'Depuis 2005'],
      },
      {
        criterion: 'Logement universitaire',
        rusStudy: 'Réservé et inclus',
        values: ['Inclus', 'Inclus dans le forfait', 'Non communiqué', 'Proposé après acceptation'],
      },
      {
        criterion: 'Accompagnement visa détaillé',
        rusStudy: 'Délais précisés (15-30j + 30-45j)',
        values: ['Accompagnement détaillé', 'Inclus (accompagnement papiers)', 'Informations générales sur le site', 'Coopération avec agents visa'],
      },
      {
        criterion: 'Plateforme numérique de suivi',
        rusStudy: 'Oui (démo en ligne)',
        values: ['Non trouvée', 'Non trouvée', 'Non trouvée', 'Oui (suivi en temps réel)'],
      },
    ],
    othersIntro: "D'autres acteurs de l'orientation vers l'étranger sont également actifs sur le marché tunisien, dont :",
    others: ['Educa Conseil', 'Cidesc', 'EduWorld', 'Connect Universel', 'Sises Tunisia', 'WSC Tunisia', 'EEUA'],
  },
  en: {
    title: 'RusStudy, your Russia specialist | RusStudy',
    description:
      "RusStudy doesn't replace your study-abroad consultant: we handle specifically the Russia part of your file — direct admission, visa, housing and on-site support.",
    h1: 'RusStudy completes your journey, it does not replace it',
    intro:
      "You may already have consulted a general study-abroad consultant to explore several destinations. RusStudy isn't a competitor to that step: we are the exclusive Russia specialist who takes over once that destination becomes a serious option.",
    sections: [
      {
        heading: 'A general consultant to explore your options',
        text: 'A general study-abroad consultant helps you compare several countries and fields of study, and clarify your project. That is a useful step, especially if you are still hesitating between destinations.',
      },
      {
        heading: 'RusStudy, the exclusive Russia specialist',
        text: "Once Russia becomes a serious option, RusStudy takes over with what a general consultant does not cover in detail: a physical presence in Russian university cities (Moscow, Saint Petersburg, Kazan), direct admission with our partner universities, full support for the visa and official invitation, university housing reservation, and a digital platform to track your file.",
      },
      {
        heading: 'Why use both',
        text: "You don't have to choose between your usual consultant and RusStudy. Many students use a general consultant to refine their project, then turn to RusStudy specifically for the Russian part of their file: universities, visa, housing and settling in. Our exclusive specialization in Russia is precisely what lets us bring this level of detail on this specific country.",
      },
    ],
    tableTitle: 'Comparison of agencies for studying in Russia',
    tableIntro:
      "Here is how RusStudy compares, on publicly verifiable criteria, against other agencies active in the Tunisian market for orientation toward Russia: TSSR, RACUS, Ksiba International Education and Leader Study Abroad.",
    tableSourceNote:
      "Comparison built from public information available on each agency's official website, for guidance only (July 2026). \"Not disclosed\" means the information does not appear on the site reviewed, not that the service does not exist.",
    competitors: COMPETITORS,
    table: [
      {
        criterion: 'Specialization',
        rusStudy: 'Exclusively Russia',
        values: ['Russia + Germany', 'Exclusively Russia', 'Multi-country (Russia included)', '12 destinations (Russia included)'],
      },
      {
        criterion: 'Track record',
        rusStudy: '7 years (Master Services, since 2018)',
        values: ['Since 2009', 'Since 1998', 'Not disclosed', 'Since 2005'],
      },
      {
        criterion: 'University housing',
        rusStudy: 'Reserved and included',
        values: ['Included', 'Included in the package', 'Not disclosed', 'Offered after acceptance'],
      },
      {
        criterion: 'Detailed visa support',
        rusStudy: 'Precise timelines (15-30d + 30-45d)',
        values: ['Detailed support', 'Included (paperwork support)', 'General information on the site', 'Cooperation with visa agents'],
      },
      {
        criterion: 'Digital tracking platform',
        rusStudy: 'Yes (online demo)',
        values: ['Not found', 'Not found', 'Not found', 'Yes (real-time tracking)'],
      },
    ],
    othersIntro: 'Other players in study-abroad guidance are also active in the Tunisian market, including:',
    others: ['Educa Conseil', 'Cidesc', 'EduWorld', 'Connect Universel', 'Sises Tunisia', 'WSC Tunisia', 'EEUA'],
  },
  ar: {
    title: 'RusStudy، اختصاصي روسيا | RusStudy',
    description:
      'لا تحل RusStudy محل مستشار التوجيه الخاص بك: نتدخل تحديدًا في الجزء الخاص بروسيا من ملفك — قبول مباشر، تأشيرة، سكن ومرافقة ميدانية.',
    h1: 'RusStudy تُكمل مسارك، لا تحل محله',
    intro:
      'ربما استشرت بالفعل مستشار توجيه عام لاستكشاف عدة وجهات دراسية. RusStudy ليست منافسة لهذه الخطوة: نحن الاختصاصي الحصري لروسيا الذي يتولى الأمر بمجرد أن تصبح هذه الوجهة خيارًا جديًا.',
    sections: [
      {
        heading: 'مستشار عام لاستكشاف الخيارات',
        text: 'يساعدك مستشار التوجيه العام على مقارنة عدة دول وتخصصات، وتوضيح مشروعك. هذه خطوة مفيدة، خاصة إذا كنت لا تزال مترددًا بين عدة وجهات.',
      },
      {
        heading: 'RusStudy، الاختصاصي الحصري لروسيا',
        text: 'بمجرد أن تصبح روسيا خيارًا جديًا، تتولى RusStudy الأمر بما لا يغطيه مستشار عام بالتفصيل: حضور ميداني في المدن الجامعية الروسية (موسكو، سان بطرسبورغ، قازان)، قبول مباشر لدى جامعاتنا الشريكة، مرافقة كاملة للتأشيرة ورسالة الدعوة الرسمية، حجز السكن الجامعي، ومنصة رقمية لمتابعة ملفك.',
      },
      {
        heading: 'لماذا الجمع بين الاثنين',
        text: 'لا داعي للاختيار بين مستشارك المعتاد وRusStudy. يستعين العديد من الطلبة بمرافقة عامة لتوضيح مشروعهم، ثم يلجأون إلى RusStudy تحديدًا للجزء الروسي من ملفهم: الجامعات، التأشيرة، السكن والاستقرار في عين المكان. تخصصنا الحصري في روسيا هو ما يتيح لنا تقديم هذا المستوى من التفصيل حول هذا البلد تحديدًا.',
      },
    ],
    tableTitle: 'مقارنة وكالات التوجيه نحو روسيا',
    tableIntro:
      'إليك كيف تتموقع RusStudy، وفق معايير يمكن التحقق منها علنًا، مقارنة بوكالات أخرى ناشطة في السوق التونسية للتوجيه نحو روسيا: TSSR وRACUS وKsiba International Education وLeader Study Abroad.',
    tableSourceNote:
      'مقارنة أُعدّت بناءً على المعلومات العامة المتاحة على الموقع الرسمي لكل وكالة، لغرض الاسترشاد فقط (يوليو 2026). "غير معلن" تعني أن المعلومة غير موجودة في الموقع الذي تمت زيارته، وليس أن الخدمة غير موجودة.',
    competitors: COMPETITORS,
    table: [
      {
        criterion: 'التخصص',
        rusStudy: 'روسيا حصريًا',
        values: ['روسيا + ألمانيا', 'روسيا حصريًا', 'عدة دول (تشمل روسيا)', '12 وجهة (تشمل روسيا)'],
      },
      {
        criterion: 'الأقدمية',
        rusStudy: '7 سنوات (Master Services، منذ 2018)',
        values: ['منذ 2009', 'منذ 1998', 'غير معلن', 'منذ 2005'],
      },
      {
        criterion: 'السكن الجامعي',
        rusStudy: 'محجوز ومُدرج',
        values: ['مُدرج', 'مُدرج في الباقة', 'غير معلن', 'يُقترح بعد القبول'],
      },
      {
        criterion: 'مرافقة تفصيلية للتأشيرة',
        rusStudy: 'آجال محددة (15-30 يومًا + 30-45 يومًا)',
        values: ['مرافقة تفصيلية', 'مُدرج (مرافقة الأوراق)', 'معلومات عامة على الموقع', 'تعاون مع وكلاء التأشيرة'],
      },
      {
        criterion: 'منصة رقمية للمتابعة',
        rusStudy: 'نعم (عرض تجريبي عبر الإنترنت)',
        values: ['لم يتم العثور عليها', 'لم يتم العثور عليها', 'لم يتم العثور عليها', 'نعم (متابعة آنية)'],
      },
    ],
    othersIntro: 'توجد أيضًا جهات أخرى ناشطة في التوجيه نحو الخارج في السوق التونسية، من بينها:',
    others: ['Educa Conseil', 'Cidesc', 'EduWorld', 'Connect Universel', 'Sises Tunisia', 'WSC Tunisia', 'EEUA'],
  },
  ru: {
    title: 'RusStudy — ваш специалист по России | RusStudy',
    description:
      'RusStudy не заменяет вашего консультанта по обучению за рубежом: мы занимаемся именно российской частью вашего досье — прямое поступление, виза, жильё и сопровождение на месте.',
    h1: 'RusStudy дополняет ваш путь, а не заменяет его',
    intro:
      'Возможно, вы уже консультировались с консультантом по обучению за рубежом, чтобы рассмотреть несколько направлений. RusStudy не конкурирует с этим этапом: мы — эксклюзивный специалист по России, который подключается, как только это направление становится серьёзным вариантом.',
    sections: [
      {
        heading: 'Универсальный консультант для изучения вариантов',
        text: 'Универсальный консультант по обучению за рубежом помогает сравнить несколько стран и направлений, прояснить ваш проект. Это полезный этап, особенно если вы ещё колеблетесь между направлениями.',
      },
      {
        heading: 'RusStudy — эксклюзивный специалист по России',
        text: 'Как только Россия становится серьёзным вариантом, RusStudy подключается с тем, что универсальное сопровождение не покрывает в деталях: физическое присутствие в российских университетских городах (Москва, Санкт-Петербург, Казань), прямое поступление в партнёрские вузы, полное сопровождение визы и официального приглашения, бронирование университетского общежития и цифровая платформа для отслеживания вашего досье.',
      },
      {
        heading: 'Почему использовать обоих',
        text: 'Вам не нужно выбирать между вашим обычным консультантом и RusStudy. Многие студенты используют универсального консультанта, чтобы уточнить свой проект, а затем обращаются к RusStudy именно для российской части досье: вузы, виза, жильё и обустройство на месте. Именно наша эксклюзивная специализация на России позволяет нам обеспечить такой уровень детализации по этой конкретной стране.',
      },
    ],
    tableTitle: 'Сравнение агентств по учёбе в России',
    tableIntro:
      'Вот как RusStudy соотносится, по публично проверяемым критериям, с другими агентствами, работающими на тунисском рынке ориентации на Россию: TSSR, RACUS, Ksiba International Education и Leader Study Abroad.',
    tableSourceNote:
      'Сравнение составлено на основе публичной информации с официальных сайтов каждого агентства, только для ознакомления (июль 2026 г.). «Не указано» означает, что информация отсутствует на просмотренном сайте, а не что услуги не существует.',
    competitors: COMPETITORS,
    table: [
      {
        criterion: 'Специализация',
        rusStudy: 'Исключительно Россия',
        values: ['Россия + Германия', 'Исключительно Россия', 'Несколько стран (включая Россию)', '12 направлений (включая Россию)'],
      },
      {
        criterion: 'Опыт работы',
        rusStudy: '7 лет (Master Services, с 2018 года)',
        values: ['С 2009 года', 'С 1998 года', 'Не указано', 'С 2005 года'],
      },
      {
        criterion: 'Университетское общежитие',
        rusStudy: 'Забронировано и включено',
        values: ['Включено', 'Включено в пакет', 'Не указано', 'Предлагается после зачисления'],
      },
      {
        criterion: 'Подробное визовое сопровождение',
        rusStudy: 'Точные сроки (15-30 дн. + 30-45 дн.)',
        values: ['Подробное сопровождение', 'Включено (оформление документов)', 'Общая информация на сайте', 'Сотрудничество с визовыми агентами'],
      },
      {
        criterion: 'Цифровая платформа отслеживания',
        rusStudy: 'Да (онлайн-демо)',
        values: ['Не найдено', 'Не найдено', 'Не найдено', 'Да (отслеживание в реальном времени)'],
      },
    ],
    othersIntro: 'На тунисском рынке также присутствуют другие игроки в сфере обучения за рубежом, включая:',
    others: ['Educa Conseil', 'Cidesc', 'EduWorld', 'Connect Universel', 'Sises Tunisia', 'WSC Tunisia', 'EEUA'],
  },
};

export function buildComparatifCopy(lang: Lang): ComparatifCopy {
  return COPY[lang];
}
