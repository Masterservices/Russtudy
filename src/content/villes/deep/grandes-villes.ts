import type { DeepCityByLang } from './types';

/*
 * Contenu profond des trois grandes villes universitaires : Moscou,
 * Saint-Pétersbourg et Kazan.
 *
 * Sourcing : faits géographiques, climatiques et patrimoniaux publics et
 * vérifiables. Les montants cités sont ceux de CITY_COSTS
 * (src/content/budget/data.ts), déjà affichés dans le tableau de la page.
 * Aucun effectif étudiant, aucun classement, aucune statistique inventée.
 */

export const MOSCOU_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Capitale politique, économique et universitaire de la Russie, Moscou concentre le plus grand nombre d'universités partenaires du réseau. C'est aussi la ville la plus chère des huit, et ce choix se paie — mais il s'achète quelque chose.",
    sections: [
      {
        heading: 'Où se trouve Moscou et comment on y arrive',
        paragraphs: [
          "Moscou s'étend sur les deux rives de la Moskova, au cœur de la plaine russe. C'est la plus grande ville de Russie et d'Europe, et le point de convergence de tout le réseau ferroviaire et aérien du pays : quelle que soit la ville où vous étudierez ensuite, vous passerez par Moscou.",
          "Trois aéroports internationaux desservent la capitale. Depuis Tunis, le trajet se fait avec une escale, le plus souvent à Istanbul ou dans un hub du Golfe. Comptez une journée de voyage porte à porte, et prévoyez une marge confortable entre les deux vols : c'est sur la correspondance que se jouent les retards.",
        ],
      },
      {
        heading: 'Le climat, et ce que cela change concrètement',
        paragraphs: [
          "Moscou connaît un climat continental marqué : des hivers longs et francs, un printemps tardif, des étés chauds et un automne court. La neige tient au sol plusieurs mois, et les journées de décembre sont très courtes.",
          "Ce n'est pas une difficulté insurmontable, c'est une question d'équipement. Les bâtiments, les transports et les universités sont chauffés largement au-dessus de ce qu'un Tunisien imagine : le choc thermique se vit dehors, pas à l'intérieur. Un manteau adapté, acheté sur place, règle quatre-vingts pour cent du problème.",
        ],
      },
      {
        heading: 'Ce que coûte vraiment la vie à Moscou',
        paragraphs: [
          "Moscou est la plus chère des huit villes du réseau, et l'écart n'est pas marginal. Le tableau ci-dessus donne les montants exacts ; voici comment les lire.",
          "En résidence universitaire, logement et vie courante cumulés placent Moscou nettement au-dessus des villes de région — où le même budget mensuel tombe à moins de la moitié. L'appartement partagé, lui, triple le poste logement : c'est le choix qui fait déraper les budgets familiaux, et il se décide en connaissance de cause, pas par défaut.",
        ],
        bullets: [
          "La résidence universitaire reste de très loin l'option la plus raisonnable la première année",
          'Les transports sont bon marché avec la carte étudiante, malgré les distances',
          "Cuisiner soi-même en résidence change radicalement le budget mensuel : c'est le premier levier d'économie",
          'Les bureaux de change des gares et aéroports pratiquent des taux systématiquement défavorables',
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Le métro de Moscou est l'un des plus efficaces au monde, et certaines de ses stations sont de véritables monuments. Les lignes sont identifiées par un numéro et une couleur, ce qui permet de s'orienter dès les premiers jours sans savoir lire le cyrillique.",
          "La contrepartie de la taille de la ville, ce sont les distances. Un trajet résidence-campus d'une heure n'a rien d'exceptionnel. Vérifiez cette distance avant de vous réjouir d'une adresse centrale : en hiver, trois quarts d'heure de transport matin et soir pèsent lourd sur une semaine.",
        ],
      },
      {
        heading: 'Moscou pour un étudiant maghrébin',
        paragraphs: [
          "La capitale accueille des étudiants du monde entier, et les communautés maghrébines y sont installées de longue date. C'est la ville où vous trouverez le plus facilement des compatriotes, des associations étudiantes par nationalité, et des interlocuteurs qui ont traversé les mêmes démarches avant vous.",
          "L'offre alimentaire halal est large, en épiceries spécialisées comme dans de nombreux supermarchés, et la ville dispose de mosquées et de lieux de prière accessibles. Le service des étudiants internationaux de votre université peut vous indiquer les adresses les plus proches de votre campus.",
        ],
      },
    ],
  },
  en: {
    intro:
      "Russia's political, economic and academic capital, Moscow holds the largest number of partner universities in the network. It is also the most expensive of the eight cities, and that choice has a price — but it buys something.",
    sections: [
      {
        heading: 'Where Moscow is and how to get there',
        paragraphs: [
          'Moscow spreads across both banks of the Moskva river, in the heart of the Russian plain. It is the largest city in Russia and in Europe, and the convergence point of the entire national rail and air network: whichever city you end up studying in, you will pass through Moscow.',
          'Three international airports serve the capital. From Tunis the journey involves one stopover, usually in Istanbul or at a Gulf hub. Allow a full day door to door, and leave a comfortable margin between the two flights: it is on the connection that delays bite.',
        ],
      },
      {
        heading: 'The climate, and what it actually changes',
        paragraphs: [
          'Moscow has a markedly continental climate: long, decisive winters, a late spring, hot summers and a short autumn. Snow lies on the ground for months, and December days are very short.',
          'This is not an insurmountable difficulty, it is a question of equipment. Buildings, transport and universities are heated far beyond what a Tunisian would expect: the thermal shock is lived outdoors, not indoors. A proper coat, bought locally, solves eighty per cent of the problem.',
        ],
      },
      {
        heading: 'What living in Moscow really costs',
        paragraphs: [
          'Moscow is the most expensive of the eight cities in the network, and the gap is not marginal. The table above gives the exact figures; here is how to read them.',
          'In university halls, accommodation and living costs combined put Moscow well above the regional cities, where the same monthly budget falls to less than half. A shared apartment, meanwhile, triples the housing line: that is the choice that derails family budgets, and it should be made knowingly, not by default.',
        ],
        bullets: [
          'University halls remain by far the most reasonable option in the first year',
          'Transport is inexpensive with the student card, despite the distances',
          'Cooking for yourself in halls radically changes the monthly budget: it is the first lever of saving',
          'Exchange bureaux in stations and airports consistently offer unfavourable rates',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'The Moscow metro is one of the most efficient in the world, and some of its stations are genuine monuments. Lines are identified by a number and a colour, so you can find your way from the first days without reading Cyrillic.',
          'The flip side of the city size is distance. An hour between halls and campus is not unusual. Check that distance before celebrating a central address: in winter, three quarters of an hour of transport morning and evening weighs heavily across a week.',
        ],
      },
      {
        heading: 'Moscow for a Maghrebi student',
        paragraphs: [
          'The capital welcomes students from all over the world, and Maghrebi communities have been established there for decades. It is the city where you will most easily find compatriots, national student associations, and people who went through the same formalities before you.',
          'Halal food is widely available, in specialist grocers as well as many supermarkets, and the city has accessible mosques and prayer spaces. Your university international student office can point you to the addresses nearest your campus.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'موسكو هي العاصمة السياسية والاقتصادية والجامعية لروسيا، وتضم أكبر عدد من الجامعات الشريكة في الشبكة. وهي أيضًا أغلى المدن الثماني، وهذا الاختيار له ثمن — لكنه يشتري شيئًا في المقابل.',
    sections: [
      {
        heading: 'أين تقع موسكو وكيف تصل إليها',
        paragraphs: [
          'تمتد موسكو على ضفتي نهر موسكفا في قلب السهل الروسي. وهي أكبر مدن روسيا وأوروبا، وملتقى شبكة السكك الحديدية والنقل الجوي في البلاد بأكملها: أيًّا كانت المدينة التي ستدرس فيها لاحقًا، ستمرّ عبر موسكو.',
          'ثلاثة مطارات دولية تخدم العاصمة. ومن تونس تتم الرحلة بتوقف واحد، غالبًا في إسطنبول أو في أحد مطارات الخليج. احسب يومًا كاملًا من الباب إلى الباب، واترك هامشًا مريحًا بين الرحلتين: فالتأخير يقع عادة في نقطة الربط.',
        ],
      },
      {
        heading: 'المناخ، وما يغيّره عمليًا',
        paragraphs: [
          'لموسكو مناخ قاري واضح: شتاء طويل وصريح، وربيع متأخر، وصيف حار، وخريف قصير. يبقى الثلج على الأرض أشهرًا، وأيام ديسمبر قصيرة جدًا.',
          'ليست هذه صعوبة لا تُحتمل، بل مسألة تجهيز. فالمباني ووسائل النقل والجامعات مدفّأة بما يفوق كثيرًا ما يتخيّله التونسي: الصدمة الحرارية تُعاش في الخارج لا في الداخل. ومعطف مناسب، يُشترى هناك، يحلّ ثمانين بالمائة من المشكل.',
        ],
      },
      {
        heading: 'ما تكلّفه الحياة في موسكو فعلًا',
        paragraphs: [
          'موسكو أغلى المدن الثماني في الشبكة، والفارق ليس هامشيًا. الجدول أعلاه يعطي المبالغ بدقة؛ وإليك كيف تقرأها.',
          'في الإقامة الجامعية، يضع مجموع السكن والمعيشة موسكو فوق مدن الأقاليم بوضوح، حيث تنزل الميزانية الشهرية نفسها إلى أقل من النصف. أما الشقة المشتركة فتضاعف بند السكن ثلاث مرات: وهذا هو الاختيار الذي يُخرج ميزانيات العائلات عن مسارها، ويجب أن يُتّخذ عن وعي لا بشكل تلقائي.',
        ],
        bullets: [
          'تبقى الإقامة الجامعية الخيار الأعقل بفارق كبير في السنة الأولى',
          'النقل غير مكلف ببطاقة الطالب، رغم المسافات',
          'الطبخ بنفسك في الإقامة يغيّر الميزانية الشهرية جذريًا: وهو أول وسيلة للاقتصاد',
          'مكاتب الصرف في المحطات والمطارات تعتمد أسعارًا غير مواتية دائمًا',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'مترو موسكو من أنجع شبكات العالم، وبعض محطاته معالم حقيقية. الخطوط تُعرَّف برقم ولون، ما يتيح لك التوجّه منذ الأيام الأولى دون قراءة السيريلية.',
          'ومقابل حجم المدينة تأتي المسافات. فرحلة ساعة بين الإقامة والحرم الجامعي ليست استثناء. تحقّق من هذه المسافة قبل أن تفرح بعنوان في المركز: ففي الشتاء، ثلاثة أرباع الساعة من النقل صباحًا ومساءً ثقيلة على مدار الأسبوع.',
        ],
      },
      {
        heading: 'موسكو بالنسبة إلى طالب مغاربي',
        paragraphs: [
          'تستقبل العاصمة طلبة من العالم أجمع، والجاليات المغاربية مستقرّة بها منذ عقود. وهي المدينة التي ستجد فيها أسهل ما يكون أبناء بلدك، وجمعيات طلابية حسب الجنسية، ومحاورين خاضوا الإجراءات نفسها قبلك.',
          'عرض الطعام الحلال واسع، في المحلات المختصة وفي العديد من المتاجر الكبرى، وبالمدينة مساجد ومصلّيات متاحة. ويمكن لمصلحة الطلبة الدوليين بجامعتك أن ترشدك إلى أقرب العناوين من حرمك الجامعي.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Москва — политическая, экономическая и академическая столица России, и именно здесь сосредоточено больше всего вузов-партнёров сети. Это также самый дорогой из восьми городов: у такого выбора есть цена, но есть и то, что он даёт взамен.',
    sections: [
      {
        heading: 'Где находится Москва и как туда добраться',
        paragraphs: [
          'Москва раскинулась по обоим берегам Москвы-реки в сердце Русской равнины. Это крупнейший город России и Европы и точка схождения всей железнодорожной и авиационной сети страны: в каком бы городе вы ни учились потом, через Москву вы проедете.',
          'Столицу обслуживают три международных аэропорта. Из Туниса дорога идёт с одной пересадкой, чаще всего в Стамбуле или в хабе Персидского залива. Заложите полный день от двери до двери и оставьте комфортный запас между рейсами: именно на стыковке возникают задержки.',
        ],
      },
      {
        heading: 'Климат и что он меняет на практике',
        paragraphs: [
          'У Москвы выраженный континентальный климат: долгая решительная зима, поздняя весна, жаркое лето и короткая осень. Снег лежит месяцами, а декабрьские дни очень коротки.',
          'Это не непреодолимая трудность, а вопрос экипировки. Здания, транспорт и университеты отапливаются гораздо щедрее, чем представляет себе выходец из Туниса: температурный контраст переживается на улице, а не внутри. Правильное пальто, купленное на месте, решает восемьдесят процентов проблемы.',
        ],
      },
      {
        heading: 'Сколько на самом деле стоит жизнь в Москве',
        paragraphs: [
          'Москва — самый дорогой из восьми городов сети, и разрыв отнюдь не символический. Таблица выше даёт точные суммы; вот как их читать.',
          'При проживании в общежитии жильё и расходы на жизнь вместе ставят Москву заметно выше региональных городов, где тот же месячный бюджет падает более чем вдвое. Доля в квартире, в свою очередь, утраивает статью жилья: именно этот выбор рушит семейные бюджеты, и принимать его следует осознанно, а не по умолчанию.',
        ],
        bullets: [
          'Общежитие остаётся безусловно самым разумным вариантом на первом году',
          'Транспорт недорог со студенческой картой, несмотря на расстояния',
          'Готовить самому в общежитии радикально меняет месячный бюджет — это первый рычаг экономии',
          'Обменники на вокзалах и в аэропортах неизменно предлагают невыгодный курс',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Московское метро — одно из самых эффективных в мире, а часть его станций является настоящими памятниками. Линии обозначены номером и цветом, поэтому ориентироваться можно с первых дней, не читая кириллицу.',
          'Обратная сторона размеров города — расстояния. Час между общежитием и кампусом здесь не редкость. Проверьте это расстояние, прежде чем радоваться центральному адресу: зимой сорок пять минут дороги утром и вечером тяжело ложатся на неделю.',
        ],
      },
      {
        heading: 'Москва для студента из Магриба',
        paragraphs: [
          'Столица принимает студентов со всего мира, а магрибские общины живут здесь десятилетиями. Это город, где проще всего найти земляков, студенческие землячества и людей, прошедших те же формальности до вас.',
          'Халяльные продукты широко доступны — и в специализированных магазинах, и во многих супермаркетах, — а в городе есть открытые мечети и молельные помещения. Отдел по работе с иностранными студентами подскажет адреса ближе всего к вашему кампусу.',
        ],
      },
    ],
  },
};

export const SAINT_PETERSBOURG_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Ancienne capitale impériale fondée au début du XVIIIᵉ siècle sur le delta de la Neva, Saint-Pétersbourg est la deuxième ville de Russie et la plus tournée vers l'Europe. Son centre historique est classé au patrimoine mondial.",
    sections: [
      {
        heading: 'Où se trouve Saint-Pétersbourg et comment on y arrive',
        paragraphs: [
          "La ville a été bâtie sur les îles du delta de la Neva, au fond du golfe de Finlande, à l'extrémité nord-ouest du pays. Cette position maritime explique à la fois son architecture, son climat et son histoire : c'est la fenêtre que la Russie s'est ouverte sur la Baltique.",
          "Un aéroport international dessert la ville, avec une escale depuis Tunis. Elle est également reliée à Moscou par des trains rapides fréquents, ce qui en fait la ville de région la mieux connectée à la capitale.",
        ],
      },
      {
        heading: 'Un climat différent de celui de Moscou',
        paragraphs: [
          "Contrairement à ce que sa latitude plus septentrionale laisse croire, Saint-Pétersbourg a des hivers un peu moins rigoureux que Moscou : l'influence maritime adoucit les extrêmes. En contrepartie, l'humidité est plus forte, le ciel plus gris et les redoux plus fréquents, ce qui donne des trottoirs verglacés.",
          "La ville est aussi célèbre pour ses nuits blanches de juin, où le soleil ne se couche pour ainsi dire pas. Le revers se vit en décembre : les journées sont alors très courtes, et c'est le moment de l'année où le moral demande le plus d'attention.",
        ],
      },
      {
        heading: 'Le coût de la vie, entre Moscou et la province',
        paragraphs: [
          "Saint-Pétersbourg occupe une position intermédiaire : plus abordable que la capitale, plus chère que les villes de région. Le tableau ci-dessus donne les montants exacts pour le logement et la vie courante.",
          "C'est souvent le meilleur compromis pour un étudiant qui veut une grande ville sans le budget de Moscou : la densité culturelle et universitaire y est comparable, pour un coût mensuel sensiblement inférieur.",
        ],
        bullets: [
          "Prévoyez des chaussures réellement imperméables : c'est le poste d'équipement le plus sous-estimé ici",
          'Le métro, parmi les plus profonds du monde, est rapide et bon marché avec la carte étudiante',
          'Le centre historique est compact et se parcourt largement à pied',
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Saint-Pétersbourg est une ville d'étudiants, et cela se sent : musées à tarif réduit, bibliothèques, salles de concert et vie associative dense. Pour qui aime l'histoire et l'architecture, le cadre quotidien est sans équivalent en Russie.",
          "La ville est étendue mais son centre reste lisible, organisé autour de la Neva et de ses canaux. Les trajets y sont généralement plus courts qu'à Moscou, ce qui compte sur quatre ou cinq ans.",
        ],
      },
      {
        heading: 'Saint-Pétersbourg pour un étudiant maghrébin',
        paragraphs: [
          "La ville accueille de longue date des étudiants internationaux, et les communautés y sont organisées. Mosquées et lieux de prière sont accessibles, et l'alimentation halal se trouve sans difficulté particulière.",
          "L'hiver y est le vrai sujet d'adaptation, moins par le froid que par le manque de lumière. Les étudiants qui s'en sortent le mieux sont ceux qui sortent malgré la grisaille et s'inscrivent à une activité dès le premier semestre.",
        ],
      },
    ],
  },
  en: {
    intro:
      "Former imperial capital founded in the early eighteenth century on the Neva delta, Saint Petersburg is Russia's second city and the one most turned towards Europe. Its historic centre is a World Heritage site.",
    sections: [
      {
        heading: 'Where Saint Petersburg is and how to get there',
        paragraphs: [
          'The city was built on the islands of the Neva delta, at the head of the Gulf of Finland, at the far north-west of the country. That maritime position explains its architecture, its climate and its history alike: it is the window Russia opened onto the Baltic.',
          'An international airport serves the city, with one stopover from Tunis. It is also linked to Moscow by frequent high-speed trains, making it the regional city best connected to the capital.',
        ],
      },
      {
        heading: 'A climate different from Moscow',
        paragraphs: [
          'Contrary to what its more northerly latitude suggests, Saint Petersburg has slightly milder winters than Moscow: the maritime influence softens the extremes. In exchange, humidity is higher, the sky greyer and thaws more frequent, which means icy pavements.',
          'The city is also famous for its white nights in June, when the sun barely sets. The counterpart comes in December: days are then very short, and that is the time of year when morale needs the most attention.',
        ],
      },
      {
        heading: 'Cost of living, between Moscow and the provinces',
        paragraphs: [
          'Saint Petersburg sits in between: more affordable than the capital, more expensive than the regional cities. The table above gives the exact figures for accommodation and living costs.',
          'It is often the best compromise for a student who wants a major city without a Moscow budget: the cultural and academic density is comparable, at a noticeably lower monthly cost.',
        ],
        bullets: [
          'Plan for genuinely waterproof shoes: it is the most underestimated item of kit here',
          'The metro, among the deepest in the world, is fast and cheap with a student card',
          'The historic centre is compact and largely walkable',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'Saint Petersburg is a student city and it shows: reduced museum rates, libraries, concert halls and a dense associative life. For anyone who loves history and architecture, the everyday setting is unmatched in Russia.',
          'The city is large but its centre stays legible, organised around the Neva and its canals. Journeys are generally shorter than in Moscow, which counts over four or five years.',
        ],
      },
      {
        heading: 'Saint Petersburg for a Maghrebi student',
        paragraphs: [
          'The city has long hosted international students, and the communities there are organised. Mosques and prayer spaces are accessible, and halal food is found without particular difficulty.',
          'Winter is the real adaptation issue here, less through cold than through lack of light. The students who cope best are those who go out despite the greyness and join an activity in the first semester.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'سان بطرسبورغ عاصمة إمبراطورية سابقة أُسّست في مطلع القرن الثامن عشر على دلتا نهر نيفا، وهي ثاني مدن روسيا وأكثرها انفتاحًا على أوروبا. ومركزها التاريخي مصنّف ضمن التراث العالمي.',
    sections: [
      {
        heading: 'أين تقع سان بطرسبورغ وكيف تصل إليها',
        paragraphs: [
          'بُنيت المدينة على جزر دلتا نهر نيفا، في أقصى خليج فنلندا، بالشمال الغربي للبلاد. وهذا الموقع البحري يفسّر عمارتها ومناخها وتاريخها معًا: فهي النافذة التي فتحتها روسيا على بحر البلطيق.',
          'يخدم المدينة مطار دولي، بتوقف واحد انطلاقًا من تونس. وهي مرتبطة كذلك بموسكو بقطارات سريعة متواترة، ما يجعلها أفضل مدن الأقاليم ارتباطًا بالعاصمة.',
        ],
      },
      {
        heading: 'مناخ مختلف عن مناخ موسكو',
        paragraphs: [
          'خلافًا لما يوحي به موقعها الأكثر شمالًا، شتاء سان بطرسبورغ أقلّ قسوة بعض الشيء من شتاء موسكو: فالتأثير البحري يلطّف الحدّين. وفي المقابل تكون الرطوبة أعلى والسماء أكثر رمادية وفترات الذوبان أكثر تواترًا، ما يعني أرصفة متجمّدة.',
          'تشتهر المدينة أيضًا بلياليها البيضاء في جوان، حين تكاد الشمس لا تغيب. ويأتي المقابل في ديسمبر: إذ تصبح الأيام قصيرة جدًا، وهي فترة السنة التي تتطلّب فيها المعنويات أكبر عناية.',
        ],
      },
      {
        heading: 'كلفة المعيشة، بين موسكو والأقاليم',
        paragraphs: [
          'تحتلّ سان بطرسبورغ موقعًا وسطًا: أقلّ كلفة من العاصمة وأغلى من مدن الأقاليم. والجدول أعلاه يعطي المبالغ الدقيقة للسكن والمعيشة.',
          'وهي غالبًا أفضل حلّ وسط لطالب يريد مدينة كبرى دون ميزانية موسكو: الكثافة الثقافية والجامعية مماثلة، بكلفة شهرية أدنى بشكل ملحوظ.',
        ],
        bullets: [
          'احسب حذاءً مقاومًا للماء فعلًا: فهو أكثر بنود التجهيز استهانةً هنا',
          'المترو، من أعمق شبكات العالم، سريع وغير مكلف ببطاقة الطالب',
          'المركز التاريخي متراصّ ويُجال فيه مشيًا في معظمه',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'سان بطرسبورغ مدينة طلبة، ويُحسّ ذلك: متاحف بتعريفة مخفّضة، ومكتبات، وقاعات حفلات، وحياة جمعياتية كثيفة. ولمن يحبّ التاريخ والعمارة، الإطار اليومي لا نظير له في روسيا.',
          'المدينة شاسعة لكن مركزها يبقى واضح المعالم، منظّمًا حول نهر نيفا وقنواته. والتنقّلات فيها أقصر عمومًا منها في موسكو، وهو ما يُحسب على مدى أربع أو خمس سنوات.',
        ],
      },
      {
        heading: 'سان بطرسبورغ بالنسبة إلى طالب مغاربي',
        paragraphs: [
          'تستقبل المدينة طلبة دوليين منذ زمن طويل، والجاليات بها منظّمة. المساجد والمصلّيات متاحة، والطعام الحلال يُوجد دون صعوبة تُذكر.',
          'الشتاء هو موضوع التأقلم الحقيقي هنا، لا بسبب البرد بل بسبب قلّة الضوء. والطلبة الأكثر نجاحًا في تجاوزه هم الذين يخرجون رغم الرمادية وينخرطون في نشاط منذ السداسي الأول.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Бывшая имперская столица, основанная в начале XVIII века в дельте Невы, Санкт-Петербург — второй город России и самый обращённый к Европе. Его исторический центр внесён в список Всемирного наследия.',
    sections: [
      {
        heading: 'Где находится Санкт-Петербург и как туда добраться',
        paragraphs: [
          'Город построен на островах невской дельты, в вершине Финского залива, на крайнем северо-западе страны. Это приморское положение объясняет и его архитектуру, и климат, и историю: это окно, которое Россия открыла в Балтику.',
          'Город обслуживает международный аэропорт, из Туниса — с одной пересадкой. Он также связан с Москвой частыми скоростными поездами, что делает его самым хорошо соединённым со столицей региональным городом.',
        ],
      },
      {
        heading: 'Климат, не похожий на московский',
        paragraphs: [
          'Вопреки тому, что подсказывает более северная широта, зимы в Петербурге чуть мягче московских: морское влияние сглаживает крайности. Взамен выше влажность, небо серее, а оттепели случаются чаще — отсюда обледенелые тротуары.',
          'Город знаменит июньскими белыми ночами, когда солнце почти не заходит. Обратная сторона приходит в декабре: дни становятся очень короткими, и это время года, когда настроение требует наибольшего внимания.',
        ],
      },
      {
        heading: 'Стоимость жизни: между Москвой и провинцией',
        paragraphs: [
          'Санкт-Петербург занимает промежуточное положение: доступнее столицы, дороже региональных городов. Таблица выше даёт точные суммы по жилью и повседневным расходам.',
          'Часто это лучший компромисс для студента, которому нужен большой город без московского бюджета: культурная и академическая насыщенность сопоставима при заметно меньших месячных расходах.',
        ],
        bullets: [
          'Заложите по-настоящему непромокаемую обувь: здесь это самый недооценённый предмет экипировки',
          'Метро, одно из глубочайших в мире, быстрое и недорогое со студенческой картой',
          'Исторический центр компактен и во многом проходится пешком',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Санкт-Петербург — студенческий город, и это чувствуется: льготные музеи, библиотеки, концертные залы, насыщенная клубная и общественная жизнь. Для тех, кто любит историю и архитектуру, повседневная среда не имеет равных в России.',
          'Город большой, но центр остаётся читаемым, организованным вокруг Невы и её каналов. Поездки здесь в среднем короче московских, а это важно на горизонте четырёх-пяти лет.',
        ],
      },
      {
        heading: 'Санкт-Петербург для студента из Магриба',
        paragraphs: [
          'Город давно принимает иностранных студентов, и общины здесь организованы. Мечети и молельные помещения доступны, халяльные продукты находятся без особых затруднений.',
          'Настоящая тема адаптации здесь — зима, причём не столько холод, сколько нехватка света. Лучше всех справляются те, кто выходит из дома несмотря на серость и записывается на какое-то занятие уже в первом семестре.',
        ],
      },
    ],
  },
};

export const KAZAN_DEEP: DeepCityByLang = {
  fr: {
    intro:
      "Capitale du Tatarstan, Kazan est posée sur la Volga, à environ 800 kilomètres à l'est de Moscou. C'est une ville où les cultures russe et tatare cohabitent depuis des siècles, et probablement la plus familière pour un étudiant maghrébin.",
    sections: [
      {
        heading: 'Où se trouve Kazan et comment on y arrive',
        paragraphs: [
          "Kazan s'étend au confluent de la Volga et de la Kazanka. C'est l'une des plus anciennes villes de la région, et le centre politique et culturel du Tatarstan, république de la Fédération de Russie où le tatar et le russe sont tous deux langues officielles.",
          "Un aéroport international dessert la ville, et une ligne ferroviaire la relie à Moscou, avec des trains de nuit confortables qui permettent de dormir pendant le trajet et d'arriver au matin.",
        ],
      },
      {
        heading: 'Une ville où le patrimoine musulman est visible',
        paragraphs: [
          "Le kremlin de Kazan est classé au patrimoine mondial, et il abrite la mosquée Qol Charif, l'une des plus grandes d'Europe. Ce n'est pas un détail touristique : il dit quelque chose de l'identité de la ville.",
          "Pour un étudiant tunisien, marocain ou algérien, cela change le quotidien. La population musulmane est nombreuse et installée de longue date, la nourriture halal se trouve partout, et les lieux de prière ne sont pas une recherche mais une évidence. C'est, de l'avis des étudiants concernés, la ville du réseau où l'adaptation culturelle est la plus douce.",
        ],
      },
      {
        heading: 'Un coût de la vie nettement plus bas',
        paragraphs: [
          "Kazan combine les équipements d'une grande ville — métro, université d'envergure, vie culturelle — avec des coûts de logement et de vie sensiblement inférieurs à ceux de Moscou. Le tableau ci-dessus donne les montants exacts.",
          "C'est ce rapport qui fait de Kazan un choix fréquent : on y trouve le niveau de services d'une métropole sans en payer le prix, et le budget annuel s'en ressent sur toute la durée du cursus.",
        ],
        bullets: [
          "Le métro de Kazan est récent, propre et simple d'utilisation",
          'La Volga structure la ville et offre de vraies promenades aux beaux jours',
          "L'hiver y est franc, à l'image du climat continental de la région",
        ],
      },
      {
        heading: 'La vie étudiante au quotidien',
        paragraphs: [
          "Kazan est une ville universitaire de premier plan, et la population étudiante y est très présente. Les infrastructures sportives et culturelles, développées à l'occasion de grands événements internationaux, bénéficient directement aux étudiants.",
          "La ville est à taille humaine comparée à Moscou : les trajets quotidiens sont plus courts, ce qui libère du temps et réduit la fatigue sur une année.",
        ],
      },
      {
        heading: 'Kazan pour un étudiant maghrébin',
        paragraphs: [
          "C'est le point fort de la ville. Entre la présence musulmane ancienne, l'offre halal naturelle et une communauté étudiante internationale habituée à accueillir, les premiers mois y sont souvent moins rudes qu'ailleurs.",
          "Cela ne dispense évidemment pas d'apprendre le russe : c'est la langue de l'université, de l'administration et de la vie courante. Mais le dépaysement culturel y est moins brutal, et c'est un facteur à prendre au sérieux quand on part pour cinq ou six ans.",
        ],
      },
    ],
  },
  en: {
    intro:
      'Capital of Tatarstan, Kazan sits on the Volga, around 800 kilometres east of Moscow. It is a city where Russian and Tatar cultures have coexisted for centuries, and probably the most familiar of the eight to a Maghrebi student.',
    sections: [
      {
        heading: 'Where Kazan is and how to get there',
        paragraphs: [
          'Kazan spreads at the confluence of the Volga and the Kazanka. It is one of the oldest cities in the region and the political and cultural centre of Tatarstan, a republic of the Russian Federation where Tatar and Russian are both official languages.',
          'An international airport serves the city, and a rail line connects it to Moscow, with comfortable overnight trains that let you sleep through the journey and arrive in the morning.',
        ],
      },
      {
        heading: 'A city where Muslim heritage is visible',
        paragraphs: [
          'The Kazan Kremlin is a World Heritage site, and it houses the Qol Sharif Mosque, one of the largest in Europe. This is not a tourist detail: it says something about the identity of the city.',
          'For a Tunisian, Moroccan or Algerian student, that changes daily life. The Muslim population is large and long established, halal food is everywhere, and prayer spaces are not something you search for but something you take for granted. By the account of the students concerned, it is the city in the network where cultural adaptation is gentlest.',
        ],
      },
      {
        heading: 'A markedly lower cost of living',
        paragraphs: [
          'Kazan combines the facilities of a major city — metro, a large university, cultural life — with housing and living costs noticeably below those of Moscow. The table above gives the exact figures.',
          'It is that ratio that makes Kazan a frequent choice: you get metropolitan-level services without paying the metropolitan price, and the annual budget reflects it across the whole course.',
        ],
        bullets: [
          'The Kazan metro is recent, clean and simple to use',
          'The Volga shapes the city and offers real walks in the warmer months',
          'Winter is decisive here, in line with the continental climate of the region',
        ],
      },
      {
        heading: 'Student life day to day',
        paragraphs: [
          'Kazan is a leading university city and the student population is very visible. Sporting and cultural infrastructure, developed for major international events, directly benefits students.',
          'The city is human-scale compared with Moscow: daily journeys are shorter, which frees up time and reduces fatigue across a year.',
        ],
      },
      {
        heading: 'Kazan for a Maghrebi student',
        paragraphs: [
          'This is the strength of the city. Between the long-standing Muslim presence, the natural halal offering and an international student community used to welcoming newcomers, the first months are often less harsh than elsewhere.',
          'That obviously does not exempt you from learning Russian: it is the language of the university, the administration and everyday life. But the cultural dislocation is less brutal, and that is a factor worth taking seriously when you are leaving for five or six years.',
        ],
      },
    ],
  },
  ar: {
    intro:
      'قازان عاصمة تتارستان، تقع على نهر الفولغا على بُعد نحو 800 كيلومتر شرق موسكو. وهي مدينة تتعايش فيها الثقافتان الروسية والتترية منذ قرون، وربما أكثر المدن الثماني ألفةً بالنسبة إلى طالب مغاربي.',
    sections: [
      {
        heading: 'أين تقع قازان وكيف تصل إليها',
        paragraphs: [
          'تمتد قازان عند ملتقى نهري الفولغا وكازانكا. وهي من أقدم مدن المنطقة، والمركز السياسي والثقافي لتتارستان، وهي جمهورية ضمن الاتحاد الروسي تُعدّ فيها التترية والروسية لغتين رسميتين معًا.',
          'يخدم المدينة مطار دولي، ويربطها خط سككي بموسكو، بقطارات ليلية مريحة تتيح لك النوم أثناء الرحلة والوصول صباحًا.',
        ],
      },
      {
        heading: 'مدينة يظهر فيها التراث الإسلامي',
        paragraphs: [
          'كرملين قازان مصنّف ضمن التراث العالمي، ويضمّ مسجد قول شريف، أحد أكبر مساجد أوروبا. وليس هذا تفصيلًا سياحيًا: فهو يقول شيئًا عن هوية المدينة.',
          'وبالنسبة إلى طالب تونسي أو مغربي أو جزائري، يغيّر ذلك الحياة اليومية. فالجالية المسلمة كبيرة ومستقرّة منذ زمن بعيد، والطعام الحلال موجود في كل مكان، وأماكن الصلاة ليست بحثًا بل بديهة. وبشهادة الطلبة المعنيين، هي مدينة الشبكة التي يكون فيها التأقلم الثقافي ألطف ما يكون.',
        ],
      },
      {
        heading: 'كلفة معيشة أدنى بوضوح',
        paragraphs: [
          'تجمع قازان بين تجهيزات مدينة كبرى — مترو، وجامعة ذات حجم، وحياة ثقافية — وكلفة سكن ومعيشة أدنى بشكل ملحوظ من موسكو. والجدول أعلاه يعطي المبالغ بدقة.',
          'وهذه النسبة بالذات هي ما يجعل قازان خيارًا متكرّرًا: تجد فيها مستوى خدمات العواصم دون دفع ثمنها، وتنعكس الميزانية السنوية على كامل مدة الدراسة.',
        ],
        bullets: [
          'مترو قازان حديث ونظيف وسهل الاستعمال',
          'الفولغا يرسم شكل المدينة ويتيح نزهات حقيقية في الأيام الدافئة',
          'الشتاء فيها صريح، على صورة المناخ القاري للمنطقة',
        ],
      },
      {
        heading: 'الحياة الطلابية اليومية',
        paragraphs: [
          'قازان مدينة جامعية من الصفّ الأول، والحضور الطلابي فيها بارز جدًا. والبنى الرياضية والثقافية، التي طُوّرت بمناسبة أحداث دولية كبرى، يستفيد منها الطلبة مباشرة.',
          'المدينة على مقاس الإنسان مقارنة بموسكو: التنقّلات اليومية أقصر، ما يحرّر وقتًا ويقلّل الإرهاق على مدار السنة.',
        ],
      },
      {
        heading: 'قازان بالنسبة إلى طالب مغاربي',
        paragraphs: [
          'هذه هي نقطة قوة المدينة. فبين الحضور الإسلامي العريق، والعرض الحلال الطبيعي، وجالية طلابية دولية معتادة على الاستقبال، تكون الأشهر الأولى فيها أقل قسوة غالبًا من غيرها.',
          'ولا يعفي ذلك بالطبع من تعلّم الروسية: فهي لغة الجامعة والإدارة والحياة اليومية. لكن الغربة الثقافية أقلّ حدّة، وهذا عامل يستحق أن يُؤخذ على محمل الجد حين تسافر لخمس أو ست سنوات.',
        ],
      },
    ],
  },
  ru: {
    intro:
      'Казань — столица Татарстана, стоит на Волге примерно в 800 километрах к востоку от Москвы. Это город, где русская и татарская культуры сосуществуют веками, и, вероятно, самый привычный из восьми для студента из Магриба.',
    sections: [
      {
        heading: 'Где находится Казань и как туда добраться',
        paragraphs: [
          'Казань раскинулась у слияния Волги и Казанки. Это один из старейших городов региона и политический и культурный центр Татарстана — республики в составе Российской Федерации, где татарский и русский являются государственными языками.',
          'Город обслуживает международный аэропорт, а железная дорога связывает его с Москвой: удобные ночные поезда позволяют проспать дорогу и приехать утром.',
        ],
      },
      {
        heading: 'Город, где мусульманское наследие на виду',
        paragraphs: [
          'Казанский кремль внесён в список Всемирного наследия и включает мечеть Кул-Шариф, одну из крупнейших в Европе. Это не туристическая деталь: она говорит об идентичности города.',
          'Для студента из Туниса, Марокко или Алжира это меняет повседневность. Мусульманская община велика и давно укоренена, халяльные продукты есть повсюду, а молельные помещения — не предмет поисков, а данность. По отзывам самих студентов, это город сети, где культурная адаптация проходит мягче всего.',
        ],
      },
      {
        heading: 'Заметно более низкая стоимость жизни',
        paragraphs: [
          'Казань соединяет инфраструктуру большого города — метро, крупный университет, культурную жизнь — с расходами на жильё и жизнь, заметно меньшими московских. Таблица выше даёт точные суммы.',
          'Именно это соотношение и делает Казань частым выбором: уровень услуг мегаполиса без его цены, и годовой бюджет чувствует это на всём протяжении учёбы.',
        ],
        bullets: [
          'Казанское метро новое, чистое и простое в использовании',
          'Волга задаёт структуру города и даёт настоящие прогулки в тёплое время',
          'Зима здесь решительная, в духе континентального климата региона',
        ],
      },
      {
        heading: 'Повседневная студенческая жизнь',
        paragraphs: [
          'Казань — университетский город первой величины, и студенческое присутствие здесь очень заметно. Спортивная и культурная инфраструктура, созданная к крупным международным событиям, напрямую работает на студентов.',
          'По сравнению с Москвой город соразмерен человеку: ежедневные поездки короче, что высвобождает время и снижает усталость за год.',
        ],
      },
      {
        heading: 'Казань для студента из Магриба',
        paragraphs: [
          'Это сильная сторона города. Давнее мусульманское присутствие, естественное халяльное предложение и международное студенческое сообщество, привыкшее принимать новичков, делают первые месяцы менее суровыми, чем в других местах.',
          'Это, разумеется, не освобождает от изучения русского: это язык университета, администрации и повседневной жизни. Но культурный разрыв здесь мягче, и это стоит принимать всерьёз, уезжая на пять-шесть лет.',
        ],
      },
    ],
  },
};
