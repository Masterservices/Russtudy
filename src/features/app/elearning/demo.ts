import type { CourseSummary, LessonDetail, LessonSummary } from './types';

/**
 * Jeu de démonstration.
 *
 * Même rôle que les autres jeux de démo de /app : permettre de parcourir
 * l'espace sans base branchée. Le contenu est volontairement réduit à
 * deux leçons réelles par parcours plutôt qu'à des leçons factices — ce
 * qui s'affiche ici est ce qu'un étudiant verra vraiment.
 */
export const DEMO_COURSES: CourseSummary[] = [
  {
    id: 'demo-russe',
    slug: 'russe-a1',
    targetLang: 'ru',
    level: 'A1',
    title: { fr: 'Russe A1 — débutant complet', ar: 'الروسية A1 — مبتدئ', en: 'Russian A1', ru: 'Русский A1' },
    description: {
      fr: "De l'alphabet cyrillique aux premières phrases de la vie quotidienne.",
      ar: 'من الأبجدية السيريلية إلى أولى جمل الحياة اليومية.',
      en: 'From the Cyrillic alphabet to the first everyday sentences.',
      ru: 'От кириллицы до первых бытовых фраз.',
    },
    lessonCount: 2,
    freeLessonCount: 1,
    completedCount: 0,
    hasAccess: false,
  },
  {
    id: 'demo-francais',
    slug: 'francais-a1',
    targetLang: 'fr',
    level: 'A1',
    title: { fr: 'Français A1 — débutant complet', ru: 'Французский A1', en: 'French A1', ar: 'الفرنسية A1' },
    description: {
      fr: "La prononciation d'abord : les sons qui n'existent pas en russe.",
      ru: 'Сначала произношение: звуки, которых нет в русском.',
      en: 'Pronunciation first: the sounds that do not exist in Russian.',
      ar: 'النطق أولًا: الأصوات التي لا وجود لها في الروسية.',
    },
    lessonCount: 1,
    freeLessonCount: 1,
    completedCount: 0,
    hasAccess: false,
  },
];

export const DEMO_LESSONS: Record<string, LessonSummary[]> = {
  'russe-a1': [
    {
      id: 'demo-ru-1',
      slug: 'alphabet-1',
      position: 1,
      title: { fr: "L'alphabet cyrillique (1/3)", ar: 'الأبجدية السيريلية (1/3)', en: 'Cyrillic alphabet (1/3)', ru: 'Кириллица (1/3)' },
      summary: {
        fr: 'Les lettres qui se lisent comme en français, et les faux amis.',
        ar: 'الحروف التي تُقرأ كما في الفرنسية، والأصدقاء المزيّفون.',
        en: 'The letters that read as in French, and the false friends.',
        ru: 'Буквы, читаемые как во французском, и ложные друзья.',
      },
      isFree: true,
      durationMin: 12,
      completedAt: null,
      unlocked: true,
    },
    {
      id: 'demo-ru-2',
      slug: 'salutations',
      position: 2,
      title: { fr: 'Saluer et se présenter', ar: 'التحية والتعريف بالنفس', en: 'Greeting and introducing yourself', ru: 'Приветствие и знакомство' },
      summary: {
        fr: 'Здравствуйте, привет, как дела — et quand utiliser lequel.',
        ar: 'الصيغ الرسمية والمألوفة، ومتى تُستعمل كل واحدة.',
        en: 'Formal and familiar greetings, and when each applies.',
        ru: 'Формальные и неформальные приветствия.',
      },
      isFree: false,
      durationMin: 14,
      completedAt: null,
      unlocked: false,
    },
  ],
  'francais-a1': [
    {
      id: 'demo-fr-1',
      slug: 'sons-du-francais',
      position: 1,
      title: { ru: 'Звуки французского (1/3)', fr: 'Les sons du français (1/3)', en: 'French sounds (1/3)', ar: 'أصوات الفرنسية (1/3)' },
      summary: {
        ru: 'Носовые гласные и французское «u»: чего нет в русском.',
        fr: "Les nasales et le « u » : ce qui n'existe pas en russe.",
        en: 'Nasal vowels and the French “u”: what Russian does not have.',
        ar: 'الأصوات الأنفية و«u»: ما لا وجود له في الروسية.',
      },
      isFree: true,
      durationMin: 11,
      completedAt: null,
      unlocked: true,
    },
  ],
};

export const DEMO_LESSON_DETAIL: LessonDetail = {
  id: 'demo-ru-1',
  slug: 'alphabet-1',
  courseSlug: 'russe-a1',
  targetLang: 'ru',
  position: 1,
  title: { fr: "L'alphabet cyrillique (1/3)", ar: 'الأبجدية السيريلية (1/3)', en: 'Cyrillic alphabet (1/3)', ru: 'Кириллица (1/3)' },
  summary: {
    fr: 'Les lettres qui se lisent comme en français, et les faux amis.',
    ar: 'الحروف التي تُقرأ كما في الفرنسية، والأصدقاء المزيّفون.',
    en: 'The letters that read as in French, and the false friends.',
    ru: 'Буквы, читаемые как во французском, и ложные друзья.',
  },
  objectives: {
    fr: ['Reconnaître les 10 lettres identiques au latin', 'Repérer les 4 faux amis les plus piégeux'],
    ar: ['التعرّف على 10 حروف مطابقة للّاتينية', 'رصد أخطر 4 أصدقاء مزيّفين'],
    en: ['Recognise the 10 letters identical to Latin', 'Spot the 4 trickiest false friends'],
    ru: ['Узнать 10 букв, совпадающих с латиницей', 'Заметить 4 самых коварных ложных друга'],
  },
  isFree: true,
  durationMin: 12,
  blocks: [
    {
      id: 'demo-b1',
      position: 0,
      kind: 'slide',
      title: { fr: 'Trois familles de lettres', ar: 'ثلاث عائلات من الحروف', en: 'Three families of letters', ru: 'Три группы букв' },
      lines: {
        fr: [
          'Identiques au latin : А, К, М, О, Т',
          'Faux amis : В se lit « v », Р se lit « r », Н se lit « n »',
          'Nouvelles : Ж, Ш, Щ, Ы',
        ],
        ar: ['مطابقة للّاتينية: А, К, М, О, Т', 'أصدقاء مزيّفون: В تُقرأ «v»، Р تُقرأ «r»', 'حروف جديدة: Ж, Ш, Щ, Ы'],
        en: ['Identical to Latin: А, К, М, О, Т', 'False friends: В reads “v”, Р reads “r”', 'New ones: Ж, Ш, Щ, Ы'],
        ru: ['Совпадают с латиницей: А, К, М, О, Т', 'Ложные друзья: В, Р, Н', 'Новые: Ж, Ш, Щ, Ы'],
      },
      mediaUrl: null,
      audioUrl: null,
      transcript: {
        fr: "Commençons par ranger l'alphabet en trois familles. La première ne vous demandera aucun effort.",
        ar: 'لنبدأ بترتيب الأبجدية في ثلاث عائلات. الأولى لن تكلّفك أي جهد.',
        en: 'Let us start by sorting the alphabet into three families. The first will cost you no effort.',
        ru: 'Начнём с деления алфавита на три группы. Первая не потребует усилий.',
      },
    },
  ],
  exercises: [
    {
      id: 'demo-e1',
      position: 0,
      kind: 'mcq',
      prompt: {
        fr: 'Comment se lit la lettre « Р » ?',
        ar: 'كيف يُقرأ حرف «Р»؟',
        en: 'How is the letter “Р” read?',
        ru: 'Как читается буква «Р»?',
      },
      options: {
        fr: ['p', 'r', 'b'],
        ar: ['p', 'r', 'b'],
        en: ['p', 'r', 'b'],
        ru: ['p', 'r', 'b'],
      },
      audioUrl: null,
    },
  ],
  lastBlockPos: 0,
  completedAt: null,
  prevSlug: null,
  nextSlug: 'salutations',
};
