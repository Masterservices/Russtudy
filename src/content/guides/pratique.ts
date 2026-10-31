import type { GuideEntry } from './copy';

/*
 * Guides pratiques complémentaires : argent, déplacements et intégration.
 * Volontairement sans montants nouveaux — les seuls chiffres cités renvoient
 * aux ordres de grandeur déjà publiés ailleurs sur le site. Ces guides
 * traitent de procédures et d'usages, pas de tarifs.
 *
 * Ordre identique aux slugs ajoutés dans GUIDE_SLUGS.
 */
export const PRACTICAL_GUIDES: GuideEntry[] = [
  {
    slug: 'banque-et-argent',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: "Banque et argent en Russie : compte, carte et transferts depuis la Tunisie | RusStudy",
        description:
          "Ouvrir un compte étudiant en Russie, obtenir une carte locale, recevoir de l'argent depuis la Tunisie et éviter les frais inutiles : le guide pratique RusStudy.",
        h1: 'Banque, carte et transferts : gérer son argent en Russie',
        summary:
          "Ouvrir un compte, obtenir une carte locale et recevoir de l'argent depuis la Tunisie sans mauvaise surprise.",
        intro:
          "C'est la question qui inquiète le plus les familles, et à juste titre : une carte internationale ne fonctionne pas partout en Russie. La bonne nouvelle, c'est que la solution est simple et qu'elle se met en place dans les premières semaines. Voici la marche à suivre, dans l'ordre.",
        sections: [
          {
            heading: 'Avant le départ : prévoir les premières semaines en liquide',
            paragraphs: [
              "Entre l'arrivée et l'ouverture du compte, il se passe généralement quelques semaines. Prévoyez de quoi couvrir cette période sans dépendre d'un virement.",
            ],
            bullets: [
              "Emportez des euros en espèces, dans les limites déclaratives autorisées au départ de Tunisie et à l'entrée en Russie",
              'Déclarez les sommes à la douane lorsque le seuil applicable est atteint : une déclaration prend cinq minutes, un litige en prend beaucoup plus',
              "Répartissez l'argent entre votre bagage cabine et une ceinture portefeuille, jamais tout au même endroit",
              "Gardez le reçu de change : il sert de justificatif si on vous interroge sur l'origine des fonds",
            ],
          },
          {
            heading: 'Ouvrir un compte étudiant sur place',
            paragraphs: [
              "L'ouverture se fait en agence, avec un dossier réduit. Les banques russes ont l'habitude des étudiants étrangers et beaucoup d'agences proches des campus disposent d'un guichet dédié.",
            ],
            bullets: [
              'Passeport avec le visa étudiant en cours de validité',
              "Attestation d'inscription délivrée par l'université",
              "Justificatif d'enregistrement migratoire, effectué à l'arrivée",
              'Numéro fiscal russe (INN), que votre université vous aide généralement à obtenir',
            ],
          },
          {
            heading: 'La carte locale, indispensable au quotidien',
            paragraphs: [
              "Une fois le compte ouvert, la carte locale devient votre moyen de paiement principal. Elle couvre les transports, les courses, les paiements en ligne et le paiement des frais universitaires.",
              "Ne comptez pas sur une carte bancaire tunisienne pour vos dépenses courantes sur place : gardez-la comme filet de sécurité, pas comme moyen de paiement quotidien.",
            ],
          },
          {
            heading: 'Recevoir de l’argent depuis la Tunisie',
            paragraphs: [
              "C'est le point à préparer sérieusement, car les canaux disponibles évoluent. Tranchez-le avec votre famille avant le départ plutôt que dans l'urgence.",
            ],
            bullets: [
              "Vérifiez avec votre banque tunisienne quels canaux de transfert vers la Russie sont ouverts au moment de votre départ",
              'Comparez le coût réel : frais fixes, commission et surtout taux de change appliqué',
              'Privilégiez des envois groupés plutôt que de nombreux petits transferts, chacun portant ses propres frais',
              "Fixez un rythme avec votre famille — mensuel ou trimestriel — pour éviter les demandes en urgence",
              'Conservez les justificatifs de chaque transfert reçu',
            ],
          },
          {
            heading: 'Les réflexes qui font économiser',
            bullets: [
              'Payez les frais de scolarité depuis votre compte russe une fois celui-ci ouvert, plutôt que par virement international',
              "Utilisez la carte de transport rechargeable de votre ville plutôt que le paiement à l'unité",
              'Méfiez-vous des bureaux de change des gares et des aéroports, dont les taux sont systématiquement défavorables',
              "Tenez un budget mensuel simple les trois premiers mois : c'est ce qui permet de caler le vrai rythme de dépenses",
            ],
          },
        ],
        faq: [
          {
            question: 'Ma carte bancaire tunisienne fonctionnera-t-elle en Russie ?',
            answer:
              "Ne construisez pas votre budget dessus. Considérez-la comme une réserve de secours et prévoyez systématiquement l'ouverture d'un compte local dès les premières semaines.",
          },
          {
            question: "Combien de temps faut-il pour ouvrir un compte ?",
            answer:
              "L'ouverture elle-même est rapide, souvent le jour même en agence. Le délai réel vient des pièces préalables : enregistrement migratoire et attestation d'inscription. Comptez quelques semaines après l'arrivée.",
          },
          {
            question: 'Faut-il parler russe pour ouvrir un compte ?',
            answer:
              "Cela aide, mais ce n'est pas bloquant. Les agences proches des campus sont habituées aux étudiants étrangers, et le service des étudiants internationaux de votre université accompagne généralement cette démarche.",
          },
        ],
        keywords: [
          'compte bancaire étudiant Russie', 'carte bancaire Russie étudiant', 'transfert argent Tunisie Russie',
          'argent étudiant Russie', 'INN numéro fiscal Russie', 'budget étudiant Russie',
        ],
      },
      en: {
        title: 'Banking and Money in Russia: Account, Card and Transfers from Tunisia | RusStudy',
        description:
          'Opening a student account in Russia, getting a local card, receiving money from Tunisia and avoiding needless fees: the RusStudy practical guide.',
        h1: 'Banking, cards and transfers: managing your money in Russia',
        summary: 'Open an account, get a local card and receive money from Tunisia without nasty surprises.',
        intro:
          'This is the question that worries families most, and rightly so: an international card does not work everywhere in Russia. The good news is that the solution is simple and falls into place within the first few weeks. Here is the sequence to follow.',
        sections: [
          {
            heading: 'Before departure: plan the first weeks in cash',
            paragraphs: [
              'Between arrival and opening an account, a few weeks usually pass. Plan enough to cover that period without depending on a transfer.',
            ],
            bullets: [
              'Take euros in cash, within the declaration limits allowed when leaving Tunisia and entering Russia',
              'Declare the amounts at customs when the applicable threshold is reached: a declaration takes five minutes, a dispute takes far longer',
              'Split the money between your cabin bag and a money belt, never all in one place',
              'Keep the exchange receipt: it serves as proof if you are asked about the origin of the funds',
            ],
          },
          {
            heading: 'Opening a student account on arrival',
            paragraphs: [
              'Accounts are opened in branch with a short list of documents. Russian banks are used to international students and many branches near campuses have a dedicated desk.',
            ],
            bullets: [
              'Passport with a valid student visa',
              'Enrolment certificate issued by the university',
              'Proof of migration registration, completed on arrival',
              'Russian tax number (INN), which your university usually helps you obtain',
            ],
          },
          {
            heading: 'The local card, essential day to day',
            paragraphs: [
              'Once the account is open, the local card becomes your main means of payment. It covers transport, groceries, online payments and paying your university fees.',
              'Do not rely on a Tunisian bank card for everyday spending there: keep it as a safety net, not as a daily payment method.',
            ],
          },
          {
            heading: 'Receiving money from Tunisia',
            paragraphs: [
              'This is the point to prepare seriously, because the available channels change. Settle it with your family before departure rather than in a hurry.',
            ],
            bullets: [
              'Check with your Tunisian bank which transfer channels to Russia are open at the time you leave',
              'Compare the real cost: fixed fees, commission and above all the exchange rate applied',
              'Prefer grouped transfers over many small ones, each of which carries its own fees',
              'Agree a rhythm with your family — monthly or quarterly — to avoid emergency requests',
              'Keep the receipts for every transfer received',
            ],
          },
          {
            heading: 'The habits that save money',
            bullets: [
              'Pay tuition from your Russian account once it is open, rather than by international transfer',
              'Use your city rechargeable transport card rather than paying per journey',
              'Beware of exchange bureaux in stations and airports, whose rates are consistently unfavourable',
              'Keep a simple monthly budget for the first three months: that is what reveals your real spending rhythm',
            ],
          },
        ],
        faq: [
          {
            question: 'Will my Tunisian bank card work in Russia?',
            answer:
              'Do not build your budget on it. Treat it as an emergency reserve and always plan to open a local account within the first few weeks.',
          },
          {
            question: 'How long does it take to open an account?',
            answer:
              'The opening itself is quick, often same-day in branch. The real delay comes from the prior documents: migration registration and enrolment certificate. Allow a few weeks after arrival.',
          },
          {
            question: 'Do I need to speak Russian to open an account?',
            answer:
              'It helps, but it is not a blocker. Branches near campuses are used to international students, and your university international office usually supports this step.',
          },
        ],
        keywords: [
          'student bank account Russia', 'bank card Russia student', 'money transfer Tunisia Russia',
          'student money Russia', 'INN Russian tax number', 'student budget Russia',
        ],
      },
      ar: {
        title: 'البنك والمال في روسيا: الحساب والبطاقة والتحويلات من تونس | RusStudy',
        description:
          'فتح حساب طالب في روسيا، الحصول على بطاقة محلية، استقبال الأموال من تونس وتجنّب المصاريف غير الضرورية: الدليل العملي من RusStudy.',
        h1: 'البنك والبطاقة والتحويلات: كيف تدير أموالك في روسيا',
        summary: 'افتح حسابًا، واحصل على بطاقة محلية، واستقبل الأموال من تونس دون مفاجآت.',
        intro:
          'هذا هو السؤال الذي يقلق العائلات أكثر من غيره، وعن حق: البطاقة الدولية لا تشتغل في كل مكان بروسيا. والخبر السار أن الحل بسيط ويُنجَز خلال الأسابيع الأولى. إليك الخطوات بالترتيب.',
        sections: [
          {
            heading: 'قبل السفر: تحسّب للأسابيع الأولى نقدًا',
            paragraphs: [
              'بين الوصول وفتح الحساب تمرّ عادة بضعة أسابيع. احسب ما يغطّي هذه الفترة دون الاعتماد على تحويل.',
            ],
            bullets: [
              'خذ معك أورو نقدًا، في حدود التصريح المسموح بها عند المغادرة من تونس والدخول إلى روسيا',
              'صرّح بالمبالغ لدى الديوانة عند بلوغ السقف المعمول به: التصريح يأخذ خمس دقائق، والنزاع يأخذ أكثر بكثير',
              'وزّع المال بين حقيبة الكابينة وحزام النقود، ولا تضعه كله في مكان واحد',
              'احتفظ بوصل الصرف: فهو يُثبت مصدر الأموال إذا سُئلت عنه',
            ],
          },
          {
            heading: 'فتح حساب طالب في عين المكان',
            paragraphs: [
              'يتم الفتح في الوكالة بملف مختصر. البنوك الروسية معتادة على الطلبة الأجانب، والعديد من الوكالات القريبة من الأحياء الجامعية بها شبّاك مخصّص.',
            ],
            bullets: [
              'جواز سفر بتأشيرة طالب سارية المفعول',
              'شهادة ترسيم تسلّمها الجامعة',
              'ما يثبت التسجيل المهاجري، المنجَز عند الوصول',
              'الرقم الجبائي الروسي (INN)، وتساعدك الجامعة عادة في الحصول عليه',
            ],
          },
          {
            heading: 'البطاقة المحلية، ضرورية في الحياة اليومية',
            paragraphs: [
              'بعد فتح الحساب تصبح البطاقة المحلية وسيلة دفعك الأساسية. تغطّي النقل والتسوّق والدفع عبر الإنترنت ودفع الرسوم الجامعية.',
              'لا تعتمد على بطاقة بنكية تونسية لمصاريفك اليومية هناك: اجعلها شبكة أمان لا وسيلة دفع يومية.',
            ],
          },
          {
            heading: 'استقبال الأموال من تونس',
            paragraphs: [
              'هذه النقطة تستحق تحضيرًا جديًا لأن القنوات المتاحة تتغيّر. احسمها مع عائلتك قبل السفر لا في لحظة الاستعجال.',
            ],
            bullets: [
              'تحقّق مع بنكك التونسي من قنوات التحويل نحو روسيا المفتوحة وقت سفرك',
              'قارن الكلفة الحقيقية: المصاريف القارة والعمولة وقبل كل شيء سعر الصرف المعتمد',
              'فضّل تحويلات مجمّعة على تحويلات صغيرة متعدّدة، إذ يحمل كل واحد منها مصاريفه',
              'اتفق مع عائلتك على نسق — شهري أو ثلاثي — لتجنّب الطلبات المستعجلة',
              'احتفظ بوصولات كل تحويل تتلقّاه',
            ],
          },
          {
            heading: 'عادات تختصر المصاريف',
            bullets: [
              'ادفع الرسوم الجامعية من حسابك الروسي بعد فتحه بدل التحويل الدولي',
              'استعمل بطاقة النقل القابلة للشحن في مدينتك بدل الدفع لكل رحلة',
              'احذر مكاتب الصرف في المحطات والمطارات، فأسعارها غير مواتية دائمًا',
              'امسك ميزانية شهرية بسيطة خلال الأشهر الثلاثة الأولى: بها تضبط نسق إنفاقك الحقيقي',
            ],
          },
        ],
        faq: [
          {
            question: 'هل ستشتغل بطاقتي البنكية التونسية في روسيا؟',
            answer:
              'لا تبنِ ميزانيتك عليها. اعتبرها احتياطًا للطوارئ واحسب دائمًا فتح حساب محلي منذ الأسابيع الأولى.',
          },
          {
            question: 'كم يستغرق فتح حساب؟',
            answer:
              'الفتح نفسه سريع، وغالبًا في نفس اليوم بالوكالة. الأجل الحقيقي يأتي من الوثائق المسبقة: التسجيل المهاجري وشهادة الترسيم. احسب بضعة أسابيع بعد الوصول.',
          },
          {
            question: 'هل يجب إتقان الروسية لفتح حساب؟',
            answer:
              'ذلك يساعد لكنه ليس عائقًا. الوكالات القريبة من الأحياء الجامعية معتادة على الطلبة الأجانب، ومكتب الطلبة الدوليين بجامعتك يرافقك عادة في هذه الخطوة.',
          },
        ],
        keywords: [
          'حساب بنكي للطالب في روسيا', 'بطاقة بنكية روسيا طالب', 'تحويل المال من تونس إلى روسيا',
          'مصروف الطالب في روسيا', 'الرقم الجبائي الروسي', 'ميزانية الطالب في روسيا',
        ],
      },
      ru: {
        title: 'Банк и деньги в России: счёт, карта и переводы из Туниса | RusStudy',
        description:
          'Открытие студенческого счёта в России, получение местной карты, приём денег из Туниса и отказ от лишних комиссий: практический гид RusStudy.',
        h1: 'Банк, карта и переводы: как управлять деньгами в России',
        summary: 'Откройте счёт, получите местную карту и принимайте деньги из Туниса без неприятных сюрпризов.',
        intro:
          'Это вопрос, который больше всего тревожит семьи, и не зря: международная карта работает в России не везде. Хорошая новость в том, что решение простое и складывается в первые же недели. Вот порядок действий.',
        sections: [
          {
            heading: 'До отъезда: заложите первые недели наличными',
            paragraphs: [
              'Между приездом и открытием счёта обычно проходит несколько недель. Заложите сумму на этот период, не рассчитывая на перевод.',
            ],
            bullets: [
              'Возьмите наличные евро в пределах деклараций, допустимых при выезде из Туниса и въезде в Россию',
              'Декларируйте суммы на таможне при достижении порога: декларация занимает пять минут, спор — гораздо дольше',
              'Разделите деньги между ручной кладью и поясной сумкой, никогда не держите всё в одном месте',
              'Сохраните квитанцию обмена: она подтверждает происхождение средств, если о нём спросят',
            ],
          },
          {
            heading: 'Открытие студенческого счёта на месте',
            paragraphs: [
              'Счёт открывают в отделении по короткому списку документов. Российские банки привыкли к иностранным студентам, во многих отделениях рядом с кампусами есть отдельное окно.',
            ],
            bullets: [
              'Паспорт с действующей студенческой визой',
              'Справка о зачислении, выданная вузом',
              'Подтверждение миграционного учёта, оформленного по приезде',
              'Российский ИНН, получить который вуз обычно помогает',
            ],
          },
          {
            heading: 'Местная карта — вещь ежедневная',
            paragraphs: [
              'После открытия счёта местная карта становится основным способом оплаты. Она покрывает транспорт, продукты, онлайн-платежи и оплату обучения.',
              'Не рассчитывайте на тунисскую карту для повседневных трат: держите её как страховку, а не как ежедневный платёжный инструмент.',
            ],
          },
          {
            heading: 'Приём денег из Туниса',
            paragraphs: [
              'Этот пункт стоит проработать всерьёз, потому что доступные каналы меняются. Решите его с семьёй до отъезда, а не в спешке.',
            ],
            bullets: [
              'Уточните в тунисском банке, какие каналы перевода в Россию открыты на момент вашего отъезда',
              'Сравнивайте реальную стоимость: фиксированные сборы, комиссию и прежде всего применяемый курс',
              'Предпочитайте один крупный перевод множеству мелких — у каждого свои комиссии',
              'Договоритесь с семьёй о ритме — ежемесячно или ежеквартально, — чтобы избежать срочных просьб',
              'Храните подтверждения каждого полученного перевода',
            ],
          },
          {
            heading: 'Привычки, которые экономят',
            bullets: [
              'Оплачивайте обучение с российского счёта после его открытия, а не международным переводом',
              'Пользуйтесь пополняемой транспортной картой города, а не разовой оплатой поездок',
              'Остерегайтесь обменников на вокзалах и в аэропортах — их курс неизменно невыгоден',
              'Ведите простой месячный бюджет первые три месяца: именно он показывает реальный ритм трат',
            ],
          },
        ],
        faq: [
          {
            question: 'Будет ли работать моя тунисская карта в России?',
            answer:
              'Не стройте на ней бюджет. Считайте её аварийным резервом и обязательно планируйте открытие местного счёта в первые недели.',
          },
          {
            question: 'Сколько времени занимает открытие счёта?',
            answer:
              'Само открытие быстрое, часто в тот же день в отделении. Реальная задержка — в предварительных документах: миграционном учёте и справке о зачислении. Заложите несколько недель после приезда.',
          },
          {
            question: 'Нужно ли говорить по-русски, чтобы открыть счёт?',
            answer:
              'Это помогает, но не является препятствием. Отделения рядом с кампусами привыкли к иностранным студентам, а отдел по работе с иностранными студентами обычно сопровождает этот шаг.',
          },
        ],
        keywords: [
          'студенческий счёт в России', 'банковская карта студенту в России', 'перевод денег Тунис Россия',
          'деньги студента в России', 'ИНН в России', 'бюджет студента в России',
        ],
      },
    },
  },
  {
    slug: 'transport-et-mobilite',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: 'Se déplacer en Russie : métro, carte étudiant, train et trajets | RusStudy',
        description:
          'Métro, bus, carte de transport rechargeable, réduction étudiante, trains entre les villes et trajet depuis l’aéroport : le guide pratique des déplacements pour étudiants en Russie.',
        h1: 'Se déplacer en Russie au quotidien',
        summary: "Métro, carte rechargeable, réduction étudiante et trajets entre villes : tout ce qu'il faut savoir.",
        intro:
          "Les transports publics russes sont l'une des bonnes surprises du séjour : denses, ponctuels et peu chers, surtout avec le tarif étudiant. Encore faut-il obtenir la bonne carte et connaître les réflexes. Ce guide couvre le trajet depuis l'aéroport jusqu'aux déplacements entre villes.",
        sections: [
          {
            heading: 'Le premier trajet, de l’aéroport au campus',
            paragraphs: [
              "C'est le moment où l'on est le plus fatigué et le plus exposé. Préparez-le avant de décoller plutôt que de décider sur place.",
            ],
            bullets: [
              "Si un accueil à l'aéroport est prévu par votre université ou par votre accompagnement, confirmez le point de rendez-vous et un numéro de contact avant le départ",
              'Ne montez jamais dans un véhicule proposé spontanément dans le hall des arrivées',
              "Notez l'adresse de votre résidence en alphabet cyrillique sur votre téléphone et sur un papier, batterie vide comprise",
              'Prévoyez de quoi payer le trajet en liquide, votre carte locale ne sera pas encore ouverte',
            ],
          },
          {
            heading: 'La carte de transport, à faire dès la première semaine',
            paragraphs: [
              "Chaque grande ville a sa carte rechargeable, et le tarif étudiant change réellement le budget mensuel. La démarche se fait auprès du service des étudiants ou dans un guichet de transport, sur présentation de votre carte d'étudiant.",
            ],
            bullets: [
              'Demandez la carte étudiante de transport dès la remise de votre carte universitaire',
              'Rechargez au mois plutôt qu’au trajet lorsque vous utilisez le réseau tous les jours',
              'Gardez la carte accessible : les contrôles existent et l’amende coûte bien plus qu’un abonnement',
            ],
          },
          {
            heading: 'Le métro, mode d’emploi',
            paragraphs: [
              "Les réseaux de Moscou et de Saint-Pétersbourg sont parmi les plus efficaces au monde, et les stations sont souvent de véritables monuments. Les lignes sont identifiées par un numéro et une couleur, ce qui permet de s'orienter même sans lire le cyrillique.",
            ],
            bullets: [
              'Repérez le numéro et la couleur de votre ligne plutôt que le nom des stations les premiers jours',
              'Les correspondances portent un nom différent de la station d’origine : fiez-vous aux panneaux de ligne',
              'Téléchargez une carte du réseau hors ligne : le réseau mobile passe mal dans les tunnels',
              'Aux heures de pointe, laissez passer une rame plutôt que de forcer le passage',
            ],
          },
          {
            heading: 'Voyager entre les villes',
            paragraphs: [
              'Le train est le mode de transport de référence entre les grandes villes russes : fiable, confortable et économique comparé à l’avion sur les distances moyennes.',
            ],
            bullets: [
              'Réservez en ligne à l’avance : les places de nuit partent vite pendant les vacances universitaires',
              'Sur les trajets de nuit, une couchette coûte souvent moins cher qu’un vol et vous économise une nuit d’hôtel',
              'Ayez toujours votre passeport et votre justificatif d’enregistrement migratoire sur vous en déplacement',
              'Prévenez votre résidence universitaire si vous vous absentez plusieurs jours',
            ],
          },
        ],
        faq: [
          {
            question: 'La réduction étudiante est-elle accessible aux étrangers ?',
            answer:
              "Oui, elle est liée au statut d'étudiant inscrit et non à la nationalité. Elle s'obtient sur présentation de votre carte d'étudiant, une fois celle-ci délivrée par l'université.",
          },
          {
            question: 'Faut-il savoir lire le cyrillique pour prendre le métro ?',
            answer:
              "Ce n'est pas indispensable au début : les lignes sont numérotées et colorées, et les grandes stations affichent aussi les noms en alphabet latin. Mais apprendre à déchiffrer le cyrillique est l'une des compétences les plus rentables des premières semaines.",
          },
          {
            question: 'Puis-je conduire en Russie avec un permis tunisien ?',
            answer:
              "La question dépend de la durée de séjour et des conventions applicables. Pour un étudiant, le réseau de transports publics couvre l'essentiel des besoins : la voiture est rarement nécessaire et rarement rentable.",
          },
        ],
        keywords: [
          'transport étudiant Russie', 'métro Moscou étudiant', 'carte transport Russie',
          'train entre villes Russie', 'se déplacer en Russie', 'trajet aéroport campus Russie',
        ],
      },
      en: {
        title: 'Getting Around Russia: Metro, Student Card, Trains and Journeys | RusStudy',
        description:
          'Metro, buses, rechargeable transport cards, student discounts, intercity trains and the trip from the airport: the practical guide to getting around for students in Russia.',
        h1: 'Getting around Russia day to day',
        summary: 'Metro, rechargeable card, student discount and intercity journeys: everything you need to know.',
        intro:
          'Russian public transport is one of the good surprises of the stay: dense, punctual and inexpensive, especially on the student fare. You just need the right card and the right habits. This guide covers everything from the airport transfer to travelling between cities.',
        sections: [
          {
            heading: 'The first journey, from airport to campus',
            paragraphs: [
              'This is the moment when you are most tired and most exposed. Prepare it before take-off rather than deciding on the spot.',
            ],
            bullets: [
              'If an airport pick-up is arranged by your university or your support service, confirm the meeting point and a contact number before you leave',
              'Never get into a vehicle offered spontaneously in the arrivals hall',
              'Write your residence address in Cyrillic on your phone and on paper, in case the battery dies',
              'Have cash for the journey: your local card will not be open yet',
            ],
          },
          {
            heading: 'The transport card, to sort out in the first week',
            paragraphs: [
              'Every large city has its rechargeable card, and the student fare genuinely changes the monthly budget. You apply through the student office or at a transport counter, on presentation of your student card.',
            ],
            bullets: [
              'Ask for the student transport card as soon as your university card is issued',
              'Top up monthly rather than per journey if you use the network every day',
              'Keep the card accessible: inspections do happen and the fine costs far more than a pass',
            ],
          },
          {
            heading: 'The metro, how it works',
            paragraphs: [
              'The Moscow and Saint Petersburg networks are among the most efficient in the world, and the stations are often genuine monuments. Lines are identified by a number and a colour, so you can find your way even without reading Cyrillic.',
            ],
            bullets: [
              'In the first days, track your line number and colour rather than station names',
              'Interchanges carry a different name from the originating station: trust the line signage',
              'Download an offline network map: mobile coverage is poor in the tunnels',
              'At rush hour, let a train go rather than forcing your way on',
            ],
          },
          {
            heading: 'Travelling between cities',
            paragraphs: [
              'The train is the reference mode between large Russian cities: reliable, comfortable and economical compared with flying over medium distances.',
            ],
            bullets: [
              'Book online in advance: overnight berths sell out fast during university holidays',
              'On overnight journeys a berth often costs less than a flight and saves you a hotel night',
              'Always carry your passport and your migration registration proof when travelling',
              'Tell your hall of residence if you are away for several days',
            ],
          },
        ],
        faq: [
          {
            question: 'Is the student discount available to foreigners?',
            answer:
              'Yes, it is tied to enrolled student status and not to nationality. You obtain it on presentation of your student card, once the university has issued it.',
          },
          {
            question: 'Do I need to read Cyrillic to use the metro?',
            answer:
              'Not at the start: lines are numbered and colour-coded, and major stations also display names in the Latin alphabet. But learning to decipher Cyrillic is one of the highest-return skills of your first weeks.',
          },
          {
            question: 'Can I drive in Russia on a Tunisian licence?',
            answer:
              'That depends on the length of stay and the applicable conventions. For a student, the public transport network covers almost every need: a car is rarely necessary and rarely economical.',
          },
        ],
        keywords: [
          'student transport Russia', 'Moscow metro student', 'Russia transport card',
          'intercity trains Russia', 'getting around Russia', 'airport to campus Russia',
        ],
      },
      ar: {
        title: 'التنقّل في روسيا: المترو وبطاقة الطالب والقطار والرحلات | RusStudy',
        description:
          'المترو، الحافلات، بطاقة النقل القابلة للشحن، تخفيض الطلبة، القطارات بين المدن والرحلة من المطار: الدليل العملي للتنقّل بالنسبة إلى الطلبة في روسيا.',
        h1: 'التنقّل اليومي في روسيا',
        summary: 'المترو، البطاقة القابلة للشحن، تخفيض الطلبة والرحلات بين المدن: كل ما يجب معرفته.',
        intro:
          'النقل العمومي الروسي من المفاجآت السارة في الإقامة: كثيف ومنضبط وغير مكلف، خاصة بتعريفة الطلبة. لكن عليك الحصول على البطاقة الصحيحة ومعرفة العادات المفيدة. يغطّي هذا الدليل كل شيء من الرحلة من المطار إلى التنقّل بين المدن.',
        sections: [
          {
            heading: 'الرحلة الأولى، من المطار إلى الحي الجامعي',
            paragraphs: [
              'هي اللحظة التي تكون فيها أكثر إرهاقًا وأكثر عرضة. حضّرها قبل الإقلاع بدل أن تقرّر في عين المكان.',
            ],
            bullets: [
              'إن كان الاستقبال في المطار مبرمجًا من جامعتك أو من خدمة المرافقة، أكّد نقطة اللقاء ورقم اتصال قبل السفر',
              'لا تركب أبدًا سيارة تُعرض عليك تلقائيًا في قاعة الوصول',
              'دوّن عنوان إقامتك بالحروف السيريلية على هاتفك وعلى ورقة، تحسّبًا لنفاد البطارية',
              'جهّز ما تدفع به الرحلة نقدًا، فبطاقتك المحلية لن تكون مفتوحة بعد',
            ],
          },
          {
            heading: 'بطاقة النقل، تُنجَز في الأسبوع الأول',
            paragraphs: [
              'لكل مدينة كبرى بطاقتها القابلة للشحن، وتعريفة الطلبة تغيّر الميزانية الشهرية فعلًا. تتم الإجراءات لدى مصلحة الطلبة أو في شبّاك النقل بتقديم بطاقة الطالب.',
            ],
            bullets: [
              'اطلب بطاقة النقل للطلبة بمجرد تسلّمك بطاقتك الجامعية',
              'اشحن شهريًا بدل الدفع لكل رحلة إن كنت تستعمل الشبكة يوميًا',
              'اجعل البطاقة في متناول يدك: المراقبة موجودة والخطية تكلّف أكثر بكثير من الاشتراك',
            ],
          },
          {
            heading: 'المترو، دليل الاستعمال',
            paragraphs: [
              'شبكتا موسكو وسان بطرسبورغ من الأنجع في العالم، والمحطات غالبًا معالم حقيقية. الخطوط تُعرَّف برقم ولون، ما يسمح بالتوجّه حتى دون قراءة السيريلية.',
            ],
            bullets: [
              'في الأيام الأولى، تتبّع رقم خطك ولونه بدل أسماء المحطات',
              'محطات التحويل تحمل اسمًا مختلفًا عن محطة الانطلاق: اعتمد على لافتات الخطوط',
              'حمّل خريطة الشبكة دون اتصال: التغطية ضعيفة في الأنفاق',
              'في ساعات الذروة، دع قطارًا يمرّ بدل التدافع للصعود',
            ],
          },
          {
            heading: 'السفر بين المدن',
            paragraphs: [
              'القطار هو وسيلة النقل المرجعية بين المدن الروسية الكبرى: موثوق ومريح واقتصادي مقارنة بالطائرة على المسافات المتوسطة.',
            ],
            bullets: [
              'احجز عبر الإنترنت مسبقًا: أماكن النوم تنفد بسرعة خلال العطل الجامعية',
              'في الرحلات الليلية، سرير القطار غالبًا أرخص من رحلة جوية ويوفّر عليك ليلة فندق',
              'احمل دائمًا جواز سفرك وما يثبت تسجيلك المهاجري عند التنقّل',
              'أعلم إقامتك الجامعية إن غبت عدة أيام',
            ],
          },
        ],
        faq: [
          {
            question: 'هل تخفيض الطلبة متاح للأجانب؟',
            answer:
              'نعم، فهو مرتبط بصفة الطالب المرسّم لا بالجنسية. تحصل عليه بتقديم بطاقة الطالب بعد أن تسلّمها لك الجامعة.',
          },
          {
            question: 'هل يجب إتقان قراءة السيريلية لاستعمال المترو؟',
            answer:
              'ليس ضروريًا في البداية: الخطوط مرقّمة وملوّنة، والمحطات الكبرى تعرض الأسماء بالحروف اللاتينية أيضًا. لكن تعلّم فكّ السيريلية من أكثر المهارات مردودية في الأسابيع الأولى.',
          },
          {
            question: 'هل يمكنني السياقة في روسيا برخصة تونسية؟',
            answer:
              'ذلك يتوقف على مدة الإقامة والاتفاقيات المعمول بها. وبالنسبة إلى طالب، تغطّي شبكة النقل العمومي أغلب الحاجات: السيارة نادرًا ما تكون ضرورية ونادرًا ما تكون مجدية.',
          },
        ],
        keywords: [
          'النقل للطلبة في روسيا', 'مترو موسكو للطلبة', 'بطاقة النقل في روسيا',
          'القطار بين المدن الروسية', 'التنقّل في روسيا', 'من المطار إلى الحي الجامعي',
        ],
      },
      ru: {
        title: 'Передвижение по России: метро, студенческая карта, поезда и поездки | RusStudy',
        description:
          'Метро, автобусы, пополняемая транспортная карта, студенческая скидка, поезда между городами и дорога из аэропорта: практический гид по передвижению для студентов в России.',
        h1: 'Как передвигаться по России каждый день',
        summary: 'Метро, пополняемая карта, студенческая скидка и поездки между городами: всё, что нужно знать.',
        intro:
          'Российский общественный транспорт — одна из приятных неожиданностей пребывания: плотный, пунктуальный и недорогой, особенно по студенческому тарифу. Нужны только правильная карта и правильные привычки. Этот гид охватывает всё — от трансфера из аэропорта до поездок между городами.',
        sections: [
          {
            heading: 'Первая поездка, из аэропорта в кампус',
            paragraphs: [
              'Это момент, когда вы наиболее устали и наиболее уязвимы. Подготовьте его до вылета, а не решайте на месте.',
            ],
            bullets: [
              'Если встреча в аэропорту организована вузом или службой сопровождения, подтвердите место встречи и контактный номер до отъезда',
              'Никогда не садитесь в машину, предложенную спонтанно в зале прилёта',
              'Запишите адрес общежития кириллицей в телефоне и на бумаге — на случай разряженной батареи',
              'Держите наличные на дорогу: местная карта ещё не будет открыта',
            ],
          },
          {
            heading: 'Транспортная карта — оформить в первую неделю',
            paragraphs: [
              'В каждом крупном городе своя пополняемая карта, и студенческий тариф действительно меняет месячный бюджет. Оформление идёт через студенческий отдел или в кассе транспорта по студенческому билету.',
            ],
            bullets: [
              'Запросите студенческую транспортную карту сразу после выдачи студенческого билета',
              'Пополняйте на месяц, а не на поездку, если пользуетесь сетью ежедневно',
              'Держите карту под рукой: контроль бывает, и штраф стоит намного дороже проездного',
            ],
          },
          {
            heading: 'Метро: как это работает',
            paragraphs: [
              'Сети Москвы и Санкт-Петербурга — среди самых эффективных в мире, а станции часто являются настоящими памятниками. Линии обозначены номером и цветом, поэтому ориентироваться можно даже не читая кириллицу.',
            ],
            bullets: [
              'В первые дни держитесь номера и цвета своей линии, а не названий станций',
              'Пересадочные станции носят другое название: доверяйте указателям линий',
              'Скачайте офлайн-схему сети: в тоннелях мобильная связь слабая',
              'В час пик лучше пропустить поезд, чем протискиваться',
            ],
          },
          {
            heading: 'Поездки между городами',
            paragraphs: [
              'Поезд — основной способ перемещения между крупными городами России: надёжный, комфортный и экономичный по сравнению с самолётом на средних расстояниях.',
            ],
            bullets: [
              'Бронируйте онлайн заранее: места в ночных поездах быстро раскупают в каникулы',
              'На ночных маршрутах полка часто дешевле перелёта и экономит ночь в гостинице',
              'В поездках всегда имейте при себе паспорт и подтверждение миграционного учёта',
              'Предупредите общежитие, если уезжаете на несколько дней',
            ],
          },
        ],
        faq: [
          {
            question: 'Доступна ли студенческая скидка иностранцам?',
            answer:
              'Да, она привязана к статусу зачисленного студента, а не к гражданству. Её получают по студенческому билету после его выдачи вузом.',
          },
          {
            question: 'Нужно ли читать кириллицу, чтобы пользоваться метро?',
            answer:
              'На старте — не обязательно: линии пронумерованы и цветные, а на крупных станциях названия дублируются латиницей. Но научиться разбирать кириллицу — один из самых окупаемых навыков первых недель.',
          },
          {
            question: 'Можно ли водить в России по тунисским правам?',
            answer:
              'Это зависит от срока пребывания и действующих соглашений. Для студента сеть общественного транспорта покрывает почти все потребности: машина редко нужна и редко выгодна.',
          },
        ],
        keywords: [
          'транспорт для студентов в России', 'метро Москвы студенту', 'транспортная карта Россия',
          'поезда между городами России', 'передвижение по России', 'из аэропорта в кампус',
        ],
      },
    },
  },
  {
    slug: 'culture-et-integration',
    updatedAt: '2026-09-16',
    copy: {
      fr: {
        title: "Culture et intégration en Russie : codes, communauté et vie étudiante | RusStudy",
        description:
          "Codes sociaux, pratique religieuse, nourriture halal, communauté maghrébine et vie de campus : le guide de l'intégration pour un étudiant tunisien en Russie.",
        h1: "S'intégrer en Russie : codes, communauté et vie de campus",
        summary:
          "Ce qui surprend les premiers mois, ce qui se règle vite, et ce qui demande vraiment du temps.",
        intro:
          "On sous-estime toujours cette partie du voyage. Le dossier, le visa, le billet : tout cela se prépare. L'intégration, elle, ne se planifie pas — elle se vit. Ce guide rassemble ce que les étudiants maghrébins installés en Russie disent le plus souvent aux nouveaux arrivants.",
        sections: [
          {
            heading: 'Les codes sociaux qui surprennent au début',
            paragraphs: [
              "La réserve russe est réelle, et elle est souvent mal interprétée par les étudiants venus d'une culture où l'on sourit facilement à un inconnu. Ce n'est ni de la froideur ni de l'hostilité : c'est une frontière différente entre l'espace public et l'espace privé.",
            ],
            bullets: [
              "Dans l'espace public, on ne sourit pas à un inconnu : cela n'a rien de personnel",
              "Une fois la relation établie, l'hospitalité russe est en revanche très généreuse",
              'La ponctualité est prise au sérieux, en cours comme dans les rendez-vous administratifs',
              "On se déchausse en entrant chez quelqu'un, y compris en résidence",
              "Le vouvoiement est la règle avec les enseignants et l'administration",
            ],
          },
          {
            heading: 'Pratique religieuse et alimentation',
            paragraphs: [
              "C'est la première question des familles, et la réponse rassure presque toujours. La Russie compte une population musulmane importante et ancienne, et les villes universitaires accueillant des étudiants étrangers sont équipées en conséquence.",
            ],
            bullets: [
              'Les grandes villes disposent de mosquées et de lieux de prière accessibles',
              'La nourriture halal se trouve sans difficulté en épicerie spécialisée et dans de nombreux supermarchés',
              'Kazan, capitale du Tatarstan, a une identité musulmane forte et une offre particulièrement large',
              "Les résidences universitaires disposent de cuisines communes : cuisiner soi-même reste le moyen le plus simple de maîtriser à la fois son budget et son alimentation",
            ],
          },
          {
            heading: 'La communauté maghrébine, un appui réel',
            paragraphs: [
              "Les étudiants tunisiens, marocains et algériens sont présents de longue date dans les villes universitaires russes. Cette communauté est le raccourci le plus efficace pour les questions pratiques des premières semaines.",
            ],
            bullets: [
              'Cherchez les associations étudiantes par nationalité dès la rentrée',
              "Les groupes d'étudiants de votre université répondent souvent plus vite que l'administration sur les questions du quotidien",
              "Restez cependant ouvert au-delà : les étudiants qui ne fréquentent que leur communauté d'origine progressent beaucoup plus lentement en russe",
            ],
          },
          {
            heading: 'Apprendre le russe, le vrai accélérateur',
            paragraphs: [
              "L'année préparatoire donne les bases, mais c'est en dehors des cours que le niveau décolle. Les étudiants qui progressent le plus vite sont ceux qui acceptent de parler mal pendant quelques mois.",
            ],
            bullets: [
              'Faites vos courses en russe dès le premier jour, même maladroitement',
              'Regardez des séries doublées en russe avec des sous-titres russes, pas français',
              'Nouez au moins une amitié russophone : elle vaut tous les manuels',
              "Acceptez les erreurs : la peur de mal dire est le premier frein à la progression",
            ],
          },
          {
            heading: 'Le moral, sujet dont on parle trop peu',
            paragraphs: [
              "Le coup de mou arrive presque toujours, généralement entre le deuxième et le quatrième mois, quand la nouveauté retombe et que l'hiver s'installe. Le savoir à l'avance change beaucoup de choses.",
            ],
            bullets: [
              'Fixez un rythme régulier de contact avec votre famille, plutôt que des appels irréguliers et longs',
              "Sortez malgré le froid : l'isolement en chambre est ce qui aggrave le plus le moral",
              'Inscrivez-vous à une activité du campus dès le premier semestre, sportive ou culturelle',
              "Parlez-en au service des étudiants internationaux si cela dure : c'est précisément leur rôle",
            ],
          },
        ],
        faq: [
          {
            question: 'Trouve-t-on facilement de la nourriture halal en Russie ?',
            answer:
              'Oui dans les grandes villes et dans les villes universitaires, en épicerie spécialisée comme dans de nombreux supermarchés. Kazan dispose d’une offre particulièrement large.',
          },
          {
            question: 'Y a-t-il des mosquées près des universités ?',
            answer:
              "Les grandes villes universitaires disposent de mosquées et de salles de prière. Le service des étudiants internationaux de votre université peut vous indiquer les lieux les plus proches du campus.",
          },
          {
            question: 'Est-ce difficile de se faire des amis russes ?',
            answer:
              "Plus lent qu'ailleurs, mais plus durable. La réserve initiale n'est pas un rejet : une fois la relation nouée, elle est généralement très solide. Le russe reste le facteur déterminant.",
          },
        ],
        keywords: [
          'intégration étudiant Russie', 'nourriture halal Russie', 'mosquée Russie étudiant',
          'communauté maghrébine Russie', 'vie étudiante Russie', 'codes culturels russes',
        ],
      },
      en: {
        title: 'Culture and Integration in Russia: Codes, Community and Student Life | RusStudy',
        description:
          'Social codes, religious practice, halal food, the Maghrebi community and campus life: the integration guide for a Tunisian student in Russia.',
        h1: 'Settling into Russia: codes, community and campus life',
        summary: 'What surprises you in the first months, what sorts itself out quickly, and what genuinely takes time.',
        intro:
          'This part of the journey is always underestimated. The application, the visa, the ticket: all of that can be planned. Integration cannot — it is lived. This guide gathers what Maghrebi students already settled in Russia most often tell newcomers.',
        sections: [
          {
            heading: 'The social codes that surprise at first',
            paragraphs: [
              'Russian reserve is real, and it is often misread by students from a culture where you smile easily at a stranger. It is neither coldness nor hostility: it is a different boundary between public and private space.',
            ],
            bullets: [
              'In public you do not smile at strangers: it is nothing personal',
              'Once a relationship is established, Russian hospitality is on the contrary very generous',
              'Punctuality is taken seriously, in class as in administrative appointments',
              'You take your shoes off when entering someone home, including in halls',
              'The formal form of address is the rule with teachers and administration',
            ],
          },
          {
            heading: 'Religious practice and food',
            paragraphs: [
              'This is families first question, and the answer is almost always reassuring. Russia has a large and long-established Muslim population, and university cities hosting international students are equipped accordingly.',
            ],
            bullets: [
              'Large cities have accessible mosques and prayer spaces',
              'Halal food is easy to find in specialist grocers and in many supermarkets',
              'Kazan, the capital of Tatarstan, has a strong Muslim identity and a particularly wide offering',
              'Halls of residence have shared kitchens: cooking for yourself remains the simplest way to control both your budget and your diet',
            ],
          },
          {
            heading: 'The Maghrebi community, a genuine support',
            paragraphs: [
              'Tunisian, Moroccan and Algerian students have long been present in Russian university cities. This community is the most effective shortcut for the practical questions of the first weeks.',
            ],
            bullets: [
              'Look for the national student associations as soon as term begins',
              'Student groups at your university often answer everyday questions faster than the administration',
              'Stay open beyond it, though: students who mix only within their own community progress far more slowly in Russian',
            ],
          },
          {
            heading: 'Learning Russian, the real accelerator',
            paragraphs: [
              'The preparatory year gives you the basics, but it is outside class that your level takes off. The students who progress fastest are those willing to speak badly for a few months.',
            ],
            bullets: [
              'Do your shopping in Russian from day one, however clumsily',
              'Watch series dubbed in Russian with Russian subtitles, not English ones',
              'Make at least one Russian-speaking friend: it is worth every textbook',
              'Accept mistakes: fear of getting it wrong is the main brake on progress',
            ],
          },
          {
            heading: 'Morale, a subject we discuss too little',
            paragraphs: [
              'The dip almost always comes, usually between the second and fourth month, when the novelty fades and winter settles in. Knowing it in advance changes a great deal.',
            ],
            bullets: [
              'Set a regular rhythm of contact with your family rather than irregular, long calls',
              'Go out despite the cold: isolating yourself in your room is what harms morale most',
              'Join a campus activity in the first semester, sporting or cultural',
              'Talk to the international student office if it lasts: that is precisely their role',
            ],
          },
        ],
        faq: [
          {
            question: 'Is halal food easy to find in Russia?',
            answer:
              'Yes in large cities and university towns, in specialist grocers as well as many supermarkets. Kazan has a particularly wide offering.',
          },
          {
            question: 'Are there mosques near the universities?',
            answer:
              'Large university cities have mosques and prayer rooms. Your university international student office can point you to the nearest ones to campus.',
          },
          {
            question: 'Is it hard to make Russian friends?',
            answer:
              'Slower than elsewhere, but more lasting. The initial reserve is not rejection: once a relationship forms, it is generally very solid. Russian remains the decisive factor.',
          },
        ],
        keywords: [
          'student integration Russia', 'halal food Russia', 'mosque Russia student',
          'Maghrebi community Russia', 'student life Russia', 'Russian cultural codes',
        ],
      },
      ar: {
        title: 'الثقافة والاندماج في روسيا: الأعراف والجالية والحياة الطلابية | RusStudy',
        description:
          'الأعراف الاجتماعية، الممارسة الدينية، الطعام الحلال، الجالية المغاربية والحياة الجامعية: دليل الاندماج للطالب التونسي في روسيا.',
        h1: 'الاندماج في روسيا: الأعراف والجالية والحياة الجامعية',
        summary: 'ما يفاجئك في الأشهر الأولى، وما يُحلّ بسرعة، وما يتطلّب وقتًا فعلًا.',
        intro:
          'يُستهان دائمًا بهذا الجزء من الرحلة. الملف والتأشيرة والتذكرة: كل ذلك يُحضَّر. أما الاندماج فلا يُخطَّط له — إنه يُعاش. يجمع هذا الدليل ما يقوله الطلبة المغاربيون المقيمون في روسيا للقادمين الجدد أكثر من غيره.',
        sections: [
          {
            heading: 'الأعراف الاجتماعية التي تفاجئ في البداية',
            paragraphs: [
              'التحفّظ الروسي حقيقي، وغالبًا ما يُساء فهمه من طلبة قادمين من ثقافة يُبتسم فيها بسهولة لغريب. وهو ليس برودًا ولا عداءً: إنه حدّ مختلف بين الفضاء العام والفضاء الخاص.',
            ],
            bullets: [
              'في الفضاء العام لا يُبتسم لغريب: والأمر ليس شخصيًا',
              'وفي المقابل، متى نشأت العلاقة، تكون الضيافة الروسية كريمة جدًا',
              'الالتزام بالمواعيد يُؤخذ بجدّية، في الدروس كما في المواعيد الإدارية',
              'تُخلع الأحذية عند دخول بيت أحدهم، بما في ذلك في الإقامة الجامعية',
              'صيغة الاحترام هي القاعدة مع الأساتذة والإدارة',
            ],
          },
          {
            heading: 'الممارسة الدينية والطعام',
            paragraphs: [
              'هذا أول سؤال تطرحه العائلات، والجواب مطمئن في أغلب الأحوال. في روسيا جالية مسلمة كبيرة وعريقة، والمدن الجامعية التي تستقبل طلبة أجانب مهيّأة تبعًا لذلك.',
            ],
            bullets: [
              'المدن الكبرى بها مساجد ومصلّيات متاحة',
              'الطعام الحلال يُوجد دون صعوبة في المحلات المختصة وفي العديد من المتاجر الكبرى',
              'قازان، عاصمة تتارستان، ذات هوية إسلامية قوية وعرض واسع بشكل خاص',
              'الإقامات الجامعية بها مطابخ مشتركة: الطبخ بنفسك يبقى أبسط وسيلة للتحكّم في ميزانيتك وفي غذائك معًا',
            ],
          },
          {
            heading: 'الجالية المغاربية، سند حقيقي',
            paragraphs: [
              'الطلبة التونسيون والمغاربة والجزائريون حاضرون منذ زمن طويل في المدن الجامعية الروسية. هذه الجالية هي الطريق الأقصر والأنجع للأسئلة العملية في الأسابيع الأولى.',
            ],
            bullets: [
              'ابحث عن الجمعيات الطلابية حسب الجنسية منذ الدخول الجامعي',
              'مجموعات الطلبة في جامعتك تجيب غالبًا أسرع من الإدارة عن أسئلة الحياة اليومية',
              'لكن ابقَ منفتحًا على ما وراءها: الطلبة الذين لا يخالطون سوى أبناء بلدهم يتقدّمون في الروسية أبطأ بكثير',
            ],
          },
          {
            heading: 'تعلّم الروسية، المسرّع الحقيقي',
            paragraphs: [
              'السنة التحضيرية تمنحك الأسس، لكن المستوى ينطلق خارج الدروس. الطلبة الأسرع تقدّمًا هم الذين يقبلون التحدّث بشكل رديء لبضعة أشهر.',
            ],
            bullets: [
              'تسوّق بالروسية منذ اليوم الأول، ولو بركاكة',
              'شاهد مسلسلات مدبلجة بالروسية مع ترجمة روسية، لا فرنسية',
              'اربط صداقة واحدة على الأقل مع ناطق بالروسية: تعادل كل الكتب',
              'اقبل الأخطاء: الخوف من الخطأ هو أول عائق أمام التقدّم',
            ],
          },
          {
            heading: 'المعنويات، موضوع لا يُتحدّث عنه كفاية',
            paragraphs: [
              'الفتور يأتي دائمًا تقريبًا، عادة بين الشهر الثاني والرابع، حين تخفت الجِدّة ويستقرّ الشتاء. ومعرفة ذلك مسبقًا تغيّر الكثير.',
            ],
            bullets: [
              'حدّد نسقًا منتظمًا للتواصل مع عائلتك بدل مكالمات متقطعة وطويلة',
              'اخرج رغم البرد: الانعزال في الغرفة هو أكثر ما يفاقم الحالة النفسية',
              'انخرط في نشاط جامعي منذ السداسي الأول، رياضي أو ثقافي',
              'تحدّث إلى مصلحة الطلبة الدوليين إن طال الأمر: فهذا دورها بالضبط',
            ],
          },
        ],
        faq: [
          {
            question: 'هل يسهل إيجاد طعام حلال في روسيا؟',
            answer:
              'نعم في المدن الكبرى والمدن الجامعية، في المحلات المختصة وفي العديد من المتاجر الكبرى. وقازان بها عرض واسع بشكل خاص.',
          },
          {
            question: 'هل توجد مساجد قرب الجامعات؟',
            answer:
              'المدن الجامعية الكبرى بها مساجد وقاعات صلاة. ومصلحة الطلبة الدوليين بجامعتك يمكنها إرشادك إلى الأقرب من الحي الجامعي.',
          },
          {
            question: 'هل يصعب تكوين صداقات مع الروس؟',
            answer:
              'أبطأ مما هو عليه في أماكن أخرى، لكنه أدوم. التحفّظ الأولي ليس رفضًا: ومتى نشأت العلاقة تكون عمومًا متينة جدًا. وتبقى الروسية العامل الحاسم.',
          },
        ],
        keywords: [
          'اندماج الطالب في روسيا', 'الطعام الحلال في روسيا', 'مسجد في روسيا للطلبة',
          'الجالية المغاربية في روسيا', 'الحياة الطلابية في روسيا', 'الأعراف الثقافية الروسية',
        ],
      },
      ru: {
        title: 'Культура и адаптация в России: нормы, община и студенческая жизнь | RusStudy',
        description:
          'Социальные нормы, религиозная практика, халяльная еда, магрибская община и жизнь кампуса: гид по адаптации для тунисского студента в России.',
        h1: 'Адаптация в России: нормы, община и жизнь кампуса',
        summary: 'Что удивляет в первые месяцы, что решается быстро, а что действительно требует времени.',
        intro:
          'Эту часть пути всегда недооценивают. Документы, виза, билет — всё это можно подготовить. Адаптацию не спланируешь — её проживают. В этом гиде собрано то, что студенты из Магриба, уже живущие в России, чаще всего говорят новичкам.',
        sections: [
          {
            heading: 'Нормы, которые поначалу удивляют',
            paragraphs: [
              'Русская сдержанность реальна, и её часто неверно читают студенты из культуры, где незнакомцу легко улыбаются. Это не холодность и не враждебность: это иная граница между публичным и личным пространством.',
            ],
            bullets: [
              'В публичном пространстве незнакомцу не улыбаются: ничего личного в этом нет',
              'Зато когда отношения сложились, русское гостеприимство очень щедрое',
              'К пунктуальности относятся серьёзно — и на занятиях, и на приёме в администрации',
              'В гостях разуваются, в том числе в общежитии',
              'С преподавателями и администрацией обращение на «вы» — правило',
            ],
          },
          {
            heading: 'Религиозная практика и питание',
            paragraphs: [
              'Это первый вопрос семей, и ответ почти всегда успокаивает. В России большая и давняя мусульманская община, а университетские города, принимающие иностранных студентов, оснащены соответственно.',
            ],
            bullets: [
              'В крупных городах есть доступные мечети и молельные помещения',
              'Халяльные продукты легко найти в специализированных магазинах и во многих супермаркетах',
              'В Казани, столице Татарстана, сильная мусульманская идентичность и особенно широкий выбор',
              'В общежитиях есть общие кухни: готовить самому остаётся самым простым способом контролировать и бюджет, и питание',
            ],
          },
          {
            heading: 'Магрибская община как реальная опора',
            paragraphs: [
              'Тунисские, марокканские и алжирские студенты давно присутствуют в российских университетских городах. Эта община — самый короткий путь к решению практических вопросов первых недель.',
            ],
            bullets: [
              'Ищите студенческие землячества с самого начала учебного года',
              'Студенческие группы вашего вуза часто отвечают на бытовые вопросы быстрее администрации',
              'Но не замыкайтесь в ней: студенты, общающиеся только со своими, осваивают русский заметно медленнее',
            ],
          },
          {
            heading: 'Русский язык — настоящий ускоритель',
            paragraphs: [
              'Подготовительный год даёт базу, но уровень взлетает вне аудитории. Быстрее всех продвигаются те, кто готов несколько месяцев говорить плохо.',
            ],
            bullets: [
              'Делайте покупки по-русски с первого дня, пусть и неуклюже',
              'Смотрите сериалы в русском дубляже с русскими субтитрами, а не с французскими',
              'Заведите хотя бы одну русскоязычную дружбу: она стоит всех учебников',
              'Принимайте ошибки: страх сказать неправильно — главный тормоз прогресса',
            ],
          },
          {
            heading: 'Моральное состояние — тема, о которой говорят слишком мало',
            paragraphs: [
              'Спад наступает почти всегда, обычно между вторым и четвёртым месяцем, когда новизна проходит и устанавливается зима. Знание об этом заранее многое меняет.',
            ],
            bullets: [
              'Установите регулярный ритм общения с семьёй вместо нерегулярных долгих звонков',
              'Выходите из комнаты несмотря на холод: изоляция сильнее всего бьёт по настроению',
              'Запишитесь на занятие в кампусе уже в первом семестре — спортивное или творческое',
              'Если состояние затягивается, скажите об этом в отделе по работе с иностранными студентами: это именно их задача',
            ],
          },
        ],
        faq: [
          {
            question: 'Легко ли найти халяльную еду в России?',
            answer:
              'Да, в крупных городах и университетских центрах — и в специализированных магазинах, и во многих супермаркетах. В Казани выбор особенно широкий.',
          },
          {
            question: 'Есть ли мечети рядом с университетами?',
            answer:
              'В крупных университетских городах есть мечети и молельные комнаты. Отдел по работе с иностранными студентами подскажет ближайшие к кампусу.',
          },
          {
            question: 'Трудно ли завести русских друзей?',
            answer:
              'Медленнее, чем в других местах, но прочнее. Первоначальная сдержанность — не отказ: когда отношения складываются, они обычно очень крепкие. Решающим фактором остаётся русский язык.',
          },
        ],
        keywords: [
          'адаптация студента в России', 'халяльная еда в России', 'мечеть в России студенту',
          'магрибская община в России', 'студенческая жизнь в России', 'русские культурные нормы',
        ],
      },
    },
  },
];
