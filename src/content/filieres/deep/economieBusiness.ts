import type { DeepFiliereByLang } from './types';

/*
 * Contenu long et original de la page /filieres/economie-business.
 *
 * Données chiffrées reprises des sources réelles du site : 4 ans et
 * 2 200 €/an (PROGRAM_BASE_TUITION['economie-business']), logement et vie
 * courante (src/content/budget/data.ts), assurance 180 €/an, frais uniques
 * d'environ 900 € la première année.
 *
 * Sourcing : comme pour l'ingénierie, l'économie et le management couvrent
 * plusieurs codes de spécialité. Le texte explique le système sans avancer
 * de code précis et renvoie vers l'université pour le confirmer.
 */
export const ECONOMIE_BUSINESS_DEEP: DeepFiliereByLang = {
  fr: {
    h1: "Étudier l'économie et le business en Russie",
    metaTitle: "Étudier l'économie et le management en Russie 2026 : 4 ans, 2 200 € par an | RusStudy",
    metaDescription:
      "Étudier l'économie, le management ou la finance en Russie : licence de 4 ans, admission sur dossier, frais à partir de 2 200 € par an, programme détaillé et débouchés.",
    intro:
      "L'économie et le management constituent la filière la plus accessible du réseau, avec des frais de scolarité à partir de 2 200 € par an et un cursus de quatre ans. C'est aussi la voie la plus souple : le diplôme s'exporte facilement et ouvre sur des secteurs variés, du commerce international à la finance. RusStudy accompagne chaque candidat du dossier à l'installation : admission, invitation officielle, visa, logement universitaire et suivi pendant toute la scolarité.",
    sections: [
      {
        heading: 'Présentation du programme',
        paragraphs: [
          "Contrairement à la médecine ou à la pharmacie, qui relèvent du specialitet, l'économie suit le schéma licence-master. Le cursus de base est une licence (bakalavriat) de quatre ans, qui peut être prolongée par un master (magistratura) de deux ans dans la même université ou ailleurs.",
          "L'enseignement se déroule principalement en russe, après une année préparatoire linguistique pour les étudiants qui ne maîtrisent pas la langue. Les cursus en anglais existent, notamment en commerce international et en finance, et sont généralement plus chers.",
        ],
        bullets: [
          'Diplôme délivré : licence (bakalavriat), prolongeable par un master de 2 ans',
          'Durée : 4 ans à temps plein, hors année préparatoire de langue',
          "Langues d'enseignement : russe (après année préparatoire) ou anglais selon l'université",
          'Admission : sur dossier scolaire, sans concours d’entrée éliminatoire',
        ],
      },
      {
        heading: 'Les domaines couverts',
        paragraphs: [
          "« Économie et business » regroupe plusieurs spécialités distinctes : économie générale, management, finance et crédit, comptabilité et audit, commerce international, marketing. Chacune porte son propre code officiel dans la nomenclature russe.",
          "Il n'y a donc pas un code unique à vérifier mais celui de la spécialité précise que vous visez. Demandez-le explicitement à l'université avant de vous inscrire : il figurera sur votre diplôme et conditionnera vos démarches d'équivalence, et deux intitulés voisins peuvent recouvrir des contenus assez différents.",
        ],
      },
      {
        heading: 'Programme année par année',
        paragraphs: [
          "Années 1 et 2 — fondamentaux : microéconomie, macroéconomie, mathématiques appliquées à l'économie, statistiques, comptabilité générale, droit et informatique de gestion. C'est un socle large, volontairement généraliste, qui précède le choix de spécialisation.",
          "Année 3 — spécialisation : selon le parcours, finance d'entreprise, management, marketing, économie internationale, analyse financière ou fiscalité. Les études de cas et les travaux de groupe prennent une place importante.",
          "Année 4 — professionnalisation : stage en entreprise, approfondissement de la spécialité, puis mémoire de fin d'études soutenu devant un jury. C'est cette soutenance qui valide la licence.",
        ],
      },
      {
        heading: "Conditions d'admission",
        paragraphs: [
          "L'admission est ouverte aux titulaires d'un baccalauréat, toutes séries confondues, avec un avantage réel pour les profils à l'aise en mathématiques : contrairement à une idée répandue, l'économie en Russie est une filière quantitative, et les deux premières années comportent une part significative de mathématiques et de statistiques.",
          "L'admission repose sur un dossier : relevés de notes, diplôme traduit et légalisé, passeport et documents médicaux. Après validation, l'université émet une invitation officielle qui ouvre la demande de visa d'études.",
        ],
        bullets: [
          'Baccalauréat, toutes séries, avec un avantage pour les profils mathématiques',
          'Matières utiles : mathématiques, économie si elle figurait au programme',
          'Dossier : relevés, diplôme traduit et légalisé, passeport, certificats médicaux',
          'Année préparatoire de langue pour le cursus en russe',
        ],
      },
      {
        heading: 'Coûts détaillés',
        paragraphs: [
          "Les frais de scolarité en économie débutent à 2 200 € par an, le tarif le plus bas des filières du réseau, et varient selon l'université et la ville. Combinés à une durée de quatre ans au lieu de cinq ou six, ils font de cette filière celle dont le coût total est le plus contenu.",
          "Le budget annuel comprend en outre le logement, la vie courante et l'assurance médicale obligatoire : entre 30 et 90 € par mois en résidence universitaire, 140 à 260 € par mois de vie courante selon la ville, et environ 180 € par an d'assurance.",
          "La première année ajoute des frais uniques d'environ 900 € : visa, traductions, légalisations et billet d'avion.",
        ],
        bullets: [
          'Frais de scolarité : à partir de 2 200 € / an',
          'Durée : 4 ans, soit le coût total le plus bas du réseau',
          'Logement en résidence : 30 à 90 € / mois selon la ville',
          'Vie courante : 140 à 260 € / mois selon la ville',
          'Assurance médicale obligatoire : environ 180 € / an',
        ],
      },
      {
        heading: 'Universités partenaires proposant ces filières',
        paragraphs: [
          "L'économie et le management figurent parmi les filières les plus largement proposées : la plupart des universités pluridisciplinaires du réseau les ouvrent aux étudiants internationaux. La liste exacte des spécialités et des langues d'enseignement se confirme au moment du choix de l'établissement.",
        ],
        links: [
          { universitySlug: 'universite-detat-de-moscou', label: "Université d'État de Moscou" },
          { universitySlug: 'universite-rudn', label: 'Université RUDN' },
          { universitySlug: 'universite-de-kazan', label: 'Université fédérale de Kazan' },
          { universitySlug: 'universite-detat-de-voronej', label: "Université d'État de Voronej" },
          { universitySlug: 'universite-detat-tourgueniev-dorel', label: "Université d'État Tourgueniev d'Orel" },
        ],
      },
      {
        heading: 'Débouchés et reconnaissance du diplôme',
        paragraphs: [
          "Le diplôme délivré est un diplôme d'État russe, soumis à une procédure de reconnaissance propre à chaque pays. Comme pour l'ingénierie, exercer dans le secteur privé ne suppose généralement pas d'autorisation professionnelle préalable, ce qui simplifie les démarches par rapport aux professions de santé.",
          "Un point mérite d'être dit franchement : c'est aussi la filière la plus concurrentielle à la sortie, parce qu'elle est la plus répandue dans le monde. Ce qui fera la différence sur votre CV, ce n'est pas le diplôme seul mais ce que vous y aurez ajouté — langues, stages, spécialisation en master. Le russe, l'anglais et le français réunis constituent à cet égard un profil rare et réellement valorisable.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il être bon en mathématiques pour étudier l'économie en Russie ?",
        answer:
          "C'est un avantage net. L'économie y est enseignée comme une discipline quantitative : les deux premières années comportent une part importante de mathématiques appliquées et de statistiques.",
      },
      {
        question: 'Quelle est la durée du cursus ?',
        answer:
          "Quatre ans pour la licence, hors année préparatoire de langue. Un master de deux ans peut la prolonger, dans la même université ou ailleurs.",
      },
      {
        question: "Pourquoi l'économie est-elle moins chère que les autres filières ?",
        answer:
          "Les frais débutent à 2 200 € par an, contre 2 800 € en ingénierie et 3 500 € en médecine. La durée plus courte — quatre ans au lieu de cinq ou six — réduit encore le coût total du cursus.",
      },
      {
        question: 'Peut-on étudier en anglais ?',
        answer:
          "Oui, notamment en commerce international et en finance. Ces cursus sont généralement plus chers que les cursus en russe, et moins nombreux dans les universités de région.",
      },
      {
        question: 'Un master est-il nécessaire ?',
        answer:
          "Il n'est pas obligatoire, mais il est fréquent et souvent déterminant pour se spécialiser. C'est une décision à prendre en troisième année, une fois le domaine précisé.",
      },
      {
        question: 'Quel est le budget annuel total ?',
        answer:
          "Frais de scolarité à partir de 2 200 €, auxquels s'ajoutent le logement (30 à 90 € par mois en résidence), la vie courante (140 à 260 € par mois) et l'assurance (environ 180 € par an). La première année ajoute environ 900 € de frais uniques.",
      },
      {
        question: 'Le diplôme est-il reconnu à l’étranger ?',
        answer:
          "Il s'agit d'un diplôme d'État, soumis à une procédure de reconnaissance propre à chaque pays. Dans le secteur privé, aucune autorisation professionnelle préalable n'est généralement exigée, contrairement aux professions de santé.",
      },
    ],
  },
  en: {
    h1: 'Studying economics and business in Russia',
    metaTitle: 'Studying Economics and Management in Russia 2026: 4 Years, €2,200 per Year | RusStudy',
    metaDescription:
      'Studying economics, management or finance in Russia: a 4-year bachelor, admission on school record, fees from €2,200 per year, detailed curriculum and career paths.',
    intro:
      'Economics and management form the most accessible programme in the network, with tuition from €2,200 per year and a four-year course. It is also the most flexible route: the degree travels easily and opens onto varied sectors, from international trade to finance. RusStudy supports every applicant from the file to settling in: admission, official invitation, visa, university accommodation and follow-up throughout the course.',
    sections: [
      {
        heading: 'Programme overview',
        paragraphs: [
          'Unlike medicine or pharmacy, which follow the specialitet track, economics follows the bachelor-master structure. The core course is a four-year bachelor (bakalavriat), which can be extended by a two-year master (magistratura) at the same university or elsewhere.',
          'Teaching is mainly in Russian, after a preparatory language year for students who do not master the language. English-taught courses exist, particularly in international trade and finance, and are generally more expensive.',
        ],
        bullets: [
          'Degree awarded: bachelor (bakalavriat), extendable by a 2-year master',
          'Duration: 4 years full-time, excluding the preparatory language year',
          'Languages of instruction: Russian (after the preparatory year) or English depending on the university',
          'Admission: on school record, with no eliminating entrance competition',
        ],
      },
      {
        heading: 'The fields covered',
        paragraphs: [
          '"Economics and business" brings together several distinct specialties: general economics, management, finance and credit, accounting and audit, international trade, marketing. Each carries its own official code in the Russian nomenclature.',
          'There is therefore no single code to check but the code of the precise specialty you are targeting. Ask for it explicitly before enrolling: it will appear on your degree and will govern your equivalence procedures, and two neighbouring titles can cover quite different content.',
        ],
      },
      {
        heading: 'Year-by-year curriculum',
        paragraphs: [
          'Years 1 and 2 — fundamentals: microeconomics, macroeconomics, mathematics applied to economics, statistics, general accounting, law and management computing. It is a broad, deliberately generalist foundation that precedes the choice of specialisation.',
          'Year 3 — specialisation: depending on the track, corporate finance, management, marketing, international economics, financial analysis or taxation. Case studies and group work take on an important role.',
          'Year 4 — professionalisation: a company placement, deepening of the specialty, then a final dissertation defended before a panel. It is that defence that validates the bachelor.',
        ],
      },
      {
        heading: 'Admission requirements',
        paragraphs: [
          'Admission is open to baccalaureate holders from any stream, with a real advantage for profiles comfortable with mathematics: contrary to a widespread idea, economics in Russia is a quantitative discipline, and the first two years include a significant share of mathematics and statistics.',
          'Admission rests on a file: transcripts, translated and legalised diploma, passport and medical documents. Once validated, the university issues an official invitation that opens the student visa application.',
        ],
        bullets: [
          'Baccalaureate, any stream, with an advantage for mathematical profiles',
          'Useful subjects: mathematics, economics where it was on the syllabus',
          'File: transcripts, translated and legalised diploma, passport, medical certificates',
          'Preparatory language year for the Russian-taught course',
        ],
      },
      {
        heading: 'Detailed costs',
        paragraphs: [
          'Economics tuition starts at €2,200 per year, the lowest rate among the network programmes, and varies by university and city. Combined with a four-year duration instead of five or six, that makes it the programme with the most contained total cost.',
          'The annual budget also covers accommodation, daily living and compulsory medical insurance: between €30 and €90 per month in university halls, €140 to €260 per month of daily living depending on the city, and around €180 per year for insurance.',
          'The first year adds one-off costs of around €900: visa, translations, legalisations and the flight.',
        ],
        bullets: [
          'Tuition: from €2,200 / year',
          'Duration: 4 years, giving the lowest total cost in the network',
          'Hall accommodation: €30 to €90 / month depending on the city',
          'Daily living: €140 to €260 / month depending on the city',
          'Compulsory medical insurance: around €180 / year',
        ],
      },
      {
        heading: 'Partner universities offering these programmes',
        paragraphs: [
          'Economics and management are among the most widely offered programmes: most multidisciplinary universities in the network open them to international students. The exact list of specialties and languages of instruction is confirmed when choosing the institution.',
        ],
        links: [
          { universitySlug: 'universite-detat-de-moscou', label: 'Moscow State University' },
          { universitySlug: 'universite-rudn', label: 'RUDN University' },
          { universitySlug: 'universite-de-kazan', label: 'Kazan Federal University' },
          { universitySlug: 'universite-detat-de-voronej', label: 'Voronezh State University' },
          { universitySlug: 'universite-detat-tourgueniev-dorel', label: 'Turgenev Orel State University' },
        ],
      },
      {
        heading: 'Career paths and degree recognition',
        paragraphs: [
          'The degree awarded is a Russian state degree, subject to a recognition procedure specific to each country. As with engineering, working in the private sector generally does not require prior professional authorisation, which simplifies matters compared with the health professions.',
          'One point deserves to be said plainly: this is also the most competitive programme on graduation, because it is the most widespread in the world. What will make the difference on your CV is not the degree alone but what you have added to it — languages, placements, a specialised master. Russian, English and French together make for a rare and genuinely marketable profile.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do I need to be good at mathematics to study economics in Russia?',
        answer:
          'It is a clear advantage. Economics is taught there as a quantitative discipline: the first two years include a substantial share of applied mathematics and statistics.',
      },
      {
        question: 'How long is the course?',
        answer:
          'Four years for the bachelor, excluding the preparatory language year. A two-year master can extend it, at the same university or elsewhere.',
      },
      {
        question: 'Why is economics cheaper than the other programmes?',
        answer:
          'Fees start at €2,200 per year, against €2,800 in engineering and €3,500 in medicine. The shorter duration — four years instead of five or six — reduces the total cost further.',
      },
      {
        question: 'Can it be studied in English?',
        answer:
          'Yes, particularly in international trade and finance. These courses are generally more expensive than Russian-taught ones, and fewer in regional universities.',
      },
      {
        question: 'Is a master necessary?',
        answer:
          'It is not compulsory, but it is common and often decisive for specialising. It is a decision to take in the third year, once the field is settled.',
      },
      {
        question: 'What is the total annual budget?',
        answer:
          'Tuition from €2,200, plus accommodation (€30 to €90 per month in halls), daily living (€140 to €260 per month) and insurance (around €180 per year). The first year adds about €900 in one-off costs.',
      },
      {
        question: 'Is the degree recognised abroad?',
        answer:
          'It is a state degree, subject to a recognition procedure specific to each country. In the private sector, no prior professional authorisation is generally required, unlike the health professions.',
      },
    ],
  },
  ar: {
    h1: 'دراسة الاقتصاد والأعمال في روسيا',
    metaTitle: 'دراسة الاقتصاد والتصرّف في روسيا 2026: أربع سنوات بـ 2200 أورو سنويًا | RusStudy',
    metaDescription:
      'دراسة الاقتصاد أو التصرّف أو المالية في روسيا: إجازة في أربع سنوات، قبول على أساس الملف، رسوم تبدأ من 2200 أورو سنويًا، برنامج مفصّل وآفاق مهنية.',
    intro:
      'يشكّل الاقتصاد والتصرّف الاختصاص الأيسر في الشبكة، برسوم تبدأ من 2200 أورو سنويًا ومسار من أربع سنوات. وهو أيضًا الطريق الأكثر مرونة: فالشهادة تنتقل بسهولة وتفتح على قطاعات متنوّعة، من التجارة الدولية إلى المالية. وترافق RusStudy كل مترشّح من الملف إلى الاستقرار: القبول، والدعوة الرسمية، والتأشيرة، والسكن الجامعي، والمتابعة طيلة الدراسة.',
    sections: [
      {
        heading: 'تقديم البرنامج',
        paragraphs: [
          'خلافًا للطب أو الصيدلة اللذين يندرجان ضمن الـ specialitet، يتبع الاقتصاد نظام الإجازة والماجستير. فالمسار الأساسي إجازة (bakalavriat) من أربع سنوات، يمكن تمديدها بماجستير (magistratura) من سنتين في الجامعة نفسها أو في غيرها.',
          'يتم التدريس أساسًا بالروسية، بعد سنة تحضيرية لغوية للطلبة الذين لا يتقنون اللغة. والمسالك بالإنجليزية موجودة، خاصة في التجارة الدولية والمالية، وهي عمومًا أغلى.',
        ],
        bullets: [
          'الشهادة المسلّمة: إجازة (bakalavriat)، قابلة للتمديد بماجستير من سنتين',
          'المدة: 4 سنوات بدوام كامل، دون احتساب السنة التحضيرية للغة',
          'لغات التدريس: الروسية (بعد السنة التحضيرية) أو الإنجليزية حسب الجامعة',
          'القبول: على أساس الملف الدراسي، دون مناظرة دخول إقصائية',
        ],
      },
      {
        heading: 'المجالات المشمولة',
        paragraphs: [
          '«الاقتصاد والأعمال» يجمع عدة اختصاصات متمايزة: الاقتصاد العام، والتصرّف، والمالية والقرض، والمحاسبة والتدقيق، والتجارة الدولية، والتسويق. ولكل منها رمزه الرسمي في التصنيف الروسي.',
          'فليس هناك إذن رمز وحيد يُتحقّق منه، بل رمز الاختصاص الدقيق الذي تستهدفه. اطلبه صراحة قبل التسجيل: فسيظهر على شهادتك وسيحكم إجراءات معادلتك، وقد يغطّي تسميتان متجاورتان محتويات مختلفة إلى حدّ بعيد.',
        ],
      },
      {
        heading: 'البرنامج سنة بسنة',
        paragraphs: [
          'السنتان الأولى والثانية — الأساسيات: الاقتصاد الجزئي، والاقتصاد الكلي، والرياضيات التطبيقية في الاقتصاد، والإحصاء، والمحاسبة العامة، والقانون، وإعلامية التصرّف. وهي قاعدة واسعة، عامّة عن قصد، تسبق اختيار التخصص.',
          'السنة الثالثة — التخصص: حسب المسار، مالية المؤسسة، أو التصرّف، أو التسويق، أو الاقتصاد الدولي، أو التحليل المالي، أو الجباية. وتأخذ دراسات الحالة والأعمال الجماعية حيّزًا مهمًا.',
          'السنة الرابعة — التمهين: تربّص في مؤسسة، وتعميق الاختصاص، ثم مذكرة ختم دروس تُناقَش أمام لجنة. وهذه المناقشة هي ما يصادق على الإجازة.',
        ],
      },
      {
        heading: 'شروط القبول',
        paragraphs: [
          'القبول مفتوح لحاملي الباكالوريا بجميع شعبها، مع أفضلية حقيقية للملفات المرتاحة في الرياضيات: فخلافًا لفكرة شائعة، الاقتصاد في روسيا اختصاص كمّي، وتتضمّن السنتان الأوليان حصة معتبرة من الرياضيات والإحصاء.',
          'ويقوم القبول على ملف: كشوف الأعداد، والشهادة مترجمة ومصدّقة، وجواز السفر، والوثائق الطبية. وبعد المصادقة، تصدر الجامعة دعوة رسمية تفتح باب مطلب تأشيرة الدراسة.',
        ],
        bullets: [
          'باكالوريا بجميع الشعب، مع أفضلية للملفات الرياضية',
          'المواد المفيدة: الرياضيات، والاقتصاد إن كان ضمن البرنامج',
          'الملف: كشوف الأعداد، الشهادة مترجمة ومصدّقة، جواز السفر، شهادات طبية',
          'سنة تحضيرية للغة بالنسبة إلى المسار بالروسية',
        ],
      },
      {
        heading: 'التكاليف بالتفصيل',
        paragraphs: [
          'تبدأ رسوم الاقتصاد من 2200 أورو سنويًا، وهي أدنى تعريفة بين اختصاصات الشبكة، وتختلف حسب الجامعة والمدينة. ومع مدة من أربع سنوات بدل خمس أو ست، يصبح هذا الاختصاص صاحب الكلفة الجملية الأقلّ.',
          'وتشمل الميزانية السنوية كذلك السكن والمعيشة اليومية والتأمين الطبي الإجباري: بين 30 و90 أورو شهريًا في الإقامة الجامعية، ومن 140 إلى 260 أورو شهريًا للمعيشة حسب المدينة، ونحو 180 أورو سنويًا للتأمين.',
          'وتضيف السنة الأولى مصاريف ظرفية بنحو 900 أورو: التأشيرة والترجمات والتصديقات وتذكرة الطائرة.',
        ],
        bullets: [
          'الرسوم الدراسية: ابتداءً من 2200 أورو / سنة',
          'المدة: 4 سنوات، أي الكلفة الجملية الأدنى في الشبكة',
          'السكن في الإقامة: من 30 إلى 90 أورو / شهر حسب المدينة',
          'المعيشة اليومية: من 140 إلى 260 أورو / شهر حسب المدينة',
          'التأمين الطبي الإجباري: نحو 180 أورو / سنة',
        ],
      },
      {
        heading: 'الجامعات الشريكة التي تقترح هذه الاختصاصات',
        paragraphs: [
          'يُعدّ الاقتصاد والتصرّف من أوسع الاختصاصات عرضًا: فأغلب الجامعات متعدّدة الاختصاصات في الشبكة تفتحها للطلبة الدوليين. وتُؤكَّد القائمة الدقيقة للاختصاصات ولغات التدريس عند اختيار المؤسسة.',
        ],
        links: [
          { universitySlug: 'universite-detat-de-moscou', label: 'جامعة موسكو الحكومية' },
          { universitySlug: 'universite-rudn', label: 'جامعة RUDN' },
          { universitySlug: 'universite-de-kazan', label: 'جامعة قازان الفيدرالية' },
          { universitySlug: 'universite-detat-de-voronej', label: 'جامعة فورونيج الحكومية' },
          { universitySlug: 'universite-detat-tourgueniev-dorel', label: 'جامعة أوريول الحكومية (تورغينيف)' },
        ],
      },
      {
        heading: 'الآفاق والاعتراف بالشهادة',
        paragraphs: [
          'الشهادة المسلّمة شهادة دولة روسية، تخضع لإجراء اعتراف خاص بكل بلد. وكما في الهندسة، لا تستلزم الممارسة في القطاع الخاص عمومًا ترخيصًا مهنيًا مسبقًا، ما يبسّط الإجراءات مقارنة بمهن الصحة.',
          'وهناك نقطة تستحق أن تُقال بصراحة: هذا أيضًا هو الاختصاص الأكثر تنافسية عند التخرّج، لأنه الأوسع انتشارًا في العالم. فما سيُحدث الفارق في سيرتك الذاتية ليس الشهادة وحدها بل ما أضفته إليها — اللغات، والتربّصات، وتخصص في الماجستير. والروسية والإنجليزية والفرنسية مجتمعة تشكّل في هذا الباب ملفًا نادرًا وقابلًا للتثمين فعلًا.',
        ],
      },
    ],
    faq: [
      {
        question: 'هل يجب أن أكون جيدًا في الرياضيات لدراسة الاقتصاد في روسيا؟',
        answer:
          'إنها أفضلية واضحة. فالاقتصاد يُدرَّس هناك كاختصاص كمّي: وتتضمّن السنتان الأوليان حصة معتبرة من الرياضيات التطبيقية والإحصاء.',
      },
      {
        question: 'ما هي مدة المسار؟',
        answer:
          'أربع سنوات للإجازة، دون احتساب السنة التحضيرية للغة. ويمكن تمديدها بماجستير من سنتين، في الجامعة نفسها أو في غيرها.',
      },
      {
        question: 'لماذا الاقتصاد أرخص من بقية الاختصاصات؟',
        answer:
          'تبدأ الرسوم من 2200 أورو سنويًا، مقابل 2800 أورو في الهندسة و3500 أورو في الطب. والمدة الأقصر — أربع سنوات بدل خمس أو ست — تخفّض الكلفة الجملية أكثر.',
      },
      {
        question: 'هل يمكن الدراسة بالإنجليزية؟',
        answer:
          'نعم، خاصة في التجارة الدولية والمالية. وهذه المسالك أغلى عمومًا من المسالك بالروسية، وأقل عددًا في جامعات الأقاليم.',
      },
      {
        question: 'هل الماجستير ضروري؟',
        answer:
          'ليس إجباريًا، لكنه متكرّر وغالبًا حاسم للتخصص. وهو قرار يُتخذ في السنة الثالثة، بعد تحديد المجال.',
      },
      {
        question: 'ما هي الميزانية السنوية الجملية؟',
        answer:
          'رسوم دراسية ابتداءً من 2200 أورو، يُضاف إليها السكن (من 30 إلى 90 أورو شهريًا في الإقامة)، والمعيشة اليومية (من 140 إلى 260 أورو شهريًا)، والتأمين (نحو 180 أورو سنويًا). وتضيف السنة الأولى نحو 900 أورو من المصاريف الظرفية.',
      },
      {
        question: 'هل الشهادة معترف بها في الخارج؟',
        answer:
          'هي شهادة دولة، تخضع لإجراء اعتراف خاص بكل بلد. وفي القطاع الخاص لا يُطلب عمومًا أي ترخيص مهني مسبق، خلافًا لمهن الصحة.',
      },
    ],
  },
  ru: {
    h1: 'Учёба на экономических и управленческих направлениях в России',
    metaTitle: 'Экономика и менеджмент в России 2026: четыре года, 2200 € в год | RusStudy',
    metaDescription:
      'Экономика, менеджмент или финансы в России: четырёхлетний бакалавриат, зачисление по школьным документам, стоимость от 2200 € в год, подробная программа и перспективы.',
    intro:
      'Экономика и менеджмент — самое доступное направление сети: стоимость обучения от 2200 € в год и четырёхлетняя программа. Это и самый гибкий маршрут: диплом легко переносится и открывает разные отрасли, от международной торговли до финансов. RusStudy сопровождает каждого абитуриента от подачи документов до обустройства: зачисление, официальное приглашение, виза, общежитие и поддержка на всём протяжении учёбы.',
    sections: [
      {
        heading: 'О программе',
        paragraphs: [
          'В отличие от медицины и фармации, которые идут по специалитету, экономика следует схеме «бакалавриат — магистратура». Базовая программа — четырёхлетний бакалавриат, который может быть продолжен двухлетней магистратурой в том же вузе или в другом.',
          'Обучение ведётся преимущественно на русском, после подготовительного языкового года для тех, кто не владеет языком. Англоязычные программы существуют, особенно по международной торговле и финансам, и обычно стоят дороже.',
        ],
        bullets: [
          'Выдаваемый диплом: бакалавриат, с возможностью продолжить в двухлетней магистратуре',
          'Длительность: 4 года очно, не считая подготовительного языкового года',
          'Языки обучения: русский (после подготовительного года) или английский в зависимости от вуза',
          'Зачисление: по школьным документам, без отсеивающего вступительного конкурса',
        ],
      },
      {
        heading: 'Охватываемые направления',
        paragraphs: [
          '«Экономика и бизнес» объединяет несколько самостоятельных специальностей: общая экономика, менеджмент, финансы и кредит, бухгалтерский учёт и аудит, международная торговля, маркетинг. У каждой свой официальный код в российской номенклатуре.',
          'Поэтому проверять нужно не один код, а код конкретной выбранной специальности. Запросите его прямо до зачисления: он попадёт в диплом и будет определять процедуры признания, а два близких названия могут скрывать довольно разное содержание.',
        ],
      },
      {
        heading: 'Программа по годам',
        paragraphs: [
          'Первый и второй курсы — основы: микроэкономика, макроэкономика, математика для экономистов, статистика, бухгалтерский учёт, право и информатика в управлении. Это широкая, сознательно общая база, предшествующая выбору специализации.',
          'Третий курс — специализация: в зависимости от профиля — корпоративные финансы, менеджмент, маркетинг, международная экономика, финансовый анализ или налогообложение. Разборы кейсов и групповая работа занимают важное место.',
          'Четвёртый курс — профессионализация: практика на предприятии, углубление специальности, затем выпускная работа с защитой перед комиссией. Именно эта защита и подтверждает бакалаврскую степень.',
        ],
      },
      {
        heading: 'Условия поступления',
        paragraphs: [
          'Поступление открыто обладателям аттестата любого профиля, с реальным преимуществом для тех, кому даётся математика: вопреки расхожему мнению, экономика в России — количественная дисциплина, и первые два курса включают значительную долю математики и статистики.',
          'Зачисление опирается на пакет документов: выписки оценок, переведённый и легализованный аттестат, паспорт и медицинские документы. После проверки вуз выдаёт официальное приглашение, открывающее подачу на учебную визу.',
        ],
        bullets: [
          'Аттестат любого профиля, с преимуществом для математического склада',
          'Полезные предметы: математика, экономика, если она была в программе',
          'Пакет: выписки, переведённый и легализованный аттестат, паспорт, медицинские справки',
          'Подготовительный языковой год для русскоязычной программы',
        ],
      },
      {
        heading: 'Подробная стоимость',
        paragraphs: [
          'Стоимость обучения по экономике начинается от 2200 € в год — самый низкий тариф среди направлений сети — и зависит от вуза и города. В сочетании с четырьмя годами вместо пяти-шести это делает направление самым экономичным по совокупной стоимости.',
          'Годовой бюджет включает также жильё, повседневные расходы и обязательную медицинскую страховку: от 30 до 90 € в месяц в общежитии, от 140 до 260 € в месяц на жизнь в зависимости от города и около 180 € в год на страховку.',
          'Первый год добавляет разовые расходы около 900 €: виза, переводы, легализация и авиабилет.',
        ],
        bullets: [
          'Обучение: от 2200 € / год',
          'Длительность: 4 года — самая низкая совокупная стоимость в сети',
          'Общежитие: 30–90 € / месяц в зависимости от города',
          'Повседневные расходы: 140–260 € / месяц в зависимости от города',
          'Обязательная медицинская страховка: около 180 € / год',
        ],
      },
      {
        heading: 'Вузы-партнёры с такими направлениями',
        paragraphs: [
          'Экономика и менеджмент входят в число самых широко представленных направлений: большинство многопрофильных вузов сети открывает их для иностранных студентов. Точный перечень специальностей и языков обучения уточняется при выборе учреждения.',
        ],
        links: [
          { universitySlug: 'universite-detat-de-moscou', label: 'МГУ имени М. В. Ломоносова' },
          { universitySlug: 'universite-rudn', label: 'РУДН' },
          { universitySlug: 'universite-de-kazan', label: 'Казанский федеральный университет' },
          { universitySlug: 'universite-detat-de-voronej', label: 'Воронежский государственный университет' },
          { universitySlug: 'universite-detat-tourgueniev-dorel', label: 'ОГУ имени И. С. Тургенева' },
        ],
      },
      {
        heading: 'Перспективы и признание диплома',
        paragraphs: [
          'Выдаваемый диплом — документ государственного образца, подпадающий под процедуру признания, свою в каждой стране. Как и в инженерии, работа в частном секторе обычно не требует предварительного профессионального допуска, что упрощает дело по сравнению с медицинскими профессиями.',
          'Один момент стоит сказать прямо: это же и самое конкурентное направление на выходе, потому что оно самое распространённое в мире. Разницу в вашем резюме создаст не сам диплом, а то, что вы к нему добавили: языки, практику, специализацию в магистратуре. Русский, английский и французский вместе дают редкий и действительно ценный профиль.',
        ],
      },
    ],
    faq: [
      {
        question: 'Нужно ли хорошо знать математику, чтобы изучать экономику в России?',
        answer:
          'Это явное преимущество. Экономику здесь преподают как количественную дисциплину: первые два курса включают значительную долю прикладной математики и статистики.',
      },
      {
        question: 'Сколько длится программа?',
        answer:
          'Четыре года бакалавриата, не считая подготовительного языкового года. Двухлетняя магистратура может её продолжить — в том же вузе или в другом.',
      },
      {
        question: 'Почему экономика дешевле других направлений?',
        answer:
          'Стоимость начинается от 2200 € в год против 2800 € в инженерии и 3500 € в медицине. Более короткий срок — четыре года вместо пяти-шести — ещё сильнее снижает совокупные расходы.',
      },
      {
        question: 'Можно ли учиться на английском?',
        answer:
          'Да, особенно по международной торговле и финансам. Такие программы обычно дороже русскоязычных и реже встречаются в региональных вузах.',
      },
      {
        question: 'Обязательна ли магистратура?',
        answer:
          'Она не обязательна, но распространена и часто решает вопрос специализации. Это решение принимается на третьем курсе, когда направление уже определено.',
      },
      {
        question: 'Каков совокупный годовой бюджет?',
        answer:
          'Обучение от 2200 €, плюс жильё (30–90 € в месяц в общежитии), повседневные расходы (140–260 € в месяц) и страховка (около 180 € в год). Первый год добавляет примерно 900 € разовых расходов.',
      },
      {
        question: 'Признаётся ли диплом за рубежом?',
        answer:
          'Это диплом государственного образца, подпадающий под процедуру признания, свою в каждой стране. В частном секторе предварительный профессиональный допуск обычно не требуется, в отличие от медицинских профессий.',
      },
    ],
  },
};
