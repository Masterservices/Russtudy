import type { BlogArticleEntry } from '../copy';

/*
 * Quatre articles sur les fêtes tunisiennes de 2027, publiés à la date du
 * jour pour être indexés avant l'événement. La date figure dans le titre, la
 * description et le slug.
 *
 * Dates fixes : Fête de la Révolution, 14 janvier 2027 ; Fête de l'Indépendance,
 * 20 mars 2027. Dates lunaires (Aïd el-Fitr, Aïd el-Adha) : données comme
 * approximatives, à confirmer par l'annonce officielle au moment de la fête.
 */
export const FETES_TUNISIE_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'fete-revolution-14-janvier-2027-etudiant-tunisien-russie',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Fête de la Révolution le 14 janvier 2027 : suivre la journée depuis la Russie | RusStudy',
        description:
          'La Fête de la Révolution tombe le 14 janvier 2027. Comment un étudiant tunisien en Russie peut suivre la journée, rester en contact avec sa famille et se tenir informé.',
        h1: 'Fête de la Révolution le 14 janvier 2027 : suivre la journée depuis la Russie',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          'Le 14 janvier est une fête nationale en Tunisie. Depuis la Russie, quelques gestes simples permettent de la vivre pleinement, même à distance.',
        intro:
          'Le 14 janvier, la Tunisie célèbre la Fête de la Révolution et de la Jeunesse. En 2027, la date tombe un jeudi. Si vous étudiez en Russie, vous pouvez y participer à distance : suivre les cérémonies officielles, appeler votre famille et garder le lien avec ce qui se passe au pays.',
        sections: [
          {
            heading: 'Suivre la journée depuis la Russie',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Suivre les cérémonies officielles retransmises par les médias tunisiens, en tenant compte du décalage horaire.',
                  'Appeler votre famille le jour même, à un moment qui convient à chacun.',
                  'Partager un message ou une photo de la journée avec vos proches en Tunisie.',
                ],
              },
              {
                type: 'p',
                text: 'Le décalage horaire entre la Russie et la Tunisie est de quelques heures : vérifiez l’heure locale avant de fixer un appel.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'Garder le lien avec le pays',
            blocks: [
              {
                type: 'p',
                text: 'Pour un étudiant loin de chez lui, les fêtes nationales sont aussi l’occasion de rester attaché à son pays. Participer à une célébration tunisienne organisée par une association d’étudiants, lorsqu’elle existe dans votre ville, renforce ce lien.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quelle est la date de la Fête de la Révolution en 2027 ?',
            answer:
              'Elle se célèbre le 14 janvier. En 2027, cela tombe un jeudi.',
          },
          {
            question: 'Le 14 janvier est-il un jour férié en Tunisie ?',
            answer:
              'Oui, c’est une fête nationale. Les modalités exactes de la fermeture des administrations sont annoncées par les autorités tunisiennes.',
          },
        ],
        keywords: [
          'fête de la Révolution 14 janvier 2027',
          'fête nationale Tunisie 2027',
          'étudiant tunisien Russie fête',
          '14 janvier 2027 Tunisie',
          'célébrer fête tunisienne à l’étranger',
        ],
      },
      en: {
        title: 'Revolution Day on 14 January 2027: following the day from Russia | RusStudy',
        description:
          'Revolution Day falls on 14 January 2027. How a Tunisian student in Russia can follow the day, stay in touch with family and keep up with the news.',
        h1: 'Revolution Day on 14 January 2027: following the day from Russia',
        publishedLabel: 'Published: November 2026',
        excerpt:
          '14 January is a national holiday in Tunisia. From Russia, a few simple steps let you take part in the day, even from a distance.',
        intro:
          'On 14 January, Tunisia celebrates Revolution and Youth Day. In 2027, the date falls on a Thursday. If you study in Russia, you can still take part from afar: follow the official ceremonies, call your family and stay connected to what is happening at home.',
        sections: [
          {
            heading: 'Following the day from Russia',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Follow the official ceremonies broadcast by Tunisian media, allowing for the time difference.',
                  'Call your family on the day, at a time that suits everyone.',
                  'Share a message or a photo of the day with relatives in Tunisia.',
                ],
              },
              {
                type: 'p',
                text: 'The time difference between Russia and Tunisia is a few hours: check the local time before setting a call.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'Staying connected to the country',
            blocks: [
              {
                type: 'p',
                text: 'For a student far from home, national holidays are also a chance to stay close to their country. Joining a Tunisian celebration organised by a student association, where one exists in your city, strengthens that bond.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'What is the date of Revolution Day in 2027?',
            answer:
              'It is celebrated on 14 January. In 2027 it falls on a Thursday.',
          },
          {
            question: 'Is 14 January a public holiday in Tunisia?',
            answer:
              'Yes, it is a national holiday. The exact closing arrangements for administrations are announced by the Tunisian authorities.',
          },
        ],
        keywords: [
          'Revolution Day 14 January 2027',
          'Tunisia national holiday 2027',
          'Tunisian student Russia holiday',
          '14 January 2027 Tunisia',
          'celebrate Tunisian holiday abroad',
        ],
      },
      ar: {
        title: 'عيد الثورة يوم 14 يناير 2027: متابعة اليوم من روسيا | RusStudy',
        description:
          'يوافق عيد الثورة يوم 14 يناير 2027. كيف يتابع الطالب التونسي في روسيا اليوم، ويبقى على اتصال بعائلته، ويطلع على الأخبار.',
        h1: 'عيد الثورة يوم 14 يناير 2027: متابعة اليوم من روسيا',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          '14 يناير عيد وطني في تونس. ومن روسيا، تتيح بعض الخطوات البسيطة أن تعيش اليوم حتى وإن كنت بعيدا.',
        intro:
          'يحتفل التونسيون في 14 يناير بعيد الثورة وشباب الوطن. وفي 2027 يوافق التاريخ يوم الخميس. وإن كنت تدرس في روسيا، يمكنك المشاركة عن بعد: متابعة الاحتفالات الرسمية، والاتصال بعائلتك، والبقاء على صلة بما يجري في الوطن.',
        sections: [
          {
            heading: 'متابعة اليوم من روسيا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'تابع الاحتفالات الرسمية التي تبثها وسائل الإعلام التونسية، مع مراعاة فارق التوقيت.',
                  'اتصل بعائلتك في اليوم نفسه، في وقت يناسب الجميع.',
                  'شارك رسالة أو صورة عن اليوم مع أقاربك في تونس.',
                ],
              },
              {
                type: 'p',
                text: 'فارق التوقيت بين روسيا وتونس بضع ساعات، فتحقق من التوقيت المحلي قبل تحديد المكالمة.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'البقاء على صلة بالوطن',
            blocks: [
              {
                type: 'p',
                text: 'بالنسبة للطالب البعيد عن بيته، تكون الأعياد الوطنية فرصة للبقاء قريبا من وطنه. والمشاركة في احتفال تونسي تنظمه جمعية طلابية، حيث توجد، تقوي هذه الصلة.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'ما تاريخ عيد الثورة سنة 2027؟',
            answer:
              'يُحتفل به يوم 14 يناير. وفي 2027 يوافق يوم الخميس.',
          },
          {
            question: 'هل 14 يناير عطلة رسمية في تونس؟',
            answer:
              'نعم، وهو عيد وطني. وتعلن السلطات التونسية التفاصيل الدقيقة لغلق الإدارات.',
          },
        ],
        keywords: [
          'عيد الثورة 14 يناير 2027',
          'عيد وطني تونسي 2027',
          'طالب تونسي في روسيا والأعياد',
          '14 يناير 2027 تونس',
          'الاحتفال بالعيد التونسي في الخارج',
        ],
      },
      ru: {
        title: 'День революции 14 января 2027 года: как следить за праздником из России | RusStudy',
        description:
          'День революции приходится на 14 января 2027 года. Как тунисский студент в России может следить за праздником, оставаться на связи с семьёй и быть в курсе новостей.',
        h1: 'День революции 14 января 2027 года: как следить за праздником из России',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          '14 января в Тунисе — национальный праздник. Из России несколько простых шагов помогут разделить его, даже на расстоянии.',
        intro:
          '14 января Тунис отмечает День революции и молодёжи. В 2027 году эта дата приходится на четверг. Если вы учитесь в России, можно участвовать на расстоянии: смотреть официальные церемонии, звонить семье и оставаться на связи с тем, что происходит на родине.',
        sections: [
          {
            heading: 'Как следить за праздником из России',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Смотреть официальные церемонии, которые транслируют тунисские СМИ, с учётом разницы во времени.',
                  'Позвонить семье в этот день в удобное для всех время.',
                  'Поделиться с родными в Тунисе сообщением или фото дня.',
                ],
              },
              {
                type: 'p',
                text: 'Разница во времени между Россией и Тунисом составляет несколько часов: уточните местное время перед звонком.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
          {
            heading: 'Как оставаться связанным с родиной',
            blocks: [
              {
                type: 'p',
                text: 'Для студента, далёкого от дома, национальные праздники — повод оставаться ближе к своей стране. Участие в тунисском празднике, который организует студенческое объединение, если оно есть в вашем городе, укрепляет эту связь.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Какого числа День революции в 2027 году?',
            answer:
              'Его отмечают 14 января. В 2027 году это четверг.',
          },
          {
            question: 'Является ли 14 января выходным в Тунисе?',
            answer:
              'Да, это национальный праздник. Точный порядок нерабочих дней для государственных учреждений объявляют тунисские власти.',
          },
        ],
        keywords: [
          'День революции 14 января 2027',
          'национальный праздник Туниса 2027',
          'тунисский студент в России праздник',
          '14 января 2027 Тунис',
          'отметить тунисский праздник за границей',
        ],
      },
    },
  },
  {
    slug: 'fete-independance-20-mars-2027-etudiant-tunisien-russie',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Fête de l’Indépendance le 20 mars 2027 : célébrer depuis la Russie | RusStudy',
        description:
          'La Fête de l’Indépendance de la Tunisie tombe le 20 mars 2027. Comment un étudiant tunisien en Russie peut la célébrer à distance et partager la journée avec sa famille.',
        h1: 'Fête de l’Indépendance le 20 mars 2027 : célébrer depuis la Russie',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          'Le 20 mars est la fête de l’Indépendance tunisienne. Depuis la Russie, c’est une bonne occasion de rester fier de ses racines et de partager la journée avec les siens.',
        intro:
          'Le 20 mars, la Tunisie célèbre le jour de son indépendance. En 2027, la date tombe un samedi. Ce jour férié, qui coïncide avec le début du printemps, se vit à distance : on suit les célébrations, on partage des souvenirs et l’on garde le lien avec ceux qui sont restés au pays.',
        sections: [
          {
            heading: 'Célébrer la journée à distance',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Suivre les cérémonies officielles et les émissions consacrées à l’indépendance.',
                  'Organiser un appel en famille ou entre amis tunisiens de votre ville.',
                  'Partager une photo ou un message sur ce que représente la fête pour vous.',
                ],
              },
              {
                type: 'strong',
                text: 'Le 20 mars coïncide avec le début du printemps. Pour les étudiants en Russie, cette période peut être chargée par les révisions : prévoyez votre emploi du temps à l’avance.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Rester uni entre étudiants tunisiens',
            blocks: [
              {
                type: 'p',
                text: 'Dans plusieurs villes russes, des étudiants tunisiens se retrouvent pour les fêtes nationales. Si vous êtes seul dans votre ville, rapprochez-vous de votre université ou des associations d’étudiants étrangers pour savoir s’il existe un groupe tunisien.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quelle est la date de la Fête de l’Indépendance en 2027 ?',
            answer:
              'Elle se célèbre le 20 mars. En 2027, cela tombe un samedi.',
          },
          {
            question: 'Le 20 mars est-il un jour férié en Tunisie ?',
            answer:
              'Oui, c’est une fête nationale. Les modalités exactes sont annoncées par les autorités tunisiennes.',
          },
        ],
        keywords: [
          'fête de l’Indépendance 20 mars 2027',
          'Tunisie indépendance 2027',
          'étudiant tunisien Russie fête nationale',
          '20 mars 2027 Tunisie',
          'célébrer fête tunisienne depuis la Russie',
        ],
      },
      en: {
        title: 'Independence Day on 20 March 2027: celebrating from Russia | RusStudy',
        description:
          'Tunisia’s Independence Day falls on 20 March 2027. How a Tunisian student in Russia can celebrate it from a distance and share the day with family.',
        h1: 'Independence Day on 20 March 2027: celebrating from Russia',
        publishedLabel: 'Published: November 2026',
        excerpt:
          '20 March is Tunisia’s Independence Day. From Russia, it is a good moment to stay proud of your roots and share the day with your loved ones.',
        intro:
          'On 20 March, Tunisia celebrates its independence. In 2027, the date falls on a Saturday. This public holiday, which coincides with the start of spring, can be lived from afar: follow the celebrations, share memories and stay connected to those at home.',
        sections: [
          {
            heading: 'Celebrating the day from a distance',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Follow the official ceremonies and programmes dedicated to independence.',
                  'Organise a call with family or with Tunisian friends in your city.',
                  'Share a photo or a message about what the holiday means to you.',
                ],
              },
              {
                type: 'strong',
                text: '20 March coincides with the start of spring. For students in Russia, this period can be busy with revision: plan your schedule in advance.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Staying united among Tunisian students',
            blocks: [
              {
                type: 'p',
                text: 'In several Russian cities, Tunisian students get together for national holidays. If you are alone in your city, contact your university or associations of foreign students to find out whether a Tunisian group exists.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'What is the date of Independence Day in 2027?',
            answer:
              'It is celebrated on 20 March. In 2027 it falls on a Saturday.',
          },
          {
            question: 'Is 20 March a public holiday in Tunisia?',
            answer:
              'Yes, it is a national holiday. The exact arrangements are announced by the Tunisian authorities.',
          },
        ],
        keywords: [
          'Independence Day 20 March 2027',
          'Tunisia independence 2027',
          'Tunisian student Russia national holiday',
          '20 March 2027 Tunisia',
          'celebrate Tunisian holiday from Russia',
        ],
      },
      ar: {
        title: 'عيد الاستقلال يوم 20 مارس 2027: الاحتفال من روسيا | RusStudy',
        description:
          'يوافق عيد الاستقلال في تونس يوم 20 مارس 2027. كيف يحتفل الطالب التونسي في روسيا بعيدا عن بلده ويشارك اليوم مع عائلته.',
        h1: 'عيد الاستقلال يوم 20 مارس 2027: الاحتفال من روسيا',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          '20 مارس هو عيد الاستقلال التونسي. ومن روسيا، هي فرصة لتبقى فخورا بجذورك وتشارك اليوم مع أحبائك.',
        intro:
          'يحتفل التونسيون في 20 مارس بذكرى استقلال بلادهم. وفي 2027 يوافق اليوم السبت. هذا العيد الرسمي الذي يتزامن مع بداية الربيع يمكن عيشه عن بعد: متابعة الاحتفالات، ومشاركة الذكريات، والبقاء على صلة بمن في الوطن.',
        sections: [
          {
            heading: 'الاحتفال باليوم عن بعد',
            blocks: [
              {
                type: 'ul',
                items: [
                  'تابع الاحتفالات الرسمية والبرامج المخصصة للاستقلال.',
                  'نظّم مكالمة مع عائلتك أو مع أصدقائك التونسيين في مدينتك.',
                  'شارك صورة أو رسالة عن معنى العيد بالنسبة لك.',
                ],
              },
              {
                type: 'strong',
                text: 'يتزامن 20 مارس مع بداية الربيع. وقد تكون هذه الفترة مزدحمة بالمراجعة بالنسبة للطلاب في روسيا، فخطط لوقتك مسبقا.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'البقاء متحدين بين الطلاب التونسيين',
            blocks: [
              {
                type: 'p',
                text: 'في عدة مدن روسية يجتمع الطلاب التونسيون في الأعياد الوطنية. وإن كنت وحيدا في مدينتك، فتواصل مع جامعتك أو جمعيات الطلاب الأجانب لتعرف إن كانت هناك مجموعة تونسية.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'ما تاريخ عيد الاستقلال سنة 2027؟',
            answer:
              'يُحتفل به يوم 20 مارس. وفي 2027 يوافق يوم السبت.',
          },
          {
            question: 'هل 20 مارس عطلة رسمية في تونس؟',
            answer:
              'نعم، وهو عيد وطني. وتعلن السلطات التونسية التفاصيل الدقيقة.',
          },
        ],
        keywords: [
          'عيد الاستقلال 20 مارس 2027',
          'استقلال تونس 2027',
          'طالب تونسي في روسيا عيد وطني',
          '20 مارس 2027 تونس',
          'الاحتفال بالعيد التونسي من روسيا',
        ],
      },
      ru: {
        title: 'День независимости 20 марта 2027 года: как праздновать из России | RusStudy',
        description:
          'День независимости Туниса приходится на 20 марта 2027 года. Как тунисский студент в России может отметить праздник на расстоянии и разделить его с семьёй.',
        h1: 'День независимости 20 марта 2027 года: как праздновать из России',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          '20 марта — День независимости Туниса. Из России это хороший повод гордиться своими корнями и разделить день с близкими.',
        intro:
          '20 марта Тунис празднует день своей независимости. В 2027 году эта дата приходится на субботу. Этот праздник совпадает с началом весны, и его можно пережить на расстоянии: следить за торжествами, делиться воспоминаниями и оставаться на связи с теми, кто на родине.',
        sections: [
          {
            heading: 'Как праздновать день на расстоянии',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Следить за официальными церемониями и программами, посвящёнными независимости.',
                  'Организовать звонок семье или тунисским друзьям из вашего города.',
                  'Поделиться фото или сообщением о том, что для вас значит этот праздник.',
                ],
              },
              {
                type: 'strong',
                text: '20 марта совпадает с началом весны. Для студентов в России это может быть загруженное время из-за подготовки к занятиям, поэтому заранее спланируйте расписание.',
              },
              { type: 'related', slug: 'reussir-premier-semestre-russie' },
            ],
          },
          {
            heading: 'Оставаться вместе с тунисскими студентами',
            blocks: [
              {
                type: 'p',
                text: 'В нескольких российских городах тунисские студенты собираются на национальные праздники. Если вы один в своём городе, уточните в университете или у объединений иностранных студентов, есть ли тунисская группа.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Какого числа День независимости в 2027 году?',
            answer:
              'Его отмечают 20 марта. В 2027 году это суббота.',
          },
          {
            question: 'Является ли 20 марта выходным в Тунисе?',
            answer:
              'Да, это национальный праздник. Точные детали объявляют тунисские власти.',
          },
        ],
        keywords: [
          'День независимости 20 марта 2027',
          'независимость Туниса 2027',
          'тунисский студент в России праздник',
          '20 марта 2027 Тунис',
          'отметить тунисский праздник из России',
        ],
      },
    },
  },
  {
    slug: 'aid-el-fitr-2027-etudiant-tunisien-russie',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Aïd el-Fitr 2027 en Russie : célébrer l’Aïd loin de chez soi | RusStudy',
        description:
          'L’Aïd el-Fitr 2027 tombe autour du 9 ou 10 mars 2027, selon l’annonce officielle. Comment un étudiant tunisien en Russie peut le fêter, retrouver une prière et partager l’Aïd avec sa famille.',
        h1: 'Aïd el-Fitr 2027 en Russie : célébrer l’Aïd loin de chez soi',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          'L’Aïd el-Fitr marque la fin du Ramadan. En Russie, on peut le vivre en communauté et en famille, à condition de bien s’organiser.',
        intro:
          'L’Aïd el-Fitr marque la fin du mois de Ramadan. Sa date exacte dépend de l’observation du croissant lunaire et se confirme au dernier moment : pour 2027, elle est attendue autour du 9 ou 10 mars. Loin de chez soi, l’Aïd se vit mieux lorsqu’on le prépare à l’avance.',
        sections: [
          {
            heading: 'Trouver une prière et une communauté',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Renseignez-vous auprès des associations musulmanes de votre ville sur les lieux de prière pendant l’Aïd.',
                  'Demandez à votre université si un groupe d’étudiants musulmans organise une rencontre.',
                  'Prévoyez de vous retrouver entre étudiants tunisiens ou maghrébins pour partager le repas.',
                ],
              },
              {
                type: 'p',
                text: 'Les horaires et les lieux varient selon les villes et les années : vérifiez-les quelques jours avant la fête.',
              },
              { type: 'related', slug: 'ramadan-et-etudes-en-russie' },
            ],
          },
          {
            heading: 'Partager l’Aïd avec sa famille',
            blocks: [
              {
                type: 'p',
                text: 'L’appel vidéo le matin de l’Aïd, avec ceux qui sont restés en Tunisie, reste le moment le plus important pour beaucoup d’étudiants. Pensez au décalage horaire pour le fixer.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quand tombe l’Aïd el-Fitr 2027 ?',
            answer:
              'Il est attendu autour du 9 ou 10 mars 2027. La date officielle est annoncée au moment de l’observation du croissant lunaire.',
          },
          {
            question: 'Peut-on faire la prière de l’Aïd en Russie ?',
            answer:
              'Dans de nombreuses villes russes, des lieux de prière accueillent les fidèles pour les fêtes. Renseignez-vous auprès des associations locales avant la date.',
          },
        ],
        keywords: [
          'Aïd el-Fitr 2027',
          'Aïd 2027 Russie',
          'Aïd étudiant tunisien Russie',
          'prière de l’Aïd Russie',
          'fin du Ramadan 2027 à l’étranger',
        ],
      },
      en: {
        title: 'Eid al-Fitr 2027 in Russia: celebrating Eid far from home | RusStudy',
        description:
          'Eid al-Fitr 2027 is expected around 9 or 10 March 2027, subject to official confirmation. How a Tunisian student in Russia can celebrate it, find prayer and share Eid with family.',
        h1: 'Eid al-Fitr 2027 in Russia: celebrating Eid far from home',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'Eid al-Fitr marks the end of Ramadan. In Russia it can be celebrated with the community and with family, if you plan ahead.',
        intro:
          'Eid al-Fitr marks the end of the month of Ramadan. Its exact date depends on the sighting of the crescent moon and is confirmed at the last moment: for 2027, it is expected around 9 or 10 March. Far from home, Eid is easier to enjoy when prepared in advance.',
        sections: [
          {
            heading: 'Finding prayer and community',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Ask Muslim associations in your city about prayer venues during Eid.',
                  'Ask your university whether a group of Muslim students is organising a gathering.',
                  'Plan to meet other Tunisian or Maghrebi students to share a meal.',
                ],
              },
              {
                type: 'p',
                text: 'Times and venues vary by city and year: check them a few days before the holiday.',
              },
              { type: 'related', slug: 'ramadan-et-etudes-en-russie' },
            ],
          },
          {
            heading: 'Sharing Eid with your family',
            blocks: [
              {
                type: 'p',
                text: 'The video call on the morning of Eid, with those who stayed in Tunisia, is the most important moment for many students. Allow for the time difference when setting it.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'When is Eid al-Fitr 2027?',
            answer:
              'It is expected around 9 or 10 March 2027. The official date is announced after the crescent moon is sighted.',
          },
          {
            question: 'Can I attend Eid prayers in Russia?',
            answer:
              'In many Russian cities, prayer venues welcome worshippers for the holidays. Check with local associations before the date.',
          },
        ],
        keywords: [
          'Eid al-Fitr 2027',
          'Eid 2027 Russia',
          'Eid Tunisian student Russia',
          'Eid prayer Russia',
          'end of Ramadan 2027 abroad',
        ],
      },
      ar: {
        title: 'عيد الفطر 2027 في روسيا: الاحتفال بالعيد بعيدا عن البيت | RusStudy',
        description:
          'يُتوقع أن يوافق عيد الفطر 2027 حوالي 9 أو 10 مارس 2027، والتاريخ الرسمي يُعلن لاحقا. كيف يحتفل الطالب التونسي في روسيا بالعيد ويجد مكان صلاة ويشارك عائلته.',
        h1: 'عيد الفطر 2027 في روسيا: الاحتفال بالعيد بعيدا عن البيت',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'عيد الفطر يعلن نهاية رمضان. وفي روسيا يمكن عيشه مع الجماعة والعائلة، إذا خططت له مبكرا.',
        intro:
          'يعلن عيد الفطر نهاية شهر رمضان. وموعده الدقيق يتوقف على رؤية هلال شوال ولا يُحسم إلا في وقت متأخر، ويُتوقع لعام 2027 حوالي 9 أو 10 مارس. وبعيدا عن البيت يصبح العيد أسهل عندما يُحضّر له مسبقا.',
        sections: [
          {
            heading: 'إيجاد مكان للصلاة والجماعة',
            blocks: [
              {
                type: 'ul',
                items: [
                  'استفسر لدى الجمعيات الإسلامية في مدينتك عن أماكن الصلاة في العيد.',
                  'اسأل جامعتك إن كانت مجموعة من الطلاب المسلمين تنظم لقاء.',
                  'خطط للاجتماع مع الطلاب التونسيين أو المغاربة لمشاركة وجبة العيد.',
                ],
              },
              {
                type: 'p',
                text: 'تختلف الأوقات والأماكن حسب المدن والسنوات، فتحقق منها قبل العيد ببضعة أيام.',
              },
              { type: 'related', slug: 'ramadan-et-etudes-en-russie' },
            ],
          },
          {
            heading: 'مشاركة العيد مع عائلتك',
            blocks: [
              {
                type: 'p',
                text: 'مكالمة الفيديو صباح العيد مع من بقي في تونس هي اللحظة الأهم لكثير من الطلاب. وراعِ فارق التوقيت عند تحديدها.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'متى يوافق عيد الفطر 2027؟',
            answer:
              'يُتوقع أن يوافق حوالي 9 أو 10 مارس 2027. ويُعلن التاريخ الرسمي بعد رؤية الهلال.',
          },
          {
            question: 'هل يمكن أداء صلاة العيد في روسيا؟',
            answer:
              'في كثير من المدن الروسية تستقبل أماكن الصلاة المصلين في الأعياد. استفسر من الجمعيات المحلية قبل الموعد.',
          },
        ],
        keywords: [
          'عيد الفطر 2027',
          'العيد 2027 روسيا',
          'العيد للطالب التونسي في روسيا',
          'صلاة العيد في روسيا',
          'نهاية رمضان 2027 في الخارج',
        ],
      },
      ru: {
        title: 'Ид аль-Фитр 2027 в России: как отметить праздник вдали от дома | RusStudy',
        description:
          'Ид аль-Фитр 2027 ожидается около 9 или 10 марта 2027 года, точная дата объявляется официально. Как тунисский студент в России может отметить праздник, найти место для молитвы и разделить его с семьёй.',
        h1: 'Ид аль-Фитр 2027 в России: как отметить праздник вдали от дома',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'Ид аль-Фитр отмечает окончание Рамадана. В России его можно провести в общине и с семьёй, если заранее всё спланировать.',
        intro:
          'Ид аль-Фитр отмечает окончание месяца Рамадан. Точная дата зависит от наблюдения новолуния и подтверждается в последний момент: для 2027 года ожидается около 9 или 10 марта. Вдали от дома праздник легче пережить, если подготовиться заранее.',
        sections: [
          {
            heading: 'Где помолиться и найти общину',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Уточните у мусульманских объединений вашего города, где проходят праздничные молитвы.',
                  'Спросите в университете, не организует ли группа мусульманских студентов встречу.',
                  'Договоритесь встретиться с тунисскими или магрибскими студентами, чтобы разделить праздничный стол.',
                ],
              },
              {
                type: 'p',
                text: 'Время и места различаются по городам и годам, поэтому проверьте их за несколько дней до праздника.',
              },
              { type: 'related', slug: 'ramadan-et-etudes-en-russie' },
            ],
          },
          {
            heading: 'Разделить праздник с семьёй',
            blocks: [
              {
                type: 'p',
                text: 'Видеозвонок утром праздника с теми, кто остался в Тунисе, — самый важный момент для многих студентов. Учитывайте разницу во времени при его назначении.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Когда Ид аль-Фитр в 2027 году?',
            answer:
              'Ожидается около 9 или 10 марта 2027 года. Официальную дату объявляют после наблюдения новолуния.',
          },
          {
            question: 'Можно ли помолиться на Ид в России?',
            answer:
              'Во многих российских городах молельные места принимают верующих в праздники. Уточните у местных объединений заранее.',
          },
        ],
        keywords: [
          'Ид аль-Фитр 2027',
          'Ид 2027 Россия',
          'Ид тунисский студент в России',
          'молитва на Ид в России',
          'окончание Рамадана 2027 за границей',
        ],
      },
    },
  },
  {
    slug: 'aid-el-adha-2027-etudiant-tunisien-russie',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Aïd el-Adha 2027 en Russie : préparer la fête depuis l’étranger | RusStudy',
        description:
          'L’Aïd el-Adha 2027 est attendu autour du 16 ou 17 mai 2027, selon l’annonce officielle. Comment un étudiant tunisien en Russie peut le préparer, trouver une prière et rester en lien avec sa famille.',
        h1: 'Aïd el-Adha 2027 en Russie : préparer la fête depuis l’étranger',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          'L’Aïd el-Adha est une grande fête familiale. Depuis la Russie, l’organisation se prépare des semaines à l’avance, surtout pour le lien avec la famille.',
        intro:
          'L’Aïd el-Adha, fête du sacrifice, tombe au dixième jour du mois de Dhou al-Hijja. Pour 2027, la date est attendue autour du 16 ou 17 mai, sous réserve de l’annonce officielle. C’est une fête qui réunit la famille : la distance y est souvent plus difficile à vivre, d’où l’intérêt de l’anticiper.',
        sections: [
          {
            heading: 'Anticiper la fête depuis la Russie',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Notez la date et prévoyez un appel en famille le matin de l’Aïd, en tenant compte du décalage horaire.',
                  'Renseignez-vous auprès des associations musulmanes de votre ville sur les lieux de prière.',
                  'Prévoyez de passer le jour de l’Aïd avec d’autres étudiants tunisiens, si vous le pouvez.',
                ],
              },
              {
                type: 'p',
                text: 'Les pratiques liées au sacrifice ne sont pas toujours possibles à l’étranger : renseignez-vous auprès de votre communauté sur les solutions qui existent localement.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
          {
            heading: 'Rester proche de sa famille pendant l’Aïd',
            blocks: [
              {
                type: 'p',
                text: 'L’Aïd est un moment de visites et de partage. Un appel préparé à l’avance, avec les personnes qui comptent, vaut souvent mieux qu’un appel improvisé le jour même.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quand tombe l’Aïd el-Adha 2027 ?',
            answer:
              'Il est attendu autour du 16 ou 17 mai 2027. La date officielle est annoncée par les autorités religieuses à l’approche de la fête.',
          },
          {
            question: 'Est-il possible de faire le sacrifice depuis la Russie ?',
            answer:
              'Cela dépend des pratiques locales et des possibilités offertes sur place. Renseignez-vous auprès de votre communauté musulmane, qui connaît les solutions disponibles.',
          },
        ],
        keywords: [
          'Aïd el-Adha 2027',
          'Aïd al-Adha 2027 Russie',
          'Aïd étudiant tunisien Russie',
          'fête du sacrifice 2027',
          'Aïd à l’étranger famille',
        ],
      },
      en: {
        title: 'Eid al-Adha 2027 in Russia: preparing the holiday from abroad | RusStudy',
        description:
          'Eid al-Adha 2027 is expected around 16 or 17 May 2027, subject to official confirmation. How a Tunisian student in Russia can prepare, find prayer and stay connected with family.',
        h1: 'Eid al-Adha 2027 in Russia: preparing the holiday from abroad',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'Eid al-Adha is a major family holiday. From Russia, preparation starts weeks ahead, especially for staying connected with family.',
        intro:
          'Eid al-Adha, the festival of sacrifice, falls on the tenth day of Dhu al-Hijjah. For 2027, the date is expected around 16 or 17 May, subject to the official announcement. It is a family holiday, and distance is often harder to bear, which is why it helps to plan ahead.',
        sections: [
          {
            heading: 'Preparing the holiday from Russia',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Note the date and plan a family call on the morning of Eid, allowing for the time difference.',
                  'Ask Muslim associations in your city about prayer venues.',
                  'If you can, plan to spend the day with other Tunisian students.',
                ],
              },
              {
                type: 'p',
                text: 'Practices linked to the sacrifice are not always possible abroad: ask your community which local options exist.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
          {
            heading: 'Staying close to family during Eid',
            blocks: [
              {
                type: 'p',
                text: 'Eid is a time for visits and sharing. A call prepared in advance with the people who matter often means more than an improvised call on the day itself.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'When is Eid al-Adha 2027?',
            answer:
              'It is expected around 16 or 17 May 2027. The official date is announced by religious authorities as the holiday approaches.',
          },
          {
            question: 'Can the sacrifice be performed from Russia?',
            answer:
              'It depends on local practices and the options available. Ask your Muslim community, which knows the solutions available.',
          },
        ],
        keywords: [
          'Eid al-Adha 2027',
          'Eid al-Adha 2027 Russia',
          'Eid Tunisian student Russia',
          'festival of sacrifice 2027',
          'Eid abroad family',
        ],
      },
      ar: {
        title: 'عيد الأضحى 2027 في روسيا: التحضير للعيد من الخارج | RusStudy',
        description:
          'يُتوقع أن يوافق عيد الأضحى 2027 حوالي 16 أو 17 مايو 2027، والتاريخ الرسمي يُعلن لاحقا. كيف يحضّر الطالب التونسي في روسيا للعيد ويجد مكان صلاة ويبقى على تواصل مع عائلته.',
        h1: 'عيد الأضحى 2027 في روسيا: التحضير للعيد من الخارج',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'عيد الأضحى عيد عائلي كبير. ومن روسيا يبدأ التحضير قبل أسابيع، خاصة للتواصل مع العائلة.',
        intro:
          'يوافق عيد الأضحى، عيد النحر، اليوم العاشر من ذي الحجة. ويُتوقع لعام 2027 حوالي 16 أو 17 مايو، مع انتظار الإعلان الرسمي. وهو عيد يجمع الأسرة، والبعد فيه أصعب في الغالب، لذلك يفيد التخطيط المبكر.',
        sections: [
          {
            heading: 'التحضير للعيد من روسيا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'دوّن التاريخ وخطط لمكالمة مع العائلة صباح العيد، مع مراعاة فارق التوقيت.',
                  'استفسر لدى الجمعيات الإسلامية في مدينتك عن أماكن الصلاة.',
                  'إن أمكن، خطط لقضاء يوم العيد مع طلاب تونسيين آخرين.',
                ],
              },
              {
                type: 'p',
                text: 'قد لا تكون الممارسات المرتبطة بالأضحية متاحة دائما في الخارج، فاستفسر من جماعتك عن الحلول المتوفرة محليا.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
          {
            heading: 'البقاء قريبا من العائلة في العيد',
            blocks: [
              {
                type: 'p',
                text: 'العيد وقت للزيارات والمشاركة. ومكالمة مُعدّة مسبقا مع من يهمك أمرهم تعني في الغالب أكثر من مكالمة مرتجلة في اليوم نفسه.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'متى يوافق عيد الأضحى 2027؟',
            answer:
              'يُتوقع أن يوافق حوالي 16 أو 17 مايو 2027. ويُعلن التاريخ الرسمي من الجهات الدينية عند اقتراب العيد.',
          },
          {
            question: 'هل يمكن إجراء الأضحية من روسيا؟',
            answer:
              'يعتمد ذلك على الممارسات المحلية والخيارات المتاحة. استفسر من جماعتك المسلمة التي تعرف الحلول المتوفرة.',
          },
        ],
        keywords: [
          'عيد الأضحى 2027',
          'عيد الأضحى 2027 روسيا',
          'العيد للطالب التونسي في روسيا',
          'عيد النحر 2027',
          'العيد في الخارج والعائلة',
        ],
      },
      ru: {
        title: 'Ид аль-Адха 2027 в России: как подготовиться к празднику из-за границы | RusStudy',
        description:
          'Ид аль-Адха 2027 ожидается около 16 или 17 мая 2027 года, точная дата объявляется официально. Как тунисский студент в России может подготовиться к празднику, найти молитву и оставаться на связи с семьёй.',
        h1: 'Ид аль-Адха 2027 в России: как подготовиться к празднику из-за границы',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'Ид аль-Адха — большой семейный праздник. Из России подготовка начинается за несколько недель, прежде всего ради связи с семьёй.',
        intro:
          'Ид аль-Адха, праздник жертвоприношения, приходится на десятый день месяца зу-ль-хиджа. В 2027 году дата ожидается около 16 или 17 мая, с окончательным официальным объявлением. Это семейный праздник, и расстояние здесь часто переживается тяжелее, поэтому полезно заранее всё продумать.',
        sections: [
          {
            heading: 'Подготовка к празднику из России',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Запомните дату и запланируйте звонок семье утром праздника с учётом разницы во времени.',
                  'Уточните у мусульманских объединений вашего города, где проходят молитвы.',
                  'По возможности договоритесь провести день праздника с другими тунисскими студентами.',
                ],
              },
              {
                type: 'p',
                text: 'Обряды, связанные с жертвоприношением, за границей не всегда возможны: уточните у своей общины, какие варианты есть на месте.',
              },
              { type: 'related', slug: 'vie-etudiante-integration-russie' },
            ],
          },
          {
            heading: 'Быть рядом с семьёй в праздник',
            blocks: [
              {
                type: 'p',
                text: 'Ид — время визитов и общения. Звонок, заранее продуманный с близкими людьми, часто значит больше, чем импровизированный звонок в сам день.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Когда Ид аль-Адха в 2027 году?',
            answer:
              'Ожидается около 16 или 17 мая 2027 года. Официальную дату объявляют религиозные власти ближе к празднику.',
          },
          {
            question: 'Можно ли совершить жертвоприношение из России?',
            answer:
              'Это зависит от местных практик и доступных возможностей. Уточните у своей мусульманской общины, которая знает доступные варианты.',
          },
        ],
        keywords: [
          'Ид аль-Адха 2027',
          'Ид аль-Адха 2027 Россия',
          'Ид тунисский студент в России',
          'праздник жертвоприношения 2027',
          'Ид за границей семья',
        ],
      },
    },
  },
];
