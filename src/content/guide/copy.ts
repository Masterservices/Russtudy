import type { Lang } from '../../i18n';

export interface GuideBenefit {
  title: string;
  text: string;
}

export interface GuideStat {
  value: string;
  label: string;
}

export interface GuideCopy {
  title: string;
  description: string;
  h1: string;
  sub: string;
  benefits: GuideBenefit[];
  startCta: string;
  closeLabel: string;
  applyCta: string;
  stepOfTemplate: string;
  nextCta: string;
  skipCta: string;
  step2Kicker: string;
  step2Question: string;
  step2Answer: string;
  step2AnswerText: string;
  noteMinimaleLabel: string;
  step3Title: string;
  specialtyChips: [string, string, string, string, string, string];
  step4Title: string;
  step5Title: string;
  step5Sub: string;
  step5Regions: [string, string, string];
  worldStats: [GuideStat, GuideStat, GuideStat];
  lifeTitle: string;
  lifeBullets: GuideBenefit[];
  step6Title: string;
  testimonialTrustSuffix: string;
  finalKicker: string;
  finalTitle: string;
  offerFeatures: [GuideBenefit, GuideBenefit, GuideBenefit];
  offerCta: string;
  offerDisclaimer: string;
}

const COPY: Record<Lang, GuideCopy> = {
  fr: {
    title: 'Guide interactif — Étudier en Russie | RusStudy',
    description:
      "Découvrez en quelques minutes pourquoi des milliers d'étudiants tunisiens choisissent la Russie : admission dès 10/20 au Bac, universités partenaires, visa garanti, diplômes reconnus. Coupon exclusif à la clé.",
    h1: 'Étudier en Russie change votre avenir.',
    sub: "Découvrez en quelques minutes pourquoi des milliers d'étudiants tunisiens choisissent RusStudy.",
    benefits: [
      { title: 'Dès 10/20 au Bac', text: 'Vous pouvez accéder à de nombreuses universités publiques russes.' },
      { title: '40+ universités partenaires', text: 'Médecine, Ingénierie, Pharmacie, Économie... un large choix de filières accréditées.' },
      { title: 'Visa + Invitation', text: "Procédure accompagnée de bout en bout, garantie contractuelle à 100 %." },
      { title: 'Diplômes reconnus', text: 'Reconnus en Tunisie, en Europe, au Moyen-Orient et en Afrique.' },
    ],
    startCta: '▶ Commencer (90 sec)',
    closeLabel: 'Fermer',
    applyCta: 'Postuler',
    stepOfTemplate: 'Étape {n} / {total}',
    nextCta: 'Continuer →',
    skipCta: "Passer directement à l'offre",
    step2Kicker: 'Un simple',
    step2Question: 'de moyenne au Bac ?',
    step2Answer: 'Oui.',
    step2AnswerText: "C'est suffisant pour accéder à de nombreuses universités publiques russes.",
    noteMinimaleLabel: 'Note minimale',
    step3Title: 'Un large choix de filières accréditées',
    specialtyChips: ['Médecine', 'Aéronautique', 'Informatique', 'Ingénierie', 'Pharmacie', 'Architecture'],
    step4Title: "De l'admission au départ",
    step5Title: 'Des diplômes reconnus',
    step5Sub: 'En Europe, au Moyen-Orient et en Afrique',
    step5Regions: ['Europe', 'Moyen-Orient', 'Afrique'],
    worldStats: [
      { value: '100+', label: 'Pays' },
      { value: '40+', label: 'Universités' },
      { value: 'OMS', label: 'Médecine' },
    ],
    lifeTitle: 'Une expérience enrichissante',
    lifeBullets: [
      { title: 'Campus modernes et sécurisés', text: 'Résidences universitaires surveillées 24h/24.' },
      { title: 'Coût de la vie abordable', text: 'Frais de scolarité dès 2 200 €/an, bien en dessous des standards européens.' },
      { title: 'Étudiants tunisiens déjà sur place', text: 'Plus de 1 200 Tunisiens vous ont précédé.' },
      { title: 'Accompagnement complet 24/7', text: 'Un tuteur RusStudy à vos côtés à chaque étape.' },
    ],
    step6Title: 'Ils témoignent',
    testimonialTrustSuffix: 'étudiants tunisiens nous ont déjà fait confiance.',
    finalKicker: 'Offre exclusive',
    finalTitle: 'Obtiens immédiatement ton coupon',
    offerFeatures: [
      { title: 'Coupon valable', text: 'sur tout achat' },
      { title: 'Utilisable immédiatement', text: "dès aujourd'hui" },
      { title: 'Bonus exclusif', text: 'Guide PDF « Étudier en Russie »' },
    ],
    offerCta: 'Débloquer mon coupon →',
    offerDisclaimer: 'Aucun spam. Désinscription en un clic.',
  },
  en: {
    title: 'Interactive guide — Study in Russia | RusStudy',
    description:
      'Discover in a few minutes why thousands of Tunisian students choose Russia: admission from 10/20 at the Baccalaureate, partner universities, guaranteed visa, recognized degrees. Exclusive coupon included.',
    h1: 'Studying in Russia changes your future.',
    sub: 'Discover in a few minutes why thousands of Tunisian students choose RusStudy.',
    benefits: [
      { title: 'From 10/20 at the Bac', text: 'You can access many Russian public universities.' },
      { title: '40+ partner universities', text: 'Medicine, Engineering, Pharmacy, Economics... a wide choice of accredited programs.' },
      { title: 'Visa + Invitation', text: 'Fully supported process, with a contractual 100% guarantee.' },
      { title: 'Recognized degrees', text: 'Recognized in Tunisia, Europe, the Middle East and Africa.' },
    ],
    startCta: '▶ Start (90 sec)',
    closeLabel: 'Close',
    applyCta: 'Apply',
    stepOfTemplate: 'Step {n} / {total}',
    nextCta: 'Continue →',
    skipCta: 'Skip straight to the offer',
    step2Kicker: 'Just a',
    step2Question: 'average at the Bac?',
    step2Answer: 'Yes.',
    step2AnswerText: 'That is enough to access many Russian public universities.',
    noteMinimaleLabel: 'Minimum score',
    step3Title: 'A wide choice of accredited programs',
    specialtyChips: ['Medicine', 'Aeronautics', 'Computer Science', 'Engineering', 'Pharmacy', 'Architecture'],
    step4Title: 'From admission to departure',
    step5Title: 'Recognized degrees',
    step5Sub: 'In Europe, the Middle East and Africa',
    step5Regions: ['Europe', 'Middle East', 'Africa'],
    worldStats: [
      { value: '100+', label: 'Countries' },
      { value: '40+', label: 'Universities' },
      { value: 'WHO', label: 'Medicine' },
    ],
    lifeTitle: 'A rewarding experience',
    lifeBullets: [
      { title: 'Modern, secure campuses', text: 'University residences monitored 24/7.' },
      { title: 'Affordable cost of living', text: 'Tuition from €2,200/year, well below European standards.' },
      { title: 'Tunisian students already there', text: 'Over 1,200 Tunisians came before you.' },
      { title: 'Full 24/7 support', text: 'A RusStudy tutor by your side at every step.' },
    ],
    step6Title: 'What they say',
    testimonialTrustSuffix: 'Tunisian students have already trusted us.',
    finalKicker: 'Exclusive offer',
    finalTitle: 'Get your coupon instantly',
    offerFeatures: [
      { title: 'Valid coupon', text: 'on any purchase' },
      { title: 'Usable immediately', text: 'starting today' },
      { title: 'Exclusive bonus', text: 'PDF guide "Study in Russia"' },
    ],
    offerCta: 'Unlock my coupon →',
    offerDisclaimer: 'No spam. Unsubscribe in one click.',
  },
  ar: {
    title: 'دليل تفاعلي — الدراسة في روسيا | RusStudy',
    description:
      'اكتشف في دقائق معدودة لماذا يختار آلاف الطلاب التونسيين روسيا: القبول بدءًا من 10/20 في البكالوريا، جامعات شريكة، تأشيرة مضمونة، شهادات معترف بها. مع كوبون حصري.',
    h1: 'الدراسة في روسيا تغيّر مستقبلك.',
    sub: 'اكتشف في دقائق معدودة لماذا يختار آلاف الطلاب التونسيين RusStudy.',
    benefits: [
      { title: 'بدءًا من 10/20 في البكالوريا', text: 'يمكنك الالتحاق بالعديد من الجامعات الحكومية الروسية.' },
      { title: '+40 جامعة شريكة', text: 'طب، هندسة، صيدلة، اقتصاد... اختيار واسع من التخصصات المعتمدة.' },
      { title: 'تأشيرة + دعوة رسمية', text: 'مرافقة كاملة من الألف إلى الياء، بضمان تعاقدي بنسبة 100%.' },
      { title: 'شهادات معترف بها', text: 'معترف بها في تونس وأوروبا والشرق الأوسط وأفريقيا.' },
    ],
    startCta: '▶ ابدأ (90 ثانية)',
    closeLabel: 'إغلاق',
    applyCta: 'قدّم الآن',
    stepOfTemplate: 'الخطوة {n} / {total}',
    nextCta: 'متابعة ←',
    skipCta: 'الانتقال مباشرة إلى العرض',
    step2Kicker: 'معدل',
    step2Question: 'فقط في البكالوريا؟',
    step2Answer: 'نعم.',
    step2AnswerText: 'يكفي هذا للالتحاق بالعديد من الجامعات الحكومية الروسية.',
    noteMinimaleLabel: 'الحد الأدنى',
    step3Title: 'اختيار واسع من التخصصات المعتمدة',
    specialtyChips: ['الطب', 'الطيران', 'الإعلامية', 'الهندسة', 'الصيدلة', 'الهندسة المعمارية'],
    step4Title: 'من القبول إلى المغادرة',
    step5Title: 'شهادات معترف بها',
    step5Sub: 'في أوروبا والشرق الأوسط وأفريقيا',
    step5Regions: ['أوروبا', 'الشرق الأوسط', 'أفريقيا'],
    worldStats: [
      { value: '+100', label: 'دولة' },
      { value: '+40', label: 'جامعة' },
      { value: 'OMS', label: 'الطب' },
    ],
    lifeTitle: 'تجربة غنية',
    lifeBullets: [
      { title: 'حرم جامعي حديث وآمن', text: 'إقامات جامعية تحت المراقبة على مدار الساعة.' },
      { title: 'تكلفة معيشة معقولة', text: 'رسوم دراسية بدءًا من 2200 يورو سنويًا، أقل بكثير من المعايير الأوروبية.' },
      { title: 'طلاب تونسيون موجودون بالفعل', text: 'أكثر من 1200 تونسي سبقوك إلى هناك.' },
      { title: 'مرافقة كاملة على مدار الساعة', text: 'مرشد من RusStudy إلى جانبك في كل خطوة.' },
    ],
    step6Title: 'آراء طلابنا',
    testimonialTrustSuffix: 'طالب تونسي وثقوا بنا بالفعل.',
    finalKicker: 'عرض حصري',
    finalTitle: 'احصل فورًا على كوبونك',
    offerFeatures: [
      { title: 'كوبون صالح', text: 'على أي عملية شراء' },
      { title: 'قابل للاستخدام فورًا', text: 'ابتداءً من اليوم' },
      { title: 'مكافأة حصرية', text: 'دليل PDF «الدراسة في روسيا»' },
    ],
    offerCta: 'احصل على كوبوني ←',
    offerDisclaimer: 'بدون رسائل مزعجة. إلغاء الاشتراك بنقرة واحدة.',
  },
  ru: {
    title: 'Интерактивный гид — Учёба в России | RusStudy',
    description:
      'Узнайте за несколько минут, почему тысячи тунисских студентов выбирают Россию: поступление от 10/20 баллов на бакалавриате, вузы-партнёры, гарантированная виза, признанные дипломы. Эксклюзивный купон в конце.',
    h1: 'Учёба в России меняет ваше будущее.',
    sub: 'Узнайте за несколько минут, почему тысячи тунисских студентов выбирают RusStudy.',
    benefits: [
      { title: 'От 10/20 на бакалавриате', text: 'Вы можете поступить во многие государственные вузы России.' },
      { title: '40+ вузов-партнёров', text: 'Медицина, инженерия, фармацевтика, экономика... широкий выбор аккредитованных программ.' },
      { title: 'Виза + приглашение', text: 'Полное сопровождение от А до Я, с договорной гарантией 100%.' },
      { title: 'Признанные дипломы', text: 'Признаны в Тунисе, Европе, на Ближнем Востоке и в Африке.' },
    ],
    startCta: '▶ Начать (90 сек)',
    closeLabel: 'Закрыть',
    applyCta: 'Подать заявку',
    stepOfTemplate: 'Шаг {n} / {total}',
    nextCta: 'Продолжить →',
    skipCta: 'Перейти сразу к предложению',
    step2Kicker: 'Всего',
    step2Question: 'баллов на бакалавриате?',
    step2Answer: 'Да.',
    step2AnswerText: 'Этого достаточно для поступления во многие государственные вузы России.',
    noteMinimaleLabel: 'Минимальный балл',
    step3Title: 'Широкий выбор аккредитованных программ',
    specialtyChips: ['Медицина', 'Авиастроение', 'Информатика', 'Инженерия', 'Фармацевтика', 'Архитектура'],
    step4Title: 'От поступления до отъезда',
    step5Title: 'Признанные дипломы',
    step5Sub: 'В Европе, на Ближнем Востоке и в Африке',
    step5Regions: ['Европа', 'Ближний Восток', 'Африка'],
    worldStats: [
      { value: '100+', label: 'Стран' },
      { value: '40+', label: 'Вузов' },
      { value: 'ВОЗ', label: 'Медицина' },
    ],
    lifeTitle: 'Насыщенный опыт',
    lifeBullets: [
      { title: 'Современные, безопасные кампусы', text: 'Студенческие общежития под круглосуточным наблюдением.' },
      { title: 'Доступная стоимость жизни', text: 'Обучение от 2 200 €/год, значительно ниже европейских стандартов.' },
      { title: 'Тунисские студенты уже на месте', text: 'Более 1200 тунисцев уже приехали раньше вас.' },
      { title: 'Полное сопровождение 24/7', text: 'Куратор RusStudy рядом с вами на каждом этапе.' },
    ],
    step6Title: 'Отзывы студентов',
    testimonialTrustSuffix: 'тунисских студентов уже нам доверились.',
    finalKicker: 'Эксклюзивное предложение',
    finalTitle: 'Получите купон мгновенно',
    offerFeatures: [
      { title: 'Купон действителен', text: 'на любую покупку' },
      { title: 'Можно использовать сразу', text: 'уже сегодня' },
      { title: 'Эксклюзивный бонус', text: 'PDF-гид «Учёба в России»' },
    ],
    offerCta: 'Получить купон →',
    offerDisclaimer: 'Никакого спама. Отписка в один клик.',
  },
};

export function buildGuideCopy(lang: Lang): GuideCopy {
  return COPY[lang];
}
