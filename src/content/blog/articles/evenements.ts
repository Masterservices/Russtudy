import type { BlogArticleEntry } from '../copy';

/*
 * Trois articles liés à des événements proches, publiés à la date du jour pour
 * que Google les indexe avant l'événement. La date de l'événement figure dans
 * le titre, la description et le slug.
 *
 * Dates vérifiables : Journée de la mère en Russie, dernier dimanche de
 * novembre (29 novembre 2026) ; Nouvel An, 1er janvier ; fête des mères en
 * Tunisie, 21 mars (dimanche 21 mars 2027). Aucun horaire ni tarif n'est affirmé.
 */
export const EVENEMENTS_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'journee-de-la-mere-russie-29-novembre-2026',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Journée de la mère en Russie le 29 novembre 2026 : que faire depuis la Tunisie ? | RusStudy',
        description:
          "La Journée de la mère en Russie tombe le 29 novembre 2026. Comment un étudiant tunisien peut la célébrer à distance, avec un message, un appel et une attention adaptée.",
        h1: 'Journée de la mère en Russie : le 29 novembre 2026, que faire depuis la Tunisie ?',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          "En Russie, la Journée de la mère se fête le dernier dimanche de novembre. En 2026, c'est le 29 novembre : une occasion simple de dire merci à distance.",
        intro:
          "Quand on étudie en Russie, la distance pèse surtout lors des fêtes. La Journée de la mère, fixée au dernier dimanche de novembre, tombe cette année le 29 novembre 2026. Voici comment la marquer, depuis votre résidence ou votre appartement, sans dépenser beaucoup.",
        sections: [
          {
            heading: 'Trois gestes simples, le 29 novembre',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Un appel vidéo prévu à l’avance, à une heure qui convient à votre mère et à vous.',
                  'Un message écrit ou une photo de votre vie en Russie, qui lui montre où vous êtes.',
                  'Un petit cadeau livré en Tunisie, à commander plusieurs jours avant la date.',
                ],
              },
              {
                type: 'p',
                text: 'Pensez au décalage horaire entre la Russie et la Tunisie avant de fixer l’appel, et commandez tôt : les livraisons internationales prennent plus de temps en fin de novembre.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Parler à sa famille depuis la Russie',
            blocks: [
              {
                type: 'p',
                text: 'Les appels réguliers comptent autant que les fêtes. Une famille inquiète d’un silence se rassure davantage avec un rendez-vous fixe chaque semaine qu’avec un grand appel une fois par an.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quelle est la date de la Journée de la mère en Russie en 2026 ?',
            answer:
              'Elle se fête le dernier dimanche de novembre. En 2026, c’est le dimanche 29 novembre.',
          },
          {
            question: 'Faut-il offrir un cadeau depuis la Russie ?',
            answer:
              'Ce n’est pas obligatoire. Un message, un appel ou une photo suffisent souvent. Si vous offrez un cadeau, commandez-le plusieurs jours avant la date pour éviter les retards.',
          },
        ],
        keywords: [
          'journée de la mère Russie 2026',
          '29 novembre 2026 Russie',
          'fête des mères depuis la Russie',
          'étudiant tunisien Russie famille',
          'cadeau mère étudiant à l’étranger',
        ],
      },
      en: {
        title: 'Mother’s Day in Russia on 29 November 2026: what to do from Tunisia? | RusStudy',
        description:
          'Mother’s Day in Russia falls on 29 November 2026. How a Tunisian student can celebrate it from a distance, with a message, a call and a thoughtful gesture.',
        h1: 'Mother’s Day in Russia: 29 November 2026, what to do from Tunisia?',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'In Russia, Mother’s Day is celebrated on the last Sunday of November. In 2026 it falls on 29 November: a simple chance to say thank you from afar.',
        intro:
          'When you study in Russia, distance weighs most during holidays. Mother’s Day, held on the last Sunday of November, falls this year on 29 November 2026. Here is how to mark it from your residence or flat, without spending much.',
        sections: [
          {
            heading: 'Three simple gestures on 29 November',
            blocks: [
              {
                type: 'ul',
                items: [
                  'A video call planned in advance, at a time that suits your mother and you.',
                  'A written message or a photo of your life in Russia, so she can see where you are.',
                  'A small gift delivered in Tunisia, ordered several days before the date.',
                ],
              },
              {
                type: 'p',
                text: 'Allow for the time difference between Russia and Tunisia when you set the call, and order early: international deliveries take longer at the end of November.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Staying in touch with your family from Russia',
            blocks: [
              {
                type: 'p',
                text: 'Regular calls matter as much as the holidays. A family worried by silence is reassured more by a fixed weekly call than by one big call a year.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'When is Mother’s Day in Russia in 2026?',
            answer:
              'It is celebrated on the last Sunday of November. In 2026, that is Sunday 29 November.',
          },
          {
            question: 'Do I have to send a gift from Russia?',
            answer:
              'No. A message, a call or a photo is often enough. If you send a gift, order it several days before the date to avoid delays.',
          },
        ],
        keywords: [
          'Mother’s Day Russia 2026',
          '29 November 2026 Russia',
          'Mother’s Day from abroad',
          'Tunisian student Russia family',
          'gift for mother studying abroad',
        ],
      },
      ar: {
        title: 'عيد الأم في روسيا يوم 29 نوفمبر 2026: ماذا تفعل من تونس؟ | RusStudy',
        description:
          'يوافق يوم الأم في روسيا يوم 29 نوفمبر 2026. كيف يحتفل الطالب التونسي به عن بعد، برسالة ومكالمة ولفتة طيبة.',
        h1: 'يوم الأم في روسيا: 29 نوفمبر 2026، ماذا تفعل من تونس؟',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'يُحتفل بيوم الأم في روسيا في آخر أحد من نوفمبر. وفي 2026 يوافق يوم 29 نوفمبر: فرصة بسيطة لتقول شكرا من بعيد.',
        intro:
          'عندما تدرس في روسيا، يكون البعد أثقل وقت الأعياد. ويوافق يوم الأم، المحدد بآخر أحد في نوفمبر، هذا العام يوم 29 نوفمبر 2026. إليك كيف تحييه من مكان إقامتك دون إنفاق كبير.',
        sections: [
          {
            heading: 'ثلاث لفتات بسيطة يوم 29 نوفمبر',
            blocks: [
              {
                type: 'ul',
                items: [
                  'مكالمة فيديو محددة مسبقا، في وقت يناسب أمك وأنت.',
                  'رسالة مكتوبة أو صورة من حياتك في روسيا، لترى أين أنت.',
                  'هدية صغيرة تصل إلى تونس، تُطلب قبل التاريخ بعدة أيام.',
                ],
              },
              {
                type: 'p',
                text: 'راعِ فارق التوقيت بين روسيا وتونس عند تحديد المكالمة، واطلب الهدية مبكرا، فالتوصيل الدولي يستغرق وقتا أطول في نهاية نوفمبر.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'البقاء على تواصل مع عائلتك من روسيا',
            blocks: [
              {
                type: 'p',
                text: 'المكالمات المنتظمة لا تقل أهمية عن الأعياد. فالعائلة القلقة من الصمت تطمئن أكثر لمكالمة أسبوعية ثابتة من مكالمة كبيرة واحدة في السنة.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'متى يوافق يوم الأم في روسيا سنة 2026؟',
            answer:
              'يُحتفل به في آخر أحد من نوفمبر. وفي 2026 يوافق الأحد 29 نوفمبر.',
          },
          {
            question: 'هل يجب إرسال هدية من روسيا؟',
            answer:
              'ليس ضروريا. تكفي رسالة أو مكالمة أو صورة في أغلب الأحيان. وإن أرسلت هدية، فاطلبها قبل التاريخ بعدة أيام لتجنب التأخير.',
          },
        ],
        keywords: [
          'عيد الأم في روسيا 2026',
          '29 نوفمبر 2026 روسيا',
          'يوم الأم من الخارج',
          'طالب تونسي في روسيا وعائلته',
          'هدية الأم للطالب في الخارج',
        ],
      },
      ru: {
        title: 'День матери в России 29 ноября 2026: что делать из Туниса? | RusStudy',
        description:
          'День матери в России приходится на 29 ноября 2026 года. Как тунисский студент может отметить его на расстоянии: сообщением, звонком и внимательным подарком.',
        h1: 'День матери в России: 29 ноября 2026 года, что делать из Туниса?',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'В России День матери отмечают в последнее воскресенье ноября. В 2026 году это 29 ноября: простой повод сказать спасибо на расстоянии.',
        intro:
          'Во время учёбы в России расстояние особенно ощущается в праздники. День матери, который отмечают в последнее воскресенье ноября, в этом году приходится на 29 ноября 2026 года. Вот как отметить его из общежития или квартиры, не тратя много.',
        sections: [
          {
            heading: 'Три простых шага 29 ноября',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Видеозвонок, заранее согласованный, в удобное для мамы и для вас время.',
                  'Письмо или фото вашей жизни в России, чтобы она видела, где вы.',
                  'Небольшой подарок, доставленный в Тунис, заказанный за несколько дней до даты.',
                ],
              },
              {
                type: 'p',
                text: 'Учитывайте разницу во времени между Россией и Тунисом при выборе часа для звонка и заказывайте заранее: международная доставка в конце ноября занимает больше времени.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Как оставаться на связи с семьёй из России',
            blocks: [
              {
                type: 'p',
                text: 'Регулярные звонки важны не меньше праздников. Семья, которая волнуется из-за молчания, спокойнее от постоянного еженедельного звонка, чем от одного большого раз в год.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Когда День матери в России в 2026 году?',
            answer:
              'Его отмечают в последнее воскресенье ноября. В 2026 году это воскресенье, 29 ноября.',
          },
          {
            question: 'Нужно ли отправлять подарок из России?',
            answer:
              'Не обязательно. Часто достаточно сообщения, звонка или фото. Если вы отправляете подарок, заказывайте его за несколько дней до даты, чтобы избежать задержек.',
          },
        ],
        keywords: [
          'День матери в России 2026',
          '29 ноября 2026 Россия',
          'День матери из-за границы',
          'тунисский студент в России семья',
          'подарок маме для студента за границей',
        ],
      },
    },
  },
  {
    slug: 'nouvel-an-2027-etudiant-tunisien-russie',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Nouvel An 2027 en Russie : fêter le 1er janvier 2027 en étudiant tunisien | RusStudy',
        description:
          'Le Nouvel An 2027 en Russie : traditions, Ded Moroz, vacances universitaires et comment un étudiant tunisien passe le 1er janvier 2027 loin de chez lui.',
        h1: 'Nouvel An 2027 en Russie : fêter le 1er janvier 2027 en étudiant tunisien',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          'En Russie, le Nouvel An est la grande fête de l’hiver, bien avant Noël. Voici ce qu’il faut savoir pour le vivre sereinement en étudiant tunisien.',
        intro:
          'Le Nouvel An est la fête la plus importante de l’hiver russe. Les vacances commencent autour du 31 décembre, avec des traditions propres : sapin, cadeaux et la visite du Ded Moroz, le « Grand-Père Gel ». Pour un étudiant tunisien, c’est aussi le moment où la distance avec la famille se fait le plus sentir.',
        sections: [
          {
            heading: 'Ce qui se passe le soir du 31 décembre',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Le réveillon se fête en famille ou entre amis, souvent avec un repas copieux.',
                  'Le Ded Moroz et sa petite-fille Snegourotchka apportent des cadeaux, notamment aux enfants.',
                  'Beaucoup de villes organisent des spectacles et des illuminations sur les places centrales.',
                ],
              },
              {
                type: 'p',
                text: 'Pour un étudiant, le plus simple est souvent de rejoindre un groupe d’amis ou un repas organisé par l’université ou une association, plutôt que de rester seul dans sa chambre.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'Partager le 1er janvier 2027 avec sa famille',
            blocks: [
              {
                type: 'p',
                text: 'En Tunisie, le Nouvel An est fêté au même moment mais dans une autre ambiance. Un appel vidéo à l’heure du réveillon, en tenant compte du décalage horaire, permet de partager le moment ensemble.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quand commence la période de fêtes en Russie ?',
            answer:
              'Elle commence autour du Nouvel An et se prolonge pendant plusieurs jours. Les dates exactes des jours fériés et des vacances universitaires sont publiées chaque année par les autorités et les universités : vérifiez le calendrier officiel de votre établissement.',
          },
          {
            question: 'Le Nouvel An est-il ouvert aux étudiants étrangers ?',
            answer:
              'Oui. De nombreux étudiants internationaux y participent, et les associations ou les services d’accueil organisent souvent des événements, à confirmer auprès de votre université.',
          },
        ],
        keywords: [
          'Nouvel An 2027 Russie',
          '1er janvier 2027 Russie',
          'Nouvel An russe étudiant tunisien',
          'Ded Moroz tradition',
          'fêtes de fin d’année Russie étudiant',
        ],
      },
      en: {
        title: 'New Year 2027 in Russia: celebrating 1 January 2027 as a Tunisian student | RusStudy',
        description:
          'New Year 2027 in Russia: traditions, Ded Moroz, university holidays and how a Tunisian student spends 1 January 2027 far from home.',
        h1: 'New Year 2027 in Russia: celebrating 1 January 2027 as a Tunisian student',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'In Russia, New Year is the big winter celebration, well before Christmas. Here is what to know to enjoy it as a Tunisian student.',
        intro:
          'New Year is the most important winter holiday in Russia. Holidays start around 31 December, with their own traditions: a decorated tree, presents and a visit from Ded Moroz, “Grandfather Frost”. For a Tunisian student, it is also the moment when distance from family is felt most.',
        sections: [
          {
            heading: 'What happens on the night of 31 December',
            blocks: [
              {
                type: 'ul',
                items: [
                  'New Year’s Eve is celebrated with family or friends, often with a generous meal.',
                  'Ded Moroz and his granddaughter Snegurochka bring presents, especially for children.',
                  'Many cities hold shows and lights in their central squares.',
                ],
              },
              {
                type: 'p',
                text: 'As a student, the simplest option is often to join a group of friends or a meal organised by the university or an association, rather than staying alone in your room.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'Sharing 1 January 2027 with your family',
            blocks: [
              {
                type: 'p',
                text: 'In Tunisia, New Year is also celebrated at the same time but in a different atmosphere. A video call at midnight, allowing for the time difference, lets you share the moment together.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'When do the holidays start in Russia?',
            answer:
              'They start around New Year and last several days. The exact dates of public holidays and university breaks are published each year by the authorities and universities: check your institution’s official calendar.',
          },
          {
            question: 'Are New Year celebrations open to foreign students?',
            answer:
              'Yes. Many international students take part, and associations or welcome services often organise events, to be confirmed with your university.',
          },
        ],
        keywords: [
          'New Year 2027 Russia',
          '1 January 2027 Russia',
          'Russian New Year Tunisian student',
          'Ded Moroz tradition',
          'end of year holidays Russia student',
        ],
      },
      ar: {
        title: 'رأس السنة 2027 في روسيا: الاحتفال بـ1 يناير 2027 كطالب تونسي | RusStudy',
        description:
          'رأس السنة 2027 في روسيا: التقاليد، وديد موروز، وعطلة الجامعة، وكيف يقضي الطالب التونسي يوم 1 يناير 2027 بعيدا عن بيته.',
        h1: 'رأس السنة 2027 في روسيا: الاحتفال بـ1 يناير 2027 كطالب تونسي',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'في روسيا، رأس السنة هو الاحتفال الكبير في الشتاء، ويسبق عيد الميلاد بكثير. إليك ما يجب معرفته لتعيشه بهدوء كطالب تونسي.',
        intro:
          'رأس السنة هو أهم عيد شتوي في روسيا. تبدأ العطلة حوالي 31 ديسمبر بتقاليد خاصة: شجرة مزينة وهدايا وزيارة «الجد الصقيع» ديد موروز. وبالنسبة للطالب التونسي، هي أيضا اللحظة التي يشعر فيها بالبعد عن العائلة أكثر.',
        sections: [
          {
            heading: 'ماذا يحدث ليلة 31 ديسمبر',
            blocks: [
              {
                type: 'ul',
                items: [
                  'يُحتفل بليلة رأس السنة مع العائلة أو الأصدقاء، غالبا بوجبة وافرة.',
                  'يحضر ديد موروز وحفيدته سنيغوروتشكا الهدايا، خاصة للأطفال.',
                  'تنظم كثير من المدن عروضا وإضاءات في الساحات المركزية.',
                ],
              },
              {
                type: 'p',
                text: 'بالنسبة للطالب، أبسط خيار غالبا أن ينضم إلى مجموعة من الأصدقاء أو إلى وجبة تنظمها الجامعة أو إحدى الجمعيات، بدل البقاء وحيدا في غرفته.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'مشاركة 1 يناير 2027 مع عائلتك',
            blocks: [
              {
                type: 'p',
                text: 'في تونس يُحتفل برأس السنة في الوقت نفسه ولكن بأجواء مختلفة. ومكالمة فيديو عند منتصف الليل، مع مراعاة فارق التوقيت، تتيح لكم مشاركة اللحظة معا.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'متى تبدأ فترة الأعياد في روسيا؟',
            answer:
              'تبدأ حوالي رأس السنة وتستمر عدة أيام. تنشر السلطات والجامعات التواريخ الدقيقة للعطل الرسمية وعطل الجامعة كل سنة، فراجع التقويم الرسمي لمؤسستك.',
          },
          {
            question: 'هل احتفالات رأس السنة مفتوحة للطلاب الأجانب؟',
            answer:
              'نعم. يشارك فيها كثير من الطلاب الدوليين، وغالبا ما تنظم الجمعيات وخدمات الاستقبال فعاليات، تأكد منها لدى جامعتك.',
          },
        ],
        keywords: [
          'رأس السنة 2027 روسيا',
          '1 يناير 2027 روسيا',
          'رأس السنة الروسية للطالب التونسي',
          'تقليد ديد موروز',
          'أعياد نهاية السنة للطالب في روسيا',
        ],
      },
      ru: {
        title: 'Новый год 2027 в России: как отметить 1 января 2027 года тунисскому студенту | RusStudy',
        description:
          'Новый год 2027 в России: традиции, Дед Мороз, университетские каникулы и как тунисский студент проводит 1 января 2027 года вдали от дома.',
        h1: 'Новый год 2027 в России: как отметить 1 января 2027 года тунисскому студенту',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'В России Новый год — главный зимний праздник, задолго до Рождества. Вот что важно знать, чтобы провести его спокойно как тунисский студент.',
        intro:
          'Новый год — самый важный зимний праздник в России. Каникулы начинаются примерно 31 декабря и сопровождаются собственными традициями: ёлкой, подарками и визитом Деда Мороза со Снегурочкой. Для тунисского студента это также момент, когда расстояние до семьи ощущается сильнее всего.',
        sections: [
          {
            heading: 'Что происходит в ночь на 1 января',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Новогодняя ночь празднуется в кругу семьи или друзей, часто с обильным застольем.',
                  'Дед Мороз и Снегурочка приносят подарки, особенно детям.',
                  'Во многих городах на центральных площадях проходят шоу и иллюминация.',
                ],
              },
              {
                type: 'p',
                text: 'Студенту проще всего присоединиться к компании друзей или к застолью, которое организуют университет или студенческое объединение, а не оставаться одному в комнате.',
              },
              { type: 'related', slug: 'noel-nouvel-an-calendrier-universitaire-russe' },
            ],
          },
          {
            heading: 'Разделить 1 января 2027 года с семьёй',
            blocks: [
              {
                type: 'p',
                text: 'В Тунисе Новый год тоже отмечают в это же время, но в другой атмосфере. Видеозвонок в полночь, с учётом разницы во времени, позволяет встретить праздник вместе.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Когда начинаются новогодние каникулы в России?',
            answer:
              'Они начинаются примерно в новогодние дни и длятся несколько дней. Точные даты государственных праздников и университетских каникул ежегодно публикуют власти и вузы: сверяйтесь с официальным календарём вашего университета.',
          },
          {
            question: 'Открыты ли новогодние праздники для иностранных студентов?',
            answer:
              'Да. В них участвует много иностранных студентов, а объединения и службы поддержки часто организуют мероприятия — уточните в вашем университете.',
          },
        ],
        keywords: [
          'Новый год 2027 в России',
          '1 января 2027 Россия',
          'Новый год в России тунисский студент',
          'традиция Деда Мороза',
          'новогодние каникулы студента в России',
        ],
      },
    },
  },
  {
    slug: 'fete-des-meres-tunisie-21-mars-2027',
    publishedAt: '2026-11-23',
    copy: {
      fr: {
        title: 'Fête des mères en Tunisie le 21 mars 2027 : préparer sa surprise depuis la Russie | RusStudy',
        description:
          'La fête des mères en Tunisie tombe le 21 mars 2027. Comment un étudiant tunisien en Russie peut préparer une surprise à distance, avec un message, un appel et un cadeau.',
        h1: 'Fête des mères en Tunisie le 21 mars 2027 : préparer sa surprise depuis la Russie',
        publishedLabel: 'Publication : Novembre 2026',
        excerpt:
          'En Tunisie, la fête des mères se célèbre le 21 mars. Si vous étudiez en Russie, anticipez dès maintenant pour que la surprise arrive à temps.',
        intro:
          'En Tunisie, la fête des mères est célébrée le 21 mars, au début du printemps. Pour un étudiant en Russie, la bonne organisation commence plusieurs mois avant : un cadeau qui doit arriver à temps, un appel au bon moment et une surprise qui ne dépend pas de votre présence.',
        sections: [
          {
            heading: 'Anticiper la livraison et le cadeau',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Choisissez le cadeau dès décembre ou janvier, pour avoir le temps de le commander et de le faire livrer.',
                  'Vérifiez les délais et les frais d’envoi vers la Tunisie avant de payer.',
                  'Prévoyez une solution de secours, comme une carte cadeau ou un bouquet livré par un proche en Tunisie.',
                ],
              },
              {
                type: 'strong',
                text: 'Les livraisons internationales peuvent connaître des retards. Commander trop tard est la cause la plus fréquente de surprise ratée.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Le message et l’appel du 21 mars',
            blocks: [
              {
                type: 'p',
                text: 'Un message écrit de votre main, avec un souvenir précis, touche souvent plus qu’un cadeau coûteux. Fixez l’appel à une heure qui tient compte du décalage horaire entre la Russie et la Tunisie.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Quelle est la date de la fête des mères en Tunisie ?',
            answer:
              'Elle est célébrée le 21 mars. En 2027, cela tombe un dimanche, 21 mars.',
          },
          {
            question: 'Peut-on envoyer un cadeau depuis la Russie vers la Tunisie ?',
            answer:
              'Cela dépend des services de livraison disponibles et de leurs délais. Renseignez-vous avant de commander, et prévoyez une solution de secours si le colis arrive en retard.',
          },
        ],
        keywords: [
          'fête des mères Tunisie 2027',
          '21 mars 2027 Tunisie',
          'fête des mères étudiant à l’étranger',
          'cadeau mère depuis la Russie',
          'étudiant tunisien Russie famille',
        ],
      },
      en: {
        title: 'Mother’s Day in Tunisia on 21 March 2027: planning a surprise from Russia | RusStudy',
        description:
          'Mother’s Day in Tunisia falls on 21 March 2027. How a Tunisian student in Russia can plan a surprise from a distance, with a message, a call and a gift.',
        h1: 'Mother’s Day in Tunisia on 21 March 2027: planning a surprise from Russia',
        publishedLabel: 'Published: November 2026',
        excerpt:
          'In Tunisia, Mother’s Day is celebrated on 21 March. If you study in Russia, plan now so the surprise arrives in time.',
        intro:
          'In Tunisia, Mother’s Day is celebrated on 21 March, at the start of spring. For a student in Russia, good planning starts several months ahead: a gift that must arrive on time, a call at the right moment and a surprise that does not depend on your presence.',
        sections: [
          {
            heading: 'Planning the gift and its delivery',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Choose the gift in December or January, to leave time to order and have it delivered.',
                  'Check delivery times and shipping costs to Tunisia before paying.',
                  'Have a backup plan, such as a gift card or flowers delivered by a relative in Tunisia.',
                ],
              },
              {
                type: 'strong',
                text: 'International deliveries can be delayed. Ordering too late is the most common reason a surprise fails.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'The message and the call on 21 March',
            blocks: [
              {
                type: 'p',
                text: 'A handwritten message with a specific memory often means more than an expensive gift. Set the call at a time that takes the time difference between Russia and Tunisia into account.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'When is Mother’s Day in Tunisia?',
            answer:
              'It is celebrated on 21 March. In 2027 that is Sunday 21 March, so plan your gift and call for that day.',
          },
          {
            question: 'Can I send a gift from Russia to Tunisia?',
            answer:
              'It depends on the delivery services available and their timelines. Check before ordering, and have a backup plan if the parcel arrives late.',
          },
        ],
        keywords: [
          'Mother’s Day Tunisia 2027',
          '21 March 2027 Tunisia',
          'Mother’s Day from abroad',
          'gift for mother from Russia',
          'Tunisian student Russia family',
        ],
      },
      ar: {
        title: 'عيد الأم في تونس يوم 21 مارس 2027: التحضير لمفاجأة من روسيا | RusStudy',
        description:
          'يوافق عيد الأم في تونس يوم 21 مارس 2027. كيف يحضّر الطالب التونسي في روسيا مفاجأة من بعيد، برسالة ومكالمة وهدية.',
        h1: 'عيد الأم في تونس يوم 21 مارس 2027: التحضير لمفاجأة من روسيا',
        publishedLabel: 'النشر: نوفمبر 2026',
        excerpt:
          'يُحتفل بعيد الأم في تونس يوم 21 مارس. وإن كنت تدرس في روسيا، فخطط الآن حتى تصل المفاجأة في وقتها.',
        intro:
          'يُحتفل بعيد الأم في تونس يوم 21 مارس، مع بداية الربيع. وبالنسبة للطالب في روسيا، يبدأ التنظيم الجيد قبل أشهر: هدية يجب أن تصل في وقتها، ومكالمة في الوقت المناسب، ومفاجأة لا تتوقف على وجودك.',
        sections: [
          {
            heading: 'التخطيط للهدية وتوصيلها',
            blocks: [
              {
                type: 'ul',
                items: [
                  'اختر الهدية في ديسمبر أو يناير، لتترك وقتا للطلب والتوصيل.',
                  'تحقق من مدد التوصيل وتكاليف الشحن إلى تونس قبل الدفع.',
                  'جهّز بديلا احتياطيا، مثل بطاقة هدايا أو باقة ورد يوصلها قريب لك في تونس.',
                ],
              },
              {
                type: 'strong',
                text: 'قد تتأخر الشحنات الدولية. والطلب المتأخر هو السبب الأكثر شيوعا لفشل المفاجأة.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'الرسالة والمكالمة يوم 21 مارس',
            blocks: [
              {
                type: 'p',
                text: 'رسالة مكتوبة بخط يدك وذكرى محددة تؤثر غالبا أكثر من هدية باهظة الثمن. واجعل المكالمة في وقت يراعي فارق التوقيت بين روسيا وتونس.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'متى يوافق عيد الأم في تونس؟',
            answer:
              'يُحتفل به يوم 21 مارس. وفي 2027 يوافق يوم الأحد 21 مارس، فخطط للهدية والمكالمة في ذلك اليوم.',
          },
          {
            question: 'هل يمكن إرسال هدية من روسيا إلى تونس؟',
            answer:
              'يعتمد ذلك على خدمات التوصيل المتاحة ومدد وصولها. تحقق قبل الطلب، وجهّز بديلا إن تأخرت الشحنة.',
          },
        ],
        keywords: [
          'عيد الأم في تونس 2027',
          '21 مارس 2027 تونس',
          'عيد الأم من الخارج',
          'هدية الأم من روسيا',
          'طالب تونسي في روسيا وعائلته',
        ],
      },
      ru: {
        title: 'День матери в Тунисе 21 марта 2027 года: готовим сюрприз из России | RusStudy',
        description:
          'День матери в Тунисе приходится на 21 марта 2027 года. Как тунисский студент в России готовит сюрприз на расстоянии: сообщением, звонком и подарком.',
        h1: 'День матери в Тунисе 21 марта 2027 года: готовим сюрприз из России',
        publishedLabel: 'Публикация: ноябрь 2026',
        excerpt:
          'В Тунисе День матери отмечают 21 марта. Если вы учитесь в России, планируйте заранее, чтобы сюрприз пришёл вовремя.',
        intro:
          'В Тунисе День матери отмечают 21 марта, в начале весны. Для студента в России хорошая организация начинается за несколько месяцев: подарок, который должен прийти вовремя, звонок в нужный момент и сюрприз, который не зависит от вашего присутствия.',
        sections: [
          {
            heading: 'Подарок и его доставка',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Выберите подарок в декабре или январе, чтобы успеть заказать и доставить его.',
                  'Проверьте сроки и стоимость отправки в Тунис до оплаты.',
                  'Подготовьте запасной вариант, например подарочную карту или букет, который доставит родственник в Тунисе.',
                ],
              },
              {
                type: 'strong',
                text: 'Международная доставка может задерживаться. Заказ в последний момент — самая частая причина неудачного сюрприза.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Сообщение и звонок 21 марта',
            blocks: [
              {
                type: 'p',
                text: 'Написанное от руки сообщение с конкретным воспоминанием часто трогает сильнее дорогого подарка. Назначьте звонок с учётом разницы во времени между Россией и Тунисом.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Когда День матери в Тунисе?',
            answer:
              'Его отмечают 21 марта. В 2027 году это воскресенье, 21 марта, поэтому планируйте подарок и звонок на этот день.',
          },
          {
            question: 'Можно ли отправить подарок из России в Тунис?',
            answer:
              'Это зависит от доступных служб доставки и их сроков. Проверьте перед заказом и подготовьте запасной вариант, если посылка задержится.',
          },
        ],
        keywords: [
          'День матери в Тунисе 2027',
          '21 марта 2027 Тунис',
          'День матери из-за границы',
          'подарок маме из России',
          'тунисский студент в России семья',
        ],
      },
    },
  },
];
