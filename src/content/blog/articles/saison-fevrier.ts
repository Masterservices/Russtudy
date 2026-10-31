import type { BlogArticleEntry } from '../copy';

/*
 * Série d'automne : candidater et choisir, d'octobre à novembre.
 *
 * Ces sept articles couvrent la fenêtre où se joue la session de février —
 * le rétroplanning, la lettre d'invitation, un refus de visa, le choix de
 * l'université — et deux filières restées sans article après leur séparation
 * (médecine dentaire et pharmacie), plus le public qui décide réellement :
 * les parents.
 *
 * Aucun montant nouveau n'est avancé : les chiffres repris viennent de
 * /cout-des-etudes et des fiches filières. Les délais administratifs cités
 * (15-30 jours d'admission, 30-45 jours d'invitation) sont ceux déjà publiés
 * sur /visa.
 */
export const SAISON_FEVRIER_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'retroplanning-octobre-decembre-session-fevrier',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Rétroplanning octobre-décembre : partir en Russie en février | RusStudy',
        description:
          "Le calendrier mois par mois, d'octobre à décembre, pour boucler un dossier d'études en Russie à temps pour la session de février. Délais réels et points de non-retour.",
        h1: "Rétroplanning d'octobre à décembre pour la session de février",
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          'Trois mois, quatre étapes administratives incompressibles. Le calendrier réel pour ne pas rater la session de février.',
        intro:
          "La session de février n'est pas une porte ouverte jusqu'au dernier moment : elle se joue en octobre et en novembre. Les délais administratifs russes se cumulent et ne se négocient pas. Voici le calendrier mois par mois, avec les points de non-retour clairement identifiés.",
        sections: [
          {
            heading: 'Octobre : constituer et déposer',
            blocks: [
              {
                type: 'p',
                text: "C'est le mois décisif. Tout ce qui est lancé en octobre arrive à temps ; ce qui glisse en novembre devient serré.",
              },
              {
                type: 'ul',
                items: [
                  'Rassembler les originaux : diplôme du baccalauréat, relevés de notes, extrait de naissance, passeport valide',
                  "Lancer les légalisations, qui ne dépendent ni de vous ni de l'université et prennent plusieurs semaines",
                  "Choisir l'université et la filière, puis déposer le dossier de candidature",
                  "Compter 15 à 30 jours pour l'admission administrative une fois le dossier complet",
                ],
              },
              {
                type: 'strong',
                text: 'Point de non-retour n°1 : un dossier non déposé fin octobre rend la session de février très improbable.',
              },
            ],
          },
          {
            heading: "Novembre : la lettre d'invitation",
            blocks: [
              {
                type: 'p',
                text: "Une fois admis, l'université déclenche la demande de lettre d'invitation auprès du Ministère de l'Intérieur russe. C'est l'étape la plus longue de toute la chaîne : 30 à 45 jours, et personne ne peut l'accélérer.",
              },
              {
                type: 'p',
                text: "Ne restez pas inactif pendant cette attente : c'est le moment des certificats médicaux, du budget de première année et des justificatifs demandés par le consulat.",
              },
              {
                type: 'strong',
                text: "Point de non-retour n°2 : si la demande d'invitation n'est pas partie fin novembre, février devient hors d'atteinte.",
              },
            ],
          },
          {
            heading: 'Décembre : visa, assurance et billet',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Déposer la demande de visa consulaire dès réception de la lettre d'invitation",
                  "Souscrire l'assurance médicale obligatoire, à prévoir autour de 180 € par an",
                  "Réserver le billet d'avion en gardant de la souplesse sur la date",
                  "Préparer l'hiver — équipement à acheter plutôt sur place qu'en Tunisie",
                ],
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Est-il trop tard si je commence en novembre ?',
            answer:
              "C'est serré mais pas impossible, à condition que vos documents soient déjà légalisés. Si tout reste à faire, visez la rentrée principale suivante plutôt que de payer des frais pour un dossier qui n'aboutira pas.",
          },
          {
            question: 'Quelle étape prend le plus de temps ?',
            answer:
              "La lettre d'invitation du Ministère de l'Intérieur russe : 30 à 45 jours à elle seule. C'est elle qui commande tout le calendrier, et elle ne dépend ni de vous ni de l'université.",
          },
          {
            question: 'Puis-je préparer des documents avant de choisir mon université ?',
            answer:
              "Oui, et c'est la meilleure façon de gagner du temps. La légalisation de vos diplômes et actes d'état civil ne dépend pas de l'établissement : lancez-la immédiatement.",
          },
        ],
        keywords: [
          'calendrier inscription Russie',
          'rétroplanning études Russie',
          'délais dossier Russie',
          'session février Russie calendrier',
          'quand candidater université russe',
          'dossier Russie octobre novembre',
        ],
      },
      en: {
        title: 'October to December Timeline: Leaving for Russia in February | RusStudy',
        description:
          'The month-by-month calendar, October to December, to complete a Russian study application in time for the February intake. Real timelines and points of no return.',
        h1: 'October to December timeline for the February intake',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'Three months, four non-compressible administrative steps. The real calendar for not missing the February intake.',
        intro:
          'The February intake is not a door that stays open until the last minute: it is decided in October and November. Russian administrative timelines stack up and cannot be negotiated. Here is the month-by-month calendar, with the points of no return clearly marked.',
        sections: [
          {
            heading: 'October: assemble and submit',
            blocks: [
              {
                type: 'p',
                text: 'This is the decisive month. Anything started in October arrives in time; anything slipping into November becomes tight.',
              },
              {
                type: 'ul',
                items: [
                  'Gather originals: Baccalaureate certificate, transcripts, birth certificate, valid passport',
                  'Start the legalisations, which depend neither on you nor on the university and take several weeks',
                  'Choose the university and programme, then submit the application',
                  'Allow 15 to 30 days for administrative admission once the file is complete',
                ],
              },
              {
                type: 'strong',
                text: 'Point of no return #1: a file not submitted by end of October makes the February intake very unlikely.',
              },
            ],
          },
          {
            heading: 'November: the invitation letter',
            blocks: [
              {
                type: 'p',
                text: 'Once admitted, the university requests the invitation letter from the Russian Ministry of the Interior. It is the longest step in the whole chain: 30 to 45 days, and nobody can speed it up.',
              },
              {
                type: 'p',
                text: 'Do not idle during the wait: this is the time for medical certificates, the first-year budget and the documents the consulate will ask for.',
              },
              {
                type: 'strong',
                text: 'Point of no return #2: if the invitation request has not gone out by end of November, February is out of reach.',
              },
            ],
          },
          {
            heading: 'December: visa, insurance and flight',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Submit the consular visa application as soon as the invitation letter arrives',
                  'Take out the mandatory medical insurance, around €180 a year',
                  'Book the flight, keeping some flexibility on the date',
                  'Prepare for winter — kit is better bought on site than in Tunisia',
                ],
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is it too late if I start in November?',
            answer:
              'Tight but not impossible, provided your documents are already legalised. If everything is still to be done, aim for the next main intake rather than paying fees for a file that will not land.',
          },
          {
            question: 'Which step takes the longest?',
            answer:
              'The invitation letter from the Russian Ministry of the Interior: 30 to 45 days on its own. It drives the whole calendar and depends neither on you nor on the university.',
          },
          {
            question: 'Can I prepare documents before choosing my university?',
            answer:
              'Yes, and it is the best way to save time. Legalising your diplomas and civil records does not depend on the institution: start immediately.',
          },
        ],
        keywords: [
          'Russia application timeline',
          'study in Russia deadlines',
          'February intake calendar',
          'when to apply Russian university',
          'Russian visa processing time',
          'application October November',
        ],
      },
      ar: {
        title: 'رزنامة أكتوبر إلى ديسمبر: السفر إلى روسيا في فيفري | RusStudy',
        description:
          'الرزنامة شهرًا بشهر من أكتوبر إلى ديسمبر لإتمام ملف الدراسة في روسيا في الوقت المناسب لدورة فيفري. الآجال الحقيقية ونقاط اللاعودة.',
        h1: 'رزنامة من أكتوبر إلى ديسمبر لدورة فيفري',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'ثلاثة أشهر وأربع مراحل إدارية غير قابلة للاختصار. الرزنامة الحقيقية لعدم تفويت دورة فيفري.',
        intro:
          'دورة فيفري ليست بابًا يبقى مفتوحًا حتى آخر لحظة: إنها تُحسم في أكتوبر ونوفمبر. الآجال الإدارية الروسية تتراكم ولا تقبل التفاوض. إليك الرزنامة شهرًا بشهر مع تحديد واضح لنقاط اللاعودة.',
        sections: [
          {
            heading: 'أكتوبر: إعداد الملف وإيداعه',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو الشهر الحاسم. كل ما يُطلق في أكتوبر يصل في وقته، وما ينزلق إلى نوفمبر يصبح ضيقًا.',
              },
              {
                type: 'ul',
                items: [
                  'جمع الأصول: شهادة البكالوريا، كشوف الأعداد، مضمون الولادة، جواز سفر ساري',
                  'إطلاق التصديقات، وهي لا تتوقف عليك ولا على الجامعة وتستغرق عدة أسابيع',
                  'اختيار الجامعة والاختصاص ثم إيداع ملف الترشح',
                  'احسب 15 إلى 30 يومًا للقبول الإداري بعد اكتمال الملف',
                ],
              },
              {
                type: 'strong',
                text: 'نقطة اللاعودة الأولى: ملف لم يُودع في أواخر أكتوبر يجعل دورة فيفري بعيدة الاحتمال.',
              },
            ],
          },
          {
            heading: 'نوفمبر: رسالة الدعوة',
            blocks: [
              {
                type: 'p',
                text: 'بعد القبول تطلب الجامعة رسالة الدعوة من وزارة الداخلية الروسية. وهي أطول مرحلة في السلسلة كلها: من 30 إلى 45 يومًا، ولا أحد يستطيع تسريعها.',
              },
              {
                type: 'p',
                text: 'لا تبقَ عاطلاً خلال هذا الانتظار: إنه وقت الشهادات الطبية وميزانية السنة الأولى والمؤيدات التي تطلبها القنصلية.',
              },
              {
                type: 'strong',
                text: 'نقطة اللاعودة الثانية: إذا لم يُرسل طلب الدعوة في أواخر نوفمبر، يصبح فيفري خارج المتناول.',
              },
            ],
          },
          {
            heading: 'ديسمبر: التأشيرة والتأمين والتذكرة',
            blocks: [
              {
                type: 'ul',
                items: [
                  'إيداع طلب التأشيرة القنصلية فور استلام رسالة الدعوة',
                  'اكتتاب التأمين الصحي الإجباري، بحوالي 180 € في السنة',
                  'حجز تذكرة الطائرة مع الاحتفاظ بمرونة في التاريخ',
                  'تحضير الشتاء — يُفضل شراء التجهيزات في عين المكان لا في تونس',
                ],
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل فات الأوان إذا بدأت في نوفمبر؟',
            answer:
              'الأمر ضيق لكنه ليس مستحيلاً، بشرط أن تكون وثائقك مصدَّقة أصلاً. أما إذا كان كل شيء لم يبدأ بعد، فاستهدف الدخول الرئيسي الموالي بدل دفع مصاريف لملف لن ينجح.',
          },
          {
            question: 'ما المرحلة الأطول؟',
            answer:
              'رسالة الدعوة من وزارة الداخلية الروسية: من 30 إلى 45 يومًا وحدها. هي التي تحكم الرزنامة كلها ولا تتوقف عليك ولا على الجامعة.',
          },
          {
            question: 'هل يمكنني تحضير الوثائق قبل اختيار الجامعة؟',
            answer:
              'نعم، وهي أفضل طريقة لربح الوقت. تصديق شهاداتك ووثائق حالتك المدنية لا يتوقف على المؤسسة: ابدأ فورًا.',
          },
        ],
        keywords: [
          'رزنامة التسجيل في روسيا',
          'آجال ملف الدراسة في روسيا',
          'رزنامة دورة فيفري',
          'متى الترشح لجامعة روسية',
          'آجال التأشيرة الروسية',
          'ملف روسيا أكتوبر نوفمبر',
        ],
      },
      ru: {
        title: 'План с октября по декабрь: уехать в Россию в феврале | RusStudy',
        description:
          'Помесячный календарь с октября по декабрь, чтобы успеть подготовить досье на учёбу в России к февральскому набору. Реальные сроки и точки невозврата.',
        h1: 'План с октября по декабрь для февральского набора',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt:
          'Три месяца и четыре несжимаемых административных этапа. Реальный календарь, чтобы не упустить февральский набор.',
        intro:
          'Февральский набор — не дверь, открытая до последнего момента: всё решается в октябре и ноябре. Российские административные сроки складываются и не обсуждаются. Вот помесячный календарь с чётко обозначенными точками невозврата.',
        sections: [
          {
            heading: 'Октябрь: собрать и подать',
            blocks: [
              {
                type: 'p',
                text: 'Это решающий месяц. Всё начатое в октябре успевает; всё, что сдвигается на ноябрь, становится впритык.',
              },
              {
                type: 'ul',
                items: [
                  'Собрать оригиналы: аттестат, выписки оценок, свидетельство о рождении, действующий паспорт',
                  'Запустить легализацию — она не зависит ни от вас, ни от вуза и занимает несколько недель',
                  'Выбрать вуз и направление, затем подать документы',
                  'Заложить 15–30 дней на административное зачисление после полного комплекта',
                ],
              },
              {
                type: 'strong',
                text: 'Точка невозврата №1: досье, не поданное к концу октября, делает февральский набор маловероятным.',
              },
            ],
          },
          {
            heading: 'Ноябрь: приглашение',
            blocks: [
              {
                type: 'p',
                text: 'После зачисления вуз запрашивает приглашение в МВД России. Это самый долгий этап всей цепочки: 30–45 дней, и ускорить его невозможно.',
              },
              {
                type: 'p',
                text: 'Не простаивайте в ожидании: это время для медицинских справок, бюджета первого года и документов для консульства.',
              },
              {
                type: 'strong',
                text: 'Точка невозврата №2: если запрос приглашения не ушёл к концу ноября, февраль недостижим.',
              },
            ],
          },
          {
            heading: 'Декабрь: виза, страховка и билет',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Подать на консульскую визу сразу по получении приглашения',
                  'Оформить обязательную медицинскую страховку, около 180 € в год',
                  'Забронировать билет, сохранив гибкость по дате',
                  'Подготовиться к зиме — экипировку лучше покупать на месте, чем в Тунисе',
                ],
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Поздно ли начинать в ноябре?',
            answer:
              'Впритык, но возможно, если документы уже легализованы. Если всё ещё впереди, лучше нацелиться на следующий основной набор, чем платить за досье, которое не успеет.',
          },
          {
            question: 'Какой этап самый долгий?',
            answer:
              'Приглашение от МВД России: 30–45 дней само по себе. Оно определяет весь календарь и не зависит ни от вас, ни от вуза.',
          },
          {
            question: 'Можно ли готовить документы до выбора вуза?',
            answer:
              'Да, и это лучший способ сэкономить время. Легализация дипломов и актов гражданского состояния от вуза не зависит: начинайте сразу.',
          },
        ],
        keywords: [
          'календарь поступления в России',
          'сроки подачи документов Россия',
          'календарь февральского набора',
          'когда подавать в российский вуз',
          'сроки российской визы',
          'досье октябрь ноябрь',
        ],
      },
    },
  },
  {
    slug: 'lettre-invitation-etudes-russie-delais',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: "Lettre d'invitation pour étudier en Russie : délais et fonctionnement | RusStudy",
        description:
          "Ce qu'est la lettre d'invitation du Ministère de l'Intérieur russe, pourquoi elle prend 30 à 45 jours, et comment éviter qu'elle fasse échouer votre dossier.",
        h1: "La lettre d'invitation : le document qui commande tout le calendrier",
        publishedLabel: 'Publication : Septembre 2026',
        excerpt: "Sans elle, pas de visa. Elle prend 30 à 45 jours et ne s'accélère pas. Comment l'anticiper.",
        intro:
          "C'est le document que personne ne connaît avant de commencer, et celui qui fait rater le plus de sessions. La lettre d'invitation n'est pas une formalité de l'université : c'est un acte officiel du Ministère de l'Intérieur russe, avec son propre délai, que ni vous ni l'établissement ne pouvez raccourcir.",
        sections: [
          {
            heading: 'Ce que c’est exactement',
            blocks: [
              {
                type: 'p',
                text: "Une fois votre admission prononcée, l'université saisit les autorités migratoires russes pour qu'elles émettent une invitation officielle à votre nom. Ce document atteste qu'un établissement d'État vous attend, et le consulat l'exige pour délivrer le visa d'études.",
              },
              {
                type: 'ul',
                items: [
                  "Il est nominatif et lié à une université précise : changer d'établissement impose de tout recommencer",
                  "Il comporte une période de validité à respecter pour la demande de visa",
                  "Il ne peut pas être demandé avant l'admission : l'ordre des étapes est imposé",
                ],
              },
            ],
          },
          {
            heading: 'Pourquoi personne ne peut accélérer',
            blocks: [
              {
                type: 'p',
                text: "Le délai est administratif et centralisé. Aucune agence, y compris nous, ne peut le réduire : toute promesse d'obtention en quelques jours doit vous alerter immédiatement.",
              },
              {
                type: 'strong',
                text: "Ce qu'une agence sérieuse peut faire, en revanche, c'est déclencher la demande sans délai après l'admission et suivre son avancement. Ce sont les jours perdus avant l'envoi qui coûtent une session.",
              },
            ],
          },
          {
            heading: 'Comment éviter qu’elle fasse échouer votre dossier',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Déposez votre candidature tôt : l'invitation ne part qu'après l'admission, qui prend elle-même 15 à 30 jours",
                  "Vérifiez que votre nom est orthographié strictement à l'identique sur le passeport et le dossier — une divergence fait réémettre le document",
                  "Ne réservez pas de billet d'avion ferme avant d'avoir la lettre en main",
                  'Utilisez le temps d’attente pour les certificats médicaux, dont la validité est courte',
                ],
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
        ],
        faq: [
          {
            question: "Peut-on obtenir la lettre d'invitation plus vite en payant ?",
            answer:
              "Non. Le délai est fixé par l'administration russe. Une agence qui promet un raccourci contre paiement vend quelque chose qu'elle ne contrôle pas.",
          },
          {
            question: "Que se passe-t-il si je change d'université après la demande ?",
            answer:
              "La lettre est liée à un établissement précis : changer impose une nouvelle demande, donc un délai complet de 30 à 45 jours supplémentaires. C'est pourquoi le choix d'université doit être arrêté avant cette étape.",
          },
          {
            question: 'La lettre a-t-elle une date limite ?',
            answer:
              'Oui, elle comporte une période de validité pour la demande de visa. Déposez votre demande consulaire dès sa réception plutôt que d’attendre.',
          },
        ],
        keywords: [
          'lettre invitation Russie',
          'invitation ministère intérieur russe',
          'délai invitation visa Russie',
          'visa étudiant Russie documents',
          'admission université russe délai',
          'procédure visa études Russie',
        ],
      },
      en: {
        title: 'Invitation Letter to Study in Russia: Timelines and How It Works | RusStudy',
        description:
          'What the invitation letter from the Russian Ministry of the Interior is, why it takes 30 to 45 days, and how to stop it derailing your application.',
        h1: 'The invitation letter: the document that drives the whole calendar',
        publishedLabel: 'Published: September 2026',
        excerpt: 'No letter, no visa. It takes 30 to 45 days and cannot be sped up. How to plan around it.',
        intro:
          'This is the document nobody knows about before starting, and the one that costs the most missed intakes. The invitation letter is not a university formality: it is an official act of the Russian Ministry of the Interior, with its own timeline that neither you nor the institution can shorten.',
        sections: [
          {
            heading: 'What it actually is',
            blocks: [
              {
                type: 'p',
                text: 'Once your admission is confirmed, the university petitions the Russian migration authorities to issue an official invitation in your name. It certifies that a state institution is expecting you, and the consulate requires it to issue the student visa.',
              },
              {
                type: 'ul',
                items: [
                  'It is personal and tied to one specific university: changing institution means starting over',
                  'It carries a validity period that must be respected for the visa application',
                  'It cannot be requested before admission: the order of steps is imposed',
                ],
              },
            ],
          },
          {
            heading: 'Why nobody can speed it up',
            blocks: [
              {
                type: 'p',
                text: 'The delay is administrative and centralised. No agency, ourselves included, can shorten it: any promise of delivery within days should alert you immediately.',
              },
              {
                type: 'strong',
                text: 'What a serious agency can do is trigger the request without delay after admission and track its progress. The days lost before sending are what costs an intake.',
              },
            ],
          },
          {
            heading: 'How to stop it derailing your application',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Apply early: the invitation only goes out after admission, which itself takes 15 to 30 days',
                  'Check your name is spelled identically on the passport and the file — a mismatch forces reissuing',
                  'Do not book a firm flight before the letter is in hand',
                  'Use the waiting time for medical certificates, whose validity is short',
                ],
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can the invitation letter be obtained faster by paying?',
            answer:
              'No. The timeline is set by the Russian administration. An agency promising a paid shortcut is selling something it does not control.',
          },
          {
            question: 'What happens if I change university after the request?',
            answer:
              'The letter is tied to one institution: changing means a fresh request and a full extra 30 to 45 day wait. That is why the choice of university must be settled before this step.',
          },
          {
            question: 'Does the letter have a deadline?',
            answer:
              'Yes, it carries a validity period for the visa application. Submit your consular application as soon as it arrives rather than waiting.',
          },
        ],
        keywords: [
          'Russia invitation letter',
          'Russian Ministry of Interior invitation',
          'invitation letter processing time',
          'Russian student visa documents',
          'Russian university admission time',
          'Russia study visa procedure',
        ],
      },
      ar: {
        title: 'رسالة الدعوة للدراسة في روسيا: الآجال وطريقة العمل | RusStudy',
        description:
          'ما هي رسالة الدعوة من وزارة الداخلية الروسية، ولماذا تستغرق 30 إلى 45 يومًا، وكيف تتفادى أن تُفشل ملفك.',
        h1: 'رسالة الدعوة: الوثيقة التي تحكم الرزنامة كلها',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'بدونها لا تأشيرة. تستغرق 30 إلى 45 يومًا ولا تُسرَّع. كيف تستبقها.',
        intro:
          'هذه هي الوثيقة التي لا يعرفها أحد قبل البدء، وهي التي تُفوّت أكبر عدد من الدورات. رسالة الدعوة ليست إجراءً جامعيًا، بل عملاً رسميًا من وزارة الداخلية الروسية، بأجل خاص بها لا يمكنك أنت ولا المؤسسة اختصاره.',
        sections: [
          {
            heading: 'ما هي بالضبط',
            blocks: [
              {
                type: 'p',
                text: 'بعد إقرار قبولك، تتوجه الجامعة إلى سلطات الهجرة الروسية لإصدار دعوة رسمية باسمك. تشهد هذه الوثيقة بأن مؤسسة حكومية تنتظرك، وتطلبها القنصلية لمنح تأشيرة الدراسة.',
              },
              {
                type: 'ul',
                items: [
                  'هي اسمية ومرتبطة بجامعة محددة: تغيير المؤسسة يفرض إعادة كل شيء',
                  'تتضمن مدة صلاحية يجب احترامها لطلب التأشيرة',
                  'لا يمكن طلبها قبل القبول: ترتيب المراحل مفروض',
                ],
              },
            ],
          },
          {
            heading: 'لماذا لا يستطيع أحد التسريع',
            blocks: [
              {
                type: 'p',
                text: 'الأجل إداري ومركزي. لا وكالة، ونحن منها، تستطيع تقليصه: أي وعد بالحصول عليها في أيام يجب أن ينبهك فورًا.',
              },
              {
                type: 'strong',
                text: 'ما تستطيعه وكالة جادة هو إطلاق الطلب دون تأخير بعد القبول ومتابعة تقدمه. فالأيام الضائعة قبل الإرسال هي التي تكلف دورة كاملة.',
              },
            ],
          },
          {
            heading: 'كيف تتفادى أن تُفشل ملفك',
            blocks: [
              {
                type: 'ul',
                items: [
                  'أودع ترشحك مبكرًا: الدعوة لا تنطلق إلا بعد القبول الذي يستغرق بدوره 15 إلى 30 يومًا',
                  'تأكد أن كتابة اسمك مطابقة تمامًا بين جواز السفر والملف — أي اختلاف يفرض إعادة إصدار الوثيقة',
                  'لا تحجز تذكرة طائرة نهائية قبل استلام الرسالة',
                  'استغل وقت الانتظار في الشهادات الطبية القصيرة الصلاحية',
                ],
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكن الحصول على رسالة الدعوة أسرع مقابل دفع؟',
            answer: 'لا. الأجل تحدده الإدارة الروسية. والوكالة التي تعد باختصار مقابل مال تبيع شيئًا لا تتحكم فيه.',
          },
          {
            question: 'ماذا يحدث إذا غيّرت الجامعة بعد الطلب؟',
            answer:
              'الرسالة مرتبطة بمؤسسة محددة: التغيير يفرض طلبًا جديدًا وبالتالي أجلاً إضافيًا كاملاً من 30 إلى 45 يومًا. لهذا يجب حسم اختيار الجامعة قبل هذه المرحلة.',
          },
          {
            question: 'هل للرسالة أجل محدد؟',
            answer: 'نعم، تتضمن مدة صلاحية لطلب التأشيرة. أودع طلبك القنصلي فور استلامها بدل الانتظار.',
          },
        ],
        keywords: [
          'رسالة الدعوة روسيا',
          'دعوة وزارة الداخلية الروسية',
          'أجل الدعوة والتأشيرة',
          'وثائق تأشيرة الدراسة روسيا',
          'أجل القبول في جامعة روسية',
          'إجراءات تأشيرة الدراسة',
        ],
      },
      ru: {
        title: 'Приглашение на учёбу в России: сроки и порядок | RusStudy',
        description:
          'Что такое приглашение от МВД России, почему оно занимает 30–45 дней и как не дать ему сорвать ваше досье.',
        h1: 'Приглашение: документ, определяющий весь календарь',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Без него нет визы. Оно занимает 30–45 дней и не ускоряется. Как это учесть заранее.',
        intro:
          'Это документ, о котором никто не знает до начала, и именно из-за него чаще всего срываются наборы. Приглашение — не университетская формальность, а официальный акт МВД России со своим сроком, который не сократить ни вам, ни вузу.',
        sections: [
          {
            heading: 'Что это такое',
            blocks: [
              {
                type: 'p',
                text: 'После зачисления вуз обращается в миграционные органы России за официальным приглашением на ваше имя. Оно подтверждает, что вас ждёт государственное учреждение, и требуется консульством для выдачи учебной визы.',
              },
              {
                type: 'ul',
                items: [
                  'Оно именное и привязано к конкретному вузу: смена учреждения означает начать заново',
                  'У него есть срок действия, который нужно соблюсти при подаче на визу',
                  'Его нельзя запросить до зачисления: порядок этапов задан',
                ],
              },
            ],
          },
          {
            heading: 'Почему никто не ускорит',
            blocks: [
              {
                type: 'p',
                text: 'Срок административный и централизованный. Ни одно агентство, включая нас, не может его сократить: обещание получить документ за несколько дней должно вас насторожить.',
              },
              {
                type: 'strong',
                text: 'Что серьёзное агентство действительно может — запустить запрос сразу после зачисления и отслеживать его. Именно дни, потерянные до отправки, стоят целого набора.',
              },
            ],
          },
          {
            heading: 'Как не дать ему сорвать досье',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Подавайте документы рано: приглашение уходит только после зачисления, которое само занимает 15–30 дней',
                  'Проверьте, что написание имени полностью совпадает в паспорте и в досье — расхождение ведёт к переоформлению',
                  'Не покупайте невозвратный билет до получения приглашения',
                  'Используйте время ожидания для медицинских справок с коротким сроком действия',
                ],
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли получить приглашение быстрее за деньги?',
            answer:
              'Нет. Срок установлен российской администрацией. Агентство, обещающее платное ускорение, продаёт то, что не контролирует.',
          },
          {
            question: 'Что если я сменю вуз после запроса?',
            answer:
              'Приглашение привязано к конкретному учреждению: смена означает новый запрос и полные дополнительные 30–45 дней. Поэтому выбор вуза нужно сделать до этого этапа.',
          },
          {
            question: 'Есть ли у приглашения срок?',
            answer:
              'Да, у него есть период действия для подачи на визу. Подавайте консульское заявление сразу по получении.',
          },
        ],
        keywords: [
          'приглашение на учёбу в России',
          'приглашение МВД России',
          'срок приглашения и визы',
          'документы на учебную визу',
          'срок зачисления в российский вуз',
          'процедура учебной визы',
        ],
      },
    },
  },
  {
    slug: 'refus-visa-etudiant-russie-que-faire',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Refus ou retard de visa étudiant pour la Russie : que faire | RusStudy',
        description:
          "Dossier incomplet, retard consulaire ou refus : les causes réelles, ce qui se corrige, et comment réagir sans perdre la session. Guide pour étudiants tunisiens.",
        h1: 'Refus, retard ou dossier incomplet : comment réagir',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "La plupart des blocages ne sont pas des refus définitifs mais des dossiers incomplets. Les causes réelles et la marche à suivre.",
        intro:
          "C'est la peur qui revient le plus souvent en octobre et novembre, au moment où les dossiers partent. Dans les faits, la grande majorité des blocages ne sont pas des refus de principe : ce sont des pièces manquantes, des incohérences de nom ou des documents périmés. La différence est importante, parce qu'elle détermine si votre session est perdue ou simplement retardée.",
        sections: [
          {
            heading: 'Distinguer les trois situations',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Le dossier incomplet : le consulat ou l'université réclame une pièce. Ce n'est pas un refus, c'est une demande de complément, et cela se règle en quelques jours si vous réagissez vite.",
                  "Le retard de traitement : rien ne manque, le délai est simplement plus long que prévu. Rien à corriger, mais le calendrier se décale.",
                  'Le refus motivé : plus rare, il repose sur un motif précis qu’il faut identifier avant toute nouvelle démarche.',
                ],
              },
              {
                type: 'strong',
                text: "Ne redéposez jamais un dossier identique après un refus : sans corriger la cause, le résultat sera le même.",
              },
            ],
          },
          {
            heading: 'Les causes qui reviennent le plus souvent',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Une orthographe du nom différente entre le passeport, le diplôme et le formulaire de candidature",
                  'Un certificat médical dont la validité, courte, a expiré pendant le traitement',
                  "Une traduction réalisée par un traducteur non assermenté, même parfaitement exacte",
                  "Un passeport dont la validité résiduelle ne couvre pas la durée du séjour demandé",
                  "Une photocopie transmise là où l'original était exigé",
                ],
              },
              {
                type: 'p',
                text: "Aucune de ces causes ne remet en question votre projet : toutes se corrigent. Ce qui coûte cher, c'est le temps perdu à comprendre laquelle s'applique.",
              },
            ],
          },
          {
            heading: 'Réagir sans perdre la session',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Demandez par écrit le motif exact : sans lui, vous corrigez à l’aveugle',
                  'Traitez la pièce manquante en priorité absolue, avant même d’informer votre entourage',
                  "Vérifiez la validité résiduelle de tous vos documents, pas seulement celui qui a été signalé",
                  "Si le calendrier de février devient intenable, basculez sur la rentrée suivante plutôt que de forcer un dossier condamné",
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'Un refus de visa est-il définitif ?',
            answer:
              "Rarement. La plupart des blocages sont des dossiers incomplets, qui se corrigent. Un refus réellement motivé demande d'identifier la cause précise avant de redéposer : redéposer à l'identique mène au même résultat.",
          },
          {
            question: 'Combien de temps pour corriger un dossier incomplet ?',
            answer:
              'Quelques jours si la pièce est disponible, plusieurs semaines si elle demande une nouvelle légalisation ou traduction assermentée. C’est pourquoi la réactivité compte plus que tout à ce stade.',
          },
          {
            question: 'Que faire si le retard fait rater février ?',
            answer:
              "Basculer sur la rentrée principale suivante avec un dossier déjà constitué et légalisé. Vous repartez alors avec une avance considérable, sans refaire les démarches déjà validées.",
          },
        ],
        keywords: [
          'refus visa étudiant Russie',
          'dossier incomplet visa Russie',
          'retard visa Russie étudiant',
          'problème visa études Russie',
          'que faire refus visa',
          'visa étudiant Russie tunisien',
        ],
      },
      en: {
        title: 'Russian Student Visa Refused or Delayed: What to Do | RusStudy',
        description:
          'Incomplete file, consular delay or refusal: the real causes, what can be fixed, and how to react without losing the intake. Guide for Tunisian students.',
        h1: 'Refusal, delay or incomplete file: how to react',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'Most blockages are not final refusals but incomplete files. The real causes and the steps to take.',
        intro:
          'This is the fear that comes up most in October and November, when files go out. In practice, the vast majority of blockages are not refusals in principle: they are missing documents, name mismatches or expired certificates. The distinction matters, because it determines whether your intake is lost or merely delayed.',
        sections: [
          {
            heading: 'Telling the three situations apart',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The incomplete file: the consulate or university asks for a document. Not a refusal but a request for completion, solved in days if you react fast.',
                  'The processing delay: nothing is missing, the timeline is simply longer than expected. Nothing to fix, but the calendar shifts.',
                  'The reasoned refusal: rarer, based on a specific ground that must be identified before any new step.',
                ],
              },
              {
                type: 'strong',
                text: 'Never resubmit an identical file after a refusal: without fixing the cause, the result will be the same.',
              },
            ],
          },
          {
            heading: 'The most frequent causes',
            blocks: [
              {
                type: 'ul',
                items: [
                  'A name spelled differently across the passport, the diploma and the application form',
                  'A medical certificate whose short validity expired during processing',
                  'A translation by a non-sworn translator, even a perfectly accurate one',
                  'A passport whose remaining validity does not cover the requested stay',
                  'A photocopy submitted where the original was required',
                ],
              },
              {
                type: 'p',
                text: 'None of these calls your project into question: all are fixable. What costs dearly is the time lost working out which one applies.',
              },
            ],
          },
          {
            heading: 'Reacting without losing the intake',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Ask in writing for the exact ground: without it you are correcting blind',
                  'Handle the missing document as the absolute priority',
                  'Check the remaining validity of all your documents, not just the one flagged',
                  'If the February calendar becomes unworkable, switch to the next intake rather than forcing a doomed file',
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is a visa refusal final?',
            answer:
              'Rarely. Most blockages are incomplete files, which can be fixed. A genuinely reasoned refusal requires identifying the precise ground before resubmitting: resubmitting identically leads to the same outcome.',
          },
          {
            question: 'How long does fixing an incomplete file take?',
            answer:
              'A few days if the document is available, several weeks if it needs new legalisation or a sworn translation. That is why reacting fast matters more than anything at this stage.',
          },
          {
            question: 'What if the delay means missing February?',
            answer:
              'Switch to the next main intake with a file already assembled and legalised. You start again with a considerable head start, without redoing validated steps.',
          },
        ],
        keywords: [
          'Russian student visa refused',
          'incomplete visa file Russia',
          'Russian visa delay student',
          'study visa problem Russia',
          'what to do visa refusal',
          'Russian student visa Tunisia',
        ],
      },
      ar: {
        title: 'رفض أو تأخر تأشيرة الدراسة في روسيا: ماذا تفعل | RusStudy',
        description:
          'ملف ناقص أو تأخر قنصلي أو رفض: الأسباب الحقيقية، وما يمكن تصحيحه، وكيف تتصرف دون إضاعة الدورة. دليل للطلبة التونسيين.',
        h1: 'رفض أو تأخر أو ملف ناقص: كيف تتصرف',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'أغلب حالات التعطل ليست رفضًا نهائيًا بل ملفات ناقصة. الأسباب الحقيقية وما ينبغي فعله.',
        intro:
          'هذا هو الخوف الأكثر تكرارًا في أكتوبر ونوفمبر، وقت انطلاق الملفات. في الواقع، الأغلبية الساحقة من حالات التعطل ليست رفضًا مبدئيًا: إنها وثائق ناقصة أو اختلاف في كتابة الاسم أو شهادات منتهية الصلاحية. والفرق مهم لأنه يحدد ما إذا كانت دورتك ضائعة أم مؤجلة فقط.',
        sections: [
          {
            heading: 'التمييز بين ثلاث حالات',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الملف الناقص: تطلب القنصلية أو الجامعة وثيقة. ليس رفضًا بل طلب استكمال، ويُحل في أيام إذا تفاعلت بسرعة.',
                  'تأخر المعالجة: لا شيء ناقص، الأجل فقط أطول من المتوقع. لا شيء يُصحَّح لكن الرزنامة تتزحزح.',
                  'الرفض المعلَّل: أندر، ويقوم على سبب محدد يجب تحديده قبل أي إجراء جديد.',
                ],
              },
              { type: 'strong', text: 'لا تُعد إيداع ملف مطابق بعد رفض: دون تصحيح السبب ستكون النتيجة نفسها.' },
            ],
          },
          {
            heading: 'الأسباب الأكثر تكرارًا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'كتابة الاسم بشكل مختلف بين جواز السفر والشهادة ومطبوعة الترشح',
                  'شهادة طبية انتهت صلاحيتها القصيرة أثناء المعالجة',
                  'ترجمة من مترجم غير محلَّف، حتى لو كانت دقيقة تمامًا',
                  'جواز سفر لا تغطي صلاحيته المتبقية مدة الإقامة المطلوبة',
                  'نسخة مصوّرة حيث يُطلب الأصل',
                ],
              },
              {
                type: 'p',
                text: 'لا شيء من هذا يشكك في مشروعك: كلها قابلة للتصحيح. والمكلف حقًا هو الوقت الضائع في فهم أي سبب ينطبق.',
              },
            ],
          },
          {
            heading: 'التصرف دون إضاعة الدورة',
            blocks: [
              {
                type: 'ul',
                items: [
                  'اطلب السبب الدقيق كتابيًا: بدونه تصحح في العماء',
                  'عالج الوثيقة الناقصة كأولوية مطلقة',
                  'تحقق من الصلاحية المتبقية لكل وثائقك لا فقط تلك المُشار إليها',
                  'إذا أصبحت رزنامة فيفري غير ممكنة، انتقل إلى الدخول الموالي بدل إجبار ملف محكوم عليه',
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل رفض التأشيرة نهائي؟',
            answer:
              'نادرًا. أغلب حالات التعطل ملفات ناقصة قابلة للتصحيح. أما الرفض المعلَّل فعلاً فيتطلب تحديد السبب الدقيق قبل إعادة الإيداع: إعادة الإيداع كما هو تؤدي إلى النتيجة نفسها.',
          },
          {
            question: 'كم يستغرق تصحيح ملف ناقص؟',
            answer:
              'أيام إذا كانت الوثيقة متوفرة، وأسابيع إذا تطلبت تصديقًا أو ترجمة محلَّفة جديدة. لهذا تكون سرعة التفاعل أهم من كل شيء في هذه المرحلة.',
          },
          {
            question: 'ماذا أفعل إذا أدى التأخر إلى تفويت فيفري؟',
            answer:
              'الانتقال إلى الدخول الرئيسي الموالي بملف جاهز ومصدَّق. عندها تنطلق بتقدم كبير دون إعادة الإجراءات المصادق عليها.',
          },
        ],
        keywords: [
          'رفض تأشيرة الدراسة روسيا',
          'ملف ناقص تأشيرة روسيا',
          'تأخر التأشيرة الروسية',
          'مشكلة تأشيرة الدراسة',
          'ماذا أفعل عند رفض التأشيرة',
          'تأشيرة الطلبة التونسيين روسيا',
        ],
      },
      ru: {
        title: 'Отказ или задержка учебной визы в Россию: что делать | RusStudy',
        description:
          'Неполное досье, консульская задержка или отказ: реальные причины, что можно исправить и как реагировать, не потеряв набор.',
        h1: 'Отказ, задержка или неполное досье: как реагировать',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Большинство затруднений — не окончательные отказы, а неполные досье. Реальные причины и порядок действий.',
        intro:
          'Это главный страх в октябре и ноябре, когда досье уходят. На практике подавляющее большинство затруднений — не принципиальные отказы, а недостающие документы, расхождения в написании имени или просроченные справки. Различие важно: от него зависит, потерян ли набор или просто сдвинут.',
        sections: [
          {
            heading: 'Различать три ситуации',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Неполное досье: консульство или вуз запрашивает документ. Это не отказ, а запрос на дополнение, решается за дни при быстрой реакции.',
                  'Задержка обработки: всё на месте, срок просто длиннее ожидаемого. Исправлять нечего, но календарь сдвигается.',
                  'Мотивированный отказ: реже, основан на конкретном основании, которое нужно установить до новых шагов.',
                ],
              },
              { type: 'strong', text: 'Никогда не подавайте идентичное досье после отказа: без устранения причины результат будет тем же.' },
            ],
          },
          {
            heading: 'Самые частые причины',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Разное написание имени в паспорте, аттестате и анкете',
                  'Медицинская справка с коротким сроком, истёкшая за время обработки',
                  'Перевод от неприсяжного переводчика, даже совершенно точный',
                  'Паспорт, остаточный срок которого не покрывает запрашиваемое пребывание',
                  'Ксерокопия там, где требовался оригинал',
                ],
              },
              {
                type: 'p',
                text: 'Ничто из этого не ставит проект под вопрос: всё исправимо. Дорого обходится время, потраченное на выяснение, какая именно причина сработала.',
              },
            ],
          },
          {
            heading: 'Реагировать, не теряя набор',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Запросите точное основание письменно: без него вы исправляете вслепую',
                  'Займитесь недостающим документом как абсолютным приоритетом',
                  'Проверьте остаточный срок всех документов, а не только отмеченного',
                  'Если февральский календарь становится нереальным, переходите на следующий набор, а не продавливайте обречённое досье',
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'Отказ в визе окончателен?',
            answer:
              'Редко. Большинство затруднений — неполные досье, которые исправляются. Действительно мотивированный отказ требует установить точное основание до повторной подачи: подача без изменений даст тот же результат.',
          },
          {
            question: 'Сколько занимает исправление неполного досье?',
            answer:
              'Несколько дней, если документ есть, и несколько недель, если нужна новая легализация или присяжный перевод. Поэтому на этом этапе важнее всего скорость реакции.',
          },
          {
            question: 'Что если задержка срывает февраль?',
            answer:
              'Перейти на следующий основной набор с уже собранным и легализованным досье. Вы стартуете с большим заделом, не переделывая подтверждённые шаги.',
          },
        ],
        keywords: [
          'отказ в учебной визе Россия',
          'неполное досье на визу',
          'задержка российской визы',
          'проблема с учебной визой',
          'что делать при отказе в визе',
          'учебная виза для тунисцев',
        ],
      },
    },
  },
  {
    slug: 'choisir-son-universite-russe',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Comment choisir son université en Russie : 6 critères concrets | RusStudy',
        description:
          "Classement, ville, langue d'enseignement, logement, coût : les critères qui comptent vraiment pour choisir une université russe, et ceux qui comptent moins qu'on ne croit.",
        h1: 'Comment choisir son université en Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Le prestige n'est pas le premier critère. Six éléments concrets à comparer avant d'arrêter votre choix.",
        intro:
          "Le choix se fait souvent sur un seul critère — le nom le plus connu — et se regrette parfois après l'arrivée. Une université moscovite prestigieuse mais saturée, chère et loin du campus n'est pas forcément un meilleur choix qu'une université de région où vous serez bien logé et bien suivi. Voici ce qu'il faut réellement comparer.",
        sections: [
          {
            heading: 'Les critères qui comptent vraiment',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Le statut : université d'État accréditée, condition de base pour l'équivalence de votre diplôme en Tunisie",
                  "L'accréditation de la filière précise que vous visez, et pas seulement de l'établissement",
                  "La langue d'enseignement du cursus : russe après année préparatoire, ou anglais, ce qui change le budget",
                  'La place en résidence universitaire et son tarif réel, premier poste après les frais de scolarité',
                  "Le coût de la vie de la ville : de 140 à 260 € par mois selon qu'on est en région ou à Moscou",
                  'La présence d’une communauté étudiante tunisienne, décisive les premiers mois',
                ],
              },
            ],
          },
          {
            heading: 'Ce qui compte moins qu’on ne croit',
            blocks: [
              {
                type: 'p',
                text: "Le classement mondial d'une université pèse peu sur votre vie quotidienne et sur la reconnaissance de votre diplôme en Tunisie. Ce qui compte pour l'équivalence, c'est le statut d'établissement d'État et l'accréditation de la filière — pas le rang international.",
              },
              {
                type: 'strong',
                text: "Une université de région avec des places disponibles vaut mieux qu'une université moscovite complète : vous ne gagnez rien à viser un établissement qui ne vous prendra pas cette année.",
              },
            ],
          },
          {
            heading: 'La méthode en trois étapes',
            blocks: [
              {
                type: 'ul',
                items: [
                  '1. Partez de la filière, pas de l’université : listez les établissements qui proposent votre spécialité, accréditée',
                  '2. Filtrez par budget total — frais de scolarité, logement et coût de la vie de la ville additionnés',
                  '3. Départagez sur la disponibilité réelle des places à la session visée, puis seulement sur la réputation',
                ],
              },
              { type: 'related', slug: 'meilleures-universites-russie-etudiants-tunisiens-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Faut-il privilégier Moscou ?',
            answer:
              "Pas systématiquement. Moscou offre plus d'universités et une vie étudiante dense, mais le logement et la vie courante y coûtent près du double d'une ville de région. Pour un budget serré, une université de région accréditée est souvent le choix le plus solide.",
          },
          {
            question: 'Le classement de l’université influence-t-il l’équivalence en Tunisie ?',
            answer:
              "Non. Ce qui détermine la reconnaissance, c'est le statut d'université d'État et l'accréditation de la filière, pas le rang dans un classement international.",
          },
          {
            question: 'Puis-je changer d’université après mon admission ?',
            answer:
              "C'est possible mais coûteux en temps : la lettre d'invitation est liée à un établissement précis, et en changer relance un délai complet de 30 à 45 jours. Mieux vaut trancher avant cette étape.",
          },
        ],
        keywords: [
          'choisir université russe',
          'meilleure université Russie tunisien',
          'critères choix université étranger',
          'université Moscou ou région',
          'accréditation université russe',
          'comparer universités Russie',
        ],
      },
      en: {
        title: 'How to Choose Your University in Russia: 6 Concrete Criteria | RusStudy',
        description:
          'Rankings, city, language of instruction, housing, cost: the criteria that genuinely matter when choosing a Russian university, and those that matter less than you think.',
        h1: 'How to choose your university in Russia',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Prestige is not the first criterion. Six concrete elements to compare before deciding.',
        intro:
          'The choice is often made on a single criterion — the best-known name — and sometimes regretted after arrival. A prestigious but oversubscribed Moscow university, expensive and far from campus, is not necessarily a better choice than a regional one where you will be well housed and well supported. Here is what to actually compare.',
        sections: [
          {
            heading: 'The criteria that genuinely matter',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Status: an accredited state university, the basic condition for recognition of your degree in Tunisia',
                  'Accreditation of the specific programme you want, not just of the institution',
                  'The language of instruction: Russian after a preparatory year, or English, which changes the budget',
                  'The place in university housing and its real rate, the first line after tuition',
                  'The cost of living in the city: from €140 to €260 a month depending on region or Moscow',
                  'The presence of a Tunisian student community, decisive in the first months',
                ],
              },
            ],
          },
          {
            heading: 'What matters less than you think',
            blocks: [
              {
                type: 'p',
                text: 'A global ranking weighs little on your daily life or on the recognition of your degree in Tunisia. What counts for equivalence is state institution status and programme accreditation — not the international rank.',
              },
              {
                type: 'strong',
                text: 'A regional university with available places beats a full Moscow one: there is nothing to gain from targeting an institution that will not take you this year.',
              },
            ],
          },
          {
            heading: 'The method in three steps',
            blocks: [
              {
                type: 'ul',
                items: [
                  '1. Start from the programme, not the university: list institutions offering your accredited specialty',
                  '2. Filter by total budget — tuition, housing and the city cost of living combined',
                  '3. Break the tie on real availability for the target intake, and only then on reputation',
                ],
              },
              { type: 'related', slug: 'meilleures-universites-russie-etudiants-tunisiens-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Should Moscow be the priority?',
            answer:
              'Not automatically. Moscow offers more universities and a denser student life, but housing and daily costs are close to double a regional city. On a tight budget, an accredited regional university is often the stronger choice.',
          },
          {
            question: 'Does the ranking affect recognition in Tunisia?',
            answer:
              'No. Recognition is determined by state university status and programme accreditation, not by position in an international ranking.',
          },
          {
            question: 'Can I change university after admission?',
            answer:
              'Possible but costly in time: the invitation letter is tied to one institution, and changing restarts a full 30 to 45 day wait. Better to decide before that step.',
          },
        ],
        keywords: [
          'choose Russian university',
          'best university Russia international student',
          'criteria choosing university abroad',
          'Moscow or regional university',
          'Russian university accreditation',
          'compare Russian universities',
        ],
      },
      ar: {
        title: 'كيف تختار جامعتك في روسيا: 6 معايير ملموسة | RusStudy',
        description:
          'التصنيف والمدينة ولغة التدريس والسكن والتكلفة: المعايير التي تهم فعلاً لاختيار جامعة روسية، وتلك التي تهم أقل مما يُعتقد.',
        h1: 'كيف تختار جامعتك في روسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'السمعة ليست المعيار الأول. ستة عناصر ملموسة تُقارن قبل الحسم.',
        intro:
          'يتم الاختيار غالبًا بمعيار واحد — الاسم الأشهر — ويُندم عليه أحيانًا بعد الوصول. جامعة موسكوفية مرموقة لكنها مكتظة وغالية وبعيدة عن الحرم ليست بالضرورة خيارًا أفضل من جامعة إقليمية تجد فيها سكنًا جيدًا ومتابعة جيدة. إليك ما يجب مقارنته فعلاً.',
        sections: [
          {
            heading: 'المعايير التي تهم فعلاً',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الوضع القانوني: جامعة حكومية معتمدة، وهو الشرط الأساسي لمعادلة شهادتك في تونس',
                  'اعتماد الاختصاص المقصود بعينه، لا المؤسسة فقط',
                  'لغة تدريس التكوين: الروسية بعد سنة تحضيرية أو الإنجليزية، وهذا يغير الميزانية',
                  'المقعد في الإقامة الجامعية وتعريفته الحقيقية، أول بند بعد رسوم الدراسة',
                  'تكلفة المعيشة في المدينة: من 140 إلى 260 € شهريًا حسب الإقليم أو موسكو',
                  'وجود جالية طلابية تونسية، وهو أمر حاسم في الأشهر الأولى',
                ],
              },
            ],
          },
          {
            heading: 'ما يهم أقل مما يُعتقد',
            blocks: [
              {
                type: 'p',
                text: 'التصنيف العالمي للجامعة لا يؤثر كثيرًا في حياتك اليومية ولا في الاعتراف بشهادتك في تونس. ما يهم في المعادلة هو صفة المؤسسة الحكومية واعتماد الاختصاص، لا الرتبة الدولية.',
              },
              {
                type: 'strong',
                text: 'جامعة إقليمية بمقاعد متاحة أفضل من جامعة موسكوفية مكتملة: لا تربح شيئًا باستهداف مؤسسة لن تقبلك هذه السنة.',
              },
            ],
          },
          {
            heading: 'المنهجية في ثلاث خطوات',
            blocks: [
              {
                type: 'ul',
                items: [
                  '1. انطلق من الاختصاص لا من الجامعة: اسرد المؤسسات التي تقترح تخصصك معتمَدًا',
                  '2. صفِّ حسب الميزانية الإجمالية — الرسوم والسكن وتكلفة معيشة المدينة مجتمعة',
                  '3. احسم بناءً على التوفر الفعلي للمقاعد في الدورة المستهدفة، ثم على السمعة فقط',
                ],
              },
              { type: 'related', slug: 'meilleures-universites-russie-etudiants-tunisiens-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تُفضَّل موسكو؟',
            answer:
              'ليس دائمًا. تقدم موسكو جامعات أكثر وحياة طلابية كثيفة، لكن السكن والمعيشة فيها يقاربان الضعف مقارنة بمدينة إقليمية. وبميزانية ضيقة تكون جامعة إقليمية معتمدة الخيار الأمتن غالبًا.',
          },
          {
            question: 'هل يؤثر تصنيف الجامعة في المعادلة بتونس؟',
            answer:
              'لا. ما يحدد الاعتراف هو صفة الجامعة الحكومية واعتماد الاختصاص، لا الرتبة في تصنيف دولي.',
          },
          {
            question: 'هل يمكنني تغيير الجامعة بعد القبول؟',
            answer:
              'ممكن لكنه مكلف من حيث الوقت: رسالة الدعوة مرتبطة بمؤسسة محددة، وتغييرها يعيد إطلاق أجل كامل من 30 إلى 45 يومًا. الأفضل الحسم قبل هذه المرحلة.',
          },
        ],
        keywords: [
          'اختيار الجامعة في روسيا',
          'أفضل جامعة روسية للتونسيين',
          'معايير اختيار جامعة بالخارج',
          'موسكو أم جامعة إقليمية',
          'اعتماد الجامعات الروسية',
          'مقارنة الجامعات الروسية',
        ],
      },
      ru: {
        title: 'Как выбрать вуз в России: 6 конкретных критериев | RusStudy',
        description:
          'Рейтинги, город, язык обучения, жильё, стоимость: критерии, которые действительно важны при выборе российского вуза, и те, что значат меньше, чем кажется.',
        h1: 'Как выбрать вуз в России',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Престиж — не первый критерий. Шесть конкретных пунктов для сравнения до решения.',
        intro:
          'Выбор часто делается по одному критерию — самому известному названию — и иногда о нём жалеют после приезда. Престижный, но переполненный московский вуз, дорогой и далёкий от кампуса, не обязательно лучше регионального, где вас хорошо разместят и будут сопровождать. Вот что стоит сравнивать на самом деле.',
        sections: [
          {
            heading: 'Критерии, которые действительно важны',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Статус: аккредитованный государственный вуз — базовое условие признания диплома в Тунисе',
                  'Аккредитация именно вашей программы, а не только учреждения',
                  'Язык обучения: русский после подготовительного года или английский, что меняет бюджет',
                  'Место в общежитии и его реальный тариф — первая статья после обучения',
                  'Стоимость жизни в городе: от 140 до 260 € в месяц в зависимости от региона или Москвы',
                  'Наличие тунисского студенческого сообщества, решающее в первые месяцы',
                ],
              },
            ],
          },
          {
            heading: 'Что значит меньше, чем кажется',
            blocks: [
              {
                type: 'p',
                text: 'Мировой рейтинг мало влияет на вашу повседневность и на признание диплома в Тунисе. Для эквивалентности важны статус государственного вуза и аккредитация программы, а не международная позиция.',
              },
              {
                type: 'strong',
                text: 'Региональный вуз со свободными местами лучше переполненного московского: нет смысла целиться в учреждение, которое не возьмёт вас в этом году.',
              },
            ],
          },
          {
            heading: 'Метод в три шага',
            blocks: [
              {
                type: 'ul',
                items: [
                  '1. Идите от программы, а не от вуза: составьте список учреждений с вашей аккредитованной специальностью',
                  '2. Отфильтруйте по общему бюджету — обучение, жильё и стоимость жизни города вместе',
                  '3. Решите по реальной доступности мест на нужный набор, и только потом по репутации',
                ],
              },
              { type: 'related', slug: 'meilleures-universites-russie-etudiants-tunisiens-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Стоит ли выбирать Москву?',
            answer:
              'Не автоматически. В Москве больше вузов и насыщеннее студенческая жизнь, но жильё и быт стоят почти вдвое дороже, чем в региональном городе. При ограниченном бюджете аккредитованный региональный вуз часто надёжнее.',
          },
          {
            question: 'Влияет ли рейтинг на признание в Тунисе?',
            answer:
              'Нет. Признание определяется статусом государственного вуза и аккредитацией программы, а не местом в международном рейтинге.',
          },
          {
            question: 'Можно ли сменить вуз после зачисления?',
            answer:
              'Можно, но дорого по времени: приглашение привязано к конкретному учреждению, и смена перезапускает полные 30–45 дней. Лучше решить до этого этапа.',
          },
        ],
        keywords: [
          'выбрать вуз в России',
          'лучший вуз России для иностранца',
          'критерии выбора вуза за рубежом',
          'Москва или региональный вуз',
          'аккредитация российских вузов',
          'сравнение российских вузов',
        ],
      },
    },
  },
  {
    slug: 'etudier-medecine-dentaire-russie',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Étudier la médecine dentaire en Russie avec un bac tunisien | RusStudy',
        description:
          'Cursus de 5 ans, 3 200 € par an, admission sur dossier sans concours : ce que recouvre vraiment la médecine dentaire en Russie pour un bachelier tunisien.',
        h1: 'Étudier la médecine dentaire en Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          'Cinq ans, 3 200 € par an, une admission sur dossier. Le point complet sur la filière dentaire.',
        intro:
          "La médecine dentaire est l'une des spécialités les plus demandées par les bacheliers tunisiens, et l'une des plus verrouillées en Tunisie. En Russie, elle se prépare en cinq ans dans des universités d'État, avec une admission sur dossier scolaire plutôt que par concours éliminatoire.",
        sections: [
          {
            heading: 'Le cursus en pratique',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Durée : 5 ans, précédés de l’année préparatoire de langue pour les cursus en russe',
                  'Frais de scolarité : à partir de 3 200 € par an selon l’université et la ville',
                  'Admission : sur dossier scolaire, sans concours d’entrée éliminatoire',
                  'Pratique clinique intégrée au cursus dans les cliniques universitaires',
                ],
              },
              {
                type: 'p',
                text: "L'absence de concours d'entrée ne signifie pas des études faciles : la sélection se déplace vers les examens tout au long du cursus, et la pratique dentaire exige une régularité constante.",
              },
            ],
          },
          {
            heading: 'Ce qui distingue le dentaire de la médecine générale',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Un cursus plus court : 5 ans contre 6 pour la médecine générale',
                  'Une entrée en pratique clinique plus précoce, sur patients dès les premières années',
                  'Une dimension technique et manuelle importante, au-delà des connaissances théoriques',
                  'Des débouchés orientés vers l’exercice libéral plus que vers l’hôpital',
                ],
              },
            ],
          },
          {
            heading: 'Équivalence et exercice au retour',
            blocks: [
              {
                type: 'p',
                text: "Comme pour toutes les professions de santé, la reconnaissance du diplôme et le droit d'exercer sont deux étapes distinctes. Le diplôme d'État d'une université russe accréditée suit une procédure d'équivalence établie ; l'exercice suppose ensuite une étape de validation.",
              },
              {
                type: 'strong',
                text: "Vérifiez avant l'inscription que la filière dentaire précise est accréditée, et pas seulement l'université : c'est le point qui bloque les dossiers au retour.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Combien de temps durent les études dentaires en Russie ?',
            answer:
              "Cinq ans, auxquels s'ajoute l'année préparatoire de langue pour les cursus enseignés en russe. C'est un an de moins que la médecine générale.",
          },
          {
            question: 'Y a-t-il un concours d’entrée ?',
            answer:
              "Non, l'admission se fait sur dossier scolaire. La sélection s'opère pendant le cursus, par les examens annuels.",
          },
          {
            question: 'Combien coûte une année de médecine dentaire ?',
            answer:
              'À partir de 3 200 € par an de frais de scolarité, auxquels s’ajoutent le logement — dès 30 € par mois en résidence en région — et la vie courante.',
          },
        ],
        keywords: [
          'médecine dentaire Russie',
          'études dentaire Russie tunisien',
          'devenir dentiste Russie',
          'prix études dentaires Russie',
          'dentaire sans concours',
          'chirurgie dentaire Russie bac',
        ],
      },
      en: {
        title: 'Studying Dentistry in Russia with a Tunisian Baccalaureate | RusStudy',
        description:
          'A 5-year programme, €3,200 a year, admission on academic record without an entrance exam: what dentistry in Russia really involves for a Tunisian school-leaver.',
        h1: 'Studying dentistry in Russia',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Five years, €3,200 a year, admission on record. The full picture on the dentistry track.',
        intro:
          'Dentistry is one of the most sought-after specialties among Tunisian school-leavers, and one of the most locked in Tunisia. In Russia it takes five years at state universities, with admission on academic record rather than an eliminatory entrance exam.',
        sections: [
          {
            heading: 'The programme in practice',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Length: 5 years, preceded by the preparatory language year for Russian-taught tracks',
                  'Tuition: from €3,200 a year depending on the university and city',
                  'Admission: on academic record, with no eliminatory entrance exam',
                  'Clinical practice built into the programme in university clinics',
                ],
              },
              {
                type: 'p',
                text: 'No entrance exam does not mean easy studies: selection shifts to exams throughout the programme, and dental practice demands constant consistency.',
              },
            ],
          },
          {
            heading: 'How dentistry differs from general medicine',
            blocks: [
              {
                type: 'ul',
                items: [
                  'A shorter programme: 5 years against 6 for general medicine',
                  'Earlier entry into clinical practice, with patients from the first years',
                  'A significant technical and manual dimension, beyond theoretical knowledge',
                  'Career paths oriented towards private practice more than hospital work',
                ],
              },
            ],
          },
          {
            heading: 'Recognition and practice on return',
            blocks: [
              {
                type: 'p',
                text: 'As with all health professions, degree recognition and the right to practise are two separate steps. A state diploma from an accredited Russian university follows an established equivalence procedure; practising then requires a validation step.',
              },
              {
                type: 'strong',
                text: 'Check before enrolling that the specific dentistry programme is accredited, not just the university: that is the point that blocks files on return.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'How long does dentistry take in Russia?',
            answer:
              'Five years, plus the preparatory language year for Russian-taught programmes. That is one year less than general medicine.',
          },
          {
            question: 'Is there an entrance exam?',
            answer:
              'No, admission is on academic record. Selection happens during the programme, through annual exams.',
          },
          {
            question: 'What does a year of dentistry cost?',
            answer:
              'From €3,200 a year in tuition, plus housing — from €30 a month in regional residences — and daily living.',
          },
        ],
        keywords: [
          'dentistry in Russia',
          'study dentistry Russia international',
          'become a dentist in Russia',
          'dentistry tuition Russia',
          'dentistry without entrance exam',
          'dental surgery Russia',
        ],
      },
      ar: {
        title: 'دراسة طب الأسنان في روسيا ببكالوريا تونسية | RusStudy',
        description:
          'تكوين من 5 سنوات بـ 3200 € سنويًا وقبول على أساس الملف دون مناظرة: ما يشمله فعلاً طب الأسنان في روسيا لحامل البكالوريا التونسي.',
        h1: 'دراسة طب الأسنان في روسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'خمس سنوات و3200 € سنويًا وقبول على الملف. صورة كاملة عن اختصاص طب الأسنان.',
        intro:
          'طب الأسنان من أكثر الاختصاصات طلبًا لدى حاملي البكالوريا التونسيين، ومن أكثرها انغلاقًا في تونس. في روسيا يُدرَس في خمس سنوات بجامعات حكومية، بقبول على أساس الملف الدراسي بدل مناظرة إقصائية.',
        sections: [
          {
            heading: 'التكوين عمليًا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'المدة: 5 سنوات تسبقها السنة التحضيرية للغة في التكوينات بالروسية',
                  'رسوم الدراسة: ابتداءً من 3200 € سنويًا حسب الجامعة والمدينة',
                  'القبول: على أساس الملف الدراسي دون مناظرة دخول إقصائية',
                  'تطبيق سريري مدمج في التكوين داخل العيادات الجامعية',
                ],
              },
              {
                type: 'p',
                text: 'غياب مناظرة الدخول لا يعني دراسة سهلة: ينتقل الانتقاء إلى الامتحانات طيلة التكوين، وممارسة طب الأسنان تتطلب مواظبة دائمة.',
              },
            ],
          },
          {
            heading: 'ما يميز طب الأسنان عن الطب العام',
            blocks: [
              {
                type: 'ul',
                items: [
                  'تكوين أقصر: 5 سنوات مقابل 6 للطب العام',
                  'دخول أبكر إلى الممارسة السريرية مع المرضى منذ السنوات الأولى',
                  'بعد تقني ويدوي مهم إلى جانب المعارف النظرية',
                  'آفاق موجهة نحو الممارسة الحرة أكثر من المستشفى',
                ],
              },
            ],
          },
          {
            heading: 'المعادلة والممارسة عند العودة',
            blocks: [
              {
                type: 'p',
                text: 'كما في كل مهن الصحة، الاعتراف بالشهادة وحق الممارسة مرحلتان منفصلتان. شهادة الدولة من جامعة روسية معتمدة تتبع إجراء معادلة مستقرًا، ثم تتطلب الممارسة مرحلة مصادقة.',
              },
              {
                type: 'strong',
                text: 'تحقق قبل الترسيم أن اختصاص طب الأسنان بعينه معتمد، لا الجامعة فقط: هذه هي النقطة التي تعطل الملفات عند العودة.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'كم تدوم دراسة طب الأسنان في روسيا؟',
            answer: 'خمس سنوات، تضاف إليها السنة التحضيرية للغة في التكوينات بالروسية. أي سنة أقل من الطب العام.',
          },
          {
            question: 'هل توجد مناظرة دخول؟',
            answer: 'لا، القبول على أساس الملف الدراسي. ويتم الانتقاء أثناء التكوين عبر الامتحانات السنوية.',
          },
          {
            question: 'كم تكلف سنة من طب الأسنان؟',
            answer:
              'ابتداءً من 3200 € سنويًا رسوم دراسة، يضاف إليها السكن — من 30 € شهريًا في إقامات الأقاليم — والمعيشة اليومية.',
          },
        ],
        keywords: [
          'طب الأسنان في روسيا',
          'دراسة طب الأسنان للتونسيين',
          'أن تصبح طبيب أسنان في روسيا',
          'أسعار دراسة طب الأسنان',
          'طب الأسنان دون مناظرة',
          'جراحة الأسنان روسيا',
        ],
      },
      ru: {
        title: 'Учёба на стоматолога в России с тунисским аттестатом | RusStudy',
        description:
          'Пять лет, 3 200 € в год, зачисление по академическому досье без вступительного конкурса: что на деле представляет стоматология в России.',
        h1: 'Учёба на стоматолога в России',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Пять лет, 3 200 € в год, зачисление по досье. Полная картина по стоматологии.',
        intro:
          'Стоматология — одна из самых востребованных специальностей у тунисских выпускников и одна из самых закрытых в Тунисе. В России она изучается пять лет в государственных вузах, с зачислением по академическому досье, а не по отсеивающему конкурсу.',
        sections: [
          {
            heading: 'Программа на практике',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Длительность: 5 лет, до них — подготовительный языковой год для русскоязычных программ',
                  'Стоимость обучения: от 3 200 € в год в зависимости от вуза и города',
                  'Зачисление: по академическому досье, без отсеивающего вступительного экзамена',
                  'Клиническая практика встроена в программу в университетских клиниках',
                ],
              },
              {
                type: 'p',
                text: 'Отсутствие вступительного конкурса не означает лёгкой учёбы: отбор смещается на экзамены в течение всей программы, а стоматология требует постоянной регулярности.',
              },
            ],
          },
          {
            heading: 'Чем стоматология отличается от общей медицины',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Более короткая программа: 5 лет против 6 у общей медицины',
                  'Более раннее начало клинической практики, с пациентами с первых лет',
                  'Значительная техническая и мануальная составляющая помимо теории',
                  'Перспективы скорее в частной практике, чем в больнице',
                ],
              },
            ],
          },
          {
            heading: 'Признание и практика по возвращении',
            blocks: [
              {
                type: 'p',
                text: 'Как и во всех медицинских профессиях, признание диплома и право практиковать — два разных этапа. Диплом государственного образца аккредитованного российского вуза проходит установленную процедуру; практика затем требует аттестации.',
              },
              {
                type: 'strong',
                text: 'Перед зачислением убедитесь, что аккредитована именно стоматологическая программа, а не только вуз: именно это блокирует дела по возвращении.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Сколько длится стоматология в России?',
            answer:
              'Пять лет плюс подготовительный языковой год для русскоязычных программ. Это на год меньше общей медицины.',
          },
          {
            question: 'Есть ли вступительный экзамен?',
            answer: 'Нет, зачисление по академическому досье. Отбор идёт в ходе программы через ежегодные экзамены.',
          },
          {
            question: 'Сколько стоит год стоматологии?',
            answer:
              'От 3 200 € в год за обучение, плюс жильё — от 30 € в месяц в региональных общежитиях — и повседневные расходы.',
          },
        ],
        keywords: [
          'стоматология в России',
          'учёба на стоматолога для иностранцев',
          'стать стоматологом в России',
          'стоимость стоматологии в России',
          'стоматология без конкурса',
          'зубная хирургия Россия',
        ],
      },
    },
  },
  {
    slug: 'etudier-pharmacie-russie-bac-tunisien',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Étudier la pharmacie en Russie avec un bac tunisien | RusStudy',
        description:
          'Cursus de 5 ans, 3 200 € par an, admission sur dossier : débouchés, contenu du cursus et reconnaissance du diplôme de pharmacie obtenu en Russie.',
        h1: 'Étudier la pharmacie en Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt: 'Cinq ans, 3 200 € par an, et des débouchés plus larges que la seule officine.',
        intro:
          "La pharmacie est souvent choisie par défaut, après un score insuffisant en médecine. C'est dommage, car c'est une filière avec ses propres débouchés — officine, industrie pharmaceutique, laboratoires de contrôle — et un cursus plus court que la médecine générale.",
        sections: [
          {
            heading: 'Le cursus en pratique',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Durée : 5 ans, précédés de l’année préparatoire de langue pour les cursus en russe',
                  'Frais de scolarité : à partir de 3 200 € par an selon l’université et la ville',
                  'Admission : sur dossier scolaire, sans concours d’entrée',
                  'Enseignements dominants : chimie, pharmacologie, botanique médicale, contrôle qualité',
                ],
              },
            ],
          },
          {
            heading: 'Des débouchés plus larges qu’on ne le pense',
            blocks: [
              {
                type: 'ul',
                items: [
                  'L’officine, voie la plus connue mais pas la seule',
                  'L’industrie pharmaceutique : production, formulation, assurance qualité',
                  'Les laboratoires de contrôle et d’analyse',
                  'La recherche et le développement de médicaments',
                ],
              },
              {
                type: 'p',
                text: "Si la chimie vous intéresse davantage que la clinique, la pharmacie est un choix positif et non un repli : le raisonnement scientifique y est central.",
              },
            ],
          },
          {
            heading: 'Équivalence et exercice au retour',
            blocks: [
              {
                type: 'p',
                text: "Comme pour la médecine et le dentaire, la reconnaissance du diplôme et l'autorisation d'exercer sont deux démarches distinctes. Assurez-vous avant l'inscription que la filière pharmacie est accréditée dans l'université visée.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'La pharmacie est-elle plus accessible que la médecine en Russie ?',
            answer:
              "Les deux filières recrutent sur dossier scolaire, sans concours éliminatoire. La pharmacie dure cinq ans contre six pour la médecine générale, et ses frais de scolarité sont légèrement inférieurs.",
          },
          {
            question: 'Quelles matières dominent le cursus ?',
            answer:
              'La chimie sous toutes ses formes, la pharmacologie, la botanique médicale et le contrôle qualité. Le profil scientifique compte davantage que la dimension clinique.',
          },
          {
            question: 'Peut-on travailler en industrie après ce diplôme ?',
            answer:
              "Oui. L'industrie pharmaceutique, les laboratoires de contrôle et la recherche constituent des débouchés réels, au-delà de l'officine.",
          },
        ],
        keywords: [
          'pharmacie Russie',
          'études pharmacie Russie tunisien',
          'devenir pharmacien Russie',
          'prix études pharmacie Russie',
          'pharmacie sans concours',
          'débouchés pharmacie Russie',
        ],
      },
      en: {
        title: 'Studying Pharmacy in Russia with a Tunisian Baccalaureate | RusStudy',
        description:
          'A 5-year programme, €3,200 a year, admission on record: career paths, course content and recognition of a pharmacy degree earned in Russia.',
        h1: 'Studying pharmacy in Russia',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Five years, €3,200 a year, and career paths wider than the pharmacy counter.',
        intro:
          'Pharmacy is often chosen by default, after a score too low for medicine. That is a shame, because it is a track with its own outlets — retail, pharmaceutical industry, control laboratories — and a shorter programme than general medicine.',
        sections: [
          {
            heading: 'The programme in practice',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Length: 5 years, preceded by the preparatory language year for Russian-taught tracks',
                  'Tuition: from €3,200 a year depending on the university and city',
                  'Admission: on academic record, with no entrance exam',
                  'Core subjects: chemistry, pharmacology, medical botany, quality control',
                ],
              },
            ],
          },
          {
            heading: 'Wider career paths than expected',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Retail pharmacy, the best-known route but not the only one',
                  'Pharmaceutical industry: production, formulation, quality assurance',
                  'Control and analysis laboratories',
                  'Drug research and development',
                ],
              },
              {
                type: 'p',
                text: 'If chemistry interests you more than clinical work, pharmacy is a positive choice rather than a fallback: scientific reasoning is central to it.',
              },
            ],
          },
          {
            heading: 'Recognition and practice on return',
            blocks: [
              {
                type: 'p',
                text: 'As with medicine and dentistry, degree recognition and authorisation to practise are two separate procedures. Make sure before enrolling that the pharmacy programme is accredited at the target university.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is pharmacy more accessible than medicine in Russia?',
            answer:
              'Both recruit on academic record, with no eliminatory exam. Pharmacy runs five years against six for general medicine, and its tuition is slightly lower.',
          },
          {
            question: 'Which subjects dominate the programme?',
            answer:
              'Chemistry in all its forms, pharmacology, medical botany and quality control. A scientific profile matters more than the clinical dimension.',
          },
          {
            question: 'Can I work in industry with this degree?',
            answer:
              'Yes. The pharmaceutical industry, control laboratories and research are real career paths beyond retail pharmacy.',
          },
        ],
        keywords: [
          'pharmacy in Russia',
          'study pharmacy Russia international',
          'become a pharmacist in Russia',
          'pharmacy tuition Russia',
          'pharmacy without entrance exam',
          'pharmacy careers Russia',
        ],
      },
      ar: {
        title: 'دراسة الصيدلة في روسيا ببكالوريا تونسية | RusStudy',
        description:
          'تكوين من 5 سنوات بـ 3200 € سنويًا وقبول على أساس الملف: الآفاق ومحتوى التكوين والاعتراف بشهادة الصيدلة من روسيا.',
        h1: 'دراسة الصيدلة في روسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'خمس سنوات و3200 € سنويًا وآفاق أوسع من الصيدلية وحدها.',
        intro:
          'كثيرًا ما تُختار الصيدلة تلقائيًا بعد مجموع غير كافٍ في الطب. وهذا مؤسف، فهي شعبة بآفاقها الخاصة — الصيدلية والصناعة الصيدلانية ومخابر المراقبة — وبتكوين أقصر من الطب العام.',
        sections: [
          {
            heading: 'التكوين عمليًا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'المدة: 5 سنوات تسبقها السنة التحضيرية للغة في التكوينات بالروسية',
                  'رسوم الدراسة: ابتداءً من 3200 € سنويًا حسب الجامعة والمدينة',
                  'القبول: على أساس الملف الدراسي دون مناظرة دخول',
                  'المواد الأساسية: الكيمياء وعلم الأدوية والنبات الطبي ومراقبة الجودة',
                ],
              },
            ],
          },
          {
            heading: 'آفاق أوسع مما يُعتقد',
            blocks: [
              {
                type: 'ul',
                items: [
                  'الصيدلية، وهي الطريق الأشهر لا الوحيد',
                  'الصناعة الصيدلانية: الإنتاج والتركيب وضمان الجودة',
                  'مخابر المراقبة والتحليل',
                  'البحث وتطوير الأدوية',
                ],
              },
              {
                type: 'p',
                text: 'إذا كانت الكيمياء تستهويك أكثر من العمل السريري، فالصيدلة اختيار إيجابي لا تراجعي: التفكير العلمي في صلبها.',
              },
            ],
          },
          {
            heading: 'المعادلة والممارسة عند العودة',
            blocks: [
              {
                type: 'p',
                text: 'كما في الطب وطب الأسنان، الاعتراف بالشهادة والترخيص بالممارسة إجراءان منفصلان. تأكد قبل الترسيم أن اختصاص الصيدلة معتمد في الجامعة المستهدفة.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل الصيدلة أيسر من الطب في روسيا؟',
            answer:
              'كلا الاختصاصين يقبل على أساس الملف الدراسي دون مناظرة إقصائية. الصيدلة تدوم خمس سنوات مقابل ست للطب العام، ورسومها أقل قليلاً.',
          },
          {
            question: 'ما المواد المهيمنة على التكوين؟',
            answer:
              'الكيمياء بكل فروعها وعلم الأدوية والنبات الطبي ومراقبة الجودة. الملمح العلمي أهم من البعد السريري.',
          },
          {
            question: 'هل يمكن العمل في الصناعة بهذه الشهادة؟',
            answer: 'نعم. الصناعة الصيدلانية ومخابر المراقبة والبحث آفاق حقيقية إلى جانب الصيدلية.',
          },
        ],
        keywords: [
          'الصيدلة في روسيا',
          'دراسة الصيدلة للتونسيين',
          'أن تصبح صيدليًا في روسيا',
          'أسعار دراسة الصيدلة',
          'الصيدلة دون مناظرة',
          'آفاق الصيدلة في روسيا',
        ],
      },
      ru: {
        title: 'Учёба на фармацевта в России с тунисским аттестатом | RusStudy',
        description:
          'Пять лет, 3 200 € в год, зачисление по досье: карьерные пути, содержание программы и признание фармацевтического диплома из России.',
        h1: 'Учёба на фармацевта в России',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Пять лет, 3 200 € в год и перспективы шире, чем только аптека.',
        intro:
          'Фармацию часто выбирают по умолчанию, после недостаточного балла на медицину. Это досадно: у направления свои перспективы — аптека, фармпромышленность, контрольные лаборатории — и программа короче общей медицины.',
        sections: [
          {
            heading: 'Программа на практике',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Длительность: 5 лет, до них — подготовительный языковой год для русскоязычных программ',
                  'Стоимость: от 3 200 € в год в зависимости от вуза и города',
                  'Зачисление: по академическому досье, без вступительного экзамена',
                  'Основные предметы: химия, фармакология, лекарственная ботаника, контроль качества',
                ],
              },
            ],
          },
          {
            heading: 'Перспективы шире, чем кажется',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Аптека — самый известный путь, но не единственный',
                  'Фармпромышленность: производство, разработка форм, обеспечение качества',
                  'Контрольные и аналитические лаборатории',
                  'Исследования и разработка лекарств',
                ],
              },
              {
                type: 'p',
                text: 'Если химия интересует вас больше клинической работы, фармация — положительный выбор, а не отступление: научное мышление здесь в основе.',
              },
            ],
          },
          {
            heading: 'Признание и практика по возвращении',
            blocks: [
              {
                type: 'p',
                text: 'Как в медицине и стоматологии, признание диплома и допуск к практике — разные процедуры. До зачисления убедитесь, что фармацевтическая программа аккредитована в выбранном вузе.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Фармация доступнее медицины в России?',
            answer:
              'Оба направления зачисляют по академическому досье, без отсеивающего конкурса. Фармация длится пять лет против шести у общей медицины, и обучение немного дешевле.',
          },
          {
            question: 'Какие предметы преобладают?',
            answer:
              'Химия во всех видах, фармакология, лекарственная ботаника и контроль качества. Научный профиль важнее клинической составляющей.',
          },
          {
            question: 'Можно ли работать в промышленности с этим дипломом?',
            answer: 'Да. Фармпромышленность, контрольные лаборатории и исследования — реальные пути помимо аптеки.',
          },
        ],
        keywords: [
          'фармация в России',
          'учёба на фармацевта для иностранцев',
          'стать фармацевтом в России',
          'стоимость фармации в России',
          'фармация без конкурса',
          'карьера фармацевта Россия',
        ],
      },
    },
  },
  {
    slug: 'guide-des-parents-etudes-russie',
    publishedAt: '2026-09-15',
    copy: {
      fr: {
        title: 'Guide des parents : faire étudier son enfant en Russie | RusStudy',
        description:
          "Sécurité, budget, reconnaissance du diplôme, encadrement sur place : les réponses aux questions que se posent les parents tunisiens avant d'autoriser un départ en Russie.",
        h1: 'Le guide des parents : ce qu’il faut savoir avant de dire oui',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          'Sécurité, budget réel, encadrement, diplôme : les quatre questions que posent les parents, traitées sans détour.',
        intro:
          "Dans la grande majorité des dossiers que nous accompagnons, l'étudiant est convaincu bien avant ses parents. C'est normal : ce sont eux qui financent, et eux qui s'inquiètent. Cette page s'adresse directement aux parents, et traite les quatre questions qui reviennent systématiquement — sans enjoliver.",
        sections: [
          {
            heading: '« Est-ce que mon enfant sera en sécurité ? »',
            blocks: [
              {
                type: 'p',
                text: "C'est la première question, et elle est légitime. Concrètement, un étudiant logé en résidence universitaire vit dans un environnement à accès contrôlé, avec présence de sécurité et enregistrement des entrées et sorties.",
              },
              {
                type: 'ul',
                items: [
                  'Un tuteur bilingue accueille votre enfant à l’aéroport et le conduit à sa résidence',
                  'La chambre est pré-réservée avant le départ : il n’arrive jamais sans solution de logement',
                  'Une assistance reste joignable 24h/24 pendant toute l’année',
                  'Une communauté étudiante tunisienne existe dans chaque ville partenaire',
                ],
              },
            ],
          },
          {
            heading: '« Combien cela va-t-il vraiment coûter ? »',
            blocks: [
              {
                type: 'p',
                text: "Le budget se décompose en trois postes, et aucun ne doit être découvert après le départ.",
              },
              {
                type: 'ul',
                items: [
                  'Frais de scolarité : de 2 200 à 3 500 € par an selon la filière',
                  'Logement : de 30 à 90 € par mois en résidence universitaire selon la ville',
                  'Vie courante : de 140 à 260 € par mois, repas et transport compris',
                  'Frais uniques la première année : environ 900 € pour le visa, les traductions et le billet',
                  'Assurance médicale obligatoire : environ 180 € par an, à renouveler',
                ],
              },
              {
                type: 'strong',
                text: "Comparez ce total au coût d'une école privée en Tunisie pour la même spécialité : c'est la comparaison qui convainc le plus souvent les familles.",
              },
            ],
          },
          {
            heading: '« Le diplôme sera-t-il reconnu ? »',
            blocks: [
              {
                type: 'p',
                text: "Un diplôme d'État délivré par une université publique russe accréditée suit une procédure de reconnaissance établie en Tunisie. Le point déterminant n'est pas le pays mais le statut de l'établissement : exigez qu'on vous confirme par écrit qu'il s'agit d'une université d'État et que la filière visée est accréditée.",
              },
              {
                type: 'p',
                text: "Pour les professions de santé, prévoyez une étape de validation supplémentaire avant l'exercice, comme dans la plupart des pays.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Mon enfant pourra-t-il rentrer en Tunisie pendant ses études ?',
            answer:
              "Oui, les retours sont possibles pendant les vacances universitaires. Prévoyez le coût des billets dans le budget annuel : ils ne sont pas inclus dans les frais de scolarité.",
          },
          {
            question: 'Comment garder un contact régulier ?',
            answer:
              "Une carte SIM locale s'obtient dès les premiers jours, avec des forfaits data bon marché. L'université fournit généralement un accès internet en résidence.",
          },
          {
            question: 'Que se passe-t-il si mon enfant a un problème sur place ?',
            answer:
              "Le tuteur reste le contact direct, joignable en continu, et fait le lien avec l'université, les services de santé ou l'administration selon la situation.",
          },
        ],
        keywords: [
          'parents études à l’étranger',
          'sécurité étudiant Russie',
          'budget études Russie famille',
          'faire étudier son enfant en Russie',
          'conseils parents études Russie',
          'encadrement étudiant tunisien Russie',
        ],
      },
      en: {
        title: 'A Parents’ Guide: Sending Your Child to Study in Russia | RusStudy',
        description:
          'Safety, budget, degree recognition, on-site support: answers to the questions Tunisian parents ask before agreeing to a departure for Russia.',
        h1: 'The parents’ guide: what to know before saying yes',
        publishedLabel: 'Published: September 2026',
        excerpt: 'Safety, real budget, support, degree: the four questions parents ask, answered directly.',
        intro:
          'In the vast majority of files we support, the student is convinced long before the parents. That is normal: they are the ones funding it, and the ones worrying. This page speaks directly to parents and addresses the four recurring questions — without embellishment.',
        sections: [
          {
            heading: '"Will my child be safe?"',
            blocks: [
              {
                type: 'p',
                text: 'This is the first question, and a legitimate one. Concretely, a student in university housing lives in a controlled-access environment, with security on site and entries and exits logged.',
              },
              {
                type: 'ul',
                items: [
                  'A bilingual tutor meets your child at the airport and takes them to their residence',
                  'The room is pre-booked before departure: they never arrive without housing',
                  'Assistance remains reachable 24/7 throughout the year',
                  'A Tunisian student community exists in every partner city',
                ],
              },
            ],
          },
          {
            heading: '"What will it really cost?"',
            blocks: [
              {
                type: 'p',
                text: 'The budget breaks down into three lines, and none should be discovered after departure.',
              },
              {
                type: 'ul',
                items: [
                  'Tuition: €2,200 to €3,500 a year depending on the programme',
                  'Housing: €30 to €90 a month in university residence depending on the city',
                  'Daily living: €140 to €260 a month, meals and transport included',
                  'One-off first-year costs: around €900 for visa, translations and flight',
                  'Mandatory medical insurance: around €180 a year, renewable',
                ],
              },
              {
                type: 'strong',
                text: 'Compare this total with a private school in Tunisia for the same specialty: that is the comparison that most often convinces families.',
              },
            ],
          },
          {
            heading: '"Will the degree be recognised?"',
            blocks: [
              {
                type: 'p',
                text: 'A state diploma issued by an accredited Russian public university follows an established recognition procedure in Tunisia. The decisive factor is not the country but the status of the institution: insist on written confirmation that it is a state university and that the target programme is accredited.',
              },
              {
                type: 'p',
                text: 'For health professions, expect an additional validation step before practising, as in most countries.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can my child come home during their studies?',
            answer:
              'Yes, trips home are possible during university holidays. Budget the flights annually: they are not included in tuition.',
          },
          {
            question: 'How do we stay in regular contact?',
            answer:
              'A local SIM card is obtained within the first days, with cheap data plans. The university generally provides internet access in the residence.',
          },
          {
            question: 'What if my child has a problem on site?',
            answer:
              'The tutor remains the direct contact, reachable continuously, liaising with the university, health services or administration as needed.',
          },
        ],
        keywords: [
          'parents guide studying abroad',
          'student safety Russia',
          'family budget studies Russia',
          'sending child to study in Russia',
          'parents advice study abroad',
          'student support Russia',
        ],
      },
      ar: {
        title: 'دليل الأولياء: إرسال ابنك للدراسة في روسيا | RusStudy',
        description:
          'الأمن والميزانية والاعتراف بالشهادة والتأطير في عين المكان: أجوبة عن أسئلة الأولياء التونسيين قبل الموافقة على السفر إلى روسيا.',
        h1: 'دليل الأولياء: ما يجب معرفته قبل الموافقة',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt: 'الأمن والميزانية الحقيقية والتأطير والشهادة: أربعة أسئلة يطرحها الأولياء، بأجوبة مباشرة.',
        intro:
          'في الغالبية العظمى من الملفات التي نرافقها، يكون الطالب مقتنعًا قبل والديه بكثير. وهذا طبيعي: هما من يموّل وهما من يقلق. تخاطب هذه الصفحة الأولياء مباشرة وتعالج الأسئلة الأربعة المتكررة دون تجميل.',
        sections: [
          {
            heading: '«هل سيكون ابني في أمان؟»',
            blocks: [
              {
                type: 'p',
                text: 'هذا أول سؤال وهو مشروع. عمليًا، الطالب المقيم في إقامة جامعية يعيش في فضاء بدخول مراقَب مع حضور أمني وتسجيل للدخول والخروج.',
              },
              {
                type: 'ul',
                items: [
                  'مرشد ثنائي اللغة يستقبل ابنك في المطار ويوصله إلى إقامته',
                  'الغرفة محجوزة قبل السفر: لا يصل أبدًا دون حل سكني',
                  'مساعدة متاحة على مدار الساعة طيلة السنة',
                  'جالية طلابية تونسية موجودة في كل مدينة شريكة',
                ],
              },
            ],
          },
          {
            heading: '«كم سيكلف فعلاً؟»',
            blocks: [
              { type: 'p', text: 'تنقسم الميزانية إلى ثلاثة بنود، ولا ينبغي اكتشاف أي منها بعد السفر.' },
              {
                type: 'ul',
                items: [
                  'رسوم الدراسة: من 2200 إلى 3500 € سنويًا حسب الاختصاص',
                  'السكن: من 30 إلى 90 € شهريًا في الإقامة الجامعية حسب المدينة',
                  'المعيشة اليومية: من 140 إلى 260 € شهريًا بما فيها الأكل والنقل',
                  'مصاريف وحيدة في السنة الأولى: حوالي 900 € للتأشيرة والترجمات والتذكرة',
                  'التأمين الصحي الإجباري: حوالي 180 € سنويًا ويُجدَّد',
                ],
              },
              {
                type: 'strong',
                text: 'قارن هذا المجموع بكلفة مدرسة خاصة في تونس لنفس الاختصاص: هذه هي المقارنة التي تقنع العائلات غالبًا.',
              },
            ],
          },
          {
            heading: '«هل ستكون الشهادة معترفًا بها؟»',
            blocks: [
              {
                type: 'p',
                text: 'شهادة دولة صادرة عن جامعة عمومية روسية معتمدة تتبع إجراء اعتراف مستقرًا في تونس. والعامل الحاسم ليس البلد بل وضع المؤسسة: اطلب تأكيدًا كتابيًا بأنها جامعة حكومية وأن الاختصاص المقصود معتمد.',
              },
              {
                type: 'p',
                text: 'وفي مهن الصحة، توقّع مرحلة مصادقة إضافية قبل الممارسة، كما في أغلب البلدان.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكن لابني العودة إلى تونس أثناء دراسته؟',
            answer:
              'نعم، العودة ممكنة خلال العطل الجامعية. احسب كلفة التذاكر ضمن الميزانية السنوية: فهي غير مشمولة في رسوم الدراسة.',
          },
          {
            question: 'كيف نحافظ على اتصال منتظم؟',
            answer:
              'تُستخرج شريحة محلية منذ الأيام الأولى بباقات إنترنت زهيدة. وتوفر الجامعة عمومًا اتصالاً بالإنترنت في الإقامة.',
          },
          {
            question: 'ماذا يحدث إذا واجه ابني مشكلة هناك؟',
            answer:
              'يبقى المرشد جهة الاتصال المباشرة، متاحًا باستمرار، ويؤمّن الصلة مع الجامعة أو المصالح الصحية أو الإدارة حسب الحالة.',
          },
        ],
        keywords: [
          'دليل الأولياء للدراسة بالخارج',
          'أمن الطالب في روسيا',
          'ميزانية الأسرة للدراسة في روسيا',
          'إرسال الابن للدراسة في روسيا',
          'نصائح للأولياء',
          'تأطير الطلبة التونسيين',
        ],
      },
      ru: {
        title: 'Гид для родителей: отправить ребёнка учиться в Россию | RusStudy',
        description:
          'Безопасность, бюджет, признание диплома, сопровождение на месте: ответы на вопросы тунисских родителей перед согласием на отъезд.',
        h1: 'Гид для родителей: что знать, прежде чем сказать «да»',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt: 'Безопасность, реальный бюджет, сопровождение, диплом: четыре вопроса родителей — прямые ответы.',
        intro:
          'В подавляющем большинстве сопровождаемых нами дел студент убеждён задолго до родителей. Это нормально: именно они финансируют и именно они тревожатся. Эта страница обращается прямо к родителям и разбирает четыре повторяющихся вопроса без прикрас.',
        sections: [
          {
            heading: '«Будет ли мой ребёнок в безопасности?»',
            blocks: [
              {
                type: 'p',
                text: 'Это первый вопрос, и он законен. На практике студент в общежитии живёт в среде с контролируемым доступом, с охраной и фиксацией входов и выходов.',
              },
              {
                type: 'ul',
                items: [
                  'Двуязычный куратор встречает ребёнка в аэропорту и везёт в общежитие',
                  'Комната забронирована до вылета: он никогда не приезжает без жилья',
                  'Поддержка доступна круглосуточно весь год',
                  'Тунисское студенческое сообщество есть в каждом партнёрском городе',
                ],
              },
            ],
          },
          {
            heading: '«Сколько это будет реально стоить?»',
            blocks: [
              { type: 'p', text: 'Бюджет складывается из трёх статей, и ни одна не должна обнаружиться после отъезда.' },
              {
                type: 'ul',
                items: [
                  'Обучение: от 2 200 до 3 500 € в год в зависимости от направления',
                  'Жильё: от 30 до 90 € в месяц в общежитии в зависимости от города',
                  'Быт: от 140 до 260 € в месяц с питанием и транспортом',
                  'Разовые расходы первого года: около 900 € на визу, переводы и билет',
                  'Обязательная страховка: около 180 € в год с ежегодным продлением',
                ],
              },
              {
                type: 'strong',
                text: 'Сравните эту сумму со стоимостью частной школы в Тунисе по той же специальности: именно это сравнение чаще всего убеждает семьи.',
              },
            ],
          },
          {
            heading: '«Будет ли диплом признан?»',
            blocks: [
              {
                type: 'p',
                text: 'Диплом государственного образца аккредитованного российского государственного вуза проходит установленную процедуру признания в Тунисе. Решающим является не страна, а статус учреждения: требуйте письменного подтверждения, что это государственный вуз и что программа аккредитована.',
              },
              {
                type: 'p',
                text: 'Для медицинских профессий заложите дополнительный этап аттестации до практики, как в большинстве стран.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Сможет ли ребёнок приезжать домой во время учёбы?',
            answer:
              'Да, поездки возможны в каникулы. Закладывайте стоимость билетов в годовой бюджет: она не входит в обучение.',
          },
          {
            question: 'Как поддерживать регулярную связь?',
            answer:
              'Местная SIM-карта оформляется в первые дни, с дешёвыми пакетами интернета. В общежитии вуз обычно предоставляет доступ в сеть.',
          },
          {
            question: 'Что если у ребёнка возникнет проблема на месте?',
            answer:
              'Куратор остаётся прямым контактом, доступным постоянно, и связывает с вузом, медслужбами или администрацией по ситуации.',
          },
        ],
        keywords: [
          'гид для родителей учёба за рубежом',
          'безопасность студента в России',
          'семейный бюджет учёбы',
          'отправить ребёнка учиться в Россию',
          'советы родителям',
          'сопровождение студента',
        ],
      },
    },
  },
];
