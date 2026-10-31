import type { Lang } from '../../i18n';
import { buildLegalNotice } from './mentions-legales';
import { buildTermsOfUse } from './cgu';
import { buildTermsOfSale } from './cgv';

export type LegalKind = 'privacy' | 'cookies' | 'legal-notice' | 'terms-of-use' | 'terms-of-sale';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalCopy {
  title: string;
  description: string;
  h1: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const PRIVACY: Record<Lang, LegalCopy> = {
  fr: {
    title: 'Politique de confidentialité | RusStudy — RussieEtudes.com',
    description:
      'Quelles données RusStudy collecte via ses formulaires (candidature, rendez-vous, guide), comment elles sont utilisées, combien de temps elles sont conservées et comment exercer vos droits.',
    h1: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 22 juillet 2026',
    intro:
      "RusStudy (projet de Master Services) accompagne les étudiants tunisiens vers les universités publiques russes via le site RussieEtudes.com. Cette page explique de façon transparente quelles données personnelles nous collectons, pourquoi, et quels sont vos droits.",
    sections: [
      {
        heading: 'Données que nous collectons',
        paragraphs: [
          "Lorsque vous remplissez le formulaire de candidature, de prise de rendez-vous ou de téléchargement du guide, nous collectons les informations que vous saisissez : nom complet, numéro WhatsApp, adresse email et, selon le formulaire, des informations sur votre parcours (année et mention du baccalauréat, niveau d'anglais, filière souhaitée, budget, ville souhaitée en Russie, notes libres).",
          'Nous ne collectons aucune donnée de navigation à des fins publicitaires : le site ne contient ni traceur publicitaire, ni outil de mesure d’audience tiers.',
        ],
      },
      {
        heading: 'Utilisation de vos données',
        paragraphs: [
          "Vos données servent exclusivement à traiter votre demande : évaluer votre profil, vous recontacter par WhatsApp ou email, préparer votre dossier d'admission et assurer le suivi de votre candidature.",
          'Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.',
        ],
      },
      {
        heading: 'Canaux de transmission',
        paragraphs: [
          "Les candidatures soumises sur le site sont transmises à l'équipe RusStudy via notre système de collecte interne. Lorsque vous choisissez de confirmer via WhatsApp, le message pré-rempli est envoyé depuis votre propre application WhatsApp vers notre numéro professionnel (+7 996 433 4489) : il est alors soumis aux conditions de confidentialité de WhatsApp.",
        ],
      },
      {
        heading: 'Conservation',
        paragraphs: [
          "Les données de candidature sont conservées le temps du traitement de votre dossier et au maximum deux ans après le dernier contact, sauf obligation légale contraire ou demande de suppression de votre part.",
        ],
      },
      {
        heading: 'Vos droits',
        paragraphs: [
          "Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données en écrivant à contact@russieetudes.com ou via WhatsApp au +7 996 433 4489. Nous répondons dans un délai raisonnable.",
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy | RusStudy — RussieEtudes.com',
    description:
      'What data RusStudy collects through its forms (application, booking, guide), how it is used, how long it is kept and how to exercise your rights.',
    h1: 'Privacy policy',
    updated: 'Last updated: 22 July 2026',
    intro:
      'RusStudy (a Master Services project) guides Tunisian students towards Russian public universities through RussieEtudes.com. This page explains transparently what personal data we collect, why, and what your rights are.',
    sections: [
      {
        heading: 'Data we collect',
        paragraphs: [
          'When you fill in the application, booking or guide-download form, we collect the information you enter: full name, WhatsApp number, email address and, depending on the form, details about your academic background (baccalaureate year and grade, English level, desired field of study, budget, preferred city in Russia, free notes).',
          'We do not collect any browsing data for advertising purposes: the site contains no advertising trackers and no third-party analytics tools.',
        ],
      },
      {
        heading: 'How your data is used',
        paragraphs: [
          'Your data is used exclusively to process your request: assessing your profile, contacting you back via WhatsApp or email, preparing your admission file and following up on your application.',
          'It is never sold, rented or shared with third parties for commercial purposes.',
        ],
      },
      {
        heading: 'Transmission channels',
        paragraphs: [
          'Applications submitted on the site are transmitted to the RusStudy team through our internal collection system. When you choose to confirm via WhatsApp, the pre-filled message is sent from your own WhatsApp app to our business number (+7 996 433 4489) and is then subject to WhatsApp’s own privacy terms.',
        ],
      },
      {
        heading: 'Retention',
        paragraphs: [
          'Application data is kept for the duration of your file processing and for a maximum of two years after the last contact, unless a legal obligation requires otherwise or you request deletion.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You may at any time request access to, correction of, or deletion of your data by writing to contact@russieetudes.com or via WhatsApp at +7 996 433 4489. We respond within a reasonable time.',
        ],
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية | RusStudy — RussieEtudes.com',
    description:
      'ما هي البيانات التي تجمعها RusStudy عبر استماراتها (الترشح، حجز موعد، الدليل)، وكيف تُستخدم، ومدة الاحتفاظ بها، وكيفية ممارسة حقوقك.',
    h1: 'سياسة الخصوصية',
    updated: 'آخر تحديث: 22 جويلية 2026',
    intro:
      'ترافق RusStudy (مشروع تابع لـ Master Services) الطلبة التونسيين نحو الجامعات الحكومية الروسية عبر موقع RussieEtudes.com. تشرح هذه الصفحة بشفافية البيانات الشخصية التي نجمعها، وأسباب جمعها، وحقوقك.',
    sections: [
      {
        heading: 'البيانات التي نجمعها',
        paragraphs: [
          'عند ملء استمارة الترشح أو حجز موعد أو تحميل الدليل، نجمع المعلومات التي تدخلها: الاسم الكامل، رقم واتساب، البريد الإلكتروني، وحسب الاستمارة معلومات عن مسارك الدراسي (سنة البكالوريا وشهادتها، مستوى الإنجليزية، التخصص المطلوب، الميزانية، المدينة المفضلة في روسيا، ملاحظات حرة).',
          'لا نجمع أي بيانات تصفح لأغراض إعلانية: الموقع لا يحتوي على متتبعات إعلانية ولا أدوات قياس جمهور تابعة لطرف ثالث.',
        ],
      },
      {
        heading: 'استخدام بياناتك',
        paragraphs: [
          'تُستخدم بياناتك حصريًا لمعالجة طلبك: تقييم ملفك، إعادة الاتصال بك عبر واتساب أو البريد الإلكتروني، إعداد ملف القبول ومتابعة ترشحك.',
          'لا تُباع بياناتك ولا تُؤجَّر ولا تُشارك مع أطراف ثالثة لأغراض تجارية.',
        ],
      },
      {
        heading: 'قنوات الإرسال',
        paragraphs: [
          'تُرسل الترشحات المقدمة على الموقع إلى فريق RusStudy عبر نظام الجمع الداخلي الخاص بنا. وعند اختيارك التأكيد عبر واتساب، تُرسل الرسالة المعبأة مسبقًا من تطبيق واتساب الخاص بك إلى رقمنا المهني (+7 996 433 4489)، وتخضع حينها لشروط خصوصية واتساب.',
        ],
      },
      {
        heading: 'مدة الاحتفاظ',
        paragraphs: [
          'نحتفظ ببيانات الترشح طوال مدة معالجة ملفك وبحد أقصى سنتين بعد آخر اتصال، ما لم يوجد التزام قانوني مخالف أو طلب حذف من طرفك.',
        ],
      },
      {
        heading: 'حقوقك',
        paragraphs: [
          'يمكنك في أي وقت طلب الاطلاع على بياناتك أو تصحيحها أو حذفها بمراسلتنا على contact@russieetudes.com أو عبر واتساب على الرقم +7 996 433 4489. نرد في أجل معقول.',
        ],
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности | RusStudy — RussieEtudes.com',
    description:
      'Какие данные RusStudy собирает через формы сайта (заявка, запись, гид), как они используются, сколько хранятся и как реализовать свои права.',
    h1: 'Политика конфиденциальности',
    updated: 'Последнее обновление: 22 июля 2026 г.',
    intro:
      'RusStudy (проект компании Master Services) сопровождает тунисских студентов при поступлении в государственные вузы России через сайт RussieEtudes.com. На этой странице прозрачно описано, какие персональные данные мы собираем, зачем, и какие у вас права.',
    sections: [
      {
        heading: 'Какие данные мы собираем',
        paragraphs: [
          'Когда вы заполняете форму заявки, записи на звонок или скачивания гида, мы собираем введённую вами информацию: полное имя, номер WhatsApp, адрес электронной почты и, в зависимости от формы, сведения об учёбе (год и оценка бакалавриата, уровень английского, желаемое направление, бюджет, предпочитаемый город в России, свободные заметки).',
          'Мы не собираем данные о просмотре страниц в рекламных целях: на сайте нет рекламных трекеров и сторонних систем аналитики.',
        ],
      },
      {
        heading: 'Как используются ваши данные',
        paragraphs: [
          'Ваши данные используются исключительно для обработки вашего запроса: оценки профиля, обратной связи через WhatsApp или email, подготовки досье для поступления и сопровождения заявки.',
          'Они не продаются, не сдаются в аренду и не передаются третьим лицам в коммерческих целях.',
        ],
      },
      {
        heading: 'Каналы передачи',
        paragraphs: [
          'Заявки, отправленные на сайте, передаются команде RusStudy через нашу внутреннюю систему сбора. Если вы подтверждаете заявку через WhatsApp, заранее заполненное сообщение отправляется из вашего собственного приложения WhatsApp на наш рабочий номер (+7 996 433 4489) и подчиняется условиям конфиденциальности WhatsApp.',
        ],
      },
      {
        heading: 'Срок хранения',
        paragraphs: [
          'Данные заявки хранятся на время обработки вашего досье и не более двух лет после последнего контакта, если иное не требуется по закону или вы не запросили удаление.',
        ],
      },
      {
        heading: 'Ваши права',
        paragraphs: [
          'Вы можете в любой момент запросить доступ к своим данным, их исправление или удаление, написав на contact@russieetudes.com или в WhatsApp по номеру +7 996 433 4489. Мы отвечаем в разумный срок.',
        ],
      },
    ],
  },
};

const COOKIES: Record<Lang, LegalCopy> = {
  fr: {
    title: 'Cookies et stockage local | RusStudy — RussieEtudes.com',
    description:
      "RussieEtudes.com n'utilise aucun cookie publicitaire ni traceur tiers. Découvrez ce que le site enregistre localement dans votre navigateur et comment l'effacer.",
    h1: 'Cookies et stockage local',
    updated: 'Dernière mise à jour : 22 juillet 2026',
    intro:
      "Le site RussieEtudes.com n'utilise aucun cookie publicitaire, aucun traceur tiers et aucun outil de mesure d'audience externe. Certaines informations sont en revanche enregistrées localement dans votre navigateur (localStorage / sessionStorage) pour améliorer votre expérience.",
    sections: [
      {
        heading: 'Ce que le site enregistre dans votre navigateur',
        paragraphs: [
          "Votre langue préférée (pour vous la proposer à la prochaine visite), l'email saisi pour recevoir le guide, les informations de votre dernière candidature ou prise de rendez-vous (numéro de dossier, données du formulaire) afin d'alimenter votre espace de suivi candidat, et un indicateur de session pour ne pas réafficher certaines fenêtres.",
          'Ces informations restent sur votre appareil : elles ne sont pas des cookies transmis automatiquement à nos serveurs à chaque page.',
          "Un seul cookie fonctionnel est déposé (rs_lang_redirected, durée 1 an) : il mémorise que la détection automatique de langue a déjà eu lieu lors de votre première visite, afin de ne plus vous rediriger ensuite. Il ne contient aucune donnée personnelle.",
        ],
      },
      {
        heading: 'Polices et contenus externes',
        paragraphs: [
          "Les polices de caractères du site sont chargées depuis Google Fonts, et certaines images depuis des CDN d'images. Ces services peuvent recevoir votre adresse IP au chargement de la page, comme pour tout contenu web hébergé par un tiers.",
        ],
      },
      {
        heading: 'Comment effacer ces données',
        paragraphs: [
          "Vous pouvez supprimer à tout moment ces données locales via les réglages de votre navigateur (« Effacer les données de navigation » / « Données de sites »). Cela réinitialisera simplement votre langue préférée et votre espace de suivi local.",
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [
          'Pour toute question sur vos données, écrivez-nous à contact@russieetudes.com ou consultez notre politique de confidentialité.',
        ],
      },
    ],
  },
  en: {
    title: 'Cookies and local storage | RusStudy — RussieEtudes.com',
    description:
      'RussieEtudes.com uses no advertising cookies and no third-party trackers. Learn what the site stores locally in your browser and how to clear it.',
    h1: 'Cookies and local storage',
    updated: 'Last updated: 22 July 2026',
    intro:
      'RussieEtudes.com uses no advertising cookies, no third-party trackers and no external analytics tools. Some information is however stored locally in your browser (localStorage / sessionStorage) to improve your experience.',
    sections: [
      {
        heading: 'What the site stores in your browser',
        paragraphs: [
          'Your preferred language (so it can be offered on your next visit), the email entered to receive the guide, the details of your latest application or booking (file number, form data) to power your local applicant tracking space, and a session flag to avoid showing certain pop-ups twice.',
          'This information stays on your device: it is not a cookie automatically sent to our servers on every page.',
          'A single functional cookie is set (rs_lang_redirected, 1-year lifetime): it records that automatic language detection already happened on your first visit, so you are never redirected again. It contains no personal data.',
        ],
      },
      {
        heading: 'External fonts and content',
        paragraphs: [
          'The site’s fonts are loaded from Google Fonts, and some images from image CDNs. These services may receive your IP address when the page loads, as with any third-party-hosted web content.',
        ],
      },
      {
        heading: 'How to clear this data',
        paragraphs: [
          'You can delete this local data at any time from your browser settings (“Clear browsing data” / “Site data”). This simply resets your preferred language and your local tracking space.',
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [
          'For any question about your data, write to contact@russieetudes.com or read our privacy policy.',
        ],
      },
    ],
  },
  ar: {
    title: 'الكوكيز والتخزين المحلي | RusStudy — RussieEtudes.com',
    description:
      'لا يستخدم موقع RussieEtudes.com أي كوكيز إعلانية ولا متتبعات تابعة لطرف ثالث. تعرّف على ما يخزنه الموقع محليًا في متصفحك وكيفية حذفه.',
    h1: 'الكوكيز والتخزين المحلي',
    updated: 'آخر تحديث: 22 جويلية 2026',
    intro:
      'لا يستخدم موقع RussieEtudes.com أي كوكيز إعلانية ولا متتبعات خارجية ولا أدوات قياس جمهور. لكن تُخزَّن بعض المعلومات محليًا في متصفحك (localStorage / sessionStorage) لتحسين تجربتك.',
    sections: [
      {
        heading: 'ما يخزنه الموقع في متصفحك',
        paragraphs: [
          'لغتك المفضلة (لاقتراحها في زيارتك القادمة)، البريد الإلكتروني المدخل لاستلام الدليل، معلومات آخر ترشح أو حجز موعد (رقم الملف، بيانات الاستمارة) لتغذية فضاء المتابعة المحلي الخاص بك، ومؤشر جلسة لعدم إعادة عرض بعض النوافذ.',
          'تبقى هذه المعلومات على جهازك: فهي ليست كوكيز تُرسل تلقائيًا إلى خوادمنا مع كل صفحة.',
          'يُودَع كوكي وظيفي واحد فقط (rs_lang_redirected، لمدة سنة): يسجل أن الكشف التلقائي عن اللغة تم في زيارتك الأولى حتى لا تتم إعادة توجيهك مجددًا. لا يحتوي على أي بيانات شخصية.',
        ],
      },
      {
        heading: 'الخطوط والمحتوى الخارجي',
        paragraphs: [
          'تُحمَّل خطوط الموقع من Google Fonts وبعض الصور من شبكات توزيع الصور. قد تتلقى هذه الخدمات عنوان IP الخاص بك عند تحميل الصفحة، كما هو الحال مع أي محتوى مستضاف لدى طرف ثالث.',
        ],
      },
      {
        heading: 'كيفية حذف هذه البيانات',
        paragraphs: [
          'يمكنك حذف هذه البيانات المحلية في أي وقت من إعدادات متصفحك («مسح بيانات التصفح» / «بيانات المواقع»). سيؤدي ذلك فقط إلى إعادة ضبط لغتك المفضلة وفضاء المتابعة المحلي.',
        ],
      },
      {
        heading: 'أسئلة',
        paragraphs: [
          'لأي سؤال حول بياناتك، راسلنا على contact@russieetudes.com أو اطّلع على سياسة الخصوصية.',
        ],
      },
    ],
  },
  ru: {
    title: 'Cookies и локальное хранилище | RusStudy — RussieEtudes.com',
    description:
      'RussieEtudes.com не использует рекламные cookies и сторонние трекеры. Узнайте, что сайт сохраняет локально в вашем браузере и как это удалить.',
    h1: 'Cookies и локальное хранилище',
    updated: 'Последнее обновление: 22 июля 2026 г.',
    intro:
      'Сайт RussieEtudes.com не использует рекламные cookies, сторонние трекеры и внешние системы аналитики. Однако некоторая информация сохраняется локально в вашем браузере (localStorage / sessionStorage) для улучшения вашего опыта.',
    sections: [
      {
        heading: 'Что сайт сохраняет в вашем браузере',
        paragraphs: [
          'Предпочитаемый язык (чтобы предложить его при следующем визите), email, введённый для получения гида, данные последней заявки или записи (номер досье, данные формы) для вашего локального кабинета отслеживания, а также сессионный флаг, чтобы не показывать некоторые окна повторно.',
          'Эта информация остаётся на вашем устройстве: это не cookies, автоматически отправляемые на наши серверы при каждом открытии страницы.',
          'Устанавливается только один функциональный cookie (rs_lang_redirected, срок — 1 год): он фиксирует, что автоматическое определение языка уже произошло при первом визите, чтобы больше вас не перенаправлять. Он не содержит персональных данных.',
        ],
      },
      {
        heading: 'Внешние шрифты и контент',
        paragraphs: [
          'Шрифты сайта загружаются из Google Fonts, некоторые изображения — из CDN. Эти сервисы могут получать ваш IP-адрес при загрузке страницы, как и любой контент, размещённый у третьих лиц.',
        ],
      },
      {
        heading: 'Как удалить эти данные',
        paragraphs: [
          'Вы можете удалить эти локальные данные в любой момент в настройках браузера («Очистить данные браузера» / «Данные сайтов»). Это просто сбросит предпочитаемый язык и локальный кабинет отслеживания.',
        ],
      },
      {
        heading: 'Вопросы',
        paragraphs: [
          'По любым вопросам о ваших данных пишите на contact@russieetudes.com или ознакомьтесь с политикой конфиденциальности.',
        ],
      },
    ],
  },
};

export function buildLegalCopy(kind: LegalKind, lang: Lang): LegalCopy {
  switch (kind) {
    case 'privacy':
      return PRIVACY[lang];
    case 'cookies':
      return COOKIES[lang];
    case 'legal-notice':
      return buildLegalNotice(lang);
    case 'terms-of-use':
      return buildTermsOfUse(lang);
    case 'terms-of-sale':
      return buildTermsOfSale(lang);
  }
}
