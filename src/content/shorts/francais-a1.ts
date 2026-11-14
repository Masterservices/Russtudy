import type { ShortDeckSource } from './types';

/**
 * Shorts du parcours Français A1, destiné aux russophones.
 *
 * Les narrations des leçons expliquent en continu : on n'y trouve pas
 * de phrase isolée à prélever. Chaque phrase est donc dite à part, par
 * la voix du cours inscrite dans `scripts/elearning/voix.json`.
 *
 * Aucune transcription en cyrillique : le parcours commence par la
 * prononciation, précisément pour que l'élève cesse de plaquer des sons
 * russes sur des lettres françaises. L'oreille d'abord.
 */
export const FRANCAIS_A1_SHORTS: ShortDeckSource = {
  courseSlug: 'francais-a1',
  targetLang: 'fr',
  uiLangs: ['ru'],
  level: 'A1',
  title: {
    ru: 'Французский A1 — с нуля',
    fr: 'Français A1 — débutant complet',
    en: 'French A1 — complete beginner',
    ar: 'الفرنسية A1 — مبتدئ تمامًا',
  },
  shorts: [
    {
      id: 'bonjour',
      theme: 'saluer',
      lines: [{ text: 'Bonjour !', translation: { ru: 'Здравствуйте!', en: 'Hello!' } }],
      key: 'Bonjour',
      keyMeaning: { ru: 'буквально: добрый день', en: 'literally: good day' },
      note: {
        ru: 'Говорят всем: продавцу, преподавателю, соседу. Конечная «r» почти не слышна.',
        en: 'Said to everyone: shopkeeper, teacher, neighbour. The final “r” is barely heard.',
      },
      bg: 'sorbonne',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'salut',
      theme: 'saluer',
      lines: [{ text: 'Salut !', translation: { ru: 'Привет!', en: 'Hi!' } }],
      key: 'Salut',
      keyMeaning: { ru: 'привет, а при прощании — «пока»', en: 'hi, and also “bye” when leaving' },
      note: {
        ru: 'Только друзьям и ровесникам. Конечная «t» не произносится.',
        en: 'Only for friends and people your age. The final “t” is silent.',
      },
      bg: 'sourire',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'comment-allez-vous',
      theme: 'converser',
      lines: [
        { text: 'Comment allez-vous ?', translation: { ru: 'Как вы поживаете?', en: 'How are you?' } },
      ],
      key: 'allez-vous',
      keyMeaning: { ru: 'буквально: идёте вы', en: 'literally: are you going' },
      note: {
        ru: 'Вежливая форма, на «вы». Между друзьями: Ça va ?',
        en: 'The polite form, with vous. Among friends: Ça va ?',
      },
      bg: 'poignee',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'ca-va-bien',
      theme: 'converser',
      lines: [
        {
          text: 'Ça va bien, merci. Et vous ?',
          translation: { ru: 'Хорошо, спасибо. А вы?', en: 'I’m fine, thanks. And you?' },
        },
      ],
      key: 'Et vous',
      keyMeaning: { ru: 'а вы?', en: 'and you?' },
      note: {
        ru: 'Ответьте коротко и верните вопрос: так строится французский диалог.',
        en: 'Answer briefly and return the question: that is how a French dialogue moves.',
      },
      bg: 'cafe',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'je-m-appelle',
      theme: 'se-presenter',
      lines: [
        { text: 'Je m’appelle Paul.', translation: { ru: 'Меня зовут Поль.', en: 'My name is Paul.' } },
      ],
      key: 'Je m’appelle',
      keyMeaning: { ru: 'буквально: я себя называю', en: 'literally: I call myself' },
      note: {
        ru: 'Одной фразы достаточно. Вопрос: Comment vous appelez-vous ?',
        en: 'One sentence is enough. The question: Comment vous appelez-vous ?',
      },
      bg: 'equipe',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'enchante',
      theme: 'se-presenter',
      lines: [{ text: 'Enchanté !', translation: { ru: 'Очень приятно!', en: 'Nice to meet you!' } }],
      key: 'Enchanté',
      keyMeaning: { ru: 'буквально: очарован', en: 'literally: enchanted' },
      note: {
        ru: 'Женщина пишет enchantée — на слух это то же самое слово.',
        en: 'A woman writes enchantée; it sounds exactly the same.',
      },
      bg: 'poignee',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'merci-beaucoup',
      theme: 'politesse',
      lines: [
        { text: 'Merci beaucoup !', translation: { ru: 'Большое спасибо!', en: 'Thank you very much!' } },
      ],
      key: 'beaucoup',
      keyMeaning: { ru: 'очень, много', en: 'a lot' },
      note: {
        ru: 'Просто merci всегда уместно. Beaucoup усиливает благодарность.',
        en: 'Plain merci always works. Beaucoup makes the thanks stronger.',
      },
      bg: 'bibliotheque',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'de-rien',
      theme: 'politesse',
      lines: [{ text: 'De rien.', translation: { ru: 'Не за что.', en: 'You’re welcome.' } }],
      key: 'De rien',
      keyMeaning: { ru: 'буквально: из ничего', en: 'literally: of nothing' },
      note: {
        ru: 'Обычный ответ на merci. Более вежливо: je vous en prie.',
        en: 'The everyday answer to merci. More formal: je vous en prie.',
      },
      bg: 'sourire',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'au-revoir',
      theme: 'saluer',
      lines: [
        {
          text: 'Au revoir, bonne journée !',
          translation: { ru: 'До свидания, хорошего дня!', en: 'Goodbye, have a nice day!' },
        },
      ],
      key: 'bonne journée',
      keyMeaning: { ru: 'хорошего дня', en: 'have a good day' },
      note: {
        ru: 'Вечером говорят: bonne soirée.',
        en: 'In the evening, say: bonne soirée.',
      },
      bg: 'envol',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'dialogue-rencontre',
      theme: 'dialogue',
      lines: [
        { text: 'Bonjour !', translation: { ru: 'Здравствуйте!', en: 'Hello!' } },
        { text: 'Comment allez-vous ?', translation: { ru: 'Как вы поживаете?', en: 'How are you?' } },
        {
          text: 'Ça va bien, merci. Et vous ?',
          translation: { ru: 'Хорошо, спасибо. А вы?', en: 'I’m fine, thanks. And you?' },
        },
        { text: 'Je m’appelle Paul.', translation: { ru: 'Меня зовут Поль.', en: 'My name is Paul.' } },
        { text: 'Enchanté !', translation: { ru: 'Очень приятно!', en: 'Nice to meet you!' } },
        {
          text: 'Au revoir, bonne journée !',
          translation: { ru: 'До свидания, хорошего дня!', en: 'Goodbye, have a nice day!' },
        },
      ],
      key: 'Je m’appelle',
      keyMeaning: { ru: 'меня зовут', en: 'my name is' },
      note: {
        ru: 'Первый разговор от начала до конца. Проговорите обе роли вслух.',
        en: 'A first conversation, start to finish. Say both parts aloud.',
      },
      bg: 'sorbonne',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'bonsoir',
      theme: 'saluer',
      lines: [{ text: 'Bonsoir !', translation: { ru: 'Добрый вечер!', en: 'Good evening!' } }],
      key: 'Bonsoir',
      keyMeaning: { ru: 'буквально: добрый вечер', en: 'literally: good evening' },
      note: {
        ru: 'Вечером заменяет bonjour — и при встрече, и при прощании.',
        en: 'Replaces bonjour in the evening, both when arriving and when leaving.',
      },
      bg: 'couchant',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'je-viens-de',
      theme: 'se-presenter',
      lines: [
        { text: 'Je viens de Moscou.', translation: { ru: 'Я из Москвы.', en: 'I come from Moscow.' } },
      ],
      key: 'Je viens de',
      keyMeaning: { ru: 'я родом из…', en: 'I come from…' },
      note: {
        ru: 'Je viens de + город. Перед гласной: d’Odessa.',
        en: 'Je viens de + city. Before a vowel: d’Odessa.',
      },
      bg: 'envol',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'je-suis-etudiant',
      theme: 'se-presenter',
      lines: [{ text: 'Je suis étudiant.', translation: { ru: 'Я студент.', en: 'I am a student.' } }],
      key: 'Je suis',
      keyMeaning: { ru: 'я есть — глагол обязателен', en: 'I am — the verb is required' },
      note: {
        ru: 'В русском глагола нет, во французском он нужен. Женщина говорит: étudiante.',
        en: 'Russian drops the verb, French needs it. A woman says: étudiante.',
      },
      bg: 'classe',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'excusez-moi',
      theme: 'politesse',
      lines: [{ text: 'Excusez-moi.', translation: { ru: 'Извините.', en: 'Excuse me.' } }],
      key: 'Excusez-moi',
      keyMeaning: { ru: 'извините меня', en: 'excuse me' },
      note: {
        ru: 'Чтобы обратиться к незнакомому человеку на улице или в метро.',
        en: 'To approach a stranger in the street or the metro.',
      },
      bg: 'sorbonne',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 's-il-vous-plait',
      theme: 'politesse',
      lines: [{ text: 'S’il vous plaît.', translation: { ru: 'Пожалуйста.', en: 'Please.' } }],
      key: 'S’il vous plaît',
      keyMeaning: { ru: 'буквально: если вам угодно', en: 'literally: if it pleases you' },
      note: {
        ru: 'Только для просьбы. На «спасибо» отвечают: de rien.',
        en: 'Only for asking. To answer “thank you”, say: de rien.',
      },
      bg: 'bibliotheque',
      lesson: 'saluer-se-presenter',
    },
    {
      id: 'je-ne-comprends-pas',
      theme: 'comprendre',
      lines: [
        { text: 'Je ne comprends pas.', translation: { ru: 'Я не понимаю.', en: 'I don’t understand.' } },
      ],
      key: 'ne comprends pas',
      keyMeaning: { ru: 'отрицание: ne + глагол + pas', en: 'negation: ne + verb + pas' },
      note: {
        ru: 'Отрицание окружает глагол с двух сторон: ne … pas.',
        en: 'The negation wraps the verb on both sides: ne … pas.',
      },
      bg: 'classe',
    },
    {
      id: 'pouvez-vous-repeter',
      theme: 'comprendre',
      lines: [
        {
          text: 'Pouvez-vous répéter, s’il vous plaît ?',
          translation: { ru: 'Повторите, пожалуйста.', en: 'Could you repeat, please?' },
        },
      ],
      key: 'Pouvez-vous',
      keyMeaning: { ru: 'можете ли вы…', en: 'can you…' },
      note: {
        ru: 'Pouvez-vous + инфинитив — вежливая просьба на все случаи.',
        en: 'Pouvez-vous + infinitive: a polite request for every occasion.',
      },
      bg: 'equipe',
    },
    {
      id: 'je-voudrais-un-cafe',
      theme: 'cafe',
      lines: [
        {
          text: 'Je voudrais un café, s’il vous plaît.',
          translation: { ru: 'Я бы хотел кофе, пожалуйста.', en: 'I would like a coffee, please.' },
        },
      ],
      key: 'Je voudrais',
      keyMeaning: { ru: 'я бы хотел, я бы хотела', en: 'I would like' },
      note: {
        ru: 'Вежливее, чем je veux. Подходит для любого заказа.',
        en: 'More polite than je veux. Works for any order.',
      },
      bg: 'cafe',
    },
    {
      id: 'c-est-combien',
      theme: 'cafe',
      lines: [
        { text: 'C’est combien ?', translation: { ru: 'Сколько это стоит?', en: 'How much is it?' } },
      ],
      key: 'combien',
      keyMeaning: { ru: 'сколько', en: 'how much' },
      note: {
        ru: 'Короткий разговорный вопрос о цене — на рынке и в кафе.',
        en: 'The short everyday way to ask a price, at the market or the café.',
      },
      bg: 'marche',
    },
    {
      id: 'l-addition',
      theme: 'cafe',
      lines: [
        {
          text: 'L’addition, s’il vous plaît.',
          translation: { ru: 'Счёт, пожалуйста.', en: 'The bill, please.' },
        },
      ],
      key: 'L’addition',
      keyMeaning: { ru: 'счёт в кафе или ресторане', en: 'the bill' },
      note: {
        ru: 'Во Франции счёт обычно приносят, только когда вы его попросите.',
        en: 'In France the bill usually comes only once you ask for it.',
      },
      bg: 'calcul',
    },
    {
      id: 'dialogue-cafe',
      theme: 'dialogue',
      lines: [
        { text: 'Bonsoir !', translation: { ru: 'Добрый вечер!', en: 'Good evening!' } },
        {
          text: 'Je voudrais un café, s’il vous plaît.',
          translation: { ru: 'Я бы хотел кофе, пожалуйста.', en: 'I would like a coffee, please.' },
        },
        { text: 'C’est combien ?', translation: { ru: 'Сколько это стоит?', en: 'How much is it?' } },
        { text: 'Merci beaucoup !', translation: { ru: 'Большое спасибо!', en: 'Thank you very much!' } },
        {
          text: 'L’addition, s’il vous plaît.',
          translation: { ru: 'Счёт, пожалуйста.', en: 'The bill, please.' },
        },
      ],
      key: 'Je voudrais',
      keyMeaning: { ru: 'я бы хотел, я бы хотела', en: 'I would like' },
      note: {
        ru: 'Всё, что нужно сказать в кафе: от приветствия до счёта.',
        en: 'Everything you need to say at a café, from the greeting to the bill.',
      },
      bg: 'cafe',
    },
  ],
};
