import type { Lang } from '../../i18n';

/*
 * Contenu éditorial des trois pages index — /villes, /filieres et
 * /universites. Ces pages se réduisaient à un chapô et une grille de cartes :
 * 82 à 138 mots, soit les trois pages les plus minces du site alors qu'elles
 * sont les portes d'entrée de ses trois clusters principaux.
 *
 * Le parti pris est l'aide au choix : plutôt que de répéter la liste affichée
 * juste au-dessus, chaque page explique comment arbitrer entre les options.
 *
 * Sourcing : uniquement des montants déjà publiés ailleurs sur le site
 * (CITY_COSTS, PROGRAM_BASE_TUITION) et des constats tirés du contenu des
 * fiches. Aucune donnée nouvelle.
 */

export interface GuidanceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export type GuidanceByLang = Record<Lang, GuidanceSection[]>;

export const VILLES_GUIDANCE: GuidanceByLang = {
  fr: [
    {
      heading: 'Comment choisir sa ville',
      paragraphs: [
        "Le choix de la ville pèse plus lourd qu'on ne l'imagine au moment de candidater. Il détermine votre budget mensuel pendant quatre à six ans, la vitesse à laquelle vous apprendrez le russe, et la facilité avec laquelle vous rentrerez voir votre famille.",
        "Trois logiques s'opposent, et aucune n'est meilleure dans l'absolu : tout dépend de ce que vous optimisez.",
      ],
      bullets: [
        "Les grandes villes — Moscou et Saint-Pétersbourg — offrent le plus large choix de filières, la vie culturelle la plus dense et les communautés maghrébines les plus nombreuses, pour le budget le plus élevé",
        "Kazan combine les équipements d'une métropole avec un coût sensiblement inférieur, et c'est la ville où l'adaptation culturelle est la plus douce pour un étudiant musulman",
        "Les villes de région — Toula, Elets, Lipetsk, Voronej, Orel — divisent le budget mensuel par deux, au prix d'une communauté plus réduite et d'une immersion linguistique immédiate",
      ],
    },
    {
      heading: 'L’écart de budget, en clair',
      paragraphs: [
        "Entre la ville la plus chère et les moins chères du réseau, le poste logement et vie courante varie du simple au double. Sur cinq ou six ans d'études, l'écart cumulé se compte en milliers d'euros, et c'est souvent lui qui décide si un projet tient jusqu'au diplôme ou s'arrête en troisième année.",
        "Chaque page ville affiche le détail exact : résidence universitaire, appartement partagé et vie courante. Comparez-les avant de vous attacher à un nom.",
      ],
    },
    {
      heading: 'Ce que personne ne regarde, et qui compte',
      bullets: [
        "La distance entre la résidence et les bâtiments d'enseignement : une heure de trajet quotidien en hiver pèse lourd sur une année",
        "La proximité d'un aéroport international, qui conditionne vos retours en famille",
        "La taille de la communauté étudiante de votre pays, déterminante les premières semaines mais contre-productive si vous ne fréquentez qu'elle",
        "La disponibilité de l'alimentation halal, évidente à Kazan et à Moscou, à chercher davantage ailleurs",
      ],
    },
  ],
  en: [
    {
      heading: 'How to choose your city',
      paragraphs: [
        'The choice of city weighs more heavily than people imagine at application time. It determines your monthly budget for four to six years, how fast you will learn Russian, and how easily you will go home to see your family.',
        'Three logics compete, and none is better in the absolute: it all depends on what you are optimising for.',
      ],
      bullets: [
        'The large cities — Moscow and Saint Petersburg — offer the widest choice of programmes, the densest cultural life and the largest Maghrebi communities, at the highest budget',
        'Kazan combines metropolitan facilities with a noticeably lower cost, and is the city where cultural adaptation is gentlest for a Muslim student',
        'The regional cities — Tula, Yelets, Lipetsk, Voronezh, Oryol — halve the monthly budget, at the price of a smaller community and immediate linguistic immersion',
      ],
    },
    {
      heading: 'The budget gap, plainly',
      paragraphs: [
        'Between the most expensive city and the cheapest in the network, accommodation and daily living vary twofold. Across five or six years of study, the cumulative gap runs to thousands of euros, and it is often what decides whether a plan holds to graduation or stops in the third year.',
        'Each city page shows the exact detail: university halls, shared apartment and daily living. Compare them before getting attached to a name.',
      ],
    },
    {
      heading: 'What nobody looks at, and should',
      bullets: [
        'The distance between halls and teaching buildings: an hour of daily travel in winter weighs heavily across a year',
        'Proximity to an international airport, which governs your trips home',
        'The size of the student community from your country, decisive in the first weeks but counterproductive if it is all you mix with',
        'The availability of halal food, obvious in Kazan and Moscow, more of a search elsewhere',
      ],
    },
  ],
  ar: [
    {
      heading: 'كيف تختار مدينتك',
      paragraphs: [
        'يزن اختيار المدينة أثقل ممّا يُتصوَّر لحظة الترشّح. فهو يحدّد ميزانيتك الشهرية طيلة أربع إلى ست سنوات، وسرعة تعلّمك للروسية، وسهولة عودتك لرؤية عائلتك.',
        'ثلاثة منطقٍ تتنافس، ولا أفضلية مطلقة لأيّها: كل شيء يتوقف على ما تريد تحسينه.',
      ],
      bullets: [
        'المدن الكبرى — موسكو وسان بطرسبورغ — تقدّم أوسع اختيار للاختصاصات وأكثف حياة ثقافية وأكبر الجاليات المغاربية، بأعلى ميزانية',
        'قازان تجمع بين تجهيزات الحواضر وكلفة أدنى بوضوح، وهي المدينة التي يكون فيها التأقلم الثقافي ألطف ما يكون لطالب مسلم',
        'مدن الأقاليم — تولا ويلتس وليبتسك وفورونيج وأوريول — تقسم الميزانية الشهرية إلى النصف، مقابل جالية أصغر وانغماس لغوي فوري',
      ],
    },
    {
      heading: 'فارق الميزانية، بوضوح',
      paragraphs: [
        'بين أغلى مدينة وأرخصها في الشبكة، يتفاوت بند السكن والمعيشة من واحد إلى اثنين. وعلى مدى خمس أو ست سنوات دراسة، يُحسب الفارق المتراكم بآلاف الأورو، وهو غالبًا ما يقرّر إن كان المشروع سيصمد إلى التخرّج أم سيتوقّف في السنة الثالثة.',
        'وتعرض كل صفحة مدينة التفصيل الدقيق: الإقامة الجامعية، والشقة المشتركة، والمعيشة اليومية. قارنها قبل أن تتعلّق باسم.',
      ],
    },
    {
      heading: 'ما لا ينظر إليه أحد، وهو مهمّ',
      bullets: [
        'المسافة بين الإقامة ومباني التدريس: فساعة تنقّل يومي في الشتاء ثقيلة على مدار السنة',
        'القرب من مطار دولي، وهو ما يحكم عودتك إلى عائلتك',
        'حجم الجالية الطلابية من بلدك، حاسم في الأسابيع الأولى لكنه معاكس للمراد إن لم تخالط سواها',
        'توفّر الطعام الحلال، بديهي في قازان وموسكو، ويتطلّب بحثًا أكبر في غيرهما',
      ],
    },
  ],
  ru: [
    {
      heading: 'Как выбрать город',
      paragraphs: [
        'Выбор города весит больше, чем кажется в момент подачи документов. Он определяет ваш месячный бюджет на четыре-шесть лет, скорость освоения русского и то, насколько легко вы будете ездить к семье.',
        'Здесь сталкиваются три логики, и ни одна не лучше в абсолюте: всё зависит от того, что вы оптимизируете.',
      ],
      bullets: [
        'Крупные города — Москва и Санкт-Петербург — дают самый широкий выбор направлений, самую насыщенную культурную жизнь и самые многочисленные магрибские общины при самом высоком бюджете',
        'Казань сочетает инфраструктуру мегаполиса с заметно меньшей стоимостью и остаётся городом, где культурная адаптация мягче всего для студента-мусульманина',
        'Региональные города — Тула, Елец, Липецк, Воронеж, Орёл — вдвое снижают месячный бюджет ценой меньшей общины и немедленного языкового погружения',
      ],
    },
    {
      heading: 'Разрыв в бюджете, без обиняков',
      paragraphs: [
        'Между самым дорогим и самыми недорогими городами сети жильё и повседневные расходы различаются вдвое. За пять-шесть лет учёбы накопленная разница измеряется тысячами евро, и часто именно она решает, доживёт ли план до диплома или остановится на третьем курсе.',
        'На каждой странице города приведены точные цифры: общежитие, доля в квартире и повседневные расходы. Сравните их, прежде чем привязываться к названию.',
      ],
    },
    {
      heading: 'На что никто не смотрит, а стоило бы',
      bullets: [
        'Расстояние между общежитием и учебными корпусами: час дороги в день зимой тяжело ложится на год',
        'Близость международного аэропорта, от которой зависят поездки домой',
        'Размер студенческой общины из вашей страны — решающий в первые недели, но вредный, если вы общаетесь только с ней',
        'Доступность халяльных продуктов — очевидная в Казани и Москве, требующая поисков в других местах',
      ],
    },
  ],
};

export const FILIERES_GUIDANCE: GuidanceByLang = {
  fr: [
    {
      heading: 'Comment choisir sa filière',
      paragraphs: [
        "Les cinq filières du réseau se distinguent sur trois axes : la durée, le coût annuel et ce qu'il faut faire après le diplôme pour exercer. C'est ce troisième point que l'on sous-estime le plus.",
        "En santé — médecine, dentaire, pharmacie — le diplôme ne suffit pas à exercer où que ce soit : une procédure de reconnaissance est partout nécessaire, et une spécialisation médicale ajoute plusieurs années d'ordinatura. En ingénierie et en économie, exercer dans le privé ne suppose généralement pas d'autorisation professionnelle préalable.",
      ],
    },
    {
      heading: 'Durée et coût, les deux chiffres à comparer',
      paragraphs: [
        "Les cartes ci-dessus affichent la durée et le tarif annuel de chaque filière. Multipliez l'un par l'autre avant de choisir : une filière à 2 200 € sur quatre ans et une filière à 3 500 € sur six ans ne jouent pas dans la même catégorie budgétaire, et l'écart cumulé dépasse largement l'intuition.",
        "N'oubliez pas d'ajouter l'année préparatoire de langue si vous suivez le cursus en russe, ainsi que le logement, la vie courante et l'assurance, détaillés sur chaque page filière.",
      ],
    },
    {
      heading: 'Les questions à se poser avant de trancher',
      bullets: [
        "Où voulez-vous exercer ? C'est la question qui commande toutes les autres, parce qu'elle détermine la procédure de reconnaissance que vous aurez à suivre",
        "Êtes-vous à l'aise en biologie et en chimie, ou plutôt en mathématiques et en physique ? Le socle des deux premières années n'est pas le même",
        "Votre famille peut-elle financer six ans, ou faut-il viser un cursus plus court ?",
        "Visez-vous une spécialisation ? En médecine, cela ajoute plusieurs années après le diplôme, à anticiper dès maintenant",
      ],
    },
  ],
  en: [
    {
      heading: 'How to choose your programme',
      paragraphs: [
        'The five programmes in the network differ along three axes: duration, annual cost and what you must do after graduation in order to practise. It is that third point that is most underestimated.',
        'In health — medicine, dentistry, pharmacy — the degree alone does not let you practise anywhere: a recognition procedure is required everywhere, and a medical specialisation adds several years of ordinatura. In engineering and economics, working in the private sector generally does not require prior professional authorisation.',
      ],
    },
    {
      heading: 'Duration and cost, the two figures to compare',
      paragraphs: [
        'The cards above show the duration and annual rate of each programme. Multiply one by the other before choosing: a €2,200 programme over four years and a €3,500 one over six are not in the same budget category, and the cumulative gap far exceeds intuition.',
        'Do not forget to add the preparatory language year if you follow the Russian-taught course, along with accommodation, daily living and insurance, detailed on each programme page.',
      ],
    },
    {
      heading: 'The questions to ask before deciding',
      bullets: [
        'Where do you want to practise? It is the question that governs all the others, because it determines the recognition procedure you will have to follow',
        'Are you comfortable with biology and chemistry, or rather with mathematics and physics? The foundation of the first two years is not the same',
        'Can your family fund six years, or should you aim for a shorter course?',
        'Are you aiming at a specialisation? In medicine that adds several years after the degree, to anticipate from now',
      ],
    },
  ],
  ar: [
    {
      heading: 'كيف تختار اختصاصك',
      paragraphs: [
        'تتمايز اختصاصات الشبكة الخمسة على ثلاثة محاور: المدة، والكلفة السنوية، وما ينبغي فعله بعد الشهادة لممارسة المهنة. والنقطة الثالثة هي الأكثر استهانةً بها.',
        'ففي الصحة — الطب وطب الأسنان والصيدلة — لا تكفي الشهادة لممارسة المهنة في أي مكان: إذ يلزم إجراء اعتراف في كل البلدان، ويضيف التخصص الطبي سنوات من الأورديناتورا. أما في الهندسة والاقتصاد، فلا تستلزم الممارسة في القطاع الخاص عمومًا ترخيصًا مهنيًا مسبقًا.',
      ],
    },
    {
      heading: 'المدة والكلفة، الرقمان الواجب مقارنتهما',
      paragraphs: [
        'تعرض البطاقات أعلاه مدة كل اختصاص وتعريفته السنوية. اضرب أحدهما في الآخر قبل الاختيار: فاختصاص بـ2200 أورو على أربع سنوات واختصاص بـ3500 أورو على ست سنوات لا ينتميان إلى الصنف الميزانياتي نفسه، والفارق المتراكم يتجاوز الحدس بكثير.',
        'ولا تنسَ إضافة السنة التحضيرية للغة إن تابعت المسار بالروسية، وكذلك السكن والمعيشة اليومية والتأمين، وهي مفصّلة في كل صفحة اختصاص.',
      ],
    },
    {
      heading: 'الأسئلة التي ينبغي طرحها قبل الحسم',
      bullets: [
        'أين تريد ممارسة المهنة؟ هذا هو السؤال الذي يحكم بقية الأسئلة، لأنه يحدّد إجراء الاعتراف الذي سيتعيّن عليك اتّباعه',
        'هل أنت مرتاح في البيولوجيا والكيمياء، أم بالأحرى في الرياضيات والفيزياء؟ فقاعدة السنتين الأوليين ليست واحدة',
        'هل تستطيع عائلتك تمويل ست سنوات، أم ينبغي استهداف مسار أقصر؟',
        'هل تستهدف تخصصًا؟ في الطب يضيف ذلك سنوات بعد الشهادة، وينبغي استباقه منذ الآن',
      ],
    },
  ],
  ru: [
    {
      heading: 'Как выбрать направление',
      paragraphs: [
        'Пять направлений сети различаются по трём осям: длительность, годовая стоимость и то, что нужно сделать после диплома, чтобы работать по профессии. Именно третий пункт недооценивают сильнее всего.',
        'В здравоохранении — медицина, стоматология, фармация — одного диплома недостаточно, чтобы работать где бы то ни было: процедура признания требуется везде, а медицинская специализация добавляет несколько лет ординатуры. В инженерии и экономике работа в частном секторе обычно не требует предварительного профессионального допуска.',
      ],
    },
    {
      heading: 'Длительность и стоимость: две цифры для сравнения',
      paragraphs: [
        'На карточках выше указаны длительность и годовой тариф каждого направления. Перемножьте их перед выбором: программа за 2200 € на четыре года и программа за 3500 € на шесть лет находятся в разных бюджетных категориях, а накопленная разница намного превосходит интуитивную оценку.',
        'Не забудьте прибавить подготовительный языковой год, если учитесь на русском, а также жильё, повседневные расходы и страховку, подробно расписанные на странице каждого направления.',
      ],
    },
    {
      heading: 'Вопросы, которые стоит задать до решения',
      bullets: [
        'Где вы хотите работать? Этот вопрос управляет всеми остальными, потому что определяет процедуру признания, которую придётся пройти',
        'Вам ближе биология и химия или математика и физика? Основа первых двух курсов здесь разная',
        'Может ли семья финансировать шесть лет или стоит нацелиться на более короткую программу?',
        'Планируете ли вы специализацию? В медицине она добавляет несколько лет после диплома, и учитывать это надо уже сейчас',
      ],
    },
  ],
};

export const UNIVERSITES_GUIDANCE: GuidanceByLang = {
  fr: [
    {
      heading: 'Comment lire ces fiches',
      paragraphs: [
        "Chaque fiche publie ce qui est confirmé par une source institutionnelle — dénomination officielle, fondation, statut, histoire — et nomme explicitement ce qui ne l'est pas. Vous y trouverez donc parfois une ligne absente ou une mention « à vérifier » : c'est volontaire.",
        "Deux informations en particulier ne sont jamais affirmées sur ce site, parce qu'elles varient d'une année à l'autre et ne sont pas documentées de façon fiable : la liste exacte des filières ouvertes aux étudiants internationaux, et la langue réelle d'enseignement de chaque cursus. Elles se confirment auprès de l'établissement, et nulle part ailleurs.",
      ],
    },
    {
      heading: 'Choisir une université, concrètement',
      paragraphs: [
        "Commencez par la filière, pas par le nom de l'établissement. Une université prestigieuse qui n'ouvre pas votre spécialité aux internationaux ne vous sert à rien, tandis qu'une université de région qui l'ouvre vous emmènera au diplôme.",
        "Ensuite seulement, regardez la ville : son coût de la vie vous accompagnera pendant toute la durée du cursus.",
      ],
      bullets: [
        "Les établissements techniques — Bauman, Polytechnique de Saint-Pétersbourg, Lipetsk — pour l'ingénierie",
        "Les établissements à composante médicale — Pirogov, RUDN, Kazan, Toula, Elets, Orel — pour les filières de santé",
        "Les universités classiques pluridisciplinaires — Moscou, Kazan, Voronej — pour l'économie et un choix large",
        "RUDN, créée en 1960 pour accueillir des étudiants étrangers, est la seule dont c'est la raison d'être",
      ],
    },
    {
      heading: 'Les trois questions à poser à l’université',
      bullets: [
        "Ma filière est-elle ouverte aux étudiants internationaux cette année, et quel est son code officiel de spécialité ?",
        "Le cursus complet est-il enseigné en russe ou en anglais ? Des modules en anglais ne font pas un cursus anglophone",
        "Une place en résidence m'est-elle garantie, ou simplement possible selon disponibilité ?",
      ],
    },
  ],
  en: [
    {
      heading: 'How to read these pages',
      paragraphs: [
        'Each page publishes what is confirmed by an institutional source — official name, founding, status, history — and explicitly names what is not. You will therefore sometimes find a missing line or a "to be verified" note: that is deliberate.',
        'Two pieces of information in particular are never asserted on this site, because they vary from year to year and are not reliably documented: the exact list of programmes open to international students, and the actual language of instruction of each course. They are confirmed with the institution, and nowhere else.',
      ],
    },
    {
      heading: 'Choosing a university, in practice',
      paragraphs: [
        'Start with the programme, not with the name of the institution. A prestigious university that does not open your specialty to international students is of no use to you, whereas a regional university that does will take you to graduation.',
        'Only then look at the city: its cost of living will stay with you for the whole duration of the course.',
      ],
      bullets: [
        'Technical institutions — Bauman, Saint Petersburg Polytechnic, Lipetsk — for engineering',
        'Institutions with a medical component — Pirogov, RUDN, Kazan, Tula, Yelets, Oryol — for health programmes',
        'Classical multidisciplinary universities — Moscow, Kazan, Voronezh — for economics and a broad choice',
        'RUDN, created in 1960 to host international students, is the only one for which that is the reason it exists',
      ],
    },
    {
      heading: 'The three questions to ask the university',
      bullets: [
        'Is my programme open to international students this year, and what is its official specialty code?',
        'Is the full course taught in Russian or in English? Modules in English do not make an English-taught course',
        'Is a place in halls guaranteed for me, or simply possible subject to availability?',
      ],
    },
  ],
  ar: [
    {
      heading: 'كيف تقرأ هذه البطاقات',
      paragraphs: [
        'تنشر كل بطاقة ما يؤكّده مصدر مؤسساتي — التسمية الرسمية، والتأسيس، والصفة، والتاريخ — وتسمّي صراحة ما لا يؤكّده. ولذلك ستجد أحيانًا سطرًا غائبًا أو إشارة «ينبغي التحقق»: وهذا مقصود.',
        'ومعلومتان على وجه الخصوص لا تُؤكَّدان أبدًا على هذا الموقع، لأنهما تتغيّران من سنة إلى أخرى وليستا موثّقتين بشكل موثوق: القائمة الدقيقة للاختصاصات المفتوحة أمام الطلبة الدوليين، ولغة التدريس الفعلية لكل مسار. وتُؤكَّدان لدى المؤسسة، ولا مكان آخر.',
      ],
    },
    {
      heading: 'اختيار جامعة، عمليًا',
      paragraphs: [
        'ابدأ بالاختصاص لا باسم المؤسسة. فجامعة مرموقة لا تفتح اختصاصك أمام الدوليين لا تنفعك في شيء، في حين أن جامعة إقليمية تفتحه ستوصلك إلى الشهادة.',
        'وبعد ذلك فقط انظر إلى المدينة: فكلفة المعيشة فيها سترافقك طيلة مدة الدراسة.',
      ],
      bullets: [
        'المؤسسات التقنية — باومان وبوليتكنيك سان بطرسبورغ وليبتسك — للهندسة',
        'المؤسسات ذات المكوّن الطبي — بيروغوف وRUDN وقازان وتولا ويلتس وأوريول — لاختصاصات الصحة',
        'الجامعات الكلاسيكية متعدّدة الاختصاصات — موسكو وقازان وفورونيج — للاقتصاد ولاختيار واسع',
        'وRUDN، التي أُنشئت سنة 1960 لاستقبال الطلبة الأجانب، هي الوحيدة التي يمثّل ذلك سبب وجودها',
      ],
    },
    {
      heading: 'الأسئلة الثلاثة التي تُطرح على الجامعة',
      bullets: [
        'هل اختصاصي مفتوح أمام الطلبة الدوليين هذه السنة، وما هو رمزه الرسمي؟',
        'هل يُدرَّس المسار كاملًا بالروسية أم بالإنجليزية؟ فوحدات بالإنجليزية لا تصنع مسارًا أنڨلوفونيًا',
        'هل يُضمن لي مقعد في الإقامة، أم أنه ممكن فقط حسب التوفّر؟',
      ],
    },
  ],
  ru: [
    {
      heading: 'Как читать эти страницы',
      paragraphs: [
        'Каждая страница публикует то, что подтверждено институциональным источником — официальное наименование, основание, статус, историю — и прямо называет то, что не подтверждено. Поэтому иногда вы увидите отсутствующую строку или пометку «требует уточнения»: это сделано намеренно.',
        'Две вещи на этом сайте никогда не утверждаются, потому что меняются год от года и не задокументированы надёжно: точный перечень направлений, открытых для иностранных студентов, и фактический язык обучения на каждой программе. Их подтверждают в самом вузе, и больше нигде.',
      ],
    },
    {
      heading: 'Как выбирать вуз на практике',
      paragraphs: [
        'Начинайте с направления, а не с названия учреждения. Престижный университет, не открывающий вашу специальность иностранцам, вам бесполезен, тогда как региональный вуз, который её открывает, доведёт вас до диплома.',
        'И только затем смотрите на город: его стоимость жизни будет с вами всю учёбу.',
      ],
      bullets: [
        'Технические вузы — Бауманский, СПбПУ, Липецкий — для инженерии',
        'Вузы с медицинским компонентом — Пирогова, РУДН, Казанский, Тульский, Елецкий, Орловский — для направлений здравоохранения',
        'Классические многопрофильные университеты — МГУ, Казанский, Воронежский — для экономики и широкого выбора',
        'РУДН, созданный в 1960 году для приёма иностранных студентов, — единственный, для которого это и есть причина существования',
      ],
    },
    {
      heading: 'Три вопроса, которые стоит задать вузу',
      bullets: [
        'Открыто ли моё направление для иностранных студентов в этом году и каков его официальный код специальности?',
        'Вся программа ведётся на русском или на английском? Отдельные модули на английском не делают её англоязычной',
        'Место в общежитии мне гарантировано или лишь возможно при наличии мест?',
      ],
    },
  ],
};
