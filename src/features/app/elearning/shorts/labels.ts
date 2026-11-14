import type { AppLang } from '../../i18n';

/**
 * Libellés de l'interface des shorts.
 *
 * Typés champ par champ plutôt qu'en dictionnaire libre : une clé
 * oubliée dans une langue est une erreur de compilation, pas un trou
 * découvert par un élève. Les nombres se glissent par `{n}` et suivent
 * toujours deux-points ou un signe — « À réviser : 3 » — pour ne pas
 * avoir à accorder un nom en russe ou en arabe.
 */
export interface ShortsLabels {
  tabFeed: string;
  tabExplore: string;
  tabReview: string;
  tabNotebook: string;
  close: string;
  launch: string;
  forYou: string;
  all: string;
  previous: string;
  next: string;
  themes: string;

  keyExpression: string;
  phaseListen: string;
  phaseAgain: string;
  phaseYourTurn: string;
  swipeHint: string;
  tapToStart: string;
  replay: string;
  showTranslation: string;
  save: string;
  saved: string;
  savedToast: string;
  slow: string;
  speak: string;
  share: string;
  linkCopied: string;
  details: string;
  lessonLink: string;
  courseLink: string;
  listenAgain: string;
  listenSlow: string;
  meaning: string;
  usage: string;

  quizTitle: string;
  quizQuestion: string;
  quizRight: string;
  quizWrong: string;
  quizHear: string;

  endTitle: string;
  endText: string;
  endRestart: string;
  endReview: string;
  endCourse: string;

  speakTitle: string;
  speakHint: string;
  speakModel: string;
  speakRecord: string;
  speakStop: string;
  speakRecording: string;
  speakYou: string;
  speakCompare: string;
  speakDenied: string;
  speakUnsupported: string;
  speakPrivacy: string;

  exploreTitle: string;
  searchPlaceholder: string;
  results: string;
  noResults: string;
  clear: string;

  reviewTitle: string;
  dueNow: string;
  showAnswer: string;
  gradeHard: string;
  gradeAgain: string;
  gradeKnown: string;
  seeContext: string;
  reviewDone: string;
  reviewDoneText: string;
  nextReview: string;
  reviewEmptyTitle: string;
  reviewEmptyText: string;
  goToFeed: string;
  calendarTitle: string;
  bucketNow: string;
  bucketToday: string;
  bucketTomorrow: string;
  bucketWeek: string;
  bucketLater: string;
  ladderTitle: string;
  ladderHint: string;

  notebookTitle: string;
  streak: string;
  todayGoal: string;
  weekTitle: string;
  statSeen: string;
  statSaved: string;
  statMastered: string;
  statQuiz: string;
  progressTitle: string;
  savedTitle: string;
  savedEmpty: string;
  remove: string;
  dueLabel: string;
  settingsTitle: string;
  setAutoNext: string;
  setTranslationFirst: string;
  setPron: string;
  deviceNotice: string;
  visioCta: string;

  launcherCount: string;
  launcherFree: string;
  launcherDue: string;
}

export const SHORTS_LABELS: Record<AppLang, ShortsLabels> = {
  fr: {
    tabFeed: 'Shorts',
    tabExplore: 'Explorer',
    tabReview: 'Réviser',
    tabNotebook: 'Carnet',
    close: 'Fermer',
    launch: 'Lancer les shorts',
    forYou: 'Pour vous',
    all: 'Tout',
    previous: 'Short précédent',
    next: 'Short suivant',
    themes: 'Thèmes',

    keyExpression: 'Expression clé',
    phaseListen: 'Écoutez',
    phaseAgain: 'Encore une fois, avec le sens',
    phaseYourTurn: 'À vous : répétez à voix haute',
    swipeHint: 'Glissez vers le haut',
    tapToStart: 'Touchez pour écouter',
    replay: 'Réécouter',
    showTranslation: 'Voir la traduction',
    save: 'Enregistrer',
    saved: 'Enregistré',
    savedToast: 'Ajouté au carnet · première révision dans 15 min',
    slow: 'Lent',
    speak: 'Parler',
    share: 'Partager',
    linkCopied: 'Lien copié',
    details: 'Détails',
    lessonLink: 'Voir la leçon complète',
    courseLink: 'Voir le programme du parcours',
    listenAgain: 'Écouter',
    listenSlow: 'Écouter lentement',
    meaning: 'Sens',
    usage: 'Quand l’employer',

    quizTitle: 'Vérification rapide',
    quizQuestion: 'Que veut dire cette phrase ?',
    quizRight: 'Exact',
    quizWrong: 'Pas encore. La réponse :',
    quizHear: 'Écouter la phrase',

    endTitle: 'Vous avez tout vu',
    endText: 'Les expressions enregistrées reviennent dans Réviser, au moment où vous alliez les oublier.',
    endRestart: 'Revoir depuis le début',
    endReview: 'Réviser maintenant',
    endCourse: 'Ouvrir les leçons du parcours',

    speakTitle: 'À vous de parler',
    speakHint: 'Écoutez le modèle, enregistrez-vous, puis comparez.',
    speakModel: 'Le modèle',
    speakRecord: 'S’enregistrer',
    speakStop: 'Arrêter',
    speakRecording: 'Enregistrement…',
    speakYou: 'Votre voix',
    speakCompare: 'Comparer les deux',
    speakDenied: 'Le micro n’est pas autorisé. Vous pouvez répéter à voix haute sans vous enregistrer.',
    speakUnsupported: 'L’enregistrement n’est pas disponible dans ce navigateur.',
    speakPrivacy: 'L’enregistrement reste sur votre appareil : il n’est envoyé nulle part.',

    exploreTitle: 'Explorer',
    searchPlaceholder: 'Chercher une expression',
    results: 'Expressions : {n}',
    noResults: 'Aucune expression ne correspond.',
    clear: 'Effacer la recherche',

    reviewTitle: 'Réviser',
    dueNow: 'À réviser maintenant : {n}',
    showAnswer: 'Voir la réponse',
    gradeHard: 'Difficile',
    gradeAgain: 'À revoir',
    gradeKnown: 'Je sais',
    seeContext: 'Voir le contexte',
    reviewDone: 'Session terminée',
    reviewDoneText: 'Rien d’autre à revoir pour l’instant.',
    nextReview: 'Prochaine révision',
    reviewEmptyTitle: 'Votre carnet est vide',
    reviewEmptyText:
      'Enregistrez une expression dans le fil : elle reviendra ici 15 minutes plus tard, puis à intervalles de plus en plus longs.',
    goToFeed: 'Aller au fil',
    calendarTitle: 'Mon calendrier',
    bucketNow: 'Maintenant',
    bucketToday: 'Aujourd’hui',
    bucketTomorrow: 'Demain',
    bucketWeek: 'Cette semaine',
    bucketLater: 'Plus tard',
    ladderTitle: 'Rythme des révisions',
    ladderHint: 'Chaque « Je sais » fait monter l’expression d’un cran. « Difficile » la ramène au premier.',

    notebookTitle: 'Mon carnet',
    streak: 'Jours de suite',
    todayGoal: 'Objectif du jour',
    weekTitle: 'Sept derniers jours',
    statSeen: 'Shorts vus',
    statSaved: 'Enregistrées',
    statMastered: 'Maîtrisées',
    statQuiz: 'Quiz réussis',
    progressTitle: 'Progression dans les shorts',
    savedTitle: 'Expressions enregistrées',
    savedEmpty: 'Rien d’enregistré pour l’instant.',
    remove: 'Retirer du carnet',
    dueLabel: 'À revoir',
    settingsTitle: 'Réglages de lecture',
    setAutoNext: 'Enchaîner automatiquement',
    setTranslationFirst: 'Traduction dès la première écoute',
    setPron: 'Prononciation approchée',
    deviceNotice: 'Carnet enregistré sur cet appareil. Il ne se synchronise pas encore avec votre compte.',
    visioCta: 'Parler avec un professeur',

    launcherCount: 'Expressions : {n}',
    launcherFree: 'Ouvert à tous, sans compte',
    launcherDue: 'À réviser : {n}',
  },
  en: {
    tabFeed: 'Shorts',
    tabExplore: 'Explore',
    tabReview: 'Review',
    tabNotebook: 'Notebook',
    close: 'Close',
    launch: 'Start the shorts',
    forYou: 'For you',
    all: 'All',
    previous: 'Previous short',
    next: 'Next short',
    themes: 'Themes',

    keyExpression: 'Key expression',
    phaseListen: 'Listen',
    phaseAgain: 'Once more, with the meaning',
    phaseYourTurn: 'Your turn: say it aloud',
    swipeHint: 'Swipe up',
    tapToStart: 'Tap to listen',
    replay: 'Play again',
    showTranslation: 'Show translation',
    save: 'Save',
    saved: 'Saved',
    savedToast: 'Added to your notebook · first review in 15 min',
    slow: 'Slow',
    speak: 'Speak',
    share: 'Share',
    linkCopied: 'Link copied',
    details: 'Details',
    lessonLink: 'Open the full lesson',
    courseLink: 'See the track programme',
    listenAgain: 'Listen',
    listenSlow: 'Listen slowly',
    meaning: 'Meaning',
    usage: 'When to use it',

    quizTitle: 'Quick check',
    quizQuestion: 'What does this sentence mean?',
    quizRight: 'Correct',
    quizWrong: 'Not yet. The answer:',
    quizHear: 'Hear the sentence',

    endTitle: 'You have seen them all',
    endText: 'Saved expressions come back in Review, right when you were about to forget them.',
    endRestart: 'Watch again from the start',
    endReview: 'Review now',
    endCourse: 'Open the track lessons',

    speakTitle: 'Your turn to speak',
    speakHint: 'Listen to the model, record yourself, then compare.',
    speakModel: 'The model',
    speakRecord: 'Record yourself',
    speakStop: 'Stop',
    speakRecording: 'Recording…',
    speakYou: 'Your voice',
    speakCompare: 'Compare both',
    speakDenied: 'The microphone is not allowed. You can still repeat aloud without recording.',
    speakUnsupported: 'Recording is not available in this browser.',
    speakPrivacy: 'The recording stays on your device: it is not sent anywhere.',

    exploreTitle: 'Explore',
    searchPlaceholder: 'Search an expression',
    results: 'Expressions: {n}',
    noResults: 'No expression matches.',
    clear: 'Clear search',

    reviewTitle: 'Review',
    dueNow: 'Due now: {n}',
    showAnswer: 'Show the answer',
    gradeHard: 'Hard',
    gradeAgain: 'Again',
    gradeKnown: 'I know it',
    seeContext: 'See the context',
    reviewDone: 'Session complete',
    reviewDoneText: 'Nothing else to review for now.',
    nextReview: 'Next review',
    reviewEmptyTitle: 'Your notebook is empty',
    reviewEmptyText:
      'Save an expression in the feed: it will come back here 15 minutes later, then at longer and longer intervals.',
    goToFeed: 'Go to the feed',
    calendarTitle: 'My calendar',
    bucketNow: 'Now',
    bucketToday: 'Today',
    bucketTomorrow: 'Tomorrow',
    bucketWeek: 'This week',
    bucketLater: 'Later',
    ladderTitle: 'Review rhythm',
    ladderHint: 'Each “I know it” moves the expression up one step. “Hard” sends it back to the first.',

    notebookTitle: 'My notebook',
    streak: 'Day streak',
    todayGoal: 'Daily goal',
    weekTitle: 'Last seven days',
    statSeen: 'Shorts watched',
    statSaved: 'Saved',
    statMastered: 'Mastered',
    statQuiz: 'Quizzes passed',
    progressTitle: 'Progress through the shorts',
    savedTitle: 'Saved expressions',
    savedEmpty: 'Nothing saved yet.',
    remove: 'Remove from notebook',
    dueLabel: 'Due',
    settingsTitle: 'Playback settings',
    setAutoNext: 'Move on automatically',
    setTranslationFirst: 'Translation from the first listen',
    setPron: 'Approximate pronunciation',
    deviceNotice: 'Notebook saved on this device. It does not sync with your account yet.',
    visioCta: 'Talk with a teacher',

    launcherCount: 'Expressions: {n}',
    launcherFree: 'Open to everyone, no account',
    launcherDue: 'Due for review: {n}',
  },
  ar: {
    tabFeed: 'المقاطع',
    tabExplore: 'استكشاف',
    tabReview: 'مراجعة',
    tabNotebook: 'الدفتر',
    close: 'إغلاق',
    launch: 'ابدأ المقاطع',
    forYou: 'لك',
    all: 'الكل',
    previous: 'المقطع السابق',
    next: 'المقطع التالي',
    themes: 'المواضيع',

    keyExpression: 'العبارة المفتاحية',
    phaseListen: 'استمع',
    phaseAgain: 'مرّة أخرى، مع المعنى',
    phaseYourTurn: 'دورك: كرِّر بصوت عالٍ',
    swipeHint: 'اسحب إلى الأعلى',
    tapToStart: 'المس للاستماع',
    replay: 'استمع من جديد',
    showTranslation: 'أظهر الترجمة',
    save: 'حفظ',
    saved: 'محفوظة',
    savedToast: 'أُضيفت إلى الدفتر · أول مراجعة بعد 15 دقيقة',
    slow: 'ببطء',
    speak: 'تكلّم',
    share: 'مشاركة',
    linkCopied: 'نُسخ الرابط',
    details: 'تفاصيل',
    lessonLink: 'افتح الدرس الكامل',
    courseLink: 'اطّلع على برنامج المسار',
    listenAgain: 'استمع',
    listenSlow: 'استمع ببطء',
    meaning: 'المعنى',
    usage: 'متى تُستعمل',

    quizTitle: 'تحقّق سريع',
    quizQuestion: 'ما معنى هذه الجملة؟',
    quizRight: 'صحيح',
    quizWrong: 'ليس بعد. الجواب:',
    quizHear: 'استمع إلى الجملة',

    endTitle: 'شاهدتَ كلّ المقاطع',
    endText: 'العبارات المحفوظة تعود في المراجعة، في اللحظة التي كدتَ تنساها فيها.',
    endRestart: 'أعد المشاهدة من البداية',
    endReview: 'راجِع الآن',
    endCourse: 'افتح دروس المسار',

    speakTitle: 'دورك في الكلام',
    speakHint: 'استمع إلى النموذج، سجِّل صوتك، ثم قارِن.',
    speakModel: 'النموذج',
    speakRecord: 'سجِّل صوتك',
    speakStop: 'إيقاف',
    speakRecording: '…جارٍ التسجيل',
    speakYou: 'صوتك',
    speakCompare: 'قارِن بينهما',
    speakDenied: 'الميكروفون غير مسموح به. يمكنك التكرار بصوت عالٍ دون تسجيل.',
    speakUnsupported: 'التسجيل غير متاح في هذا المتصفّح.',
    speakPrivacy: 'التسجيل يبقى على جهازك: لا يُرسل إلى أيّ مكان.',

    exploreTitle: 'استكشاف',
    searchPlaceholder: 'ابحث عن عبارة',
    results: 'العبارات: {n}',
    noResults: 'لا توجد عبارة مطابقة.',
    clear: 'امسح البحث',

    reviewTitle: 'مراجعة',
    dueNow: 'للمراجعة الآن: {n}',
    showAnswer: 'أظهر الجواب',
    gradeHard: 'صعبة',
    gradeAgain: 'أعِدها',
    gradeKnown: 'أعرفها',
    seeContext: 'شاهد السياق',
    reviewDone: 'انتهت الجلسة',
    reviewDoneText: 'لا شيء آخر للمراجعة الآن.',
    nextReview: 'المراجعة القادمة',
    reviewEmptyTitle: 'دفترك فارغ',
    reviewEmptyText:
      'احفظ عبارة من المقاطع: ستعود إلى هنا بعد 15 دقيقة، ثم على فترات تطول شيئًا فشيئًا.',
    goToFeed: 'اذهب إلى المقاطع',
    calendarTitle: 'تقويمي',
    bucketNow: 'الآن',
    bucketToday: 'اليوم',
    bucketTomorrow: 'غدًا',
    bucketWeek: 'هذا الأسبوع',
    bucketLater: 'لاحقًا',
    ladderTitle: 'إيقاع المراجعات',
    ladderHint: 'كلّ «أعرفها» ترفع العبارة درجة. «صعبة» تعيدها إلى الدرجة الأولى.',

    notebookTitle: 'دفتري',
    streak: 'أيام متتالية',
    todayGoal: 'هدف اليوم',
    weekTitle: 'آخر سبعة أيام',
    statSeen: 'مقاطع شوهدت',
    statSaved: 'محفوظة',
    statMastered: 'متقَنة',
    statQuiz: 'اختبارات ناجحة',
    progressTitle: 'التقدّم في المقاطع',
    savedTitle: 'العبارات المحفوظة',
    savedEmpty: 'لا شيء محفوظ حتى الآن.',
    remove: 'احذف من الدفتر',
    dueLabel: 'للمراجعة',
    settingsTitle: 'إعدادات التشغيل',
    setAutoNext: 'الانتقال تلقائيًّا',
    setTranslationFirst: 'الترجمة من الاستماع الأول',
    setPron: 'النطق التقريبي',
    deviceNotice: 'الدفتر محفوظ على هذا الجهاز. لا يتزامن بعدُ مع حسابك.',
    visioCta: 'تحدّث مع أستاذ',

    launcherCount: 'العبارات: {n}',
    launcherFree: 'مفتوح للجميع، دون حساب',
    launcherDue: 'للمراجعة: {n}',
  },
  ru: {
    tabFeed: 'Шортсы',
    tabExplore: 'Поиск',
    tabReview: 'Повторение',
    tabNotebook: 'Блокнот',
    close: 'Закрыть',
    launch: 'Смотреть шортсы',
    forYou: 'Для вас',
    all: 'Все',
    previous: 'Предыдущий шортс',
    next: 'Следующий шортс',
    themes: 'Темы',

    keyExpression: 'Ключевое выражение',
    phaseListen: 'Слушайте',
    phaseAgain: 'Ещё раз, с переводом',
    phaseYourTurn: 'Ваша очередь: повторите вслух',
    swipeHint: 'Смахните вверх',
    tapToStart: 'Нажмите, чтобы слушать',
    replay: 'Прослушать ещё раз',
    showTranslation: 'Показать перевод',
    save: 'Сохранить',
    saved: 'Сохранено',
    savedToast: 'Добавлено в блокнот · первое повторение через 15 мин',
    slow: 'Медленно',
    speak: 'Говорить',
    share: 'Поделиться',
    linkCopied: 'Ссылка скопирована',
    details: 'Подробнее',
    lessonLink: 'Открыть полный урок',
    courseLink: 'Программа курса',
    listenAgain: 'Слушать',
    listenSlow: 'Слушать медленно',
    meaning: 'Значение',
    usage: 'Когда так говорят',

    quizTitle: 'Быстрая проверка',
    quizQuestion: 'Что значит эта фраза?',
    quizRight: 'Верно',
    quizWrong: 'Пока нет. Правильный ответ:',
    quizHear: 'Прослушать фразу',

    endTitle: 'Вы посмотрели всё',
    endText: 'Сохранённые выражения вернутся в «Повторении» — как раз тогда, когда вы начнёте их забывать.',
    endRestart: 'Посмотреть сначала',
    endReview: 'Повторить сейчас',
    endCourse: 'Открыть уроки курса',

    speakTitle: 'Ваша очередь говорить',
    speakHint: 'Послушайте образец, запишите себя и сравните.',
    speakModel: 'Образец',
    speakRecord: 'Записать себя',
    speakStop: 'Стоп',
    speakRecording: 'Идёт запись…',
    speakYou: 'Ваш голос',
    speakCompare: 'Сравнить оба',
    speakDenied: 'Доступ к микрофону не разрешён. Можно просто повторять вслух, без записи.',
    speakUnsupported: 'Запись недоступна в этом браузере.',
    speakPrivacy: 'Запись остаётся на вашем устройстве и никуда не отправляется.',

    exploreTitle: 'Поиск',
    searchPlaceholder: 'Найти выражение',
    results: 'Выражений: {n}',
    noResults: 'Ничего не найдено.',
    clear: 'Очистить поиск',

    reviewTitle: 'Повторение',
    dueNow: 'К повторению сейчас: {n}',
    showAnswer: 'Показать ответ',
    gradeHard: 'Трудно',
    gradeAgain: 'Повторить',
    gradeKnown: 'Знаю',
    seeContext: 'Показать в шортсе',
    reviewDone: 'Сессия завершена',
    reviewDoneText: 'Пока повторять больше нечего.',
    nextReview: 'Следующее повторение',
    reviewEmptyTitle: 'Блокнот пуст',
    reviewEmptyText:
      'Сохраните выражение в ленте: оно вернётся сюда через 15 минут, а затем — со всё более длинными интервалами.',
    goToFeed: 'Перейти в ленту',
    calendarTitle: 'Мой календарь',
    bucketNow: 'Сейчас',
    bucketToday: 'Сегодня',
    bucketTomorrow: 'Завтра',
    bucketWeek: 'На этой неделе',
    bucketLater: 'Позже',
    ladderTitle: 'Ритм повторений',
    ladderHint: 'Каждое «Знаю» поднимает выражение на ступень. «Трудно» возвращает его на первую.',

    notebookTitle: 'Мой блокнот',
    streak: 'Дней подряд',
    todayGoal: 'Цель на день',
    weekTitle: 'Последние семь дней',
    statSeen: 'Просмотрено',
    statSaved: 'Сохранено',
    statMastered: 'Освоено',
    statQuiz: 'Верных ответов',
    progressTitle: 'Прогресс по шортсам',
    savedTitle: 'Сохранённые выражения',
    savedEmpty: 'Пока ничего не сохранено.',
    remove: 'Убрать из блокнота',
    dueLabel: 'Пора повторить',
    settingsTitle: 'Настройки воспроизведения',
    setAutoNext: 'Переходить автоматически',
    setTranslationFirst: 'Перевод с первого прослушивания',
    setPron: 'Примерное произношение',
    deviceNotice: 'Блокнот хранится на этом устройстве и пока не синхронизируется с аккаунтом.',
    visioCta: 'Поговорить с преподавателем',

    launcherCount: 'Выражений: {n}',
    launcherFree: 'Открыто для всех, без аккаунта',
    launcherDue: 'К повторению: {n}',
  },
};

/** Glisse un nombre dans un libellé : « À réviser : {n} ». */
export function fill(template: string, n: number | string): string {
  return template.replace('{n}', String(n));
}
