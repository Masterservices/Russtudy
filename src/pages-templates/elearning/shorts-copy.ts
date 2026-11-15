import type { Lang } from '../../i18n';

/**
 * Textes des pages de shorts.
 *
 * Séparés des libellés de l'interface : ceux-ci sont lus par un moteur
 * de recherche autant que par un élève, et ne partent jamais dans le
 * navigateur — ils restent dans le rendu serveur.
 *
 * Le nom de la langue enseignée ne se glisse pas dans une phrase toute
 * faite : « de russe », « Russian », « по русскому » ne se construisent
 * pas de la même façon. Chaque langue enseignée apporte donc ses deux
 * tournures, et la phrase les reçoit telles quelles.
 */

/** Tournures propres à la langue enseignée, par langue d'interface. */
const TAUGHT: Record<string, Record<Lang, { shorts: string; learn: string }>> = {
  ru: {
    fr: { shorts: 'Shorts de russe', learn: 'Apprenez le russe' },
    en: { shorts: 'Russian shorts', learn: 'Learn Russian' },
    ar: { shorts: 'مقاطع الروسية', learn: 'تعلّم الروسية' },
    ru: { shorts: 'Шортсы по русскому', learn: 'Учите русский' },
  },
  fr: {
    fr: { shorts: 'Shorts de français', learn: 'Apprenez le français' },
    en: { shorts: 'French shorts', learn: 'Learn French' },
    ar: { shorts: 'مقاطع الفرنسية', learn: 'تعلّم الفرنسية' },
    ru: { shorts: 'Шортсы по французскому', learn: 'Учите французский' },
  },
};

export interface ShortsCopy {
  /** Segment « shorts » dans le fil d'Ariane et le menu. */
  crumb: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  listTitle: string;
  listIntro: string;
  faqTitle: string;
  faq: { question: string; answer: string }[];
  hub: {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    decksTitle: string;
    deckCta: string;
    count: string;
  };
  /** Encart d'entrée, sur le catalogue et la page d'un parcours. */
  entry: { kicker: string; title: string; text: string; cta: string };
}

const COPY: Record<Lang, ShortsCopy> = {
  fr: {
    crumb: 'Shorts',
    h1: '{shorts} : une expression par écran',
    metaTitle: '{shorts} {level} : une expression par écran — RusStudy',
    metaDescription:
      '{learn} en faisant défiler des shorts : une phrase par écran, la voix du parcours, la traduction à la deuxième écoute et des révisions espacées. Gratuit, sans compte.',
    intro:
      'Faites défiler, écoutez, répétez. Chaque écran dit une phrase utile avec la voix du parcours, montre son sens à la deuxième écoute, puis l’envoie dans votre carnet pour la réviser au bon moment.',
    stepsTitle: 'Comment ça marche',
    steps: [
      { title: 'Écoutez', text: 'La phrase est dite par la voix du parcours et s’allume mot après mot.' },
      { title: 'Comprenez', text: 'À la deuxième écoute, la traduction et l’expression clé s’affichent.' },
      {
        title: 'Retenez',
        text: 'Enregistrez l’expression : elle revient en carte, à intervalles de plus en plus longs.',
      },
      { title: 'Parlez', text: 'Répétez à voix haute, enregistrez-vous et comparez avec le modèle.' },
    ],
    listTitle: 'Toutes les expressions du fil',
    listIntro: 'Classées par situation. Expressions : {n}.',
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        question: 'Qu’est-ce qu’un short de langue ?',
        answer:
          'Un écran, une phrase. Vous l’entendez dite par la voix du parcours, vous la voyez s’allumer mot après mot, puis sa traduction et son expression clé apparaissent. On passe au suivant d’un geste du pouce, comme dans un fil de vidéos courtes.',
      },
      {
        question: 'Faut-il créer un compte ?',
        answer:
          'Non. Les shorts sont ouverts à tous. Votre carnet et votre progression sont enregistrés dans le navigateur de cet appareil ; ils ne se synchronisent pas encore avec un compte.',
      },
      {
        question: 'Comment fonctionne la révision ?',
        answer:
          'Une expression enregistrée revient en carte 15 minutes plus tard, puis après 1 jour, 3 jours, 1 semaine, 1 mois, 3 mois et 5 mois. « Je sais » la fait passer au délai suivant, « Difficile » la ramène au premier.',
      },
      {
        question: 'Quelle voix entend-on ?',
        answer:
          'Celle des leçons du parcours : une seule voix par cours, dans la langue enseignée, pour n’avoir qu’un modèle à imiter.',
      },
      {
        question: 'Les shorts remplacent-ils les leçons ?',
        answer:
          'Non. Un short fait entendre et retenir une expression ; la leçon explique pourquoi on la dit ainsi. Chaque short renvoie à la leçon du parcours qui l’enseigne.',
      },
    ],
    hub: {
      h1: 'Shorts de langue : apprendre en faisant défiler',
      metaTitle: 'Shorts de langue : une expression par écran — RusStudy',
      metaDescription:
        'Des shorts pour apprendre le russe ou le français : une phrase par écran, dite par la voix du parcours, sa traduction, puis des révisions espacées. Gratuit, sans compte.',
      intro:
        'Le geste d’un fil de vidéos courtes, mis au service d’une langue : une phrase par écran, entendue, comprise, puis révisée au moment où on allait l’oublier.',
      decksTitle: 'Choisissez votre langue',
      deckCta: 'Ouvrir les shorts',
      count: 'Expressions : {n}',
    },
    entry: {
      kicker: 'Nouveau',
      title: 'Apprendre en shorts',
      text: 'Une expression par écran, à faire défiler comme un fil de vidéos courtes — puis à réviser au bon moment.',
      cta: 'Ouvrir les shorts',
    },
  },
  en: {
    crumb: 'Shorts',
    h1: '{shorts}: one expression per screen',
    metaTitle: '{shorts} {level}: one expression per screen — RusStudy',
    metaDescription:
      '{learn} by scrolling shorts: one sentence per screen, the course voice, the translation on the second listen and spaced reviews. Free, no account.',
    intro:
      'Scroll, listen, repeat. Each screen says one useful sentence in the course voice, shows its meaning on the second listen, then sends it to your notebook to review at the right time.',
    stepsTitle: 'How it works',
    steps: [
      { title: 'Listen', text: 'The sentence is spoken in the course voice and lights up word by word.' },
      { title: 'Understand', text: 'On the second listen, the translation and the key expression appear.' },
      { title: 'Remember', text: 'Save the expression: it comes back as a card, at longer and longer intervals.' },
      { title: 'Speak', text: 'Repeat aloud, record yourself and compare with the model.' },
    ],
    listTitle: 'Every expression in the feed',
    listIntro: 'Grouped by situation. Expressions: {n}.',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'What is a language short?',
        answer:
          'One screen, one sentence. You hear it in the course voice, watch it light up word by word, then its translation and key expression appear. A flick of the thumb takes you to the next one, as in a feed of short videos.',
      },
      {
        question: 'Do I need an account?',
        answer:
          'No. The shorts are open to everyone. Your notebook and progress are saved in the browser of this device; they do not sync with an account yet.',
      },
      {
        question: 'How does the review work?',
        answer:
          'A saved expression comes back as a card 15 minutes later, then after 1 day, 3 days, 1 week, 1 month, 3 months and 5 months. “I know it” moves it to the next interval, “Hard” sends it back to the first.',
      },
      {
        question: 'Whose voice do I hear?',
        answer:
          'The one from the course lessons: a single voice per course, in the language being taught, so there is only one model to imitate.',
      },
      {
        question: 'Do the shorts replace the lessons?',
        answer:
          'No. A short makes you hear and remember an expression; the lesson explains why it is said that way. Each short links to the course lesson that teaches it.',
      },
    ],
    hub: {
      h1: 'Language shorts: learn by scrolling',
      metaTitle: 'Language shorts: one expression per screen — RusStudy',
      metaDescription:
        'Shorts to learn Russian or French: one sentence per screen, spoken in the course voice, its translation, then spaced reviews. Free, no account.',
      intro:
        'The gesture of a short-video feed, put to work for a language: one sentence per screen, heard, understood, then reviewed right when you were about to forget it.',
      decksTitle: 'Choose your language',
      deckCta: 'Open the shorts',
      count: 'Expressions: {n}',
    },
    entry: {
      kicker: 'New',
      title: 'Learn with shorts',
      text: 'One expression per screen, scrolled like a feed of short videos, then reviewed at the right time.',
      cta: 'Open the shorts',
    },
  },
  ar: {
    crumb: 'المقاطع',
    h1: '{shorts}: عبارة واحدة في كل شاشة',
    metaTitle: '{shorts} {level}: عبارة واحدة في كل شاشة — RusStudy',
    metaDescription:
      '{learn} بتمرير المقاطع القصيرة: جملة في كل شاشة، بصوت المسار، مع الترجمة عند الاستماع الثاني ومراجعات متباعدة. مجانًا ودون حساب.',
    intro:
      'مرِّر، استمع، كرِّر. كل شاشة تقول جملة مفيدة بصوت المسار، تُظهر معناها عند الاستماع الثاني، ثم ترسلها إلى دفترك لتراجعها في الوقت المناسب.',
    stepsTitle: 'كيف تعمل',
    steps: [
      { title: 'استمع', text: 'تُقال الجملة بصوت المسار وتضيء كلمةً كلمة.' },
      { title: 'افهم', text: 'عند الاستماع الثاني تظهر الترجمة والعبارة المفتاحية.' },
      { title: 'احفظ', text: 'احفظ العبارة: تعود إليك في بطاقة، على فترات تطول شيئًا فشيئًا.' },
      { title: 'تكلّم', text: 'كرِّر بصوت عالٍ، سجِّل صوتك وقارِنه بالنموذج.' },
    ],
    listTitle: 'كل عبارات المقاطع',
    listIntro: 'مرتّبة حسب المواقف. عدد العبارات: {n}.',
    faqTitle: 'أسئلة شائعة',
    faq: [
      {
        question: 'ما هو المقطع اللغوي القصير؟',
        answer:
          'شاشة واحدة وجملة واحدة. تسمعها بصوت المسار، تراها تضيء كلمةً كلمة، ثم تظهر ترجمتها وعبارتها المفتاحية. تنتقل إلى التالي بحركة إبهام، كما في المقاطع القصيرة.',
      },
      {
        question: 'هل أحتاج إلى حساب؟',
        answer:
          'لا. المقاطع مفتوحة للجميع. دفترك وتقدّمك محفوظان في متصفّح هذا الجهاز، ولا يتزامنان بعدُ مع حساب.',
      },
      {
        question: 'كيف تعمل المراجعة؟',
        answer:
          'العبارة المحفوظة تعود في بطاقة بعد 15 دقيقة، ثم بعد يوم، 3 أيام، أسبوع، شهر، 3 أشهر و5 أشهر. «أعرفها» تنقلها إلى الفترة التالية، و«صعبة» تعيدها إلى الأولى.',
      },
      {
        question: 'أيّ صوت أسمع؟',
        answer: 'صوت دروس المسار نفسه: صوت واحد لكل مسار، باللغة المدرَّسة، ليكون أمامك نموذج واحد تقلّده.',
      },
      {
        question: 'هل تُغني المقاطع عن الدروس؟',
        answer:
          'لا. المقطع يُسمعك العبارة ويثبّتها؛ والدرس يشرح لماذا تُقال هكذا. كل مقطع يحيل إلى درس المسار الذي يعلّمها.',
      },
    ],
    hub: {
      h1: 'مقاطع لغوية قصيرة: تعلَّم وأنت تمرِّر',
      metaTitle: 'مقاطع لغوية قصيرة: عبارة في كل شاشة — RusStudy',
      metaDescription:
        'مقاطع قصيرة لتعلّم الروسية أو الفرنسية: جملة في كل شاشة بصوت المسار، مع ترجمتها ثم مراجعات متباعدة. مجانًا ودون حساب.',
      intro:
        'حركة تمرير المقاطع القصيرة، في خدمة تعلّم اللغة: جملة في كل شاشة، تُسمع وتُفهم، ثم تُراجَع في اللحظة التي كدتَ تنساها فيها.',
      decksTitle: 'اختر لغتك',
      deckCta: 'افتح المقاطع',
      count: 'العبارات: {n}',
    },
    entry: {
      kicker: 'جديد',
      title: 'تعلَّم بالمقاطع القصيرة',
      text: 'عبارة في كل شاشة، تمرِّرها كالمقاطع القصيرة، ثم تراجعها في الوقت المناسب.',
      cta: 'افتح المقاطع',
    },
  },
  ru: {
    crumb: 'Шортсы',
    h1: '{shorts}: одно выражение на экран',
    metaTitle: '{shorts} {level}: одно выражение на экран — RusStudy',
    metaDescription:
      '{learn}, листая шортсы: одна фраза на экран, голос курса, перевод при втором прослушивании и интервальные повторения. Бесплатно, без аккаунта.',
    intro:
      'Листайте, слушайте, повторяйте. Каждый экран произносит одну полезную фразу голосом курса, показывает её значение при втором прослушивании и отправляет в блокнот, чтобы повторить в нужный момент.',
    stepsTitle: 'Как это работает',
    steps: [
      { title: 'Слушайте', text: 'Фразу произносит голос курса, и она загорается слово за словом.' },
      { title: 'Понимайте', text: 'При втором прослушивании появляются перевод и ключевое выражение.' },
      {
        title: 'Запоминайте',
        text: 'Сохраните выражение: оно вернётся карточкой, со всё более длинными интервалами.',
      },
      { title: 'Говорите', text: 'Повторите вслух, запишите себя и сравните с образцом.' },
    ],
    listTitle: 'Все выражения ленты',
    listIntro: 'По ситуациям. Выражений: {n}.',
    faqTitle: 'Частые вопросы',
    faq: [
      {
        question: 'Что такое языковой шортс?',
        answer:
          'Один экран, одна фраза. Вы слышите её голосом курса, видите, как она загорается слово за словом, затем появляются перевод и ключевое выражение. К следующей фразе — одним движением пальца, как в ленте коротких видео.',
      },
      {
        question: 'Нужен ли аккаунт?',
        answer:
          'Нет. Шортсы открыты для всех. Блокнот и прогресс хранятся в браузере этого устройства и пока не синхронизируются с аккаунтом.',
      },
      {
        question: 'Как устроено повторение?',
        answer:
          'Сохранённое выражение возвращается карточкой через 15 минут, затем через 1 день, 3 дня, неделю, месяц, 3 месяца и 5 месяцев. «Знаю» переводит его на следующий интервал, «Трудно» возвращает на первый.',
      },
      {
        question: 'Чей голос звучит?',
        answer:
          'Тот же, что в уроках курса: один голос на курс, на изучаемом языке, чтобы у вас был один образец для подражания.',
      },
      {
        question: 'Заменяют ли шортсы уроки?',
        answer:
          'Нет. Шортс помогает услышать и запомнить выражение, а урок объясняет, почему так говорят. Каждый шортс ведёт к уроку курса, где это выражение разбирается.',
      },
    ],
    hub: {
      h1: 'Языковые шортсы: учитесь, листая ленту',
      metaTitle: 'Языковые шортсы: одно выражение на экран — RusStudy',
      metaDescription:
        'Шортсы для изучения русского и французского: одна фраза на экран, голос курса, перевод и интервальные повторения. Бесплатно, без аккаунта.',
      intro:
        'Привычный жест ленты коротких видео — на службе языка: одна фраза на экран, услышанная, понятая и повторённая как раз тогда, когда вы начали её забывать.',
      decksTitle: 'Выберите язык',
      deckCta: 'Открыть шортсы',
      count: 'Выражений: {n}',
    },
    entry: {
      kicker: 'Новое',
      title: 'Учиться по шортсам',
      text: 'Одно выражение на экран: листайте, как ленту коротких видео, и повторяйте в нужный момент.',
      cta: 'Открыть шортсы',
    },
  },
};

function fillAll(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (whole, name: string) => values[name] ?? whole);
}

/** Textes généraux : menu, pôle des shorts, encarts d'entrée. */
export function shortsCopy(lang: Lang): ShortsCopy {
  return COPY[lang];
}

/**
 * Textes de la page de shorts d'un parcours, la langue enseignée et le
 * niveau déjà glissés aux bons endroits.
 */
export function deckCopy(
  lang: Lang,
  targetLang: string,
  level: string,
): Pick<ShortsCopy, 'h1' | 'metaTitle' | 'metaDescription' | 'intro'> & { name: string } {
  const copy = COPY[lang];
  const taught = (TAUGHT[targetLang] ?? TAUGHT.ru)[lang];
  const values = { shorts: taught.shorts, learn: taught.learn, level };

  return {
    name: taught.shorts,
    h1: fillAll(copy.h1, values),
    metaTitle: fillAll(copy.metaTitle, values),
    metaDescription: fillAll(copy.metaDescription, values),
    intro: copy.intro,
  };
}
