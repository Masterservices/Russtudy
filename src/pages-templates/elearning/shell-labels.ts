import type { Lang } from '../../i18n';

/** Signature de la plateforme, sous le logotype. */
export const PLATFORM_TAGLINE: Record<Lang, string> = {
  fr: 'Apprentissage des langues',
  en: 'Language learning',
  ar: 'تعلّم اللغات',
  ru: 'Изучение языков',
};

export const NAV_LESSONS: Record<Lang, string> = {
  fr: 'Leçons',
  en: 'Lessons',
  ar: 'الدروس',
  ru: 'Уроки',
};

export const NAV_VISIO: Record<Lang, string> = {
  fr: 'Visio',
  en: 'Video',
  ar: 'فيديو',
  ru: 'Видео',
};

/**
 * Mentions obligatoires, reprises du pied de page du site.
 *
 * La plateforme a sa propre coque, mais elle reste éditée par la même
 * société : les documents juridiques sont les mêmes, et doivent rester
 * atteignables depuis n'importe quelle page.
 */
export const LEGAL_PILLS: { path: string; label: Record<Lang, string> }[] = [
  {
    path: '/mentions-legales',
    label: { fr: 'Mentions légales', en: 'Legal notice', ar: 'إشعار قانوني', ru: 'Правовая информация' },
  },
  {
    path: '/conditions-generales-utilisation',
    label: { fr: 'CGU', en: 'Terms of use', ar: 'شروط الاستخدام', ru: 'Условия использования' },
  },
  {
    path: '/politique-de-confidentialite',
    label: { fr: 'Confidentialité', en: 'Privacy', ar: 'الخصوصية', ru: 'Конфиденциальность' },
  },
];

/**
 * Bannière de découverte du site.
 *
 * Adressée au seul public maghrébin : qui apprend le russe depuis la
 * Tunisie est un candidat plausible au départ, et a tout intérêt à
 * connaître le reste de ce que nous faisons. Un russophone qui apprend
 * le français n'est pas dans ce cas, et la bannière ne lui est pas
 * servie — c'est pourquoi elle n'existe qu'en français et en arabe.
 */
export const DISCOVER: Record<Lang, { kicker: string; title: string; text: string; cta: string }> = {
  fr: {
    kicker: 'RussieEtudes.com',
    title: 'Étudier en Russie, après la langue',
    text: "Le russe que vous travaillez ici ouvre des études en Russie : médecine, ingénierie, informatique. Nous accompagnons le dossier, le visa et l'arrivée sur place.",
    cta: 'Découvrir les études à l’étranger',
  },
  ar: {
    kicker: 'RussieEtudes.com',
    title: 'الدراسة في روسيا، بعد اللغة',
    text: 'الروسية التي تتعلّمها هنا تفتح أبواب الدراسة في روسيا: الطبّ، الهندسة، الإعلامية. نرافقك في الملفّ والتأشيرة والوصول.',
    cta: 'اكتشف الدراسة في الخارج',
  },
  en: {
    kicker: 'RussieEtudes.com',
    title: 'Studying in Russia, after the language',
    text: 'The Russian you are working on here opens the door to studies in Russia: medicine, engineering, computer science. We handle the application, the visa and the arrival.',
    cta: 'Discover studying abroad',
  },
  ru: {
    kicker: 'RussieEtudes.com',
    title: 'Учёба в России',
    text: 'Мы сопровождаем студентов из Магриба на всех этапах поступления в российские вузы.',
    cta: 'Узнать об учёбе за рубежом',
  },
};

export const SOON: Record<Lang, string> = {
  fr: 'A2, B1 — à venir',
  en: 'A2, B1 — coming',
  ar: 'A2 وB1 — قريبًا',
  ru: 'A2, B1 — скоро',
};

/**
 * Compte apprenant.
 *
 * La plateforme a sa propre connexion, distincte de celle du suivi de
 * dossier : un apprenant n'a pas de candidature, et le renvoyer vers
 * `/app/connexion` le déposerait dans un espace qui ne le concerne pas.
 * C'est le même annuaire d'utilisateurs en base, mais ce n'est pas la
 * même porte.
 */
export const ACCOUNT: Record<
  Lang,
  {
    signIn: string;
    signOut: string;
    title: string;
    subtitle: string;
    email: string;
    password: string;
    submit: string;
    noAccount: string;
    requestAccess: string;
    signedInAs: string;
    errors: Record<string, string>;
  }
> = {
  fr: {
    signIn: 'Se connecter',
    signOut: 'Se déconnecter',
    title: 'Se connecter',
    subtitle:
      'Votre progression est enregistrée sur votre compte : vous retrouvez les leçons terminées sur n’importe quel appareil.',
    email: 'Adresse e-mail',
    password: 'Mot de passe',
    submit: 'Se connecter',
    noAccount: 'Pas encore de compte ?',
    requestAccess: 'Demander un accès',
    signedInAs: 'Connecté en tant que',
    errors: {
      missing: 'Renseignez votre adresse et votre mot de passe.',
      credentials: 'Adresse ou mot de passe incorrect.',
      rate: 'Trop de tentatives. Patientez quelques minutes.',
      unavailable: 'La connexion est momentanément indisponible.',
    },
  },
  en: {
    signIn: 'Sign in',
    signOut: 'Sign out',
    title: 'Sign in',
    subtitle:
      'Your progress is saved to your account: completed lessons follow you to any device.',
    email: 'Email address',
    password: 'Password',
    submit: 'Sign in',
    noAccount: 'No account yet?',
    requestAccess: 'Request access',
    signedInAs: 'Signed in as',
    errors: {
      missing: 'Enter your email address and password.',
      credentials: 'Incorrect email address or password.',
      rate: 'Too many attempts. Please wait a few minutes.',
      unavailable: 'Sign-in is temporarily unavailable.',
    },
  },
  ar: {
    signIn: 'تسجيل الدخول',
    signOut: 'تسجيل الخروج',
    title: 'تسجيل الدخول',
    subtitle: 'يُحفظ تقدّمك في حسابك: تجد الدروس المنهاة على أيّ جهاز.',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    submit: 'تسجيل الدخول',
    noAccount: 'ليس لديك حساب بعد؟',
    requestAccess: 'اطلب فتح الوصول',
    signedInAs: 'متّصل بصفة',
    errors: {
      missing: 'أدخل بريدك الإلكتروني وكلمة المرور.',
      credentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
      rate: 'محاولات كثيرة. انتظر بضع دقائق.',
      unavailable: 'تسجيل الدخول غير متاح مؤقّتًا.',
    },
  },
  ru: {
    signIn: 'Войти',
    signOut: 'Выйти',
    title: 'Вход',
    subtitle:
      'Прогресс сохраняется в вашем аккаунте: пройденные уроки видны на любом устройстве.',
    email: 'Электронная почта',
    password: 'Пароль',
    submit: 'Войти',
    noAccount: 'Ещё нет аккаунта?',
    requestAccess: 'Запросить доступ',
    signedInAs: 'Вы вошли как',
    errors: {
      missing: 'Укажите адрес почты и пароль.',
      credentials: 'Неверный адрес или пароль.',
      rate: 'Слишком много попыток. Подождите несколько минут.',
      unavailable: 'Вход временно недоступен.',
    },
  },
};

/** Suivi de progression, du point de vue de la leçon. */
export const PROGRESS: Record<Lang, { failed: string; invite: string; inviteCta: string }> = {
  fr: {
    failed: 'La progression n’a pas pu être enregistrée. Réessayez.',
    invite: 'Connectez-vous pour garder la trace des leçons terminées.',
    inviteCta: 'Se connecter',
  },
  en: {
    failed: 'Progress could not be saved. Please try again.',
    invite: 'Sign in to keep track of the lessons you have finished.',
    inviteCta: 'Sign in',
  },
  ar: {
    failed: 'لم يُحفظ التقدّم. أعد المحاولة.',
    invite: 'سجّل الدخول لتتبّع الدروس المنهاة.',
    inviteCta: 'تسجيل الدخول',
  },
  ru: {
    failed: 'Не удалось сохранить прогресс. Попробуйте снова.',
    invite: 'Войдите, чтобы отмечать пройденные уроки.',
    inviteCta: 'Войти',
  },
};

/**
 * Destinations d'études, en bas de page.
 *
 * Une seule est ouverte : la Russie. Les autres sont annoncées pour
 * dire où nous allons, et portent la mention « bientôt » — lister un
 * pays sans la mention laisserait croire que le dossier s'y dépose
 * déjà, et ferait écrire des gens à qui il faudrait répondre non.
 *
 * Telles quelles, ces lignes ne mesurent rien : sans lien ni message,
 * personne ne saura quelle destination intéresse. Les rendre
 * cliquables vers WhatsApp, avec le pays dans le message, suffirait à
 * le savoir.
 */
export const DESTINATIONS: { key: string; live?: boolean; label: Record<Lang, string> }[] = [
  {
    key: 'ru',
    live: true,
    label: {
      fr: 'Étudier en Russie',
      en: 'Study in Russia',
      ar: 'الدراسة في روسيا',
      ru: 'Учёба в России',
    },
  },
  {
    key: 'de',
    label: {
      fr: 'Étudier en Allemagne',
      en: 'Study in Germany',
      ar: 'الدراسة في ألمانيا',
      ru: 'Учёба в Германии',
    },
  },
  {
    key: 'tr',
    label: {
      fr: 'Étudier en Turquie',
      en: 'Study in Türkiye',
      ar: 'الدراسة في تركيا',
      ru: 'Учёба в Турции',
    },
  },
  {
    key: 'cn',
    label: {
      fr: 'Étudier en Chine',
      en: 'Study in China',
      ar: 'الدراسة في الصين',
      ru: 'Учёба в Китае',
    },
  },
];

/** Mention portée par une destination pas encore ouverte. */
export const DESTINATION_SOON: Record<Lang, string> = {
  fr: 'bientôt',
  en: 'soon',
  ar: 'قريبًا',
  ru: 'скоро',
};
