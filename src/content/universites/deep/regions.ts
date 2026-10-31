import type { DeepUniversityByLang } from './types';

/*
 * Fiches profondes des cinq universités de région : Toula, Elets, Lipetsk,
 * Voronej et Orel.
 *
 * Ces établissements sont nettement moins documentés que les universités
 * moscovites. Les fiches disent donc explicitement ce qui n'a pas pu être
 * vérifié, plutôt que de combler les trous : la section de vérification est
 * plus longue ici, et c'est volontaire.
 *
 * Deux dates sont absentes à dessein : la fondation d'Elets (l'histoire
 * remonte à l'institut pédagogique de 1939, mais aucune source
 * institutionnelle directe ne confirme cette date comme date de fondation de
 * l'université) et celle d'Orel (non vérifiée).
 */

const L = {
  fr: { o: 'Dénomination officielle', t: 'Translittération', f: 'Fondation', s: 'Statut' },
  en: { o: 'Official name', t: 'Transliteration', f: 'Founded', s: 'Status' },
  ar: { o: 'التسمية الرسمية', t: 'النقل الحرفي', f: 'سنة التأسيس', s: 'الصفة' },
  ru: { o: 'Официальное наименование', t: 'Транслитерация', f: 'Год основания', s: 'Статус' },
} as const;

export const TOULA_UNIV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Тульский государственный университет',
      transliterationLabel: L.fr.t,
      transliteration: 'Tulskiy gosudarstvennyy universitet',
      foundedLabel: L.fr.f,
      founded: '1930',
      statusLabel: L.fr.s,
      status: 'Université publique pluridisciplinaire, à composante technique et médicale',
    },
    sections: [
      {
        heading: 'D’un institut mécanique à une université complète',
        paragraphs: [
          "L'établissement a été créé en 1930 sous la forme d'un institut mécanique, dans une ville dont l'histoire industrielle est ancienne. Cette origine technique explique encore aujourd'hui le poids des filières d'ingénierie, mais l'université est devenue pluridisciplinaire et comporte également une composante médicale.",
          "Point notable pour un étudiant étranger : l'université accueille des étudiants internationaux depuis 1962 et indique avoir formé des étudiants de plus de quatre-vingts pays. Ce n'est pas un établissement qui découvre l'accueil de promotions étrangères.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université indique proposer aux étrangers une préparation pré-universitaire en russe, voie d'entrée habituelle pour un bachelier qui ne maîtrise pas encore la langue.",
          "Côté logement, le campus étudiant comprend douze résidences, avec un nombre de places annoncé qui en fait l'une des capacités les mieux documentées parmi les universités de région du réseau.",
        ],
      },
      {
        heading: 'Étudier à Toula',
        paragraphs: [
          "Toula est la plus proche de Moscou parmi les villes de région du réseau : environ 180 kilomètres, un trajet en train dans la journée. C'est un atout concret pour rejoindre l'aéroport international à l'arrivée comme au départ en vacances, avec un coût de la vie très inférieur à celui de la capitale. La page consacrée à la ville développe ces points.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "L'université indique développer des programmes d'enseignement en anglais, mais cette information ne vaut pas filière par filière.",
        ],
        bullets: [
          "L'ouverture aux internationaux de la médecine dentaire et de la pharmacie, que nous n'avons pas pu confirmer",
          "La langue réelle d'enseignement de la filière visée : des modules en anglais ne font pas un cursus anglophone",
          "L'attribution effective d'une place en résidence pour votre formation",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Тульский государственный университет',
      transliterationLabel: L.en.t,
      transliteration: 'Tulskiy gosudarstvennyy universitet',
      foundedLabel: L.en.f,
      founded: '1930',
      statusLabel: L.en.s,
      status: 'Public multidisciplinary university with technical and medical components',
    },
    sections: [
      {
        heading: 'From a mechanical institute to a full university',
        paragraphs: [
          'The institution was created in 1930 as a mechanical institute, in a city with a long industrial history. That technical origin still explains the weight of engineering programmes today, but the university has become multidisciplinary and also has a medical component.',
          'A point of note for an international student: the university has hosted international students since 1962 and states that it has trained students from more than eighty countries. This is not an institution discovering international cohorts for the first time.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university states that it offers foreign students pre-university preparation in Russian, the usual entry route for a school-leaver who does not yet master the language.',
          'On accommodation, the student campus comprises twelve halls of residence, with an announced number of places that makes it one of the best-documented capacities among the regional universities in the network.',
        ],
      },
      {
        heading: 'Studying in Tula',
        paragraphs: [
          'Tula is the closest to Moscow among the regional cities in the network: around 180 kilometres, a train journey within the day. That is a concrete asset for reaching the international airport on arrival and when leaving for the holidays, at a cost of living far below the capital. The page devoted to the city develops these points.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'The university states that it is developing English-taught programmes, but that information does not hold programme by programme.',
        ],
        bullets: [
          'Whether dentistry and pharmacy are open to international students, which we could not confirm',
          'The actual language of instruction of the programme you are targeting: modules in English do not make an English-taught course',
          'The effective allocation of a place in halls for your programme',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Тульский государственный университет',
      transliterationLabel: L.ar.t,
      transliteration: 'Tulskiy gosudarstvennyy universitet',
      foundedLabel: L.ar.f,
      founded: '1930',
      statusLabel: L.ar.s,
      status: 'جامعة عمومية متعدّدة الاختصاصات، بمكوّن تقني وطبي',
    },
    sections: [
      {
        heading: 'من معهد ميكانيكي إلى جامعة كاملة',
        paragraphs: [
          'أُنشئت المؤسسة سنة 1930 في شكل معهد ميكانيكي، في مدينة ذات تاريخ صناعي عريق. ويفسّر هذا الأصل التقني إلى اليوم وزن المسالك الهندسية، لكن الجامعة صارت متعدّدة الاختصاصات وتضمّ كذلك مكوّنًا طبيًا.',
          'ونقطة جديرة بالملاحظة لطالب أجنبي: تستقبل الجامعة طلبة دوليين منذ 1962 وتذكر أنها كوّنت طلبة من أكثر من ثمانين بلدًا. فهي ليست مؤسسة تكتشف استقبال الدفعات الأجنبية لأول مرة.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'تذكر الجامعة أنها تقترح على الأجانب تحضيرًا قبل جامعي بالروسية، وهو مسلك الدخول المعتاد لحامل باكالوريا لا يتقن اللغة بعد.',
          'وفي جانب السكن، يضمّ الحرم الطلابي اثنتي عشرة إقامة، بعدد مقاعد معلن يجعلها من أفضل الطاقات توثيقًا بين جامعات الأقاليم في الشبكة.',
        ],
      },
      {
        heading: 'الدراسة في تولا',
        paragraphs: [
          'تولا هي الأقرب إلى موسكو من بين مدن الأقاليم في الشبكة: نحو 180 كيلومترًا، ورحلة قطار في جزء من اليوم. وهي ميزة ملموسة لبلوغ المطار الدولي عند الوصول وعند السفر في العطل، بكلفة معيشة أدنى بكثير من العاصمة. والصفحة المخصّصة للمدينة تطوّر هذه النقاط.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'تذكر الجامعة أنها تطوّر برامج تدريس بالإنجليزية، لكن هذه المعلومة لا تسري اختصاصًا باختصاص.',
        ],
        bullets: [
          'فتح طب الأسنان والصيدلة أمام الدوليين، وهو ما لم نتمكّن من تأكيده',
          'لغة التدريس الفعلية للاختصاص المستهدف: فوحدات بالإنجليزية لا تصنع مسارًا أنڨلوفونيًا',
          'الإسناد الفعلي لمقعد في الإقامة لتكوينك',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Тульский государственный университет',
      transliterationLabel: L.ru.t,
      transliteration: 'Tulskiy gosudarstvennyy universitet',
      foundedLabel: L.ru.f,
      founded: '1930',
      statusLabel: L.ru.s,
      status: 'Государственный многопрофильный университет с техническим и медицинским компонентами',
    },
    sections: [
      {
        heading: 'От механического института к полноценному университету',
        paragraphs: [
          'Учебное заведение создано в 1930 году как механический институт, в городе с давней промышленной историей. Это техническое происхождение и сегодня объясняет вес инженерных направлений, но университет стал многопрофильным и располагает также медицинским компонентом.',
          'Важная для иностранного студента деталь: вуз принимает иностранных студентов с 1962 года и указывает, что обучил студентов более чем из восьмидесяти стран. Это не учреждение, впервые открывающее для себя международные группы.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'Университет указывает, что предлагает иностранцам довузовскую подготовку на русском языке — обычный путь входа для выпускника, ещё не владеющего языком.',
          'Что до проживания, студенческий кампус включает двенадцать общежитий с объявленным числом мест, что делает его одной из наиболее документированных вместимостей среди региональных вузов сети.',
        ],
      },
      {
        heading: 'Учёба в Туле',
        paragraphs: [
          'Тула ближе всех к Москве среди региональных городов сети: около 180 километров, поездка на поезде в течение дня. Это осязаемое преимущество для дороги в международный аэропорт и по приезде, и при отъезде на каникулы, при стоимости жизни заметно ниже столичной. Страница города раскрывает эти пункты подробнее.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Университет указывает, что развивает программы на английском, но эта информация не распространяется на каждое направление.',
        ],
        bullets: [
          'Открыты ли стоматология и фармация для иностранных студентов — подтвердить это нам не удалось',
          'Фактический язык обучения выбранного направления: отдельные модули на английском не делают программу англоязычной',
          'Реальное предоставление места в общежитии для вашей программы',
        ],
      },
    ],
  },
};

export const ELETS_UNIV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Елецкий государственный университет имени И.А. Бунина',
      transliterationLabel: L.fr.t,
      transliteration: 'Yeletskiy gosudarstvennyy universitet imeni I.A. Bunina',
      foundedLabel: L.fr.f,
      statusLabel: L.fr.s,
      status: 'Université publique pluridisciplinaire',
    },
    sections: [
      {
        heading: 'Une tradition pédagogique, et un institut médical récent',
        paragraphs: [
          "L'université porte le nom d'Ivan Bounine, écrivain qui a passé une partie de sa jeunesse à Elets. Son histoire institutionnelle remonte à un institut pédagogique créé dans la ville à la fin des années 1930 ; nous ne publions pas de date de fondation précise, faute de source institutionnelle directe la confirmant.",
          "Le fait le plus notable pour un candidat en santé est récent : l'institut médical de l'université a été organisé en 2021. Il propose notamment la médecine générale, la pédiatrie et la pharmacie au niveau spécialité. C'est une structure jeune, ce qui est une information en soi — à peser selon que vous privilégiez l'ancienneté d'un cursus ou la proximité d'un encadrement.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université dispose d'un département préparatoire pour citoyens étrangers. La campagne de candidature s'étale sur le printemps, pour une formation qui démarre à l'automne et se poursuit jusqu'à la fin de l'été suivant : un calendrier à anticiper plusieurs mois à l'avance.",
          "Des résidences universitaires existent ; les conditions précises applicables aux étudiants étrangers restent à confirmer auprès de l'établissement.",
        ],
      },
      {
        heading: 'Étudier à Elets',
        paragraphs: [
          "Elets est, avec Orel, la ville la moins chère des huit du réseau. C'est une petite ville historique où tout est proche, un cadre calme et favorable à la concentration — particulièrement pendant l'année préparatoire de langue. La page consacrée à la ville en détaille les avantages comme les limites.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "Plusieurs points n'ont pas pu être confirmés par une source institutionnelle et doivent être demandés directement.",
        ],
        bullets: [
          "L'ouverture de la médecine dentaire, de l'ingénierie et de l'économie aux étudiants internationaux",
          "L'existence éventuelle de parcours en anglais : nous n'avons trouvé trace que d'un enseignement en russe",
          "Les conditions de logement applicables aux étudiants étrangers",
          "La date exacte de fondation de l'université, si cette information compte pour vos démarches d'équivalence",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Елецкий государственный университет имени И.А. Бунина',
      transliterationLabel: L.en.t,
      transliteration: 'Yeletskiy gosudarstvennyy universitet imeni I.A. Bunina',
      foundedLabel: L.en.f,
      statusLabel: L.en.s,
      status: 'Public multidisciplinary university',
    },
    sections: [
      {
        heading: 'A teaching tradition, and a recent medical institute',
        paragraphs: [
          'The university bears the name of Ivan Bunin, the writer who spent part of his youth in Yelets. Its institutional history goes back to a pedagogical institute created in the town in the late 1930s; we do not publish a precise founding date, for lack of a direct institutional source confirming it.',
          'The most notable fact for a health applicant is recent: the medical institute of the university was organised in 2021. It offers general medicine, paediatrics and pharmacy at specialist level. It is a young structure, which is information in itself — to be weighed according to whether you value the age of a course or the closeness of its supervision.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university has a preparatory department for foreign citizens. The application window runs through the spring, for training that starts in the autumn and continues until the end of the following summer: a calendar to anticipate several months ahead.',
          'University halls exist; the precise conditions applying to international students remain to be confirmed with the institution.',
        ],
      },
      {
        heading: 'Studying in Yelets',
        paragraphs: [
          'Yelets is, along with Oryol, the cheapest of the eight cities in the network. It is a small historic town where everything is close, a quiet setting conducive to concentration — particularly during the preparatory language year. The page devoted to the town details its advantages as well as its limits.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'Several points could not be confirmed by an institutional source and must be asked about directly.',
        ],
        bullets: [
          'Whether dentistry, engineering and economics are open to international students',
          'Whether any English-taught tracks exist: we found evidence only of teaching in Russian',
          'The accommodation conditions applying to international students',
          'The exact founding date of the university, if that matters for your equivalence procedures',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Елецкий государственный университет имени И.А. Бунина',
      transliterationLabel: L.ar.t,
      transliteration: 'Yeletskiy gosudarstvennyy universitet imeni I.A. Bunina',
      foundedLabel: L.ar.f,
      statusLabel: L.ar.s,
      status: 'جامعة عمومية متعدّدة الاختصاصات',
    },
    sections: [
      {
        heading: 'تقليد بيداغوجي، ومعهد طبي حديث',
        paragraphs: [
          'تحمل الجامعة اسم إيفان بونين، الأديب الذي قضى جزءًا من شبابه في يلتس. ويعود تاريخها المؤسساتي إلى معهد بيداغوجي أُحدث بالمدينة في أواخر الثلاثينات؛ ولا ننشر تاريخ تأسيس دقيقًا لغياب مصدر مؤسساتي مباشر يؤكّده.',
          'وأبرز ما يعني مترشّحًا في الصحة حديثُ العهد: فالمعهد الطبي للجامعة نُظّم سنة 2021. ويقترح خاصة الطب العام وطب الأطفال والصيدلة في مستوى الاختصاص. وهي بنية فتيّة، وهذه معلومة في حدّ ذاتها — تُوزَن حسب ما إذا كنت تفضّل عراقة المسار أم قرب التأطير.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'للجامعة قسم تحضيري للمواطنين الأجانب. وتمتدّ حملة الترشّح على فصل الربيع، لتكوين ينطلق في الخريف ويتواصل إلى نهاية الصيف الموالي: رزنامة ينبغي استباقها بأشهر عديدة.',
          'والإقامات الجامعية موجودة؛ أما الشروط الدقيقة المنطبقة على الطلبة الأجانب فتبقى رهن التأكيد لدى المؤسسة.',
        ],
      },
      {
        heading: 'الدراسة في يلتس',
        paragraphs: [
          'يلتس، إلى جانب أوريول، أرخص المدن الثماني في الشبكة. وهي مدينة صغيرة تاريخية كل شيء فيها قريب، وإطار هادئ يساعد على التركيز — خاصة خلال السنة التحضيرية للغة. والصفحة المخصّصة للمدينة تفصّل مزاياها كما حدودها.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'عدة نقاط لم يتسنَّ تأكيدها بمصدر مؤسساتي وينبغي طلبها مباشرة.',
        ],
        bullets: [
          'فتح طب الأسنان والهندسة والاقتصاد أمام الطلبة الدوليين',
          'وجود مسالك بالإنجليزية إن كانت: لم نجد أثرًا إلا لتدريس بالروسية',
          'شروط السكن المنطبقة على الطلبة الأجانب',
          'التاريخ الدقيق لتأسيس الجامعة، إن كانت هذه المعلومة تهمّ إجراءات معادلتك',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Елецкий государственный университет имени И.А. Бунина',
      transliterationLabel: L.ru.t,
      transliteration: 'Yeletskiy gosudarstvennyy universitet imeni I.A. Bunina',
      foundedLabel: L.ru.f,
      statusLabel: L.ru.s,
      status: 'Государственный многопрофильный университет',
    },
    sections: [
      {
        heading: 'Педагогическая традиция и недавний медицинский институт',
        paragraphs: [
          'Университет носит имя Ивана Бунина, писателя, проведшего часть юности в Ельце. Его институциональная история восходит к педагогическому институту, созданному в городе в конце 1930-х годов; точную дату основания мы не публикуем из-за отсутствия прямого институционального источника, её подтверждающего.',
          'Самый значимый для абитуриента-медика факт недавний: медицинский институт университета был организован в 2021 году. Он предлагает лечебное дело, педиатрию и фармацию на уровне специалитета. Это молодая структура, и это уже информация — её стоит взвесить в зависимости от того, что вам важнее: возраст программы или близость сопровождения.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'В университете есть подготовительное отделение для иностранных граждан. Подача заявлений идёт весной, обучение начинается осенью и продолжается до конца следующего лета: календарь, который стоит продумать за несколько месяцев.',
          'Общежития существуют; точные условия для иностранных студентов остаётся подтвердить в вузе.',
        ],
      },
      {
        heading: 'Учёба в Ельце',
        paragraphs: [
          'Елец вместе с Орлом — самый недорогой из восьми городов сети. Это небольшой исторический город, где всё рядом, спокойная среда, располагающая к сосредоточенности, особенно на подготовительном году языка. Страница города подробно разбирает как его преимущества, так и ограничения.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Несколько пунктов не удалось подтвердить институциональным источником, и о них нужно спросить напрямую.',
        ],
        bullets: [
          'Открыты ли стоматология, инженерия и экономика для иностранных студентов',
          'Существуют ли англоязычные треки: мы нашли свидетельства только об обучении на русском',
          'Условия проживания, применимые к иностранным студентам',
          'Точная дата основания университета, если это важно для ваших процедур признания',
        ],
      },
    ],
  },
};

export const LIPETSK_UNIV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Липецкий государственный технический университет',
      transliterationLabel: L.fr.t,
      transliteration: 'Lipetskiy gosudarstvennyy tekhnicheskiy universitet',
      foundedLabel: L.fr.f,
      founded: '1956',
      statusLabel: L.fr.s,
      status: 'Université publique technique',
    },
    sections: [
      {
        heading: 'Née d’une antenne de l’institut de Toula',
        paragraphs: [
          "L'histoire de l'université commence le 1ᵉʳ novembre 1956, avec l'ouverture à Lipetsk d'une faculté de l'institut mécanique de Toula. Les deux établissements du réseau situés à Toula et à Lipetsk ont donc la même racine — un détail d'histoire qui dit beaucoup de la façon dont l'enseignement technique s'est diffusé dans cette région industrielle.",
          "Les premiers enseignements portaient notamment sur la technologie de construction mécanique et sur les machines et outils de fonderie. Le développement de l'université est resté directement lié aux besoins industriels de Lipetsk, ville dont la métallurgie est l'activité structurante.",
        ],
      },
      {
        heading: 'Un établissement résolument technique',
        paragraphs: [
          "Contrairement aux universités pluridisciplinaires du réseau, Lipetsk est une université technique. Si vous visez l'ingénierie ou les filières technologiques, cette spécialisation est un atout : les équipements, les laboratoires et les terrains de stage sont alignés sur ce profil.",
          "Si vous visez en revanche une filière de santé, ce n'est pas l'établissement à considérer : orientez-vous vers les universités du réseau disposant d'une composante médicale.",
        ],
      },
      {
        heading: 'Étudier à Lipetsk',
        paragraphs: [
          "Lipetsk fait partie des villes les plus abordables du réseau, avec un poste logement particulièrement léger. C'est une ville verte, héritage de son passé thermal, au cadre de vie étudiant agréable. La page consacrée à la ville développe ces points.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "C'est, des douze universités du réseau, celle sur laquelle nous avons trouvé le moins d'informations institutionnelles concernant l'accueil des étudiants étrangers. Quatre points sont à demander directement, et nous préférons le dire plutôt que de les présenter comme acquis.",
        ],
        bullets: [
          "L'existence d'un département préparatoire pour étudiants étrangers",
          "Les conditions de logement en résidence universitaire",
          "La langue d'enseignement des filières ouvertes aux internationaux",
          "L'admission effective d'étudiants étrangers dans la spécialité que vous visez",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Липецкий государственный технический университет',
      transliterationLabel: L.en.t,
      transliteration: 'Lipetskiy gosudarstvennyy tekhnicheskiy universitet',
      foundedLabel: L.en.f,
      founded: '1956',
      statusLabel: L.en.s,
      status: 'Public technical university',
    },
    sections: [
      {
        heading: 'Born as a branch of the Tula institute',
        paragraphs: [
          'The history of the university begins on 1 November 1956, with the opening in Lipetsk of a faculty of the Tula Mechanical Institute. The two institutions in the network located in Tula and Lipetsk therefore share the same root — a historical detail that says a great deal about how technical education spread through this industrial region.',
          'The first courses covered mechanical construction technology and foundry machinery and tooling. The development of the university has remained directly tied to the industrial needs of Lipetsk, a city whose metallurgy is the structuring activity.',
        ],
      },
      {
        heading: 'A resolutely technical institution',
        paragraphs: [
          'Unlike the multidisciplinary universities in the network, Lipetsk is a technical university. If you are aiming at engineering or technological programmes, that specialisation is an asset: facilities, laboratories and placement settings are aligned with that profile.',
          'If on the other hand you are aiming at a health programme, this is not the institution to consider: look to the universities in the network that have a medical component.',
        ],
      },
      {
        heading: 'Studying in Lipetsk',
        paragraphs: [
          'Lipetsk is among the most affordable cities in the network, with a particularly light housing line. It is a green city, a legacy of its spa past, with a pleasant student living environment. The page devoted to the city develops these points.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'Of the twelve universities in the network, this is the one on which we found the least institutional information regarding the reception of international students. Four points must be asked about directly, and we prefer to say so rather than present them as settled.',
        ],
        bullets: [
          'Whether a preparatory department for international students exists',
          'The conditions for accommodation in university halls',
          'The language of instruction of programmes open to international students',
          'Whether international students are effectively admitted to the specialty you are targeting',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Липецкий государственный технический университет',
      transliterationLabel: L.ar.t,
      transliteration: 'Lipetskiy gosudarstvennyy tekhnicheskiy universitet',
      foundedLabel: L.ar.f,
      founded: '1956',
      statusLabel: L.ar.s,
      status: 'جامعة تقنية عمومية',
    },
    sections: [
      {
        heading: 'وليدة فرع لمعهد تولا',
        paragraphs: [
          'يبدأ تاريخ الجامعة في غرة نوفمبر 1956، بافتتاح كلية تابعة لمعهد تولا الميكانيكي في ليبتسك. فالمؤسستان في الشبكة الواقعتان في تولا وليبتسك لهما إذن الجذر نفسه — وهو تفصيل تاريخي يقول الكثير عن كيفية انتشار التعليم التقني في هذه المنطقة الصناعية.',
          'وقد تناولت الدروس الأولى خاصة تكنولوجيا البناء الميكانيكي وآلات ومعدّات السباكة. وظلّ تطوّر الجامعة مرتبطًا مباشرة بالحاجات الصناعية لليبتسك، المدينة التي تمثّل الميتالورجيا نشاطها الهيكلي.',
        ],
      },
      {
        heading: 'مؤسسة تقنية بامتياز',
        paragraphs: [
          'خلافًا للجامعات متعدّدة الاختصاصات في الشبكة، ليبتسك جامعة تقنية. فإن كنت تستهدف الهندسة أو المسالك التكنولوجية، فهذا التخصّص ميزة: إذ تكون التجهيزات والمخابر وميادين التربّص متناغمة مع هذا الملمح.',
          'أما إن كنت تستهدف اختصاصًا صحيًا، فليست هي المؤسسة التي ينبغي النظر فيها: توجّه نحو جامعات الشبكة ذات المكوّن الطبي.',
        ],
      },
      {
        heading: 'الدراسة في ليبتسك',
        paragraphs: [
          'ليبتسك من أكثر مدن الشبكة اقتصادًا، ببند سكن خفيف بشكل خاص. وهي مدينة خضراء، إرثًا عن ماضيها الاستشفائي، بإطار حياة طلابية لطيف. والصفحة المخصّصة للمدينة تطوّر هذه النقاط.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'هي، من بين جامعات الشبكة الاثنتي عشرة، التي وجدنا عنها أقلّ المعلومات المؤسساتية في ما يخصّ استقبال الطلبة الأجانب. وأربع نقاط ينبغي طلبها مباشرة، ونفضّل قول ذلك بدل تقديمها كمكتسبات.',
        ],
        bullets: [
          'وجود قسم تحضيري للطلبة الأجانب',
          'شروط السكن في الإقامة الجامعية',
          'لغة تدريس الاختصاصات المفتوحة أمام الدوليين',
          'القبول الفعلي للطلبة الأجانب في الاختصاص الذي تستهدفه',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Липецкий государственный технический университет',
      transliterationLabel: L.ru.t,
      transliteration: 'Lipetskiy gosudarstvennyy tekhnicheskiy universitet',
      foundedLabel: L.ru.f,
      founded: '1956',
      statusLabel: L.ru.s,
      status: 'Государственный технический университет',
    },
    sections: [
      {
        heading: 'Выросший из филиала тульского института',
        paragraphs: [
          'История университета начинается 1 ноября 1956 года с открытия в Липецке факультета Тульского механического института. Два вуза сети, расположенные в Туле и Липецке, имеют, таким образом, общий корень — историческая деталь, многое говорящая о том, как техническое образование распространялось по этому промышленному региону.',
          'Первые курсы касались технологии машиностроения, а также литейных машин и оснастки. Развитие университета осталось напрямую связанным с промышленными потребностями Липецка — города, для которого металлургия является структурообразующей отраслью.',
        ],
      },
      {
        heading: 'Безусловно техническое учебное заведение',
        paragraphs: [
          'В отличие от многопрофильных вузов сети, Липецкий университет — технический. Если вы нацелены на инженерные или технологические направления, эта специализация работает на вас: оборудование, лаборатории и площадки практики соответствуют профилю.',
          'Если же вы нацелены на направление здравоохранения, этот вуз рассматривать не стоит: обратитесь к университетам сети с медицинским компонентом.',
        ],
      },
      {
        heading: 'Учёба в Липецке',
        paragraphs: [
          'Липецк — один из самых доступных городов сети, со особенно лёгкой статьёй жилья. Это зелёный город, унаследовавший это от курортного прошлого, с приятной средой для студенческой жизни. Страница города раскрывает эти пункты подробнее.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Из двенадцати вузов сети это тот, по которому мы нашли меньше всего институциональной информации о приёме иностранных студентов. Четыре пункта нужно уточнить напрямую, и мы предпочитаем сказать об этом, а не выдавать их за решённые.',
        ],
        bullets: [
          'Существует ли подготовительное отделение для иностранных студентов',
          'Условия проживания в студенческом общежитии',
          'Язык обучения на направлениях, открытых для иностранцев',
          'Реально ли принимают иностранных студентов на интересующую вас специальность',
        ],
      },
    ],
  },
};

export const VORONEJ_UNIV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Воронежский государственный университет',
      transliterationLabel: L.fr.t,
      transliteration: 'Voronezhskiy gosudarstvennyy universitet',
      foundedLabel: L.fr.f,
      founded: '1918',
      statusLabel: L.fr.s,
      status: 'Université publique classique pluridisciplinaire',
    },
    sections: [
      {
        heading: 'Une université classique centenaire',
        paragraphs: [
          "Les enseignements ont commencé à Voronej en 1918. C'est une université classique pluridisciplinaire, et le principal pôle universitaire de la région des terres noires.",
          "Elle accueille des étudiants internationaux depuis 1961 et indique sur son site international avoir formé environ quinze mille étudiants et stagiaires étrangers originaires de cent vingt-six pays. Parmi les universités de région du réseau, c'est celle dont l'expérience internationale est la mieux documentée.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université propose un programme pré-universitaire spécifiquement destiné aux étudiants étrangers ne maîtrisant pas suffisamment le russe.",
          "Plusieurs résidences disposent explicitement de places pour étudiants étrangers, ce qui est une formulation plus engageante que la simple existence d'un parc de logements.",
        ],
      },
      {
        heading: 'Étudier à Voronej',
        paragraphs: [
          "Voronej est la plus grande et la mieux équipée des villes de région du réseau : les services d'une véritable métropole régionale pour un coût de la vie proche de celui des villes moyennes. C'est souvent le choix des étudiants qui ne veulent ni l'anonymat de Moscou ni le calme d'une petite ville. La page consacrée à la ville développe ce point.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "L'université indique que la majorité de ses formations sont en russe, tout en proposant également des cours et formations en anglais. La vérification porte donc sur votre filière précise.",
        ],
        bullets: [
          "L'ouverture de la médecine générale et de la médecine dentaire aux internationaux, que nous n'avons pas pu confirmer",
          "La langue d'enseignement de votre cursus complet",
          "L'attribution d'une place en résidence pour votre formation",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Воронежский государственный университет',
      transliterationLabel: L.en.t,
      transliteration: 'Voronezhskiy gosudarstvennyy universitet',
      foundedLabel: L.en.f,
      founded: '1918',
      statusLabel: L.en.s,
      status: 'Classical public multidisciplinary university',
    },
    sections: [
      {
        heading: 'A classical university a century old',
        paragraphs: [
          'Teaching began in Voronezh in 1918. It is a classical multidisciplinary university and the main academic hub of the black-earth region.',
          'It has hosted international students since 1961 and states on its international site that it has trained around fifteen thousand foreign students and trainees from one hundred and twenty-six countries. Among the regional universities in the network, it is the one whose international experience is best documented.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university offers a pre-university programme specifically for international students who do not have sufficient command of Russian.',
          'Several halls explicitly have places for international students, which is a more committing formulation than the mere existence of a housing stock.',
        ],
      },
      {
        heading: 'Studying in Voronezh',
        paragraphs: [
          'Voronezh is the largest and best equipped of the regional cities in the network: the services of a genuine regional metropolis at a cost of living close to that of medium-sized towns. It is often the choice of students who want neither the anonymity of Moscow nor the quiet of a small town. The page devoted to the city develops this point.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'The university states that the majority of its programmes are in Russian, while also offering courses and programmes in English. Verification therefore bears on your specific programme.',
        ],
        bullets: [
          'Whether general medicine and dentistry are open to international students, which we could not confirm',
          'The language of instruction of your full course',
          'The allocation of a place in halls for your programme',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Воронежский государственный университет',
      transliterationLabel: L.ar.t,
      transliteration: 'Voronezhskiy gosudarstvennyy universitet',
      foundedLabel: L.ar.f,
      founded: '1918',
      statusLabel: L.ar.s,
      status: 'جامعة عمومية كلاسيكية متعدّدة الاختصاصات',
    },
    sections: [
      {
        heading: 'جامعة كلاسيكية عمرها قرن',
        paragraphs: [
          'انطلق التدريس في فورونيج سنة 1918. وهي جامعة كلاسيكية متعدّدة الاختصاصات، والقطب الجامعي الرئيسي لمنطقة الأراضي السوداء.',
          'وتستقبل طلبة دوليين منذ 1961 وتذكر في موقعها الدولي أنها كوّنت نحو خمسة عشر ألف طالب ومتربّص أجنبي من مائة وستة وعشرين بلدًا. وهي، بين جامعات الأقاليم في الشبكة، الأفضل توثيقًا لخبرتها الدولية.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'تقترح الجامعة برنامجًا تحضيريًا موجّهًا خصيصًا للطلبة الأجانب الذين لا يتقنون الروسية بما يكفي.',
          'وعدة إقامات بها صراحة مقاعد للطلبة الأجانب، وهي صيغة أكثر التزامًا من مجرّد وجود رصيد سكني.',
        ],
      },
      {
        heading: 'الدراسة في فورونيج',
        paragraphs: [
          'فورونيج هي الأكبر والأفضل تجهيزًا بين مدن الأقاليم في الشبكة: خدمات حاضرة إقليمية حقيقية بكلفة معيشة قريبة من المدن المتوسطة. وهي غالبًا خيار الطلبة الذين لا يريدون لا مجهولية موسكو ولا هدوء مدينة صغيرة. والصفحة المخصّصة للمدينة تطوّر هذه النقطة.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'تذكر الجامعة أن أغلب تكويناتها بالروسية، مع اقتراح دروس وتكوينات بالإنجليزية أيضًا. فالتحقق يتعلق إذن باختصاصك تحديدًا.',
        ],
        bullets: [
          'فتح الطب العام وطب الأسنان أمام الدوليين، وهو ما لم نتمكّن من تأكيده',
          'لغة تدريس مسارك كاملًا',
          'إسناد مقعد في الإقامة لتكوينك',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Воронежский государственный университет',
      transliterationLabel: L.ru.t,
      transliteration: 'Voronezhskiy gosudarstvennyy universitet',
      foundedLabel: L.ru.f,
      founded: '1918',
      statusLabel: L.ru.s,
      status: 'Классический государственный многопрофильный университет',
    },
    sections: [
      {
        heading: 'Классический университет с вековой историей',
        paragraphs: [
          'Преподавание в Воронеже началось в 1918 году. Это классический многопрофильный университет и главный академический центр Черноземья.',
          'Он принимает иностранных студентов с 1961 года и указывает на своём международном сайте, что подготовил около пятнадцати тысяч иностранных студентов и стажёров из ста двадцати шести стран. Среди региональных вузов сети это учреждение с наиболее задокументированным международным опытом.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'Университет предлагает довузовскую программу специально для иностранных студентов, недостаточно владеющих русским языком.',
          'В нескольких общежитиях прямо предусмотрены места для иностранных студентов — формулировка более обязывающая, чем простое наличие жилого фонда.',
        ],
      },
      {
        heading: 'Учёба в Воронеже',
        paragraphs: [
          'Воронеж — крупнейший и лучше всех оснащённый из региональных городов сети: услуги настоящего регионального мегаполиса при стоимости жизни, близкой к средним городам. Это часто выбор студентов, которым не нужна ни московская анонимность, ни тишина маленького города. Страница города раскрывает этот пункт подробнее.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Университет указывает, что большинство его программ ведётся на русском, при этом предлагая также курсы и программы на английском. Поэтому проверка касается именно вашего направления.',
        ],
        bullets: [
          'Открыты ли лечебное дело и стоматология для иностранных студентов — подтвердить это нам не удалось',
          'Язык обучения всей вашей программы',
          'Предоставление места в общежитии для вашей программы',
        ],
      },
    ],
  },
};

export const OREL_UNIV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Орловский государственный университет имени И.С. Тургенева',
      transliterationLabel: L.fr.t,
      transliteration: 'Orlovskiy gosudarstvennyy universitet imeni I.S. Turgeneva',
      foundedLabel: L.fr.f,
      statusLabel: L.fr.s,
      status: 'Université publique pluridisciplinaire',
    },
    sections: [
      {
        heading: 'L’université de la ville de Tourgueniev',
        paragraphs: [
          "L'université porte le nom d'Ivan Tourgueniev, l'un des grands écrivains russes du XIXᵉ siècle, né à Orel. C'est le principal pôle universitaire de la région. Nous ne publions pas de date de fondation : nous n'avons pas trouvé de source institutionnelle directe permettant de la confirmer.",
          "Sa structure comprend des formations médicales et pharmaceutiques : les départements mentionnent explicitement la médecine générale, la pédiatrie, l'odontologie et la pharmacie. C'est l'une des rares universités de région du réseau à couvrir un tel éventail de filières de santé.",
        ],
      },
      {
        heading: 'Une internationalisation en cours',
        paragraphs: [
          "L'université indique travailler à l'internationalisation de ses formations, notamment en médecine, en pharmacie et en économie et gestion. Elle mentionne le développement de modules d'enseignement en langue étrangère dans plusieurs domaines.",
          "Nous ne traduisons pas cela par « cursus en anglais disponible » : développer des modules et ouvrir un cursus complet sont deux choses différentes, et c'est précisément le genre de raccourci qui crée des déceptions à l'arrivée.",
        ],
      },
      {
        heading: 'Étudier à Orel',
        paragraphs: [
          "Orel partage avec Elets les coûts les plus bas des huit villes du réseau. C'est une ville de littérature, calme et verte, où l'immersion linguistique est totale — exigeant au départ, très rentable à l'arrivée pour qui veut atteindre rapidement un bon niveau de russe. La page consacrée à la ville développe ces points.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "Plusieurs points demandent une vérification directe, dont un qui concerne spécifiquement cette université.",
        ],
        bullets: [
          "Le logement sur le campus principal d'Orel : les informations d'hébergement que nous avons trouvées concernent une antenne située dans une autre ville",
          "L'existence d'une faculté préparatoire pour étudiants étrangers",
          "La langue d'enseignement réelle de chacune des filières visées, cursus complet et non modules isolés",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Орловский государственный университет имени И.С. Тургенева',
      transliterationLabel: L.en.t,
      transliteration: 'Orlovskiy gosudarstvennyy universitet imeni I.S. Turgeneva',
      foundedLabel: L.en.f,
      statusLabel: L.en.s,
      status: 'Public multidisciplinary university',
    },
    sections: [
      {
        heading: 'The university of Turgenev’s city',
        paragraphs: [
          'The university bears the name of Ivan Turgenev, one of the great Russian writers of the nineteenth century, born in Oryol. It is the main academic hub of the region. We do not publish a founding date: we found no direct institutional source allowing us to confirm one.',
          'Its structure includes medical and pharmaceutical programmes: departments explicitly mention general medicine, paediatrics, dentistry and pharmacy. It is one of the few regional universities in the network covering such a range of health programmes.',
        ],
      },
      {
        heading: 'Internationalisation in progress',
        paragraphs: [
          'The university states that it is working on the internationalisation of its programmes, notably in medicine, pharmacy and economics and management. It mentions the development of foreign-language teaching modules in several fields.',
          'We do not translate that as "English-taught course available": developing modules and opening a full course are two different things, and that is precisely the kind of shortcut that creates disappointment on arrival.',
        ],
      },
      {
        heading: 'Studying in Oryol',
        paragraphs: [
          'Oryol shares with Yelets the lowest costs of the eight cities in the network. It is a city of literature, calm and green, where linguistic immersion is total — demanding at first, highly rewarding for anyone who wants to reach a good level of Russian quickly. The page devoted to the city develops these points.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'Several points require direct verification, including one specific to this university.',
        ],
        bullets: [
          'Accommodation on the main Oryol campus: the housing information we found concerns a branch located in another town',
          'Whether a preparatory faculty for international students exists',
          'The actual language of instruction of each programme you are targeting, for the full course and not isolated modules',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Орловский государственный университет имени И.С. Тургенева',
      transliterationLabel: L.ar.t,
      transliteration: 'Orlovskiy gosudarstvennyy universitet imeni I.S. Turgeneva',
      foundedLabel: L.ar.f,
      statusLabel: L.ar.s,
      status: 'جامعة عمومية متعدّدة الاختصاصات',
    },
    sections: [
      {
        heading: 'جامعة مدينة تورغينيف',
        paragraphs: [
          'تحمل الجامعة اسم إيفان تورغينيف، أحد كبار الأدباء الروس في القرن التاسع عشر، المولود في أوريول. وهي القطب الجامعي الرئيسي للمنطقة. ولا ننشر تاريخ تأسيس: فلم نجد مصدرًا مؤسساتيًا مباشرًا يتيح تأكيده.',
          'وتضمّ بنيتها تكوينات طبية وصيدلية: إذ تذكر الأقسام صراحة الطب العام وطب الأطفال وطب الأسنان والصيدلة. وهي من جامعات الأقاليم القليلة في الشبكة التي تغطّي هذا المدى من اختصاصات الصحة.',
        ],
      },
      {
        heading: 'تدويل قيد الإنجاز',
        paragraphs: [
          'تذكر الجامعة أنها تعمل على تدويل تكويناتها، خاصة في الطب والصيدلة والاقتصاد والتصرّف. وتشير إلى تطوير وحدات تدريس بلغة أجنبية في عدة مجالات.',
          'ولا نترجم ذلك بـ«مسار بالإنجليزية متاح»: فتطوير وحدات وفتح مسار كامل أمران مختلفان، وهذا بالضبط نوع الاختصار الذي يُنتج خيبات عند الوصول.',
        ],
      },
      {
        heading: 'الدراسة في أوريول',
        paragraphs: [
          'تتقاسم أوريول مع يلتس أدنى التكاليف بين المدن الثماني في الشبكة. وهي مدينة أدب، هادئة وخضراء، يكون فيها الانغماس اللغوي كاملًا — متطلّب في البداية، ومربح جدًا لمن يريد بلوغ مستوى جيد في الروسية بسرعة. والصفحة المخصّصة للمدينة تطوّر هذه النقاط.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'عدة نقاط تتطلّب تحققًا مباشرًا، ومنها واحدة تخصّ هذه الجامعة تحديدًا.',
        ],
        bullets: [
          'السكن في الحرم الرئيسي بأوريول: فمعلومات الإيواء التي وجدناها تخصّ فرعًا يقع في مدينة أخرى',
          'وجود كلية تحضيرية للطلبة الأجانب',
          'لغة التدريس الفعلية لكل اختصاص مستهدف، للمسار كاملًا لا لوحدات معزولة',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Орловский государственный университет имени И.С. Тургенева',
      transliterationLabel: L.ru.t,
      transliteration: 'Orlovskiy gosudarstvennyy universitet imeni I.S. Turgeneva',
      foundedLabel: L.ru.f,
      statusLabel: L.ru.s,
      status: 'Государственный многопрофильный университет',
    },
    sections: [
      {
        heading: 'Университет города Тургенева',
        paragraphs: [
          'Университет носит имя Ивана Тургенева, одного из великих русских писателей XIX века, родившегося в Орле. Это главный академический центр региона. Дату основания мы не публикуем: прямого институционального источника, который позволил бы её подтвердить, мы не нашли.',
          'В его структуре есть медицинские и фармацевтические направления: кафедры прямо упоминают лечебное дело, педиатрию, стоматологию и фармацию. Это один из немногих региональных вузов сети с таким охватом направлений здравоохранения.',
        ],
      },
      {
        heading: 'Интернационализация в процессе',
        paragraphs: [
          'Университет указывает, что работает над интернационализацией своих программ, в частности по медицине, фармации, экономике и управлению. Он упоминает развитие учебных модулей на иностранном языке в нескольких областях.',
          'Мы не переводим это как «англоязычная программа доступна»: развивать модули и открыть полноценную программу — разные вещи, и именно такое упрощение порождает разочарование по приезде.',
        ],
      },
      {
        heading: 'Учёба в Орле',
        paragraphs: [
          'Орёл делит с Ельцом самые низкие расходы среди восьми городов сети. Это литературный город, спокойный и зелёный, где языковое погружение полное — требовательное вначале и очень выгодное для того, кто хочет быстро выйти на хороший уровень русского. Страница города раскрывает эти пункты подробнее.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Несколько пунктов требуют прямой проверки, и один из них специфичен именно для этого университета.',
        ],
        bullets: [
          'Проживание на основном кампусе в Орле: найденная нами информация о жилье относится к филиалу, расположенному в другом городе',
          'Существует ли подготовительный факультет для иностранных студентов',
          'Фактический язык обучения по каждому интересующему направлению — для всей программы, а не для отдельных модулей',
        ],
      },
    ],
  },
};
