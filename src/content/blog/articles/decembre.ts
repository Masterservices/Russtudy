import type { BlogArticleEntry } from '../copy';

/*
 * Trois articles de décembre, calés sur l'intention « j'arrive, comment je
 * m'organise ? » : l'enregistrement migratoire des premiers jours, l'accès
 * aux soins et à la pharmacie, et le calendrier universitaire russe autour
 * des fêtes de fin d'année.
 *
 * Sourcing : les délais réglementaires et les dates d'examens ne sont jamais
 * affirmés en nombre de jours ou en dates précises. Le texte décrit les
 * mécanismes, nomme l'interlocuteur compétent (service des relations
 * internationales, administration de la résidence, faculté) et renvoie vers
 * lui pour le chiffre exact, qui varie et change.
 */
export const DECEMBRE_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'enregistrement-migratoire-premiers-jours-russie',
    publishedAt: '2026-12-07',
    copy: {
      fr: {
        title: 'Enregistrement migratoire en Russie : les démarches des premiers jours | RusStudy',
        description:
          "Carte de migration, enregistrement au lieu de séjour, partie détachable à conserver : les formalités administratives des premiers jours en Russie, qui les accomplit, et les erreurs qui coûtent cher.",
        h1: 'Enregistrement migratoire : les démarches des premiers jours en Russie',
        publishedLabel: 'Publication : Décembre 2026',
        excerpt:
          "Le visa vous fait entrer en Russie. L'enregistrement migratoire vous autorise à y rester. Ce sont deux choses différentes, et la seconde a un délai très court.",
        intro:
          "C'est la formalité la plus sous-estimée de tout le parcours. Beaucoup d'étudiants croient qu'avec un visa valide, tout est en ordre. En réalité, un séjour en Russie suppose une seconde formalité, accomplie sur place dans un délai bref après l'arrivée : la notification de votre lieu de séjour aux autorités. Elle se répète à chaque déménagement et à chaque retour de voyage.",
        sections: [
          {
            heading: 'Visa, carte de migration, enregistrement : trois documents distincts',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Le visa : il autorise l'entrée sur le territoire et figure dans votre passeport.",
                  'La carte de migration : remise au passage de la frontière, elle enregistre votre entrée. Elle doit être conservée intacte pendant tout le séjour.',
                  "L'enregistrement au lieu de séjour : la notification de l'adresse où vous résidez, dont une partie détachable vous est remise. C'est ce justificatif que l'on vous demandera.",
                ],
              },
              {
                type: 'strong',
                text: "Perdre la carte de migration ou la partie détachable de l'enregistrement crée une démarche de remplacement longue et évitable. Rangez-les avec le passeport, pas dans une poche de manteau.",
              },
            ],
          },
          {
            heading: 'Qui accomplit la démarche : pas vous seul',
            blocks: [
              {
                type: 'p',
                text: "C'est le point le plus mal compris : la notification est faite par la partie qui vous héberge. Si vous êtes en résidence universitaire, c'est l'administration de la résidence ou le service des relations internationales qui s'en charge. Si vous logez dans un appartement privé, c'est le propriétaire qui doit l'accomplir.",
              },
              {
                type: 'p',
                text: "Cette différence a une conséquence pratique majeure : un logement privé proposé par un bailleur qui refuse d'effectuer cette notification n'est pas une option, quel que soit son prix. Posez la question avant de signer, pas après.",
              },
            ],
          },
          {
            heading: 'Le délai : court, légal, et à faire confirmer',
            blocks: [
              {
                type: 'p',
                text: "Le délai pour accomplir la notification après l'arrivée est fixé par la réglementation russe et il est bref : quelques jours seulement. Nous ne publions pas ici un nombre de jours, parce que ce type de délai évolue et qu'un chiffre périmé sur une page web vous mettrait en difficulté.",
              },
              {
                type: 'p',
                text: "Procédez autrement, et plus sûrement : dès les premières heures après l'arrivée, contactez le service des relations internationales de votre université et demandez-lui le délai applicable, la liste des pièces et l'endroit exact où vous présenter. C'est son travail, et c'est la seule réponse à jour.",
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Les trois moments où tout recommence',
            blocks: [
              {
                type: 'p',
                text: "L'erreur classique consiste à croire que l'enregistrement est acquis une fois pour toutes. Il doit être refait dans plusieurs situations.",
              },
              {
                type: 'ul',
                items: [
                  "Après chaque sortie du territoire russe suivie d'un retour : vacances au pays, voyage dans un pays voisin. Vous recevez une nouvelle carte de migration, et la notification doit être renouvelée.",
                  "À chaque changement d'adresse : changement de chambre dans une autre résidence, déménagement vers un appartement.",
                  "À l'expiration de la période couverte, lorsque votre titre de séjour est prolongé.",
                ],
              },
              {
                type: 'strong',
                text: "Un étudiant qui rentre en Tunisie pour les vacances d'été et revient en septembre doit refaire la démarche. Ce n'est pas optionnel, et l'oubli est la cause d'ennuis administratifs la plus fréquente chez les étudiants internationaux.",
              },
            ],
          },
          {
            heading: 'À quoi sert concrètement ce justificatif',
            blocks: [
              {
                type: 'p',
                text: "Au-delà de l'obligation réglementaire, la partie détachable de l'enregistrement est le document que l'on vous demandera dans la vie courante.",
              },
              {
                type: 'ul',
                items: [
                  "À l'université, pour l'inscription administrative et l'accès à la résidence.",
                  "Lors de l'ouverture d'un compte bancaire local.",
                  'Pour obtenir une carte de transport étudiante dans certaines villes.',
                  'Lors de tout contrôle administratif.',
                ],
              },
              {
                type: 'p',
                text: "Faites-en une copie numérique dès réception, et gardez-la accessible sur votre téléphone en plus de l'original.",
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'La checklist des dix premiers jours',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Conserver la carte de migration reçue à la frontière, sans la plier ni la perdre.',
                  "Se présenter au service des relations internationales dès l'ouverture des bureaux.",
                  'Faire accomplir la notification de séjour par la résidence ou le bailleur.',
                  'Récupérer la partie détachable et la photographier.',
                  "Passer l'examen médical demandé par l'université.",
                  'Souscrire la police d’assurance santé exigée localement.',
                  "Finaliser l'inscription administrative et retirer la carte d'étudiant.",
                ],
              },
              {
                type: 'p',
                text: "Ces sept lignes occupent la première semaine. Rien d'autre ne devrait passer devant.",
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quel est le délai exact pour l’enregistrement migratoire en Russie ?',
            answer:
              "Le délai est fixé par la réglementation russe et il est court. Nous ne publions pas de chiffre, car ce type de délai évolue et une information périmée vous exposerait. Demandez-le dès votre arrivée au service des relations internationales de votre université, qui dispose de l'information à jour.",
          },
          {
            question: 'Qui doit faire la déclaration : moi ou mon logeur ?',
            answer:
              "La notification est accomplie par la partie qui vous héberge : l'administration de la résidence universitaire, ou le propriétaire si vous louez un appartement. Vérifiez avant de signer un bail privé que le bailleur accepte de l'accomplir.",
          },
          {
            question: 'Faut-il refaire l’enregistrement après des vacances au pays ?',
            answer:
              "Oui. Toute sortie du territoire suivie d'un retour donne lieu à une nouvelle carte de migration et impose de renouveler la notification de séjour. C'est l'oubli le plus fréquent et le plus facile à éviter.",
          },
          {
            question: 'Que faire si je perds la partie détachable de l’enregistrement ?',
            answer:
              "Signalez-le immédiatement au service des relations internationales de votre université, qui vous indiquera la procédure de remplacement. Plus vous attendez, plus la régularisation est lourde. C'est pourquoi une copie numérique prise dès le premier jour est indispensable.",
          },
        ],
        keywords: [
          'enregistrement migratoire russie étudiant',
          'carte de migration russie',
          'démarches arrivée russie étudiant',
          'notification lieu de séjour russie',
          'formalités premiers jours russie',
          'résidence universitaire enregistrement russie',
        ],
      },
      en: {
        title: 'Migration registration in Russia: the first days’ formalities | RusStudy',
        description:
          'Migration card, registration at your place of stay, the detachable slip to keep: the administrative steps of your first days in Russia, who carries them out, and the mistakes that cost you.',
        h1: 'Migration registration: the first days’ formalities in Russia',
        publishedLabel: 'Published: December 2026',
        excerpt:
          'The visa gets you into Russia. Migration registration lets you stay. These are two different things, and the second has a very short deadline.',
        intro:
          'This is the most underestimated formality of the whole journey. Many students believe that with a valid visa everything is in order. In reality, staying in Russia requires a second formality, carried out locally within a short time after arrival: notifying the authorities of your place of stay. It must be repeated after every move and every return from abroad.',
        sections: [
          {
            heading: 'Visa, migration card, registration: three distinct documents',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The visa: it authorises entry to the territory and sits in your passport.',
                  'The migration card: handed to you at the border, it records your entry. It must be kept intact for the whole stay.',
                  'Registration at the place of stay: the notification of the address where you live, of which a detachable slip is given to you. That slip is the proof you will be asked for.',
                ],
              },
              {
                type: 'strong',
                text: 'Losing the migration card or the detachable registration slip triggers a long and avoidable replacement procedure. Keep them with the passport, not in a coat pocket.',
              },
            ],
          },
          {
            heading: 'Who carries it out: not you alone',
            blocks: [
              {
                type: 'p',
                text: 'This is the least understood point: the notification is filed by the party hosting you. In university housing, the residence administration or the international relations office handles it. In a private flat, it is the landlord who must do it.',
              },
              {
                type: 'p',
                text: 'That difference has a major practical consequence: private accommodation offered by a landlord who refuses to file the notification is not an option, whatever the price. Ask before signing, not after.',
              },
            ],
          },
          {
            heading: 'The deadline: short, statutory, and to be confirmed locally',
            blocks: [
              {
                type: 'p',
                text: 'The deadline for filing the notification after arrival is set by Russian regulations and it is short: only a few days. We do not publish a number of days here, because this kind of deadline changes and an outdated figure on a web page would put you at risk.',
              },
              {
                type: 'p',
                text: 'Do it differently and more safely: within the first hours after arrival, contact your university’s international relations office and ask for the applicable deadline, the list of documents and exactly where to present yourself. That is their job, and theirs is the only up-to-date answer.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'The three moments when it all starts again',
            blocks: [
              {
                type: 'p',
                text: 'The classic mistake is believing registration is settled once and for all. It must be redone in several situations.',
              },
              {
                type: 'ul',
                items: [
                  'After every exit from Russian territory followed by a return: holidays at home, a trip to a neighbouring country. You receive a new migration card, and the notification must be renewed.',
                  'At every change of address: a room in another residence, a move to a flat.',
                  'When the covered period expires, as your right of stay is extended.',
                ],
              },
              {
                type: 'strong',
                text: 'A student who goes home to Tunisia for the summer and returns in September must redo the procedure. It is not optional, and forgetting it is the most frequent source of administrative trouble among international students.',
              },
            ],
          },
          {
            heading: 'What that slip is actually used for',
            blocks: [
              {
                type: 'p',
                text: 'Beyond the regulatory obligation, the detachable registration slip is the document you will be asked for in everyday life.',
              },
              {
                type: 'ul',
                items: [
                  'At the university, for administrative enrolment and access to the residence.',
                  'When opening a local bank account.',
                  'To obtain a student transport card in some cities.',
                  'At any administrative check.',
                ],
              },
              {
                type: 'p',
                text: 'Make a digital copy as soon as you receive it and keep it accessible on your phone as well as the original.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'The first ten days’ checklist',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Keep the migration card received at the border, unfolded and unlost.',
                  'Report to the international relations office as soon as it opens.',
                  'Have the residence or the landlord file the notification of stay.',
                  'Collect the detachable slip and photograph it.',
                  'Take the medical examination required by the university.',
                  'Take out the health insurance policy required locally.',
                  'Complete administrative enrolment and collect your student card.',
                ],
              },
              {
                type: 'p',
                text: 'Those seven lines fill the first week. Nothing else should come before them.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'What is the exact deadline for migration registration in Russia?',
            answer:
              'The deadline is set by Russian regulations and it is short. We publish no figure, because this kind of deadline changes and outdated information would expose you. Ask your university’s international relations office on arrival; they hold the current answer.',
          },
          {
            question: 'Who files the notification: me or my host?',
            answer:
              'The notification is filed by the party hosting you: the university residence administration, or the landlord if you rent a flat. Before signing a private lease, check that the landlord agrees to file it.',
          },
          {
            question: 'Does registration have to be redone after holidays at home?',
            answer:
              'Yes. Any exit from the territory followed by a return produces a new migration card and requires the notification of stay to be renewed. It is the most common and most avoidable omission.',
          },
          {
            question: 'What if I lose the detachable registration slip?',
            answer:
              'Report it immediately to your university’s international relations office, which will tell you the replacement procedure. The longer you wait, the heavier it gets. That is why a digital copy taken on day one is essential.',
          },
        ],
        keywords: [
          'migration registration russia student',
          'migration card russia',
          'arrival formalities russia student',
          'notification of place of stay russia',
          'first days in russia paperwork',
          'university dormitory registration russia',
        ],
      },
      ar: {
        title: 'التسجيل الهجري في روسيا: إجراءات الأيام الأولى | RusStudy',
        description:
          'بطاقة الهجرة، والتسجيل في مكان الإقامة، والقسيمة القابلة للفصل التي يجب حفظها: إجراءات الأيام الأولى في روسيا، ومن يتولّاها، والأخطاء التي تكلّف كثيرًا.',
        h1: 'التسجيل الهجري: إجراءات الأيام الأولى في روسيا',
        publishedLabel: 'النشر: ديسمبر 2026',
        excerpt:
          'التأشيرة تُدخلك روسيا. والتسجيل الهجري يسمح لك بالبقاء. هما أمران مختلفان، وللثاني أجل قصير جدًّا.',
        intro:
          'هذا أكثر إجراء يُقلَّل من شأنه في المسار كلّه. يعتقد كثير من الطلبة أن التأشيرة الصحيحة تكفي. والواقع أن الإقامة في روسيا تستلزم إجراءً ثانيًا يُنجَز هناك في أجل قصير بعد الوصول: إخبار السلطات بمكان إقامتك. ويُعاد هذا الإجراء عند كل تغيير مسكن وعند كل عودة من الخارج.',
        sections: [
          {
            heading: 'التأشيرة، بطاقة الهجرة، التسجيل: ثلاث وثائق متمايزة',
            blocks: [
              {
                type: 'ul',
                items: [
                  'التأشيرة: تُجيز الدخول إلى الإقليم وتُوضع في جواز سفرك.',
                  'بطاقة الهجرة: تُسلَّم عند المعبر الحدودي وتسجّل دخولك. ويجب حفظها سليمة طيلة الإقامة.',
                  'التسجيل في مكان الإقامة: إخبار بالعنوان الذي تقيم فيه، وتُسلَّم لك منه قسيمة قابلة للفصل. وهذه القسيمة هي الإثبات الذي سيُطلب منك.',
                ],
              },
              {
                type: 'strong',
                text: 'فقدان بطاقة الهجرة أو قسيمة التسجيل يفتح إجراء استبدال طويلًا ويمكن تجنّبه. ضَعهما مع جواز السفر، لا في جيب معطف.',
              },
            ],
          },
          {
            heading: 'من يتولّى الإجراء: ليس أنت وحدك',
            blocks: [
              {
                type: 'p',
                text: 'هذه أسوأ نقطة فهمًا: الإخبار تقوم به الجهة التي تستضيفك. فإن كنت في إقامة جامعية، تتولّاه إدارة الإقامة أو مصلحة العلاقات الدولية. وإن كنت في شقة خاصة، فالمالك هو من يجب أن يقوم به.',
              },
              {
                type: 'p',
                text: 'ولهذا الفرق أثر عملي كبير: سكن خاص يعرضه مالك يرفض القيام بهذا الإخبار ليس خيارًا، مهما كان سعره. اطرح السؤال قبل التوقيع لا بعده.',
              },
            ],
          },
          {
            heading: 'الأجل: قصير، قانوني، ويُؤكَّد محليًّا',
            blocks: [
              {
                type: 'p',
                text: 'أجل إنجاز الإخبار بعد الوصول يحدّده التنظيم الروسي وهو قصير: بضعة أيام فقط. ولا ننشر هنا عدد الأيام، لأن هذا النوع من الآجال يتغيّر، ورقمًا متجاوَزًا على صفحة إلكترونية قد يضعك في مأزق.',
              },
              {
                type: 'p',
                text: 'افعل غير ذلك وبشكل أضمن: في الساعات الأولى بعد الوصول، اتّصل بمصلحة العلاقات الدولية في جامعتك واطلب الأجل المنطبق، وقائمة الوثائق، والمكان الدقيق الذي تحضر إليه. فهذا عملها، وجوابها هو الوحيد المحدَّث.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'ثلاث لحظات يُعاد فيها كل شيء',
            blocks: [
              {
                type: 'p',
                text: 'الخطأ الشائع هو الاعتقاد أن التسجيل يُنجَز مرّة واحدة لا تُعاد. وهو يجب أن يُعاد في عدة حالات.',
              },
              {
                type: 'ul',
                items: [
                  'بعد كل خروج من الإقليم الروسي يتبعه عودة: عُطلة في البلد، سفر إلى بلد مجاور. تتلقّى بطاقة هجرة جديدة، ويجب تجديد الإخبار.',
                  'عند كل تغيير عنوان: غرفة في إقامة أخرى، أو انتقال إلى شقة.',
                  'عند انتهاء الفترة المشمولة، عند تمديد حقّك في الإقامة.',
                ],
              },
              {
                type: 'strong',
                text: 'الطالب الذي يعود إلى تونس في عُطلة الصيف ويرجع في سبتمبر يجب أن يعيد الإجراء. وهذا ليس اختياريًّا، ونسيانه هو أكثر أسباب المشاكل الإدارية لدى الطلبة الدوليين.',
              },
            ],
          },
          {
            heading: 'ما تفيده هذه القسيمة فعليًّا',
            blocks: [
              {
                type: 'p',
                text: 'إلى جانب الإلزام التنظيمي، قسيمة التسجيل هي الوثيقة التي ستُطلب منك في الحياة اليومية.',
              },
              {
                type: 'ul',
                items: [
                  'في الجامعة، للتسجيل الإداري والدخول إلى الإقامة.',
                  'عند فتح حساب بنكي محلي.',
                  'للحصول على بطاقة نقل طلابية في بعض المدن.',
                  'عند أي مراقبة إدارية.',
                ],
              },
              {
                type: 'p',
                text: 'أنشئ نسخة رقمية منها عند تسلّمها، واحفظها في متناولك على هاتفك إضافة إلى الأصل.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'قائمة الأيام العشرة الأولى',
            blocks: [
              {
                type: 'ul',
                items: [
                  'حفظ بطاقة الهجرة المتسلَّمة على الحدود، دون ثنيها ولا فقدانها.',
                  'الحضور إلى مصلحة العلاقات الدولية بمجرّد فتح المكاتب.',
                  'جعل الإقامة أو المالك يُنجز الإخبار بمكان الإقامة.',
                  'استلام القسيمة القابلة للفصل وتصويرها.',
                  'إجراء الفحص الطبي الذي تطلبه الجامعة.',
                  'اكتتاب بوليصة التأمين الصحي المطلوبة محليًّا.',
                  'إتمام التسجيل الإداري وسحب بطاقة الطالب.',
                ],
              },
              {
                type: 'p',
                text: 'هذه السبع نقاط تشغل الأسبوع الأول. ولا ينبغي أن يتقدّمها شيء آخر.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'ما الأجل الدقيق للتسجيل الهجري في روسيا؟',
            answer:
              'الأجل يحدّده التنظيم الروسي وهو قصير. ولا ننشر رقمًا لأن هذا النوع من الآجال يتغيّر ومعلومة متجاوَزة قد تعرّضك للخطر. اطلبه عند وصولك من مصلحة العلاقات الدولية في جامعتك، فهي تملك المعلومة المحدَّثة.',
          },
          {
            question: 'من يقوم بالإخبار: أنا أم من يستضيفني؟',
            answer:
              'الإخبار تقوم به الجهة المستضيفة: إدارة الإقامة الجامعية، أو المالك إن كنت تستأجر شقة. وقبل التوقيع على عقد كراء خاص، تحقّق من قبول المالك القيام به.',
          },
          {
            question: 'هل يُعاد التسجيل بعد عُطلة في البلد؟',
            answer:
              'نعم. أي خروج من الإقليم يتبعه عودة يُنشئ بطاقة هجرة جديدة ويقتضي تجديد الإخبار. وهذا أكثر إغفال شائع وأسهل تجنّبًا.',
          },
          {
            question: 'ماذا أفعل إن فقدت قسيمة التسجيل؟',
            answer:
              'أبلِغ فورًا مصلحة العلاقات الدولية في جامعتك، وهي ستدلّك على إجراء الاستبدال. وكل تأخير يجعل التسوية أثقل. ولهذا فالنسخة الرقمية من اليوم الأول ضرورية.',
          },
        ],
        keywords: [
          'التسجيل الهجري روسيا طالب',
          'بطاقة الهجرة روسيا',
          'إجراءات الوصول إلى روسيا',
          'الإخبار بمكان الإقامة روسيا',
          'إجراءات الأيام الأولى في روسيا',
          'الإقامة الجامعية التسجيل روسيا',
        ],
      },
      ru: {
        title: 'Миграционный учёт в России: формальности первых дней | RusStudy',
        description:
          'Миграционная карта, постановка на учёт по месту пребывания, отрывная часть уведомления: административные шаги первых дней в России, кто их выполняет и какие ошибки дорого стоят.',
        h1: 'Миграционный учёт: формальности первых дней в России',
        publishedLabel: 'Публикация: декабрь 2026',
        excerpt:
          'Виза позволяет въехать в Россию. Миграционный учёт позволяет в ней находиться. Это разные вещи, и у второй очень короткий срок.',
        intro:
          'Это самая недооценённая формальность всего пути. Многие студенты думают, что с действующей визой всё в порядке. На самом деле пребывание в России требует второго действия, совершаемого на месте в короткий срок после приезда: уведомления о месте пребывания. Оно повторяется при каждом переезде и каждом возвращении из-за границы.',
        sections: [
          {
            heading: 'Виза, миграционная карта, учёт: три разных документа',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Виза: разрешает въезд на территорию и вклеена в паспорт.',
                  'Миграционная карта: выдаётся при пересечении границы и фиксирует въезд. Её нужно сохранять в целости весь срок пребывания.',
                  'Постановка на учёт по месту пребывания: уведомление об адресе проживания, от которого вам выдают отрывную часть. Именно её у вас будут спрашивать.',
                ],
              },
              {
                type: 'strong',
                text: 'Потеря миграционной карты или отрывной части уведомления запускает долгую и вполне избежную процедуру восстановления. Держите их вместе с паспортом, а не в кармане куртки.',
              },
            ],
          },
          {
            heading: 'Кто подаёт уведомление: не вы один',
            blocks: [
              {
                type: 'p',
                text: 'Это пункт, который понимают хуже всего: уведомление подаёт принимающая сторона. В общежитии этим занимается его администрация или отдел международных связей. В частной квартире это должен сделать собственник.',
              },
              {
                type: 'p',
                text: 'Отсюда важное практическое следствие: частное жильё от собственника, который отказывается подавать уведомление, — не вариант, какой бы ни была цена. Спрашивайте до подписания, а не после.',
              },
            ],
          },
          {
            heading: 'Срок: короткий, установленный законом, уточняется на месте',
            blocks: [
              {
                type: 'p',
                text: 'Срок подачи уведомления после приезда установлен российскими нормами и он короткий — всего несколько дней. Мы не публикуем здесь число дней, потому что такие сроки меняются, а устаревшая цифра на веб-странице создала бы вам проблему.',
              },
              {
                type: 'p',
                text: 'Поступите иначе и надёжнее: в первые часы после приезда свяжитесь с отделом международных связей вуза и спросите применимый срок, перечень документов и точное место обращения. Это их работа, и только их ответ актуален.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Три момента, когда всё начинается заново',
            blocks: [
              {
                type: 'p',
                text: 'Классическая ошибка — считать, что учёт оформлен раз и навсегда. Его нужно повторять в нескольких случаях.',
              },
              {
                type: 'ul',
                items: [
                  'После каждого выезда из России с последующим возвращением: каникулы дома, поездка в соседнюю страну. Вы получаете новую миграционную карту, и уведомление нужно обновить.',
                  'При каждой смене адреса: комната в другом общежитии, переезд в квартиру.',
                  'По истечении охваченного периода, когда срок пребывания продлевается.',
                ],
              },
              {
                type: 'strong',
                text: 'Студент, уехавший домой в Тунис на лето и вернувшийся в сентябре, обязан пройти процедуру снова. Это не опция, и забывчивость здесь — самая частая причина административных проблем у иностранных студентов.',
              },
            ],
          },
          {
            heading: 'Зачем эта отрывная часть нужна на практике',
            blocks: [
              {
                type: 'p',
                text: 'Помимо требования закона, отрывная часть уведомления — документ, который будут спрашивать в повседневной жизни.',
              },
              {
                type: 'ul',
                items: [
                  'В вузе — для административного зачисления и доступа в общежитие.',
                  'При открытии местного банковского счёта.',
                  'Для получения студенческой транспортной карты в некоторых городах.',
                  'При любой административной проверке.',
                ],
              },
              {
                type: 'p',
                text: 'Сделайте цифровую копию сразу при получении и держите её доступной в телефоне вместе с оригиналом.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Чек-лист первых десяти дней',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Сохранить миграционную карту, полученную на границе, не сгибая и не теряя её.',
                  'Прийти в отдел международных связей сразу, как откроются кабинеты.',
                  'Добиться, чтобы общежитие или собственник подали уведомление о пребывании.',
                  'Получить отрывную часть и сфотографировать её.',
                  'Пройти медосмотр, который требует вуз.',
                  'Оформить требуемый на месте полис медицинского страхования.',
                  'Завершить административное зачисление и получить студенческий билет.',
                ],
              },
              {
                type: 'p',
                text: 'Эти семь строк занимают первую неделю. Ничего другого впереди них быть не должно.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
        ],
        faq: [
          {
            question: 'Каков точный срок постановки на миграционный учёт в России?',
            answer:
              'Срок установлен российскими нормами и он короткий. Цифру мы не публикуем, потому что такие сроки меняются, а устаревшие сведения создали бы вам риск. Спросите по приезде в отделе международных связей вуза — там актуальный ответ.',
          },
          {
            question: 'Кто подаёт уведомление: я или принимающая сторона?',
            answer:
              'Уведомление подаёт принимающая сторона: администрация общежития или собственник, если вы снимаете квартиру. До подписания частного договора найма проверьте, что собственник согласен его подать.',
          },
          {
            question: 'Нужно ли проходить учёт заново после каникул дома?',
            answer:
              'Да. Любой выезд с территории и возвращение дают новую миграционную карту и требуют обновить уведомление о пребывании. Это самое частое и самое легко устранимое упущение.',
          },
          {
            question: 'Что делать, если я потерял отрывную часть уведомления?',
            answer:
              'Немедленно сообщите в отдел международных связей вуза — там подскажут порядок восстановления. Чем дольше ждать, тем тяжелее. Поэтому цифровая копия с первого дня обязательна.',
          },
        ],
        keywords: [
          'миграционный учёт студента в России',
          'миграционная карта Россия',
          'формальности по приезде в Россию',
          'уведомление о месте пребывания',
          'первые дни в России документы',
          'регистрация в общежитии',
        ],
      },
    },
  },
  {
    slug: 'se-soigner-en-russie-medecin-pharmacie',
    publishedAt: '2026-12-14',
    copy: {
      fr: {
        title: 'Se soigner en Russie : médecin, pharmacie et assurance étudiante | RusStudy',
        description:
          "Comment consulter un médecin, ce que couvre l'assurance étudiante, comment se repérer dans une pharmacie russe et quels médicaments emporter de Tunisie. Guide pratique pour les premiers mois.",
        h1: 'Se soigner en Russie : médecin, pharmacie et assurance étudiante',
        publishedLabel: 'Publication : Décembre 2026',
        excerpt:
          "Le premier hiver met tout le monde à l'épreuve. Mieux vaut savoir avant d'être malade comment consulter, ce qui est couvert, et comment lire une boîte de médicaments en cyrillique.",
        intro:
          "Personne ne prépare ce chapitre avant d'en avoir besoin, et c'est dommage : tomber malade à l'étranger est surtout une épreuve d'information. Où aller, qui appeler, qu'est-ce qui est payant. Voici ce qu'il faut avoir compris avant le premier rhume de novembre.",
        sections: [
          {
            heading: "L'assurance santé : la première chose à régler",
            blocks: [
              {
                type: 'p',
                text: "Un étudiant international en Russie doit disposer d'une couverture santé, et la police exigée est souscrite localement selon les modalités que l'université indique. C'est l'une des premières démarches après l'arrivée, au même titre que l'enregistrement migratoire.",
              },
              {
                type: 'p',
                text: "Deux points à faire préciser par écrit au service des relations internationales, parce que les réponses varient d'un établissement à l'autre et d'une année à l'autre :",
              },
              {
                type: 'ul',
                items: [
                  "Quelle police est exigée, auprès de qui la souscrire, et pour quel montant annuel ?",
                  "Que couvre-t-elle exactement : consultations, hospitalisation, médicaments, soins dentaires, et à quelles conditions ?",
                ],
              },
              {
                type: 'strong',
                text: "Ne présumez pas qu'une assurance voyage achetée au pays remplace la police exigée sur place. Faites confirmer ce point avant de payer deux fois.",
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'Où consulter : le service médical universitaire en premier',
            blocks: [
              {
                type: 'p',
                text: "La plupart des universités orientent leurs étudiants vers un service médical propre ou vers un établissement de santé partenaire. C'est le premier point d'entrée, et c'est aussi le plus simple : le personnel y est habitué aux étudiants internationaux et aux questions de couverture.",
              },
              {
                type: 'p',
                text: "Demandez dès les premières semaines, avant d'en avoir besoin : où se trouve ce service, quels sont ses horaires, faut-il un rendez-vous, et que faire en dehors des heures d'ouverture. Ces quatre réponses notées dans votre téléphone valent mieux qu'une recherche fébrile un dimanche soir.",
              },
            ],
          },
          {
            heading: 'La pharmacie russe : ce qui change par rapport à la Tunisie',
            blocks: [
              {
                type: 'p',
                text: "Les pharmacies — « аптека » — sont nombreuses dans les villes russes, souvent avec de larges horaires. Trois différences pratiques méritent d'être connues avant la première visite.",
              },
              {
                type: 'ul',
                items: [
                  "Les noms commerciaux ne sont pas les mêmes qu'en Tunisie. Un médicament que vous connaissez par sa marque existe peut-être sous une autre appellation : c'est la molécule qu'il faut savoir nommer, pas la marque.",
                  "Les règles de délivrance diffèrent : certains produits en vente libre chez vous nécessitent une ordonnance ici, et inversement. Ne tablez pas sur votre habitude.",
                  "Les emballages et notices sont en russe. Photographier la notice et la traduire est un réflexe utile, surtout pour la posologie.",
                ],
              },
              {
                type: 'strong',
                text: "Notez avant de partir la dénomination internationale — la molécule — de chaque médicament que vous prenez régulièrement. C'est ce nom-là qu'un pharmacien russe comprendra.",
              },
            ],
          },
          {
            heading: 'La trousse à emporter de Tunisie',
            blocks: [
              {
                type: 'p',
                text: "Il ne s'agit pas d'emporter une pharmacie entière, mais de couvrir les deux premières semaines, avant d'avoir compris où acheter quoi.",
              },
              {
                type: 'ul',
                items: [
                  'Vos traitements personnels en cours, en quantité suffisante pour plusieurs mois, avec les ordonnances correspondantes.',
                  "L'ordonnance ou le compte rendu médical traduit, si vous suivez un traitement de longue durée.",
                  'De quoi traiter un rhume, une angine ou un mal de tête les premiers jours.',
                  'Un thermomètre et un petit nécessaire de pansements.',
                ],
              },
              {
                type: 'p',
                text: "Si vous suivez un traitement régulier, vérifiez deux choses avant le départ : la disponibilité de la molécule en Russie, et les conditions d'entrée sur le territoire avec des médicaments en quantité, qui peuvent exiger une ordonnance traduite. Renseignez-vous auprès de la représentation diplomatique russe.",
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: "L'hiver, la vraie cause des consultations",
            blocks: [
              {
                type: 'p',
                text: "Les étudiants maghrébins ne tombent pas malades en Russie à cause du froid lui-même, mais à cause des écarts : locaux très chauffés, extérieur très froid, plusieurs fois par jour. L'habillement en couches successives, que l'on peut retirer en entrant, limite ces écarts bien mieux qu'un seul manteau épais.",
              },
              {
                type: 'p',
                text: "Deux autres facteurs méritent attention pendant le premier hiver : le manque de lumière du jour, qui pèse sur le sommeil et le moral, et l'air sec des bâtiments chauffés, responsable de beaucoup de maux de gorge.",
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Ce qui relève du soin, et ce qui relève du soutien',
            blocks: [
              {
                type: 'p',
                text: "Le premier semestre loin de chez soi est fatigant, et la fatigue n'est pas toujours médicale. Entre la langue, le climat et l'éloignement familial, un passage difficile en novembre ou février est banal — et il ne se règle pas en pharmacie.",
              },
              {
                type: 'p',
                text: "Parlez-en : aux étudiants plus avancés, au service des relations internationales, à votre famille. Si vous êtes accompagné par nos équipes, c'est aussi ce que nous sommes là pour entendre. Un semestre se sauve souvent par une conversation, rarement par un médicament.",
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'L’assurance santé est-elle obligatoire pour un étudiant en Russie ?',
            answer:
              "Une couverture santé est attendue des étudiants internationaux et la police exigée se souscrit localement, selon les modalités indiquées par l'université. Demandez par écrit au service des relations internationales quelle police souscrire, à quel prix et ce qu'elle couvre.",
          },
          {
            question: 'Peut-on emporter ses médicaments de Tunisie ?',
            answer:
              "Emportez vos traitements en cours avec les ordonnances correspondantes, idéalement traduites. Pour des quantités importantes, les conditions d'entrée sur le territoire russe doivent être vérifiées auprès de la représentation diplomatique russe avant le départ.",
          },
          {
            question: 'Comment trouver un médicament dont je ne connais que la marque tunisienne ?',
            answer:
              "Cherchez la dénomination de la molécule, pas la marque : c'est elle qui est comprise partout. Notez-la avant de partir pour chacun de vos médicaments habituels, et montrez-la au pharmacien.",
          },
          {
            question: 'Où aller en cas d’urgence ?',
            answer:
              "Demandez cette information au service des relations internationales de votre université dès les premières semaines : numéro d'urgence local, établissement de référence, et conduite à tenir en dehors des heures d'ouverture du service médical universitaire. Notez ces réponses avant d'en avoir besoin.",
          },
        ],
        keywords: [
          'se soigner en russie étudiant',
          'assurance santé étudiant russie',
          'pharmacie en russie médicaments',
          'médecin étudiant étranger russie',
          'santé premier hiver russie',
          'trousse médicaments départ russie',
        ],
      },
      en: {
        title: 'Healthcare in Russia: doctor, pharmacy and student insurance | RusStudy',
        description:
          'How to see a doctor, what student insurance covers, how to navigate a Russian pharmacy and which medicines to bring from home. A practical guide for the first months.',
        h1: 'Healthcare in Russia: doctor, pharmacy and student insurance',
        publishedLabel: 'Published: December 2026',
        excerpt:
          'The first winter tests everyone. Better to know, before falling ill, how to get seen, what is covered, and how to read a medicine box in Cyrillic.',
        intro:
          'Nobody prepares this chapter before needing it, which is a pity: falling ill abroad is above all an information problem. Where to go, who to call, what you pay for. Here is what to have understood before the first November cold.',
        sections: [
          {
            heading: 'Health insurance: the first thing to settle',
            blocks: [
              {
                type: 'p',
                text: 'An international student in Russia must hold health cover, and the required policy is taken out locally according to the arrangements the university indicates. It is one of the first steps after arrival, alongside migration registration.',
              },
              {
                type: 'p',
                text: 'Two points to have clarified in writing by the international relations office, because answers vary between institutions and between years:',
              },
              {
                type: 'ul',
                items: [
                  'Which policy is required, with whom to take it out, and at what annual cost?',
                  'What exactly does it cover: consultations, hospitalisation, medicines, dental care, and under what conditions?',
                ],
              },
              {
                type: 'strong',
                text: 'Do not assume travel insurance bought at home replaces the policy required on site. Have that confirmed before paying twice.',
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'Where to be seen: the university medical service first',
            blocks: [
              {
                type: 'p',
                text: 'Most universities direct students to their own medical service or to a partner health facility. That is the first point of entry and also the simplest: staff there are used to international students and to insurance questions.',
              },
              {
                type: 'p',
                text: 'Ask in the first weeks, before you need it: where that service is, what hours it keeps, whether an appointment is required, and what to do outside opening hours. Those four answers saved in your phone beat a frantic search on a Sunday evening.',
              },
            ],
          },
          {
            heading: 'The Russian pharmacy: what differs from home',
            blocks: [
              {
                type: 'p',
                text: 'Pharmacies — “аптека” — are plentiful in Russian cities, often with long opening hours. Three practical differences are worth knowing before the first visit.',
              },
              {
                type: 'ul',
                items: [
                  'Brand names are not the same as at home. A medicine you know by its brand may exist under another name: what you need to be able to say is the molecule, not the brand.',
                  'Dispensing rules differ: some products sold over the counter at home require a prescription here, and the reverse also happens. Do not rely on habit.',
                  'Packaging and leaflets are in Russian. Photographing the leaflet and translating it is a useful reflex, especially for dosage.',
                ],
              },
              {
                type: 'strong',
                text: 'Before leaving, write down the international name — the molecule — of every medicine you take regularly. That is the name a Russian pharmacist will understand.',
              },
            ],
          },
          {
            heading: 'The kit to bring from home',
            blocks: [
              {
                type: 'p',
                text: 'This is not about packing a whole pharmacy, but about covering the first two weeks, before you have worked out where to buy what.',
              },
              {
                type: 'ul',
                items: [
                  'Your current personal treatments, in sufficient quantity for several months, with the matching prescriptions.',
                  'The prescription or medical report, translated, if you follow a long-term treatment.',
                  'Something for a cold, a sore throat or a headache in the first days.',
                  'A thermometer and a small supply of dressings.',
                ],
              },
              {
                type: 'p',
                text: 'If you follow a regular treatment, check two things before departure: whether the molecule is available in Russia, and the conditions for entering the territory with medicines in quantity, which may require a translated prescription. Ask the Russian diplomatic mission.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Winter, the real cause of consultations',
            blocks: [
              {
                type: 'p',
                text: 'Maghrebi students do not fall ill in Russia because of the cold itself, but because of the swings: heavily heated interiors, very cold outside, several times a day. Dressing in layers you can remove indoors handles those swings far better than one thick coat.',
              },
              {
                type: 'p',
                text: 'Two other factors deserve attention during the first winter: the lack of daylight, which weighs on sleep and mood, and the dry air of heated buildings, responsible for many sore throats.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'What is medical, and what is support',
            blocks: [
              {
                type: 'p',
                text: 'The first semester far from home is tiring, and tiredness is not always medical. Between the language, the climate and distance from family, a hard patch in November or February is ordinary — and it is not settled at the pharmacy.',
              },
              {
                type: 'p',
                text: 'Talk about it: to more advanced students, to the international relations office, to your family. If you are supported by our teams, that is also what we are here to hear. A semester is often saved by a conversation, rarely by a medicine.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is health insurance compulsory for a student in Russia?',
            answer:
              'Health cover is expected of international students and the required policy is taken out locally, according to the university’s arrangements. Ask the international relations office in writing which policy to take out, at what price and what it covers.',
          },
          {
            question: 'Can I bring medicines from home?',
            answer:
              'Bring your current treatments with the matching prescriptions, ideally translated. For significant quantities, the conditions for entering Russian territory must be checked with the Russian diplomatic mission before departure.',
          },
          {
            question: 'How do I find a medicine I only know by its home brand name?',
            answer:
              'Look for the name of the molecule, not the brand: that is what is understood everywhere. Write it down before leaving for each of your usual medicines and show it to the pharmacist.',
          },
          {
            question: 'Where do I go in an emergency?',
            answer:
              'Ask your university’s international relations office in the first weeks: the local emergency number, the reference facility, and what to do outside the university medical service’s hours. Note those answers before you need them.',
          },
        ],
        keywords: [
          'healthcare in russia student',
          'student health insurance russia',
          'pharmacy in russia medicines',
          'doctor international student russia',
          'health first winter russia',
          'medicine kit moving to russia',
        ],
      },
      ar: {
        title: 'العلاج في روسيا: الطبيب والصيدلية والتأمين الطلابي | RusStudy',
        description:
          'كيف تستشير طبيبًا، وماذا يغطّي التأمين الطلابي، وكيف تتعامل مع صيدلية روسية، وما الأدوية التي تحملها من تونس. دليل عملي للأشهر الأولى.',
        h1: 'العلاج في روسيا: الطبيب والصيدلية والتأمين الطلابي',
        publishedLabel: 'النشر: ديسمبر 2026',
        excerpt:
          'الشتاء الأول يمتحن الجميع. والأفضل أن تعرف قبل أن تمرض كيف تُعرَض على طبيب، وما هو مغطّى، وكيف تقرأ علبة دواء بالحروف السيريلية.',
        intro:
          'لا أحد يحضّر هذا الفصل قبل أن يحتاجه، وهذا مؤسف: فالمرض في الخارج هو قبل كل شيء مشكلة معلومة. إلى أين تذهب، ومن تتّصل به، وما الذي تدفع ثمنه. هذا ما يجب أن تكون قد فهمته قبل أول رشح في نوفمبر.',
        sections: [
          {
            heading: 'التأمين الصحي: أول ما يُسوّى',
            blocks: [
              {
                type: 'p',
                text: 'على الطالب الدولي في روسيا أن تكون لديه تغطية صحية، والبوليصة المطلوبة تُكتتَب محليًّا وفق الصيغ التي تحدّدها الجامعة. وهذه من أولى الإجراءات بعد الوصول، مثل التسجيل الهجري.',
              },
              {
                type: 'p',
                text: 'نقطتان تُوضَّحان كتابيًّا عند مصلحة العلاقات الدولية، لأن الأجوبة تختلف بين المؤسسات ومن سنة إلى أخرى:',
              },
              {
                type: 'ul',
                items: [
                  'ما البوليصة المطلوبة، وعند من تُكتتَب، وبأي مبلغ سنوي؟',
                  'ماذا تغطّي بالتحديد: الاستشارات، والاستشفاء، والأدوية، وعلاج الأسنان، وبأي شروط؟',
                ],
              },
              {
                type: 'strong',
                text: 'لا تفترض أن تأمين سفر اشتريته في بلدك يعوّض البوليصة المطلوبة هناك. أكّد هذه النقطة قبل أن تدفع مرّتين.',
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'إلى أين تذهب: المصلحة الطبية الجامعية أولًا',
            blocks: [
              {
                type: 'p',
                text: 'معظم الجامعات توجّه طلبتها إلى مصلحة طبية خاصة بها أو إلى مؤسسة صحية شريكة. وهذه أول نقطة دخول وأبسطها: فالعاملون فيها معتادون على الطلبة الدوليين وعلى مسائل التغطية.',
              },
              {
                type: 'p',
                text: 'اسأل في الأسابيع الأولى، قبل أن تحتاج: أين توجد هذه المصلحة، وما أوقات عملها، وهل يلزم موعد، وماذا تفعل خارج أوقات العمل. هذه الأجوبة الأربعة مدوَّنة في هاتفك أفضل من بحث مرتبك مساء يوم أحد.',
              },
            ],
          },
          {
            heading: 'الصيدلية الروسية: ما يختلف عن تونس',
            blocks: [
              {
                type: 'p',
                text: 'الصيدليات — «аптека» — كثيرة في المدن الروسية وبأوقات عمل واسعة في الغالب. وثلاثة اختلافات عملية تستحقّ المعرفة قبل أول زيارة.',
              },
              {
                type: 'ul',
                items: [
                  'الأسماء التجارية ليست نفسها كما في تونس. فدواء تعرفه بعلامته قد يوجد بتسمية أخرى: المهمّ أن تعرف اسم المادة الفعّالة لا العلامة.',
                  'قواعد الصرف مختلفة: بعض المنتجات التي تُبَاع عندك بحرّية تحتاج وصفة هنا، والعكس يحدث أيضًا. لا تعوّل على عادتك.',
                  'العلب والإرشادات بالروسية. وتصوير الإرشادات وترجمتها ردّ فعل مفيد، خاصة في ما يتعلّق بالجرعات.',
                ],
              },
              {
                type: 'strong',
                text: 'قبل السفر، سجّل التسمية العلمية — المادة الفعّالة — لكل دواء تتناوله بانتظام. فهذا الاسم هو ما سيفهمه الصيدلي الروسي.',
              },
            ],
          },
          {
            heading: 'حقيبة الأدوية من تونس',
            blocks: [
              {
                type: 'p',
                text: 'الأمر لا يتعلّق بحمل صيدلية كاملة، بل بتغطية الأسبوعين الأوّلين، قبل أن تفهم من أين تشتري ماذا.',
              },
              {
                type: 'ul',
                items: [
                  'علاجاتك الشخصية الجارية، بكمية تكفي عدة أشهر، مع الوصفات المقابلة.',
                  'الوصفة أو التقرير الطبي مترجَمًا، إن كنت تتابع علاجًا طويل المدى.',
                  'ما يعالج رشحًا أو التهاب حلق أو صداعًا في الأيام الأولى.',
                  'مقياس حرارة وحدّ أدنى من اللصقات.',
                ],
              },
              {
                type: 'p',
                text: 'وإن كنت تتابع علاجًا منتظمًا، تحقّق من أمرين قبل السفر: توفّر المادة الفعّالة في روسيا، وشروط الدخول إلى الإقليم بأدوية بكميات، وقد تقتضي وصفة مترجَمة. استفسر من البعثة الدبلوماسية الروسية.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'الشتاء، السبب الحقيقي للاستشارات',
            blocks: [
              {
                type: 'p',
                text: 'الطلبة المغاربيون لا يمرضون في روسيا بسبب البرد نفسه، بل بسبب الفوارق: قاعات شديدة التسخين، وخارج شديد البرودة، عدة مرات في اليوم. واللباس بطبقات متتالية يمكن خلعها عند الدخول يتحمّل هذه الفوارق أفضل بكثير من معطف سميك واحد.',
              },
              {
                type: 'p',
                text: 'وعاملان آخران يستحقّان الانتباه في الشتاء الأول: نقص ضوء النهار الذي يثقل النوم والمعنويات، وجفاف الهواء في المباني المسخَّنة، وهو مسؤول عن كثير من آلام الحلق.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'ما هو طبي وما هو دعم نفسي',
            blocks: [
              {
                type: 'p',
                text: 'السداسي الأول بعيدًا عن البيت متعب، والتعب ليس دائمًا طبيًّا. فبين اللغة والمناخ والبعد عن الأهل، تكون فترة صعبة في نوفمبر أو فبراير أمرًا عاديًّا — ولا تُحلّ في الصيدلية.',
              },
              {
                type: 'p',
                text: 'تحدّث عن ذلك: مع طلبة أكثر تقدّمًا، ومع مصلحة العلاقات الدولية، ومع عائلتك. وإن كنت مواكَبًا من فرقنا، فهذا أيضًا ما نحن هنا للاستماع إليه. وكثيرًا ما يُنقذ سداسيٌّ بمحادثة، ونادرًا بدواء.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل التأمين الصحي إلزامي للطالب في روسيا؟',
            answer:
              'التغطية الصحية منتظرة من الطلبة الدوليين، والبوليصة المطلوبة تُكتتَب محليًّا وفق ما تحدّده الجامعة. اطلب كتابيًّا من مصلحة العلاقات الدولية معرفة البوليصة وسعرها وما تغطّيه.',
          },
          {
            question: 'هل يمكن حمل الأدوية من تونس؟',
            answer:
              'احمل علاجاتك الجارية مع الوصفات المقابلة، ومترجَمة إن أمكن. وبالنسبة إلى الكميات المهمّة، يجب التحقّق من شروط الدخول إلى الإقليم الروسي لدى البعثة الدبلوماسية الروسية قبل السفر.',
          },
          {
            question: 'كيف أجد دواءً لا أعرف إلا علامته التونسية؟',
            answer:
              'ابحث عن اسم المادة الفعّالة لا العلامة: فهو المفهوم في كل مكان. سجّله قبل السفر لكل أدويتك المعتادة واعرضه على الصيدلي.',
          },
          {
            question: 'إلى أين أذهب في حالة الطوارئ؟',
            answer:
              'اطلب هذه المعلومة من مصلحة العلاقات الدولية في جامعتك من الأسابيع الأولى: رقم الطوارئ المحلي، والمؤسسة المرجعية، وما تفعله خارج أوقات عمل المصلحة الطبية الجامعية. دوّن هذه الأجوبة قبل أن تحتاجها.',
          },
        ],
        keywords: [
          'العلاج في روسيا للطالب',
          'التأمين الصحي الطلابي روسيا',
          'الصيدلية في روسيا الأدوية',
          'طبيب للطلبة الأجانب في روسيا',
          'الصحة في الشتاء الأول روسيا',
          'حقيبة أدوية السفر إلى روسيا',
        ],
      },
      ru: {
        title: 'Медицинская помощь в России: врач, аптека и студенческая страховка | RusStudy',
        description:
          'Как попасть к врачу, что покрывает студенческая страховка, как ориентироваться в российской аптеке и какие лекарства взять из дома. Практическое руководство на первые месяцы.',
        h1: 'Медицинская помощь в России: врач, аптека и студенческая страховка',
        publishedLabel: 'Публикация: декабрь 2026',
        excerpt:
          'Первая зима проверяет всех. Лучше заранее знать, как попасть к врачу, что покрыто и как прочитать упаковку лекарства.',
        intro:
          'Эту главу никто не готовит заранее, и это досадно: болезнь за границей — прежде всего вопрос информации. Куда идти, кому звонить, за что платить. Вот что стоит понять до первой ноябрьской простуды.',
        sections: [
          {
            heading: 'Страховка: первое, что нужно решить',
            blocks: [
              {
                type: 'p',
                text: 'Иностранный студент в России должен иметь медицинское покрытие, и требуемый полис оформляется на месте в порядке, который указывает вуз. Это один из первых шагов после приезда, наряду с миграционным учётом.',
              },
              {
                type: 'p',
                text: 'Два пункта стоит уточнить письменно в отделе международных связей, потому что ответы различаются по вузам и по годам:',
              },
              {
                type: 'ul',
                items: [
                  'Какой полис требуется, где его оформлять и по какой годовой стоимости?',
                  'Что именно он покрывает: приёмы, стационар, лекарства, стоматологию и на каких условиях?',
                ],
              },
              {
                type: 'strong',
                text: 'Не считайте, что туристическая страховка, купленная дома, заменяет требуемый на месте полис. Подтвердите это, чтобы не платить дважды.',
              },
              { type: 'related', slug: 'enregistrement-migratoire-premiers-jours-russie' },
            ],
          },
          {
            heading: 'Куда обращаться: сначала университетская медслужба',
            blocks: [
              {
                type: 'p',
                text: 'Большинство вузов направляет студентов в собственную медицинскую службу или в партнёрское учреждение. Это первая и самая простая точка входа: там привыкли к иностранным студентам и к вопросам страхования.',
              },
              {
                type: 'p',
                text: 'Спросите в первые недели, пока не понадобилось: где эта служба, какие у неё часы, нужна ли запись и что делать вне часов приёма. Четыре ответа, сохранённые в телефоне, лучше судорожного поиска в воскресенье вечером.',
              },
            ],
          },
          {
            heading: 'Российская аптека: что отличается',
            blocks: [
              {
                type: 'p',
                text: 'Аптек в российских городах много, часто с длинным графиком. Три практических отличия стоит знать до первого визита.',
              },
              {
                type: 'ul',
                items: [
                  'Торговые названия иные. Лекарство, знакомое вам по бренду, может существовать под другим названием: называть нужно действующее вещество, а не марку.',
                  'Правила отпуска различаются: что-то продаётся дома свободно, а здесь по рецепту, и наоборот. Не полагайтесь на привычку.',
                  'Упаковки и инструкции на русском. Сфотографировать инструкцию и перевести — полезный рефлекс, особенно в части дозировки.',
                ],
              },
              {
                type: 'strong',
                text: 'Перед выездом выпишите международное название — действующее вещество — каждого лекарства, которое принимаете регулярно. Именно его поймёт фармацевт.',
              },
            ],
          },
          {
            heading: 'Аптечка из дома',
            blocks: [
              {
                type: 'p',
                text: 'Речь не о том, чтобы увезти всю аптеку, а о том, чтобы закрыть первые две недели, пока не разберётесь, где что покупать.',
              },
              {
                type: 'ul',
                items: [
                  'Текущие личные препараты в количестве на несколько месяцев, с соответствующими рецептами.',
                  'Рецепт или медицинское заключение в переводе, если лечение длительное.',
                  'Средства от простуды, боли в горле и головной боли на первые дни.',
                  'Термометр и небольшой набор перевязочных материалов.',
                ],
              },
              {
                type: 'p',
                text: 'Если вы принимаете препараты постоянно, проверьте до выезда две вещи: доступность действующего вещества в России и условия ввоза лекарств в количестве, где может потребоваться переведённый рецепт. Уточните в российском дипломатическом представительстве.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Зима — настоящая причина обращений',
            blocks: [
              {
                type: 'p',
                text: 'Студенты из Магриба болеют в России не из-за самого холода, а из-за перепадов: сильно отапливаемые помещения и очень холодная улица, несколько раз в день. Одежда слоями, которые можно снять внутри, справляется с этим гораздо лучше одного толстого пальто.',
              },
              {
                type: 'p',
                text: 'Ещё два фактора заслуживают внимания в первую зиму: недостаток дневного света, влияющий на сон и настроение, и сухой воздух отапливаемых зданий, из-за которого болит горло.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Где медицина, а где поддержка',
            blocks: [
              {
                type: 'p',
                text: 'Первый семестр далеко от дома утомляет, и усталость не всегда медицинская. Язык, климат, разлука с семьёй — трудная полоса в ноябре или феврале обычна, и в аптеке она не решается.',
              },
              {
                type: 'p',
                text: 'Говорите об этом: со старшими студентами, с отделом международных связей, с семьёй. Если вас сопровождают наши команды, мы здесь и для этого. Семестр чаще спасает разговор, чем лекарство.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Обязательна ли медицинская страховка для студента в России?',
            answer:
              'Медицинское покрытие ожидается от иностранных студентов, а требуемый полис оформляется на месте в порядке, установленном вузом. Запросите письменно в отделе международных связей, какой полис оформлять, по какой цене и что он покрывает.',
          },
          {
            question: 'Можно ли везти лекарства из дома?',
            answer:
              'Везите текущие препараты с соответствующими рецептами, желательно переведёнными. При значительных количествах условия ввоза на территорию России нужно уточнить в российском дипломатическом представительстве до выезда.',
          },
          {
            question: 'Как найти лекарство, если знаю только домашнее торговое название?',
            answer:
              'Ищите название действующего вещества, а не бренда: его понимают везде. Выпишите его до выезда для всех привычных препаратов и покажите фармацевту.',
          },
          {
            question: 'Куда обращаться в экстренном случае?',
            answer:
              'Спросите об этом в отделе международных связей вуза в первые недели: местный номер экстренных служб, профильное учреждение и порядок действий вне часов работы университетской медслужбы. Запишите ответы заранее.',
          },
        ],
        keywords: [
          'медицинская помощь студенту в России',
          'студенческая медицинская страховка',
          'аптека в России лекарства',
          'врач для иностранного студента',
          'здоровье первая зима в России',
          'аптечка при переезде в Россию',
        ],
      },
    },
  },
  {
    slug: 'noel-nouvel-an-calendrier-universitaire-russe',
    publishedAt: '2026-12-21',
    copy: {
      fr: {
        title: 'Nouvel An, Noël orthodoxe et calendrier universitaire russe | RusStudy',
        description:
          "Pourquoi le Nouvel An compte plus que Noël en Russie, quand tombe le Noël orthodoxe, comment s'organisent la session d'examens et les vacances d'hiver, et ce que cela change pour un étudiant qui veut rentrer au pays.",
        h1: 'Nouvel An, Noël orthodoxe et calendrier universitaire russe',
        publishedLabel: 'Publication : Décembre 2026',
        excerpt:
          "En Russie, la grande fête de fin d'année est le 1er janvier, et le Noël orthodoxe tombe le 7. Entre les deux, votre faculté est peut-être en pleine session d'examens.",
        intro:
          "Chaque première année est surprise par le mois de janvier russe. Le pays s'arrête pour plusieurs jours au tout début du mois, puis la vie reprend — alors que pour les étudiants, janvier est souvent le mois des examens. Comprendre cette superposition évite de réserver un billet d'avion au pire moment.",
        sections: [
          {
            heading: 'Le Nouvel An, et non Noël, est la grande fête',
            blocks: [
              {
                type: 'p',
                text: "Pour un étudiant qui arrive du Maghreb, c'est la première chose à comprendre : en Russie, la soirée du 31 décembre et la journée du 1er janvier constituent la fête familiale majeure de l'année. Sapin décoré, repas de famille, cadeaux, vœux télévisés à minuit.",
              },
              {
                type: 'p',
                text: "Les premiers jours de janvier sont des jours fériés en Russie : beaucoup d'administrations, de banques et de services ferment ou fonctionnent en effectif réduit. Si vous avez une démarche administrative à accomplir, ne la placez pas dans cette fenêtre.",
              },
            ],
          },
          {
            heading: 'Le Noël orthodoxe du 7 janvier',
            blocks: [
              {
                type: 'p',
                text: "L'Église orthodoxe russe suit le calendrier julien pour les fêtes fixes : son Noël tombe donc le 7 janvier, et non le 25 décembre. C'est une fête religieuse, plus intime que le Nouvel An, et beaucoup moins commerciale.",
              },
              {
                type: 'p',
                text: "Vous entendrez aussi parler du « vieux Nouvel An », le 14 janvier, correspondant au 1er janvier du calendrier julien. Ce n'est pas un jour férié, mais une tradition qui prolonge la période des fêtes.",
              },
              {
                type: 'p',
                text: "Pour un étudiant musulman, rien de tout cela ne pose de difficulté pratique : ce sont des repères culturels et des jours de fermeture à connaître, pas des obligations.",
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-le-maroc' },
            ],
          },
          {
            heading: 'La session d’examens : le vrai sujet de janvier',
            blocks: [
              {
                type: 'p',
                text: "Dans le système russe, le semestre d'automne se clôt par une session d'examens, précédée d'une période de contrôles à valider pour pouvoir s'y présenter. Cette session se situe généralement en janvier, et les vacances d'hiver viennent après, pas avant.",
              },
              {
                type: 'strong',
                text: "Nous ne publions pas de dates : le calendrier exact est fixé par chaque faculté et varie d'un établissement à l'autre et d'une année à l'autre. Récupérez celui de votre faculté dès le début du semestre.",
              },
              {
                type: 'p',
                text: "Trois dates à noter dès septembre, avant toute réservation de billet :",
              },
              {
                type: 'ul',
                items: [
                  'La fin de la période de contrôles continus qui conditionne l’accès aux examens.',
                  'Le premier et le dernier jour de la session d’examens.',
                  'Les dates officielles des vacances d’hiver.',
                ],
              },
            ],
          },
          {
            heading: 'Le piège du billet d’avion',
            blocks: [
              {
                type: 'p',
                text: "C'est l'erreur que nous voyons chaque année : un étudiant réserve son retour au pays pour la fin décembre, parce que c'est la période des vacances dans son pays d'origine — et il se retrouve à passer ses examens à distance, ou pas du tout.",
              },
              {
                type: 'p',
                text: "La règle est simple : ne réservez aucun billet avant d'avoir le calendrier écrit de votre faculté, y compris les dates de rattrapage éventuelles. Un examen manqué pour un vol se repasse dans des conditions bien moins confortables.",
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Si vous restez sur place pendant les fêtes',
            blocks: [
              {
                type: 'p',
                text: "Beaucoup d'étudiants internationaux ne rentrent pas en janvier, pour des raisons de coût ou de calendrier. Quelques points pratiques pour que la période se passe bien.",
              },
              {
                type: 'ul',
                items: [
                  "Vérifiez auprès de votre résidence universitaire si elle reste ouverte et dans quelles conditions pendant la période des fêtes.",
                  'Faites vos courses avant le 31 décembre : les commerces ferment ou réduisent leurs horaires sur plusieurs jours.',
                  "Anticipez les démarches administratives et bancaires : rien ne s'obtient dans la première semaine de janvier.",
                  "Gardez un œil sur les plus isolés : c'est la période où l'éloignement familial pèse le plus lourd.",
                ],
              },
              {
                type: 'p',
                text: "C'est aussi, paradoxalement, un très bon moment pour progresser en russe : la ville est vivante, détendue, et les conversations sont plus faciles qu'en période d'examens.",
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'Et après : le semestre de printemps',
            blocks: [
              {
                type: 'p',
                text: "Les vacances d'hiver sont courtes. Le semestre de printemps s'ouvre ensuite, et c'est aussi la période où arrivent les étudiants admis à la session de février dans les établissements qui la proposent.",
              },
              {
                type: 'p',
                text: "Pour un candidat qui prépare son dossier depuis le Maghreb, cela signifie que janvier n'est pas un mois creux : c'est celui où les derniers détails d'un départ en février se jouent.",
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quand tombe le Noël orthodoxe en Russie ?',
            answer:
              "L'Église orthodoxe russe suit le calendrier julien pour les fêtes fixes, ce qui place son Noël le 7 janvier. La grande fête familiale de fin d'année reste toutefois le Nouvel An, du 31 décembre au 1er janvier.",
          },
          {
            question: 'Les cours s’arrêtent-ils entre Noël et le Nouvel An ?',
            answer:
              "Le calendrier universitaire est fixé par chaque faculté et nous ne publions pas de dates. Dans le système russe, le semestre d'automne se termine par une session d'examens généralement située en janvier, les vacances d'hiver venant après. Demandez le calendrier écrit de votre faculté dès le début du semestre.",
          },
          {
            question: 'Puis-je rentrer au pays fin décembre ?',
            answer:
              "Seulement si le calendrier de votre faculté le permet. C'est l'erreur la plus fréquente : réserver un vol sur les vacances du pays d'origine et découvrir que la session d'examens tombe en janvier. Vérifiez avant de payer un billet.",
          },
          {
            question: 'Les administrations sont-elles ouvertes début janvier ?',
            answer:
              "Les premiers jours de janvier sont fériés en Russie et de nombreux services fonctionnent en effectif réduit ou ferment. Anticipez toute démarche administrative, bancaire ou liée à votre enregistrement avant la fin décembre.",
          },
        ],
        keywords: [
          'nouvel an russie étudiant',
          'noël orthodoxe 7 janvier',
          'calendrier universitaire russe',
          'session examens janvier russie',
          'vacances hiver université russie',
          'fêtes fin année russie étudiant étranger',
        ],
      },
      en: {
        title: 'New Year, Orthodox Christmas and the Russian academic calendar | RusStudy',
        description:
          'Why New Year matters more than Christmas in Russia, when Orthodox Christmas falls, how the exam session and winter break are organised, and what that changes for a student planning to go home.',
        h1: 'New Year, Orthodox Christmas and the Russian academic calendar',
        publishedLabel: 'Published: December 2026',
        excerpt:
          'In Russia the great end-of-year celebration is 1 January, and Orthodox Christmas falls on the 7th. In between, your faculty may be in the middle of exams.',
        intro:
          'Every first year is caught out by the Russian January. The country stops for several days at the very start of the month, then life resumes — while for students January is often the exam month. Understanding that overlap saves you from booking a flight at the worst possible moment.',
        sections: [
          {
            heading: 'New Year, not Christmas, is the big celebration',
            blocks: [
              {
                type: 'p',
                text: 'For a student arriving from the Maghreb, this is the first thing to grasp: in Russia, the evening of 31 December and the day of 1 January are the major family festivity of the year. A decorated tree, a family meal, presents, televised greetings at midnight.',
              },
              {
                type: 'p',
                text: 'The first days of January are public holidays in Russia: many administrations, banks and services close or run with reduced staff. If you have an administrative step to complete, do not place it in that window.',
              },
            ],
          },
          {
            heading: 'Orthodox Christmas on 7 January',
            blocks: [
              {
                type: 'p',
                text: 'The Russian Orthodox Church follows the Julian calendar for fixed feasts, so its Christmas falls on 7 January rather than 25 December. It is a religious celebration, more intimate than New Year and far less commercial.',
              },
              {
                type: 'p',
                text: 'You will also hear of “old New Year” on 14 January, corresponding to 1 January in the Julian calendar. It is not a public holiday but a tradition that extends the festive period.',
              },
              {
                type: 'p',
                text: 'For a Muslim student, none of this raises any practical difficulty: these are cultural markers and closing days to know about, not obligations.',
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-le-maroc' },
            ],
          },
          {
            heading: 'The exam session: January’s real subject',
            blocks: [
              {
                type: 'p',
                text: 'In the Russian system the autumn semester closes with an exam session, preceded by a period of assessments that must be passed to sit it. That session is generally in January, and the winter break comes after, not before.',
              },
              {
                type: 'strong',
                text: 'We publish no dates: the exact calendar is set by each faculty and varies between institutions and between years. Get your faculty’s calendar at the start of the semester.',
              },
              { type: 'p', text: 'Three dates to note from September, before booking anything:' },
              {
                type: 'ul',
                items: [
                  'The end of the continuous assessment period that conditions access to the exams.',
                  'The first and last day of the exam session.',
                  'The official dates of the winter break.',
                ],
              },
            ],
          },
          {
            heading: 'The flight ticket trap',
            blocks: [
              {
                type: 'p',
                text: 'This is the mistake we see every year: a student books the trip home for late December, because that is the holiday period in their home country — and ends up sitting exams remotely, or not at all.',
              },
              {
                type: 'p',
                text: 'The rule is simple: book no ticket before you have your faculty’s written calendar, including any resit dates. An exam missed for a flight is retaken in far less comfortable conditions.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'If you stay for the holidays',
            blocks: [
              {
                type: 'p',
                text: 'Many international students do not travel home in January, for reasons of cost or calendar. A few practical points to make the period go well.',
              },
              {
                type: 'ul',
                items: [
                  'Check with your university residence whether it stays open and under what conditions during the festive period.',
                  'Shop before 31 December: shops close or cut their hours for several days.',
                  'Anticipate administrative and banking steps: nothing gets done in the first week of January.',
                  'Keep an eye on the most isolated: this is when distance from family weighs heaviest.',
                ],
              },
              {
                type: 'p',
                text: 'Paradoxically, it is also a very good time to improve your Russian: the city is lively and relaxed, and conversations come more easily than during exams.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'And then: the spring semester',
            blocks: [
              {
                type: 'p',
                text: 'The winter break is short. The spring semester opens next, and it is also when students admitted for the February intake arrive at the institutions that offer one.',
              },
              {
                type: 'p',
                text: 'For an applicant preparing a file from the Maghreb, that means January is not a quiet month: it is when the last details of a February departure are settled.',
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'When is Orthodox Christmas in Russia?',
            answer:
              'The Russian Orthodox Church follows the Julian calendar for fixed feasts, placing its Christmas on 7 January. The major family celebration of the end of the year remains New Year, from 31 December to 1 January.',
          },
          {
            question: 'Do classes stop between Christmas and New Year?',
            answer:
              'The academic calendar is set by each faculty and we publish no dates. In the Russian system the autumn semester ends with an exam session generally held in January, with the winter break afterwards. Ask for your faculty’s written calendar at the start of the semester.',
          },
          {
            question: 'Can I go home in late December?',
            answer:
              'Only if your faculty’s calendar allows it. This is the most frequent mistake: booking a flight over the home country’s holidays and discovering that the exam session falls in January. Check before paying for a ticket.',
          },
          {
            question: 'Are administrations open in early January?',
            answer:
              'The first days of January are public holidays in Russia and many services run with reduced staff or close. Anticipate any administrative, banking or registration step before the end of December.',
          },
        ],
        keywords: [
          'new year in russia student',
          'orthodox christmas 7 january',
          'russian academic calendar',
          'january exam session russia',
          'winter break russian university',
          'end of year holidays russia international student',
        ],
      },
      ar: {
        title: 'رأس السنة وعيد الميلاد الأرثوذكسي والرُوزنامة الجامعية الروسية | RusStudy',
        description:
          'لماذا يكون رأس السنة أهمّ من عيد الميلاد في روسيا، ومتى يقع الميلاد الأرثوذكسي، وكيف تُنظَّم دورة الامتحانات وعُطلة الشتاء، وما يعنيه ذلك لطالب يريد العودة إلى بلده.',
        h1: 'رأس السنة وعيد الميلاد الأرثوذكسي والرُوزنامة الجامعية الروسية',
        publishedLabel: 'النشر: ديسمبر 2026',
        excerpt:
          'في روسيا، الاحتفال الكبير بنهاية السنة هو غرة جانفي، والميلاد الأرثوذكسي يقع في السابع منه. وبينهما قد تكون كلّيتك في عزّ دورة الامتحانات.',
        intro:
          'كل سنة أولى يفاجئها شهر جانفي الروسي. تتوقّف البلاد عدة أيام في بدايته، ثم تستأنف الحياة — في حين أن جانفي بالنسبة إلى الطلبة هو غالبًا شهر الامتحانات. وفهم هذا التراكب يمنعك من حجز تذكرة طائرة في أسوأ وقت ممكن.',
        sections: [
          {
            heading: 'رأس السنة، لا الميلاد، هو الاحتفال الكبير',
            blocks: [
              {
                type: 'p',
                text: 'بالنسبة إلى طالب قادم من المغرب الكبير، هذا أول ما يجب فهمه: في روسيا، ليلة 31 ديسمبر ويوم غرة جانفي هما العيد العائلي الأكبر في السنة. شجرة مزيّنة، وعشاء عائلي، وهدايا، وتهاني متلفزة عند منتصف الليل.',
              },
              {
                type: 'p',
                text: 'والأيام الأولى من جانفي أيام عطلة رسمية في روسيا: فكثير من الإدارات والبنوك والمصالح تُغلق أو تعمل بعدد مقلَّص. وإن كان لديك إجراء إداري، فلا تضعه في هذه النافذة.',
              },
            ],
          },
          {
            heading: 'الميلاد الأرثوذكسي في 7 جانفي',
            blocks: [
              {
                type: 'p',
                text: 'تتبع الكنيسة الأرثوذكسية الروسية التقويم اليولياني في الأعياد الثابتة، فيقع ميلادها في 7 جانفي لا في 25 ديسمبر. وهو عيد ديني، أكثر حميمية من رأس السنة وأقلّ منه تجارية بكثير.',
              },
              {
                type: 'p',
                text: 'وستسمع أيضًا عن «رأس السنة القديم» في 14 جانفي، المقابل لغرة جانفي في التقويم اليولياني. وليس يوم عطلة رسمية، بل تقليد يمدّد فترة الأعياد.',
              },
              {
                type: 'p',
                text: 'وبالنسبة إلى طالب مسلم، لا شيء من ذلك يطرح صعوبة عملية: هذه معالم ثقافية وأيام إغلاق يجب معرفتها، لا التزامات.',
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-le-maroc' },
            ],
          },
          {
            heading: 'دورة الامتحانات: الموضوع الحقيقي في جانفي',
            blocks: [
              {
                type: 'p',
                text: 'في المنظومة الروسية، يُختم السداسي الخريفي بدورة امتحانات تسبقها فترة فروض يجب النجاح فيها للمشاركة في الدورة. وتكون هذه الدورة عادةً في جانفي، وتأتي عُطلة الشتاء بعدها لا قبلها.',
              },
              {
                type: 'strong',
                text: 'لا ننشر تواريخ: الرُوزنامة الدقيقة تحدّدها كل كلّية وتتفاوت بين المؤسسات ومن سنة إلى أخرى. احصل على رُوزنامة كلّيتك من بداية السداسي.',
              },
              { type: 'p', text: 'ثلاثة تواريخ تُدوَّن من سبتمبر، قبل أي حجز:' },
              {
                type: 'ul',
                items: [
                  'نهاية فترة الفروض المستمرّة التي تشترط الدخول إلى الامتحانات.',
                  'أول وآخر يوم من دورة الامتحانات.',
                  'التواريخ الرسمية لعُطلة الشتاء.',
                ],
              },
            ],
          },
          {
            heading: 'فخّ تذكرة الطائرة',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو الخطأ الذي نراه كل سنة: يحجز طالب عودته إلى بلده في آخر ديسمبر لأنها فترة العُطل في بلده الأصلي، فيجد نفسه يجتاز امتحاناته عن بعد، أو لا يجتازها مطلقًا.',
              },
              {
                type: 'p',
                text: 'والقاعدة بسيطة: لا تحجز أي تذكرة قبل أن تحصل على رُوزنامة كلّيتك المكتوبة، بما فيها تواريخ الدورات التعويضية إن وُجدت. فامتحان يُفقَد من أجل رحلة يُعاد في ظروف أقلّ راحة بكثير.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'إن بقيت هناك خلال الأعياد',
            blocks: [
              {
                type: 'p',
                text: 'كثير من الطلبة الدوليين لا يعودون في جانفي، لأسباب تتعلّق بالكلفة أو بالرُوزنامة. وهذه نقاط عملية لتمرّ الفترة بشكل جيد.',
              },
              {
                type: 'ul',
                items: [
                  'تحقّق لدى إقامتك الجامعية إن كانت تبقى مفتوحة وبأي شروط خلال فترة الأعياد.',
                  'تسوّق قبل 31 ديسمبر: فالمتاجر تُغلق أو تقلّص أوقاتها عدة أيام.',
                  'استبق الإجراءات الإدارية والبنكية: لا شيء يُنجَز في الأسبوع الأول من جانفي.',
                  'اهتمّ بالأكثر عزلة: فهذه هي الفترة التي يثقل فيها البعد عن الأهل أكثر من غيرها.',
                ],
              },
              {
                type: 'p',
                text: 'وهي أيضًا، على خلاف ما يُتوقَّع، وقت ممتاز للتقدّم في الروسية: المدينة حيّة ومرتاحة، والمحادثات أسهل منها في فترة الامتحانات.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'وبعد ذلك: السداسي الربيعي',
            blocks: [
              {
                type: 'p',
                text: 'عُطلة الشتاء قصيرة. ثم يُفتح السداسي الربيعي، وهي أيضًا الفترة التي يصل فيها الطلبة المقبولون في دورة فبراير في المؤسسات التي توفّرها.',
              },
              {
                type: 'p',
                text: 'وبالنسبة إلى مترشّح يحضّر ملفه من المغرب الكبير، يعني هذا أن جانفي ليس شهرًا فارغًا: فهو الشهر الذي تُحسم فيه آخر تفاصيل سفر في فبراير.',
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'متى يقع عيد الميلاد الأرثوذكسي في روسيا؟',
            answer:
              'تتبع الكنيسة الأرثوذكسية الروسية التقويم اليولياني في الأعياد الثابتة، فيقع ميلادها في 7 جانفي. أما العيد العائلي الكبير في نهاية السنة فيبقى رأس السنة، من 31 ديسمبر إلى غرة جانفي.',
          },
          {
            question: 'هل تتوقّف الدروس بين الميلاد ورأس السنة؟',
            answer:
              'الرُوزنامة الجامعية تحدّدها كل كلّية ولا ننشر تواريخ. في المنظومة الروسية يُختم السداسي الخريفي بدورة امتحانات تكون عادةً في جانفي، وتأتي عُطلة الشتاء بعدها. اطلب رُوزنامة كلّيتك المكتوبة من بداية السداسي.',
          },
          {
            question: 'هل يمكنني العودة إلى بلدي في آخر ديسمبر؟',
            answer:
              'فقط إذا سمحت رُوزنامة كلّيتك بذلك. وهذا أكثر الأخطاء شيوعًا: حجز رحلة في عُطل البلد الأصلي ثم اكتشاف أن دورة الامتحانات في جانفي. تحقّق قبل دفع ثمن تذكرة.',
          },
          {
            question: 'هل الإدارات مفتوحة في بداية جانفي؟',
            answer:
              'الأيام الأولى من جانفي عطلة رسمية في روسيا، وكثير من المصالح تعمل بعدد مقلَّص أو تُغلق. استبق أي إجراء إداري أو بنكي أو متعلّق بتسجيلك قبل نهاية ديسمبر.',
          },
        ],
        keywords: [
          'رأس السنة في روسيا طالب',
          'عيد الميلاد الأرثوذكسي 7 جانفي',
          'الرُوزنامة الجامعية الروسية',
          'دورة امتحانات جانفي روسيا',
          'عُطلة الشتاء الجامعة الروسية',
          'أعياد نهاية السنة روسيا طالب أجنبي',
        ],
      },
      ru: {
        title: 'Новый год, Рождество и российский учебный календарь | RusStudy',
        description:
          'Почему Новый год в России важнее Рождества, когда отмечают православное Рождество, как устроены сессия и зимние каникулы и что это меняет для студента, который планирует поездку домой.',
        h1: 'Новый год, Рождество и российский учебный календарь',
        publishedLabel: 'Публикация: декабрь 2026',
        excerpt:
          'В России главный праздник конца года — 1 января, а Рождество приходится на 7-е. А между ними ваш факультет может быть в разгаре сессии.',
        intro:
          'Российский январь застаёт врасплох каждый первый курс. В начале месяца страна останавливается на несколько дней, затем жизнь возвращается — а для студентов январь часто месяц экзаменов. Понимание этого наложения спасает от покупки билета в самый неудачный момент.',
        sections: [
          {
            heading: 'Главный праздник — Новый год, а не Рождество',
            blocks: [
              {
                type: 'p',
                text: 'Для студента, приехавшего из Магриба, это первое, что нужно понять: в России вечер 31 декабря и день 1 января — главный семейный праздник года. Украшенная ёлка, семейный стол, подарки, поздравление в полночь.',
              },
              {
                type: 'p',
                text: 'Первые дни января в России нерабочие: многие учреждения, банки и службы закрыты или работают сокращённым составом. Если нужно совершить административное действие, не ставьте его в это окно.',
              },
            ],
          },
          {
            heading: 'Православное Рождество 7 января',
            blocks: [
              {
                type: 'p',
                text: 'Русская православная церковь следует юлианскому календарю в неподвижных праздниках, поэтому её Рождество приходится на 7 января, а не на 25 декабря. Это религиозный праздник, более домашний, чем Новый год, и куда менее коммерческий.',
              },
              {
                type: 'p',
                text: 'Вы услышите и о «старом Новом годе» 14 января, соответствующем 1 января по юлианскому календарю. Это не выходной день, а традиция, продлевающая праздничный период.',
              },
              {
                type: 'p',
                text: 'Для студента-мусульманина ничего из этого не создаёт практических сложностей: это культурные ориентиры и дни закрытия учреждений, а не обязательства.',
              },
              { type: 'related', slug: 'etudier-en-russie-depuis-le-maroc' },
            ],
          },
          {
            heading: 'Сессия: настоящая тема января',
            blocks: [
              {
                type: 'p',
                text: 'В российской системе осенний семестр завершается экзаменационной сессией, которой предшествует период зачётов, необходимых для допуска. Сессия обычно приходится на январь, а зимние каникулы идут после неё, а не до.',
              },
              {
                type: 'strong',
                text: 'Дат мы не публикуем: точный календарь устанавливает каждый факультет, и он различается по вузам и по годам. Возьмите календарь своего факультета в начале семестра.',
              },
              { type: 'p', text: 'Три даты, которые стоит записать с сентября, до любых броней:' },
              {
                type: 'ul',
                items: [
                  'Окончание периода текущего контроля, от которого зависит допуск к экзаменам.',
                  'Первый и последний день сессии.',
                  'Официальные даты зимних каникул.',
                ],
              },
            ],
          },
          {
            heading: 'Ловушка авиабилета',
            blocks: [
              {
                type: 'p',
                text: 'Эту ошибку мы видим каждый год: студент бронирует дорогу домой на конец декабря, потому что это каникулы в его стране, — и в итоге сдаёт экзамены дистанционно или не сдаёт вовсе.',
              },
              {
                type: 'p',
                text: 'Правило простое: не покупайте билет, пока у вас нет письменного календаря факультета, включая возможные даты пересдач. Экзамен, пропущенный из-за рейса, пересдаётся в куда менее удобных условиях.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Если вы остаётесь на праздники',
            blocks: [
              {
                type: 'p',
                text: 'Многие иностранные студенты не едут домой в январе — из-за стоимости или календаря. Несколько практических пунктов, чтобы период прошёл спокойно.',
              },
              {
                type: 'ul',
                items: [
                  'Уточните в общежитии, остаётся ли оно открытым и на каких условиях в праздничный период.',
                  'Сделайте покупки до 31 декабря: магазины закрываются или сокращают часы на несколько дней.',
                  'Заранее закройте административные и банковские дела: в первую неделю января ничего не решается.',
                  'Присматривайте за самыми одинокими: именно тогда разлука с семьёй ощущается сильнее всего.',
                ],
              },
              {
                type: 'p',
                text: 'Как ни странно, это и очень хорошее время для русского языка: город живой и расслабленный, и говорить легче, чем в сессию.',
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
            ],
          },
          {
            heading: 'А дальше — весенний семестр',
            blocks: [
              {
                type: 'p',
                text: 'Зимние каникулы короткие. Затем открывается весенний семестр — и это же время приезда студентов, зачисленных на февральский набор в вузах, где он есть.',
              },
              {
                type: 'p',
                text: 'Для абитуриента, готовящего документы из Магриба, это значит, что январь — не пустой месяц: именно в нём решаются последние детали февральского отъезда.',
              },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Когда в России православное Рождество?',
            answer:
              'Русская православная церковь следует юлианскому календарю в неподвижных праздниках, поэтому её Рождество — 7 января. Главным семейным праздником конца года остаётся Новый год, с 31 декабря на 1 января.',
          },
          {
            question: 'Прекращаются ли занятия между Рождеством и Новым годом?',
            answer:
              'Учебный календарь устанавливает каждый факультет, и дат мы не публикуем. В российской системе осенний семестр завершается сессией, обычно в январе, а каникулы идут после. Запросите письменный календарь факультета в начале семестра.',
          },
          {
            question: 'Можно ли уехать домой в конце декабря?',
            answer:
              'Только если это допускает календарь вашего факультета. Самая частая ошибка — взять билет на каникулы в своей стране и обнаружить, что сессия в январе. Проверьте до оплаты билета.',
          },
          {
            question: 'Работают ли учреждения в начале января?',
            answer:
              'Первые дни января в России нерабочие, многие службы работают сокращённым составом или закрыты. Закройте любые административные, банковские и связанные с учётом дела до конца декабря.',
          },
        ],
        keywords: [
          'Новый год в России студент',
          'православное Рождество 7 января',
          'российский учебный календарь',
          'январская сессия в вузе',
          'зимние каникулы российский вуз',
          'праздники конца года иностранный студент',
        ],
      },
    },
  },
];
