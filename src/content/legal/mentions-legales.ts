import type { Lang } from '../../i18n';
import type { LegalCopy } from './copy';
import { LEGAL_IDENTITY, identityField } from './identity';

/**
 * Mentions légales.
 *
 * Les champs d'identité proviennent de `identity.ts` : ceux qui ne sont pas
 * encore renseignés s'affichent comme « à compléter » dans les quatre
 * langues, plutôt que de recevoir une valeur inventée.
 */
const I = LEGAL_IDENTITY;

export function buildLegalNotice(lang: Lang): LegalCopy {
  const f = (key: Parameters<typeof identityField>[0]) => identityField(key, lang);

  if (lang === 'en') {
    return {
      title: 'Legal notice | RusStudy — RussieEtudes.com',
      description:
        'Publisher, publication director, contact details, hosting provider, intellectual property and photo credits for the RussieEtudes.com website operated under the RusStudy brand.',
      h1: 'Legal notice',
      updated: 'Last updated: 7 October 2026',
      intro:
        'This page identifies the publisher and the host of the RussieEtudes.com website, and sets out the rules governing the content published on it.',
      sections: [
        {
          heading: 'Website publisher',
          paragraphs: [
            `Company name: ${f('legalName')}.`,
            `Legal form: ${f('legalForm')}.`,
            `Share capital: ${f('capital')}.`,
            `Registered office: ${f('headOffice')}.`,
            `Tax identification number / business register number: ${f('taxId')}.`,
            `RusStudy is the trading name under which ${I.legalName} operates its student support activity. The public website is ${I.site}.`,
          ],
        },
        {
          heading: 'Publication director',
          paragraphs: [
            `The publication director is ${f('publicationDirector')}.`,
            'The publication director is responsible for the editorial content published on the site.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `Email: ${I.email}.`,
            `Telephone: ${f('phone')}.`,
            `WhatsApp (professional line): ${I.whatsapp}.`,
            'Written contact by email is the channel we recommend for any request concerning the site or your personal data, as it leaves a record on both sides.',
          ],
        },
        {
          heading: 'Hosting provider',
          paragraphs: [
            `The site is hosted by ${I.host}, ${I.hostAddress}.`,
            'The hosting provider operates the technical infrastructure only and has no editorial role in the content published on the site.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            `Unless stated otherwise, the texts, page structure, editorial guides and comparison tables published on ${I.site} are the work of ${I.legalName} and are protected as such.`,
            'Reproduction of a page or a substantial extract, for commercial purposes or in a way that could suggest an endorsement, requires prior written authorisation. A short quotation accompanied by a visible link to the source page is permitted.',
            'The names and logos of the universities and institutions mentioned belong to their respective owners. They are used for information purposes only and do not imply any partnership, affiliation or endorsement unless such a relationship is explicitly stated on the page concerned.',
          ],
        },
        {
          heading: 'Photo credits',
          paragraphs: [
            'The photographs illustrating the site come from Wikimedia Commons and are published under free licences (Creative Commons or public domain). Each image carries its author and licence in the registry of the site’s source code.',
            'If you are the author of a photograph published here and consider that the attribution is incorrect or incomplete, write to us: we will correct or remove the image without delay.',
          ],
        },
        {
          heading: 'Accuracy of the information published',
          paragraphs: [
            'Admission conditions, tuition fees, consular requirements and academic calendars are set by the universities and the competent authorities, and they change. We state the source and the date wherever possible, and we deliberately refrain from publishing a figure we cannot verify.',
            'The information on this site is provided for guidance. It does not replace the written answer of a university’s admissions office or of the competent diplomatic mission, which alone are binding.',
          ],
        },
        {
          heading: 'External links',
          paragraphs: [
            'The site may link to third-party pages, in particular official university or institutional pages. We have no control over their content and accept no responsibility for it.',
          ],
        },
        {
          heading: 'Reporting content',
          paragraphs: [
            `Any request for correction, right of reply or removal may be addressed to ${I.email}. Please state the exact page concerned and the contested passage.`,
          ],
        },
      ],
    };
  }

  if (lang === 'ar') {
    return {
      title: 'المعلومات القانونية | RusStudy — RussieEtudes.com',
      description:
        'الناشر، ومدير النشر، ووسائل الاتصال، ومزوّد الاستضافة، والملكية الفكرية، وحقوق الصور لموقع RussieEtudes.com المُشغَّل تحت علامة RusStudy.',
      h1: 'المعلومات القانونية',
      updated: 'آخر تحديث: 7 أكتوبر 2026',
      intro:
        'تحدّد هذه الصفحة هوية ناشر موقع RussieEtudes.com ومزوّد استضافته، وتضبط القواعد المنطبقة على المحتوى المنشور فيه.',
      sections: [
        {
          heading: 'ناشر الموقع',
          paragraphs: [
            `التسمية الاجتماعية: ${f('legalName')}.`,
            `الشكل القانوني: ${f('legalForm')}.`,
            `رأس المال: ${f('capital')}.`,
            `المقرّ الاجتماعي: ${f('headOffice')}.`,
            `المعرّف الجبائي أو رقم السجلّ الوطني للمؤسسات: ${f('taxId')}.`,
            `RusStudy هي العلامة التي تمارس تحتها ${I.legalName} نشاط مرافقة الطلبة. والموقع العمومي هو ${I.site}.`,
          ],
        },
        {
          heading: 'مدير النشر',
          paragraphs: [
            `مدير النشر هو ${f('publicationDirector')}.`,
            'يتحمّل مدير النشر مسؤولية المحتوى التحريري المنشور على الموقع.',
          ],
        },
        {
          heading: 'الاتصال',
          paragraphs: [
            `البريد الإلكتروني: ${I.email}.`,
            `الهاتف: ${f('phone')}.`,
            `واتساب (الخطّ المهني): ${I.whatsapp}.`,
            'ننصح بالاتصال الكتابي عبر البريد الإلكتروني لكل طلب يتعلّق بالموقع أو ببياناتك الشخصية، لأنه يترك أثرًا لدى الطرفين.',
          ],
        },
        {
          heading: 'الاستضافة',
          paragraphs: [
            `الموقع مستضاف لدى ${I.host}، ${I.hostAddress}.`,
            'يتولّى مزوّد الاستضافة البنية التقنية فقط، وليس له أي دور تحريري في المحتوى المنشور.',
          ],
        },
        {
          heading: 'الملكية الفكرية',
          paragraphs: [
            `ما لم يُذكر خلاف ذلك، فإن النصوص وبنية الصفحات والأدلّة التحريرية وجداول المقارنة المنشورة على ${I.site} من إنتاج ${I.legalName} وهي محمية بهذه الصفة.`,
            'يستلزم إعادة نشر صفحة أو مقتطف جوهري منها، لأغراض تجارية أو بشكل قد يوحي بتأييد، إذنًا كتابيًّا مسبقًا. أما الاقتباس القصير المصحوب برابط ظاهر نحو الصفحة المصدر فمسموح به.',
            'تعود أسماء وشعارات الجامعات والمؤسسات المذكورة إلى أصحابها. وتُستعمل لغرض الإعلام فقط ولا تعني أي شراكة أو انتساب أو تأييد، ما لم تُذكر هذه العلاقة صراحةً في الصفحة المعنيّة.',
          ],
        },
        {
          heading: 'حقوق الصور',
          paragraphs: [
            'الصور التي تُوضّح الموقع مأخوذة من ويكيميديا كومنز ومنشورة برخص حرّة (المشاع الإبداعي أو الملك العام). وكل صورة تحمل مؤلّفها ورخصتها في سجلّ الصور داخل الشيفرة المصدرية للموقع.',
            'إن كنت مؤلّف صورة منشورة هنا وترى أن الإسناد غير صحيح أو غير كامل، فاكتب إلينا: سنصحّح أو نحذف الصورة دون تأخير.',
          ],
        },
        {
          heading: 'دقّة المعلومات المنشورة',
          paragraphs: [
            'شروط القبول ومعاليم الدراسة والمتطلّبات القنصلية والرُوزنامات الجامعية تحدّدها الجامعات والسلطات المختصّة، وهي تتغيّر. ونذكر المصدر والتاريخ كلّما أمكن، ونمتنع عمدًا عن نشر أي رقم لا يمكننا التحقّق منه.',
            'المعلومات الواردة في هذا الموقع إرشادية. وهي لا تعوّض الجواب الكتابي لمصلحة القبول في الجامعة أو للبعثة الدبلوماسية المختصّة، فهما وحدهما الملزمان.',
          ],
        },
        {
          heading: 'الروابط الخارجية',
          paragraphs: [
            'قد يحيل الموقع إلى صفحات تابعة لأطراف أخرى، خاصة صفحات جامعية أو مؤسساتية رسمية. ولا سيطرة لنا على محتواها ولا نتحمّل بشأنه أي مسؤولية.',
          ],
        },
        {
          heading: 'الإبلاغ عن محتوى',
          paragraphs: [
            `يمكن توجيه كل طلب تصحيح أو حقّ ردّ أو حذف إلى ${I.email}. يُرجى تحديد الصفحة المعنيّة بدقّة والمقطع محلّ الاعتراض.`,
          ],
        },
      ],
    };
  }

  if (lang === 'ru') {
    return {
      title: 'Правовая информация | RusStudy — RussieEtudes.com',
      description:
        'Издатель, ответственный за публикацию, контакты, хостинг-провайдер, интеллектуальная собственность и авторство фотографий сайта RussieEtudes.com, работающего под маркой RusStudy.',
      h1: 'Правовая информация',
      updated: 'Последнее обновление: 7 октября 2026 года',
      intro:
        'На этой странице указаны издатель и хостинг-провайдер сайта RussieEtudes.com, а также правила, действующие в отношении опубликованных на нём материалов.',
      sections: [
        {
          heading: 'Издатель сайта',
          paragraphs: [
            `Наименование: ${f('legalName')}.`,
            `Организационно-правовая форма: ${f('legalForm')}.`,
            `Уставный капитал: ${f('capital')}.`,
            `Юридический адрес: ${f('headOffice')}.`,
            `Налоговый идентификатор или номер в национальном реестре предприятий: ${f('taxId')}.`,
            `RusStudy — марка, под которой ${I.legalName} ведёт деятельность по сопровождению студентов. Публичный сайт — ${I.site}.`,
          ],
        },
        {
          heading: 'Ответственный за публикацию',
          paragraphs: [
            `Ответственный за публикацию — ${f('publicationDirector')}.`,
            'Ответственный за публикацию отвечает за редакционное содержание сайта.',
          ],
        },
        {
          heading: 'Контакты',
          paragraphs: [
            `Электронная почта: ${I.email}.`,
            `Телефон: ${f('phone')}.`,
            `WhatsApp (рабочая линия): ${I.whatsapp}.`,
            'Для любого обращения по поводу сайта или ваших персональных данных мы рекомендуем письменный канал — электронную почту: он оставляет след у обеих сторон.',
          ],
        },
        {
          heading: 'Хостинг',
          paragraphs: [
            `Сайт размещён у ${I.host}, ${I.hostAddress}.`,
            'Хостинг-провайдер обеспечивает только техническую инфраструктуру и не участвует в редакционной работе над содержанием сайта.',
          ],
        },
        {
          heading: 'Интеллектуальная собственность',
          paragraphs: [
            `Если не указано иное, тексты, структура страниц, редакционные руководства и сравнительные таблицы, опубликованные на ${I.site}, созданы ${I.legalName} и охраняются как таковые.`,
            'Воспроизведение страницы или существенной её части в коммерческих целях либо в форме, способной создать впечатление одобрения, требует предварительного письменного разрешения. Короткая цитата с видимой ссылкой на страницу-источник допускается.',
            'Названия и логотипы упомянутых университетов и учреждений принадлежат их правообладателям. Они используются исключительно в информационных целях и не означают партнёрства, аффилированности или одобрения, если такая связь прямо не указана на соответствующей странице.',
          ],
        },
        {
          heading: 'Авторство фотографий',
          paragraphs: [
            'Фотографии, иллюстрирующие сайт, взяты с Wikimedia Commons и опубликованы под свободными лицензиями (Creative Commons или общественное достояние). Автор и лицензия каждого изображения указаны в реестре изображений в исходном коде сайта.',
            'Если вы автор опубликованной здесь фотографии и считаете, что указание авторства неверно или неполно, напишите нам: мы исправим или удалим изображение без промедления.',
          ],
        },
        {
          heading: 'Точность опубликованных сведений',
          paragraphs: [
            'Условия приёма, стоимость обучения, консульские требования и учебные календари устанавливают вузы и компетентные органы, и они меняются. Мы указываем источник и дату везде, где это возможно, и сознательно не публикуем цифру, которую не можем проверить.',
            'Сведения на этом сайте носят справочный характер. Они не заменяют письменный ответ приёмной комиссии вуза или компетентного дипломатического представительства — обязывают только они.',
          ],
        },
        {
          heading: 'Внешние ссылки',
          paragraphs: [
            'Сайт может ссылаться на сторонние страницы, в частности на официальные страницы вузов и учреждений. Мы не контролируем их содержание и не несём за него ответственности.',
          ],
        },
        {
          heading: 'Сообщение о материале',
          paragraphs: [
            `Любое требование об исправлении, праве на ответ или удалении можно направить на ${I.email}. Пожалуйста, укажите точную страницу и оспариваемый фрагмент.`,
          ],
        },
      ],
    };
  }

  return {
    title: 'Mentions légales | RusStudy — RussieEtudes.com',
    description:
      "Éditeur, directeur de la publication, coordonnées, hébergeur, propriété intellectuelle et crédits photographiques du site RussieEtudes.com, exploité sous la marque RusStudy.",
    h1: 'Mentions légales',
    updated: 'Dernière mise à jour : 7 octobre 2026',
    intro:
      "Cette page identifie l'éditeur et l'hébergeur du site RussieEtudes.com, et fixe les règles applicables aux contenus qui y sont publiés.",
    sections: [
      {
        heading: 'Éditeur du site',
        paragraphs: [
          `Dénomination sociale : ${f('legalName')}.`,
          `Forme juridique : ${f('legalForm')}.`,
          `Capital social : ${f('capital')}.`,
          `Siège social : ${f('headOffice')}.`,
          `Matricule fiscal ou numéro au registre national des entreprises : ${f('taxId')}.`,
          `RusStudy est la marque sous laquelle ${I.legalName} exerce son activité d'accompagnement d'étudiants. Le site public est ${I.site}.`,
        ],
      },
      {
        heading: 'Directeur de la publication',
        paragraphs: [
          `Le directeur de la publication est ${f('publicationDirector')}.`,
          'Le directeur de la publication est responsable des contenus éditoriaux publiés sur le site.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          `Adresse e-mail : ${I.email}.`,
          `Téléphone : ${f('phone')}.`,
          `WhatsApp (ligne professionnelle) : ${I.whatsapp}.`,
          "Pour toute demande concernant le site ou vos données personnelles, nous recommandons le contact écrit par e-mail : il laisse une trace des deux côtés.",
        ],
      },
      {
        heading: 'Hébergement',
        paragraphs: [
          `Le site est hébergé par ${I.host}, ${I.hostAddress}.`,
          "L'hébergeur assure la seule infrastructure technique et n'a aucun rôle éditorial dans les contenus publiés sur le site.",
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          `Sauf mention contraire, les textes, la structure des pages, les guides éditoriaux et les tableaux comparatifs publiés sur ${I.site} sont l'œuvre de ${I.legalName} et sont protégés à ce titre.`,
          "La reproduction d'une page ou d'un extrait substantiel, à des fins commerciales ou sous une forme susceptible de laisser croire à une approbation de notre part, suppose une autorisation écrite préalable. La citation courte accompagnée d'un lien visible vers la page source est en revanche autorisée.",
          "Les noms et logos des universités et établissements cités appartiennent à leurs titulaires respectifs. Ils sont utilisés à des fins d'information et n'impliquent ni partenariat, ni affiliation, ni approbation, sauf lorsque cette relation est explicitement indiquée sur la page concernée.",
        ],
      },
      {
        heading: 'Crédits photographiques',
        paragraphs: [
          "Les photographies qui illustrent le site proviennent de Wikimedia Commons et sont publiées sous licences libres (Creative Commons ou domaine public). Chaque image porte son auteur et sa licence dans le registre d'images du code source du site.",
          "Si vous êtes l'auteur d'une photographie publiée ici et que vous estimez l'attribution inexacte ou incomplète, écrivez-nous : nous corrigeons ou retirons l'image sans délai.",
        ],
      },
      {
        heading: 'Exactitude des informations publiées',
        paragraphs: [
          "Les conditions d'admission, les frais de scolarité, les exigences consulaires et les calendriers universitaires sont fixés par les universités et les autorités compétentes, et ils évoluent. Nous indiquons la source et la date chaque fois que c'est possible, et nous nous abstenons délibérément de publier un chiffre que nous ne pouvons pas vérifier.",
          "Les informations de ce site sont données à titre indicatif. Elles ne remplacent pas la réponse écrite du service des admissions d'une université ou de la représentation diplomatique compétente, qui seules vous engagent.",
        ],
      },
      {
        heading: 'Liens externes',
        paragraphs: [
          "Le site peut renvoyer vers des pages de tiers, notamment des pages universitaires ou institutionnelles officielles. Nous n'avons aucun contrôle sur leur contenu et n'en assumons aucune responsabilité.",
        ],
      },
      {
        heading: 'Signalement de contenu',
        paragraphs: [
          `Toute demande de rectification, de droit de réponse ou de retrait peut être adressée à ${I.email}. Merci d'indiquer précisément la page concernée et le passage contesté.`,
        ],
      },
    ],
  };
}
