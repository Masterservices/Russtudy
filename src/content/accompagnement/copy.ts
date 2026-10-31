import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';

export interface AccompagnementStep {
  title: string;
  text: string;
}

export interface AccompagnementCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  stepsTitle: string;
  steps: AccompagnementStep[];
  includedTitle: string;
  includedText: string;
  faq: FaqEntry[];
}

const COPY: Record<Lang, AccompagnementCopy> = {
  fr: {
    title: 'Accueil aéroport & tuteur dédié en Russie | RusStudy',
    description:
      "Accueil physique à l'aéroport en Russie, transfert au dortoir, tuteur bilingue dédié et assistance administrative 24h/24 : l'accompagnement RusStudy sur place, inclus de bout en bout.",
    h1: "Tuteur dédié & accueil à l'aéroport",
    intro:
      "Dès votre atterrissage en Russie, vous n'êtes jamais seul : un tuteur bilingue RusStudy vous attend à l'aéroport et vous accompagne pendant toutes vos premières semaines d'installation.",
    stepsTitle: 'Votre arrivée, étape par étape',
    steps: [
      {
        title: "1. Accueil physique à l'aéroport",
        text: "Votre tuteur bilingue vous attend à votre descente d'avion, vous aide avec vos bagages et le passage de la frontière, puis vous conduit directement à votre résidence universitaire.",
      },
      {
        title: '2. Installation au dortoir',
        text: "Votre chambre est pré-réservée avant votre arrivée. Le tuteur gère l'état des lieux et la remise des clés, et vous installe dans une résidence sécurisée, surveillée 24h/24.",
      },
      {
        title: '3. Démarches administratives',
        text: "Enregistrement migratoire, ouverture d'un compte bancaire russe, carte SIM locale, inscription définitive à l'université et visite médicale : votre tuteur valide chaque démarche obligatoire avec vous.",
      },
      {
        title: "4. Suivi pendant toute l'année",
        text: "Votre tuteur reste joignable 24h/24 et 7j/7 : prolongation du visa de séjour, questions administratives, urgences ou simple conseil du quotidien — l'assistance RusStudy continue toute l'année.",
      },
    ],
    includedTitle: 'Une assistance incluse, sans frais cachés',
    includedText:
      "L'accueil à l'aéroport, le transfert, l'installation au dortoir et l'assistance administrative sur place font partie intégrante de l'accompagnement RusStudy — c'est toute la différence avec un départ sans encadrement.",
    faq: [
      {
        question: "Qui m'accueille à mon arrivée en Russie ?",
        answer:
          "Un tuteur bilingue RusStudy vous accueille physiquement à l'aéroport, quel que soit votre horaire d'atterrissage, et vous conduit directement à votre résidence universitaire pré-réservée.",
      },
      {
        question: "L'accueil à l'aéroport est-il payant ?",
        answer:
          "Non : l'accueil, le transfert vers le dortoir et l'aide à l'installation font partie intégrante de l'accompagnement RusStudy, sans frais supplémentaires.",
      },
      {
        question: "Le tuteur m'aide-t-il après l'installation ?",
        answer:
          "Oui : il reste votre contact privilégié toute l'année — prolongation de visa, banque, université, santé — avec une assistance disponible 24h/24 et 7j/7.",
      },
    ],
  },
  en: {
    title: 'Airport pickup & dedicated tutor in Russia | RusStudy',
    description:
      'In-person airport pickup in Russia, transfer to the dorm, dedicated bilingual tutor and 24/7 administrative assistance: RusStudy on-site support, included end to end.',
    h1: 'Dedicated tutor & airport pickup',
    intro:
      'From the moment you land in Russia, you are never alone: a bilingual RusStudy tutor waits for you at the airport and supports you through your first weeks of settling in.',
    stepsTitle: 'Your arrival, step by step',
    steps: [
      {
        title: '1. In-person airport pickup',
        text: 'Your bilingual tutor waits for you as you step off the plane, helps with your luggage and border crossing, then drives you straight to your university residence.',
      },
      {
        title: '2. Moving into the dorm',
        text: 'Your room is pre-booked before you arrive. The tutor handles the check-in and key handover, and settles you into a secure residence monitored 24/7.',
      },
      {
        title: '3. Administrative formalities',
        text: 'Migration registration, opening a Russian bank account, local SIM card, final university enrolment and medical check-up: your tutor completes every mandatory step with you.',
      },
      {
        title: '4. Support all year round',
        text: 'Your tutor remains reachable 24/7: residence visa extension, administrative questions, emergencies or simple everyday advice — RusStudy assistance continues all year.',
      },
    ],
    includedTitle: 'Assistance included, no hidden fees',
    includedText:
      'Airport pickup, transfer, dorm move-in and on-site administrative assistance are an integral part of RusStudy support — that is the whole difference from leaving without guidance.',
    faq: [
      {
        question: 'Who welcomes me when I arrive in Russia?',
        answer:
          'A bilingual RusStudy tutor welcomes you in person at the airport, whatever your landing time, and takes you straight to your pre-booked university residence.',
      },
      {
        question: 'Is the airport pickup paid?',
        answer:
          'No: the pickup, the transfer to the dorm and the help with settling in are an integral part of RusStudy support, at no extra cost.',
      },
      {
        question: 'Does the tutor help me after I settle in?',
        answer:
          'Yes: they remain your dedicated contact all year — visa extension, bank, university, health — with assistance available 24/7.',
      },
    ],
  },
  ar: {
    title: 'الاستقبال في المطار ومرشد مخصص في روسيا | RusStudy',
    description:
      'استقبال شخصي في المطار في روسيا، نقل إلى السكن الجامعي، مرشد ثنائي اللغة مخصص ومساعدة إدارية على مدار الساعة: مرافقة RusStudy الميدانية، مشمولة من البداية إلى النهاية.',
    h1: 'مرشد مخصص واستقبال في المطار',
    intro:
      'منذ لحظة هبوطك في روسيا لن تكون وحدك أبدًا: مرشد ثنائي اللغة من RusStudy ينتظرك في المطار ويرافقك خلال أسابيعك الأولى للاستقرار.',
    stepsTitle: 'وصولك خطوة بخطوة',
    steps: [
      {
        title: '1. استقبال شخصي في المطار',
        text: 'ينتظرك مرشدك ثنائي اللغة عند نزولك من الطائرة، ويساعدك في الأمتعة وعبور الحدود، ثم يوصلك مباشرة إلى إقامتك الجامعية.',
      },
      {
        title: '2. الاستقرار في السكن الجامعي',
        text: 'غرفتك محجوزة مسبقًا قبل وصولك. يتولى المرشد إجراءات الاستلام وتسليم المفاتيح، ويستقرّ بك في إقامة آمنة تحت مراقبة على مدار الساعة.',
      },
      {
        title: '3. الإجراءات الإدارية',
        text: 'تسجيل الهجرة، فتح حساب بنكي روسي، شريحة هاتف محلية، التسجيل النهائي في الجامعة والفحص الطبي: ينجز مرشدك كل خطوة إلزامية معك.',
      },
      {
        title: '4. متابعة طوال السنة',
        text: 'يبقى مرشدك متاحًا على مدار الساعة طوال الأسبوع: تمديد تأشيرة الإقامة، الأسئلة الإدارية، الطوارئ أو نصائح الحياة اليومية — مساعدة RusStudy مستمرة طوال السنة.',
      },
    ],
    includedTitle: 'مساعدة مشمولة دون رسوم خفية',
    includedText:
      'الاستقبال في المطار والنقل والاستقرار في السكن والمساعدة الإدارية الميدانية جزء لا يتجزأ من مرافقة RusStudy — وهذا هو الفرق الكامل عن السفر دون تأطير.',
    faq: [
      {
        question: 'من يستقبلني عند وصولي إلى روسيا؟',
        answer:
          'مرشد ثنائي اللغة من RusStudy يستقبلك شخصيًا في المطار مهما كان توقيت هبوطك، ويوصلك مباشرة إلى إقامتك الجامعية المحجوزة مسبقًا.',
      },
      {
        question: 'هل الاستقبال في المطار مدفوع؟',
        answer: 'لا: الاستقبال والنقل إلى السكن والمساعدة في الاستقرار جزء لا يتجزأ من مرافقة RusStudy، دون أي تكاليف إضافية.',
      },
      {
        question: 'هل يساعدني المرشد بعد الاستقرار؟',
        answer: 'نعم: يبقى جهة اتصالك المميزة طوال السنة — تمديد التأشيرة، البنك، الجامعة، الصحة — بمساعدة متاحة على مدار الساعة.',
      },
    ],
  },
  ru: {
    title: 'Встреча в аэропорту и персональный куратор в России | RusStudy',
    description:
      'Личная встреча в аэропорту России, трансфер в общежитие, персональный двуязычный куратор и административная поддержка 24/7: сопровождение RusStudy на месте, включено полностью.',
    h1: 'Персональный куратор и встреча в аэропорту',
    intro:
      'С момента посадки в России вы никогда не остаётесь одни: двуязычный куратор RusStudy встречает вас в аэропорту и сопровождает в течение первых недель обустройства.',
    stepsTitle: 'Ваш приезд, шаг за шагом',
    steps: [
      {
        title: '1. Личная встреча в аэропорту',
        text: 'Ваш двуязычный куратор ждёт вас у выхода из самолёта, помогает с багажом и прохождением границы, затем отвозит прямо в студенческое общежитие.',
      },
      {
        title: '2. Заселение в общежитие',
        text: 'Ваша комната забронирована заранее. Куратор оформляет заселение и передачу ключей и размещает вас в охраняемой резиденции с наблюдением 24/7.',
      },
      {
        title: '3. Административные формальности',
        text: 'Миграционный учёт, открытие российского банковского счёта, местная SIM-карта, окончательное зачисление в вуз и медосмотр: куратор проходит каждый обязательный шаг вместе с вами.',
      },
      {
        title: '4. Поддержка весь год',
        text: 'Куратор остаётся на связи 24/7: продление визы, административные вопросы, экстренные ситуации или простой бытовой совет — поддержка RusStudy продолжается весь год.',
      },
    ],
    includedTitle: 'Поддержка включена, без скрытых платежей',
    includedText:
      'Встреча в аэропорту, трансфер, заселение в общежитие и административная поддержка на месте — неотъемлемая часть сопровождения RusStudy. В этом вся разница с отъездом без кураторства.',
    faq: [
      {
        question: 'Кто встречает меня по прилёте в Россию?',
        answer:
          'Двуязычный куратор RusStudy лично встречает вас в аэропорту независимо от времени посадки и отвозит прямо в заранее забронированное общежитие.',
      },
      {
        question: 'Встреча в аэропорту платная?',
        answer: 'Нет: встреча, трансфер в общежитие и помощь с обустройством — неотъемлемая часть сопровождения RusStudy, без доплат.',
      },
      {
        question: 'Помогает ли куратор после заселения?',
        answer: 'Да: он остаётся вашим личным контактом весь год — продление визы, банк, вуз, здоровье — поддержка доступна 24/7.',
      },
    ],
  },
};

export function buildAccompagnementCopy(lang: Lang): AccompagnementCopy {
  return COPY[lang];
}
