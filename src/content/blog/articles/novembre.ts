import type { BlogArticleEntry } from '../copy';

/*
 * Trois articles de novembre, calés sur l'intention « où et quoi étudier ? » :
 * le choix entre Moscou et une ville de région, la vérification du statut
 * d'une université, et l'ouverture vers une filière hors de nos cinq
 * spécialités historiques (psychologie).
 *
 * Sourcing : aucun classement, aucun chiffre d'accréditation et aucune liste
 * d'établissements n'est affirmé ici. Le texte explique les mécanismes de
 * vérification et renvoie vers les registres officiels et les services
 * d'admission, qui sont les seules sources opposables.
 */
export const NOVEMBRE_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'moscou-ou-province-etudier-en-russie',
    publishedAt: '2026-11-09',
    copy: {
      fr: {
        title: 'Moscou ou une ville de région : où étudier en Russie ? | RusStudy',
        description:
          "Moscou, Saint-Pétersbourg, Kazan ou une ville plus petite : comment arbitrer entre coût de la vie, qualité d'encadrement, communauté étudiante et isolement linguistique. Les critères qui comptent vraiment, et ceux qui comptent moins qu'on le croit.",
        h1: 'Moscou ou une ville de région : où étudier en Russie ?',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          "La capitale coûte plus cher, mais ce n'est pas le seul paramètre. Voici les six critères qui devraient guider le choix de la ville, et la hiérarchie qu'on leur donne rarement.",
        intro:
          "Presque tous les dossiers que nous recevons commencent par « Moscou ». C'est compréhensible : c'est la ville que l'on connaît. Mais le choix de la ville détermine votre budget mensuel pendant cinq ou six ans, votre vitesse d'apprentissage du russe, et la facilité avec laquelle vous rentrerez chez vous pendant les vacances. Cela mérite mieux qu'un réflexe.",
        sections: [
          {
            heading: 'Le coût de la vie : le seul écart vraiment mesurable',
            blocks: [
              {
                type: 'p',
                text: "C'est le critère sur lequel la différence est la plus franche et la plus facile à anticiper. Le logement, les transports et la restauration coûtent sensiblement plus cher dans la capitale que dans une ville universitaire de région, pour un niveau de confort comparable.",
              },
              {
                type: 'p',
                text: "Attention toutefois à ne pas comparer n'importe quoi : un logement universitaire à Moscou n'est pas au prix d'un appartement privé à Moscou. Comparez toujours à mode d'hébergement équivalent, et demandez à chaque université la disponibilité réelle d'une place en résidence avant de budgéter.",
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
          {
            heading: 'Les frais de scolarité ne suivent pas forcément la géographie',
            blocks: [
              {
                type: 'p',
                text: "On suppose souvent que les universités de région sont systématiquement moins chères. Ce n'est pas une règle : les frais de scolarité dépendent de l'établissement, de la filière et de la langue d'enseignement, pas uniquement de la ville.",
              },
              {
                type: 'p',
                text: "Une filière médicale dans un établissement réputé de région peut coûter autant qu'un cursus d'économie dans une université moscovite moins sélective. Le seul moyen de savoir est de comparer les grilles tarifaires officielles, université par université et filière par filière, pour l'année visée.",
              },
            ],
          },
          {
            heading: "L'apprentissage du russe : l'argument qui renverse le raisonnement",
            blocks: [
              {
                type: 'p',
                text: "C'est le point le plus contre-intuitif. Dans une grande ville cosmopolite, il est possible de vivre des mois dans une bulle francophone ou arabophone, entre colocataires du même pays. Dans une ville de région, cette bulle n'existe pas : vous parlez russe au marché, au guichet, chez le médecin.",
              },
              {
                type: 'p',
                text: "Pour un étudiant qui vise la médecine ou l'ingénierie en russe, c'est un avantage académique direct : les cours deviennent compréhensibles plus vite. Pour un étudiant inscrit dans un cursus en anglais, l'arbitrage est différent.",
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'Le trajet et le retour au pays',
            blocks: [
              {
                type: 'p',
                text: "Les grandes métropoles concentrent les liaisons aériennes internationales. Depuis une ville de région, un retour au pays implique souvent un trajet interne — train ou vol domestique — avant la correspondance internationale.",
              },
              {
                type: 'ul',
                items: [
                  "Combien de temps faut-il pour rejoindre l'aéroport international le plus proche ?",
                  'Ce trajet interne est-il praticable en hiver, et à quel coût ?',
                  'Combien de retours par an envisagez-vous réellement ?',
                ],
              },
              {
                type: 'p',
                text: "Un étudiant qui rentre deux fois par an doit intégrer ce surcoût dans son budget annuel, pas le découvrir en décembre.",
              },
            ],
          },
          {
            heading: 'La communauté étudiante : un amortisseur, pas une finalité',
            blocks: [
              {
                type: 'p',
                text: "La présence d'une communauté maghrébine déjà installée facilite réellement les premières semaines : logement, démarches, orientation dans la ville. C'est un avantage, et nous ne le minimisons pas.",
              },
              {
                type: 'p',
                text: "Mais c'est un amortisseur de début de parcours, pas un critère de choix d'université. Une communauté nombreuse dans un établissement dont la filière ne correspond pas à votre projet ne vous servira à rien en troisième année.",
              },
            ],
          },
          {
            heading: 'Comment nous conseillons de hiérarchiser',
            blocks: [
              {
                type: 'p',
                text: "Dans l'ordre, et pas l'inverse :",
              },
              {
                type: 'ul',
                items: [
                  "1. La filière : l'établissement propose-t-il réellement, et de façon vérifiée, le cursus que vous visez ?",
                  "2. La langue d'enseignement effective de ce cursus, et l'existence d'une année préparatoire si nécessaire.",
                  '3. Le logement : une place en résidence est-elle disponible, à quel prix, et sous quelles conditions ?',
                  '4. Le budget total annuel, scolarité et vie courante additionnées.',
                  "5. Le trajet et la faisabilité des retours.",
                  '6. La communauté et le cadre de vie.',
                ],
              },
              {
                type: 'strong',
                text: "Choisir une ville avant d'avoir vérifié qu'elle abrite votre filière, c'est le meilleur moyen de refaire tout son dossier trois mois plus tard.",
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Les universités de région sont-elles moins reconnues que celles de Moscou ?',
            answer:
              "La reconnaissance d'un établissement dépend de son statut officiel, pas de sa ville. Certaines universités de région sont anciennes et solidement installées dans leur discipline. Vérifiez le statut de chaque établissement dans les registres officiels russes plutôt que de vous fier à la géographie.",
          },
          {
            question: 'Vit-on moins bien dans une ville de région ?',
            answer:
              "Le confort dépend du logement et du budget, pas de la taille de la ville. Un même budget mensuel achète souvent un meilleur niveau de vie hors de la capitale. En revanche l'offre culturelle et les liaisons internationales sont plus limitées.",
          },
          {
            question: 'Est-il plus facile de trouver un logement universitaire en région ?',
            answer:
              "Cela se vérifie établissement par établissement, et non par ville : la disponibilité des places en résidence dépend de la capacité propre de chaque université. Demandez-le par écrit au service d'admission avant de vous engager.",
          },
          {
            question: 'Peut-on changer de ville en cours de cursus ?',
            answer:
              "Un transfert entre établissements est une procédure lourde, qui dépend de l'accord des deux universités et de la compatibilité des programmes. Il vaut mieux ne pas compter dessus et choisir correctement dès le départ.",
          },
        ],
        keywords: [
          'étudier à moscou ou en région russie',
          'quelle ville étudier en russie',
          'coût de la vie étudiant moscou',
          'université russe province',
          'choisir sa ville en russie',
          'villes universitaires russie étudiants étrangers',
        ],
      },
      en: {
        title: 'Moscow or a regional city: where to study in Russia? | RusStudy',
        description:
          'Moscow, Saint Petersburg, Kazan or a smaller city: how to weigh cost of living, teaching environment, student community and linguistic isolation. The criteria that really matter, and those that matter less than you think.',
        h1: 'Moscow or a regional city: where to study in Russia?',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'The capital costs more, but that is not the only variable. Here are the six criteria that should drive the choice of city, and the ranking they are rarely given.',
        intro:
          'Almost every file we receive starts with “Moscow”. That is understandable: it is the city people know. But the choice of city determines your monthly budget for five or six years, how fast you learn Russian, and how easily you get home for the holidays. It deserves more than a reflex.',
        sections: [
          {
            heading: 'Cost of living: the one genuinely measurable gap',
            blocks: [
              {
                type: 'p',
                text: 'This is where the difference is clearest and easiest to anticipate. Housing, transport and food cost noticeably more in the capital than in a regional university city, for a comparable level of comfort.',
              },
              {
                type: 'p',
                text: 'Be careful what you compare, though: a university residence in Moscow is not priced like a private flat in Moscow. Always compare equivalent housing types, and ask each university about the real availability of a residence place before budgeting.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
          {
            heading: 'Tuition does not necessarily follow geography',
            blocks: [
              {
                type: 'p',
                text: 'It is often assumed that regional universities are systematically cheaper. That is not a rule: tuition depends on the institution, the field and the language of instruction, not only on the city.',
              },
              {
                type: 'p',
                text: 'A medical programme at a well-established regional institution can cost as much as an economics programme at a less selective Moscow university. The only way to know is to compare official fee schedules, institution by institution and field by field, for the year concerned.',
              },
            ],
          },
          {
            heading: 'Learning Russian: the argument that reverses the reasoning',
            blocks: [
              {
                type: 'p',
                text: 'This is the counter-intuitive point. In a large cosmopolitan city it is possible to live for months inside a French-speaking or Arabic-speaking bubble, among flatmates from your own country. In a regional city that bubble does not exist: you speak Russian at the market, at the counter, at the doctor’s.',
              },
              {
                type: 'p',
                text: 'For a student heading into medicine or engineering taught in Russian, that is a direct academic advantage: lectures become comprehensible sooner. For a student enrolled in an English-taught programme, the trade-off is different.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'The journey and going home',
            blocks: [
              {
                type: 'p',
                text: 'Large metropolitan areas concentrate international air links. From a regional city, a trip home often involves a domestic leg — train or internal flight — before the international connection.',
              },
              {
                type: 'ul',
                items: [
                  'How long does it take to reach the nearest international airport?',
                  'Is that internal leg practicable in winter, and at what cost?',
                  'How many trips home do you realistically plan per year?',
                ],
              },
              {
                type: 'p',
                text: 'A student who goes home twice a year must build that extra cost into the annual budget, not discover it in December.',
              },
            ],
          },
          {
            heading: 'The student community: a cushion, not an objective',
            blocks: [
              {
                type: 'p',
                text: 'An already established Maghrebi community genuinely eases the first weeks: housing, paperwork, finding your way around. That is an advantage and we do not downplay it.',
              },
              {
                type: 'p',
                text: 'But it is a cushion for the start of the journey, not a criterion for choosing a university. A large community at an institution whose programmes do not match your project will be of no use to you in third year.',
              },
            ],
          },
          {
            heading: 'How we advise ranking the criteria',
            blocks: [
              { type: 'p', text: 'In this order, and not the reverse:' },
              {
                type: 'ul',
                items: [
                  '1. The field: does the institution genuinely and verifiably offer the programme you are aiming for?',
                  '2. The actual language of instruction of that programme, and the availability of a preparatory year if needed.',
                  '3. Housing: is a residence place available, at what price, and under what conditions?',
                  '4. The total annual budget, tuition and living costs combined.',
                  '5. The journey and the feasibility of trips home.',
                  '6. The community and the living environment.',
                ],
              },
              {
                type: 'strong',
                text: 'Choosing a city before checking that it hosts your field is the surest way to rebuild your whole file three months later.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Are regional universities less recognised than those in Moscow?',
            answer:
              'Recognition depends on an institution’s official status, not on its city. Some regional universities are long-established and solid in their discipline. Check each institution’s status in the official Russian registers rather than relying on geography.',
          },
          {
            question: 'Is the quality of life lower in a regional city?',
            answer:
              'Comfort depends on housing and budget, not on the size of the city. The same monthly budget often buys a better standard of living outside the capital. Cultural offerings and international connections, on the other hand, are more limited.',
          },
          {
            question: 'Is student housing easier to get in a regional city?',
            answer:
              'That is verified institution by institution, not city by city: residence availability depends on each university’s own capacity. Ask the admissions office in writing before committing.',
          },
          {
            question: 'Can you change city during the programme?',
            answer:
              'A transfer between institutions is a heavy procedure that depends on both universities agreeing and on programme compatibility. Better not to count on it and to choose correctly from the start.',
          },
        ],
        keywords: [
          'study in moscow or regional russia',
          'which city to study in russia',
          'cost of living student moscow',
          'regional russian university',
          'choosing a city in russia',
          'russian university cities international students',
        ],
      },
      ar: {
        title: 'موسكو أم مدينة من الأقاليم: أين تدرس في روسيا؟ | RusStudy',
        description:
          'موسكو، سان بطرسبرغ، قازان أو مدينة أصغر: كيف توازن بين كلفة الحياة، وجودة الإطار البيداغوجي، والمجموعة الطلابية، والعزلة اللغوية. المعايير التي تهمّ فعلًا، وتلك التي تهمّ أقلّ مما يُعتقد.',
        h1: 'موسكو أم مدينة من الأقاليم: أين تدرس في روسيا؟',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'العاصمة أغلى، لكنها ليست المتغيّر الوحيد. هذه ستة معايير ينبغي أن توجّه اختيار المدينة، والترتيب الذي يُهمَل غالبًا.',
        intro:
          'تبدأ كل الملفات التي نستقبلها تقريبًا بكلمة «موسكو». وهذا مفهوم: فهي المدينة المعروفة. لكن اختيار المدينة يحدّد ميزانيتك الشهرية خلال خمس أو ست سنوات، وسرعة تعلّمك للروسية، وسهولة عودتك إلى بلدك في العُطل. وهذا يستحقّ أكثر من ردّ فعل تلقائي.',
        sections: [
          {
            heading: 'كلفة الحياة: الفارق الوحيد القابل للقياس فعلًا',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو المعيار الذي يكون فيه الفارق أوضح وأسهل في التوقّع. السكن والنقل والمطاعم أغلى بشكل ملموس في العاصمة منها في مدينة جامعية من الأقاليم، عند مستوى راحة مماثل.',
              },
              {
                type: 'p',
                text: 'لكن انتبه إلى ما تقارنه: السكن الجامعي في موسكو ليس بسعر شقة خاصة في موسكو. قارن دائمًا بين أنماط إيواء متكافئة، واسأل كل جامعة عن التوفّر الحقيقي لمكان في الإقامة الجامعية قبل أن تضع ميزانيتك.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
          {
            heading: 'معاليم الدراسة لا تتبع الجغرافيا بالضرورة',
            blocks: [
              {
                type: 'p',
                text: 'يُفترض غالبًا أن جامعات الأقاليم أرخص دائمًا. وهذه ليست قاعدة: المعاليم تتوقّف على المؤسسة والتخصّص ولغة التدريس، لا على المدينة وحدها.',
              },
              {
                type: 'p',
                text: 'قد يكلّف تخصّص طبي في مؤسسة إقليمية راسخة ما يكلّفه مسار اقتصاد في جامعة موسكوفية أقلّ انتقائية. والسبيل الوحيد للمعرفة هو مقارنة جداول المعاليم الرسمية، جامعةً جامعةً وتخصّصًا تخصّصًا، للسنة المستهدفة.',
              },
            ],
          },
          {
            heading: 'تعلّم الروسية: الحجّة التي تقلب الاستدلال',
            blocks: [
              {
                type: 'p',
                text: 'هذه هي النقطة الأقلّ بداهة. في مدينة كبرى متعدّدة الجنسيات يمكن أن تعيش أشهرًا داخل فقاعة ناطقة بالفرنسية أو بالعربية، بين شركاء سكن من بلدك. وفي مدينة إقليمية لا توجد هذه الفقاعة: تتكلّم الروسية في السوق، وأمام الشبّاك، وعند الطبيب.',
              },
              {
                type: 'p',
                text: 'وبالنسبة إلى طالب يستهدف الطب أو الهندسة بالروسية، هذه ميزة أكاديمية مباشرة: تصبح الدروس مفهومة أسرع. أما الطالب المسجَّل في مسار بالإنجليزية، فالموازنة عنده مختلفة.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'الرحلة والعودة إلى البلد',
            blocks: [
              {
                type: 'p',
                text: 'المدن الكبرى تتمركز فيها الخطوط الجوية الدولية. ومن مدينة إقليمية، تستلزم العودة إلى البلد في الغالب مرحلة داخلية — قطار أو رحلة داخلية — قبل الربط الدولي.',
              },
              {
                type: 'ul',
                items: [
                  'كم يستغرق الوصول إلى أقرب مطار دولي؟',
                  'هل هذه المرحلة الداخلية عملية في الشتاء، وبأي كلفة؟',
                  'كم مرة تنوي العودة فعليًّا في السنة؟',
                ],
              },
              {
                type: 'p',
                text: 'الطالب الذي يعود مرّتين في السنة يجب أن يُدخل هذه الكلفة الإضافية في ميزانيته السنوية، لا أن يكتشفها في ديسمبر.',
              },
            ],
          },
          {
            heading: 'المجموعة الطلابية: مُخفِّف صدمة، لا غاية',
            blocks: [
              {
                type: 'p',
                text: 'وجود مجموعة مغاربية مستقرّة فعلًا يسهّل الأسابيع الأولى: السكن، والإجراءات، والتوجّه في المدينة. هذه ميزة ولا نقلّل منها.',
              },
              {
                type: 'p',
                text: 'لكنها مُخفِّف صدمة في بداية المسار، لا معيار لاختيار الجامعة. مجموعة كبيرة في مؤسسة لا يتوافق تخصّصها مع مشروعك لن تفيدك في السنة الثالثة.',
              },
            ],
          },
          {
            heading: 'كيف ننصح بترتيب المعايير',
            blocks: [
              { type: 'p', text: 'بهذا الترتيب، لا بالعكس:' },
              {
                type: 'ul',
                items: [
                  '1. التخصّص: هل توفّر المؤسسة فعلًا، وبشكل متحقَّق منه، المسار الذي تستهدفه؟',
                  '2. لغة التدريس الفعلية لهذا المسار، ووجود سنة تحضيرية إن لزم الأمر.',
                  '3. السكن: هل يتوفّر مكان في الإقامة الجامعية، وبأي سعر، وبأي شروط؟',
                  '4. الميزانية السنوية الكاملة، بجمع المعاليم وكلفة الحياة.',
                  '5. الرحلة وإمكانية العودة.',
                  '6. المجموعة وإطار الحياة.',
                ],
              },
              {
                type: 'strong',
                text: 'اختيار مدينة قبل التحقّق من أنها تحتضن تخصّصك هو أضمن طريق لإعادة بناء الملف كلّه بعد ثلاثة أشهر.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل جامعات الأقاليم أقلّ اعترافًا من جامعات موسكو؟',
            answer:
              'الاعتراف بمؤسسة يتوقّف على وضعها الرسمي لا على مدينتها. بعض جامعات الأقاليم قديمة وراسخة في تخصّصها. تحقّق من وضع كل مؤسسة في السجلّات الروسية الرسمية بدل الاعتماد على الجغرافيا.',
          },
          {
            question: 'هل الحياة أقلّ جودة في مدينة إقليمية؟',
            answer:
              'الراحة تتوقّف على السكن والميزانية لا على حجم المدينة. وغالبًا تشتري الميزانية الشهرية نفسها مستوى حياة أفضل خارج العاصمة. في المقابل يكون العرض الثقافي والربط الدولي أكثر محدودية.',
          },
          {
            question: 'هل الحصول على سكن جامعي أسهل في الأقاليم؟',
            answer:
              'هذا يُتحقَّق منه مؤسسةً مؤسسةً لا مدينةً مدينةً: توفّر الأماكن يتوقّف على قدرة كل جامعة. اطلب ذلك كتابيًّا من مصلحة القبول قبل أي التزام.',
          },
          {
            question: 'هل يمكن تغيير المدينة أثناء الدراسة؟',
            answer:
              'الانتقال بين المؤسسات إجراء ثقيل يتوقّف على موافقة الجامعتين وعلى توافق البرامج. الأفضل ألّا تعوّل عليه وأن تختار بشكل صحيح من البداية.',
          },
        ],
        keywords: [
          'الدراسة في موسكو أو الأقاليم',
          'أي مدينة للدراسة في روسيا',
          'كلفة الحياة طالب موسكو',
          'جامعة روسية في الأقاليم',
          'اختيار المدينة في روسيا',
          'المدن الجامعية الروسية للطلبة الأجانب',
        ],
      },
      ru: {
        title: 'Москва или региональный город: где учиться в России? | RusStudy',
        description:
          'Москва, Санкт-Петербург, Казань или город поменьше: как сопоставить стоимость жизни, учебную среду, студенческое сообщество и языковую изоляцию. Критерии, которые действительно важны, и те, что важны меньше, чем кажется.',
        h1: 'Москва или региональный город: где учиться в России?',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'Столица дороже, но это не единственный параметр. Шесть критериев, которые должны определять выбор города, и порядок, который им редко присваивают.',
        intro:
          'Почти каждое обращение начинается со слова «Москва». Это понятно: о ней знают. Но выбор города определяет ваш месячный бюджет на пять-шесть лет, скорость освоения русского языка и то, насколько легко вы будете возвращаться домой на каникулы. Это заслуживает большего, чем рефлекс.',
        sections: [
          {
            heading: 'Стоимость жизни: единственный действительно измеримый разрыв',
            blocks: [
              {
                type: 'p',
                text: 'Здесь разница очевиднее всего и легче всего прогнозируется. Жильё, транспорт и питание в столице заметно дороже, чем в региональном университетском городе, при сопоставимом уровне комфорта.',
              },
              {
                type: 'p',
                text: 'Но сравнивайте сопоставимое: общежитие в Москве стоит не как частная квартира в Москве. Всегда сравнивайте одинаковые типы жилья и уточняйте в каждом вузе реальное наличие места в общежитии до составления бюджета.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
          {
            heading: 'Стоимость обучения не обязательно следует географии',
            blocks: [
              {
                type: 'p',
                text: 'Часто предполагают, что региональные вузы всегда дешевле. Это не правило: стоимость зависит от учреждения, направления и языка обучения, а не только от города.',
              },
              {
                type: 'p',
                text: 'Медицинское направление в сильном региональном вузе может стоить столько же, сколько экономика в менее селективном московском. Узнать можно только одним способом: сравнить официальные прайсы по каждому вузу и каждому направлению на нужный год.',
              },
            ],
          },
          {
            heading: 'Освоение русского языка: аргумент, переворачивающий логику',
            blocks: [
              {
                type: 'p',
                text: 'Это самый неочевидный пункт. В большом многонациональном городе можно месяцами жить во франкоязычном или арабоязычном «пузыре», среди соседей из своей страны. В региональном городе такого пузыря нет: вы говорите по-русски на рынке, в окне приёма, у врача.',
              },
              {
                type: 'p',
                text: 'Для студента, идущего на медицину или инженерию на русском языке, это прямое академическое преимущество: лекции становятся понятными быстрее. Для студента на англоязычной программе баланс иной.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'Дорога и поездки домой',
            blocks: [
              {
                type: 'p',
                text: 'Крупные агломерации концентрируют международное авиасообщение. Из регионального города поездка домой обычно включает внутренний участок — поезд или внутренний рейс — до международной стыковки.',
              },
              {
                type: 'ul',
                items: [
                  'Сколько времени занимает дорога до ближайшего международного аэропорта?',
                  'Проходим ли этот внутренний участок зимой и во сколько он обходится?',
                  'Сколько поездок домой в год вы планируете реально?',
                ],
              },
              {
                type: 'p',
                text: 'Студент, который уезжает домой дважды в год, должен заложить эти расходы в годовой бюджет, а не обнаружить их в декабре.',
              },
            ],
          },
          {
            heading: 'Студенческое сообщество: амортизатор, а не цель',
            blocks: [
              {
                type: 'p',
                text: 'Уже сложившееся магрибское сообщество действительно облегчает первые недели: жильё, формальности, ориентация в городе. Это преимущество, и мы его не преуменьшаем.',
              },
              {
                type: 'p',
                text: 'Но это амортизатор на старте, а не критерий выбора вуза. Большое сообщество в учреждении, чьи программы не соответствуют вашему проекту, на третьем курсе вам не поможет.',
              },
            ],
          },
          {
            heading: 'Как мы советуем расставить приоритеты',
            blocks: [
              { type: 'p', text: 'Именно в таком порядке, а не наоборот:' },
              {
                type: 'ul',
                items: [
                  '1. Направление: действительно ли учреждение предлагает — и это подтверждено — нужную вам программу?',
                  '2. Фактический язык обучения этой программы и наличие подготовительного года при необходимости.',
                  '3. Жильё: есть ли место в общежитии, по какой цене и на каких условиях?',
                  '4. Полный годовой бюджет: обучение плюс жизнь.',
                  '5. Дорога и реальность поездок домой.',
                  '6. Сообщество и условия жизни.',
                ],
              },
              {
                type: 'strong',
                text: 'Выбрать город до проверки того, что в нём есть ваше направление, — самый надёжный способ переделать весь пакет через три месяца.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Региональные вузы признаны хуже московских?',
            answer:
              'Признание зависит от официального статуса учреждения, а не от города. Часть региональных вузов давно работает и прочно стоит в своей дисциплине. Проверяйте статус каждого вуза в официальных российских реестрах, а не по географии.',
          },
          {
            question: 'В региональном городе хуже жить?',
            answer:
              'Комфорт зависит от жилья и бюджета, а не от размера города. Один и тот же месячный бюджет вне столицы часто даёт более высокий уровень жизни. Зато культурное предложение и международное сообщение ограниченнее.',
          },
          {
            question: 'Проще ли получить общежитие в регионе?',
            answer:
              'Это проверяется по вузам, а не по городам: наличие мест зависит от собственной вместимости каждого учреждения. Запросите это письменно в приёмной комиссии до принятия решения.',
          },
          {
            question: 'Можно ли сменить город во время учёбы?',
            answer:
              'Перевод между вузами — тяжёлая процедура, зависящая от согласия обоих учреждений и совместимости программ. Лучше на неё не рассчитывать и выбрать правильно сразу.',
          },
        ],
        keywords: [
          'учёба в Москве или в регионе',
          'какой город выбрать для учёбы в России',
          'стоимость жизни студента в Москве',
          'региональный российский вуз',
          'выбор города в России',
          'университетские города России',
        ],
      },
    },
  },
  {
    slug: 'verifier-universite-russe-reconnue',
    publishedAt: '2026-11-16',
    copy: {
      fr: {
        title: 'Comment vérifier qu’une université russe est reconnue | RusStudy',
        description:
          "Licence d'enseignement, accréditation d'État, registre officiel : les trois vérifications à faire avant de payer des frais d'inscription, et les signaux qui doivent vous faire reposer la question.",
        h1: "Comment vérifier qu'une université russe est reconnue — et ce que « reconnue » veut dire",
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          "« Reconnue » ne signifie pas la même chose selon qu'on parle de la Russie ou de votre pays. Voici les trois vérifications distinctes à faire, et dans quel ordre.",
        intro:
          "C'est la question qui revient le plus souvent dans les familles, et c'est la bonne question. Mais elle contient trois interrogations différentes qu'il faut séparer : l'établissement a-t-il le droit d'enseigner en Russie ? Le programme précis que vous visez est-il accrédité ? Et le diplôme obtenu sera-t-il reconnu dans le pays où vous voulez exercer ?",
        sections: [
          {
            heading: 'Trois questions, pas une',
            blocks: [
              {
                type: 'ul',
                items: [
                  "La licence d'enseignement : l'établissement est-il autorisé à dispenser un enseignement supérieur en Russie ?",
                  "L'accréditation d'État : le programme particulier auquel vous vous inscrivez est-il accrédité, ce qui conditionne la délivrance d'un diplôme d'État ?",
                  "La reconnaissance à l'étranger : le diplôme sera-t-il admis dans le pays où vous comptez exercer ou poursuivre vos études ?",
                ],
              },
              {
                type: 'p',
                text: "Un établissement peut parfaitement détenir une licence d'enseignement sans que le programme exact qui vous intéresse soit accrédité. Les trois réponses se vérifient séparément.",
              },
            ],
          },
          {
            heading: 'Vérification 1 : le registre officiel russe',
            blocks: [
              {
                type: 'p',
                text: "Les autorités russes tiennent des registres publics des établissements titulaires d'une licence d'enseignement supérieur et des programmes accrédités. C'est la seule source qui fait foi, et elle est consultable.",
              },
              {
                type: 'p',
                text: "Demandez à l'université, par écrit, son numéro d'enregistrement ainsi que les références de sa licence et de l'accréditation du programme visé. Un établissement sérieux fournit ces informations sans difficulté. Une réticence sur ce point est en soi une réponse.",
              },
              {
                type: 'strong',
                text: "Vérifiez la dénomination officielle exacte de l'établissement, en russe, et non la traduction commerciale utilisée dans les brochures : plusieurs universités portent des noms voisins.",
              },
            ],
          },
          {
            heading: 'Vérification 2 : le programme, pas seulement l’établissement',
            blocks: [
              {
                type: 'p',
                text: "C'est l'erreur la plus coûteuse. On vérifie l'université, on s'arrête là, et on découvre en troisième année que la spécialité suivie ne débouche pas sur le diplôme attendu.",
              },
              {
                type: 'ul',
                items: [
                  "Quel est l'intitulé officiel du programme et son code de spécialité en Russie ?",
                  "Ce programme est-il accrédité, et jusqu'à quelle date ?",
                  'Quel diplôme précis est délivré à la fin, et sous quelle dénomination ?',
                  "Quelle est la durée officielle du cursus, année préparatoire incluse ou non ?",
                ],
              },
              {
                type: 'p',
                text: "Sur les filières médicales, ajoutez une question : le diplôme délivré permet-il d'exercer directement, ou une spécialisation ultérieure est-elle nécessaire ? La réponse change complètement la durée totale de vos études.",
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'Vérification 3 : la reconnaissance dans votre pays',
            blocks: [
              {
                type: 'p',
                text: "C'est une question entièrement distincte, traitée par les autorités de votre pays et non par l'université russe. Un diplôme d'État russe parfaitement valide en Russie suit sa propre procédure pour être reconnu ailleurs.",
              },
              {
                type: 'p',
                text: "Cette procédure se prépare pendant les études, pas après : conservez l'intégralité de vos relevés de notes, les descriptifs de programme et tout document attestant du volume horaire. Les dossiers de reconnaissance échouent plus souvent par manque de pièces que par défaut de niveau.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Les signaux qui doivent vous faire reposer la question',
            blocks: [
              {
                type: 'ul',
                items: [
                  'On vous promet une admission garantie avant même examen de votre dossier.',
                  "On vous demande un paiement important avant toute preuve écrite d'admission.",
                  "On refuse de vous communiquer la dénomination officielle russe de l'établissement.",
                  "On vous assure que le diplôme est « reconnu partout dans le monde » : aucune autorité ne délivre une telle garantie universelle.",
                  "On vous dissuade de contacter directement le service des admissions de l'université.",
                ],
              },
              {
                type: 'p',
                text: "Aucun de ces signaux ne prouve à lui seul une irrégularité. Mais chacun justifie d'exiger un document écrit avant de payer quoi que ce soit.",
              },
            ],
          },
          {
            heading: 'Notre position',
            blocks: [
              {
                type: 'p',
                text: "Nous ne publions ni liste d'universités « reconnues », ni classement. Les statuts administratifs évoluent, les accréditations ont des dates d'échéance, et une liste figée sur un site web serait une source d'erreur, pas de sécurité.",
              },
              {
                type: 'p',
                text: "Ce que nous faisons, pour chaque dossier : identifier la dénomination officielle de l'établissement, demander les références de licence et d'accréditation du programme visé, et vous transmettre les réponses écrites de l'université. Vous décidez sur la base de documents, pas de promesses.",
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Existe-t-il une liste officielle des universités russes reconnues ?',
            answer:
              "Les autorités russes tiennent des registres publics des licences d'enseignement et des accréditations de programmes. C'est là qu'il faut vérifier, au moment où vous déposez votre dossier, car ces statuts ont des dates de validité. Nous ne publions pas de liste parallèle qui risquerait d'être périmée.",
          },
          {
            question: 'Une université reconnue en Russie garantit-elle un diplôme reconnu chez moi ?',
            answer:
              "Non. Ce sont deux procédures distinctes : l'accréditation russe conditionne la délivrance du diplôme, la reconnaissance dans votre pays relève des autorités de votre pays. Préparez la seconde dès le début de vos études en conservant tous vos relevés et descriptifs de programme.",
          },
          {
            question: 'Que demander à une université avant de payer ?',
            answer:
              "Sa dénomination officielle en russe, les références de sa licence d'enseignement, l'intitulé et le code officiel du programme, l'accréditation de ce programme et sa date d'échéance, le diplôme délivré en fin de cursus, et tout cela par écrit.",
          },
          {
            question: 'Les universités privées russes sont-elles accréditées ?',
            answer:
              "Le statut privé ou public ne détermine pas à lui seul l'accréditation : celle-ci se vérifie établissement par établissement et programme par programme dans les registres officiels. Ne présumez rien dans un sens ni dans l'autre.",
          },
        ],
        keywords: [
          'université russe reconnue',
          'accréditation université russie',
          'vérifier université russe',
          'diplôme russe reconnu tunisie',
          'licence enseignement université russie',
          'éviter arnaque études russie',
        ],
      },
      en: {
        title: 'How to check that a Russian university is recognised | RusStudy',
        description:
          'Teaching licence, state accreditation, official register: the three checks to make before paying any application fee, and the warning signs that should make you ask again.',
        h1: 'How to check that a Russian university is recognised — and what “recognised” means',
        publishedLabel: 'Published: November 2026',
        excerpt:
          '“Recognised” does not mean the same thing in Russia and in your own country. Here are the three separate checks to make, and in what order.',
        intro:
          'This is the question families ask most often, and it is the right question. But it contains three different ones that must be kept apart: is the institution allowed to teach in Russia? Is the specific programme you are joining accredited? And will the resulting diploma be recognised in the country where you intend to practise?',
        sections: [
          {
            heading: 'Three questions, not one',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The teaching licence: is the institution authorised to deliver higher education in Russia?',
                  'State accreditation: is the particular programme you are enrolling in accredited, which conditions the issuing of a state diploma?',
                  'Recognition abroad: will the diploma be accepted in the country where you plan to practise or continue studying?',
                ],
              },
              {
                type: 'p',
                text: 'An institution can perfectly well hold a teaching licence while the exact programme you are interested in is not accredited. The three answers are verified separately.',
              },
            ],
          },
          {
            heading: 'Check 1: the official Russian register',
            blocks: [
              {
                type: 'p',
                text: 'The Russian authorities maintain public registers of institutions holding a higher education licence and of accredited programmes. That is the only authoritative source, and it can be consulted.',
              },
              {
                type: 'p',
                text: 'Ask the university, in writing, for its registration number and the references of its licence and of the accreditation of the programme concerned. A serious institution provides this without difficulty. Reluctance on this point is itself an answer.',
              },
              {
                type: 'strong',
                text: 'Check the institution’s exact official name in Russian, not the commercial translation used in brochures: several universities have similar names.',
              },
            ],
          },
          {
            heading: 'Check 2: the programme, not just the institution',
            blocks: [
              {
                type: 'p',
                text: 'This is the costliest mistake. People check the university, stop there, and discover in third year that the specialty they are following does not lead to the diploma they expected.',
              },
              {
                type: 'ul',
                items: [
                  'What is the official title of the programme and its specialty code in Russia?',
                  'Is that programme accredited, and until what date?',
                  'Which exact diploma is issued at the end, and under what name?',
                  'What is the official duration of the programme, preparatory year included or not?',
                ],
              },
              {
                type: 'p',
                text: 'For medical fields, add one question: does the diploma issued allow direct practice, or is further specialisation required? The answer completely changes the total length of your studies.',
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'Check 3: recognition in your own country',
            blocks: [
              {
                type: 'p',
                text: 'This is an entirely separate question, handled by the authorities of your country and not by the Russian university. A Russian state diploma that is perfectly valid in Russia follows its own procedure to be recognised elsewhere.',
              },
              {
                type: 'p',
                text: 'That procedure is prepared during your studies, not after: keep every transcript, every programme description and any document evidencing teaching hours. Recognition files fail more often for missing documents than for insufficient level.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Warning signs that should make you ask again',
            blocks: [
              {
                type: 'ul',
                items: [
                  'You are promised guaranteed admission before your file has even been examined.',
                  'You are asked for a substantial payment before any written proof of admission.',
                  'Someone refuses to give you the institution’s official Russian name.',
                  'You are assured the diploma is “recognised worldwide”: no authority issues such a universal guarantee.',
                  'You are discouraged from contacting the university’s admissions office directly.',
                ],
              },
              {
                type: 'p',
                text: 'None of these signs alone proves irregularity. But each one justifies demanding a written document before paying anything.',
              },
            ],
          },
          {
            heading: 'Our position',
            blocks: [
              {
                type: 'p',
                text: 'We publish neither a list of “recognised” universities nor a ranking. Administrative statuses change, accreditations have expiry dates, and a list frozen on a website would be a source of error rather than of safety.',
              },
              {
                type: 'p',
                text: 'What we do, for every file: identify the institution’s official name, request the licence and programme accreditation references, and pass the university’s written answers on to you. You decide on the basis of documents, not promises.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is there an official list of recognised Russian universities?',
            answer:
              'The Russian authorities maintain public registers of teaching licences and programme accreditations. That is where to check, at the time you file, because these statuses have validity dates. We do not publish a parallel list that could become outdated.',
          },
          {
            question: 'Does a university recognised in Russia guarantee a diploma recognised at home?',
            answer:
              'No. These are two distinct procedures: Russian accreditation conditions the issuing of the diploma, recognition in your country is a matter for your own authorities. Prepare the second from the start of your studies by keeping all transcripts and programme descriptions.',
          },
          {
            question: 'What should I ask a university before paying?',
            answer:
              'Its official name in Russian, the references of its teaching licence, the title and official code of the programme, that programme’s accreditation and expiry date, the diploma issued at the end — all in writing.',
          },
          {
            question: 'Are private Russian universities accredited?',
            answer:
              'Private or public status alone does not determine accreditation: it is verified institution by institution and programme by programme in the official registers. Assume nothing either way.',
          },
        ],
        keywords: [
          'recognised russian university',
          'russian university accreditation',
          'check russian university',
          'russian diploma recognition',
          'higher education licence russia',
          'avoid study abroad scam russia',
        ],
      },
      ar: {
        title: 'كيف تتحقّق من أن الجامعة الروسية معترف بها | RusStudy',
        description:
          'رخصة التعليم، والاعتماد الحكومي، والسجلّ الرسمي: ثلاث عمليات تحقّق قبل دفع أي معلوم تسجيل، والمؤشّرات التي يجب أن تجعلك تعيد السؤال.',
        h1: 'كيف تتحقّق من أن الجامعة الروسية معترف بها — وماذا تعني كلمة «معترف بها»',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'كلمة «معترف بها» لا تعني الشيء نفسه في روسيا وفي بلدك. هذه ثلاث عمليات تحقّق منفصلة، وبأي ترتيب تُجرى.',
        intro:
          'هذا أكثر سؤال تطرحه العائلات، وهو السؤال الصحيح. لكنه يضمّ ثلاثة أسئلة مختلفة يجب الفصل بينها: هل للمؤسسة الحق في التعليم في روسيا؟ وهل البرنامج الذي تنضمّ إليه بالتحديد معتمد؟ وهل ستُعترف بالشهادة في البلد الذي تريد العمل فيه؟',
        sections: [
          {
            heading: 'ثلاثة أسئلة لا سؤال واحد',
            blocks: [
              {
                type: 'ul',
                items: [
                  'رخصة التعليم: هل المؤسسة مرخَّص لها بتقديم تعليم عالٍ في روسيا؟',
                  'الاعتماد الحكومي: هل البرنامج الذي تسجّل فيه تحديدًا معتمد، وهو شرط إصدار شهادة حكومية؟',
                  'الاعتراف في الخارج: هل ستُقبل الشهادة في البلد الذي تنوي العمل فيه أو مواصلة الدراسة؟',
                ],
              },
              {
                type: 'p',
                text: 'يمكن تمامًا أن تحمل مؤسسة رخصة تعليم دون أن يكون البرنامج الذي يهمّك معتمدًا. والأجوبة الثلاثة يُتحقَّق منها بشكل منفصل.',
              },
            ],
          },
          {
            heading: 'التحقّق الأول: السجلّ الروسي الرسمي',
            blocks: [
              {
                type: 'p',
                text: 'تحتفظ السلطات الروسية بسجلّات عمومية للمؤسسات الحاملة لرخصة تعليم عالٍ وللبرامج المعتمدة. وهذا هو المصدر الوحيد ذو الحجية، وهو قابل للاستشارة.',
              },
              {
                type: 'p',
                text: 'اطلب من الجامعة كتابيًّا رقم تسجيلها ومراجع رخصتها واعتماد البرنامج المستهدف. المؤسسة الجدّية تقدّم هذه المعلومات بلا عناء. والتردّد في هذه النقطة هو في ذاته جواب.',
              },
              {
                type: 'strong',
                text: 'تحقّق من التسمية الرسمية الدقيقة للمؤسسة بالروسية، لا من الترجمة التجارية المستعملة في المطويات: عدة جامعات تحمل أسماء متقاربة.',
              },
            ],
          },
          {
            heading: 'التحقّق الثاني: البرنامج لا المؤسسة وحدها',
            blocks: [
              {
                type: 'p',
                text: 'هذا أغلى الأخطاء ثمنًا. يتحقّق المترشّح من الجامعة ويتوقّف هناك، ثم يكتشف في السنة الثالثة أن الاختصاص الذي يتابعه لا يؤدّي إلى الشهادة المنتظرة.',
              },
              {
                type: 'ul',
                items: [
                  'ما العنوان الرسمي للبرنامج ورمز الاختصاص الخاص به في روسيا؟',
                  'هل هذا البرنامج معتمد، وإلى أي تاريخ؟',
                  'ما الشهادة التي تُسلَّم في النهاية بالتحديد، وبأي تسمية؟',
                  'ما المدة الرسمية للمسار، بإدراج السنة التحضيرية أو بدونها؟',
                ],
              },
              {
                type: 'p',
                text: 'وفي التخصّصات الطبية أضف سؤالًا: هل تتيح الشهادة الممارسة مباشرة، أم يلزم تخصّص لاحق؟ الجواب يغيّر كليًّا المدة الإجمالية لدراستك.',
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'التحقّق الثالث: الاعتراف في بلدك',
            blocks: [
              {
                type: 'p',
                text: 'هذا سؤال مستقلّ تمامًا، تتولّاه سلطات بلدك لا الجامعة الروسية. فالشهادة الحكومية الروسية الصحيحة تمامًا في روسيا تتبع إجراءً خاصًّا بها للاعتراف بها في مكان آخر.',
              },
              {
                type: 'p',
                text: 'وهذا الإجراء يُعدّ أثناء الدراسة لا بعدها: احفظ كل كشوف أعدادك، وتوصيفات البرامج، وكل وثيقة تُثبت الحجم الساعي. ملفات الاعتراف تفشل بسبب نقص الوثائق أكثر مما تفشل بسبب المستوى.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'مؤشّرات تجعلك تعيد السؤال',
            blocks: [
              {
                type: 'ul',
                items: [
                  'يُوعَد لك بقبول مضمون قبل حتى دراسة ملفك.',
                  'يُطلب منك دفع مبلغ مهمّ قبل أي إثبات كتابي للقبول.',
                  'يُرفض إعطاؤك التسمية الرسمية الروسية للمؤسسة.',
                  'يُؤكَّد لك أن الشهادة «معترف بها في كل أنحاء العالم»: لا سلطة تمنح ضمانًا شاملًا كهذا.',
                  'يُثبَّط عزمك عن الاتصال المباشر بمصلحة القبول في الجامعة.',
                ],
              },
              {
                type: 'p',
                text: 'لا يُثبت أي من هذه المؤشّرات منفردًا وجود خلل. لكن كل واحد منها يبرّر طلب وثيقة مكتوبة قبل دفع أي شيء.',
              },
            ],
          },
          {
            heading: 'موقفنا',
            blocks: [
              {
                type: 'p',
                text: 'لا ننشر قائمة جامعات «معترف بها» ولا ترتيبًا. الأوضاع الإدارية تتغيّر، وللاعتمادات تواريخ انتهاء، وقائمة مجمَّدة على موقع إلكتروني ستكون مصدر خطأ لا مصدر أمان.',
              },
              {
                type: 'p',
                text: 'ما نقوم به في كل ملف: تحديد التسمية الرسمية للمؤسسة، وطلب مراجع الرخصة واعتماد البرنامج المستهدف، وتسليمك أجوبة الجامعة المكتوبة. أنت تقرّر على أساس وثائق لا وعود.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل توجد قائمة رسمية للجامعات الروسية المعترف بها؟',
            answer:
              'تحتفظ السلطات الروسية بسجلّات عمومية لرخص التعليم واعتمادات البرامج. وهناك يجب التحقّق، في وقت إيداع ملفك، لأن لهذه الأوضاع تواريخ صلاحية. ولا ننشر قائمة موازية قد تصبح متجاوَزة.',
          },
          {
            question: 'هل اعتراف روسيا بالجامعة يضمن اعتراف بلدي بالشهادة؟',
            answer:
              'لا. هما إجراءان متمايزان: الاعتماد الروسي شرط لإصدار الشهادة، والاعتراف في بلدك من اختصاص سلطات بلدك. حضّر الثاني من بداية دراستك بحفظ كل الكشوف والتوصيفات.',
          },
          {
            question: 'ماذا أطلب من الجامعة قبل الدفع؟',
            answer:
              'تسميتها الرسمية بالروسية، ومراجع رخصة التعليم، وعنوان البرنامج ورمزه الرسمي، واعتماد هذا البرنامج وتاريخ انتهائه، والشهادة المسلَّمة في نهاية المسار — وكل ذلك كتابيًّا.',
          },
          {
            question: 'هل الجامعات الروسية الخاصة معتمدة؟',
            answer:
              'الوضع الخاص أو العمومي لا يحدّد الاعتماد بمفرده: يُتحقَّق منه مؤسسةً مؤسسةً وبرنامجًا برنامجًا في السجلّات الرسمية. لا تفترض شيئًا في أي اتجاه.',
          },
        ],
        keywords: [
          'جامعة روسية معترف بها',
          'اعتماد جامعة روسية',
          'التحقّق من جامعة روسية',
          'شهادة روسية معترف بها',
          'رخصة التعليم العالي روسيا',
          'تجنّب الاحتيال الدراسة في روسيا',
        ],
      },
      ru: {
        title: 'Как проверить, что российский вуз признан | RusStudy',
        description:
          'Лицензия на образовательную деятельность, государственная аккредитация, официальный реестр: три проверки до оплаты любых взносов и признаки, из-за которых стоит задать вопрос заново.',
        h1: 'Как проверить, что российский вуз признан — и что значит «признан»',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          '«Признан» значит не одно и то же в России и в вашей стране. Три отдельные проверки и порядок, в котором их делают.',
        intro:
          'Это самый частый вопрос семей, и он правильный. Но в нём скрыты три разных вопроса, которые нужно разделить: имеет ли учреждение право вести обучение в России? Аккредитована ли конкретная программа, на которую вы поступаете? И будет ли диплом признан в стране, где вы собираетесь работать?',
        sections: [
          {
            heading: 'Три вопроса, а не один',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Лицензия: имеет ли учреждение право вести образовательную деятельность в сфере высшего образования в России?',
                  'Государственная аккредитация: аккредитована ли именно та программа, на которую вы поступаете, — от этого зависит выдача диплома государственного образца?',
                  'Признание за рубежом: примут ли диплом в стране, где вы планируете работать или продолжать учёбу?',
                ],
              },
              {
                type: 'p',
                text: 'Учреждение вполне может иметь лицензию, тогда как интересующая вас программа не аккредитована. Все три ответа проверяются отдельно.',
              },
            ],
          },
          {
            heading: 'Проверка 1: официальный российский реестр',
            blocks: [
              {
                type: 'p',
                text: 'Российские органы ведут открытые реестры учреждений с лицензией на высшее образование и аккредитованных программ. Это единственный источник, имеющий силу, и он доступен для проверки.',
              },
              {
                type: 'p',
                text: 'Запросите у вуза письменно его регистрационный номер и реквизиты лицензии и аккредитации нужной программы. Серьёзное учреждение предоставляет это без затруднений. Нежелание отвечать по этому пункту — само по себе ответ.',
              },
              {
                type: 'strong',
                text: 'Проверяйте точное официальное наименование на русском языке, а не коммерческий перевод из брошюры: у нескольких вузов названия похожи.',
              },
            ],
          },
          {
            heading: 'Проверка 2: программа, а не только вуз',
            blocks: [
              {
                type: 'p',
                text: 'Это самая дорогая ошибка. Вуз проверяют, на этом останавливаются, а на третьем курсе выясняют, что выбранная специальность не ведёт к ожидаемому диплому.',
              },
              {
                type: 'ul',
                items: [
                  'Каково официальное название программы и код специальности в России?',
                  'Аккредитована ли эта программа и до какой даты?',
                  'Какой именно диплом выдаётся в конце и под каким наименованием?',
                  'Какова официальная продолжительность обучения — с подготовительным годом или без него?',
                ],
              },
              {
                type: 'p',
                text: 'Для медицинских направлений добавьте вопрос: позволяет ли выдаваемый диплом работать сразу или требуется последующая специализация? Ответ полностью меняет общую длительность учёбы.',
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'Проверка 3: признание в вашей стране',
            blocks: [
              {
                type: 'p',
                text: 'Это совершенно отдельный вопрос, которым занимаются органы вашей страны, а не российский вуз. Диплом государственного образца, полностью действительный в России, проходит собственную процедуру признания в другом государстве.',
              },
              {
                type: 'p',
                text: 'Эту процедуру готовят во время учёбы, а не после: сохраняйте все выписки с оценками, описания программ и любые документы о количестве часов. Дела о признании чаще проваливаются из-за недостающих бумаг, чем из-за уровня подготовки.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Признаки, из-за которых стоит переспросить',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Вам обещают гарантированное зачисление до рассмотрения документов.',
                  'С вас просят крупную оплату до любого письменного подтверждения зачисления.',
                  'Вам отказываются сообщить официальное русское наименование учреждения.',
                  'Вас уверяют, что диплом «признан во всём мире»: такой универсальной гарантии не выдаёт ни один орган.',
                  'Вас отговаривают напрямую связаться с приёмной комиссией вуза.',
                ],
              },
              {
                type: 'p',
                text: 'Ни один из этих признаков сам по себе не доказывает нарушения. Но каждый оправдывает требование письменного документа до любой оплаты.',
              },
            ],
          },
          {
            heading: 'Наша позиция',
            blocks: [
              {
                type: 'p',
                text: 'Мы не публикуем ни списка «признанных» вузов, ни рейтинга. Административные статусы меняются, у аккредитаций есть сроки, а список, застывший на сайте, был бы источником ошибок, а не надёжности.',
              },
              {
                type: 'p',
                text: 'Что мы делаем по каждому пакету: устанавливаем официальное наименование учреждения, запрашиваем реквизиты лицензии и аккредитации нужной программы и передаём вам письменные ответы вуза. Вы решаете на основании документов, а не обещаний.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Есть ли официальный список признанных российских вузов?',
            answer:
              'Российские органы ведут открытые реестры лицензий и аккредитаций программ. Проверять нужно там и в момент подачи, потому что у этих статусов есть сроки действия. Параллельного списка, который может устареть, мы не публикуем.',
          },
          {
            question: 'Гарантирует ли признанный в России вуз признание диплома у меня дома?',
            answer:
              'Нет. Это две разные процедуры: российская аккредитация определяет выдачу диплома, признание в вашей стране — дело её собственных органов. Готовьте второе с начала учёбы, сохраняя все выписки и описания программ.',
          },
          {
            question: 'Что спросить у вуза до оплаты?',
            answer:
              'Официальное наименование на русском, реквизиты лицензии, название и официальный код программы, её аккредитацию и срок действия, выдаваемый в конце диплом — всё письменно.',
          },
          {
            question: 'Аккредитованы ли частные российские вузы?',
            answer:
              'Частный или государственный статус сам по себе не определяет аккредитацию: её проверяют по каждому учреждению и каждой программе в официальных реестрах. Не предполагайте ничего ни в ту, ни в другую сторону.',
          },
        ],
        keywords: [
          'признанный российский вуз',
          'аккредитация российского вуза',
          'проверить российский вуз',
          'признание российского диплома',
          'лицензия на высшее образование',
          'как не попасть на обман при учёбе в России',
        ],
      },
    },
  },
  {
    slug: 'etudier-la-psychologie-en-russie',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Étudier la psychologie en Russie : ce qu’il faut vérifier avant de candidater | RusStudy',
        description:
          "La psychologie fait partie des disciplines enseignées dans les universités russes, mais l'offre varie fortement d'un établissement à l'autre. Structure des cursus, langue d'enseignement, débouchés et vérifications indispensables.",
        h1: 'Étudier la psychologie en Russie : ce qu’il faut vérifier avant de candidater',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          "La psychologie ne fait pas partie de nos cinq filières historiques. Nous publions donc ce qui est vérifiable, et surtout la liste des questions à poser à chaque université avant de candidater.",
        intro:
          "Nous recevons régulièrement des demandes pour la psychologie, et nous devons être transparents : ce n'est pas l'une des cinq filières pour lesquelles nous avons constitué une documentation détaillée établissement par établissement. Cet article explique donc comment la discipline s'organise dans le système russe, et quelles vérifications faire vous-même — ou avec nous — avant d'engager un dossier.",
        sections: [
          {
            heading: 'Une discipline présente, mais une offre inégale',
            blocks: [
              {
                type: 'p',
                text: "La psychologie est une discipline universitaire établie en Russie, enseignée dans des facultés dédiées. Mais contrairement à la médecine ou à l'ingénierie, elle n'est pas proposée par tous les établissements, et son contenu varie beaucoup selon l'orientation de la faculté.",
              },
              {
                type: 'strong',
                text: "Nous n'affirmons pas ici qu'une université donnée propose ce cursus : c'est précisément ce que vous devez faire confirmer par écrit, université par université, avant toute candidature.",
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'Trois orientations très différentes derrière un même mot',
            blocks: [
              {
                type: 'p',
                text: "« Psychologie » recouvre des cursus qui ne mènent pas au même métier. Avant de choisir, identifiez lequel vous visez, car cela détermine à la fois l'université et, dans certains cas, la faculté d'accueil.",
              },
              {
                type: 'ul',
                items: [
                  "La psychologie générale et expérimentale, orientée recherche et sciences du comportement, souvent rattachée à une faculté de psychologie ou de sciences humaines.",
                  "La psychologie clinique, tournée vers l'évaluation et la prise en charge, qui peut dépendre d'un cadre plus proche des sciences médicales.",
                  "Les psychologies appliquées — éducation, travail, organisations, sport — rattachées selon les établissements à des facultés de pédagogie, d'économie ou de sciences du sport.",
                ],
              },
              {
                type: 'p',
                text: "Posez la question dans ces termes : quel est l'intitulé officiel du programme, et quelle faculté le délivre ?",
              },
            ],
          },
          {
            heading: 'La langue d’enseignement : le point le plus déterminant',
            blocks: [
              {
                type: 'p',
                text: "La psychologie est une discipline de langue. Contrairement à des matières où une partie du raisonnement passe par les formules ou les schémas, ici tout repose sur la nuance : un entretien, un questionnaire, un compte rendu clinique.",
              },
              {
                type: 'p',
                text: "Un cursus de psychologie suivi en russe exige donc un niveau de langue réellement solide, au-delà de ce qui suffirait dans une filière technique. L'année préparatoire de russe n'est pas une formalité dans ce cas : c'est le socle du cursus.",
              },
              {
                type: 'p',
                text: "Si un établissement propose un cursus en anglais, vérifiez-le programme par programme : l'existence de cours en anglais dans une université ne signifie pas que la psychologie en fait partie.",
              },
              { type: 'related', slug: 'programmes-en-anglais-universites-russes' },
            ],
          },
          {
            heading: 'La question des débouchés, posée honnêtement',
            blocks: [
              {
                type: 'p',
                text: "Exercer la psychologie est une activité encadrée, et les conditions d'exercice sont fixées par le pays où vous travaillerez — pas par l'université qui vous a formé. Un diplôme russe de psychologie n'ouvre pas automatiquement un droit d'exercice ailleurs.",
              },
              {
                type: 'p',
                text: "Avant de candidater, documentez-vous sur deux points dans le pays où vous envisagez d'exercer : la procédure de reconnaissance du diplôme étranger, et les conditions d'inscription ou d'autorisation nécessaires pour exercer la profession. Ces deux réponses viennent des autorités compétentes de ce pays.",
              },
              {
                type: 'strong',
                text: "Nous ne promettons aucun débouché professionnel, en psychologie comme dans toute autre filière : ce serait une promesse que nous ne maîtrisons pas.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'La liste des questions à poser à chaque université',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Proposez-vous un cursus de psychologie, et sous quel intitulé officiel ?',
                  'Quelle faculté le délivre, et quel diplôme est obtenu à la fin ?',
                  'Ce programme est-il accrédité, et jusqu’à quelle date ?',
                  "Quelle est la langue d'enseignement effective, du début à la fin du cursus ?",
                  'Quelle est la durée officielle, et une année préparatoire est-elle requise ?',
                  'Les étudiants internationaux sont-ils admis dans ce programme en particulier ?',
                  'Une place en résidence universitaire est-elle disponible pour ce cursus ?',
                  'Quels sont les frais de scolarité annuels pour l’année visée ?',
                ],
              },
              {
                type: 'p',
                text: "Huit questions, une seule réponse écrite à conserver. C'est ce qui sépare un projet solide d'une intuition.",
              },
            ],
          },
          {
            heading: 'Comment nous traitons ce type de demande',
            blocks: [
              {
                type: 'p',
                text: "Nous ne prétendons pas disposer d'une documentation aussi détaillée en psychologie que sur la médecine, le dentaire, la pharmacie, l'ingénierie et l'économie. Ce que nous faisons, c'est interroger les établissements à votre place et vous transmettre leurs réponses écrites, sans les reformuler ni les embellir.",
              },
              {
                type: 'p',
                text: "Si aucun établissement ne confirme un cursus correspondant à votre projet, nous vous le disons. Une orientation vers une filière voisine réellement disponible vaut mieux qu'un dossier déposé sur une supposition.",
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Peut-on étudier la psychologie en Russie en tant qu’étudiant étranger ?',
            answer:
              "La psychologie est une discipline enseignée dans le système universitaire russe, mais l'ouverture d'un programme donné aux étudiants internationaux se vérifie établissement par établissement. Demandez-le par écrit au service des admissions de chaque université visée.",
          },
          {
            question: 'Faut-il parler russe pour suivre un cursus de psychologie ?',
            answer:
              "Si le cursus est dispensé en russe, oui, et à un niveau exigeant : la discipline repose entièrement sur la langue. L'année préparatoire est dans ce cas une étape déterminante, pas une formalité administrative.",
          },
          {
            question: 'Un diplôme russe de psychologie permet-il d’exercer en Tunisie ?',
            answer:
              "Les conditions d'exercice d'une profession sont fixées par le pays où vous travaillez, et la reconnaissance d'un diplôme étranger suit une procédure propre. Renseignez-vous auprès des autorités tunisiennes compétentes avant de vous engager, car cette réponse ne dépend ni de nous ni de l'université russe.",
          },
          {
            question: 'La psychologie fait-elle partie des filières que vous documentez ?',
            answer:
              "Non. Nos cinq filières documentées en détail sont la médecine générale, la médecine dentaire, la pharmacie, l'ingénierie et les technologies, et l'économie et le commerce. Pour la psychologie, nous interrogeons les établissements et vous transmettons leurs réponses écrites.",
          },
        ],
        keywords: [
          'étudier la psychologie en russie',
          'psychologie université russe',
          'faculté de psychologie russie',
          'psychologie clinique russie étudiant étranger',
          'diplôme psychologie russe reconnaissance',
          'filières universitaires russie psychologie',
        ],
      },
      en: {
        title: 'Studying psychology in Russia: what to verify before applying | RusStudy',
        description:
          'Psychology is taught in Russian universities, but provision varies widely between institutions. Programme structure, language of instruction, career paths and the checks you cannot skip.',
        h1: 'Studying psychology in Russia: what to verify before applying',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'Psychology is not one of our five documented fields. So we publish what is verifiable — and above all the list of questions to put to each university before applying.',
        intro:
          'We regularly receive enquiries about psychology, and we have to be straightforward: it is not one of the five fields for which we have built detailed institution-by-institution documentation. This article therefore explains how the discipline is organised in the Russian system, and which checks to carry out — yourself or with us — before opening a file.',
        sections: [
          {
            heading: 'An established discipline, but uneven provision',
            blocks: [
              {
                type: 'p',
                text: 'Psychology is an established university discipline in Russia, taught in dedicated faculties. But unlike medicine or engineering, it is not offered by every institution, and its content varies considerably with the faculty’s orientation.',
              },
              {
                type: 'strong',
                text: 'We are not asserting here that any given university offers this programme: that is precisely what you must have confirmed in writing, university by university, before applying.',
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'Three very different orientations behind one word',
            blocks: [
              {
                type: 'p',
                text: '“Psychology” covers programmes that do not lead to the same profession. Before choosing, identify which one you are aiming for, because it determines both the university and, in some cases, the host faculty.',
              },
              {
                type: 'ul',
                items: [
                  'General and experimental psychology, research-oriented and focused on behavioural science, usually attached to a psychology or humanities faculty.',
                  'Clinical psychology, oriented towards assessment and care, which may sit in a setting closer to the medical sciences.',
                  'Applied psychologies — education, work, organisations, sport — attached, depending on the institution, to faculties of pedagogy, economics or sport science.',
                ],
              },
              {
                type: 'p',
                text: 'Ask the question in these terms: what is the official title of the programme, and which faculty awards it?',
              },
            ],
          },
          {
            heading: 'Language of instruction: the most decisive point',
            blocks: [
              {
                type: 'p',
                text: 'Psychology is a language-intensive discipline. Unlike subjects where part of the reasoning runs through formulas or diagrams, here everything rests on nuance: an interview, a questionnaire, a clinical report.',
              },
              {
                type: 'p',
                text: 'A psychology programme taught in Russian therefore requires genuinely solid language skills, beyond what would suffice in a technical field. The preparatory Russian year is no formality here: it is the foundation of the programme.',
              },
              {
                type: 'p',
                text: 'If an institution offers an English-taught programme, verify it programme by programme: the existence of English-taught courses at a university does not mean psychology is among them.',
              },
              { type: 'related', slug: 'programmes-en-anglais-universites-russes' },
            ],
          },
          {
            heading: 'Career paths, stated honestly',
            blocks: [
              {
                type: 'p',
                text: 'Practising psychology is a regulated activity, and the conditions of practice are set by the country where you will work — not by the university that trained you. A Russian psychology degree does not automatically open a right to practise elsewhere.',
              },
              {
                type: 'p',
                text: 'Before applying, research two points in the country where you intend to practise: the procedure for recognition of a foreign diploma, and the registration or authorisation required to exercise the profession. Both answers come from the competent authorities of that country.',
              },
              {
                type: 'strong',
                text: 'We promise no professional outcome, in psychology or in any other field: that would be a promise we do not control.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'The list of questions to put to each university',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Do you offer a psychology programme, and under what official title?',
                  'Which faculty awards it, and which diploma is obtained at the end?',
                  'Is the programme accredited, and until what date?',
                  'What is the actual language of instruction, from the first year to the last?',
                  'What is the official duration, and is a preparatory year required?',
                  'Are international students admitted to this programme specifically?',
                  'Is a place in university housing available for this programme?',
                  'What is the annual tuition for the year concerned?',
                ],
              },
              {
                type: 'p',
                text: 'Eight questions, one written answer to keep. That is what separates a solid plan from a hunch.',
              },
            ],
          },
          {
            heading: 'How we handle this kind of request',
            blocks: [
              {
                type: 'p',
                text: 'We do not claim to hold documentation on psychology as detailed as what we hold on medicine, dentistry, pharmacy, engineering and economics. What we do is put the questions to the institutions on your behalf and pass their written answers to you, without rephrasing or embellishing them.',
              },
              {
                type: 'p',
                text: 'If no institution confirms a programme matching your plan, we say so. Redirecting you towards a genuinely available neighbouring field is better than filing on an assumption.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can an international student study psychology in Russia?',
            answer:
              'Psychology is taught in the Russian university system, but whether a given programme is open to international students is verified institution by institution. Ask the admissions office of each target university in writing.',
          },
          {
            question: 'Do I need Russian to follow a psychology programme?',
            answer:
              'If the programme is taught in Russian, yes, and at a demanding level: the discipline rests entirely on language. The preparatory year is then a decisive stage, not an administrative formality.',
          },
          {
            question: 'Does a Russian psychology degree allow practice in Tunisia?',
            answer:
              'The conditions for practising a profession are set by the country where you work, and recognition of a foreign diploma follows its own procedure. Check with the competent Tunisian authorities before committing, because this answer depends neither on us nor on the Russian university.',
          },
          {
            question: 'Is psychology among the fields you document?',
            answer:
              'No. Our five fields documented in detail are general medicine, dentistry, pharmacy, engineering and technology, and economics and business. For psychology we question the institutions and pass on their written answers.',
          },
        ],
        keywords: [
          'study psychology in russia',
          'psychology russian university',
          'faculty of psychology russia',
          'clinical psychology russia international student',
          'russian psychology degree recognition',
          'russian university fields psychology',
        ],
      },
      ar: {
        title: 'دراسة علم النفس في روسيا: ما يجب التحقّق منه قبل الترشّح | RusStudy',
        description:
          'علم النفس من التخصّصات المدرَّسة في الجامعات الروسية، لكن العرض يتفاوت كثيرًا بين المؤسسات. بنية المسارات، ولغة التدريس، والآفاق المهنية، والتحقّقات التي لا يمكن تجاوزها.',
        h1: 'دراسة علم النفس في روسيا: ما يجب التحقّق منه قبل الترشّح',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'علم النفس ليس من تخصّصاتنا الخمسة الموثَّقة. لذلك ننشر ما يمكن التحقّق منه، وبالأساس قائمة الأسئلة التي تُطرح على كل جامعة قبل الترشّح.',
        intro:
          'تصلنا بانتظام طلبات حول علم النفس، وعلينا أن نكون صريحين: ليس من التخصّصات الخمسة التي بنينا لها توثيقًا مفصّلًا مؤسسةً مؤسسةً. ولذلك يشرح هذا المقال كيف يُنظَّم هذا التخصّص في المنظومة الروسية، وما التحقّقات التي يجب القيام بها — بنفسك أو معنا — قبل فتح أي ملف.',
        sections: [
          {
            heading: 'تخصّص قائم، لكن عرض غير متكافئ',
            blocks: [
              {
                type: 'p',
                text: 'علم النفس تخصّص جامعي راسخ في روسيا، يُدرَّس في كلّيات مخصّصة. لكنه، خلافًا للطب أو الهندسة، لا تقدّمه كل المؤسسات، ومضمونه يتفاوت كثيرًا حسب توجّه الكلّية.',
              },
              {
                type: 'strong',
                text: 'لا نؤكّد هنا أن جامعة معيّنة توفّر هذا المسار: وهذا بالضبط ما يجب أن تحصل على تأكيده كتابيًّا، جامعةً جامعةً، قبل أي ترشّح.',
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'ثلاث توجّهات مختلفة جدًّا وراء كلمة واحدة',
            blocks: [
              {
                type: 'p',
                text: 'كلمة «علم النفس» تشمل مسارات لا تؤدّي إلى المهنة نفسها. قبل الاختيار، حدّد المسار الذي تستهدفه، لأنه يحدّد الجامعة، وفي بعض الحالات الكلّية المستقبِلة.',
              },
              {
                type: 'ul',
                items: [
                  'علم النفس العام والتجريبي، الموجَّه نحو البحث وعلوم السلوك، وغالبًا ما يكون ملحقًا بكلّية لعلم النفس أو للعلوم الإنسانية.',
                  'علم النفس العيادي، الموجَّه نحو التقييم والتكفّل، وقد يُدرَج في إطار أقرب إلى العلوم الطبية.',
                  'علوم النفس التطبيقية — التربية، والعمل، والتنظيمات، والرياضة — وتُلحق حسب المؤسسات بكلّيات علوم التربية أو الاقتصاد أو علوم الرياضة.',
                ],
              },
              {
                type: 'p',
                text: 'اطرح السؤال بهذه الصيغة: ما العنوان الرسمي للبرنامج، وأي كلّية تسلّمه؟',
              },
            ],
          },
          {
            heading: 'لغة التدريس: النقطة الأكثر حسمًا',
            blocks: [
              {
                type: 'p',
                text: 'علم النفس تخصّص قائم على اللغة. فخلافًا لموادّ يمرّ جزء من الاستدلال فيها عبر المعادلات أو الرسوم، هنا يقوم كل شيء على الفرق الدقيق: مقابلة، استبيان، تقرير عيادي.',
              },
              {
                type: 'p',
                text: 'ومن ثمّ فإن مسار علم نفس بالروسية يقتضي مستوى لغويًّا صلبًا فعلًا، يتجاوز ما يكفي في تخصّص تقني. والسنة التحضيرية في هذه الحالة ليست شكليّة: إنها أساس المسار.',
              },
              {
                type: 'p',
                text: 'وإذا عرضت مؤسسة مسارًا بالإنجليزية، تحقّق من ذلك برنامجًا برنامجًا: وجود دروس بالإنجليزية في جامعة لا يعني أن علم النفس منها.',
              },
              { type: 'related', slug: 'programmes-en-anglais-universites-russes' },
            ],
          },
          {
            heading: 'مسألة الآفاق المهنية، بصراحة',
            blocks: [
              {
                type: 'p',
                text: 'ممارسة علم النفس نشاط منظَّم، وشروط الممارسة يحدّدها البلد الذي ستعمل فيه، لا الجامعة التي درّبتك. والشهادة الروسية في علم النفس لا تمنح تلقائيًّا حق الممارسة في مكان آخر.',
              },
              {
                type: 'p',
                text: 'قبل الترشّح، اطّلع على أمرين في البلد الذي تنوي العمل فيه: إجراء الاعتراف بالشهادة الأجنبية، وشروط التسجيل أو الترخيص اللازمة لممارسة المهنة. والجوابان يأتيان من السلطات المختصّة في ذلك البلد.',
              },
              {
                type: 'strong',
                text: 'لا نَعِد بأي آفاق مهنية، في علم النفس ولا في أي تخصّص آخر: فذلك وعد لا نتحكّم فيه.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'قائمة الأسئلة لكل جامعة',
            blocks: [
              {
                type: 'ul',
                items: [
                  'هل توفّرون مسارًا في علم النفس، وبأي عنوان رسمي؟',
                  'أي كلّية تسلّمه، وما الشهادة المتحصَّل عليها في النهاية؟',
                  'هل هذا البرنامج معتمد، وإلى أي تاريخ؟',
                  'ما لغة التدريس الفعلية، من أول سنة إلى آخرها؟',
                  'ما المدة الرسمية، وهل تُشترط سنة تحضيرية؟',
                  'هل يُقبل الطلبة الدوليون في هذا البرنامج بالتحديد؟',
                  'هل يتوفّر مكان في الإقامة الجامعية لهذا المسار؟',
                  'ما معاليم الدراسة السنوية للسنة المستهدفة؟',
                ],
              },
              {
                type: 'p',
                text: 'ثمانية أسئلة، وجواب مكتوب واحد تحفظه. هذا ما يفصل مشروعًا صلبًا عن حدس.',
              },
            ],
          },
          {
            heading: 'كيف نتعامل مع هذا النوع من الطلبات',
            blocks: [
              {
                type: 'p',
                text: 'لا ندّعي أننا نملك في علم النفس توثيقًا بنفس تفصيل ما نملكه في الطب وطب الأسنان والصيدلة والهندسة والاقتصاد. ما نقوم به هو سؤال المؤسسات مكانك ونقل أجوبتها المكتوبة إليك، دون إعادة صياغتها ولا تجميلها.',
              },
              {
                type: 'p',
                text: 'وإذا لم تؤكّد أي مؤسسة وجود مسار يطابق مشروعك، نقول لك ذلك. فالتوجيه إلى تخصّص قريب متاح فعلًا أفضل من ملف يُودَع على افتراض.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكن للطالب الأجنبي دراسة علم النفس في روسيا؟',
            answer:
              'علم النفس يُدرَّس في المنظومة الجامعية الروسية، لكن انفتاح برنامج معيّن على الطلبة الدوليين يُتحقَّق منه مؤسسةً مؤسسةً. اطلب ذلك كتابيًّا من مصلحة القبول في كل جامعة مستهدفة.',
          },
          {
            question: 'هل يجب إتقان الروسية لمتابعة مسار في علم النفس؟',
            answer:
              'إذا كان المسار بالروسية فنعم، وبمستوى عالي المتطلّبات: فالتخصّص قائم كلّيًّا على اللغة. والسنة التحضيرية في هذه الحالة مرحلة حاسمة لا إجراء إداري.',
          },
          {
            question: 'هل تتيح شهادة روسية في علم النفس الممارسة في تونس؟',
            answer:
              'شروط ممارسة أي مهنة يحدّدها بلد العمل، والاعتراف بشهادة أجنبية يتبع إجراءً خاصًّا. استفسر من السلطات التونسية المختصّة قبل أي التزام، لأن هذا الجواب لا يتوقّف علينا ولا على الجامعة الروسية.',
          },
          {
            question: 'هل علم النفس من التخصّصات التي توثّقونها؟',
            answer:
              'لا. تخصّصاتنا الخمسة الموثَّقة بالتفصيل هي الطب العام، وطب الأسنان، والصيدلة، والهندسة والتكنولوجيا، والاقتصاد والتجارة. أما علم النفس فنسأل المؤسسات وننقل أجوبتها المكتوبة.',
          },
        ],
        keywords: [
          'دراسة علم النفس في روسيا',
          'علم النفس جامعة روسية',
          'كلّية علم النفس روسيا',
          'علم النفس العيادي روسيا طالب أجنبي',
          'الاعتراف بشهادة علم النفس الروسية',
          'تخصّصات الجامعات الروسية علم النفس',
        ],
      },
      ru: {
        title: 'Психология в России: что проверить до подачи документов | RusStudy',
        description:
          'Психология преподаётся в российских вузах, но предложение сильно различается между учреждениями. Структура программ, язык обучения, профессиональные перспективы и обязательные проверки.',
        h1: 'Психология в России: что проверить до подачи документов',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'Психология не входит в пять наших документированных направлений. Поэтому мы публикуем то, что проверяемо, и прежде всего список вопросов к каждому вузу.',
        intro:
          'К нам регулярно обращаются по психологии, и здесь нужна прямота: это не одно из пяти направлений, по которым у нас собрана подробная документация по каждому учреждению. Поэтому статья объясняет, как дисциплина устроена в российской системе и какие проверки нужно сделать — самостоятельно или вместе с нами — до открытия пакета документов.',
        sections: [
          {
            heading: 'Дисциплина есть, но предложение неравномерно',
            blocks: [
              {
                type: 'p',
                text: 'Психология — устоявшаяся университетская дисциплина в России, которую читают на профильных факультетах. Но в отличие от медицины или инженерии, её предлагают не все вузы, и содержание заметно зависит от направленности факультета.',
              },
              {
                type: 'strong',
                text: 'Мы не утверждаем здесь, что конкретный вуз предлагает такую программу: именно это и нужно подтвердить письменно, по каждому вузу, до подачи документов.',
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'Три очень разных направления за одним словом',
            blocks: [
              {
                type: 'p',
                text: '«Психология» объединяет программы, которые ведут к разным профессиям. До выбора определите, какая из них ваша: от этого зависят и вуз, и в отдельных случаях принимающий факультет.',
              },
              {
                type: 'ul',
                items: [
                  'Общая и экспериментальная психология — исследовательская, ориентированная на науку о поведении, обычно при факультете психологии или гуманитарных наук.',
                  'Клиническая психология — ориентированная на оценку и помощь, может находиться в среде, более близкой к медицинским наукам.',
                  'Прикладные направления — образование, труд, организации, спорт — относятся, в зависимости от вуза, к факультетам педагогики, экономики или спортивных наук.',
                ],
              },
              {
                type: 'p',
                text: 'Задавайте вопрос именно так: каково официальное название программы и какой факультет её реализует?',
              },
            ],
          },
          {
            heading: 'Язык обучения: самый решающий пункт',
            blocks: [
              {
                type: 'p',
                text: 'Психология — предмет, целиком живущий в языке. В отличие от дисциплин, где часть рассуждения идёт через формулы и схемы, здесь всё держится на оттенках: беседа, опросник, заключение.',
              },
              {
                type: 'p',
                text: 'Поэтому программа психологии на русском языке требует действительно прочного языкового уровня — выше того, что хватило бы на техническом направлении. Подготовительный год здесь не формальность, а основа программы.',
              },
              {
                type: 'p',
                text: 'Если вуз предлагает англоязычную программу, проверяйте это по конкретной программе: наличие курсов на английском в вузе не означает, что психология среди них.',
              },
              { type: 'related', slug: 'programmes-en-anglais-universites-russes' },
            ],
          },
          {
            heading: 'О перспективах — честно',
            blocks: [
              {
                type: 'p',
                text: 'Практика психолога — регулируемая деятельность, и условия практики устанавливает страна, где вы будете работать, а не вуз, который вас обучил. Российский диплом психолога не даёт автоматического права работать в другом государстве.',
              },
              {
                type: 'p',
                text: 'До подачи документов изучите два пункта в стране, где собираетесь работать: процедуру признания иностранного диплома и условия регистрации или разрешения на профессию. Оба ответа дают компетентные органы этой страны.',
              },
              {
                type: 'strong',
                text: 'Мы не обещаем никакого профессионального результата — ни в психологии, ни в любом другом направлении: это обещание было бы вне нашего контроля.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Список вопросов к каждому вузу',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Есть ли у вас программа по психологии и под каким официальным названием?',
                  'Какой факультет её реализует и какой диплом выдаётся в конце?',
                  'Аккредитована ли программа и до какой даты?',
                  'Каков фактический язык обучения с первого до последнего курса?',
                  'Какова официальная продолжительность и требуется ли подготовительный год?',
                  'Принимаются ли иностранные студенты именно на эту программу?',
                  'Доступно ли место в общежитии для этой программы?',
                  'Какова стоимость обучения за нужный год?',
                ],
              },
              {
                type: 'p',
                text: 'Восемь вопросов и один письменный ответ, который стоит сохранить. Это и отличает прочный план от догадки.',
              },
            ],
          },
          {
            heading: 'Как мы работаем с такими запросами',
            blocks: [
              {
                type: 'p',
                text: 'Мы не утверждаем, что располагаем по психологии документацией такой же подробной, как по лечебному делу, стоматологии, фармации, инженерии и экономике. Мы задаём вопросы учреждениям вместо вас и передаём их письменные ответы, не переформулируя и не украшая.',
              },
              {
                type: 'p',
                text: 'Если ни одно учреждение не подтверждает программу, подходящую вашему плану, мы так и говорим. Направить вас к действительно доступному смежному направлению лучше, чем подать документы на основании предположения.',
              },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Может ли иностранный студент учиться психологии в России?',
            answer:
              'Психология преподаётся в российской университетской системе, но открыта ли конкретная программа для иностранных студентов — проверяется по каждому вузу. Запросите это письменно в приёмной комиссии каждого выбранного вуза.',
          },
          {
            question: 'Нужен ли русский язык для программы по психологии?',
            answer:
              'Если программа на русском — да, и на высоком уровне: дисциплина полностью опирается на язык. Подготовительный год в этом случае решающий этап, а не административная формальность.',
          },
          {
            question: 'Позволяет ли российский диплом психолога работать в Тунисе?',
            answer:
              'Условия практики устанавливает страна работы, а признание иностранного диплома идёт по собственной процедуре. Уточните в компетентных тунисских органах до принятия решения: этот ответ не зависит ни от нас, ни от российского вуза.',
          },
          {
            question: 'Входит ли психология в направления, которые вы документируете?',
            answer:
              'Нет. Пять подробно документированных направлений — лечебное дело, стоматология, фармация, инженерия и технологии, экономика и коммерция. По психологии мы обращаемся к учреждениям и передаём их письменные ответы.',
          },
        ],
        keywords: [
          'учёба психологии в России',
          'психология российский вуз',
          'факультет психологии в России',
          'клиническая психология иностранный студент',
          'признание российского диплома психолога',
          'направления российских вузов психология',
        ],
      },
    },
  },
];
