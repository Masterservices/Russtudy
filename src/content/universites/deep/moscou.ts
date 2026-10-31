import type { DeepUniversityByLang } from './types';

/*
 * Fiches profondes des établissements moscovites et des deux grandes
 * universités de Saint-Pétersbourg et Kazan.
 *
 * Sourcing : dénominations officielles, dates de fondation, statuts et faits
 * historiques confirmés par les sites institutionnels des établissements.
 * Les filières réellement ouvertes aux étudiants internationaux et la langue
 * exacte d'enseignement ne sont pas affirmées : elles figurent dans la
 * section de vérification propre à chaque fiche.
 */

const L = {
  fr: { o: 'Dénomination officielle', t: 'Translittération', f: 'Fondation', s: 'Statut' },
  en: { o: 'Official name', t: 'Transliteration', f: 'Founded', s: 'Status' },
  ar: { o: 'التسمية الرسمية', t: 'النقل الحرفي', f: 'سنة التأسيس', s: 'الصفة' },
  ru: { o: 'Официальное наименование', t: 'Транслитерация', f: 'Год основания', s: 'Статус' },
} as const;

export const MGU_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Московский государственный университет имени М.В. Ломоносова',
      transliterationLabel: L.fr.t,
      transliteration: 'Moskovskiy gosudarstvennyy universitet imeni M.V. Lomonosova',
      foundedLabel: L.fr.f,
      founded: '1755',
      statusLabel: L.fr.s,
      status: "Université classique publique, l'une des principales universités de Russie",
    },
    sections: [
      {
        heading: 'Une université fondée au XVIIIᵉ siècle',
        paragraphs: [
          "L'Université d'État de Moscou a été fondée en 1755 à l'initiative du savant Mikhaïl Lomonossov, dont elle porte aujourd'hui le nom. Elle comptait dès sa création une faculté de médecine, ce qui en fait l'un des plus anciens lieux d'enseignement médical du pays.",
          "Le grand complexe universitaire des monts des Moineaux, silhouette reconnaissable entre toutes dans le paysage moscovite, a ouvert ses portes aux étudiants en 1953. L'établissement compte aujourd'hui plus de quarante facultés et plusieurs instituts de recherche, répartis entre ce campus et des bâtiments historiques du centre.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université dispose d'un institut de langue et de culture russes qui propose un programme pré-universitaire destiné aux étrangers souhaitant ensuite suivre des études en russe. L'établissement indique que l'une des premières facultés préparatoires de Russie pour étudiants étrangers y a été créée en 1959 : c'est une expérience de plus de soixante ans dans l'accueil de promotions internationales.",
          "Des résidences universitaires existent, mais les conditions d'attribution aux étudiants étrangers varient selon la formation : c'est un point à confirmer au moment de l'admission plutôt qu'à considérer comme acquis.",
        ],
      },
      {
        heading: 'Étudier à Moscou',
        paragraphs: [
          "Moscou est la plus chère des huit villes du réseau, et l'écart avec les villes de région n'est pas marginal. En contrepartie, c'est là que l'offre de filières, la vie culturelle et les communautés étudiantes internationales sont les plus denses. La page consacrée à la ville détaille le coût du logement et de la vie courante.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "Nous publions ici ce qui est confirmé par les sources institutionnelles de l'université. Trois points relèvent en revanche de votre dossier précis et doivent être confirmés directement avant tout engagement.",
        ],
        bullets: [
          "L'ouverture de la filière que vous visez aux étudiants internationaux pour l'année en cours",
          "La langue réelle d'enseignement de cette filière : l'existence de programmes en anglais dans l'université ne signifie pas que votre cursus le sera",
          "L'attribution effective d'une place en résidence, qui dépend de la formation et de la disponibilité",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Московский государственный университет имени М.В. Ломоносова',
      transliterationLabel: L.en.t,
      transliteration: 'Moskovskiy gosudarstvennyy universitet imeni M.V. Lomonosova',
      foundedLabel: L.en.f,
      founded: '1755',
      statusLabel: L.en.s,
      status: 'Classical public university, one of the leading universities in Russia',
    },
    sections: [
      {
        heading: 'A university founded in the eighteenth century',
        paragraphs: [
          'Moscow State University was founded in 1755 on the initiative of the scholar Mikhail Lomonosov, whose name it now bears. It included a faculty of medicine from the outset, making it one of the oldest places of medical teaching in the country.',
          'The great university complex on the Sparrow Hills, one of the most recognisable silhouettes in the Moscow skyline, opened to students in 1953. The institution today has more than forty faculties and several research institutes, split between that campus and historic buildings in the centre.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university has an institute of Russian language and culture offering a pre-university programme for foreign students who intend to study in Russian. The institution states that one of the first preparatory faculties in Russia for international students was created there in 1959: that is more than sixty years of experience hosting international cohorts.',
          'University halls exist, but allocation conditions for international students vary by programme: this is a point to confirm at admission rather than to take as given.',
        ],
      },
      {
        heading: 'Studying in Moscow',
        paragraphs: [
          'Moscow is the most expensive of the eight cities in the network, and the gap with the regional cities is not marginal. In exchange, this is where the range of programmes, the cultural life and the international student communities are densest. The page devoted to the city details accommodation and living costs.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'We publish here what is confirmed by the institutional sources of the university. Three points, however, depend on your specific application and must be confirmed directly before any commitment.',
        ],
        bullets: [
          'Whether the programme you are targeting is open to international students for the current year',
          'The actual language of instruction for that programme: the existence of English-taught courses at the university does not mean yours will be one',
          'The effective allocation of a place in halls, which depends on the programme and on availability',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Московский государственный университет имени М.В. Ломоносова',
      transliterationLabel: L.ar.t,
      transliteration: 'Moskovskiy gosudarstvennyy universitet imeni M.V. Lomonosova',
      foundedLabel: L.ar.f,
      founded: '1755',
      statusLabel: L.ar.s,
      status: 'جامعة كلاسيكية عمومية، من أبرز جامعات روسيا',
    },
    sections: [
      {
        heading: 'جامعة تأسّست في القرن الثامن عشر',
        paragraphs: [
          'تأسّست جامعة موسكو الحكومية سنة 1755 بمبادرة من العالِم ميخائيل لومونوسوف، وهي تحمل اسمه اليوم. وقد ضمّت منذ نشأتها كلية طب، ما يجعلها من أقدم مواقع التعليم الطبي في البلاد.',
          'أما المجمّع الجامعي الكبير على تلال العصافير، وهو من أكثر المعالم تميّزًا في أفق موسكو، فقد فتح أبوابه للطلبة سنة 1953. وتضمّ المؤسسة اليوم أكثر من أربعين كلية وعدة معاهد بحث، موزّعة بين هذا الحرم ومبانٍ تاريخية في المركز.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'للجامعة معهد للغة والثقافة الروسيتين يقترح برنامجًا تحضيريًا موجّهًا للأجانب الراغبين في متابعة الدراسة بالروسية. وتذكر المؤسسة أن إحدى أولى الكليات التحضيرية في روسيا للطلبة الأجانب أُحدثت بها سنة 1959: أي أكثر من ستين سنة من الخبرة في استقبال دفعات دولية.',
          'والإقامات الجامعية موجودة، لكن شروط إسنادها للطلبة الأجانب تختلف حسب التكوين: وهي نقطة ينبغي تأكيدها عند القبول لا اعتبارها مكتسبة.',
        ],
      },
      {
        heading: 'الدراسة في موسكو',
        paragraphs: [
          'موسكو أغلى المدن الثماني في الشبكة، والفارق مع مدن الأقاليم ليس هامشيًا. وفي المقابل، فيها يكون عرض الاختصاصات والحياة الثقافية والجاليات الطلابية الدولية في أعلى كثافتها. والصفحة المخصّصة للمدينة تفصّل كلفة السكن والمعيشة.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'ننشر هنا ما تؤكّده المصادر المؤسساتية للجامعة. أما ثلاث نقاط فتتعلق بملفك تحديدًا وينبغي تأكيدها مباشرة قبل أي التزام.',
        ],
        bullets: [
          'فتح الاختصاص الذي تستهدفه أمام الطلبة الدوليين للسنة الجارية',
          'لغة التدريس الفعلية لهذا الاختصاص: فوجود برامج بالإنجليزية في الجامعة لا يعني أن مسارك سيكون كذلك',
          'الإسناد الفعلي لمقعد في الإقامة، وهو يتوقف على التكوين وعلى التوفّر',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Московский государственный университет имени М.В. Ломоносова',
      transliterationLabel: L.ru.t,
      transliteration: 'Moskovskiy gosudarstvennyy universitet imeni M.V. Lomonosova',
      foundedLabel: L.ru.f,
      founded: '1755',
      statusLabel: L.ru.s,
      status: 'Классический государственный университет, один из ведущих в России',
    },
    sections: [
      {
        heading: 'Университет, основанный в XVIII веке',
        paragraphs: [
          'Московский государственный университет основан в 1755 году по инициативе учёного Михаила Ломоносова, чьё имя он сегодня носит. Уже при создании в нём был медицинский факультет, что делает его одним из старейших центров медицинского образования в стране.',
          'Большой университетский комплекс на Воробьёвых горах, один из самых узнаваемых силуэтов московской панорамы, открылся для студентов в 1953 году. Сегодня в составе университета более сорока факультетов и несколько научно-исследовательских институтов, распределённых между этим кампусом и историческими зданиями в центре.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'В университете работает институт русского языка и культуры с довузовской программой для иностранцев, планирующих учиться на русском. Вуз указывает, что один из первых в России подготовительных факультетов для иностранных студентов был создан здесь в 1959 году: это более шестидесяти лет опыта приёма международных групп.',
          'Общежития существуют, но условия их предоставления иностранным студентам различаются в зависимости от программы: это стоит подтвердить при зачислении, а не считать само собой разумеющимся.',
        ],
      },
      {
        heading: 'Учёба в Москве',
        paragraphs: [
          'Москва — самый дорогой из восьми городов сети, и разрыв с региональными городами отнюдь не символический. Взамен именно здесь наиболее плотны выбор направлений, культурная жизнь и международные студенческие сообщества. На странице города подробно разобрана стоимость жилья и жизни.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Мы публикуем здесь то, что подтверждено институциональными источниками университета. Три момента, однако, зависят от вашей конкретной заявки и требуют прямого подтверждения до принятия обязательств.',
        ],
        bullets: [
          'Открыто ли интересующее вас направление для иностранных студентов в текущем году',
          'Фактический язык обучения на этом направлении: наличие англоязычных программ в вузе не означает, что ваша будет такой',
          'Реальное предоставление места в общежитии, которое зависит от программы и наличия мест',
        ],
      },
    ],
  },
};

export const SPBPU_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName: 'Санкт-Петербургский политехнический университет Петра Великого',
      transliterationLabel: L.fr.t,
      transliteration: 'Sankt-Peterburgskiy politekhnicheskiy universitet Petra Velikogo',
      foundedLabel: L.fr.f,
      founded: '1899',
      statusLabel: L.fr.s,
      status: 'Université nationale de recherche, pluridisciplinaire à dominante scientifique et technologique',
    },
    sections: [
      {
        heading: 'Née de l’industrialisation russe',
        paragraphs: [
          "Fondée en 1899, la Polytechnique de Saint-Pétersbourg est directement issue du mouvement d'industrialisation de la Russie de la fin du XIXᵉ siècle. Elle a été conçue pour former les ingénieurs dont l'industrie manquait, et cette vocation a structuré son identité depuis.",
          "Parmi les scientifiques liés à l'établissement figurent trois prix Nobel : Piotr Kapitsa, Nikolaï Semionov et Jores Alferov. Pour un étudiant qui vise l'ingénierie, c'est un indicateur plus parlant qu'un classement : il dit la profondeur de la tradition scientifique du lieu.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université propose des programmes pré-universitaires de dix mois combinant langue russe et disciplines préparatoires, avec des spécialisations notamment en ingénierie, en économie et en sciences humaines. C'est la voie d'entrée habituelle pour un bachelier qui ne maîtrise pas encore le russe.",
          "Le campus comprend un complexe de dix-huit résidences universitaires. L'attribution d'une place reste cependant à confirmer au moment de l'admission.",
        ],
      },
      {
        heading: 'Étudier à Saint-Pétersbourg',
        paragraphs: [
          "Saint-Pétersbourg occupe une position intermédiaire dans le réseau : plus abordable que Moscou, plus chère que les villes de région, avec une densité culturelle et universitaire comparable à celle de la capitale. La page consacrée à la ville détaille le climat, le coût de la vie et la vie étudiante sur place.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "L'université dispose d'un catalogue international permettant de filtrer les formations par langue, ce qui facilite la vérification. Trois points restent à confirmer directement.",
        ],
        bullets: [
          "L'ouverture de la spécialité visée aux étudiants internationaux pour l'année en cours, et son code exact",
          "La langue d'enseignement du cursus complet, et non de quelques modules seulement",
          "L'attribution effective d'une place en résidence",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName: 'Санкт-Петербургский политехнический университет Петра Великого',
      transliterationLabel: L.en.t,
      transliteration: 'Sankt-Peterburgskiy politekhnicheskiy universitet Petra Velikogo',
      foundedLabel: L.en.f,
      founded: '1899',
      statusLabel: L.en.s,
      status: 'National research university, multidisciplinary with a scientific and technological focus',
    },
    sections: [
      {
        heading: 'Born of Russian industrialisation',
        paragraphs: [
          'Founded in 1899, Saint Petersburg Polytechnic came directly out of the industrialisation of late nineteenth-century Russia. It was designed to train the engineers industry lacked, and that vocation has shaped its identity ever since.',
          'Scientists associated with the institution include three Nobel laureates: Pyotr Kapitsa, Nikolay Semyonov and Zhores Alferov. For a student aiming at engineering, that says more than a ranking: it speaks to the depth of the scientific tradition of the place.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university offers ten-month pre-university programmes combining Russian language and preparatory subjects, with specialisations notably in engineering, economics and humanities. This is the usual entry route for a school-leaver who does not yet master Russian.',
          'The campus includes a complex of eighteen halls of residence. Allocation of a place nevertheless remains to be confirmed at admission.',
        ],
      },
      {
        heading: 'Studying in Saint Petersburg',
        paragraphs: [
          'Saint Petersburg sits in between within the network: more affordable than Moscow, more expensive than the regional cities, with a cultural and academic density comparable to the capital. The page devoted to the city details the climate, cost of living and student life there.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'The university has an international catalogue allowing programmes to be filtered by language, which makes checking easier. Three points remain to be confirmed directly.',
        ],
        bullets: [
          'Whether the specialty you are targeting is open to international students this year, and its exact code',
          'The language of instruction of the full course, not of a few modules only',
          'The effective allocation of a place in halls',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName: 'Санкт-Петербургский политехнический университет Петра Великого',
      transliterationLabel: L.ar.t,
      transliteration: 'Sankt-Peterburgskiy politekhnicheskiy universitet Petra Velikogo',
      foundedLabel: L.ar.f,
      founded: '1899',
      statusLabel: L.ar.s,
      status: 'جامعة وطنية للبحث، متعدّدة الاختصاصات بصبغة علمية وتكنولوجية غالبة',
    },
    sections: [
      {
        heading: 'وليدة التصنيع الروسي',
        paragraphs: [
          'تأسّست بوليتكنيك سان بطرسبورغ سنة 1899، وهي وليدة مباشرة لحركة تصنيع روسيا في أواخر القرن التاسع عشر. وقد صُمّمت لتكوين المهندسين الذين كانت الصناعة تفتقر إليهم، وقد صاغ هذا التوجّه هويتها منذ ذلك الحين.',
          'ومن بين العلماء المرتبطين بالمؤسسة ثلاثة حائزين على جائزة نوبل: بيوتر كابيتسا، ونيكولاي سيميونوف، وجوريس ألفيروف. وبالنسبة إلى طالب يستهدف الهندسة، هذا مؤشّر أبلغ من أي ترتيب: فهو يقول عمق التقليد العلمي للمكان.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'تقترح الجامعة برامج تحضيرية من عشرة أشهر تجمع بين اللغة الروسية والمواد التحضيرية، باختصاصات في الهندسة والاقتصاد والعلوم الإنسانية خاصة. وهذا هو مسلك الدخول المعتاد لحامل باكالوريا لا يتقن الروسية بعد.',
          'ويضمّ الحرم الجامعي مجمّعًا من ثماني عشرة إقامة جامعية. غير أن إسناد مقعد يبقى رهن التأكيد عند القبول.',
        ],
      },
      {
        heading: 'الدراسة في سان بطرسبورغ',
        paragraphs: [
          'تحتلّ سان بطرسبورغ موقعًا وسطًا داخل الشبكة: أقلّ كلفة من موسكو، وأغلى من مدن الأقاليم، بكثافة ثقافية وجامعية مماثلة للعاصمة. والصفحة المخصّصة للمدينة تفصّل المناخ وكلفة المعيشة والحياة الطلابية هناك.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'للجامعة فهرس دولي يتيح تصفية التكوينات حسب اللغة، ما يسهّل التحقق. وتبقى ثلاث نقاط رهن التأكيد المباشر.',
        ],
        bullets: [
          'فتح الاختصاص المستهدف أمام الطلبة الدوليين هذه السنة، ورمزه الدقيق',
          'لغة تدريس المسار كاملًا، لا بعض الوحدات فقط',
          'الإسناد الفعلي لمقعد في الإقامة',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName: 'Санкт-Петербургский политехнический университет Петра Великого',
      transliterationLabel: L.ru.t,
      transliteration: 'Sankt-Peterburgskiy politekhnicheskiy universitet Petra Velikogo',
      foundedLabel: L.ru.f,
      founded: '1899',
      statusLabel: L.ru.s,
      status: 'Национальный исследовательский университет, многопрофильный с научно-технологическим уклоном',
    },
    sections: [
      {
        heading: 'Рождённый индустриализацией',
        paragraphs: [
          'Основанный в 1899 году, Санкт-Петербургский политехнический университет вырос непосредственно из индустриализации России конца XIX века. Он создавался, чтобы готовить инженеров, которых не хватало промышленности, и это призвание с тех пор определяет его облик.',
          'Среди связанных с вузом учёных — три нобелевских лауреата: Пётр Капица, Николай Семёнов и Жорес Алфёров. Для студента, нацеленного на инженерию, это говорит больше любого рейтинга: это глубина научной традиции места.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'Университет предлагает десятимесячные довузовские программы, сочетающие русский язык и профильные предметы, со специализациями в инженерии, экономике и гуманитарных науках. Это обычный путь входа для выпускника, ещё не владеющего русским.',
          'Кампус включает комплекс из восемнадцати общежитий. Тем не менее предоставление места стоит подтвердить при зачислении.',
        ],
      },
      {
        heading: 'Учёба в Санкт-Петербурге',
        paragraphs: [
          'Санкт-Петербург занимает в сети промежуточное положение: доступнее Москвы, дороже региональных городов, при культурной и академической насыщенности, сопоставимой со столичной. На странице города подробно разобраны климат, стоимость жизни и студенческая жизнь.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'У университета есть международный каталог с фильтром программ по языку, что облегчает проверку. Три момента остаются для прямого подтверждения.',
        ],
        bullets: [
          'Открыта ли интересующая специальность для иностранных студентов в этом году и её точный код',
          'Язык обучения всей программы, а не отдельных модулей',
          'Реальное предоставление места в общежитии',
        ],
      },
    ],
  },
};

export const PIROGOV_DEEP: DeepUniversityByLang = {
  fr: {
    identity: {
      officialNameLabel: L.fr.o,
      officialName:
        'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова',
      transliterationLabel: L.fr.t,
      transliteration: 'Rossiyskiy natsionalnyy issledovatelskiy meditsinskiy universitet imeni N.I. Pirogova',
      foundedLabel: L.fr.f,
      founded: '1906',
      statusLabel: L.fr.s,
      status: 'Université médicale nationale de recherche',
    },
    sections: [
      {
        heading: 'Une université entièrement consacrée à la santé',
        paragraphs: [
          "Fondée en 1906, l'université porte le nom de Nikolaï Pirogov, chirurgien et savant dont les travaux ont marqué la médecine du XIXᵉ siècle. Contrairement aux universités pluridisciplinaires du réseau, elle est entièrement dédiée aux sciences de la santé.",
          "L'établissement indique disposer de plus de deux cents bases cliniques pour la formation médicale. Pour un étudiant en médecine, c'est le chiffre qui compte vraiment : la qualité d'un cursus médical se joue sur le volume et la variété des terrains de stage bien plus que sur la réputation des amphithéâtres.",
        ],
      },
      {
        heading: "L'accueil des étudiants étrangers",
        paragraphs: [
          "L'université propose des cours préparatoires destinés aux citoyens étrangers souhaitant se préparer aux formations professionnelles dispensées en russe.",
          "Elle identifie par ailleurs sur ses pages officielles des parcours anglophones en médecine générale, en pharmacie et en odontologie. C'est l'un des rares établissements du réseau où cette information figure explicitement, ce qui n'exempte pas de la confirmer pour l'année en cours.",
        ],
      },
      {
        heading: 'Étudier à Moscou',
        paragraphs: [
          "L'université est implantée à Moscou, la plus chère des huit villes du réseau. La page consacrée à la ville détaille le coût du logement et de la vie courante, ainsi que ce que la capitale offre en contrepartie de ce budget.",
        ],
      },
      {
        heading: 'Ce qu’il faut vérifier auprès de l’établissement',
        paragraphs: [
          "Deux points méritent une attention particulière pour cette université, et un troisième concerne votre projet au-delà du diplôme.",
        ],
        bullets: [
          "Le logement : nous n'avons pas trouvé d'information institutionnelle confirmant les conditions d'hébergement des étudiants étrangers. C'est à demander explicitement avant de vous engager",
          "La disponibilité du parcours anglophone pour la filière et l'année qui vous concernent",
          "Les modalités de poursuite en ordinatura si vous visez une spécialisation : le diplôme de six ans forme un médecin généraliste, pas un spécialiste",
        ],
      },
    ],
  },
  en: {
    identity: {
      officialNameLabel: L.en.o,
      officialName:
        'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова',
      transliterationLabel: L.en.t,
      transliteration: 'Rossiyskiy natsionalnyy issledovatelskiy meditsinskiy universitet imeni N.I. Pirogova',
      foundedLabel: L.en.f,
      founded: '1906',
      statusLabel: L.en.s,
      status: 'National research medical university',
    },
    sections: [
      {
        heading: 'A university devoted entirely to health',
        paragraphs: [
          'Founded in 1906, the university bears the name of Nikolay Pirogov, a surgeon and scholar whose work shaped nineteenth-century medicine. Unlike the multidisciplinary universities in the network, it is given over entirely to the health sciences.',
          'The institution states that it has more than two hundred clinical bases for medical training. For a medical student, that is the figure that really counts: the quality of a medical course rests on the volume and variety of placement settings far more than on the reputation of its lecture halls.',
        ],
      },
      {
        heading: 'Hosting international students',
        paragraphs: [
          'The university offers preparatory courses for foreign citizens intending to prepare for professional programmes taught in Russian.',
          'It also identifies English-taught tracks in general medicine, pharmacy and dentistry on its official pages. It is one of the few institutions in the network where this information appears explicitly, which does not exempt you from confirming it for the current year.',
        ],
      },
      {
        heading: 'Studying in Moscow',
        paragraphs: [
          'The university is based in Moscow, the most expensive of the eight cities in the network. The page devoted to the city details accommodation and living costs, and what the capital offers in exchange for that budget.',
        ],
      },
      {
        heading: 'What to verify with the institution',
        paragraphs: [
          'Two points deserve particular attention for this university, and a third concerns your plan beyond the degree.',
        ],
        bullets: [
          'Accommodation: we found no institutional information confirming housing arrangements for international students. Ask about it explicitly before committing',
          'The availability of the English-taught track for the programme and year that concern you',
          'The arrangements for continuing into ordinatura if you are aiming at a specialty: the six-year degree produces a general physician, not a specialist',
        ],
      },
    ],
  },
  ar: {
    identity: {
      officialNameLabel: L.ar.o,
      officialName:
        'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова',
      transliterationLabel: L.ar.t,
      transliteration: 'Rossiyskiy natsionalnyy issledovatelskiy meditsinskiy universitet imeni N.I. Pirogova',
      foundedLabel: L.ar.f,
      founded: '1906',
      statusLabel: L.ar.s,
      status: 'جامعة طبية وطنية للبحث',
    },
    sections: [
      {
        heading: 'جامعة مكرّسة كليًا للصحة',
        paragraphs: [
          'تأسّست الجامعة سنة 1906، وتحمل اسم نيكولاي بيروغوف، الجرّاح والعالِم الذي طبعت أعماله طبّ القرن التاسع عشر. وخلافًا للجامعات متعدّدة الاختصاصات في الشبكة، فهي مخصّصة بالكامل لعلوم الصحة.',
          'وتذكر المؤسسة أنها تملك أكثر من مائتي قاعدة سريرية للتكوين الطبي. وبالنسبة إلى طالب طب، هذا هو الرقم الذي يهمّ فعلًا: فجودة المسار الطبي تتحدّد بحجم وتنوّع ميادين التربّص أكثر بكثير من سمعة المدرّجات.',
        ],
      },
      {
        heading: 'استقبال الطلبة الأجانب',
        paragraphs: [
          'تقترح الجامعة دروسًا تحضيرية موجّهة للمواطنين الأجانب الراغبين في التحضير للتكوينات المهنية المدرَّسة بالروسية.',
          'كما تحدّد في صفحاتها الرسمية مسالك باللغة الإنجليزية في الطب العام والصيدلة وطب الأسنان. وهي من المؤسسات القليلة في الشبكة التي تَرِد فيها هذه المعلومة صراحة، وهو ما لا يعفي من تأكيدها للسنة الجارية.',
        ],
      },
      {
        heading: 'الدراسة في موسكو',
        paragraphs: [
          'تقع الجامعة في موسكو، أغلى المدن الثماني في الشبكة. والصفحة المخصّصة للمدينة تفصّل كلفة السكن والمعيشة، وما تقدّمه العاصمة في المقابل.',
        ],
      },
      {
        heading: 'ما ينبغي التحقق منه لدى المؤسسة',
        paragraphs: [
          'نقطتان تستحقّان انتباهًا خاصًا في هذه الجامعة، وثالثة تتعلق بمشروعك بعد الشهادة.',
        ],
        bullets: [
          'السكن: لم نجد معلومة مؤسساتية تؤكّد شروط إيواء الطلبة الأجانب. وهذا ما ينبغي طلبه صراحة قبل الالتزام',
          'توفّر المسلك الأنڨلوفوني للاختصاص والسنة اللذين يعنيانك',
          'صيغ مواصلة الأورديناتورا إن كنت تستهدف تخصصًا: فشهادة الست سنوات تكوّن طبيبًا عامًا لا اختصاصيًا',
        ],
      },
    ],
  },
  ru: {
    identity: {
      officialNameLabel: L.ru.o,
      officialName:
        'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова',
      transliterationLabel: L.ru.t,
      transliteration: 'Rossiyskiy natsionalnyy issledovatelskiy meditsinskiy universitet imeni N.I. Pirogova',
      foundedLabel: L.ru.f,
      founded: '1906',
      statusLabel: L.ru.s,
      status: 'Национальный исследовательский медицинский университет',
    },
    sections: [
      {
        heading: 'Университет, целиком посвящённый медицине',
        paragraphs: [
          'Основанный в 1906 году, университет носит имя Николая Пирогова — хирурга и учёного, чьи труды определили медицину XIX века. В отличие от многопрофильных вузов сети, он полностью отдан наукам о здоровье.',
          'Вуз указывает, что располагает более чем двумястами клиническими базами для медицинской подготовки. Для студента-медика это и есть по-настоящему значимая цифра: качество медицинской программы определяется объёмом и разнообразием практических площадок куда больше, чем репутацией лекционных залов.',
        ],
      },
      {
        heading: 'Приём иностранных студентов',
        paragraphs: [
          'Университет предлагает подготовительные курсы для иностранных граждан, готовящихся к профессиональным программам на русском языке.',
          'На официальных страницах он также обозначает англоязычные треки по лечебному делу, фармации и стоматологии. Это один из немногих вузов сети, где такая информация приведена явно, что не отменяет необходимости подтвердить её на текущий год.',
        ],
      },
      {
        heading: 'Учёба в Москве',
        paragraphs: [
          'Университет расположен в Москве — самом дорогом из восьми городов сети. На странице города подробно разобраны стоимость жилья и жизни и то, что столица даёт взамен этого бюджета.',
        ],
      },
      {
        heading: 'Что следует уточнить в вузе',
        paragraphs: [
          'Два момента заслуживают особого внимания применительно к этому университету, а третий касается ваших планов после диплома.',
        ],
        bullets: [
          'Жильё: мы не нашли институционального подтверждения условий размещения иностранных студентов. Об этом стоит спросить прямо до принятия обязательств',
          'Доступность англоязычного трека для интересующих вас направления и года',
          'Условия продолжения в ординатуре, если вы нацелены на специализацию: шестилетний диплом даёт врача общей практики, а не специалиста',
        ],
      },
    ],
  },
};
