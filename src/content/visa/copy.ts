import type { Lang } from '../../i18n';

export interface VisaStep {
  title: string;
  text: string;
}

export interface VisaCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  steps: VisaStep[];
  guaranteeTitle: string;
  guaranteeText: string;
  padfacTitle: string;
  padfacText: string;
}

const COPY: Record<Lang, VisaCopy> = {
  fr: {
    title: "Visa d'études pour la Russie | RusStudy",
    description:
      "Toutes les étapes du visa d'études pour la Russie : dossier, invitation officielle du Ministère de l'Intérieur russe, visa consulaire, assurance. Garantie contractuelle RusStudy.",
    h1: "Le visa d'études pour la Russie, étape par étape",
    intro:
      "RusStudy accompagne chaque étudiant tunisien de bout en bout dans l'obtention de son visa d'études en Russie, avec un taux de réussite contractuel de 100 %.",
    steps: [
      {
        title: '1. Dossier et admission',
        text: "Constitution et soumission du dossier auprès de l'université choisie. L'admission administrative prend généralement 15 à 30 jours après la soumission du dossier complet.",
      },
      {
        title: '2. Invitation officielle',
        text: "Une fois admis, l'université déclenche la demande de lettre d'invitation auprès du Ministère de l'Intérieur russe. Ce document officiel est indispensable pour la demande de visa ; son obtention prend 30 à 45 jours supplémentaires.",
      },
      {
        title: '3. Demande de visa consulaire',
        text: 'Avec la lettre d’invitation en main, RusStudy vous accompagne dans le dépôt de votre demande de visa d’études auprès du consulat russe.',
      },
      {
        title: '4. Assurance et départ',
        text: "Obtention de l'assurance médicale réglementaire et réservation du billet d'avion. Un tuteur bilingue RusStudy vous accueille physiquement dès votre atterrissage en Russie.",
      },
    ],
    guaranteeTitle: 'Garantie contractuelle',
    guaranteeText:
      "RusStudy garantit contractuellement l'obtention du visa d'études pour tout dossier accompagné de bout en bout, avec un taux de réussite de 100 %. Les frais uniques de la première année (visa, traduction des documents, billet d'avion) représentent environ 900 €.",
    padfacTitle: 'Session complémentaire de février (PadFac)',
    padfacText:
      "Si vous avez manqué les sessions d'admission principales, une session complémentaire (PadFac) ouvre chaque année en février : c'est une réelle opportunité de rejoindre malgré tout une université russe pour la même année académique.",
  },
  en: {
    title: 'Student visa for Russia | RusStudy',
    description:
      "All the steps of the Russian student visa: application, official invitation from the Russian Ministry of the Interior, consular visa, insurance. RusStudy's contractual guarantee.",
    h1: 'The Russian student visa, step by step',
    intro:
      "RusStudy supports every Tunisian student end-to-end in obtaining their Russian student visa, with a contractual 100% success rate.",
    steps: [
      {
        title: '1. Application and admission',
        text: 'Preparing and submitting your application to the chosen university. Administrative admission usually takes 15 to 30 days after your complete file is submitted.',
      },
      {
        title: '2. Official invitation',
        text: "Once admitted, the university requests an invitation letter from the Russian Ministry of the Interior. This official document is required for the visa application; obtaining it takes an additional 30 to 45 days.",
      },
      {
        title: '3. Consular visa application',
        text: 'With the invitation letter in hand, RusStudy supports you in submitting your student visa application to the Russian consulate.',
      },
      {
        title: '4. Insurance and departure',
        text: 'Obtaining the mandatory medical insurance and booking your flight. A bilingual RusStudy tutor welcomes you in person as soon as you land in Russia.',
      },
    ],
    guaranteeTitle: 'Contractual guarantee',
    guaranteeText:
      "RusStudy contractually guarantees obtaining the student visa for every fully supported application, with a 100% success rate. One-time first-year costs (visa, document translation, flight) amount to about €900.",
    padfacTitle: 'February supplementary intake (PadFac)',
    padfacText:
      "If you missed the main admission sessions, a supplementary intake (PadFac) opens every year in February: a real opportunity to still join a Russian university for the same academic year.",
  },
  ar: {
    title: 'تأشيرة الدراسة في روسيا | RusStudy',
    description:
      'كل خطوات تأشيرة الدراسة في روسيا: الملف، خطاب الدعوة الرسمي من وزارة الداخلية الروسية، التأشيرة القنصلية، التأمين. ضمان تعاقدي من RusStudy.',
    h1: 'تأشيرة الدراسة في روسيا، خطوة بخطوة',
    intro: 'ترافق RusStudy كل طالب تونسي من الألف إلى الياء للحصول على تأشيرة الدراسة في روسيا، بنسبة نجاح تعاقدية 100%.',
    steps: [
      {
        title: '1. الملف والقبول',
        text: 'إعداد وتقديم الملف لدى الجامعة المختارة. يستغرق القبول الإداري عادة 15 إلى 30 يومًا بعد تقديم الملف كاملاً.',
      },
      {
        title: '2. الدعوة الرسمية',
        text: 'بمجرد القبول، تطلب الجامعة خطاب دعوة من وزارة الداخلية الروسية. هذه الوثيقة الرسمية ضرورية لطلب التأشيرة، ويستغرق الحصول عليها 30 إلى 45 يومًا إضافيًا.',
      },
      {
        title: '3. طلب التأشيرة القنصلية',
        text: 'بمجرد الحصول على خطاب الدعوة، ترافقكم RusStudy في تقديم طلب تأشيرة الدراسة لدى القنصلية الروسية.',
      },
      {
        title: '4. التأمين والسفر',
        text: 'الحصول على التأمين الصحي الإلزامي وحجز تذكرة الطيران. يستقبلكم مرافق ثنائي اللغة من RusStudy شخصيًا فور وصولكم إلى روسيا.',
      },
    ],
    guaranteeTitle: 'ضمان تعاقدي',
    guaranteeText:
      'تضمن RusStudy تعاقديًا الحصول على تأشيرة الدراسة لكل ملف مرافَق من الألف إلى الياء، بنسبة نجاح 100%. تبلغ المصاريف الفردية للسنة الأولى (التأشيرة، ترجمة الوثائق، تذكرة الطيران) حوالي 900 يورو.',
    padfacTitle: 'دورة استدراكية في فبراير (PadFac)',
    padfacText: 'إذا فاتتك دورات القبول الرئيسية، تُفتح كل سنة دورة استدراكية (PadFac) في فبراير: فرصة حقيقية للالتحاق رغم ذلك بجامعة روسية لنفس السنة الدراسية.',
  },
  ru: {
    title: 'Студенческая виза в Россию | RusStudy',
    description:
      'Все этапы получения студенческой визы в Россию: досье, официальное приглашение от МВД России, консульская виза, страховка. Договорная гарантия RusStudy.',
    h1: 'Студенческая виза в Россию: шаг за шагом',
    intro: 'RusStudy сопровождает каждого тунисского студента от А до Я при получении студенческой визы в Россию, с договорной гарантией успеха 100%.',
    steps: [
      {
        title: '1. Досье и поступление',
        text: 'Подготовка и подача досье в выбранный вуз. Административное поступление обычно занимает 15–30 дней после подачи полного досье.',
      },
      {
        title: '2. Официальное приглашение',
        text: 'После зачисления вуз запрашивает приглашение в МВД России. Этот официальный документ необходим для подачи на визу; его получение занимает ещё 30–45 дней.',
      },
      {
        title: '3. Подача на консульскую визу',
        text: 'С приглашением на руках RusStudy сопровождает вас при подаче заявления на студенческую визу в консульстве России.',
      },
      {
        title: '4. Страховка и отъезд',
        text: 'Оформление обязательной медицинской страховки и бронирование авиабилета. Двуязычный куратор RusStudy лично встречает вас сразу по прилёте в Россию.',
      },
    ],
    guaranteeTitle: 'Договорная гарантия',
    guaranteeText:
      'RusStudy по договору гарантирует получение студенческой визы при полном сопровождении досье, с успешностью 100%. Разовые расходы первого года (виза, перевод документов, авиабилет) составляют около 900 €.',
    padfacTitle: 'Дополнительный набор в феврале (PadFac)',
    padfacText: 'Если вы пропустили основные сессии поступления, каждый год в феврале открывается дополнительный набор (PadFac) — реальная возможность всё же поступить в российский вуз в том же учебном году.',
  },
};

export function buildVisaCopy(lang: Lang): VisaCopy {
  return COPY[lang];
}
