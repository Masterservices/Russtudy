import type { Lang } from '../../i18n';

/* Contenu du popup de conversion de la page /guide :
   cadeau vidéo → démo vidéo → email → coupon (QR + JPG + WhatsApp) → rendez-vous Calendly. */
export interface GuidePopupCopy {
  closeAria: string;

  giftBadge: string;
  giftTitle: string;
  giftOff: string;
  giftSub: string;
  giftFloat: string;
  giftCta: string;
  giftTrust: [string, string];

  demoBadge: string;
  demoTitle: string;
  demoCta: string;
  demoHint: string;
  demoHintDone: string;

  emailBadge: string;
  emailTitle: string;
  emailSub: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  errName: string;
  errEmail: string;
  trustSpamTitle: string;
  trustSpamText: string;
  trustCouponTitle: string;
  trustCouponText: string;
  emailCta: string;

  couponTitle: string;
  couponSentDefault: string;
  couponSentWithEmail: string;
  ticketLabel: string;
  qrNote: string;
  qrClientFallback: string;
  downloadCouponCta: string;
  downloadPdfCta: string;
  waCta: string;
  waHint: string;
  bookCta: string;

  couponImgLabel: string;
  couponImgFooter: string;

  waMsgGreeting: string;
  waMsgName: string;
  waMsgEmail: string;
  waMsgClosing: string;

  calBadge: string;
  calTitle: string;
  calSub: string;
  laterClose: string;
}

const COPY: Record<Lang, GuidePopupCopy> = {
  fr: {
    closeAria: 'Fermer',

    giftBadge: 'Offre limitée',
    giftTitle: 'Un cadeau vous attend',
    giftOff: '-25 %',
    giftSub: 'sur toutes nos formations pour étudier en Russie.',
    giftFloat: '🎁 Débloquez votre coupon en 60 s',
    giftCta: 'Commencer (60 sec)',
    giftTrust: ['✓ 100 % gratuit', '✓ Sans engagement'],

    demoBadge: '▶ Démonstration · 60 sec',
    demoTitle: 'Découvrez RusStudy en action',
    demoCta: 'Obtenir mon coupon -25 %',
    demoHint: "Regardez la vidéo jusqu'au bout pour débloquer votre coupon.",
    demoHintDone: '✓ Coupon débloqué — continuez',

    emailBadge: '🎟️ Dernière étape',
    emailTitle: 'Où envoyer votre coupon -25 % ?',
    emailSub: 'Votre coupon et le guide « Étudier en Russie » sont envoyés instantanément.',
    namePlaceholder: 'Votre nom complet',
    emailPlaceholder: 'Votre adresse email',
    errName: 'Entrez votre nom complet.',
    errEmail: 'Entrez une adresse email valide.',
    trustSpamTitle: 'Aucun spam',
    trustSpamText: 'désinscription en un clic',
    trustCouponTitle: 'Coupon valable sur tous les programmes',
    trustCouponText: 'utilisable immédiatement',
    emailCta: 'Recevoir mon coupon',

    couponTitle: 'Coupon débloqué ✨',
    couponSentDefault: 'Vérifiez votre boîte mail : votre coupon et le guide vous attendent.',
    couponSentWithEmail: 'Envoyé à {email} — votre coupon et le guide vous attendent.',
    ticketLabel: 'Coupon exclusif',
    qrNote: 'Présentez ce QR code à votre conseiller lors de l’inscription pour appliquer la réduction.',
    qrClientFallback: 'client',
    downloadCouponCta: 'Télécharger le coupon',
    downloadPdfCta: 'Télécharger le guide PDF',
    waCta: 'Envoyer le coupon sur WhatsApp',
    waHint: 'Le coupon est enregistré dans vos images — joignez-le dans WhatsApp 📎',
    bookCta: 'Réserver mon entretien conseiller',

    couponImgLabel: 'COUPON EXCLUSIF',
    couponImgFooter: 'À présenter à votre conseiller lors de l’inscription — russieetudes.com',

    waMsgGreeting: 'Bonjour RusStudy 👋\nVoici mon coupon *-25 %* : *{coupon}*',
    waMsgName: '\nNom : {name}',
    waMsgEmail: '\nEmail : {email}',
    waMsgClosing: "\nJe souhaite l'utiliser pour mon inscription dans une université russe.\n(coupon en pièce jointe)",

    calBadge: '📅 Rendez-vous offert',
    calTitle: 'Parlez à un conseiller',
    calSub: 'Choisissez un créneau — on valide votre dossier ensemble.',
    laterClose: 'Plus tard — fermer',
  },

  en: {
    closeAria: 'Close',

    giftBadge: 'Limited offer',
    giftTitle: 'A gift is waiting for you',
    giftOff: '-25%',
    giftSub: 'on all our programs to study in Russia.',
    giftFloat: '🎁 Unlock your coupon in 60s',
    giftCta: 'Start (60 sec)',
    giftTrust: ['✓ 100% free', '✓ No commitment'],

    demoBadge: '▶ Demo · 60 sec',
    demoTitle: 'See RusStudy in action',
    demoCta: 'Get my -25% coupon',
    demoHint: 'Watch the video to the end to unlock your coupon.',
    demoHintDone: '✓ Coupon unlocked — carry on',

    emailBadge: '🎟️ Last step',
    emailTitle: 'Where should we send your -25% coupon?',
    emailSub: 'Your coupon and the "Study in Russia" guide are sent instantly.',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'Your email address',
    errName: 'Please enter your full name.',
    errEmail: 'Please enter a valid email address.',
    trustSpamTitle: 'No spam',
    trustSpamText: 'unsubscribe in one click',
    trustCouponTitle: 'Coupon valid on all programs',
    trustCouponText: 'usable immediately',
    emailCta: 'Get my coupon',

    couponTitle: 'Coupon unlocked ✨',
    couponSentDefault: 'Check your inbox: your coupon and the guide are waiting for you.',
    couponSentWithEmail: 'Sent to {email} — your coupon and the guide are waiting for you.',
    ticketLabel: 'Exclusive coupon',
    qrNote: 'Show this QR code to your advisor during enrollment to apply the discount.',
    qrClientFallback: 'client',
    downloadCouponCta: 'Download the coupon',
    downloadPdfCta: 'Download the free PDF guide',
    waCta: 'Send the coupon on WhatsApp',
    waHint: 'The coupon has been saved to your photos — attach it in WhatsApp 📎',
    bookCta: 'Book my advisor interview',

    couponImgLabel: 'EXCLUSIVE COUPON',
    couponImgFooter: 'Show this to your advisor at enrollment — russieetudes.com',

    waMsgGreeting: 'Hello RusStudy 👋\nHere is my *-25%* coupon: *{coupon}*',
    waMsgName: '\nName: {name}',
    waMsgEmail: '\nEmail: {email}',
    waMsgClosing: '\nI would like to use it for my enrollment at a Russian university.\n(coupon attached)',

    calBadge: '📅 Free appointment',
    calTitle: 'Talk to an advisor',
    calSub: "Pick a slot — we'll review your file together.",
    laterClose: 'Later — close',
  },

  ar: {
    closeAria: 'إغلاق',

    giftBadge: 'عرض محدود',
    giftTitle: 'هدية بانتظارك',
    giftOff: '-25%',
    giftSub: 'على جميع برامجنا للدراسة في روسيا.',
    giftFloat: '🎁 افتح قسيمتك خلال 60 ثانية',
    giftCta: 'ابدأ (60 ثانية)',
    giftTrust: ['✓ مجاني 100%', '✓ بدون التزام'],

    demoBadge: '▶ عرض توضيحي · 60 ثانية',
    demoTitle: 'اكتشف RusStudy عمليًا',
    demoCta: 'احصل على قسيمتي -25%',
    demoHint: 'شاهد الفيديو حتى النهاية لفتح قسيمتك.',
    demoHintDone: '✓ تم فتح القسيمة — تابع',

    emailBadge: '🎟️ الخطوة الأخيرة',
    emailTitle: 'إلى أين نرسل قسيمتك -25%؟',
    emailSub: 'يتم إرسال قسيمتك ودليل «الدراسة في روسيا» فورًا.',
    namePlaceholder: 'اسمك الكامل',
    emailPlaceholder: 'عنوان بريدك الإلكتروني',
    errName: 'يرجى إدخال اسمك الكامل.',
    errEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح.',
    trustSpamTitle: 'بدون رسائل مزعجة',
    trustSpamText: 'إلغاء الاشتراك بنقرة واحدة',
    trustCouponTitle: 'قسيمة صالحة على جميع البرامج',
    trustCouponText: 'قابلة للاستخدام فورًا',
    emailCta: 'احصل على قسيمتي',

    couponTitle: 'تم فتح القسيمة ✨',
    couponSentDefault: 'تحقق من بريدك الإلكتروني: قسيمتك ودليلك بانتظارك.',
    couponSentWithEmail: 'أُرسلت إلى {email} — قسيمتك ودليلك بانتظارك.',
    ticketLabel: 'قسيمة حصرية',
    qrNote: 'اعرض رمز QR هذا على مستشارك عند التسجيل لتطبيق الخصم.',
    qrClientFallback: 'عميل',
    downloadCouponCta: 'تنزيل القسيمة',
    downloadPdfCta: 'تنزيل الدليل المجاني PDF',
    waCta: 'إرسال القسيمة عبر واتساب',
    waHint: 'تم حفظ القسيمة في صورك — أرفقها في واتساب 📎',
    bookCta: 'احجز مقابلتي مع المستشار',

    couponImgLabel: 'قسيمة حصرية',
    couponImgFooter: 'اعرض هذا على مستشارك عند التسجيل — russieetudes.com',

    waMsgGreeting: 'مرحبًا RusStudy 👋\nهذه قسيمتي *-25%*: *{coupon}*',
    waMsgName: '\nالاسم: {name}',
    waMsgEmail: '\nالبريد الإلكتروني: {email}',
    waMsgClosing: '\nأرغب في استخدامها للتسجيل في جامعة روسية.\n(القسيمة مرفقة)',

    calBadge: '📅 موعد مجاني',
    calTitle: 'تحدث مع مستشار',
    calSub: 'اختر موعدًا — سنراجع ملفك معًا.',
    laterClose: 'لاحقًا — إغلاق',
  },

  ru: {
    closeAria: 'Закрыть',

    giftBadge: 'Ограниченное предложение',
    giftTitle: 'Вас ждёт подарок',
    giftOff: '-25%',
    giftSub: 'на все наши программы для учёбы в России.',
    giftFloat: '🎁 Откройте купон за 60 секунд',
    giftCta: 'Начать (60 сек)',
    giftTrust: ['✓ 100% бесплатно', '✓ Без обязательств'],

    demoBadge: '▶ Демо · 60 сек',
    demoTitle: 'Посмотрите RusStudy в действии',
    demoCta: 'Получить купон -25%',
    demoHint: 'Досмотрите видео до конца, чтобы открыть купон.',
    demoHintDone: '✓ Купон открыт — продолжайте',

    emailBadge: '🎟️ Последний шаг',
    emailTitle: 'Куда отправить ваш купон -25%?',
    emailSub: 'Купон и гид «Учёба в России» будут отправлены мгновенно.',
    namePlaceholder: 'Ваше полное имя',
    emailPlaceholder: 'Ваш адрес email',
    errName: 'Укажите, пожалуйста, ваше полное имя.',
    errEmail: 'Укажите, пожалуйста, действительный адрес email.',
    trustSpamTitle: 'Без спама',
    trustSpamText: 'отписка в один клик',
    trustCouponTitle: 'Купон действует на все программы',
    trustCouponText: 'можно использовать сразу',
    emailCta: 'Получить купон',

    couponTitle: 'Купон открыт ✨',
    couponSentDefault: 'Проверьте почту: купон и гид уже ждут вас.',
    couponSentWithEmail: 'Отправлено на {email} — купон и гид уже ждут вас.',
    ticketLabel: 'Эксклюзивный купон',
    qrNote: 'Покажите этот QR-код консультанту при записи, чтобы получить скидку.',
    qrClientFallback: 'клиент',
    downloadCouponCta: 'Скачать купон',
    downloadPdfCta: 'Скачать бесплатный PDF-гид',
    waCta: 'Отправить купон в WhatsApp',
    waHint: 'Купон сохранён в ваших фото — прикрепите его в WhatsApp 📎',
    bookCta: 'Записаться на консультацию',

    couponImgLabel: 'ЭКСКЛЮЗИВНЫЙ КУПОН',
    couponImgFooter: 'Покажите это консультанту при записи — russieetudes.com',

    waMsgGreeting: 'Здравствуйте, RusStudy 👋\nВот мой купон *-25%*: *{coupon}*',
    waMsgName: '\nИмя: {name}',
    waMsgEmail: '\nEmail: {email}',
    waMsgClosing: '\nХочу использовать его для поступления в российский университет.\n(купон во вложении)',

    calBadge: '📅 Бесплатная встреча',
    calTitle: 'Поговорите с консультантом',
    calSub: 'Выберите время — вместе рассмотрим ваше дело.',
    laterClose: 'Позже — закрыть',
  },
};

export function buildGuidePopupCopy(lang: Lang): GuidePopupCopy {
  return COPY[lang];
}
