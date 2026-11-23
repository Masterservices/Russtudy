import type { BlogArticleEntry } from '../copy';

/*
 * Quatre articles de février 2027, calés sur l'intention « je suis arrivé
 * (ou je pars), comment je vis concrètement ? » : l'hiver russe, le logement,
 * l'argent et la banque, l'intégration sociale.
 *
 * Sourcing : aucun chiffre réglementaire, tarif ou délai n'est affirmé. Les
 * textes décrivent les mécanismes et renvoient vers l'interlocuteur compétent
 * (université, banque, bailleur) pour les valeurs exactes, qui évoluent.
 */
export const FEVRIER_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'hiver-russe-froid-sante-etudiant',
    publishedAt: '2027-02-01',
    copy: {
      fr: {
        title: 'Hiver en Russie : se préparer au froid et à la santé | RusStudy',
        description:
          "Vêtements en couches, chauffage des intérieurs, lumière rare et infections hivernales : comment un étudiant tunisien se prépare à un hiver russe long, sans improviser.",
        h1: 'Hiver en Russie : se préparer au froid et à la santé',
        publishedLabel: 'Publication : Février 2027',
        excerpt:
          "Le froid russe ne pose pas de problème à qui l'anticipe. Le piège, c'est de le découvrir en janvier avec la mauvaise veste.",
        intro:
          "Pour un étudiant venu de Tunisie, l'hiver russe est le premier vrai choc climatique. Il dure plusieurs mois, les journées sont courtes et les températures restent très basses pendant de longues semaines. Bien anticipé, il ne pose pas de difficulté. Mal anticipé, il fatigue, rend malade et use le moral.",
        sections: [
          {
            heading: "Les vêtements : superposer plutôt qu'acheter lourd",
            blocks: [
              {
                type: 'p',
                text: "Le bon réflexe n'est pas une seule doudoune, mais un système en couches : une couche respirante au contact de la peau, une couche isolante au milieu, une veste coupe-vent et imperméable par-dessus.",
              },
              {
                type: 'ul',
                items: [
                  'Sous-vêtements thermiques, idéalement en laine mérinos ou en fibres synthétiques.',
                  'Un manteau long et doublé, qui couvre les hanches.',
                  'Bonnet, écharpe et gants : ce sont les pièces les plus utiles, et les plus souvent oubliées.',
                  'Des chaussures à semelle antidérapante, adaptées à la neige et au verglas.',
                ],
              },
              {
                type: 'strong',
                text: "Les intérieurs sont chauffés, souvent fortement. On s'habille donc pour pouvoir enlever une couche en entrant, pas pour avoir froid en sortant.",
              },
            ],
          },
          {
            heading: 'Lumière, sommeil et santé : les trois réflexes',
            blocks: [
              {
                type: 'p',
                text: "Les journées courtes perturbent le sommeil et l'humeur. Le phénomène est fréquent chez les étudiants internationaux, qui découvrent cette obscurité au moment même où la charge de travail augmente. Les infections respiratoires circulent aussi beaucoup dans les résidences, où les contacts sont nombreux.",
              },
              {
                type: 'ul',
                items: [
                  "Sortir chaque jour, même une demi-heure, pour profiter de la lumière disponible.",
                  'Garder des horaires de sommeil réguliers, y compris le week-end.',
                  "Boire régulièrement : l'air chauffé dessèche la peau et les muqueuses.",
                  "Signaler une fatigue persistante à un médecin plutôt que d'attendre la fin de l'hiver.",
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: "Faut-il acheter un manteau d'hiver avant de partir ?",
            answer:
              "Pas forcément. Un ensemble de couches (sous-vêtements thermiques, pull épais, veste imperméable, bonnet, gants) se prépare depuis la Tunisie. Un manteau très chaud se trouve aussi sur place, dans les magasins de la ville où vous vivrez.",
          },
          {
            question: 'Le froid est-il dangereux pour un débutant ?',
            answer:
              "Il se gère avec des habitudes simples : couvrir les extrémités, éviter de rester immobile dehors, rentrer se réchauffer dès que l'on se sent engourdi. Les accidents graves surviennent surtout lors d'un long séjour dehors ou après avoir bu de l'alcool.",
          },
        ],
        keywords: [
          'hiver en Russie',
          'vêtements froid Russie',
          'étudiant tunisien Russie hiver',
          'santé étudiant Russie',
          'se préparer hiver russe',
        ],
      },
      en: {
        title: 'Winter in Russia: preparing for the cold and for your health | RusStudy',
        description:
          'Layered clothing, heated interiors, scarce daylight and winter infections: how a Tunisian student prepares for a long Russian winter without improvising.',
        h1: 'Winter in Russia: preparing for the cold and for your health',
        publishedLabel: 'Published: February 2027',
        excerpt:
          'The Russian cold is no problem for those who plan for it. The trap is discovering it in January, wearing the wrong jacket.',
        intro:
          "For a student arriving from Tunisia, the Russian winter is the first real climate shock. It lasts several months, the days are short and temperatures can stay very low for weeks. Planned well, it causes no real difficulty. Badly anticipated, it exhausts, makes you ill and wears down your morale.",
        sections: [
          {
            heading: 'Clothing: layer rather than buy one heavy coat',
            blocks: [
              {
                type: 'p',
                text: 'The right approach is not one big down jacket but a layering system: a breathable layer against the skin, an insulating middle layer, and a windproof, waterproof jacket on top.',
              },
              {
                type: 'ul',
                items: [
                  'Thermal underwear, ideally merino wool or synthetic fibres.',
                  'A long, lined coat that covers the hips.',
                  'Hat, scarf and gloves: the most useful items, and the ones most often forgotten.',
                  'Shoes with non-slip soles, suitable for snow and ice.',
                ],
              },
              {
                type: 'strong',
                text: 'Indoor spaces are heated, often strongly. Dress so that you can remove a layer when you come in, rather than being cold when you go out.',
              },
            ],
          },
          {
            heading: 'Daylight, sleep and health: three habits',
            blocks: [
              {
                type: 'p',
                text: 'Short days disrupt sleep and mood. This is common among international students, who meet this darkness just as their workload increases. Respiratory infections also spread easily in residences, where contact is frequent.',
              },
              {
                type: 'ul',
                items: [
                  'Go outside every day, even for half an hour, to make the most of the available light.',
                  'Keep regular sleep times, including at weekends.',
                  'Drink regularly: heated air dries out the skin and mucous membranes.',
                  'Mention persistent tiredness to a doctor rather than waiting for the end of winter.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Should I buy a winter coat before leaving?',
            answer:
              'Not necessarily. A set of layers (thermal underwear, thick jumper, waterproof jacket, hat, gloves) can be prepared from Tunisia. A very warm coat is also easy to find locally, in the shops of the city where you will live.',
          },
          {
            question: 'Is the cold dangerous for a newcomer?',
            answer:
              'It is managed with simple habits: cover your extremities, avoid staying still outside, and go back inside to warm up as soon as you feel numb. Serious accidents mostly happen during long periods outdoors or after drinking alcohol.',
          },
        ],
        keywords: [
          'winter in Russia',
          'clothing for Russian cold',
          'Tunisian student Russia winter',
          'student health Russia',
          'prepare for Russian winter',
        ],
      },
      ar: {
        title: 'الشتاء في روسيا: الاستعداد للبرد والصحة | RusStudy',
        description:
          'ملابس بطبقات، وتدفئة داخلية، ونهار قصير، والتهابات الشتاء: كيف يستعد الطالب التونسي لشتاء روسي طويل دون ارتجال.',
        h1: 'الشتاء في روسيا: الاستعداد للبرد والصحة',
        publishedLabel: 'النشر: فبراير 2027',
        excerpt:
          'البرد الروسي لا يشكل مشكلة لمن يستعد له. الفخ أن تكتشفه في يناير بسترة غير مناسبة.',
        intro:
          'بالنسبة للطالب القادم من تونس، يمثل الشتاء الروسي أول صدمة مناخية حقيقية. يدوم عدة أشهر، والنهار قصير، وقد تبقى الحرارة منخفضة جدا لأسابيع. مع التحضير الجيد لا يسبب صعوبة كبيرة، أما دون تحضير فيرهق ويُمرض ويُضعف المعنويات.',
        sections: [
          {
            heading: 'الملابس: الطبقات بدل معطف ثقيل واحد',
            blocks: [
              {
                type: 'p',
                text: 'الأفضل ليس سترة واحدة سميكة، بل نظام من الطبقات: طبقة تتنفس ملاصقة للجلد، ثم طبقة عازلة في الوسط، وأخيرا سترة واقية من الريح والماء.',
              },
              {
                type: 'ul',
                items: [
                  'ملابس داخلية حرارية، ويفضل أن تكون من صوف الميرينو أو من ألياف صناعية.',
                  'معطف طويل ومبطن يغطي الوركين.',
                  'قبعة وشال وقفازات: من أكثر القطع فائدة، وأكثرها نسيانا.',
                  'أحذية بنعل مضاد للانزلاق، مناسبة للثلج والجليد.',
                ],
              },
              {
                type: 'strong',
                text: 'الأماكن الداخلية مدفأة، وغالبا بقوة. لذلك ارتد ملابس تتيح لك خلع طبقة عند الدخول، لا أن تشعر بالبرد عند الخروج.',
              },
            ],
          },
          {
            heading: 'الضوء والنوم والصحة: ثلاث عادات',
            blocks: [
              {
                type: 'p',
                text: 'النهار القصير يعطل النوم والمزاج. وهذه ظاهرة شائعة بين الطلاب الأجانب الذين يواجهون هذا الظلام في الوقت نفسه الذي يزداد فيه عبء الدراسة. كما تنتشر الالتهابات التنفسية بسهولة في السكن الجامعي بسبب كثرة الاحتكاك.',
              },
              {
                type: 'ul',
                items: [
                  'اخرج كل يوم ولو لنصف ساعة للاستفادة من الضوء المتاح.',
                  'حافظ على مواعيد نوم منتظمة، ويشمل ذلك عطلة نهاية الأسبوع.',
                  'اشرب الماء بانتظام، فالهواء المدفأ يجفف الجلد والأغشية المخاطية.',
                  'أخبر الطبيب بالإرهاق المستمر بدل انتظار نهاية الشتاء.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يجب شراء معطف شتوي قبل السفر؟',
            answer:
              'ليس بالضرورة. يمكن تحضير مجموعة من الطبقات (ملابس داخلية حرارية، وكنزة سميكة، وسترة مقاومة للماء، وقبعة، وقفازات) من تونس. ويمكن أيضا إيجاد معطف دافئ جدا في المدينة التي ستقيم فيها.',
          },
          {
            question: 'هل البرد خطير على الوافد الجديد؟',
            answer:
              'يُدار البرد بعادات بسيطة: تغطية الأطراف، وتجنب البقاء ساكنا في الخارج، والعودة للتدفؤ بمجرد الشعور بالتنميل. الحوادث الخطيرة تقع غالبا أثناء البقاء طويلا في الخارج أو بعد شرب الكحول.',
          },
        ],
        keywords: [
          'الشتاء في روسيا',
          'ملابس البرد الروسي',
          'الطالب التونسي في روسيا',
          'صحة الطالب في روسيا',
          'الاستعداد للشتاء الروسي',
        ],
      },
      ru: {
        title: 'Зима в России: как подготовиться к холоду и здоровью | RusStudy',
        description:
          'Одежда слоями, отопление в помещениях, короткий день и зимние инфекции: как тунисский студент готовится к долгой русской зиме без импровизации.',
        h1: 'Зима в России: как подготовиться к холоду и здоровью',
        publishedLabel: 'Публикация: февраль 2027',
        excerpt:
          'Русский холод не проблема для того, кто к нему готовится. Ловушка — обнаружить его в январе в неподходящей куртке.',
        intro:
          'Для студента, приехавшего из Туниса, русская зима — первый настоящий климатический шок. Она длится несколько месяцев, дни короткие, а температура может долго оставаться очень низкой. Если подготовиться заранее, трудностей почти не будет. Если нет — будет усталость, болезни и подавленное настроение.',
        sections: [
          {
            heading: 'Одежда: слоями, а не одна тяжёлая куртка',
            blocks: [
              {
                type: 'p',
                text: 'Правильный подход — не одна большая пуховик, а система слоёв: дышащий слой у кожи, утепляющий средний слой и ветрозащитная, водонепроницаемая куртка сверху.',
              },
              {
                type: 'ul',
                items: [
                  'Термобельё, лучше из шерсти мериноса или синтетики.',
                  'Длинное утеплённое пальто, закрывающее бёдра.',
                  'Шапка, шарф и перчатки: самые полезные вещи и самые часто забываемые.',
                  'Обувь с нескользящей подошвой для снега и гололёда.',
                ],
              },
              {
                type: 'strong',
                text: 'В помещениях очень тепло, часто сильно. Одевайтесь так, чтобы снять слой при входе, а не мёрзнуть на улице.',
              },
            ],
          },
          {
            heading: 'Свет, сон и здоровье: три привычки',
            blocks: [
              {
                type: 'p',
                text: 'Короткий день нарушает сон и настроение. Это частое явление у иностранных студентов, которые сталкиваются с темнотой как раз тогда, когда нагрузка в учёбе растёт. В общежитиях также легко распространяются респираторные инфекции из-за частых контактов.',
              },
              {
                type: 'ul',
                items: [
                  'Выходите на улицу каждый день, хотя бы на полчаса, чтобы использовать доступный свет.',
                  'Соблюдайте режим сна, в том числе по выходным.',
                  'Регулярно пейте воду: тёплый воздух сушит кожу и слизистые.',
                  'Сообщайте врачу о затяжной усталости, а не ждите конца зимы.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Нужно ли покупать зимнее пальто до отъезда?',
            answer:
              'Не обязательно. Набор слоёв (термобельё, толстый свитер, водонепроницаемая куртка, шапка, перчатки) можно подготовить из Туниса. Очень тёплое пальто также легко найти на месте, в магазинах того города, где вы будете жить.',
          },
          {
            question: 'Опасен ли холод для новичка?',
            answer:
              'Его переносят с простыми привычками: укрывать конечности, не стоять неподвижно на улице и заходить греться, как только чувствуете онемение. Серьёзные происшествия чаще случаются при долгом пребывании на улице или после алкоголя.',
          },
        ],
        keywords: [
          'зима в России',
          'одежда для русского холода',
          'тунисский студент в России',
          'здоровье студента в России',
          'подготовка к русской зиме',
        ],
      },
    },
  },
  {
    slug: 'logement-etudiant-russie-residence-ou-appartement',
    publishedAt: '2027-02-08',
    copy: {
      fr: {
        title: 'Logement étudiant en Russie : résidence ou appartement ? | RusStudy',
        description:
          "Résidence universitaire, chambre chez l'habitant ou appartement partagé : les avantages, les contraintes et les questions à poser avant de signer un logement étudiant en Russie.",
        h1: 'Logement étudiant en Russie : résidence ou appartement ?',
        publishedLabel: 'Publication : Février 2027',
        excerpt:
          "Le logement détermine votre quotidien autant que vos cours. Le bon choix dépend de votre budget, de votre ville et de votre tolérance à la vie en groupe.",
        intro:
          "Pour la plupart des étudiants internationaux, le premier logement est celui que l'université propose. Mais ce n'est pas toujours la seule option, ni la plus adaptée. Voici les trois formules courantes et ce qu'il faut vérifier pour chacune.",
        sections: [
          {
            heading: 'Les trois formules',
            blocks: [
              {
                type: 'ul',
                items: [
                  "La résidence universitaire : souvent la solution la plus simple pour un premier séjour, avec un cadre administratif et une vie de campus.",
                  "La chambre chez l'habitant : plus d'intimité et d'immersion, mais un contrat et des règles à bien comprendre.",
                  "L'appartement partagé : plus d'autonomie, mais des charges, un bail et une responsabilité à partager.",
                ],
              },
              {
                type: 'p',
                text: "Dans tous les cas, faites confirmer par écrit le montant, ce qui est inclus, la durée et les conditions de sortie. Un accord verbal ne protège personne.",
              },
            ],
          },
          {
            heading: 'Ce qu’il faut vérifier avant de signer',
            blocks: [
              {
                type: 'ul',
                items: [
                  "La notification de séjour : le logeur doit pouvoir la réaliser, et c'est une obligation qui ne s'improvise pas.",
                  "Les charges et les dépôts : demandez le détail par écrit, et les conditions de restitution.",
                  "Les transports : vérifiez le temps réel jusqu'à l'université, en hiver, pas seulement sur une carte.",
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Peut-on demander un logement universitaire depuis la Tunisie ?',
            answer:
              "Cela dépend de l'université et de ses procédures. Renseignez-vous auprès du service des relations internationales avant votre départ, car les modalités et les places varient.",
          },
          {
            question: 'Faut-il un garant pour louer un appartement ?',
            answer:
              "Les exigences varient selon le bailleur et la ville. Demandez-les à l'avance, et ne versez aucun dépôt sans contrat écrit et vérifiable.",
          },
        ],
        keywords: [
          'logement étudiant Russie',
          'résidence universitaire Russie',
          'louer appartement Russie étudiant',
          'logement étudiant tunisien',
          'chambre chez l’habitant Russie',
        ],
      },
      en: {
        title: 'Student housing in Russia: dormitory or apartment? | RusStudy',
        description:
          'University dormitory, room with a host family or shared flat: the advantages, constraints and questions to ask before signing student housing in Russia.',
        h1: 'Student housing in Russia: dormitory or apartment?',
        publishedLabel: 'Published: February 2027',
        excerpt:
          'Your housing shapes your daily life as much as your courses. The right choice depends on your budget, your city and how well you handle living in a group.',
        intro:
          'For most international students, the first home is the one the university offers. But it is not always the only option, nor the best one. Here are the three common formats and what to check for each.',
        sections: [
          {
            heading: 'The three options',
            blocks: [
              {
                type: 'ul',
                items: [
                  'University dormitory: often the simplest option for a first stay, with an administrative framework and campus life.',
                  'Room with a host family: more privacy and immersion, but a contract and rules to understand well.',
                  'Shared apartment: more independence, but bills, a lease and responsibilities to share.',
                ],
              },
              {
                type: 'p',
                text: 'In every case, have the amount, what is included, the duration and the exit conditions confirmed in writing. A verbal agreement protects no one.',
              },
            ],
          },
          {
            heading: 'What to check before signing',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Residence registration: the landlord must be able to complete it, and this obligation cannot be improvised.',
                  'Bills and deposits: ask for the details in writing, along with the conditions for getting the deposit back.',
                  'Transport: check the real travel time to the university in winter, not just on a map.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can I apply for a university dormitory from Tunisia?',
            answer:
              'It depends on the university and its procedures. Check with the international relations office before you leave, because the arrangements and available places vary.',
          },
          {
            question: 'Do I need a guarantor to rent an apartment?',
            answer:
              'Requirements vary by landlord and city. Ask in advance, and never pay a deposit without a written, verifiable contract.',
          },
        ],
        keywords: [
          'student housing Russia',
          'university dormitory Russia',
          'rent apartment Russia student',
          'Tunisian student housing',
          'room with host family Russia',
        ],
      },
      ar: {
        title: 'السكن الطلابي في روسيا: إقامة جامعية أم شقة؟ | RusStudy',
        description:
          'الإقامة الجامعية، أو غرفة لدى عائلة، أو شقة مشتركة: المزايا والقيود والأسئلة الواجب طرحها قبل توقيع عقد سكن طلابي في روسيا.',
        h1: 'السكن الطلابي في روسيا: إقامة جامعية أم شقة؟',
        publishedLabel: 'النشر: فبراير 2027',
        excerpt:
          'السكن يحدد يومك بقدر ما تحدده دروسك. والاختيار الصحيح يعتمد على ميزانيتك ومدينتك وقدرتك على العيش ضمن مجموعة.',
        intro:
          'بالنسبة لمعظم الطلاب الأجانب، يكون أول سكن هو ما تعرضه الجامعة. لكنه ليس الخيار الوحيد دائما ولا الأنسب دائما. إليك الصيغ الثلاث الشائعة وما يجب التحقق منه في كل واحدة.',
        sections: [
          {
            heading: 'الصيغ الثلاث',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الإقامة الجامعية: غالبا الخيار الأبسط لإقامة أولى، مع إطار إداري وحياة جامعية.',
                  'غرفة لدى عائلة: خصوصية أكبر واندماج أعمق، لكن مع عقد وقواعد يجب فهمها جيدا.',
                  'شقة مشتركة: استقلالية أكبر، لكن مع فواتير وعقد إيجار ومسؤوليات تُقسم بين الشركاء.',
                ],
              },
              {
                type: 'p',
                text: 'في كل الحالات، اطلب تأكيد المبلغ وما يشمله ومدة العقد وشروط الخروج كتابيا. فالاتفاق الشفهي لا يحمي أحدا.',
              },
            ],
          },
          {
            heading: 'ما يجب التحقق منه قبل التوقيع',
            blocks: [
              {
                type: 'ul',
                items: [
                  'تسجيل الإقامة: يجب أن يتمكن المؤجر من إتمامه، وهو التزام لا يُرتجل.',
                  'الفواتير والتأمينات: اطلب التفاصيل كتابيا، مع شروط استرداد التأمين.',
                  'المواصلات: تحقق من زمن الوصول الفعلي إلى الجامعة في الشتاء، لا على الخريطة فقط.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكن طلب سكن جامعي من تونس؟',
            answer:
              'يعتمد ذلك على الجامعة وإجراءاتها. استفسر من مكتب العلاقات الدولية قبل السفر، لأن الترتيبات والأماكن المتاحة تختلف.',
          },
          {
            question: 'هل أحتاج إلى ضامن لاستئجار شقة؟',
            answer:
              'تختلف الشروط حسب المؤجر والمدينة. اسأل عنها مسبقا، ولا تدفع أي تأمين دون عقد مكتوب وقابل للتحقق.',
          },
        ],
        keywords: [
          'السكن الطلابي في روسيا',
          'الإقامة الجامعية في روسيا',
          'استئجار شقة في روسيا',
          'السكن للطالب التونسي',
          'غرفة لدى عائلة في روسيا',
        ],
      },
      ru: {
        title: 'Студенческое жильё в России: общежитие или квартира? | RusStudy',
        description:
          'Общежитие, комната у принимающей семьи или совместная квартира: плюсы, ограничения и вопросы, которые стоит задать до подписания договора на студенческое жильё в России.',
        h1: 'Студенческое жильё в России: общежитие или квартира?',
        publishedLabel: 'Публикация: февраль 2027',
        excerpt:
          'Жильё влияет на повседневную жизнь не меньше, чем занятия. Правильный выбор зависит от бюджета, города и готовности жить в коллективе.',
        intro:
          'Для большинства иностранных студентов первое жильё — то, что предлагает университет. Но это не всегда единственный и не всегда лучший вариант. Вот три распространённых формата и то, что проверить в каждом из них.',
        sections: [
          {
            heading: 'Три варианта',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Общежитие: часто самый простой вариант для первого периода, с административной поддержкой и студенческой жизнью.',
                  'Комната у принимающей семьи: больше приватности и погружения, но нужно хорошо понимать договор и правила.',
                  'Совместная квартира: больше самостоятельности, но счета, аренда и ответственность делятся между жильцами.',
                ],
              },
              {
                type: 'p',
                text: 'Во всех случаях попросите письменно подтвердить сумму, что входит в оплату, срок и условия выезда. Устная договорённость никого не защищает.',
              },
            ],
          },
          {
            heading: 'Что проверить перед подписанием',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Регистрация по месту пребывания: её должен уметь оформить арендодатель, и это обязательство нельзя откладывать на потом.',
                  'Коммунальные платежи и залог: попросите детали в письменном виде и условия возврата залога.',
                  'Транспорт: проверьте реальное время до университета зимой, а не только по карте.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'choisir-son-universite-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли подать заявку на общежитие из Туниса?',
            answer:
              'Это зависит от университета и его процедур. Уточните в отделе международных связей до отъезда, так как условия и количество мест различаются.',
          },
          {
            question: 'Нужен ли поручитель, чтобы снять квартиру?',
            answer:
              'Требования зависят от арендодателя и города. Уточняйте их заранее и не вносите залог без письменного, проверяемого договора.',
          },
        ],
        keywords: [
          'студенческое жильё в России',
          'общежитие в России',
          'снять квартиру студенту в России',
          'жильё для тунисского студента',
          'комната у принимающей семьи',
        ],
      },
    },
  },
  {
    slug: 'compte-bancaire-transferts-argent-russie-tunisie',
    publishedAt: '2027-02-15',
    copy: {
      fr: {
        title: "Argent en Russie : compte bancaire et transferts depuis la Tunisie | RusStudy",
        description:
          "Ouvrir un compte bancaire en Russie, transférer de l'argent depuis la Tunisie et éviter les blocages : ce qu'un étudiant doit prévoir, et ce qui change selon les banques.",
        h1: "Argent en Russie : compte bancaire et transferts depuis la Tunisie",
        publishedLabel: 'Publication : Février 2027',
        excerpt:
          "Sans compte local et sans méthode de transfert de secours, un étudiant peut se retrouver sans accès à son argent. Mieux vaut le prévoir avant le départ.",
        intro:
          "La question financière paraît secondaire jusqu'au premier loyer ou à la première facture à payer. Les transferts internationaux et l'ouverture d'un compte sont soumis à des règles et des vérifications qui évoluent. Ce qui suit décrit les points à anticiper, sans chiffres qui pourraient être dépassés.",
        sections: [
          {
            heading: 'Avant le départ : ne jamais dépendre d’une seule méthode',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Renseigner votre banque en Tunisie sur les virements vers la Russie : ils peuvent être restreints ou demander des justificatifs.',
                  "Prévoir une somme de départ suffisante pour les premières semaines, en liquide ou sur une carte acceptée à l'étranger.",
                  "Garder une copie de vos justificatifs de revenus ou de bourse, utile pour l'ouverture d'un compte.",
                ],
              },
              {
                type: 'strong',
                text: "Les restrictions bancaires sont susceptibles de changer. Vérifiez-les auprès de votre banque au moment de votre démarche, et non d'après un article.",
              },
              { type: 'related', slug: 'frais-caches-etudes-en-russie' },
            ],
          },
          {
            heading: 'Sur place : compte, carte et budget mensuel',
            blocks: [
              {
                type: 'p',
                text: "L'ouverture d'un compte local demande en général des documents d'identité et d'inscription, et la banque peut exiger des justificatifs de votre statut d'étudiant. Renseignez-vous auprès de votre université, qui connaît les banques habituées à accueillir les étudiants internationaux.",
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Puis-je payer mon logement et mes études depuis un compte tunisien ?',
            answer:
              "Cela dépend des règles bancaires et des paiements acceptés, qui changent. Votre banque en Tunisie et votre université peuvent vous dire quelles méthodes fonctionnent aujourd'hui pour votre cas.",
          },
          {
            question: 'Faut-il garder de l’argent liquide ?',
            answer:
              "Une petite somme de départ est prudente, pour les premières dépenses urgentes. Ne transportez pas de montants importants, et conservez toujours une méthode de paiement de secours.",
          },
        ],
        keywords: [
          'compte bancaire Russie étudiant',
          'transfert argent Tunisie Russie',
          'budget étudiant Russie',
          'payer études en Russie depuis la Tunisie',
          'banque étudiant international Russie',
        ],
      },
      en: {
        title: 'Money in Russia: bank account and transfers from Tunisia | RusStudy',
        description:
          'Opening a bank account in Russia, transferring money from Tunisia and avoiding blocked payments: what a student should plan for, and what varies between banks.',
        h1: 'Money in Russia: bank account and transfers from Tunisia',
        publishedLabel: 'Published: February 2027',
        excerpt:
          'Without a local account and a backup transfer method, a student can end up without access to their money. It is best to plan this before departure.',
        intro:
          'Money matters seem secondary until the first rent or bill is due. International transfers and account opening are subject to rules and checks that change over time. What follows describes the points to anticipate, without figures that could become outdated.',
        sections: [
          {
            heading: 'Before leaving: never rely on a single method',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Ask your bank in Tunisia about transfers to Russia: they may be restricted or require supporting documents.',
                  'Take enough starting money for the first weeks, in cash or on a card accepted abroad.',
                  'Keep copies of your income or scholarship documents, useful when opening an account.',
                ],
              },
              {
                type: 'strong',
                text: 'Banking restrictions can change. Check them with your bank when you act, not based on an article.',
              },
              { type: 'related', slug: 'frais-caches-etudes-en-russie' },
            ],
          },
          {
            heading: 'On arrival: account, card and monthly budget',
            blocks: [
              {
                type: 'p',
                text: 'Opening a local account generally requires identity and enrolment documents, and the bank may ask for proof of your student status. Check with your university, which knows the banks used to welcoming international students.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can I pay for my housing and studies from a Tunisian account?',
            answer:
              'It depends on banking rules and accepted payments, which change. Your bank in Tunisia and your university can tell you which methods work today for your situation.',
          },
          {
            question: 'Should I carry cash?',
            answer:
              'A small amount for urgent first expenses is sensible. Do not carry large sums, and always keep a backup payment method.',
          },
        ],
        keywords: [
          'Russia student bank account',
          'money transfer Tunisia Russia',
          'student budget Russia',
          'pay for studies in Russia from Tunisia',
          'international student bank Russia',
        ],
      },
      ar: {
        title: 'المال في روسيا: حساب بنكي وتحويلات من تونس | RusStudy',
        description:
          'فتح حساب بنكي في روسيا، وتحويل الأموال من تونس، وتجنب تعطل المدفوعات: ما يجب على الطالب التخطيط له، وما يختلف بين البنوك.',
        h1: 'المال في روسيا: حساب بنكي وتحويلات من تونس',
        publishedLabel: 'النشر: فبراير 2027',
        excerpt:
          'دون حساب محلي وطريقة تحويل احتياطية، قد يجد الطالب نفسه دون وصول إلى أمواله. الأفضل التخطيط لذلك قبل السفر.',
        intro:
          'تبدو المسألة المالية ثانوية حتى يحين موعد أول إيجار أو أول فاتورة. التحويلات الدولية وفتح الحساب تخضعان لقواعد وإجراءات تحقق تتغير مع الوقت. وفيما يلي النقاط التي يجب توقعها، دون أرقام قد تصبح قديمة.',
        sections: [
          {
            heading: 'قبل السفر: لا تعتمد على وسيلة واحدة أبدا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'استفسر من بنكك في تونس عن التحويلات نحو روسيا، فقد تكون مقيدة أو تطلب وثائق داعمة.',
                  'احمل مبلغا كافيا للأسابيع الأولى، نقدا أو على بطاقة مقبولة في الخارج.',
                  'احتفظ بنسخ من وثائق دخلك أو منحتك، فهي مفيدة عند فتح الحساب.',
                ],
              },
              {
                type: 'strong',
                text: 'القيود البنكية قابلة للتغير. تحقق منها لدى بنكك عند التنفيذ، لا اعتمادا على مقال.',
              },
              { type: 'related', slug: 'frais-caches-etudes-en-russie' },
            ],
          },
          {
            heading: 'عند الوصول: الحساب والبطاقة والميزانية الشهرية',
            blocks: [
              {
                type: 'p',
                text: 'فتح حساب محلي يتطلب عادة وثائق الهوية والتسجيل، وقد يطلب البنك إثبات صفتك كطالب. استفسر من جامعتك، فهي تعرف البنوك المعتادة على استقبال الطلاب الأجانب.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكنني دفع السكن والدراسة من حساب تونسي؟',
            answer:
              'يعتمد ذلك على القواعد البنكية والمدفوعات المقبولة، وهي تتغير. يمكن لبنكك في تونس وجامعتك إخبارك بالوسائل التي تعمل اليوم في حالتك.',
          },
          {
            question: 'هل يجب أن أحمل نقودا؟',
            answer:
              'مبلغ صغير للنفقات العاجلة الأولى أمر حكيم. لا تحمل مبالغ كبيرة، واحتفظ دائما بوسيلة دفع احتياطية.',
          },
        ],
        keywords: [
          'حساب بنكي للطالب في روسيا',
          'تحويل الأموال من تونس إلى روسيا',
          'ميزانية الطالب في روسيا',
          'دفع تكاليف الدراسة في روسيا من تونس',
          'بنك الطالب الدولي في روسيا',
        ],
      },
      ru: {
        title: 'Деньги в России: банковский счёт и переводы из Туниса | RusStudy',
        description:
          'Открытие банковского счёта в России, перевод денег из Туниса и защита от заблокированных платежей: что стоит предусмотреть студенту и что различается между банками.',
        h1: 'Деньги в России: банковский счёт и переводы из Туниса',
        publishedLabel: 'Публикация: февраль 2027',
        excerpt:
          'Без местного счёта и запасного способа перевода студент может остаться без доступа к своим деньгам. Лучше предусмотреть это до отъезда.',
        intro:
          'Финансовый вопрос кажется второстепенным, пока не приходит срок первой аренды или первого счёта. Международные переводы и открытие счёта подчиняются правилам и проверкам, которые меняются. Ниже — то, что стоит предусмотреть, без цифр, которые могут устареть.',
        sections: [
          {
            heading: 'До отъезда: никогда не полагайтесь на один способ',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Уточните в банке в Тунисе, как работают переводы в Россию: они могут быть ограничены или требовать подтверждающих документов.',
                  'Возьмите достаточную сумму на первые недели — наличными или на карте, принимаемой за границей.',
                  'Сохраните копии документов о доходе или стипендии: они нужны при открытии счёта.',
                ],
              },
              {
                type: 'strong',
                text: 'Банковские ограничения могут меняться. Проверяйте их в банке в момент действия, а не по статье.',
              },
              { type: 'related', slug: 'frais-caches-etudes-en-russie' },
            ],
          },
          {
            heading: 'На месте: счёт, карта и месячный бюджет',
            blocks: [
              {
                type: 'p',
                text: 'Открытие местного счёта обычно требует документов, удостоверяющих личность и зачисление, а банк может попросить подтверждение статуса студента. Уточните в университете: там знают банки, которые привыкли работать с иностранными студентами.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли оплачивать жильё и учёбу с тунисского счёта?',
            answer:
              'Это зависит от банковских правил и принимаемых платежей, которые меняются. Ваш банк в Тунисе и университет подскажут, какие способы работают сегодня в вашем случае.',
          },
          {
            question: 'Нужно ли брать с собой наличные?',
            answer:
              'Небольшая сумма на срочные первые расходы — разумно. Не везите крупных сумм и всегда держите запасной способ оплаты.',
          },
        ],
        keywords: [
          'банковский счёт студента в России',
          'перевод денег из Туниса в Россию',
          'бюджет студента в России',
          'оплата учёбы в России из Туниса',
          'банк для иностранного студента в России',
        ],
      },
    },
  },
  {
    slug: 'vie-etudiante-integration-russie',
    publishedAt: '2027-02-22',
    copy: {
      fr: {
        title: "Vie étudiante en Russie : s'intégrer, se faire des amis, tenir la durée | RusStudy",
        description:
          "Langue, groupes d'étudiants, vie associative et solitude : comment un étudiant tunisien construit sa vie sociale en Russie et tient la durée de ses études.",
        h1: "Vie étudiante en Russie : s'intégrer et tenir la durée",
        publishedLabel: 'Publication : Février 2027',
        excerpt:
          "Les diplômes se réussissent rarement seul. Ce sont les liens qui permettent de passer les moments difficiles, et ils se construisent dès les premières semaines.",
        intro:
          "Partir étudier à l'étranger, c'est aussi quitter son réseau. La solitude est l'un des points faibles les plus fréquents des étudiants internationaux, surtout pendant les mois d'hiver. Bonne nouvelle : ce risque se gère avec des gestes simples et réguliers.",
        sections: [
          {
            heading: 'Les premiers liens : là où l’on est déjà',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Les autres étudiants internationaux de votre promotion : ils vivent la même chose et cherchent aussi des amis.",
                  "Les associations et clubs de l'université, souvent ouverts aux étudiants étrangers.",
                  "Les groupes d'entraide par langue ou par pays, qui aident aussi sur les démarches.",
                ],
              },
              {
                type: 'p',
                text: "Inscrivez-vous à une activité régulière, même modeste. La répétition du même rendez-vous crée bien plus de liens qu'une grande soirée isolée.",
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'Le russe : le levier le plus sous-estimé',
            blocks: [
              {
                type: 'p',
                text: "Parler la langue locale change tout : l'accès aux amis russes, aux administrations, aux petits services du quotidien. Les étudiants qui progressent vite ont en général commencé avant leur arrivée, puis pratiqué chaque jour.",
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Que faire quand on se sent très seul ?',
            answer:
              "C'est un signal à prendre au sérieux. Parlez-en à quelqu'un de confiance, en Tunisie ou sur place, et rapprochez-vous de l'université : conseillers et services d'accompagnement existent pour cela.",
          },
          {
            question: "Faut-il parler russe pour s'intégrer ?",
            answer:
              "Ce n'est pas indispensable pour débuter, mais c'est ce qui permet d'aller au-delà du cercle des étudiants étrangers. L'apprentissage progresse plus vite en pratique quotidienne.",
          },
        ],
        keywords: [
          'vie étudiante en Russie',
          "s'intégrer en Russie étudiant",
          'étudiant tunisien en Russie',
          'solitude étudiant international',
          'apprendre le russe étudiant',
        ],
      },
      en: {
        title: 'Student life in Russia: fitting in, making friends, lasting the course | RusStudy',
        description:
          'Language, student groups, clubs and loneliness: how a Tunisian student builds a social life in Russia and sees their studies through.',
        h1: 'Student life in Russia: fitting in and seeing your studies through',
        publishedLabel: 'Published: February 2027',
        excerpt:
          'Degrees are rarely achieved alone. It is connections that get you through hard moments, and they are built in the first few weeks.',
        intro:
          'Studying abroad also means leaving your network behind. Loneliness is one of the most common weak points for international students, especially during the winter months. The good news is that this risk is managed with simple, regular habits.',
        sections: [
          {
            heading: 'First connections: where you already are',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Other international students in your cohort: they face the same things and are also looking for friends.',
                  'University clubs and associations, often open to foreign students.',
                  'Mutual-support groups by language or country, which also help with procedures.',
                ],
              },
              {
                type: 'p',
                text: 'Join one regular activity, even a modest one. Returning to the same weekly meeting builds far more connections than a single large evening.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'Russian: the most underestimated lever',
            blocks: [
              {
                type: 'p',
                text: 'Speaking the local language changes everything: access to Russian friends, to administrations and to everyday services. Students who progress fastest usually started before arriving, then practised every day.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'What should I do when I feel very lonely?',
            answer:
              'Treat it as a signal to take seriously. Talk to someone you trust, in Tunisia or locally, and get in touch with the university: advisers and support services exist for this.',
          },
          {
            question: 'Do I need to speak Russian to fit in?',
            answer:
              'Not to start, but it is what allows you to go beyond the circle of foreign students. Learning moves faster through daily practice.',
          },
        ],
        keywords: [
          'student life in Russia',
          'fitting in Russia student',
          'Tunisian student in Russia',
          'international student loneliness',
          'learn Russian as a student',
        ],
      },
      ar: {
        title: 'الحياة الطلابية في روسيا: الاندماج وتكوين الصداقات والاستمرار | RusStudy',
        description:
          'اللغة ومجموعات الطلاب والنوادي والشعور بالوحدة: كيف يبني الطالب التونسي حياته الاجتماعية في روسيا ويُتم دراسته.',
        h1: 'الحياة الطلابية في روسيا: الاندماج وإتمام الدراسة',
        publishedLabel: 'النشر: فبراير 2027',
        excerpt:
          'الشهادات نادرا ما تُنال بمفردك. الروابط هي ما يعينك في الأوقات الصعبة، وتُبنى منذ الأسابيع الأولى.',
        intro:
          'الدراسة في الخارج تعني أيضا ترك شبكتك الاجتماعية. والوحدة من أكثر نقاط الضعف شيوعا لدى الطلاب الأجانب، خاصة في أشهر الشتاء. والخبر الجيد أن هذا الخطر يُدار بعادات بسيطة ومنتظمة.',
        sections: [
          {
            heading: 'الروابط الأولى: حيث أنت بالفعل',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الطلاب الأجانب الآخرون في دفعتك: يعيشون الأمور نفسها ويبحثون عن أصدقاء أيضا.',
                  'نوادي الجامعة وجمعياتها، وغالبا ما تكون مفتوحة للطلاب الأجانب.',
                  'مجموعات التعاون حسب اللغة أو البلد، وهي تساعد أيضا في الإجراءات.',
                ],
              },
              {
                type: 'p',
                text: 'انضم إلى نشاط منتظم واحد، ولو كان متواضعا. فتكرار اللقاء نفسه كل أسبوع يصنع روابط أكثر بكثير من أمسية كبيرة واحدة.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'اللغة الروسية: الرافعة الأكثر إهمالا',
            blocks: [
              {
                type: 'p',
                text: 'التحدث باللغة المحلية يغير كل شيء: الوصول إلى أصدقاء روس، والإدارات، والخدمات اليومية البسيطة. والطلاب الأسرع تقدما بدأوا عادة قبل الوصول، ثم مارسوا اللغة كل يوم.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'ماذا أفعل عندما أشعر بوحدة شديدة؟',
            answer:
              'اعتبر ذلك إشارة تستحق الجدية. تحدث مع شخص تثق به، في تونس أو في مكان إقامتك، وتواصل مع الجامعة، فهناك مرشدون وخدمات دعم لهذا الغرض.',
          },
          {
            question: 'هل أحتاج إلى التحدث بالروسية للاندماج؟',
            answer:
              'ليس ضروريا للبداية، لكنه ما يتيح لك تجاوز دائرة الطلاب الأجانب. ويتقدم التعلم أسرع بالممارسة اليومية.',
          },
        ],
        keywords: [
          'الحياة الطلابية في روسيا',
          'الاندماج في روسيا للطالب',
          'الطالب التونسي في روسيا',
          'الوحدة لدى الطالب الدولي',
          'تعلم الروسية للطالب',
        ],
      },
      ru: {
        title: 'Студенческая жизнь в России: адаптация, друзья и доведение учёбы до конца | RusStudy',
        description:
          'Язык, студенческие группы, клубы и одиночество: как тунисский студент строит социальную жизнь в России и доводит учёбу до конца.',
        h1: 'Студенческая жизнь в России: адаптация и доведение учёбы до конца',
        publishedLabel: 'Публикация: февраль 2027',
        excerpt:
          'Дипломы редко получают в одиночку. Связи помогают пройти трудные моменты, и их строят уже в первые недели.',
        intro:
          'Учёба за границей — это также уход из привычного круга общения. Одиночество — одна из самых частых слабых сторон иностранных студентов, особенно зимой. Хорошая новость: с этим риском справляются простые и регулярные привычки.',
        sections: [
          {
            heading: 'Первые связи: там, где вы уже есть',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Другие иностранные студенты вашего курса: они переживают то же самое и тоже ищут друзей.',
                  'Клубы и студенческие объединения университета, часто открытые для иностранцев.',
                  'Группы взаимопомощи по языку или стране, которые помогают и с документами.',
                ],
              },
              {
                type: 'p',
                text: 'Запишитесь на одно регулярное занятие, пусть даже скромное. Повторяющаяся встреча создаёт гораздо больше связей, чем одна большая вечеринка.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'Русский язык: самый недооценённый рычаг',
            blocks: [
              {
                type: 'p',
                text: 'Разговор на местном языке меняет всё: доступ к русским друзьям, к учреждениям и к повседневным услугам. Быстрее всего прогрессируют те, кто начал до приезда и практиковался каждый день.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Что делать, когда очень одиноко?',
            answer:
              'Относитесь к этому как к серьёзному сигналу. Поговорите с тем, кому доверяете, в Тунисе или на месте, и обратитесь в университет: для этого есть кураторы и службы поддержки.',
          },
          {
            question: 'Нужно ли говорить по-русски, чтобы адаптироваться?',
            answer:
              'Для начала не обязательно, но именно язык позволяет выйти за пределы круга иностранных студентов. Учиться быстрее помогает ежедневная практика.',
          },
        ],
        keywords: [
          'студенческая жизнь в России',
          'адаптация студента в России',
          'тунисский студент в России',
          'одиночество иностранного студента',
          'изучение русского языка студентом',
        ],
      },
    },
  },
];
