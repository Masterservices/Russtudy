import type { BlogArticleEntry } from '../copy';

/*
 * Trois articles de janvier : la première semaine d'un étudiant arrivé à la
 * session de février, le Ramadan vécu pendant les études en Russie, et la
 * préparation du retour — reconnaissance du diplôme et autorisation
 * d'exercer, qui sont deux choses distinctes.
 *
 * Sourcing : aucune date de Ramadan n'est affirmée (le calendrier lunaire est
 * annoncé localement), aucune procédure d'équivalence n'est décrite comme
 * acquise, et aucune promesse d'exercice professionnel n'est formulée. Le
 * texte nomme l'autorité compétente et renvoie vers elle.
 */
export const JANVIER_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'arriver-en-fevrier-premiere-semaine',
    publishedAt: '2027-01-11',
    copy: {
      fr: {
        title: 'Arriver en février : réussir sa première semaine en Russie | RusStudy',
        description:
          "Arriver en plein hiver au milieu de l'année universitaire : jour par jour, ce qu'il faut accomplir la première semaine, ce qu'il faut acheter sur place et les démarches à ne pas reporter.",
        h1: 'Arriver en février : réussir sa première semaine en Russie',
        publishedLabel: 'Publication : Janvier 2027',
        excerpt:
          "Arriver en février, c'est débarquer dans le froid le plus vif de l'année, au milieu d'un calendrier déjà lancé. Voici le déroulé d'une première semaine bien menée.",
        intro:
          "Les étudiants de la session de février vivent une arrivée particulière : la ville est enneigée, les journées sont courtes, et l'université est déjà en mouvement depuis septembre. Rien de cela n'est un problème si la première semaine est organisée. Voici comment nous la structurons avec les étudiants que nous accompagnons.",
        sections: [
          {
            heading: 'Jour 1 : la frontière et le trajet',
            blocks: [
              {
                type: 'p',
                text: "À l'arrivée, deux choses comptent : la carte de migration qui vous est remise au contrôle, et le trajet jusqu'à votre logement. La carte de migration doit être conservée telle quelle — ne la pliez pas, ne la rangez pas dans une poche.",
              },
              {
                type: 'ul',
                items: [
                  "Gardez ensemble, accessible : passeport, visa, carte de migration, lettre d'invitation, attestation d'admission.",
                  "Ayez l'adresse de votre résidence écrite en caractères cyrilliques sur votre téléphone, et sur papier en cas de batterie vide.",
                  "Sachez qui vous accueille et à quel numéro le joindre. Une arrivée nocturne en février sans contact est la situation à éviter absolument.",
                ],
              },
              {
                type: 'strong',
                text: "Emportez dans votre bagage à main de quoi affronter le froid dès la sortie de l'aéroport : manteau, bonnet, gants. Ils ne servent à rien au fond d'une valise en soute.",
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Jours 2 et 3 : le service des relations internationales',
            blocks: [
              {
                type: 'p',
                text: "C'est la priorité absolue, avant tout achat et toute visite. Ce service est votre interlocuteur pour l'ensemble des démarches administratives, et c'est lui qui déclenche la notification de votre lieu de séjour.",
              },
              {
                type: 'ul',
                items: [
                  "Faire accomplir l'enregistrement migratoire par la résidence ou le bailleur, et récupérer la partie détachable.",
                  "Obtenir le calendrier écrit du semestre : dates de cours, de contrôles et d'examens.",
                  "Demander l'organisation de l'examen médical exigé et la souscription de l'assurance santé.",
                  'Finaliser l’inscription administrative et retirer la carte d’étudiant.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'Jour 4 : les achats qui ne peuvent pas attendre',
            blocks: [
              {
                type: 'p',
                text: "Certaines choses s'achètent mieux sur place qu'au pays, à la fois pour le prix et pour l'adaptation au climat local. En février, elles sont urgentes.",
              },
              {
                type: 'ul',
                items: [
                  'Des chaussures d’hiver adaptées à la neige et au verglas, semelle antidérapante : c’est l’achat le plus important du mois.',
                  'Des couches intermédiaires — sous-vêtements thermiques, pulls — plutôt qu’un seul manteau très épais.',
                  'Une carte SIM locale, qui simplifie tout le reste.',
                  'Le nécessaire de literie et de cuisine non fourni par la résidence, à vérifier avant d’acheter.',
                ],
              },
              {
                type: 'p',
                text: "Demandez à un étudiant déjà installé où acheter : vous économiserez autant en prix qu'en erreurs de taille et de qualité.",
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Jour 5 : repérer les lieux avant d’en avoir besoin',
            blocks: [
              {
                type: 'p',
                text: "Une heure consacrée à ce repérage évite plusieurs mauvaises journées. Faites le tour physiquement, pas seulement sur une carte.",
              },
              {
                type: 'ul',
                items: [
                  'Le trajet exact entre votre logement et votre faculté, et sa durée réelle avec de la neige.',
                  "L'arrêt de transport le plus proche et la façon de payer un titre.",
                  'Le service médical universitaire ou l’établissement de santé de référence.',
                  'La pharmacie, le supermarché et la laverie les plus proches.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
            ],
          },
          {
            heading: 'Jours 6 et 7 : rattraper le semestre déjà commencé',
            blocks: [
              {
                type: 'p',
                text: "C'est la particularité de la session de février : vous entrez dans un calendrier en cours. Deux démarches valent mieux que trois semaines de flottement.",
              },
              {
                type: 'ul',
                items: [
                  "Rencontrer le responsable pédagogique de votre groupe pour savoir précisément ce qui a déjà été traité et ce qui est attendu de vous.",
                  "Identifier deux ou trois étudiants du même groupe, de préférence déjà présents depuis septembre, et leur demander les supports de cours.",
                ],
              },
              {
                type: 'p',
                text: "Si vous entrez en année préparatoire de langue, la logique est différente : le groupe démarre avec vous, et la priorité est l'assiduité quotidienne dès la première semaine.",
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Ce qui se joue vraiment la première semaine',
            blocks: [
              {
                type: 'p',
                text: "Les étudiants qui réussissent leur premier semestre ne sont pas ceux qui arrivent les plus forts en russe. Ce sont ceux qui ont réglé l'administratif en sept jours, et qui ont donc pu consacrer les semaines suivantes aux cours plutôt qu'aux files d'attente.",
              },
              {
                type: 'p',
                text: "Et un conseil que nous répétons à chaque promotion : les trois premières semaines de février sont fatigantes pour tout le monde. La difficulté n'est pas un signe que vous avez fait le mauvais choix.",
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Que faut-il garder dans son bagage à main en arrivant en février ?',
            answer:
              "Vos documents — passeport, visa, lettre d'invitation, attestation d'admission — vos traitements médicaux en cours, et de quoi affronter le froid immédiatement : manteau, bonnet, gants. Ces vêtements n'ont aucune utilité en soute.",
          },
          {
            question: 'Quelle est la première démarche à accomplir sur place ?',
            answer:
              "Se présenter au service des relations internationales de l'université, qui déclenche l'enregistrement migratoire, l'examen médical, l'assurance et l'inscription administrative. Tout le reste vient après.",
          },
          {
            question: 'Faut-il acheter ses vêtements d’hiver en Tunisie ou en Russie ?',
            answer:
              "Les chaussures et les couches intermédiaires sont généralement mieux adaptées et plus efficaces achetées sur place, où l'offre correspond au climat. Emportez de quoi tenir les premiers jours, et complétez sur place.",
          },
          {
            question: 'Comment rattraper un semestre déjà commencé ?',
            answer:
              "En voyant le responsable pédagogique de votre groupe dès la première semaine pour établir ce qui a été traité, et en obtenant les supports de cours auprès d'étudiants présents depuis septembre. Si vous entrez en année préparatoire, le groupe démarre avec vous et la question ne se pose pas.",
          },
        ],
        keywords: [
          'arriver en russie en février',
          'première semaine étudiant russie',
          'session février université russe',
          'démarches arrivée hiver russie',
          'acheter vêtements hiver russie',
          'rattraper semestre russie',
        ],
      },
      en: {
        title: 'Arriving in February: getting your first week in Russia right | RusStudy',
        description:
          'Arriving in deep winter, mid-academic-year: day by day, what to get done in the first week, what to buy locally and which steps cannot be postponed.',
        h1: 'Arriving in February: getting your first week in Russia right',
        publishedLabel: 'Published: January 2027',
        excerpt:
          'Arriving in February means landing in the sharpest cold of the year, into a calendar already under way. Here is how a well-run first week unfolds.',
        intro:
          'Students on the February intake have a particular arrival: the city is under snow, days are short, and the university has been running since September. None of that is a problem if the first week is organised. Here is how we structure it with the students we support.',
        sections: [
          {
            heading: 'Day 1: the border and the journey in',
            blocks: [
              {
                type: 'p',
                text: 'On arrival, two things matter: the migration card handed to you at control, and the journey to your accommodation. The migration card must be kept exactly as it is — do not fold it, do not put it in a pocket.',
              },
              {
                type: 'ul',
                items: [
                  'Keep together and accessible: passport, visa, migration card, invitation letter, admission statement.',
                  'Have your residence address written in Cyrillic on your phone, and on paper in case the battery dies.',
                  'Know who is meeting you and on what number. A night arrival in February with no contact is the one situation to avoid absolutely.',
                ],
              },
              {
                type: 'strong',
                text: 'Carry in your hand luggage what you need for the cold from the airport door: coat, hat, gloves. They are useless at the bottom of a checked suitcase.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Days 2 and 3: the international relations office',
            blocks: [
              {
                type: 'p',
                text: 'This is the absolute priority, before any purchase or outing. That office is your contact for every administrative step, and it is what triggers the notification of your place of stay.',
              },
              {
                type: 'ul',
                items: [
                  'Have the residence or landlord file the migration registration, and collect the detachable slip.',
                  'Obtain the written semester calendar: class, assessment and exam dates.',
                  'Arrange the required medical examination and take out the health insurance.',
                  'Complete administrative enrolment and collect your student card.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'Day 4: the purchases that cannot wait',
            blocks: [
              {
                type: 'p',
                text: 'Some things are better bought locally than at home, both for price and for fitness to the local climate. In February they are urgent.',
              },
              {
                type: 'ul',
                items: [
                  'Winter boots suited to snow and ice, with non-slip soles: the single most important purchase of the month.',
                  'Mid-layers — thermal underwear, jumpers — rather than one very thick coat.',
                  'A local SIM card, which simplifies everything else.',
                  'Bedding and kitchen items not provided by the residence, to be checked before buying.',
                ],
              },
              {
                type: 'p',
                text: 'Ask a student already settled where to buy: you will save as much on price as on mistakes in size and quality.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Day 5: find the places before you need them',
            blocks: [
              {
                type: 'p',
                text: 'An hour spent on this saves several bad days. Walk it physically, not just on a map.',
              },
              {
                type: 'ul',
                items: [
                  'The exact route between your accommodation and your faculty, and how long it really takes in snow.',
                  'The nearest transport stop and how to pay a fare.',
                  'The university medical service or the reference health facility.',
                  'The nearest pharmacy, supermarket and laundry.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
            ],
          },
          {
            heading: 'Days 6 and 7: catching up on a semester already started',
            blocks: [
              {
                type: 'p',
                text: 'This is the particularity of the February intake: you step into a calendar in progress. Two actions beat three weeks of drifting.',
              },
              {
                type: 'ul',
                items: [
                  'Meet your group’s academic coordinator to learn precisely what has been covered and what is expected of you.',
                  'Identify two or three students in the same group, ideally there since September, and ask them for the course materials.',
                ],
              },
              {
                type: 'p',
                text: 'If you are entering the preparatory language year, the logic is different: the group starts with you, and the priority is daily attendance from week one.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'What the first week really decides',
            blocks: [
              {
                type: 'p',
                text: 'The students who succeed in their first semester are not the ones who arrive with the best Russian. They are the ones who cleared the paperwork in seven days and could therefore spend the following weeks on classes rather than in queues.',
              },
              {
                type: 'p',
                text: 'And one piece of advice we repeat to every cohort: the first three weeks of February are tiring for everyone. Difficulty is not a sign that you chose wrongly.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'What should stay in hand luggage when arriving in February?',
            answer:
              'Your documents — passport, visa, invitation letter, admission statement — your current medication, and what you need for the cold immediately: coat, hat, gloves. Those clothes are of no use in the hold.',
          },
          {
            question: 'What is the first step to take on arrival?',
            answer:
              'Report to the university’s international relations office, which triggers migration registration, the medical examination, insurance and administrative enrolment. Everything else comes after.',
          },
          {
            question: 'Should winter clothes be bought at home or in Russia?',
            answer:
              'Boots and mid-layers are generally better suited and more effective bought locally, where the offer matches the climate. Bring enough for the first days and complete on site.',
          },
          {
            question: 'How do you catch up on a semester already under way?',
            answer:
              'By seeing your group’s academic coordinator in the first week to establish what has been covered, and by obtaining course materials from students present since September. If you are entering the preparatory year, the group starts with you and the question does not arise.',
          },
        ],
        keywords: [
          'arriving in russia in february',
          'first week student russia',
          'february intake russian university',
          'winter arrival formalities russia',
          'buying winter clothes russia',
          'catching up semester russia',
        ],
      },
      ar: {
        title: 'الوصول في فبراير: كيف تنجح في أسبوعك الأول في روسيا | RusStudy',
        description:
          'الوصول في عزّ الشتاء ووسط السنة الجامعية: يومًا بيوم، ما يجب إنجازه في الأسبوع الأول، وما يُشترى هناك، والإجراءات التي لا تُؤجَّل.',
        h1: 'الوصول في فبراير: كيف تنجح في أسبوعك الأول في روسيا',
        publishedLabel: 'النشر: جانفي 2027',
        excerpt:
          'الوصول في فبراير يعني النزول في أشدّ برد السنة، ووسط رُوزنامة انطلقت من قبل. هذا هو مسار أسبوع أول مُحكَم.',
        intro:
          'طلبة دورة فبراير يعيشون وصولًا خاصًّا: المدينة مغطّاة بالثلج، والأيام قصيرة، والجامعة تعمل منذ سبتمبر. ولا شيء من هذا يمثّل مشكلة إن كان الأسبوع الأول منظَّمًا. وهذا كيف نبنيه مع الطلبة الذين نواكبهم.',
        sections: [
          {
            heading: 'اليوم الأول: الحدود والطريق إلى السكن',
            blocks: [
              {
                type: 'p',
                text: 'عند الوصول يهمّ أمران: بطاقة الهجرة التي تُسلَّم لك عند المراقبة، والطريق إلى سكنك. وبطاقة الهجرة يجب حفظها كما هي — لا تثنِها ولا تضعها في جيب.',
              },
              {
                type: 'ul',
                items: [
                  'احفظ معًا وفي متناول يدك: جواز السفر، والتأشيرة، وبطاقة الهجرة، ودعوة الدراسة، وإفادة القبول.',
                  'ليكن عنوان إقامتك مكتوبًا بالحروف السيريلية في هاتفك، وعلى ورقة في حال نفاد البطارية.',
                  'اعرف من يستقبلك وعلى أي رقم تتّصل به. فالوصول ليلًا في فبراير دون جهة اتصال هو الوضع الذي يجب تجنّبه تمامًا.',
                ],
              },
              {
                type: 'strong',
                text: 'ضع في حقيبة اليد ما يواجه البرد من باب المطار: معطف، وقبّعة، وقفّازات. فهي لا تنفع في قاع حقيبة بالعنبر.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'اليومان الثاني والثالث: مصلحة العلاقات الدولية',
            blocks: [
              {
                type: 'p',
                text: 'هذه هي الأولوية المطلقة، قبل أي شراء وأي زيارة. فهذه المصلحة هي مخاطبك في كل الإجراءات الإدارية، وهي التي تُطلق الإخبار بمكان إقامتك.',
              },
              {
                type: 'ul',
                items: [
                  'جعل الإقامة أو المالك يُنجز التسجيل الهجري، واستلام القسيمة القابلة للفصل.',
                  'الحصول على رُوزنامة السداسي مكتوبةً: تواريخ الدروس والفروض والامتحانات.',
                  'طلب تنظيم الفحص الطبي المطلوب واكتتاب التأمين الصحي.',
                  'إتمام التسجيل الإداري وسحب بطاقة الطالب.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'اليوم الرابع: المشتريات التي لا تنتظر',
            blocks: [
              {
                type: 'p',
                text: 'بعض الأشياء تُشترى هناك أفضل منها في البلد، سعرًا وملاءمةً للمناخ المحلي. وفي فبراير تكون مستعجلة.',
              },
              {
                type: 'ul',
                items: [
                  'حذاء شتوي ملائم للثلج والجليد بنعل مانع للانزلاق: وهو أهمّ شراء في الشهر.',
                  'طبقات وسطى — ملابس داخلية حافظة للحرارة، وأكمام صوفية — بدل معطف واحد سميك جدًّا.',
                  'بطاقة هاتف محلية، تبسّط كل ما بعدها.',
                  'لوازم الفراش والمطبخ التي لا توفّرها الإقامة، ويُتحقَّق منها قبل الشراء.',
                ],
              },
              {
                type: 'p',
                text: 'اسأل طالبًا مستقرًّا من قبل عن أماكن الشراء: ستوفّر في السعر بقدر ما توفّر في أخطاء المقاس والجودة.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'اليوم الخامس: استكشاف الأماكن قبل الحاجة إليها',
            blocks: [
              {
                type: 'p',
                text: 'ساعة واحدة في هذا الاستكشاف تمنع عدة أيام سيّئة. اقطع المسافة فعليًّا لا على خريطة فقط.',
              },
              {
                type: 'ul',
                items: [
                  'الطريق الدقيق بين سكنك وكلّيتك، ومدّته الحقيقية مع وجود الثلج.',
                  'أقرب موقف نقل وطريقة دفع ثمن التذكرة.',
                  'المصلحة الطبية الجامعية أو المؤسسة الصحية المرجعية.',
                  'أقرب صيدلية ومتجر كبير ومغسلة.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
            ],
          },
          {
            heading: 'اليومان السادس والسابع: تعويض سداسي انطلق من قبل',
            blocks: [
              {
                type: 'p',
                text: 'هذه خصوصية دورة فبراير: تدخل في رُوزنامة جارية. وخطوتان أفضل من ثلاثة أسابيع من التردّد.',
              },
              {
                type: 'ul',
                items: [
                  'مقابلة المسؤول البيداغوجي عن مجموعتك لمعرفة ما تمّت دراسته بالتحديد وما هو منتظر منك.',
                  'تحديد طالبين أو ثلاثة من المجموعة نفسها، ويُفضَّل حاضرون منذ سبتمبر، وطلب مساند الدروس منهم.',
                ],
              },
              {
                type: 'p',
                text: 'وإن دخلت السنة التحضيرية للغة، فالمنطق مختلف: المجموعة تنطلق معك، والأولوية هي الحضور اليومي من الأسبوع الأول.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'ما يُحسَم فعلًا في الأسبوع الأول',
            blocks: [
              {
                type: 'p',
                text: 'الطلبة الذين ينجحون في سداسيهم الأول ليسوا أقواهم في الروسية، بل من سوّوا الجانب الإداري في سبعة أيام، فتمكّنوا من تخصيص الأسابيع التالية للدروس بدل الصفوف أمام الشبابيك.',
              },
              {
                type: 'p',
                text: 'ونصيحة نكرّرها لكل دفعة: الأسابيع الثلاثة الأولى من فبراير متعبة للجميع. والصعوبة ليست دليلًا على أنك اخترت خطأً.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'ماذا يجب أن يبقى في حقيبة اليد عند الوصول في فبراير؟',
            answer:
              'وثائقك — جواز السفر، والتأشيرة، ودعوة الدراسة، وإفادة القبول — وعلاجاتك الجارية، وما يواجه البرد فورًا: معطف وقبّعة وقفّازات. فهذه الملابس لا تنفع في العنبر.',
          },
          {
            question: 'ما أول إجراء يُنجَز هناك؟',
            answer:
              'الحضور إلى مصلحة العلاقات الدولية في الجامعة، فهي التي تُطلق التسجيل الهجري والفحص الطبي والتأمين والتسجيل الإداري. وكل ما عدا ذلك يأتي بعده.',
          },
          {
            question: 'هل تُشترى ملابس الشتاء في تونس أم في روسيا؟',
            answer:
              'الأحذية والطبقات الوسطى تكون عادةً أكثر ملاءمة وفعالية إن شُريت هناك، حيث يتوافق العرض مع المناخ. احمل ما يكفي للأيام الأولى وأكمل على عين المكان.',
          },
          {
            question: 'كيف يُعوَّض سداسي انطلق من قبل؟',
            answer:
              'بمقابلة المسؤول البيداغوجي عن مجموعتك في الأسبوع الأول لتحديد ما تمّت دراسته، وبالحصول على مساند الدروس من طلبة حاضرين منذ سبتمبر. وإن دخلت السنة التحضيرية، فالمجموعة تنطلق معك ولا يُطرح السؤال.',
          },
        ],
        keywords: [
          'الوصول إلى روسيا في فبراير',
          'الأسبوع الأول للطالب في روسيا',
          'دورة فبراير الجامعة الروسية',
          'إجراءات الوصول في الشتاء روسيا',
          'شراء ملابس الشتاء في روسيا',
          'تعويض السداسي في روسيا',
        ],
      },
      ru: {
        title: 'Приезд в феврале: как провести первую неделю в России | RusStudy',
        description:
          'Приезд в разгар зимы и посреди учебного года: по дням — что нужно успеть в первую неделю, что купить на месте и какие шаги нельзя откладывать.',
        h1: 'Приезд в феврале: как провести первую неделю в России',
        publishedLabel: 'Публикация: январь 2027',
        excerpt:
          'Приезд в феврале — это самый резкий холод года и календарь, который уже идёт. Вот как выглядит хорошо выстроенная первая неделя.',
        intro:
          'У студентов февральского набора особый приезд: город в снегу, дни короткие, а вуз работает с сентября. Ничего из этого не проблема, если первая неделя организована. Так мы её выстраиваем со студентами, которых сопровождаем.',
        sections: [
          {
            heading: 'День 1: граница и дорога до жилья',
            blocks: [
              {
                type: 'p',
                text: 'По прибытии важны две вещи: миграционная карта, выданная на контроле, и дорога до жилья. Миграционную карту нужно хранить в том виде, в каком она выдана: не сгибать и не держать в кармане.',
              },
              {
                type: 'ul',
                items: [
                  'Держите вместе и под рукой: паспорт, визу, миграционную карту, приглашение, справку о зачислении.',
                  'Пусть адрес общежития будет записан по-русски в телефоне и на бумаге — на случай разрядки.',
                  'Знайте, кто вас встречает и по какому номеру. Ночной приезд в феврале без контакта — ситуация, которой следует избегать категорически.',
                ],
              },
              {
                type: 'strong',
                text: 'Возьмите в ручную кладь то, что нужно против холода уже на выходе из аэропорта: куртку, шапку, перчатки. На дне сданного чемодана они бесполезны.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Дни 2–3: отдел международных связей',
            blocks: [
              {
                type: 'p',
                text: 'Это абсолютный приоритет — раньше любых покупок и прогулок. Этот отдел ваш контакт по всем административным шагам, и именно он запускает уведомление о месте пребывания.',
              },
              {
                type: 'ul',
                items: [
                  'Добиться, чтобы общежитие или собственник подали документы на миграционный учёт, и получить отрывную часть.',
                  'Получить письменный календарь семестра: даты занятий, зачётов и экзаменов.',
                  'Организовать требуемый медосмотр и оформить медицинскую страховку.',
                  'Завершить административное зачисление и получить студенческий билет.',
                ],
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'День 4: покупки, которые не ждут',
            blocks: [
              {
                type: 'p',
                text: 'Кое-что лучше покупать на месте, чем дома, — и по цене, и по соответствию местному климату. В феврале это срочно.',
              },
              {
                type: 'ul',
                items: [
                  'Зимняя обувь для снега и льда с нескользящей подошвой: самая важная покупка месяца.',
                  'Промежуточные слои — термобелье, свитеры — вместо одной очень толстой куртки.',
                  'Местная SIM-карта, которая упрощает всё остальное.',
                  'Постельные и кухонные принадлежности, которые не выдаёт общежитие, — уточнить до покупки.',
                ],
              },
              {
                type: 'p',
                text: 'Спросите у студента, который уже освоился, где покупать: сэкономите и на цене, и на ошибках с размером и качеством.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'День 5: найти места до того, как они понадобятся',
            blocks: [
              {
                type: 'p',
                text: 'Час, потраченный на это, экономит несколько плохих дней. Пройдите маршрут ногами, а не только по карте.',
              },
              {
                type: 'ul',
                items: [
                  'Точный путь от жилья до факультета и реальное время в снегу.',
                  'Ближайшая остановка транспорта и способ оплаты проезда.',
                  'Университетская медслужба или профильное медицинское учреждение.',
                  'Ближайшая аптека, продуктовый магазин и прачечная.',
                ],
              },
              { type: 'related', slug: 'se-soigner-en-russie-medecin-pharmacie' },
            ],
          },
          {
            heading: 'Дни 6–7: догнать уже начавшийся семестр',
            blocks: [
              {
                type: 'p',
                text: 'Это особенность февральского набора: вы входите в идущий календарь. Два действия лучше трёх недель неопределённости.',
              },
              {
                type: 'ul',
                items: [
                  'Встретиться с куратором вашей группы и выяснить, что уже пройдено и что от вас ожидается.',
                  'Найти двух-трёх студентов из той же группы, желательно с сентября, и попросить учебные материалы.',
                ],
              },
              {
                type: 'p',
                text: 'Если вы поступаете на подготовительный год по языку, логика иная: группа начинает вместе с вами, и приоритет — ежедневная посещаемость с первой недели.',
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Что на самом деле решает первая неделя',
            blocks: [
              {
                type: 'p',
                text: 'Успешно проходят первый семестр не те, кто приехал с лучшим русским. А те, кто закрыл административные дела за семь дней и смог посвятить следующие недели занятиям, а не очередям.',
              },
              {
                type: 'p',
                text: 'И совет, который мы повторяем каждому набору: первые три недели февраля утомительны для всех. Трудность не означает, что выбор был неверным.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Что держать в ручной клади при приезде в феврале?',
            answer:
              'Документы — паспорт, визу, приглашение, справку о зачислении, — текущие лекарства и то, что нужно против холода сразу: куртку, шапку, перчатки. В багажном отделении эта одежда бесполезна.',
          },
          {
            question: 'Какой шаг первый по приезде?',
            answer:
              'Прийти в отдел международных связей вуза: он запускает миграционный учёт, медосмотр, страховку и административное зачисление. Всё остальное после.',
          },
          {
            question: 'Покупать зимнюю одежду дома или в России?',
            answer:
              'Обувь и промежуточные слои обычно удачнее и эффективнее купленные на месте, где ассортимент соответствует климату. Возьмите достаточное на первые дни и доберите там.',
          },
          {
            question: 'Как догнать уже начавшийся семестр?',
            answer:
              'Встретиться с куратором группы в первую неделю и выяснить, что пройдено, и взять учебные материалы у студентов, которые учатся с сентября. На подготовительном году группа начинает вместе с вами, и вопрос не возникает.',
          },
        ],
        keywords: [
          'приезд в Россию в феврале',
          'первая неделя студента в России',
          'февральский набор в вузе',
          'формальности при зимнем приезде',
          'покупка зимней одежды в России',
          'догнать семестр в России',
        ],
      },
    },
  },
  {
    slug: 'ramadan-et-etudes-en-russie',
    publishedAt: '2027-01-18',
    copy: {
      fr: {
        title: 'Ramadan et études en Russie : organiser son mois sereinement | RusStudy',
        description:
          "Jeûner en Russie pendant les études : journées courtes en hiver, repas en résidence universitaire, alimentation halal, mosquées en ville et organisation des révisions. Conseils pratiques d'étudiants.",
        h1: 'Ramadan et études en Russie : organiser son mois sereinement',
        publishedLabel: 'Publication : Janvier 2027',
        excerpt:
          "Beaucoup d'étudiants appréhendent leur premier Ramadan loin de chez eux. En hiver, les journées russes sont courtes — et c'est l'organisation, pas le jeûne, qui demande de la préparation.",
        intro:
          "C'est une question que les familles posent souvent, et rarement à voix haute : comment se passe le Ramadan quand on étudie en Russie ? La réponse rassure généralement. Le jeûne en hiver y est plus court qu'au Maghreb, et les grandes villes universitaires accueillent des communautés musulmanes installées depuis longtemps. Ce qui demande de l'organisation, ce sont les repas et le calendrier des cours.",
        sections: [
          {
            heading: 'La durée du jeûne : l’hiver joue en votre faveur',
            blocks: [
              {
                type: 'p',
                text: "Le calendrier musulman étant lunaire, le mois de Ramadan se décale chaque année d'environ onze jours par rapport au calendrier solaire. Il traverse donc toutes les saisons au fil des années.",
              },
              {
                type: 'p',
                text: "Lorsqu'il tombe en hiver ou en fin d'hiver, les journées russes sont courtes : dans les villes du nord et du centre du pays, l'écart entre le lever et le coucher du soleil est alors nettement plus réduit qu'en été au Maghreb. Concrètement, la journée de jeûne est plus courte qu'à Tunis.",
              },
              {
                type: 'strong',
                text: "Nous ne publions pas de dates : le début du mois est déterminé selon le calendrier lunaire et annoncé localement. Renseignez-vous auprès de la communauté de votre ville, et gardez en tête que les horaires de prière varient fortement selon la latitude de la ville russe où vous étudiez.",
              },
              {
                type: 'p',
                text: "Ce dernier point est important : les horaires de Moscou ne sont pas ceux de Kazan ni de Saint-Pétersbourg, et l'écart est bien plus marqué qu'entre deux villes tunisiennes.",
              },
            ],
          },
          {
            heading: 'Les repas en résidence universitaire',
            blocks: [
              {
                type: 'p',
                text: "C'est le vrai sujet pratique. Les repas se prennent avant le lever du jour et après le coucher du soleil, horaires qui ne correspondent pas forcément à ceux d'une cantine universitaire.",
              },
              {
                type: 'ul',
                items: [
                  "Vérifiez les conditions d'accès à la cuisine de votre résidence et ses horaires d'ouverture, s'il y en a.",
                  "Équipez-vous du minimum pour préparer un repas simple : c'est l'achat qui change tout pendant ce mois.",
                  'Organisez-vous à plusieurs : cuisiner et rompre le jeûne en groupe allège la charge et la solitude.',
                  'Faites vos courses en avance, en évitant les retours tardifs quand les commerces sont fermés.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Trouver une alimentation adaptée',
            blocks: [
              {
                type: 'p',
                text: "L'offre alimentaire halal existe dans les villes russes, mais elle varie beaucoup d'une ville à l'autre : elle est généralement plus développée dans les grandes agglomérations et dans les républiques à population historiquement musulmane.",
              },
              {
                type: 'p',
                text: "Nous ne listons pas de commerces ni d'adresses : ces informations changent trop vite pour être publiées sur une page web. La bonne source est locale et humaine : les étudiants déjà installés dans votre ville, et les associations étudiantes.",
              },
              {
                type: 'p',
                text: "Posez la question dès votre arrivée, pas la semaine du Ramadan. C'est le genre de renseignement qui prend une heure à obtenir et évite un mois de difficultés.",
              },
            ],
          },
          {
            heading: 'La pratique religieuse dans les villes universitaires',
            blocks: [
              {
                type: 'p',
                text: "L'islam est une religion anciennement établie en Russie, et des mosquées sont présentes dans de nombreuses villes, en particulier dans les grandes agglomérations et dans certaines républiques. Les grandes mosquées urbaines connaissent une fréquentation importante pendant le mois de Ramadan.",
              },
              {
                type: 'p',
                text: "L'existence et l'accessibilité d'un lieu de culte dépendent toutefois de la ville, et nous n'affirmons rien établissement par établissement. C'est un point à vérifier directement pour la ville que vous visez, auprès d'étudiants sur place.",
              },
              {
                type: 'ul',
                items: [
                  'Y a-t-il un lieu de culte accessible depuis le campus, et à quelle distance ?',
                  'Existe-t-il une association d’étudiants musulmans dans l’université ?',
                  'Comment s’organisent les étudiants pour la rupture du jeûne en semaine ?',
                ],
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-la-libye' },
            ],
          },
          {
            heading: 'Concilier le jeûne et le calendrier universitaire',
            blocks: [
              {
                type: 'p',
                text: "Le point à anticiper n'est pas le jeûne lui-même, mais sa superposition éventuelle avec une période de contrôles ou d'examens. Selon l'année, le mois de Ramadan peut tomber en pleine période d'évaluation du semestre de printemps.",
              },
              {
                type: 'ul',
                items: [
                  "Récupérez le calendrier de votre faculté en début de semestre et repérez les chevauchements à l'avance.",
                  "Avancez le travail de révision avant le début du mois plutôt que de compter sur les soirées.",
                  'Protégez le sommeil : le manque de sommeil, et non le jeûne, est ce qui fait chuter les résultats.',
                ],
              },
              {
                type: 'p',
                text: "Les aménagements éventuels d'horaires relèvent de chaque faculté : si une situation particulière se présente, la bonne démarche est d'en parler au responsable pédagogique à l'avance, pas la veille d'un examen.",
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'Le premier Ramadan loin de la famille',
            blocks: [
              {
                type: 'p',
                text: "C'est souvent la vraie difficulté, et elle n'est pas logistique. L'absence des repas familiaux, des habitudes du quartier, de l'ambiance des soirées : les étudiants nous en parlent plus que du jeûne.",
              },
              {
                type: 'p',
                text: "Ce qui fonctionne, d'après ce que nous observons : rompre le jeûne à plusieurs plutôt que seul dans une chambre, maintenir un appel quotidien avec la famille, et accepter que le premier mois soit différent sans être moins bon.",
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Le jeûne est-il plus long en Russie qu’en Tunisie ?',
            answer:
              "Cela dépend entièrement de la saison et de la ville. Lorsque le mois de Ramadan tombe en hiver ou en fin d'hiver, les journées russes sont courtes et le jeûne est plus court qu'en été au Maghreb. Lorsqu'il tombe en été, l'inverse est vrai, surtout dans les villes du nord. Les horaires varient fortement selon la latitude.",
          },
          {
            question: 'Trouve-t-on une alimentation halal dans les villes russes ?',
            answer:
              "L'offre existe mais varie selon la ville, généralement plus développée dans les grandes agglomérations. Nous ne publions pas d'adresses, qui changent trop vite : demandez aux étudiants déjà installés dans votre ville dès votre arrivée.",
          },
          {
            question: 'Y a-t-il des mosquées près des universités ?',
            answer:
              "Des mosquées sont présentes dans de nombreuses villes russes, en particulier les grandes agglomérations. Leur proximité avec un campus donné dépend de la ville et nous ne l'affirmons pas établissement par établissement : vérifiez-le pour la ville que vous visez auprès d'étudiants sur place.",
          },
          {
            question: 'Les universités aménagent-elles les horaires pendant le Ramadan ?',
            answer:
              "Les aménagements relèvent de chaque faculté et ne constituent pas une règle générale. Si une situation particulière se présente, parlez-en au responsable pédagogique à l'avance. Le plus efficace reste d'anticiper les révisions avant le début du mois.",
          },
        ],
        keywords: [
          'ramadan en russie étudiant',
          'jeûner en russie études',
          'alimentation halal russie',
          'mosquée ville russe étudiant',
          'ramadan calendrier universitaire russie',
          'étudiant musulman en russie',
        ],
      },
      en: {
        title: 'Ramadan and studying in Russia: organising the month calmly | RusStudy',
        description:
          'Fasting in Russia while studying: short winter days, meals in university housing, halal food, mosques in cities and organising revision. Practical advice from students.',
        h1: 'Ramadan and studying in Russia: organising the month calmly',
        publishedLabel: 'Published: January 2027',
        excerpt:
          'Many students worry about their first Ramadan far from home. In winter, Russian days are short — and it is the organisation, not the fast, that needs preparation.',
        intro:
          'Families often ask this question, and rarely out loud: what is Ramadan like when studying in Russia? The answer is generally reassuring. Fasting in winter is shorter there than in the Maghreb, and the large university cities host long-established Muslim communities. What takes organising is meals and the class calendar.',
        sections: [
          {
            heading: 'The length of the fast: winter works in your favour',
            blocks: [
              {
                type: 'p',
                text: 'As the Muslim calendar is lunar, the month of Ramadan shifts by about eleven days each year against the solar calendar. Over the years it therefore moves through every season.',
              },
              {
                type: 'p',
                text: 'When it falls in winter or late winter, Russian days are short: in cities in the north and centre of the country, the gap between sunrise and sunset is then markedly smaller than in a Maghreb summer. In practice, the fasting day is shorter than in Tunis.',
              },
              {
                type: 'strong',
                text: 'We publish no dates: the start of the month is determined by the lunar calendar and announced locally. Ask the community in your city, and bear in mind that prayer times vary considerably with the latitude of the Russian city where you study.',
              },
              {
                type: 'p',
                text: 'That last point matters: Moscow’s times are not Kazan’s or Saint Petersburg’s, and the spread is far wider than between two Tunisian cities.',
              },
            ],
          },
          {
            heading: 'Meals in university housing',
            blocks: [
              {
                type: 'p',
                text: 'This is the real practical issue. Meals are taken before dawn and after sunset, hours that do not necessarily match a university canteen’s.',
              },
              {
                type: 'ul',
                items: [
                  'Check the access conditions and opening hours of your residence’s kitchen, if there is one.',
                  'Equip yourself with the minimum to cook a simple meal: that is the purchase that changes everything during this month.',
                  'Organise in groups: cooking and breaking the fast together lightens both the workload and the loneliness.',
                  'Shop ahead, avoiding late returns when shops are closed.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Finding suitable food',
            blocks: [
              {
                type: 'p',
                text: 'Halal food is available in Russian cities, but provision varies a great deal from one city to another: it is generally more developed in large conurbations and in republics with a historically Muslim population.',
              },
              {
                type: 'p',
                text: 'We list no shops or addresses: that information changes too fast to be published on a web page. The right source is local and human: students already settled in your city, and student associations.',
              },
              {
                type: 'p',
                text: 'Ask on arrival, not in the week Ramadan starts. This is the kind of information that takes an hour to obtain and saves a month of difficulty.',
              },
            ],
          },
          {
            heading: 'Religious practice in university cities',
            blocks: [
              {
                type: 'p',
                text: 'Islam is a long-established religion in Russia, and mosques are present in many cities, particularly in large conurbations and in some republics. The large urban mosques see heavy attendance during Ramadan.',
              },
              {
                type: 'p',
                text: 'Whether a place of worship exists and how accessible it is depends on the city, however, and we assert nothing institution by institution. Check it directly for the city you are targeting, with students on site.',
              },
              {
                type: 'ul',
                items: [
                  'Is there a place of worship reachable from the campus, and how far?',
                  'Is there a Muslim students’ association at the university?',
                  'How do students organise breaking the fast on weekdays?',
                ],
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-la-libye' },
            ],
          },
          {
            heading: 'Fasting and the academic calendar',
            blocks: [
              {
                type: 'p',
                text: 'What needs anticipating is not the fast itself, but its possible overlap with an assessment or exam period. Depending on the year, Ramadan may fall in the middle of the spring semester’s assessment period.',
              },
              {
                type: 'ul',
                items: [
                  'Get your faculty’s calendar at the start of the semester and spot overlaps in advance.',
                  'Move revision forward, before the month starts, rather than counting on the evenings.',
                  'Protect your sleep: lack of sleep, not fasting, is what makes results fall.',
                ],
              },
              {
                type: 'p',
                text: 'Any adjustment of timetables is a matter for each faculty: if a particular situation arises, the right step is to speak to the academic coordinator in advance, not the night before an exam.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'A first Ramadan away from family',
            blocks: [
              {
                type: 'p',
                text: 'This is often the real difficulty, and it is not logistical. The absence of family meals, neighbourhood habits, the atmosphere of the evenings: students tell us about that more than about the fast.',
              },
              {
                type: 'p',
                text: 'What works, from what we observe: breaking the fast together rather than alone in a room, keeping a daily call with family, and accepting that the first month will be different without being worse.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is fasting longer in Russia than in Tunisia?',
            answer:
              'It depends entirely on the season and the city. When Ramadan falls in winter or late winter, Russian days are short and the fast is shorter than in a Maghreb summer. When it falls in summer the reverse is true, especially in northern cities. Times vary considerably with latitude.',
          },
          {
            question: 'Is halal food available in Russian cities?',
            answer:
              'It is available but varies by city, generally more developed in large conurbations. We publish no addresses, as they change too fast: ask students already settled in your city as soon as you arrive.',
          },
          {
            question: 'Are there mosques near universities?',
            answer:
              'Mosques are present in many Russian cities, particularly large conurbations. How close one is to a given campus depends on the city and we do not assert it institution by institution: check it for your target city with students on site.',
          },
          {
            question: 'Do universities adjust timetables during Ramadan?',
            answer:
              'Adjustments are a matter for each faculty and are not a general rule. If a particular situation arises, speak to the academic coordinator in advance. The most effective approach remains moving revision forward before the month begins.',
          },
        ],
        keywords: [
          'ramadan in russia student',
          'fasting while studying in russia',
          'halal food russia',
          'mosque russian city student',
          'ramadan academic calendar russia',
          'muslim student in russia',
        ],
      },
      ar: {
        title: 'رمضان والدراسة في روسيا: كيف تنظّم شهرك بهدوء | RusStudy',
        description:
          'الصيام في روسيا أثناء الدراسة: أيام قصيرة في الشتاء، والوجبات في الإقامة الجامعية، والطعام الحلال، والمساجد في المدن، وتنظيم المراجعة. نصائح عملية من طلبة.',
        h1: 'رمضان والدراسة في روسيا: كيف تنظّم شهرك بهدوء',
        publishedLabel: 'النشر: جانفي 2027',
        excerpt:
          'كثير من الطلبة يتهيّبون رمضانهم الأول بعيدًا عن البيت. وفي الشتاء تكون الأيام الروسية قصيرة — والتنظيم، لا الصيام، هو ما يحتاج إلى تحضير.',
        intro:
          'سؤال تطرحه العائلات كثيرًا وقليلًا ما تطرحه بصوت عالٍ: كيف يكون رمضان عند الدراسة في روسيا؟ والجواب مطمئن عمومًا. فالصيام في الشتاء هناك أقصر منه في المغرب الكبير، والمدن الجامعية الكبرى تحتضن جماعات مسلمة مستقرّة منذ زمن طويل. أما ما يحتاج تنظيمًا فهو الوجبات ورُوزنامة الدروس.',
        sections: [
          {
            heading: 'مدة الصيام: الشتاء في صالحك',
            blocks: [
              {
                type: 'p',
                text: 'لأن التقويم الهجري قمري، يتقدّم شهر رمضان كل سنة نحو أحد عشر يومًا بالنسبة إلى التقويم الشمسي. ومن ثمّ فهو يمرّ بكل الفصول مع مرّ السنوات.',
              },
              {
                type: 'p',
                text: 'وعندما يقع في الشتاء أو في آخره، تكون الأيام الروسية قصيرة: ففي مدن شمال البلاد ووسطها يكون الفارق بين الشروق والغروب أقلّ بوضوح منه في صيف المغرب الكبير. وعمليًّا، يوم الصيام أقصر منه في تونس.',
              },
              {
                type: 'strong',
                text: 'لا ننشر تواريخ: بداية الشهر تُحدَّد وفق التقويم القمري ويُعلن عنها محليًّا. استفسر من الجماعة في مدينتك، وتذكّر أن مواقيت الصلاة تتفاوت كثيرًا حسب خط عرض المدينة الروسية التي تدرس فيها.',
              },
              {
                type: 'p',
                text: 'وهذه النقطة الأخيرة مهمّة: مواقيت موسكو ليست مواقيت قازان ولا سان بطرسبرغ، والفارق أوسع كثيرًا منه بين مدينتين تونسيتين.',
              },
            ],
          },
          {
            heading: 'الوجبات في الإقامة الجامعية',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو الموضوع العملي الحقيقي. فالوجبات تُؤخذ قبل الفجر وبعد الغروب، وهي مواقيت لا تتوافق بالضرورة مع مواقيت مطعم جامعي.',
              },
              {
                type: 'ul',
                items: [
                  'تحقّق من شروط الدخول إلى مطبخ إقامتك وأوقات فتحه، إن وُجد.',
                  'جهّز الحدّ الأدنى لإعداد وجبة بسيطة: فهذا هو الشراء الذي يغيّر كل شيء في هذا الشهر.',
                  'نظّموا أنفسكم جماعةً: الطبخ والإفطار مع آخرين يخفّف العبء والوحدة.',
                  'تسوّق مسبقًا، وتجنّب العودة المتأخّرة حين تكون المتاجر مغلقة.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'إيجاد طعام ملائم',
            blocks: [
              {
                type: 'p',
                text: 'عرض الطعام الحلال موجود في المدن الروسية، لكنه يتفاوت كثيرًا من مدينة إلى أخرى: وهو عمومًا أكثر تطوّرًا في الحواضر الكبرى وفي الجمهوريات ذات السكان المسلمين تاريخيًّا.',
              },
              {
                type: 'p',
                text: 'ولا نُدرج متاجر ولا عناوين: فهذه المعلومات تتغيّر أسرع من أن تُنشر على صفحة إلكترونية. والمصدر الصحيح محلي وبشري: الطلبة المستقرّون في مدينتك، والجمعيات الطلابية.',
              },
              {
                type: 'p',
                text: 'اطرح السؤال عند وصولك، لا في أسبوع رمضان. فهذا نوع من المعلومات يُحصَّل في ساعة ويوفّر شهرًا من الصعوبات.',
              },
            ],
          },
          {
            heading: 'الممارسة الدينية في المدن الجامعية',
            blocks: [
              {
                type: 'p',
                text: 'الإسلام دين قديم الاستقرار في روسيا، والمساجد موجودة في مدن كثيرة، خاصة في الحواضر الكبرى وفي بعض الجمهوريات. والمساجد الكبرى في المدن تشهد إقبالًا كبيرًا خلال شهر رمضان.',
              },
              {
                type: 'p',
                text: 'لكن وجود مكان للعبادة ومدى سهولة الوصول إليه يتوقّفان على المدينة، ولا نؤكّد شيئًا مؤسسةً مؤسسةً. تحقّق من ذلك مباشرة بخصوص المدينة التي تستهدفها، لدى طلبة هناك.',
              },
              {
                type: 'ul',
                items: [
                  'هل يوجد مكان للعبادة يمكن الوصول إليه من الحيّ الجامعي، وعلى أي مسافة؟',
                  'هل توجد جمعية للطلبة المسلمين في الجامعة؟',
                  'كيف ينظّم الطلبة الإفطار في أيام الأسبوع؟',
                ],
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-la-libye' },
            ],
          },
          {
            heading: 'التوفيق بين الصيام والرُوزنامة الجامعية',
            blocks: [
              {
                type: 'p',
                text: 'ما يجب استباقه ليس الصيام نفسه، بل تقاطعه المحتمل مع فترة فروض أو امتحانات. فحسب السنة، قد يقع شهر رمضان في عزّ فترة التقييم في السداسي الربيعي.',
              },
              {
                type: 'ul',
                items: [
                  'احصل على رُوزنامة كلّيتك في بداية السداسي وحدّد التقاطعات مسبقًا.',
                  'قدّم عمل المراجعة قبل بداية الشهر بدل التعويل على السهرات.',
                  'احمِ نومك: فنقص النوم، لا الصيام، هو ما يُسقط النتائج.',
                ],
              },
              {
                type: 'p',
                text: 'والترتيبات الممكنة في المواقيت من اختصاص كل كلّية: فإن طرأ وضع خاص، فالخطوة الصحيحة هي الحديث مع المسؤول البيداغوجي مسبقًا، لا عشيّة امتحان.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'رمضان الأول بعيدًا عن الأهل',
            blocks: [
              {
                type: 'p',
                text: 'هذه هي الصعوبة الحقيقية في الغالب، وهي ليست لوجستية. غياب وجبات العائلة، وعادات الحيّ، وجوّ السهرات: يحدّثنا الطلبة عن هذا أكثر من حديثهم عن الصيام.',
              },
              {
                type: 'p',
                text: 'وما ينجح، بحسب ما نلاحظ: الإفطار مع آخرين لا وحيدًا في غرفة، والحفاظ على مكالمة يومية مع العائلة، وقبول أن يكون الشهر الأول مختلفًا دون أن يكون أقلّ جمالًا.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل الصيام أطول في روسيا منه في تونس؟',
            answer:
              'ذلك يتوقّف كلّيًّا على الفصل وعلى المدينة. فعندما يقع رمضان في الشتاء أو في آخره، تكون الأيام الروسية قصيرة والصيام أقصر منه في صيف المغرب الكبير. وعندما يقع في الصيف يصحّ العكس، خاصة في مدن الشمال. والمواقيت تتفاوت كثيرًا حسب خط العرض.',
          },
          {
            question: 'هل يوجد طعام حلال في المدن الروسية؟',
            answer:
              'العرض موجود لكنه يتفاوت حسب المدينة، وهو عمومًا أكثر تطوّرًا في الحواضر الكبرى. ولا ننشر عناوين لأنها تتغيّر بسرعة: اسأل الطلبة المستقرّين في مدينتك بمجرّد وصولك.',
          },
          {
            question: 'هل توجد مساجد قريبة من الجامعات؟',
            answer:
              'المساجد موجودة في مدن روسية كثيرة، خاصة الحواضر الكبرى. وقربها من حيّ جامعي معيّن يتوقّف على المدينة ولا نؤكّده مؤسسةً مؤسسةً: تحقّق منه بخصوص مدينتك المستهدفة لدى طلبة هناك.',
          },
          {
            question: 'هل تُعدّل الجامعات المواقيت خلال رمضان؟',
            answer:
              'الترتيبات من اختصاص كل كلّية وليست قاعدة عامة. فإن طرأ وضع خاص، تحدّث مع المسؤول البيداغوجي مسبقًا. والأنجع يبقى تقديم المراجعة قبل بداية الشهر.',
          },
        ],
        keywords: [
          'رمضان في روسيا للطالب',
          'الصيام أثناء الدراسة في روسيا',
          'الطعام الحلال في روسيا',
          'مسجد في مدينة روسية للطالب',
          'رمضان والرُوزنامة الجامعية روسيا',
          'الطالب المسلم في روسيا',
        ],
      },
      ru: {
        title: 'Рамадан и учёба в России: как спокойно организовать месяц | RusStudy',
        description:
          'Пост во время учёбы в России: короткие зимние дни, питание в общежитии, халяльная еда, мечети в городах и организация подготовки к занятиям. Практические советы студентов.',
        h1: 'Рамадан и учёба в России: как спокойно организовать месяц',
        publishedLabel: 'Публикация: январь 2027',
        excerpt:
          'Многие студенты опасаются первого Рамадана вдали от дома. Зимой дни в России короткие — и подготовки требует организация, а не сам пост.',
        intro:
          'Семьи часто задают этот вопрос и редко вслух: как проходит Рамадан во время учёбы в России? Ответ обычно успокаивает. Зимой пост здесь короче, чем в Магрибе, а в крупных университетских городах давно живут мусульманские общины. Организации требуют питание и учебный календарь.',
        sections: [
          {
            heading: 'Длительность поста: зима на вашей стороне',
            blocks: [
              {
                type: 'p',
                text: 'Поскольку мусульманский календарь лунный, месяц Рамадан каждый год смещается примерно на одиннадцать дней относительно солнечного календаря. За годы он проходит через все сезоны.',
              },
              {
                type: 'p',
                text: 'Когда он выпадает на зиму или её конец, дни в России короткие: в городах севера и центра страны разрыв между восходом и закатом заметно меньше, чем в магрибское лето. На практике день поста короче, чем в Тунисе.',
              },
              {
                type: 'strong',
                text: 'Дат мы не публикуем: начало месяца определяется по лунному календарю и объявляется на месте. Уточняйте у общины вашего города и помните, что время молитв сильно зависит от широты российского города, где вы учитесь.',
              },
              {
                type: 'p',
                text: 'Последний пункт важен: время в Москве — не то же, что в Казани или Санкт-Петербурге, и разброс гораздо шире, чем между двумя тунисскими городами.',
              },
            ],
          },
          {
            heading: 'Питание в общежитии',
            blocks: [
              {
                type: 'p',
                text: 'Это настоящий практический вопрос. Приём пищи происходит до рассвета и после заката — время, которое не обязательно совпадает с работой университетской столовой.',
              },
              {
                type: 'ul',
                items: [
                  'Уточните условия доступа к кухне общежития и её часы работы, если кухня есть.',
                  'Обзаведитесь минимумом для приготовления простой еды: именно эта покупка меняет весь месяц.',
                  'Организуйтесь вместе: готовить и прерывать пост в компании легче и не так одиноко.',
                  'Делайте покупки заранее, не оставляя их на поздний вечер, когда магазины закрыты.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Как найти подходящую еду',
            blocks: [
              {
                type: 'p',
                text: 'Халяльная еда в российских городах есть, но предложение сильно различается: обычно оно шире в крупных агломерациях и в республиках с исторически мусульманским населением.',
              },
              {
                type: 'p',
                text: 'Магазинов и адресов мы не перечисляем: эта информация меняется слишком быстро, чтобы публиковать её на странице. Верный источник — местный и человеческий: студенты, уже живущие в вашем городе, и студенческие объединения.',
              },
              {
                type: 'p',
                text: 'Спросите по приезде, а не на неделе начала Рамадана. Такие сведения получают за час, а экономят месяц сложностей.',
              },
            ],
          },
          {
            heading: 'Религиозная практика в университетских городах',
            blocks: [
              {
                type: 'p',
                text: 'Ислам — давно существующая в России религия, и мечети есть во многих городах, особенно в крупных агломерациях и в ряде республик. Большие городские мечети в Рамадан посещаются очень активно.',
              },
              {
                type: 'p',
                text: 'Но наличие места для молитвы и его доступность зависят от города, и мы ничего не утверждаем по каждому вузу. Проверяйте это напрямую для выбранного города у студентов на месте.',
              },
              {
                type: 'ul',
                items: [
                  'Есть ли молитвенное место, достижимое от кампуса, и на каком расстоянии?',
                  'Существует ли в вузе объединение студентов-мусульман?',
                  'Как студенты организуют вечерний приём пищи в будние дни?',
                ],
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-la-libye' },
            ],
          },
          {
            heading: 'Пост и учебный календарь',
            blocks: [
              {
                type: 'p',
                text: 'Предусматривать нужно не сам пост, а его возможное наложение на период зачётов или экзаменов. В зависимости от года Рамадан может прийтись на разгар аттестации весеннего семестра.',
              },
              {
                type: 'ul',
                items: [
                  'Возьмите календарь факультета в начале семестра и заранее найдите наложения.',
                  'Перенесите подготовку вперёд, до начала месяца, вместо расчёта на вечера.',
                  'Берегите сон: результаты падают от недосыпа, а не от поста.',
                ],
              },
              {
                type: 'p',
                text: 'Любые изменения расписания — дело каждого факультета: если возникает особая ситуация, правильный шаг — заранее поговорить с куратором, а не в канун экзамена.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'Первый Рамадан вдали от семьи',
            blocks: [
              {
                type: 'p',
                text: 'Часто это и есть настоящая трудность, и она не логистическая. Нет семейных трапез, привычек своего квартала, атмосферы вечеров: студенты говорят об этом чаще, чем о посте.',
              },
              {
                type: 'p',
                text: 'Что работает, по нашим наблюдениям: прерывать пост вместе, а не одному в комнате, сохранять ежедневный звонок домой и принять, что первый месяц будет другим, но не хуже.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Пост в России длиннее, чем в Тунисе?',
            answer:
              'Это полностью зависит от сезона и города. Когда Рамадан выпадает на зиму или её конец, дни в России короткие и пост короче, чем в магрибское лето. Когда он выпадает на лето — наоборот, особенно в северных городах. Время сильно зависит от широты.',
          },
          {
            question: 'Есть ли халяльная еда в российских городах?',
            answer:
              'Она есть, но предложение различается по городам и обычно шире в крупных агломерациях. Адресов мы не публикуем, они меняются слишком быстро: спросите студентов, уже живущих в вашем городе, сразу по приезде.',
          },
          {
            question: 'Есть ли мечети рядом с вузами?',
            answer:
              'Мечети есть во многих российских городах, особенно в крупных агломерациях. Насколько близко к конкретному кампусу — зависит от города, и по каждому вузу мы этого не утверждаем: уточните для своего города у студентов на месте.',
          },
          {
            question: 'Меняют ли вузы расписание во время Рамадана?',
            answer:
              'Изменения — дело каждого факультета, общего правила нет. Если возникает особая ситуация, поговорите с куратором заранее. Самое действенное — перенести подготовку на время до начала месяца.',
          },
        ],
        keywords: [
          'Рамадан в России студент',
          'пост во время учёбы в России',
          'халяльная еда в России',
          'мечеть в российском городе',
          'Рамадан и учебный календарь',
          'мусульманский студент в России',
        ],
      },
    },
  },
  {
    slug: 'apres-le-diplome-exercer-en-tunisie',
    publishedAt: '2027-01-25',
    copy: {
      fr: {
        title: 'Après le diplôme russe : préparer son retour et l’exercice en Tunisie | RusStudy',
        description:
          "Reconnaissance académique et autorisation d'exercer sont deux procédures distinctes. Ce qu'il faut conserver dès la première année, qui décide quoi, et pourquoi ce dossier se prépare cinq ans à l'avance.",
        h1: 'Après le diplôme russe : préparer son retour et l’exercice en Tunisie',
        publishedLabel: 'Publication : Janvier 2027',
        excerpt:
          "Le retour se prépare en première année, pas en dernière. Voici les deux procédures à distinguer, et la liste des documents à archiver dès le premier semestre.",
        intro:
          "C'est la question qui conditionne tout le projet, et paradoxalement celle que l'on pose le plus tard. Un diplôme obtenu en Russie ne se transforme pas automatiquement en droit d'exercer au Maghreb : deux démarches distinctes s'enchaînent, et toutes deux reposent sur des documents que vous devez avoir conservés pendant vos études.",
        sections: [
          {
            heading: 'Deux procédures qu’il ne faut jamais confondre',
            blocks: [
              {
                type: 'ul',
                items: [
                  "La reconnaissance académique : faire admettre par les autorités compétentes de votre pays que votre diplôme étranger correspond à un niveau d'études donné. C'est une question de niveau et de contenu de formation.",
                  "L'autorisation d'exercer : obtenir le droit de pratiquer une profession réglementée — médecin, dentiste, pharmacien, ingénieur selon les cas. C'est une question d'accès à la profession, pas de diplôme.",
                ],
              },
              {
                type: 'p',
                text: "La première ne vaut pas la seconde. Un diplôme reconnu académiquement n'ouvre pas, à lui seul, l'exercice d'une profession de santé. Inversement, aucune autorisation d'exercer ne s'obtient sans que le diplôme ait d'abord été reconnu.",
              },
              {
                type: 'strong',
                text: "Nous ne décrivons pas ici le détail des procédures tunisiennes, et nous ne promettons aucune issue : ces règles relèvent des autorités tunisiennes compétentes, elles évoluent, et seule leur réponse écrite vous engage.",
              },
            ],
          },
          {
            heading: 'Les questions à poser, et à qui',
            blocks: [
              {
                type: 'p',
                text: "La bonne méthode consiste à poser les questions avant de partir, puis à les reposer en cours de cursus : les règles peuvent évoluer pendant cinq ou six ans d'études.",
              },
              {
                type: 'ul',
                items: [
                  "Auprès des autorités compétentes en matière d'enseignement supérieur : quelle est la procédure de reconnaissance d'un diplôme obtenu en Russie, et quelles pièces exige-t-elle ?",
                  "Auprès de l'instance qui encadre la profession visée : quelles sont les conditions d'accès à l'exercice pour un diplômé formé à l'étranger ?",
                  "Dans les deux cas : des épreuves, un stage, une période probatoire ou une mise à niveau sont-ils prévus, et sous quelle forme ?",
                ],
              },
              {
                type: 'p',
                text: "Demandez des réponses écrites et datez-les. Une réponse obtenue cinq ans avant la fin de vos études devra être revérifiée, mais elle vous dira déjà quelles pièces archiver.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Les documents à archiver dès la première année',
            blocks: [
              {
                type: 'p',
                text: "C'est le cœur de cet article, et le seul conseil qui change réellement les choses. Les dossiers de reconnaissance échouent rarement sur le niveau du candidat : ils échouent sur des pièces manquantes, impossibles à reconstituer des années plus tard.",
              },
              {
                type: 'ul',
                items: [
                  'Tous vos relevés de notes, semestre par semestre, dans leur version officielle.',
                  "Le descriptif officiel du programme suivi, avec l'intitulé des matières et le volume horaire de chacune.",
                  "L'attestation de la langue d'enseignement du cursus.",
                  'Le justificatif de l’année préparatoire, si vous en avez suivi une.',
                  'Les attestations de stages, avec leur durée, leur lieu et leur contenu.',
                  "La dénomination officielle russe exacte de l'établissement, et les références de l'accréditation du programme.",
                  'Le diplôme final et son annexe descriptive.',
                ],
              },
              {
                type: 'strong',
                text: "Constituez un dossier numérique dès le premier semestre, sauvegardé à deux endroits, et demandez chaque pièce au moment où elle est délivrée — pas trois ans après.",
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'La question de la spécialisation',
            blocks: [
              {
                type: 'p',
                text: "Dans les filières médicales russes, le diplôme de fin de cursus et la spécialisation sont deux étapes distinctes : une formation spécialisée ultérieure peut être nécessaire pour exercer une spécialité. Cela change la durée totale de votre parcours.",
              },
              {
                type: 'p',
                text: "Deux questions à poser tôt, et séparément, parce que les réponses ne viennent pas de la même source : qu'exige l'université russe pour accéder à cette formation spécialisée, et comment une spécialisation obtenue en Russie est-elle traitée dans la procédure de reconnaissance de votre pays ?",
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'Les autres voies, à ne pas écarter par défaut',
            blocks: [
              {
                type: 'p',
                text: "Le retour au pays d'origine est la trajectoire la plus courante, mais ce n'est pas la seule. Trois autres existent, et chacune a ses propres règles, qu'il faut examiner avec la même rigueur.",
              },
              {
                type: 'ul',
                items: [
                  'Poursuivre en master ou en doctorat, en Russie ou ailleurs : les conditions dépendent de l’établissement d’accueil.',
                  "Exercer dans un pays tiers : chaque État a sa propre procédure de reconnaissance et d'accès aux professions.",
                  "Travailler dans un domaine connexe non réglementé, où la reconnaissance académique suffit sans autorisation d'exercice.",
                ],
              },
              {
                type: 'p',
                text: "Dans tous les cas, la même règle s'applique : ce sont les documents conservés pendant les études qui ouvrent ou ferment les options.",
              },
              { type: 'related', slug: 'master-en-russie-apres-licence' },
            ],
          },
          {
            heading: 'Notre engagement, et sa limite',
            blocks: [
              {
                type: 'p',
                text: "Nous accompagnons le départ, l'admission, le visa et l'installation. Sur le retour, notre rôle est de vous dire tôt ce qu'il faut conserver et quelles questions poser, pas de garantir une reconnaissance ou un emploi.",
              },
              {
                type: 'p',
                text: "Aucune agence ne peut promettre une autorisation d'exercer : cette décision appartient aux autorités compétentes de votre pays. Toute promesse contraire devrait vous alerter immédiatement, chez nous comme ailleurs.",
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Un diplôme russe est-il reconnu en Tunisie ?',
            answer:
              "La reconnaissance d'un diplôme étranger suit une procédure conduite par les autorités tunisiennes compétentes, et son résultat dépend du diplôme, du programme suivi et des règles en vigueur au moment de la demande. Nous ne donnons aucune garantie : interrogez ces autorités avant de partir, et de nouveau en cours de cursus.",
          },
          {
            question: 'La reconnaissance du diplôme suffit-elle pour exercer la médecine ?',
            answer:
              "Non. La reconnaissance académique établit un niveau d'études ; l'autorisation d'exercer une profession réglementée est une procédure distincte, conduite par l'instance qui encadre cette profession. Renseignez-vous auprès des deux, séparément.",
          },
          {
            question: 'Quand faut-il commencer à préparer son retour ?',
            answer:
              "Dès le premier semestre, en archivant systématiquement relevés de notes, descriptifs de programme, volumes horaires et attestations de stages. Ces pièces sont presque impossibles à reconstituer plusieurs années après, et leur absence est la première cause d'échec des dossiers.",
          },
          {
            question: 'Faut-il faire traduire ses documents russes ?',
            answer:
              "Oui, et la forme exacte de la traduction et de la légalisation exigée doit être demandée à l'autorité qui instruira votre dossier, avant d'engager des frais. Comme pour le départ, l'ordre des opérations — authentification puis traduction — est à confirmer auprès d'elle.",
          },
        ],
        keywords: [
          'diplôme russe reconnaissance tunisie',
          'exercer en tunisie après études russie',
          'équivalence diplôme médecine russe',
          'retour au pays après études russie',
          'documents à conserver études russie',
          'autorisation exercer diplômé étranger',
        ],
      },
      en: {
        title: 'After the Russian degree: preparing your return and practising at home | RusStudy',
        description:
          'Academic recognition and authorisation to practise are two distinct procedures. What to keep from your first year, who decides what, and why this file is prepared five years in advance.',
        h1: 'After the Russian degree: preparing your return and practising at home',
        publishedLabel: 'Published: January 2027',
        excerpt:
          'The return is prepared in first year, not in the final one. Here are the two procedures to distinguish, and the list of documents to archive from the first semester.',
        intro:
          'This is the question that conditions the whole project, and paradoxically the one asked latest. A degree obtained in Russia does not automatically turn into a right to practise in the Maghreb: two distinct steps follow one another, and both rest on documents you must have kept during your studies.',
        sections: [
          {
            heading: 'Two procedures never to be confused',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Academic recognition: having the competent authorities of your country accept that your foreign degree corresponds to a given level of study. This is about level and course content.',
                  'Authorisation to practise: obtaining the right to exercise a regulated profession — doctor, dentist, pharmacist, engineer as the case may be. This is about access to the profession, not about the degree.',
                ],
              },
              {
                type: 'p',
                text: 'The first is not the second. An academically recognised degree does not by itself open the practice of a health profession. Conversely, no authorisation to practise is obtained without the degree first being recognised.',
              },
              {
                type: 'strong',
                text: 'We do not describe the detail of Tunisian procedures here, and we promise no outcome: these rules belong to the competent Tunisian authorities, they change, and only their written answer binds you.',
              },
            ],
          },
          {
            heading: 'The questions to ask, and of whom',
            blocks: [
              {
                type: 'p',
                text: 'The right method is to ask before leaving, then ask again during the programme: rules can change over five or six years of study.',
              },
              {
                type: 'ul',
                items: [
                  'Of the authorities competent in higher education: what is the procedure for recognising a degree obtained in Russia, and which documents does it require?',
                  'Of the body governing the target profession: what are the conditions for practising for a graduate trained abroad?',
                  'In both cases: are examinations, an internship, a probationary period or bridging training required, and in what form?',
                ],
              },
              {
                type: 'p',
                text: 'Ask for written answers and date them. An answer obtained five years before you graduate will need rechecking, but it already tells you which documents to archive.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Documents to archive from your first year',
            blocks: [
              {
                type: 'p',
                text: 'This is the heart of the article and the one piece of advice that genuinely changes outcomes. Recognition files rarely fail on the candidate’s level: they fail on missing documents that cannot be reconstructed years later.',
              },
              {
                type: 'ul',
                items: [
                  'All your transcripts, semester by semester, in their official version.',
                  'The official description of the programme followed, with subject titles and the teaching hours of each.',
                  'Evidence of the programme’s language of instruction.',
                  'Proof of the preparatory year, if you took one.',
                  'Internship certificates, with duration, place and content.',
                  'The institution’s exact official Russian name, and the programme’s accreditation references.',
                  'The final diploma and its descriptive supplement.',
                ],
              },
              {
                type: 'strong',
                text: 'Build a digital file from the first semester, backed up in two places, and request each document when it is issued — not three years later.',
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'The specialisation question',
            blocks: [
              {
                type: 'p',
                text: 'In Russian medical fields, the final degree and specialisation are two distinct stages: further specialised training may be required to practise a specialty. That changes the total length of your path.',
              },
              {
                type: 'p',
                text: 'Two questions to ask early, and separately, because the answers come from different sources: what does the Russian university require for access to that specialised training, and how is a specialisation obtained in Russia treated in your country’s recognition procedure?',
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'Other paths, not to be dismissed by default',
            blocks: [
              {
                type: 'p',
                text: 'Returning to the country of origin is the most common trajectory, but not the only one. Three others exist, each with its own rules, to be examined with equal rigour.',
              },
              {
                type: 'ul',
                items: [
                  'Continuing to a master’s or doctorate, in Russia or elsewhere: conditions depend on the receiving institution.',
                  'Practising in a third country: each state has its own recognition and professional access procedure.',
                  'Working in a related, unregulated field, where academic recognition suffices without authorisation to practise.',
                ],
              },
              {
                type: 'p',
                text: 'In every case the same rule applies: it is the documents kept during your studies that open or close the options.',
              },
              { type: 'related', slug: 'master-en-russie-apres-licence' },
            ],
          },
          {
            heading: 'Our commitment, and its limit',
            blocks: [
              {
                type: 'p',
                text: 'We support the departure, the admission, the visa and settling in. On the return, our role is to tell you early what to keep and which questions to ask — not to guarantee recognition or employment.',
              },
              {
                type: 'p',
                text: 'No agency can promise an authorisation to practise: that decision belongs to the competent authorities of your country. Any promise to the contrary should alert you immediately, with us as with anyone else.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is a Russian degree recognised in Tunisia?',
            answer:
              'Recognition of a foreign degree follows a procedure run by the competent Tunisian authorities, and its outcome depends on the degree, the programme followed and the rules in force when the application is made. We give no guarantee: ask those authorities before leaving, and again during the programme.',
          },
          {
            question: 'Is recognition of the degree enough to practise medicine?',
            answer:
              'No. Academic recognition establishes a level of study; authorisation to practise a regulated profession is a separate procedure run by the body governing that profession. Enquire with both, separately.',
          },
          {
            question: 'When should preparation for the return begin?',
            answer:
              'From the first semester, by systematically archiving transcripts, programme descriptions, teaching hours and internship certificates. These documents are almost impossible to reconstruct years later, and their absence is the leading cause of failed files.',
          },
          {
            question: 'Do Russian documents need translating?',
            answer:
              'Yes, and the exact form of translation and legalisation required must be requested from the authority that will handle your file, before spending anything. As with departure, the order of operations — authentication then translation — is to be confirmed with them.',
          },
        ],
        keywords: [
          'russian degree recognition tunisia',
          'practising after studying in russia',
          'medical degree equivalence russia',
          'returning home after studies in russia',
          'documents to keep studying in russia',
          'authorisation to practise foreign graduate',
        ],
      },
      ar: {
        title: 'بعد الشهادة الروسية: تحضير العودة والممارسة في تونس | RusStudy',
        description:
          'الاعتراف الأكاديمي والترخيص بالممارسة إجراءان متمايزان. ما يجب حفظه من السنة الأولى، ومن يقرّر ماذا، ولماذا يُحضَّر هذا الملف قبل خمس سنوات.',
        h1: 'بعد الشهادة الروسية: تحضير العودة والممارسة في تونس',
        publishedLabel: 'النشر: جانفي 2027',
        excerpt:
          'العودة تُحضَّر في السنة الأولى لا في الأخيرة. هذان هما الإجراءان الواجب التمييز بينهما، وقائمة الوثائق التي تُؤرشَف من السداسي الأول.',
        intro:
          'هذا هو السؤال الذي يحدّد المشروع كلّه، وهو — بشكل متناقض — آخر ما يُطرح. فالشهادة المتحصَّل عليها في روسيا لا تتحوّل تلقائيًّا إلى حقّ في الممارسة في المغرب الكبير: هناك إجراءان متمايزان يتعاقبان، وكلاهما يقوم على وثائق يجب أن تكون قد حفظتها أثناء دراستك.',
        sections: [
          {
            heading: 'إجراءان لا يجوز الخلط بينهما أبدًا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الاعتراف الأكاديمي: أن تقبل السلطات المختصّة في بلدك أن شهادتك الأجنبية تقابل مستوى دراسيًّا معيّنًا. وهذه مسألة مستوى ومضمون تكوين.',
                  'الترخيص بالممارسة: الحصول على حقّ ممارسة مهنة منظَّمة — طبيب، طبيب أسنان، صيدلي، مهندس حسب الحالة. وهذه مسألة نفاذ إلى المهنة لا مسألة شهادة.',
                ],
              },
              {
                type: 'p',
                text: 'والأول لا يساوي الثاني. فشهادة معترف بها أكاديميًّا لا تفتح بمفردها ممارسة مهنة صحية. وبالمقابل، لا يُحصَّل أي ترخيص بالممارسة دون الاعتراف بالشهادة أولًا.',
              },
              {
                type: 'strong',
                text: 'لا نشرح هنا تفاصيل الإجراءات التونسية، ولا نَعِد بأي نتيجة: فهذه القواعد من اختصاص السلطات التونسية المختصّة، وهي تتغيّر، وجوابها المكتوب هو الوحيد الملزم.',
              },
            ],
          },
          {
            heading: 'الأسئلة التي تُطرح، وعلى من',
            blocks: [
              {
                type: 'p',
                text: 'الطريقة الصحيحة هي طرح الأسئلة قبل السفر، ثم إعادة طرحها أثناء المسار: فالقواعد قد تتغيّر على مدى خمس أو ست سنوات دراسة.',
              },
              {
                type: 'ul',
                items: [
                  'لدى السلطات المختصّة بالتعليم العالي: ما إجراء الاعتراف بشهادة متحصَّل عليها في روسيا، وما الوثائق التي يقتضيها؟',
                  'لدى الهيئة التي تنظّم المهنة المستهدفة: ما شروط النفاذ إلى الممارسة لمتخرّج تكوّن في الخارج؟',
                  'وفي الحالتين: هل تُشترط اختبارات، أو تدريب، أو فترة تجريبية، أو تكوين تأهيلي، وبأي صيغة؟',
                ],
              },
              {
                type: 'p',
                text: 'اطلب أجوبة مكتوبة وضع عليها التاريخ. فجواب تحصّلت عليه قبل تخرّجك بخمس سنوات سيحتاج إعادة تحقّق، لكنه يدلّك من الآن على الوثائق التي تُؤرشَف.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'الوثائق التي تُؤرشَف من السنة الأولى',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو جوهر المقال، والنصيحة الوحيدة التي تغيّر النتائج فعلًا. فملفات الاعتراف نادرًا ما تفشل بسبب مستوى المترشّح: تفشل بسبب وثائق ناقصة يستحيل تعويضها بعد سنوات.',
              },
              {
                type: 'ul',
                items: [
                  'كل كشوف أعدادك، سداسيًّا بسداسي، في نسختها الرسمية.',
                  'التوصيف الرسمي للبرنامج المتابَع، بعناوين الموادّ والحجم الساعي لكل منها.',
                  'إفادة بلغة تدريس المسار.',
                  'ما يُثبت السنة التحضيرية، إن تابعت واحدة.',
                  'شهادات التدريب، بمدّتها ومكانها ومضمونها.',
                  'التسمية الرسمية الروسية الدقيقة للمؤسسة، ومراجع اعتماد البرنامج.',
                  'الشهادة النهائية وملحقها التوصيفي.',
                ],
              },
              {
                type: 'strong',
                text: 'أنشئ ملفًا رقميًّا من السداسي الأول، محفوظًا في مكانين، واطلب كل وثيقة في وقت إصدارها — لا بعد ثلاث سنوات.',
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'مسألة التخصّص',
            blocks: [
              {
                type: 'p',
                text: 'في التخصّصات الطبية الروسية، شهادة نهاية المسار والتخصّص مرحلتان متمايزتان: فقد يلزم تكوين تخصّصي لاحق لممارسة اختصاص معيّن. وهذا يغيّر المدة الإجمالية لمسارك.',
              },
              {
                type: 'p',
                text: 'سؤالان يُطرحان مبكّرًا وبشكل منفصل، لأن الجوابين لا يأتيان من المصدر نفسه: ما تقتضيه الجامعة الروسية للنفاذ إلى هذا التكوين التخصّصي، وكيف يُعالَج تخصّص متحصَّل عليه في روسيا في إجراء الاعتراف في بلدك؟',
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'مسارات أخرى لا تُستبعد مسبقًا',
            blocks: [
              {
                type: 'p',
                text: 'العودة إلى البلد الأصلي هي المسار الأكثر شيوعًا، لكنها ليست الوحيدة. هناك ثلاثة مسارات أخرى، ولكل منها قواعده التي تُدرَس بالدقّة نفسها.',
              },
              {
                type: 'ul',
                items: [
                  'مواصلة الماجستير أو الدكتوراه، في روسيا أو في مكان آخر: والشروط تتوقّف على المؤسسة المستقبِلة.',
                  'الممارسة في بلد ثالث: ولكل دولة إجراء خاص بها للاعتراف وللنفاذ إلى المهن.',
                  'العمل في مجال قريب غير منظَّم، حيث يكفي الاعتراف الأكاديمي دون ترخيص بالممارسة.',
                ],
              },
              {
                type: 'p',
                text: 'وفي كل الحالات تنطبق القاعدة نفسها: الوثائق المحفوظة أثناء الدراسة هي ما يفتح الخيارات أو يغلقها.',
              },
              { type: 'related', slug: 'master-en-russie-apres-licence' },
            ],
          },
          {
            heading: 'التزامنا وحدوده',
            blocks: [
              {
                type: 'p',
                text: 'نواكب السفر والقبول والتأشيرة والاستقرار. أما في العودة، فدورنا أن نقول لك مبكّرًا ما يجب حفظه وما الأسئلة التي تُطرح، لا أن نضمن اعترافًا أو شغلًا.',
              },
              {
                type: 'p',
                text: 'ولا يمكن لأي وكالة أن تَعِد بترخيص للممارسة: فهذا قرار يعود إلى السلطات المختصّة في بلدك. وأي وعد مخالف يجب أن ينبّهك فورًا، عندنا كما عند غيرنا.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل الشهادة الروسية معترف بها في تونس؟',
            answer:
              'الاعتراف بشهادة أجنبية يتبع إجراءً تتولّاه السلطات التونسية المختصّة، ونتيجته تتوقّف على الشهادة والبرنامج المتابَع والقواعد السارية وقت تقديم الطلب. ولا نقدّم أي ضمان: استفسر من هذه السلطات قبل السفر، ثم مرة أخرى أثناء المسار.',
          },
          {
            question: 'هل يكفي الاعتراف بالشهادة لممارسة الطب؟',
            answer:
              'لا. الاعتراف الأكاديمي يثبت مستوى دراسيًّا؛ أما الترخيص بممارسة مهنة منظَّمة فهو إجراء منفصل تتولّاه الهيئة التي تنظّم تلك المهنة. استفسر من الجهتين، كل واحدة على حدة.',
          },
          {
            question: 'متى يجب البدء في تحضير العودة؟',
            answer:
              'من السداسي الأول، بأرشفة منهجية لكشوف الأعداد وتوصيفات البرامج والأحجام الساعية وشهادات التدريب. فهذه الوثائق يكاد يستحيل تعويضها بعد سنوات، وغيابها هو السبب الأول في فشل الملفات.',
          },
          {
            question: 'هل يجب ترجمة الوثائق الروسية؟',
            answer:
              'نعم، والصيغة الدقيقة للترجمة والتصديق المطلوبين تُطلب من السلطة التي ستدرس ملفك، قبل أي مصروف. وكما في السفر، ترتيب العمليات — التوثيق ثم الترجمة — يُؤكَّد لديها.',
          },
        ],
        keywords: [
          'الاعتراف بالشهادة الروسية في تونس',
          'الممارسة في تونس بعد الدراسة في روسيا',
          'معادلة شهادة الطب الروسية',
          'العودة إلى البلد بعد الدراسة في روسيا',
          'الوثائق التي تُحفظ أثناء الدراسة في روسيا',
          'ترخيص الممارسة لمتخرّج أجنبي',
        ],
      },
      ru: {
        title: 'После российского диплома: подготовка возвращения и работы по профессии | RusStudy',
        description:
          'Академическое признание и допуск к профессии — две разные процедуры. Что сохранять с первого курса, кто что решает и почему это дело готовят за пять лет.',
        h1: 'После российского диплома: подготовка возвращения и работы по профессии',
        publishedLabel: 'Публикация: январь 2027',
        excerpt:
          'Возвращение готовят на первом курсе, а не на последнем. Разбираем две процедуры, которые нельзя путать, и список документов для архива с первого семестра.',
        intro:
          'Это вопрос, определяющий весь проект, и, как ни странно, задаваемый позже всех. Диплом, полученный в России, не превращается автоматически в право работать по профессии в Магрибе: следуют две разные процедуры, и обе опираются на документы, которые нужно было сохранять во время учёбы.',
        sections: [
          {
            heading: 'Две процедуры, которые нельзя путать',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Академическое признание: компетентные органы вашей страны подтверждают, что иностранный диплом соответствует определённому уровню образования. Речь об уровне и содержании подготовки.',
                  'Допуск к профессии: получение права работать по регулируемой профессии — врач, стоматолог, фармацевт, инженер в зависимости от случая. Речь о доступе к профессии, а не о дипломе.',
                ],
              },
              {
                type: 'p',
                text: 'Первое не равно второму. Признанный академически диплом сам по себе не открывает практику в здравоохранении. И наоборот: допуск к профессии не получить без предварительного признания диплома.',
              },
              {
                type: 'strong',
                text: 'Детали тунисских процедур мы здесь не описываем и никакого результата не обещаем: эти правила принадлежат компетентным тунисским органам, они меняются, и обязывает только их письменный ответ.',
              },
            ],
          },
          {
            heading: 'Какие вопросы задавать и кому',
            blocks: [
              {
                type: 'p',
                text: 'Правильный метод — спросить до выезда, а затем спросить снова во время учёбы: за пять-шесть лет правила могут измениться.',
              },
              {
                type: 'ul',
                items: [
                  'У органов, ведающих высшим образованием: какова процедура признания диплома, полученного в России, и какие документы она требует?',
                  'У органа, регулирующего нужную профессию: каковы условия допуска для выпускника, обучавшегося за рубежом?',
                  'В обоих случаях: требуются ли экзамены, стажировка, испытательный период или адаптационная подготовка и в какой форме?',
                ],
              },
              {
                type: 'p',
                text: 'Просите письменные ответы и ставьте на них дату. Ответ, полученный за пять лет до выпуска, придётся перепроверить, но он уже скажет, какие документы архивировать.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Документы, которые архивируют с первого курса',
            blocks: [
              {
                type: 'p',
                text: 'Это сердце статьи и единственный совет, который действительно меняет исход. Дела о признании редко проваливаются из-за уровня кандидата: они проваливаются из-за недостающих документов, которые нельзя восстановить спустя годы.',
              },
              {
                type: 'ul',
                items: [
                  'Все выписки с оценками, по каждому семестру, в официальном виде.',
                  'Официальное описание пройденной программы с названиями дисциплин и количеством часов по каждой.',
                  'Подтверждение языка обучения программы.',
                  'Документ о подготовительном годе, если он был.',
                  'Справки о практиках с их продолжительностью, местом и содержанием.',
                  'Точное официальное русское наименование учреждения и реквизиты аккредитации программы.',
                  'Итоговый диплом и приложение к нему.',
                ],
              },
              {
                type: 'strong',
                text: 'Создайте цифровое дело с первого семестра, с резервной копией в двух местах, и запрашивайте каждый документ в момент выдачи, а не через три года.',
              },
              { type: 'related', slug: 'verifier-universite-russe-reconnue' },
            ],
          },
          {
            heading: 'Вопрос специализации',
            blocks: [
              {
                type: 'p',
                text: 'В российских медицинских направлениях итоговый диплом и специализация — два разных этапа: для работы по специальности может потребоваться последующая специализированная подготовка. Это меняет общую длительность пути.',
              },
              {
                type: 'p',
                text: 'Два вопроса стоит задать рано и по отдельности, потому что ответы дают разные источники: что требует российский вуз для доступа к такой подготовке и как специализация, полученная в России, учитывается в процедуре признания в вашей стране?',
              },
              { type: 'related', slug: 'etudier-medecine-russie-bac-tunisien' },
            ],
          },
          {
            heading: 'Другие пути, которые не стоит отбрасывать заранее',
            blocks: [
              {
                type: 'p',
                text: 'Возвращение в страну происхождения — самая частая траектория, но не единственная. Есть ещё три, и у каждой свои правила, требующие той же строгости.',
              },
              {
                type: 'ul',
                items: [
                  'Продолжение в магистратуре или аспирантуре, в России или за её пределами: условия зависят от принимающего учреждения.',
                  'Работа в третьей стране: у каждого государства своя процедура признания и доступа к профессиям.',
                  'Работа в смежной нерегулируемой сфере, где достаточно академического признания без допуска к профессии.',
                ],
              },
              {
                type: 'p',
                text: 'Во всех случаях действует одно правило: именно сохранённые за годы учёбы документы открывают или закрывают возможности.',
              },
              { type: 'related', slug: 'master-en-russie-apres-licence' },
            ],
          },
          {
            heading: 'Наше обязательство и его предел',
            blocks: [
              {
                type: 'p',
                text: 'Мы сопровождаем выезд, зачисление, визу и обустройство. Что касается возвращения, наша роль — вовремя сказать, что сохранять и какие вопросы задать, а не гарантировать признание или трудоустройство.',
              },
              {
                type: 'p',
                text: 'Ни одно агентство не может обещать допуск к профессии: это решение компетентных органов вашей страны. Любое обещание обратного должно насторожить немедленно — и у нас, и у кого угодно.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Признаётся ли российский диплом в Тунисе?',
            answer:
              'Признание иностранного диплома идёт по процедуре компетентных тунисских органов, и результат зависит от диплома, пройденной программы и правил на момент обращения. Гарантий мы не даём: обратитесь к этим органам до выезда и повторно во время учёбы.',
          },
          {
            question: 'Достаточно ли признания диплома, чтобы работать врачом?',
            answer:
              'Нет. Академическое признание устанавливает уровень образования; допуск к регулируемой профессии — отдельная процедура органа, который эту профессию регулирует. Обращайтесь к обоим по отдельности.',
          },
          {
            question: 'Когда начинать готовить возвращение?',
            answer:
              'С первого семестра, систематически архивируя выписки, описания программ, количество часов и справки о практиках. Эти документы почти невозможно восстановить спустя годы, и их отсутствие — главная причина неудачных дел.',
          },
          {
            question: 'Нужно ли переводить российские документы?',
            answer:
              'Да, и точную форму перевода и легализации нужно запросить у органа, который будет рассматривать ваше дело, до любых расходов. Как и при выезде, порядок действий — удостоверение, затем перевод — подтверждается у него.',
          },
        ],
        keywords: [
          'признание российского диплома в Тунисе',
          'работа по профессии после учёбы в России',
          'эквивалентность медицинского диплома',
          'возвращение домой после учёбы в России',
          'какие документы сохранять во время учёбы',
          'допуск к профессии иностранного выпускника',
        ],
      },
    },
  },
];
