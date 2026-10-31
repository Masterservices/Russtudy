import type { BlogArticleEntry } from '../copy';

/*
 * Trois articles qui répondent à des intentions de recherche encore
 * découvertes sur le site : les cursus enseignés en anglais, la vérité sur
 * le budget au-delà des frais de scolarité, et le choix entre la rentrée de
 * septembre et la session de février.
 *
 * Tous les chiffres cités reprennent ceux déjà publiés ailleurs sur le site.
 * Aucune valeur nouvelle n'est avancée et aucune n'est balisée en JSON-LD.
 *
 * Ordre identique aux slugs ajoutés dans BLOG_SLUGS.
 */
export const CHOIX_BUDGET_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'programmes-en-anglais-universites-russes',
    publishedAt: '2026-09-16',
    copy: {
      fr: {
        title: 'Étudier en Russie en anglais : ce que valent vraiment les programmes anglophones | RusStudy',
        description:
          "Cursus enseignés en anglais dans les universités russes : filières concernées, surcoût, niveau d'anglais exigé et pourquoi le russe reste indispensable au quotidien. L'analyse honnête de RusStudy.",
        h1: 'Étudier en Russie en anglais : ce que ces programmes apportent, et ce qu’ils ne dispensent pas de faire',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Les cursus anglophones existent bien dans les universités russes. Ils coûtent plus cher, ils sont moins nombreux, et ils ne vous dispensent pas d'apprendre le russe. Voici pourquoi.",
        intro:
          "« Est-ce que je peux étudier en Russie sans apprendre le russe ? » C'est l'une des questions les plus fréquentes, et la réponse honnête tient en deux temps : oui, des cursus enseignés en anglais existent ; non, cela ne vous dispensera pas d'apprendre le russe. Voici ce que recouvrent réellement ces programmes.",
        sections: [
          {
            heading: 'Ce que sont les cursus anglophones',
            blocks: [
              {
                type: 'p',
                text: "Certaines universités russes proposent des cursus entièrement enseignés en anglais, principalement en médecine, en ingénierie et dans les filières du numérique. Les cours, les supports et les examens y sont en anglais, avec des enseignants formés à cet usage.",
              },
              {
                type: 'p',
                text: "Ces programmes s'adressent en priorité aux étudiants internationaux et attirent des promotions très cosmopolites. C'est un vrai atout pour qui vise ensuite une carrière hors de Russie.",
              },
            ],
          },
          {
            heading: 'Les trois différences à connaître avant de choisir',
            blocks: [
              { type: 'strong', text: 'Ils coûtent plus cher.' },
              {
                type: 'p',
                text: "C'est la règle générale : à filière égale, un cursus enseigné en anglais se situe dans le haut de la fourchette des frais de scolarité, là où un cursus russophone se situe plutôt dans le bas. Demandez systématiquement le tarif exact de la version anglophone, il ne se déduit pas de celui de la version russophone.",
              },
              { type: 'strong', text: 'Ils sont moins nombreux.' },
              {
                type: 'p',
                text: "Toutes les universités n'en proposent pas, et toutes les filières non plus. Si votre choix d'université est déjà arrêté, vérifiez d'abord que la filière visée existe bien en anglais dans cet établissement, avant de construire votre projet dessus.",
              },
              { type: 'strong', text: 'Ils demandent un niveau d’anglais attesté.' },
              {
                type: 'p',
                text: "Le passage en anglais n'est pas une facilité : suivre six ans de médecine dans une langue étrangère suppose un niveau solide dès le départ. Renseignez-vous sur le justificatif demandé par l'université avant de déposer votre dossier.",
              },
            ],
          },
          {
            heading: 'Pourquoi le russe reste indispensable, même en cursus anglophone',
            blocks: [
              {
                type: 'p',
                text: "C'est le point que les étudiants découvrent trop tard, et il est décisif en médecine. Vos cours seront en anglais, mais vos patients, eux, parleront russe.",
              },
              {
                type: 'ul',
                items: [
                  'Les stages cliniques se déroulent dans des hôpitaux russes, avec des patients russophones',
                  'Les démarches administratives — enregistrement migratoire, banque, résidence — se font en russe',
                  'La vie quotidienne, des courses au médecin, se passe en russe',
                  "L'intégration avec les étudiants russes suppose la langue : sans elle, on reste dans une bulle internationale",
                ],
              },
              {
                type: 'p',
                text: "C'est pourquoi les cursus anglophones intègrent presque toujours des cours de russe. Ne les traitez pas comme une matière secondaire : ils conditionnent votre capacité à profiter réellement de vos stages.",
              },
            ],
          },
          {
            heading: 'Anglais ou russe : comment décider',
            blocks: [
              {
                type: 'p',
                text: "La question n'est pas « quelle langue est plus facile » mais « où voulez-vous exercer ».",
              },
              {
                type: 'ul',
                items: [
                  "Si vous visez une carrière hors de Russie et hors des pays russophones, le cursus anglophone a du sens, à condition d'assumer le surcoût",
                  "Si votre budget est serré, le cursus russophone avec année préparatoire coûte moins cher sur l'ensemble du parcours",
                  'Si vous hésitez, sachez que la voie russophone reste la plus répandue chez les étudiants maghrébins, et la mieux balisée',
                ],
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Puis-je vraiment étudier la médecine en Russie entièrement en anglais ?',
            answer:
              "Oui, certaines universités proposent le cursus de médecine en anglais. Mais les stages cliniques se font auprès de patients russophones : des cours de russe restent intégrés au programme, et ils sont déterminants pour la partie pratique.",
          },
          {
            question: "Le cursus en anglais dispense-t-il de l'année préparatoire ?",
            answer:
              "Généralement oui pour la partie langue russe intensive, puisque l'enseignement se fait en anglais. En contrepartie, un justificatif de niveau d'anglais est demandé et les frais de scolarité sont plus élevés.",
          },
          {
            question: 'Le diplôme est-il le même en anglais et en russe ?',
            answer:
              "C'est le même diplôme d'État délivré par la même université. Vérifiez néanmoins l'intitulé exact et l'accréditation de la filière auprès de l'établissement avant de vous inscrire.",
          },
        ],
        keywords: [
          'étudier en Russie en anglais', 'médecine en anglais Russie', 'programme anglophone université russe',
          'étudier sans parler russe', 'cursus anglais Russie prix', 'université russe langue anglaise',
        ],
      },
      en: {
        title: 'Studying in Russia in English: What English-Taught Programmes Are Really Worth | RusStudy',
        description:
          'English-taught programmes at Russian universities: which fields, the extra cost, the English level required and why Russian remains essential day to day. An honest analysis from RusStudy.',
        h1: 'Studying in Russia in English: what these programmes give you, and what they do not exempt you from',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'English-taught programmes do exist at Russian universities. They cost more, there are fewer of them, and they do not exempt you from learning Russian. Here is why.',
        intro:
          '"Can I study in Russia without learning Russian?" It is one of the most frequent questions, and the honest answer comes in two parts: yes, English-taught programmes exist; no, that will not exempt you from learning Russian. Here is what these programmes actually involve.',
        sections: [
          {
            heading: 'What English-taught programmes are',
            blocks: [
              {
                type: 'p',
                text: 'Some Russian universities offer programmes taught entirely in English, mainly in medicine, engineering and digital fields. Lectures, materials and examinations are in English, with teaching staff trained for it.',
              },
              {
                type: 'p',
                text: 'These programmes are aimed primarily at international students and attract very cosmopolitan cohorts. That is a genuine asset if you are targeting a career outside Russia afterwards.',
              },
            ],
          },
          {
            heading: 'The three differences to know before choosing',
            blocks: [
              { type: 'strong', text: 'They cost more.' },
              {
                type: 'p',
                text: 'That is the general rule: for the same field, an English-taught programme sits at the top of the tuition range, where a Russian-taught one sits nearer the bottom. Always ask for the exact rate of the English version; it cannot be deduced from the Russian one.',
              },
              { type: 'strong', text: 'There are fewer of them.' },
              {
                type: 'p',
                text: 'Not every university offers them, and not every field either. If you have already settled on a university, first check that the field you want genuinely exists in English there, before building your plan on it.',
              },
              { type: 'strong', text: 'They require a certified level of English.' },
              {
                type: 'p',
                text: 'Switching to English is not the easy option: following six years of medicine in a foreign language demands a solid level from the start. Find out what proof the university requires before submitting your application.',
              },
            ],
          },
          {
            heading: 'Why Russian remains essential, even on an English-taught programme',
            blocks: [
              {
                type: 'p',
                text: 'This is the point students discover too late, and it is decisive in medicine. Your classes will be in English, but your patients will speak Russian.',
              },
              {
                type: 'ul',
                items: [
                  'Clinical placements take place in Russian hospitals, with Russian-speaking patients',
                  'Administrative steps — migration registration, banking, halls of residence — are conducted in Russian',
                  'Everyday life, from groceries to the doctor, happens in Russian',
                  'Mixing with Russian students depends on the language: without it you stay inside an international bubble',
                ],
              },
              {
                type: 'p',
                text: 'This is why English-taught programmes almost always include Russian language classes. Do not treat them as a secondary subject: they determine whether you can genuinely benefit from your placements.',
              },
            ],
          },
          {
            heading: 'English or Russian: how to decide',
            blocks: [
              {
                type: 'p',
                text: 'The question is not "which language is easier" but "where do you want to practise".',
              },
              {
                type: 'ul',
                items: [
                  'If you are targeting a career outside Russia and outside Russian-speaking countries, the English programme makes sense, provided you accept the extra cost',
                  'If your budget is tight, the Russian-taught programme with a preparatory year costs less across the whole course',
                  'If you are hesitating, note that the Russian-taught route remains the most common among Maghrebi students, and the best mapped out',
                ],
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can I really study medicine in Russia entirely in English?',
            answer:
              'Yes, some universities offer the medical programme in English. But clinical placements involve Russian-speaking patients: Russian classes remain built into the programme, and they are decisive for the practical side.',
          },
          {
            question: 'Does an English programme exempt me from the preparatory year?',
            answer:
              'Generally yes for the intensive Russian language part, since teaching is in English. In exchange, proof of English level is required and tuition is higher.',
          },
          {
            question: 'Is the degree the same in English and in Russian?',
            answer:
              'It is the same state degree awarded by the same university. Still, check the exact title and the accreditation of the programme with the institution before enrolling.',
          },
        ],
        keywords: [
          'study in Russia in English', 'medicine in English Russia', 'English-taught Russian university',
          'study without speaking Russian', 'English programme Russia cost', 'Russian university English language',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا بالإنجليزية: ما قيمة البرامج الأنڨلوفونية فعلًا؟ | RusStudy',
        description:
          'المسالك المدرَّسة بالإنجليزية في الجامعات الروسية: الاختصاصات المعنية، الكلفة الإضافية، مستوى الإنجليزية المطلوب ولماذا تبقى الروسية ضرورية يوميًا. تحليل صريح من RusStudy.',
        h1: 'الدراسة في روسيا بالإنجليزية: ما تمنحه هذه البرامج، وما لا تعفيك منه',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt:
          'المسالك بالإنجليزية موجودة فعلًا في الجامعات الروسية. لكنها أغلى وأقل عددًا، وهي لا تعفيك من تعلّم الروسية. إليك السبب.',
        intro:
          '«هل يمكنني الدراسة في روسيا دون تعلّم الروسية؟» من أكثر الأسئلة تكرارًا، والجواب الصريح في شقّين: نعم، توجد مسالك مدرَّسة بالإنجليزية؛ ولا، لن يعفيك ذلك من تعلّم الروسية. إليك ما تعنيه هذه البرامج حقًا.',
        sections: [
          {
            heading: 'ما هي المسالك الأنڨلوفونية',
            blocks: [
              {
                type: 'p',
                text: 'تقترح بعض الجامعات الروسية مسالك مدرَّسة كليًا بالإنجليزية، خاصة في الطب والهندسة واختصاصات الرقمي. الدروس والسندات والامتحانات بالإنجليزية، مع أساتذة مكوَّنين لهذا الغرض.',
              },
              {
                type: 'p',
                text: 'تتوجّه هذه البرامج أساسًا إلى الطلبة الدوليين وتستقطب دفعات متعدّدة الجنسيات. وهذه ميزة حقيقية لمن يستهدف مسارًا مهنيًا خارج روسيا لاحقًا.',
              },
            ],
          },
          {
            heading: 'ثلاثة فوارق يجب معرفتها قبل الاختيار',
            blocks: [
              { type: 'strong', text: 'إنها أغلى.' },
              {
                type: 'p',
                text: 'هذه هي القاعدة العامة: في نفس الاختصاص، يقع المسلك بالإنجليزية في أعلى مجال الرسوم، بينما يقع المسلك بالروسية في أدناه. اطلب دائمًا التعريفة الدقيقة للنسخة الإنجليزية، فهي لا تُستنتج من نظيرتها الروسية.',
              },
              { type: 'strong', text: 'إنها أقل عددًا.' },
              {
                type: 'p',
                text: 'ليست كل الجامعات تقترحها، ولا كل الاختصاصات. إن كنت قد حسمت اختيار جامعتك، تحقّق أولًا من أن الاختصاص المستهدف موجود فعلًا بالإنجليزية في تلك المؤسسة قبل أن تبني مشروعك عليه.',
              },
              { type: 'strong', text: 'تتطلّب مستوى إنجليزية مثبتًا.' },
              {
                type: 'p',
                text: 'الانتقال إلى الإنجليزية ليس تسهيلًا: متابعة ست سنوات طب بلغة أجنبية تفترض مستوى متينًا منذ البداية. استفسر عن الوثيقة المطلوبة من الجامعة قبل إيداع ملفك.',
              },
            ],
          },
          {
            heading: 'لماذا تبقى الروسية ضرورية حتى في المسلك الإنجليزي',
            blocks: [
              {
                type: 'p',
                text: 'هذه النقطة يكتشفها الطلبة متأخّرًا، وهي حاسمة في الطب. دروسك ستكون بالإنجليزية، لكن مرضاك سيتحدّثون الروسية.',
              },
              {
                type: 'ul',
                items: [
                  'التربّصات السريرية تجري في مستشفيات روسية، مع مرضى ناطقين بالروسية',
                  'الإجراءات الإدارية — التسجيل المهاجري، البنك، الإقامة — تتم بالروسية',
                  'الحياة اليومية، من التسوّق إلى الطبيب، تجري بالروسية',
                  'الاندماج مع الطلبة الروس يمرّ عبر اللغة: وبدونها تبقى في فقاعة دولية',
                ],
              },
              {
                type: 'p',
                text: 'لهذا تُدمج المسالك الإنجليزية دائمًا تقريبًا دروسًا في الروسية. لا تعاملها كمادة ثانوية: فهي تحدّد قدرتك على الاستفادة الفعلية من تربّصاتك.',
              },
            ],
          },
          {
            heading: 'الإنجليزية أم الروسية: كيف تقرّر',
            blocks: [
              {
                type: 'p',
                text: 'السؤال ليس «أي لغة أسهل» بل «أين تريد ممارسة المهنة».',
              },
              {
                type: 'ul',
                items: [
                  'إن كنت تستهدف مسارًا خارج روسيا وخارج البلدان الناطقة بالروسية، فالمسلك الإنجليزي منطقي، شرط تحمّل الكلفة الإضافية',
                  'إن كانت ميزانيتك ضيّقة، فالمسلك الروسي مع السنة التحضيرية أقل كلفة على كامل المسار',
                  'إن كنت متردّدًا، فاعلم أن الطريق الروسي يبقى الأكثر انتشارًا لدى الطلبة المغاربيين والأوضح معالم',
                ],
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكنني فعلًا دراسة الطب في روسيا بالإنجليزية بالكامل؟',
            answer:
              'نعم، تقترح بعض الجامعات مسلك الطب بالإنجليزية. لكن التربّصات السريرية تتم مع مرضى ناطقين بالروسية: تبقى دروس الروسية مدمجة في البرنامج، وهي حاسمة في الجانب التطبيقي.',
          },
          {
            question: 'هل يعفي المسلك الإنجليزي من السنة التحضيرية؟',
            answer:
              'عمومًا نعم بالنسبة إلى الجزء المكثّف من اللغة الروسية، بما أن التدريس بالإنجليزية. وفي المقابل تُطلب وثيقة في مستوى الإنجليزية وتكون الرسوم أعلى.',
          },
          {
            question: 'هل الشهادة واحدة بالإنجليزية وبالروسية؟',
            answer:
              'هي نفس شهادة الدولة تسلّمها نفس الجامعة. ومع ذلك تحقّق من التسمية الدقيقة ومن اعتماد الاختصاص لدى المؤسسة قبل التسجيل.',
          },
        ],
        keywords: [
          'الدراسة في روسيا بالإنجليزية', 'الطب بالإنجليزية في روسيا', 'برنامج إنجليزي جامعة روسية',
          'الدراسة دون تعلّم الروسية', 'كلفة المسلك الإنجليزي في روسيا', 'الجامعات الروسية باللغة الإنجليزية',
        ],
      },
      ru: {
        title: 'Учёба в России на английском: чего на самом деле стоят англоязычные программы | RusStudy',
        description:
          'Англоязычные программы в российских вузах: какие направления, надбавка к стоимости, требуемый уровень английского и почему русский остаётся необходимым каждый день. Честный разбор от RusStudy.',
        h1: 'Учёба в России на английском: что дают эти программы и от чего они не освобождают',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt:
          'Англоязычные программы в российских вузах действительно есть. Они дороже, их меньше, и они не освобождают от изучения русского. Вот почему.',
        intro:
          '«Можно ли учиться в России, не изучая русский?» Это один из самых частых вопросов, и честный ответ состоит из двух частей: да, программы на английском существуют; нет, это не освободит вас от русского. Вот что на самом деле представляют собой такие программы.',
        sections: [
          {
            heading: 'Что такое англоязычные программы',
            blocks: [
              {
                type: 'p',
                text: 'Некоторые российские вузы предлагают программы полностью на английском языке — прежде всего по медицине, инженерии и цифровым направлениям. Занятия, материалы и экзамены на английском, преподаватели подготовлены к такому формату.',
              },
              {
                type: 'p',
                text: 'Эти программы ориентированы прежде всего на иностранных студентов и собирают очень многонациональные группы. Это реальное преимущество для тех, кто нацелен на карьеру за пределами России.',
              },
            ],
          },
          {
            heading: 'Три отличия, о которых нужно знать до выбора',
            blocks: [
              { type: 'strong', text: 'Они дороже.' },
              {
                type: 'p',
                text: 'Это общее правило: при одинаковом направлении англоязычная программа находится в верхней части диапазона стоимости, а русскоязычная — ближе к нижней. Всегда запрашивайте точную цену именно английской версии: из русской она не выводится.',
              },
              { type: 'strong', text: 'Их меньше.' },
              {
                type: 'p',
                text: 'Их предлагают не все вузы и не по всем направлениям. Если вуз вы уже выбрали, сначала убедитесь, что нужное направление действительно существует там на английском, и только потом стройте на этом план.',
              },
              { type: 'strong', text: 'Требуется подтверждённый уровень английского.' },
              {
                type: 'p',
                text: 'Переход на английский — не облегчение: шесть лет медицины на иностранном языке предполагают крепкий уровень с самого начала. Узнайте, какой документ требует вуз, до подачи документов.',
              },
            ],
          },
          {
            heading: 'Почему русский остаётся необходимым даже на англоязычной программе',
            blocks: [
              {
                type: 'p',
                text: 'Этот момент студенты обнаруживают слишком поздно, и в медицине он решающий. Занятия будут на английском, но ваши пациенты будут говорить по-русски.',
              },
              {
                type: 'ul',
                items: [
                  'Клиническая практика проходит в российских больницах с русскоязычными пациентами',
                  'Административные процедуры — миграционный учёт, банк, общежитие — ведутся на русском',
                  'Повседневная жизнь, от продуктов до врача, происходит на русском',
                  'Общение с российскими студентами зависит от языка: без него вы остаётесь в международном пузыре',
                ],
              },
              {
                type: 'p',
                text: 'Поэтому в англоязычные программы почти всегда встроены занятия по русскому языку. Не воспринимайте их как второстепенный предмет: от них зависит, сможете ли вы реально извлечь пользу из практики.',
              },
            ],
          },
          {
            heading: 'Английский или русский: как решить',
            blocks: [
              {
                type: 'p',
                text: 'Вопрос не в том, «какой язык легче», а в том, «где вы хотите работать».',
              },
              {
                type: 'ul',
                items: [
                  'Если вы нацелены на карьеру вне России и вне русскоязычных стран, англоязычная программа оправданна — при готовности к надбавке в цене',
                  'Если бюджет ограничен, русскоязычная программа с подготовительным годом дешевле на всём маршруте',
                  'Если сомневаетесь: русскоязычный путь остаётся самым распространённым среди студентов из Магриба и лучше всего проторённым',
                ],
              },
              { type: 'related', slug: 'apprendre-le-russe-avant-de-partir' },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли действительно учиться медицине в России полностью на английском?',
            answer:
              'Да, некоторые вузы предлагают медицинскую программу на английском. Но клиническая практика идёт с русскоязычными пациентами: занятия по русскому остаются в программе и решают исход практической части.',
          },
          {
            question: 'Освобождает ли англоязычная программа от подготовительного года?',
            answer:
              'Как правило, да — от интенсивного курса русского, поскольку обучение идёт на английском. Взамен требуется подтверждение уровня английского, а стоимость обучения выше.',
          },
          {
            question: 'Диплом одинаковый на английском и на русском?',
            answer:
              'Это тот же диплом государственного образца того же вуза. Тем не менее уточните точное наименование и аккредитацию направления в вузе до зачисления.',
          },
        ],
        keywords: [
          'учёба в России на английском', 'медицина на английском в России', 'англоязычная программа российский вуз',
          'учиться без знания русского', 'стоимость англоязычной программы', 'российский вуз на английском языке',
        ],
      },
    },
  },
  {
    slug: 'frais-caches-etudes-en-russie',
    publishedAt: '2026-09-16',
    copy: {
      fr: {
        title: 'Frais cachés des études en Russie : le budget réel au-delà de la scolarité | RusStudy',
        description:
          "Traductions, légalisation, billet, assurance, enregistrement migratoire, équipement d'hiver : la liste honnête de tout ce qui n'est pas dans les frais de scolarité affichés.",
        h1: 'Les frais cachés des études en Russie : ce que personne ne vous dit avant de partir',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Les frais de scolarité ne sont qu'une partie du budget. Voici la liste complète de ce qui s'ajoute, pour que la première année n'apporte aucune mauvaise surprise.",
        intro:
          "Un chiffre annoncé et une facture réelle, ce n'est pas toujours la même chose. Non pas parce qu'on vous cache quelque chose, mais parce que les frais de scolarité ne couvrent, par définition, que la scolarité. Voici tout le reste, poste par poste, pour que vous partiez avec un budget honnête plutôt qu'optimiste.",
        sections: [
          {
            heading: 'Avant le départ : les frais de dossier',
            blocks: [
              {
                type: 'p',
                text: "Ce sont les premiers à arriver, et ce sont ceux qu'on oublie le plus souvent parce qu'ils s'étalent sur plusieurs semaines en petits montants.",
              },
              {
                type: 'ul',
                items: [
                  'Traductions assermentées de vos diplômes, relevés de notes et actes d’état civil',
                  'Légalisation ou apostille des documents originaux',
                  'Certificats médicaux exigés pour le visa étudiant',
                  'Photos d’identité au format demandé par l’université',
                  'Frais consulaires de la demande de visa',
                  'Déplacements à Tunis pour les démarches consulaires, éventuellement avec nuitée',
                ],
              },
              {
                type: 'p',
                text: 'Une pièce refaite parce qu’elle a été traduite avant d’être légalisée se paie deux fois : l’ordre des opérations est ce qui coûte le plus cher quand on se trompe.',
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
          {
            heading: 'Le voyage et l’installation',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Le billet d’avion, dont le prix varie fortement selon la période de réservation',
                  'Le bagage en soute supplémentaire, souvent nécessaire pour une installation longue durée',
                  'Le trajet de l’aéroport au campus à l’arrivée',
                  'Les premières courses d’installation : literie, vaisselle, produits d’entretien',
                  'L’équipement d’hiver, qu’il vaut mieux acheter sur place que dans une boutique tunisienne',
                ],
              },
              {
                type: 'p',
                text: "L'équipement d'hiver est le poste le plus sous-estimé par les familles maghrébines, et c'est aussi celui qu'il ne faut surtout pas négliger : un manteau inadapté transforme un hiver ordinaire en épreuve.",
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Les frais annuels récurrents',
            blocks: [
              {
                type: 'p',
                text: "À ceux-là s'ajoutent chaque année, en plus des frais de scolarité :",
              },
              {
                type: 'ul',
                items: [
                  "L'assurance santé obligatoire, de l'ordre de 180 € par an",
                  'Le logement en résidence universitaire, de 30 à 90 € par mois selon la ville',
                  'Le coût de la vie courante, de 140 à 260 € par mois selon la ville',
                  "L'abonnement de transport, réduit au tarif étudiant",
                  'Les fournitures et ouvrages de votre filière',
                  'Le renouvellement du titre de séjour et les démarches migratoires annuelles',
                ],
              },
              {
                type: 'p',
                text: "La première année est structurellement la plus chère : aux frais annuels s'ajoute un ensemble de dépenses ponctuelles d'installation, de l'ordre de 900 € au total, qui ne se reproduisent pas les années suivantes.",
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Les dépenses qu’on ne prévoit jamais',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Le retour au pays pendant les vacances, une à deux fois par an selon le budget familial',
                  "Les frais bancaires des transferts depuis la Tunisie, qui s'accumulent quand les envois sont fréquents",
                  'Le remplacement d’un téléphone ou d’un ordinateur pendant le cursus',
                  'Les imprévus médicaux non couverts par l’assurance de base',
                ],
              },
              {
                type: 'strong',
                text: 'Le conseil le plus utile : constituez un fonds d’urgence.',
              },
              {
                type: 'p',
                text: "Prévoyez l'équivalent de deux à trois mois de coût de la vie, mis de côté et non touchés. C'est ce qui fait la différence entre un imprévu gérable et un appel paniqué à la maison.",
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Les frais de scolarité annoncés incluent-ils le logement ?',
            answer:
              'Non. Les frais de scolarité couvrent la scolarité. Le logement en résidence universitaire est facturé à part, entre 30 et 90 € par mois selon la ville.',
          },
          {
            question: 'Quelle est la vraie facture de la première année ?',
            answer:
              "Ajoutez aux frais de scolarité le logement, le coût de la vie, l'assurance d'environ 180 € par an, et un ensemble de dépenses d'installation de l'ordre de 900 € qui ne se reproduisent pas ensuite.",
          },
          {
            question: 'Peut-on payer les frais de scolarité en plusieurs fois ?',
            answer:
              "Les modalités varient d'une université à l'autre. C'est une question à poser explicitement au moment de l'admission, avant de signer : elle change beaucoup la trésorerie de la famille.",
          },
        ],
        keywords: [
          'frais cachés études Russie', 'budget réel études Russie', 'coût première année Russie',
          'dépenses étudiant Russie', 'assurance santé étudiant Russie', 'combien coûte étudier en Russie',
        ],
      },
      en: {
        title: 'The Hidden Costs of Studying in Russia: The Real Budget Beyond Tuition | RusStudy',
        description:
          'Translations, legalisation, flights, insurance, migration registration, winter clothing: the honest list of everything that is not in the published tuition figure.',
        h1: 'The hidden costs of studying in Russia: what nobody tells you before you leave',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'Tuition is only part of the budget. Here is the full list of what gets added, so the first year holds no nasty surprises.',
        intro:
          'A quoted figure and a real bill are not always the same thing. Not because anything is being hidden, but because tuition covers, by definition, only tuition. Here is everything else, item by item, so that you leave with an honest budget rather than an optimistic one.',
        sections: [
          {
            heading: 'Before departure: application costs',
            blocks: [
              {
                type: 'p',
                text: 'These come first, and they are the ones most often forgotten because they are spread over several weeks in small amounts.',
              },
              {
                type: 'ul',
                items: [
                  'Sworn translations of your diplomas, transcripts and civil status documents',
                  'Legalisation or apostille of the original documents',
                  'Medical certificates required for the student visa',
                  'Identity photographs in the format the university requires',
                  'Consular fees for the visa application',
                  'Trips to Tunis for consular formalities, possibly with an overnight stay',
                ],
              },
              {
                type: 'p',
                text: 'A document redone because it was translated before being legalised is paid for twice: the order of operations is what costs most when you get it wrong.',
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
          {
            heading: 'Travel and settling in',
            blocks: [
              {
                type: 'ul',
                items: [
                  'The flight, whose price varies sharply with how early you book',
                  'Extra hold luggage, often needed for a long stay',
                  'The journey from the airport to campus on arrival',
                  'First settling-in purchases: bedding, kitchenware, cleaning products',
                  'Winter clothing, better bought locally than in a Tunisian shop',
                ],
              },
              {
                type: 'p',
                text: 'Winter clothing is the item Maghrebi families most underestimate, and it is also the one you must not skimp on: an inadequate coat turns an ordinary winter into an ordeal.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'The recurring annual costs',
            blocks: [
              {
                type: 'p',
                text: 'On top of tuition, the following recur every year:',
              },
              {
                type: 'ul',
                items: [
                  'Compulsory health insurance, in the region of €180 per year',
                  'University hall accommodation, €30 to €90 per month depending on the city',
                  'Everyday cost of living, €140 to €260 per month depending on the city',
                  'The transport pass, at the reduced student rate',
                  'Supplies and textbooks for your field',
                  'Residence permit renewal and the annual migration formalities',
                ],
              },
              {
                type: 'p',
                text: 'The first year is structurally the most expensive: on top of the annual costs comes a set of one-off settling-in expenses, of the order of €900 in total, which do not recur in later years.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'The costs nobody ever plans for',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Trips home during the holidays, once or twice a year depending on the family budget',
                  'Bank charges on transfers from Tunisia, which add up when transfers are frequent',
                  'Replacing a phone or a laptop during the course',
                  'Unexpected medical costs not covered by the basic insurance',
                ],
              },
              {
                type: 'strong',
                text: 'The single most useful piece of advice: build an emergency fund.',
              },
              {
                type: 'p',
                text: 'Set aside the equivalent of two to three months of living costs and leave it untouched. That is the difference between a manageable setback and a panicked call home.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Does the quoted tuition include accommodation?',
            answer:
              'No. Tuition covers tuition. University hall accommodation is billed separately, between €30 and €90 per month depending on the city.',
          },
          {
            question: 'What is the real bill for the first year?',
            answer:
              'Add to tuition the accommodation, the cost of living, insurance of around €180 per year, and a set of settling-in expenses of the order of €900 that do not recur afterwards.',
          },
          {
            question: 'Can tuition be paid in instalments?',
            answer:
              'Arrangements vary between universities. Ask explicitly at admission, before signing: it makes a big difference to the family cash flow.',
          },
        ],
        keywords: [
          'hidden costs studying Russia', 'real budget study Russia', 'first year cost Russia',
          'student expenses Russia', 'student health insurance Russia', 'how much to study in Russia',
        ],
      },
      ar: {
        title: 'المصاريف الخفية للدراسة في روسيا: الميزانية الحقيقية وراء الرسوم | RusStudy',
        description:
          'الترجمات، التصديق، التذكرة، التأمين، التسجيل المهاجري، تجهيزات الشتاء: القائمة الصريحة لكل ما لا تشمله الرسوم الدراسية المعلنة.',
        h1: 'المصاريف الخفية للدراسة في روسيا: ما لا يخبرك به أحد قبل السفر',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt:
          'الرسوم الدراسية ليست سوى جزء من الميزانية. إليك القائمة الكاملة لما يُضاف إليها، حتى لا تحمل السنة الأولى أي مفاجأة سيئة.',
        intro:
          'الرقم المعلن والفاتورة الحقيقية ليسا دائمًا الشيء نفسه. لا لأن هناك ما يُخفى عنك، بل لأن الرسوم الدراسية تغطّي بحكم التعريف الدراسة فقط. إليك كل ما تبقّى، بندًا ببند، لتسافر بميزانية صادقة لا بميزانية متفائلة.',
        sections: [
          {
            heading: 'قبل السفر: مصاريف الملف',
            blocks: [
              {
                type: 'p',
                text: 'هي أول ما يصل، وأكثر ما يُنسى لأنها تتوزّع على أسابيع في مبالغ صغيرة.',
              },
              {
                type: 'ul',
                items: [
                  'ترجمات محلّفة لشهاداتك وكشوف أعدادك ووثائق الحالة المدنية',
                  'تصديق أو أبوستيل الوثائق الأصلية',
                  'الشهادات الطبية المطلوبة لتأشيرة الطالب',
                  'صور شمسية بالمقاس الذي تطلبه الجامعة',
                  'المعاليم القنصلية لمطلب التأشيرة',
                  'التنقّلات إلى تونس العاصمة للإجراءات القنصلية، وربما مع مبيت',
                ],
              },
              {
                type: 'p',
                text: 'الوثيقة التي تُعاد لأنها تُرجمت قبل التصديق تُدفع مرتين: ترتيب العمليات هو أغلى ما يكلّفك عند الخطأ.',
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
          {
            heading: 'السفر والاستقرار',
            blocks: [
              {
                type: 'ul',
                items: [
                  'تذكرة الطائرة، وسعرها يتغيّر بشدة حسب فترة الحجز',
                  'الأمتعة الإضافية في العنبر، وهي ضرورية غالبًا لإقامة طويلة',
                  'الرحلة من المطار إلى الحي الجامعي عند الوصول',
                  'مشتريات الاستقرار الأولى: الفراش، الأواني، مواد التنظيف',
                  'تجهيزات الشتاء، ويُستحسن شراؤها هناك لا من محل تونسي',
                ],
              },
              {
                type: 'p',
                text: 'تجهيزات الشتاء هي البند الذي تستهين به العائلات المغاربية أكثر من غيره، وهو أيضًا البند الذي لا يجوز التفريط فيه: معطف غير مناسب يحوّل شتاءً عاديًا إلى محنة.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'المصاريف السنوية المتكرّرة',
            blocks: [
              {
                type: 'p',
                text: 'تُضاف إلى الرسوم الدراسية كل سنة:',
              },
              {
                type: 'ul',
                items: [
                  'التأمين الصحي الإجباري، في حدود 180 أورو سنويًا',
                  'السكن في الإقامة الجامعية، من 30 إلى 90 أورو شهريًا حسب المدينة',
                  'كلفة المعيشة اليومية، من 140 إلى 260 أورو شهريًا حسب المدينة',
                  'اشتراك النقل، بالتعريفة المخفّضة للطلبة',
                  'اللوازم والمراجع الخاصة باختصاصك',
                  'تجديد بطاقة الإقامة والإجراءات المهاجرية السنوية',
                ],
              },
              {
                type: 'p',
                text: 'السنة الأولى هي الأغلى بحكم بنيتها: تُضاف إلى المصاريف السنوية مجموعة نفقات استقرار ظرفية، في حدود 900 أورو جملةً، لا تتكرّر في السنوات الموالية.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'النفقات التي لا يُحسب لها حساب أبدًا',
            blocks: [
              {
                type: 'ul',
                items: [
                  'العودة إلى البلد خلال العطل، مرة أو مرتين في السنة حسب ميزانية العائلة',
                  'المصاريف البنكية للتحويلات من تونس، وهي تتراكم حين تتكرّر الإرساليات',
                  'تعويض هاتف أو حاسوب أثناء الدراسة',
                  'الطوارئ الصحية غير المغطّاة بالتأمين الأساسي',
                ],
              },
              {
                type: 'strong',
                text: 'أنفع نصيحة: كوّن صندوق طوارئ.',
              },
              {
                type: 'p',
                text: 'احسب ما يعادل شهرين إلى ثلاثة من كلفة المعيشة، توضع جانبًا ولا تُمسّ. هذا هو الفارق بين طارئ يمكن تدبيره ومكالمة هلع إلى البيت.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تشمل الرسوم الدراسية المعلنة السكن؟',
            answer:
              'لا. الرسوم الدراسية تغطّي الدراسة. أما السكن في الإقامة الجامعية فيُفوتر على حدة، بين 30 و90 أورو شهريًا حسب المدينة.',
          },
          {
            question: 'ما هي الفاتورة الحقيقية للسنة الأولى؟',
            answer:
              'أضف إلى الرسوم الدراسية السكن وكلفة المعيشة والتأمين بنحو 180 أورو سنويًا، ومجموعة نفقات استقرار في حدود 900 أورو لا تتكرّر لاحقًا.',
          },
          {
            question: 'هل يمكن دفع الرسوم الدراسية على أقساط؟',
            answer:
              'الصيغ تختلف من جامعة إلى أخرى. اطرح السؤال صراحة عند القبول قبل الإمضاء: فهو يغيّر كثيرًا في سيولة العائلة.',
          },
        ],
        keywords: [
          'المصاريف الخفية للدراسة في روسيا', 'الميزانية الحقيقية للدراسة في روسيا', 'كلفة السنة الأولى في روسيا',
          'نفقات الطالب في روسيا', 'التأمين الصحي للطالب في روسيا', 'كم تكلّف الدراسة في روسيا',
        ],
      },
      ru: {
        title: 'Скрытые расходы на учёбу в России: реальный бюджет сверх стоимости обучения | RusStudy',
        description:
          'Переводы, легализация, билет, страховка, миграционный учёт, зимняя экипировка: честный список всего, что не входит в объявленную стоимость обучения.',
        h1: 'Скрытые расходы на учёбу в России: о чём не говорят перед отъездом',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt:
          'Плата за обучение — лишь часть бюджета. Вот полный список того, что к ней добавляется, чтобы первый год не принёс неприятных сюрпризов.',
        intro:
          'Объявленная цифра и реальный счёт — не всегда одно и то же. Не потому, что что-то скрывают, а потому, что плата за обучение по определению покрывает только обучение. Вот всё остальное, пункт за пунктом, чтобы вы уезжали с честным бюджетом, а не с оптимистичным.',
        sections: [
          {
            heading: 'До отъезда: расходы на документы',
            blocks: [
              {
                type: 'p',
                text: 'Они приходят первыми и чаще всего забываются, потому что растянуты на несколько недель мелкими суммами.',
              },
              {
                type: 'ul',
                items: [
                  'Присяжные переводы дипломов, выписок оценок и документов гражданского состояния',
                  'Легализация или апостиль оригиналов',
                  'Медицинские справки, требуемые для студенческой визы',
                  'Фотографии в формате, который запрашивает вуз',
                  'Консульские сборы за визовое заявление',
                  'Поездки в столицу для консульских формальностей, возможно с ночёвкой',
                ],
              },
              {
                type: 'p',
                text: 'Документ, переделанный из-за того, что его перевели до легализации, оплачивается дважды: порядок действий обходится дороже всего, когда его нарушают.',
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
          {
            heading: 'Дорога и обустройство',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Авиабилет, цена которого резко зависит от срока бронирования',
                  'Дополнительный багаж, часто необходимый при долгом переезде',
                  'Дорога из аэропорта в кампус по приезде',
                  'Первые покупки для обустройства: постельное бельё, посуда, бытовая химия',
                  'Зимняя экипировка, которую лучше покупать на месте, а не дома',
                ],
              },
              {
                type: 'p',
                text: 'Зимняя экипировка — статья, которую магрибские семьи недооценивают сильнее всего, и одновременно та, на которой нельзя экономить: неподходящее пальто превращает обычную зиму в испытание.',
              },
              { type: 'related', slug: 'valise-depart-russie-checklist' },
            ],
          },
          {
            heading: 'Ежегодные регулярные расходы',
            blocks: [
              {
                type: 'p',
                text: 'Сверх платы за обучение каждый год повторяются:',
              },
              {
                type: 'ul',
                items: [
                  'Обязательная медицинская страховка, порядка 180 € в год',
                  'Общежитие, 30–90 € в месяц в зависимости от города',
                  'Повседневные расходы на жизнь, 140–260 € в месяц в зависимости от города',
                  'Проездной по льготному студенческому тарифу',
                  'Принадлежности и учебники по вашему направлению',
                  'Продление разрешения на пребывание и ежегодные миграционные формальности',
                ],
              },
              {
                type: 'p',
                text: 'Первый год структурно самый дорогой: к ежегодным расходам добавляется набор разовых трат на обустройство, порядка 900 € в сумме, которые в дальнейшем не повторяются.',
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Расходы, которых никто не планирует',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Поездки домой на каникулах, один-два раза в год в зависимости от семейного бюджета',
                  'Банковские комиссии за переводы, которые накапливаются при частых отправлениях',
                  'Замена телефона или ноутбука за время учёбы',
                  'Непредвиденные медицинские расходы, не покрытые базовой страховкой',
                ],
              },
              {
                type: 'strong',
                text: 'Самый полезный совет: сформируйте резервный фонд.',
              },
              {
                type: 'p',
                text: 'Отложите эквивалент двух-трёх месяцев расходов на жизнь и не трогайте его. Это разница между управляемой неожиданностью и паническим звонком домой.',
              },
              { type: 'related', slug: 'cout-etudes-russie-etudiant-tunisien-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Входит ли жильё в объявленную стоимость обучения?',
            answer:
              'Нет. Плата за обучение покрывает обучение. Общежитие оплачивается отдельно, от 30 до 90 € в месяц в зависимости от города.',
          },
          {
            question: 'Каков реальный счёт за первый год?',
            answer:
              'К плате за обучение добавьте жильё, расходы на жизнь, страховку около 180 € в год и набор трат на обустройство порядка 900 €, которые затем не повторяются.',
          },
          {
            question: 'Можно ли оплачивать обучение частями?',
            answer:
              'Условия различаются от вуза к вузу. Задайте этот вопрос прямо при зачислении, до подписания: он сильно меняет финансовую нагрузку на семью.',
          },
        ],
        keywords: [
          'скрытые расходы учёбы в России', 'реальный бюджет учёбы в России', 'стоимость первого года в России',
          'расходы студента в России', 'медицинская страховка студента в России', 'сколько стоит учиться в России',
        ],
      },
    },
  },
  {
    slug: 'rentree-septembre-ou-session-fevrier',
    publishedAt: '2026-09-16',
    copy: {
      fr: {
        title: 'Rentrée de septembre ou session de février en Russie : laquelle choisir ? | RusStudy',
        description:
          "Les deux entrées possibles dans les universités russes comparées : délais, préparation, arrivée en hiver, filières concernées. Comment choisir sans perdre une année.",
        h1: 'Rentrée de septembre ou session de février : comment choisir votre entrée en Russie',
        publishedLabel: 'Publication : Septembre 2026',
        excerpt:
          "Deux portes d'entrée dans l'année universitaire russe, et un choix qui dépend surtout de la date à laquelle vous lisez ces lignes.",
        intro:
          "La plupart des systèmes universitaires n'offrent qu'une seule rentrée par an : si vous la manquez, vous attendez douze mois. Le système russe en propose deux. C'est une particularité précieuse, mais elle n'est pas neutre : les deux entrées ne se valent pas selon votre situation. Voici comment trancher.",
        sections: [
          {
            heading: 'Ce que les deux entrées ont en commun',
            blocks: [
              {
                type: 'p',
                text: "Commençons par ce qui ne change pas, parce que c'est ce qui inquiète le plus les familles.",
              },
              {
                type: 'ul',
                items: [
                  'Le diplôme délivré est strictement le même',
                  'Les frais de scolarité sont identiques',
                  "Le dossier d'admission demandé est le même",
                  'Le logement en résidence universitaire est accessible dans les deux cas',
                  'La procédure de visa et la lettre d’invitation suivent la même logique',
                ],
              },
              {
                type: 'strong',
                text: 'La session de février n’est pas une session de rattrapage.',
              },
              {
                type: 'p',
                text: "C'est une entrée à part entière, prévue par le calendrier universitaire, et non un dispositif de seconde zone pour les dossiers refusés ailleurs.",
              },
            ],
          },
          {
            heading: 'Les arguments pour la rentrée de septembre',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Vous arrivez en fin d'été : l'adaptation au climat se fait progressivement, sur plusieurs mois",
                  'Le choix de filières et de villes est au plus large',
                  'Vous entrez en même temps que la promotion principale, ce qui facilite l’intégration',
                  'Le calendrier universitaire est le plus lisible : deux semestres pleins dans l’année civile',
                ],
              },
              {
                type: 'p',
                text: "Si vous lisez ceci entre janvier et mai, c'est la voie à viser : vous avez le temps de monter le dossier sans pression.",
              },
            ],
          },
          {
            heading: 'Les arguments pour la session de février',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Vous ne perdez pas une année entière si l'orientation de l'été ne vous a pas donné la filière souhaitée",
                  'Vous disposez de l’automne pour préparer sereinement le dossier, les traductions et la légalisation',
                  'Vous pouvez consacrer ces mois à démarrer le russe avant le départ, ce qui change tout à l’arrivée',
                  'Les promotions de février sont souvent plus réduites, avec un suivi plus rapproché',
                ],
              },
              {
                type: 'strong',
                text: 'Le vrai point de vigilance : vous arrivez en plein hiver.',
              },
              {
                type: 'p',
                text: "Ce n'est pas un obstacle, c'est une préparation. Un étudiant correctement équipé s'adapte en quelques semaines ; un étudiant qui arrive en février avec un manteau d'automne passe un mois difficile.",
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Comment trancher, concrètement',
            blocks: [
              {
                type: 'p',
                text: 'La réponse dépend moins de vos préférences que du calendrier réel des démarches.',
              },
              {
                type: 'ul',
                items: [
                  "De janvier à mai : visez septembre, vous avez largement le temps",
                  "De juin à août : septembre reste jouable si le dossier est déjà prêt, sinon visez février plutôt que de bâcler",
                  "De septembre à novembre : visez février, c'est exactement la fenêtre pour laquelle cette session existe",
                  'À partir de décembre : février devient serré ; parlez-en immédiatement plutôt que de lancer les traductions au hasard',
                ],
              },
              {
                type: 'p',
                text: "Dans tous les cas, ce qui détermine la faisabilité, ce n'est pas la date de la rentrée mais les délais de la chaîne administrative : légalisation, traduction, admission, puis lettre d'invitation et visa.",
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Le diplôme est-il identique selon la session d’entrée ?',
            answer:
              "Oui, strictement. Il s'agit du même cursus, dans la même université, avec le même diplôme d'État à la sortie. Seule la date de démarrage change.",
          },
          {
            question: 'Toutes les filières sont-elles ouvertes en février ?',
            answer:
              "L'offre de février est plus réduite que celle de septembre. Si vous visez une filière précise dans une université précise, vérifiez son ouverture en session de février avant de bâtir votre calendrier dessus.",
          },
          {
            question: 'Arriver en février, est-ce vraiment difficile à cause de l’hiver ?',
            answer:
              "C'est une question d'équipement et de préparation, pas de résistance. Prévoyez d'acheter l'essentiel de la tenue d'hiver sur place, où elle est conçue pour ce climat, et prévoyez de quoi tenir les premiers jours dès l'arrivée.",
          },
        ],
        keywords: [
          'session février Russie', 'rentrée septembre Russie', 'quand partir étudier en Russie',
          'deux rentrées université russe', 'inscription février Russie', 'calendrier universitaire russe',
        ],
      },
      en: {
        title: 'September Intake or February Session in Russia: Which to Choose? | RusStudy',
        description:
          'The two entry points to Russian universities compared: deadlines, preparation, arriving in winter, available fields. How to choose without losing a year.',
        h1: 'September intake or February session: choosing how you enter Russia',
        publishedLabel: 'Published: September 2026',
        excerpt:
          'Two doors into the Russian academic year, and a choice that depends mostly on the date you are reading this.',
        intro:
          'Most university systems offer only one intake a year: miss it and you wait twelve months. The Russian system offers two. That is a valuable feature, but it is not neutral: the two entries are not equivalent for every situation. Here is how to decide.',
        sections: [
          {
            heading: 'What the two entries have in common',
            blocks: [
              {
                type: 'p',
                text: 'Let us start with what does not change, because that is what worries families most.',
              },
              {
                type: 'ul',
                items: [
                  'The degree awarded is strictly the same',
                  'Tuition is identical',
                  'The admission file required is the same',
                  'Hall accommodation is available in both cases',
                  'The visa procedure and invitation letter follow the same logic',
                ],
              },
              {
                type: 'strong',
                text: 'The February session is not a resit session.',
              },
              {
                type: 'p',
                text: 'It is a full entry point, set out in the academic calendar, not a second-tier arrangement for applications rejected elsewhere.',
              },
            ],
          },
          {
            heading: 'The case for the September intake',
            blocks: [
              {
                type: 'ul',
                items: [
                  'You arrive at the end of summer: adapting to the climate happens gradually, over several months',
                  'The choice of fields and cities is at its widest',
                  'You start alongside the main cohort, which makes settling in easier',
                  'The academic calendar is the most readable: two full semesters within the calendar year',
                ],
              },
              {
                type: 'p',
                text: 'If you are reading this between January and May, that is the route to aim for: you have time to build the application without pressure.',
              },
            ],
          },
          {
            heading: 'The case for the February session',
            blocks: [
              {
                type: 'ul',
                items: [
                  'You do not lose a whole year if the summer allocation did not give you the field you wanted',
                  'You have the autumn to prepare the file, translations and legalisation calmly',
                  'You can spend those months starting Russian before departure, which changes everything on arrival',
                  'February cohorts are often smaller, with closer supervision',
                ],
              },
              {
                type: 'strong',
                text: 'The real point to watch: you arrive in the middle of winter.',
              },
              {
                type: 'p',
                text: 'That is not an obstacle, it is a matter of preparation. A properly equipped student adapts within a few weeks; a student arriving in February in an autumn coat has a hard month.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'How to decide, in practice',
            blocks: [
              {
                type: 'p',
                text: 'The answer depends less on your preferences than on the real timetable of the formalities.',
              },
              {
                type: 'ul',
                items: [
                  'January to May: aim for September, you have plenty of time',
                  'June to August: September is still feasible if the file is ready, otherwise aim for February rather than rushing',
                  'September to November: aim for February — that is exactly the window this session exists for',
                  'From December: February becomes tight; raise it immediately rather than starting translations at random',
                ],
              },
              {
                type: 'p',
                text: 'In every case, what determines feasibility is not the intake date but the timing of the administrative chain: legalisation, translation, admission, then invitation letter and visa.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Is the degree identical whichever session you enter by?',
            answer:
              'Yes, strictly. It is the same programme, at the same university, with the same state degree at the end. Only the start date changes.',
          },
          {
            question: 'Are all fields open in February?',
            answer:
              'The February offering is narrower than September. If you are targeting a specific field at a specific university, check that it opens in the February session before building your timetable on it.',
          },
          {
            question: 'Is arriving in February really hard because of the winter?',
            answer:
              'It is a question of equipment and preparation, not endurance. Plan to buy most of your winter clothing locally, where it is designed for that climate, and bring enough to cover the first few days on arrival.',
          },
        ],
        keywords: [
          'February session Russia', 'September intake Russia', 'when to leave to study in Russia',
          'two intakes Russian university', 'February enrolment Russia', 'Russian academic calendar',
        ],
      },
      ar: {
        title: 'دخول سبتمبر أم دورة فيفري في روسيا: أيّهما تختار؟ | RusStudy',
        description:
          'مقارنة بين بوّابتي الدخول إلى الجامعات الروسية: الآجال، التحضير، الوصول في الشتاء، الاختصاصات المتاحة. كيف تختار دون خسارة سنة.',
        h1: 'دخول سبتمبر أم دورة فيفري: كيف تختار موعد التحاقك بروسيا',
        publishedLabel: 'النشر: سبتمبر 2026',
        excerpt:
          'بوّابتان للدخول إلى السنة الجامعية الروسية، واختيار يتوقف أساسًا على التاريخ الذي تقرأ فيه هذه الأسطر.',
        intro:
          'أغلب المنظومات الجامعية لا تقترح سوى دخول واحد في السنة: إن فاتك انتظرت اثني عشر شهرًا. أما المنظومة الروسية فتقترح اثنين. وهذه خاصية ثمينة، لكنها ليست محايدة: البوّابتان لا تتساويان حسب وضعيتك. إليك كيف تحسم.',
        sections: [
          {
            heading: 'ما تشترك فيه البوّابتان',
            blocks: [
              {
                type: 'p',
                text: 'لنبدأ بما لا يتغيّر، لأنه أكثر ما يقلق العائلات.',
              },
              {
                type: 'ul',
                items: [
                  'الشهادة المسلّمة هي نفسها تمامًا',
                  'الرسوم الدراسية متطابقة',
                  'ملف القبول المطلوب هو نفسه',
                  'السكن في الإقامة الجامعية متاح في الحالتين',
                  'إجراء التأشيرة ورسالة الدعوة يتّبعان المنطق نفسه',
                ],
              },
              {
                type: 'strong',
                text: 'دورة فيفري ليست دورة تدارك.',
              },
              {
                type: 'p',
                text: 'هي بوّابة دخول كاملة، منصوص عليها في الرزنامة الجامعية، لا آلية من الدرجة الثانية للملفات المرفوضة في مكان آخر.',
              },
            ],
          },
          {
            heading: 'حجج لصالح دخول سبتمبر',
            blocks: [
              {
                type: 'ul',
                items: [
                  'تصل في نهاية الصيف: التأقلم مع المناخ يتم تدريجيًا على مدى أشهر',
                  'اختيار الاختصاصات والمدن يكون في أوسع مدى له',
                  'تدخل مع الدفعة الرئيسية، وهو ما يسهّل الاندماج',
                  'الرزنامة الجامعية أوضح: سداسيّان كاملان في السنة المدنية',
                ],
              },
              {
                type: 'p',
                text: 'إن كنت تقرأ هذا بين جانفي وماي، فهذا هو المسار المستهدف: لديك الوقت لإعداد الملف دون ضغط.',
              },
            ],
          },
          {
            heading: 'حجج لصالح دورة فيفري',
            blocks: [
              {
                type: 'ul',
                items: [
                  'لا تخسر سنة كاملة إن لم يمنحك توجيه الصيف الاختصاص المرغوب',
                  'يتوفّر لك الخريف لتحضير الملف والترجمات والتصديق بروية',
                  'يمكنك تخصيص هذه الأشهر للبدء في الروسية قبل السفر، وهو ما يغيّر كل شيء عند الوصول',
                  'دفعات فيفري غالبًا أصغر، مع متابعة أقرب',
                ],
              },
              {
                type: 'strong',
                text: 'نقطة اليقظة الحقيقية: تصل في عزّ الشتاء.',
              },
              {
                type: 'p',
                text: 'ليس هذا عائقًا بل مسألة تحضير. الطالب المجهَّز جيدًا يتأقلم في بضعة أسابيع؛ أما من يصل في فيفري بمعطف خريفي فيقضي شهرًا صعبًا.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'كيف تحسم عمليًا',
            blocks: [
              {
                type: 'p',
                text: 'الجواب يتوقف على رزنامة الإجراءات الفعلية أكثر مما يتوقف على تفضيلاتك.',
              },
              {
                type: 'ul',
                items: [
                  'من جانفي إلى ماي: استهدف سبتمبر، لديك متّسع من الوقت',
                  'من جوان إلى أوت: سبتمبر يبقى ممكنًا إن كان الملف جاهزًا، وإلا فاستهدف فيفري بدل التسرّع',
                  'من سبتمبر إلى نوفمبر: استهدف فيفري، فهذه بالضبط النافذة التي وُجدت من أجلها هذه الدورة',
                  'ابتداءً من ديسمبر: فيفري يصبح ضيّقًا؛ تحدّث في الأمر فورًا بدل إطلاق الترجمات عشوائيًا',
                ],
              },
              {
                type: 'p',
                text: 'في كل الحالات، ما يحدّد إمكانية الإنجاز ليس تاريخ الدخول بل آجال السلسلة الإدارية: التصديق، الترجمة، القبول، ثم رسالة الدعوة والتأشيرة.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل الشهادة واحدة مهما كانت دورة الدخول؟',
            answer:
              'نعم، تمامًا. الأمر يتعلق بنفس المسار في نفس الجامعة وبنفس شهادة الدولة عند التخرّج. ما يتغيّر هو تاريخ الانطلاق فقط.',
          },
          {
            question: 'هل كل الاختصاصات مفتوحة في فيفري؟',
            answer:
              'عرض فيفري أضيق من عرض سبتمبر. إن كنت تستهدف اختصاصًا محدّدًا في جامعة محدّدة، تحقّق من فتحه في دورة فيفري قبل أن تبني رزنامتك عليه.',
          },
          {
            question: 'هل الوصول في فيفري صعب فعلًا بسبب الشتاء؟',
            answer:
              'إنها مسألة تجهيز وتحضير لا مسألة تحمّل. خطّط لشراء أغلب لباس الشتاء هناك حيث يُصمَّم لهذا المناخ، واحمل ما يكفيك للأيام الأولى عند الوصول.',
          },
        ],
        keywords: [
          'دورة فيفري في روسيا', 'دخول سبتمبر في روسيا', 'متى تسافر للدراسة في روسيا',
          'دخولان في الجامعة الروسية', 'التسجيل في فيفري بروسيا', 'الرزنامة الجامعية الروسية',
        ],
      },
      ru: {
        title: 'Сентябрьский набор или февральская сессия в России: что выбрать? | RusStudy',
        description:
          'Сравнение двух точек входа в российские вузы: сроки, подготовка, приезд зимой, доступные направления. Как выбрать, не потеряв год.',
        h1: 'Сентябрьский набор или февральская сессия: как выбрать момент приезда в Россию',
        publishedLabel: 'Публикация: сентябрь 2026',
        excerpt:
          'Две двери в российский учебный год и выбор, который зависит прежде всего от того, когда вы это читаете.',
        intro:
          'Большинство систем предлагает лишь один набор в год: пропустил — жди двенадцать месяцев. Российская система предлагает два. Это ценная особенность, но не нейтральная: в разных ситуациях два входа неравноценны. Вот как решить.',
        sections: [
          {
            heading: 'Что у двух входов общего',
            blocks: [
              {
                type: 'p',
                text: 'Начнём с того, что не меняется, — именно это больше всего тревожит семьи.',
              },
              {
                type: 'ul',
                items: [
                  'Выдаваемый диплом строго тот же',
                  'Стоимость обучения идентична',
                  'Требуемый пакет документов тот же',
                  'Место в общежитии доступно в обоих случаях',
                  'Визовая процедура и приглашение следуют той же логике',
                ],
              },
              {
                type: 'strong',
                text: 'Февральская сессия — не пересдача.',
              },
              {
                type: 'p',
                text: 'Это полноценная точка входа, предусмотренная учебным календарём, а не механизм второго сорта для отклонённых где-то ещё заявок.',
              },
            ],
          },
          {
            heading: 'Аргументы за сентябрьский набор',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Вы приезжаете в конце лета: адаптация к климату идёт постепенно, в течение нескольких месяцев',
                  'Выбор направлений и городов максимально широк',
                  'Вы начинаете вместе с основным потоком, что облегчает вхождение в коллектив',
                  'Учебный календарь самый понятный: два полных семестра внутри календарного года',
                ],
              },
              {
                type: 'p',
                text: 'Если вы читаете это между январём и маем — цельтесь именно сюда: времени на спокойную подготовку документов достаточно.',
              },
            ],
          },
          {
            heading: 'Аргументы за февральскую сессию',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Вы не теряете целый год, если летнее распределение не дало нужного направления',
                  'У вас есть осень, чтобы спокойно собрать документы, переводы и легализацию',
                  'Эти месяцы можно потратить на начало изучения русского до отъезда — на месте это меняет всё',
                  'Февральские группы часто меньше, а сопровождение ближе',
                ],
              },
              {
                type: 'strong',
                text: 'Настоящий момент внимания: вы приезжаете в разгар зимы.',
              },
              {
                type: 'p',
                text: 'Это не препятствие, а вопрос подготовки. Правильно экипированный студент адаптируется за несколько недель; тот, кто приезжает в феврале в осеннем пальто, переживает тяжёлый месяц.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Как решить на практике',
            blocks: [
              {
                type: 'p',
                text: 'Ответ зависит не столько от ваших предпочтений, сколько от реального графика формальностей.',
              },
              {
                type: 'ul',
                items: [
                  'С января по май: цельтесь в сентябрь, времени достаточно',
                  'С июня по август: сентябрь ещё реален, если пакет готов, иначе лучше февраль, чем спешка',
                  'С сентября по ноябрь: цельтесь в февраль — именно для этого окна сессия и существует',
                  'С декабря: февраль становится тесным; обсудите это сразу, а не запускайте переводы наугад',
                ],
              },
              {
                type: 'p',
                text: 'В любом случае осуществимость определяет не дата набора, а сроки административной цепочки: легализация, перевод, зачисление, затем приглашение и виза.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
              { type: 'related', slug: 'session-fevrier-padfac-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Диплом одинаковый независимо от сессии поступления?',
            answer:
              'Да, строго. Это та же программа в том же вузе с тем же дипломом государственного образца на выходе. Меняется только дата начала.',
          },
          {
            question: 'Все ли направления открыты в феврале?',
            answer:
              'Февральское предложение уже сентябрьского. Если вы нацелены на конкретное направление в конкретном вузе, проверьте его открытие в февральской сессии, прежде чем строить на этом график.',
          },
          {
            question: 'Правда ли, что приезжать в феврале тяжело из-за зимы?',
            answer:
              'Это вопрос экипировки и подготовки, а не выносливости. Основную зимнюю одежду планируйте покупать на месте, где она рассчитана на этот климат, и возьмите достаточно на первые дни после приезда.',
          },
        ],
        keywords: [
          'февральская сессия в России', 'сентябрьский набор в России', 'когда ехать учиться в Россию',
          'два набора в российский вуз', 'зачисление в феврале', 'учебный календарь России',
        ],
      },
    },
  },
];
