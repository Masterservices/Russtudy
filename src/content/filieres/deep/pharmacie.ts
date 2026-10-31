import type { DeepFiliereByLang } from './types';

/*
 * Contenu long et original de la page /filieres/pharmacie (spécialité russe
 * 33.05.01). Données chiffrées reprises des sources réelles du site :
 * frais 3 200 €/an (PROGRAM_BASE_TUITION[2]), logement/vie courante
 * (src/content/budget/data.ts), assurance 180 €/an, frais uniques ~900 €.
 * TODO produit : confirmer la liste exacte des universités du réseau
 * proposant la spécialité 33.05.01 (la section universités reste volontairement
 * générale et renvoie vers les fiches établissements existantes).
 */
export const PHARMACIE_DEEP: DeepFiliereByLang = {
  fr: {
    h1: 'Étudier la pharmacie en Russie',
    metaTitle: 'Étudier la pharmacie en Russie 2026 | RusStudy',
    metaDescription:
      "Étudier la pharmacie en Russie : spécialité 33.05.01 en 5 ans, conditions d'admission, coûts détaillés et débouchés reconnus. Accompagnement RusStudy de A à Z.",
    intro:
      "La pharmacie est l'une des filières de santé les plus demandées par les bacheliers tunisiens qui choisissent la Russie. Les universités d'État russes forment des pharmaciens en cinq ans, dans un cadre public accrédité, pour des frais de scolarité à partir de 3 200 € par an payés directement à l'établissement. RusStudy accompagne chaque candidat de l'admission jusqu'à l'installation sur place : dossier, invitation officielle, visa, logement universitaire et suivi pendant toute la scolarité.",
    sections: [
      {
        heading: 'Présentation du programme',
        paragraphs: [
          "Le cursus de pharmacie en Russie mène au diplôme de spécialiste (specialitet), équivalent à un master intégré, obtenu après cinq années d'études à temps plein. Il ne s'agit pas d'un système licence-master séparé : l'étudiant suit un parcours continu qui combine sciences fondamentales, sciences pharmaceutiques et pratique professionnelle, sanctionné par un examen d'État final et l'attribution de la qualification de pharmacien.",
          "L'enseignement se déroule principalement en russe. Les étudiants qui ne maîtrisent pas la langue à leur arrivée suivent d'abord une année préparatoire linguistique avant d'intégrer la première année. Certaines universités proposent aussi des groupes en anglais pour les premières années ; la disponibilité varie d'un établissement à l'autre et se confirme au moment du choix de l'université.",
        ],
        bullets: [
          'Diplôme délivré : specialitet (spécialiste en pharmacie), master intégré',
          'Durée : 5 ans à temps plein',
          "Langues d'enseignement : russe (après année préparatoire) ou anglais selon l'université",
          'Rythme : semestres avec contrôle continu et sessions d’examens',
        ],
      },
      {
        heading: 'Code officiel de la spécialité russe',
        paragraphs: [
          "En Russie, chaque spécialité universitaire porte un code officiel défini par le ministère de l'Enseignement supérieur. La pharmacie correspond au code 33.05.01 « Фармация » (Farmatsiya). Ce code figure sur le diplôme et sur son supplément descriptif, et sert de référence lors des démarches d'équivalence à l'étranger.",
          "Connaître ce code aide à vérifier l'accréditation d'un programme : il garantit que l'université est habilitée par l'État à délivrer un diplôme de pharmacien reconnu, et non un simple certificat. Toutes les universités partenaires de RusStudy sont des établissements publics accrédités pour la spécialité 33.05.01.",
        ],
      },
      {
        heading: 'Programme année par année',
        paragraphs: [
          'Années 1 et 2 — fondamentaux : chimie générale, inorganique et organique, botanique pharmaceutique, anatomie et physiologie humaines, biologie, physique et latin pharmaceutique. Cette phase installe les repères en chimie et en sciences du vivant sur lesquels repose tout le reste du cursus.',
          "Années 3 et 4 — sciences pharmaceutiques : chimie pharmaceutique et analytique, pharmacognosie (substances d'origine naturelle), pharmacologie, technologie pharmaceutique (formes galéniques), microbiologie et biochimie. L'étudiant apprend à concevoir, analyser et contrôler la qualité des médicaments.",
          "Année 5 — pratique et spécialisation : pharmacie clinique, pharmacologie clinique, chimie toxicologique, gestion et économie de l'officine, pharmacie industrielle, complétées par des stages en officine et en laboratoire. L'année se conclut par l'examen d'État et la qualification de pharmacien.",
        ],
      },
      {
        heading: "Conditions d'admission",
        paragraphs: [
          "L'admission en pharmacie s'adresse aux titulaires d'un baccalauréat scientifique. Les matières déterminantes sont la biologie et la chimie, socle du programme : un bon niveau dans ces disciplines facilite l'intégration, surtout durant les deux premières années.",
          "Le parcours d'admission avec RusStudy repose sur un dossier, et non sur un concours d'entrée classique : relevés de notes du bac, diplôme traduit et légalisé, passeport et documents médicaux. Après validation, l'université émet une invitation officielle qui ouvre la demande de visa d'études. Certaines universités peuvent organiser un entretien ou un test de niveau, notamment pour les cursus en anglais.",
        ],
        bullets: [
          'Baccalauréat scientifique ou équivalent',
          'Matières clés : biologie et chimie',
          'Dossier : relevés, diplôme traduit et légalisé, passeport, certificat médical',
          'Année préparatoire de langue pour le cursus en russe',
        ],
      },
      {
        heading: 'Coûts détaillés',
        paragraphs: [
          "Les frais de scolarité en pharmacie débutent à 3 200 € par an et varient selon l'université et la ville : les établissements de région pratiquent des tarifs plus bas que ceux de Moscou. Ces frais se règlent directement à l'université, sans intermédiaire financier.",
          "Au-delà de la scolarité, le budget annuel comprend le logement, la vie courante et l'assurance médicale obligatoire. Le logement en résidence universitaire reste l'option la plus économique, à partir d'environ 30 à 90 € par mois selon la ville ; un appartement partagé coûte davantage. La vie courante (repas, transport) se situe entre 140 et 260 € par mois, et l'assurance médicale autour de 180 € par an.",
          'La première année ajoute des frais uniques d’environ 900 € (visa, traduction des documents, billet d’avion). Au total, un budget annuel réaliste tout compris se situe le plus souvent entre 5 500 € dans les villes de région et 8 000 € à Moscou.',
        ],
        bullets: [
          'Frais de scolarité : à partir de 3 200 € / an',
          'Logement universitaire : ~30 à 90 € / mois',
          'Vie courante : ~140 à 260 € / mois',
          'Assurance médicale : ~180 € / an',
          'Frais uniques 1ère année (visa, traduction, billet) : ~900 €',
        ],
      },
      {
        heading: 'Universités partenaires proposant cette filière',
        paragraphs: [
          "La pharmacie se prépare dans les facultés de médecine et de pharmacie des universités d'État partenaires de RusStudy. Le choix de l'établissement dépend de la ville, du budget et de la langue d'enseignement souhaitée.",
          'Explorez les fiches de nos établissements pour comparer cadre de vie, ville et coûts avant de finaliser votre dossier :',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Université de Médecine Pirogov' },
          { universitySlug: 'universite-detat-de-moscou', label: "Université d'État de Moscou" },
          { universitySlug: 'universite-rudn', label: 'Université RUDN' },
          { universitySlug: 'universite-de-kazan', label: 'Université de Kazan' },
        ],
      },
      {
        heading: 'Débouchés et reconnaissance du diplôme',
        paragraphs: [
          "Le diplôme de pharmacien d'une université d'État russe accréditée permet d'exercer en officine, à l'hôpital, dans l'industrie pharmaceutique, le contrôle qualité ou la recherche. Sa forte dimension scientifique ouvre aussi la voie à des spécialisations ultérieures.",
          "En Tunisie, les parcours de médecine, de pharmacie et d'ingénierie issus des universités d'État partenaires disposent d'équivalences reconnues par le ministère de tutelle. L'exercice effectif reste soumis à l'équivalence du diplôme puis à l'inscription auprès de l'ordre professionnel compétent.",
          'Au niveau international, les universités publiques russes figurent dans les répertoires reconnus et leurs diplômes sont admis à équivalence dans de nombreux pays du Maghreb, sous réserve des règles nationales propres à chaque pays.',
        ],
      },
    ],
    faq: [
      {
        question: 'Combien coûte la pharmacie en Russie ?',
        answer:
          'Les frais de scolarité débutent à 3 200 € par an, payés directement à l’université. En ajoutant le logement, la vie courante et l’assurance, un budget annuel réaliste tout compris se situe le plus souvent entre 5 500 € en région et 8 000 € à Moscou, plus environ 900 € de frais uniques la première année.',
      },
      {
        question: 'Combien de temps durent les études de pharmacie ?',
        answer:
          'Cinq années à temps plein, menant au diplôme de spécialiste (specialitet), équivalent à un master intégré, complété par un examen d’État final et la qualification de pharmacien.',
      },
      {
        question: 'Le diplôme de pharmacie russe est-il reconnu en Tunisie ?',
        answer:
          'Oui : les diplômes de pharmacie des universités d’État partenaires bénéficient d’une procédure d’équivalence reconnue par le ministère de tutelle. L’exercice professionnel reste conditionné à l’équivalence du diplôme puis à l’inscription auprès de l’ordre des pharmaciens.',
      },
      {
        question: 'Faut-il parler russe pour étudier la pharmacie ?',
        answer:
          "Ce n'est pas indispensable au départ : les étudiants suivent une année préparatoire de langue avant la première année du cursus russe. Certaines universités proposent aussi des groupes en anglais pour les premières années.",
      },
      {
        question: "Quelles sont les conditions d'admission ?",
        answer:
          "Un baccalauréat scientifique, avec un bon niveau en biologie et en chimie. L'admission se fait sur dossier (relevés, diplôme traduit et légalisé, passeport, certificat médical), sans concours d'entrée classique.",
      },
      {
        question: 'Où loger pendant les études et à quel prix ?',
        answer:
          "Le logement en résidence universitaire est l'option la plus économique, à partir d'environ 30 à 90 € par mois selon la ville. Un appartement partagé coûte davantage. RusStudy réserve le logement avant l'arrivée.",
      },
      {
        question: "Comment obtenir le visa d'études ?",
        answer:
          "Après validation du dossier, l'université émet une invitation officielle qui ouvre la demande de visa d'études. RusStudy prépare et suit l'ensemble des démarches jusqu'à l'obtention du visa.",
      },
    ],
  },

  en: {
    h1: 'Study pharmacy in Russia',
    metaTitle: 'Study pharmacy in Russia 2026 | RusStudy',
    metaDescription:
      'Study pharmacy in Russia: 5-year specialty 33.05.01, admission requirements, detailed costs and recognized career paths. Full RusStudy support from start to finish.',
    intro:
      "Pharmacy is one of the most sought-after health programs among Tunisian school leavers who choose Russia. Russian state universities train pharmacists over five years, within an accredited public framework, with tuition from €3,200 per year paid directly to the institution. RusStudy supports each applicant from admission to arrival: application file, official invitation, visa, university housing and follow-up throughout the studies.",
    sections: [
      {
        heading: 'Programme overview',
        paragraphs: [
          "The pharmacy programme in Russia leads to a specialist diploma (specialitet), equivalent to an integrated master's, awarded after five years of full-time study. It is not a separate bachelor–master system: students follow a continuous track combining fundamental sciences, pharmaceutical sciences and professional practice, concluded by a final state exam and the award of the pharmacist qualification.",
          'Teaching is mainly in Russian. Students who do not yet speak the language first complete a preparatory language year before entering the first year. Some universities also offer English-taught groups for the early years; availability varies by institution and is confirmed when the university is chosen.',
        ],
        bullets: [
          "Degree awarded: specialitet (specialist in pharmacy), integrated master's",
          'Duration: 5 years, full-time',
          'Languages of instruction: Russian (after a preparatory year) or English depending on the university',
          'Format: semesters with continuous assessment and exam sessions',
        ],
      },
      {
        heading: 'Official Russian specialty code',
        paragraphs: [
          'In Russia every university specialty has an official code set by the Ministry of Higher Education. Pharmacy corresponds to code 33.05.01 "Фармация" (Farmatsiya). This code appears on the diploma and its descriptive supplement, and serves as a reference for equivalence procedures abroad.',
          'Knowing the code helps verify a programme’s accreditation: it confirms the university is state-authorised to award a recognised pharmacist diploma rather than a mere certificate. All RusStudy partner universities are public institutions accredited for specialty 33.05.01.',
        ],
      },
      {
        heading: 'Year-by-year curriculum',
        paragraphs: [
          'Years 1 and 2 — foundations: general, inorganic and organic chemistry, pharmaceutical botany, human anatomy and physiology, biology, physics and pharmaceutical Latin. This phase establishes the grounding in chemistry and life sciences that underpins the rest of the programme.',
          'Years 3 and 4 — pharmaceutical sciences: pharmaceutical and analytical chemistry, pharmacognosy (substances of natural origin), pharmacology, pharmaceutical technology (dosage forms), microbiology and biochemistry. Students learn to design, analyse and control the quality of medicines.',
          'Year 5 — practice and specialisation: clinical pharmacy, clinical pharmacology, toxicological chemistry, pharmacy management and economics, industrial pharmacy, together with internships in community pharmacies and laboratories. The year concludes with the state exam and the pharmacist qualification.',
        ],
      },
      {
        heading: 'Admission requirements',
        paragraphs: [
          'Admission to pharmacy is open to holders of a science-track high-school diploma. The decisive subjects are biology and chemistry, the backbone of the programme: a solid level in these disciplines makes the first two years easier.',
          'The RusStudy admission route is file-based rather than a classic entrance exam: high-school transcripts, translated and legalised diploma, passport and medical documents. Once approved, the university issues an official invitation that opens the student visa application. Some universities may hold an interview or a level test, particularly for English-taught tracks.',
        ],
        bullets: [
          'Science-track high-school diploma or equivalent',
          'Key subjects: biology and chemistry',
          'File: transcripts, translated and legalised diploma, passport, medical certificate',
          'Preparatory language year for the Russian-taught track',
        ],
      },
      {
        heading: 'Detailed costs',
        paragraphs: [
          'Pharmacy tuition starts at €3,200 per year and varies by university and city: regional institutions charge less than those in Moscow. Fees are paid directly to the university, with no financial intermediary.',
          'Beyond tuition, the annual budget includes housing, daily living and compulsory medical insurance. University dormitory housing is the most economical option, from about €30 to €90 per month depending on the city; a shared flat costs more. Daily living (meals, transport) ranges from €140 to €260 per month, and medical insurance is around €180 per year.',
          'The first year adds one-time costs of about €900 (visa, document translation, flight). In total, a realistic all-inclusive annual budget usually falls between €5,500 in regional cities and €8,000 in Moscow.',
        ],
        bullets: [
          'Tuition: from €3,200 / year',
          'University housing: ~€30 to €90 / month',
          'Daily living: ~€140 to €260 / month',
          'Medical insurance: ~€180 / year',
          'One-time first-year costs (visa, translation, flight): ~€900',
        ],
      },
      {
        heading: 'Partner universities offering this programme',
        paragraphs: [
          'Pharmacy is studied within the medical and pharmacy faculties of RusStudy’s partner state universities. The choice of institution depends on the city, the budget and the preferred language of instruction.',
          'Explore our institution pages to compare living environment, city and costs before finalising your application:',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Pirogov Medical University' },
          { universitySlug: 'universite-detat-de-moscou', label: 'Moscow State University' },
          { universitySlug: 'universite-rudn', label: 'RUDN University' },
          { universitySlug: 'universite-de-kazan', label: 'Kazan University' },
        ],
      },
      {
        heading: 'Career paths and diploma recognition',
        paragraphs: [
          'A pharmacist diploma from an accredited Russian state university opens roles in community and hospital pharmacy, the pharmaceutical industry, quality control and research. Its strong scientific dimension also leads towards later specialisations.',
          'In Tunisia, medicine, pharmacy and engineering programmes from the partner state universities benefit from equivalences recognised by the supervising ministry. Actual practice remains subject to diploma equivalence followed by registration with the relevant professional body.',
          'Internationally, Russian public universities appear in recognised directories and their diplomas are accepted for equivalence across many countries in the Maghreb, subject to each country’s national rules.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much does pharmacy cost in Russia?',
        answer:
          'Tuition starts at €3,200 per year, paid directly to the university. Adding housing, daily living and insurance, a realistic all-inclusive annual budget usually falls between €5,500 in regional cities and €8,000 in Moscow, plus about €900 in one-time first-year costs.',
      },
      {
        question: 'How long does the pharmacy programme last?',
        answer:
          "Five years of full-time study, leading to a specialist diploma (specialitet), equivalent to an integrated master's, completed by a final state exam and the pharmacist qualification.",
      },
      {
        question: 'Is the Russian pharmacy diploma recognised in Tunisia?',
        answer:
          'Yes: pharmacy diplomas from the partner state universities benefit from an equivalence procedure recognised by the supervising ministry. Professional practice remains conditional on diploma equivalence and then registration with the pharmacists’ association.',
      },
      {
        question: 'Do I need to speak Russian to study pharmacy?',
        answer:
          'Not at the outset: students complete a preparatory language year before the first year of the Russian-taught programme. Some universities also offer English-taught groups for the early years.',
      },
      {
        question: 'What are the admission requirements?',
        answer:
          'A science-track high-school diploma with a solid level in biology and chemistry. Admission is file-based (transcripts, translated and legalised diploma, passport, medical certificate), with no classic entrance exam.',
      },
      {
        question: 'Where do students live and at what cost?',
        answer:
          'University dormitory housing is the most economical option, from about €30 to €90 per month depending on the city. A shared flat costs more. RusStudy books housing before arrival.',
      },
      {
        question: 'How do I obtain the student visa?',
        answer:
          'Once the file is approved, the university issues an official invitation that opens the student visa application. RusStudy prepares and follows every step through to visa approval.',
      },
    ],
  },

  ar: {
    h1: 'دراسة الصيدلة في روسيا',
    metaTitle: 'دراسة الصيدلة في روسيا 2026 | RusStudy',
    metaDescription:
      'دراسة الصيدلة في روسيا: تخصص 33.05.01 على مدى 5 سنوات، شروط القبول، التكاليف التفصيلية والآفاق المعترف بها. مرافقة RusStudy الكاملة من الألف إلى الياء.',
    intro:
      'الصيدلة من أكثر تخصصات الصحة طلبًا لدى الحاصلين على البكالوريا التونسيين الذين يختارون روسيا. تُكوّن الجامعات الحكومية الروسية الصيادلة في خمس سنوات، ضمن إطار عمومي معتمد، برسوم دراسية تبدأ من 3200 € سنويًا تُدفع مباشرة للجامعة. ترافق RusStudy كل مترشح من القبول حتى الاستقرار في المكان: الملف، الدعوة الرسمية، التأشيرة، السكن الجامعي والمتابعة طوال فترة الدراسة.',
    sections: [
      {
        heading: 'تقديم البرنامج',
        paragraphs: [
          'يقود مسار الصيدلة في روسيا إلى شهادة أخصائي (specialitet) تعادل ماجستيرًا مدمجًا، تُمنح بعد خمس سنوات من الدراسة بدوام كامل. لا يتعلق الأمر بنظام إجازة–ماجستير منفصل: يتبع الطالب مسارًا متواصلًا يجمع بين العلوم الأساسية والعلوم الصيدلانية والممارسة المهنية، ويُتوَّج بامتحان دولة نهائي ومنح صفة صيدلي.',
          'يجري التدريس أساسًا باللغة الروسية. يبدأ الطلبة الذين لا يتقنون اللغة عند وصولهم بسنة تحضيرية لغوية قبل الالتحاق بالسنة الأولى. كما توفّر بعض الجامعات مجموعات باللغة الإنجليزية للسنوات الأولى؛ ويختلف توفّرها من مؤسسة إلى أخرى ويُؤكَّد عند اختيار الجامعة.',
        ],
        bullets: [
          'الشهادة الممنوحة: specialitet (أخصائي في الصيدلة)، ماجستير مدمج',
          'المدة: 5 سنوات بدوام كامل',
          'لغات التدريس: الروسية (بعد سنة تحضيرية) أو الإنجليزية حسب الجامعة',
          'النسق: فصول دراسية مع تقييم مستمر ودورات امتحانات',
        ],
      },
      {
        heading: 'الكود الرسمي للتخصص الروسي',
        paragraphs: [
          'في روسيا، يحمل كل تخصص جامعي كودًا رسميًا تحدده وزارة التعليم العالي. تقابل الصيدلة الكود 33.05.01 «Фармация» (Farmatsiya). يظهر هذا الكود على الشهادة وعلى ملحقها الوصفي، ويُستعمل كمرجع عند إجراءات المعادلة في الخارج.',
          'تساعد معرفة هذا الكود على التحقق من اعتماد البرنامج: فهو يضمن أن الجامعة مخوّلة من الدولة لمنح شهادة صيدلي معترف بها، وليس مجرد شهادة عادية. كل الجامعات الشريكة لـ RusStudy مؤسسات عمومية معتمدة للتخصص 33.05.01.',
        ],
      },
      {
        heading: 'البرنامج سنة بسنة',
        paragraphs: [
          'السنتان 1 و2 — الأساسيات: الكيمياء العامة وغير العضوية والعضوية، علم النبات الصيدلاني، تشريح ووظائف الأعضاء البشرية، الأحياء، الفيزياء واللاتينية الصيدلانية. ترسّخ هذه المرحلة أسس الكيمياء وعلوم الحياة التي يقوم عليها بقية المسار.',
          'السنتان 3 و4 — العلوم الصيدلانية: الكيمياء الصيدلانية والتحليلية، علم العقاقير (المواد ذات الأصل الطبيعي)، علم الأدوية، التكنولوجيا الصيدلانية (الأشكال الجالينية)، علم الأحياء الدقيقة والكيمياء الحيوية. يتعلّم الطالب تصميم الأدوية وتحليلها ومراقبة جودتها.',
          'السنة 5 — الممارسة والتخصص: الصيدلة السريرية، علم الأدوية السريري، الكيمياء السمّية، تسيير واقتصاد الصيدلية، الصيدلة الصناعية، إضافة إلى تربصات في الصيدليات والمخابر. تُختَتم السنة بامتحان الدولة ومنح صفة صيدلي.',
        ],
      },
      {
        heading: 'شروط القبول',
        paragraphs: [
          'يتوجّه القبول في الصيدلة إلى الحاصلين على بكالوريا علمية. المادتان الحاسمتان هما الأحياء والكيمياء، ركيزتا البرنامج: يسهّل المستوى الجيد فيهما الاندماج، خاصة خلال السنتين الأوليين.',
          'يقوم مسار القبول مع RusStudy على الملف، وليس على مناظرة دخول تقليدية: كشوف نقاط البكالوريا، الشهادة مترجمة ومصادق عليها، جواز السفر والوثائق الطبية. بعد المصادقة، تصدر الجامعة دعوة رسمية تفتح طلب تأشيرة الدراسة. قد تنظّم بعض الجامعات مقابلة أو اختبار مستوى، خاصة للمسارات باللغة الإنجليزية.',
        ],
        bullets: [
          'بكالوريا علمية أو ما يعادلها',
          'المواد الأساسية: الأحياء والكيمياء',
          'الملف: كشوف النقاط، الشهادة المترجمة والمصادق عليها، جواز السفر، شهادة طبية',
          'سنة تحضيرية لغوية للمسار باللغة الروسية',
        ],
      },
      {
        heading: 'التكاليف التفصيلية',
        paragraphs: [
          'تبدأ رسوم الصيدلة من 3200 € سنويًا وتختلف حسب الجامعة والمدينة: تطبّق مؤسسات الأقاليم أسعارًا أقل من موسكو. تُدفع هذه الرسوم مباشرة للجامعة، دون وسيط مالي.',
          'إلى جانب الرسوم، تشمل الميزانية السنوية السكن والمعيشة اليومية والتأمين الطبي الإجباري. يبقى السكن الجامعي الخيار الأكثر اقتصادًا، ابتداءً من نحو 30 إلى 90 € شهريًا حسب المدينة؛ أما الشقة المشتركة فأغلى. تتراوح المعيشة اليومية (الأكل، النقل) بين 140 و260 € شهريًا، والتأمين الطبي نحو 180 € سنويًا.',
          'تضيف السنة الأولى مصاريف وحيدة بنحو 900 € (التأشيرة، ترجمة الوثائق، تذكرة الطائرة). في المجموع، تتراوح ميزانية سنوية واقعية شاملة غالبًا بين 5500 € في مدن الأقاليم و8000 € في موسكو.',
        ],
        bullets: [
          'رسوم الدراسة: ابتداءً من 3200 € / سنة',
          'السكن الجامعي: ~30 إلى 90 € / شهر',
          'المعيشة اليومية: ~140 إلى 260 € / شهر',
          'التأمين الطبي: ~180 € / سنة',
          'مصاريف وحيدة للسنة الأولى (تأشيرة، ترجمة، تذكرة): ~900 €',
        ],
      },
      {
        heading: 'الجامعات الشريكة التي توفّر هذا التخصص',
        paragraphs: [
          'تُدرَّس الصيدلة ضمن كليات الطب والصيدلة في الجامعات الحكومية الشريكة لـ RusStudy. يتوقّف اختيار المؤسسة على المدينة والميزانية ولغة التدريس المرغوبة.',
          'استكشف صفحات مؤسساتنا لمقارنة إطار العيش والمدينة والتكاليف قبل إتمام ملفك:',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'جامعة بيروغوف للطب' },
          { universitySlug: 'universite-detat-de-moscou', label: 'جامعة موسكو الحكومية' },
          { universitySlug: 'universite-rudn', label: 'جامعة RUDN' },
          { universitySlug: 'universite-de-kazan', label: 'جامعة قازان' },
        ],
      },
      {
        heading: 'الآفاق والاعتراف بالشهادة',
        paragraphs: [
          'تتيح شهادة الصيدلي من جامعة حكومية روسية معتمدة العمل في الصيدلية والمستشفى والصناعة الدوائية ومراقبة الجودة والبحث. كما يفتح بعدها العلمي القوي الطريق أمام تخصصات لاحقة.',
          'في تونس، تتمتّع مسارات الطب والصيدلة والهندسة من الجامعات الحكومية الشريكة بمعادلات معترف بها من الوزارة المشرفة. تبقى الممارسة الفعلية خاضعة لمعادلة الشهادة ثم التسجيل لدى الهيئة المهنية المختصة.',
          'دوليًا، تظهر الجامعات العمومية الروسية في الأدلة المعترف بها، وتُقبَل شهاداتها للمعادلة في العديد من بلدان المغرب العربي، مع مراعاة القواعد الوطنية لكل بلد.',
        ],
      },
    ],
    faq: [
      {
        question: 'كم تكلّف دراسة الصيدلة في روسيا؟',
        answer:
          'تبدأ رسوم الدراسة من 3200 € سنويًا، تُدفع مباشرة للجامعة. بإضافة السكن والمعيشة والتأمين، تتراوح ميزانية سنوية واقعية شاملة غالبًا بين 5500 € في الأقاليم و8000 € في موسكو، إضافة إلى نحو 900 € مصاريف وحيدة في السنة الأولى.',
      },
      {
        question: 'كم تدوم دراسة الصيدلة؟',
        answer:
          'خمس سنوات بدوام كامل، تقود إلى شهادة أخصائي (specialitet) تعادل ماجستيرًا مدمجًا، مع امتحان دولة نهائي ومنح صفة صيدلي.',
      },
      {
        question: 'هل شهادة الصيدلة الروسية معترف بها في تونس؟',
        answer:
          'نعم: تتمتّع شهادات الصيدلة من الجامعات الحكومية الشريكة بإجراء معادلة معترف به من الوزارة المشرفة. تبقى الممارسة المهنية مشروطة بمعادلة الشهادة ثم التسجيل لدى هيئة الصيادلة.',
      },
      {
        question: 'هل يجب التحدث بالروسية لدراسة الصيدلة؟',
        answer:
          'ليس ضروريًا في البداية: يتابع الطلبة سنة تحضيرية لغوية قبل السنة الأولى من المسار الروسي. كما توفّر بعض الجامعات مجموعات باللغة الإنجليزية للسنوات الأولى.',
      },
      {
        question: 'ما هي شروط القبول؟',
        answer:
          'بكالوريا علمية بمستوى جيد في الأحياء والكيمياء. يتم القبول على أساس الملف (كشوف النقاط، الشهادة المترجمة والمصادق عليها، جواز السفر، شهادة طبية)، دون مناظرة دخول تقليدية.',
      },
      {
        question: 'أين يقيم الطالب وبأي تكلفة؟',
        answer:
          'السكن الجامعي هو الخيار الأكثر اقتصادًا، ابتداءً من نحو 30 إلى 90 € شهريًا حسب المدينة. أما الشقة المشتركة فأغلى. تحجز RusStudy السكن قبل الوصول.',
      },
      {
        question: 'كيف يتم الحصول على تأشيرة الدراسة؟',
        answer:
          'بعد المصادقة على الملف، تصدر الجامعة دعوة رسمية تفتح طلب تأشيرة الدراسة. تُعدّ RusStudy كل الإجراءات وتتابعها حتى الحصول على التأشيرة.',
      },
    ],
  },

  ru: {
    h1: 'Изучать фармацию в России',
    metaTitle: 'Фармация в России 2026 | RusStudy',
    metaDescription:
      'Фармация в России: специальность 33.05.01, 5 лет, условия поступления, подробная стоимость и признаваемые перспективы. Полное сопровождение RusStudy.',
    intro:
      'Фармация — одно из самых востребованных медицинских направлений среди тунисских выпускников, выбирающих Россию. Российские государственные вузы готовят фармацевтов за пять лет в аккредитованной государственной системе, со стоимостью обучения от 3 200 € в год, оплачиваемой напрямую вузу. RusStudy сопровождает каждого кандидата от поступления до размещения на месте: досье, официальное приглашение, виза, общежитие и поддержка на протяжении всей учёбы.',
    sections: [
      {
        heading: 'Обзор программы',
        paragraphs: [
          'Программа фармации в России ведёт к диплому специалиста (специалитет), эквивалентному интегрированной магистратуре, который выдаётся после пяти лет очного обучения. Это не раздельная система «бакалавриат–магистратура»: студент проходит непрерывный курс, сочетающий фундаментальные науки, фармацевтические дисциплины и профессиональную практику, и завершает его итоговым государственным экзаменом с присвоением квалификации фармацевта.',
          'Обучение ведётся преимущественно на русском языке. Студенты, не владеющие языком по приезде, сначала проходят подготовительный языковой год перед поступлением на первый курс. Некоторые вузы также предлагают англоязычные группы на первых курсах; доступность зависит от вуза и уточняется при его выборе.',
        ],
        bullets: [
          'Выдаваемый диплом: специалитет (специалист по фармации), интегрированная магистратура',
          'Длительность: 5 лет очно',
          'Языки обучения: русский (после подготовительного года) или английский в зависимости от вуза',
          'Формат: семестры с текущим контролем и экзаменационными сессиями',
        ],
      },
      {
        heading: 'Официальный код российской специальности',
        paragraphs: [
          'В России у каждой вузовской специальности есть официальный код, установленный Министерством высшего образования. Фармации соответствует код 33.05.01 «Фармация». Этот код указывается в дипломе и приложении к нему и служит ориентиром при процедурах признания за рубежом.',
          'Знание кода помогает проверить аккредитацию программы: оно подтверждает, что вуз имеет государственное право выдавать признаваемый диплом фармацевта, а не просто сертификат. Все вузы-партнёры RusStudy — государственные учреждения, аккредитованные по специальности 33.05.01.',
        ],
      },
      {
        heading: 'Программа по годам',
        paragraphs: [
          'Курсы 1 и 2 — основы: общая, неорганическая и органическая химия, фармацевтическая ботаника, анатомия и физиология человека, биология, физика и фармацевтическая латынь. Этот этап закладывает базу по химии и наукам о жизни, на которой строится вся остальная программа.',
          'Курсы 3 и 4 — фармацевтические науки: фармацевтическая и аналитическая химия, фармакогнозия (вещества природного происхождения), фармакология, фармацевтическая технология (лекарственные формы), микробиология и биохимия. Студент учится разрабатывать, анализировать и контролировать качество лекарств.',
          'Курс 5 — практика и специализация: клиническая фармация, клиническая фармакология, токсикологическая химия, управление и экономика аптеки, промышленная фармация, а также стажировки в аптеках и лабораториях. Год завершается государственным экзаменом и квалификацией фармацевта.',
        ],
      },
      {
        heading: 'Условия поступления',
        paragraphs: [
          'Поступление на фармацию открыто для обладателей аттестата естественно-научного профиля. Решающие предметы — биология и химия, основа программы: хороший уровень по ним облегчает адаптацию, особенно в первые два года.',
          'Путь поступления с RusStudy основан на досье, а не на классическом вступительном экзамене: аттестат с оценками, переведённый и легализованный диплом, паспорт и медицинские документы. После одобрения вуз выдаёт официальное приглашение, открывающее подачу на учебную визу. Некоторые вузы могут проводить собеседование или тест уровня, особенно для англоязычных программ.',
        ],
        bullets: [
          'Аттестат естественно-научного профиля или эквивалент',
          'Ключевые предметы: биология и химия',
          'Досье: аттестат, переведённый и легализованный диплом, паспорт, медицинская справка',
          'Подготовительный языковой год для русскоязычной программы',
        ],
      },
      {
        heading: 'Подробная стоимость',
        paragraphs: [
          'Стоимость обучения на фармации начинается от 3 200 € в год и зависит от вуза и города: региональные учреждения дешевле московских. Оплата вносится напрямую вузу, без финансовых посредников.',
          'Помимо обучения, годовой бюджет включает жильё, повседневные расходы и обязательную медицинскую страховку. Проживание в общежитии — самый экономичный вариант, примерно от 30 до 90 € в месяц в зависимости от города; съёмная квартира дороже. Повседневные расходы (питание, транспорт) составляют от 140 до 260 € в месяц, а медицинская страховка — около 180 € в год.',
          'Первый год добавляет разовые расходы около 900 € (виза, перевод документов, авиабилет). В сумме реалистичный годовой бюджет «всё включено» обычно составляет от 5 500 € в региональных городах до 8 000 € в Москве.',
        ],
        bullets: [
          'Обучение: от 3 200 € / год',
          'Общежитие: ~30–90 € / месяц',
          'Повседневные расходы: ~140–260 € / месяц',
          'Медицинская страховка: ~180 € / год',
          'Разовые расходы первого года (виза, перевод, билет): ~900 €',
        ],
      },
      {
        heading: 'Вузы-партнёры с этой программой',
        paragraphs: [
          'Фармацию изучают на медицинских и фармацевтических факультетах государственных вузов-партнёров RusStudy. Выбор учреждения зависит от города, бюджета и желаемого языка обучения.',
          'Изучите страницы наших вузов, чтобы сравнить условия жизни, город и расходы перед подачей документов:',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Медуниверситет им. Пирогова' },
          { universitySlug: 'universite-detat-de-moscou', label: 'МГУ им. Ломоносова' },
          { universitySlug: 'universite-rudn', label: 'Университет РУДН' },
          { universitySlug: 'universite-de-kazan', label: 'Казанский университет' },
        ],
      },
      {
        heading: 'Перспективы и признание диплома',
        paragraphs: [
          'Диплом фармацевта аккредитованного российского государственного вуза открывает работу в аптеке и больнице, в фармацевтической промышленности, контроле качества и науке. Сильная научная составляющая также ведёт к дальнейшим специализациям.',
          'В Тунисе программы медицины, фармации и инженерии из государственных вузов-партнёров имеют эквивалентности, признанные профильным министерством. Фактическая практика остаётся обусловленной признанием диплома и последующей регистрацией в соответствующей профессиональной палате.',
          'На международном уровне российские государственные вузы входят в признанные реестры, и их дипломы принимаются к эквивалентности во многих странах Магриба с учётом национальных правил каждой страны.',
        ],
      },
    ],
    faq: [
      {
        question: 'Сколько стоит фармация в России?',
        answer:
          'Обучение начинается от 3 200 € в год и оплачивается напрямую вузу. С учётом жилья, повседневных расходов и страховки реалистичный годовой бюджет «всё включено» обычно составляет от 5 500 € в регионах до 8 000 € в Москве, плюс около 900 € разовых расходов в первый год.',
      },
      {
        question: 'Сколько длится обучение на фармации?',
        answer:
          'Пять лет очного обучения, ведущих к диплому специалиста (специалитет), эквивалентному интегрированной магистратуре, с итоговым государственным экзаменом и квалификацией фармацевта.',
      },
      {
        question: 'Признаётся ли российский диплом фармацевта в Тунисе?',
        answer:
          'Да: дипломы по фармации из государственных вузов-партнёров проходят процедуру эквивалентности, признанную профильным министерством. Профессиональная практика остаётся обусловленной признанием диплома и регистрацией в палате фармацевтов.',
      },
      {
        question: 'Нужно ли знать русский, чтобы изучать фармацию?',
        answer:
          'В начале это не обязательно: студенты проходят подготовительный языковой год перед первым курсом русскоязычной программы. Некоторые вузы также предлагают англоязычные группы на первых курсах.',
      },
      {
        question: 'Каковы условия поступления?',
        answer:
          'Аттестат естественно-научного профиля с хорошим уровнем по биологии и химии. Поступление ведётся по досье (аттестат, переведённый и легализованный диплом, паспорт, медсправка), без классического вступительного экзамена.',
      },
      {
        question: 'Где живут студенты и сколько это стоит?',
        answer:
          'Общежитие — самый экономичный вариант, примерно от 30 до 90 € в месяц в зависимости от города. Съёмная квартира дороже. RusStudy бронирует жильё до приезда.',
      },
      {
        question: 'Как получить учебную визу?',
        answer:
          'После одобрения досье вуз выдаёт официальное приглашение, открывающее подачу на учебную визу. RusStudy готовит и сопровождает все шаги вплоть до получения визы.',
      },
    ],
  },
};
