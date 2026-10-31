import type { Lang } from '../../i18n';
import type { LegalCopy } from './copy';
import { LEGAL_IDENTITY, identityField } from './identity';

/**
 * Conditions générales de vente — prestation d'accompagnement RusStudy.
 *
 * Document le plus exposé juridiquement du site : c'est ici que la ligne
 * éditoriale « aucune promesse d'admission ni de visa » devient une clause
 * opposable, et non plus une simple précaution rédactionnelle.
 *
 * Les tarifs, l'échéancier et le barème d'annulation ne figurent pas ici :
 * ils dépendent de la formule retenue et sont fixés dans le devis remis au
 * Client avant exécution. Les CGV renvoient vers ce devis plutôt que de
 * publier un montant qui serait faux pour une partie des dossiers.
 */
const I = LEGAL_IDENTITY;

export function buildTermsOfSale(lang: Lang): LegalCopy {
  const f = (key: Parameters<typeof identityField>[0]) => identityField(key, lang);

  if (lang === 'en') {
    return {
      title: 'Terms of sale | RusStudy — RussieEtudes.com',
      description:
        'Scope of the RusStudy support service, obligation of means, what is not included, prices and payment, client obligations, cancellation, liability and governing law.',
      h1: 'Terms of sale',
      updated: 'Last updated: 7 October 2026',
      intro:
        'These terms govern the paid support service provided under the RusStudy brand. Please read section 3 with particular care: it states the nature of our commitment, and what no agency can promise you.',
      sections: [
        {
          heading: '1. Purpose and scope',
          paragraphs: [
            `These terms of sale govern the support service provided by ${f('legalName')} (“the Provider”) to any natural person or their legal representative (“the Client”) who engages it.`,
            'They are accepted by the Client before any work begins, and they prevail over any contrary statement made verbally or through messaging.',
            'Where the Client is a minor, the contract is entered into by their legal representative, who is answerable for payment.',
          ],
        },
        {
          heading: '2. Services provided',
          paragraphs: [
            'The support service covers, according to the package agreed with the Client: assessment of the profile and guidance towards institutions matching it; help in assembling the application file; follow-up of the application with the institution; follow-up of the invitation letter; preparation of the visa application; and, on arrival, reception and assistance with first administrative steps.',
            'The exact scope of each engagement, the stages covered and any stage excluded are set out in the quotation or the engagement document signed by the Client. In the event of any inconsistency, that document prevails over the general description published on the site.',
          ],
        },
        {
          heading: '3. Nature of the commitment — obligation of means',
          paragraphs: [
            'The Provider is bound by an obligation of means, not an obligation of result.',
            'The admission decision belongs exclusively to the institution concerned. The issuing of a visa belongs exclusively to the competent consular authorities. The allocation of a place in university housing belongs exclusively to the institution. The recognition of a diploma belongs exclusively to the authorities of the country in which it is sought.',
            'Accordingly, the Provider gives no guarantee of admission, of a visa, of accommodation, of a diploma or of employment, and makes no such promise in any form.',
            'A refusal of admission, a refusal of a visa, the unavailability of a place in university housing or a refusal of recognition does not constitute a failure to perform these terms, and does not of itself give rise to a right to reimbursement of services already rendered.',
            'Any statement, from whatever source, promising a guaranteed admission or a guaranteed visa is contrary to these terms and does not bind the Provider.',
          ],
        },
        {
          heading: '4. What the service does not include',
          paragraphs: [
            'Unless expressly stated otherwise in the quotation, the following remain the Client’s responsibility and are not included in the price of the support service:',
            'University tuition fees; consular and visa fees; the cost of legalising, authenticating and translating documents; medical examinations and health insurance; air tickets and travel; university housing and its deposit; migration registration fees; and all living expenses in Russia.',
            'These items are paid by the Client directly to the bodies concerned. The Provider neither collects them nor sets their amount.',
          ],
        },
        {
          heading: '5. Prices and payment',
          paragraphs: [
            'The price of the service, the payment schedule and the accepted means of payment are stated in the quotation given to the Client before any work begins. They are not published on the site, because they depend on the package chosen and the scope agreed.',
            'No sum is due before the quotation has been issued and accepted by the Client.',
            'Prices are those in force on the date the quotation is accepted. Any sum paid is evidenced by a receipt or an invoice issued by the Provider.',
            'The Client is advised to accept no payment outside the channels stated in the quotation, and to require a written receipt for every payment made.',
          ],
        },
        {
          heading: '6. Formation of the contract',
          paragraphs: [
            'The contract is formed when the Client accepts the quotation or the engagement document and makes the first payment provided for.',
            'Before that point, an initial assessment interview involves no commitment on either side.',
          ],
        },
        {
          heading: '7. Client obligations',
          paragraphs: [
            'The Client undertakes to provide accurate, complete and authentic documents and information, and to update them if their situation changes.',
            'The Client undertakes to observe the deadlines communicated by the Provider. A document supplied late may cause the loss of an intake session, without liability on the Provider’s part.',
            'The Client acknowledges that supplying a falsified document immediately terminates the engagement, without reimbursement, and that the Client alone answers for the consequences.',
          ],
        },
        {
          heading: '8. Duration',
          paragraphs: [
            'The engagement runs for the duration stated in the quotation. Unless otherwise agreed, it ends once the stages covered have been completed.',
            'Any service requested beyond that scope is the subject of a separate quotation.',
          ],
        },
        {
          heading: '9. Cancellation and reimbursement',
          paragraphs: [
            `The Client may ask to cancel the engagement at any time, in writing to ${I.email}. The date that request is received determines the stage reached.`,
            'The applicable cancellation terms and reimbursement scale are set out in the quotation. Reimbursement covers, where applicable, the stages not yet performed at the date of the request; stages already performed remain due.',
            'Where the rules applicable to the Client provide for a withdrawal period, it is exercised in accordance with those rules. The Client may ask for the details before signing.',
            'Where the Provider is unable to perform the engagement for a reason attributable to it, sums received for stages not yet performed are reimbursed.',
          ],
        },
        {
          heading: '10. Force majeure',
          paragraphs: [
            'Neither party is liable for a failure to perform caused by an event beyond its control, in particular the closure of a consular post, the suspension of air links, a change in the applicable rules, or an institution’s decision to close an intake.',
            'Where such an event lastingly prevents performance, the parties shall agree on how the engagement is to continue or end.',
          ],
        },
        {
          heading: '11. Liability',
          paragraphs: [
            'The Provider’s liability is limited to damage directly attributable to a failure in the performance of its own services.',
            'It cannot be held liable for a decision taken by an institution or an authority, for the consequences of information supplied late or inaccurately by the Client, or for events occurring in Russia outside the scope of the engagement.',
          ],
        },
        {
          heading: '12. Complaints and disputes',
          paragraphs: [
            `Any complaint should be sent in writing to ${I.email}, stating the file reference and the facts complained of. We undertake to reply in writing.`,
            'The parties shall first seek an amicable solution. Failing agreement, the dispute shall be brought before the competent courts of the Provider’s country of establishment.',
          ],
        },
        {
          heading: '13. Governing law',
          paragraphs: [
            'These terms of sale are governed by the law of the Provider’s country of establishment, without prejudice to any mandatory consumer protection provisions applicable to the Client.',
          ],
        },
      ],
    };
  }

  if (lang === 'ar') {
    return {
      title: 'شروط البيع | RusStudy — RussieEtudes.com',
      description:
        'نطاق خدمة المرافقة RusStudy، والتزام الوسائل، وما لا تشمله الخدمة، والأسعار والدفع، والتزامات الحريف، والإلغاء، والمسؤولية، والقانون المنطبق.',
      h1: 'شروط البيع',
      updated: 'آخر تحديث: 7 أكتوبر 2026',
      intro:
        'تضبط هذه الشروط خدمة المرافقة المدفوعة المقدَّمة تحت علامة RusStudy. ونرجو قراءة الفصل 3 بعناية خاصة: فهو يحدّد طبيعة التزامنا، وما لا يمكن لأي وكالة أن تَعِدك به.',
      sections: [
        {
          heading: '1. الموضوع ونطاق التطبيق',
          paragraphs: [
            `تضبط شروط البيع هذه خدمة المرافقة التي تقدّمها ${f('legalName')} («المزوّد») لكل شخص طبيعي أو ممثّله القانوني («الحريف») يتعاقد معها.`,
            'ويقبلها الحريف قبل انطلاق أي عمل، وهي تعلو على كل تصريح مخالف يُدلى به شفويًّا أو عبر المراسلات.',
            'وإذا كان الحريف قاصرًا، فإن العقد يبرمه ممثّله القانوني الذي يتحمّل الدفع.',
          ],
        },
        {
          heading: '2. الخدمات المقدَّمة',
          paragraphs: [
            'تشمل خدمة المرافقة، حسب الصيغة المتّفق عليها مع الحريف: تقييم الملفّ والتوجيه نحو المؤسسات التي تناسبه؛ والمساعدة على تكوين ملفّ الترشّح؛ ومتابعة الترشّح لدى المؤسسة؛ ومتابعة دعوة الدراسة؛ وتحضير طلب التأشيرة؛ وعند الوصول، الاستقبال والمساعدة في الإجراءات الأولى.',
            'ويُحدَّد النطاق الدقيق لكل مرافقة، والمراحل المشمولة وتلك المستثناة، في عرض السعر أو وثيقة التعاقد التي يمضيها الحريف. وفي صورة التعارض، تعلو هذه الوثيقة على الوصف العام المنشور على الموقع.',
          ],
        },
        {
          heading: '3. طبيعة الالتزام — التزام بوسيلة',
          paragraphs: [
            'المزوّد ملتزم بالتزام بوسيلة لا بالتزام بنتيجة.',
            'قرار القبول يعود حصريًّا إلى المؤسسة المعنيّة. وإسناد التأشيرة يعود حصريًّا إلى السلطات القنصلية المختصّة. وإسناد مكان في الإقامة الجامعية يعود حصريًّا إلى المؤسسة. والاعتراف بالشهادة يعود حصريًّا إلى سلطات البلد الذي يُطلب فيه.',
            'وبالتالي لا يقدّم المزوّد أي ضمان بالقبول، ولا بالتأشيرة، ولا بالسكن، ولا بالشهادة، ولا بالشغل، ولا يَعِد بشيء من ذلك بأي صيغة كانت.',
            'ورفض القبول، أو رفض التأشيرة، أو عدم توفّر مكان في الإقامة الجامعية، أو رفض الاعتراف، لا يشكّل إخلالًا بهذه الشروط، ولا يفتح في حدّ ذاته حقًّا في استرجاع مقابل خدمات أُنجزت فعلًا.',
            'وكل تصريح، مهما كان مصدره، يَعِد بقبول مضمون أو تأشيرة مضمونة يخالف هذه الشروط ولا يُلزم المزوّد.',
          ],
        },
        {
          heading: '4. ما لا تشمله الخدمة',
          paragraphs: [
            'ما لم يُنصّ صراحةً على خلاف ذلك في عرض السعر، تبقى العناصر التالية على عاتق الحريف وغير مشمولة بسعر المرافقة:',
            'معاليم الدراسة الجامعية؛ والمعاليم القنصلية ومعاليم التأشيرة؛ وكلفة التصديق والتوثيق وترجمة الوثائق؛ والفحوص الطبية والتأمين الصحي؛ وتذاكر الطائرة والتنقّل؛ والسكن الجامعي وضمانه؛ ومعاليم التسجيل الهجري؛ وكل مصاريف الحياة في روسيا.',
            'ويدفع الحريف هذه المبالغ مباشرةً إلى الجهات المعنيّة. ولا يتقاضاها المزوّد ولا يحدّد مقدارها.',
          ],
        },
        {
          heading: '5. الأسعار والدفع',
          paragraphs: [
            'سعر الخدمة ورُوزنامة الدفع ووسائل الدفع المقبولة مذكورة في عرض السعر الذي يُسلَّم إلى الحريف قبل انطلاق أي عمل. ولا تُنشر على الموقع لأنها تتوقّف على الصيغة المختارة والنطاق المتّفق عليه.',
            'لا يُستحقّ أي مبلغ قبل تسليم عرض السعر وقبوله من الحريف.',
            'الأسعار هي السارية في تاريخ قبول عرض السعر. وكل مبلغ يُدفع يُثبَت بوصل أو فاتورة يصدرها المزوّد.',
            'ويُنصح الحريف بعدم قبول أي دفع خارج القنوات المذكورة في عرض السعر، وباشتراط وصل كتابي عن كل دفعة.',
          ],
        },
        {
          heading: '6. إبرام العقد',
          paragraphs: [
            'يُبرَم العقد عند قبول الحريف لعرض السعر أو لوثيقة التعاقد وأدائه الدفعة الأولى المنصوص عليها.',
            'وقبل ذلك، لا يرتّب لقاء التقييم الأولي أي التزام على أي من الطرفين.',
          ],
        },
        {
          heading: '7. التزامات الحريف',
          paragraphs: [
            'يلتزم الحريف بتقديم وثائق ومعلومات دقيقة وكاملة وصحيحة، وبتحيينها إن تغيّر وضعه.',
            'ويلتزم باحترام الآجال التي يبلّغها المزوّد. فوثيقة تصل متأخّرة قد تتسبّب في ضياع دورة دخول، دون أن يتحمّل المزوّد مسؤولية ذلك.',
            'ويقرّ الحريف بأن تقديم وثيقة محرَّفة يُنهي المرافقة فورًا دون استرجاع، وبأنه يتحمّل وحده النتائج.',
          ],
        },
        {
          heading: '8. المدة',
          paragraphs: [
            'تمتدّ المرافقة طيلة المدة المذكورة في عرض السعر. وما لم يُتّفق على خلاف ذلك، تنتهي بإنجاز المراحل المشمولة.',
            'وكل خدمة تُطلب خارج هذا النطاق تكون موضوع عرض سعر مستقلّ.',
          ],
        },
        {
          heading: '9. الإلغاء والاسترجاع',
          paragraphs: [
            `يمكن للحريف طلب إلغاء المرافقة في أي وقت، كتابيًّا على ${I.email}. وتاريخ تلقّي هذا الطلب هو ما يحدّد المرحلة المبلوغة.`,
            'شروط الإلغاء وجدول الاسترجاع المنطبقان مذكوران في عرض السعر. ويشمل الاسترجاع، عند الاقتضاء، المراحل غير المنجَزة في تاريخ الطلب؛ أما المراحل المنجَزة فتبقى مستحقّة.',
            'وإذا نصّ التنظيم المنطبق على الحريف على أجل للعدول، فإنه يُمارَس وفق الصيغ التي يحدّدها. ويمكن للحريف طلب تفاصيله قبل الإمضاء.',
            'وإذا تعذّر على المزوّد إنجاز المرافقة لسبب يُنسب إليه، تُسترجَع المبالغ المقبوضة مقابل المراحل غير المنجَزة.',
          ],
        },
        {
          heading: '10. القوة القاهرة',
          paragraphs: [
            'لا يتحمّل أي من الطرفين مسؤولية عدم التنفيذ الناتج عن حدث خارج عن إرادته، خاصةً غلق مركز قنصلي، أو تعليق الخطوط الجوية، أو تغيير القواعد المنطبقة، أو قرار مؤسسة بغلق دورة دخول.',
            'وإذا حال هذا الحدث دون التنفيذ بشكل دائم، يتّفق الطرفان على كيفية مواصلة المرافقة أو إنهائها.',
          ],
        },
        {
          heading: '11. المسؤولية',
          paragraphs: [
            'تقتصر مسؤولية المزوّد على الضرر المنسوب مباشرةً إلى إخلال في تنفيذ خدماته هو.',
            'ولا يمكن مساءلته عن قرار تتّخذه مؤسسة أو سلطة، ولا عن نتائج معلومات قدّمها الحريف متأخّرةً أو غير دقيقة، ولا عن أحداث تقع في روسيا خارج نطاق المرافقة.',
          ],
        },
        {
          heading: '12. الشكاوى والنزاعات',
          paragraphs: [
            `تُوجَّه كل شكاية كتابيًّا إلى ${I.email}، مع ذكر مرجع الملفّ والوقائع محلّ الشكاية. ونلتزم بالردّ كتابيًّا.`,
            'ويسعى الطرفان أولًا إلى حلّ ودّي. وفي غياب اتفاق، يُرفع النزاع أمام المحاكم المختصّة في بلد تأسيس المزوّد.',
          ],
        },
        {
          heading: '13. القانون المنطبق',
          paragraphs: [
            'تخضع شروط البيع هذه لقانون بلد تأسيس المزوّد، دون المساس بالأحكام الآمرة لحماية المستهلك المنطبقة على الحريف.',
          ],
        },
      ],
    };
  }

  if (lang === 'ru') {
    return {
      title: 'Условия продажи | RusStudy — RussieEtudes.com',
      description:
        'Объём сопровождения RusStudy, обязательство приложить усилия, что не входит в услугу, цены и оплата, обязанности клиента, отмена, ответственность и применимое право.',
      h1: 'Условия продажи',
      updated: 'Последнее обновление: 7 октября 2026 года',
      intro:
        'Настоящие условия регулируют платное сопровождение, оказываемое под маркой RusStudy. Особенно внимательно прочитайте раздел 3: в нём указано, в чём состоит наше обязательство и что ни одно агентство не может вам обещать.',
      sections: [
        {
          heading: '1. Предмет и сфера применения',
          paragraphs: [
            `Настоящие условия продажи регулируют услугу сопровождения, оказываемую ${f('legalName')} («Исполнитель») физическому лицу или его законному представителю («Клиент»), обратившемуся к ней.`,
            'Клиент принимает их до начала любых работ; они имеют преимущество перед любым противоположным заявлением, сделанным устно или в переписке.',
            'Если Клиент несовершеннолетний, договор заключает его законный представитель, который отвечает за оплату.',
          ],
        },
        {
          heading: '2. Состав услуг',
          paragraphs: [
            'Сопровождение включает, в зависимости от согласованного с Клиентом пакета: оценку профиля и подбор подходящих учреждений; помощь в формировании пакета документов; ведение заявки в учреждении; сопровождение получения приглашения; подготовку визовой заявки; а по приезде — встречу и помощь в первых административных шагах.',
            'Точный объём каждого сопровождения, включённые и исключённые этапы определяются в коммерческом предложении или в подписанном Клиентом документе о сотрудничестве. При расхождении этот документ имеет преимущество перед общим описанием на сайте.',
          ],
        },
        {
          heading: '3. Характер обязательства — обязательство приложить усилия',
          paragraphs: [
            'Исполнитель принимает на себя обязательство приложить усилия, а не обязательство достичь результата.',
            'Решение о зачислении принимает исключительно соответствующее учреждение. Выдача визы относится исключительно к компетенции консульских органов. Предоставление места в общежитии относится исключительно к учреждению. Признание диплома относится исключительно к органам страны, где оно испрашивается.',
            'Соответственно, Исполнитель не даёт гарантии зачисления, визы, жилья, диплома или трудоустройства и не обещает этого ни в какой форме.',
            'Отказ в зачислении, отказ в визе, отсутствие места в общежитии или отказ в признании не является неисполнением настоящих условий и сам по себе не порождает права на возврат оплаты за уже оказанные услуги.',
            'Любое заявление, от кого бы оно ни исходило, обещающее гарантированное зачисление или гарантированную визу, противоречит настоящим условиям и Исполнителя не связывает.',
          ],
        },
        {
          heading: '4. Что не входит в услугу',
          paragraphs: [
            'Если в коммерческом предложении прямо не указано иное, следующие расходы несёт Клиент и они не входят в стоимость сопровождения:',
            'Стоимость обучения в вузе; консульские и визовые сборы; расходы на легализацию, удостоверение и перевод документов; медицинские обследования и медицинская страховка; авиабилеты и проезд; общежитие и залог за него; сборы за миграционный учёт; все расходы на проживание в России.',
            'Клиент оплачивает их напрямую соответствующим организациям. Исполнитель их не взимает и их размер не устанавливает.',
          ],
        },
        {
          heading: '5. Цены и оплата',
          paragraphs: [
            'Стоимость услуги, график платежей и принимаемые способы оплаты указываются в коммерческом предложении, которое передаётся Клиенту до начала любых работ. На сайте они не публикуются, поскольку зависят от выбранного пакета и согласованного объёма.',
            'Никакая сумма не причитается до передачи коммерческого предложения и его принятия Клиентом.',
            'Действуют цены, установленные на дату принятия коммерческого предложения. Любая уплаченная сумма подтверждается распиской или счётом, выданным Исполнителем.',
            'Клиенту рекомендуется не производить платежей вне каналов, указанных в коммерческом предложении, и требовать письменное подтверждение каждого платежа.',
          ],
        },
        {
          heading: '6. Заключение договора',
          paragraphs: [
            'Договор считается заключённым, когда Клиент принимает коммерческое предложение или документ о сотрудничестве и вносит предусмотренный первый платёж.',
            'До этого момента первичная оценочная консультация не создаёт обязательств ни для одной из сторон.',
          ],
        },
        {
          heading: '7. Обязанности Клиента',
          paragraphs: [
            'Клиент обязуется предоставлять точные, полные и подлинные документы и сведения и обновлять их при изменении обстоятельств.',
            'Клиент обязуется соблюдать сроки, сообщённые Исполнителем. Документ, поданный с опозданием, может привести к потере набора, без ответственности Исполнителя.',
            'Клиент признаёт, что предоставление поддельного документа немедленно прекращает сопровождение без возврата средств и что он один отвечает за последствия.',
          ],
        },
        {
          heading: '8. Срок',
          paragraphs: [
            'Сопровождение действует в течение срока, указанного в коммерческом предложении. Если не согласовано иное, оно завершается по выполнении включённых этапов.',
            'Любая услуга, запрошенная сверх этого объёма, оформляется отдельным предложением.',
          ],
        },
        {
          heading: '9. Отмена и возврат средств',
          paragraphs: [
            `Клиент может в любой момент попросить отменить сопровождение, направив письмо на ${I.email}. Дата получения этого обращения определяет достигнутый этап.`,
            'Применимые условия отмены и шкала возврата указаны в коммерческом предложении. Возврат касается, при необходимости, этапов, не выполненных на дату обращения; уже выполненные этапы остаются к оплате.',
            'Если применимые к Клиенту нормы предусматривают срок отказа от договора, он реализуется в установленном ими порядке. Клиент может запросить подробности до подписания.',
            'Если Исполнитель не может выполнить сопровождение по зависящей от него причине, суммы, полученные за невыполненные этапы, возвращаются.',
          ],
        },
        {
          heading: '10. Обстоятельства непреодолимой силы',
          paragraphs: [
            'Ни одна из сторон не отвечает за неисполнение, вызванное событием вне её контроля, в частности закрытием консульского учреждения, приостановкой авиасообщения, изменением применимых правил или решением учреждения закрыть набор.',
            'Если такое событие делает исполнение длительно невозможным, стороны согласуют порядок продолжения или прекращения сопровождения.',
          ],
        },
        {
          heading: '11. Ответственность',
          paragraphs: [
            'Ответственность Исполнителя ограничена ущербом, непосредственно вызванным недостатками в оказании его собственных услуг.',
            'Он не может отвечать за решение учреждения или органа власти, за последствия сведений, предоставленных Клиентом с опозданием или неточно, а также за события в России вне рамок сопровождения.',
          ],
        },
        {
          heading: '12. Претензии и споры',
          paragraphs: [
            `Любая претензия направляется письменно на ${I.email} с указанием номера дела и обжалуемых обстоятельств. Мы обязуемся ответить письменно.`,
            'Стороны сначала стремятся к мирному урегулированию. При недостижении согласия спор передаётся в компетентный суд страны учреждения Исполнителя.',
          ],
        },
        {
          heading: '13. Применимое право',
          paragraphs: [
            'Настоящие условия продажи регулируются правом страны учреждения Исполнителя, без ущерба для императивных норм защиты прав потребителей, применимых к Клиенту.',
          ],
        },
      ],
    };
  }

  return {
    title: 'Conditions générales de vente | RusStudy — RussieEtudes.com',
    description:
      "Périmètre de l'accompagnement RusStudy, obligation de moyens, ce qui n'est pas compris, prix et paiement, obligations du client, annulation, responsabilité et droit applicable.",
    h1: 'Conditions générales de vente',
    updated: 'Dernière mise à jour : 7 octobre 2026',
    intro:
      "Les présentes conditions régissent la prestation d'accompagnement payante fournie sous la marque RusStudy. Nous vous invitons à lire l'article 3 avec une attention particulière : il énonce la nature de notre engagement, et ce qu'aucune agence ne peut vous promettre.",
    sections: [
      {
        heading: '1. Objet et champ d’application',
        paragraphs: [
          `Les présentes conditions générales de vente régissent la prestation d'accompagnement fournie par ${f('legalName')} (« le Prestataire ») à toute personne physique ou à son représentant légal (« le Client ») qui y recourt.`,
          "Elles sont acceptées par le Client avant tout commencement d'exécution et prévalent sur toute déclaration contraire formulée oralement ou par messagerie.",
          "Lorsque le Client est mineur, le contrat est conclu par son représentant légal, qui répond du paiement.",
        ],
      },
      {
        heading: '2. Prestations fournies',
        paragraphs: [
          "La prestation d'accompagnement couvre, selon la formule convenue avec le Client : l'évaluation du profil et l'orientation vers les établissements qui y correspondent ; l'aide à la constitution du dossier de candidature ; le suivi de la candidature auprès de l'établissement ; le suivi de la lettre d'invitation ; la préparation de la demande de visa ; et, à l'arrivée, l'accueil et l'assistance aux premières démarches administratives.",
          "Le périmètre exact de chaque accompagnement, les étapes couvertes et celles qui en sont exclues sont précisés dans le devis ou le document d'engagement signé par le Client. En cas de divergence, ce document prévaut sur la description générale publiée sur le site.",
        ],
      },
      {
        heading: '3. Nature de l’engagement — obligation de moyens',
        paragraphs: [
          "Le Prestataire est tenu d'une obligation de moyens, et non d'une obligation de résultat.",
          "La décision d'admission relève exclusivement de l'établissement concerné. La délivrance du visa relève exclusivement des autorités consulaires compétentes. L'attribution d'une place en résidence universitaire relève exclusivement de l'établissement. La reconnaissance d'un diplôme relève exclusivement des autorités du pays dans lequel elle est demandée.",
          "En conséquence, le Prestataire ne garantit ni l'admission, ni le visa, ni le logement, ni le diplôme, ni l'emploi, et ne formule aucune promesse en ce sens, sous quelque forme que ce soit.",
          "Un refus d'admission, un refus de visa, l'indisponibilité d'une place en résidence universitaire ou un refus de reconnaissance ne constitue pas une inexécution des présentes conditions et n'ouvre pas, à lui seul, droit au remboursement des prestations déjà réalisées.",
          "Toute affirmation, quelle qu'en soit la source, promettant une admission garantie ou un visa garanti est contraire aux présentes conditions et n'engage pas le Prestataire.",
        ],
      },
      {
        heading: '4. Ce que la prestation ne comprend pas',
        paragraphs: [
          "Sauf mention expresse contraire au devis, les éléments suivants restent à la charge du Client et ne sont pas compris dans le prix de l'accompagnement :",
          "Les frais de scolarité universitaires ; les frais consulaires et de visa ; le coût des légalisations, authentifications et traductions de documents ; les examens médicaux et l'assurance santé ; les billets d'avion et les transports ; le logement universitaire et sa caution ; les frais d'enregistrement migratoire ; et l'ensemble des frais de vie en Russie.",
          "Ces sommes sont réglées par le Client directement auprès des organismes concernés. Le Prestataire ne les encaisse pas et n'en fixe pas le montant.",
        ],
      },
      {
        heading: '5. Prix et modalités de paiement',
        paragraphs: [
          "Le prix de la prestation, l'échéancier de règlement et les moyens de paiement acceptés sont indiqués dans le devis remis au Client avant tout commencement d'exécution. Ils ne sont pas publiés sur le site, car ils dépendent de la formule retenue et du périmètre convenu.",
          "Aucune somme n'est due avant la remise du devis et son acceptation par le Client.",
          "Les prix sont ceux en vigueur à la date d'acceptation du devis. Toute somme versée donne lieu à un reçu ou à une facture émise par le Prestataire.",
          "Il est recommandé au Client de n'effectuer aucun paiement en dehors des canaux indiqués au devis, et d'exiger un justificatif écrit pour chaque versement.",
        ],
      },
      {
        heading: '6. Formation du contrat',
        paragraphs: [
          "Le contrat est formé lorsque le Client accepte le devis ou le document d'engagement et règle le premier versement prévu.",
          "Avant ce moment, un entretien d'évaluation initial n'emporte aucun engagement de part ni d'autre.",
        ],
      },
      {
        heading: '7. Obligations du Client',
        paragraphs: [
          "Le Client s'engage à fournir des documents et des informations exacts, complets et authentiques, et à les actualiser si sa situation évolue.",
          "Le Client s'engage à respecter les délais que le Prestataire lui communique. Un document transmis tardivement peut entraîner la perte d'une session de rentrée, sans que la responsabilité du Prestataire puisse être engagée.",
          "Le Client reconnaît que la transmission d'un document falsifié met fin immédiatement à l'accompagnement, sans remboursement, et qu'il en répond seul.",
        ],
      },
      {
        heading: '8. Durée de la prestation',
        paragraphs: [
          "L'accompagnement court pour la durée indiquée au devis. Sauf convention contraire, il prend fin une fois les étapes couvertes réalisées.",
          "Toute prestation demandée au-delà de ce périmètre fait l'objet d'un devis distinct.",
        ],
      },
      {
        heading: '9. Annulation et remboursement',
        paragraphs: [
          `Le Client peut demander l'annulation de l'accompagnement à tout moment, par écrit à ${I.email}. La date de réception de cette demande détermine l'étape atteinte.`,
          "Les conditions d'annulation et le barème de remboursement applicables figurent dans le devis. Le remboursement porte, le cas échéant, sur les étapes non encore exécutées à la date de la demande ; les étapes déjà réalisées restent dues.",
          "Lorsque la réglementation applicable au Client prévoit un délai de rétractation, celui-ci s'exerce selon les modalités qu'elle fixe. Le Client peut en demander le détail avant de signer.",
          "Lorsque le Prestataire se trouve dans l'impossibilité d'exécuter l'accompagnement pour une cause qui lui est imputable, les sommes perçues au titre des étapes non réalisées sont remboursées.",
        ],
      },
      {
        heading: '10. Force majeure',
        paragraphs: [
          "Aucune des parties n'est responsable d'une inexécution causée par un événement échappant à son contrôle, notamment la fermeture d'un poste consulaire, la suspension de liaisons aériennes, une modification de la réglementation applicable, ou la décision d'un établissement de fermer une session d'admission.",
          "Lorsqu'un tel événement empêche durablement l'exécution, les parties conviennent des modalités de poursuite ou de fin de l'accompagnement.",
        ],
      },
      {
        heading: '11. Responsabilité',
        paragraphs: [
          "La responsabilité du Prestataire est limitée aux préjudices directement imputables à un manquement dans l'exécution de ses propres prestations.",
          "Elle ne peut être engagée du fait d'une décision prise par un établissement ou une autorité, des conséquences d'informations transmises tardivement ou inexactement par le Client, ni d'événements survenus en Russie en dehors du périmètre de l'accompagnement.",
        ],
      },
      {
        heading: '12. Réclamations et litiges',
        paragraphs: [
          `Toute réclamation est adressée par écrit à ${I.email}, en précisant la référence du dossier et les faits en cause. Nous nous engageons à y répondre par écrit.`,
          "Les parties recherchent d'abord une solution amiable. À défaut d'accord, le litige est porté devant les juridictions compétentes du pays d'établissement du Prestataire.",
        ],
      },
      {
        heading: '13. Droit applicable',
        paragraphs: [
          "Les présentes conditions générales de vente sont régies par le droit du pays d'établissement du Prestataire, sans préjudice des dispositions impératives de protection du consommateur applicables au Client.",
        ],
      },
    ],
  };
}
