import type { DeepCityByLang } from './types';

/*
 * Contenu profond des cinq villes de région : Toula, Elets, Lipetsk,
 * Voronej et Orel.
 *
 * Sourcing : faits géographiques, historiques et patrimoniaux publics et
 * vérifiables (position, distance approximative de Moscou, identité
 * historique de la ville). Les montants cités sont ceux de CITY_COSTS,
 * déjà affichés dans le tableau de la page.
 *
 * Ces pages disent honnêtement ce que les villes de région coûtent en
 * confort — communauté plus réduite, offre halal moins dense, russe
 * indispensable plus tôt — plutôt que de ne vanter que le prix.
 */

export const TOULA_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "À environ 180 kilomètres au sud de Moscou, Toula est la plus proche de la capitale parmi les villes de région du réseau. C'est une ville industrielle ancienne, dotée d'un kremlin du XVIᵉ siècle, célèbre dans toute la Russie pour ses samovars et son pain d'épices.",
    sections: [
      {
        heading: 'Où se trouve Toula et comment on y arrive',
        paragraphs: [
          "Toula se situe sur la route historique reliant Moscou au sud du pays. Sa proximité avec la capitale est son principal atout pratique : le trajet en train se fait dans la journée, ce qui permet de rejoindre facilement l'aéroport international à l'arrivée comme au départ en vacances.",
          "Concrètement, vous atterrissez à Moscou puis continuez en train. C'est un trajet simple, que les étudiants font sans difficulté dès la première fois, et qui reste bon marché.",
        ],
      },
      {
        heading: 'Une ville de taille moyenne, et ce que cela change',
        paragraphs: [
          "Toula n'est ni une métropole ni un village. Le centre se parcourt à pied, les trajets quotidiens sont courts, et l'on finit par reconnaître les visages dans son quartier — ce qui est rassurant quand on arrive d'un autre continent.",
          "Le revers est réel : moins de vie nocturne, moins d'événements, et une offre commerciale plus restreinte qu'à Moscou. Pour un étudiant qui vient travailler, c'est souvent un avantage ; pour qui cherche l'effervescence d'une capitale, c'est un manque.",
        ],
      },
      {
        heading: 'Un budget nettement allégé',
        paragraphs: [
          "C'est l'argument central des villes de région, et il est massif. Le tableau ci-dessus donne les montants exacts : logement comme vie courante y sont très en dessous des niveaux moscovites.",
          "Sur cinq ou six ans d'études, l'écart cumulé entre une ville de région et la capitale représente plusieurs milliers d'euros. C'est souvent ce qui fait la différence entre un projet tenable et un projet abandonné en cours de route.",
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "La résidence universitaire est généralement proche des bâtiments d'enseignement, parfois à quelques minutes à pied. Cette proximité pèse lourd en hiver, et elle libère un temps considérable sur une semaine.",
          "Le kremlin, les musées et les environs — dont le domaine de Iasnaïa Poliana, où vécut Tolstoï — offrent de quoi sortir le week-end sans dépenser beaucoup.",
        ],
      },
      {
        heading: 'Ce qu’il faut savoir avant de choisir une ville de région',
        paragraphs: [
          "Soyons honnêtes : la communauté maghrébine y est plus réduite qu'à Moscou ou Kazan, et l'offre alimentaire halal moins dense. Elle existe, mais elle se cherche davantage, surtout les premières semaines.",
          "Surtout, le russe devient indispensable plus tôt. Dans une grande ville, on peut survivre quelques mois en anglais ; dans une ville de région, la langue locale s'impose vite. Ce n'est pas un défaut : les étudiants qui y passent leur année préparatoire progressent souvent plus vite, précisément parce qu'ils n'ont pas le choix.",
        ],
      },
      {
        heading: "L'université partenaire sur place",
        paragraphs: [
          "Toula accueille l'Université d'État de Toula, établissement public pluridisciplinaire. Dans une ville dont l'histoire industrielle est ancienne, les filières techniques ont un ancrage réel : le tissu économique local et l'enseignement se répondent, ce qui compte pour les stages et les projets de fin d'études.",
          "Le détail des filières, des durées et des frais figure sur la page consacrée à l'établissement, accessible depuis la liste en haut de cette page.",
        ],
      },
    ],
  },
  en: {
    intro:
      'Around 180 kilometres south of Moscow, Tula is the closest to the capital among the regional cities in the network. It is an old industrial city with a sixteenth-century kremlin, famous across Russia for its samovars and its gingerbread.',
    sections: [
      {
        heading: 'Where Tula is and how to get there',
        paragraphs: [
          'Tula sits on the historic road linking Moscow to the south of the country. Its proximity to the capital is its main practical asset: the train journey takes part of a day, making it easy to reach the international airport on arrival and when leaving for the holidays.',
          'In practice, you land in Moscow and continue by train. It is a simple journey, which students manage without difficulty from the very first time, and it stays inexpensive.',
        ],
      },
      {
        heading: 'A medium-sized city, and what that changes',
        paragraphs: [
          'Tula is neither a metropolis nor a village. The centre is walkable, daily journeys are short, and you end up recognising faces in your neighbourhood — which is reassuring when you have arrived from another continent.',
          'The downside is real: less nightlife, fewer events, and a narrower retail offering than Moscow. For a student who has come to work, that is often an advantage; for anyone seeking the buzz of a capital, it is a gap.',
        ],
      },
      {
        heading: 'A markedly lighter budget',
        paragraphs: [
          'This is the central argument for the regional cities, and it is a substantial one. The table above gives the exact figures: both accommodation and living costs sit well below Moscow levels.',
          'Across five or six years of study, the cumulative gap between a regional city and the capital runs to several thousand euros. That is often what separates a viable plan from one abandoned halfway through.',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'Halls of residence are generally close to the teaching buildings, sometimes a few minutes on foot. That proximity counts heavily in winter, and it frees up considerable time across a week.',
          'The kremlin, the museums and the surroundings — including the Yasnaya Polyana estate where Tolstoy lived — offer plenty to do at weekends without spending much.',
        ],
      },
      {
        heading: 'What to know before choosing a regional city',
        paragraphs: [
          'Let us be honest: the Maghrebi community is smaller here than in Moscow or Kazan, and the halal food offering less dense. It exists, but it takes more searching, particularly in the first weeks.',
          'Above all, Russian becomes essential sooner. In a major city you can survive a few months on English; in a regional city the local language asserts itself quickly. That is not a flaw: students who spend their preparatory year there often progress faster, precisely because they have no choice.',
        ],
      },
      {
        heading: 'The partner university on site',
        paragraphs: [
          'Tula is home to Tula State University, a public multidisciplinary institution. In a city with a long industrial history, technical programmes have a real anchoring: the local economic fabric and the teaching answer each other, which matters for placements and final-year projects.',
          'The detail of programmes, durations and fees is on the page devoted to the institution, reachable from the list at the top of this page.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'على بُعد نحو 180 كيلومترًا جنوب موسكو، تولا هي الأقرب إلى العاصمة من بين مدن الأقاليم في الشبكة. وهي مدينة صناعية عريقة، بها كرملين يعود إلى القرن السادس عشر، ومشهورة في كامل روسيا بالسماورات وخبز التوابل.',
    sections: [
      {
        heading: 'أين تقع تولا وكيف تصل إليها',
        paragraphs: [
          'تقع تولا على الطريق التاريخي الرابط بين موسكو وجنوب البلاد. وقربها من العاصمة هو ميزتها العملية الأولى: فرحلة القطار تتم في جزء من اليوم، ما يسهّل بلوغ المطار الدولي عند الوصول وعند السفر في العطل.',
          'عمليًا، تهبط في موسكو ثم تواصل بالقطار. وهي رحلة بسيطة ينجزها الطلبة دون صعوبة منذ المرة الأولى، وتبقى غير مكلفة.',
        ],
      },
      {
        heading: 'مدينة متوسطة الحجم، وما يغيّره ذلك',
        paragraphs: [
          'تولا ليست حاضرة كبرى ولا قرية. المركز يُجال فيه مشيًا، والتنقّلات اليومية قصيرة، وتنتهي بأن تتعرّف على الوجوه في حيّك — وهو أمر مطمئن حين تأتي من قارة أخرى.',
          'والمقابل حقيقي: حياة ليلية أقل، وأحداث أقل، وعرض تجاري أضيق منه في موسكو. وبالنسبة إلى طالب جاء ليعمل، يكون ذلك ميزة غالبًا؛ أما من يبحث عن صخب العواصم فسيجده نقصًا.',
        ],
      },
      {
        heading: 'ميزانية أخفّ بوضوح',
        paragraphs: [
          'هذه هي الحجّة المركزية لمدن الأقاليم، وهي حجّة ثقيلة. الجدول أعلاه يعطي المبالغ بدقة: فالسكن والمعيشة كلاهما دون المستويات الموسكوفية بكثير.',
          'وعلى مدى خمس أو ست سنوات دراسة، يمثّل الفارق المتراكم بين مدينة إقليمية والعاصمة آلاف الأورو. وهو غالبًا ما يفصل بين مشروع قابل للاستمرار ومشروع يُهجر في منتصف الطريق.',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'تكون الإقامة الجامعية عمومًا قريبة من مباني التدريس، وأحيانًا على بعد دقائق مشيًا. وهذا القرب يُحسب كثيرًا في الشتاء، ويحرّر وقتًا معتبرًا على مدار الأسبوع.',
          'ويوفّر الكرملين والمتاحف والمحيط — ومنه ضيعة ياسنايا بوليانا حيث عاش تولستوي — ما يكفي للخروج في عطلة نهاية الأسبوع دون إنفاق كبير.',
        ],
      },
      {
        heading: 'ما ينبغي معرفته قبل اختيار مدينة إقليمية',
        paragraphs: [
          'لنكن صرحاء: الجالية المغاربية هنا أصغر منها في موسكو أو قازان، وعرض الطعام الحلال أقلّ كثافة. هو موجود، لكنه يتطلّب بحثًا أكبر، خاصة في الأسابيع الأولى.',
          'والأهم أن الروسية تصبح ضرورية في وقت أبكر. ففي مدينة كبرى يمكن الصمود أشهرًا بالإنجليزية؛ أما في مدينة إقليمية فتفرض اللغة المحلية نفسها بسرعة. وليس هذا عيبًا: فالطلبة الذين يقضون سنتهم التحضيرية هناك يتقدّمون غالبًا أسرع، وذلك تحديدًا لأنهم لا يملكون خيارًا آخر.',
        ],
      },
      {
        heading: 'الجامعة الشريكة في عين المكان',
        paragraphs: [
          'تحتضن تولا جامعة تولا الحكومية، وهي مؤسسة عمومية متعدّدة الاختصاصات. وفي مدينة ذات تاريخ صناعي عريق، للمسالك التقنية رسوخ حقيقي: فالنسيج الاقتصادي المحلي والتدريس يتجاوبان، وهو ما يُحسب للتربّصات ومشاريع التخرّج.',
          'وتفصيل الاختصاصات والمدد والرسوم موجود في الصفحة المخصّصة للمؤسسة، وهي متاحة من القائمة في أعلى هذه الصفحة.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Примерно в 180 километрах к югу от Москвы Тула — ближайший к столице из региональных городов сети. Это старый промышленный город с кремлём XVI века, известный на всю Россию самоварами и пряниками.',
    sections: [
      {
        heading: 'Где находится Тула и как туда добраться',
        paragraphs: [
          'Тула стоит на исторической дороге, связывающей Москву с югом страны. Близость к столице — её главное практическое преимущество: поездка на поезде занимает часть дня, что позволяет легко добираться до международного аэропорта и по приезде, и при отъезде на каникулы.',
          'На практике вы прилетаете в Москву и дальше едете поездом. Это простой маршрут, который студенты осваивают с первого раза, и он остаётся недорогим.',
        ],
      },
      {
        heading: 'Средний по размеру город и что это меняет',
        paragraphs: [
          'Тула — не мегаполис и не деревня. Центр проходится пешком, ежедневные поездки короткие, и в своём районе вы начинаете узнавать лица — это успокаивает, когда приехал с другого континента.',
          'Обратная сторона реальна: меньше ночной жизни, меньше событий, более скромный выбор в магазинах, чем в Москве. Для студента, приехавшего работать, это чаще плюс; для того, кто ищет столичный ритм, — минус.',
        ],
      },
      {
        heading: 'Заметно более лёгкий бюджет',
        paragraphs: [
          'Это главный аргумент региональных городов, и он весомый. Таблица выше даёт точные суммы: и жильё, и расходы на жизнь существенно ниже московских.',
          'За пять-шесть лет учёбы накопленная разница между региональным городом и столицей составляет несколько тысяч евро. Часто именно она отделяет посильный план от того, который бросают на полпути.',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Общежитие обычно находится рядом с учебными корпусами, иногда в нескольких минутах пешком. Зимой эта близость значит очень много и высвобождает заметное время за неделю.',
          'Кремль, музеи и окрестности — включая усадьбу Ясная Поляна, где жил Толстой, — дают достаточно поводов выбраться в выходные, не тратя много.',
        ],
      },
      {
        heading: 'Что нужно знать, выбирая региональный город',
        paragraphs: [
          'Будем честны: магрибская община здесь меньше, чем в Москве или Казани, а халяльное предложение не столь плотное. Оно есть, но его приходится искать, особенно в первые недели.',
          'И главное: русский становится необходим раньше. В большом городе можно несколько месяцев продержаться на английском; в региональном местный язык заявляет о себе быстро. Это не недостаток: студенты, проходящие там подготовительный год, часто продвигаются быстрее — именно потому, что выбора у них нет.',
        ],
      },
      {
        heading: 'Вуз-партнёр на месте',
        paragraphs: [
          'В Туле работает Тульский государственный университет — государственное многопрофильное учебное заведение. В городе с давней промышленной историей технические направления имеют реальную опору: местная экономическая ткань и обучение отвечают друг другу, а это важно для практики и дипломных проектов.',
          'Подробности о направлениях, сроках и стоимости — на странице самого вуза, доступной из списка в начале этой страницы.',
        ],
      },
    ],
  },
};

export const ELETS_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Elets est l'une des plus anciennes villes de Russie, mentionnée dès le XIIᵉ siècle. Posée sur la Bystraïa Sosna dans la région de Lipetsk, c'est une ville historique de taille modeste, réputée pour sa dentelle et son centre marchand ancien.",
    sections: [
      {
        heading: 'Où se trouve Elets et comment on y arrive',
        paragraphs: [
          "Elets se trouve au sud de Moscou, dans la zone des terres noires. L'accès se fait par Moscou puis par le train, et le trajet se parcourt confortablement, souvent de nuit.",
          "C'est une ville où l'on arrive sans se perdre : la gare, le centre et les bâtiments universitaires sont à des distances courtes les uns des autres.",
        ],
      },
      {
        heading: 'Une petite ville historique',
        paragraphs: [
          "Le centre a conservé son tissu ancien, avec des églises, des maisons de marchands et des rues à l'échelle du piéton. L'écrivain Ivan Bounine y a passé une partie de sa jeunesse, et la ville cultive cette mémoire littéraire.",
          "C'est un cadre calme, sans les distractions d'une métropole. Pour un étudiant qui a besoin de concentration, notamment pendant l'année préparatoire de langue, l'environnement est favorable.",
        ],
      },
      {
        heading: 'Le budget le plus bas du réseau',
        paragraphs: [
          "Elets et Orel sont les deux villes les moins chères des huit. Le tableau ci-dessus donne les montants exacts : le logement en résidence y coûte une fraction de ce qu'il coûte à Moscou, et la vie courante suit la même logique.",
          "Pour une famille qui finance les études sans bourse, cet écart n'est pas un confort : c'est parfois la condition même du départ.",
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Tout est proche, et c'est le principal avantage pratique. On ne perd pas une heure par jour dans les transports, et l'hiver se traverse mieux quand les bâtiments d'enseignement sont à quelques minutes de la résidence.",
          "La contrepartie est l'offre : moins de commerces, moins de sorties, moins de choix. Les week-ends se construisent davantage autour de la vie étudiante et des déplacements vers les villes voisines.",
        ],
      },
      {
        heading: 'Ce qu’il faut savoir avant de choisir Elets',
        paragraphs: [
          "La communauté maghrébine y est plus réduite que dans les grandes villes, et l'offre halal demande davantage de recherche. Cuisiner soi-même devient moins un choix d'économie qu'une habitude naturelle.",
          "Le russe s'impose rapidement, parce qu'il n'y a pas de solution de repli. C'est exigeant les premiers mois, et c'est aussi ce qui explique que certains étudiants progressent nettement plus vite ici qu'à Moscou.",
        ],
      },
      {
        heading: "L'université partenaire sur place",
        paragraphs: [
          "Elets accueille l'Université d'État Bounine d'Elets, qui porte le nom de l'écrivain lié à la ville. C'est un établissement public à taille humaine, où l'encadrement est plus rapproché que dans les grandes universités moscovites.",
          "Cette proximité pédagogique est l'un des arguments les plus concrets de la ville, en particulier pendant l'année préparatoire de langue, où le suivi individuel fait une vraie différence.",
        ],
      },
    ],
  },
  en: {
    intro:
      'Yelets is one of the oldest towns in Russia, first recorded in the twelfth century. Set on the Bystraya Sosna in the Lipetsk region, it is a modest-sized historic town, known for its lace and its old merchant centre.',
    sections: [
      {
        heading: 'Where Yelets is and how to get there',
        paragraphs: [
          'Yelets lies south of Moscow, in the black-earth belt. You get there via Moscow and then by train, a journey covered comfortably and often overnight.',
          'It is a town you arrive in without getting lost: the station, the centre and the university buildings are short distances from one another.',
        ],
      },
      {
        heading: 'A small historic town',
        paragraphs: [
          'The centre has kept its old fabric, with churches, merchant houses and streets built to a pedestrian scale. The writer Ivan Bunin spent part of his youth here, and the town keeps that literary memory alive.',
          'It is a quiet setting, without the distractions of a metropolis. For a student who needs to concentrate, particularly during the preparatory language year, the environment works in your favour.',
        ],
      },
      {
        heading: 'The lowest budget in the network',
        paragraphs: [
          'Yelets and Oryol are the two cheapest of the eight cities. The table above gives the exact figures: hall accommodation costs a fraction of the Moscow level, and living costs follow the same logic.',
          'For a family funding the studies without a scholarship, that gap is not a comfort: it is sometimes the very condition of leaving at all.',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'Everything is close, and that is the main practical advantage. You do not lose an hour a day to transport, and winter is easier to get through when the teaching buildings are minutes from your hall.',
          'The counterpart is the offering: fewer shops, fewer outings, less choice. Weekends are built more around student life and trips to neighbouring cities.',
        ],
      },
      {
        heading: 'What to know before choosing Yelets',
        paragraphs: [
          'The Maghrebi community is smaller here than in the big cities, and halal food takes more searching. Cooking for yourself becomes less a saving strategy than a natural habit.',
          'Russian asserts itself quickly, because there is no fallback. It is demanding in the first months, and it is also why some students progress markedly faster here than in Moscow.',
        ],
      },
      {
        heading: 'The partner university on site',
        paragraphs: [
          'Yelets is home to Bunin Yelets State University, named after the writer connected to the town. It is a human-scale public institution, where supervision is closer than in the large Moscow universities.',
          'That teaching proximity is one of the most concrete arguments for the town, particularly during the preparatory language year, where individual follow-up makes a real difference.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'يلتس من أقدم مدن روسيا، وقد ذُكرت منذ القرن الثاني عشر. تقع على نهر بيسترايا سوسنا في منطقة ليبتسك، وهي مدينة تاريخية متواضعة الحجم، مشهورة بالدانتيل وبمركزها التجاري العريق.',
    sections: [
      {
        heading: 'أين تقع يلتس وكيف تصل إليها',
        paragraphs: [
          'تقع يلتس جنوب موسكو، في نطاق الأراضي السوداء. ويتم الوصول إليها عبر موسكو ثم بالقطار، وهي رحلة تُقطع بأريحية وغالبًا ليلًا.',
          'وهي مدينة تصل إليها دون أن تضيع: فالمحطة والمركز والمباني الجامعية على مسافات قصيرة من بعضها.',
        ],
      },
      {
        heading: 'مدينة صغيرة وتاريخية',
        paragraphs: [
          'حافظ المركز على نسيجه القديم، بكنائسه وبيوت تجّاره وشوارعه على مقاس الراجل. وقد قضى الأديب إيفان بونين جزءًا من شبابه فيها، والمدينة تحافظ على هذه الذاكرة الأدبية.',
          'إنه إطار هادئ، بلا مشتّتات الحواضر الكبرى. وبالنسبة إلى طالب يحتاج إلى التركيز، خاصة خلال السنة التحضيرية للغة، فالبيئة في صالحه.',
        ],
      },
      {
        heading: 'أدنى ميزانية في الشبكة',
        paragraphs: [
          'يلتس وأوريول هما أرخص مدينتين من بين الثماني. والجدول أعلاه يعطي المبالغ بدقة: فالسكن في الإقامة يكلّف جزءًا يسيرًا مما يكلّفه في موسكو، والمعيشة تتبع المنطق نفسه.',
          'وبالنسبة إلى عائلة تموّل الدراسة دون منحة، ليس هذا الفارق رفاهية: بل هو أحيانًا شرط السفر نفسه.',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'كل شيء قريب، وهذه هي الميزة العملية الأولى. فلا تُضيّع ساعة يوميًا في النقل، والشتاء يُجتاز بشكل أفضل حين تكون مباني التدريس على بعد دقائق من الإقامة.',
          'والمقابل هو العرض: محلات أقل، وخرجات أقل، وخيارات أقل. وتُبنى عطل نهاية الأسبوع أكثر حول الحياة الطلابية والتنقّل نحو المدن المجاورة.',
        ],
      },
      {
        heading: 'ما ينبغي معرفته قبل اختيار يلتس',
        paragraphs: [
          'الجالية المغاربية هنا أصغر منها في المدن الكبرى، والعرض الحلال يتطلّب بحثًا أكبر. ويصبح الطبخ بنفسك عادة طبيعية أكثر منه خيارًا للاقتصاد.',
          'وتفرض الروسية نفسها بسرعة، لأنه لا يوجد حلّ بديل. وهذا متطلّب في الأشهر الأولى، وهو أيضًا ما يفسّر تقدّم بعض الطلبة هنا أسرع بوضوح منه في موسكو.',
        ],
      },
      {
        heading: 'الجامعة الشريكة في عين المكان',
        paragraphs: [
          'تحتضن يلتس جامعة يلتس الحكومية (بونين)، التي تحمل اسم الأديب المرتبط بالمدينة. وهي مؤسسة عمومية على مقاس الإنسان، يكون فيها التأطير أقرب منه في جامعات موسكو الكبرى.',
          'وهذا القرب البيداغوجي من أكثر حجج المدينة ملموسية، خاصة خلال السنة التحضيرية للغة، حيث تُحدث المتابعة الفردية فرقًا حقيقيًا.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Елец — один из старейших городов России, впервые упомянут в XII веке. Стоит на Быстрой Сосне в Липецкой области; это небольшой исторический город, известный кружевом и старым купеческим центром.',
    sections: [
      {
        heading: 'Где находится Елец и как туда добраться',
        paragraphs: [
          'Елец расположен к югу от Москвы, в черноземной полосе. Добираются через Москву и далее поездом — дорога проходит комфортно и часто ночью.',
          'Это город, в котором не заблудишься: вокзал, центр и университетские корпуса находятся на небольшом расстоянии друг от друга.',
        ],
      },
      {
        heading: 'Маленький исторический город',
        paragraphs: [
          'Центр сохранил старую ткань: церкви, купеческие дома, улицы пешеходного масштаба. Писатель Иван Бунин провёл здесь часть юности, и город бережёт эту литературную память.',
          'Это спокойная среда без отвлечений мегаполиса. Студенту, которому нужна концентрация, особенно на подготовительном году языка, обстановка работает на пользу.',
        ],
      },
      {
        heading: 'Самый низкий бюджет в сети',
        paragraphs: [
          'Елец и Орёл — два самых недорогих города из восьми. Таблица выше даёт точные суммы: общежитие стоит здесь долю от московского уровня, и расходы на жизнь следуют той же логике.',
          'Для семьи, которая оплачивает учёбу без стипендии, этот разрыв — не удобство: иногда это само условие отъезда.',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Всё рядом, и это главное практическое преимущество. Вы не теряете час в день на дорогу, а зиму легче переживать, когда учебные корпуса в нескольких минутах от общежития.',
          'Обратная сторона — предложение: меньше магазинов, меньше развлечений, меньше выбора. Выходные выстраиваются больше вокруг студенческой жизни и поездок в соседние города.',
        ],
      },
      {
        heading: 'Что нужно знать, выбирая Елец',
        paragraphs: [
          'Магрибская община здесь меньше, чем в крупных городах, а халяльные продукты требуют больше поисков. Готовить самому становится не столько способом сэкономить, сколько естественной привычкой.',
          'Русский заявляет о себе быстро, потому что запасного варианта нет. Первые месяцы это требовательно — и этим же объясняется, почему некоторые студенты продвигаются здесь заметно быстрее, чем в Москве.',
        ],
      },
      {
        heading: 'Вуз-партнёр на месте',
        paragraphs: [
          'В Ельце работает Елецкий государственный университет имени И. А. Бунина, названный в честь связанного с городом писателя. Это государственное учебное заведение соразмерного человеку масштаба, где сопровождение ближе, чем в крупных московских вузах.',
          'Эта педагогическая близость — один из самых осязаемых аргументов города, особенно на подготовительном году языка, где индивидуальное сопровождение даёт реальную разницу.',
        ],
      },
    ],
  },
};

export const LIPETSK_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Chef-lieu de sa région, Lipetsk se trouve au sud de Moscou, sur la rivière Voronej. Ville industrielle marquée par la métallurgie, elle fut d'abord connue comme station thermale, fondée autour de ses sources minérales.",
    sections: [
      {
        heading: 'Où se trouve Lipetsk et comment on y arrive',
        paragraphs: [
          "Lipetsk est située dans la zone des terres noires, au sud de la capitale. On y accède par Moscou, puis par train, avec des liaisons régulières qui permettent de voyager de nuit.",
          "C'est une ville de taille moyenne, organisée et bien desservie à l'échelle locale, où les trajets quotidiens restent courts comparés à ceux d'une métropole.",
        ],
      },
      {
        heading: 'Une ville verte et structurée',
        paragraphs: [
          "Héritage de son passé thermal, Lipetsk a conservé des parcs et des espaces verts étendus, inhabituels pour une ville industrielle. C'est un cadre agréable aux beaux jours, et un atout réel pour la qualité de vie étudiante.",
          "La ville vit largement au rythme de son industrie, ce qui donne un environnement sérieux, moins touristique que les grandes villes du réseau.",
        ],
      },
      {
        heading: 'Un coût de la vie très contenu',
        paragraphs: [
          "Lipetsk fait partie des villes les plus abordables du réseau. Le tableau ci-dessus donne les montants exacts pour le logement en résidence, l'appartement partagé et la vie courante.",
          "Le poste logement y est particulièrement léger, ce qui laisse une marge réelle pour le reste du budget — y compris pour un retour en famille pendant les vacances, qui devient envisageable une fois par an.",
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Les distances courtes et le coût bas des transports simplifient l'organisation. La résidence universitaire est généralement proche des lieux d'enseignement.",
          "Les parcs, les installations sportives et la proximité de la rivière structurent les loisirs. C'est une vie étudiante plus calme qu'à Moscou, et plus économique.",
        ],
      },
      {
        heading: 'Ce qu’il faut savoir avant de choisir Lipetsk',
        paragraphs: [
          "Comme dans toutes les villes de région, la communauté maghrébine est plus restreinte et l'offre halal moins visible qu'à Kazan ou Moscou. Elle existe, mais se repère par le bouche-à-oreille plus que par une enseigne.",
          "Le russe devient nécessaire rapidement, dans les commerces comme dans les démarches. C'est le prix de l'immersion, et c'est aussi son bénéfice : le niveau de langue progresse plus vite quand on ne peut pas s'en passer.",
        ],
      },
      {
        heading: "L'université partenaire sur place",
        paragraphs: [
          "Lipetsk accueille l'Université Technique d'État de Lipetsk. L'intitulé dit l'orientation : c'est un établissement à dominante technique et scientifique, cohérent avec le tissu industriel de la ville.",
          "Pour un étudiant qui vise l'ingénierie ou les filières techniques, cette cohérence entre la ville et l'université n'est pas anecdotique : elle se traduit par des équipements adaptés et des terrains de stage sur place.",
        ],
      },
    ],
  },
  en: {
    intro:
      'Regional capital, Lipetsk lies south of Moscow on the Voronezh river. An industrial city shaped by metallurgy, it was first known as a spa town, founded around its mineral springs.',
    sections: [
      {
        heading: 'Where Lipetsk is and how to get there',
        paragraphs: [
          'Lipetsk sits in the black-earth belt, south of the capital. You reach it via Moscow and then by train, with regular services that allow overnight travel.',
          'It is a medium-sized, well-organised city with good local transport, where daily journeys stay short compared with a metropolis.',
        ],
      },
      {
        heading: 'A green, structured city',
        paragraphs: [
          'A legacy of its spa past, Lipetsk has kept extensive parks and green spaces, unusual for an industrial city. It is a pleasant setting in the warmer months and a genuine asset for student quality of life.',
          'The city largely lives to the rhythm of its industry, which gives it a serious, less touristic feel than the larger cities in the network.',
        ],
      },
      {
        heading: 'A very contained cost of living',
        paragraphs: [
          'Lipetsk is among the most affordable cities in the network. The table above gives the exact figures for hall accommodation, shared apartments and daily living.',
          'The housing line is particularly light here, which leaves real room in the rest of the budget — including for a trip home during the holidays, which becomes feasible once a year.',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'Short distances and cheap transport simplify organisation. Halls of residence are generally close to the teaching buildings.',
          'Parks, sports facilities and the nearby river shape leisure time. It is a quieter student life than in Moscow, and a more economical one.',
        ],
      },
      {
        heading: 'What to know before choosing Lipetsk',
        paragraphs: [
          'As in all the regional cities, the Maghrebi community is smaller and the halal offering less visible than in Kazan or Moscow. It exists, but it is found by word of mouth rather than by a shopfront.',
          'Russian becomes necessary quickly, in shops as in administrative matters. That is the price of immersion, and also its benefit: language level rises faster when you cannot do without it.',
        ],
      },
      {
        heading: 'The partner university on site',
        paragraphs: [
          'Lipetsk is home to Lipetsk State Technical University. The name says the orientation: it is a predominantly technical and scientific institution, consistent with the industrial fabric of the city.',
          'For a student aiming at engineering or technical programmes, that consistency between city and university is not incidental: it translates into suitable facilities and placement opportunities on site.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'ليبتسك عاصمة منطقتها، وتقع جنوب موسكو على نهر فورونيج. وهي مدينة صناعية طبعتها الميتالورجيا، لكنها عُرفت أولًا كمحطة استشفائية، أُسّست حول ينابيعها المعدنية.',
    sections: [
      {
        heading: 'أين تقع ليبتسك وكيف تصل إليها',
        paragraphs: [
          'تقع ليبتسك في نطاق الأراضي السوداء، جنوب العاصمة. ويتم الوصول إليها عبر موسكو ثم بالقطار، برحلات منتظمة تتيح السفر ليلًا.',
          'وهي مدينة متوسطة الحجم، منظّمة وحسنة الخدمة على المستوى المحلي، تبقى فيها التنقّلات اليومية قصيرة مقارنة بحاضرة كبرى.',
        ],
      },
      {
        heading: 'مدينة خضراء ومنظّمة',
        paragraphs: [
          'حافظت ليبتسك، إرثًا عن ماضيها الاستشفائي، على حدائق ومساحات خضراء واسعة، غير معتادة في مدينة صناعية. وهو إطار لطيف في الأيام الدافئة، وميزة حقيقية لجودة الحياة الطلابية.',
          'تعيش المدينة إلى حد بعيد على إيقاع صناعتها، ما يمنحها بيئة جادّة، أقلّ سياحية من المدن الكبرى في الشبكة.',
        ],
      },
      {
        heading: 'كلفة معيشة محدودة جدًا',
        paragraphs: [
          'ليبتسك من أكثر مدن الشبكة اقتصادًا. والجدول أعلاه يعطي المبالغ الدقيقة للسكن في الإقامة والشقة المشتركة والمعيشة اليومية.',
          'وبند السكن خفيف بشكل خاص هنا، ما يترك هامشًا حقيقيًا لبقية الميزانية — بما في ذلك عودة إلى العائلة خلال العطل، تصبح ممكنة مرة في السنة.',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'المسافات القصيرة وكلفة النقل المنخفضة تبسّطان التنظيم. والإقامة الجامعية قريبة عمومًا من أماكن التدريس.',
          'وتنظّم الحدائق والمنشآت الرياضية وقرب النهر أوقات الفراغ. إنها حياة طلابية أهدأ من موسكو، وأكثر اقتصادًا.',
        ],
      },
      {
        heading: 'ما ينبغي معرفته قبل اختيار ليبتسك',
        paragraphs: [
          'كما في كل مدن الأقاليم، الجالية المغاربية أصغر والعرض الحلال أقلّ ظهورًا منه في قازان أو موسكو. هو موجود، لكنه يُعرف بالتداول الشفهي أكثر منه بلافتة محل.',
          'وتصبح الروسية ضرورية بسرعة، في المحلات كما في الإجراءات. هذا هو ثمن الانغماس، وهو أيضًا فائدته: فمستوى اللغة يتقدّم أسرع حين لا يمكنك الاستغناء عنها.',
        ],
      },
      {
        heading: 'الجامعة الشريكة في عين المكان',
        paragraphs: [
          'تحتضن ليبتسك جامعة ليبتسك التقنية الحكومية. والتسمية تقول التوجّه: فهي مؤسسة ذات صبغة تقنية وعلمية غالبة، منسجمة مع النسيج الصناعي للمدينة.',
          'وبالنسبة إلى طالب يستهدف الهندسة أو المسالك التقنية، ليس هذا الانسجام بين المدينة والجامعة تفصيلًا عرضيًا: فهو يُترجم إلى تجهيزات ملائمة وميادين تربّص في عين المكان.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Липецк — административный центр своей области, расположен к югу от Москвы на реке Воронеж. Промышленный город, сформированный металлургией, он изначально был известен как курорт, основанный вокруг минеральных источников.',
    sections: [
      {
        heading: 'Где находится Липецк и как туда добраться',
        paragraphs: [
          'Липецк расположен в черноземной полосе, к югу от столицы. Добираются через Москву и далее поездом: регулярное сообщение позволяет ехать ночью.',
          'Это средний по размеру, хорошо организованный город с удобным местным транспортом, где ежедневные поездки остаются короткими по сравнению с мегаполисом.',
        ],
      },
      {
        heading: 'Зелёный и упорядоченный город',
        paragraphs: [
          'В наследство от курортного прошлого Липецк сохранил обширные парки и зелёные зоны, необычные для промышленного города. В тёплое время это приятная среда и реальное преимущество для качества студенческой жизни.',
          'Город во многом живёт ритмом своей промышленности, что придаёт ему серьёзный, менее туристический характер, чем у крупных городов сети.',
        ],
      },
      {
        heading: 'Очень умеренная стоимость жизни',
        paragraphs: [
          'Липецк — один из самых доступных городов сети. Таблица выше даёт точные суммы по общежитию, доле в квартире и повседневным расходам.',
          'Статья жилья здесь особенно лёгкая, что оставляет реальный запас на остальной бюджет — в том числе на поездку домой в каникулы, которая становится возможной раз в год.',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Короткие расстояния и дешёвый транспорт упрощают организацию. Общежитие, как правило, рядом с учебными корпусами.',
          'Парки, спортивные объекты и близость реки формируют досуг. Это более спокойная студенческая жизнь, чем в Москве, и более экономная.',
        ],
      },
      {
        heading: 'Что нужно знать, выбирая Липецк',
        paragraphs: [
          'Как и во всех региональных городах, магрибская община меньше, а халяльное предложение менее заметно, чем в Казани или Москве. Оно есть, но находится по сарафанному радио, а не по вывеске.',
          'Русский становится нужен быстро — и в магазинах, и в оформлении документов. Такова цена погружения, и такова же его польза: уровень языка растёт быстрее, когда без него не обойтись.',
        ],
      },
      {
        heading: 'Вуз-партнёр на месте',
        paragraphs: [
          'В Липецке работает Липецкий государственный технический университет. Название говорит о профиле: это преимущественно техническое и научное учебное заведение, созвучное промышленной ткани города.',
          'Для студента, нацеленного на инженерные или технические направления, такое соответствие города и вуза не случайность: оно оборачивается подходящим оборудованием и площадками для практики на месте.',
        ],
      },
    ],
  },
};

export const VORONEJ_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Grande ville du sud-ouest russe, Voronej est le principal centre urbain de la région des terres noires. C'est là que Pierre le Grand fit construire la première flotte russe, et la ville est aujourd'hui l'un des pôles universitaires majeurs de la Russie centrale.",
    sections: [
      {
        heading: 'Où se trouve Voronej et comment on y arrive',
        paragraphs: [
          "Voronej se situe au sud de Moscou, sur la rivière du même nom. La ville est desservie par le train depuis la capitale, avec des liaisons de nuit confortables, et dispose également d'un aéroport.",
          "C'est, parmi les villes de région du réseau, la plus grande et la mieux équipée : on y trouve les services d'une vraie métropole régionale sans en payer le prix moscovite.",
        ],
      },
      {
        heading: 'Une vraie ville universitaire',
        paragraphs: [
          "Voronej concentre une population étudiante importante, et cela se ressent dans l'atmosphère de la ville : cafés, bibliothèques, vie associative et événements rythment l'année universitaire.",
          "Pour un étudiant étranger, cette densité est un avantage pratique : les infrastructures destinées aux étudiants y sont bien rodées, et les universités ont l'habitude d'accueillir des promotions internationales.",
        ],
      },
      {
        heading: 'Le bon compromis entre taille et budget',
        paragraphs: [
          "Voronej offre un équilibre rare dans le réseau : les équipements d'une grande ville, pour un coût de la vie proche de celui des villes moyennes. Le tableau ci-dessus donne les montants exacts.",
          "C'est souvent le choix des étudiants qui ne veulent ni l'anonymat de Moscou ni le calme d'une petite ville, et qui cherchent une vie étudiante animée sans faire exploser le budget familial.",
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Le réseau de transports urbains couvre bien la ville, et les distances restent raisonnables. L'avenue principale et les quartiers centraux concentrent l'essentiel de la vie quotidienne.",
          "Les espaces verts et les bords de rivière offrent de vraies respirations aux beaux jours, et la ville dispose d'une offre culturelle supérieure à celle des autres villes de région du réseau.",
        ],
      },
      {
        heading: 'Ce qu’il faut savoir avant de choisir Voronej',
        paragraphs: [
          "La communauté internationale y est plus fournie que dans les petites villes, mais reste en deçà de celle de Moscou. L'offre halal existe et se trouve, sans être aussi évidente qu'à Kazan.",
          "Le russe reste la langue de tout : cours, administration, commerces. La taille de la ville ne dispense pas de l'apprendre, elle rend simplement l'apprentissage plus confortable, parce qu'on y trouve davantage d'occasions de pratiquer.",
        ],
      },
      {
        heading: "L'université partenaire sur place",
        paragraphs: [
          "Voronej accueille l'Université d'État de Voronej, l'un des grands établissements publics pluridisciplinaires de la Russie centrale. Son ancienneté et sa taille lui donnent une offre de filières large et une expérience solide de l'accueil d'étudiants internationaux.",
          "C'est ce qui distingue Voronej des autres villes de région du réseau : vous y bénéficiez d'une université d'envergure sans les contraintes budgétaires de Moscou.",
        ],
      },
    ],
  },
  en: {
    intro:
      'A major city of south-western Russia, Voronezh is the principal urban centre of the black-earth region. It is where Peter the Great had the first Russian fleet built, and today it is one of the main university hubs of central Russia.',
    sections: [
      {
        heading: 'Where Voronezh is and how to get there',
        paragraphs: [
          'Voronezh lies south of Moscow, on the river of the same name. The city is served by trains from the capital, with comfortable overnight services, and it also has an airport.',
          'Among the regional cities in the network, it is the largest and best equipped: you find the services of a genuine regional metropolis without paying Moscow prices.',
        ],
      },
      {
        heading: 'A genuine university city',
        paragraphs: [
          'Voronezh has a substantial student population, and you feel it in the atmosphere of the city: cafés, libraries, student societies and events set the rhythm of the academic year.',
          'For an international student, that density is a practical advantage: student-facing infrastructure is well run in, and the universities are used to welcoming international cohorts.',
        ],
      },
      {
        heading: 'The right compromise between size and budget',
        paragraphs: [
          'Voronezh offers a balance that is rare in the network: the facilities of a large city at a cost of living close to that of medium-sized towns. The table above gives the exact figures.',
          'It is often the choice of students who want neither the anonymity of Moscow nor the quiet of a small town, and who are looking for a lively student life without blowing up the family budget.',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'The urban transport network covers the city well, and distances stay reasonable. The main avenue and the central districts concentrate most of daily life.',
          'Green spaces and the riverside offer real breathing room in the warmer months, and the city has a cultural offering ahead of the other regional cities in the network.',
        ],
      },
      {
        heading: 'What to know before choosing Voronezh',
        paragraphs: [
          'The international community is larger here than in the small towns, but still below that of Moscow. Halal food exists and can be found, without being as obvious as in Kazan.',
          'Russian remains the language of everything: classes, administration, shops. The size of the city does not exempt you from learning it; it simply makes learning more comfortable, because there are more occasions to practise.',
        ],
      },
      {
        heading: 'The partner university on site',
        paragraphs: [
          'Voronezh is home to Voronezh State University, one of the major public multidisciplinary institutions of central Russia. Its age and size give it a broad range of programmes and solid experience in hosting international students.',
          'That is what sets Voronezh apart from the other regional cities in the network: you get a substantial university without the budget constraints of Moscow.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'فورونيج مدينة كبرى في جنوب غرب روسيا، وهي المركز الحضري الرئيسي لمنطقة الأراضي السوداء. وفيها أمر بطرس الأكبر ببناء أول أسطول روسي، وهي اليوم أحد الأقطاب الجامعية الكبرى في وسط روسيا.',
    sections: [
      {
        heading: 'أين تقع فورونيج وكيف تصل إليها',
        paragraphs: [
          'تقع فورونيج جنوب موسكو، على النهر الذي يحمل الاسم نفسه. وتخدمها القطارات انطلاقًا من العاصمة، برحلات ليلية مريحة، كما يوجد بها مطار.',
          'وهي، من بين مدن الأقاليم في الشبكة، الأكبر والأفضل تجهيزًا: تجد فيها خدمات حاضرة إقليمية حقيقية دون دفع الثمن الموسكوفي.',
        ],
      },
      {
        heading: 'مدينة جامعية بحق',
        paragraphs: [
          'تضمّ فورونيج جمهورًا طلابيًا كبيرًا، ويُحسّ ذلك في أجواء المدينة: مقاهٍ ومكتبات وحياة جمعياتية وأحداث تنظّم إيقاع السنة الجامعية.',
          'وبالنسبة إلى طالب أجنبي، هذه الكثافة ميزة عملية: فالبنى الموجّهة للطلبة مجرّبة جيدًا، والجامعات معتادة على استقبال دفعات دولية.',
        ],
      },
      {
        heading: 'الحلّ الوسط الصحيح بين الحجم والميزانية',
        paragraphs: [
          'تقدّم فورونيج توازنًا نادرًا في الشبكة: تجهيزات مدينة كبرى بكلفة معيشة قريبة من المدن المتوسطة. والجدول أعلاه يعطي المبالغ بدقة.',
          'وهي غالبًا خيار الطلبة الذين لا يريدون لا مجهولية موسكو ولا هدوء مدينة صغيرة، ويبحثون عن حياة طلابية نابضة دون تفجير ميزانية العائلة.',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'تغطّي شبكة النقل الحضري المدينة جيدًا، وتبقى المسافات معقولة. ويتركّز جوهر الحياة اليومية في الجادة الرئيسية والأحياء المركزية.',
          'وتوفّر المساحات الخضراء وضفاف النهر متنفّسات حقيقية في الأيام الدافئة، وللمدينة عرض ثقافي يفوق بقية مدن الأقاليم في الشبكة.',
        ],
      },
      {
        heading: 'ما ينبغي معرفته قبل اختيار فورونيج',
        paragraphs: [
          'الجالية الدولية هنا أوفر منها في المدن الصغيرة، لكنها تبقى دون جالية موسكو. والعرض الحلال موجود ويُعثر عليه، دون أن يكون بديهيًا كما في قازان.',
          'وتبقى الروسية لغة كل شيء: الدروس والإدارة والمحلات. فحجم المدينة لا يعفيك من تعلّمها، بل يجعل التعلّم أكثر راحة فقط، لأنك تجد فيها فرص ممارسة أكثر.',
        ],
      },
      {
        heading: 'الجامعة الشريكة في عين المكان',
        paragraphs: [
          'تحتضن فورونيج جامعة فورونيج الحكومية، وهي إحدى كبرى المؤسسات العمومية متعدّدة الاختصاصات في وسط روسيا. ويمنحها عراقتها وحجمها عرضًا واسعًا من الاختصاصات وخبرة متينة في استقبال الطلبة الدوليين.',
          'وهذا ما يميّز فورونيج عن بقية مدن الأقاليم في الشبكة: تستفيد فيها من جامعة ذات حجم دون قيود ميزانية موسكو.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Воронеж — крупный город юго-запада России и главный городской центр Черноземья. Именно здесь Пётр Великий построил первый русский флот, а сегодня это один из основных университетских центров центральной России.',
    sections: [
      {
        heading: 'Где находится Воронеж и как туда добраться',
        paragraphs: [
          'Воронеж расположен к югу от Москвы, на одноимённой реке. Город связан со столицей поездами, в том числе удобными ночными, и располагает аэропортом.',
          'Среди региональных городов сети он самый крупный и лучше всего оснащённый: здесь есть услуги настоящего регионального мегаполиса без московских цен.',
        ],
      },
      {
        heading: 'Настоящий университетский город',
        paragraphs: [
          'В Воронеже значительное студенческое население, и это чувствуется в атмосфере города: кафе, библиотеки, студенческие объединения и события задают ритм учебного года.',
          'Для иностранного студента такая плотность — практическое преимущество: инфраструктура для студентов хорошо отлажена, а вузы привыкли принимать международные группы.',
        ],
      },
      {
        heading: 'Удачный компромисс между размером и бюджетом',
        paragraphs: [
          'Воронеж предлагает редкий для сети баланс: инфраструктура большого города при стоимости жизни, близкой к средним городам. Таблица выше даёт точные суммы.',
          'Это часто выбор студентов, которым не нужна ни московская анонимность, ни тишина маленького города, и которые ищут живую студенческую жизнь без удара по семейному бюджету.',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Городской транспорт покрывает город хорошо, расстояния остаются разумными. Основная жизнь сосредоточена на главном проспекте и в центральных районах.',
          'Зелёные зоны и набережная дают настоящие передышки в тёплое время, а культурное предложение города опережает остальные региональные города сети.',
        ],
      },
      {
        heading: 'Что нужно знать, выбирая Воронеж',
        paragraphs: [
          'Международное сообщество здесь больше, чем в малых городах, но уступает московскому. Халяльные продукты есть и находятся, хотя это не столь очевидно, как в Казани.',
          'Русский остаётся языком всего: занятий, администрации, магазинов. Размер города не освобождает от его изучения — он лишь делает обучение комфортнее, потому что возможностей практиковаться больше.',
        ],
      },
      {
        heading: 'Вуз-партнёр на месте',
        paragraphs: [
          'В Воронеже работает Воронежский государственный университет — одно из крупных государственных многопрофильных учебных заведений центральной России. Возраст и масштаб дают ему широкий набор направлений и солидный опыт приёма иностранных студентов.',
          'Именно это отличает Воронеж от других региональных городов сети: вы получаете университет серьёзного масштаба без московских бюджетных ограничений.',
        ],
      },
    ],
  },
};

export const OREL_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Orel se trouve au sud de Moscou, sur l'Oka. C'est une ville profondément liée à la littérature russe : Tourgueniev y est né, et Leskov comme Bounine y sont attachés. Avec Elets, c'est l'une des deux villes les moins chères du réseau.",
    sections: [
      {
        heading: 'Où se trouve Orel et comment on y arrive',
        paragraphs: [
          "Orel est située sur l'axe reliant Moscou au sud-ouest du pays. L'accès se fait par la capitale puis par le train, sur un trajet direct et régulier.",
          "La ville est de taille modeste et facilement lisible : on en comprend l'organisation en quelques jours, ce qui facilite beaucoup les premières semaines.",
        ],
      },
      {
        heading: 'Une ville de littérature',
        paragraphs: [
          "Orel cultive son héritage littéraire avec un réseau de musées consacrés aux écrivains qui y sont liés. Pour un étudiant qui apprend le russe, c'est un environnement stimulant : la langue y est partout, portée par une tradition locale assumée.",
          "Le centre est calme, vert, et traversé par l'Oka. L'ambiance est celle d'une ville de province russe classique, loin de l'agitation des grandes métropoles.",
        ],
      },
      {
        heading: 'Le budget le plus serré, avec Elets',
        paragraphs: [
          "Orel partage avec Elets les coûts les plus bas des huit villes. Le tableau ci-dessus donne les montants exacts : le logement en résidence y représente une fraction du niveau moscovite.",
          "Pour une famille qui finance seule les études, c'est l'option qui laisse le plus de marge, et qui rend le projet soutenable sur toute la durée du cursus plutôt que sur les deux premières années.",
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Les distances sont courtes et les transports peu coûteux. La proximité entre résidence et lieux d'enseignement est l'un des avantages concrets des petites villes, particulièrement sensible en hiver.",
          "La vie se concentre autour de l'université et du centre-ville. Les sorties sont moins nombreuses qu'à Moscou, mais aussi beaucoup moins coûteuses.",
        ],
      },
      {
        heading: 'Ce qu’il faut savoir avant de choisir Orel',
        paragraphs: [
          "Comme à Elets, la communauté maghrébine est réduite et l'offre halal demande à être cherchée. Les étudiants s'organisent souvent entre eux, et le bouche-à-oreille remplace les enseignes.",
          "L'immersion linguistique est totale, et c'est à prendre comme tel : exigeant au départ, très rentable à l'arrivée. Les étudiants qui veulent atteindre un bon niveau de russe rapidement y trouvent les meilleures conditions du réseau.",
        ],
      },
      {
        heading: "L'université partenaire sur place",
        paragraphs: [
          "Orel accueille l'Université d'État Tourgueniev d'Orel, qui porte le nom de l'écrivain né dans la ville. C'est un établissement public pluridisciplinaire, principal pôle universitaire de la région.",
          'Pour un étudiant étranger, la combinaison est cohérente : une ville attachée à la langue et à la littérature russes, et une université qui en est le prolongement naturel.',
        ],
      },
    ],
  },
  en: {
    intro:
      'Oryol lies south of Moscow, on the Oka. It is a city deeply tied to Russian literature: Turgenev was born here, and both Leskov and Bunin are associated with it. Along with Yelets, it is one of the two cheapest cities in the network.',
    sections: [
      {
        heading: 'Where Oryol is and how to get there',
        paragraphs: [
          'Oryol sits on the axis linking Moscow to the south-west of the country. Access is via the capital and then by train, on a direct and regular service.',
          'The city is modest in size and easy to read: you understand how it is organised within a few days, which makes the first weeks much easier.',
        ],
      },
      {
        heading: 'A city of literature',
        paragraphs: [
          'Oryol cultivates its literary heritage with a network of museums devoted to the writers connected to it. For a student learning Russian, it is a stimulating environment: the language is everywhere, carried by a local tradition the city owns proudly.',
          'The centre is calm, green and crossed by the Oka. The atmosphere is that of a classic Russian provincial city, far from the bustle of the large metropolises.',
        ],
      },
      {
        heading: 'The tightest budget, along with Yelets',
        paragraphs: [
          'Oryol shares with Yelets the lowest costs of the eight cities. The table above gives the exact figures: hall accommodation represents a fraction of the Moscow level.',
          'For a family funding the studies alone, it is the option that leaves the most room, and that makes the plan sustainable across the whole course rather than only the first two years.',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'Distances are short and transport inexpensive. The proximity between halls and teaching buildings is one of the concrete advantages of small cities, particularly noticeable in winter.',
          'Life centres on the university and the town centre. There are fewer outings than in Moscow, but they are also far cheaper.',
        ],
      },
      {
        heading: 'What to know before choosing Oryol',
        paragraphs: [
          'As in Yelets, the Maghrebi community is small and halal food has to be sought out. Students often organise among themselves, and word of mouth replaces shopfronts.',
          'Linguistic immersion is total, and should be taken as such: demanding at first, highly rewarding by the end. Students who want to reach a good level of Russian quickly find the best conditions in the network here.',
        ],
      },
      {
        heading: 'The partner university on site',
        paragraphs: [
          'Oryol is home to Turgenev Orel State University, named after the writer born in the city. It is a public multidisciplinary institution and the main academic hub of the region.',
          'For an international student the combination is coherent: a city attached to the Russian language and its literature, and a university that is its natural extension.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'تقع أوريول جنوب موسكو، على نهر أوكا. وهي مدينة شديدة الارتباط بالأدب الروسي: فيها وُلد تورغينيف، وبها يرتبط ليسكوف وبونين. وهي، إلى جانب يلتس، إحدى أرخص مدينتين في الشبكة.',
    sections: [
      {
        heading: 'أين تقع أوريول وكيف تصل إليها',
        paragraphs: [
          'تقع أوريول على المحور الرابط بين موسكو وجنوب غرب البلاد. ويتم الوصول إليها عبر العاصمة ثم بالقطار، في رحلة مباشرة ومنتظمة.',
          'المدينة متواضعة الحجم وسهلة القراءة: تفهم تنظيمها في بضعة أيام، وهو ما يسهّل كثيرًا الأسابيع الأولى.',
        ],
      },
      {
        heading: 'مدينة أدب',
        paragraphs: [
          'تحتفي أوريول بإرثها الأدبي بشبكة من المتاحف المخصّصة للكتّاب المرتبطين بها. وبالنسبة إلى طالب يتعلّم الروسية، فهي بيئة محفّزة: اللغة في كل مكان، تحملها تقاليد محلية معتزّة بنفسها.',
          'المركز هادئ وأخضر ويخترقه نهر أوكا. والأجواء أجواء مدينة روسية إقليمية كلاسيكية، بعيدًا عن صخب الحواضر الكبرى.',
        ],
      },
      {
        heading: 'أضيق ميزانية، إلى جانب يلتس',
        paragraphs: [
          'تتقاسم أوريول مع يلتس أدنى التكاليف بين المدن الثماني. والجدول أعلاه يعطي المبالغ بدقة: فالسكن في الإقامة يمثّل جزءًا يسيرًا من المستوى الموسكوفي.',
          'وبالنسبة إلى عائلة تموّل الدراسة وحدها، هذا هو الخيار الذي يترك أكبر هامش، ويجعل المشروع قابلًا للاستمرار على كامل مدة الدراسة لا على السنتين الأوليين فقط.',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'المسافات قصيرة والنقل غير مكلف. والقرب بين الإقامة وأماكن التدريس من المزايا الملموسة للمدن الصغيرة، ويُحسّ به خاصة في الشتاء.',
          'وتتركّز الحياة حول الجامعة ووسط المدينة. الخرجات أقل عددًا منها في موسكو، لكنها أقلّ كلفة بكثير أيضًا.',
        ],
      },
      {
        heading: 'ما ينبغي معرفته قبل اختيار أوريول',
        paragraphs: [
          'كما في يلتس، الجالية المغاربية محدودة والطعام الحلال يحتاج إلى بحث. وينظّم الطلبة أنفسهم فيما بينهم غالبًا، ويحلّ التداول الشفهي محلّ اللافتات.',
          'والانغماس اللغوي كامل، وينبغي أخذه على هذا النحو: متطلّب في البداية، مربح جدًا في النهاية. فالطلبة الراغبون في بلوغ مستوى جيد في الروسية بسرعة يجدون هنا أفضل ظروف الشبكة.',
        ],
      },
      {
        heading: 'الجامعة الشريكة في عين المكان',
        paragraphs: [
          'تحتضن أوريول جامعة أوريول الحكومية (تورغينيف)، التي تحمل اسم الأديب المولود في المدينة. وهي مؤسسة عمومية متعدّدة الاختصاصات، والقطب الجامعي الرئيسي للمنطقة.',
          'وبالنسبة إلى طالب أجنبي، التركيبة منسجمة: مدينة متعلّقة باللغة والأدب الروسيين، وجامعة تمثّل امتدادها الطبيعي.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Орёл расположен к югу от Москвы, на Оке. Это город, глубоко связанный с русской литературой: здесь родился Тургенев, с ним связаны Лесков и Бунин. Вместе с Ельцом это один из двух самых недорогих городов сети.',
    sections: [
      {
        heading: 'Где находится Орёл и как туда добраться',
        paragraphs: [
          'Орёл стоит на оси, связывающей Москву с юго-западом страны. Добираются через столицу и далее поездом — маршрут прямой и регулярный.',
          'Город невелик и легко читается: его устройство становится понятным за несколько дней, что сильно облегчает первые недели.',
        ],
      },
      {
        heading: 'Литературный город',
        paragraphs: [
          'Орёл бережёт литературное наследие сетью музеев, посвящённых связанным с ним писателям. Для студента, изучающего русский, это стимулирующая среда: язык здесь повсюду, его несёт осознанная местная традиция.',
          'Центр спокойный, зелёный, его пересекает Ока. Атмосфера классического русского губернского города, вдали от суеты крупных мегаполисов.',
        ],
      },
      {
        heading: 'Самый скромный бюджет, наравне с Ельцом',
        paragraphs: [
          'Орёл делит с Ельцом самые низкие расходы среди восьми городов. Таблица выше даёт точные суммы: общежитие здесь стоит долю от московского уровня.',
          'Для семьи, которая финансирует учёбу самостоятельно, это вариант, оставляющий наибольший запас и делающий план посильным на всём протяжении учёбы, а не только первые два года.',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Расстояния короткие, транспорт недорогой. Близость общежития к учебным корпусам — одно из ощутимых преимуществ малых городов, особенно заметное зимой.',
          'Жизнь сосредоточена вокруг университета и центра города. Развлечений меньше, чем в Москве, но и стоят они гораздо меньше.',
        ],
      },
      {
        heading: 'Что нужно знать, выбирая Орёл',
        paragraphs: [
          'Как и в Ельце, магрибская община невелика, а халяльные продукты приходится искать. Студенты часто организуются между собой, и сарафанное радио заменяет вывески.',
          'Языковое погружение здесь полное, и воспринимать его стоит именно так: требовательно вначале, очень выгодно в итоге. Студенты, желающие быстро выйти на хороший уровень русского, находят здесь лучшие условия в сети.',
        ],
      },
      {
        heading: 'Вуз-партнёр на месте',
        paragraphs: [
          'В Орле работает Орловский государственный университет имени И. С. Тургенева, названный в честь родившегося в городе писателя. Это государственное многопрофильное учебное заведение и главный академический центр региона.',
          'Для иностранного студента сочетание логичное: город, привязанный к русскому языку и литературе, и университет как его естественное продолжение.',
        ],
      },
    ],
  },
};
