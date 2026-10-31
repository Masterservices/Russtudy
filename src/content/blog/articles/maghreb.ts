import type { BlogArticleEntry } from '../copy';

/*
 * Ouverture du blog au Maghreb, septembre 2026.
 *
 * Le blog s'adressait exclusivement à la Tunisie alors que des demandes
 * arrivent du Maroc et d'Algérie : deux calendriers administratifs distincts,
 * aucune page pour les traiter.
 *
 * Les sujets déjà couverts ne sont pas repris : bourses, session de février,
 * équivalence du diplôme et année préparatoire ont leurs propres articles, la
 * vie sur place son cluster sous /guides, et les filières leurs pages
 * profondes sous /filieres.
 *
 * Aucun montant nouveau n'est avancé : les chiffres restent sur
 * /cout-des-etudes, et tout ce qui relève d'une administration étrangère
 * renvoie à l'autorité compétente plutôt que d'énoncer une règle invérifiable.
 */
export const MAGHREB_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'etudier-en-russie-depuis-le-maroc',
    publishedAt: '2026-09-14',
    copy: {
      fr: {
        title: 'Étudier en Russie depuis le Maroc : démarches, documents et calendrier | RusStudy',
        description:
          "Candidats marocains : parcours d'admission en Russie, documents à légaliser, invitation officielle, visa étudiant et calendrier à respecter. Accompagnement RusStudy.",
        h1: 'Étudier en Russie depuis le Maroc : démarches, documents et calendrier',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Le parcours d'admission est le même pour tous ; les formalités, elles, dépendent du pays de départ. Voici ce qui change concrètement quand on candidate depuis le Maroc.",
        intro:
          "Les universités russes accueillent des étudiants de toute l'Afrique du Nord, et les candidatures marocaines progressent chaque année. Le parcours académique ne diffère pas de celui d'un candidat tunisien ou algérien : mêmes filières, mêmes durées, mêmes conditions d'admission. Ce qui change, ce sont les formalités locales — légalisation des documents, services consulaires, calendrier — et c'est précisément là que se perdent les dossiers mal préparés.",
        sections: [
          {
            heading: 'Un parcours identique, des formalités locales différentes',
            blocks: [
              {
                type: 'p',
                text: "Quel que soit le pays de départ, la séquence est la même : choix de l'université et de la filière, dépôt du dossier, admission, invitation officielle délivrée par l'établissement, demande de visa étudiant, puis arrivée sur place. Les filières de santé mènent au specialitet en cinq ou six ans, l'ingénierie et l'informatique en quatre ou cinq ans.",
              },
              {
                type: 'p',
                text: "La différence tient à la manière dont vos documents marocains doivent être préparés pour être acceptés en Russie, et aux services consulaires dont vous dépendez. Ces deux points se vérifient au début du projet, jamais à la fin.",
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'Le dossier de candidature',
            blocks: [
              {
                type: 'p',
                text: 'Les pièces demandées par les universités sont sensiblement les mêmes partout :',
              },
              {
                type: 'ul',
                items: [
                  'le baccalauréat et le relevé de notes ;',
                  'le passeport en cours de validité, avec une durée suffisante ;',
                  'les traductions officielles exigées par l’établissement ;',
                  'le certificat médical demandé par l’université ;',
                  'les photos d’identité au format requis.',
                ],
              },
              {
                type: 'p',
                text: "Les exigences de traduction et de légalisation dépendent des conventions en vigueur entre les deux pays et de l'université d'accueil. Elles se confirment auprès des services consulaires compétents : c'est la seule source à jour, et elle prime sur toute information de seconde main.",
              },
            ],
          },
          {
            heading: "L'invitation officielle et le visa étudiant",
            blocks: [
              {
                type: 'p',
                text: "L'invitation officielle n'est pas une lettre de courtoisie : c'est le document délivré par l'université admise, sans lequel aucune demande de visa étudiant n'est recevable. Son émission prend du temps, et ce délai est la principale cause de départs repoussés d'une session.",
              },
              {
                type: 'p',
                text: "La demande de visa se dépose ensuite auprès des services consulaires russes compétents pour le Maroc. Les pièces exigées et les délais évoluent : ils se vérifient au moment de la demande, pas plusieurs mois à l'avance.",
              },
            ],
          },
          {
            heading: 'Le calendrier à respecter',
            blocks: [
              {
                type: 'p',
                text: "C'est le point sur lequel les candidats se trompent le plus. Trois délais s'enchaînent, et chacun dépend du précédent :",
              },
              {
                type: 'ul',
                items: [
                  'la préparation et la légalisation des documents ;',
                  "l'instruction du dossier par l'université puis l'émission de l'invitation ;",
                  'le traitement de la demande de visa.',
                ],
              },
              {
                type: 'strong',
                text: "Un dossier déposé tard n'est pas un dossier refusé : c'est un départ décalé à la session suivante. Commencer tôt est le seul vrai levier dont dispose le candidat.",
              },
            ],
          },
          {
            heading: 'Budget et vie sur place',
            blocks: [
              {
                type: 'p',
                text: "Les frais de scolarité sont payés directement à l'université et varient selon la filière et la ville. À cela s'ajoutent le logement universitaire, l'assurance médicale et les dépenses courantes, nettement plus faibles dans les villes de région qu'à Moscou. Le détail poste par poste est publié sur notre page consacrée au coût des études.",
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: "Si votre projet part du Maroc, écrivez-nous : nous examinons gratuitement votre dossier, vous indiquons les formalités qui vous concernent réellement et vous accompagnons jusqu'à l'arrivée sur le campus.",
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Le parcours est-il différent pour un candidat marocain ?',
            answer:
              "Le parcours académique est identique : mêmes filières, mêmes durées, mêmes conditions d'admission. Ce sont les formalités locales — légalisation des documents et services consulaires — qui diffèrent selon le pays de départ.",
          },
          {
            question: 'Faut-il parler russe pour candidater depuis le Maroc ?',
            answer:
              "Non. Les universités proposent une année préparatoire en langue russe aux étudiants étrangers, et certaines offrent des groupes en anglais selon la filière.",
          },
          {
            question: 'Quand faut-il commencer les démarches ?',
            answer:
              "Le plus tôt possible. Trois délais s'enchaînent — documents, invitation, visa — et chacun dépend du précédent. Un dossier tardif se solde généralement par un report à la session suivante.",
          },
        ],
        keywords: [
          'étudier en Russie depuis le Maroc',
          'étudiants marocains Russie',
          'visa étudiant Russie Maroc',
          'inscription université russe Maroc',
          'RusStudy',
        ],
      },
      en: {
        title: 'Studying in Russia from Morocco: Steps, Documents and Timeline | RusStudy',
        description:
          'Moroccan applicants: admission process in Russia, documents to legalise, official invitation, student visa and the timeline to respect. RusStudy support.',
        h1: 'Studying in Russia from Morocco: Steps, Documents and Timeline',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'The admission path is the same for everyone; the formalities depend on the country you apply from. Here is what actually changes when applying from Morocco.',
        intro:
          'Russian universities welcome students from across North Africa, and Moroccan applications grow every year. The academic path does not differ from that of a Tunisian or Algerian applicant: same fields, same durations, same admission requirements. What changes are the local formalities — document legalisation, consular services, timeline — and that is exactly where poorly prepared files are lost.',
        sections: [
          {
            heading: 'Same path, different local formalities',
            blocks: [
              {
                type: 'p',
                text: 'Whatever the country of departure, the sequence is the same: choosing the university and the field, submitting the file, admission, official invitation issued by the institution, student visa application, then arrival. Health programmes lead to the specialitet in five or six years, engineering and computer science in four or five.',
              },
              {
                type: 'p',
                text: 'The difference lies in how your Moroccan documents must be prepared to be accepted in Russia, and in the consular services you depend on. Both points are checked at the start of the project, never at the end.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'The application file',
            blocks: [
              { type: 'p', text: 'The documents universities ask for are broadly the same everywhere:' },
              {
                type: 'ul',
                items: [
                  'the baccalaureate and the transcript;',
                  'a valid passport, with sufficient remaining validity;',
                  'the official translations required by the institution;',
                  'the medical certificate requested by the university;',
                  'identity photographs in the required format.',
                ],
              },
              {
                type: 'p',
                text: 'Translation and legalisation requirements depend on the conventions in force between the two countries and on the host university. They are confirmed with the competent consular services: that is the only up-to-date source, and it overrides any second-hand information.',
              },
            ],
          },
          {
            heading: 'The official invitation and the student visa',
            blocks: [
              {
                type: 'p',
                text: 'The official invitation is not a courtesy letter: it is the document issued by the admitting university, without which no student visa application is admissible. Issuing it takes time, and that delay is the main cause of departures pushed to the next intake.',
              },
              {
                type: 'p',
                text: 'The visa application is then filed with the Russian consular services competent for Morocco. Required documents and processing times change: they are checked at the time of application, not several months in advance.',
              },
            ],
          },
          {
            heading: 'The timeline to respect',
            blocks: [
              {
                type: 'p',
                text: 'This is where applicants get it wrong most often. Three delays follow one another, and each depends on the previous one:',
              },
              {
                type: 'ul',
                items: [
                  'preparing and legalising the documents;',
                  'the university reviewing the file, then issuing the invitation;',
                  'processing the visa application.',
                ],
              },
              {
                type: 'strong',
                text: 'A file submitted late is not a rejected file: it is a departure postponed to the next intake. Starting early is the only real lever an applicant has.',
              },
            ],
          },
          {
            heading: 'Budget and life on campus',
            blocks: [
              {
                type: 'p',
                text: 'Tuition is paid directly to the university and varies by field and city. To that are added university housing, medical insurance and daily expenses, markedly lower in regional cities than in Moscow. The item-by-item breakdown is published on our cost of studies page.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: 'If your project starts from Morocco, write to us: we review your file free of charge, tell you which formalities actually apply to you, and support you until you reach the campus.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Is the process different for a Moroccan applicant?',
            answer:
              'The academic path is identical: same fields, same durations, same admission requirements. It is the local formalities — document legalisation and consular services — that differ by country of departure.',
          },
          {
            question: 'Do you need Russian to apply from Morocco?',
            answer:
              'No. Universities offer a preparatory year in Russian for international students, and some offer English-taught groups depending on the field.',
          },
          {
            question: 'When should the process start?',
            answer:
              'As early as possible. Three delays follow one another — documents, invitation, visa — and each depends on the previous one. A late file usually results in postponement to the next intake.',
          },
        ],
        keywords: [
          'study in Russia from Morocco',
          'Moroccan students Russia',
          'Russia student visa Morocco',
          'Russian university application Morocco',
          'RusStudy',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا انطلاقًا من المغرب: الإجراءات والوثائق والرزنامة | RusStudy',
        description:
          'للمترشحين المغاربة: مسار القبول في روسيا، الوثائق الواجب تصديقها، الدعوة الرسمية، تأشيرة الطالب والرزنامة الواجب احترامها. مرافقة RusStudy.',
        h1: 'الدراسة في روسيا انطلاقًا من المغرب: الإجراءات والوثائق والرزنامة',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt:
          'مسار القبول واحد للجميع، أما الإجراءات فتتعلق ببلد الانطلاق. إليك ما يتغيّر فعليًا عند الترشح من المغرب.',
        intro:
          'تستقبل الجامعات الروسية طلبة من كامل شمال إفريقيا، وترشحات المغاربة في تزايد سنة بعد أخرى. المسار الأكاديمي لا يختلف عن مسار مترشح تونسي أو جزائري: نفس التخصصات ونفس المدد ونفس شروط القبول. ما يتغيّر هو الإجراءات المحلية — تصديق الوثائق والمصالح القنصلية والرزنامة — وهناك تحديدًا تضيع الملفات غير المهيّأة.',
        sections: [
          {
            heading: 'مسار واحد وإجراءات محلية مختلفة',
            blocks: [
              {
                type: 'p',
                text: 'مهما كان بلد الانطلاق، التسلسل واحد: اختيار الجامعة والتخصص، إيداع الملف، القبول، الدعوة الرسمية التي تصدرها المؤسسة، طلب تأشيرة الطالب، ثم الوصول. تؤدي تخصصات الصحة إلى شهادة الأخصائي في خمس أو ست سنوات، والهندسة والمعلوماتية في أربع أو خمس.',
              },
              {
                type: 'p',
                text: 'الفرق يكمن في كيفية تهيئة وثائقك المغربية لتُقبل في روسيا، وفي المصالح القنصلية التي تتبع لها. يُتحقق من هاتين النقطتين في بداية المشروع لا في نهايته.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'ملف الترشح',
            blocks: [
              { type: 'p', text: 'الوثائق التي تطلبها الجامعات متشابهة إلى حد كبير:' },
              {
                type: 'ul',
                items: [
                  'شهادة البكالوريا وكشف النقاط؛',
                  'جواز سفر ساري المفعول بمدة كافية؛',
                  'الترجمات الرسمية التي تطلبها المؤسسة؛',
                  'الشهادة الطبية المطلوبة من الجامعة؛',
                  'صور شخصية بالمقاس المطلوب.',
                ],
              },
              {
                type: 'p',
                text: 'تتوقف متطلبات الترجمة والتصديق على الاتفاقيات السارية بين البلدين وعلى الجامعة المستقبِلة. تُؤكَّد لدى المصالح القنصلية المختصة: وهي المصدر الوحيد المحدَّث، ويعلو على أي معلومة غير مباشرة.',
              },
            ],
          },
          {
            heading: 'الدعوة الرسمية وتأشيرة الطالب',
            blocks: [
              {
                type: 'p',
                text: 'الدعوة الرسمية ليست رسالة مجاملة، بل الوثيقة التي تصدرها الجامعة بعد القبول، ولا يُقبل أي طلب تأشيرة طالب بدونها. إصدارها يستغرق وقتًا، وهذا الأجل هو السبب الأول في تأجيل السفر إلى الدورة الموالية.',
              },
              {
                type: 'p',
                text: 'يُودَع طلب التأشيرة بعد ذلك لدى المصالح القنصلية الروسية المختصة بالمغرب. الوثائق المطلوبة والآجال تتغيّر: يُتحقق منها وقت الطلب لا قبل أشهر.',
              },
            ],
          },
          {
            heading: 'الرزنامة الواجب احترامها',
            blocks: [
              { type: 'p', text: 'هنا يقع أكثر الأخطاء. ثلاثة آجال متتابعة، كل واحد منها يتوقف على سابقه:' },
              {
                type: 'ul',
                items: [
                  'تهيئة الوثائق وتصديقها؛',
                  'دراسة الملف من طرف الجامعة ثم إصدار الدعوة؛',
                  'معالجة طلب التأشيرة.',
                ],
              },
              {
                type: 'strong',
                text: 'الملف المتأخر ليس ملفًا مرفوضًا، بل سفرًا مؤجَّلًا إلى الدورة الموالية. البدء مبكرًا هو الوسيلة الحقيقية الوحيدة بيد المترشح.',
              },
            ],
          },
          {
            heading: 'الميزانية والحياة في المكان',
            blocks: [
              {
                type: 'p',
                text: 'تُدفع رسوم الدراسة مباشرة إلى الجامعة وتختلف حسب التخصص والمدينة. يُضاف إليها السكن الجامعي والتأمين الصحي والمصاريف اليومية، وهي أقل بوضوح في مدن الأقاليم منها في موسكو. التفصيل بندًا بندًا منشور في صفحتنا المخصصة لتكلفة الدراسة.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: 'إذا كان مشروعك ينطلق من المغرب، راسلنا: ندرس ملفك مجانًا ونوضّح لك الإجراءات التي تعنيك فعلًا ونرافقك إلى غاية الوصول إلى الحرم الجامعي.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يختلف المسار بالنسبة لمترشح مغربي؟',
            answer:
              'المسار الأكاديمي واحد: نفس التخصصات والمدد وشروط القبول. ما يختلف هو الإجراءات المحلية — تصديق الوثائق والمصالح القنصلية — حسب بلد الانطلاق.',
          },
          {
            question: 'هل يجب إتقان الروسية للترشح من المغرب؟',
            answer:
              'لا. تقترح الجامعات سنة تحضيرية في اللغة الروسية للطلبة الأجانب، وبعضها يوفّر مجموعات بالإنجليزية حسب التخصص.',
          },
          {
            question: 'متى ينبغي بدء الإجراءات؟',
            answer:
              'في أقرب وقت ممكن. ثلاثة آجال متتابعة — الوثائق والدعوة والتأشيرة — كل واحد يتوقف على سابقه. الملف المتأخر ينتهي عادةً بتأجيل إلى الدورة الموالية.',
          },
        ],
        keywords: [
          'الدراسة في روسيا من المغرب',
          'الطلبة المغاربة روسيا',
          'تأشيرة الطالب روسيا المغرب',
          'التسجيل في جامعة روسية من المغرب',
          'RusStudy',
        ],
      },
      ru: {
        title: 'Учёба в России из Марокко: этапы, документы и сроки | RusStudy',
        description:
          'Абитуриентам из Марокко: процедура поступления в России, легализация документов, официальное приглашение, студенческая виза и сроки. Сопровождение RusStudy.',
        h1: 'Учёба в России из Марокко: этапы, документы и сроки',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt:
          'Путь поступления одинаков для всех; формальности зависят от страны подачи. Что реально меняется при подаче из Марокко.',
        intro:
          'Российские вузы принимают студентов со всей Северной Африки, и число заявок из Марокко растёт каждый год. Академический путь не отличается от пути тунисского или алжирского абитуриента: те же направления, та же длительность, те же условия приёма. Отличаются местные формальности — легализация документов, консульские службы, сроки — и именно на них теряются плохо подготовленные досье.',
        sections: [
          {
            heading: 'Один путь, разные местные формальности',
            blocks: [
              {
                type: 'p',
                text: 'Независимо от страны выезда последовательность одна: выбор вуза и направления, подача документов, зачисление, официальное приглашение от вуза, подача на студенческую визу, затем приезд. Медицинские направления ведут к специалитету за пять-шесть лет, инженерия и информатика — за четыре-пять.',
              },
              {
                type: 'p',
                text: 'Разница в том, как марокканские документы должны быть подготовлены, чтобы их приняли в России, и в том, каким консульским службам вы подчиняетесь. Оба пункта проверяются в начале проекта, а не в конце.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'Комплект документов',
            blocks: [
              { type: 'p', text: 'Вузы запрашивают в целом одно и то же:' },
              {
                type: 'ul',
                items: [
                  'аттестат и приложение с оценками;',
                  'действующий паспорт с достаточным сроком действия;',
                  'официальные переводы, требуемые вузом;',
                  'медицинскую справку по требованию вуза;',
                  'фотографии установленного формата.',
                ],
              },
              {
                type: 'p',
                text: 'Требования к переводу и легализации зависят от действующих между странами соглашений и от принимающего вуза. Они подтверждаются в компетентных консульских службах: это единственный актуальный источник, и он важнее любых сведений из вторых рук.',
              },
            ],
          },
          {
            heading: 'Официальное приглашение и студенческая виза',
            blocks: [
              {
                type: 'p',
                text: 'Официальное приглашение — не письмо вежливости, а документ принимающего вуза, без которого заявление на студенческую визу не принимается. Его оформление занимает время, и именно этот срок чаще всего переносит отъезд на следующий набор.',
              },
              {
                type: 'p',
                text: 'Заявление на визу подаётся в российские консульские службы, компетентные по Марокко. Перечень документов и сроки меняются: их уточняют в момент подачи, а не за несколько месяцев.',
              },
            ],
          },
          {
            heading: 'Сроки, которые нужно соблюсти',
            blocks: [
              {
                type: 'p',
                text: 'Здесь абитуриенты ошибаются чаще всего. Три срока следуют друг за другом, и каждый зависит от предыдущего:',
              },
              {
                type: 'ul',
                items: [
                  'подготовка и легализация документов;',
                  'рассмотрение досье вузом и выпуск приглашения;',
                  'обработка визового заявления.',
                ],
              },
              {
                type: 'strong',
                text: 'Поданное поздно досье — не отказ, а перенос отъезда на следующий набор. Ранний старт — единственный реальный рычаг абитуриента.',
              },
            ],
          },
          {
            heading: 'Бюджет и жизнь на месте',
            blocks: [
              {
                type: 'p',
                text: 'Обучение оплачивается напрямую вузу и зависит от направления и города. К этому добавляются общежитие, медицинская страховка и повседневные расходы, заметно более низкие в региональных городах, чем в Москве. Постатейная разбивка опубликована на нашей странице о стоимости обучения.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: 'Если ваш проект начинается из Марокко, напишите нам: мы бесплатно рассмотрим досье, укажем, какие формальности касаются именно вас, и будем сопровождать вплоть до приезда в кампус.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Отличается ли процедура для абитуриента из Марокко?',
            answer:
              'Академический путь идентичен: те же направления, сроки и условия приёма. Отличаются местные формальности — легализация документов и консульские службы — в зависимости от страны подачи.',
          },
          {
            question: 'Нужен ли русский язык для подачи из Марокко?',
            answer:
              'Нет. Вузы предлагают иностранным студентам подготовительный год русского языка, а некоторые — англоязычные группы в зависимости от направления.',
          },
          {
            question: 'Когда начинать оформление?',
            answer:
              'Как можно раньше. Три срока следуют друг за другом — документы, приглашение, виза — и каждый зависит от предыдущего. Позднее досье обычно означает перенос на следующий набор.',
          },
        ],
        keywords: [
          'учёба в России из Марокко',
          'марокканские студенты Россия',
          'студенческая виза Россия Марокко',
          'поступление в российский вуз из Марокко',
          'RusStudy',
        ],
      },
    },
  },
  {
    slug: 'etudier-en-russie-depuis-l-algerie',
    publishedAt: '2026-09-14',
    copy: {
      fr: {
        title: "Étudier en Russie depuis l'Algérie : démarches, documents et calendrier | RusStudy",
        description:
          "Candidats algériens : parcours d'admission en Russie, documents à légaliser, invitation officielle, visa étudiant et calendrier. Accompagnement RusStudy.",
        h1: "Étudier en Russie depuis l'Algérie : démarches, documents et calendrier",
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Les universités russes appliquent les mêmes conditions à tous les candidats étrangers. Ce qui change depuis l'Algérie, ce sont les formalités locales et le calendrier.",
        intro:
          "La Russie figure depuis longtemps parmi les destinations d'études des bacheliers algériens, en médecine comme en ingénierie. Le parcours académique est identique à celui de n'importe quel candidat étranger : mêmes filières, mêmes durées, mêmes conditions d'admission. Les difficultés que nous voyons le plus souvent ne viennent jamais du niveau scolaire, mais de la préparation administrative et du calendrier.",
        sections: [
          {
            heading: 'Ce qui est identique, ce qui change',
            blocks: [
              {
                type: 'p',
                text: "La séquence ne varie pas selon le pays de départ : choix de l'université et de la filière, dépôt du dossier, admission, invitation officielle délivrée par l'établissement, demande de visa étudiant, puis arrivée. Les filières de santé mènent au diplôme de spécialiste en cinq ou six ans, l'ingénierie et l'informatique en quatre ou cinq ans.",
              },
              {
                type: 'p',
                text: "Ce qui dépend de votre pays, c'est la manière dont vos documents algériens doivent être traduits et légalisés pour être acceptés en Russie, et les services consulaires dont vous relevez. Ces deux points se vérifient au début du projet.",
              },
            ],
          },
          {
            heading: 'Les pièces du dossier',
            blocks: [
              { type: 'p', text: 'Les universités demandent partout sensiblement les mêmes documents :' },
              {
                type: 'ul',
                items: [
                  'le baccalauréat et le relevé de notes ;',
                  'le passeport en cours de validité, avec une durée restante suffisante ;',
                  'les traductions officielles exigées par l’établissement ;',
                  'le certificat médical demandé par l’université ;',
                  'les photos d’identité au format requis.',
                ],
              },
              {
                type: 'p',
                text: "Les exigences de traduction et de légalisation dépendent des conventions en vigueur entre les deux pays. Elles se confirment auprès des services consulaires compétents, seule source à jour sur ce point.",
              },
            ],
          },
          {
            heading: "L'invitation officielle, pièce maîtresse",
            blocks: [
              {
                type: 'p',
                text: "Aucune demande de visa étudiant n'est recevable sans l'invitation officielle délivrée par l'université qui vous a admis. Son émission demande du temps, et c'est le délai que les candidats sous-estiment le plus souvent.",
              },
              {
                type: 'strong',
                text: "Un dossier déposé tard n'est pas refusé : il part à la session suivante. C'est la différence entre une rentrée cette année et une rentrée dans un an.",
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'La langue : préparatoire ou cursus en anglais',
            blocks: [
              {
                type: 'p',
                text: "Ne pas parler russe n'empêche pas de candidater. Les universités proposent une année préparatoire destinée aux étudiants étrangers, et certaines ouvrent des groupes en anglais selon la filière. Cette disponibilité oriente réellement le choix de l'établissement : elle se vérifie avant de déposer le dossier.",
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Budget et suite du parcours',
            blocks: [
              {
                type: 'p',
                text: "Les frais de scolarité se paient directement à l'université et varient selon la filière et la ville ; s'y ajoutent le logement universitaire, l'assurance et les dépenses courantes, sensiblement plus faibles en région qu'à Moscou. Le détail est publié sur notre page consacrée au coût des études.",
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: "Si votre projet part d'Algérie, écrivez-nous : nous examinons gratuitement votre dossier, vous indiquons les formalités qui vous concernent et vous accompagnons jusqu'à l'arrivée sur le campus.",
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Les conditions d’admission sont-elles différentes pour un candidat algérien ?',
            answer:
              "Non. Les universités russes appliquent les mêmes conditions à tous les candidats étrangers. Seules les formalités locales — traduction, légalisation, services consulaires — varient selon le pays de départ.",
          },
          {
            question: 'Faut-il parler russe avant de partir ?',
            answer:
              "Non. Une année préparatoire en langue russe est proposée aux étudiants étrangers, et certaines universités ouvrent des groupes en anglais selon la filière.",
          },
          {
            question: 'Combien de temps prennent les démarches ?',
            answer:
              "Trois délais s'enchaînent : préparation des documents, instruction du dossier et émission de l'invitation, puis traitement du visa. Chacun dépend du précédent, ce qui rend le démarrage précoce déterminant.",
          },
        ],
        keywords: [
          "étudier en Russie depuis l'Algérie",
          'étudiants algériens Russie',
          'visa étudiant Russie Algérie',
          'inscription université russe Algérie',
          'RusStudy',
        ],
      },
      en: {
        title: 'Studying in Russia from Algeria: Steps, Documents and Timeline | RusStudy',
        description:
          'Algerian applicants: admission process in Russia, documents to legalise, official invitation, student visa and timeline. RusStudy support.',
        h1: 'Studying in Russia from Algeria: Steps, Documents and Timeline',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'Russian universities apply the same requirements to every international applicant. What changes from Algeria are the local formalities and the timeline.',
        intro:
          'Russia has long been among the study destinations chosen by Algerian school-leavers, in medicine as well as engineering. The academic path is identical to that of any international applicant: same fields, same durations, same admission requirements. The difficulties we see most often never come from academic level, but from administrative preparation and timing.',
        sections: [
          {
            heading: 'What is identical, what changes',
            blocks: [
              {
                type: 'p',
                text: 'The sequence does not vary with the country of departure: choosing the university and field, submitting the file, admission, official invitation issued by the institution, student visa application, then arrival. Health programmes lead to the specialist degree in five or six years, engineering and computer science in four or five.',
              },
              {
                type: 'p',
                text: 'What depends on your country is how your Algerian documents must be translated and legalised to be accepted in Russia, and which consular services you fall under. Both are checked at the start of the project.',
              },
            ],
          },
          {
            heading: 'The documents',
            blocks: [
              { type: 'p', text: 'Universities ask for broadly the same documents everywhere:' },
              {
                type: 'ul',
                items: [
                  'the baccalaureate and the transcript;',
                  'a valid passport with sufficient remaining validity;',
                  'the official translations required by the institution;',
                  'the medical certificate requested by the university;',
                  'identity photographs in the required format.',
                ],
              },
              {
                type: 'p',
                text: 'Translation and legalisation requirements depend on the conventions in force between the two countries. They are confirmed with the competent consular services, the only up-to-date source on this point.',
              },
            ],
          },
          {
            heading: 'The official invitation is the key document',
            blocks: [
              {
                type: 'p',
                text: 'No student visa application is admissible without the official invitation issued by the admitting university. Issuing it takes time, and this is the delay applicants underestimate most.',
              },
              {
                type: 'strong',
                text: 'A file submitted late is not rejected: it moves to the next intake. That is the difference between starting this year and starting in a year.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'Language: preparatory year or English-taught programme',
            blocks: [
              {
                type: 'p',
                text: 'Not speaking Russian does not prevent you from applying. Universities offer a preparatory year for international students, and some open English-taught groups depending on the field. That availability genuinely drives the choice of institution: check it before submitting.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Budget and next steps',
            blocks: [
              {
                type: 'p',
                text: 'Tuition is paid directly to the university and varies by field and city; university housing, insurance and daily expenses are added, and are markedly lower in regional cities than in Moscow. The breakdown is published on our cost of studies page.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: 'If your project starts from Algeria, write to us: we review your file free of charge, tell you which formalities apply to you, and support you until you reach the campus.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Are admission requirements different for an Algerian applicant?',
            answer:
              'No. Russian universities apply the same requirements to all international applicants. Only local formalities — translation, legalisation, consular services — vary by country of departure.',
          },
          {
            question: 'Do you need Russian before leaving?',
            answer:
              'No. A preparatory year in Russian is offered to international students, and some universities open English-taught groups depending on the field.',
          },
          {
            question: 'How long does the process take?',
            answer:
              'Three delays follow one another: preparing documents, the university reviewing the file and issuing the invitation, then visa processing. Each depends on the previous one, which makes an early start decisive.',
          },
        ],
        keywords: [
          'study in Russia from Algeria',
          'Algerian students Russia',
          'Russia student visa Algeria',
          'Russian university application Algeria',
          'RusStudy',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا انطلاقًا من الجزائر: الإجراءات والوثائق والرزنامة | RusStudy',
        description:
          'للمترشحين الجزائريين: مسار القبول في روسيا، الوثائق الواجب تصديقها، الدعوة الرسمية، تأشيرة الطالب والرزنامة. مرافقة RusStudy.',
        h1: 'الدراسة في روسيا انطلاقًا من الجزائر: الإجراءات والوثائق والرزنامة',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt:
          'تطبّق الجامعات الروسية الشروط نفسها على كل المترشحين الأجانب. ما يتغيّر انطلاقًا من الجزائر هو الإجراءات المحلية والرزنامة.',
        intro:
          'تُعدّ روسيا منذ زمن من وجهات الدراسة التي يختارها حاملو البكالوريا الجزائريون، في الطب كما في الهندسة. المسار الأكاديمي مطابق لمسار أي مترشح أجنبي: نفس التخصصات والمدد وشروط القبول. الصعوبات التي نلاحظها أكثر من غيرها لا تأتي أبدًا من المستوى الدراسي، بل من التحضير الإداري والرزنامة.',
        sections: [
          {
            heading: 'ما هو مطابق وما الذي يتغيّر',
            blocks: [
              {
                type: 'p',
                text: 'التسلسل لا يتغيّر حسب بلد الانطلاق: اختيار الجامعة والتخصص، إيداع الملف، القبول، الدعوة الرسمية من المؤسسة، طلب تأشيرة الطالب، ثم الوصول. تؤدي تخصصات الصحة إلى شهادة الأخصائي في خمس أو ست سنوات، والهندسة والمعلوماتية في أربع أو خمس.',
              },
              {
                type: 'p',
                text: 'ما يتوقف على بلدك هو كيفية ترجمة وثائقك الجزائرية وتصديقها لتُقبل في روسيا، والمصالح القنصلية التي تتبع لها. يُتحقق من الأمرين في بداية المشروع.',
              },
            ],
          },
          {
            heading: 'وثائق الملف',
            blocks: [
              { type: 'p', text: 'تطلب الجامعات في كل مكان وثائق متشابهة إلى حد بعيد:' },
              {
                type: 'ul',
                items: [
                  'شهادة البكالوريا وكشف النقاط؛',
                  'جواز سفر ساري المفعول بمدة متبقية كافية؛',
                  'الترجمات الرسمية التي تطلبها المؤسسة؛',
                  'الشهادة الطبية المطلوبة من الجامعة؛',
                  'صور شخصية بالمقاس المطلوب.',
                ],
              },
              {
                type: 'p',
                text: 'تتوقف متطلبات الترجمة والتصديق على الاتفاقيات السارية بين البلدين. تُؤكَّد لدى المصالح القنصلية المختصة، وهي المصدر الوحيد المحدَّث في هذا الشأن.',
              },
            ],
          },
          {
            heading: 'الدعوة الرسمية هي الوثيقة المحورية',
            blocks: [
              {
                type: 'p',
                text: 'لا يُقبل أي طلب تأشيرة طالب دون الدعوة الرسمية الصادرة عن الجامعة التي قبلتك. إصدارها يتطلب وقتًا، وهو الأجل الذي يستهين به المترشحون أكثر من غيره.',
              },
              {
                type: 'strong',
                text: 'الملف المودَع متأخرًا ليس مرفوضًا، بل يُحال إلى الدورة الموالية. هذا هو الفرق بين الالتحاق هذه السنة والالتحاق بعد سنة.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'اللغة: سنة تحضيرية أو برنامج بالإنجليزية',
            blocks: [
              {
                type: 'p',
                text: 'عدم إتقان الروسية لا يمنع الترشح. توفّر الجامعات سنة تحضيرية للطلبة الأجانب، ويفتح بعضها مجموعات بالإنجليزية حسب التخصص. هذا التوفّر يوجّه اختيار المؤسسة فعليًا: يُتحقق منه قبل إيداع الملف.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'الميزانية وما بعدها',
            blocks: [
              {
                type: 'p',
                text: 'تُدفع رسوم الدراسة مباشرة إلى الجامعة وتختلف حسب التخصص والمدينة، ويُضاف إليها السكن الجامعي والتأمين والمصاريف اليومية، وهي أقل بوضوح في الأقاليم منها في موسكو. التفصيل منشور في صفحتنا المخصصة لتكلفة الدراسة.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: 'إذا كان مشروعك ينطلق من الجزائر، راسلنا: ندرس ملفك مجانًا ونوضّح لك الإجراءات التي تعنيك ونرافقك إلى غاية الوصول إلى الحرم الجامعي.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تختلف شروط القبول بالنسبة لمترشح جزائري؟',
            answer:
              'لا. تطبّق الجامعات الروسية الشروط نفسها على جميع المترشحين الأجانب. تختلف فقط الإجراءات المحلية — الترجمة والتصديق والمصالح القنصلية — حسب بلد الانطلاق.',
          },
          {
            question: 'هل يجب إتقان الروسية قبل السفر؟',
            answer:
              'لا. تُقترح سنة تحضيرية في اللغة الروسية على الطلبة الأجانب، وتفتح بعض الجامعات مجموعات بالإنجليزية حسب التخصص.',
          },
          {
            question: 'كم تستغرق الإجراءات؟',
            answer:
              'ثلاثة آجال متتابعة: تحضير الوثائق، ودراسة الملف وإصدار الدعوة، ثم معالجة التأشيرة. كل واحد يتوقف على سابقه، ما يجعل الانطلاق المبكر حاسمًا.',
          },
        ],
        keywords: [
          'الدراسة في روسيا من الجزائر',
          'الطلبة الجزائريون روسيا',
          'تأشيرة الطالب روسيا الجزائر',
          'التسجيل في جامعة روسية من الجزائر',
          'RusStudy',
        ],
      },
      ru: {
        title: 'Учёба в России из Алжира: этапы, документы и сроки | RusStudy',
        description:
          'Абитуриентам из Алжира: процедура поступления в России, легализация документов, официальное приглашение, студенческая виза и сроки. Сопровождение RusStudy.',
        h1: 'Учёба в России из Алжира: этапы, документы и сроки',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt:
          'Российские вузы предъявляют одинаковые требования ко всем иностранным абитуриентам. Из Алжира меняются лишь местные формальности и сроки.',
        intro:
          'Россия давно входит в число направлений, которые выбирают алжирские выпускники школ, как в медицине, так и в инженерии. Академический путь идентичен пути любого иностранного абитуриента: те же направления, сроки и условия приёма. Трудности, которые мы видим чаще всего, никогда не связаны с уровнем подготовки — они связаны с оформлением документов и со сроками.',
        sections: [
          {
            heading: 'Что одинаково, а что меняется',
            blocks: [
              {
                type: 'p',
                text: 'Последовательность не зависит от страны выезда: выбор вуза и направления, подача документов, зачисление, официальное приглашение от вуза, подача на студенческую визу, затем приезд. Медицинские направления ведут к диплому специалиста за пять-шесть лет, инженерия и информатика — за четыре-пять.',
              },
              {
                type: 'p',
                text: 'От страны зависит то, как алжирские документы должны быть переведены и легализованы для приёма в России, и то, каким консульским службам вы подчиняетесь. Оба пункта проверяются в начале проекта.',
              },
            ],
          },
          {
            heading: 'Документы',
            blocks: [
              { type: 'p', text: 'Вузы запрашивают в целом одно и то же:' },
              {
                type: 'ul',
                items: [
                  'аттестат и приложение с оценками;',
                  'действующий паспорт с достаточным сроком действия;',
                  'официальные переводы, требуемые вузом;',
                  'медицинскую справку по требованию вуза;',
                  'фотографии установленного формата.',
                ],
              },
              {
                type: 'p',
                text: 'Требования к переводу и легализации зависят от действующих между странами соглашений. Их подтверждают в компетентных консульских службах — единственном актуальном источнике.',
              },
            ],
          },
          {
            heading: 'Официальное приглашение — ключевой документ',
            blocks: [
              {
                type: 'p',
                text: 'Заявление на студенческую визу не принимается без официального приглашения принимающего вуза. Его оформление требует времени, и именно этот срок абитуриенты недооценивают чаще всего.',
              },
              {
                type: 'strong',
                text: 'Поданное поздно досье не отклоняют — его переносят на следующий набор. Это разница между поступлением в этом году и через год.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
          {
            heading: 'Язык: подготовительный год или программа на английском',
            blocks: [
              {
                type: 'p',
                text: 'Незнание русского не мешает подать документы. Вузы предлагают подготовительный год для иностранных студентов, а некоторые открывают англоязычные группы в зависимости от направления. Это реально влияет на выбор вуза: проверяйте до подачи.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Бюджет и дальнейшие шаги',
            blocks: [
              {
                type: 'p',
                text: 'Обучение оплачивается напрямую вузу и зависит от направления и города; добавляются общежитие, страховка и повседневные расходы, заметно более низкие в регионах, чем в Москве. Разбивка опубликована на нашей странице о стоимости обучения.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
              {
                type: 'p',
                text: 'Если ваш проект начинается из Алжира, напишите нам: мы бесплатно рассмотрим досье, укажем применимые формальности и будем сопровождать до приезда в кампус.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Отличаются ли условия приёма для абитуриента из Алжира?',
            answer:
              'Нет. Российские вузы предъявляют одинаковые требования ко всем иностранным абитуриентам. Различаются лишь местные формальности — перевод, легализация, консульские службы.',
          },
          {
            question: 'Нужен ли русский язык до отъезда?',
            answer:
              'Нет. Иностранным студентам предлагается подготовительный год русского языка, а некоторые вузы открывают англоязычные группы в зависимости от направления.',
          },
          {
            question: 'Сколько времени занимает оформление?',
            answer:
              'Три срока следуют друг за другом: подготовка документов, рассмотрение досье и выпуск приглашения, затем обработка визы. Каждый зависит от предыдущего, поэтому ранний старт решает многое.',
          },
        ],
        keywords: [
          'учёба в России из Алжира',
          'алжирские студенты Россия',
          'студенческая виза Россия Алжир',
          'поступление в российский вуз из Алжира',
          'RusStudy',
        ],
      },
    },
  },
];
