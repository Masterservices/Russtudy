import type { ComparisonEntry } from './countries';

/*
 * Destinations concurrentes de la Russie pour un bachelier maghrébin, au-delà
 * du trio France / Roumanie / Tunisie déjà couvert dans countries.ts.
 *
 * Règle de sourcing : les chiffres côté Russie reprennent ceux déjà publiés
 * ailleurs sur le site (frais de scolarité, logement, coût de la vie, délais).
 * Côté pays comparé, seuls des ordres de grandeur issus de sources publiques
 * sont donnés, et chaque page porte un disclaimer explicite invitant à les
 * vérifier auprès de l'établissement et du consulat concernés. Aucune donnée
 * n'est inventée et aucune n'est balisée en JSON-LD.
 *
 * Ordre identique aux slugs ajoutés dans COMPARISON_SLUGS.
 */
export const EXTRA_COMPARISONS: ComparisonEntry[] = [
  {
    slug: 'russie-vs-turquie',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: 'Étudier en Russie ou en Turquie : le comparatif pour un bachelier tunisien | RusStudy',
        description:
          "Frais, examen d'entrée YÖS, langue, coût de la vie à Istanbul et reconnaissance du diplôme : la comparaison honnête entre la Russie et la Turquie pour un étudiant tunisien.",
        h1: 'Étudier en Russie ou en Turquie ?',
        summary: "Deux destinations proches culturellement, deux logiques d'admission très différentes.",
        intro:
          "La Turquie attire beaucoup d'étudiants maghrébins, et cela se comprend : la proximité culturelle est réelle, la communauté est nombreuse et le vol est court. Mais la sélection à l'entrée et la facture réelle réservent des surprises. Voici la comparaison, y compris là où la Turquie l'emporte franchement.",
        tableTitle: 'Le comparatif, critère par critère',
        columns: { criterion: 'Critère', russia: 'Russie', other: 'Turquie' },
        rows: [
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière, tarif public affiché',
            other: "Très variable : universités d'État nettement moins chères que les universités privées, où la médecine atteint des montants élevés",
          },
          {
            criterion: 'Mode de sélection',
            russia: 'Admission sur dossier scolaire, sans examen d’entrée',
            other: "Examen d'entrée YÖS exigé par de nombreuses universités, avec un classement et des quotas par nationalité",
          },
          {
            criterion: "Langue d'enseignement",
            russia: 'Russe après une année préparatoire intégrée, ou anglais selon les cursus',
            other: 'Turc pour la majorité des cursus, anglais dans certains programmes souvent payants',
          },
          {
            criterion: 'Logement',
            russia: 'Résidence universitaire pré-réservée, de 30 à 90 € par mois',
            other: "Résidences publiques très demandées, sinon marché locatif privé nettement plus cher, surtout à Istanbul",
          },
          {
            criterion: 'Coût de la vie mensuel',
            russia: 'De 140 à 260 € selon la ville',
            other: 'Sensiblement plus élevé dans les grandes métropoles, et exposé à une inflation forte',
          },
          {
            criterion: 'Calendrier des rentrées',
            russia: 'Rentrée de septembre et session complémentaire de février',
            other: 'Rentrée principale unique, calée sur le calendrier des examens d’admission',
          },
          {
            criterion: 'Reconnaissance du diplôme',
            russia: "Diplôme d'État russe, procédure d'équivalence établie en Tunisie",
            other: 'Diplôme turc, procédure de reconnaissance également établie',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Côté Turquie, les écarts entre universités d'État et privées sont considérables et les tarifs évoluent vite : vérifiez systématiquement auprès de l'établissement visé avant toute décision.",
        otherWinsTitle: 'Là où la Turquie reste le meilleur choix',
        otherWins: [
          "Si la proximité culturelle et religieuse est votre critère numéro un, l'adaptation y est presque immédiate",
          'Si vous voulez rentrer souvent : le vol est court et bon marché depuis Tunis',
          'Si vous parlez déjà turc, ou si apprendre le turc vous motive davantage que le russe',
          "Si vous obtenez une bourse turque, qui change complètement l'équation budgétaire",
        ],
        russiaWinsTitle: 'Là où la Russie prend l’avantage',
        russiaWins: [
          "Pas d'examen d'entrée à préparer ni de classement à affronter : l'admission se joue sur le dossier",
          'Un tarif public affiché, identique pour tous, sans écart public-privé',
          'Un logement universitaire garanti et réservé avant le départ',
          "Un coût de la vie plus bas et plus stable, surtout hors des deux capitales",
          'Une session de février qui permet de ne pas perdre une année entière',
        ],
        verdictTitle: 'Comment trancher',
        verdict:
          "Si vous avez le temps et le niveau pour préparer le YÖS, et que vous visez une université d'État turque, la Turquie est une très bonne option. Si vous cherchez une admission prévisible, sans examen d'entrée, avec un budget annoncé à l'avance et un logement garanti, la Russie est la voie la plus sûre.",
        faq: [
          {
            question: "Faut-il passer le YÖS pour étudier en Russie ?",
            answer:
              "Non. Il n'existe pas d'équivalent russe du YÖS dans nos universités partenaires : l'admission se fait sur dossier scolaire, avec vos relevés de notes et votre baccalauréat.",
          },
          {
            question: 'La Turquie est-elle moins chère que la Russie ?',
            answer:
              "Cela dépend entièrement de l'université. Une université d'État turque peut être moins chère, une université privée turque nettement plus chère. À budget total, logement et coût de la vie compris, la Russie reste généralement plus prévisible.",
          },
          {
            question: 'Puis-je trouver de la nourriture halal en Russie ?',
            answer:
              "Oui, sans difficulté dans les grandes villes et dans les villes universitaires accueillant des étudiants étrangers. Kazan, capitale du Tatarstan, compte une population musulmane importante et une offre très large.",
          },
        ],
        keywords: [
          'étudier en Russie ou en Turquie', 'YÖS examen', 'comparatif études Russie Turquie',
          'étudier en Turquie tunisien', 'médecine Turquie ou Russie', 'coût études Turquie',
        ],
      },
      en: {
        title: 'Studying in Russia or Türkiye: A Comparison for Tunisian Students | RusStudy',
        description:
          'Fees, the YÖS entrance exam, language, cost of living in Istanbul and degree recognition: an honest comparison between Russia and Türkiye for a Tunisian student.',
        h1: 'Study in Russia or in Türkiye?',
        summary: 'Two culturally close destinations, two very different admission logics.',
        intro:
          'Türkiye attracts many students from the Maghreb, and it is easy to see why: the cultural proximity is real, the community is large and the flight is short. But the entrance selection and the real bill hold some surprises. Here is the comparison, including where Türkiye clearly wins.',
        tableTitle: 'The comparison, criterion by criterion',
        columns: { criterion: 'Criterion', russia: 'Russia', other: 'Türkiye' },
        rows: [
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme, published public rate',
            other: 'Highly variable: state universities are far cheaper than private ones, where medicine reaches high amounts',
          },
          {
            criterion: 'Selection method',
            russia: 'Admission on school record, with no entrance exam',
            other: 'The YÖS entrance exam is required by many universities, with ranking and quotas per nationality',
          },
          {
            criterion: 'Language of instruction',
            russia: 'Russian after a built-in preparatory year, or English depending on the programme',
            other: 'Turkish for most programmes, English in certain, often fee-paying, tracks',
          },
          {
            criterion: 'Accommodation',
            russia: 'University dormitory booked in advance, €30 to €90 per month',
            other: 'Public dormitories are in high demand, otherwise the private rental market is far more expensive, especially in Istanbul',
          },
          {
            criterion: 'Monthly cost of living',
            russia: 'From €140 to €260 depending on the city',
            other: 'Noticeably higher in the large metropolitan areas, and exposed to strong inflation',
          },
          {
            criterion: 'Intake calendar',
            russia: 'September intake plus a complementary February session',
            other: 'A single main intake, aligned with the admission exam calendar',
          },
          {
            criterion: 'Degree recognition',
            russia: 'Russian state degree, with an established equivalence procedure in Tunisia',
            other: 'Turkish degree, with an equally established recognition procedure',
          },
        ],
        disclaimer:
          'The Russian figures are those charged by our partner universities. On the Turkish side, the gap between state and private universities is considerable and rates change quickly: always check with the institution you are targeting before making any decision.',
        otherWinsTitle: 'Where Türkiye remains the better choice',
        otherWins: [
          'If cultural and religious proximity is your number one criterion, adaptation is almost immediate',
          'If you want to come home often: the flight from Tunis is short and cheap',
          'If you already speak Turkish, or if learning Turkish motivates you more than Russian',
          'If you obtain a Turkish scholarship, which completely changes the budget equation',
        ],
        russiaWinsTitle: 'Where Russia has the edge',
        russiaWins: [
          'No entrance exam to prepare and no ranking to face: admission is decided on your school record',
          'A published public rate, identical for everyone, with no public-private gap',
          'A university dormitory guaranteed and booked before departure',
          'A lower and more stable cost of living, especially outside the two capitals',
          'A February session that avoids losing a whole year',
        ],
        verdictTitle: 'How to decide',
        verdict:
          'If you have the time and the level to prepare for the YÖS, and you are targeting a Turkish state university, Türkiye is a very good option. If you want predictable admission, with no entrance exam, a budget announced in advance and guaranteed housing, Russia is the safer route.',
        faq: [
          {
            question: 'Do I need to sit the YÖS to study in Russia?',
            answer:
              'No. There is no Russian equivalent of the YÖS at our partner universities: admission is based on your school record, with your transcripts and your baccalaureate.',
          },
          {
            question: 'Is Türkiye cheaper than Russia?',
            answer:
              'It depends entirely on the university. A Turkish state university can be cheaper, a Turkish private university considerably more expensive. On total budget, including housing and cost of living, Russia generally remains more predictable.',
          },
          {
            question: 'Can I find halal food in Russia?',
            answer:
              'Yes, without difficulty in the large cities and in university towns that host international students. Kazan, the capital of Tatarstan, has a large Muslim population and a very wide offering.',
          },
        ],
        keywords: [
          'study in Russia or Turkey', 'YÖS exam', 'Russia Turkey study comparison',
          'study in Turkey Tunisian', 'medicine Turkey or Russia', 'cost of studying in Turkey',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا أو في تركيا: مقارنة صريحة للطالب التونسي | RusStudy',
        description:
          'الرسوم، امتحان اليوس، اللغة، كلفة المعيشة في إسطنبول والاعتراف بالشهادة: مقارنة واقعية بين روسيا وتركيا بالنسبة إلى طالب تونسي.',
        h1: 'الدراسة في روسيا أم في تركيا؟',
        summary: 'وجهتان متقاربتان ثقافيًا، ومنطقان مختلفان تمامًا في القبول.',
        intro:
          'تستقطب تركيا عددًا كبيرًا من طلبة المغرب العربي، والسبب مفهوم: القرب الثقافي حقيقي، والجالية كبيرة، والرحلة قصيرة. لكن الانتقاء عند الدخول والفاتورة الفعلية يخبّئان مفاجآت. إليك المقارنة، بما في ذلك المواضع التي تتفوق فيها تركيا بوضوح.',
        tableTitle: 'المقارنة، معيارًا بمعيار',
        columns: { criterion: 'المعيار', russia: 'روسيا', other: 'تركيا' },
        rows: [
          {
            criterion: 'الرسوم الدراسية السنوية',
            russia: 'من 2200 إلى 3500 أورو حسب الاختصاص، تعريفة عمومية معلنة',
            other: 'متغيّرة جدًا: الجامعات الحكومية أرخص بكثير من الخاصة، حيث تبلغ رسوم الطب مبالغ مرتفعة',
          },
          {
            criterion: 'طريقة الانتقاء',
            russia: 'قبول على أساس الملف الدراسي، دون امتحان دخول',
            other: 'امتحان اليوس مطلوب في جامعات عديدة، مع ترتيب وحصص حسب الجنسية',
          },
          {
            criterion: 'لغة التدريس',
            russia: 'الروسية بعد سنة تحضيرية مدمجة، أو الإنجليزية حسب المسالك',
            other: 'التركية في أغلب المسالك، والإنجليزية في برامج معيّنة غالبًا بمقابل',
          },
          {
            criterion: 'السكن',
            russia: 'إقامة جامعية محجوزة مسبقًا، من 30 إلى 90 أورو شهريًا',
            other: 'الإقامات العمومية عليها طلب كبير، وإلا فسوق الكراء الخاص أغلى بكثير، خاصة في إسطنبول',
          },
          {
            criterion: 'كلفة المعيشة الشهرية',
            russia: 'من 140 إلى 260 أورو حسب المدينة',
            other: 'أعلى بشكل ملحوظ في المدن الكبرى، ومعرّضة لتضخّم قوي',
          },
          {
            criterion: 'رزنامة الدخول الجامعي',
            russia: 'دخول سبتمبر ودورة تكميلية في فيفري',
            other: 'دخول رئيسي وحيد، مرتبط برزنامة امتحانات القبول',
          },
          {
            criterion: 'الاعتراف بالشهادة',
            russia: 'شهادة دولة روسية، مع إجراء معادلة معتمد في تونس',
            other: 'شهادة تركية، مع إجراء اعتراف معتمد كذلك',
          },
        ],
        disclaimer:
          'المبالغ الخاصة بروسيا هي المعتمدة لدى جامعاتنا الشريكة. أما في تركيا فالفوارق بين الجامعات الحكومية والخاصة كبيرة جدًا والتعريفات تتغيّر بسرعة: تحقّق دائمًا لدى المؤسسة المستهدفة قبل أي قرار.',
        otherWinsTitle: 'حيث تبقى تركيا الخيار الأفضل',
        otherWins: [
          'إذا كان القرب الثقافي والديني معيارك الأول، فالتأقلم يكون شبه فوري',
          'إذا كنت تريد العودة كثيرًا: الرحلة من تونس قصيرة وغير مكلفة',
          'إذا كنت تتقن التركية بالفعل، أو إذا كان تعلّم التركية يحمّسك أكثر من الروسية',
          'إذا تحصّلت على منحة تركية، فذلك يقلب المعادلة المالية رأسًا على عقب',
        ],
        russiaWinsTitle: 'حيث تتفوّق روسيا',
        russiaWins: [
          'لا امتحان دخول تحضّر له ولا ترتيب تواجهه: القبول يُحسم بالملف الدراسي',
          'تعريفة عمومية معلنة، واحدة للجميع، دون فارق بين عام وخاص',
          'سكن جامعي مضمون ومحجوز قبل السفر',
          'كلفة معيشة أدنى وأكثر استقرارًا، خاصة خارج العاصمتين',
          'دورة فيفري التي تجنّبك خسارة سنة كاملة',
        ],
        verdictTitle: 'كيف تحسم اختيارك',
        verdict:
          'إذا كان لديك الوقت والمستوى لتحضير اليوس، وكنت تستهدف جامعة حكومية تركية، فتركيا خيار جيد جدًا. أما إذا كنت تبحث عن قبول قابل للتوقّع، دون امتحان دخول، بميزانية معلنة مسبقًا وسكن مضمون، فروسيا هي الطريق الأكثر أمانًا.',
        faq: [
          {
            question: 'هل يجب اجتياز اليوس للدراسة في روسيا؟',
            answer:
              'لا. لا يوجد مقابل روسي لليوس في جامعاتنا الشريكة: القبول يتم على أساس الملف الدراسي، بكشوف أعدادك وشهادة الباكالوريا.',
          },
          {
            question: 'هل تركيا أرخص من روسيا؟',
            answer:
              'ذلك يتوقف كليًا على الجامعة. قد تكون جامعة حكومية تركية أرخص، وجامعة خاصة تركية أغلى بكثير. وعلى مستوى الميزانية الجملية، بما فيها السكن وكلفة المعيشة، تبقى روسيا عمومًا أكثر قابلية للتوقّع.',
          },
          {
            question: 'هل أجد طعامًا حلالًا في روسيا؟',
            answer:
              'نعم، ودون صعوبة في المدن الكبرى والمدن الجامعية التي تستقبل طلبة أجانب. وقازان، عاصمة تتارستان، بها جالية مسلمة كبيرة وعرض واسع جدًا.',
          },
        ],
        keywords: [
          'الدراسة في روسيا أو تركيا', 'امتحان اليوس', 'مقارنة الدراسة روسيا تركيا',
          'الدراسة في تركيا للتونسيين', 'الطب في تركيا أو روسيا', 'كلفة الدراسة في تركيا',
        ],
      },
      ru: {
        title: 'Учёба в России или в Турции: честное сравнение для тунисского абитуриента | RusStudy',
        description:
          'Стоимость, экзамен YÖS, язык, расходы на жизнь в Стамбуле и признание диплома: фактическое сравнение России и Турции для студента из Туниса.',
        h1: 'Учиться в России или в Турции?',
        summary: 'Два близких по культуре направления и две совершенно разные логики приёма.',
        intro:
          'Турция привлекает многих студентов из Магриба, и это понятно: культурная близость реальна, диаспора большая, перелёт короткий. Но отбор при поступлении и реальный счёт готовят сюрпризы. Вот сравнение — включая то, в чём Турция явно выигрывает.',
        tableTitle: 'Сравнение по каждому критерию',
        columns: { criterion: 'Критерий', russia: 'Россия', other: 'Турция' },
        rows: [
          {
            criterion: 'Стоимость обучения в год',
            russia: 'От 2 200 до 3 500 € в зависимости от направления, открытый прайс',
            other: 'Очень по-разному: государственные вузы значительно дешевле частных, где медицина стоит дорого',
          },
          {
            criterion: 'Способ отбора',
            russia: 'Зачисление по школьным документам, без вступительного экзамена',
            other: 'Во многих вузах требуется экзамен YÖS с рейтингом и квотами по гражданству',
          },
          {
            criterion: 'Язык обучения',
            russia: 'Русский после встроенного подготовительного года либо английский на части программ',
            other: 'Турецкий на большинстве программ, английский — на отдельных, часто платных',
          },
          {
            criterion: 'Жильё',
            russia: 'Место в общежитии, забронированное заранее, 30–90 € в месяц',
            other: 'Государственные общежития в дефиците, иначе частная аренда заметно дороже, особенно в Стамбуле',
          },
          {
            criterion: 'Расходы на жизнь в месяц',
            russia: 'От 140 до 260 € в зависимости от города',
            other: 'Заметно выше в крупных городах и подвержены сильной инфляции',
          },
          {
            criterion: 'Календарь набора',
            russia: 'Сентябрьский набор и дополнительная февральская сессия',
            other: 'Один основной набор, привязанный к расписанию вступительных экзаменов',
          },
          {
            criterion: 'Признание диплома',
            russia: 'Диплом государственного образца, установленная процедура признания в Тунисе',
            other: 'Турецкий диплом, процедура признания также установлена',
          },
        ],
        disclaimer:
          'Суммы по России — это фактические цены наших вузов-партнёров. По Турции разрыв между государственными и частными университетами огромен, а тарифы быстро меняются: обязательно уточняйте в конкретном вузе до принятия решения.',
        otherWinsTitle: 'Где Турция остаётся лучшим выбором',
        otherWins: [
          'Если культурная и религиозная близость — ваш критерий номер один, адаптация почти мгновенная',
          'Если вы хотите часто бывать дома: перелёт из Туниса короткий и недорогой',
          'Если вы уже владеете турецким или изучать турецкий вам интереснее, чем русский',
          'Если вы получили турецкую стипендию — она полностью меняет бюджетное уравнение',
        ],
        russiaWinsTitle: 'Где выигрывает Россия',
        russiaWins: [
          'Не нужно готовиться к вступительному экзамену и бороться за место в рейтинге: решает школьный аттестат',
          'Открытый прайс, одинаковый для всех, без разрыва между государственным и частным',
          'Место в общежитии гарантировано и забронировано до отъезда',
          'Более низкие и более стабильные расходы на жизнь, особенно за пределами двух столиц',
          'Февральская сессия, позволяющая не потерять целый год',
        ],
        verdictTitle: 'Как выбрать',
        verdict:
          'Если у вас есть время и уровень для подготовки к YÖS и вы нацелены на турецкий государственный вуз, Турция — очень хороший вариант. Если вам нужен предсказуемый приём без вступительного экзамена, заранее объявленный бюджет и гарантированное жильё, надёжнее Россия.',
        faq: [
          {
            question: 'Нужно ли сдавать YÖS для учёбы в России?',
            answer:
              'Нет. В наших вузах-партнёрах российского аналога YÖS не существует: зачисление идёт по школьным документам — аттестату и выпискам оценок.',
          },
          {
            question: 'Турция дешевле России?',
            answer:
              'Всё зависит от вуза. Турецкий государственный университет может оказаться дешевле, частный — значительно дороже. По совокупному бюджету с жильём и расходами на жизнь Россия обычно остаётся предсказуемее.',
          },
          {
            question: 'Можно ли найти халяльную еду в России?',
            answer:
              'Да, без труда в крупных городах и в университетских центрах, принимающих иностранных студентов. В Казани, столице Татарстана, большая мусульманская община и очень широкий выбор.',
          },
        ],
        keywords: [
          'учёба в России или Турции', 'экзамен YÖS', 'сравнение учёбы Россия Турция',
          'учёба в Турции для тунисцев', 'медицина Турция или Россия', 'стоимость учёбы в Турции',
        ],
      },
    },
  },
  {
    slug: 'russie-vs-allemagne',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: "Étudier en Russie ou en Allemagne : Studienkolleg, compte bloqué et sélection | RusStudy",
        description:
          "Gratuité apparente, Studienkolleg obligatoire, compte bloqué exigé au visa et numerus clausus en médecine : la comparaison honnête entre la Russie et l'Allemagne pour un bachelier tunisien.",
        h1: 'Étudier en Russie ou en Allemagne ?',
        summary: "La gratuité allemande est réelle, mais elle ne dit pas tout du budget ni du parcours d'accès.",
        intro:
          "« En Allemagne, les études sont gratuites. » La phrase est vraie dans la plupart des Länder, et pourtant le projet échoue souvent — non pas sur les frais de scolarité, mais sur le Studienkolleg, le niveau d'allemand exigé et le compte bloqué à constituer avant même le visa. Voici la comparaison complète.",
        tableTitle: 'Le comparatif, critère par critère',
        columns: { criterion: 'Critère', russia: 'Russie', other: 'Allemagne' },
        rows: [
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière',
            other: "Souvent nuls dans les universités publiques, avec une contribution semestrielle ; certains Länder facturent les étudiants hors UE",
          },
          {
            criterion: 'Accès direct après le bac tunisien',
            russia: 'Oui, admission directe sur dossier',
            other: 'Généralement non : une année de Studienkolleg suivie d’un examen final est requise avant l’université',
          },
          {
            criterion: "Langue d'enseignement",
            russia: 'Russe après une année préparatoire intégrée au cursus',
            other: 'Allemand à un niveau élevé attesté avant l’inscription ; cursus en anglais surtout en master',
          },
          {
            criterion: 'Preuve de ressources au visa',
            russia: 'Non exigée sous forme de compte bloqué',
            other: 'Compte bloqué à alimenter pour couvrir une année complète, condition sine qua non du visa',
          },
          {
            criterion: 'Accès à la médecine',
            russia: 'Admission sur dossier scolaire, sans concours',
            other: 'Numerus clausus très sélectif, avec des places hors UE en nombre limité',
          },
          {
            criterion: 'Logement',
            russia: 'Résidence universitaire pré-réservée, de 30 à 90 € par mois',
            other: 'Pénurie chronique dans les villes universitaires, délais d’attente longs en résidence',
          },
          {
            criterion: 'Reconnaissance du diplôme',
            russia: "Diplôme d'État russe, procédure d'équivalence établie en Tunisie",
            other: 'Diplôme allemand, reconnaissance très large en Europe',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Côté Allemagne, le montant du compte bloqué, les contributions semestrielles et les règles du Studienkolleg varient selon le Land et sont révisés régulièrement : vérifiez auprès du consulat et de l'établissement visé.",
        otherWinsTitle: 'Là où l’Allemagne reste le meilleur choix',
        otherWins: [
          "Si vous visez une carrière en Allemagne ou dans l'Union européenne, le diplôme y est directement exploitable",
          'Si votre famille peut immobiliser la somme du compte bloqué pendant toute une année',
          'Si vous avez déjà un bon niveau d’allemand, ou le temps de l’atteindre avant de partir',
          "Si vous acceptez l'année de Studienkolleg comme un investissement et non comme une année perdue",
        ],
        russiaWinsTitle: 'Là où la Russie prend l’avantage',
        russiaWins: [
          "Aucun compte bloqué à constituer : c'est souvent le point qui bloque réellement les dossiers vers l'Allemagne",
          "L'accès à la médecine sans numerus clausus ni concours éliminatoire",
          'Une admission directe après le baccalauréat, sans année de mise à niveau imposée',
          'Un logement universitaire garanti, là où la pénurie allemande est un vrai problème',
          'Une session de février en complément de la rentrée de septembre',
        ],
        verdictTitle: 'Comment trancher',
        verdict:
          "Faites d'abord le test du compte bloqué : si votre famille peut immobiliser la somme exigée pendant un an, l'Allemagne mérite d'être tentée, surtout hors médecine. Si ce n'est pas le cas, ou si vous visez la médecine, la Russie offre le même sérieux académique sans cette barrière d'entrée financière.",
        faq: [
          {
            question: "Le Studienkolleg existe-t-il en Russie ?",
            answer:
              "L'année préparatoire russe joue un rôle comparable, mais avec une différence majeure : elle porte sur la langue et les matières de spécialité, et elle fait partie du parcours convenu dès l'admission, sans examen d'entrée à réussir en amont.",
          },
          {
            question: "Combien faut-il déposer sur un compte bloqué allemand ?",
            answer:
              "Le montant correspond à une année de subsistance et il est révisé régulièrement par les autorités allemandes. Consultez le consulat d'Allemagne en Tunisie pour le chiffre en vigueur au moment de votre demande : c'est une condition de délivrance du visa.",
          },
          {
            question: "L'Allemagne est-elle vraiment gratuite ?",
            answer:
              "Les frais de scolarité sont nuls dans la plupart des universités publiques, mais il reste une contribution semestrielle, et surtout le coût de la vie allemand, nettement supérieur au coût de la vie russe. La gratuité porte sur les frais, pas sur le budget total.",
          },
        ],
        keywords: [
          'étudier en Russie ou en Allemagne', 'Studienkolleg tunisien', 'compte bloqué Allemagne',
          'numerus clausus médecine Allemagne', 'comparatif études Russie Allemagne', 'études gratuites Allemagne',
        ],
      },
      en: {
        title: 'Studying in Russia or Germany: Studienkolleg, Blocked Account and Selection | RusStudy',
        description:
          'Apparent tuition-free study, the compulsory Studienkolleg, the blocked account required for the visa and the numerus clausus in medicine: an honest comparison between Russia and Germany.',
        h1: 'Study in Russia or in Germany?',
        summary: 'German tuition-free study is real, but it does not tell the whole story of the budget or the route in.',
        intro:
          '"Studying in Germany is free." That is true in most Länder, and yet the plan often falls apart — not on tuition, but on the Studienkolleg, the level of German required and the blocked account you must fund before you even get the visa. Here is the full comparison.',
        tableTitle: 'The comparison, criterion by criterion',
        columns: { criterion: 'Criterion', russia: 'Russia', other: 'Germany' },
        rows: [
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme',
            other: 'Often none at public universities, with a semester contribution; some Länder do charge non-EU students',
          },
          {
            criterion: 'Direct entry after the Tunisian baccalaureate',
            russia: 'Yes, direct admission on your school record',
            other: 'Generally not: a Studienkolleg year followed by a final exam is required before university',
          },
          {
            criterion: 'Language of instruction',
            russia: 'Russian after a preparatory year built into the programme',
            other: 'German at a high certified level before enrolment; English-taught tracks mostly at master level',
          },
          {
            criterion: 'Proof of funds for the visa',
            russia: 'Not required in the form of a blocked account',
            other: 'A blocked account covering a full year must be funded — a non-negotiable visa condition',
          },
          {
            criterion: 'Access to medicine',
            russia: 'Admission on school record, with no entrance competition',
            other: 'A highly selective numerus clausus, with a limited number of non-EU places',
          },
          {
            criterion: 'Accommodation',
            russia: 'University dormitory booked in advance, €30 to €90 per month',
            other: 'Chronic shortage in university cities, with long waiting times for halls',
          },
          {
            criterion: 'Degree recognition',
            russia: 'Russian state degree, with an established equivalence procedure in Tunisia',
            other: 'German degree, very widely recognised across Europe',
          },
        ],
        disclaimer:
          'The Russian figures are those charged by our partner universities. On the German side, the blocked account amount, semester contributions and Studienkolleg rules vary by Land and are revised regularly: check with the consulate and the institution you are targeting.',
        otherWinsTitle: 'Where Germany remains the better choice',
        otherWins: [
          'If you are aiming for a career in Germany or the European Union, the degree is directly usable there',
          'If your family can tie up the blocked-account sum for a full year',
          'If you already have a good level of German, or the time to reach it before leaving',
          'If you accept the Studienkolleg year as an investment rather than a lost year',
        ],
        russiaWinsTitle: 'Where Russia has the edge',
        russiaWins: [
          'No blocked account to fund — this is often the point that actually stops applications to Germany',
          'Access to medicine with no numerus clausus and no eliminating competition',
          'Direct admission after the baccalaureate, with no imposed bridging year',
          'Guaranteed university accommodation, where the German shortage is a genuine problem',
          'A February session alongside the September intake',
        ],
        verdictTitle: 'How to decide',
        verdict:
          'Start with the blocked-account test: if your family can tie up the required sum for a year, Germany is worth trying, especially outside medicine. If not, or if you are aiming for medicine, Russia offers the same academic seriousness without that financial barrier to entry.',
        faq: [
          {
            question: 'Does a Studienkolleg exist in Russia?',
            answer:
              'The Russian preparatory year plays a comparable role, but with one major difference: it covers the language and the subject-specific groundwork, and it is part of the path agreed at admission, with no entrance exam to pass beforehand.',
          },
          {
            question: 'How much must be deposited in a German blocked account?',
            answer:
              'The amount corresponds to one year of living costs and is revised regularly by the German authorities. Check with the German consulate in Tunisia for the figure in force when you apply: it is a condition for the visa to be issued.',
          },
          {
            question: 'Is Germany really free?',
            answer:
              'Tuition is nil at most public universities, but a semester contribution remains, and above all the German cost of living is far higher than the Russian one. What is free is the tuition, not the total budget.',
          },
        ],
        keywords: [
          'study in Russia or Germany', 'Studienkolleg Tunisian', 'German blocked account',
          'numerus clausus medicine Germany', 'Russia Germany study comparison', 'free study Germany',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا أو في ألمانيا: الشتودينكوليغ والحساب المجمّد والانتقاء | RusStudy',
        description:
          'مجانية ظاهرية، سنة شتودينكوليغ إجبارية، حساب مجمّد مطلوب للتأشيرة وعدد محدود في الطب: مقارنة صريحة بين روسيا وألمانيا لحامل الباكالوريا التونسية.',
        h1: 'الدراسة في روسيا أم في ألمانيا؟',
        summary: 'المجانية الألمانية حقيقية، لكنها لا تعكس كامل الميزانية ولا مسار الدخول.',
        intro:
          '«في ألمانيا الدراسة مجانية.» العبارة صحيحة في أغلب الولايات، ومع ذلك يفشل المشروع كثيرًا — لا بسبب الرسوم، بل بسبب سنة الشتودينكوليغ ومستوى الألمانية المطلوب والحساب المجمّد الذي يجب توفيره قبل التأشيرة أصلًا. إليك المقارنة الكاملة.',
        tableTitle: 'المقارنة، معيارًا بمعيار',
        columns: { criterion: 'المعيار', russia: 'روسيا', other: 'ألمانيا' },
        rows: [
          {
            criterion: 'الرسوم الدراسية السنوية',
            russia: 'من 2200 إلى 3500 أورو حسب الاختصاص',
            other: 'منعدمة غالبًا في الجامعات العمومية مع مساهمة سداسية؛ وبعض الولايات تفرض رسومًا على غير الأوروبيين',
          },
          {
            criterion: 'الدخول المباشر بعد الباكالوريا التونسية',
            russia: 'نعم، قبول مباشر على أساس الملف',
            other: 'غالبًا لا: سنة شتودينكوليغ متبوعة بامتحان نهائي مطلوبة قبل الجامعة',
          },
          {
            criterion: 'لغة التدريس',
            russia: 'الروسية بعد سنة تحضيرية مدمجة في المسار',
            other: 'الألمانية بمستوى عالٍ مثبت قبل التسجيل؛ والمسالك بالإنجليزية أساسًا في الماجستير',
          },
          {
            criterion: 'إثبات الموارد للتأشيرة',
            russia: 'غير مطلوب في شكل حساب مجمّد',
            other: 'حساب مجمّد يغطي سنة كاملة، وهو شرط لا غنى عنه للتأشيرة',
          },
          {
            criterion: 'الولوج إلى الطب',
            russia: 'قبول على أساس الملف الدراسي، دون مناظرة',
            other: 'عدد محدود انتقائي جدًا، مع مقاعد قليلة لغير الأوروبيين',
          },
          {
            criterion: 'السكن',
            russia: 'إقامة جامعية محجوزة مسبقًا، من 30 إلى 90 أورو شهريًا',
            other: 'نقص مزمن في المدن الجامعية وقوائم انتظار طويلة في الإقامات',
          },
          {
            criterion: 'الاعتراف بالشهادة',
            russia: 'شهادة دولة روسية، مع إجراء معادلة معتمد في تونس',
            other: 'شهادة ألمانية، معترف بها على نطاق واسع جدًا في أوروبا',
          },
        ],
        disclaimer:
          'المبالغ الخاصة بروسيا هي المعتمدة لدى جامعاتنا الشريكة. أما في ألمانيا فمبلغ الحساب المجمّد والمساهمات السداسية وقواعد الشتودينكوليغ تختلف حسب الولاية وتُراجَع دوريًا: تحقّق لدى القنصلية والمؤسسة المستهدفة.',
        otherWinsTitle: 'حيث تبقى ألمانيا الخيار الأفضل',
        otherWins: [
          'إذا كنت تستهدف مسارًا مهنيًا في ألمانيا أو الاتحاد الأوروبي، فالشهادة قابلة للاستعمال مباشرة هناك',
          'إذا كان بإمكان عائلتك تجميد مبلغ الحساب المجمّد طيلة سنة كاملة',
          'إذا كان مستواك في الألمانية جيدًا بالفعل، أو لديك الوقت لبلوغه قبل السفر',
          'إذا قبلت سنة الشتودينكوليغ كاستثمار لا كسنة ضائعة',
        ],
        russiaWinsTitle: 'حيث تتفوّق روسيا',
        russiaWins: [
          'لا حساب مجمّد يُطلب منك: وهذه غالبًا النقطة التي تُعطّل فعليًا الملفات نحو ألمانيا',
          'الولوج إلى الطب دون عدد محدود ودون مناظرة إقصائية',
          'قبول مباشر بعد الباكالوريا، دون سنة تأهيل مفروضة',
          'سكن جامعي مضمون، في حين أن النقص الألماني مشكل حقيقي',
          'دورة فيفري إضافة إلى دخول سبتمبر',
        ],
        verdictTitle: 'كيف تحسم اختيارك',
        verdict:
          'ابدأ باختبار الحساب المجمّد: إن كان بوسع عائلتك تجميد المبلغ المطلوب سنة كاملة، فألمانيا تستحق المحاولة، خاصة خارج الطب. وإن لم يكن الأمر كذلك، أو كنت تستهدف الطب، فروسيا توفّر الجدية الأكاديمية نفسها دون هذا الحاجز المالي عند الدخول.',
        faq: [
          {
            question: 'هل يوجد شتودينكوليغ في روسيا؟',
            answer:
              'السنة التحضيرية الروسية تؤدي دورًا مشابهًا، لكن مع فارق جوهري: تتناول اللغة ومواد الاختصاص، وهي جزء من المسار المتفق عليه منذ القبول، دون امتحان دخول يجب النجاح فيه مسبقًا.',
          },
          {
            question: 'كم يجب إيداعه في الحساب المجمّد الألماني؟',
            answer:
              'المبلغ يقابل سنة من نفقات المعيشة ويُراجَع دوريًا من السلطات الألمانية. راجع القنصلية الألمانية بتونس لمعرفة الرقم الساري وقت تقديم ملفك: فهو شرط لمنح التأشيرة.',
          },
          {
            question: 'هل ألمانيا مجانية فعلًا؟',
            answer:
              'الرسوم منعدمة في أغلب الجامعات العمومية، لكن تبقى مساهمة سداسية، وقبل كل شيء كلفة المعيشة الألمانية الأعلى بكثير من نظيرتها الروسية. المجانية تخص الرسوم لا الميزانية الجملية.',
          },
        ],
        keywords: [
          'الدراسة في روسيا أو ألمانيا', 'شتودينكوليغ للتونسيين', 'الحساب المجمّد ألمانيا',
          'الطب في ألمانيا عدد محدود', 'مقارنة الدراسة روسيا ألمانيا', 'الدراسة المجانية في ألمانيا',
        ],
      },
      ru: {
        title: 'Учёба в России или в Германии: Studienkolleg, блокированный счёт и отбор | RusStudy',
        description:
          'Кажущаяся бесплатность, обязательный Studienkolleg, блокированный счёт для визы и numerus clausus в медицине: честное сравнение России и Германии для тунисского абитуриента.',
        h1: 'Учиться в России или в Германии?',
        summary: 'Бесплатность в Германии реальна, но она не описывает ни весь бюджет, ни путь поступления.',
        intro:
          '«В Германии учёба бесплатная.» В большинстве земель это правда, и всё же план часто рушится — не из-за платы за обучение, а из-за Studienkolleg, требуемого уровня немецкого и блокированного счёта, который нужно пополнить ещё до визы. Вот полное сравнение.',
        tableTitle: 'Сравнение по каждому критерию',
        columns: { criterion: 'Критерий', russia: 'Россия', other: 'Германия' },
        rows: [
          {
            criterion: 'Стоимость обучения в год',
            russia: 'От 2 200 до 3 500 € в зависимости от направления',
            other: 'Чаще всего отсутствует в государственных вузах при семестровом взносе; в отдельных землях с неевропейцев плату берут',
          },
          {
            criterion: 'Прямое поступление после тунисского бакалавриата',
            russia: 'Да, прямое зачисление по школьным документам',
            other: 'Как правило нет: сначала год Studienkolleg и итоговый экзамен',
          },
          {
            criterion: 'Язык обучения',
            russia: 'Русский после подготовительного года, встроенного в программу',
            other: 'Немецкий на высоком подтверждённом уровне до зачисления; программы на английском — в основном в магистратуре',
          },
          {
            criterion: 'Подтверждение средств для визы',
            russia: 'В форме блокированного счёта не требуется',
            other: 'Блокированный счёт на полный год — обязательное условие выдачи визы',
          },
          {
            criterion: 'Доступ к медицине',
            russia: 'Зачисление по школьным документам, без вступительного конкурса',
            other: 'Крайне отборочный numerus clausus с ограниченным числом мест для неевропейцев',
          },
          {
            criterion: 'Жильё',
            russia: 'Место в общежитии, забронированное заранее, 30–90 € в месяц',
            other: 'Хронический дефицит в университетских городах, долгие очереди в общежития',
          },
          {
            criterion: 'Признание диплома',
            russia: 'Диплом государственного образца, установленная процедура признания в Тунисе',
            other: 'Немецкий диплом, очень широко признаётся в Европе',
          },
        ],
        disclaimer:
          'Суммы по России — это фактические цены наших вузов-партнёров. По Германии размер блокированного счёта, семестровые взносы и правила Studienkolleg зависят от земли и регулярно пересматриваются: уточняйте в консульстве и в выбранном вузе.',
        otherWinsTitle: 'Где Германия остаётся лучшим выбором',
        otherWins: [
          'Если вы нацелены на карьеру в Германии или в Евросоюзе, диплом там применим напрямую',
          'Если ваша семья может заморозить сумму блокированного счёта на целый год',
          'Если у вас уже хороший немецкий или есть время его освоить до отъезда',
          'Если вы воспринимаете год Studienkolleg как вложение, а не как потерянный год',
        ],
        russiaWinsTitle: 'Где выигрывает Россия',
        russiaWins: [
          'Никакого блокированного счёта — именно это чаще всего и останавливает заявки в Германию',
          'Доступ к медицине без numerus clausus и без отсеивающего конкурса',
          'Прямое зачисление после бакалавриата, без обязательного подготовительного года в чужом формате',
          'Гарантированное общежитие, тогда как немецкий дефицит жилья — реальная проблема',
          'Февральская сессия в дополнение к сентябрьскому набору',
        ],
        verdictTitle: 'Как выбрать',
        verdict:
          'Начните с проверки блокированного счёта: если семья может заморозить требуемую сумму на год, Германию стоит попробовать, особенно вне медицины. Если нет или если вы нацелены на медицину, Россия даёт ту же академическую серьёзность без этого финансового барьера на входе.',
        faq: [
          {
            question: 'Существует ли Studienkolleg в России?',
            answer:
              'Российский подготовительный год играет сопоставимую роль, но с важным отличием: он посвящён языку и профильным предметам и входит в согласованный при зачислении маршрут, без вступительного экзамена, который нужно сдать заранее.',
          },
          {
            question: 'Сколько нужно положить на немецкий блокированный счёт?',
            answer:
              'Сумма соответствует году проживания и регулярно пересматривается немецкими властями. Уточните в посольстве Германии в Тунисе действующую на момент подачи цифру: это условие выдачи визы.',
          },
          {
            question: 'Германия действительно бесплатная?',
            answer:
              'Плата за обучение в большинстве государственных вузов отсутствует, но остаётся семестровый взнос и, главное, немецкая стоимость жизни, заметно превышающая российскую. Бесплатно обучение, а не весь бюджет.',
          },
        ],
        keywords: [
          'учёба в России или Германии', 'Studienkolleg для тунисцев', 'блокированный счёт Германия',
          'numerus clausus медицина Германия', 'сравнение учёбы Россия Германия', 'бесплатная учёба в Германии',
        ],
      },
    },
  },
  {
    slug: 'russie-vs-italie',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: "Étudier en Russie ou en Italie : concours IMAT, frais selon revenus et médecine | RusStudy",
        description:
          "Concours IMAT, frais calculés sur les revenus, pré-inscription Universitaly et déclaration de valeur : la comparaison honnête entre la Russie et l'Italie pour un bachelier tunisien.",
        h1: 'Étudier en Russie ou en Italie ?',
        summary: "L'Italie peut coûter très peu — à condition de franchir d'abord un concours d'entrée très disputé.",
        intro:
          "L'Italie séduit de plus en plus de bacheliers tunisiens, notamment pour la médecine enseignée en anglais. Les frais y sont souvent modestes, parfois nuls. Mais tout se joue sur un concours d'entrée national, et sur une chaîne administrative — pré-inscription, déclaration de valeur, attestation de revenus — qu'il vaut mieux connaître avant de s'engager.",
        tableTitle: 'Le comparatif, critère par critère',
        columns: { criterion: 'Critère', russia: 'Russie', other: 'Italie' },
        rows: [
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière, tarif identique pour tous',
            other: 'Calculés sur les revenus du foyer dans les universités publiques : de très faibles à quelques milliers d’euros',
          },
          {
            criterion: 'Mode de sélection en médecine',
            russia: 'Admission sur dossier scolaire, sans concours',
            other: 'Concours national d’entrée très sélectif, avec un nombre de places strictement contingenté',
          },
          {
            criterion: "Langue d'enseignement",
            russia: 'Russe après une année préparatoire intégrée, ou anglais selon les cursus',
            other: 'Italien pour la majorité des cursus ; quelques filières en anglais, particulièrement demandées',
          },
          {
            criterion: 'Démarches préalables',
            russia: "Dossier envoyé à l'université, puis lettre d'invitation et visa",
            other: 'Pré-inscription en ligne obligatoire, déclaration de valeur du diplôme et attestation de revenus du foyer',
          },
          {
            criterion: 'Logement',
            russia: 'Résidence universitaire pré-réservée, de 30 à 90 € par mois',
            other: 'Places en résidence limitées et attribuées sur critères sociaux, sinon marché privé tendu',
          },
          {
            criterion: 'Coût de la vie mensuel',
            russia: 'De 140 à 260 € selon la ville',
            other: 'Nettement plus élevé, avec de forts écarts entre le Nord et le Sud',
          },
          {
            criterion: 'Reconnaissance du diplôme',
            russia: "Diplôme d'État russe, procédure d'équivalence établie en Tunisie",
            other: 'Diplôme italien, reconnaissance très large en Europe',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Côté Italie, les frais dépendent du barème de revenus de chaque université et les modalités du concours évoluent d'une année à l'autre : vérifiez auprès de l'université visée et du consulat d'Italie avant toute décision.",
        otherWinsTitle: 'Là où l’Italie reste le meilleur choix',
        otherWins: [
          "Si vos revenus familiaux sont modestes, le barème italien peut ramener les frais à presque rien",
          "Si vous visez l'Union européenne, le diplôme italien y circule sans obstacle",
          'Si vous avez le niveau et le temps de préparer sérieusement le concours d’entrée',
          "Si un cursus de médecine enseigné en anglais correspond exactement à votre projet",
        ],
        russiaWinsTitle: 'Là où la Russie prend l’avantage',
        russiaWins: [
          "Pas de concours d'entrée : votre année de terminale ne se joue pas sur une seule épreuve",
          'Un tarif annoncé et fixe, sans dossier de revenus à constituer ni barème à décrypter',
          'Un logement universitaire garanti, sans critère social ni file d’attente',
          "Un coût de la vie nettement inférieur sur toute la durée du cursus",
          'Une session de février, absente du calendrier italien',
        ],
        verdictTitle: 'Comment trancher',
        verdict:
          "Tout dépend de votre rapport au concours. Si vous êtes un bon candidat aux épreuves sur QCM et que vous acceptez le risque de ne pas être classé, l'Italie offre un excellent rapport qualité-prix. Si vous voulez sécuriser votre place plutôt que la jouer sur une matinée d'examen, la Russie est le choix rationnel.",
        faq: [
          {
            question: "Y a-t-il un concours d'entrée en médecine en Russie ?",
            answer:
              "Non, pas dans nos universités partenaires. L'admission repose sur le dossier scolaire. La sélection existe toujours, mais elle se déplace vers la réussite des examens pendant le cursus.",
          },
          {
            question: "Qu'est-ce que la déclaration de valeur ?",
            answer:
              "C'est un document délivré par la représentation diplomatique italienne qui atteste de la valeur de votre diplôme tunisien dans le système italien. La procédure russe d'équivalence est distincte et se traite après le diplôme, pas avant l'inscription.",
          },
          {
            question: "Les frais italiens sont-ils vraiment calculés sur les revenus ?",
            answer:
              "Oui dans les universités publiques, via une attestation de la situation économique du foyer. Le barème diffère d'un établissement à l'autre : demandez-le à l'université visée plutôt que de vous fier à une moyenne nationale.",
          },
        ],
        keywords: [
          'étudier en Russie ou en Italie', 'concours IMAT médecine', 'comparatif études Russie Italie',
          'études Italie tunisien', 'déclaration de valeur diplôme', 'frais université Italie revenus',
        ],
      },
      en: {
        title: 'Studying in Russia or Italy: Entrance Exam, Income-Based Fees and Medicine | RusStudy',
        description:
          'The national entrance exam, income-based fees, Universitaly pre-enrolment and the declaration of value: an honest comparison between Russia and Italy for a Tunisian student.',
        h1: 'Study in Russia or in Italy?',
        summary: 'Italy can cost very little — provided you first clear a fiercely contested entrance exam.',
        intro:
          'Italy appeals to more and more Tunisian school-leavers, particularly for medicine taught in English. Fees there are often modest, sometimes nil. But everything hinges on a national entrance exam, and on an administrative chain — pre-enrolment, declaration of value, proof of household income — that is best understood before committing.',
        tableTitle: 'The comparison, criterion by criterion',
        columns: { criterion: 'Criterion', russia: 'Russia', other: 'Italy' },
        rows: [
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme, the same rate for everyone',
            other: 'Calculated on household income at public universities: from very low to a few thousand euros',
          },
          {
            criterion: 'Selection method in medicine',
            russia: 'Admission on school record, with no entrance competition',
            other: 'A highly selective national entrance exam, with a strictly capped number of places',
          },
          {
            criterion: 'Language of instruction',
            russia: 'Russian after a built-in preparatory year, or English depending on the programme',
            other: 'Italian for most programmes; a few English-taught tracks, in very high demand',
          },
          {
            criterion: 'Prior formalities',
            russia: 'Application sent to the university, then invitation letter and visa',
            other: 'Compulsory online pre-enrolment, declaration of value for your diploma and proof of household income',
          },
          {
            criterion: 'Accommodation',
            russia: 'University dormitory booked in advance, €30 to €90 per month',
            other: 'Limited hall places allocated on social criteria, otherwise a tight private market',
          },
          {
            criterion: 'Monthly cost of living',
            russia: 'From €140 to €260 depending on the city',
            other: 'Noticeably higher, with wide gaps between the North and the South',
          },
          {
            criterion: 'Degree recognition',
            russia: 'Russian state degree, with an established equivalence procedure in Tunisia',
            other: 'Italian degree, very widely recognised across Europe',
          },
        ],
        disclaimer:
          'The Russian figures are those charged by our partner universities. On the Italian side, fees depend on each university income scale and exam arrangements change from year to year: check with the university you are targeting and with the Italian consulate before making any decision.',
        otherWinsTitle: 'Where Italy remains the better choice',
        otherWins: [
          'If your family income is modest, the Italian scale can bring fees down to almost nothing',
          'If you are aiming for the European Union, an Italian degree moves freely there',
          'If you have the level and the time to prepare seriously for the entrance exam',
          'If a medical programme taught in English matches your project exactly',
        ],
        russiaWinsTitle: 'Where Russia has the edge',
        russiaWins: [
          'No entrance exam: your final school year is not decided by a single test',
          'A stated, fixed rate, with no income file to assemble and no scale to decipher',
          'Guaranteed university accommodation, with no social criteria and no waiting list',
          'A markedly lower cost of living for the whole duration of the programme',
          'A February session, which the Italian calendar does not offer',
        ],
        verdictTitle: 'How to decide',
        verdict:
          'It all comes down to how you feel about the exam. If you perform well on multiple-choice tests and accept the risk of not making the ranking, Italy offers excellent value. If you would rather secure your place than stake it on one morning, Russia is the rational choice.',
        faq: [
          {
            question: 'Is there an entrance exam for medicine in Russia?',
            answer:
              'No, not at our partner universities. Admission rests on your school record. Selection still exists, but it shifts to passing the examinations during the programme.',
          },
          {
            question: 'What is the declaration of value?',
            answer:
              'It is a document issued by the Italian diplomatic mission certifying the standing of your Tunisian diploma within the Italian system. The Russian equivalence procedure is separate and is handled after graduation, not before enrolment.',
          },
          {
            question: 'Are Italian fees really based on income?',
            answer:
              'Yes at public universities, through a statement of the household economic situation. The scale differs between institutions: ask the university you are targeting rather than relying on a national average.',
          },
        ],
        keywords: [
          'study in Russia or Italy', 'IMAT medicine entrance exam', 'Russia Italy study comparison',
          'study in Italy Tunisian', 'declaration of value diploma', 'Italian university income-based fees',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا أو في إيطاليا: مناظرة الدخول والرسوم حسب الدخل والطب | RusStudy',
        description:
          'مناظرة الدخول الوطنية، رسوم محتسبة على أساس الدخل، التسجيل الأوّلي عبر الإنترنت وشهادة معادلة القيمة: مقارنة صريحة بين روسيا وإيطاليا لحامل الباكالوريا التونسية.',
        h1: 'الدراسة في روسيا أم في إيطاليا؟',
        summary: 'قد تكون إيطاليا زهيدة الكلفة جدًا — بشرط اجتياز مناظرة دخول شديدة التنافس أولًا.',
        intro:
          'تجذب إيطاليا عددًا متزايدًا من حاملي الباكالوريا التونسية، خاصة لدراسة الطب بالإنجليزية. الرسوم هناك متواضعة غالبًا، بل منعدمة أحيانًا. لكن كل شيء يتوقف على مناظرة دخول وطنية، وعلى سلسلة إدارية — تسجيل أوّلي، شهادة معادلة القيمة، إثبات دخل العائلة — يُستحسن معرفتها قبل الالتزام.',
        tableTitle: 'المقارنة، معيارًا بمعيار',
        columns: { criterion: 'المعيار', russia: 'روسيا', other: 'إيطاليا' },
        rows: [
          {
            criterion: 'الرسوم الدراسية السنوية',
            russia: 'من 2200 إلى 3500 أورو حسب الاختصاص، وتعريفة واحدة للجميع',
            other: 'محتسبة على أساس دخل العائلة في الجامعات العمومية: من ضعيفة جدًا إلى بضعة آلاف أورو',
          },
          {
            criterion: 'طريقة الانتقاء في الطب',
            russia: 'قبول على أساس الملف الدراسي، دون مناظرة',
            other: 'مناظرة دخول وطنية انتقائية جدًا، بعدد مقاعد محدود بدقة',
          },
          {
            criterion: 'لغة التدريس',
            russia: 'الروسية بعد سنة تحضيرية مدمجة، أو الإنجليزية حسب المسالك',
            other: 'الإيطالية في أغلب المسالك؛ وبعض الشعب بالإنجليزية عليها طلب كبير',
          },
          {
            criterion: 'الإجراءات المسبقة',
            russia: 'ملف يُرسل إلى الجامعة، ثم رسالة دعوة وتأشيرة',
            other: 'تسجيل أوّلي إجباري عبر الإنترنت، وشهادة معادلة قيمة الشهادة وإثبات دخل العائلة',
          },
          {
            criterion: 'السكن',
            russia: 'إقامة جامعية محجوزة مسبقًا، من 30 إلى 90 أورو شهريًا',
            other: 'مقاعد الإقامات محدودة وتُسند وفق معايير اجتماعية، وإلا فالسوق الخاص متوتّر',
          },
          {
            criterion: 'كلفة المعيشة الشهرية',
            russia: 'من 140 إلى 260 أورو حسب المدينة',
            other: 'أعلى بكثير، مع فوارق كبيرة بين الشمال والجنوب',
          },
          {
            criterion: 'الاعتراف بالشهادة',
            russia: 'شهادة دولة روسية، مع إجراء معادلة معتمد في تونس',
            other: 'شهادة إيطالية، معترف بها على نطاق واسع جدًا في أوروبا',
          },
        ],
        disclaimer:
          'المبالغ الخاصة بروسيا هي المعتمدة لدى جامعاتنا الشريكة. أما في إيطاليا فالرسوم تتوقف على سلّم الدخل لدى كل جامعة، وصيغ المناظرة تتغيّر من سنة إلى أخرى: تحقّق لدى الجامعة المستهدفة والقنصلية الإيطالية قبل أي قرار.',
        otherWinsTitle: 'حيث تبقى إيطاليا الخيار الأفضل',
        otherWins: [
          'إذا كان دخل عائلتك متواضعًا، فقد يُنزل السلّم الإيطالي الرسوم إلى ما يقارب الصفر',
          'إذا كنت تستهدف الاتحاد الأوروبي، فالشهادة الإيطالية تنتقل فيه دون عوائق',
          'إذا كان لديك المستوى والوقت لتحضير مناظرة الدخول بجدية',
          'إذا كان مسار طب باللغة الإنجليزية يطابق مشروعك تمامًا',
        ],
        russiaWinsTitle: 'حيث تتفوّق روسيا',
        russiaWins: [
          'لا مناظرة دخول: سنة الباكالوريا لا تُحسم في اختبار واحد',
          'تعريفة معلنة وثابتة، دون ملف دخل تُعدّه ولا سلّم تفكّ رموزه',
          'سكن جامعي مضمون، دون معيار اجتماعي ولا قائمة انتظار',
          'كلفة معيشة أدنى بوضوح طيلة مدة الدراسة',
          'دورة فيفري، وهي غائبة عن الرزنامة الإيطالية',
        ],
        verdictTitle: 'كيف تحسم اختيارك',
        verdict:
          'كل شيء يتوقف على علاقتك بالمناظرة. إن كنت قويًا في اختبارات الأسئلة متعددة الخيارات وتقبل احتمال عدم الترتيب، فإيطاليا تقدّم جودة ممتازة مقابل الكلفة. وإن كنت تفضّل تأمين مقعدك بدل المراهنة عليه في صبيحة امتحان واحدة، فروسيا هي الخيار العقلاني.',
        faq: [
          {
            question: 'هل توجد مناظرة دخول للطب في روسيا؟',
            answer:
              'لا، ليس في جامعاتنا الشريكة. القبول يقوم على الملف الدراسي. الانتقاء موجود دائمًا لكنه ينتقل إلى النجاح في الامتحانات أثناء الدراسة.',
          },
          {
            question: 'ما هي شهادة معادلة القيمة؟',
            answer:
              'هي وثيقة تسلّمها البعثة الدبلوماسية الإيطالية وتثبت قيمة شهادتك التونسية داخل المنظومة الإيطالية. أما إجراء المعادلة الروسي فمنفصل ويُعالَج بعد التخرّج لا قبل التسجيل.',
          },
          {
            question: 'هل تُحتسب الرسوم الإيطالية فعلًا على أساس الدخل؟',
            answer:
              'نعم في الجامعات العمومية، عبر شهادة في الوضعية الاقتصادية للعائلة. والسلّم يختلف من مؤسسة إلى أخرى: اطلبه من الجامعة المستهدفة بدل الاعتماد على معدّل وطني.',
          },
        ],
        keywords: [
          'الدراسة في روسيا أو إيطاليا', 'مناظرة الطب إيمات', 'مقارنة الدراسة روسيا إيطاليا',
          'الدراسة في إيطاليا للتونسيين', 'شهادة معادلة قيمة الشهادة', 'رسوم الجامعة الإيطالية حسب الدخل',
        ],
      },
      ru: {
        title: 'Учёба в России или в Италии: вступительный экзамен, плата по доходу и медицина | RusStudy',
        description:
          'Национальный вступительный экзамен, плата в зависимости от дохода, предварительная онлайн-запись и dichiarazione di valore: честное сравнение России и Италии для тунисского абитуриента.',
        h1: 'Учиться в России или в Италии?',
        summary: 'Италия может стоить очень мало — но сначала нужно пройти крайне конкурентный вступительный экзамен.',
        intro:
          'Италия привлекает всё больше тунисских выпускников, особенно медициной на английском языке. Плата там часто скромная, иногда нулевая. Но всё решает национальный вступительный экзамен и административная цепочка — предварительная запись, признание диплома, справка о доходах семьи, — с которой лучше разобраться до того, как брать обязательства.',
        tableTitle: 'Сравнение по каждому критерию',
        columns: { criterion: 'Критерий', russia: 'Россия', other: 'Италия' },
        rows: [
          {
            criterion: 'Стоимость обучения в год',
            russia: 'От 2 200 до 3 500 € в зависимости от направления, одинаково для всех',
            other: 'Рассчитывается по доходу семьи в государственных вузах: от очень низкой до нескольких тысяч евро',
          },
          {
            criterion: 'Отбор на медицину',
            russia: 'Зачисление по школьным документам, без вступительного конкурса',
            other: 'Крайне отборочный национальный экзамен со строго ограниченным числом мест',
          },
          {
            criterion: 'Язык обучения',
            russia: 'Русский после встроенного подготовительного года либо английский на части программ',
            other: 'Итальянский на большинстве программ; несколько англоязычных направлений с огромным спросом',
          },
          {
            criterion: 'Предварительные формальности',
            russia: 'Документы в вуз, затем приглашение и виза',
            other: 'Обязательная предварительная онлайн-запись, справка о ценности диплома и справка о доходах семьи',
          },
          {
            criterion: 'Жильё',
            russia: 'Место в общежитии, забронированное заранее, 30–90 € в месяц',
            other: 'Мест в общежитиях мало, распределяются по социальным критериям, иначе — напряжённый частный рынок',
          },
          {
            criterion: 'Расходы на жизнь в месяц',
            russia: 'От 140 до 260 € в зависимости от города',
            other: 'Заметно выше, с большим разрывом между Севером и Югом',
          },
          {
            criterion: 'Признание диплома',
            russia: 'Диплом государственного образца, установленная процедура признания в Тунисе',
            other: 'Итальянский диплом, очень широко признаётся в Европе',
          },
        ],
        disclaimer:
          'Суммы по России — это фактические цены наших вузов-партнёров. По Италии плата зависит от шкалы доходов каждого вуза, а правила экзамена меняются год от года: уточняйте в выбранном университете и в консульстве Италии до принятия решения.',
        otherWinsTitle: 'Где Италия остаётся лучшим выбором',
        otherWins: [
          'Если доход семьи скромный, итальянская шкала может свести плату почти к нулю',
          'Если вы нацелены на Евросоюз, итальянский диплом перемещается там беспрепятственно',
          'Если у вас есть уровень и время серьёзно подготовиться к вступительному экзамену',
          'Если медицинская программа на английском точно соответствует вашему замыслу',
        ],
        russiaWinsTitle: 'Где выигрывает Россия',
        russiaWins: [
          'Нет вступительного экзамена: выпускной год не решается одним испытанием',
          'Объявленный фиксированный тариф без досье о доходах и без шкалы, которую надо расшифровывать',
          'Гарантированное общежитие, без социальных критериев и очереди',
          'Заметно более низкие расходы на жизнь на всём протяжении учёбы',
          'Февральская сессия, которой в итальянском календаре нет',
        ],
        verdictTitle: 'Как выбрать',
        verdict:
          'Всё сводится к вашему отношению к экзамену. Если вы хорошо пишете тесты и принимаете риск не попасть в рейтинг, Италия даёт отличное соотношение цены и качества. Если вы предпочитаете закрепить место, а не ставить его на одно утро, рациональный выбор — Россия.',
        faq: [
          {
            question: 'Есть ли вступительный экзамен на медицину в России?',
            answer:
              'Нет, в наших вузах-партнёрах его нет. Зачисление опирается на школьные документы. Отбор никуда не исчезает, но смещается к сдаче экзаменов уже во время учёбы.',
          },
          {
            question: 'Что такое dichiarazione di valore?',
            answer:
              'Это документ итальянского дипломатического представительства, подтверждающий ценность вашего тунисского диплома в итальянской системе. Российская процедура признания отдельная и оформляется после выпуска, а не до зачисления.',
          },
          {
            question: 'Итальянская плата действительно зависит от дохода?',
            answer:
              'Да, в государственных вузах — через справку об экономическом положении семьи. Шкала различается между учреждениями: запрашивайте её в конкретном университете, а не ориентируйтесь на средние цифры по стране.',
          },
        ],
        keywords: [
          'учёба в России или Италии', 'вступительный экзамен IMAT', 'сравнение учёбы Россия Италия',
          'учёба в Италии для тунисцев', 'признание диплома Италия', 'плата по доходу итальянский вуз',
        ],
      },
    },
  },
  {
    slug: 'russie-vs-chine',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: 'Étudier en Russie ou en Chine : bourses, langue et distance | RusStudy',
        description:
          "Bourses gouvernementales, cursus en anglais, apprentissage du chinois, distance et coût du billet : la comparaison honnête entre la Russie et la Chine pour un bachelier tunisien.",
        h1: 'Étudier en Russie ou en Chine ?',
        summary: 'La Chine offre de vraies bourses, mais la distance et la langue changent tout au quotidien.',
        intro:
          "La Chine est devenue une destination sérieuse pour les étudiants maghrébins, portée par un réseau de bourses gouvernementales et des campus très bien équipés. Le calcul n'est pourtant pas seulement financier : la distance, le coût du billet et la barrière de la langue pèsent lourd sur cinq ou six années. Voici la comparaison.",
        tableTitle: 'Le comparatif, critère par critère',
        columns: { criterion: 'Critère', russia: 'Russie', other: 'Chine' },
        rows: [
          {
            criterion: 'Frais de scolarité annuels',
            russia: 'De 2 200 à 3 500 € selon la filière',
            other: 'Très variables selon la province et le rang de l’université ; les cursus en anglais sont généralement plus chers',
          },
          {
            criterion: 'Bourses',
            russia: 'Quotas gouvernementaux et dispositifs universitaires, sur dossier',
            other: 'Programmes de bourses gouvernementales et provinciales structurés, souvent très complets',
          },
          {
            criterion: "Langue d'enseignement",
            russia: 'Russe après une année préparatoire intégrée, ou anglais selon les cursus',
            other: 'Chinois avec niveau HSK exigé, ou anglais dans des programmes dédiés',
          },
          {
            criterion: 'Distance et retours au pays',
            russia: 'Vol court avec une escale, retours possibles pendant les vacances',
            other: 'Vol long et coûteux : concrètement, un ou deux retours seulement sur tout le cursus',
          },
          {
            criterion: 'Logement',
            russia: 'Résidence universitaire pré-réservée, de 30 à 90 € par mois',
            other: 'Campus fermés très bien équipés, logement généralement sur place',
          },
          {
            criterion: 'Coût de la vie mensuel',
            russia: 'De 140 à 260 € selon la ville',
            other: 'Modéré dans les villes de province, sensiblement plus élevé à Pékin et Shanghai',
          },
          {
            criterion: 'Reconnaissance du diplôme',
            russia: "Diplôme d'État russe, procédure d'équivalence établie en Tunisie",
            other: 'Diplôme chinois, reconnaissance à vérifier filière par filière pour un exercice en Tunisie',
          },
        ],
        disclaimer:
          "Les montants côté Russie sont ceux pratiqués dans nos universités partenaires. Côté Chine, les frais, les bourses et les conditions de langue varient fortement d'une université et d'une province à l'autre : vérifiez auprès de l'établissement visé et de l'ambassade avant toute décision.",
        otherWinsTitle: 'Là où la Chine reste le meilleur choix',
        otherWins: [
          "Si vous décrochez une bourse gouvernementale complète, l'équation financière devient imbattable",
          'Si votre projet professionnel est tourné vers l’Asie ou vers le commerce international',
          'Si apprendre le chinois est un objectif en soi et non une contrainte subie',
          'Si les équipements et les moyens de recherche des grands campus pèsent lourd dans votre choix',
        ],
        russiaWinsTitle: 'Là où la Russie prend l’avantage',
        russiaWins: [
          "Une distance qui autorise réellement des retours en famille pendant les vacances",
          'Une procédure de reconnaissance du diplôme déjà balisée pour les étudiants tunisiens',
          "Un fuseau horaire proche, qui change la vie pour rester en contact avec ses proches",
          'Une communauté maghrébine installée de longue date dans les villes universitaires',
          'Une session de février en complément de la rentrée de septembre',
        ],
        verdictTitle: 'Comment trancher',
        verdict:
          "Si vous obtenez une bourse chinoise complète, prenez-la : c'est une opportunité rare. Sans bourse, posez-vous la question de la distance et de la langue sur six ans, et de ce que vaut pour vous la possibilité de rentrer voir votre famille. Pour beaucoup d'étudiants tunisiens, c'est ce critère-là qui tranche en faveur de la Russie.",
        faq: [
          {
            question: 'Faut-il passer le HSK pour étudier en Russie ?',
            answer:
              "Non, le HSK est un test de chinois. Côté russe, aucun test de langue n'est exigé à l'admission : l'année préparatoire vous amène au niveau requis, et elle fait partie du cursus.",
          },
          {
            question: 'Un diplôme chinois est-il reconnu en Tunisie ?',
            answer:
              "Une procédure de reconnaissance existe, mais elle s'apprécie filière par filière et établissement par établissement. Pour les professions de santé en particulier, renseignez-vous auprès des autorités tunisiennes compétentes avant de vous engager.",
          },
          {
            question: 'Peut-on étudier en anglais dans les deux pays ?',
            answer:
              'Oui, des cursus en anglais existent en Chine comme en Russie. Dans les deux cas ils sont généralement plus chers que les cursus en langue locale, et moins nombreux.',
          },
        ],
        keywords: [
          'étudier en Russie ou en Chine', 'bourse Chine étudiant tunisien', 'comparatif études Russie Chine',
          'HSK chinois', 'étudier en Chine en anglais', 'coût études Chine',
        ],
      },
      en: {
        title: 'Studying in Russia or China: Scholarships, Language and Distance | RusStudy',
        description:
          'Government scholarships, English-taught programmes, learning Chinese, distance and the price of a flight: an honest comparison between Russia and China for a Tunisian student.',
        h1: 'Study in Russia or in China?',
        summary: 'China offers real scholarships, but distance and language change everything day to day.',
        intro:
          'China has become a serious destination for students from the Maghreb, driven by a network of government scholarships and very well-equipped campuses. Yet the calculation is not only financial: distance, the price of a flight and the language barrier weigh heavily across five or six years. Here is the comparison.',
        tableTitle: 'The comparison, criterion by criterion',
        columns: { criterion: 'Criterion', russia: 'Russia', other: 'China' },
        rows: [
          {
            criterion: 'Annual tuition',
            russia: 'From €2,200 to €3,500 depending on the programme',
            other: 'Highly variable by province and university ranking; English-taught programmes are generally more expensive',
          },
          {
            criterion: 'Scholarships',
            russia: 'Government quotas and university schemes, on application',
            other: 'Structured government and provincial scholarship programmes, often very comprehensive',
          },
          {
            criterion: 'Language of instruction',
            russia: 'Russian after a built-in preparatory year, or English depending on the programme',
            other: 'Chinese with a required HSK level, or English on dedicated programmes',
          },
          {
            criterion: 'Distance and trips home',
            russia: 'A short flight with one stopover, with trips home possible during holidays',
            other: 'A long and expensive flight: in practice, only one or two trips home across the whole programme',
          },
          {
            criterion: 'Accommodation',
            russia: 'University dormitory booked in advance, €30 to €90 per month',
            other: 'Enclosed, very well-equipped campuses, with accommodation generally on site',
          },
          {
            criterion: 'Monthly cost of living',
            russia: 'From €140 to €260 depending on the city',
            other: 'Moderate in provincial cities, noticeably higher in Beijing and Shanghai',
          },
          {
            criterion: 'Degree recognition',
            russia: 'Russian state degree, with an established equivalence procedure in Tunisia',
            other: 'Chinese degree, recognition to be checked programme by programme for practice in Tunisia',
          },
        ],
        disclaimer:
          'The Russian figures are those charged by our partner universities. On the Chinese side, fees, scholarships and language requirements vary greatly from one university and province to another: check with the institution you are targeting and with the embassy before making any decision.',
        otherWinsTitle: 'Where China remains the better choice',
        otherWins: [
          'If you land a full government scholarship, the financial equation becomes unbeatable',
          'If your career plan is oriented towards Asia or international trade',
          'If learning Chinese is a goal in itself rather than an imposed constraint',
          'If the facilities and research resources of the large campuses weigh heavily in your choice',
        ],
        russiaWinsTitle: 'Where Russia has the edge',
        russiaWins: [
          'A distance that genuinely allows trips home to family during the holidays',
          'A degree recognition procedure already mapped out for Tunisian students',
          'A nearby time zone, which changes everything for staying in touch with family',
          'A long-established Maghrebi community in the university cities',
          'A February session alongside the September intake',
        ],
        verdictTitle: 'How to decide',
        verdict:
          'If you obtain a full Chinese scholarship, take it: that is a rare opportunity. Without a scholarship, weigh distance and language across six years, and what the ability to go home and see your family is worth to you. For many Tunisian students, that is the criterion that tips the balance towards Russia.',
        faq: [
          {
            question: 'Do I need the HSK to study in Russia?',
            answer:
              'No, the HSK is a Chinese language test. On the Russian side, no language test is required at admission: the preparatory year brings you to the required level, and it is part of the programme.',
          },
          {
            question: 'Is a Chinese degree recognised in Tunisia?',
            answer:
              'A recognition procedure exists, but it is assessed programme by programme and institution by institution. For health professions in particular, check with the competent Tunisian authorities before committing.',
          },
          {
            question: 'Can you study in English in both countries?',
            answer:
              'Yes, English-taught programmes exist in China as in Russia. In both cases they are generally more expensive than local-language programmes, and fewer in number.',
          },
        ],
        keywords: [
          'study in Russia or China', 'China scholarship Tunisian student', 'Russia China study comparison',
          'HSK Chinese', 'study in China in English', 'cost of studying in China',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا أو في الصين: المنح واللغة والمسافة | RusStudy',
        description:
          'المنح الحكومية، المسالك بالإنجليزية، تعلّم الصينية، المسافة وكلفة التذكرة: مقارنة صريحة بين روسيا والصين لحامل الباكالوريا التونسية.',
        h1: 'الدراسة في روسيا أم في الصين؟',
        summary: 'تقدّم الصين منحًا حقيقية، لكن المسافة واللغة تغيّران كل شيء في الحياة اليومية.',
        intro:
          'أصبحت الصين وجهة جدّية لطلبة المغرب العربي، بفضل شبكة من المنح الحكومية وحرم جامعي مجهّز بشكل ممتاز. غير أن الحساب ليس ماليًا فقط: المسافة وكلفة التذكرة وحاجز اللغة كلها أعباء ثقيلة على مدى خمس أو ست سنوات. إليك المقارنة.',
        tableTitle: 'المقارنة، معيارًا بمعيار',
        columns: { criterion: 'المعيار', russia: 'روسيا', other: 'الصين' },
        rows: [
          {
            criterion: 'الرسوم الدراسية السنوية',
            russia: 'من 2200 إلى 3500 أورو حسب الاختصاص',
            other: 'متغيّرة جدًا حسب المقاطعة وترتيب الجامعة؛ والمسالك بالإنجليزية أغلى عمومًا',
          },
          {
            criterion: 'المنح',
            russia: 'حصص حكومية وآليات جامعية، على أساس الملف',
            other: 'برامج منح حكومية وجهوية منظّمة، وغالبًا شاملة جدًا',
          },
          {
            criterion: 'لغة التدريس',
            russia: 'الروسية بعد سنة تحضيرية مدمجة، أو الإنجليزية حسب المسالك',
            other: 'الصينية بمستوى HSK مطلوب، أو الإنجليزية في برامج مخصّصة',
          },
          {
            criterion: 'المسافة والعودة إلى البلد',
            russia: 'رحلة قصيرة بتوقف واحد، والعودة ممكنة خلال العطل',
            other: 'رحلة طويلة ومكلفة: عمليًا عودة أو عودتان فقط طيلة الدراسة',
          },
          {
            criterion: 'السكن',
            russia: 'إقامة جامعية محجوزة مسبقًا، من 30 إلى 90 أورو شهريًا',
            other: 'حرم جامعي مغلق ومجهّز جيدًا، والسكن عادة داخله',
          },
          {
            criterion: 'كلفة المعيشة الشهرية',
            russia: 'من 140 إلى 260 أورو حسب المدينة',
            other: 'معتدلة في مدن المقاطعات، وأعلى بشكل ملحوظ في بكين وشنغهاي',
          },
          {
            criterion: 'الاعتراف بالشهادة',
            russia: 'شهادة دولة روسية، مع إجراء معادلة معتمد في تونس',
            other: 'شهادة صينية، والاعتراف يُتحقّق منه اختصاصًا باختصاص لممارسة المهنة في تونس',
          },
        ],
        disclaimer:
          'المبالغ الخاصة بروسيا هي المعتمدة لدى جامعاتنا الشريكة. أما في الصين فالرسوم والمنح وشروط اللغة تختلف بشدة من جامعة إلى أخرى ومن مقاطعة إلى أخرى: تحقّق لدى المؤسسة المستهدفة والسفارة قبل أي قرار.',
        otherWinsTitle: 'حيث تبقى الصين الخيار الأفضل',
        otherWins: [
          'إذا تحصّلت على منحة حكومية كاملة، تصبح المعادلة المالية لا تُضاهى',
          'إذا كان مشروعك المهني موجّهًا نحو آسيا أو نحو التجارة الدولية',
          'إذا كان تعلّم الصينية هدفًا في حدّ ذاته لا قيدًا مفروضًا',
          'إذا كانت تجهيزات الحرم الجامعي وإمكانيات البحث وزنًا حاسمًا في اختيارك',
        ],
        russiaWinsTitle: 'حيث تتفوّق روسيا',
        russiaWins: [
          'مسافة تسمح فعليًا بالعودة إلى العائلة خلال العطل',
          'إجراء اعتراف بالشهادة معبّد سلفًا للطلبة التونسيين',
          'توقيت زمني قريب، وهو ما يغيّر الكثير في البقاء على تواصل مع الأهل',
          'جالية مغاربية مستقرّة منذ زمن طويل في المدن الجامعية',
          'دورة فيفري إضافة إلى دخول سبتمبر',
        ],
        verdictTitle: 'كيف تحسم اختيارك',
        verdict:
          'إن تحصّلت على منحة صينية كاملة فخذها: فهي فرصة نادرة. وبدون منحة، اطرح على نفسك سؤال المسافة واللغة على مدى ست سنوات، وما تساويه لديك إمكانية العودة لرؤية عائلتك. بالنسبة إلى كثير من الطلبة التونسيين، هذا المعيار بالذات هو الذي يرجّح كفّة روسيا.',
        faq: [
          {
            question: 'هل يجب اجتياز HSK للدراسة في روسيا؟',
            answer:
              'لا، فـ HSK اختبار في اللغة الصينية. أما في روسيا فلا يُطلب أي اختبار لغة عند القبول: السنة التحضيرية توصلك إلى المستوى المطلوب، وهي جزء من المسار.',
          },
          {
            question: 'هل الشهادة الصينية معترف بها في تونس؟',
            answer:
              'يوجد إجراء اعتراف، لكنه يُقيَّم اختصاصًا باختصاص ومؤسسة بمؤسسة. وبالنسبة إلى مهن الصحة خاصة، استفسر لدى السلطات التونسية المختصة قبل الالتزام.',
          },
          {
            question: 'هل يمكن الدراسة بالإنجليزية في البلدين؟',
            answer:
              'نعم، توجد مسالك بالإنجليزية في الصين كما في روسيا. وفي الحالتين تكون عمومًا أغلى من المسالك باللغة المحلية وأقل عددًا.',
          },
        ],
        keywords: [
          'الدراسة في روسيا أو الصين', 'منحة الصين للطلبة التونسيين', 'مقارنة الدراسة روسيا الصين',
          'اختبار HSK', 'الدراسة في الصين بالإنجليزية', 'كلفة الدراسة في الصين',
        ],
      },
      ru: {
        title: 'Учёба в России или в Китае: стипендии, язык и расстояние | RusStudy',
        description:
          'Государственные стипендии, программы на английском, изучение китайского, расстояние и стоимость перелёта: честное сравнение России и Китая для тунисского абитуриента.',
        h1: 'Учиться в России или в Китае?',
        summary: 'Китай даёт реальные стипендии, но расстояние и язык меняют всю повседневную жизнь.',
        intro:
          'Китай стал серьёзным направлением для студентов из Магриба благодаря сети государственных стипендий и прекрасно оснащённым кампусам. Но расчёт не только финансовый: расстояние, цена билета и языковой барьер весомы на горизонте пяти-шести лет. Вот сравнение.',
        tableTitle: 'Сравнение по каждому критерию',
        columns: { criterion: 'Критерий', russia: 'Россия', other: 'Китай' },
        rows: [
          {
            criterion: 'Стоимость обучения в год',
            russia: 'От 2 200 до 3 500 € в зависимости от направления',
            other: 'Сильно различается по провинциям и уровню вуза; англоязычные программы обычно дороже',
          },
          {
            criterion: 'Стипендии',
            russia: 'Государственные квоты и вузовские программы, по заявке',
            other: 'Структурированные государственные и провинциальные стипендии, часто очень полные',
          },
          {
            criterion: 'Язык обучения',
            russia: 'Русский после встроенного подготовительного года либо английский на части программ',
            other: 'Китайский с требуемым уровнем HSK либо английский на отдельных программах',
          },
          {
            criterion: 'Расстояние и поездки домой',
            russia: 'Короткий перелёт с одной пересадкой, поездки домой на каникулах реальны',
            other: 'Долгий и дорогой перелёт: на практике одна-две поездки домой за всю учёбу',
          },
          {
            criterion: 'Жильё',
            russia: 'Место в общежитии, забронированное заранее, 30–90 € в месяц',
            other: 'Закрытые, прекрасно оснащённые кампусы, жильё, как правило, на территории',
          },
          {
            criterion: 'Расходы на жизнь в месяц',
            russia: 'От 140 до 260 € в зависимости от города',
            other: 'Умеренные в провинциальных городах, заметно выше в Пекине и Шанхае',
          },
          {
            criterion: 'Признание диплома',
            russia: 'Диплом государственного образца, установленная процедура признания в Тунисе',
            other: 'Китайский диплом, признание нужно проверять по каждому направлению для работы в Тунисе',
          },
        ],
        disclaimer:
          'Суммы по России — это фактические цены наших вузов-партнёров. По Китаю плата, стипендии и языковые требования сильно различаются между вузами и провинциями: уточняйте в выбранном учреждении и в посольстве до принятия решения.',
        otherWinsTitle: 'Где Китай остаётся лучшим выбором',
        otherWins: [
          'Если вы получаете полную государственную стипендию, финансовое уравнение становится непобедимым',
          'Если ваш профессиональный замысел ориентирован на Азию или международную торговлю',
          'Если изучение китайского — самостоятельная цель, а не навязанное ограничение',
          'Если оснащение и исследовательская база крупных кампусов много значат для вашего выбора',
        ],
        russiaWinsTitle: 'Где выигрывает Россия',
        russiaWins: [
          'Расстояние, которое действительно позволяет ездить к семье на каникулах',
          'Процедура признания диплома, уже проторённая для тунисских студентов',
          'Близкий часовой пояс, что многое меняет для связи с близкими',
          'Давно сложившаяся магрибская община в университетских городах',
          'Февральская сессия в дополнение к сентябрьскому набору',
        ],
        verdictTitle: 'Как выбрать',
        verdict:
          'Если вам дают полную китайскую стипендию — берите: это редкая возможность. Без стипендии взвесьте расстояние и язык на шесть лет вперёд и то, сколько для вас стоит возможность приехать к семье. Для многих тунисских студентов именно этот критерий склоняет чашу весов в пользу России.',
        faq: [
          {
            question: 'Нужен ли HSK для учёбы в России?',
            answer:
              'Нет, HSK — экзамен по китайскому языку. В России языковой экзамен при поступлении не требуется: подготовительный год выводит вас на нужный уровень и входит в программу.',
          },
          {
            question: 'Признаётся ли китайский диплом в Тунисе?',
            answer:
              'Процедура признания существует, но оценивается по каждому направлению и каждому вузу отдельно. Для медицинских профессий особенно — уточните в компетентных тунисских органах до того, как брать обязательства.',
          },
          {
            question: 'Можно ли учиться на английском в обеих странах?',
            answer:
              'Да, англоязычные программы есть и в Китае, и в России. В обоих случаях они обычно дороже программ на местном языке и их меньше.',
          },
        ],
        keywords: [
          'учёба в России или Китае', 'стипендия Китая для тунисцев', 'сравнение учёбы Россия Китай',
          'экзамен HSK', 'учёба в Китае на английском', 'стоимость учёбы в Китае',
        ],
      },
    },
  },
];
