import type { DeepFiliereByLang } from './types';

/*
 * Contenu long et original de la page /filieres/ingenierie-tech.
 *
 * Données chiffrées reprises des sources réelles du site : 5 ans et
 * 2 800 €/an (PROGRAM_BASE_TUITION['ingenierie-tech']), logement et vie
 * courante (src/content/budget/data.ts), assurance 180 €/an, frais uniques
 * d'environ 900 € la première année.
 *
 * Sourcing : contrairement à la médecine, à la pharmacie et au dentaire,
 * l'ingénierie ne correspond pas à UN code de spécialité unique — chaque
 * sous-domaine a le sien. Le texte explique le système sans avancer de code
 * précis, et renvoie l'étudiant vers l'université pour le confirmer.
 */
export const INGENIERIE_TECH_DEEP: DeepFiliereByLang = {
  fr: {
    h1: "Étudier l'ingénierie et les technologies en Russie",
    metaTitle: "Étudier l'ingénierie en Russie 2026 : 5 ans, 2 800 € par an | RusStudy",
    metaDescription:
      "Étudier l'ingénierie en Russie : cursus de 5 ans, admission sur dossier, frais à partir de 2 800 € par an, programme détaillé, débouchés et reconnaissance du diplôme d'ingénieur.",
    intro:
      "L'ingénierie est la filière la plus accessible financièrement du réseau après l'économie, et elle s'appuie sur l'un des points forts historiques de l'enseignement supérieur russe. Les universités techniques d'État forment des ingénieurs en cinq ans, pour des frais de scolarité à partir de 2 800 € par an payés directement à l'établissement. RusStudy accompagne chaque candidat du dossier à l'installation : admission, invitation officielle, visa, logement universitaire et suivi pendant toute la scolarité.",
    sections: [
      {
        heading: 'Présentation du programme',
        paragraphs: [
          "Le cursus d'ingénierie mène au diplôme de spécialiste (specialitet) après cinq années d'études à temps plein, avec une qualification d'ingénieur à la sortie. Certaines universités organisent plutôt un parcours en licence de quatre ans suivi d'un master de deux ans ; le choix du format se fait au moment de l'admission et dépend de l'établissement et du domaine visé.",
          "L'enseignement se déroule principalement en russe, après une année préparatoire linguistique pour les étudiants qui ne maîtrisent pas la langue. L'ingénierie est aussi l'un des domaines où les cursus en anglais sont les plus répandus, en particulier dans les filières numériques.",
        ],
        bullets: [
          'Diplôme délivré : specialitet (ingénieur), ou licence puis master selon l’université',
          'Durée : 5 ans à temps plein, hors année préparatoire de langue',
          "Langues d'enseignement : russe (après année préparatoire) ou anglais selon l'université",
          'Admission : sur dossier scolaire, sans concours d’entrée éliminatoire',
        ],
      },
      {
        heading: 'Les domaines couverts',
        paragraphs: [
          "« Ingénierie et technologies » n'est pas une spécialité unique mais une famille de spécialités. Les domaines les plus demandés par les étudiants internationaux sont le génie mécanique, le génie civil et la construction, l'énergétique, l'électronique et l'automatique, ainsi que l'informatique et les systèmes d'information.",
          "Cette distinction a une conséquence pratique : contrairement à la médecine, qui porte un code de spécialité unique, chaque domaine d'ingénierie a le sien. Il n'existe donc pas un code à vérifier mais celui de la spécialité précise que vous visez — à demander explicitement à l'université avant de vous inscrire, car il figurera sur votre diplôme et conditionnera vos démarches d'équivalence.",
        ],
      },
      {
        heading: 'Programme année par année',
        paragraphs: [
          "Années 1 et 2 — socle scientifique : mathématiques supérieures, physique, chimie, informatique, dessin technique et géométrie descriptive, mécanique théorique. C'est le tronc commun de toutes les spécialités techniques, et c'est là que se joue la suite : un étudiant solide en mathématiques traverse ces deux années sans difficulté majeure.",
          "Années 3 et 4 — spécialisation : résistance des matériaux, science des matériaux, thermodynamique, électrotechnique, puis les disciplines propres au domaine choisi. Les travaux pratiques et les projets prennent une place croissante, souvent en laboratoire ou en atelier.",
          "Année 5 — projet et diplôme : stage en entreprise ou en bureau d'études, puis projet de fin d'études soutenu devant un jury. C'est cette soutenance qui sanctionne la qualification d'ingénieur.",
        ],
      },
      {
        heading: "Conditions d'admission",
        paragraphs: [
          "L'admission en ingénierie s'adresse aux titulaires d'un baccalauréat scientifique ou technique. Les matières déterminantes sont les mathématiques et la physique : ce sont elles qui portent les deux premières années, bien plus que la moyenne générale du baccalauréat.",
          "L'admission repose sur un dossier : relevés de notes, diplôme traduit et légalisé, passeport et documents médicaux. Après validation, l'université émet une invitation officielle qui ouvre la demande de visa d'études.",
        ],
        bullets: [
          'Baccalauréat scientifique, mathématique ou technique',
          'Matières clés : mathématiques et physique',
          'Dossier : relevés, diplôme traduit et légalisé, passeport, certificats médicaux',
          'Année préparatoire de langue pour le cursus en russe',
        ],
      },
      {
        heading: 'Coûts détaillés',
        paragraphs: [
          "Les frais de scolarité en ingénierie débutent à 2 800 € par an, soit sensiblement moins qu'en filières de santé, et varient selon l'université et la ville. Les universités techniques de région pratiquent des tarifs nettement inférieurs à ceux de Moscou.",
          "Le budget annuel comprend en outre le logement, la vie courante et l'assurance médicale obligatoire : entre 30 et 90 € par mois en résidence universitaire, 140 à 260 € par mois de vie courante selon la ville, et environ 180 € par an d'assurance.",
          "La première année ajoute des frais uniques d'environ 900 € : visa, traductions, légalisations et billet d'avion. Combinée à des frais de scolarité plus bas, l'ingénierie est de ce fait l'une des filières les plus accessibles du réseau.",
        ],
        bullets: [
          'Frais de scolarité : à partir de 2 800 € / an',
          'Logement en résidence : 30 à 90 € / mois selon la ville',
          'Vie courante : 140 à 260 € / mois selon la ville',
          'Assurance médicale obligatoire : environ 180 € / an',
          'Frais uniques de première année : environ 900 €',
        ],
      },
      {
        heading: 'Universités partenaires à dominante technique',
        paragraphs: [
          "Plusieurs établissements publics du réseau ont une vocation technique affirmée. La liste des spécialités ouvertes et des langues d'enseignement se confirme au moment du choix de l'université : demandez le code exact de la spécialité visée avant de vous engager.",
        ],
        links: [
          { universitySlug: 'universite-technique-bauman', label: 'Université technique Bauman' },
          { universitySlug: 'polytechnique-de-saint-petersbourg', label: 'Polytechnique de Saint-Pétersbourg' },
          { universitySlug: 'universite-technique-detat-de-lipetsk', label: "Université technique d'État de Lipetsk" },
          { universitySlug: 'universite-detat-de-toula', label: "Université d'État de Toula" },
          { universitySlug: 'universite-detat-de-moscou', label: "Université d'État de Moscou" },
        ],
      },
      {
        heading: 'Débouchés et reconnaissance du diplôme',
        paragraphs: [
          "Le diplôme délivré est un diplôme d'État russe, dont l'usage à l'étranger passe par une procédure de reconnaissance propre à chaque pays. Sur ce point, l'ingénierie présente un avantage concret par rapport aux professions de santé : dans la plupart des pays, exercer comme ingénieur ne suppose pas d'autorisation professionnelle préalable comparable à celle exigée des médecins.",
          "Cela ne dispense évidemment pas de la procédure d'équivalence pour faire reconnaître le niveau du diplôme, notamment dans la fonction publique ou pour poursuivre en doctorat. Renseignez-vous sur la procédure en vigueur auprès des autorités compétentes de votre pays avant de vous engager.",
        ],
      },
    ],
    faq: [
      {
        question: 'Faut-il être bon en mathématiques pour réussir ?',
        answer:
          "C'est le facteur le plus déterminant. Les deux premières années reposent sur les mathématiques supérieures et la physique ; un dossier solide dans ces matières compte davantage que la moyenne générale du baccalauréat.",
      },
      {
        question: 'Peut-on étudier l’ingénierie en anglais en Russie ?',
        answer:
          "Oui, c'est l'un des domaines où les cursus anglophones sont les plus répandus, en particulier en informatique. Ils sont généralement plus chers que les cursus en russe, et moins nombreux dans les universités de région.",
      },
      {
        question: 'Quelle est la durée exacte du cursus ?',
        answer:
          "Cinq ans pour le diplôme d'ingénieur, hors année préparatoire de langue. Certaines universités proposent à la place une licence de quatre ans suivie d'un master de deux ans : le format se confirme à l'admission.",
      },
      {
        question: 'Quels domaines sont accessibles ?',
        answer:
          "Génie mécanique, génie civil et construction, énergétique, électronique et automatique, informatique et systèmes d'information figurent parmi les plus demandés. L'offre exacte dépend de l'université.",
      },
      {
        question: 'Quel est le budget annuel total ?',
        answer:
          "Frais de scolarité à partir de 2 800 €, auxquels s'ajoutent le logement (30 à 90 € par mois en résidence), la vie courante (140 à 260 € par mois) et l'assurance (environ 180 € par an). La première année ajoute environ 900 € de frais uniques.",
      },
      {
        question: 'Y a-t-il des stages pendant le cursus ?',
        answer:
          "Oui. Les travaux pratiques et les projets montent en puissance à partir de la troisième année, et la dernière année comporte un stage puis un projet de fin d'études soutenu devant un jury.",
      },
      {
        question: 'Le diplôme d’ingénieur russe est-il reconnu ?',
        answer:
          "Il s'agit d'un diplôme d'État, soumis à une procédure de reconnaissance propre à chaque pays. Contrairement aux professions de santé, exercer comme ingénieur n'exige généralement pas d'autorisation professionnelle préalable, ce qui simplifie les démarches.",
      },
    ],
  },
  en: {
    h1: 'Studying engineering and technology in Russia',
    metaTitle: 'Studying Engineering in Russia 2026: 5 Years, €2,800 per Year | RusStudy',
    metaDescription:
      'Studying engineering in Russia: a 5-year course, admission on school record, fees from €2,800 per year, detailed curriculum, career paths and recognition of the engineering degree.',
    intro:
      'Engineering is the most financially accessible programme in the network after economics, and it draws on one of the historic strengths of Russian higher education. State technical universities train engineers over five years, for tuition starting at €2,800 per year paid directly to the institution. RusStudy supports every applicant from the file to settling in: admission, official invitation, visa, university accommodation and follow-up throughout the course.',
    sections: [
      {
        heading: 'Programme overview',
        paragraphs: [
          'The engineering course leads to the specialist degree (specialitet) after five years of full-time study, with an engineer qualification on completion. Some universities instead run a four-year bachelor followed by a two-year master; the format is settled at admission and depends on the institution and the chosen field.',
          'Teaching is mainly in Russian, after a preparatory language year for students who do not master the language. Engineering is also one of the fields where English-taught courses are most widespread, particularly in digital disciplines.',
        ],
        bullets: [
          'Degree awarded: specialitet (engineer), or bachelor then master depending on the university',
          'Duration: 5 years full-time, excluding the preparatory language year',
          'Languages of instruction: Russian (after the preparatory year) or English depending on the university',
          'Admission: on school record, with no eliminating entrance competition',
        ],
      },
      {
        heading: 'The fields covered',
        paragraphs: [
          '"Engineering and technology" is not a single specialty but a family of them. The fields most in demand among international students are mechanical engineering, civil engineering and construction, energy, electronics and automation, and computer science and information systems.',
          'That distinction has a practical consequence: unlike medicine, which carries a single specialty code, each engineering field has its own. There is therefore not one code to check but the code of the precise specialty you are targeting — to be requested explicitly from the university before enrolling, since it will appear on your degree and will govern your equivalence procedures.',
        ],
      },
      {
        heading: 'Year-by-year curriculum',
        paragraphs: [
          'Years 1 and 2 — scientific foundation: higher mathematics, physics, chemistry, computing, technical drawing and descriptive geometry, theoretical mechanics. This is the common core of every technical specialty, and it determines what follows: a student solid in mathematics gets through these two years without major difficulty.',
          'Years 3 and 4 — specialisation: strength of materials, materials science, thermodynamics, electrical engineering, then the disciplines specific to the chosen field. Practical work and projects take up a growing share, often in laboratories or workshops.',
          'Year 5 — project and degree: a placement in a company or design office, then a final-year project defended before a panel. It is that defence that confers the engineer qualification.',
        ],
      },
      {
        heading: 'Admission requirements',
        paragraphs: [
          'Admission to engineering is open to holders of a science or technical baccalaureate. The decisive subjects are mathematics and physics: they carry the first two years far more than the overall baccalaureate average does.',
          'Admission rests on a file: transcripts, translated and legalised diploma, passport and medical documents. Once validated, the university issues an official invitation that opens the student visa application.',
        ],
        bullets: [
          'Science, mathematics or technical baccalaureate',
          'Key subjects: mathematics and physics',
          'File: transcripts, translated and legalised diploma, passport, medical certificates',
          'Preparatory language year for the Russian-taught course',
        ],
      },
      {
        heading: 'Detailed costs',
        paragraphs: [
          'Engineering tuition starts at €2,800 per year, noticeably less than health programmes, and varies by university and city. Regional technical universities charge considerably less than those in Moscow.',
          'The annual budget also covers accommodation, daily living and compulsory medical insurance: between €30 and €90 per month in university halls, €140 to €260 per month of daily living depending on the city, and around €180 per year for insurance.',
          'The first year adds one-off costs of around €900: visa, translations, legalisations and the flight. Combined with lower tuition, that makes engineering one of the most accessible programmes in the network.',
        ],
        bullets: [
          'Tuition: from €2,800 / year',
          'Hall accommodation: €30 to €90 / month depending on the city',
          'Daily living: €140 to €260 / month depending on the city',
          'Compulsory medical insurance: around €180 / year',
          'One-off first-year costs: around €900',
        ],
      },
      {
        heading: 'Partner universities with a technical focus',
        paragraphs: [
          'Several public institutions in the network have a clear technical vocation. The list of open specialties and languages of instruction is confirmed when choosing the university: ask for the exact code of the specialty you are targeting before committing.',
        ],
        links: [
          { universitySlug: 'universite-technique-bauman', label: 'Bauman Technical University' },
          { universitySlug: 'polytechnique-de-saint-petersbourg', label: 'Saint Petersburg Polytechnic' },
          { universitySlug: 'universite-technique-detat-de-lipetsk', label: 'Lipetsk State Technical University' },
          { universitySlug: 'universite-detat-de-toula', label: 'Tula State University' },
          { universitySlug: 'universite-detat-de-moscou', label: 'Moscow State University' },
        ],
      },
      {
        heading: 'Career paths and degree recognition',
        paragraphs: [
          'The degree awarded is a Russian state degree, whose use abroad goes through a recognition procedure specific to each country. On this point engineering has a concrete advantage over the health professions: in most countries, practising as an engineer does not require prior professional authorisation comparable to that demanded of doctors.',
          'That obviously does not remove the equivalence procedure needed to have the level of the degree recognised, notably in the public sector or to continue to doctoral study. Check the procedure in force with the competent authorities in your country before committing.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do I need to be good at mathematics to succeed?',
        answer:
          'It is the single most decisive factor. The first two years rest on higher mathematics and physics; a solid record in those subjects counts for more than the overall baccalaureate average.',
      },
      {
        question: 'Can engineering be studied in English in Russia?',
        answer:
          'Yes, it is one of the fields where English-taught courses are most widespread, particularly in computer science. They are generally more expensive than Russian-taught courses, and fewer in regional universities.',
      },
      {
        question: 'How long exactly is the course?',
        answer:
          'Five years for the engineering degree, excluding the preparatory language year. Some universities instead offer a four-year bachelor followed by a two-year master: the format is confirmed at admission.',
      },
      {
        question: 'Which fields are available?',
        answer:
          'Mechanical engineering, civil engineering and construction, energy, electronics and automation, computer science and information systems are among the most in demand. The exact offering depends on the university.',
      },
      {
        question: 'What is the total annual budget?',
        answer:
          'Tuition from €2,800, plus accommodation (€30 to €90 per month in halls), daily living (€140 to €260 per month) and insurance (around €180 per year). The first year adds about €900 in one-off costs.',
      },
      {
        question: 'Are there placements during the course?',
        answer:
          'Yes. Practical work and projects ramp up from the third year, and the final year includes a placement followed by a final-year project defended before a panel.',
      },
      {
        question: 'Is the Russian engineering degree recognised?',
        answer:
          'It is a state degree, subject to a recognition procedure specific to each country. Unlike the health professions, practising as an engineer generally does not require prior professional authorisation, which simplifies matters.',
      },
    ],
  },
  ar: {
    h1: 'دراسة الهندسة والتكنولوجيا في روسيا',
    metaTitle: 'دراسة الهندسة في روسيا 2026: خمس سنوات بـ 2800 أورو سنويًا | RusStudy',
    metaDescription:
      'دراسة الهندسة في روسيا: مسار من خمس سنوات، قبول على أساس الملف، رسوم تبدأ من 2800 أورو سنويًا، برنامج مفصّل وآفاق واعتراف بشهادة المهندس.',
    intro:
      'الهندسة هي الاختصاص الأيسر ماليًا في الشبكة بعد الاقتصاد، وتستند إلى إحدى نقاط القوة التاريخية للتعليم العالي الروسي. تكوّن الجامعات التقنية الحكومية المهندسين في خمس سنوات، برسوم تبدأ من 2800 أورو سنويًا تُدفع مباشرة إلى المؤسسة. وترافق RusStudy كل مترشّح من الملف إلى الاستقرار: القبول، والدعوة الرسمية، والتأشيرة، والسكن الجامعي، والمتابعة طيلة الدراسة.',
    sections: [
      {
        heading: 'تقديم البرنامج',
        paragraphs: [
          'يؤدي مسار الهندسة إلى شهادة الاختصاصي (specialitet) بعد خمس سنوات دراسة بدوام كامل، مع صفة مهندس عند التخرّج. وتنظّم بعض الجامعات بدل ذلك مسارًا بإجازة في أربع سنوات متبوعة بماجستير في سنتين؛ ويُحسم اختيار الصيغة عند القبول حسب المؤسسة والمجال المستهدف.',
          'يتم التدريس أساسًا بالروسية، بعد سنة تحضيرية لغوية للطلبة الذين لا يتقنون اللغة. والهندسة أيضًا من أكثر المجالات انتشارًا للمسالك بالإنجليزية، خاصة في الاختصاصات الرقمية.',
        ],
        bullets: [
          'الشهادة المسلّمة: specialitet (مهندس)، أو إجازة ثم ماجستير حسب الجامعة',
          'المدة: 5 سنوات بدوام كامل، دون احتساب السنة التحضيرية للغة',
          'لغات التدريس: الروسية (بعد السنة التحضيرية) أو الإنجليزية حسب الجامعة',
          'القبول: على أساس الملف الدراسي، دون مناظرة دخول إقصائية',
        ],
      },
      {
        heading: 'المجالات المشمولة',
        paragraphs: [
          '«الهندسة والتكنولوجيا» ليست اختصاصًا واحدًا بل عائلة من الاختصاصات. وأكثر المجالات طلبًا لدى الطلبة الدوليين هي الهندسة الميكانيكية، والهندسة المدنية والبناء، والطاقة، والإلكترونيك والآليات، والإعلامية ونظم المعلومات.',
          'ولهذا التمييز نتيجة عملية: فخلافًا للطب الذي يحمل رمز اختصاص وحيدًا، لكل مجال هندسي رمزه الخاص. فليس هناك إذن رمز واحد يُتحقّق منه، بل رمز الاختصاص الدقيق الذي تستهدفه — ويجب طلبه صراحة من الجامعة قبل التسجيل، لأنه سيظهر على شهادتك وسيحكم إجراءات معادلتك.',
        ],
      },
      {
        heading: 'البرنامج سنة بسنة',
        paragraphs: [
          'السنتان الأولى والثانية — القاعدة العلمية: الرياضيات العليا، والفيزياء، والكيمياء، والإعلامية، والرسم التقني والهندسة الوصفية، والميكانيك النظري. وهذا هو الجذع المشترك لكل الاختصاصات التقنية، وفيه يتحدّد ما يليه: فالطالب المتين في الرياضيات يعبر هاتين السنتين دون صعوبة تُذكر.',
          'السنتان الثالثة والرابعة — التخصص: مقاومة المواد، وعلم المواد، والترموديناميك، والكهروتقني، ثم الاختصاصات الخاصة بالمجال المختار. وتأخذ الأشغال التطبيقية والمشاريع حيّزًا متزايدًا، غالبًا في المخابر أو الورشات.',
          'السنة الخامسة — المشروع والشهادة: تربّص في مؤسسة أو مكتب دراسات، ثم مشروع ختم الدروس يُناقَش أمام لجنة. وهذه المناقشة هي ما يمنح صفة المهندس.',
        ],
      },
      {
        heading: 'شروط القبول',
        paragraphs: [
          'القبول في الهندسة موجّه لحاملي باكالوريا علمية أو تقنية. والمادتان الحاسمتان هما الرياضيات والفيزياء: فهما اللتان تحملان السنتين الأوليين، أكثر بكثير من المعدل العام للباكالوريا.',
          'ويقوم القبول على ملف: كشوف الأعداد، والشهادة مترجمة ومصدّقة، وجواز السفر، والوثائق الطبية. وبعد المصادقة، تصدر الجامعة دعوة رسمية تفتح باب مطلب تأشيرة الدراسة.',
        ],
        bullets: [
          'باكالوريا علمية أو رياضية أو تقنية',
          'المادتان الأساسيتان: الرياضيات والفيزياء',
          'الملف: كشوف الأعداد، الشهادة مترجمة ومصدّقة، جواز السفر، شهادات طبية',
          'سنة تحضيرية للغة بالنسبة إلى المسار بالروسية',
        ],
      },
      {
        heading: 'التكاليف بالتفصيل',
        paragraphs: [
          'تبدأ رسوم الهندسة من 2800 أورو سنويًا، أي أقل بوضوح من اختصاصات الصحة، وتختلف حسب الجامعة والمدينة. والجامعات التقنية في الأقاليم تعتمد تعريفات أدنى بكثير من موسكو.',
          'وتشمل الميزانية السنوية كذلك السكن والمعيشة اليومية والتأمين الطبي الإجباري: بين 30 و90 أورو شهريًا في الإقامة الجامعية، ومن 140 إلى 260 أورو شهريًا للمعيشة حسب المدينة، ونحو 180 أورو سنويًا للتأمين.',
          'وتضيف السنة الأولى مصاريف ظرفية بنحو 900 أورو: التأشيرة والترجمات والتصديقات وتذكرة الطائرة. ومع رسوم دراسية أدنى، تصبح الهندسة بذلك من أيسر اختصاصات الشبكة.',
        ],
        bullets: [
          'الرسوم الدراسية: ابتداءً من 2800 أورو / سنة',
          'السكن في الإقامة: من 30 إلى 90 أورو / شهر حسب المدينة',
          'المعيشة اليومية: من 140 إلى 260 أورو / شهر حسب المدينة',
          'التأمين الطبي الإجباري: نحو 180 أورو / سنة',
          'مصاريف ظرفية في السنة الأولى: نحو 900 أورو',
        ],
      },
      {
        heading: 'الجامعات الشريكة ذات الصبغة التقنية',
        paragraphs: [
          'لعدة مؤسسات عمومية في الشبكة توجّه تقني واضح. وتُؤكَّد قائمة الاختصاصات المفتوحة ولغات التدريس عند اختيار الجامعة: اطلب الرمز الدقيق للاختصاص المستهدف قبل أن تلتزم.',
        ],
        links: [
          { universitySlug: 'universite-technique-bauman', label: 'جامعة باومان التقنية' },
          { universitySlug: 'polytechnique-de-saint-petersbourg', label: 'بوليتكنيك سان بطرسبورغ' },
          { universitySlug: 'universite-technique-detat-de-lipetsk', label: 'جامعة ليبتسك التقنية الحكومية' },
          { universitySlug: 'universite-detat-de-toula', label: 'جامعة تولا الحكومية' },
          { universitySlug: 'universite-detat-de-moscou', label: 'جامعة موسكو الحكومية' },
        ],
      },
      {
        heading: 'الآفاق والاعتراف بالشهادة',
        paragraphs: [
          'الشهادة المسلّمة شهادة دولة روسية، واستعمالها بالخارج يمرّ عبر إجراء اعتراف خاص بكل بلد. وفي هذه النقطة تحظى الهندسة بميزة ملموسة مقارنة بمهن الصحة: ففي أغلب البلدان، لا تستلزم ممارسة المهنة كمهندس ترخيصًا مهنيًا مسبقًا يماثل ما يُطلب من الأطباء.',
          'ولا يعفي ذلك طبعًا من إجراء المعادلة للاعتراف بمستوى الشهادة، خاصة في الوظيفة العمومية أو لمواصلة الدكتوراه. استفسر عن الإجراء الساري لدى السلطات المختصة في بلدك قبل الالتزام.',
        ],
      },
    ],
    faq: [
      {
        question: 'هل يجب أن أكون جيدًا في الرياضيات للنجاح؟',
        answer:
          'هذا هو العامل الأكثر حسمًا. فالسنتان الأوليان تقومان على الرياضيات العليا والفيزياء؛ وملف متين في هاتين المادتين يُحسب أكثر من المعدل العام للباكالوريا.',
      },
      {
        question: 'هل يمكن دراسة الهندسة بالإنجليزية في روسيا؟',
        answer:
          'نعم، فهي من أكثر المجالات انتشارًا للمسالك الأنڨلوفونية، خاصة في الإعلامية. وهي عمومًا أغلى من المسالك بالروسية، وأقل عددًا في جامعات الأقاليم.',
      },
      {
        question: 'ما هي المدة الدقيقة للمسار؟',
        answer:
          'خمس سنوات لشهادة المهندس، دون احتساب السنة التحضيرية للغة. وتقترح بعض الجامعات بدلًا من ذلك إجازة في أربع سنوات متبوعة بماجستير في سنتين: وتُؤكَّد الصيغة عند القبول.',
      },
      {
        question: 'ما هي المجالات المتاحة؟',
        answer:
          'الهندسة الميكانيكية، والهندسة المدنية والبناء، والطاقة، والإلكترونيك والآليات، والإعلامية ونظم المعلومات من بين الأكثر طلبًا. والعرض الدقيق يتوقف على الجامعة.',
      },
      {
        question: 'ما هي الميزانية السنوية الجملية؟',
        answer:
          'رسوم دراسية ابتداءً من 2800 أورو، يُضاف إليها السكن (من 30 إلى 90 أورو شهريًا في الإقامة)، والمعيشة اليومية (من 140 إلى 260 أورو شهريًا)، والتأمين (نحو 180 أورو سنويًا). وتضيف السنة الأولى نحو 900 أورو من المصاريف الظرفية.',
      },
      {
        question: 'هل توجد تربّصات أثناء الدراسة؟',
        answer:
          'نعم. ترتفع وتيرة الأشغال التطبيقية والمشاريع ابتداءً من السنة الثالثة، وتتضمّن السنة الأخيرة تربّصًا ثم مشروع ختم دروس يُناقَش أمام لجنة.',
      },
      {
        question: 'هل شهادة المهندس الروسية معترف بها؟',
        answer:
          'هي شهادة دولة، تخضع لإجراء اعتراف خاص بكل بلد. وخلافًا لمهن الصحة، لا تستلزم ممارسة المهنة كمهندس ترخيصًا مهنيًا مسبقًا عمومًا، ما يبسّط الإجراءات.',
      },
    ],
  },
  ru: {
    h1: 'Учёба на инженерных и технических направлениях в России',
    metaTitle: 'Инженерное образование в России 2026: пять лет, 2800 € в год | RusStudy',
    metaDescription:
      'Инженерное образование в России: пятилетняя программа, зачисление по школьным документам, стоимость от 2800 € в год, подробная программа, перспективы и признание инженерного диплома.',
    intro:
      'Инженерные направления — самые доступные по стоимости в сети после экономики, и они опираются на одну из исторических сильных сторон российского высшего образования. Государственные технические вузы готовят инженеров за пять лет при стоимости обучения от 2800 € в год, которая платится напрямую вузу. RusStudy сопровождает каждого абитуриента от подачи документов до обустройства: зачисление, официальное приглашение, виза, общежитие и поддержка на всём протяжении учёбы.',
    sections: [
      {
        heading: 'О программе',
        paragraphs: [
          'Инженерная программа ведёт к диплому специалиста (специалитет) после пяти лет очного обучения, с квалификацией инженера на выходе. Некоторые вузы вместо этого организуют четырёхлетний бакалавриат с последующей двухлетней магистратурой; формат определяется при зачислении и зависит от учреждения и выбранного направления.',
          'Обучение ведётся преимущественно на русском, после подготовительного языкового года для тех, кто не владеет языком. Инженерия — также одна из областей, где англоязычные программы распространены шире всего, особенно в цифровых дисциплинах.',
        ],
        bullets: [
          'Выдаваемый диплом: специалитет (инженер) либо бакалавриат и магистратура в зависимости от вуза',
          'Длительность: 5 лет очно, не считая подготовительного языкового года',
          'Языки обучения: русский (после подготовительного года) или английский в зависимости от вуза',
          'Зачисление: по школьным документам, без отсеивающего вступительного конкурса',
        ],
      },
      {
        heading: 'Охватываемые направления',
        paragraphs: [
          '«Инженерия и технологии» — не одна специальность, а их семейство. Наиболее востребованные у иностранных студентов направления: машиностроение, строительство и гражданское строительство, энергетика, электроника и автоматика, а также информатика и информационные системы.',
          'У этого различия есть практическое следствие: в отличие от медицины с её единым кодом специальности, у каждого инженерного направления код свой. Поэтому проверять нужно не один код, а код конкретной выбранной специальности — его следует прямо запросить в вузе до зачисления, поскольку он попадёт в диплом и будет определять процедуры признания.',
        ],
      },
      {
        heading: 'Программа по годам',
        paragraphs: [
          'Первый и второй курсы — научная база: высшая математика, физика, химия, информатика, техническое черчение и начертательная геометрия, теоретическая механика. Это общий ствол всех технических специальностей, и именно здесь решается дальнейшее: студент, крепкий в математике, проходит эти два года без серьёзных трудностей.',
          'Третий и четвёртый курсы — специализация: сопротивление материалов, материаловедение, термодинамика, электротехника, затем дисциплины выбранного направления. Практические работы и проекты занимают всё большую долю, часто в лабораториях и мастерских.',
          'Пятый курс — проект и диплом: практика на предприятии или в конструкторском бюро, затем выпускной проект с защитой перед комиссией. Именно эта защита даёт квалификацию инженера.',
        ],
      },
      {
        heading: 'Условия поступления',
        paragraphs: [
          'Поступление на инженерные направления открыто обладателям аттестата естественно-научного или технического профиля. Решающие предметы — математика и физика: именно они несут первые два курса, куда больше, чем общий средний балл аттестата.',
          'Зачисление опирается на пакет документов: выписки оценок, переведённый и легализованный аттестат, паспорт и медицинские документы. После проверки вуз выдаёт официальное приглашение, открывающее подачу на учебную визу.',
        ],
        bullets: [
          'Аттестат естественно-научного, математического или технического профиля',
          'Ключевые предметы: математика и физика',
          'Пакет: выписки, переведённый и легализованный аттестат, паспорт, медицинские справки',
          'Подготовительный языковой год для русскоязычной программы',
        ],
      },
      {
        heading: 'Подробная стоимость',
        paragraphs: [
          'Стоимость инженерного обучения начинается от 2800 € в год — заметно меньше, чем на направлениях здравоохранения, — и зависит от вуза и города. Региональные технические вузы берут существенно меньше московских.',
          'Годовой бюджет включает также жильё, повседневные расходы и обязательную медицинскую страховку: от 30 до 90 € в месяц в общежитии, от 140 до 260 € в месяц на жизнь в зависимости от города и около 180 € в год на страховку.',
          'Первый год добавляет разовые расходы около 900 €: виза, переводы, легализация и авиабилет. В сочетании с более низкой платой за обучение это делает инженерные направления одними из самых доступных в сети.',
        ],
        bullets: [
          'Обучение: от 2800 € / год',
          'Общежитие: 30–90 € / месяц в зависимости от города',
          'Повседневные расходы: 140–260 € / месяц в зависимости от города',
          'Обязательная медицинская страховка: около 180 € / год',
          'Разовые расходы первого года: около 900 €',
        ],
      },
      {
        heading: 'Вузы-партнёры технического профиля',
        paragraphs: [
          'У нескольких государственных вузов сети выраженная техническая направленность. Перечень открытых специальностей и языков обучения уточняется при выборе вуза: запросите точный код интересующей специальности до того, как брать обязательства.',
        ],
        links: [
          { universitySlug: 'universite-technique-bauman', label: 'МГТУ имени Н. Э. Баумана' },
          { universitySlug: 'polytechnique-de-saint-petersbourg', label: 'СПбПУ Петра Великого' },
          { universitySlug: 'universite-technique-detat-de-lipetsk', label: 'Липецкий государственный технический университет' },
          { universitySlug: 'universite-detat-de-toula', label: 'Тульский государственный университет' },
          { universitySlug: 'universite-detat-de-moscou', label: 'МГУ имени М. В. Ломоносова' },
        ],
      },
      {
        heading: 'Перспективы и признание диплома',
        paragraphs: [
          'Выдаваемый диплом — документ государственного образца, использование которого за рубежом проходит через процедуру признания, свою в каждой стране. Здесь у инженерии есть осязаемое преимущество перед медицинскими профессиями: в большинстве стран работа инженером не требует предварительного профессионального допуска, сопоставимого с врачебным.',
          'Это, разумеется, не отменяет процедуру признания уровня диплома — в частности для государственной службы или для продолжения в аспирантуре. Уточните действующую процедуру у компетентных органов своей страны до принятия обязательств.',
        ],
      },
    ],
    faq: [
      {
        question: 'Нужно ли хорошо знать математику, чтобы справиться?',
        answer:
          'Это самый решающий фактор. Первые два курса опираются на высшую математику и физику; крепкие оценки по этим предметам значат больше, чем общий средний балл аттестата.',
      },
      {
        question: 'Можно ли изучать инженерные направления на английском в России?',
        answer:
          'Да, это одна из областей, где англоязычные программы распространены шире всего, особенно в информатике. Они обычно дороже русскоязычных и реже встречаются в региональных вузах.',
      },
      {
        question: 'Какова точная длительность программы?',
        answer:
          'Пять лет до инженерного диплома, не считая подготовительного языкового года. Некоторые вузы предлагают вместо этого четырёхлетний бакалавриат и двухлетнюю магистратуру: формат уточняется при зачислении.',
      },
      {
        question: 'Какие направления доступны?',
        answer:
          'Машиностроение, строительство, энергетика, электроника и автоматика, информатика и информационные системы — среди самых востребованных. Точное предложение зависит от вуза.',
      },
      {
        question: 'Каков совокупный годовой бюджет?',
        answer:
          'Обучение от 2800 €, плюс жильё (30–90 € в месяц в общежитии), повседневные расходы (140–260 € в месяц) и страховка (около 180 € в год). Первый год добавляет примерно 900 € разовых расходов.',
      },
      {
        question: 'Есть ли практика во время учёбы?',
        answer:
          'Да. Практические работы и проекты набирают вес с третьего курса, а выпускной год включает практику и затем выпускной проект с защитой перед комиссией.',
      },
      {
        question: 'Признаётся ли российский инженерный диплом?',
        answer:
          'Это диплом государственного образца, подпадающий под процедуру признания, свою в каждой стране. В отличие от медицинских профессий, работа инженером обычно не требует предварительного профессионального допуска, что упрощает дело.',
      },
    ],
  },
};
