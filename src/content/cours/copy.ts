import type { Lang } from '../../i18n';
import type { CourseSlug } from './registry';

export interface CourseSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CourseFaqEntry {
  question: string;
  answer: string;
}

export interface CourseLandingCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  intro: string;
  ctaPrimary: string;
  ctaNote: string;
  sections: CourseSection[];
  faq: CourseFaqEntry[];
  keywords: string[];
}

export interface CourseIndexCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cardCta: string;
  sections: CourseSection[];
  keywords: string[];
}

/**
 * Pages publiques des parcours de langue.
 *
 * Aucun prix n'est affiché : la tarification n'est pas arrêtée, et une
 * valeur inventée sur une page commerciale engage. Les pages annoncent
 * donc ce qui est vrai — les premières leçons sont gratuites — et
 * renvoient vers le contact pour la suite.
 */
export const COURSE_INDEX_COPY: Record<Lang, CourseIndexCopy> = {
  fr: {
    metaTitle: 'Cours de langues en ligne — russe et français | RusStudy',
    metaDescription:
      "Apprenez le russe depuis la Tunisie, ou le français depuis la Russie. Leçons courtes avec diapositives narrées, exercices corrigés et possibilité de parler en visio avec un professeur. Premières leçons gratuites.",
    h1: 'Cours de langues en ligne',
    intro:
      "Deux parcours, construits pour deux publics que nous connaissons bien : les étudiants tunisiens qui préparent un départ vers la Russie, et les russophones qui apprennent le français. Leçons courtes, voix off, exercices corrigés, et un professeur joignable en visio quand le texte ne suffit plus.",
    cardCta: 'Découvrir le parcours',
    sections: [
      {
        heading: 'Comment se passe une leçon',
        bullets: [
          'Une diapositive à la fois, lue à voix haute : on écoute autant qu’on lit.',
          'La transcription reste affichée, pour revenir sur un mot sans réécouter.',
          'Des exercices corrigés à la fin, avec l’explication de la bonne réponse.',
          'La progression est enregistrée : on reprend là où on s’était arrêté.',
        ],
      },
      {
        heading: 'Les premières leçons sont gratuites',
        paragraphs: [
          "Chaque parcours s'ouvre sur des leçons libres, accessibles dès la création d'un compte. Elles ne sont pas une démonstration tronquée : ce sont les premières vraies leçons du programme.",
          "La suite demande un accès, que nous ouvrons après un échange. Nous préférons savoir où vous en êtes avant de vous vendre quoi que ce soit.",
        ],
      },
    ],
    keywords: [
      'cours de russe en ligne',
      'cours de français en ligne',
      'apprendre le russe tunisie',
      'apprendre le français russie',
      'cours de langue avec professeur',
      'e-learning langues russstudy',
    ],
  },

  en: {
    metaTitle: 'Online language courses — Russian and French | RusStudy',
    metaDescription:
      'Learn Russian from Tunisia, or French from Russia. Short lessons with narrated slides, corrected exercises and the option to talk to a teacher on video. First lessons free.',
    h1: 'Online language courses',
    intro:
      'Two tracks, built for two audiences we know well: Tunisian students preparing to leave for Russia, and Russian speakers learning French. Short lessons, voice-over, corrected exercises, and a teacher reachable on video when text is no longer enough.',
    cardCta: 'See the track',
    sections: [
      {
        heading: 'How a lesson works',
        bullets: [
          'One slide at a time, read aloud: you listen as much as you read.',
          'The transcript stays on screen, so a word can be checked without replaying.',
          'Corrected exercises at the end, with an explanation of the right answer.',
          'Progress is saved: you pick up where you left off.',
        ],
      },
      {
        heading: 'The first lessons are free',
        paragraphs: [
          'Each track opens with free lessons, available as soon as you create an account. They are not a trimmed demo: they are the real first lessons of the programme.',
          'The rest requires access, which we open after a conversation. We would rather know where you stand before selling you anything.',
        ],
      },
    ],
    keywords: [
      'online russian course',
      'online french course',
      'learn russian tunisia',
      'learn french russia',
      'language course with teacher',
      'russtudy e-learning',
    ],
  },

  ar: {
    metaTitle: 'دروس لغات عبر الإنترنت — الروسية والفرنسية | RusStudy',
    metaDescription:
      'تعلّم الروسية من تونس، أو الفرنسية من روسيا. دروس قصيرة بشرائح مسموعة وتمارين مصحَّحة وإمكانية التحدّث مع أستاذ عبر الفيديو. الدروس الأولى مجانية.',
    h1: 'دروس اللغات عبر الإنترنت',
    intro:
      'مساران اثنان، مبنيّان لجمهورين نعرفهما جيّدًا: الطلبة التونسيون الذين يحضّرون السفر إلى روسيا، والناطقون بالروسية الذين يتعلّمون الفرنسية. دروس قصيرة، وتعليق صوتي، وتمارين مصحَّحة، وأستاذ يمكن الوصول إليه عبر الفيديو حين لا يكفي النصّ.',
    cardCta: 'اكتشف المسار',
    sections: [
      {
        heading: 'كيف يجري الدرس',
        bullets: [
          'شريحة واحدة في كلّ مرّة، مقروءة بصوت عالٍ: تسمع بقدر ما تقرأ.',
          'النصّ المكتوب يبقى معروضًا، فتعود إلى كلمة دون إعادة الاستماع.',
          'تمارين مصحَّحة في النهاية، مع شرح الجواب الصحيح.',
          'التقدّم يُحفظ: تستأنف من حيث توقّفت.',
        ],
      },
      {
        heading: 'الدروس الأولى مجانية',
        paragraphs: [
          'كلّ مسار يبدأ بدروس حرّة، متاحة بمجرّد إنشاء حساب. وهي ليست عرضًا مبتورًا: هي الدروس الأولى الحقيقية من البرنامج.',
          'أمّا البقية فتحتاج إلى نفاذ نفتحه بعد حديث معك. نفضّل أن نعرف أين أنت قبل أن نبيعك أي شيء.',
        ],
      },
    ],
    keywords: [
      'دروس روسية عبر الإنترنت',
      'دروس فرنسية عبر الإنترنت',
      'تعلّم الروسية في تونس',
      'تعلّم الفرنسية',
      'دروس لغة مع أستاذ',
      'تعليم عن بعد اللغات',
    ],
  },

  ru: {
    metaTitle: 'Онлайн-курсы языков — русский и французский | RusStudy',
    metaDescription:
      'Учите русский из Туниса или французский из России. Короткие уроки с озвученными слайдами, проверяемые упражнения и возможность поговорить с преподавателем по видео. Первые уроки бесплатны.',
    h1: 'Онлайн-курсы языков',
    intro:
      'Два направления для двух аудиторий, которые мы хорошо знаем: тунисские студенты, готовящиеся к отъезду в Россию, и русскоговорящие, изучающие французский. Короткие уроки, озвучка, проверяемые упражнения и преподаватель по видео, когда текста уже недостаточно.',
    cardCta: 'Посмотреть курс',
    sections: [
      {
        heading: 'Как устроен урок',
        bullets: [
          'По одному слайду за раз, с чтением вслух: слушаете столько же, сколько читаете.',
          'Текст озвучки остаётся на экране — слово можно проверить, не переслушивая.',
          'Упражнения с проверкой в конце и объяснением правильного ответа.',
          'Прогресс сохраняется: вы продолжаете с того места, где остановились.',
        ],
      },
      {
        heading: 'Первые уроки бесплатны',
        paragraphs: [
          'Каждое направление начинается с открытых уроков, доступных сразу после регистрации. Это не урезанная демонстрация, а настоящие первые уроки программы.',
          'Дальше нужен доступ, который мы открываем после разговора. Нам важнее понять, на каком вы уровне, чем что-то вам продать.',
        ],
      },
    ],
    keywords: [
      'онлайн курс русского языка',
      'онлайн курс французского языка',
      'выучить русский в Тунисе',
      'французский язык онлайн',
      'языковой курс с преподавателем',
      'дистанционное обучение языкам',
    ],
  },
};

export const COURSE_COPY: Record<CourseSlug, Record<Lang, CourseLandingCopy>> = {
  russe: {
    fr: {
      metaTitle: 'Apprendre le russe en ligne depuis la Tunisie — cours A1 | RusStudy',
      metaDescription:
        "Cours de russe en ligne pour débutants tunisiens : alphabet cyrillique, salutations, vie quotidienne et vocabulaire universitaire. Diapositives narrées, exercices corrigés, professeur en visio. Premières leçons gratuites.",
      h1: 'Apprendre le russe en ligne, depuis la Tunisie',
      kicker: 'Niveau A1 — débutant complet',
      intro:
        "Arriver en Russie sans un mot de russe, c'est perdre six mois à comprendre les guichets avant de pouvoir suivre un cours. Ce parcours sert à ne pas perdre ces six mois. Il part de zéro — y compris de l'alphabet — et vise ce dont un étudiant a réellement besoin la première année.",
      ctaPrimary: 'Commencer les leçons gratuites',
      ctaNote: 'Création de compte en une minute. Aucun paiement demandé pour les premières leçons.',
      sections: [
        {
          heading: 'Ce que vous saurez faire à la fin',
          bullets: [
            "Lire et écrire l'alphabet cyrillique sans hésiter sur une lettre.",
            'Vous présenter, saluer, remercier et demander de répéter.',
            "Comprendre les mots d'un guichet administratif : formulaire, passeport, inscription.",
            'Faire vos courses, demander un prix, lire une étiquette.',
            "Suivre le vocabulaire universitaire de base : amphithéâtre, emploi du temps, examen.",
          ],
        },
        {
          heading: 'Pourquoi partir du cyrillique',
          paragraphs: [
            "C'est l'étape que tout le monde veut sauter, et celle qui coûte le plus cher quand on la saute. Tant que les lettres ne sont pas automatiques, chaque panneau, chaque formulaire et chaque diapositive de cours demande un effort de déchiffrage qui épuise.",
            "Les premières leçons y sont donc entièrement consacrées. Elles sont courtes et répétitives à dessein : c'est ce qui marche pour un alphabet.",
          ],
        },
        {
          heading: 'Un professeur en visio quand le texte ne suffit plus',
          paragraphs: [
            "La prononciation russe ne s'apprend pas en lisant. À partir des premières leçons, vous pouvez réserver un créneau avec un professeur et parler en visio, caméra ouverte ou non, depuis le navigateur — sans rien installer.",
            "C'est là que se corrigent les choses qu'un exercice automatique ne verra jamais : un accent tonique placé au mauvais endroit, un son qui n'existe pas en arabe ni en français.",
          ],
        },
        {
          heading: 'Pensé pour ceux qui préparent un départ',
          paragraphs: [
            "Ce parcours n'est pas un cours de langue générique. Le vocabulaire, les exemples et les mises en situation sont ceux d'un étudiant étranger en Russie : l'arrivée à l'aéroport, l'enregistrement migratoire, la résidence universitaire, le premier cours.",
            "Si vous préparez un dossier avec nous, les deux avancent en parallèle. Si vous n'en préparez pas, le parcours se suit quand même.",
          ],
        },
      ],
      faq: [
        {
          question: 'Faut-il connaître un peu de russe pour commencer ?',
          answer:
            "Non. Le parcours commence à l'alphabet, lettre par lettre. Si vous savez déjà lire le cyrillique, vous pouvez passer directement aux leçons suivantes.",
        },
        {
          question: 'Les leçons sont-elles en français ou en arabe ?',
          answer:
            "Les explications sont disponibles en français et en arabe ; le russe enseigné est le même. Vous choisissez la langue dans laquelle vous préférez recevoir les explications.",
        },
        {
          question: 'Combien de temps dure une leçon ?',
          answer:
            "Dix à quinze minutes. C'est délibéré : une leçon courte faite tous les jours vaut mieux qu'une heure faite une fois par semaine, surtout pour un alphabet.",
        },
        {
          question: 'Ce cours remplace-t-il l’année préparatoire en Russie ?',
          answer:
            "Non, et il ne prétend pas le faire. L'année préparatoire est un cursus universitaire d'un an à temps plein. Ce parcours sert à arriver en la commençant avec de l'avance, pas à s'en dispenser.",
        },
        {
          question: 'Que se passe-t-il après les leçons gratuites ?',
          answer:
            "Vous nous écrivez et nous ouvrons l'accès à la suite. Nous préférons en parler avant, pour vérifier que le parcours correspond à ce que vous cherchez.",
        },
      ],
      keywords: [
        'apprendre le russe en ligne',
        'cours de russe tunisie',
        'alphabet cyrillique débutant',
        'russe pour étudiants en russie',
        'cours de russe a1',
        'apprendre le russe avant de partir',
      ],
    },

    en: {
      metaTitle: 'Learn Russian online from Tunisia — A1 course | RusStudy',
      metaDescription:
        'Online Russian course for complete beginners: Cyrillic alphabet, greetings, daily life and university vocabulary. Narrated slides, corrected exercises, teacher on video. First lessons free.',
      h1: 'Learn Russian online, from Tunisia',
      kicker: 'Level A1 — complete beginner',
      intro:
        'Arriving in Russia without a word of Russian means losing six months to deciphering counters before you can follow a lecture. This track exists so those six months are not lost. It starts from zero — alphabet included — and aims at what a student actually needs in the first year.',
      ctaPrimary: 'Start the free lessons',
      ctaNote: 'Account creation takes a minute. No payment is asked for the first lessons.',
      sections: [
        {
          heading: 'What you will be able to do',
          bullets: [
            'Read and write the Cyrillic alphabet without hesitating over a letter.',
            'Introduce yourself, greet, thank and ask someone to repeat.',
            'Understand the words of an administrative counter: form, passport, registration.',
            'Do your shopping, ask a price, read a label.',
            'Follow basic university vocabulary: lecture hall, timetable, exam.',
          ],
        },
        {
          heading: 'Why we start with Cyrillic',
          paragraphs: [
            'It is the step everyone wants to skip, and the one that costs most when skipped. Until the letters are automatic, every sign, every form and every lecture slide demands an act of decoding that wears you down.',
            'The first lessons are therefore devoted entirely to it. They are short and repetitive on purpose: that is what works for an alphabet.',
          ],
        },
        {
          heading: 'A teacher on video when text is not enough',
          paragraphs: [
            'Russian pronunciation is not learned by reading. From the first lessons you can book a slot with a teacher and talk on video, camera on or off, straight from the browser — with nothing to install.',
            'That is where the things an automatic exercise will never catch get corrected: a stress on the wrong syllable, a sound that exists in neither Arabic nor French.',
          ],
        },
        {
          heading: 'Built for people preparing to leave',
          paragraphs: [
            'This is not a generic language course. The vocabulary, the examples and the situations are those of an international student in Russia: arrival at the airport, migration registration, the student residence, the first class.',
            'If you are preparing a file with us, the two move in parallel. If you are not, the track still stands on its own.',
          ],
        },
      ],
      faq: [
        {
          question: 'Do I need some Russian to start?',
          answer:
            'No. The track starts at the alphabet, letter by letter. If you already read Cyrillic, you can go straight to the following lessons.',
        },
        {
          question: 'Are the lessons in French or Arabic?',
          answer:
            'Explanations are available in French and Arabic; the Russian taught is the same. You choose the language you prefer for the explanations.',
        },
        {
          question: 'How long is a lesson?',
          answer:
            'Ten to fifteen minutes. That is deliberate: a short lesson done every day beats an hour done once a week, especially for an alphabet.',
        },
        {
          question: 'Does this replace the preparatory year in Russia?',
          answer:
            'No, and it does not claim to. The preparatory year is a full-time university programme lasting a year. This track is about arriving with a head start, not about skipping it.',
        },
        {
          question: 'What happens after the free lessons?',
          answer:
            'You write to us and we open access to the rest. We would rather talk first, to check the track matches what you are looking for.',
        },
      ],
      keywords: [
        'learn russian online',
        'russian course tunisia',
        'cyrillic alphabet beginner',
        'russian for students in russia',
        'russian a1 course',
        'learn russian before leaving',
      ],
    },

    ar: {
      metaTitle: 'تعلّم الروسية عبر الإنترنت من تونس — مستوى A1 | RusStudy',
      metaDescription:
        'دورة روسية عبر الإنترنت للمبتدئين التونسيين: الأبجدية السيريلية، والتحيات، والحياة اليومية، ومفردات الجامعة. شرائح مسموعة وتمارين مصحَّحة وأستاذ عبر الفيديو. الدروس الأولى مجانية.',
      h1: 'تعلّم الروسية عبر الإنترنت، من تونس',
      kicker: 'المستوى A1 — مبتدئ تمامًا',
      intro:
        'الوصول إلى روسيا دون كلمة روسية يعني ضياع ستة أشهر في فكّ رموز الشبابيك قبل أن تتمكّن من متابعة درس. هذا المسار موجود حتى لا تضيع تلك الأشهر. يبدأ من الصفر — بما في ذلك الأبجدية — ويستهدف ما يحتاجه الطالب فعلًا في سنته الأولى.',
      ctaPrimary: 'ابدأ الدروس المجانية',
      ctaNote: 'إنشاء الحساب يأخذ دقيقة. ولا يُطلب أي دفع مقابل الدروس الأولى.',
      sections: [
        {
          heading: 'ما ستقدر عليه في النهاية',
          bullets: [
            'قراءة وكتابة الأبجدية السيريلية دون تردّد أمام أي حرف.',
            'التعريف بنفسك، والتحية، والشكر، وطلب الإعادة.',
            'فهم كلمات الشبّاك الإداري: استمارة، جواز سفر، تسجيل.',
            'التسوّق، والسؤال عن السعر، وقراءة بطاقة منتج.',
            'متابعة المفردات الجامعية الأساسية: مدرّج، جدول أوقات، امتحان.',
          ],
        },
        {
          heading: 'لماذا نبدأ بالسيريلية',
          paragraphs: [
            'هذه هي المرحلة التي يريد الجميع تخطّيها، وهي الأغلى ثمنًا عند تخطّيها. فما دامت الحروف غير تلقائية، فإن كل لافتة وكل استمارة وكل شريحة درس تطلب جهد فكّ رموز يُنهك.',
            'لذلك تُخصَّص لها الدروس الأولى كاملةً. وهي قصيرة ومتكرّرة عن قصد: فهذا ما ينجح مع أبجدية.',
          ],
        },
        {
          heading: 'أستاذ عبر الفيديو حين لا يكفي النصّ',
          paragraphs: [
            'النطق الروسي لا يُتعلَّم بالقراءة. ومن الدروس الأولى يمكنك حجز موعد مع أستاذ والتحدّث عبر الفيديو، بالكاميرا أو بدونها، من المتصفّح مباشرةً ودون تثبيت أي شيء.',
            'وهناك تُصحَّح الأشياء التي لن يلتقطها تمرين آلي أبدًا: نبر في غير موضعه، أو صوت لا وجود له لا في العربية ولا في الفرنسية.',
          ],
        },
        {
          heading: 'مصمَّم لمن يحضّرون السفر',
          paragraphs: [
            'هذا ليس درس لغة عامًّا. فالمفردات والأمثلة والمواقف هي مواقف طالب أجنبي في روسيا: الوصول إلى المطار، والتسجيل الهجري، والإقامة الجامعية، وأول درس.',
            'وإن كنت تحضّر ملفًّا معنا، فالاثنان يتقدّمان معًا. وإن لم تكن، فالمسار يُتابَع على كل حال.',
          ],
        },
      ],
      faq: [
        {
          question: 'هل يجب أن أعرف شيئًا من الروسية للبدء؟',
          answer:
            'لا. المسار يبدأ من الأبجدية، حرفًا حرفًا. وإن كنت تقرأ السيريلية من قبل، فيمكنك الانتقال مباشرةً إلى الدروس التالية.',
        },
        {
          question: 'هل الدروس بالفرنسية أم بالعربية؟',
          answer:
            'الشروح متاحة بالفرنسية وبالعربية؛ أما الروسية المدرَّسة فهي نفسها. وأنت تختار اللغة التي تفضّل تلقّي الشروح بها.',
        },
        {
          question: 'كم يدوم الدرس؟',
          answer:
            'من عشر إلى خمس عشرة دقيقة. وهذا مقصود: درس قصير كل يوم خير من ساعة مرّة في الأسبوع، خاصة مع أبجدية.',
        },
        {
          question: 'هل يعوّض هذا الكورس السنة التحضيرية في روسيا؟',
          answer:
            'لا، ولا يدّعي ذلك. السنة التحضيرية مسار جامعي كامل لمدة سنة بدوام كامل. وهذا المسار يخدم الوصول بتقدّم مسبق، لا الإعفاء منها.',
        },
        {
          question: 'ماذا يحدث بعد الدروس المجانية؟',
          answer:
            'تكتب إلينا ونفتح لك النفاذ إلى البقية. نفضّل الحديث قبل ذلك، للتأكّد من أن المسار يوافق ما تبحث عنه.',
        },
      ],
      keywords: [
        'تعلّم الروسية عبر الإنترنت',
        'دروس روسية تونس',
        'الأبجدية السيريلية للمبتدئين',
        'الروسية للطلبة في روسيا',
        'كورس روسية a1',
        'تعلّم الروسية قبل السفر',
      ],
    },

    ru: {
      metaTitle: 'Русский язык онлайн для начинающих из Туниса — уровень A1 | RusStudy',
      metaDescription:
        'Онлайн-курс русского для начинающих: кириллица, приветствия, повседневная жизнь и университетская лексика. Озвученные слайды, упражнения с проверкой, преподаватель по видео. Первые уроки бесплатны.',
      h1: 'Русский язык онлайн, из Туниса',
      kicker: 'Уровень A1 — с полного нуля',
      intro:
        'Приехать в Россию без единого слова по-русски — значит потерять полгода на разбор надписей у окошек, прежде чем сможешь слушать лекцию. Этот курс нужен, чтобы эти полгода не потерять. Он начинается с нуля, включая алфавит, и нацелен на то, что действительно нужно студенту в первый год.',
      ctaPrimary: 'Начать бесплатные уроки',
      ctaNote: 'Регистрация занимает минуту. За первые уроки оплата не требуется.',
      sections: [
        {
          heading: 'Что вы будете уметь',
          bullets: [
            'Читать и писать кириллицу, не запинаясь ни на одной букве.',
            'Представиться, поздороваться, поблагодарить и попросить повторить.',
            'Понимать слова у административного окна: заявление, паспорт, регистрация.',
            'Делать покупки, спрашивать цену, читать этикетку.',
            'Следить за базовой университетской лексикой: аудитория, расписание, экзамен.',
          ],
        },
        {
          heading: 'Почему начинаем с кириллицы',
          paragraphs: [
            'Этот шаг все хотят пропустить, и именно он дороже всего обходится при пропуске. Пока буквы не стали автоматическими, каждая вывеска, каждый бланк и каждый слайд лекции требуют усилия расшифровки, которое выматывает.',
            'Поэтому первые уроки посвящены ему целиком. Они короткие и намеренно повторяющиеся: для алфавита работает именно это.',
          ],
        },
        {
          heading: 'Преподаватель по видео, когда текста мало',
          paragraphs: [
            'Произношение не ставится чтением. С первых уроков можно забронировать время с преподавателем и поговорить по видео, с камерой или без, прямо из браузера — ничего устанавливать не нужно.',
            'Там исправляется то, чего автоматическое упражнение не заметит никогда: ударение не на том слоге, звук, которого нет ни в арабском, ни во французском.',
          ],
        },
        {
          heading: 'Для тех, кто готовит отъезд',
          paragraphs: [
            'Это не общий языковой курс. Лексика, примеры и ситуации — те, что встречает иностранный студент в России: прилёт, миграционный учёт, общежитие, первое занятие.',
            'Если вы готовите с нами документы, оба процесса идут параллельно. Если нет, курс работает и сам по себе.',
          ],
        },
      ],
      faq: [
        {
          question: 'Нужен ли начальный русский, чтобы начать?',
          answer:
            'Нет. Курс начинается с алфавита, буква за буквой. Если вы уже читаете кириллицу, можно сразу перейти к следующим урокам.',
        },
        {
          question: 'На каком языке объяснения?',
          answer:
            'Объяснения доступны на французском и арабском; преподаваемый русский один и тот же. Язык объяснений выбираете вы.',
        },
        {
          question: 'Сколько длится урок?',
          answer:
            'Десять-пятнадцать минут. Это сознательно: короткий урок каждый день лучше часа раз в неделю, особенно для алфавита.',
        },
        {
          question: 'Заменяет ли курс подготовительный год в России?',
          answer:
            'Нет, и не претендует. Подготовительный год — это полноценная годичная университетская программа. Курс нужен, чтобы приехать с заделом, а не чтобы её избежать.',
        },
        {
          question: 'Что будет после бесплатных уроков?',
          answer:
            'Вы пишете нам, и мы открываем доступ к остальному. Нам важнее сначала поговорить и убедиться, что курс отвечает вашей задаче.',
        },
      ],
      keywords: [
        'русский язык онлайн',
        'курс русского для начинающих',
        'кириллица с нуля',
        'русский для иностранных студентов',
        'курс русского a1',
        'выучить русский перед отъездом',
      ],
    },
  },

  francais: {
    fr: {
      metaTitle: 'Apprendre le français en ligne depuis la Russie — cours A1 | RusStudy',
      metaDescription:
        "Cours de français en ligne pour russophones débutants : prononciation, phrases du quotidien, vie étudiante et vocabulaire administratif. Diapositives narrées, exercices corrigés, professeur en visio. Premières leçons gratuites.",
      h1: 'Apprendre le français en ligne, depuis la Russie',
      kicker: 'Niveau A1 — débutant complet',
      intro:
        "Le français se lit rarement comme il s'écrit, et c'est ce qui décourage la plupart des débutants russophones. Ce parcours prend le problème de face : on travaille d'abord l'oreille et la prononciation, le reste vient ensuite.",
      ctaPrimary: 'Commencer les leçons gratuites',
      ctaNote: 'Création de compte en une minute. Aucun paiement demandé pour les premières leçons.',
      sections: [
        {
          heading: 'Ce que vous saurez faire à la fin',
          bullets: [
            'Prononcer les sons qui n’existent pas en russe, et les reconnaître à l’oreille.',
            'Lire un mot inconnu à voix haute sans vous tromper de son.',
            'Vous présenter, parler de vos études et de votre travail.',
            'Comprendre un formulaire administratif et poser une question à un guichet.',
            'Suivre une conversation simple sur la vie quotidienne.',
          ],
        },
        {
          heading: 'Pourquoi la prononciation d’abord',
          paragraphs: [
            "Un russophone qui apprend le français bute rarement sur la grammaire au début : il bute sur le fait qu'on écrive six lettres pour un seul son. Les nasales, le « u », le « r » n'existent pas en russe, et aucun exercice écrit ne les enseignera.",
            "Les premières leçons sont donc très sonores : on écoute, on répète, on compare. La grammaire arrive une fois que l'oreille suit.",
          ],
        },
        {
          heading: 'Un professeur en visio pour corriger ce qui s’entend',
          paragraphs: [
            "À partir des premières leçons, vous pouvez réserver un créneau et parler en visio depuis le navigateur, sans rien installer, caméra ouverte ou non.",
            "C'est le seul moyen de corriger un accent tonique ou une nasale : un exercice automatique peut vérifier que vous avez choisi le bon mot, pas que vous l'avez dit correctement.",
          ],
        },
        {
          heading: 'Pour quoi faire ensuite',
          paragraphs: [
            "Ce parcours vise un usage concret : travailler avec des francophones, préparer un séjour, ou simplement comprendre ce qu'on écoute et ce qu'on lit.",
            "Il ne prépare pas à un examen officiel et ne s'y substitue pas. Si vous visez une certification, dites-le-nous : nous vous dirons franchement si ce parcours vous y mène ou non.",
          ],
        },
      ],
      faq: [
        {
          question: 'Les explications sont-elles en russe ?',
          answer:
            'Oui. Le parcours de français est expliqué en russe : on apprend plus vite quand les consignes sont dans sa propre langue.',
        },
        {
          question: 'Faut-il savoir lire l’alphabet latin ?',
          answer:
            "Une connaissance même approximative suffit. Les premières leçons reprennent la correspondance entre les lettres et les sons, qui est le vrai sujet en français.",
        },
        {
          question: 'Combien de temps dure une leçon ?',
          answer:
            'Dix à quinze minutes, à faire de préférence tous les jours. Pour la prononciation, la régularité compte davantage que la durée.',
        },
        {
          question: 'Ce cours prépare-t-il au DELF ou au TCF ?',
          answer:
            "Non. C'est un parcours de langue générale de niveau débutant, pas une préparation à un examen. Nous ne prétendrons pas le contraire pour vendre un accès.",
        },
        {
          question: 'Que se passe-t-il après les leçons gratuites ?',
          answer:
            "Vous nous écrivez et nous ouvrons l'accès à la suite, après un échange sur votre niveau et votre objectif.",
        },
      ],
      keywords: [
        'apprendre le français en ligne',
        'cours de français pour russophones',
        'prononciation française débutant',
        'français a1 russe',
        'cours de français avec professeur',
        'français langue étrangère en ligne',
      ],
    },

    en: {
      metaTitle: 'Learn French online from Russia — A1 course | RusStudy',
      metaDescription:
        'Online French course for Russian-speaking beginners: pronunciation, everyday phrases, student life and administrative vocabulary. Narrated slides, corrected exercises, teacher on video. First lessons free.',
      h1: 'Learn French online, from Russia',
      kicker: 'Level A1 — complete beginner',
      intro:
        'French is rarely read the way it is written, and that is what discourages most Russian-speaking beginners. This track takes the problem head-on: the ear and the pronunciation come first, the rest follows.',
      ctaPrimary: 'Start the free lessons',
      ctaNote: 'Account creation takes a minute. No payment is asked for the first lessons.',
      sections: [
        {
          heading: 'What you will be able to do',
          bullets: [
            'Pronounce the sounds that do not exist in Russian, and recognise them by ear.',
            'Read an unknown word aloud without picking the wrong sound.',
            'Introduce yourself, talk about your studies and your work.',
            'Understand an administrative form and ask a question at a counter.',
            'Follow a simple conversation about daily life.',
          ],
        },
        {
          heading: 'Why pronunciation comes first',
          paragraphs: [
            'A Russian speaker learning French rarely stumbles on grammar at the start: they stumble on six letters written for a single sound. Nasal vowels, the French “u” and the French “r” do not exist in Russian, and no written exercise will teach them.',
            'The first lessons are therefore heavily audio: listen, repeat, compare. Grammar arrives once the ear keeps up.',
          ],
        },
        {
          heading: 'A teacher on video to correct what can only be heard',
          paragraphs: [
            'From the first lessons you can book a slot and talk on video straight from the browser, with nothing to install, camera on or off.',
            'It is the only way to correct a stress or a nasal vowel: an automatic exercise can check that you picked the right word, not that you said it correctly.',
          ],
        },
        {
          heading: 'What it is for',
          paragraphs: [
            'This track aims at concrete use: working with French speakers, preparing a stay, or simply understanding what you hear and read.',
            'It does not prepare for an official exam and does not replace one. If you are aiming at a certification, tell us: we will say plainly whether this track takes you there.',
          ],
        },
      ],
      faq: [
        {
          question: 'Are the explanations in Russian?',
          answer:
            'Yes. The French track is explained in Russian: you learn faster when the instructions are in your own language.',
        },
        {
          question: 'Do I need to read the Latin alphabet?',
          answer:
            'Even rough familiarity is enough. The first lessons go over the correspondence between letters and sounds, which is the real subject in French.',
        },
        {
          question: 'How long is a lesson?',
          answer:
            'Ten to fifteen minutes, ideally every day. For pronunciation, regularity matters more than length.',
        },
        {
          question: 'Does this prepare for the DELF or the TCF?',
          answer:
            'No. It is a general beginner language track, not exam preparation. We will not claim otherwise to sell an access.',
        },
        {
          question: 'What happens after the free lessons?',
          answer:
            'You write to us and we open access to the rest, after a conversation about your level and your goal.',
        },
      ],
      keywords: [
        'learn french online',
        'french course for russian speakers',
        'french pronunciation beginner',
        'french a1 russian',
        'french course with teacher',
        'french as a foreign language online',
      ],
    },

    ar: {
      metaTitle: 'تعلّم الفرنسية عبر الإنترنت من روسيا — مستوى A1 | RusStudy',
      metaDescription:
        'دورة فرنسية عبر الإنترنت للناطقين بالروسية المبتدئين: النطق، وعبارات اليومي، والحياة الطلابية، والمفردات الإدارية. شرائح مسموعة وتمارين مصحَّحة وأستاذ عبر الفيديو. الدروس الأولى مجانية.',
      h1: 'تعلّم الفرنسية عبر الإنترنت، من روسيا',
      kicker: 'المستوى A1 — مبتدئ تمامًا',
      intro:
        'الفرنسية نادرًا ما تُقرأ كما تُكتب، وهذا ما يُثبّط معظم المبتدئين الناطقين بالروسية. هذا المسار يواجه المشكلة مباشرةً: نشتغل أولًا على الأذن والنطق، والباقي يأتي بعد ذلك.',
      ctaPrimary: 'ابدأ الدروس المجانية',
      ctaNote: 'إنشاء الحساب يأخذ دقيقة. ولا يُطلب أي دفع مقابل الدروس الأولى.',
      sections: [
        {
          heading: 'ما ستقدر عليه في النهاية',
          bullets: [
            'نطق الأصوات التي لا وجود لها في الروسية، وتمييزها سمعيًّا.',
            'قراءة كلمة مجهولة بصوت عالٍ دون الخطأ في الصوت.',
            'التعريف بنفسك، والحديث عن دراستك وعملك.',
            'فهم استمارة إدارية وطرح سؤال أمام شبّاك.',
            'متابعة محادثة بسيطة حول الحياة اليومية.',
          ],
        },
        {
          heading: 'لماذا النطق أولًا',
          paragraphs: [
            'الناطق بالروسية الذي يتعلّم الفرنسية نادرًا ما يتعثّر في القواعد في البداية: يتعثّر في كتابة ستة أحرف لصوت واحد. فالأصوات الأنفية و«u» و«r» لا وجود لها في الروسية، ولا تمرين مكتوب يعلّمها.',
            'لذلك تكون الدروس الأولى سمعية إلى حدّ بعيد: نستمع، ونعيد، ونقارن. وتأتي القواعد حين تلحق الأذن.',
          ],
        },
        {
          heading: 'أستاذ عبر الفيديو لتصحيح ما يُسمع فقط',
          paragraphs: [
            'من الدروس الأولى يمكنك حجز موعد والتحدّث عبر الفيديو من المتصفّح مباشرةً، دون تثبيت أي شيء، بالكاميرا أو بدونها.',
            'وهذه الوسيلة الوحيدة لتصحيح نبر أو صوت أنفي: التمرين الآلي يتحقّق من أنك اخترت الكلمة الصحيحة، لا من أنك نطقتها صحيحةً.',
          ],
        },
        {
          heading: 'لأي غرض بعد ذلك',
          paragraphs: [
            'هذا المسار يستهدف استعمالًا ملموسًا: العمل مع ناطقين بالفرنسية، أو تحضير إقامة، أو ببساطة فهم ما تسمعه وما تقرأه.',
            'وهو لا يحضّر لامتحان رسمي ولا يعوّضه. فإن كنت تستهدف شهادة، قل لنا: سنقول لك بصراحة إن كان هذا المسار يوصلك إليها أم لا.',
          ],
        },
      ],
      faq: [
        {
          question: 'هل الشروح بالروسية؟',
          answer:
            'نعم. مسار الفرنسية مشروح بالروسية: يتعلّم المرء أسرع حين تكون التعليمات بلغته.',
        },
        {
          question: 'هل يجب معرفة الأبجدية اللاتينية؟',
          answer:
            'معرفة ولو تقريبية تكفي. فالدروس الأولى تراجع العلاقة بين الحروف والأصوات، وهي الموضوع الحقيقي في الفرنسية.',
        },
        {
          question: 'كم يدوم الدرس؟',
          answer:
            'من عشر إلى خمس عشرة دقيقة، ويُفضَّل كل يوم. ففي النطق، الانتظام أهمّ من المدّة.',
        },
        {
          question: 'هل يحضّر هذا الكورس لامتحان DELF أو TCF؟',
          answer:
            'لا. هو مسار لغة عامّة في مستوى مبتدئ، لا تحضير لامتحان. ولن ندّعي خلاف ذلك لبيع نفاذ.',
        },
        {
          question: 'ماذا يحدث بعد الدروس المجانية؟',
          answer: 'تكتب إلينا ونفتح النفاذ إلى البقية، بعد حديث حول مستواك وهدفك.',
        },
      ],
      keywords: [
        'تعلّم الفرنسية عبر الإنترنت',
        'دروس فرنسية للناطقين بالروسية',
        'النطق الفرنسي للمبتدئين',
        'فرنسية a1',
        'دروس فرنسية مع أستاذ',
        'الفرنسية لغة أجنبية عبر الإنترنت',
      ],
    },

    ru: {
      metaTitle: 'Французский язык онлайн для начинающих — уровень A1 | RusStudy',
      metaDescription:
        'Онлайн-курс французского для русскоговорящих с нуля: произношение, бытовые фразы, студенческая жизнь и административная лексика. Озвученные слайды, упражнения с проверкой, преподаватель по видео. Первые уроки бесплатны.',
      h1: 'Французский язык онлайн, из России',
      kicker: 'Уровень A1 — с полного нуля',
      intro:
        'Французский редко читается так, как пишется, и именно это отбивает желание у большинства начинающих. Этот курс берёт проблему в лоб: сначала ухо и произношение, остальное следом.',
      ctaPrimary: 'Начать бесплатные уроки',
      ctaNote: 'Регистрация занимает минуту. За первые уроки оплата не требуется.',
      sections: [
        {
          heading: 'Что вы будете уметь',
          bullets: [
            'Произносить звуки, которых нет в русском, и узнавать их на слух.',
            'Прочитать незнакомое слово вслух, не ошибившись в звуке.',
            'Представиться, рассказать об учёбе и о работе.',
            'Понять административный бланк и задать вопрос у окна приёма.',
            'Следить за простым разговором о повседневной жизни.',
          ],
        },
        {
          heading: 'Почему сначала произношение',
          paragraphs: [
            'Русскоговорящий, начинающий французский, в начале спотыкается не о грамматику, а о шесть букв, написанных ради одного звука. Носовых гласных, французского «u» и французского «r» в русском нет, и никакое письменное упражнение им не научит.',
            'Поэтому первые уроки очень звуковые: слушаем, повторяем, сравниваем. Грамматика приходит, когда ухо успевает.',
          ],
        },
        {
          heading: 'Преподаватель по видео — для того, что слышно',
          paragraphs: [
            'С первых уроков можно забронировать время и поговорить по видео прямо из браузера, ничего не устанавливая, с камерой или без неё.',
            'Это единственный способ поправить ударение или носовой звук: автоматическое упражнение проверит, что слово выбрано верно, но не что оно произнесено верно.',
          ],
        },
        {
          heading: 'Для чего это дальше',
          paragraphs: [
            'Курс нацелен на конкретное применение: работа с франкоговорящими, подготовка поездки или просто понимание того, что слышишь и читаешь.',
            'Он не готовит к официальному экзамену и его не заменяет. Если вам нужна сертификация, скажите: мы прямо ответим, ведёт ли к ней этот курс.',
          ],
        },
      ],
      faq: [
        {
          question: 'Объяснения на русском?',
          answer:
            'Да. Курс французского объясняется по-русски: с инструкциями на родном языке учатся быстрее.',
        },
        {
          question: 'Нужно ли уметь читать латиницу?',
          answer:
            'Достаточно приблизительного знакомства. Первые уроки разбирают соответствие букв и звуков — а это и есть главная тема во французском.',
        },
        {
          question: 'Сколько длится урок?',
          answer:
            'Десять-пятнадцать минут, лучше каждый день. В произношении регулярность важнее продолжительности.',
        },
        {
          question: 'Готовит ли курс к DELF или TCF?',
          answer:
            'Нет. Это общий языковой курс начального уровня, а не подготовка к экзамену. Мы не станем утверждать обратное, чтобы продать доступ.',
        },
        {
          question: 'Что будет после бесплатных уроков?',
          answer:
            'Вы пишете нам, и мы открываем доступ к остальному — после разговора о вашем уровне и цели.',
        },
      ],
      keywords: [
        'французский язык онлайн',
        'курс французского для русскоговорящих',
        'французское произношение с нуля',
        'французский a1',
        'курс французского с преподавателем',
        'французский как иностранный онлайн',
      ],
    },
  },
};
