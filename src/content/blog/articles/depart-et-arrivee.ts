import type { BlogArticleEntry } from '../copy';

/*
 * Série d'hiver : préparer le départ et réussir les premiers mois, décembre.
 *
 * Ces quatre articles prennent le relais après l'obtention du visa. Ils ne
 * reprennent pas le contenu des guides pratiques (/guides) : le logement,
 * l'assurance et la vie quotidienne y sont traités en référence, tandis
 * qu'ici on suit la chronologie du départ — préparer, emporter, budgéter,
 * réussir le premier semestre.
 *
 * Les montants cités viennent de /cout-des-etudes et des fiches filières :
 * aucun chiffre nouveau n'est introduit.
 */
export const DEPART_ARRIVEE_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'preparer-son-depart-hiver-russie',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Préparer son départ pour la Russie en hiver | RusStudy',
        description:
          "Arriver en Russie en février : ce qu'il faut régler avant de partir, ce qui s'achète sur place, et comment aborder le froid quand on vient de Tunisie.",
        h1: 'Préparer un départ en hiver pour la Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Arriver en février demande une préparation différente d'une rentrée de septembre. Ce qui change vraiment.",
        intro:
          "Partir en février, c'est arriver en plein hiver russe, sans la transition douce d'une rentrée de septembre. Ce n'est pas un problème en soi — les bâtiments sont chauffés efficacement et les étudiants s'adaptent en quelques semaines — mais cela demande une préparation différente.",
        sections: [
          {
            heading: 'À régler avant de partir',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Vérifier la validité du visa et la période couverte par la lettre d'invitation",
                  "Souscrire l'assurance médicale obligatoire, environ 180 € par an",
                  'Prévoir de quoi tenir deux semaines avant l’ouverture du compte bancaire russe',
                  'Emporter les ordonnances traduites de tout traitement suivi au long cours',
                  'Confirmer avec votre tuteur l’heure et le lieu exacts de l’accueil à l’aéroport',
                ],
              },
            ],
          },
          {
            heading: 'Le froid, concrètement',
            blocks: [
              {
                type: 'p',
                text: "C'est l'appréhension numéro un, et elle se dissipe vite. Les résidences, les transports et les universités sont chauffés à un niveau qui surprend souvent les nouveaux arrivants : le froid se vit dehors, pas à l'intérieur.",
              },
              {
                type: 'strong',
                text: "N'achetez pas votre équipement d'hiver en Tunisie. Un manteau réellement adapté, des bottes et des sous-couches thermiques se trouvent sur place, mieux conçus et souvent moins chers.",
              },
              {
                type: 'p',
                text: "Prévoyez simplement de quoi tenir le trajet et les tout premiers jours, puis équipez-vous sur place avec votre tuteur, qui sait où acheter sans se tromper.",
              },
            ],
          },
          {
            heading: 'Les premiers jours sur place',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Installation en résidence et enregistrement migratoire, pris en charge par l'établissement",
                  'Ouverture du compte bancaire et obtention d’une carte SIM locale',
                  'Visite médicale organisée par l’université',
                  'Inscription administrative définitive et remise de la carte d’étudiant',
                ],
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'Fait-il vraiment si froid ?',
            answer:
              "L'hiver russe est franc, mais tous les espaces intérieurs sont fortement chauffés. La majorité des étudiants tunisiens s'y habitue en quelques semaines, à condition d'être correctement équipé — ce qui se règle sur place.",
          },
          {
            question: 'Vaut-il mieux arriver en février ou attendre septembre ?',
            answer:
              "Février fait gagner une année complète sur l'entrée en spécialité. Le froid n'est pas une raison suffisante pour renoncer à ce gain, d'autant que l'arrivée est encadrée par un tuteur.",
          },
          {
            question: 'Combien d’argent prévoir pour les premiers jours ?',
            answer:
              "De quoi couvrir deux semaines de dépenses courantes, le temps que le compte bancaire russe soit opérationnel. Les achats d'équipement d'hiver s'ajoutent à cela.",
          },
        ],
        keywords: [
          'partir en Russie en hiver',
          'arriver en Russie février',
          'préparer départ Russie',
          'froid Russie étudiant tunisien',
          'équipement hiver Russie',
          'premiers jours en Russie',
        ],
      },
      en: {
        title: 'Preparing a Winter Departure for Russia | RusStudy',
        description:
          'Arriving in Russia in February: what to settle before leaving, what to buy on site, and how to approach the cold when coming from Tunisia.',
        h1: 'Preparing a winter departure for Russia',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Arriving in February needs different preparation from a September start. What actually changes.',
        intro:
          'Leaving in February means arriving in the depth of the Russian winter, without the gentle transition of a September start. That is not a problem in itself — buildings are heated effectively and students adapt within weeks — but it calls for different preparation.',
        sections: [
          {
            heading: 'To settle before leaving',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Check the visa validity and the period covered by the invitation letter',
                  'Take out the mandatory medical insurance, around €180 a year',
                  'Bring enough to cover two weeks before the Russian bank account opens',
                  'Carry translated prescriptions for any long-term treatment',
                  'Confirm with your tutor the exact time and place of the airport pickup',
                ],
              },
            ],
          },
          {
            heading: 'The cold, concretely',
            blocks: [
              {
                type: 'p',
                text: 'This is the number one worry, and it fades quickly. Residences, transport and universities are heated to a level that often surprises newcomers: the cold is lived outdoors, not inside.',
              },
              {
                type: 'strong',
                text: 'Do not buy your winter kit in Tunisia. A genuinely suitable coat, boots and thermal base layers are found on site, better designed and often cheaper.',
              },
              {
                type: 'p',
                text: 'Simply bring enough for the journey and the very first days, then equip yourself locally with your tutor, who knows where to buy without mistakes.',
              },
            ],
          },
          {
            heading: 'The first days on site',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Moving into the residence and migration registration, handled by the institution',
                  'Opening the bank account and getting a local SIM card',
                  'Medical check organised by the university',
                  'Final administrative enrolment and student card issue',
                ],
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is it really that cold?',
            answer:
              'The Russian winter is sharp, but all indoor spaces are strongly heated. Most Tunisian students adapt within weeks, provided they are properly equipped — which is sorted on site.',
          },
          {
            question: 'Better to arrive in February or wait for September?',
            answer:
              'February saves a full year on entering the specialty. The cold is not sufficient reason to give up that gain, especially as the arrival is supervised by a tutor.',
          },
          {
            question: 'How much money for the first days?',
            answer:
              'Enough to cover two weeks of daily expenses, while the Russian bank account becomes operational. Winter kit purchases come on top of that.',
          },
        ],
        keywords: [
          'leaving for Russia in winter',
          'arriving in Russia February',
          'prepare departure Russia',
          'Russian cold international student',
          'winter kit Russia',
          'first days in Russia',
        ],
      },
      ar: {
        title: 'تحضير السفر إلى روسيا في الشتاء | RusStudy',
        description:
          'الوصول إلى روسيا في فيفري: ما يجب إتمامه قبل السفر، وما يُشترى في عين المكان، وكيف تتعامل مع البرد قادمًا من تونس.',
        h1: 'تحضير سفر شتوي إلى روسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'الوصول في فيفري يتطلب تحضيرًا مختلفًا عن دخول سبتمبر. ما الذي يتغير فعلاً.',
        intro:
          'السفر في فيفري يعني الوصول في عز الشتاء الروسي، دون الانتقال التدريجي الذي يوفره دخول سبتمبر. وهذا ليس مشكلة في حد ذاته — فالمباني مدفّأة بفعالية والطلبة يتأقلمون في أسابيع — لكنه يتطلب تحضيرًا مختلفًا.',
        sections: [
          {
            heading: 'ما يجب إتمامه قبل السفر',
            blocks: [
              {
                type: 'ul',
                items: [
                  'التحقق من صلاحية التأشيرة والفترة التي تغطيها رسالة الدعوة',
                  'اكتتاب التأمين الصحي الإجباري، حوالي 180 € سنويًا',
                  'تجهيز ما يكفي لأسبوعين قبل فتح الحساب البنكي الروسي',
                  'حمل الوصفات المترجمة لأي علاج طويل المدى',
                  'تأكيد توقيت ومكان الاستقبال في المطار مع مرشدك',
                ],
              },
            ],
          },
          {
            heading: 'البرد بشكل ملموس',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو الهاجس الأول وهو يتبدد سريعًا. الإقامات والنقل والجامعات مدفّأة بمستوى يفاجئ الوافدين الجدد غالبًا: البرد يُعاش في الخارج لا في الداخل.',
              },
              {
                type: 'strong',
                text: 'لا تشترِ تجهيزات الشتاء من تونس. معطف مناسب فعلاً وأحذية وطبقات حرارية تجدها في عين المكان، بتصميم أفضل وبسعر أقل غالبًا.',
              },
              {
                type: 'p',
                text: 'اكتفِ بما يغطي الرحلة والأيام الأولى، ثم تجهّز في عين المكان مع مرشدك الذي يعرف أين يُشترى دون خطأ.',
              },
            ],
          },
          {
            heading: 'الأيام الأولى في عين المكان',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الاستقرار في الإقامة والتسجيل لدى الهجرة، وتتكفل به المؤسسة',
                  'فتح الحساب البنكي والحصول على شريحة هاتف محلية',
                  'الفحص الطبي الذي تنظمه الجامعة',
                  'الترسيم الإداري النهائي وتسليم بطاقة الطالب',
                ],
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل البرد شديد إلى هذا الحد؟',
            answer:
              'الشتاء الروسي قارس، لكن كل الفضاءات الداخلية مدفّأة بقوة. أغلب الطلبة التونسيين يتأقلمون في أسابيع بشرط التجهّز الصحيح، وهو ما يُحل في عين المكان.',
          },
          {
            question: 'الأفضل الوصول في فيفري أم انتظار سبتمبر؟',
            answer:
              'فيفري يربح سنة كاملة في دخول الاختصاص. والبرد ليس سببًا كافيًا للتخلي عن هذا الربح، خاصة أن الوصول مؤطَّر بمرشد.',
          },
          {
            question: 'كم من المال يجب توقّعه للأيام الأولى؟',
            answer:
              'ما يغطي أسبوعين من المصاريف اليومية ريثما يصبح الحساب البنكي الروسي جاهزًا. وتُضاف إلى ذلك مشتريات تجهيزات الشتاء.',
          },
        ],
        keywords: [
          'السفر إلى روسيا في الشتاء',
          'الوصول إلى روسيا في فيفري',
          'تحضير السفر إلى روسيا',
          'البرد في روسيا للطلبة',
          'تجهيزات الشتاء',
          'الأيام الأولى في روسيا',
        ],
      },
      ru: {
        title: 'Подготовка к зимнему отъезду в Россию | RusStudy',
        description:
          'Приезд в Россию в феврале: что уладить до отъезда, что купить на месте и как отнестись к холоду, приехав из Туниса.',
        h1: 'Подготовка к зимнему отъезду в Россию',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Приезд в феврале требует иной подготовки, чем сентябрьский старт. Что меняется на деле.',
        intro:
          'Отъезд в феврале означает приезд в разгар русской зимы, без мягкого перехода сентябрьского старта. Само по себе это не проблема — здания хорошо отапливаются, студенты привыкают за недели — но подготовка нужна другая.',
        sections: [
          {
            heading: 'Уладить до отъезда',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Проверить срок визы и период, покрытый приглашением',
                  'Оформить обязательную медицинскую страховку, около 180 € в год',
                  'Взять запас средств на две недели до открытия российского счёта',
                  'Взять переведённые рецепты на любое длительное лечение',
                  'Уточнить у куратора точное время и место встречи в аэропорту',
                ],
              },
            ],
          },
          {
            heading: 'Холод без мифов',
            blocks: [
              {
                type: 'p',
                text: 'Это главный страх, и он быстро проходит. Общежития, транспорт и вузы отапливаются так, что это часто удивляет новичков: холод переживается на улице, а не внутри.',
              },
              {
                type: 'strong',
                text: 'Не покупайте зимнюю экипировку в Тунисе. Действительно подходящее пальто, ботинки и термобельё есть на месте — лучше продуманные и часто дешевле.',
              },
              {
                type: 'p',
                text: 'Возьмите лишь то, что покроет дорогу и первые дни, а затем экипируйтесь на месте с куратором, который знает, где покупать без ошибок.',
              },
            ],
          },
          {
            heading: 'Первые дни на месте',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Заселение в общежитие и миграционный учёт, оформляемые вузом',
                  'Открытие счёта и получение местной SIM-карты',
                  'Медосмотр, организуемый университетом',
                  'Окончательное зачисление и выдача студенческого билета',
                ],
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'Там действительно так холодно?',
            answer:
              'Русская зима сурова, но все помещения сильно отапливаются. Большинство тунисских студентов привыкает за несколько недель при правильной экипировке, которая покупается на месте.',
          },
          {
            question: 'Лучше приехать в феврале или ждать сентября?',
            answer:
              'Февраль экономит целый год до поступления на специальность. Холод — недостаточная причина отказаться от этого, тем более что приезд сопровождает куратор.',
          },
          {
            question: 'Сколько денег нужно на первые дни?',
            answer:
              'Столько, чтобы покрыть две недели текущих расходов, пока российский счёт заработает. Покупка зимней экипировки идёт сверх этого.',
          },
        ],
        keywords: [
          'отъезд в Россию зимой',
          'приезд в Россию в феврале',
          'подготовка к отъезду',
          'русский холод для студента',
          'зимняя экипировка',
          'первые дни в России',
        ],
      },
    },
  },
  {
    slug: 'valise-depart-russie-checklist',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Que mettre dans sa valise pour partir étudier en Russie | RusStudy',
        description:
          "La liste de ce qu'il faut vraiment emporter, de ce qui s'achète moins cher sur place, et des documents à ne jamais mettre en soute.",
        h1: 'La valise du départ : ce qu’il faut vraiment emporter',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Les documents en cabine, l'équipement d'hiver sur place. La liste qui évite les erreurs coûteuses.",
        intro:
          "La règle est simple : ce qui est irremplaçable voyage avec vous en cabine, ce qui s'achète partout s'achète sur place. Payer un excédent de bagages pour des draps et de la vaisselle est l'erreur la plus fréquente — et la plus évitable.",
        sections: [
          {
            heading: 'En cabine, jamais en soute',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Passeport, visa et lettre d’invitation originale',
                  'Diplôme, relevés de notes et traductions assermentées, en originaux',
                  'Certificats médicaux et carnet de vaccination',
                  'Attestation d’assurance médicale',
                  'Ordonnances traduites des traitements suivis',
                  'Une copie numérique de tous ces documents, accessible depuis votre téléphone',
                ],
              },
              {
                type: 'strong',
                text: 'Un bagage en soute peut être retardé. Un dossier administratif perdu ou retardé bloque votre inscription définitive.',
              },
            ],
          },
          {
            heading: 'Ce qui vaut la peine d’être emporté',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Des vêtements pour le trajet et les premiers jours, sans plus',
                  'Vos médicaments habituels en quantité suffisante pour les premières semaines',
                  'Un adaptateur et vos chargeurs',
                  'Quelques produits de Tunisie qui vous manqueront — en petite quantité',
                  'De quoi couvrir deux semaines de dépenses avant l’ouverture du compte',
                ],
              },
            ],
          },
          {
            heading: 'Ce qu’il vaut mieux acheter sur place',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Le manteau d’hiver, les bottes et les sous-couches thermiques : mieux conçus et souvent moins chers en Russie',
                  'Le linge de lit, les serviettes et la vaisselle',
                  'Les produits d’entretien et d’hygiène du quotidien',
                  'Les fournitures scolaires',
                ],
              },
              {
                type: 'p',
                text: "Le calcul est simple : le coût d'un bagage supplémentaire dépasse presque toujours celui de racheter ces articles sur place.",
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Faut-il emporter son manteau d’hiver de Tunisie ?',
            answer:
              "Non. Les manteaux vendus en Tunisie ne sont pas conçus pour l'hiver russe. Emportez de quoi tenir le trajet et achetez sur place, avec l'aide de votre tuteur.",
          },
          {
            question: 'Combien de bagages prévoir ?',
            answer:
              "Un bagage en soute et un bagage cabine suffisent dans la grande majorité des cas, si vous appliquez la règle d'acheter le volumineux sur place.",
          },
          {
            question: 'Que faire des originaux de mes diplômes ?',
            answer:
              'Ils voyagent en cabine, jamais en soute, accompagnés de copies numériques sur votre téléphone. Ils seront demandés pour l’inscription définitive.',
          },
        ],
        keywords: [
          'valise départ Russie',
          'que emporter études Russie',
          'checklist départ étudiant',
          'bagages Russie étudiant',
          'documents à emporter Russie',
          'préparer sa valise étranger',
        ],
      },
      en: {
        title: 'What to Pack for Studying in Russia | RusStudy',
        description:
          'The list of what to genuinely bring, what is cheaper bought on site, and the documents that must never go in the hold.',
        h1: 'Packing for departure: what to genuinely bring',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Documents in the cabin, winter kit on site. The list that avoids expensive mistakes.',
        intro:
          'The rule is simple: what is irreplaceable travels with you in the cabin, what can be bought anywhere is bought on site. Paying excess baggage for bed linen and crockery is the most common mistake — and the most avoidable.',
        sections: [
          {
            heading: 'In the cabin, never in the hold',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Passport, visa and the original invitation letter',
                  'Diploma, transcripts and sworn translations, as originals',
                  'Medical certificates and vaccination record',
                  'Medical insurance certificate',
                  'Translated prescriptions for ongoing treatments',
                  'A digital copy of all these documents, reachable from your phone',
                ],
              },
              {
                type: 'strong',
                text: 'Hold luggage can be delayed. A lost or delayed administrative file blocks your final enrolment.',
              },
            ],
          },
          {
            heading: 'Worth bringing',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Clothes for the journey and the first days, no more',
                  'Your usual medication in sufficient quantity for the first weeks',
                  'An adapter and your chargers',
                  'A few products from Tunisia you will miss — in small quantity',
                  'Enough to cover two weeks of expenses before the account opens',
                ],
              },
            ],
          },
          {
            heading: 'Better bought on site',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The winter coat, boots and thermal base layers: better designed and often cheaper in Russia',
                  'Bed linen, towels and crockery',
                  'Everyday cleaning and hygiene products',
                  'Stationery and study supplies',
                ],
              },
              {
                type: 'p',
                text: 'The maths is simple: an extra bag almost always costs more than rebuying these items locally.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Should I bring a winter coat from Tunisia?',
            answer:
              'No. Coats sold in Tunisia are not designed for the Russian winter. Bring enough for the journey and buy on site with your tutor’s help.',
          },
          {
            question: 'How much luggage should I plan for?',
            answer:
              'One hold bag and one cabin bag are enough in the vast majority of cases, if you apply the rule of buying bulky items locally.',
          },
          {
            question: 'What about my original diplomas?',
            answer:
              'They travel in the cabin, never in the hold, along with digital copies on your phone. They will be requested for final enrolment.',
          },
        ],
        keywords: [
          'packing for Russia',
          'what to bring study Russia',
          'student departure checklist',
          'luggage Russia student',
          'documents to bring Russia',
          'packing list studying abroad',
        ],
      },
      ar: {
        title: 'ماذا تضع في حقيبتك للدراسة في روسيا | RusStudy',
        description:
          'قائمة ما يجب حمله فعلاً، وما يُشترى أرخص في عين المكان، والوثائق التي لا تُوضع أبدًا في العنبر.',
        h1: 'حقيبة السفر: ما يجب حمله فعلاً',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'الوثائق في المقصورة وتجهيزات الشتاء في عين المكان. القائمة التي تتفادى الأخطاء المكلفة.',
        intro:
          'القاعدة بسيطة: ما لا يُعوَّض يسافر معك في المقصورة، وما يُشترى في كل مكان يُشترى هناك. ودفع وزن إضافي من أجل أغطية وأوانٍ هو الخطأ الأكثر شيوعًا والأسهل تفاديًا.',
        sections: [
          {
            heading: 'في المقصورة لا في العنبر أبدًا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'جواز السفر والتأشيرة ورسالة الدعوة الأصلية',
                  'الشهادة وكشوف الأعداد والترجمات المحلّفة بالأصول',
                  'الشهادات الطبية ودفتر التلقيح',
                  'شهادة التأمين الصحي',
                  'الوصفات المترجمة للعلاجات المتبعة',
                  'نسخة رقمية من كل هذه الوثائق متاحة من هاتفك',
                ],
              },
              {
                type: 'strong',
                text: 'حقيبة العنبر قد تتأخر. أما ملف إداري ضائع أو متأخر فيعطل ترسيمك النهائي.',
              },
            ],
          },
          {
            heading: 'ما يستحق الحمل',
            blocks: [
              {
                type: 'ul',
                items: [
                  'ملابس للرحلة وللأيام الأولى، لا أكثر',
                  'أدويتك المعتادة بكمية تكفي الأسابيع الأولى',
                  'محوّل كهربائي وشواحنك',
                  'بعض منتجات تونس التي ستفتقدها، بكمية صغيرة',
                  'ما يغطي أسبوعين من المصاريف قبل فتح الحساب',
                ],
              },
            ],
          },
          {
            heading: 'ما يُفضَّل شراؤه في عين المكان',
            blocks: [
              {
                type: 'ul',
                items: [
                  'معطف الشتاء والأحذية والطبقات الحرارية: أفضل تصميمًا وأقل سعرًا غالبًا في روسيا',
                  'أغطية السرير والمناشف والأواني',
                  'منتجات التنظيف والنظافة اليومية',
                  'اللوازم الدراسية',
                ],
              },
              {
                type: 'p',
                text: 'الحساب بسيط: كلفة حقيبة إضافية تتجاوز دائمًا تقريبًا كلفة إعادة شراء هذه الأغراض هناك.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل أحمل معطف الشتاء من تونس؟',
            answer:
              'لا. المعاطف المباعة في تونس ليست مصممة للشتاء الروسي. احمل ما يكفي الرحلة واشترِ في عين المكان بمساعدة مرشدك.',
          },
          {
            question: 'كم حقيبة أتوقع؟',
            answer:
              'حقيبة عنبر وحقيبة مقصورة تكفيان في الغالبية العظمى من الحالات، إذا طبّقت قاعدة شراء الأغراض الكبيرة هناك.',
          },
          {
            question: 'ماذا أفعل بأصول شهاداتي؟',
            answer:
              'تسافر في المقصورة لا في العنبر أبدًا، مع نسخ رقمية في هاتفك. وستُطلب منك عند الترسيم النهائي.',
          },
        ],
        keywords: [
          'حقيبة السفر إلى روسيا',
          'ماذا أحمل للدراسة في روسيا',
          'قائمة تحضير السفر',
          'أمتعة الطالب',
          'وثائق يجب حملها',
          'تحضير الحقيبة للخارج',
        ],
      },
      ru: {
        title: 'Что взять с собой на учёбу в Россию | RusStudy',
        description:
          'Список того, что действительно стоит везти, что дешевле купить на месте, и документы, которые нельзя сдавать в багаж.',
        h1: 'Чемодан к отъезду: что действительно брать',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Документы в ручной клади, зимняя экипировка на месте. Список, который убережёт от дорогих ошибок.',
        intro:
          'Правило простое: незаменимое летит с вами в салоне, а то, что продаётся везде, покупается на месте. Платить за перевес ради постельного белья и посуды — самая частая и самая избегаемая ошибка.',
        sections: [
          {
            heading: 'В салоне, никогда в багаже',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Паспорт, виза и оригинал приглашения',
                  'Аттестат, выписки оценок и присяжные переводы — оригиналы',
                  'Медицинские справки и прививочный сертификат',
                  'Полис медицинской страховки',
                  'Переведённые рецепты на текущее лечение',
                  'Цифровые копии всех этих документов, доступные с телефона',
                ],
              },
              {
                type: 'strong',
                text: 'Багаж может задержаться. Потерянное или задержанное досье блокирует окончательное зачисление.',
              },
            ],
          },
          {
            heading: 'Что стоит взять',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Одежду на дорогу и первые дни, не больше',
                  'Привычные лекарства в количестве на первые недели',
                  'Переходник и зарядные устройства',
                  'Несколько продуктов из Туниса, по которым будете скучать — в малом количестве',
                  'Средства на две недели расходов до открытия счёта',
                ],
              },
            ],
          },
          {
            heading: 'Что лучше купить на месте',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Зимнее пальто, ботинки и термобельё: лучше продуманы и часто дешевле в России',
                  'Постельное бельё, полотенца и посуда',
                  'Бытовая химия и средства гигиены',
                  'Канцелярия и учебные принадлежности',
                ],
              },
              {
                type: 'p',
                text: 'Арифметика проста: дополнительное место багажа почти всегда дороже, чем купить эти вещи на месте.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Везти ли зимнее пальто из Туниса?',
            answer:
              'Нет. Пальто, продаваемые в Тунисе, не рассчитаны на русскую зиму. Возьмите на дорогу и купите на месте с помощью куратора.',
          },
          {
            question: 'Сколько багажа планировать?',
            answer:
              'В подавляющем большинстве случаев хватает одного места багажа и ручной клади, если соблюдать правило покупки объёмного на месте.',
          },
          {
            question: 'Как быть с оригиналами дипломов?',
            answer:
              'Они летят в салоне, никогда в багаже, вместе с цифровыми копиями в телефоне. Их запросят при окончательном зачислении.',
          },
        ],
        keywords: [
          'что взять в Россию',
          'сборы на учёбу за рубеж',
          'чек-лист отъезда студента',
          'багаж студента',
          'документы с собой',
          'список вещей за границу',
        ],
      },
    },
  },
  {
    slug: 'budget-familial-etudes-russie',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Planifier le budget familial pour des études en Russie | RusStudy',
        description:
          "Frais de scolarité, logement, vie courante, assurance et frais uniques : comment construire un budget sur toute la durée du cursus, sans mauvaise surprise.",
        h1: 'Planifier le budget familial sur toute la durée des études',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          'Cinq postes, une seule règle : rien ne doit être découvert après le départ. La méthode de calcul complète.',
        intro:
          "La question du budget se pose souvent en décembre, quand la famille se réunit et que la décision devient concrète. Le piège n'est pas le montant annuel — il est accessible — mais l'oubli d'un poste, qui transforme un budget tenable en tension permanente.",
        sections: [
          {
            heading: 'Les cinq postes à intégrer',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Frais de scolarité : de 2 200 à 3 500 € par an selon la filière, payés directement à l’université',
                  'Logement : de 30 à 90 € par mois en résidence universitaire selon la ville',
                  'Vie courante : de 140 à 260 € par mois, repas et transport compris',
                  'Assurance médicale obligatoire : environ 180 € par an, à renouveler chaque année',
                  'Frais uniques la première année : environ 900 € pour le visa, les traductions et le billet',
                ],
              },
              {
                type: 'strong',
                text: "Seul le dernier poste est ponctuel. Les quatre autres se répètent chaque année : c'est sur la durée totale du cursus qu'il faut raisonner.",
              },
            ],
          },
          {
            heading: 'Raisonner sur la durée du cursus',
            blocks: [
              {
                type: 'p',
                text: "Une médecine générale dure six ans, plus l'année préparatoire : le budget doit être projeté sur sept années, pas sur une. Pour le dentaire et la pharmacie, comptez cinq ans plus l'année préparatoire.",
              },
              {
                type: 'p',
                text: "Deux leviers réduisent nettement le total sans rien sacrifier : choisir une ville de région plutôt que Moscou, et rester en résidence universitaire plutôt qu'en appartement. L'écart se chiffre en milliers d'euros sur l'ensemble du cursus.",
              },
            ],
          },
          {
            heading: 'La comparaison qui tranche',
            blocks: [
              {
                type: 'p',
                text: "Avant de décider, posez côte à côte le coût annuel complet en Russie et celui d'une école privée tunisienne dans la même spécialité. Comparez des totaux comparables : frais de scolarité, hébergement et vie courante inclus des deux côtés.",
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Le budget augmente-t-il chaque année ?',
            answer:
              "Les frais de scolarité sont généralement stables sur la durée du cursus, mais l'assurance se renouvelle annuellement et le coût de la vie suit l'inflation locale. Prévoyez une marge plutôt qu'un calcul au plus juste.",
          },
          {
            question: 'Les billets d’avion sont-ils inclus ?',
            answer:
              'Non. Le billet aller figure dans les frais uniques de première année, mais les retours en Tunisie pendant les vacances sont à budgéter séparément.',
          },
          {
            question: 'Une bourse change-t-elle ce calcul ?',
            answer:
              "Le quota d'État couvre les frais de scolarité et donne accès au logement au tarif étudiant, avec une allocation mensuelle modeste. Les autres postes restent à votre charge : le budget familial reste nécessaire.",
          },
        ],
        keywords: [
          'budget études Russie',
          'coût total études Russie',
          'budget familial études étranger',
          'planifier financement études',
          'combien coûte étudier en Russie',
          'dépenses étudiant Russie',
        ],
      },
      en: {
        title: 'Planning the Family Budget for Studies in Russia | RusStudy',
        description:
          'Tuition, housing, daily living, insurance and one-off costs: how to build a budget across the whole programme, with no unpleasant surprises.',
        h1: 'Planning the family budget across the whole programme',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Five lines, one rule: nothing should be discovered after departure. The full calculation method.',
        intro:
          'The budget question usually comes up in December, when the family gathers and the decision becomes concrete. The trap is not the annual figure — it is affordable — but forgetting a line, which turns a workable budget into permanent strain.',
        sections: [
          {
            heading: 'The five lines to include',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Tuition: €2,200 to €3,500 a year depending on the programme, paid directly to the university',
                  'Housing: €30 to €90 a month in university residence depending on the city',
                  'Daily living: €140 to €260 a month, meals and transport included',
                  'Mandatory medical insurance: around €180 a year, renewed annually',
                  'One-off first-year costs: around €900 for visa, translations and flight',
                ],
              },
              {
                type: 'strong',
                text: 'Only the last line is one-off. The other four repeat every year: the reasoning must cover the whole programme.',
              },
            ],
          },
          {
            heading: 'Reasoning across the programme',
            blocks: [
              {
                type: 'p',
                text: 'General medicine runs six years, plus the preparatory year: the budget must be projected over seven years, not one. For dentistry and pharmacy, count five years plus the preparatory year.',
              },
              {
                type: 'p',
                text: 'Two levers cut the total significantly without sacrificing anything: choosing a regional city over Moscow, and staying in university housing rather than a flat. The gap runs into thousands of euros across the programme.',
              },
            ],
          },
          {
            heading: 'The comparison that settles it',
            blocks: [
              {
                type: 'p',
                text: 'Before deciding, put the full annual cost in Russia side by side with a Tunisian private school in the same specialty. Compare comparable totals: tuition, housing and daily living included on both sides.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Does the budget rise every year?',
            answer:
              'Tuition is generally stable across the programme, but insurance renews annually and living costs follow local inflation. Plan a margin rather than a calculation to the last euro.',
          },
          {
            question: 'Are flights included?',
            answer:
              'No. The outbound flight sits in the one-off first-year costs, but trips home during holidays must be budgeted separately.',
          },
          {
            question: 'Does a scholarship change this calculation?',
            answer:
              'The state quota covers tuition and gives access to housing at student rates, with a modest monthly allowance. The other lines remain yours: a family budget is still necessary.',
          },
        ],
        keywords: [
          'budget studying in Russia',
          'total cost studies Russia',
          'family budget study abroad',
          'planning study funding',
          'how much studying in Russia costs',
          'student expenses Russia',
        ],
      },
      ar: {
        title: 'تخطيط ميزانية الأسرة للدراسة في روسيا | RusStudy',
        description:
          'رسوم الدراسة والسكن والمعيشة والتأمين والمصاريف الوحيدة: كيف تبني ميزانية على كامل مدة التكوين دون مفاجآت.',
        h1: 'تخطيط ميزانية الأسرة على كامل مدة الدراسة',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'خمسة بنود وقاعدة واحدة: لا شيء يُكتشف بعد السفر. منهجية الحساب الكاملة.',
        intro:
          'يُطرح سؤال الميزانية غالبًا في ديسمبر، حين تجتمع العائلة ويصبح القرار ملموسًا. والفخ ليس المبلغ السنوي — فهو في المتناول — بل نسيان بند واحد يحوّل ميزانية ممكنة إلى ضغط دائم.',
        sections: [
          {
            heading: 'البنود الخمسة الواجب إدراجها',
            blocks: [
              {
                type: 'ul',
                items: [
                  'رسوم الدراسة: من 2200 إلى 3500 € سنويًا حسب الاختصاص، تُدفع مباشرة للجامعة',
                  'السكن: من 30 إلى 90 € شهريًا في الإقامة الجامعية حسب المدينة',
                  'المعيشة اليومية: من 140 إلى 260 € شهريًا بما فيها الأكل والنقل',
                  'التأمين الصحي الإجباري: حوالي 180 € سنويًا ويُجدَّد كل سنة',
                  'مصاريف وحيدة في السنة الأولى: حوالي 900 € للتأشيرة والترجمات والتذكرة',
                ],
              },
              {
                type: 'strong',
                text: 'البند الأخير وحده ظرفي. أما الأربعة الأخرى فتتكرر كل سنة: والتفكير يجب أن يشمل كامل مدة التكوين.',
              },
            ],
          },
          {
            heading: 'التفكير على كامل مدة التكوين',
            blocks: [
              {
                type: 'p',
                text: 'الطب العام يدوم ست سنوات إضافة إلى السنة التحضيرية: يجب إسقاط الميزانية على سبع سنوات لا على سنة. وفي طب الأسنان والصيدلة احسب خمس سنوات إضافة إلى السنة التحضيرية.',
              },
              {
                type: 'p',
                text: 'رافعتان تخفضان المجموع بوضوح دون التضحية بشيء: اختيار مدينة إقليمية بدل موسكو، والبقاء في الإقامة الجامعية بدل شقة. الفارق يُحسب بآلاف اليوروات على كامل التكوين.',
              },
            ],
          },
          {
            heading: 'المقارنة التي تحسم',
            blocks: [
              {
                type: 'p',
                text: 'قبل القرار، ضع جنبًا إلى جنب التكلفة السنوية الكاملة في روسيا وتكلفة مدرسة خاصة تونسية في نفس الاختصاص. قارن مجاميع قابلة للمقارنة: الرسوم والسكن والمعيشة مشمولة في الجانبين.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل ترتفع الميزانية كل سنة؟',
            answer:
              'رسوم الدراسة مستقرة عمومًا طيلة التكوين، لكن التأمين يُجدَّد سنويًا وتكلفة المعيشة تتبع التضخم المحلي. احسب هامشًا بدل حساب دقيق إلى آخر يورو.',
          },
          {
            question: 'هل تذاكر الطائرة مشمولة؟',
            answer:
              'لا. تذكرة الذهاب ضمن مصاريف السنة الأولى الوحيدة، أما العودة إلى تونس في العطل فتُحسب على حدة.',
          },
          {
            question: 'هل تغيّر المنحة هذا الحساب؟',
            answer:
              'حصة الدولة تغطي رسوم الدراسة وتتيح السكن بالتعريفة الطلابية مع منحة شهرية متواضعة. أما البنود الأخرى فتبقى على عاتقك: ميزانية الأسرة تبقى ضرورية.',
          },
        ],
        keywords: [
          'ميزانية الدراسة في روسيا',
          'التكلفة الإجمالية للدراسة',
          'ميزانية الأسرة للدراسة بالخارج',
          'تخطيط تمويل الدراسة',
          'كم تكلف الدراسة في روسيا',
          'مصاريف الطالب في روسيا',
        ],
      },
      ru: {
        title: 'Планирование семейного бюджета на учёбу в России | RusStudy',
        description:
          'Обучение, жильё, быт, страховка и разовые расходы: как построить бюджет на весь срок программы без неприятных сюрпризов.',
        h1: 'Планирование семейного бюджета на весь срок обучения',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Пять статей и одно правило: ничего не должно обнаружиться после отъезда. Полная методика расчёта.',
        intro:
          'Вопрос бюджета обычно встаёт в декабре, когда семья собирается и решение становится конкретным. Ловушка не в годовой сумме — она посильна — а в забытой статье, которая превращает посильный бюджет в постоянное напряжение.',
        sections: [
          {
            heading: 'Пять статей, которые нужно учесть',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Обучение: от 2 200 до 3 500 € в год в зависимости от направления, оплачивается вузу напрямую',
                  'Жильё: от 30 до 90 € в месяц в общежитии в зависимости от города',
                  'Быт: от 140 до 260 € в месяц с питанием и транспортом',
                  'Обязательная страховка: около 180 € в год с ежегодным продлением',
                  'Разовые расходы первого года: около 900 € на визу, переводы и билет',
                ],
              },
              {
                type: 'strong',
                text: 'Разовая только последняя статья. Остальные четыре повторяются ежегодно: считать нужно на весь срок программы.',
              },
            ],
          },
          {
            heading: 'Считать на весь срок обучения',
            blocks: [
              {
                type: 'p',
                text: 'Общая медицина длится шесть лет плюс подготовительный год: бюджет нужно проецировать на семь лет, а не на один. Для стоматологии и фармации считайте пять лет плюс подготовительный год.',
              },
              {
                type: 'p',
                text: 'Два рычага заметно снижают итог, ничем не жертвуя: выбрать региональный город вместо Москвы и жить в общежитии, а не снимать квартиру. Разница исчисляется тысячами евро за всю программу.',
              },
            ],
          },
          {
            heading: 'Сравнение, которое решает',
            blocks: [
              {
                type: 'p',
                text: 'Перед решением поставьте рядом полную годовую стоимость в России и стоимость тунисской частной школы по той же специальности. Сравнивайте сопоставимые суммы: с обучением, жильём и бытом с обеих сторон.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Растёт ли бюджет каждый год?',
            answer:
              'Стоимость обучения обычно стабильна весь срок, но страховка продлевается ежегодно, а быт следует местной инфляции. Закладывайте запас, а не расчёт до последнего евро.',
          },
          {
            question: 'Входят ли авиабилеты?',
            answer:
              'Нет. Билет туда входит в разовые расходы первого года, а поездки домой в каникулы бюджетируются отдельно.',
          },
          {
            question: 'Меняет ли стипендия этот расчёт?',
            answer:
              'Государственная квота покрывает обучение и даёт жильё по студенческому тарифу со скромной стипендией. Остальные статьи остаются за вами: семейный бюджет всё равно нужен.',
          },
        ],
        keywords: [
          'бюджет на учёбу в России',
          'полная стоимость обучения',
          'семейный бюджет учёбы за рубежом',
          'планирование финансирования учёбы',
          'сколько стоит учёба в России',
          'расходы студента',
        ],
      },
    },
  },
  {
    slug: 'reussir-premier-semestre-russie',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Réussir son premier semestre en Russie | RusStudy',
        description:
          "Rythme universitaire, examens oraux, langue, isolement : ce qui surprend le plus les nouveaux étudiants en Russie, et comment aborder le premier semestre.",
        h1: 'Réussir son premier semestre en Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Le premier semestre décide souvent du reste du cursus. Quatre réflexes qui font la différence.",
        intro:
          "Les étudiants qui décrochent ne le font presque jamais par manque de niveau : ils décrochent parce qu'ils n'ont pas signalé une difficulté à temps, ou parce qu'ils sont restés entre francophones. Le premier semestre pose des habitudes qui durent tout le cursus.",
        sections: [
          {
            heading: 'Ce qui surprend le plus',
            blocks: [
              {
                type: 'ul',
                items: [
                  "L'examen oral, format dominant en Russie : on tire un sujet et on l'expose devant l'enseignant",
                  'Le rythme soutenu et la présence en cours réellement suivie',
                  'Le vocabulaire scientifique, plus déstabilisant que la langue courante',
                  "La relation aux enseignants, plus formelle qu'en Tunisie",
                ],
              },
              {
                type: 'p',
                text: "L'examen oral surprend, mais il se travaille : c'est un format qui récompense la régularité plus que le bachotage de dernière minute.",
              },
            ],
          },
          {
            heading: 'Les quatre réflexes qui font la différence',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Ne restez pas entre francophones : ceux qui progressent le plus vivent en russe hors des cours dès les premières semaines',
                  'Travaillez le vocabulaire de spécialité en parallèle, sans attendre le second semestre',
                  'Utilisez les examens blancs proposés par la faculté : ils reproduisent le format réel',
                  'Signalez toute difficulté immédiatement à votre tuteur — un décrochage repéré en novembre se rattrape, en mai beaucoup moins',
                ],
              },
            ],
          },
          {
            heading: 'Gérer l’éloignement',
            blocks: [
              {
                type: 'p',
                text: "Le mal du pays est réel, surtout pendant le premier hiver. Deux choses aident concrètement : un contact régulier mais cadré avec la famille, et une intégration rapide dans la communauté étudiante tunisienne locale, présente dans chaque ville partenaire.",
              },
              {
                type: 'strong',
                text: "Se replier entièrement sur la communauté tunisienne est en revanche le meilleur moyen de ne jamais progresser en russe. L'équilibre compte.",
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Les examens sont-ils vraiment oraux ?',
            answer:
              "L'oral est le format dominant dans les universités russes : l'étudiant tire un sujet et l'expose devant l'enseignant. C'est déstabilisant au début, mais cela récompense le travail régulier.",
          },
          {
            question: 'Que faire en cas de difficulté en cours d’année ?',
            answer:
              "Le signaler immédiatement, à l'enseignant et à votre tuteur. Les universités disposent de dispositifs de rattrapage, mais ils ne s'enclenchent que si la difficulté est connue à temps.",
          },
          {
            question: 'Combien de temps pour être à l’aise en russe ?',
            answer:
              "L'année préparatoire amène au niveau requis pour suivre les cours. L'aisance réelle vient pendant la première année de spécialité, d'autant plus vite que vous vivez en russe hors des cours.",
          },
        ],
        keywords: [
          'premier semestre Russie',
          'examens oraux université russe',
          'réussir ses études en Russie',
          'adaptation étudiant étranger Russie',
          'rythme universitaire russe',
          'conseils étudiant Russie',
        ],
      },
      en: {
        title: 'Succeeding in Your First Semester in Russia | RusStudy',
        description:
          'Academic pace, oral exams, language, isolation: what surprises new students in Russia most, and how to approach the first semester.',
        h1: 'Succeeding in your first semester in Russia',
        publishedLabel: 'Published: September 2026',
        excerpt: 'The first semester often decides the rest of the programme. Four habits that make the difference.',
        intro:
          'Students who fall behind almost never do so for lack of ability: they fall behind because they did not flag a difficulty in time, or because they stayed among French speakers. The first semester sets habits that last the whole programme.',
        sections: [
          {
            heading: 'What surprises most',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The oral exam, the dominant format in Russia: you draw a topic and present it to the examiner',
                  'The sustained pace and genuinely tracked attendance',
                  'Scientific vocabulary, more destabilising than everyday language',
                  'The relationship with teachers, more formal than in Tunisia',
                ],
              },
              {
                type: 'p',
                text: 'The oral exam surprises, but it can be trained for: it is a format that rewards consistency over last-minute cramming.',
              },
            ],
          },
          {
            heading: 'The four habits that make the difference',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Do not stay among French speakers: those who progress most live in Russian outside class from the first weeks',
                  'Work on specialty vocabulary in parallel, without waiting for the second semester',
                  'Use the mock exams offered by the faculty: they reproduce the real format',
                  'Flag any difficulty to your tutor immediately — a slip caught in November can be made up, in May far less so',
                ],
              },
            ],
          },
          {
            heading: 'Handling distance',
            blocks: [
              {
                type: 'p',
                text: 'Homesickness is real, especially during the first winter. Two things help concretely: regular but structured contact with family, and quick integration into the local Tunisian student community, present in every partner city.',
              },
              {
                type: 'strong',
                text: 'Retreating entirely into the Tunisian community, however, is the surest way never to progress in Russian. Balance matters.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Are exams really oral?',
            answer:
              'Oral is the dominant format in Russian universities: the student draws a topic and presents it to the examiner. Destabilising at first, but it rewards steady work.',
          },
          {
            question: 'What to do if difficulties arise mid-year?',
            answer:
              'Flag them immediately, to the teacher and to your tutor. Universities have catch-up arrangements, but they only trigger if the difficulty is known in time.',
          },
          {
            question: 'How long to feel comfortable in Russian?',
            answer:
              'The preparatory year brings you to the level needed to follow classes. Real fluency comes during the first year of the specialty, faster if you live in Russian outside class.',
          },
        ],
        keywords: [
          'first semester Russia',
          'oral exams Russian university',
          'succeed studies in Russia',
          'international student adaptation Russia',
          'Russian academic pace',
          'student advice Russia',
        ],
      },
      ar: {
        title: 'النجاح في السداسي الأول في روسيا | RusStudy',
        description:
          'الإيقاع الجامعي والامتحانات الشفوية واللغة والعزلة: ما يفاجئ الطلبة الجدد في روسيا وكيف تتعامل مع السداسي الأول.',
        h1: 'النجاح في السداسي الأول في روسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'السداسي الأول يحدد غالبًا بقية التكوين. أربع عادات تصنع الفرق.',
        intro:
          'الطلبة الذين يتعثرون لا يتعثرون تقريبًا أبدًا بسبب ضعف المستوى: يتعثرون لأنهم لم يبلغوا عن صعوبة في وقتها، أو لأنهم بقوا بين الناطقين بالفرنسية. السداسي الأول يرسّخ عادات تدوم طيلة التكوين.',
        sections: [
          {
            heading: 'ما يفاجئ أكثر',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الامتحان الشفوي، وهو الصيغة السائدة في روسيا: تسحب موضوعًا وتعرضه أمام الأستاذ',
                  'الإيقاع المكثف والحضور المتابَع فعليًا',
                  'المصطلحات العلمية، وهي أكثر إرباكًا من اللغة اليومية',
                  'العلاقة بالأساتذة، وهي أكثر رسمية مما في تونس',
                ],
              },
              {
                type: 'p',
                text: 'الامتحان الشفوي يفاجئ لكنه يُتدرَّب عليه: صيغة تكافئ المواظبة أكثر من الحفظ في اللحظة الأخيرة.',
              },
            ],
          },
          {
            heading: 'أربع عادات تصنع الفرق',
            blocks: [
              {
                type: 'ul',
                items: [
                  'لا تبقَ بين الناطقين بالفرنسية: الأسرع تقدمًا يعيشون بالروسية خارج الدروس منذ الأسابيع الأولى',
                  'اشتغل على مصطلحات الاختصاص بالتوازي دون انتظار السداسي الثاني',
                  'استعمل الامتحانات التجريبية التي تقترحها الكلية: فهي تعيد إنتاج الصيغة الحقيقية',
                  'أبلغ مرشدك بأي صعوبة فورًا — تعثر يُكتشف في نوفمبر يُتدارك، وفي ماي أقل بكثير',
                ],
              },
            ],
          },
          {
            heading: 'إدارة البعد عن الأهل',
            blocks: [
              {
                type: 'p',
                text: 'الحنين إلى الوطن حقيقي، خاصة في الشتاء الأول. وشيئان يساعدان عمليًا: اتصال منتظم لكن منظم بالعائلة، واندماج سريع في الجالية الطلابية التونسية المحلية الموجودة في كل مدينة شريكة.',
              },
              {
                type: 'strong',
                text: 'في المقابل، الانغلاق الكامل على الجالية التونسية هو أضمن طريقة لعدم التقدم في الروسية أبدًا. التوازن مهم.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل الامتحانات شفوية فعلاً؟',
            answer:
              'الشفوي هو الصيغة السائدة في الجامعات الروسية: يسحب الطالب موضوعًا ويعرضه أمام الأستاذ. مربك في البداية لكنه يكافئ العمل المنتظم.',
          },
          {
            question: 'ماذا أفعل عند صعوبة أثناء السنة؟',
            answer:
              'أبلغ عنها فورًا للأستاذ ولمرشدك. للجامعات آليات تدارك لكنها لا تنطلق إلا إذا عُرفت الصعوبة في وقتها.',
          },
          {
            question: 'كم من الوقت لأرتاح في الروسية؟',
            answer:
              'السنة التحضيرية تبلغ بك المستوى المطلوب لمتابعة الدروس. أما الطلاقة الحقيقية فتأتي خلال السنة الأولى من الاختصاص، وأسرع كلما عشت بالروسية خارج الدروس.',
          },
        ],
        keywords: [
          'السداسي الأول في روسيا',
          'الامتحانات الشفوية في الجامعات الروسية',
          'النجاح في الدراسة بروسيا',
          'تأقلم الطالب الأجنبي',
          'الإيقاع الجامعي الروسي',
          'نصائح للطلبة في روسيا',
        ],
      },
      ru: {
        title: 'Как успешно пройти первый семестр в России | RusStudy',
        description:
          'Учебный ритм, устные экзамены, язык, оторванность: что больше всего удивляет новых студентов в России и как подойти к первому семестру.',
        h1: 'Как успешно пройти первый семестр в России',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Первый семестр часто определяет всю программу. Четыре привычки, которые решают.',
        intro:
          'Студенты, которые отстают, почти никогда не отстают из-за нехватки способностей: они отстают потому, что вовремя не сообщили о трудности, или потому, что держались только франкофонов. Первый семестр закладывает привычки на всю программу.',
        sections: [
          {
            heading: 'Что удивляет больше всего',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Устный экзамен — доминирующий формат в России: вы вытягиваете билет и отвечаете преподавателю',
                  'Насыщенный ритм и реально отслеживаемая посещаемость',
                  'Научная лексика, которая сбивает сильнее бытового языка',
                  'Более формальные отношения с преподавателями, чем в Тунисе',
                ],
              },
              {
                type: 'p',
                text: 'Устный экзамен удивляет, но к нему готовятся: этот формат вознаграждает регулярность больше, чем зубрёжку в последний момент.',
              },
            ],
          },
          {
            heading: 'Четыре привычки, которые решают',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Не держитесь только франкофонов: быстрее продвигаются те, кто живёт по-русски вне занятий с первых недель',
                  'Работайте над лексикой специальности параллельно, не дожидаясь второго семестра',
                  'Пользуйтесь пробными экзаменами факультета: они воспроизводят реальный формат',
                  'Сразу сообщайте куратору о трудностях — отставание, замеченное в ноябре, наверстать можно, в мае гораздо труднее',
                ],
              },
            ],
          },
          {
            heading: 'Справляться с расстоянием',
            blocks: [
              {
                type: 'p',
                text: 'Тоска по дому реальна, особенно в первую зиму. Конкретно помогают две вещи: регулярный, но упорядоченный контакт с семьёй и быстрая интеграция в местное тунисское студенческое сообщество, которое есть в каждом партнёрском городе.',
              },
              {
                type: 'strong',
                text: 'При этом полное замыкание в тунисском сообществе — вернейший способ никогда не продвинуться в русском. Важен баланс.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Экзамены действительно устные?',
            answer:
              'Устный формат доминирует в российских вузах: студент вытягивает билет и отвечает преподавателю. Поначалу непривычно, но он вознаграждает системную работу.',
          },
          {
            question: 'Что делать при трудностях в течение года?',
            answer:
              'Сообщить о них сразу преподавателю и куратору. В вузах есть механизмы пересдач, но они работают, только если о проблеме знают вовремя.',
          },
          {
            question: 'Сколько нужно, чтобы освоиться в русском?',
            answer:
              'Подготовительный год выводит на уровень, достаточный для занятий. Настоящая свобода приходит на первом курсе специальности, тем быстрее, чем больше вы живёте по-русски вне занятий.',
          },
        ],
        keywords: [
          'первый семестр в России',
          'устные экзамены в российском вузе',
          'успешная учёба в России',
          'адаптация иностранного студента',
          'учебный ритм в России',
          'советы студенту',
        ],
      },
    },
  },
  {
    slug: 'master-en-russie-apres-licence',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Faire un master en Russie après une licence tunisienne | RusStudy',
        description:
          "Poursuivre en master en Russie après une licence obtenue en Tunisie : durée, conditions d'admission, langue d'enseignement et reconnaissance du diplôme.",
        h1: 'Faire un master en Russie après une licence tunisienne',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Deux ans, une admission sur dossier, et une reprise d'études possible sans repartir de zéro.",
        intro:
          "Tout ce qu'on lit sur les études en Russie s'adresse aux bacheliers. Pourtant, une part croissante des demandes vient de diplômés tunisiens qui cherchent un master, souvent après avoir travaillé un ou deux ans. Le parcours est différent, plus court, et souvent plus simple.",
        sections: [
          {
            heading: 'Ce que change une licence déjà obtenue',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Le master dure deux ans, contre cinq ou six pour un cursus complet depuis le bac',
                  "L'admission se fait sur dossier : relevés de licence, diplôme et parfois entretien",
                  'Votre licence tunisienne doit être reconnue par l’université russe visée — à vérifier avant toute démarche',
                  'Les cursus enseignés en anglais sont plus fréquents en master qu’en licence',
                ],
              },
              {
                type: 'strong',
                text: "Si le master visé est enseigné en anglais et que votre niveau est suffisant, l'année préparatoire de langue peut être allégée, voire supprimée — un gain de temps considérable.",
              },
            ],
          },
          {
            heading: 'Les démarches, identiques mais plus courtes',
            blocks: [
              {
                type: 'p',
                text: "La chaîne administrative ne change pas : admission, lettre d'invitation du Ministère de l'Intérieur en 30 à 45 jours, visa consulaire, assurance. Les délais sont les mêmes que pour un bachelier, et le rétroplanning d'octobre à décembre s'applique à l'identique.",
              },
              {
                type: 'p',
                text: "La différence est dans le dossier académique : vous fournissez le diplôme de licence et les relevés de notes de toutes les années, traduits et légalisés, plutôt que le baccalauréat.",
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'Reprendre ses études après une période de travail',
            blocks: [
              {
                type: 'p',
                text: "Une interruption entre la licence et le master n'est pas un obstacle en soi : les universités russes examinent le dossier académique et la cohérence du projet. Une expérience professionnelle dans le domaine visé est plutôt un atout à mettre en avant.",
              },
              {
                type: 'p',
                text: "Le budget reste dans les mêmes ordres de grandeur qu'un cursus de licence, mais sur deux ans seulement : c'est la reprise d'études la plus économique que nous accompagnons.",
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Ma licence tunisienne est-elle acceptée en Russie ?',
            answer:
              "Elle doit être reconnue par l'université visée, ce qui se vérifie avant toute démarche. Les diplômes d'universités publiques tunisiennes sont généralement examinés sans difficulté particulière, mais la confirmation doit venir de l'établissement lui-même.",
          },
          {
            question: 'Faut-il passer par l’année préparatoire de langue ?',
            answer:
              "Pour un master enseigné en russe, oui. Pour un master enseigné en anglais avec un niveau suffisant, elle peut être allégée ou supprimée — c'est l'un des principaux avantages de ce parcours.",
          },
          {
            question: 'Combien de temps dure un master en Russie ?',
            answer:
              "Deux ans, auxquels s'ajoute l'année préparatoire si le cursus est en russe et que vous ne maîtrisez pas la langue.",
          },
        ],
        keywords: [
          'master en Russie',
          'master après licence tunisienne',
          'poursuivre ses études en Russie',
          'admission master Russie',
          'master en anglais Russie',
          'reprise études Russie',
        ],
      },
      en: {
        title: 'Doing a Master’s in Russia After a Tunisian Bachelor | RusStudy',
        description:
          'Continuing to a master’s in Russia after a Tunisian bachelor: length, admission conditions, language of instruction and degree recognition.',
        h1: 'Doing a master’s in Russia after a Tunisian bachelor',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Two years, admission on record, and a return to study without starting from scratch.',
        intro:
          'Everything written about studying in Russia addresses school-leavers. Yet a growing share of enquiries comes from Tunisian graduates looking for a master’s, often after working a year or two. The path is different, shorter and often simpler.',
        sections: [
          {
            heading: 'What an existing bachelor changes',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The master’s runs two years, against five or six for a full programme from secondary school',
                  'Admission is on record: bachelor transcripts, diploma and sometimes an interview',
                  'Your Tunisian bachelor must be recognised by the target Russian university — check before any step',
                  'English-taught programmes are more common at master’s than at bachelor level',
                ],
              },
              {
                type: 'strong',
                text: 'If the target master’s is taught in English and your level is sufficient, the preparatory language year can be shortened or removed — a considerable time saving.',
              },
            ],
          },
          {
            heading: 'The same steps, but shorter',
            blocks: [
              {
                type: 'p',
                text: 'The administrative chain does not change: admission, invitation letter from the Ministry of the Interior in 30 to 45 days, consular visa, insurance. The timelines match those for a school-leaver, and the October to December plan applies identically.',
              },
              {
                type: 'p',
                text: 'The difference is in the academic file: you supply the bachelor diploma and transcripts for all years, translated and legalised, rather than the secondary certificate.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'Returning to study after working',
            blocks: [
              {
                type: 'p',
                text: 'A gap between bachelor and master’s is not an obstacle in itself: Russian universities look at the academic record and the coherence of the project. Professional experience in the target field is rather an asset to highlight.',
              },
              {
                type: 'p',
                text: 'The budget stays in the same order of magnitude as a bachelor programme, but over two years only: it is the most economical return to study we support.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Is my Tunisian bachelor accepted in Russia?',
            answer:
              'It must be recognised by the target university, which is checked before any step. Degrees from Tunisian public universities are generally reviewed without particular difficulty, but confirmation must come from the institution itself.',
          },
          {
            question: 'Is the preparatory language year required?',
            answer:
              'For a Russian-taught master’s, yes. For an English-taught master’s with a sufficient level, it can be shortened or removed — one of the main advantages of this path.',
          },
          {
            question: 'How long does a master’s take in Russia?',
            answer:
              'Two years, plus the preparatory year if the programme is in Russian and you do not yet speak the language.',
          },
        ],
        keywords: [
          'master in Russia',
          'master after bachelor abroad',
          'continue studies in Russia',
          'Russia master admission',
          'English-taught master Russia',
          'return to study Russia',
        ],
      },
      ar: {
        title: 'الماجستير في روسيا بعد الإجازة التونسية | RusStudy',
        description:
          'مواصلة الماجستير في روسيا بعد إجازة تونسية: المدة وشروط القبول ولغة التدريس والاعتراف بالشهادة.',
        h1: 'الماجستير في روسيا بعد الإجازة التونسية',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'سنتان وقبول على الملف واستئناف للدراسة دون البدء من الصفر.',
        intro:
          'كل ما يُكتب عن الدراسة في روسيا موجه لحاملي البكالوريا. ومع ذلك، تأتي حصة متزايدة من الطلبات من خريجين تونسيين يبحثون عن ماجستير، غالبًا بعد سنة أو سنتين من العمل. المسار مختلف وأقصر وأبسط في الغالب.',
        sections: [
          {
            heading: 'ما تغيّره إجازة محصَّل عليها',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الماجستير يدوم سنتين مقابل خمس أو ست لتكوين كامل من البكالوريا',
                  'القبول على أساس الملف: كشوف الإجازة والشهادة وأحيانًا مقابلة',
                  'يجب أن تكون إجازتك التونسية معترفًا بها لدى الجامعة الروسية المستهدفة — يُتحقق من ذلك قبل أي إجراء',
                  'التكوينات بالإنجليزية أكثر شيوعًا في الماجستير منها في الإجازة',
                ],
              },
              {
                type: 'strong',
                text: 'إذا كان الماجستير المستهدف يُدرَّس بالإنجليزية ومستواك كافٍ، يمكن تخفيف السنة التحضيرية أو إلغاؤها — وهو ربح كبير للوقت.',
              },
            ],
          },
          {
            heading: 'الإجراءات نفسها لكن أقصر',
            blocks: [
              {
                type: 'p',
                text: 'السلسلة الإدارية لا تتغير: القبول ثم رسالة الدعوة من وزارة الداخلية في 30 إلى 45 يومًا ثم التأشيرة القنصلية والتأمين. الآجال هي نفسها كما لحامل البكالوريا، ورزنامة أكتوبر-ديسمبر تنطبق بحذافيرها.',
              },
              {
                type: 'p',
                text: 'الفرق في الملف الأكاديمي: تقدّم شهادة الإجازة وكشوف أعداد كل السنوات مترجمة ومصدَّقة بدل شهادة البكالوريا.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'استئناف الدراسة بعد فترة عمل',
            blocks: [
              {
                type: 'p',
                text: 'الانقطاع بين الإجازة والماجستير ليس عائقًا في حد ذاته: تنظر الجامعات الروسية في الملف الأكاديمي وانسجام المشروع. والخبرة المهنية في المجال المستهدف تُعد بالأحرى نقطة قوة تُبرز.',
              },
              {
                type: 'p',
                text: 'الميزانية تبقى في نفس مستوى تكوين الإجازة لكن على سنتين فقط: وهو أوفر استئناف للدراسة نرافقه.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تُقبل إجازتي التونسية في روسيا؟',
            answer:
              'يجب أن تكون معترفًا بها لدى الجامعة المستهدفة، ويُتحقق من ذلك قبل أي إجراء. شهادات الجامعات العمومية التونسية تُدرس عمومًا دون صعوبة خاصة، لكن التأكيد يجب أن يأتي من المؤسسة نفسها.',
          },
          {
            question: 'هل السنة التحضيرية إلزامية؟',
            answer:
              'لماجستير يُدرَّس بالروسية، نعم. أما لماجستير بالإنجليزية بمستوى كافٍ فيمكن تخفيفها أو إلغاؤها — وهي من أبرز مزايا هذا المسار.',
          },
          {
            question: 'كم يدوم الماجستير في روسيا؟',
            answer: 'سنتان، تضاف إليهما السنة التحضيرية إذا كان التكوين بالروسية ولم تكن تتقن اللغة.',
          },
        ],
        keywords: [
          'الماجستير في روسيا',
          'ماجستير بعد الإجازة التونسية',
          'مواصلة الدراسة في روسيا',
          'القبول في الماجستير',
          'ماجستير بالإنجليزية في روسيا',
          'استئناف الدراسة',
        ],
      },
      ru: {
        title: 'Магистратура в России после тунисского бакалавриата | RusStudy',
        description:
          'Продолжение в магистратуре России после тунисского бакалавриата: длительность, условия поступления, язык обучения и признание диплома.',
        h1: 'Магистратура в России после тунисского бакалавриата',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Два года, зачисление по досье и возвращение к учёбе без старта с нуля.',
        intro:
          'Всё, что пишут об учёбе в России, обращено к выпускникам школ. Между тем растущая доля обращений приходит от тунисских выпускников вузов, ищущих магистратуру, часто после года-двух работы. Путь другой, короче и зачастую проще.',
        sections: [
          {
            heading: 'Что меняет уже полученный бакалавриат',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Магистратура длится два года против пяти-шести для полной программы со школы',
                  'Зачисление по досье: выписки бакалавриата, диплом и иногда собеседование',
                  'Ваш тунисский диплом должен признаваться выбранным российским вузом — проверяется до любых шагов',
                  'Англоязычные программы в магистратуре встречаются чаще, чем в бакалавриате',
                ],
              },
              {
                type: 'strong',
                text: 'Если магистратура англоязычная и ваш уровень достаточен, подготовительный языковой год можно сократить или отменить — это существенная экономия времени.',
              },
            ],
          },
          {
            heading: 'Те же шаги, но короче',
            blocks: [
              {
                type: 'p',
                text: 'Административная цепочка не меняется: зачисление, приглашение от МВД за 30–45 дней, консульская виза, страховка. Сроки те же, что и для выпускника школы, и план с октября по декабрь применяется один в один.',
              },
              {
                type: 'p',
                text: 'Разница в академическом досье: вы подаёте диплом бакалавра и выписки за все годы, переведённые и легализованные, вместо школьного аттестата.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'Возвращение к учёбе после работы',
            blocks: [
              {
                type: 'p',
                text: 'Перерыв между бакалавриатом и магистратурой сам по себе не помеха: российские вузы смотрят на академическое досье и логику проекта. Профессиональный опыт в выбранной области скорее преимущество, которое стоит подчеркнуть.',
              },
              {
                type: 'p',
                text: 'Бюджет остаётся того же порядка, что и на бакалавриате, но только на два года: это самое экономичное возвращение к учёбе из тех, что мы сопровождаем.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Принимается ли мой тунисский диплом в России?',
            answer:
              'Он должен признаваться выбранным вузом, что проверяется до любых шагов. Дипломы тунисских государственных вузов обычно рассматриваются без особых сложностей, но подтверждение должно прийти от самого учреждения.',
          },
          {
            question: 'Нужен ли подготовительный языковой год?',
            answer:
              'Для русскоязычной магистратуры — да. Для англоязычной при достаточном уровне его можно сократить или отменить — одно из главных преимуществ этого пути.',
          },
          {
            question: 'Сколько длится магистратура в России?',
            answer: 'Два года плюс подготовительный год, если программа на русском и языком вы пока не владеете.',
          },
        ],
        keywords: [
          'магистратура в России',
          'магистратура после бакалавриата',
          'продолжить учёбу в России',
          'поступление в магистратуру',
          'англоязычная магистратура',
          'возвращение к учёбе',
        ],
      },
    },
  },
  {
    slug: 'travailler-pendant-ses-etudes-russie',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Travailler pendant ses études en Russie : ce qu’il faut savoir | RusStudy',
        description:
          "Ce que permet le statut d'étudiant étranger en Russie, les démarches à respecter, et pourquoi le travail ne doit pas entrer dans le calcul du budget.",
        h1: 'Travailler pendant ses études en Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Un complément possible, jamais une source de financement. Ce que le statut étudiant autorise réellement.",
        intro:
          "La question revient dans presque tous les entretiens avec les familles : « Est-ce qu'il pourra travailler pour financer une partie ? » La réponse honnête est nuancée, et surtout : un travail étudiant ne doit jamais figurer dans le plan de financement initial.",
        sections: [
          {
            heading: 'Ce que permet le statut d’étudiant étranger',
            blocks: [
              {
                type: 'p',
                text: "Un étudiant étranger inscrit dans une université russe peut exercer une activité, sous réserve de respecter les conditions prévues par la réglementation migratoire et d'accomplir les démarches requises auprès des autorités compétentes.",
              },
              {
                type: 'strong',
                text: "Les conditions exactes évoluent : vérifiez-les auprès du service des étudiants étrangers de votre université plutôt que de vous fier à un témoignage de forum. Travailler sans respecter la procédure expose à des conséquences sur le titre de séjour.",
              },
            ],
          },
          {
            heading: 'Pourquoi ne pas compter dessus pour le budget',
            blocks: [
              {
                type: 'ul',
                items: [
                  'La première année est linguistiquement la plus exigeante : le russe s’apprend à temps plein',
                  'Les cursus de santé — médecine, dentaire, pharmacie — ont un volume horaire qui laisse peu de disponibilité',
                  'Les rémunérations accessibles à un étudiant non russophone restent modestes',
                  'Un décrochage académique coûte infiniment plus cher que ce qu’un emploi d’appoint rapporte',
                ],
              },
              {
                type: 'p',
                text: "Construisez votre budget comme si aucun revenu n'était perçu sur place. Si un travail vient s'y ajouter, ce sera un confort, pas un pilier.",
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Quand cela devient réaliste',
            blocks: [
              {
                type: 'p',
                text: "À partir de la deuxième ou troisième année, une fois la langue maîtrisée et le rythme universitaire assimilé, une activité compatible avec les études devient envisageable. Les stages et missions liés à la spécialité ont alors un double intérêt : le revenu, et l'expérience professionnelle.",
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Un étudiant étranger peut-il travailler légalement en Russie ?',
            answer:
              "Une activité est possible sous conditions, avec des démarches à accomplir auprès des autorités compétentes. Les règles évoluent : la source fiable est le service des étudiants étrangers de votre université, pas un forum.",
          },
          {
            question: 'Peut-on financer ses études en travaillant sur place ?',
            answer:
              "Non, et nous le disons clairement : le budget doit être construit sans compter sur un revenu local. Un emploi d'appoint peut apporter un confort, jamais couvrir des frais de scolarité et un logement.",
          },
          {
            question: 'À partir de quand est-ce envisageable ?',
            answer:
              'Rarement avant la deuxième ou la troisième année, une fois le russe maîtrisé et le rythme universitaire assimilé.',
          },
        ],
        keywords: [
          'travailler en Russie étudiant',
          'job étudiant Russie',
          'visa étudiant travail Russie',
          'financer ses études en travaillant',
          'étudiant étranger emploi Russie',
          'statut étudiant Russie',
        ],
      },
      en: {
        title: 'Working While Studying in Russia: What to Know | RusStudy',
        description:
          'What the international student status allows in Russia, the steps to follow, and why work should not enter the budget calculation.',
        h1: 'Working while studying in Russia',
        publishedLabel: 'Published: September 2026',
        excerpt: 'A possible supplement, never a funding source. What student status actually allows.',
        intro:
          'The question comes up in nearly every conversation with families: "Will they be able to work to fund part of it?" The honest answer is nuanced, and above all: student work should never appear in the initial funding plan.',
        sections: [
          {
            heading: 'What international student status allows',
            blocks: [
              {
                type: 'p',
                text: 'An international student enrolled at a Russian university may take up an activity, subject to the conditions set by migration regulations and to completing the required steps with the competent authorities.',
              },
              {
                type: 'strong',
                text: 'The exact conditions change: check them with your university’s international student office rather than relying on a forum post. Working without following the procedure puts your residence status at risk.',
              },
            ],
          },
          {
            heading: 'Why not to count on it for the budget',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The first year is linguistically the most demanding: Russian is learned full-time',
                  'Health programmes — medicine, dentistry, pharmacy — have timetables leaving little availability',
                  'Pay accessible to a non-Russian-speaking student remains modest',
                  'Falling behind academically costs far more than a side job brings in',
                ],
              },
              {
                type: 'p',
                text: 'Build your budget as if no income were earned on site. If work comes on top, it will be a comfort, not a pillar.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'When it becomes realistic',
            blocks: [
              {
                type: 'p',
                text: 'From the second or third year, once the language is mastered and the academic rhythm absorbed, an activity compatible with studies becomes feasible. Placements and assignments linked to the specialty then bring double value: income and professional experience.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Can an international student work legally in Russia?',
            answer:
              'An activity is possible under conditions, with steps to complete with the competent authorities. Rules change: the reliable source is your university’s international student office, not a forum.',
          },
          {
            question: 'Can studies be funded by working on site?',
            answer:
              'No, and we say it plainly: the budget must be built without counting on local income. A side job can add comfort, never cover tuition and housing.',
          },
          {
            question: 'From when is it feasible?',
            answer:
              'Rarely before the second or third year, once Russian is mastered and the academic rhythm absorbed.',
          },
        ],
        keywords: [
          'working in Russia as a student',
          'student job Russia',
          'student visa work Russia',
          'funding studies by working',
          'international student employment Russia',
          'student status Russia',
        ],
      },
      ar: {
        title: 'العمل أثناء الدراسة في روسيا: ما يجب معرفته | RusStudy',
        description:
          'ما يتيحه وضع الطالب الأجنبي في روسيا، والإجراءات الواجب احترامها، ولماذا لا ينبغي إدراج العمل في حساب الميزانية.',
        h1: 'العمل أثناء الدراسة في روسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'مكمّل ممكن لا مصدر تمويل أبدًا. ما يتيحه وضع الطالب فعليًا.',
        intro:
          'يتكرر هذا السؤال في كل المقابلات تقريبًا مع العائلات: «هل سيتمكن من العمل لتمويل جزء؟» الجواب الصادق فيه تفصيل، وقبل كل شيء: عمل الطالب يجب ألا يظهر أبدًا في خطة التمويل الأولية.',
        sections: [
          {
            heading: 'ما يتيحه وضع الطالب الأجنبي',
            blocks: [
              {
                type: 'p',
                text: 'يمكن لطالب أجنبي مسجل في جامعة روسية ممارسة نشاط، شريطة احترام الشروط المنصوص عليها في تنظيم الهجرة وإتمام الإجراءات المطلوبة لدى السلطات المختصة.',
              },
              {
                type: 'strong',
                text: 'الشروط الدقيقة تتغير: تحقق منها لدى مصلحة الطلبة الأجانب بجامعتك بدل الاعتماد على شهادة في منتدى. العمل دون احترام الإجراء يعرّض بطاقة إقامتك للخطر.',
              },
            ],
          },
          {
            heading: 'لماذا لا تعتمد عليه في الميزانية',
            blocks: [
              {
                type: 'ul',
                items: [
                  'السنة الأولى هي الأكثر تطلبًا لغويًا: الروسية تُتعلَّم بدوام كامل',
                  'تكوينات الصحة — الطب وطب الأسنان والصيدلة — بحجم ساعي لا يترك وقتًا كبيرًا',
                  'الأجور المتاحة لطالب لا يتقن الروسية تبقى متواضعة',
                  'التعثر الدراسي يكلف أضعاف ما يدرّه عمل إضافي',
                ],
              },
              {
                type: 'p',
                text: 'ابنِ ميزانيتك كما لو لم يُحصَّل أي دخل هناك. وإذا أُضيف عمل فسيكون راحة لا ركيزة.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'متى يصبح ذلك واقعيًا',
            blocks: [
              {
                type: 'p',
                text: 'ابتداءً من السنة الثانية أو الثالثة، بعد إتقان اللغة واستيعاب الإيقاع الجامعي، يصبح نشاط متوافق مع الدراسة ممكنًا. وللتربصات والمهام المرتبطة بالاختصاص عندها فائدة مزدوجة: الدخل والخبرة المهنية.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكن لطالب أجنبي العمل قانونيًا في روسيا؟',
            answer:
              'النشاط ممكن بشروط مع إجراءات تُنجز لدى السلطات المختصة. والقواعد تتغير: المصدر الموثوق هو مصلحة الطلبة الأجانب بجامعتك لا منتدى.',
          },
          {
            question: 'هل يمكن تمويل الدراسة بالعمل هناك؟',
            answer:
              'لا، ونقولها بوضوح: يجب بناء الميزانية دون الاعتماد على دخل محلي. العمل الإضافي قد يوفر راحة لكنه لا يغطي أبدًا رسوم دراسة وسكنًا.',
          },
          {
            question: 'ابتداءً من متى يصبح ذلك ممكنًا؟',
            answer: 'نادرًا قبل السنة الثانية أو الثالثة، بعد إتقان الروسية واستيعاب الإيقاع الجامعي.',
          },
        ],
        keywords: [
          'العمل في روسيا للطلبة',
          'عمل طلابي في روسيا',
          'تأشيرة الطالب والعمل',
          'تمويل الدراسة بالعمل',
          'تشغيل الطلبة الأجانب',
          'وضع الطالب في روسيا',
        ],
      },
      ru: {
        title: 'Работа во время учёбы в России: что нужно знать | RusStudy',
        description:
          'Что позволяет статус иностранного студента в России, какие шаги нужно соблюсти и почему работу не стоит закладывать в бюджет.',
        h1: 'Работа во время учёбы в России',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Возможное дополнение, но никогда источник финансирования. Что реально позволяет статус студента.',
        intro:
          'Этот вопрос звучит почти в каждом разговоре с семьями: «Сможет ли он работать, чтобы частично оплатить учёбу?» Честный ответ неоднозначен, и главное: студенческая работа не должна фигурировать в изначальном плане финансирования.',
        sections: [
          {
            heading: 'Что позволяет статус иностранного студента',
            blocks: [
              {
                type: 'p',
                text: 'Иностранный студент, зачисленный в российский вуз, может вести деятельность при соблюдении условий миграционного регулирования и выполнении необходимых формальностей в компетентных органах.',
              },
              {
                type: 'strong',
                text: 'Точные условия меняются: уточняйте их в отделе по работе с иностранными студентами вашего вуза, а не по сообщению на форуме. Работа без соблюдения процедуры ставит под угрозу ваш статус пребывания.',
              },
            ],
          },
          {
            heading: 'Почему не стоит рассчитывать на это в бюджете',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Первый год самый тяжёлый лингвистически: русский учится полный день',
                  'Медицинские программы — лечебное дело, стоматология, фармация — имеют плотное расписание',
                  'Заработок, доступный студенту без русского языка, остаётся скромным',
                  'Академическое отставание обходится несравнимо дороже подработки',
                ],
              },
              {
                type: 'p',
                text: 'Стройте бюджет так, будто на месте не будет никакого дохода. Если работа добавится, это будет комфорт, а не опора.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Когда это становится реальным',
            blocks: [
              {
                type: 'p',
                text: 'Со второго-третьего курса, когда язык освоен, а учебный ритм усвоен, совместимая с учёбой деятельность становится возможной. Практики и задачи по специальности тогда дают двойную пользу: доход и профессиональный опыт.',
              },
            ],
          },
        ],
        faq: [
          {
            question: 'Может ли иностранный студент легально работать в России?',
            answer:
              'Деятельность возможна при условиях и с оформлением в компетентных органах. Правила меняются: надёжный источник — отдел по работе с иностранными студентами вашего вуза, а не форум.',
          },
          {
            question: 'Можно ли оплатить учёбу, работая на месте?',
            answer:
              'Нет, и мы говорим это прямо: бюджет нужно строить без расчёта на местный доход. Подработка может добавить комфорта, но никогда не покроет обучение и жильё.',
          },
          {
            question: 'С какого момента это реально?',
            answer: 'Редко раньше второго-третьего курса, после освоения русского и учебного ритма.',
          },
        ],
        keywords: [
          'работа студента в России',
          'подработка студенту',
          'учебная виза и работа',
          'оплатить учёбу работой',
          'трудоустройство иностранных студентов',
          'статус студента в России',
        ],
      },
    },
  },
  {
    slug: 'apprendre-le-russe-avant-de-partir',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Commencer le russe avant de partir : par où commencer | RusStudy',
        description:
          "Alphabet cyrillique, premiers mots utiles, ressources gratuites : ce qu'il est utile d'apprendre avant le départ, et ce qu'il vaut mieux laisser à l'année préparatoire.",
        h1: 'Commencer le russe avant de partir',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Quelques semaines d'avance changent les premiers mois. Ce qu'il faut travailler, et ce qu'il ne sert à rien d'anticiper.",
        intro:
          "L'année préparatoire est conçue pour vous amener au niveau requis en partant de zéro : rien ne vous oblige à préparer quoi que ce soit. Mais les étudiants qui arrivent en connaissant l'alphabet et une centaine de mots gagnent des semaines de confort, et surtout d'autonomie dès les premiers jours.",
        sections: [
          {
            heading: 'La priorité absolue : l’alphabet cyrillique',
            blocks: [
              {
                type: 'p',
                text: "C'est le meilleur investissement possible avant le départ, et il demande peu : l'alphabet cyrillique s'acquiert en quelques semaines à raison de vingt minutes par jour.",
              },
              {
                type: 'p',
                text: "Savoir déchiffrer change tout dès l'arrivée : lire le nom de sa station de métro, les panneaux de l'université, les étiquettes au supermarché. Sans cela, les premiers jours sont beaucoup plus déroutants qu'ils ne devraient l'être.",
              },
            ],
          },
          {
            heading: 'Les cent premiers mots utiles',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Les formules de politesse et de présentation',
                  'Les chiffres, pour les prix et les horaires',
                  'Le vocabulaire des transports et de l’orientation dans la ville',
                  'Les mots de l’université : cours, examen, dortoir, secrétariat',
                  'Les expressions pour demander de l’aide ou signaler qu’on ne comprend pas',
                ],
              },
              {
                type: 'strong',
                text: "Savoir dire « je ne comprends pas, pouvez-vous répéter lentement » est plus utile les premiers jours que cinquante mots de vocabulaire passif.",
              },
            ],
          },
          {
            heading: 'Ce qu’il ne sert à rien d’anticiper',
            blocks: [
              {
                type: 'p',
                text: "N'essayez pas d'attaquer seul la grammaire des cas russes ni le vocabulaire scientifique de votre spécialité. Le premier demande un enseignement structuré, le second est précisément l'objet de l'année préparatoire, qui vous l'enseignera dans le bon ordre.",
              },
              {
                type: 'p',
                text: "Les applications gratuites d'apprentissage des langues suffisent largement pour l'alphabet et le vocabulaire de base. Inutile d'investir dans des cours particuliers avant le départ.",
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Faut-il obligatoirement apprendre le russe avant de partir ?',
            answer:
              "Non. L'année préparatoire part du niveau zéro. Mais connaître l'alphabet et quelques dizaines de mots rend les premières semaines nettement plus confortables.",
          },
          {
            question: 'Combien de temps pour apprendre l’alphabet cyrillique ?',
            answer:
              "Quelques semaines à raison de vingt minutes par jour. C'est l'obstacle le plus visible du russe, et paradoxalement le plus rapide à franchir.",
          },
          {
            question: 'Des cours particuliers avant le départ sont-ils utiles ?',
            answer:
              "Rarement nécessaires. Les applications gratuites suffisent pour l'alphabet et le vocabulaire de base ; la grammaire structurée relève de l'année préparatoire, qui l'enseigne dans le bon ordre.",
          },
        ],
        keywords: [
          'apprendre le russe',
          'alphabet cyrillique débutant',
          'russe avant de partir',
          'apprendre le russe pour étudier',
          'premiers mots russes',
          'préparer année préparatoire',
        ],
      },
      en: {
        title: 'Starting Russian Before You Leave: Where to Begin | RusStudy',
        description:
          'Cyrillic alphabet, first useful words, free resources: what is worth learning before departure, and what is better left to the preparatory year.',
        h1: 'Starting Russian before you leave',
        publishedLabel: 'Published: September 2026',
        excerpt: 'A few weeks of head start change the first months. What to work on, and what not to anticipate.',
        intro:
          'The preparatory year is designed to take you from zero to the required level: nothing obliges you to prepare anything. But students who arrive knowing the alphabet and a hundred words gain weeks of comfort, and above all autonomy from the first days.',
        sections: [
          {
            heading: 'The absolute priority: the Cyrillic alphabet',
            blocks: [
              {
                type: 'p',
                text: 'This is the best possible investment before departure, and it asks little: the Cyrillic alphabet is acquired in a few weeks at twenty minutes a day.',
              },
              {
                type: 'p',
                text: 'Being able to decipher changes everything on arrival: reading your metro station name, university signs, supermarket labels. Without it, the first days are far more disorienting than they need to be.',
              },
            ],
          },
          {
            heading: 'The first hundred useful words',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Greetings and introductions',
                  'Numbers, for prices and timetables',
                  'Transport vocabulary and finding your way around the city',
                  'University words: class, exam, dormitory, admin office',
                  'Phrases for asking help or signalling that you do not understand',
                ],
              },
              {
                type: 'strong',
                text: 'Knowing how to say "I do not understand, could you repeat slowly" is more useful in the first days than fifty words of passive vocabulary.',
              },
            ],
          },
          {
            heading: 'What not to anticipate',
            blocks: [
              {
                type: 'p',
                text: 'Do not try to tackle Russian case grammar alone, nor the scientific vocabulary of your specialty. The first needs structured teaching; the second is precisely what the preparatory year covers, in the right order.',
              },
              {
                type: 'p',
                text: 'Free language-learning apps are more than enough for the alphabet and basic vocabulary. There is no need to invest in private lessons before departure.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is learning Russian before leaving compulsory?',
            answer:
              'No. The preparatory year starts from zero. But knowing the alphabet and a few dozen words makes the first weeks markedly more comfortable.',
          },
          {
            question: 'How long to learn the Cyrillic alphabet?',
            answer:
              'A few weeks at twenty minutes a day. It is the most visible obstacle in Russian, and paradoxically the quickest to clear.',
          },
          {
            question: 'Are private lessons before departure useful?',
            answer:
              'Rarely necessary. Free apps suffice for the alphabet and basic vocabulary; structured grammar belongs to the preparatory year, which teaches it in the right order.',
          },
        ],
        keywords: [
          'learn Russian',
          'Cyrillic alphabet beginner',
          'Russian before departure',
          'learn Russian to study',
          'first Russian words',
          'prepare preparatory year',
        ],
      },
      ar: {
        title: 'البدء في تعلم الروسية قبل السفر: من أين تبدأ | RusStudy',
        description:
          'الأبجدية السيريلية والكلمات الأولى المفيدة والموارد المجانية: ما يفيد تعلمه قبل السفر وما يُترك للسنة التحضيرية.',
        h1: 'البدء في تعلم الروسية قبل السفر',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'بضعة أسابيع من التقدم تغيّر الأشهر الأولى. ما يجب الاشتغال عليه وما لا فائدة من استباقه.',
        intro:
          'السنة التحضيرية مصممة لتبلغ بك المستوى المطلوب انطلاقًا من الصفر: لا شيء يلزمك بتحضير أي شيء. لكن الطلبة الذين يصلون وهم يعرفون الأبجدية ومئة كلمة يربحون أسابيع من الراحة، وقبل كل شيء من الاستقلالية منذ الأيام الأولى.',
        sections: [
          {
            heading: 'الأولوية المطلقة: الأبجدية السيريلية',
            blocks: [
              {
                type: 'p',
                text: 'هذا أفضل استثمار ممكن قبل السفر، وهو لا يتطلب كثيرًا: الأبجدية السيريلية تُتقن في بضعة أسابيع بمعدل عشرين دقيقة يوميًا.',
              },
              {
                type: 'p',
                text: 'القدرة على فك الحروف تغيّر كل شيء عند الوصول: قراءة اسم محطة المترو ولافتات الجامعة وبطاقات المتجر. وبدونها تكون الأيام الأولى أكثر إرباكًا مما ينبغي.',
              },
            ],
          },
          {
            heading: 'أول مئة كلمة مفيدة',
            blocks: [
              {
                type: 'ul',
                items: [
                  'صيغ التحية والتعريف بالنفس',
                  'الأرقام، للأسعار والتوقيت',
                  'مفردات النقل والتوجه في المدينة',
                  'كلمات الجامعة: درس، امتحان، إقامة، إدارة',
                  'عبارات طلب المساعدة أو الإشارة إلى عدم الفهم',
                ],
              },
              {
                type: 'strong',
                text: 'معرفة قول «لا أفهم، هل يمكنك الإعادة ببطء» أنفع في الأيام الأولى من خمسين كلمة سلبية.',
              },
            ],
          },
          {
            heading: 'ما لا فائدة من استباقه',
            blocks: [
              {
                type: 'p',
                text: 'لا تحاول وحدك مهاجمة قواعد الحالات الروسية ولا المصطلحات العلمية لاختصاصك. الأولى تتطلب تدريسًا منظمًا، والثانية هي بالضبط موضوع السنة التحضيرية التي ستعلمك إياها بالترتيب الصحيح.',
              },
              {
                type: 'p',
                text: 'تطبيقات تعلم اللغات المجانية تكفي تمامًا للأبجدية والمفردات الأساسية. ولا داعي للاستثمار في دروس خصوصية قبل السفر.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تعلم الروسية قبل السفر إجباري؟',
            answer:
              'لا. السنة التحضيرية تنطلق من الصفر. لكن معرفة الأبجدية وبضع عشرات من الكلمات تجعل الأسابيع الأولى أكثر راحة بوضوح.',
          },
          {
            question: 'كم يستغرق تعلم الأبجدية السيريلية؟',
            answer:
              'بضعة أسابيع بمعدل عشرين دقيقة يوميًا. وهي أوضح عائق في الروسية، ومن المفارقة أنها أسرع ما يُتجاوز.',
          },
          {
            question: 'هل الدروس الخصوصية قبل السفر مفيدة؟',
            answer:
              'نادرًا ما تكون ضرورية. التطبيقات المجانية تكفي للأبجدية والمفردات الأساسية، أما القواعد المنظمة فهي من اختصاص السنة التحضيرية التي تدرّسها بالترتيب الصحيح.',
          },
        ],
        keywords: [
          'تعلم اللغة الروسية',
          'الأبجدية السيريلية للمبتدئين',
          'الروسية قبل السفر',
          'تعلم الروسية للدراسة',
          'أول كلمات روسية',
          'تحضير السنة التحضيرية',
        ],
      },
      ru: {
        title: 'Начать учить русский до отъезда: с чего начать | RusStudy',
        description:
          'Кириллица, первые полезные слова, бесплатные ресурсы: что стоит выучить до отъезда, а что лучше оставить подготовительному году.',
        h1: 'Начать учить русский до отъезда',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Несколько недель форы меняют первые месяцы. Что стоит проработать, а что не нужно забегать вперёд.',
        intro:
          'Подготовительный год рассчитан на то, чтобы довести вас до нужного уровня с нуля: ничто не обязывает вас готовиться заранее. Но студенты, приезжающие со знанием алфавита и сотни слов, выигрывают недели комфорта и, главное, самостоятельности с первых дней.',
        sections: [
          {
            heading: 'Абсолютный приоритет: кириллица',
            blocks: [
              {
                type: 'p',
                text: 'Это лучшее вложение перед отъездом, и оно требует немногого: кириллица осваивается за несколько недель по двадцать минут в день.',
              },
              {
                type: 'p',
                text: 'Умение читать меняет всё по приезде: название станции метро, указатели в вузе, этикетки в супермаркете. Без этого первые дни гораздо запутаннее, чем могли бы быть.',
              },
            ],
          },
          {
            heading: 'Первая сотня полезных слов',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Формулы приветствия и знакомства',
                  'Числа — для цен и расписаний',
                  'Лексика транспорта и ориентирования в городе',
                  'Слова университета: занятие, экзамен, общежитие, деканат',
                  'Фразы, чтобы попросить помощи или сказать, что не понимаете',
                ],
              },
              {
                type: 'strong',
                text: 'Умение сказать «я не понимаю, повторите, пожалуйста, медленно» полезнее в первые дни, чем пятьдесят слов пассивной лексики.',
              },
            ],
          },
          {
            heading: 'Что не нужно забегать вперёд',
            blocks: [
              {
                type: 'p',
                text: 'Не пытайтесь в одиночку одолеть падежную грамматику или научную лексику специальности. Первое требует структурного обучения, второе — как раз предмет подготовительного года, который даст это в правильном порядке.',
              },
              {
                type: 'p',
                text: 'Бесплатных языковых приложений вполне хватает для алфавита и базовой лексики. Вкладываться в репетитора до отъезда не нужно.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Обязательно ли учить русский до отъезда?',
            answer:
              'Нет. Подготовительный год начинается с нуля. Но знание алфавита и нескольких десятков слов заметно облегчает первые недели.',
          },
          {
            question: 'Сколько времени нужно на кириллицу?',
            answer:
              'Несколько недель по двадцать минут в день. Это самое заметное препятствие в русском и, как ни странно, самое быстро преодолимое.',
          },
          {
            question: 'Полезны ли занятия с репетитором до отъезда?',
            answer:
              'Редко необходимы. Бесплатных приложений хватает для алфавита и базовой лексики, а структурная грамматика — задача подготовительного года.',
          },
        ],
        keywords: [
          'учить русский язык',
          'кириллица для начинающих',
          'русский до отъезда',
          'учить русский для учёбы',
          'первые русские слова',
          'подготовка к подготовительному году',
        ],
      },
    },
  },
];
