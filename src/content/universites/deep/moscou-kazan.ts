import type { DeepUniversityByLang } from './types';

/*
 * Fiches profondes de RUDN, Bauman, Kazan et Stroganov.
 *
 * Deux dénominations officielles ont été corrigées ici d'après les sources
 * institutionnelles : RUDN porte le nom de Patrice Lumumba, et Pirogov la
 * dénomination « université nationale de recherche médicale ».
 *
 * Stroganov est signalée honnêtement comme un établissement d'art et de
 * design : aucune des cinq filières du site ne correspond à son profil, et
 * la fiche le dit plutôt que de laisser croire le contraire.
 */

const L = {
  fr: { o: 'Dénomination officielle', t: 'Translittération', f: 'Fondation', s: 'Statut' },
  en: { o: 'Official name', t: 'Transliteration', f: 'Founded', s: 'Status' },
  ar: { o: 'التسمية الرسمية', t: 'النقل الحرفي', f: 'سنة التأسيس', s: 'الصفة' },
  ru: { o: 'Официальное наименование', t: 'Транслитерация', f: 'Год основания', s: 'Статус' },
} as const;

export const RUDN_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Российский университет дружбы народов имени Патриса Лумумбы',
      transliterationLabel: L.fr.t,
      transliteration: 'Rossiyskiy universitet druzhby narodov imeni Patrisa Lumumby',
      foundedLabel: L.fr.f,
      founded: '1960',
      statusLabel: L.fr.s,
      status: 'Université publique fédérale autonome, pluridisciplinaire, à vocation internationale',
    },
    sections: [
      {
        heading: 'Une université créée pour les étudiants étrangers',
        paragraphs: [
          "RUDN a été créée le 5 février 1960 avec une mission explicite : former des spécialistes originaires d'Asie, d'Afrique et d'Amérique latine. C'est la seule université du réseau dont l'accueil d'étudiants internationaux n'est pas une activité annexe mais la raison d'être.",
          "Sa dénomination officielle actuelle est « Université russe de l'amitié des peuples Patrice Lumumba ». Dès 1961, ses premières grandes facultés comprenaient l'ingénierie, la médecine et l'économie et le droit — les trois familles de filières qui intéressent le plus les bacheliers maghrébins aujourd'hui.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "La faculté préparatoire existe depuis 1960, soit depuis la fondation même de l'université. Elle assure la préparation linguistique et disciplinaire des étrangers avant l'entrée en cursus.",
          "L'université annonce par ailleurs plus de neuf mille places en résidence sur sa page officielle de logement. C'est, parmi les établissements du réseau, celui dont la capacité d'hébergement est documentée le plus clairement.",
        ],
      },
      {
        heading: 'Étudier à Moscou',
        paragraphs: [
          "RUDN est implantée à Moscou. La capitale est la plus chère des huit villes du réseau, mais aussi celle où les communautés étudiantes internationales sont les plus nombreuses — un contexte qui prolonge naturellement la vocation de l'université.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "Même dans un établissement conçu pour les étudiants étrangers, deux points restent à confirmer pour votre dossier précis.",
        ],
        bullets: [
          "La langue d'enseignement de la filière visée : les admissions étrangères mentionnent des épreuves en russe et en anglais, ce qui ne préjuge pas de la langue du cursus complet",
          "L'attribution effective d'une place en résidence : neuf mille places ne signifient pas une place automatique pour chaque candidat",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Российский университет дружбы народов имени Патриса Лумумбы',
      transliterationLabel: L.en.t,
      transliteration: 'Rossiyskiy universitet druzhby narodov imeni Patrisa Lumumby',
      foundedLabel: L.en.f,
      founded: '1960',
      statusLabel: L.en.s,
      status: 'Autonomous federal public university, multidisciplinary, with an international vocation',
    },
    sections: [
      {
        heading: 'A university created for international students',
        paragraphs: [
          'RUDN was created on 5 February 1960 with an explicit mission: to train specialists from Asia, Africa and Latin America. It is the only university in the network for which hosting international students is not a side activity but the reason it exists.',
          'Its current official name is "Peoples\' Friendship University of Russia named after Patrice Lumumba". As early as 1961 its first major faculties covered engineering, medicine, and economics and law — the three families of programmes that most interest Maghrebi school-leavers today.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The preparatory faculty has existed since 1960, that is since the very founding of the university. It provides language and subject preparation for foreign students before they enter the degree course.',
          'The university also states more than nine thousand places in halls on its official accommodation page. Among the institutions in the network, it is the one whose housing capacity is documented most clearly.',
        ],
      },
      {
        heading: 'Studying in Moscow',
        paragraphs: [
          'RUDN is based in Moscow. The capital is the most expensive of the eight cities in the network, but also the one where international student communities are largest — a context that naturally extends the vocation of the university.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'Even at an institution designed for international students, two points remain to be confirmed for your specific application.',
        ],
        bullets: [
          'The language of instruction of the programme you are targeting: international admissions mention tests in Russian and English, which says nothing about the language of the full course',
          'The effective allocation of a place in halls: nine thousand places does not mean an automatic place for every applicant',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Российский университет дружбы народов имени Патриса Лумумбы',
      transliterationLabel: L.ar.t,
      transliteration: 'Rossiyskiy universitet druzhby narodov imeni Patrisa Lumumby',
      foundedLabel: L.ar.f,
      founded: '1960',
      statusLabel: L.ar.s,
      status: 'جامعة عمومية فيدرالية مستقلة، متعدّدة الاختصاصات، ذات توجّه دولي',
    },
    sections: [
      {
        heading: 'جامعة أُنشئت من أجل الطلبة الأجانب',
        paragraphs: [
          'أُنشئت RUDN في 5 فيفري 1960 بمهمة صريحة: تكوين إطارات من آسيا وإفريقيا وأمريكا اللاتينية. وهي الجامعة الوحيدة في الشبكة التي لا يمثّل فيها استقبال الطلبة الدوليين نشاطًا جانبيًا بل سبب وجودها.',
          'وتسميتها الرسمية الحالية هي «جامعة الصداقة بين الشعوب الروسية باتريس لومومبا». ومنذ 1961 كانت كلياتها الكبرى الأولى تشمل الهندسة والطب والاقتصاد والقانون — وهي عائلات الاختصاصات الثلاث الأكثر إثارة لاهتمام حاملي الباكالوريا المغاربيين اليوم.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'الكلية التحضيرية قائمة منذ 1960، أي منذ تأسيس الجامعة ذاته. وهي تؤمّن التحضير اللغوي والمعرفي للأجانب قبل الالتحاق بالمسار.',
          'كما تعلن الجامعة أكثر من تسعة آلاف مقعد في الإقامات على صفحتها الرسمية للسكن. وهي، من بين مؤسسات الشبكة، الأوضح توثيقًا لطاقة الإيواء لديها.',
        ],
      },
      {
        heading: 'الدراسة في موسكو',
        paragraphs: [
          'تقع RUDN في موسكو. والعاصمة أغلى المدن الثماني في الشبكة، لكنها أيضًا المدينة التي تكون فيها الجاليات الطلابية الدولية الأكبر عددًا — وهو سياق يمدّد بشكل طبيعي رسالة الجامعة.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'حتى في مؤسسة صُمّمت للطلبة الأجانب، تبقى نقطتان رهن التأكيد في ملفك تحديدًا.',
        ],
        bullets: [
          'لغة تدريس الاختصاص المستهدف: فذكر اختبارات بالروسية والإنجليزية في القبول الأجنبي لا يحدّد لغة المسار كاملًا',
          'الإسناد الفعلي لمقعد في الإقامة: فتسعة آلاف مقعد لا تعني مقعدًا تلقائيًا لكل مترشّح',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Российский университет дружбы народов имени Патриса Лумумбы',
      transliterationLabel: L.ru.t,
      transliteration: 'Rossiyskiy universitet druzhby narodov imeni Patrisa Lumumby',
      foundedLabel: L.ru.f,
      founded: '1960',
      statusLabel: L.ru.s,
      status: 'Автономное федеральное государственное многопрофильное учреждение с международной направленностью',
    },
    sections: [
      {
        heading: 'Университет, созданный для иностранных студентов',
        paragraphs: [
          'РУДН создан 5 февраля 1960 года с ясной миссией: готовить специалистов из Азии, Африки и Латинской Америки. Это единственный вуз сети, для которого приём иностранных студентов — не побочная деятельность, а причина существования.',
          'Нынешнее официальное наименование — «Российский университет дружбы народов имени Патриса Лумумбы». Уже в 1961 году его первые крупные факультеты охватывали инженерию, медицину, экономику и право — три семейства направлений, которые сегодня больше всего интересуют выпускников из Магриба.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'Подготовительный факультет работает с 1960 года, то есть с самого основания университета. Он обеспечивает языковую и предметную подготовку иностранцев до поступления на основную программу.',
          'На официальной странице о проживании университет указывает более девяти тысяч мест в общежитиях. Среди вузов сети это учреждение с наиболее ясно задокументированной вместимостью.',
        ],
      },
      {
        heading: 'Учёба в Москве',
        paragraphs: [
          'РУДН расположен в Москве. Столица — самый дорогой из восьми городов сети, но и тот, где международные студенческие сообщества наиболее многочисленны: контекст, естественным образом продолжающий призвание университета.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Даже в учреждении, созданном для иностранных студентов, два момента остаются для подтверждения по вашей конкретной заявке.',
        ],
        bullets: [
          'Язык обучения интересующего направления: упоминание испытаний на русском и английском при приёме иностранцев ничего не говорит о языке всей программы',
          'Реальное предоставление места в общежитии: девять тысяч мест не означают автоматического места для каждого абитуриента',
        ],
      },
    ],
  },
};

export const BAUMAN_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Московский государственный технический университет имени Н.Э. Баумана',
      transliterationLabel: L.fr.t,
      transliteration: 'Moskovskiy gosudarstvennyy tekhnicheskiy universitet imeni N.E. Baumana',
      foundedLabel: L.fr.f,
      founded: '1830',
      statusLabel: L.fr.s,
      status: 'Université nationale de recherche, spécialisée en ingénierie et technologies',
    },
    sections: [
      {
        heading: 'Près de deux siècles de formation d’ingénieurs',
        paragraphs: [
          "L'histoire de l'établissement remonte à 1830, ce qui en fait l'une des plus anciennes écoles techniques de Russie. Sa spécialisation n'a jamais varié : former des ingénieurs, et les former sérieusement.",
          "Parmi ses anciens élèves figurent Andreï Tupolev, dont le nom est resté attaché à l'aviation soviétique, et Sergueï Korolev, concepteur en chef du programme spatial. Pour un étudiant qui vise l'ingénierie, ces deux noms disent mieux qu'un classement ce que l'école a produit.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université dispose d'un département préparatoire pour étudiants étrangers, assurant une préparation à la fois linguistique et scientifique, avec des programmes adaptés notamment à l'ingénierie, aux technologies, à l'économie et aux sciences naturelles.",
          "Ses pages internationales mentionnent dix résidences universitaires. L'attribution d'une place reste à confirmer au moment de l'admission.",
        ],
      },
      {
        heading: 'Étudier à Moscou',
        paragraphs: [
          "Bauman est implantée à Moscou, dans le quartier de la Baumanskaïa. La page consacrée à la ville détaille le coût du logement et de la vie courante, ainsi que les distances à anticiper entre résidence et campus.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "L'établissement étant exclusivement technique, la vérification porte moins sur l'existence des filières que sur leurs modalités.",
        ],
        bullets: [
          "Le code exact de la spécialité d'ingénierie visée : l'ingénierie n'a pas de code unique, chaque sous-domaine a le sien, et il figurera sur votre diplôme",
          "La langue d'enseignement du cursus complet : des programmes en anglais existent, mais cela ne vaut pas pour chaque spécialité",
          "L'attribution effective d'une place en résidence",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Московский государственный технический университет имени Н.Э. Баумана',
      transliterationLabel: L.en.t,
      transliteration: 'Moskovskiy gosudarstvennyy tekhnicheskiy universitet imeni N.E. Baumana',
      foundedLabel: L.en.f,
      founded: '1830',
      statusLabel: L.en.s,
      status: 'National research university specialising in engineering and technology',
    },
    sections: [
      {
        heading: 'Nearly two centuries of training engineers',
        paragraphs: [
          'The history of the institution goes back to 1830, making it one of the oldest technical schools in Russia. Its specialisation has never shifted: to train engineers, and to train them seriously.',
          'Its alumni include Andrei Tupolev, whose name remains attached to Soviet aviation, and Sergei Korolev, chief designer of the space programme. For a student aiming at engineering, those two names say more than a ranking about what the school has produced.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university has a preparatory department for international students providing both language and scientific preparation, with programmes geared notably to engineering, technology, economics and natural sciences.',
          'Its international pages mention ten halls of residence. Allocation of a place remains to be confirmed at admission.',
        ],
      },
      {
        heading: 'Studying in Moscow',
        paragraphs: [
          'Bauman is based in Moscow, in the Baumanskaya district. The page devoted to the city details accommodation and living costs, along with the distances to anticipate between halls and campus.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'Since the institution is exclusively technical, verification bears less on whether programmes exist than on their arrangements.',
        ],
        bullets: [
          'The exact code of the engineering specialty you are targeting: engineering has no single code, each sub-field has its own, and it will appear on your degree',
          'The language of instruction of the full course: English-taught programmes exist, but that does not hold for every specialty',
          'The effective allocation of a place in halls',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Московский государственный технический университет имени Н.Э. Баумана',
      transliterationLabel: L.ar.t,
      transliteration: 'Moskovskiy gosudarstvennyy tekhnicheskiy universitet imeni N.E. Baumana',
      foundedLabel: L.ar.f,
      founded: '1830',
      statusLabel: L.ar.s,
      status: 'جامعة وطنية للبحث، مختصّة في الهندسة والتكنولوجيا',
    },
    sections: [
      {
        heading: 'قرنان تقريبًا من تكوين المهندسين',
        paragraphs: [
          'يعود تاريخ المؤسسة إلى 1830، ما يجعلها من أقدم المدارس التقنية في روسيا. ولم يتغيّر تخصّصها قط: تكوين المهندسين، وتكوينهم بجدّية.',
          'ومن بين خرّيجيها أندريه توبوليف، الذي ظلّ اسمه مرتبطًا بالطيران السوفياتي، وسيرغي كوروليوف، كبير مصمّمي البرنامج الفضائي. وبالنسبة إلى طالب يستهدف الهندسة، يقول هذان الاسمان عمّا أنتجته المدرسة أكثر مما يقوله أي ترتيب.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'للجامعة قسم تحضيري للطلبة الأجانب يؤمّن تحضيرًا لغويًا وعلميًا معًا، ببرامج ملائمة للهندسة والتكنولوجيا والاقتصاد والعلوم الطبيعية خاصة.',
          'وتذكر صفحاتها الدولية عشر إقامات جامعية. ويبقى إسناد مقعد رهن التأكيد عند القبول.',
        ],
      },
      {
        heading: 'الدراسة في موسكو',
        paragraphs: [
          'تقع باومان في موسكو، بحيّ باومانسكايا. والصفحة المخصّصة للمدينة تفصّل كلفة السكن والمعيشة، وكذلك المسافات التي ينبغي توقّعها بين الإقامة والحرم الجامعي.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'بما أن المؤسسة تقنية حصرًا، فالتحقق يتعلق بصيغ الاختصاصات أكثر منه بوجودها.',
        ],
        bullets: [
          'الرمز الدقيق للاختصاص الهندسي المستهدف: فالهندسة ليس لها رمز وحيد، ولكل مجال فرعي رمزه، وسيظهر على شهادتك',
          'لغة تدريس المسار كاملًا: فالبرامج بالإنجليزية موجودة، لكن ذلك لا يسري على كل اختصاص',
          'الإسناد الفعلي لمقعد في الإقامة',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Московский государственный технический университет имени Н.Э. Баумана',
      transliterationLabel: L.ru.t,
      transliteration: 'Moskovskiy gosudarstvennyy tekhnicheskiy universitet imeni N.E. Baumana',
      foundedLabel: L.ru.f,
      founded: '1830',
      statusLabel: L.ru.s,
      status: 'Национальный исследовательский университет, специализирующийся на инженерии и технологиях',
    },
    sections: [
      {
        heading: 'Почти два века подготовки инженеров',
        paragraphs: [
          'История учебного заведения восходит к 1830 году, что делает его одной из старейших технических школ России. Его специализация никогда не менялась: готовить инженеров, и готовить всерьёз.',
          'Среди его выпускников — Андрей Туполев, чьё имя осталось связано с советской авиацией, и Сергей Королёв, главный конструктор космической программы. Для студента, нацеленного на инженерию, эти два имени говорят о результатах школы больше любого рейтинга.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'В университете работает подготовительное отделение для иностранных студентов, обеспечивающее и языковую, и естественно-научную подготовку, с программами, ориентированными на инженерию, технологии, экономику и естественные науки.',
          'На международных страницах упоминаются десять общежитий. Предоставление места остаётся подтвердить при зачислении.',
        ],
      },
      {
        heading: 'Учёба в Москве',
        paragraphs: [
          'Бауманский университет расположен в Москве, в районе Бауманской. На странице города подробно разобраны стоимость жилья и жизни, а также расстояния, которые стоит учитывать между общежитием и кампусом.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Поскольку вуз исключительно технический, проверка касается не столько наличия направлений, сколько их условий.',
        ],
        bullets: [
          'Точный код интересующей инженерной специальности: у инженерии нет единого кода, у каждого поднаправления свой, и он попадёт в диплом',
          'Язык обучения всей программы: англоязычные программы существуют, но это верно не для каждой специальности',
          'Реальное предоставление места в общежитии',
        ],
      },
    ],
  },
};

export const KAZAN_UNIV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Казанский (Приволжский) федеральный университет',
      transliterationLabel: L.fr.t,
      transliteration: 'Kazanskiy (Privolzhskiy) federalnyy universitet',
      foundedLabel: L.fr.f,
      founded: '1804',
      statusLabel: L.fr.s,
      status: 'Université fédérale, pluridisciplinaire et de recherche',
    },
    sections: [
      {
        heading: 'Deux siècles de science à Kazan',
        paragraphs: [
          "Fondée en 1804 comme Université impériale de Kazan, c'est l'une des plus anciennes universités de Russie. Son histoire scientifique n'est pas une légende d'établissement : c'est là que Nikolaï Lobatchevski a développé la géométrie non euclidienne, qui a bouleversé les mathématiques du XIXᵉ siècle.",
          "C'est également à Kazan que le chimiste Karl Claus a découvert le ruthénium en 1844. Peu d'universités peuvent rattacher à leurs murs deux apports de cette portée.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université dispose d'une faculté préparatoire pour étudiants étrangers, voie d'entrée habituelle avant l'intégration en cursus pour qui ne maîtrise pas encore le russe.",
          "Elle prévoit explicitement le logement des étudiants étrangers dans ses résidences, sous réserve de disponibilité. La formulation mérite d'être lue telle quelle : la place n'est pas automatique.",
        ],
      },
      {
        heading: 'Étudier à Kazan',
        paragraphs: [
          "Kazan est, de l'avis des étudiants concernés, la ville du réseau où l'adaptation culturelle est la plus douce pour un étudiant maghrébin : population musulmane nombreuse et installée de longue date, alimentation halal partout, lieux de prière qui ne se cherchent pas. Le tout pour un coût de la vie nettement inférieur à celui de Moscou. La page consacrée à la ville développe ces points.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "L'université dispose d'un catalogue international et de formations anglophones, mais la langue doit se vérifier programme par programme.",
        ],
        bullets: [
          "La langue d'enseignement de la filière visée, vérifiée au niveau du programme et non de l'université",
          "L'ouverture de cette filière aux étudiants internationaux pour l'année en cours",
          "La disponibilité effective d'une place en résidence",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Казанский (Приволжский) федеральный университет',
      transliterationLabel: L.en.t,
      transliteration: 'Kazanskiy (Privolzhskiy) federalnyy universitet',
      foundedLabel: L.en.f,
      founded: '1804',
      statusLabel: L.en.s,
      status: 'Federal university, multidisciplinary and research-intensive',
    },
    sections: [
      {
        heading: 'Two centuries of science in Kazan',
        paragraphs: [
          'Founded in 1804 as Kazan Imperial University, it is one of the oldest universities in Russia. Its scientific history is not institutional legend: this is where Nikolai Lobachevsky developed non-Euclidean geometry, which overturned nineteenth-century mathematics.',
          'It is also in Kazan that the chemist Karl Claus discovered ruthenium in 1844. Few universities can attach two contributions of that reach to their own walls.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university has a preparatory faculty for international students, the usual entry route before joining a degree course for those who do not yet master Russian.',
          'It explicitly provides for housing international students in its halls, subject to availability. That wording deserves to be read as it stands: a place is not automatic.',
        ],
      },
      {
        heading: 'Studying in Kazan',
        paragraphs: [
          'By the account of the students concerned, Kazan is the city in the network where cultural adaptation is gentlest for a Maghrebi student: a large, long-established Muslim population, halal food everywhere, prayer spaces you do not have to search for. All at a cost of living markedly below Moscow. The page devoted to the city develops these points.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'The university has an international catalogue and English-taught programmes, but language must be checked programme by programme.',
        ],
        bullets: [
          'The language of instruction of the programme you are targeting, verified at programme level rather than university level',
          'Whether that programme is open to international students for the current year',
          'The effective availability of a place in halls',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Казанский (Приволжский) федеральный университет',
      transliterationLabel: L.ar.t,
      transliteration: 'Kazanskiy (Privolzhskiy) federalnyy universitet',
      foundedLabel: L.ar.f,
      founded: '1804',
      statusLabel: L.ar.s,
      status: 'جامعة فيدرالية، متعدّدة الاختصاصات وذات توجّه بحثي',
    },
    sections: [
      {
        heading: 'قرنان من العلم في قازان',
        paragraphs: [
          'تأسّست سنة 1804 باسم جامعة قازان الإمبراطورية، وهي من أقدم جامعات روسيا. وتاريخها العلمي ليس أسطورة مؤسساتية: فهنا طوّر نيكولاي لوباتشيفسكي الهندسة اللاإقليدية التي قلبت رياضيات القرن التاسع عشر.',
          'وفي قازان أيضًا اكتشف الكيميائي كارل كلاوس عنصر الروثينيوم سنة 1844. وقليلة هي الجامعات التي يمكنها أن تنسب إلى جدرانها إسهامين بهذا الحجم.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'للجامعة كلية تحضيرية للطلبة الأجانب، وهي مسلك الدخول المعتاد قبل الالتحاق بالمسار لمن لا يتقن الروسية بعد.',
          'وتنصّ صراحة على إيواء الطلبة الأجانب في إقاماتها، رهن التوفّر. وتستحق هذه الصيغة أن تُقرأ كما هي: المقعد ليس تلقائيًا.',
        ],
      },
      {
        heading: 'الدراسة في قازان',
        paragraphs: [
          'قازان، بشهادة الطلبة المعنيين، هي مدينة الشبكة التي يكون فيها التأقلم الثقافي ألطف ما يكون لطالب مغاربي: جالية مسلمة كبيرة ومستقرّة منذ زمن بعيد، وطعام حلال في كل مكان، وأماكن صلاة لا تحتاج إلى بحث. وكل ذلك بكلفة معيشة أدنى بوضوح من موسكو. والصفحة المخصّصة للمدينة تطوّر هذه النقاط.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'للجامعة فهرس دولي وتكوينات بالإنجليزية، لكن اللغة ينبغي التحقق منها برنامجًا ببرنامج.',
        ],
        bullets: [
          'لغة تدريس الاختصاص المستهدف، محقّقة على مستوى البرنامج لا الجامعة',
          'فتح هذا الاختصاص أمام الطلبة الدوليين للسنة الجارية',
          'التوفّر الفعلي لمقعد في الإقامة',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Казанский (Приволжский) федеральный университет',
      transliterationLabel: L.ru.t,
      transliteration: 'Kazanskiy (Privolzhskiy) federalnyy universitet',
      foundedLabel: L.ru.f,
      founded: '1804',
      statusLabel: L.ru.s,
      status: 'Федеральный университет, многопрофильный и исследовательский',
    },
    sections: [
      {
        heading: 'Два века науки в Казани',
        paragraphs: [
          'Основанный в 1804 году как Казанский императорский университет, это один из старейших вузов России. Его научная история — не ведомственная легенда: именно здесь Николай Лобачевский создал неевклидову геометрию, перевернувшую математику XIX века.',
          'В Казани же химик Карл Клаус открыл рутений в 1844 году. Немногие университеты могут связать со своими стенами два вклада такого масштаба.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'В университете есть подготовительный факультет для иностранных студентов — обычный путь входа перед поступлением на основную программу для тех, кто ещё не владеет русским.',
          'Вуз прямо предусматривает размещение иностранных студентов в своих общежитиях при наличии мест. Эту формулировку стоит читать буквально: место не предоставляется автоматически.',
        ],
      },
      {
        heading: 'Учёба в Казани',
        paragraphs: [
          'По отзывам самих студентов, Казань — город сети, где культурная адаптация проходит мягче всего для студента из Магриба: большая и давно укоренённая мусульманская община, халяльные продукты повсюду, молельные помещения, которые не нужно искать. И всё это при стоимости жизни заметно ниже московской. Страница города раскрывает эти пункты подробнее.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'У университета есть международный каталог и англоязычные программы, но язык нужно проверять по каждой программе отдельно.',
        ],
        bullets: [
          'Язык обучения интересующего направления — на уровне программы, а не университета',
          'Открыто ли это направление для иностранных студентов в текущем году',
          'Реальное наличие места в общежитии',
        ],
      },
    ],
  },
};

export const STROGANOV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Московская государственная художественно-промышленная академия имени С.Г. Строганова',
      transliterationLabel: L.fr.t,
      transliteration: 'Moskovskaya gosudarstvennaya khudozhestvenno-promyshlennaya akademiya imeni S.G. Stroganova',
      foundedLabel: L.fr.f,
      founded: '1825',
      statusLabel: L.fr.s,
      status: "Établissement public spécialisé dans l'art, le design et les arts appliqués",
    },
    sections: [
      {
        heading: 'Une académie d’art et d’industrie',
        paragraphs: [
          "Fondée en 1825, l'Académie Stroganov appartient à la tradition russe des écoles d'art appliqué et d'industrie. Son nom est associé à la dynastie Stroganov et à l'enseignement artistique et décoratif.",
          "C'est un établissement d'un genre différent des autres universités du réseau : on n'y forme ni médecins ni ingénieurs, mais des artistes, des designers et des praticiens des arts appliqués.",
        ],
      },
      {
        heading: 'Un profil qui ne correspond pas à nos cinq filières',
        paragraphs: [
          "Disons-le clairement plutôt que de l'escamoter : aucune des cinq filières présentées sur ce site — médecine générale, médecine dentaire, pharmacie, ingénierie et technologies, économie et management — ne correspond au profil de cet établissement.",
          "Si vous visez l'art ou le design, c'est une piste à explorer, mais elle sort du cadre des parcours que nous documentons aujourd'hui. Si vous visez l'une des cinq filières ci-dessus, orientez-vous vers les autres universités du réseau.",
        ],
      },
      {
        heading: 'Étudier à Moscou',
        paragraphs: [
          "L'académie est implantée à Moscou. La page consacrée à la ville détaille le coût du logement et de la vie courante, valables quel que soit l'établissement.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "Nous n'avons pas trouvé de source institutionnelle confirmant les points suivants pour les étudiants étrangers. Ils sont donc à demander directement avant toute démarche.",
        ],
        bullets: [
          "L'existence d'une faculté préparatoire pour étudiants étrangers",
          "Les filières artistiques réellement ouvertes aux candidats internationaux et leurs conditions d'admission, qui comportent généralement une épreuve ou un dossier artistique",
          "La langue d'enseignement et les conditions de logement",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Московская государственная художественно-промышленная академия имени С.Г. Строганова',
      transliterationLabel: L.en.t,
      transliteration: 'Moskovskaya gosudarstvennaya khudozhestvenno-promyshlennaya akademiya imeni S.G. Stroganova',
      foundedLabel: L.en.f,
      founded: '1825',
      statusLabel: L.en.s,
      status: 'Public institution specialising in art, design and applied arts',
    },
    sections: [
      {
        heading: 'An academy of art and industry',
        paragraphs: [
          'Founded in 1825, the Stroganov Academy belongs to the Russian tradition of schools of applied art and industry. Its name is associated with the Stroganov dynasty and with artistic and decorative teaching.',
          'It is an institution of a different kind from the other universities in the network: it trains neither doctors nor engineers, but artists, designers and practitioners of the applied arts.',
        ],
      },
      {
        heading: 'A profile that does not match our five programmes',
        paragraphs: [
          'Let us say it plainly rather than gloss over it: none of the five programmes presented on this site — general medicine, dentistry, pharmacy, engineering and technology, economics and management — matches the profile of this institution.',
          'If you are aiming at art or design, it is a lead worth exploring, but it falls outside the paths we document today. If you are aiming at one of the five programmes above, look to the other universities in the network.',
        ],
      },
      {
        heading: 'Studying in Moscow',
        paragraphs: [
          'The academy is based in Moscow. The page devoted to the city details accommodation and living costs, which apply whatever the institution.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'We found no institutional source confirming the following points for international students. They should therefore be asked about directly before taking any steps.',
        ],
        bullets: [
          'Whether a preparatory faculty for international students exists',
          'Which art programmes are genuinely open to international applicants and their admission requirements, which generally include a test or a portfolio',
          'The language of instruction and the accommodation arrangements',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Московская государственная художественно-промышленная академия имени С.Г. Строганова',
      transliterationLabel: L.ar.t,
      transliteration: 'Moskovskaya gosudarstvennaya khudozhestvenno-promyshlennaya akademiya imeni S.G. Stroganova',
      foundedLabel: L.ar.f,
      founded: '1825',
      statusLabel: L.ar.s,
      status: 'مؤسسة عمومية مختصّة في الفن والتصميم والفنون التطبيقية',
    },
    sections: [
      {
        heading: 'أكاديمية فن وصناعة',
        paragraphs: [
          'تأسّست أكاديمية سترُوغانوف سنة 1825، وهي تنتمي إلى التقليد الروسي لمدارس الفن التطبيقي والصناعة. واسمها مرتبط بسلالة سترُوغانوف وبالتعليم الفني والزخرفي.',
          'وهي مؤسسة من نوع مختلف عن بقية جامعات الشبكة: فلا يُكوَّن فيها أطباء ولا مهندسون، بل فنانون ومصمّمون وممارسون للفنون التطبيقية.',
        ],
      },
      {
        heading: 'ملمح لا يطابق اختصاصاتنا الخمسة',
        paragraphs: [
          'لنقلها بوضوح بدل الالتفاف عليها: لا يطابق أيٌّ من الاختصاصات الخمسة المعروضة على هذا الموقع — الطب العام، وطب الأسنان، والصيدلة، والهندسة والتكنولوجيا، والاقتصاد والتصرّف — ملمحَ هذه المؤسسة.',
          'فإن كنت تستهدف الفن أو التصميم، فهي مسار يستحق الاستكشاف، لكنه خارج إطار المسالك التي نوثّقها اليوم. وإن كنت تستهدف أحد الاختصاصات الخمسة أعلاه، فتوجّه نحو بقية جامعات الشبكة.',
        ],
      },
      {
        heading: 'الدراسة في موسكو',
        paragraphs: [
          'تقع الأكاديمية في موسكو. والصفحة المخصّصة للمدينة تفصّل كلفة السكن والمعيشة، وهي صالحة مهما كانت المؤسسة.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'لم نجد مصدرًا مؤسساتيًا يؤكّد النقاط التالية بخصوص الطلبة الأجانب. وهي بالتالي ممّا ينبغي طلبه مباشرة قبل أي إجراء.',
        ],
        bullets: [
          'وجود كلية تحضيرية للطلبة الأجانب',
          'الاختصاصات الفنية المفتوحة فعلًا أمام المترشّحين الدوليين وشروط قبولها، وهي تتضمّن عادة اختبارًا أو ملفًا فنيًا',
          'لغة التدريس وشروط السكن',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Московская государственная художественно-промышленная академия имени С.Г. Строганова',
      transliterationLabel: L.ru.t,
      transliteration: 'Moskovskaya gosudarstvennaya khudozhestvenno-promyshlennaya akademiya imeni S.G. Stroganova',
      foundedLabel: L.ru.f,
      founded: '1825',
      statusLabel: L.ru.s,
      status: 'Государственное учреждение, специализирующееся на искусстве, дизайне и прикладных искусствах',
    },
    sections: [
      {
        heading: 'Академия искусства и промышленности',
        paragraphs: [
          'Основанная в 1825 году, Строгановская академия принадлежит русской традиции школ прикладного искусства и промышленности. Её имя связано с династией Строгановых и с художественным и декоративным образованием.',
          'Это учреждение иного рода, чем остальные вузы сети: здесь готовят не врачей и не инженеров, а художников, дизайнеров и мастеров прикладных искусств.',
        ],
      },
      {
        heading: 'Профиль, не совпадающий с нашими пятью направлениями',
        paragraphs: [
          'Скажем прямо, а не обойдём стороной: ни одно из пяти направлений, представленных на этом сайте — лечебное дело, стоматология, фармация, инженерия и технологии, экономика и менеджмент, — не соответствует профилю этого учреждения.',
          'Если вы нацелены на искусство или дизайн, это направление стоит изучить, но оно выходит за рамки маршрутов, которые мы сегодня документируем. Если вы нацелены на одно из пяти направлений выше, обратитесь к другим вузам сети.',
        ],
      },
      {
        heading: 'Учёба в Москве',
        paragraphs: [
          'Академия расположена в Москве. На странице города подробно разобраны стоимость жилья и жизни, действующая независимо от учебного заведения.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Мы не нашли институционального источника, подтверждающего следующие пункты применительно к иностранным студентам. Поэтому о них стоит спросить напрямую до любых шагов.',
        ],
        bullets: [
          'Существует ли подготовительный факультет для иностранных студентов',
          'Какие художественные направления реально открыты для иностранных абитуриентов и каковы условия приёма, обычно включающие испытание или творческое портфолио',
          'Язык обучения и условия проживания',
        ],
      },
    ],
  },
};
