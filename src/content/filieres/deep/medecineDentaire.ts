import type { DeepFiliereByLang } from './types';

/*
 * Contenu long et original de la page /filieres/medecine-dentaire (spécialité
 * russe 31.05.03). Mêmes sources chiffrées que la page pharmacie
 * (src/content/budget/data.ts). Le curriculum décrit reflète le tronc commun
 * standard des facultés dentaires russes (specialitet 31.05.03), pas une
 * maquette propre à un établissement.
 * TODO produit : (1) confirmer la liste exacte des universités du réseau
 * proposant la spécialité 31.05.03 ; (2) confirmer la formulation exacte de
 * l'équivalence tunisienne pour la médecine dentaire (la copie du site cite
 * explicitement médecine, pharmacie et ingénierie).
 */
export const MEDECINE_DENTAIRE_DEEP: DeepFiliereByLang = {
  fr: {
    h1: 'Étudier la médecine dentaire en Russie',
    metaTitle: 'Médecine dentaire en Russie 2026 | RusStudy',
    metaDescription:
      "Étudier la médecine dentaire en Russie : spécialité 31.05.03 en 5 ans, conditions d'admission, coûts détaillés et débouchés. Accompagnement RusStudy complet.",
    intro:
      "La médecine dentaire attire chaque année de nombreux bacheliers tunisiens vers la Russie, pour la qualité de sa formation clinique et le coût maîtrisé de ses études. Les universités d'État russes forment des chirurgiens-dentistes en cinq ans, dans un cadre public accrédité, pour des frais à partir de 3 200 € par an payés directement à l'établissement. RusStudy prend en charge l'ensemble du parcours : dossier, invitation officielle, visa, logement universitaire et suivi jusqu'au diplôme.",
    sections: [
      {
        heading: 'Présentation du programme',
        paragraphs: [
          "Le cursus de médecine dentaire mène au diplôme de spécialiste (specialitet), équivalent à un master intégré, obtenu après cinq années d'études à temps plein. Le parcours est continu : il associe sciences médicales fondamentales, disciplines dentaires cliniques et pratique sur simulateurs puis sur patients, jusqu'à l'examen d'État et l'attribution de la qualification de chirurgien-dentiste.",
          "L'enseignement se déroule principalement en russe, précédé au besoin d'une année préparatoire linguistique pour les étudiants débutants. Certaines universités proposent des groupes en anglais pour les premières années ; leur disponibilité dépend de l'établissement et se confirme au moment du choix.",
        ],
        bullets: [
          'Diplôme délivré : specialitet (chirurgien-dentiste), master intégré',
          'Durée : 5 ans à temps plein',
          "Langues d'enseignement : russe (après année préparatoire) ou anglais selon l'université",
          'Pratique clinique précoce, dès les premières années sur simulateurs',
        ],
      },
      {
        heading: 'Code officiel de la spécialité russe',
        paragraphs: [
          "En Russie, chaque spécialité universitaire porte un code officiel défini par le ministère de l'Enseignement supérieur. La médecine dentaire correspond au code 31.05.03 « Стоматология » (Stomatologiya). Ce code figure sur le diplôme et son supplément, et sert de référence lors des démarches d'équivalence à l'étranger.",
          "Ce code permet de vérifier qu'une université est habilitée par l'État à délivrer un diplôme de chirurgien-dentiste reconnu. Toutes les universités partenaires de RusStudy sont des établissements publics accrédités pour la spécialité 31.05.03.",
        ],
      },
      {
        heading: 'Programme année par année',
        paragraphs: [
          "Années 1 et 2 — fondamentaux : anatomie humaine et dentaire, histologie, physiologie, chimie et biochimie, microbiologie, science des biomatériaux dentaires et propédeutique. Dès cette phase, l'étudiant s'exerce sur simulateurs (têtes fantômes) pour acquérir les gestes de base.",
          'Années 3 et 4 — disciplines cliniques : dentisterie thérapeutique (soins conservateurs et endodontie), chirurgie dentaire, dentisterie prothétique (orthopédie), parodontologie, dentisterie pédiatrique, orthodontie et radiologie. Les rotations cliniques encadrées commencent, sur simulateurs puis sur patients.',
          "Année 5 — pratique intensive et spécialisation : chirurgie maxillo-faciale, introduction à l'implantologie, prise en charge globale du patient dans les différentes disciplines dentaires, complétée par des stages cliniques. L'année se conclut par l'examen d'État et la qualification de chirurgien-dentiste.",
        ],
      },
      {
        heading: "Conditions d'admission",
        paragraphs: [
          "L'admission en médecine dentaire s'adresse aux titulaires d'un baccalauréat scientifique. Les matières déterminantes sont la biologie et la chimie ; elles préparent aux disciplines médicales fondamentales des deux premières années.",
          "Avec RusStudy, l'admission se fait sur dossier : relevés de notes du bac, diplôme traduit et légalisé, passeport et documents médicaux. L'université émet ensuite une invitation officielle ouvrant la demande de visa. Les étudiants débutant en russe suivent l'année préparatoire de langue ; un entretien ou un test de niveau peut être demandé, notamment pour les cursus en anglais.",
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
          "Les frais de scolarité en médecine dentaire débutent à 3 200 € par an et varient selon l'université et la ville, les établissements de région étant plus abordables que ceux de Moscou. Ils se règlent directement à l'université.",
          "Le budget annuel comprend aussi le logement, la vie courante et l'assurance médicale obligatoire. Le logement universitaire coûte environ 30 à 90 € par mois selon la ville ; un appartement partagé revient plus cher. La vie courante se situe entre 140 et 260 € par mois, et l'assurance médicale autour de 180 € par an.",
          'La première année ajoute environ 900 € de frais uniques (visa, traduction, billet d’avion). Un budget annuel réaliste tout compris se situe le plus souvent entre 5 500 € en région et 8 000 € à Moscou.',
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
          "La médecine dentaire se prépare dans les facultés de stomatologie et de médecine des universités d'État partenaires de RusStudy. Le choix de l'établissement dépend de la ville, du budget et de la langue d'enseignement.",
          'Consultez les fiches de nos établissements pour comparer ville, cadre de vie et coûts avant de finaliser votre dossier :',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Université de Médecine Pirogov' },
          { universitySlug: 'universite-rudn', label: 'Université RUDN' },
          { universitySlug: 'universite-detat-de-moscou', label: "Université d'État de Moscou" },
          { universitySlug: 'universite-de-kazan', label: 'Université de Kazan' },
        ],
      },
      {
        heading: 'Débouchés et reconnaissance du diplôme',
        paragraphs: [
          "Le diplôme de chirurgien-dentiste d'une université d'État russe accréditée permet d'exercer en cabinet, en clinique dentaire ou à l'hôpital, et d'accéder à des spécialisations (orthodontie, chirurgie, implantologie, prothèse).",
          "Les diplômes de santé issus des universités d'État partenaires font l'objet d'une procédure d'équivalence en Tunisie. Pour la médecine dentaire, l'exercice est soumis à l'équivalence du diplôme puis à l'inscription auprès de l'Ordre des médecins dentistes ; il est recommandé de vérifier les modalités en vigueur au moment de la candidature.",
          "Au niveau international, les universités publiques russes figurent dans les répertoires reconnus et leurs diplômes sont admis à équivalence dans plusieurs pays du Maghreb, selon les règles nationales de chaque pays.",
        ],
      },
    ],
    faq: [
      {
        question: 'Combien coûte la médecine dentaire en Russie ?',
        answer:
          'Les frais de scolarité débutent à 3 200 € par an, payés directement à l’université. Avec le logement, la vie courante et l’assurance, un budget annuel réaliste tout compris se situe le plus souvent entre 5 500 € en région et 8 000 € à Moscou, plus environ 900 € de frais uniques la première année.',
      },
      {
        question: 'Combien de temps durent les études de médecine dentaire ?',
        answer:
          'Cinq années à temps plein, menant au diplôme de spécialiste (specialitet), équivalent à un master intégré, avec examen d’État final et qualification de chirurgien-dentiste.',
      },
      {
        question: 'Le diplôme dentaire russe est-il reconnu en Tunisie ?',
        answer:
          "Les diplômes de santé des universités d'État partenaires font l'objet d'une procédure d'équivalence. Pour la médecine dentaire, l'exercice reste conditionné à l'équivalence du diplôme puis à l'inscription auprès de l'Ordre des médecins dentistes ; vérifiez les modalités en vigueur lors de la candidature.",
      },
      {
        question: 'Faut-il parler russe pour étudier la médecine dentaire ?',
        answer:
          "Pas au départ : une année préparatoire de langue précède la première année du cursus russe. Certaines universités proposent aussi des groupes en anglais pour les premières années.",
      },
      {
        question: "Quelles sont les conditions d'admission ?",
        answer:
          "Un baccalauréat scientifique avec un bon niveau en biologie et en chimie. L'admission se fait sur dossier (relevés, diplôme traduit et légalisé, passeport, certificat médical), sans concours d'entrée classique.",
      },
      {
        question: 'Où loger pendant les études et à quel prix ?',
        answer:
          "Le logement en résidence universitaire est le plus économique, à partir d'environ 30 à 90 € par mois selon la ville ; un appartement partagé coûte davantage. RusStudy réserve le logement avant l'arrivée.",
      },
      {
        question: "Comment obtenir le visa d'études ?",
        answer:
          "Après validation du dossier, l'université émet une invitation officielle qui ouvre la demande de visa d'études. RusStudy prépare et suit toutes les démarches jusqu'à l'obtention du visa.",
      },
    ],
  },

  en: {
    h1: 'Study dentistry in Russia',
    metaTitle: 'Study dentistry in Russia 2026 | RusStudy',
    metaDescription:
      'Study dentistry in Russia: 5-year specialty 31.05.03, admission requirements, detailed costs and career paths. Complete RusStudy support from start to finish.',
    intro:
      "Dentistry draws many Tunisian school leavers to Russia every year, for the quality of its clinical training and the controlled cost of the studies. Russian state universities train dentists over five years, within an accredited public framework, with tuition from €3,200 per year paid directly to the institution. RusStudy handles the whole journey: application file, official invitation, visa, university housing and follow-up through to graduation.",
    sections: [
      {
        heading: 'Programme overview',
        paragraphs: [
          "The dentistry programme leads to a specialist diploma (specialitet), equivalent to an integrated master's, awarded after five years of full-time study. The track is continuous: it combines fundamental medical sciences, clinical dental disciplines and practice on simulators then on patients, up to the state exam and the award of the dentist qualification.",
          'Teaching is mainly in Russian, preceded where needed by a preparatory language year for beginners. Some universities offer English-taught groups for the early years; availability depends on the institution and is confirmed at the time of choice.',
        ],
        bullets: [
          "Degree awarded: specialitet (dentist), integrated master's",
          'Duration: 5 years, full-time',
          'Languages of instruction: Russian (after a preparatory year) or English depending on the university',
          'Early clinical practice, on simulators from the first years',
        ],
      },
      {
        heading: 'Official Russian specialty code',
        paragraphs: [
          'In Russia every university specialty has an official code set by the Ministry of Higher Education. Dentistry corresponds to code 31.05.03 "Стоматология" (Stomatologiya). This code appears on the diploma and its supplement, and serves as a reference for equivalence procedures abroad.',
          'The code lets you verify that a university is state-authorised to award a recognised dentist diploma. All RusStudy partner universities are public institutions accredited for specialty 31.05.03.',
        ],
      },
      {
        heading: 'Year-by-year curriculum',
        paragraphs: [
          'Years 1 and 2 — foundations: human and dental anatomy, histology, physiology, chemistry and biochemistry, microbiology, dental biomaterials science and propaedeutics. From this phase, students practise on simulators (phantom heads) to acquire the basic techniques.',
          'Years 3 and 4 — clinical disciplines: therapeutic dentistry (conservative care and endodontics), dental surgery, prosthodontics (orthopaedics), periodontology, paediatric dentistry, orthodontics and radiology. Supervised clinical rotations begin, on simulators then on patients.',
          'Year 5 — intensive practice and specialisation: maxillofacial surgery, introduction to implantology, comprehensive patient care across the dental disciplines, together with clinical placements. The year concludes with the state exam and the dentist qualification.',
        ],
      },
      {
        heading: 'Admission requirements',
        paragraphs: [
          'Admission to dentistry is open to holders of a science-track high-school diploma. The decisive subjects are biology and chemistry; they prepare students for the fundamental medical disciplines of the first two years.',
          'With RusStudy, admission is file-based: high-school transcripts, translated and legalised diploma, passport and medical documents. The university then issues an official invitation opening the visa application. Beginners in Russian take the preparatory language year; an interview or level test may be required, particularly for English-taught tracks.',
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
          'Dentistry tuition starts at €3,200 per year and varies by university and city, regional institutions being more affordable than those in Moscow. It is paid directly to the university.',
          'The annual budget also includes housing, daily living and compulsory medical insurance. University housing costs about €30 to €90 per month depending on the city; a shared flat costs more. Daily living ranges from €140 to €260 per month, and medical insurance is around €180 per year.',
          'The first year adds about €900 in one-time costs (visa, translation, flight). A realistic all-inclusive annual budget usually falls between €5,500 in regional cities and €8,000 in Moscow.',
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
          "Dentistry is studied within the dental (stomatology) and medical faculties of RusStudy's partner state universities. The choice of institution depends on the city, the budget and the language of instruction.",
          'Check our institution pages to compare city, living environment and costs before finalising your application:',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Pirogov Medical University' },
          { universitySlug: 'universite-rudn', label: 'RUDN University' },
          { universitySlug: 'universite-detat-de-moscou', label: 'Moscow State University' },
          { universitySlug: 'universite-de-kazan', label: 'Kazan University' },
        ],
      },
      {
        heading: 'Career paths and diploma recognition',
        paragraphs: [
          'A dentist diploma from an accredited Russian state university allows practice in a private practice, a dental clinic or a hospital, and access to specialisations (orthodontics, surgery, implantology, prosthetics).',
          "Health diplomas from the partner state universities are subject to an equivalence procedure in Tunisia. For dentistry, practice is subject to diploma equivalence and then registration with the dental council; it is advisable to check the arrangements in force at the time of application.",
          'Internationally, Russian public universities appear in recognised directories and their diplomas are accepted for equivalence in several countries of the Maghreb, according to each country’s national rules.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much does dentistry cost in Russia?',
        answer:
          'Tuition starts at €3,200 per year, paid directly to the university. With housing, daily living and insurance, a realistic all-inclusive annual budget usually falls between €5,500 in regional cities and €8,000 in Moscow, plus about €900 in one-time first-year costs.',
      },
      {
        question: 'How long does the dentistry programme last?',
        answer:
          "Five years of full-time study, leading to a specialist diploma (specialitet), equivalent to an integrated master's, with a final state exam and the dentist qualification.",
      },
      {
        question: 'Is the Russian dentistry diploma recognised in Tunisia?',
        answer:
          'Health diplomas from the partner state universities are subject to an equivalence procedure. For dentistry, practice remains conditional on diploma equivalence and then registration with the dental council; check the arrangements in force when you apply.',
      },
      {
        question: 'Do I need to speak Russian to study dentistry?',
        answer:
          'Not at the outset: a preparatory language year precedes the first year of the Russian-taught programme. Some universities also offer English-taught groups for the early years.',
      },
      {
        question: 'What are the admission requirements?',
        answer:
          'A science-track high-school diploma with a solid level in biology and chemistry. Admission is file-based (transcripts, translated and legalised diploma, passport, medical certificate), with no classic entrance exam.',
      },
      {
        question: 'Where do students live and at what cost?',
        answer:
          'University dormitory housing is the most economical option, from about €30 to €90 per month depending on the city; a shared flat costs more. RusStudy books housing before arrival.',
      },
      {
        question: 'How do I obtain the student visa?',
        answer:
          'Once the file is approved, the university issues an official invitation that opens the student visa application. RusStudy prepares and follows every step through to visa approval.',
      },
    ],
  },

  ar: {
    h1: 'دراسة طب الأسنان في روسيا',
    metaTitle: 'دراسة طب الأسنان في روسيا 2026 | RusStudy',
    metaDescription:
      'دراسة طب الأسنان في روسيا: تخصص 31.05.03 على مدى 5 سنوات، شروط القبول، التكاليف التفصيلية والآفاق. مرافقة RusStudy كاملة من الألف إلى الياء.',
    intro:
      'يجذب طب الأسنان كل سنة العديد من الحاصلين على البكالوريا التونسيين نحو روسيا، لجودة تكوينه السريري وتكلفة دراسته المعقولة مقارنة بالمسارات الخاصة في تونس أو أوروبا. تُكوّن الجامعات الحكومية الروسية أطباء أسنان في خمس سنوات، ضمن إطار عمومي معتمد من الدولة، برسوم تبدأ من 3200 € سنويًا تُدفع مباشرة للجامعة دون وسيط مالي. تتكفّل RusStudy بكامل المسار من البداية إلى النهاية: دراسة الملف، الدعوة الرسمية، تأشيرة الدراسة، حجز السكن الجامعي والمتابعة الميدانية حتى التخرج والحصول على الشهادة.',
    sections: [
      {
        heading: 'تقديم البرنامج',
        paragraphs: [
          'يقود مسار طب الأسنان إلى شهادة أخصائي (specialitet) تعادل ماجستيرًا مدمجًا، تُمنح بعد خمس سنوات من الدراسة بدوام كامل. المسار متواصل: يجمع بين العلوم الطبية الأساسية وتخصصات طب الأسنان السريرية والممارسة على المحاكيات ثم على المرضى، حتى امتحان الدولة ومنح صفة طبيب أسنان.',
          'يجري التدريس أساسًا بالروسية، مسبوقًا عند الحاجة بسنة تحضيرية لغوية للمبتدئين. توفّر بعض الجامعات مجموعات بالإنجليزية للسنوات الأولى؛ ويتوقّف توفّرها على المؤسسة ويُؤكَّد عند الاختيار.',
        ],
        bullets: [
          'الشهادة الممنوحة: specialitet (طبيب أسنان)، ماجستير مدمج',
          'المدة: 5 سنوات بدوام كامل',
          'لغات التدريس: الروسية (بعد سنة تحضيرية) أو الإنجليزية حسب الجامعة',
          'ممارسة سريرية مبكرة، على المحاكيات منذ السنوات الأولى',
        ],
      },
      {
        heading: 'الكود الرسمي للتخصص الروسي',
        paragraphs: [
          'في روسيا، يحمل كل تخصص جامعي كودًا رسميًا تحدده وزارة التعليم العالي. يقابل طب الأسنان الكود 31.05.03 «Стоматология» (Stomatologiya). يظهر هذا الكود على الشهادة وملحقها، ويُستعمل كمرجع عند إجراءات المعادلة في الخارج.',
          'يسمح هذا الكود بالتحقق من أن الجامعة مخوّلة من الدولة لمنح شهادة طبيب أسنان معترف بها. كل الجامعات الشريكة لـ RusStudy مؤسسات عمومية معتمدة للتخصص 31.05.03.',
        ],
      },
      {
        heading: 'البرنامج سنة بسنة',
        paragraphs: [
          'السنتان 1 و2 — الأساسيات: تشريح الإنسان والأسنان، علم الأنسجة، وظائف الأعضاء، الكيمياء والكيمياء الحيوية، علم الأحياء الدقيقة، علم المواد الحيوية للأسنان والمبادئ الأولية. منذ هذه المرحلة، يتدرّب الطالب على المحاكيات (الرؤوس الوهمية) لاكتساب الحركات الأساسية.',
          'السنتان 3 و4 — التخصصات السريرية: طب الأسنان العلاجي (العلاج المحافظ وعلاج الجذور)، جراحة الأسنان، التعويض السني (التقويم العظمي)، أمراض اللثة، طب أسنان الأطفال، تقويم الأسنان والأشعة. تبدأ التربصات السريرية المؤطَّرة، على المحاكيات ثم على المرضى.',
          'السنة 5 — ممارسة مكثّفة وتخصص: جراحة الوجه والفكين، مدخل إلى زراعة الأسنان، التكفّل الشامل بالمريض عبر مختلف تخصصات الأسنان، إضافة إلى تربصات سريرية. تُختَتم السنة بامتحان الدولة ومنح صفة طبيب أسنان.',
        ],
      },
      {
        heading: 'شروط القبول',
        paragraphs: [
          'يتوجّه القبول في طب الأسنان إلى الحاصلين على بكالوريا علمية. المادتان الحاسمتان هما الأحياء والكيمياء؛ فهما تهيّئان للتخصصات الطبية الأساسية في السنتين الأوليين.',
          'مع RusStudy، يتم القبول على أساس الملف: كشوف نقاط البكالوريا، الشهادة مترجمة ومصادق عليها، جواز السفر والوثائق الطبية. ثم تصدر الجامعة دعوة رسمية تفتح طلب التأشيرة. يتابع المبتدئون بالروسية السنة التحضيرية اللغوية؛ وقد تُطلب مقابلة أو اختبار مستوى، خاصة للمسارات بالإنجليزية.',
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
          'تبدأ رسوم طب الأسنان من 3200 € سنويًا وتختلف حسب الجامعة والمدينة، إذ تكون مؤسسات الأقاليم أقل كلفة من موسكو. وتُدفع مباشرة للجامعة.',
          'تشمل الميزانية السنوية أيضًا السكن والمعيشة اليومية والتأمين الطبي الإجباري. يكلّف السكن الجامعي نحو 30 إلى 90 € شهريًا حسب المدينة؛ والشقة المشتركة أغلى. تتراوح المعيشة اليومية بين 140 و260 € شهريًا، والتأمين الطبي نحو 180 € سنويًا.',
          'تضيف السنة الأولى نحو 900 € مصاريف وحيدة (تأشيرة، ترجمة، تذكرة طائرة). تتراوح ميزانية سنوية واقعية شاملة غالبًا بين 5500 € في الأقاليم و8000 € في موسكو.',
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
          'يُدرَّس طب الأسنان ضمن كليات طب الأسنان والطب في الجامعات الحكومية الشريكة لـ RusStudy. يتوقّف اختيار المؤسسة على المدينة والميزانية ولغة التدريس.',
          'اطّلع على صفحات مؤسساتنا لمقارنة المدينة وإطار العيش والتكاليف قبل إتمام ملفك:',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'جامعة بيروغوف للطب' },
          { universitySlug: 'universite-rudn', label: 'جامعة RUDN' },
          { universitySlug: 'universite-detat-de-moscou', label: 'جامعة موسكو الحكومية' },
          { universitySlug: 'universite-de-kazan', label: 'جامعة قازان' },
        ],
      },
      {
        heading: 'الآفاق والاعتراف بالشهادة',
        paragraphs: [
          'تتيح شهادة طبيب الأسنان من جامعة حكومية روسية معتمدة العمل في العيادة الخاصة أو عيادة الأسنان أو المستشفى، والوصول إلى تخصصات (تقويم الأسنان، الجراحة، الزراعة، التعويض).',
          'تخضع شهادات الصحة من الجامعات الحكومية الشريكة لإجراء معادلة في تونس. بالنسبة لطب الأسنان، تخضع الممارسة لمعادلة الشهادة ثم التسجيل لدى عمادة أطباء الأسنان؛ ويُنصح بالتحقق من الإجراءات السارية عند الترشّح.',
          'دوليًا، تظهر الجامعات العمومية الروسية في الأدلة المعترف بها، وتُقبَل شهاداتها للمعادلة في عدة بلدان مغاربية وفق القواعد الوطنية لكل بلد. ويسمح التكوين السريري المكثّف، القائم على الممارسة المبكرة على المحاكيات ثم على المرضى، للخرّيج بالاندماج المهني بثقة سواء في القطاع العام أو الخاص، ومواصلة التخصص لاحقًا في مجالات مثل تقويم الأسنان أو زراعتها.',
        ],
      },
    ],
    faq: [
      {
        question: 'كم تكلّف دراسة طب الأسنان في روسيا؟',
        answer:
          'تبدأ رسوم الدراسة من 3200 € سنويًا، تُدفع مباشرة للجامعة. مع السكن والمعيشة والتأمين، تتراوح ميزانية سنوية واقعية شاملة غالبًا بين 5500 € في الأقاليم و8000 € في موسكو، إضافة إلى نحو 900 € مصاريف وحيدة في السنة الأولى.',
      },
      {
        question: 'كم تدوم دراسة طب الأسنان؟',
        answer:
          'خمس سنوات بدوام كامل، تقود إلى شهادة أخصائي (specialitet) تعادل ماجستيرًا مدمجًا، مع امتحان دولة نهائي ومنح صفة طبيب أسنان.',
      },
      {
        question: 'هل شهادة طب الأسنان الروسية معترف بها في تونس؟',
        answer:
          'تخضع شهادات الصحة من الجامعات الحكومية الشريكة لإجراء معادلة. بالنسبة لطب الأسنان، تبقى الممارسة مشروطة بمعادلة الشهادة ثم التسجيل لدى عمادة أطباء الأسنان؛ تحقّق من الإجراءات السارية عند الترشّح.',
      },
      {
        question: 'هل يجب التحدث بالروسية لدراسة طب الأسنان؟',
        answer:
          'ليس في البداية: تسبق سنة تحضيرية لغوية السنة الأولى من المسار الروسي. كما توفّر بعض الجامعات مجموعات بالإنجليزية للسنوات الأولى.',
      },
      {
        question: 'ما هي شروط القبول؟',
        answer:
          'بكالوريا علمية بمستوى جيد في الأحياء والكيمياء. يتم القبول على أساس الملف (كشوف النقاط، الشهادة المترجمة والمصادق عليها، جواز السفر، شهادة طبية)، دون مناظرة دخول تقليدية.',
      },
      {
        question: 'أين يقيم الطالب وبأي تكلفة؟',
        answer:
          'السكن الجامعي هو الأكثر اقتصادًا، ابتداءً من نحو 30 إلى 90 € شهريًا حسب المدينة؛ والشقة المشتركة أغلى. تحجز RusStudy السكن قبل الوصول.',
      },
      {
        question: 'كيف يتم الحصول على تأشيرة الدراسة؟',
        answer:
          'بعد المصادقة على الملف، تصدر الجامعة دعوة رسمية تفتح طلب تأشيرة الدراسة. تُعدّ RusStudy كل الإجراءات وتتابعها حتى الحصول على التأشيرة.',
      },
    ],
  },

  ru: {
    h1: 'Изучать стоматологию в России',
    metaTitle: 'Стоматология в России 2026 | RusStudy',
    metaDescription:
      'Стоматология в России: специальность 31.05.03, 5 лет, условия поступления, подробная стоимость и перспективы. Полное сопровождение RusStudy.',
    intro:
      'Стоматология ежегодно привлекает многих тунисских выпускников в Россию — благодаря качеству клинической подготовки и умеренной стоимости обучения. Российские государственные вузы готовят стоматологов за пять лет в аккредитованной государственной системе, со стоимостью от 3 200 € в год, оплачиваемой напрямую вузу. RusStudy берёт на себя весь путь: досье, официальное приглашение, виза, общежитие и сопровождение вплоть до выпуска.',
    sections: [
      {
        heading: 'Обзор программы',
        paragraphs: [
          'Программа стоматологии ведёт к диплому специалиста (специалитет), эквивалентному интегрированной магистратуре, который выдаётся после пяти лет очного обучения. Курс непрерывный: он сочетает фундаментальные медицинские науки, клинические стоматологические дисциплины и практику на симуляторах, затем на пациентах, вплоть до государственного экзамена и присвоения квалификации врача-стоматолога.',
          'Обучение ведётся преимущественно на русском языке, при необходимости — после подготовительного языкового года для начинающих. Некоторые вузы предлагают англоязычные группы на первых курсах; доступность зависит от вуза и уточняется при выборе.',
        ],
        bullets: [
          'Выдаваемый диплом: специалитет (врач-стоматолог), интегрированная магистратура',
          'Длительность: 5 лет очно',
          'Языки обучения: русский (после подготовительного года) или английский в зависимости от вуза',
          'Ранняя клиническая практика — на симуляторах с первых курсов',
        ],
      },
      {
        heading: 'Официальный код российской специальности',
        paragraphs: [
          'В России у каждой вузовской специальности есть официальный код, установленный Министерством высшего образования. Стоматологии соответствует код 31.05.03 «Стоматология». Этот код указывается в дипломе и приложении к нему и служит ориентиром при процедурах признания за рубежом.',
          'Код позволяет проверить, что вуз имеет государственное право выдавать признаваемый диплом врача-стоматолога. Все вузы-партнёры RusStudy — государственные учреждения, аккредитованные по специальности 31.05.03.',
        ],
      },
      {
        heading: 'Программа по годам',
        paragraphs: [
          'Курсы 1 и 2 — основы: анатомия человека и зубов, гистология, физиология, химия и биохимия, микробиология, материаловедение в стоматологии и пропедевтика. Уже на этом этапе студент занимается на симуляторах (фантомных головах), осваивая базовые манипуляции.',
          'Курсы 3 и 4 — клинические дисциплины: терапевтическая стоматология (консервативное лечение и эндодонтия), хирургическая стоматология, ортопедическая стоматология (протезирование), пародонтология, детская стоматология, ортодонтия и рентгенология. Начинаются кураторские клинические ротации — на симуляторах, затем на пациентах.',
          'Курс 5 — интенсивная практика и специализация: челюстно-лицевая хирургия, введение в имплантологию, комплексное ведение пациента по разным стоматологическим дисциплинам, а также клинические стажировки. Год завершается государственным экзаменом и квалификацией врача-стоматолога.',
        ],
      },
      {
        heading: 'Условия поступления',
        paragraphs: [
          'Поступление на стоматологию открыто для обладателей аттестата естественно-научного профиля. Решающие предметы — биология и химия; они готовят к фундаментальным медицинским дисциплинам первых двух лет.',
          'С RusStudy поступление ведётся по досье: аттестат с оценками, переведённый и легализованный диплом, паспорт и медицинские документы. Затем вуз выдаёт официальное приглашение, открывающее подачу на визу. Начинающие в русском проходят подготовительный языковой год; может потребоваться собеседование или тест уровня, особенно для англоязычных программ.',
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
          'Стоимость обучения на стоматологии начинается от 3 200 € в год и зависит от вуза и города: региональные учреждения доступнее московских. Оплата вносится напрямую вузу.',
          'Годовой бюджет также включает жильё, повседневные расходы и обязательную медицинскую страховку. Общежитие стоит примерно от 30 до 90 € в месяц в зависимости от города; съёмная квартира дороже. Повседневные расходы составляют от 140 до 260 € в месяц, а медицинская страховка — около 180 € в год.',
          'Первый год добавляет около 900 € разовых расходов (виза, перевод, авиабилет). Реалистичный годовой бюджет «всё включено» обычно составляет от 5 500 € в региональных городах до 8 000 € в Москве.',
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
          'Стоматологию изучают на стоматологических и медицинских факультетах государственных вузов-партнёров RusStudy. Выбор учреждения зависит от города, бюджета и языка обучения.',
          'Изучите страницы наших вузов, чтобы сравнить город, условия жизни и расходы перед подачей документов:',
        ],
        links: [
          { universitySlug: 'universite-de-medecine-pirogov', label: 'Медуниверситет им. Пирогова' },
          { universitySlug: 'universite-rudn', label: 'Университет РУДН' },
          { universitySlug: 'universite-detat-de-moscou', label: 'МГУ им. Ломоносова' },
          { universitySlug: 'universite-de-kazan', label: 'Казанский университет' },
        ],
      },
      {
        heading: 'Перспективы и признание диплома',
        paragraphs: [
          'Диплом врача-стоматолога аккредитованного российского государственного вуза позволяет работать в частной практике, стоматологической клинике или больнице и получать доступ к специализациям (ортодонтия, хирургия, имплантология, протезирование).',
          'Медицинские дипломы из государственных вузов-партнёров подлежат процедуре эквивалентности в Тунисе. Для стоматологии практика обусловлена признанием диплома и последующей регистрацией в палате стоматологов; рекомендуется уточнять действующий порядок на момент подачи.',
          'На международном уровне российские государственные вузы входят в признанные реестры, и их дипломы принимаются к эквивалентности в ряде стран Магриба согласно национальным правилам каждой страны. Интенсивная клиническая подготовка — с ранней практикой сначала на симуляторах, затем на пациентах — позволяет выпускнику уверенно начать профессиональную деятельность как в государственном, так и в частном секторе и в дальнейшем продолжить специализацию, например в ортодонтии или имплантологии.',
        ],
      },
    ],
    faq: [
      {
        question: 'Сколько стоит стоматология в России?',
        answer:
          'Обучение начинается от 3 200 € в год и оплачивается напрямую вузу. С учётом жилья, повседневных расходов и страховки реалистичный годовой бюджет «всё включено» обычно составляет от 5 500 € в регионах до 8 000 € в Москве, плюс около 900 € разовых расходов в первый год.',
      },
      {
        question: 'Сколько длится обучение на стоматологии?',
        answer:
          'Пять лет очного обучения, ведущих к диплому специалиста (специалитет), эквивалентному интегрированной магистратуре, с итоговым государственным экзаменом и квалификацией врача-стоматолога.',
      },
      {
        question: 'Признаётся ли российский диплом стоматолога в Тунисе?',
        answer:
          'Медицинские дипломы из государственных вузов-партнёров подлежат процедуре эквивалентности. Для стоматологии практика остаётся обусловленной признанием диплома и регистрацией в палате стоматологов; уточните действующий порядок при подаче.',
      },
      {
        question: 'Нужно ли знать русский, чтобы изучать стоматологию?',
        answer:
          'В начале — нет: подготовительный языковой год предшествует первому курсу русскоязычной программы. Некоторые вузы также предлагают англоязычные группы на первых курсах.',
      },
      {
        question: 'Каковы условия поступления?',
        answer:
          'Аттестат естественно-научного профиля с хорошим уровнем по биологии и химии. Поступление ведётся по досье (аттестат, переведённый и легализованный диплом, паспорт, медсправка), без классического вступительного экзамена.',
      },
      {
        question: 'Где живут студенты и сколько это стоит?',
        answer:
          'Общежитие — самый экономичный вариант, примерно от 30 до 90 € в месяц в зависимости от города; съёмная квартира дороже. RusStudy бронирует жильё до приезда.',
      },
      {
        question: 'Как получить учебную визу?',
        answer:
          'После одобрения досье вуз выдаёт официальное приглашение, открывающее подачу на учебную визу. RusStudy готовит и сопровождает все шаги вплоть до получения визы.',
      },
    ],
  },
};
