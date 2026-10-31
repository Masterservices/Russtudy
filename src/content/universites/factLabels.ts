import type { Lang } from '../../i18n';
import type { FiliereSlug } from '../filieres/registry';
import type { FactStatus, ProgramStatus } from './facts';

/*
 * Libellés traduits des sections factuelles des fiches universités.
 *
 * Code couleur, délibérément strict : le vert n'est utilisé que pour une
 * information vérifiée. Une information non vérifiée est neutre, jamais
 * verte — un badge vert sur un « inconnu » serait trompeur et c'est
 * précisément ce que ces pages cherchent à éviter.
 */

export type BadgeTone = 'verified' | 'negative' | 'unverified';

export const BADGE_CLASS: Record<BadgeTone, string> = {
  verified: 'bg-emerald-600 text-white',
  negative: 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200',
  unverified: 'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100',
};

export function factTone(status: FactStatus): BadgeTone {
  return status === 'yes' ? 'verified' : status === 'no' ? 'negative' : 'unverified';
}

export function programTone(status: ProgramStatus): BadgeTone {
  return status === 'offered' ? 'verified' : status === 'not-offered' ? 'negative' : 'unverified';
}

export const FACT_LABEL: Record<Lang, Record<FactStatus, string>> = {
  fr: { yes: 'Oui', no: 'Non', unknown: 'À vérifier' },
  en: { yes: 'Yes', no: 'No', unknown: 'To be verified' },
  ar: { yes: 'نعم', no: 'لا', unknown: 'يجب التحقق' },
  ru: { yes: 'Да', no: 'Нет', unknown: 'Требует уточнения' },
};

export const PROGRAM_LABEL: Record<Lang, Record<ProgramStatus, string>> = {
  fr: { offered: 'Proposée', 'not-offered': 'Non proposée', unknown: 'À vérifier' },
  en: { offered: 'Offered', 'not-offered': 'Not offered', unknown: 'To be verified' },
  ar: { offered: 'متاحة', 'not-offered': 'غير متاحة', unknown: 'يجب التحقق' },
  ru: { offered: 'Есть', 'not-offered': 'Нет', unknown: 'Требует уточнения' },
};

export const PROGRAM_NAME: Record<Lang, Record<FiliereSlug, string>> = {
  fr: {
    'medecine-generale': 'Médecine générale',
    'medecine-dentaire': 'Médecine dentaire',
    pharmacie: 'Pharmacie',
    'ingenierie-tech': 'Ingénierie et technologies',
    'economie-business': 'Économie et management',
  },
  en: {
    'medecine-generale': 'General medicine',
    'medecine-dentaire': 'Dentistry',
    pharmacie: 'Pharmacy',
    'ingenierie-tech': 'Engineering and technology',
    'economie-business': 'Economics and management',
  },
  ar: {
    'medecine-generale': 'الطب العام',
    'medecine-dentaire': 'طب الأسنان',
    pharmacie: 'الصيدلة',
    'ingenierie-tech': 'الهندسة والتكنولوجيا',
    'economie-business': 'الاقتصاد والتصرّف',
  },
  ru: {
    'medecine-generale': 'Лечебное дело',
    'medecine-dentaire': 'Стоматология',
    pharmacie: 'Фармация',
    'ingenierie-tech': 'Инженерия и технологии',
    'economie-business': 'Экономика и менеджмент',
  },
};

interface SectionCopy {
  unavailable: string;
  officialSite: string;
  programsHeading: string;
  programsIntro: string;
  languagesHeading: string;
  languageRussian: string;
  languageEnglish: string;
  languagesNote: string;
  prepHeading: string;
  prepLabel: string;
  prepYes: string;
  prepUnknown: string;
  prepNo: string;
  housingHeading: string;
  housingLabel: string;
  housingYes: string;
  housingUnknown: string;
  housingNo: string;
  maghrebHeading: string;
  maghrebIntro: string;
  maghrebPoints: string[];
  sourcesHeading: string;
  sourcesNote: string;
  ctaHeading: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const UNIVERSITY_SECTIONS: Record<Lang, SectionCopy> = {
  fr: {
    unavailable: 'Information non disponible',
    officialSite: 'Site officiel',
    programsHeading: 'Formations accessibles aux étudiants internationaux',
    programsIntro:
      "Statut de chacune des cinq filières que nous documentons. « À vérifier » signifie qu'aucune source institutionnelle ne nous a permis de trancher : ce n'est ni un oui ni un non, et cela se confirme auprès de l'établissement pour l'année universitaire concernée.",
    languagesHeading: 'Langues d’enseignement',
    languageRussian: 'Russe',
    languageEnglish: 'Anglais',
    languagesNote:
      "La langue dépend du programme, pas de l'université. Certaines formations peuvent être proposées en anglais tandis que d'autres sont dispensées en russe : la langue d'enseignement doit être vérifiée pour le programme choisi avant toute candidature.",
    prepHeading: 'Année préparatoire de russe',
    prepLabel: 'Faculté préparatoire',
    prepYes:
      "L'établissement dispose d'une structure préparatoire destinée aux étudiants étrangers. Elle permet de se préparer à poursuivre des études en Russie, notamment en langue russe et, selon les cas, dans les disciplines nécessaires au futur cursus. La durée, le contenu et les frais sont à confirmer auprès de l'université.",
    prepUnknown:
      "L'existence d'une faculté préparatoire destinée aux étudiants étrangers n'a pas pu être suffisamment vérifiée à partir des sources disponibles. À demander directement à l'établissement.",
    prepNo:
      "Aucune structure préparatoire pour étudiants étrangers n'a été identifiée dans cet établissement.",
    housingHeading: 'Résidences universitaires',
    housingLabel: 'Résidences universitaires',
    housingYes:
      "Des résidences universitaires sont disponibles, sous réserve des conditions d'attribution et des places disponibles. L'existence d'un parc de logement ne garantit pas qu'une place soit attribuée à chaque étudiant étranger.",
    housingUnknown:
      "Les conditions d'hébergement des étudiants étrangers n'ont pas pu être vérifiées à partir des sources disponibles. À demander explicitement avant de vous engager.",
    housingNo: "Aucune résidence universitaire n'a été identifiée pour cet établissement.",
    maghrebHeading: 'Cette université peut-elle convenir à un étudiant tunisien, marocain ou algérien ?',
    maghrebIntro:
      "Les conditions d'admission varient selon le programme et la nationalité du candidat. Un étudiant tunisien, marocain ou algérien doit vérifier les exigences officielles applicables à son dossier avant de commencer la procédure. Voici les points à contrôler, dans cet ordre.",
    maghrebPoints: [
      'Votre diplôme de fin d’études secondaires et sa reconnaissance par l’établissement visé',
      'L’ouverture de la filière souhaitée aux étudiants internationaux pour l’année concernée',
      'La langue d’enseignement du cursus complet, et le niveau exigé',
      'La nécessité ou non d’une année préparatoire de russe',
      'Les éventuels examens ou entretiens d’admission',
      'La liste exacte des documents à traduire et à légaliser',
      'Les délais de la lettre d’invitation et du visa étudiant',
      'Les conditions de logement et le budget annuel total',
    ],
    sourcesHeading: 'Sources officielles',
    sourcesNote:
      "Les informations de cette page proviennent des sources institutionnelles ci-dessous. Les données sensibles au changement — frais, programmes ouverts, langue d'enseignement, logement, conditions d'admission — sont à vérifier auprès de l'université pour l'année universitaire concernée.",
    ctaHeading: 'Besoin d’aide pour votre candidature ?',
    ctaText:
      "Vous souhaitez étudier en Russie mais vous ne savez pas quelle université ou quelle formation choisir ? RusStudy peut vous accompagner dans la préparation de votre projet : choix de formation, préparation du dossier, pré-inscription, démarches administratives et accompagnement avant votre départ.",
    ctaPrimary: 'Étudier en Russie',
    ctaSecondary: 'Parler à un conseiller',
  },
  en: {
    unavailable: 'Information not available',
    officialSite: 'Official website',
    programsHeading: 'Programmes open to international students',
    programsIntro:
      'The status of each of the five programmes we document. "To be verified" means no institutional source allowed us to settle the question: it is neither a yes nor a no, and it is confirmed with the institution for the academic year concerned.',
    languagesHeading: 'Languages of instruction',
    languageRussian: 'Russian',
    languageEnglish: 'English',
    languagesNote:
      'Language depends on the programme, not on the university. Some courses may be offered in English while others are taught in Russian: the language of instruction must be verified for the chosen programme before applying.',
    prepHeading: 'Preparatory year of Russian',
    prepLabel: 'Preparatory faculty',
    prepYes:
      'The institution has a preparatory structure for international students. It allows you to prepare for study in Russia, particularly in the Russian language and, depending on the case, in the subjects needed for your future course. Duration, content and fees are to be confirmed with the university.',
    prepUnknown:
      'The existence of a preparatory faculty for international students could not be sufficiently verified from the available sources. To be asked directly of the institution.',
    prepNo: 'No preparatory structure for international students has been identified at this institution.',
    housingHeading: 'University halls of residence',
    housingLabel: 'Halls of residence',
    housingYes:
      'University halls are available, subject to allocation conditions and available places. The existence of a housing stock does not guarantee that a place will be allocated to every international student.',
    housingUnknown:
      'Accommodation arrangements for international students could not be verified from the available sources. To be asked about explicitly before committing.',
    housingNo: 'No university halls have been identified for this institution.',
    maghrebHeading: 'Can this university suit a Tunisian, Moroccan or Algerian student?',
    maghrebIntro:
      'Admission requirements vary by programme and by the nationality of the applicant. A Tunisian, Moroccan or Algerian student must check the official requirements applying to their own file before starting the procedure. Here are the points to check, in this order.',
    maghrebPoints: [
      'Your secondary school leaving certificate and its recognition by the institution you are targeting',
      'Whether the programme you want is open to international students for the year concerned',
      'The language of instruction of the full course, and the level required',
      'Whether a preparatory year of Russian is needed',
      'Any admission tests or interviews',
      'The exact list of documents to be translated and legalised',
      'The lead times for the invitation letter and the student visa',
      'Accommodation arrangements and the total annual budget',
    ],
    sourcesHeading: 'Official sources',
    sourcesNote:
      'The information on this page comes from the institutional sources below. Data sensitive to change — fees, open programmes, language of instruction, accommodation, admission requirements — must be verified with the university for the academic year concerned.',
    ctaHeading: 'Need help with your application?',
    ctaText:
      'You want to study in Russia but are not sure which university or which programme to choose? RusStudy can support you in preparing your plan: choice of programme, assembling your file, pre-registration, administrative formalities and support before departure.',
    ctaPrimary: 'Study in Russia',
    ctaSecondary: 'Talk to an adviser',
  },
  ar: {
    unavailable: 'المعلومة غير متوفّرة',
    officialSite: 'الموقع الرسمي',
    programsHeading: 'الاختصاصات المتاحة للطلبة الدوليين',
    programsIntro:
      'حالة كل اختصاص من الاختصاصات الخمسة التي نوثّقها. و«يجب التحقق» تعني أن لا مصدر مؤسساتي أتاح لنا الحسم: فهي ليست نعم ولا لا، وتُؤكَّد لدى المؤسسة للسنة الجامعية المعنية.',
    languagesHeading: 'لغات التدريس',
    languageRussian: 'الروسية',
    languageEnglish: 'الإنجليزية',
    languagesNote:
      'اللغة تتوقف على البرنامج لا على الجامعة. فقد تُقترح بعض التكوينات بالإنجليزية بينما تُدرَّس أخرى بالروسية: وينبغي التحقق من لغة التدريس للبرنامج المختار قبل أي ترشّح.',
    prepHeading: 'السنة التحضيرية للغة الروسية',
    prepLabel: 'الكلية التحضيرية',
    prepYes:
      'للمؤسسة بنية تحضيرية موجّهة للطلبة الأجانب. وهي تتيح التحضير لمواصلة الدراسة في روسيا، خاصة في اللغة الروسية، وحسب الحالات في المواد اللازمة للمسار المستقبلي. أما المدة والمحتوى والرسوم فينبغي تأكيدها لدى الجامعة.',
    prepUnknown:
      'لم يتسنَّ التحقق بما يكفي من وجود كلية تحضيرية موجّهة للطلبة الأجانب انطلاقًا من المصادر المتاحة. وينبغي طلب ذلك مباشرة من المؤسسة.',
    prepNo: 'لم يتم تحديد أي بنية تحضيرية للطلبة الأجانب في هذه المؤسسة.',
    housingHeading: 'الإقامات الجامعية',
    housingLabel: 'الإقامات الجامعية',
    housingYes:
      'الإقامات الجامعية متاحة، رهن شروط الإسناد والمقاعد المتوفّرة. ووجود رصيد سكني لا يضمن إسناد مقعد لكل طالب أجنبي.',
    housingUnknown:
      'لم يتسنَّ التحقق من شروط إيواء الطلبة الأجانب انطلاقًا من المصادر المتاحة. وينبغي طلب ذلك صراحة قبل الالتزام.',
    housingNo: 'لم يتم تحديد أي إقامة جامعية لهذه المؤسسة.',
    maghrebHeading: 'هل تناسب هذه الجامعة طالبًا تونسيًا أو مغربيًا أو جزائريًا؟',
    maghrebIntro:
      'تختلف شروط القبول حسب البرنامج وجنسية المترشّح. وعلى الطالب التونسي أو المغربي أو الجزائري التحقق من الشروط الرسمية المنطبقة على ملفه قبل بدء الإجراء. وإليك النقاط الواجب مراقبتها، بهذا الترتيب.',
    maghrebPoints: [
      'شهادة ختم التعليم الثانوي ومدى الاعتراف بها لدى المؤسسة المستهدفة',
      'فتح الاختصاص المرغوب أمام الطلبة الدوليين للسنة المعنية',
      'لغة تدريس المسار كاملًا، والمستوى المطلوب',
      'الحاجة أو عدمها إلى سنة تحضيرية في الروسية',
      'الامتحانات أو المقابلات المحتملة للقبول',
      'القائمة الدقيقة للوثائق الواجب ترجمتها وتصديقها',
      'آجال رسالة الدعوة وتأشيرة الطالب',
      'شروط السكن والميزانية السنوية الجملية',
    ],
    sourcesHeading: 'المصادر الرسمية',
    sourcesNote:
      'معلومات هذه الصفحة مستمدّة من المصادر المؤسساتية أدناه. أما المعطيات الحسّاسة للتغيير — الرسوم، والبرامج المفتوحة، ولغة التدريس، والسكن، وشروط القبول — فينبغي التحقق منها لدى الجامعة للسنة الجامعية المعنية.',
    ctaHeading: 'تحتاج مساعدة في ترشّحك؟',
    ctaText:
      'تريد الدراسة في روسيا لكنك لا تعرف أي جامعة أو أي اختصاص تختار؟ يمكن لـ RusStudy أن ترافقك في تحضير مشروعك: اختيار التكوين، وإعداد الملف، والترسيم الأوّلي، والإجراءات الإدارية، والمرافقة قبل السفر.',
    ctaPrimary: 'الدراسة في روسيا',
    ctaSecondary: 'تحدّث إلى مستشار',
  },
  ru: {
    unavailable: 'Информация недоступна',
    officialSite: 'Официальный сайт',
    programsHeading: 'Направления, открытые для иностранных студентов',
    programsIntro:
      'Статус каждого из пяти направлений, которые мы документируем. «Требует уточнения» означает, что ни один институциональный источник не позволил нам сделать вывод: это ни да, ни нет, и уточняется в вузе на соответствующий учебный год.',
    languagesHeading: 'Языки обучения',
    languageRussian: 'Русский',
    languageEnglish: 'Английский',
    languagesNote:
      'Язык зависит от программы, а не от университета. Одни курсы могут вестись на английском, другие на русском: язык обучения нужно проверить для выбранной программы до подачи документов.',
    prepHeading: 'Подготовительный год русского языка',
    prepLabel: 'Подготовительный факультет',
    prepYes:
      'В вузе есть подготовительная структура для иностранных студентов. Она позволяет подготовиться к учёбе в России — прежде всего по русскому языку и, в зависимости от случая, по предметам, необходимым для будущей программы. Длительность, содержание и стоимость уточняются в университете.',
    prepUnknown:
      'Наличие подготовительного факультета для иностранных студентов не удалось в достаточной мере подтвердить по доступным источникам. Следует спросить напрямую в вузе.',
    prepNo: 'Подготовительной структуры для иностранных студентов в этом вузе не выявлено.',
    housingHeading: 'Студенческие общежития',
    housingLabel: 'Общежития',
    housingYes:
      'Общежития доступны при соблюдении условий распределения и наличии мест. Наличие жилого фонда не гарантирует, что место будет предоставлено каждому иностранному студенту.',
    housingUnknown:
      'Условия размещения иностранных студентов не удалось подтвердить по доступным источникам. Следует спросить об этом прямо до принятия обязательств.',
    housingNo: 'Студенческих общежитий у этого учреждения не выявлено.',
    maghrebHeading: 'Подойдёт ли этот вуз студенту из Туниса, Марокко или Алжира?',
    maghrebIntro:
      'Условия приёма зависят от программы и гражданства абитуриента. Студенту из Туниса, Марокко или Алжира следует проверить официальные требования к собственному досье до начала процедуры. Вот что нужно уточнить, в таком порядке.',
    maghrebPoints: [
      'Ваш аттестат о среднем образовании и его признание выбранным вузом',
      'Открыто ли нужное направление для иностранных студентов в соответствующем году',
      'Язык обучения всей программы и требуемый уровень',
      'Нужен ли подготовительный год русского языка',
      'Возможные вступительные испытания или собеседования',
      'Точный перечень документов для перевода и легализации',
      'Сроки получения приглашения и студенческой визы',
      'Условия проживания и совокупный годовой бюджет',
    ],
    sourcesHeading: 'Официальные источники',
    sourcesNote:
      'Информация на этой странице взята из институциональных источников ниже. Чувствительные к изменениям данные — стоимость, открытые программы, язык обучения, проживание, условия приёма — следует уточнять в университете на соответствующий учебный год.',
    ctaHeading: 'Нужна помощь с заявкой?',
    ctaText:
      'Хотите учиться в России, но не знаете, какой вуз или какое направление выбрать? RusStudy может сопровождать вас при подготовке проекта: выбор программы, сбор документов, предварительная запись, административные формальности и поддержка до отъезда.',
    ctaPrimary: 'Учиться в России',
    ctaSecondary: 'Поговорить с консультантом',
  },
};
