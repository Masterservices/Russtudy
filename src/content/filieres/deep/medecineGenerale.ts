import type { DeepFiliereByLang } from './types';

/*
 * Contenu long et original de la page /filieres/medecine-generale
 * (spécialité russe 31.05.01 « Лечебное дело »).
 *
 * Données chiffrées reprises des sources réelles du site : 6 ans et
 * 3 500 €/an (PROGRAM_BASE_TUITION['medecine-generale']), logement et vie
 * courante (src/content/budget/data.ts), assurance 180 €/an, frais uniques
 * d'environ 900 € la première année.
 *
 * TODO produit : confirmer la liste exacte des universités du réseau
 * habilitées pour 31.05.01. La section universités reste volontairement
 * générale et renvoie vers les fiches établissements existantes.
 */
export const MEDECINE_GENERALE_DEEP: DeepFiliereByLang = {
  fr: {
    h1: 'Étudier la médecine générale en Russie',
    metaTitle: 'Étudier la médecine en Russie 2026 : 6 ans, admission sans concours | RusStudy',
    metaDescription:
      "Étudier la médecine générale en Russie : spécialité 31.05.01 en 6 ans, admission sur dossier sans concours, frais à partir de 3 500 € par an, programme détaillé et reconnaissance du diplôme.",
    intro:
      "La médecine générale est la filière qui amène le plus de bacheliers tunisiens à envisager la Russie, et pour une raison simple : l'admission se fait sur dossier scolaire, sans concours éliminatoire. Les universités d'État russes forment des médecins en six ans, dans un cadre public accrédité, pour des frais de scolarité à partir de 3 500 € par an payés directement à l'établissement. RusStudy accompagne chaque candidat du dossier jusqu'à l'installation : admission, invitation officielle, visa, logement universitaire et suivi pendant toute la scolarité.",
    sections: [
      {
        heading: 'Présentation du programme',
        paragraphs: [
          "Le cursus de médecine générale mène au diplôme de spécialiste (specialitet), équivalent à un master intégré, obtenu après six années d'études à temps plein. Il n'existe pas de césure licence-master : l'étudiant suit un parcours continu qui combine sciences fondamentales, disciplines cliniques et pratique hospitalière, sanctionné par un examen d'État final.",
          "L'enseignement se déroule principalement en russe. Les étudiants qui ne maîtrisent pas la langue à leur arrivée suivent d'abord une année préparatoire linguistique avant d'intégrer la première année. Certaines universités proposent des groupes en anglais ; la disponibilité varie d'un établissement à l'autre et se confirme au moment du choix de l'université.",
        ],
        bullets: [
          'Diplôme délivré : specialitet (médecin), master intégré',
          "Durée : 6 ans à temps plein, hors année préparatoire de langue",
          "Langues d'enseignement : russe (après année préparatoire) ou anglais selon l'université",
          "Admission : sur dossier scolaire, sans concours d'entrée éliminatoire",
        ],
      },
      {
        heading: 'Code officiel de la spécialité russe',
        paragraphs: [
          "En Russie, chaque spécialité universitaire porte un code officiel défini par le ministère de l'Enseignement supérieur. La médecine générale correspond au code 31.05.01 « Лечебное дело » (Letchebnoïe delo). Ce code figure sur le diplôme et sur son supplément descriptif, et sert de référence lors des démarches d'équivalence à l'étranger.",
          "Vérifier ce code avant de s'inscrire n'est pas une formalité : il atteste que l'établissement est habilité par l'État à délivrer un diplôme de médecin reconnu, et non un certificat sans valeur professionnelle. C'est le premier point à contrôler sur n'importe quelle offre d'études de médecine en Russie, quelle qu'en soit la provenance.",
        ],
      },
      {
        heading: 'Programme année par année',
        paragraphs: [
          "Années 1 et 2 — fondamentaux : anatomie humaine, histologie, biochimie, physiologie, biologie, chimie et latin médical. C'est la phase la plus exigeante en mémorisation, et celle où le niveau de russe se révèle déterminant : on y apprend simultanément une science et son vocabulaire.",
          "Années 3 et 4 — transition vers la clinique : physiopathologie, pharmacologie, microbiologie, propédeutique, puis les premières disciplines cliniques — thérapie interne, chirurgie générale, obstétrique. L'étudiant commence à passer du temps à l'hôpital, auprès de patients russophones.",
          "Années 5 et 6 — cliniques approfondies et pratique : pédiatrie, neurologie, psychiatrie, maladies infectieuses, médecine d'urgence, oncologie, avec des stages hospitaliers d'une part croissante. Le cursus se conclut par l'examen d'État et l'attribution de la qualification de médecin.",
        ],
      },
      {
        heading: "Ce qui vient après le diplôme : l'ordinatura",
        paragraphs: [
          "C'est le point que beaucoup de familles découvrent trop tard, et il est structurant. Le diplôme de six ans fait de vous un médecin généraliste. Pour exercer une spécialité — cardiologie, chirurgie, radiologie et ainsi de suite — il faut poursuivre en ordinatura, l'internat russe, qui dure généralement deux ans ou davantage selon la discipline.",
          "Cela veut dire qu'un projet de spécialisation se compte en huit ans et non en six, et qu'il faut l'anticiper dans le budget familial dès le départ. Ce n'est pas une particularité russe : tous les systèmes médicaux fonctionnent ainsi. Mais mieux vaut le savoir avant de partir qu'en cinquième année.",
        ],
      },
      {
        heading: "Conditions d'admission",
        paragraphs: [
          "L'admission en médecine s'adresse aux titulaires d'un baccalauréat scientifique. Les matières déterminantes sont la biologie et la chimie, socle du programme des deux premières années : un bon niveau dans ces disciplines change réellement la première année.",
          "L'admission repose sur un dossier, et non sur un concours d'entrée à numerus clausus : relevés de notes, diplôme traduit et légalisé, passeport et documents médicaux. Après validation, l'université émet une invitation officielle qui ouvre la demande de visa d'études.",
        ],
        bullets: [
          'Baccalauréat scientifique ou équivalent',
          'Matières clés : biologie et chimie',
          'Dossier : relevés, diplôme traduit et légalisé, passeport, certificats médicaux',
          'Année préparatoire de langue pour le cursus en russe',
        ],
      },
      {
        heading: 'Coûts détaillés',
        paragraphs: [
          "Les frais de scolarité en médecine générale débutent à 3 500 € par an et varient selon l'université et la ville : les établissements de région pratiquent des tarifs plus bas que ceux de Moscou. Ces frais se règlent directement à l'université.",
          "Au-delà de la scolarité, le budget annuel comprend le logement, la vie courante et l'assurance médicale obligatoire. Le logement en résidence universitaire reste l'option la plus économique, entre 30 et 90 € par mois selon la ville ; un appartement partagé coûte nettement davantage. La vie courante se situe entre 140 et 260 € par mois, et l'assurance médicale autour de 180 € par an.",
          "La première année ajoute des frais uniques d'environ 900 € : visa, traductions, légalisations et billet d'avion. C'est structurellement l'année la plus chère du cursus, et c'est celle qu'il faut provisionner le plus largement.",
        ],
        bullets: [
          'Frais de scolarité : à partir de 3 500 € / an',
          'Logement en résidence : 30 à 90 € / mois selon la ville',
          'Vie courante : 140 à 260 € / mois selon la ville',
          'Assurance médicale obligatoire : environ 180 € / an',
          "Frais uniques de première année : environ 900 €",
        ],
      },
      {
        heading: 'Universités partenaires proposant des filières de santé',
        paragraphs: [
          "Plusieurs établissements publics du réseau accueillent des étudiants internationaux en filières de santé. La liste exacte des programmes ouverts et des langues d'enseignement se confirme au moment du choix de l'université : vérifiez toujours l'habilitation pour la spécialité 31.05.01 auprès de l'établissement visé.",
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Université de Médecine Pirogov' },
          { universitySlug: 'universite-detat-de-moscou', label: "Université d'État de Moscou" },
          { universitySlug: 'universite-rudn', label: 'Université RUDN' },
          { universitySlug: 'universite-de-kazan', label: 'Université fédérale de Kazan' },
          { universitySlug: 'universite-detat-de-voronej', label: "Université d'État de Voronej" },
        ],
      },
      {
        heading: 'Débouchés et reconnaissance du diplôme',
        paragraphs: [
          "Le diplôme délivré est un diplôme d'État russe. Son utilisation à l'étranger passe par une procédure de reconnaissance propre à chaque pays, et pour les professions de santé cette procédure comporte presque partout une étape de vérification des compétences avant l'autorisation d'exercer.",
          "Pour exercer en Tunisie, renseignez-vous auprès des autorités compétentes sur la procédure en vigueur et sur ses étapes, idéalement avant de vous engager. C'est la question la plus importante du projet, et elle mérite une réponse officielle plutôt qu'une promesse commerciale.",
        ],
      },
    ],
    faq: [
      {
        question: 'Y a-t-il un concours d’entrée en médecine en Russie ?',
        answer:
          "Non, pas dans les universités partenaires du réseau : l'admission se fait sur dossier scolaire. La sélection existe toujours, mais elle se déplace vers la réussite des examens pendant le cursus, qui sont exigeants.",
      },
      {
        question: 'Combien de temps durent les études de médecine en Russie ?',
        answer:
          "Six ans pour le diplôme de médecin, auxquels s'ajoute l'année préparatoire de langue si vous suivez le cursus en russe. Une spécialisation en ordinatura ajoute généralement deux ans ou plus.",
      },
      {
        question: 'Peut-on étudier la médecine en anglais ?',
        answer:
          "Certaines universités proposent des groupes en anglais. Attention toutefois : les stages cliniques se font auprès de patients russophones, et des cours de russe restent intégrés au programme. Ces cursus sont aussi généralement plus chers.",
      },
      {
        question: 'Quel est le budget annuel total ?',
        answer:
          "Frais de scolarité à partir de 3 500 €, auxquels s'ajoutent le logement (30 à 90 € par mois en résidence), la vie courante (140 à 260 € par mois) et l'assurance (environ 180 € par an). La première année ajoute environ 900 € de frais uniques.",
      },
      {
        question: 'Faut-il un bon niveau en biologie et en chimie ?',
        answer:
          "C'est fortement recommandé. Ces deux matières constituent le socle des deux premières années, et un dossier solide dans ces disciplines facilite nettement l'intégration.",
      },
      {
        question: 'Le logement est-il garanti ?',
        answer:
          "Le logement en résidence universitaire est pré-réservé avant l'arrivée. C'est l'option la plus économique et la plus simple la première année, avant de connaître la ville.",
      },
      {
        question: 'Le diplôme permet-il d’exercer en Tunisie ?',
        answer:
          "Une procédure de reconnaissance existe. Pour les professions de santé, elle comporte des étapes de vérification spécifiques. Renseignez-vous auprès des autorités tunisiennes compétentes sur la procédure en vigueur avant de vous engager.",
      },
    ],
  },
  en: {
    h1: 'Studying general medicine in Russia',
    metaTitle: 'Studying Medicine in Russia 2026: 6 Years, Admission Without a Competition | RusStudy',
    metaDescription:
      'Studying general medicine in Russia: specialty 31.05.01 over 6 years, admission on school record with no entrance competition, fees from €3,500 per year, detailed curriculum and degree recognition.',
    intro:
      'General medicine is the programme that leads most Tunisian school-leavers to consider Russia, for one simple reason: admission is decided on your school record, with no eliminating competition. Russian state universities train doctors over six years, within an accredited public framework, for tuition starting at €3,500 per year paid directly to the institution. RusStudy supports every applicant from the file to settling in: admission, official invitation, visa, university accommodation and follow-up throughout the course.',
    sections: [
      {
        heading: 'Programme overview',
        paragraphs: [
          'The general medicine course leads to the specialist degree (specialitet), equivalent to an integrated master, obtained after six years of full-time study. There is no bachelor-master split: students follow a continuous path combining fundamental sciences, clinical disciplines and hospital practice, concluded by a final state examination.',
          'Teaching is mainly in Russian. Students who do not master the language on arrival first complete a preparatory language year before entering the first year. Some universities offer English-taught groups; availability varies between institutions and is confirmed when choosing the university.',
        ],
        bullets: [
          'Degree awarded: specialitet (physician), integrated master',
          'Duration: 6 years full-time, excluding the preparatory language year',
          'Languages of instruction: Russian (after the preparatory year) or English depending on the university',
          'Admission: on school record, with no eliminating entrance competition',
        ],
      },
      {
        heading: 'Official Russian specialty code',
        paragraphs: [
          'In Russia every university specialty carries an official code defined by the Ministry of Higher Education. General medicine corresponds to code 31.05.01 "Лечебное дело" (Lechebnoye delo). This code appears on the degree and its diploma supplement, and serves as the reference in equivalence procedures abroad.',
          'Checking this code before enrolling is not a formality: it certifies that the institution is authorised by the state to award a recognised medical degree, and not a certificate without professional value. It is the first thing to verify on any offer of medical study in Russia, whatever its source.',
        ],
      },
      {
        heading: 'Year-by-year curriculum',
        paragraphs: [
          'Years 1 and 2 — fundamentals: human anatomy, histology, biochemistry, physiology, biology, chemistry and medical Latin. This is the most memory-intensive phase, and the one where your level of Russian proves decisive: you are learning a science and its vocabulary at the same time.',
          'Years 3 and 4 — transition to the clinic: pathophysiology, pharmacology, microbiology, propaedeutics, then the first clinical disciplines — internal medicine, general surgery, obstetrics. Students begin spending time in hospital, with Russian-speaking patients.',
          'Years 5 and 6 — advanced clinical work and practice: paediatrics, neurology, psychiatry, infectious diseases, emergency medicine, oncology, with a growing share of hospital placements. The course concludes with the state examination and the award of the physician qualification.',
        ],
      },
      {
        heading: 'What comes after the degree: ordinatura',
        paragraphs: [
          'This is the point many families discover too late, and it shapes everything. The six-year degree makes you a general physician. To practise a specialty — cardiology, surgery, radiology and so on — you must continue into ordinatura, the Russian residency, which generally lasts two years or more depending on the discipline.',
          'That means a specialisation plan runs to eight years rather than six, and it has to be anticipated in the family budget from the outset. This is not a Russian peculiarity: every medical system works this way. But it is better known before leaving than in the fifth year.',
        ],
      },
      {
        heading: 'Admission requirements',
        paragraphs: [
          'Admission to medicine is open to holders of a science baccalaureate. The decisive subjects are biology and chemistry, the foundation of the first two years: a solid level in these disciplines genuinely changes the first year.',
          'Admission rests on a file, not on an entrance competition with a capped number of places: transcripts, translated and legalised diploma, passport and medical documents. Once validated, the university issues an official invitation that opens the student visa application.',
        ],
        bullets: [
          'Science baccalaureate or equivalent',
          'Key subjects: biology and chemistry',
          'File: transcripts, translated and legalised diploma, passport, medical certificates',
          'Preparatory language year for the Russian-taught course',
        ],
      },
      {
        heading: 'Detailed costs',
        paragraphs: [
          'Tuition in general medicine starts at €3,500 per year and varies by university and city: regional institutions charge less than those in Moscow. Fees are paid directly to the university.',
          'Beyond tuition, the annual budget covers accommodation, daily living and compulsory medical insurance. University halls remain the most economical option, between €30 and €90 per month depending on the city; a shared apartment costs considerably more. Daily living runs between €140 and €260 per month, and medical insurance around €180 per year.',
          'The first year adds one-off costs of around €900: visa, translations, legalisations and the flight. It is structurally the most expensive year of the course, and the one to provision for most generously.',
        ],
        bullets: [
          'Tuition: from €3,500 / year',
          'Hall accommodation: €30 to €90 / month depending on the city',
          'Daily living: €140 to €260 / month depending on the city',
          'Compulsory medical insurance: around €180 / year',
          'One-off first-year costs: around €900',
        ],
      },
      {
        heading: 'Partner universities offering health programmes',
        paragraphs: [
          'Several public institutions in the network host international students in health programmes. The exact list of open programmes and languages of instruction is confirmed when choosing the university: always verify authorisation for specialty 31.05.01 with the institution you are targeting.',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Pirogov Medical University' },
          { universitySlug: 'universite-detat-de-moscou', label: 'Moscow State University' },
          { universitySlug: 'universite-rudn', label: 'RUDN University' },
          { universitySlug: 'universite-de-kazan', label: 'Kazan Federal University' },
          { universitySlug: 'universite-detat-de-voronej', label: 'Voronezh State University' },
        ],
      },
      {
        heading: 'Career paths and degree recognition',
        paragraphs: [
          'The degree awarded is a Russian state degree. Using it abroad goes through a recognition procedure specific to each country, and for health professions that procedure almost everywhere includes a competence verification step before authorisation to practise.',
          'To practise in Tunisia, enquire with the competent authorities about the procedure in force and its stages, ideally before committing. It is the most important question of the whole plan, and it deserves an official answer rather than a sales promise.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an entrance competition for medicine in Russia?',
        answer:
          'No, not at the network partner universities: admission is on school record. Selection still exists, but it shifts to passing the examinations during the course, which are demanding.',
      },
      {
        question: 'How long do medical studies take in Russia?',
        answer:
          'Six years for the physician degree, plus the preparatory language year if you follow the Russian-taught course. A specialisation in ordinatura generally adds two years or more.',
      },
      {
        question: 'Can you study medicine in English?',
        answer:
          'Some universities offer English-taught groups. Be aware, though: clinical placements involve Russian-speaking patients, and Russian classes remain part of the programme. These courses are also generally more expensive.',
      },
      {
        question: 'What is the total annual budget?',
        answer:
          'Tuition from €3,500, plus accommodation (€30 to €90 per month in halls), daily living (€140 to €260 per month) and insurance (around €180 per year). The first year adds about €900 in one-off costs.',
      },
      {
        question: 'Do I need a good level in biology and chemistry?',
        answer:
          'It is strongly recommended. These two subjects form the foundation of the first two years, and a solid record in them makes settling in markedly easier.',
      },
      {
        question: 'Is accommodation guaranteed?',
        answer:
          'University hall accommodation is pre-booked before arrival. It is the most economical and simplest option in the first year, before you know the city.',
      },
      {
        question: 'Does the degree allow me to practise in Tunisia?',
        answer:
          'A recognition procedure exists. For health professions it includes specific verification stages. Enquire with the competent Tunisian authorities about the procedure in force before committing.',
      },
    ],
  },
  ar: {
    h1: 'دراسة الطب العام في روسيا',
    metaTitle: 'دراسة الطب في روسيا 2026: ست سنوات وقبول دون مناظرة | RusStudy',
    metaDescription:
      'دراسة الطب العام في روسيا: التخصص 31.05.01 في ست سنوات، قبول على أساس الملف دون مناظرة إقصائية، رسوم تبدأ من 3500 أورو سنويًا، برنامج مفصّل والاعتراف بالشهادة.',
    intro:
      'الطب العام هو الاختصاص الذي يدفع أكبر عدد من حاملي الباكالوريا التونسية إلى التفكير في روسيا، ولسبب بسيط: القبول يتم على أساس الملف الدراسي، دون مناظرة إقصائية. تكوّن الجامعات الحكومية الروسية الأطباء في ست سنوات، في إطار عمومي معتمد، برسوم تبدأ من 3500 أورو سنويًا تُدفع مباشرة إلى المؤسسة. وترافق RusStudy كل مترشّح من الملف إلى الاستقرار: القبول، والدعوة الرسمية، والتأشيرة، والسكن الجامعي، والمتابعة طيلة الدراسة.',
    sections: [
      {
        heading: 'تقديم البرنامج',
        paragraphs: [
          'يؤدي مسار الطب العام إلى شهادة الاختصاصي (specialitet)، المعادلة لماجستير مدمج، وتُنال بعد ست سنوات دراسة بدوام كامل. ولا يوجد فصل بين إجازة وماجستير: يتابع الطالب مسارًا متواصلًا يجمع بين العلوم الأساسية والاختصاصات السريرية والممارسة الاستشفائية، ويُختتم بامتحان دولة نهائي.',
          'يتم التدريس أساسًا بالروسية. والطلبة الذين لا يتقنون اللغة عند وصولهم يتابعون أولًا سنة تحضيرية لغوية قبل الالتحاق بالسنة الأولى. وتقترح بعض الجامعات أفواجًا بالإنجليزية؛ ويختلف توفّرها من مؤسسة إلى أخرى ويُؤكَّد عند اختيار الجامعة.',
        ],
        bullets: [
          'الشهادة المسلّمة: specialitet (طبيب)، ماجستير مدمج',
          'المدة: 6 سنوات بدوام كامل، دون احتساب السنة التحضيرية للغة',
          'لغات التدريس: الروسية (بعد السنة التحضيرية) أو الإنجليزية حسب الجامعة',
          'القبول: على أساس الملف الدراسي، دون مناظرة دخول إقصائية',
        ],
      },
      {
        heading: 'الرمز الرسمي للتخصص الروسي',
        paragraphs: [
          'في روسيا، يحمل كل تخصص جامعي رمزًا رسميًا تحدّده وزارة التعليم العالي. والطب العام يقابل الرمز 31.05.01 «Лечебное дело». ويظهر هذا الرمز على الشهادة وعلى ملحقها الوصفي، ويُعتمد مرجعًا في إجراءات المعادلة بالخارج.',
          'والتحقق من هذا الرمز قبل التسجيل ليس إجراءً شكليًا: فهو يثبت أن المؤسسة مخوّلة من الدولة لتسليم شهادة طبيب معترف بها، لا شهادة بلا قيمة مهنية. وهو أول ما ينبغي التثبّت منه في أي عرض لدراسة الطب في روسيا، مهما كان مصدره.',
        ],
      },
      {
        heading: 'البرنامج سنة بسنة',
        paragraphs: [
          'السنتان الأولى والثانية — الأساسيات: التشريح البشري، والأنسجة، والكيمياء الحيوية، ووظائف الأعضاء، والبيولوجيا، والكيمياء، واللاتينية الطبية. وهي المرحلة الأكثر طلبًا للحفظ، والتي يتبيّن فيها أن مستوى الروسية حاسم: إذ تتعلّم علمًا ومصطلحاته في الوقت نفسه.',
          'السنتان الثالثة والرابعة — الانتقال إلى السريري: الفيزيولوجيا المرضية، وعلم الأدوية، والميكروبيولوجيا، والتمهيد السريري، ثم أولى الاختصاصات السريرية — الطب الباطني والجراحة العامة والتوليد. ويبدأ الطالب في قضاء وقت بالمستشفى، مع مرضى ناطقين بالروسية.',
          'السنتان الخامسة والسادسة — السريري المعمّق والممارسة: طب الأطفال، وطب الأعصاب، والطب النفسي، والأمراض المعدية، وطب الاستعجالي، وعلم الأورام، مع حصة متزايدة من التربّصات الاستشفائية. ويُختتم المسار بامتحان الدولة ومنح صفة طبيب.',
        ],
      },
      {
        heading: 'ما يأتي بعد الشهادة: الأورديناتورا',
        paragraphs: [
          'هذه النقطة تكتشفها عائلات كثيرة متأخّرًا، وهي تحدّد كل شيء. فشهادة الست سنوات تجعل منك طبيبًا عامًا. ولممارسة اختصاص — أمراض القلب أو الجراحة أو الأشعة وغيرها — عليك مواصلة الأورديناتورا، وهي الإقامة الطبية الروسية، وتدوم عمومًا سنتين أو أكثر حسب الاختصاص.',
          'ومعنى ذلك أن مشروع التخصص يُحسب بثماني سنوات لا بستّ، وينبغي استباقه في ميزانية العائلة منذ البداية. وليست هذه خصوصية روسية: فكل المنظومات الطبية تعمل هكذا. لكن معرفة ذلك قبل السفر خير من اكتشافه في السنة الخامسة.',
        ],
      },
      {
        heading: 'شروط القبول',
        paragraphs: [
          'القبول في الطب موجّه لحاملي باكالوريا علمية. والمادتان الحاسمتان هما البيولوجيا والكيمياء، وهما أساس برنامج السنتين الأوليين: فمستوى جيد فيهما يغيّر السنة الأولى فعلًا.',
          'ويقوم القبول على ملف لا على مناظرة دخول بعدد محدود: كشوف الأعداد، والشهادة مترجمة ومصدّقة، وجواز السفر، والوثائق الطبية. وبعد المصادقة، تصدر الجامعة دعوة رسمية تفتح باب مطلب تأشيرة الدراسة.',
        ],
        bullets: [
          'باكالوريا علمية أو ما يعادلها',
          'المادتان الأساسيتان: البيولوجيا والكيمياء',
          'الملف: كشوف الأعداد، الشهادة مترجمة ومصدّقة، جواز السفر، شهادات طبية',
          'سنة تحضيرية للغة بالنسبة إلى المسار بالروسية',
        ],
      },
      {
        heading: 'التكاليف بالتفصيل',
        paragraphs: [
          'تبدأ رسوم الطب العام من 3500 أورو سنويًا وتختلف حسب الجامعة والمدينة: فمؤسسات الأقاليم تعتمد تعريفات أدنى من موسكو. وتُدفع هذه الرسوم مباشرة إلى الجامعة.',
          'وإلى جانب الدراسة، تشمل الميزانية السنوية السكن والمعيشة اليومية والتأمين الطبي الإجباري. ويبقى السكن في الإقامة الجامعية الخيار الأكثر اقتصادًا، بين 30 و90 أورو شهريًا حسب المدينة؛ أما الشقة المشتركة فتكلّف أكثر بكثير. والمعيشة اليومية بين 140 و260 أورو شهريًا، والتأمين الطبي نحو 180 أورو سنويًا.',
          'وتضيف السنة الأولى مصاريف ظرفية بنحو 900 أورو: التأشيرة والترجمات والتصديقات وتذكرة الطائرة. وهي بنيويًا أغلى سنوات المسار، والسنة التي يجب رصد أوسع اعتماد لها.',
        ],
        bullets: [
          'الرسوم الدراسية: ابتداءً من 3500 أورو / سنة',
          'السكن في الإقامة: من 30 إلى 90 أورو / شهر حسب المدينة',
          'المعيشة اليومية: من 140 إلى 260 أورو / شهر حسب المدينة',
          'التأمين الطبي الإجباري: نحو 180 أورو / سنة',
          'مصاريف ظرفية في السنة الأولى: نحو 900 أورو',
        ],
      },
      {
        heading: 'الجامعات الشريكة التي تقترح اختصاصات صحية',
        paragraphs: [
          'تستقبل عدة مؤسسات عمومية في الشبكة طلبة دوليين في اختصاصات صحية. وتُؤكَّد القائمة الدقيقة للبرامج المفتوحة ولغات التدريس عند اختيار الجامعة: تحقّق دائمًا من التخويل للتخصص 31.05.01 لدى المؤسسة المستهدفة.',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'جامعة بيروغوف للطب' },
          { universitySlug: 'universite-detat-de-moscou', label: 'جامعة موسكو الحكومية' },
          { universitySlug: 'universite-rudn', label: 'جامعة RUDN' },
          { universitySlug: 'universite-de-kazan', label: 'جامعة قازان الفيدرالية' },
          { universitySlug: 'universite-detat-de-voronej', label: 'جامعة فورونيج الحكومية' },
        ],
      },
      {
        heading: 'الآفاق والاعتراف بالشهادة',
        paragraphs: [
          'الشهادة المسلّمة شهادة دولة روسية. واستعمالها بالخارج يمرّ عبر إجراء اعتراف خاص بكل بلد، وبالنسبة إلى مهن الصحة يتضمّن هذا الإجراء في كل مكان تقريبًا مرحلة تحقّق من الكفاءات قبل الترخيص بالممارسة.',
          'ولممارسة المهنة في تونس، استفسر لدى السلطات المختصة عن الإجراء الساري ومراحله، ويُستحسن قبل الالتزام. فهي أهم سؤال في المشروع، وتستحق جوابًا رسميًا لا وعدًا تجاريًا.',
        ],
      },
    ],
    faq: [
      {
        question: 'هل توجد مناظرة دخول للطب في روسيا؟',
        answer:
          'لا، ليس في الجامعات الشريكة للشبكة: القبول يتم على أساس الملف الدراسي. والانتقاء موجود دائمًا لكنه ينتقل إلى النجاح في الامتحانات أثناء الدراسة، وهي امتحانات متطلّبة.',
      },
      {
        question: 'كم تدوم دراسة الطب في روسيا؟',
        answer:
          'ست سنوات لشهادة الطبيب، تُضاف إليها السنة التحضيرية للغة إن تابعت المسار بالروسية. والتخصص في الأورديناتورا يضيف عمومًا سنتين أو أكثر.',
      },
      {
        question: 'هل يمكن دراسة الطب بالإنجليزية؟',
        answer:
          'تقترح بعض الجامعات أفواجًا بالإنجليزية. لكن انتبه: التربّصات السريرية تتم مع مرضى ناطقين بالروسية، وتبقى دروس الروسية ضمن البرنامج. كما أن هذه المسالك أغلى عمومًا.',
      },
      {
        question: 'ما هي الميزانية السنوية الجملية؟',
        answer:
          'رسوم دراسية ابتداءً من 3500 أورو، يُضاف إليها السكن (من 30 إلى 90 أورو شهريًا في الإقامة)، والمعيشة اليومية (من 140 إلى 260 أورو شهريًا)، والتأمين (نحو 180 أورو سنويًا). وتضيف السنة الأولى نحو 900 أورو من المصاريف الظرفية.',
      },
      {
        question: 'هل يلزم مستوى جيد في البيولوجيا والكيمياء؟',
        answer:
          'يُنصح بذلك بشدّة. فهاتان المادتان تشكّلان أساس السنتين الأوليين، وملف متين فيهما يسهّل الاندماج بوضوح.',
      },
      {
        question: 'هل السكن مضمون؟',
        answer:
          'السكن في الإقامة الجامعية محجوز مسبقًا قبل الوصول. وهو الخيار الأكثر اقتصادًا والأبسط في السنة الأولى، قبل أن تتعرّف على المدينة.',
      },
      {
        question: 'هل تتيح الشهادة ممارسة المهنة في تونس؟',
        answer:
          'يوجد إجراء اعتراف. وبالنسبة إلى مهن الصحة يتضمّن مراحل تحقّق خاصة. استفسر لدى السلطات التونسية المختصة عن الإجراء الساري قبل الالتزام.',
      },
    ],
  },
  ru: {
    h1: 'Учёба на лечебном деле в России',
    metaTitle: 'Учёба на медицинском в России 2026: шесть лет, зачисление без конкурса | RusStudy',
    metaDescription:
      'Учёба на лечебном деле в России: специальность 31.05.01, шесть лет, зачисление по школьным документам без отсеивающего конкурса, стоимость от 3500 € в год, подробная программа и признание диплома.',
    intro:
      'Лечебное дело — направление, из-за которого больше всего тунисских выпускников задумываются о России, и причина проста: зачисление идёт по школьным документам, без отсеивающего конкурса. Российские государственные вузы готовят врачей за шесть лет в аккредитованной государственной системе, при стоимости обучения от 3500 € в год, которая платится напрямую вузу. RusStudy сопровождает каждого абитуриента от подачи документов до обустройства: зачисление, официальное приглашение, виза, общежитие и поддержка на всём протяжении учёбы.',
    sections: [
      {
        heading: 'О программе',
        paragraphs: [
          'Программа лечебного дела ведёт к диплому специалиста (специалитет), эквивалентному интегрированной магистратуре, и получается после шести лет очного обучения. Разделения на бакалавриат и магистратуру здесь нет: студент идёт по непрерывному маршруту, сочетающему фундаментальные науки, клинические дисциплины и больничную практику, и завершает его итоговым государственным экзаменом.',
          'Обучение ведётся преимущественно на русском. Студенты, не владеющие языком по приезде, сначала проходят подготовительный языковой год, а затем поступают на первый курс. Некоторые вузы предлагают англоязычные группы; доступность различается между учреждениями и уточняется при выборе вуза.',
        ],
        bullets: [
          'Выдаваемый диплом: специалитет (врач), интегрированная магистратура',
          'Длительность: 6 лет очно, не считая подготовительного языкового года',
          'Языки обучения: русский (после подготовительного года) или английский в зависимости от вуза',
          'Зачисление: по школьным документам, без отсеивающего вступительного конкурса',
        ],
      },
      {
        heading: 'Официальный код российской специальности',
        paragraphs: [
          'В России каждая вузовская специальность имеет официальный код, установленный Министерством высшего образования. Лечебному делу соответствует код 31.05.01 «Лечебное дело». Этот код указан в дипломе и в приложении к нему и служит ориентиром при процедурах признания за рубежом.',
          'Проверить этот код до зачисления — не формальность: он подтверждает, что учреждение уполномочено государством выдавать признаваемый врачебный диплом, а не свидетельство без профессиональной силы. Это первое, что следует проверить в любом предложении медицинского образования в России, откуда бы оно ни исходило.',
        ],
      },
      {
        heading: 'Программа по годам',
        paragraphs: [
          'Первый и второй курсы — фундамент: анатомия человека, гистология, биохимия, физиология, биология, химия и медицинская латынь. Это самый требовательный к памяти этап и тот, на котором уровень русского оказывается решающим: вы одновременно осваиваете науку и её словарь.',
          'Третий и четвёртый курсы — переход к клинике: патофизиология, фармакология, микробиология, пропедевтика, затем первые клинические дисциплины — внутренние болезни, общая хирургия, акушерство. Студент начинает проводить время в больнице, с русскоязычными пациентами.',
          'Пятый и шестой курсы — углублённая клиника и практика: педиатрия, неврология, психиатрия, инфекционные болезни, неотложная медицина, онкология, с растущей долей больничной практики. Программа завершается государственным экзаменом и присвоением квалификации врача.',
        ],
      },
      {
        heading: 'Что следует за дипломом: ординатура',
        paragraphs: [
          'Это момент, который многие семьи обнаруживают слишком поздно, и он определяет многое. Шестилетний диплом делает вас врачом общей практики. Чтобы работать по специальности — кардиология, хирургия, рентгенология и так далее — нужно продолжить в ординатуре, которая обычно длится два года или больше в зависимости от дисциплины.',
          'Это значит, что план со специализацией считается в восемь лет, а не в шесть, и закладывать его в семейный бюджет нужно с самого начала. Это не российская особенность: так устроены все медицинские системы. Но лучше знать об этом до отъезда, чем на пятом курсе.',
        ],
      },
      {
        heading: 'Условия поступления',
        paragraphs: [
          'Поступление на медицинское направление открыто обладателям аттестата с естественно-научным профилем. Решающие предметы — биология и химия, основа программы первых двух курсов: хороший уровень в них реально меняет первый год.',
          'Зачисление опирается на пакет документов, а не на конкурс с ограниченным числом мест: выписки оценок, переведённый и легализованный аттестат, паспорт и медицинские документы. После проверки вуз выдаёт официальное приглашение, открывающее подачу на учебную визу.',
        ],
        bullets: [
          'Аттестат естественно-научного профиля или эквивалент',
          'Ключевые предметы: биология и химия',
          'Пакет: выписки, переведённый и легализованный аттестат, паспорт, медицинские справки',
          'Подготовительный языковой год для русскоязычной программы',
        ],
      },
      {
        heading: 'Подробная стоимость',
        paragraphs: [
          'Стоимость обучения на лечебном деле начинается от 3500 € в год и зависит от вуза и города: региональные учреждения берут меньше московских. Оплата идёт напрямую вузу.',
          'Помимо обучения, годовой бюджет включает жильё, повседневные расходы и обязательную медицинскую страховку. Общежитие остаётся самым экономным вариантом — от 30 до 90 € в месяц в зависимости от города; доля в квартире стоит заметно дороже. Повседневные расходы — от 140 до 260 € в месяц, медицинская страховка — около 180 € в год.',
          'Первый год добавляет разовые расходы около 900 €: виза, переводы, легализация и авиабилет. Структурно это самый дорогой год учёбы, и именно под него стоит заложить наибольший запас.',
        ],
        bullets: [
          'Обучение: от 3500 € / год',
          'Общежитие: 30–90 € / месяц в зависимости от города',
          'Повседневные расходы: 140–260 € / месяц в зависимости от города',
          'Обязательная медицинская страховка: около 180 € / год',
          'Разовые расходы первого года: около 900 €',
        ],
      },
      {
        heading: 'Вузы-партнёры с медицинскими направлениями',
        paragraphs: [
          'Несколько государственных вузов сети принимают иностранных студентов на направления здравоохранения. Точный перечень открытых программ и языков обучения уточняется при выборе вуза: всегда проверяйте наличие лицензии по специальности 31.05.01 в конкретном учреждении.',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'РНИМУ имени Н. И. Пирогова' },
          { universitySlug: 'universite-detat-de-moscou', label: 'МГУ имени М. В. Ломоносова' },
          { universitySlug: 'universite-rudn', label: 'РУДН' },
          { universitySlug: 'universite-de-kazan', label: 'Казанский федеральный университет' },
          { universitySlug: 'universite-detat-de-voronej', label: 'Воронежский государственный университет' },
        ],
      },
      {
        heading: 'Перспективы и признание диплома',
        paragraphs: [
          'Выдаваемый диплом — документ государственного образца. Его использование за рубежом проходит через процедуру признания, свою в каждой стране, и для медицинских профессий эта процедура почти везде включает этап проверки квалификации до допуска к практике.',
          'Чтобы работать в Тунисе, уточните у компетентных органов действующую процедуру и её этапы, желательно до принятия обязательств. Это важнейший вопрос всего плана, и он заслуживает официального ответа, а не коммерческого обещания.',
        ],
      },
    ],
    faq: [
      {
        question: 'Есть ли вступительный конкурс на медицинское направление в России?',
        answer:
          'Нет, в вузах-партнёрах сети его нет: зачисление идёт по школьным документам. Отбор никуда не исчезает, но смещается к сдаче экзаменов во время учёбы, а они требовательны.',
      },
      {
        question: 'Сколько длится медицинское образование в России?',
        answer:
          'Шесть лет до диплома врача плюс подготовительный языковой год, если вы учитесь на русском. Специализация в ординатуре обычно добавляет два года и более.',
      },
      {
        question: 'Можно ли учиться медицине на английском?',
        answer:
          'Некоторые вузы предлагают англоязычные группы. Но учтите: клиническая практика идёт с русскоязычными пациентами, а занятия по русскому остаются в программе. Такие программы также обычно дороже.',
      },
      {
        question: 'Каков совокупный годовой бюджет?',
        answer:
          'Обучение от 3500 €, плюс жильё (30–90 € в месяц в общежитии), повседневные расходы (140–260 € в месяц) и страховка (около 180 € в год). Первый год добавляет примерно 900 € разовых расходов.',
      },
      {
        question: 'Нужен ли хороший уровень по биологии и химии?',
        answer:
          'Это настоятельно рекомендуется. Эти два предмета составляют основу первых двух курсов, и крепкий аттестат по ним заметно облегчает вхождение в учёбу.',
      },
      {
        question: 'Гарантировано ли жильё?',
        answer:
          'Место в общежитии бронируется до приезда. Это самый экономный и простой вариант на первый год, пока вы не узнали город.',
      },
      {
        question: 'Позволяет ли диплом работать в Тунисе?',
        answer:
          'Процедура признания существует. Для медицинских профессий она включает отдельные этапы проверки. Уточните действующую процедуру у компетентных тунисских органов до принятия обязательств.',
      },
    ],
  },
};
