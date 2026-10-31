import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';
import { PRACTICAL_GUIDES } from './pratique';

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface GuideCopy {
  title: string;
  description: string;
  h1: string;
  /** Résumé affiché sur la carte de l'index. */
  summary: string;
  intro: string;
  sections: GuideSection[];
  faq: FaqEntry[];
  keywords: string[];
}

export interface GuidesIndexCopy {
  title: string;
  description: string;
  intro: string;
  readMore: string;
}

export interface GuideEntry {
  slug: string;
  updatedAt: string;
  copy: Record<Lang, GuideCopy>;
}

/** Ordre identique à GUIDE_SLUGS dans src/content/guides/registry.ts */
const GUIDES: GuideEntry[] = [
  {
    slug: 'documents-et-legalisation',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: "Documents, traductions et légalisation pour étudier en Russie | RusStudy",
        description:
          "La liste des pièces à réunir pour une inscription en Russie, la chaîne de traduction et de légalisation à respecter, et les erreurs qui font rejeter un dossier.",
        h1: 'Documents, traductions assermentées et légalisation',
        summary:
          "Quelles pièces réunir, dans quel ordre les faire traduire et légaliser, et ce qui fait rejeter un dossier.",
        intro:
          "C'est l'étape où la plupart des dossiers prennent du retard, rarement par manque de pièces, presque toujours parce qu'elles ont été traitées dans le désordre. Ce guide donne la liste des documents, l'ordre des opérations et les motifs de rejet les plus fréquents.",
        sections: [
          {
            heading: 'Les pièces à réunir',
            paragraphs: [
              "La liste exacte dépend de l'université et de la filière, mais le socle est stable d'un établissement à l'autre.",
            ],
            bullets: [
              'Passeport en cours de validité, avec une validité résiduelle couvrant largement la durée du séjour prévu',
              'Diplôme du baccalauréat et relevés de notes des trois dernières années',
              'Extrait de naissance',
              'Certificats médicaux demandés pour le visa étudiant, dont le test VIH',
              "Photos d'identité au format demandé par l'université",
              "Formulaire de candidature de l'université, complété et signé",
            ],
          },
          {
            heading: 'La chaîne de traduction et de légalisation, dans le bon ordre',
            paragraphs: [
              "C'est ici que l'ordre compte : une pièce traduite avant d'être légalisée doit souvent être refaite entièrement.",
            ],
            bullets: [
              "1. Obtenez l'original définitif du document auprès de l'administration tunisienne concernée",
              '2. Faites certifier ou légaliser cet original selon la forme exigée — apostille ou légalisation consulaire, à confirmer auprès du consulat et de l’université',
              '3. Faites traduire en russe par un traducteur assermenté, la traduction portant sur le document déjà légalisé',
              '4. Faites certifier la traduction elle-même lorsque l’université le demande',
            ],
          },
          {
            heading: 'Ce qui fait rejeter un dossier',
            bullets: [
              "Un nom orthographié différemment d'un document à l'autre, ou différent de l'orthographe du passeport",
              'Une traduction réalisée par un traducteur non assermenté, même si elle est correcte',
              "Un certificat médical périmé à la date d'examen du dossier : ces documents ont une durée de validité courte",
              'Une photocopie transmise là où un original était demandé',
              "Un diplôme non encore délivré, remplacé par une attestation provisoire non acceptée par l'établissement",
            ],
          },
          {
            heading: 'Le temps à prévoir',
            paragraphs: [
              "Comptez plusieurs semaines pour l'ensemble de la chaîne, en tenant compte des délais administratifs tunisiens et des jours fériés. Les certificats médicaux se font en dernier, pour rester valides au moment de l'examen du dossier.",
              "Une règle simple : tout ce qui ne dépend pas d'une date de validité peut être lancé immédiatement, avant même le choix définitif de l'université.",
            ],
          },
        ],
        faq: [
          {
            question: "Puis-je commencer les démarches avant d'avoir choisi mon université ?",
            answer:
              "Oui, et c'est recommandé. La légalisation de vos diplômes et actes d'état civil ne dépend pas de l'établissement : la lancer tôt fait gagner plusieurs semaines.",
          },
          {
            question: "Faut-il traduire les documents en russe ou en anglais ?",
            answer:
              "En russe dans la grande majorité des cas, y compris pour les cursus enseignés en anglais. Certaines universités acceptent l'anglais pour une partie des pièces : vérifiez avant de payer une traduction.",
          },
          {
            question: 'Les certificats médicaux ont-ils une date limite ?',
            answer:
              'Oui, leur validité est courte. Faites-les réaliser en dernier, une fois le reste du dossier prêt, pour éviter de devoir les refaire.',
          },
        ],
        keywords: [
          'documents inscription université russe', 'traduction assermentée russe', 'légalisation diplôme Russie',
          'dossier études Russie Tunisie', 'apostille diplôme Tunisie', 'certificat médical visa Russie',
        ],
      },
      en: {
        title: 'Documents, Translations and Legalisation to Study in Russia | RusStudy',
        description:
          'The list of documents needed to enrol in Russia, the translation and legalisation chain to follow, and the mistakes that get a file rejected.',
        h1: 'Documents, sworn translations and legalisation',
        summary: 'Which documents to gather, in what order to translate and legalise them, and what gets a file rejected.',
        intro:
          'This is the stage where most files fall behind, rarely for missing documents and almost always because they were handled in the wrong order. This guide gives the document list, the order of operations and the most frequent grounds for rejection.',
        sections: [
          {
            heading: 'Documents to gather',
            paragraphs: ['The exact list depends on the university and programme, but the core is consistent across institutions.'],
            bullets: [
              'Valid passport, with remaining validity comfortably covering the planned stay',
              'Baccalaureate certificate and transcripts for the last three years',
              'Birth certificate',
              'Medical certificates required for the student visa, including the HIV test',
              'Identity photos in the format requested by the university',
              'The university application form, completed and signed',
            ],
          },
          {
            heading: 'The translation and legalisation chain, in the right order',
            paragraphs: ['Order matters here: a document translated before being legalised often has to be redone entirely.'],
            bullets: [
              '1. Obtain the final original from the relevant Tunisian authority',
              '2. Have that original certified or legalised in the required form — apostille or consular legalisation, to be confirmed with the consulate and the university',
              '3. Have it translated into Russian by a sworn translator, translating the already-legalised document',
              '4. Have the translation itself certified when the university requires it',
            ],
          },
          {
            heading: 'What gets a file rejected',
            bullets: [
              'A name spelled differently across documents, or differently from the passport',
              'A translation by a non-sworn translator, even if it is accurate',
              'A medical certificate expired by the time the file is reviewed: these have short validity',
              'A photocopy submitted where an original was required',
              'A diploma not yet issued, replaced by a provisional certificate the institution does not accept',
            ],
          },
          {
            heading: 'How much time to plan for',
            paragraphs: [
              'Allow several weeks for the whole chain, factoring in Tunisian administrative timelines and public holidays. Medical certificates come last, so they stay valid when the file is reviewed.',
              'A simple rule: anything without an expiry date can start immediately, even before the university is finally chosen.',
            ],
          },
        ],
        faq: [
          {
            question: 'Can I start before choosing my university?',
            answer:
              'Yes, and it is recommended. Legalising your diplomas and civil records does not depend on the institution: starting early saves several weeks.',
          },
          {
            question: 'Should documents be translated into Russian or English?',
            answer:
              'Into Russian in the vast majority of cases, including for English-taught programmes. Some universities accept English for part of the file: check before paying for a translation.',
          },
          {
            question: 'Do medical certificates have a deadline?',
            answer:
              'Yes, their validity is short. Do them last, once the rest of the file is ready, to avoid having to redo them.',
          },
        ],
        keywords: [
          'documents Russian university enrolment', 'sworn translation Russian', 'diploma legalisation Russia',
          'study file Russia Tunisia', 'apostille diploma Tunisia', 'medical certificate Russian visa',
        ],
      },
      ar: {
        title: 'الوثائق والترجمة والتصديق للدراسة في روسيا | RusStudy',
        description:
          'قائمة الوثائق المطلوبة للتسجيل في روسيا، وسلسلة الترجمة والتصديق الواجب احترامها، والأخطاء التي تؤدي إلى رفض الملف.',
        h1: 'الوثائق والترجمات المحلّفة والتصديق',
        summary: 'ما الوثائق التي تُجمع، وبأي ترتيب تُترجم وتُصدَّق، وما الذي يؤدي إلى رفض الملف.',
        intro:
          'هذه هي المرحلة التي تتأخر فيها أغلب الملفات، ونادرًا بسبب نقص الوثائق، بل غالبًا لأنها عولجت بترتيب خاطئ. يقدم هذا الدليل قائمة الوثائق وترتيب العمليات وأكثر أسباب الرفض تكرارًا.',
        sections: [
          {
            heading: 'الوثائق الواجب جمعها',
            paragraphs: ['تتوقف القائمة الدقيقة على الجامعة والاختصاص، لكن الأساس ثابت من مؤسسة إلى أخرى.'],
            bullets: [
              'جواز سفر ساري المفعول، بمدة صلاحية متبقية تغطي بوضوح مدة الإقامة المرتقبة',
              'شهادة البكالوريا وكشوف أعداد السنوات الثلاث الأخيرة',
              'مضمون ولادة',
              'الشهادات الطبية المطلوبة لتأشيرة الدراسة، ومنها تحليل فيروس نقص المناعة',
              'صور شمسية بالمقاس الذي تطلبه الجامعة',
              'مطبوعة الترشح الخاصة بالجامعة، معمّرة وممضاة',
            ],
          },
          {
            heading: 'سلسلة الترجمة والتصديق بالترتيب الصحيح',
            paragraphs: ['هنا يهم الترتيب: وثيقة تُترجم قبل تصديقها كثيرًا ما يجب إعادتها بالكامل.'],
            bullets: [
              '1. احصل على الأصل النهائي من الإدارة التونسية المعنية',
              '2. صدّق هذا الأصل بالشكل المطلوب — أبوستيل أو تصديق قنصلي، ويُؤكَّد لدى القنصلية والجامعة',
              '3. ترجمه إلى الروسية لدى مترجم محلَّف، على أن تشمل الترجمة الوثيقة المصدَّقة أصلاً',
              '4. صدّق الترجمة نفسها عندما تطلب الجامعة ذلك',
            ],
          },
          {
            heading: 'ما الذي يؤدي إلى رفض الملف',
            bullets: [
              'اسم مكتوب بشكل مختلف من وثيقة إلى أخرى، أو مخالف لما في جواز السفر',
              'ترجمة من مترجم غير محلَّف، حتى لو كانت صحيحة',
              'شهادة طبية منتهية الصلاحية عند دراسة الملف: مدة صلاحيتها قصيرة',
              'نسخة مصوّرة حيث يُطلب أصل',
              'شهادة لم تُسلَّم بعد، عُوِّضت بشهادة وقتية لا تقبلها المؤسسة',
            ],
          },
          {
            heading: 'الوقت الواجب توقّعه',
            paragraphs: [
              'احسب عدة أسابيع للسلسلة كاملة، مع مراعاة الآجال الإدارية التونسية والعطل. الشهادات الطبية تُنجز في الأخير حتى تبقى صالحة وقت دراسة الملف.',
              'قاعدة بسيطة: كل ما لا يتعلق بتاريخ صلاحية يمكن إطلاقه فورًا، حتى قبل الاختيار النهائي للجامعة.',
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكنني بدء الإجراءات قبل اختيار جامعتي؟',
            answer:
              'نعم، وهذا مستحسن. تصديق شهاداتك ووثائق حالتك المدنية لا يتوقف على المؤسسة: البدء مبكرًا يوفر عدة أسابيع.',
          },
          {
            question: 'هل تُترجم الوثائق إلى الروسية أم الإنجليزية؟',
            answer:
              'إلى الروسية في الغالبية العظمى من الحالات، حتى للتكوينات بالإنجليزية. بعض الجامعات تقبل الإنجليزية لجزء من الوثائق: تحقق قبل دفع كلفة ترجمة.',
          },
          {
            question: 'هل للشهادات الطبية أجل محدد؟',
            answer: 'نعم، صلاحيتها قصيرة. أنجزها في الأخير بعد جهوزية بقية الملف تفاديًا لإعادتها.',
          },
        ],
        keywords: [
          'وثائق التسجيل في جامعة روسية', 'ترجمة محلفة روسية', 'تصديق الشهادة روسيا',
          'ملف الدراسة في روسيا تونس', 'أبوستيل شهادة تونس', 'شهادة طبية تأشيرة روسيا',
        ],
      },
      ru: {
        title: 'Документы, переводы и легализация для учёбы в России | RusStudy',
        description:
          'Список документов для поступления в России, порядок перевода и легализации и ошибки, из-за которых досье отклоняют.',
        h1: 'Документы, присяжные переводы и легализация',
        summary: 'Какие документы собрать, в каком порядке переводить и легализовать и что приводит к отказу.',
        intro:
          'Именно на этом этапе большинство досье теряет время — редко из-за нехватки документов и почти всегда из-за неверного порядка действий. В этом гиде — список документов, порядок операций и самые частые причины отказа.',
        sections: [
          {
            heading: 'Какие документы собрать',
            paragraphs: ['Точный список зависит от вуза и программы, но основа одинакова во всех учреждениях.'],
            bullets: [
              'Действующий загранпаспорт с запасом срока, покрывающим планируемое пребывание',
              'Аттестат бакалавриата и выписки оценок за последние три года',
              'Свидетельство о рождении',
              'Медицинские справки для учебной визы, включая тест на ВИЧ',
              'Фотографии в формате, запрошенном вузом',
              'Анкета вуза, заполненная и подписанная',
            ],
          },
          {
            heading: 'Цепочка перевода и легализации в правильном порядке',
            paragraphs: ['Порядок здесь важен: документ, переведённый до легализации, часто приходится переделывать целиком.'],
            bullets: [
              '1. Получите окончательный оригинал в соответствующем тунисском органе',
              '2. Заверьте или легализуйте оригинал в требуемой форме — апостиль или консульская легализация, уточняется в консульстве и вузе',
              '3. Закажите перевод на русский у присяжного переводчика — переводится уже легализованный документ',
              '4. Заверьте сам перевод, если этого требует вуз',
            ],
          },
          {
            heading: 'Из-за чего досье отклоняют',
            bullets: [
              'Имя, написанное по-разному в документах или иначе, чем в паспорте',
              'Перевод, сделанный не присяжным переводчиком, даже если он верный',
              'Медицинская справка, истёкшая к моменту рассмотрения: срок их действия короткий',
              'Ксерокопия там, где требовался оригинал',
              'Ещё не выданный диплом, заменённый временной справкой, которую вуз не принимает',
            ],
          },
          {
            heading: 'Сколько времени закладывать',
            paragraphs: [
              'Заложите несколько недель на всю цепочку с учётом тунисских административных сроков и праздников. Медицинские справки делают в последнюю очередь, чтобы они оставались действительными.',
              'Простое правило: всё, что не имеет срока годности, можно начинать сразу, ещё до окончательного выбора вуза.',
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли начать до выбора вуза?',
            answer:
              'Да, и это рекомендуется. Легализация дипломов и актов гражданского состояния не зависит от вуза: ранний старт экономит несколько недель.',
          },
          {
            question: 'Переводить документы на русский или английский?',
            answer:
              'В подавляющем большинстве случаев на русский, в том числе для англоязычных программ. Некоторые вузы принимают английский для части документов — уточните до оплаты перевода.',
          },
          {
            question: 'Есть ли срок у медицинских справок?',
            answer: 'Да, он короткий. Делайте их последними, когда остальное досье готово, чтобы не переделывать.',
          },
        ],
        keywords: [
          'документы для поступления в России', 'присяжный перевод на русский', 'легализация диплома Россия',
          'досье на учёбу в России', 'апостиль диплома Тунис', 'медицинская справка учебная виза',
        ],
      },
    },
  },
  {
    slug: 'logement-etudiant',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: 'Logement étudiant en Russie : dortoir, colocation et coûts réels | RusStudy',
        description:
          "Résidence universitaire ou appartement partagé : ce qui est fourni, ce qu'il faut apporter, les coûts réels par ville et les règles de vie en dortoir.",
        h1: 'Se loger en Russie pendant ses études',
        summary: "Dortoir ou colocation, ce qui est fourni, ce qu'il faut apporter et combien cela coûte vraiment.",
        intro:
          "Le logement est la deuxième dépense d'un étudiant après les frais de scolarité, et c'est aussi le sujet sur lequel circulent le plus d'idées fausses. Voici ce que recouvre concrètement une place en résidence universitaire russe, et quand la colocation devient pertinente.",
        sections: [
          {
            heading: 'Dortoir universitaire ou appartement partagé',
            paragraphs: [
              "La résidence universitaire est l'option par défaut, et de loin la moins chère : de 30 € par mois dans les villes de région à 90 € par mois à Moscou. L'appartement partagé démarre autour de 100 € en région et 280 € à Moscou.",
              "Au-delà du prix, la résidence a un avantage administratif décisif la première année : elle prend en charge votre enregistrement migratoire, une formalité obligatoire et pénible à gérer seul quand on ne parle pas encore russe.",
            ],
          },
          {
            heading: 'Ce qui est fourni dans une résidence',
            bullets: [
              'Une chambre, le plus souvent partagée à deux ou trois étudiants',
              'Le mobilier de base : lit, bureau, chaise, armoire',
              'Cuisine et sanitaires communs par étage ou par bloc',
              'Chauffage central compris dans le tarif — un point à ne pas sous-estimer en hiver',
              'Un accès contrôlé avec présence de sécurité',
            ],
          },
          {
            heading: 'Ce qu’il faut apporter et ce qu’il vaut mieux acheter sur place',
            paragraphs: [
              "Le linge de lit, la vaisselle et les petits équipements s'achètent sur place pour beaucoup moins cher que le surcoût de bagages en avion.",
              "En revanche, apportez vos médicaments habituels avec leur ordonnance traduite, vos documents originaux, et de quoi tenir les deux premières semaines avant l'ouverture de votre compte bancaire.",
            ],
          },
          {
            heading: 'Les règles de vie à connaître',
            bullets: [
              "Les entrées et sorties sont enregistrées, et les visites extérieures sont encadrées par un horaire",
              "Tout changement d'adresse doit être déclaré : votre enregistrement migratoire est lié à votre logement",
              "Les résidences appliquent des règles strictes sur les appareils de cuisson dans les chambres, pour des raisons de sécurité incendie",
              "La place en résidence est attribuée pour l'année universitaire et se renouvelle, elle n'est pas acquise automatiquement",
            ],
          },
        ],
        faq: [
          {
            question: 'La chambre est-elle individuelle ?',
            answer:
              "Rarement. Les chambres sont le plus souvent partagées à deux ou trois. Certaines universités proposent des chambres individuelles en nombre limité, à un tarif plus élevé.",
          },
          {
            question: "Puis-je choisir un appartement dès la première année ?",
            answer:
              "C'est possible mais rarement conseillé. La première année, la résidence simplifie l'enregistrement migratoire et l'intégration. La colocation devient pertinente à partir de la deuxième année, quand vous maîtrisez la langue et la ville.",
          },
          {
            question: 'Le logement est-il réservé avant mon arrivée ?',
            answer:
              "Oui. Votre chambre est pré-réservée avant le départ, et un tuteur vous y conduit depuis l'aéroport — vous n'arrivez jamais sans solution de logement.",
          },
        ],
        keywords: [
          'logement étudiant Russie', 'dortoir universitaire russe', 'résidence universitaire Moscou prix',
          'colocation étudiant Russie', 'coût logement étudiant Russie', 'enregistrement migratoire Russie',
        ],
      },
      en: {
        title: 'Student Housing in Russia: Dorms, Shared Flats and Real Costs | RusStudy',
        description:
          'University dorm or shared flat: what is provided, what to bring, real costs by city and the rules of dormitory life.',
        h1: 'Housing in Russia during your studies',
        summary: 'Dorm or shared flat, what is provided, what to bring and what it really costs.',
        intro:
          'Housing is a student’s second biggest expense after tuition, and it is also the subject with the most myths around it. Here is what a place in a Russian university residence actually covers, and when a shared flat starts to make sense.',
        sections: [
          {
            heading: 'University dorm or shared flat',
            paragraphs: [
              'University housing is the default and by far the cheapest option: from €30 a month in regional cities to €90 a month in Moscow. A shared flat starts around €100 in the regions and €280 in Moscow.',
              'Beyond price, the residence has a decisive administrative advantage in year one: it handles your migration registration, a mandatory formality that is painful to manage alone before you speak Russian.',
            ],
          },
          {
            heading: 'What the residence provides',
            bullets: [
              'A room, most often shared with two or three students',
              'Basic furniture: bed, desk, chair, wardrobe',
              'Shared kitchen and bathrooms per floor or block',
              'Central heating included in the rate — not to be underestimated in winter',
              'Controlled access with security on site',
            ],
          },
          {
            heading: 'What to bring and what to buy locally',
            paragraphs: [
              'Bed linen, crockery and small equipment cost far less bought locally than the excess baggage fee to fly them over.',
              'Do bring your usual medication with a translated prescription, your original documents, and enough to cover the first two weeks before your bank account opens.',
            ],
          },
          {
            heading: 'House rules worth knowing',
            bullets: [
              'Entries and exits are logged, and outside visits follow set hours',
              'Any change of address must be declared: your migration registration is tied to your housing',
              'Residences apply strict rules on cooking appliances in rooms, for fire safety reasons',
              'A place is allocated for the academic year and renewed — it is not automatic',
            ],
          },
        ],
        faq: [
          {
            question: 'Is the room private?',
            answer:
              'Rarely. Rooms are usually shared between two or three students. Some universities offer a limited number of single rooms at a higher rate.',
          },
          {
            question: 'Can I take a flat in my first year?',
            answer:
              'Possible but rarely advisable. In year one, the residence simplifies migration registration and settling in. A shared flat makes sense from year two, once you know the language and the city.',
          },
          {
            question: 'Is housing booked before I arrive?',
            answer:
              'Yes. Your room is pre-booked before departure and a tutor takes you there from the airport — you never arrive without a housing solution.',
          },
        ],
        keywords: [
          'student housing Russia', 'Russian university dormitory', 'Moscow student residence price',
          'shared flat student Russia', 'cost of student housing Russia', 'migration registration Russia',
        ],
      },
      ar: {
        title: 'السكن الطلابي في روسيا: الإقامة الجامعية والسكن المشترك والتكاليف الحقيقية | RusStudy',
        description:
          'إقامة جامعية أو شقة مشتركة: ما هو متوفر، وما يجب إحضاره، والتكاليف الحقيقية حسب المدينة، وقواعد الحياة في الإقامة.',
        h1: 'السكن في روسيا أثناء الدراسة',
        summary: 'إقامة جامعية أم سكن مشترك، وما هو متوفر، وما يجب إحضاره، وكم يكلف فعلاً.',
        intro:
          'السكن ثاني أكبر نفقة للطالب بعد رسوم الدراسة، وهو أيضًا الموضوع الذي تكثر حوله الأفكار الخاطئة. إليك ما يشمله فعليًا مقعد في إقامة جامعية روسية، ومتى يصبح السكن المشترك مناسبًا.',
        sections: [
          {
            heading: 'إقامة جامعية أم شقة مشتركة',
            paragraphs: [
              'الإقامة الجامعية هي الخيار الافتراضي والأرخص بفارق كبير: من 30 € شهريًا في مدن الأقاليم إلى 90 € شهريًا في موسكو. أما الشقة المشتركة فتنطلق من حوالي 100 € في الأقاليم و280 € في موسكو.',
              'وإلى جانب السعر، للإقامة ميزة إدارية حاسمة في السنة الأولى: تتكفل بتسجيلك لدى مصالح الهجرة، وهو إجراء إجباري ومرهق إذا تولّيته وحدك قبل إتقان الروسية.',
            ],
          },
          {
            heading: 'ما توفره الإقامة',
            bullets: [
              'غرفة، مشتركة غالبًا بين طالبين أو ثلاثة',
              'الأثاث الأساسي: سرير ومكتب وكرسي وخزانة',
              'مطبخ ومرافق صحية مشتركة حسب الطابق أو الجناح',
              'تدفئة مركزية مشمولة في التعريفة، وهي نقطة لا يُستهان بها شتاءً',
              'دخول مراقَب مع حضور أمني',
            ],
          },
          {
            heading: 'ما يُحضَر وما يُشترى في عين المكان',
            paragraphs: [
              'أغطية السرير والأواني والتجهيزات الصغيرة تُشترى محليًا بأقل بكثير من كلفة وزن إضافي في الطائرة.',
              'في المقابل، أحضر أدويتك المعتادة مع وصفتها مترجمة، ووثائقك الأصلية، وما يكفيك أسبوعين قبل فتح حسابك البنكي.',
            ],
          },
          {
            heading: 'قواعد يجب معرفتها',
            bullets: [
              'الدخول والخروج مسجّلان، وزيارات الخارج محكومة بتوقيت',
              'كل تغيير عنوان يجب التصريح به: تسجيلك لدى الهجرة مرتبط بسكنك',
              'تطبق الإقامات قواعد صارمة على أجهزة الطهي داخل الغرف لأسباب تتعلق بالسلامة من الحرائق',
              'يُسند المقعد للسنة الجامعية ويُجدَّد، وهو ليس مكتسبًا تلقائيًا',
            ],
          },
        ],
        faq: [
          {
            question: 'هل الغرفة فردية؟',
            answer:
              'نادرًا. الغرف مشتركة غالبًا بين طالبين أو ثلاثة. بعض الجامعات تقترح غرفًا فردية بعدد محدود وبتعريفة أعلى.',
          },
          {
            question: 'هل يمكنني أخذ شقة منذ السنة الأولى؟',
            answer:
              'ممكن لكنه نادرًا ما يُنصح به. في السنة الأولى تبسّط الإقامة تسجيل الهجرة والاندماج. ويصبح السكن المشترك مناسبًا من السنة الثانية عند إتقان اللغة ومعرفة المدينة.',
          },
          {
            question: 'هل يُحجز السكن قبل وصولي؟',
            answer:
              'نعم. غرفتك محجوزة قبل السفر، ويقودك مرشد إليها من المطار — لا تصل أبدًا دون حل سكني.',
          },
        ],
        keywords: [
          'السكن الطلابي في روسيا', 'الإقامة الجامعية الروسية', 'سعر السكن الجامعي موسكو',
          'سكن مشترك للطلبة روسيا', 'تكلفة السكن الطلابي روسيا', 'التسجيل لدى الهجرة روسيا',
        ],
      },
      ru: {
        title: 'Студенческое жильё в России: общежитие, съём и реальные расходы | RusStudy',
        description:
          'Общежитие или съёмная квартира: что предоставляется, что взять с собой, реальные расходы по городам и правила проживания.',
        h1: 'Жильё в России во время учёбы',
        summary: 'Общежитие или съём, что предоставляется, что взять с собой и сколько это реально стоит.',
        intro:
          'Жильё — вторая по величине статья расходов студента после обучения, и вокруг неё больше всего мифов. Вот что реально включает место в российском студенческом общежитии и когда имеет смысл снимать квартиру.',
        sections: [
          {
            heading: 'Общежитие или съёмная квартира',
            paragraphs: [
              'Общежитие — вариант по умолчанию и самый дешёвый: от 30 € в месяц в региональных городах до 90 € в месяц в Москве. Доля в съёмной квартире начинается примерно от 100 € в регионах и 280 € в Москве.',
              'Помимо цены, у общежития есть решающее административное преимущество на первом курсе: оно берёт на себя миграционный учёт — обязательную формальность, которую тяжело пройти самому, не владея русским.',
            ],
          },
          {
            heading: 'Что предоставляет общежитие',
            bullets: [
              'Комната, чаще всего на двоих или троих',
              'Базовая мебель: кровать, стол, стул, шкаф',
              'Общие кухня и санузлы на этаж или блок',
              'Центральное отопление, включённое в тариф, — зимой это немаловажно',
              'Контролируемый вход и охрана',
            ],
          },
          {
            heading: 'Что везти, а что купить на месте',
            paragraphs: [
              'Постельное бельё, посуда и мелкая утварь на месте обойдутся заметно дешевле, чем доплата за перевес багажа.',
              'А вот привычные лекарства с переведённым рецептом, оригиналы документов и запас средств на первые две недели до открытия счёта возьмите с собой.',
            ],
          },
          {
            heading: 'Правила, которые стоит знать',
            bullets: [
              'Вход и выход фиксируются, посещения гостей ограничены по времени',
              'О любой смене адреса нужно заявлять: миграционный учёт привязан к жилью',
              'В общежитиях действуют строгие правила по нагревательным приборам в комнатах — из-за пожарной безопасности',
              'Место предоставляется на учебный год и продлевается, а не закрепляется автоматически',
            ],
          },
        ],
        faq: [
          {
            question: 'Комната одноместная?',
            answer:
              'Редко. Обычно комнаты на двоих или троих. В некоторых вузах есть ограниченное число одноместных комнат по более высокому тарифу.',
          },
          {
            question: 'Можно ли снять квартиру уже на первом курсе?',
            answer:
              'Можно, но редко целесообразно. На первом курсе общежитие упрощает миграционный учёт и адаптацию. Съём имеет смысл со второго курса, когда вы знаете язык и город.',
          },
          {
            question: 'Бронируется ли жильё до приезда?',
            answer:
              'Да. Комната бронируется до вылета, и куратор везёт вас туда из аэропорта — вы никогда не приезжаете без жилья.',
          },
        ],
        keywords: [
          'студенческое жильё в России', 'общежитие российского вуза', 'цена общежития Москва',
          'съём квартиры студентом Россия', 'стоимость жилья студента Россия', 'миграционный учёт',
        ],
      },
    },
  },
  {
    slug: 'sante-et-assurance',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: "Santé et assurance médicale de l'étudiant en Russie | RusStudy",
        description:
          "Assurance médicale obligatoire, visite médicale à l'arrivée, accès aux soins et limites de couverture : le guide santé de l'étudiant étranger en Russie.",
        h1: "Santé et assurance médicale pendant vos études",
        summary: "L'assurance obligatoire, la visite médicale d'arrivée, l'accès aux soins et ce qui n'est pas couvert.",
        intro:
          "L'assurance médicale n'est pas une option en Russie : sans elle, ni l'inscription définitive ni le titre de séjour ne peuvent être finalisés. Ce guide explique ce qu'elle couvre, ce qu'elle ne couvre pas, et comment se soigner concrètement une fois sur place.",
        sections: [
          {
            heading: "L'assurance médicale obligatoire",
            paragraphs: [
              "Elle est exigée pour l'inscription définitive et pour le séjour, et se renouvelle chaque année. Comptez environ 180 € par an, un montant à intégrer à votre budget au même titre que le logement.",
              "Elle est souscrite auprès d'un assureur agréé russe. Elle reste à votre charge même si vous êtes bénéficiaire du quota d'État : la bourse couvre les études, pas l'assurance.",
            ],
          },
          {
            heading: "La visite médicale à l'arrivée",
            paragraphs: [
              "Dans les premières semaines, une visite médicale est organisée par l'université. Elle complète les certificats fournis dans votre dossier de visa et conditionne votre inscription définitive.",
            ],
            bullets: [
              'Apportez le carnet de vaccination et les certificats médicaux de votre dossier, traduits',
              "Prévoyez l'ordonnance traduite de tout traitement que vous suivez au long cours",
              "Signalez toute allergie ou pathologie chronique dès la visite, pas au premier incident",
            ],
          },
          {
            heading: 'Se soigner sur place',
            bullets: [
              "Les universités disposent généralement d'un point médical sur le campus pour les consultations courantes",
              "Votre attestation d'assurance est le document à présenter : gardez-en une copie sur votre téléphone",
              'Les pharmacies sont nombreuses, mais les noms commerciaux des médicaments diffèrent — retenez la molécule, pas la marque',
              "En cas d'urgence, votre tuteur RusStudy reste joignable pour faire le lien avec les services de santé",
            ],
          },
          {
            heading: "Ce que l'assurance ne couvre pas",
            bullets: [
              'Les soins dentaires courants, dans la plupart des contrats de base',
              "Les lunettes et l'optique",
              'Le rapatriement sanitaire, sauf option souscrite séparément',
              'Les pathologies connues et déclarées avant la souscription, selon les contrats',
            ],
          },
        ],
        faq: [
          {
            question: "L'assurance médicale est-elle vraiment obligatoire ?",
            answer:
              "Oui. Sans attestation d'assurance valide, l'inscription définitive et les démarches de séjour ne peuvent pas être finalisées. Elle se renouvelle chaque année.",
          },
          {
            question: 'Combien coûte-t-elle ?',
            answer:
              "Comptez environ 180 € par an. C'est un poste à budgéter dès le départ, y compris pour les boursiers du quota d'État, qui ne le couvre pas.",
          },
          {
            question: 'Puis-je garder mon assurance tunisienne ?',
            answer:
              "Non, elle ne remplace pas l'assurance russe exigée pour le séjour. Une assurance voyage tunisienne peut compléter la couverture, mais pas s'y substituer.",
          },
        ],
        keywords: [
          'assurance médicale étudiant Russie', 'santé étudiant étranger Russie', 'visite médicale université russe',
          'coût assurance Russie étudiant', 'se soigner en Russie étudiant', 'assurance obligatoire visa Russie',
        ],
      },
      en: {
        title: 'Health and Medical Insurance for Students in Russia | RusStudy',
        description:
          'Mandatory medical insurance, the arrival medical check, access to care and coverage limits: the health guide for international students in Russia.',
        h1: 'Health and medical insurance during your studies',
        summary: 'Mandatory insurance, the arrival medical check, access to care and what is not covered.',
        intro:
          'Medical insurance is not optional in Russia: without it, neither final enrolment nor your residence permit can be completed. This guide explains what it covers, what it does not, and how to actually get care once you are there.',
        sections: [
          {
            heading: 'Mandatory medical insurance',
            paragraphs: [
              'It is required for final enrolment and for residence, and renews every year. Budget around €180 a year, alongside housing.',
              'It is taken out with an approved Russian insurer. You pay for it even as a state quota holder: the scholarship covers studies, not insurance.',
            ],
          },
          {
            heading: 'The medical check on arrival',
            paragraphs: [
              'In the first weeks, the university organises a medical check. It complements the certificates in your visa file and conditions your final enrolment.',
            ],
            bullets: [
              'Bring your vaccination record and the medical certificates from your file, translated',
              'Bring a translated prescription for any long-term treatment you follow',
              'Declare any allergy or chronic condition at the check, not at the first incident',
            ],
          },
          {
            heading: 'Getting care locally',
            bullets: [
              'Universities generally have a medical point on campus for routine consultations',
              'Your insurance certificate is the document to present: keep a copy on your phone',
              'Pharmacies are plentiful, but brand names differ — remember the molecule, not the brand',
              'In an emergency, your RusStudy tutor stays reachable to liaise with health services',
            ],
          },
          {
            heading: 'What insurance does not cover',
            bullets: [
              'Routine dental care, under most basic policies',
              'Glasses and optical care',
              'Medical repatriation, unless taken as a separate option',
              'Pre-existing conditions declared before subscription, depending on the policy',
            ],
          },
        ],
        faq: [
          {
            question: 'Is medical insurance really mandatory?',
            answer:
              'Yes. Without a valid insurance certificate, final enrolment and residence formalities cannot be completed. It renews every year.',
          },
          {
            question: 'How much does it cost?',
            answer:
              'Budget around €180 a year. It is a line to plan from the start, including for state quota holders, whose scholarship does not cover it.',
          },
          {
            question: 'Can I keep my Tunisian insurance?',
            answer:
              'No, it does not replace the Russian insurance required for residence. Tunisian travel insurance can complement the cover, but not substitute for it.',
          },
        ],
        keywords: [
          'student medical insurance Russia', 'international student health Russia', 'medical check Russian university',
          'insurance cost Russia student', 'healthcare in Russia student', 'mandatory insurance Russian visa',
        ],
      },
      ar: {
        title: 'الصحة والتأمين الطبي للطالب في روسيا | RusStudy',
        description:
          'التأمين الطبي الإجباري، والفحص الطبي عند الوصول، والحصول على العلاج، وحدود التغطية: دليل صحة الطالب الأجنبي في روسيا.',
        h1: 'الصحة والتأمين الطبي أثناء الدراسة',
        summary: 'التأمين الإجباري، والفحص الطبي عند الوصول، والحصول على العلاج، وما لا تتم تغطيته.',
        intro:
          'التأمين الطبي ليس اختياريًا في روسيا: بدونه لا يمكن استكمال الترسيم النهائي ولا بطاقة الإقامة. يشرح هذا الدليل ما يغطيه وما لا يغطيه، وكيف تتعالج فعليًا في عين المكان.',
        sections: [
          {
            heading: 'التأمين الطبي الإجباري',
            paragraphs: [
              'هو مطلوب للترسيم النهائي وللإقامة، ويُجدَّد كل سنة. احسب حوالي 180 € سنويًا، وهو مبلغ يُدرج في ميزانيتك مثل السكن تمامًا.',
              'يُكتتب لدى مؤمّن روسي معتمد، ويبقى على عاتقك حتى لو كنت من أصحاب حصة الدولة: المنحة تغطي الدراسة لا التأمين.',
            ],
          },
          {
            heading: 'الفحص الطبي عند الوصول',
            paragraphs: [
              'في الأسابيع الأولى تنظم الجامعة فحصًا طبيًا. وهو يكمل الشهادات المقدمة في ملف التأشيرة ويشترط ترسيمك النهائي.',
            ],
            bullets: [
              'أحضر دفتر التلقيح والشهادات الطبية من ملفك، مترجمة',
              'جهّز وصفة مترجمة لأي علاج طويل المدى تتابعه',
              'صرّح بأي حساسية أو مرض مزمن منذ الفحص لا عند أول حادث',
            ],
          },
          {
            heading: 'العلاج في عين المكان',
            bullets: [
              'تتوفر في الجامعات عمومًا نقطة طبية داخل الحرم للاستشارات العادية',
              'شهادة التأمين هي الوثيقة التي تُقدَّم: احتفظ بنسخة منها في هاتفك',
              'الصيدليات كثيرة لكن الأسماء التجارية للأدوية مختلفة — احفظ المادة الفعالة لا العلامة',
              'عند الطوارئ يبقى مرشد RusStudy متاحًا للتنسيق مع المصالح الصحية',
            ],
          },
          {
            heading: 'ما لا يغطيه التأمين',
            bullets: [
              'علاج الأسنان العادي في أغلب العقود الأساسية',
              'النظارات والبصريات',
              'الإجلاء الصحي إلا باكتتاب خيار منفصل',
              'الأمراض المعروفة والمصرَّح بها قبل الاكتتاب، حسب العقود',
            ],
          },
        ],
        faq: [
          {
            question: 'هل التأمين الطبي إجباري فعلاً؟',
            answer:
              'نعم. بدون شهادة تأمين سارية لا يمكن استكمال الترسيم النهائي وإجراءات الإقامة. ويُجدَّد كل سنة.',
          },
          {
            question: 'كم يكلف؟',
            answer:
              'احسب حوالي 180 € سنويًا. وهو بند يُدرج في الميزانية منذ البداية، حتى لأصحاب حصة الدولة التي لا تغطيه.',
          },
          {
            question: 'هل يمكنني الاحتفاظ بتأميني التونسي؟',
            answer:
              'لا، فهو لا يعوّض التأمين الروسي المطلوب للإقامة. تأمين سفر تونسي يمكن أن يكمل التغطية لا أن يحل محلها.',
          },
        ],
        keywords: [
          'التأمين الطبي للطلبة في روسيا', 'صحة الطالب الأجنبي روسيا', 'الفحص الطبي الجامعة الروسية',
          'كلفة التأمين في روسيا', 'العلاج في روسيا للطلبة', 'التأمين الإجباري تأشيرة روسيا',
        ],
      },
      ru: {
        title: 'Здоровье и медицинская страховка студента в России | RusStudy',
        description:
          'Обязательная медицинская страховка, медосмотр по приезде, доступ к помощи и границы покрытия: гид по здоровью для иностранного студента в России.',
        h1: 'Здоровье и медицинская страховка во время учёбы',
        summary: 'Обязательная страховка, медосмотр по приезде, доступ к помощи и что не покрывается.',
        intro:
          'Медицинская страховка в России не опция: без неё нельзя завершить ни окончательное зачисление, ни оформление пребывания. В этом гиде — что она покрывает, чего не покрывает и как реально лечиться на месте.',
        sections: [
          {
            heading: 'Обязательная медицинская страховка',
            paragraphs: [
              'Она нужна для окончательного зачисления и для пребывания, продлевается ежегодно. Закладывайте около 180 € в год — наравне с жильём.',
              'Оформляется у аккредитованного российского страховщика. Оплачивается вами даже при государственной квоте: стипендия покрывает учёбу, а не страховку.',
            ],
          },
          {
            heading: 'Медосмотр по приезде',
            paragraphs: [
              'В первые недели вуз организует медосмотр. Он дополняет справки из визового досье и является условием окончательного зачисления.',
            ],
            bullets: [
              'Возьмите прививочный сертификат и медицинские справки из досье, переведённые',
              'Подготовьте переведённый рецепт на любое длительное лечение',
              'Заявите об аллергии или хроническом заболевании на осмотре, а не при первом инциденте',
            ],
          },
          {
            heading: 'Лечение на месте',
            bullets: [
              'В вузах обычно есть медпункт на кампусе для обычных обращений',
              'Предъявляется страховой полис: держите копию в телефоне',
              'Аптек много, но торговые названия лекарств отличаются — запоминайте действующее вещество, а не бренд',
              'В экстренном случае куратор RusStudy остаётся на связи для взаимодействия со службами',
            ],
          },
          {
            heading: 'Что страховка не покрывает',
            bullets: [
              'Обычную стоматологию — в большинстве базовых полисов',
              'Очки и оптику',
              'Медицинскую репатриацию, если не оформлена отдельная опция',
              'Заранее заявленные хронические состояния — в зависимости от договора',
            ],
          },
        ],
        faq: [
          {
            question: 'Страховка действительно обязательна?',
            answer:
              'Да. Без действующего полиса нельзя завершить окончательное зачисление и оформление пребывания. Продлевается ежегодно.',
          },
          {
            question: 'Сколько она стоит?',
            answer:
              'Закладывайте около 180 € в год. Эту статью планируют с самого начала, в том числе обладатели квоты, чья стипендия её не покрывает.',
          },
          {
            question: 'Можно ли оставить тунисскую страховку?',
            answer:
              'Нет, она не заменяет российскую страховку, требуемую для пребывания. Тунисская туристическая страховка может дополнить покрытие, но не заменить его.',
          },
        ],
        keywords: [
          'медицинская страховка студента Россия', 'здоровье иностранного студента', 'медосмотр в российском вузе',
          'стоимость страховки в России', 'лечение в России студенту', 'обязательная страховка учебная виза',
        ],
      },
    },
  },
  {
    slug: 'vie-quotidienne',
    updatedAt: '2026-09-14',
    copy: {
      fr: {
        title: 'Vie quotidienne en Russie : banque, téléphone, transport et hiver | RusStudy',
        description:
          "Ouvrir un compte, obtenir une carte SIM, se déplacer, faire ses courses et affronter l'hiver : le guide pratique du quotidien d'un étudiant tunisien en Russie.",
        h1: 'La vie quotidienne au jour le jour',
        summary: 'Banque, carte SIM, transport, courses et hiver : tout ce qui se règle pendant les premières semaines.',
        intro:
          "Ce ne sont pas les études qui déstabilisent le plus les nouveaux arrivants, ce sont les gestes ordinaires : payer, se déplacer, se nourrir, s'habiller correctement en janvier. Voici ce qui se règle pendant les premières semaines, et dans quel ordre.",
        sections: [
          {
            heading: 'Banque, carte et argent',
            paragraphs: [
              "L'ouverture d'un compte bancaire russe est l'une des premières démarches, faite avec votre tuteur. Elle vous donne une carte locale acceptée partout, indispensable car les cartes étrangères ne fonctionnent pas toujours.",
              "Prévoyez de quoi tenir les deux premières semaines en attendant l'activation du compte. Le paiement sans contact est la norme, y compris pour de très petits montants.",
            ],
          },
          {
            heading: 'Téléphone et internet',
            bullets: [
              "Une carte SIM locale s'obtient rapidement avec votre passeport, à un tarif très inférieur à celui du roaming",
              "Les forfaits data sont généreux et bon marché comparés aux standards tunisiens",
              'La résidence universitaire fournit généralement un accès internet, de qualité variable selon les bâtiments',
            ],
          },
          {
            heading: 'Se déplacer',
            paragraphs: [
              "Les transports urbains russes sont denses, ponctuels et peu chers, et les étudiants bénéficient de tarifs réduits sur présentation de leur carte d'étudiant.",
              "Dans les grandes villes, le métro reste le moyen le plus rapide. Repérez le nom de votre station en cyrillique dès les premiers jours : c'est le premier mot de russe réellement utile.",
            ],
          },
          {
            heading: 'Courses et alimentation',
            bullets: [
              "Les supermarchés couvrent l'essentiel à un coût inférieur à celui de la Tunisie sur les produits de base",
              'Cuisiner en résidence réduit fortement le budget par rapport aux repas pris à l’extérieur',
              "Les produits halal sont disponibles dans les grandes villes, et particulièrement accessibles à Kazan, capitale d'une république à majorité musulmane",
              "Comptez entre 140 et 260 € par mois de vie courante selon la ville, repas et transport compris",
            ],
          },
          {
            heading: "L'hiver russe, concrètement",
            paragraphs: [
              "C'est l'appréhension numéro un des étudiants tunisiens, et elle se dissipe vite. Les bâtiments, les transports et les universités sont chauffés efficacement : le froid se subit dehors, pas dedans.",
              "N'achetez pas votre équipement d'hiver en Tunisie. Un manteau adapté, des bottes et des sous-couches thermiques s'achètent sur place, mieux conçus et souvent moins chers.",
            ],
          },
        ],
        faq: [
          {
            question: 'Puis-je utiliser ma carte bancaire tunisienne en Russie ?',
            answer:
              "Pas de façon fiable. L'ouverture d'un compte russe et l'obtention d'une carte locale font partie des premières démarches, accompagnées par votre tuteur dès l'arrivée.",
          },
          {
            question: 'Trouve-t-on de la nourriture halal ?',
            answer:
              "Oui dans les grandes villes, avec des commerces spécialisés. Kazan est particulièrement bien pourvue, étant la capitale du Tatarstan, république à majorité musulmane.",
          },
          {
            question: 'Comment supporter le froid quand on vient de Tunisie ?',
            answer:
              "En s'équipant sur place plutôt qu'avant le départ, et en retenant que tous les espaces intérieurs sont fortement chauffés. La majorité des étudiants s'y habitue en quelques semaines.",
          },
        ],
        keywords: [
          'vie quotidienne étudiant Russie', 'compte bancaire étudiant Russie', 'carte SIM Russie étudiant',
          'transport étudiant Russie', 'nourriture halal Russie', 'hiver russe étudiant tunisien',
        ],
      },
      en: {
        title: 'Everyday Life in Russia: Banking, Phone, Transport and Winter | RusStudy',
        description:
          'Opening an account, getting a SIM card, getting around, food shopping and facing winter: the practical daily guide for Tunisian students in Russia.',
        h1: 'Everyday life, day to day',
        summary: 'Banking, SIM card, transport, groceries and winter: everything settled in the first weeks.',
        intro:
          'It is not the studies that unsettle newcomers most, it is the ordinary things: paying, getting around, eating, dressing properly in January. Here is what gets settled in the first weeks, and in what order.',
        sections: [
          {
            heading: 'Banking, cards and money',
            paragraphs: [
              'Opening a Russian bank account is one of the first steps, done with your tutor. It gives you a local card accepted everywhere — essential, since foreign cards do not always work.',
              'Bring enough to cover the first two weeks while the account is activated. Contactless payment is the norm, even for very small amounts.',
            ],
          },
          {
            heading: 'Phone and internet',
            bullets: [
              'A local SIM card is quick to obtain with your passport, at a fraction of roaming rates',
              'Data plans are generous and cheap compared with Tunisian standards',
              'University housing generally provides internet access, of varying quality by building',
            ],
          },
          {
            heading: 'Getting around',
            paragraphs: [
              'Russian urban transport is dense, punctual and inexpensive, and students get reduced fares on presentation of their student card.',
              'In large cities the metro is the fastest option. Learn your station name in Cyrillic in the first days: it is the first genuinely useful Russian word.',
            ],
          },
          {
            heading: 'Groceries and food',
            bullets: [
              'Supermarkets cover the essentials at a lower cost than Tunisia on staple goods',
              'Cooking in the residence cuts the budget sharply compared with eating out',
              'Halal products are available in large cities, and especially accessible in Kazan, capital of a majority-Muslim republic',
              'Budget between €140 and €260 a month for daily living depending on the city, meals and transport included',
            ],
          },
          {
            heading: 'The Russian winter, concretely',
            paragraphs: [
              'This is the number one worry of Tunisian students, and it fades quickly. Buildings, transport and universities are heated effectively: the cold is outdoors, not indoors.',
              'Do not buy your winter kit in Tunisia. A proper coat, boots and thermal base layers are bought locally, better designed and often cheaper.',
            ],
          },
        ],
        faq: [
          {
            question: 'Can I use my Tunisian bank card in Russia?',
            answer:
              'Not reliably. Opening a Russian account and getting a local card are among the first steps, supported by your tutor on arrival.',
          },
          {
            question: 'Is halal food available?',
            answer:
              'Yes in large cities, with specialist shops. Kazan is particularly well served, being the capital of Tatarstan, a majority-Muslim republic.',
          },
          {
            question: 'How do you cope with the cold coming from Tunisia?',
            answer:
              'By buying your kit locally rather than before departure, and knowing that every indoor space is strongly heated. Most students adapt within a few weeks.',
          },
        ],
        keywords: [
          'daily life student Russia', 'student bank account Russia', 'SIM card Russia student',
          'student transport Russia', 'halal food Russia', 'Russian winter Tunisian student',
        ],
      },
      ar: {
        title: 'الحياة اليومية في روسيا: البنك والهاتف والنقل والشتاء | RusStudy',
        description:
          'فتح حساب، والحصول على شريحة هاتف، والتنقل، والتسوق، ومواجهة الشتاء: الدليل العملي ليوميات الطالب التونسي في روسيا.',
        h1: 'الحياة اليومية يومًا بيوم',
        summary: 'البنك والشريحة والنقل والتسوق والشتاء: كل ما يُحسم في الأسابيع الأولى.',
        intro:
          'ليست الدراسة ما يربك الوافدين الجدد أكثر، بل الأمور العادية: الدفع، والتنقل، والأكل، واللباس المناسب في جانفي. إليك ما يُحسم خلال الأسابيع الأولى، وبأي ترتيب.',
        sections: [
          {
            heading: 'البنك والبطاقة والمال',
            paragraphs: [
              'فتح حساب بنكي روسي من أول الإجراءات، ويتم مع مرشدك. ويمنحك بطاقة محلية مقبولة في كل مكان، وهي ضرورية لأن البطاقات الأجنبية لا تعمل دائمًا.',
              'جهّز ما يكفيك أسبوعين في انتظار تفعيل الحساب. الدفع بدون تلامس هو القاعدة، حتى للمبالغ الصغيرة جدًا.',
            ],
          },
          {
            heading: 'الهاتف والإنترنت',
            bullets: [
              'تُستخرج شريحة محلية بسرعة بجواز سفرك، وبتعريفة أقل بكثير من التجوال',
              'باقات الإنترنت سخية ورخيصة مقارنة بالمعايير التونسية',
              'توفر الإقامة الجامعية عمومًا اتصالاً بالإنترنت، بجودة تتفاوت حسب المباني',
            ],
          },
          {
            heading: 'التنقل',
            paragraphs: [
              'النقل الحضري الروسي كثيف ومنضبط وزهيد، ويستفيد الطلبة من تعريفات مخفّضة بتقديم بطاقة الطالب.',
              'في المدن الكبرى يبقى المترو الأسرع. تعرّف على اسم محطتك بالحرف السيريلي منذ الأيام الأولى: إنها أول كلمة روسية مفيدة فعلاً.',
            ],
          },
          {
            heading: 'التسوق والأكل',
            bullets: [
              'تغطي المتاجر الكبرى الأساسيات بكلفة أقل من تونس في المواد الأساسية',
              'الطبخ في الإقامة يخفض الميزانية بقوة مقارنة بالأكل في الخارج',
              'المنتجات الحلال متوفرة في المدن الكبرى، ومتاحة بشكل خاص في قازان، عاصمة جمهورية ذات أغلبية مسلمة',
              'احسب بين 140 و260 € شهريًا للمعيشة حسب المدينة، بما في ذلك الأكل والنقل',
            ],
          },
          {
            heading: 'الشتاء الروسي بشكل ملموس',
            paragraphs: [
              'هذا هو الهاجس الأول للطلبة التونسيين، وهو يتبدد سريعًا. المباني والنقل والجامعات مدفّأة بفعالية: البرد يُعاش في الخارج لا في الداخل.',
              'لا تشترِ تجهيزات الشتاء من تونس. معطف مناسب وأحذية وطبقات حرارية تُشترى في عين المكان، بتصميم أفضل وبسعر أقل غالبًا.',
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكنني استعمال بطاقتي البنكية التونسية في روسيا؟',
            answer:
              'ليس بشكل موثوق. فتح حساب روسي والحصول على بطاقة محلية من أول الإجراءات، بمرافقة مرشدك منذ الوصول.',
          },
          {
            question: 'هل يتوفر الأكل الحلال؟',
            answer:
              'نعم في المدن الكبرى مع محلات مختصة. وقازان مزوّدة جيدًا بشكل خاص كونها عاصمة تتارستان، وهي جمهورية ذات أغلبية مسلمة.',
          },
          {
            question: 'كيف يُحتمل البرد قادمًا من تونس؟',
            answer:
              'بالتجهّز في عين المكان لا قبل السفر، وبمعرفة أن كل الفضاءات الداخلية مدفّأة بقوة. أغلب الطلبة يتأقلمون في بضعة أسابيع.',
          },
        ],
        keywords: [
          'الحياة اليومية للطالب في روسيا', 'حساب بنكي للطلبة روسيا', 'شريحة هاتف روسيا',
          'النقل الطلابي روسيا', 'أكل حلال في روسيا', 'الشتاء الروسي للطالب التونسي',
        ],
      },
      ru: {
        title: 'Повседневная жизнь в России: банк, связь, транспорт и зима | RusStudy',
        description:
          'Открыть счёт, получить SIM-карту, передвигаться, ходить за покупками и пережить зиму: практический гид по быту тунисского студента в России.',
        h1: 'Повседневная жизнь изо дня в день',
        summary: 'Банк, SIM-карта, транспорт, покупки и зима: всё, что решается в первые недели.',
        intro:
          'Новичков выбивает из колеи не учёба, а обычные вещи: оплатить, доехать, поесть, одеться по погоде в январе. Вот что решается в первые недели и в каком порядке.',
        sections: [
          {
            heading: 'Банк, карта и деньги',
            paragraphs: [
              'Открытие российского банковского счёта — один из первых шагов, вместе с куратором. Он даёт местную карту, принимаемую везде: иностранные карты работают не всегда.',
              'Возьмите запас на первые две недели, пока счёт активируется. Бесконтактная оплата — норма даже для мелких сумм.',
            ],
          },
          {
            heading: 'Связь и интернет',
            bullets: [
              'Местная SIM-карта оформляется быстро по паспорту, намного дешевле роуминга',
              'Пакеты интернета щедрые и дешёвые по тунисским меркам',
              'В общежитии обычно есть интернет, качество зависит от корпуса',
            ],
          },
          {
            heading: 'Передвижение',
            paragraphs: [
              'Городской транспорт в России плотный, пунктуальный и недорогой, а студентам полагаются льготные тарифы по студенческому билету.',
              'В крупных городах метро — самый быстрый вариант. Выучите название своей станции кириллицей в первые дни: это первое по-настоящему полезное русское слово.',
            ],
          },
          {
            heading: 'Покупки и питание',
            bullets: [
              'Супермаркеты закрывают базовые нужды дешевле, чем в Тунисе, по основным продуктам',
              'Готовка в общежитии резко снижает бюджет по сравнению с питанием вне дома',
              'Халяльные продукты есть в крупных городах и особенно доступны в Казани — столице республики с мусульманским большинством',
              'Закладывайте от 140 до 260 € в месяц на быт в зависимости от города, с питанием и транспортом',
            ],
          },
          {
            heading: 'Русская зима без мифов',
            paragraphs: [
              'Это главный страх тунисских студентов, и он быстро проходит. Здания, транспорт и вузы отапливаются эффективно: холод на улице, а не внутри.',
              'Не покупайте зимнюю экипировку в Тунисе. Нормальное пальто, ботинки и термобельё покупаются на месте — они лучше продуманы и часто дешевле.',
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли пользоваться тунисской картой в России?',
            answer:
              'Не надёжно. Открытие российского счёта и получение местной карты входят в первые шаги, с поддержкой куратора по приезде.',
          },
          {
            question: 'Есть ли халяльная еда?',
            answer:
              'Да, в крупных городах есть специализированные магазины. Особенно хорошо с этим в Казани — столице Татарстана, республики с мусульманским большинством.',
          },
          {
            question: 'Как переносить холод, приехав из Туниса?',
            answer:
              'Покупать экипировку на месте, а не до отъезда, и помнить, что все помещения сильно отапливаются. Большинство студентов привыкает за несколько недель.',
          },
        ],
        keywords: [
          'повседневная жизнь студента в России', 'банковский счёт студента', 'SIM-карта в России студенту',
          'студенческий транспорт Россия', 'халяльная еда в России', 'русская зима для студента',
        ],
      },
    },
  },
  ...PRACTICAL_GUIDES,
];

const INDEX: Record<Lang, GuidesIndexCopy> = {
  fr: {
    title: 'Guides pratiques pour étudier en Russie | RusStudy',
    description:
      "Documents et légalisation, logement, santé et assurance, vie quotidienne : les guides pratiques RusStudy pour préparer et vivre vos études en Russie.",
    intro:
      "Les réponses concrètes aux questions qui se posent avant le départ et pendant les premières semaines sur place. Chaque guide traite un sujet de bout en bout, sans renvoyer à un formulaire de contact.",
    readMore: 'Lire le guide →',
  },
  en: {
    title: 'Practical Guides for Studying in Russia | RusStudy',
    description:
      'Documents and legalisation, housing, health and insurance, everyday life: RusStudy practical guides to prepare for and live your studies in Russia.',
    intro:
      'Concrete answers to the questions that come up before departure and during the first weeks on site. Each guide covers one subject end to end, without redirecting you to a contact form.',
    readMore: 'Read the guide →',
  },
  ar: {
    title: 'أدلة عملية للدراسة في روسيا | RusStudy',
    description:
      'الوثائق والتصديق، والسكن، والصحة والتأمين، والحياة اليومية: أدلة RusStudy العملية لتحضير دراستك في روسيا وعيشها.',
    intro:
      'إجابات ملموسة عن الأسئلة التي تُطرح قبل السفر وخلال الأسابيع الأولى في عين المكان. يعالج كل دليل موضوعًا من البداية إلى النهاية دون إحالتك إلى استمارة اتصال.',
    readMore: 'اقرأ الدليل ←',
  },
  ru: {
    title: 'Практические гиды по учёбе в России | RusStudy',
    description:
      'Документы и легализация, жильё, здоровье и страховка, повседневная жизнь: практические гиды RusStudy для подготовки и жизни во время учёбы в России.',
    intro:
      'Конкретные ответы на вопросы, возникающие до отъезда и в первые недели на месте. Каждый гид разбирает одну тему целиком, не отсылая вас к форме обратной связи.',
    readMore: 'Читать гид →',
  },
};

export function buildGuidesIndexCopy(lang: Lang): GuidesIndexCopy {
  return INDEX[lang];
}

export function buildPracticalGuideCopy(lang: Lang, index: number): GuideCopy {
  return GUIDES[index].copy[lang];
}

export function guideUpdatedAt(index: number): string {
  return GUIDES[index].updatedAt;
}

export const GUIDES_COUNT = GUIDES.length;
