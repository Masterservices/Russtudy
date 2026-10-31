import type { Lang } from '../../i18n';
import type { LegalCopy } from './copy';
import { LEGAL_IDENTITY, identityField } from './identity';

/**
 * Conditions générales d'utilisation — site public RussieEtudes.com et
 * plateforme RusStudy (comptes étudiant, consultant et administrateur).
 *
 * Ne traite pas la vente : les conditions commerciales figurent dans les CGV.
 */
const I = LEGAL_IDENTITY;

export function buildTermsOfUse(lang: Lang): LegalCopy {
  const f = (key: Parameters<typeof identityField>[0]) => identityField(key, lang);

  if (lang === 'en') {
    return {
      title: 'Terms of use | RusStudy — RussieEtudes.com',
      description:
        'Rules for using the RussieEtudes.com website and the RusStudy platform: account creation, uploaded documents, prohibited uses, availability, intellectual property, suspension and applicable law.',
      h1: 'Terms of use',
      updated: 'Last updated: 7 October 2026',
      intro:
        'These terms govern access to and use of the RussieEtudes.com website and of the RusStudy platform. They apply to every visitor and every account holder. The commercial terms of our paid support are set out separately in the terms of sale.',
      sections: [
        {
          heading: '1. Purpose and acceptance',
          paragraphs: [
            `These terms of use set the rules for accessing and using the site ${I.site} and the RusStudy platform, both operated by ${f('legalName')}.`,
            'Browsing the site implies acceptance of these terms. Creating an account on the platform requires express acceptance.',
            'If you do not accept these terms, please do not use the site or the platform.',
          ],
        },
        {
          heading: '2. Access to the service',
          paragraphs: [
            'The public part of the site is freely accessible, without an account and free of charge.',
            'The RusStudy platform — student, consultant and administrator dashboards — is reserved for holders of an account opened by us or validated by us as part of a support engagement.',
            'Access to the platform requires a suitable internet connection and an up-to-date browser. The cost of that connection is borne by the user.',
          ],
        },
        {
          heading: '3. Account creation and security',
          paragraphs: [
            'You undertake to provide accurate, complete and up-to-date information when creating your account, and to update it where necessary. An application file built on inaccurate information cannot be processed.',
            'Your credentials are personal and confidential. You are responsible for keeping them secure and for any activity carried out from your account.',
            `If you suspect unauthorised use of your account, tell us immediately at ${I.email} so that we can suspend access.`,
            'An account may not be shared, transferred or sold.',
          ],
        },
        {
          heading: '4. Documents you upload',
          paragraphs: [
            'The platform allows you to upload documents relating to your file (identity documents, diplomas, transcripts, medical or consular documents).',
            'You warrant that you hold the rights to the documents you upload and that they are authentic. Uploading a forged or falsified document ends the support engagement immediately and may give rise to legal consequences for which you alone are answerable.',
            'These documents are used solely to process your file. Their processing is described in our privacy policy.',
          ],
        },
        {
          heading: '5. Prohibited uses',
          paragraphs: [
            'You agree not to: attempt to access an account or area that is not yours; disrupt or test the security of the service; extract the site’s content in bulk by automated means; publish or transmit unlawful, defamatory or abusive content through the platform’s messaging; or use the service to impersonate another person.',
            'You also agree not to use the content of the site to build a competing service presenting our editorial work as its own.',
          ],
        },
        {
          heading: '6. Availability and maintenance',
          paragraphs: [
            'We aim for continuous availability but do not guarantee it. The service may be interrupted for maintenance, updates or reasons outside our control.',
            'Where an interruption is planned and significant, we endeavour to give notice through the platform.',
          ],
        },
        {
          heading: '7. Intellectual property',
          paragraphs: [
            `The content of the site and of the platform — texts, structure, guides, comparison tables, interfaces — belongs to ${I.legalName} or to its licensors, and is protected.`,
            'Use of the service grants you no right of ownership over that content. The documents you upload remain yours.',
          ],
        },
        {
          heading: '8. Personal data',
          paragraphs: [
            'The processing of your personal data is described in our privacy policy, which forms an integral part of these terms.',
            `You may exercise your rights of access, rectification and deletion at ${I.email}.`,
          ],
        },
        {
          heading: '9. Suspension and closure of an account',
          paragraphs: [
            'We may suspend or close an account in the event of a serious breach of these terms, in particular the upload of a falsified document or an attempt to compromise the service.',
            'Except where the breach makes prior notice impossible, we inform you of the reason and allow you to respond.',
            'You may ask for your account to be closed at any time. Closure does not affect sums already due under a support engagement in progress, which remain governed by the terms of sale.',
          ],
        },
        {
          heading: '10. Liability',
          paragraphs: [
            'The information published on the public site is provided for guidance and does not replace the written answer of a university or of the competent authorities.',
            'We are not liable for damage resulting from inaccurate information you supplied, from failure to meet a deadline set by a third party, or from a decision taken by a university or a consular authority.',
          ],
        },
        {
          heading: '11. Amendments to these terms',
          paragraphs: [
            'These terms may be amended, in particular to reflect changes in the service or in applicable law. The date at the top of this page indicates the version in force.',
            'A substantial amendment affecting account holders is notified through the platform.',
          ],
        },
        {
          heading: '12. Governing law and disputes',
          paragraphs: [
            'These terms are governed by the law of the publisher’s country of establishment.',
            `In the event of a dispute, we ask you to contact us first at ${I.email} so that an amicable solution can be sought. Failing agreement, the dispute shall be brought before the competent courts.`,
          ],
        },
      ],
    };
  }

  if (lang === 'ar') {
    return {
      title: 'شروط الاستخدام | RusStudy — RussieEtudes.com',
      description:
        'قواعد استعمال موقع RussieEtudes.com ومنصّة RusStudy: إنشاء الحساب، والوثائق المرفوعة، والاستعمالات الممنوعة، والإتاحة، والملكية الفكرية، والتعليق، والقانون المنطبق.',
      h1: 'شروط الاستخدام',
      updated: 'آخر تحديث: 7 أكتوبر 2026',
      intro:
        'تضبط هذه الشروط النفاذ إلى موقع RussieEtudes.com ومنصّة RusStudy واستعمالهما. وتنطبق على كل زائر وكل صاحب حساب. أما الشروط التجارية للمرافقة المدفوعة فترد منفصلةً في شروط البيع.',
      sections: [
        {
          heading: '1. الموضوع والقبول',
          paragraphs: [
            `تضبط شروط الاستخدام هذه قواعد النفاذ إلى موقع ${I.site} ومنصّة RusStudy واستعمالهما، وكلاهما تُشغّلهما ${f('legalName')}.`,
            'تصفّح الموقع يعني قبول هذه الشروط. أما إنشاء حساب على المنصّة فيستلزم قبولًا صريحًا.',
            'إن لم تقبل هذه الشروط، فيُرجى عدم استعمال الموقع أو المنصّة.',
          ],
        },
        {
          heading: '2. النفاذ إلى الخدمة',
          paragraphs: [
            'الجزء العمومي من الموقع متاح بحرّية، دون حساب ودون مقابل.',
            'أما منصّة RusStudy — لوحات الطالب والمستشار والمدير — فهي محجوزة لأصحاب حساب نفتحه نحن أو نصادق عليه في إطار مرافقة.',
            'يستلزم النفاذ إلى المنصّة اتصالًا مناسبًا بالإنترنت ومتصفّحًا محدَّثًا. وكلفة هذا الاتصال على عاتق المستعمل.',
          ],
        },
        {
          heading: '3. إنشاء الحساب وأمنه',
          paragraphs: [
            'تلتزم بتقديم معلومات دقيقة وكاملة ومحدَّثة عند إنشاء حسابك، وبتحيينها عند الاقتضاء. فملف ترشّح مبني على معلومات غير دقيقة لا يمكن معالجته.',
            'معرّفاتك شخصية وسرّية. وأنت مسؤول عن حفظها وعن كل نشاط يتمّ انطلاقًا من حسابك.',
            `إن اشتبهت في استعمال غير مرخَّص لحسابك، فأبلِغنا فورًا على ${I.email} حتى نعلّق النفاذ.`,
            'لا يجوز تقاسم الحساب ولا إحالته ولا بيعه.',
          ],
        },
        {
          heading: '4. الوثائق التي ترفعها',
          paragraphs: [
            'تتيح لك المنصّة رفع الوثائق المتعلّقة بملفك (وثائق الهوية، والشهادات، وكشوف الأعداد، والوثائق الطبية أو القنصلية).',
            'تضمن أنك تملك الحقوق على الوثائق التي ترفعها وأنها صحيحة. ورفع وثيقة مزوَّرة أو محرَّفة يُنهي المرافقة فورًا وقد تترتّب عنه نتائج قانونية تتحمّلها وحدك.',
            'تُستعمل هذه الوثائق حصريًّا لمعالجة ملفك. ومعالجتها موصوفة في سياسة الخصوصية.',
          ],
        },
        {
          heading: '5. الاستعمالات الممنوعة',
          paragraphs: [
            'تلتزم بعدم: محاولة النفاذ إلى حساب أو فضاء ليس لك؛ أو تعطيل أمن الخدمة أو اختباره؛ أو استخراج محتوى الموقع بالجملة بوسائل آلية؛ أو نشر أو إرسال محتوى غير قانوني أو تشهيري أو مسيء عبر مراسلات المنصّة؛ أو استعمال الخدمة لانتحال شخصية الغير.',
            'كما تلتزم بعدم استعمال محتوى الموقع لبناء خدمة منافسة تقدّم عملنا التحريري على أنه من إنتاجها.',
          ],
        },
        {
          heading: '6. الإتاحة والصيانة',
          paragraphs: [
            'نسعى إلى إتاحة متواصلة لكننا لا نضمنها. فقد تنقطع الخدمة لأسباب صيانة أو تحيين أو لأسباب خارجة عن إرادتنا.',
            'وعندما يكون الانقطاع مبرمَجًا ومهمًّا، نجتهد في الإعلام به عبر المنصّة.',
          ],
        },
        {
          heading: '7. الملكية الفكرية',
          paragraphs: [
            `محتوى الموقع والمنصّة — النصوص والبنية والأدلّة وجداول المقارنة والواجهات — يعود إلى ${I.legalName} أو إلى مرخّصيها، وهو محمي.`,
            'لا يمنحك استعمال الخدمة أي حقّ ملكية على هذا المحتوى. أما الوثائق التي ترفعها فتبقى ملكك.',
          ],
        },
        {
          heading: '8. البيانات الشخصية',
          paragraphs: [
            'معالجة بياناتك الشخصية موصوفة في سياسة الخصوصية، التي تشكّل جزءًا لا يتجزّأ من هذه الشروط.',
            `يمكنك ممارسة حقوق النفاذ والتصحيح والحذف على ${I.email}.`,
          ],
        },
        {
          heading: '9. تعليق الحساب وغلقه',
          paragraphs: [
            'يمكننا تعليق حساب أو غلقه في حالة إخلال جسيم بهذه الشروط، خاصة رفع وثيقة محرَّفة أو محاولة المساس بالخدمة.',
            'وما لم يجعل الإخلال الإعلام المسبق مستحيلًا، نُعلمك بالسبب ونتيح لك الردّ.',
            'ويمكنك طلب غلق حسابك في أي وقت. ولا يمسّ الغلق المبالغ المستحقّة بعنوان مرافقة جارية، فهي تبقى خاضعة لشروط البيع.',
          ],
        },
        {
          heading: '10. المسؤولية',
          paragraphs: [
            'المعلومات المنشورة على الموقع العمومي إرشادية ولا تعوّض الجواب الكتابي للجامعة أو للسلطات المختصّة.',
            'ولا نتحمّل مسؤولية ضرر ناتج عن معلومات غير دقيقة قدّمتها، أو عن عدم احترام أجل حدّده طرف آخر، أو عن قرار اتّخذته جامعة أو سلطة قنصلية.',
          ],
        },
        {
          heading: '11. تعديل هذه الشروط',
          paragraphs: [
            'قد تُعدَّل هذه الشروط، خاصة لمواكبة تطوّر الخدمة أو القانون المنطبق. والتاريخ المذكور في أعلى هذه الصفحة يحدّد النسخة السارية.',
            'وكل تعديل جوهري يمسّ أصحاب الحسابات يُبلَّغ عبر المنصّة.',
          ],
        },
        {
          heading: '12. القانون المنطبق والنزاعات',
          paragraphs: [
            'تخضع هذه الشروط لقانون بلد تأسيس الناشر.',
            `وفي حالة نزاع، نطلب منك الاتصال بنا أولًا على ${I.email} سعيًا إلى حلّ ودّي. وفي غياب اتفاق، يُرفع النزاع أمام المحاكم المختصّة.`,
          ],
        },
      ],
    };
  }

  if (lang === 'ru') {
    return {
      title: 'Условия использования | RusStudy — RussieEtudes.com',
      description:
        'Правила пользования сайтом RussieEtudes.com и платформой RusStudy: создание учётной записи, загружаемые документы, запрещённые действия, доступность, интеллектуальная собственность, приостановка и применимое право.',
      h1: 'Условия использования',
      updated: 'Последнее обновление: 7 октября 2026 года',
      intro:
        'Настоящие условия регулируют доступ к сайту RussieEtudes.com и платформе RusStudy и их использование. Они действуют для каждого посетителя и каждого владельца учётной записи. Коммерческие условия платного сопровождения изложены отдельно — в условиях продажи.',
      sections: [
        {
          heading: '1. Предмет и принятие условий',
          paragraphs: [
            `Настоящие условия устанавливают правила доступа к сайту ${I.site} и платформе RusStudy и их использования; оба ресурса эксплуатирует ${f('legalName')}.`,
            'Просмотр сайта означает принятие настоящих условий. Создание учётной записи на платформе требует явного согласия.',
            'Если вы не принимаете эти условия, не пользуйтесь сайтом и платформой.',
          ],
        },
        {
          heading: '2. Доступ к сервису',
          paragraphs: [
            'Публичная часть сайта доступна свободно, без учётной записи и бесплатно.',
            'Платформа RusStudy — кабинеты студента, консультанта и администратора — предназначена для владельцев учётных записей, открытых нами или подтверждённых нами в рамках сопровождения.',
            'Для доступа к платформе необходимы подходящее интернет-соединение и актуальный браузер. Стоимость соединения несёт пользователь.',
          ],
        },
        {
          heading: '3. Создание учётной записи и её безопасность',
          paragraphs: [
            'Вы обязуетесь предоставлять точные, полные и актуальные сведения при создании учётной записи и обновлять их при необходимости. Пакет документов, построенный на неточных сведениях, не может быть обработан.',
            'Ваши учётные данные персональны и конфиденциальны. Вы отвечаете за их сохранность и за любые действия, совершённые из вашей учётной записи.',
            `При подозрении на несанкционированное использование немедленно сообщите нам на ${I.email}, чтобы мы приостановили доступ.`,
            'Учётную запись нельзя передавать, уступать или продавать.',
          ],
        },
        {
          heading: '4. Загружаемые вами документы',
          paragraphs: [
            'Платформа позволяет загружать документы, относящиеся к вашему делу (документы, удостоверяющие личность, дипломы, выписки с оценками, медицинские и консульские документы).',
            'Вы гарантируете, что обладаете правами на загружаемые документы и что они подлинные. Загрузка поддельного или изменённого документа немедленно прекращает сопровождение и может повлечь правовые последствия, за которые отвечаете только вы.',
            'Эти документы используются исключительно для работы по вашему делу. Их обработка описана в политике конфиденциальности.',
          ],
        },
        {
          heading: '5. Запрещённые действия',
          paragraphs: [
            'Вы обязуетесь не пытаться получить доступ к чужой учётной записи или закрытому разделу; не нарушать работу сервиса и не проверять его защиту; не извлекать содержимое сайта массово автоматическими средствами; не публиковать и не передавать через сообщения платформы противоправные, порочащие или оскорбительные материалы; не использовать сервис для выдачи себя за другое лицо.',
            'Вы также обязуетесь не использовать содержимое сайта для создания конкурирующего сервиса, выдающего нашу редакционную работу за собственную.',
          ],
        },
        {
          heading: '6. Доступность и обслуживание',
          paragraphs: [
            'Мы стремимся к непрерывной доступности, но не гарантируем её. Сервис может прерываться для обслуживания, обновлений или по не зависящим от нас причинам.',
            'Если перерыв запланирован и значителен, мы стараемся предупредить о нём через платформу.',
          ],
        },
        {
          heading: '7. Интеллектуальная собственность',
          paragraphs: [
            `Содержимое сайта и платформы — тексты, структура, руководства, сравнительные таблицы, интерфейсы — принадлежит ${I.legalName} или её лицензиарам и охраняется.`,
            'Пользование сервисом не даёт вам прав собственности на это содержимое. Загруженные вами документы остаются вашими.',
          ],
        },
        {
          heading: '8. Персональные данные',
          paragraphs: [
            'Обработка ваших персональных данных описана в политике конфиденциальности, которая является неотъемлемой частью настоящих условий.',
            `Права на доступ, исправление и удаление можно реализовать по адресу ${I.email}.`,
          ],
        },
        {
          heading: '9. Приостановка и закрытие учётной записи',
          paragraphs: [
            'Мы вправе приостановить или закрыть учётную запись при существенном нарушении настоящих условий, в частности при загрузке поддельного документа или попытке нарушить работу сервиса.',
            'Кроме случаев, когда характер нарушения делает предварительное уведомление невозможным, мы сообщаем причину и даём возможность ответить.',
            'Вы можете в любой момент попросить закрыть учётную запись. Закрытие не затрагивает суммы, уже причитающиеся по текущему сопровождению: они остаются под действием условий продажи.',
          ],
        },
        {
          heading: '10. Ответственность',
          paragraphs: [
            'Сведения на публичном сайте носят справочный характер и не заменяют письменный ответ вуза или компетентных органов.',
            'Мы не отвечаем за ущерб, вызванный предоставленными вами неточными сведениями, несоблюдением срока, установленного третьей стороной, или решением вуза либо консульского органа.',
          ],
        },
        {
          heading: '11. Изменение условий',
          paragraphs: [
            'Настоящие условия могут изменяться, в частности вслед за развитием сервиса или изменением применимого права. Дата вверху страницы указывает действующую редакцию.',
            'О существенном изменении, затрагивающем владельцев учётных записей, сообщается через платформу.',
          ],
        },
        {
          heading: '12. Применимое право и споры',
          paragraphs: [
            'Настоящие условия регулируются правом страны учреждения издателя.',
            `В случае спора просим сначала написать нам на ${I.email} для поиска мирного решения. При недостижении согласия спор передаётся в компетентный суд.`,
          ],
        },
      ],
    };
  }

  return {
    title: "Conditions générales d'utilisation | RusStudy — RussieEtudes.com",
    description:
      "Règles d'utilisation du site RussieEtudes.com et de la plateforme RusStudy : création de compte, documents téléversés, usages interdits, disponibilité, propriété intellectuelle, suspension et droit applicable.",
    h1: "Conditions générales d'utilisation",
    updated: 'Dernière mise à jour : 7 octobre 2026',
    intro:
      "Les présentes conditions régissent l'accès au site RussieEtudes.com et à la plateforme RusStudy, ainsi que leur utilisation. Elles s'appliquent à tout visiteur et à tout titulaire de compte. Les conditions commerciales de notre accompagnement payant font l'objet d'un document distinct : les conditions générales de vente.",
    sections: [
      {
        heading: '1. Objet et acceptation',
        paragraphs: [
          `Les présentes conditions générales d'utilisation fixent les règles d'accès et d'usage du site ${I.site} et de la plateforme RusStudy, tous deux exploités par ${f('legalName')}.`,
          "La navigation sur le site vaut acceptation des présentes conditions. La création d'un compte sur la plateforme suppose une acceptation expresse.",
          "Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser le site ni la plateforme.",
        ],
      },
      {
        heading: '2. Accès au service',
        paragraphs: [
          "La partie publique du site est librement accessible, sans compte et sans frais.",
          "La plateforme RusStudy — tableaux de bord étudiant, consultant et administrateur — est réservée aux titulaires d'un compte ouvert par nos soins ou validé par nous dans le cadre d'un accompagnement.",
          "L'accès à la plateforme suppose une connexion internet adaptée et un navigateur à jour. Le coût de cette connexion reste à la charge de l'utilisateur.",
        ],
      },
      {
        heading: '3. Création de compte et sécurité',
        paragraphs: [
          "Vous vous engagez à fournir des informations exactes, complètes et à jour lors de la création de votre compte, et à les actualiser si nécessaire. Un dossier de candidature construit sur des informations inexactes ne peut pas être traité.",
          "Vos identifiants sont personnels et confidentiels. Vous êtes responsable de leur conservation et de toute activité réalisée depuis votre compte.",
          `Si vous suspectez une utilisation non autorisée de votre compte, signalez-le immédiatement à ${I.email} afin que nous puissions suspendre l'accès.`,
          "Un compte ne peut être ni partagé, ni cédé, ni vendu.",
        ],
      },
      {
        heading: '4. Documents que vous téléversez',
        paragraphs: [
          "La plateforme vous permet de déposer des documents relatifs à votre dossier (pièces d'identité, diplômes, relevés de notes, documents médicaux ou consulaires).",
          "Vous garantissez détenir les droits sur les documents que vous déposez et attestez de leur authenticité. Le dépôt d'un document contrefait ou falsifié met fin immédiatement à l'accompagnement et peut entraîner des conséquences légales dont vous répondez seul.",
          "Ces documents sont utilisés uniquement pour le traitement de votre dossier. Leur traitement est décrit dans notre politique de confidentialité.",
        ],
      },
      {
        heading: '5. Usages interdits',
        paragraphs: [
          "Vous vous engagez à ne pas : tenter d'accéder à un compte ou à un espace qui ne vous appartient pas ; perturber ou tester la sécurité du service ; extraire massivement le contenu du site par des moyens automatisés ; publier ou transmettre via la messagerie de la plateforme des contenus illicites, diffamatoires ou injurieux ; utiliser le service pour usurper l'identité d'un tiers.",
          "Vous vous engagez également à ne pas exploiter le contenu du site pour constituer un service concurrent présentant notre travail éditorial comme le sien.",
        ],
      },
      {
        heading: '6. Disponibilité et maintenance',
        paragraphs: [
          "Nous visons une disponibilité continue sans la garantir. Le service peut être interrompu pour maintenance, mise à jour, ou pour des raisons indépendantes de notre volonté.",
          "Lorsqu'une interruption est programmée et significative, nous nous efforçons d'en informer les utilisateurs via la plateforme.",
        ],
      },
      {
        heading: '7. Propriété intellectuelle',
        paragraphs: [
          `Les contenus du site et de la plateforme — textes, structure, guides, tableaux comparatifs, interfaces — appartiennent à ${I.legalName} ou à ses concédants, et sont protégés.`,
          "L'utilisation du service ne vous confère aucun droit de propriété sur ces contenus. Les documents que vous déposez restent les vôtres.",
        ],
      },
      {
        heading: '8. Données personnelles',
        paragraphs: [
          "Le traitement de vos données personnelles est décrit dans notre politique de confidentialité, qui fait partie intégrante des présentes conditions.",
          `Vous pouvez exercer vos droits d'accès, de rectification et de suppression à l'adresse ${I.email}.`,
        ],
      },
      {
        heading: '9. Suspension et fermeture d’un compte',
        paragraphs: [
          "Nous pouvons suspendre ou fermer un compte en cas de manquement grave aux présentes conditions, notamment le dépôt d'un document falsifié ou une tentative d'atteinte au service.",
          "Sauf lorsque la nature du manquement rend l'information préalable impossible, nous vous indiquons le motif et vous permettons de répondre.",
          "Vous pouvez demander la fermeture de votre compte à tout moment. Cette fermeture est sans effet sur les sommes déjà dues au titre d'un accompagnement en cours, qui restent régies par les conditions générales de vente.",
        ],
      },
      {
        heading: '10. Responsabilité',
        paragraphs: [
          "Les informations publiées sur le site public sont données à titre indicatif et ne remplacent pas la réponse écrite d'une université ou des autorités compétentes.",
          "Nous ne sommes pas responsables des préjudices résultant d'informations inexactes que vous auriez communiquées, du non-respect d'un délai fixé par un tiers, ou d'une décision prise par une université ou une autorité consulaire.",
        ],
      },
      {
        heading: '11. Modification des présentes conditions',
        paragraphs: [
          "Les présentes conditions peuvent être modifiées, notamment pour suivre l'évolution du service ou du droit applicable. La date figurant en haut de cette page indique la version en vigueur.",
          "Toute modification substantielle affectant les titulaires de compte est notifiée via la plateforme.",
        ],
      },
      {
        heading: '12. Droit applicable et litiges',
        paragraphs: [
          "Les présentes conditions sont régies par le droit du pays d'établissement de l'éditeur.",
          `En cas de différend, nous vous invitons à nous contacter d'abord à ${I.email} afin de rechercher une solution amiable. À défaut d'accord, le litige sera porté devant les juridictions compétentes.`,
        ],
      },
    ],
  };
}
