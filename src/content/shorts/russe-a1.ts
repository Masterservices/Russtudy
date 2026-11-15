import type { ShortDeckSource } from './types';

/**
 * Shorts du parcours Russe A1.
 *
 * Chaque phrase est prélevée dans la narration d'une leçon du parcours :
 * c'est donc la voix du cours, et l'expression renvoie à la leçon qui
 * l'explique. Les prononciations approchées sont celles des
 * diapositives, pour qu'un élève ne lise pas deux transcriptions du
 * même mot.
 *
 * L'ordre est celui d'une première rencontre : saluer, prendre des
 * nouvelles, donner son prénom, remercier, partir — puis le dialogue
 * qui réunit le tout.
 */
export const RUSSE_A1_SHORTS: ShortDeckSource = {
  courseSlug: 'russe-a1',
  targetLang: 'ru',
  uiLangs: ['fr', 'ar'],
  level: 'A1',
  title: {
    fr: 'Russe A1 — débutant complet',
    ar: 'الروسية A1 — مبتدئ تمامًا',
    en: 'Russian A1 — complete beginner',
    ru: 'Русский A1 — с нуля',
  },
  shorts: [
    {
      id: 'zdravstvuyte',
      theme: 'saluer',
      lines: [
        { text: 'Здравствуйте!', translation: { fr: 'Bonjour !', ar: 'مرحبًا!', en: 'Hello!' } },
      ],
      key: 'Здравствуйте',
      keyMeaning: { fr: 'le bonjour poli', ar: 'التحية الرسمية', en: 'the formal hello' },
      note: {
        fr: 'À un inconnu, un adulte, un professeur. Le premier « в » ne se prononce pas.',
        ar: 'تُقال للغريب وللأكبر سنًّا وللأستاذ. حرف «в» الأول لا يُنطق.',
        en: 'For a stranger, an adult, a teacher. The first “в” is silent.',
      },
      pron: 'zdrastvouïtié',
      bg: 'saint-basile',
      lesson: 'salutations',
    },
    {
      id: 'privet',
      theme: 'saluer',
      lines: [
        { text: 'Привет, Анна!', translation: { fr: 'Salut, Anna !', ar: 'أهلًا يا أنّا!', en: 'Hi, Anna!' } },
      ],
      key: 'Привет',
      keyMeaning: { fr: 'salut, entre amis', ar: 'أهلًا، بين الأصدقاء', en: 'hi, among friends' },
      note: {
        fr: 'Réservé aux amis et aux personnes de votre âge. Jamais à un professeur.',
        ar: 'للأصدقاء ومن هم في سنّك فقط. لا تُقال أبدًا لأستاذ.',
        en: 'Only for friends and people your age. Never to a teacher.',
      },
      pron: 'priviet, Anna',
      bg: 'sourire',
      lesson: 'salutations',
    },
    {
      id: 'kak-dela',
      theme: 'converser',
      lines: [
        { text: 'Как дела?', translation: { fr: 'Comment ça va ?', ar: 'كيف الحال؟', en: 'How are things?' } },
      ],
      key: 'Как дела',
      keyMeaning: {
        fr: 'mot à mot : comment vont les affaires',
        ar: 'حرفيًّا: كيف الأمور',
        en: 'literally: how are affairs',
      },
      note: {
        fr: 'La question qui suit le bonjour. Version polie : Как ваши дела?',
        ar: 'السؤال الذي يأتي بعد التحية. الصيغة المهذّبة: Как ваши дела?',
        en: 'The question right after hello. Polite version: Как ваши дела?',
      },
      pron: 'kak diéla',
      bg: 'etudiantes',
      lesson: 'salutations',
    },
    {
      id: 'khorosho-spasibo',
      theme: 'converser',
      lines: [
        { text: 'Хорошо, спасибо.', translation: { fr: 'Bien, merci.', ar: 'بخير، شكرًا.', en: 'Fine, thanks.' } },
      ],
      key: 'Хорошо',
      keyMeaning: { fr: 'bien', ar: 'جيّد، بخير', en: 'good, fine' },
      note: {
        fr: 'La réponse complète et naturelle à Как дела?',
        ar: 'الجواب الكامل والطبيعي على Как дела?',
        en: 'The full, natural answer to Как дела?',
      },
      pron: 'kharacho, spassiba',
      bg: 'cafe',
      lesson: 'salutations',
    },
    {
      id: 'kak-vas-zovut',
      theme: 'se-presenter',
      lines: [
        {
          text: 'Как вас зовут?',
          translation: { fr: 'Comment vous appelez-vous ?', ar: 'ما اسمكم؟', en: 'What is your name?' },
        },
      ],
      key: 'вас',
      keyMeaning: { fr: 'vous, la forme polie', ar: 'أنتم، صيغة الاحترام', en: 'you, the polite form' },
      note: {
        fr: 'Вас va avec Здравствуйте. Entre amis : Как тебя зовут?',
        ar: 'Вас تُستعمل مع Здравствуйте. بين الأصدقاء: Как тебя зовут?',
        en: 'Вас goes with Здравствуйте. Among friends: Как тебя зовут?',
      },
      pron: 'kak vaz zavout',
      bg: 'poignee',
      lesson: 'salutations',
    },
    {
      id: 'menya-zovut',
      theme: 'se-presenter',
      lines: [
        {
          text: 'Меня зовут Анна.',
          translation: { fr: 'Je m’appelle Anna.', ar: 'اسمي أنّا.', en: 'My name is Anna.' },
        },
      ],
      key: 'Меня зовут',
      keyMeaning: { fr: 'mot à mot : on m’appelle', ar: 'حرفيًّا: يُنادونني', en: 'literally: they call me' },
      note: {
        fr: 'Apprenez la formule comme un seul bloc, puis ajoutez votre prénom.',
        ar: 'احفظ العبارة ككتلة واحدة ثم أضف اسمك.',
        en: 'Learn the formula as one block, then add your first name.',
      },
      pron: 'miénia zavout Anna',
      bg: 'sourire',
      lesson: 'salutations',
    },
    {
      id: 'ochen-priyatno',
      theme: 'se-presenter',
      lines: [
        { text: 'Очень приятно!', translation: { fr: 'Enchanté !', ar: 'تشرّفنا!', en: 'Nice to meet you!' } },
      ],
      key: 'приятно',
      keyMeaning: { fr: 'agréable', ar: 'سارّ، لطيف', en: 'pleasant' },
      note: {
        fr: 'Juste après l’échange des prénoms. Identique pour un homme et une femme.',
        ar: 'مباشرةً بعد تبادل الأسماء. نفس الصيغة للرجل والمرأة.',
        en: 'Right after exchanging names. Same form for men and women.',
      },
      pron: 'otchen priyatna',
      bg: 'poignee',
      lesson: 'salutations',
    },
    {
      id: 'spasibo',
      theme: 'politesse',
      lines: [{ text: 'Спасибо.', translation: { fr: 'Merci.', ar: 'شكرًا.', en: 'Thank you.' } }],
      key: 'Спасибо',
      keyMeaning: { fr: 'merci', ar: 'شكرًا', en: 'thank you' },
      note: {
        fr: 'Le « о » final, non accentué, se prononce « a ».',
        ar: 'حرف «о» الأخير غير منبور، فيُنطق «a».',
        en: 'The final “о” is unstressed, so it sounds like “a”.',
      },
      pron: 'spassiba',
      bg: 'bibliotheque',
      lesson: 'salutations',
    },
    {
      id: 'pozhaluysta',
      theme: 'politesse',
      lines: [
        {
          text: 'Пожалуйста.',
          translation: {
            fr: 'S’il vous plaît. / Je vous en prie.',
            ar: 'من فضلك. / عفوًا.',
            en: 'Please. / You’re welcome.',
          },
        },
      ],
      key: 'Пожалуйста',
      keyMeaning: {
        fr: 's’il vous plaît, et aussi « de rien »',
        ar: 'من فضلك، وأيضًا «عفوًا»',
        en: 'please, and also “you’re welcome”',
      },
      note: {
        fr: 'Un seul mot pour demander et pour répondre à Спасибо.',
        ar: 'كلمة واحدة للطلب وللردّ على Спасибо.',
        en: 'One word both to ask and to answer Спасибо.',
      },
      pron: 'pajalsta',
      bg: 'cafe',
      lesson: 'salutations',
    },
    {
      id: 'do-svidaniya',
      theme: 'saluer',
      lines: [
        { text: 'До свидания!', translation: { fr: 'Au revoir !', ar: 'إلى اللقاء!', en: 'Goodbye!' } },
      ],
      key: 'До свидания',
      keyMeaning: {
        fr: 'mot à mot : jusqu’à la rencontre',
        ar: 'حرفيًّا: حتى اللقاء',
        en: 'literally: until the meeting',
      },
      note: {
        fr: 'Poli et toujours correct, comme Здравствуйте à l’arrivée.',
        ar: 'مهذّبة وصالحة دائمًا، مثل Здравствуйте عند الوصول.',
        en: 'Polite and always correct, like Здравствуйте on arrival.',
      },
      pron: 'da svidania',
      bg: 'couchant',
      lesson: 'salutations',
    },
    {
      id: 'dialogue-rencontre',
      theme: 'dialogue',
      lines: [
        { text: 'Здравствуйте!', translation: { fr: 'Bonjour !', ar: 'مرحبًا!', en: 'Hello!' } },
        { text: 'Как дела?', translation: { fr: 'Comment ça va ?', ar: 'كيف الحال؟', en: 'How are things?' } },
        { text: 'Хорошо, спасибо.', translation: { fr: 'Bien, merci.', ar: 'بخير، شكرًا.', en: 'Fine, thanks.' } },
        {
          text: 'Как вас зовут?',
          translation: { fr: 'Comment vous appelez-vous ?', ar: 'ما اسمكم؟', en: 'What is your name?' },
        },
        {
          text: 'Меня зовут Карим.',
          translation: { fr: 'Je m’appelle Karim.', ar: 'اسمي كريم.', en: 'My name is Karim.' },
        },
        { text: 'Очень приятно!', translation: { fr: 'Enchanté !', ar: 'تشرّفنا!', en: 'Nice to meet you!' } },
        { text: 'До свидания!', translation: { fr: 'Au revoir !', ar: 'إلى اللقاء!', en: 'Goodbye!' } },
      ],
      key: 'Меня зовут',
      keyMeaning: { fr: 'je m’appelle', ar: 'اسمي', en: 'my name is' },
      note: {
        fr: 'Votre première conversation, d’un bout à l’autre. Jouez les deux rôles à voix haute.',
        ar: 'أول محادثة لك، من البداية إلى النهاية. أدِّ الدورين بصوت عالٍ.',
        en: 'Your first conversation, start to finish. Play both parts aloud.',
      },
      bg: 'kremlin',
      lesson: 'salutations',
    },
    {
      id: 'dobroe-utro',
      theme: 'saluer',
      lines: [
        {
          text: 'Доброе утро.',
          translation: { fr: 'Bonjour, le matin.', ar: 'صباح الخير.', en: 'Good morning.' },
        },
      ],
      key: 'Доброе утро',
      keyMeaning: { fr: 'mot à mot : bon matin', ar: 'حرفيًّا: صباح طيّب', en: 'literally: good morning' },
      note: {
        fr: 'Jusqu’à midi environ. Ensuite, on passe à Добрый день.',
        ar: 'حتى منتصف النهار تقريبًا، ثم نقول Добрый день.',
        en: 'Until around noon. After that, switch to Добрый день.',
      },
      pron: 'dobroïé outra',
      bg: 'envol',
      lesson: 'salutations',
    },
    {
      id: 'dobryy-den',
      theme: 'saluer',
      lines: [
        {
          text: 'Добрый день.',
          translation: { fr: 'Bonjour, en journée.', ar: 'نهارك سعيد.', en: 'Good afternoon.' },
        },
      ],
      key: 'Добрый день',
      keyMeaning: { fr: 'mot à mot : bon jour', ar: 'حرفيًّا: يوم طيّب', en: 'literally: good day' },
      note: {
        fr: 'Poli, plus court que Здравствуйте, et toujours correct.',
        ar: 'مهذّبة، أقصر من Здравствуйте، وصالحة دائمًا.',
        en: 'Polite, shorter than Здравствуйте, and always correct.',
      },
      pron: 'dobry dién',
      bg: 'kremlin',
      lesson: 'salutations',
    },
    {
      id: 'dobryy-vecher',
      theme: 'saluer',
      lines: [
        { text: 'Добрый вечер.', translation: { fr: 'Bonsoir.', ar: 'مساء الخير.', en: 'Good evening.' } },
      ],
      key: 'Добрый вечер',
      keyMeaning: { fr: 'mot à mot : bon soir', ar: 'حرفيًّا: مساء طيّب', en: 'literally: good evening' },
      note: {
        fr: 'À partir de la fin d’après-midi, en arrivant quelque part.',
        ar: 'من آخر العصر، عند الوصول إلى مكان ما.',
        en: 'From late afternoon on, when you arrive somewhere.',
      },
      pron: 'dobry viétcher',
      bg: 'neva',
      lesson: 'salutations',
    },
    {
      id: 'ya-iz-tunisa',
      theme: 'se-presenter',
      lines: [
        {
          text: 'Я из Туниса.',
          translation: { fr: 'Je viens de Tunisie.', ar: 'أنا من تونس.', en: 'I am from Tunisia.' },
        },
      ],
      key: 'Я из',
      keyMeaning: { fr: 'je viens de…', ar: 'أنا من…', en: 'I am from…' },
      note: {
        fr: 'Я из + lieu. De Moscou : Я из Москвы.',
        ar: 'Я из + المكان. من موسكو: Я из Москвы.',
        en: 'Я из + place. From Moscow: Я из Москвы.',
      },
      pron: 'ya iz Tounissa',
      bg: 'couchant',
      lesson: 'salutations',
    },
    {
      id: 'ya-student',
      theme: 'se-presenter',
      lines: [
        {
          text: 'Я студент.',
          translation: { fr: 'Je suis étudiant.', ar: 'أنا طالب.', en: 'I am a student.' },
        },
      ],
      key: 'студент',
      keyMeaning: { fr: 'étudiant', ar: 'طالب', en: 'student' },
      note: {
        fr: 'Pas de verbe « être » au présent en russe. Une femme dit : Я студентка.',
        ar: 'لا فعل «يكون» في المضارع بالروسية. المرأة تقول: Я студентка.',
        en: 'Russian has no present-tense “to be”. A woman says: Я студентка.',
      },
      pron: 'ya stoudiént',
      bg: 'equipe',
      lesson: 'salutations',
    },
    {
      id: 'izvinite',
      theme: 'politesse',
      lines: [{ text: 'Извините.', translation: { fr: 'Excusez-moi.', ar: 'عذرًا.', en: 'Excuse me.' } }],
      key: 'Извините',
      keyMeaning: { fr: 'excusez-moi, forme polie', ar: 'عذرًا، بصيغة الاحترام', en: 'excuse me, polite form' },
      note: {
        fr: 'Pour aborder quelqu’un dans la rue ou le métro : Извините, пожалуйста.',
        ar: 'لمخاطبة شخص في الشارع أو المترو: Извините, пожалуйста.',
        en: 'To approach someone in the street or the metro: Извините, пожалуйста.',
      },
      pron: 'izvinitié',
      bg: 'metro',
      lesson: 'salutations',
    },
    {
      id: 'povtorite',
      theme: 'comprendre',
      lines: [
        {
          text: 'Повторите, пожалуйста.',
          translation: { fr: 'Répétez, s’il vous plaît.', ar: 'أعِد من فضلك.', en: 'Please repeat.' },
        },
      ],
      key: 'Повторите',
      keyMeaning: { fr: 'répétez', ar: 'أعِد، كرِّر', en: 'repeat' },
      note: {
        fr: 'La phrase qui sauve quand on n’a pas compris.',
        ar: 'العبارة المنقذة حين لا تفهم.',
        en: 'The lifesaver when you did not catch something.',
      },
      pron: 'paftaritié, pajalsta',
      bg: 'classe',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'medlenno',
      theme: 'comprendre',
      lines: [
        {
          text: 'Медленно, пожалуйста.',
          translation: { fr: 'Lentement, s’il vous plaît.', ar: 'ببطء من فضلك.', en: 'Slowly, please.' },
        },
      ],
      key: 'Медленно',
      keyMeaning: { fr: 'lentement', ar: 'ببطء', en: 'slowly' },
      note: {
        fr: 'À dire dès que le débit vous dépasse.',
        ar: 'قلها كلّما كان الكلام أسرع منك.',
        en: 'Use it whenever the pace gets ahead of you.',
      },
      pron: 'miédlienna, pajalsta',
      bg: 'equipe',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'ochen-khorosho',
      theme: 'converser',
      lines: [
        { text: 'Очень хорошо!', translation: { fr: 'Très bien !', ar: 'جيّد جدًّا!', en: 'Very good!' } },
      ],
      key: 'Очень',
      keyMeaning: { fr: 'très', ar: 'جدًّا', en: 'very' },
      note: {
        fr: 'Очень renforce n’importe quel adjectif : очень приятно, очень дорого.',
        ar: 'Очень تقوّي أيّ صفة: очень приятно، очень дорого.',
        en: 'Очень strengthens any adjective: очень приятно, очень дорого.',
      },
      pron: 'otchen kharacho',
      bg: 'classe',
      lesson: 'salutations',
    },
    {
      id: 'skolko-eto-stoit',
      theme: 'acheter',
      lines: [
        {
          text: 'Сколько это стоит?',
          translation: { fr: 'Combien ça coûte ?', ar: 'كم سعر هذا؟', en: 'How much is this?' },
        },
      ],
      key: 'Сколько',
      keyMeaning: { fr: 'combien', ar: 'كم', en: 'how much' },
      note: {
        fr: 'Formule minimale, toujours comprise : Сколько?',
        ar: 'أقصر صيغة، مفهومة دائمًا: Сколько?',
        en: 'Shortest version, always understood: Сколько?',
      },
      pron: 'skolka èta stoït',
      bg: 'marche',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'dorogo',
      theme: 'acheter',
      lines: [{ text: 'Дорого.', translation: { fr: 'C’est cher.', ar: 'غالٍ.', en: 'It’s expensive.' } }],
      key: 'Дорого',
      keyMeaning: { fr: 'cher', ar: 'غالٍ', en: 'expensive' },
      note: {
        fr: 'Le contraire : Дёшево, bon marché.',
        ar: 'العكس: Дёшево، رخيص.',
        en: 'The opposite: Дёшево, cheap.',
      },
      pron: 'doraga',
      bg: 'calcul',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'da-pozhaluysta',
      theme: 'politesse',
      lines: [
        {
          text: 'Да, пожалуйста.',
          translation: { fr: 'Oui, s’il vous plaît.', ar: 'نعم، من فضلك.', en: 'Yes, please.' },
        },
      ],
      key: 'Да',
      keyMeaning: { fr: 'oui', ar: 'نعم', en: 'yes' },
      note: {
        fr: 'Pour accepter ce qu’on vous propose, au café comme au magasin.',
        ar: 'لقبول ما يُعرض عليك، في المقهى أو في المتجر.',
        en: 'To accept what you are offered, at a café or in a shop.',
      },
      pron: 'da, pajalsta',
      bg: 'marche',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'net-spasibo',
      theme: 'politesse',
      lines: [
        { text: 'Нет, спасибо.', translation: { fr: 'Non, merci.', ar: 'لا، شكرًا.', en: 'No, thank you.' } },
      ],
      key: 'Нет',
      keyMeaning: { fr: 'non', ar: 'لا', en: 'no' },
      note: {
        fr: 'Le refus poli, toujours suivi de спасибо.',
        ar: 'الرفض المهذّب، متبوعًا دائمًا بـ спасибо.',
        en: 'The polite refusal, always followed by спасибо.',
      },
      pron: 'niét, spassiba',
      bg: 'bibliotheque',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'skolko-vremeni',
      theme: 'heure',
      lines: [
        {
          text: 'Извините, сколько времени?',
          translation: {
            fr: 'Excusez-moi, quelle heure est-il ?',
            ar: 'عذرًا، كم الساعة؟',
            en: 'Excuse me, what time is it?',
          },
        },
      ],
      key: 'сколько времени',
      keyMeaning: {
        fr: 'mot à mot : combien de temps',
        ar: 'حرفيًّا: كم من الوقت',
        en: 'literally: how much time',
      },
      note: {
        fr: 'La version polie, à un inconnu. Variante courante : Который час?',
        ar: 'الصيغة المهذّبة مع الغريب. صيغة أخرى شائعة: Который час?',
        en: 'The polite version, to a stranger. Common variant: Который час?',
      },
      pron: 'izvinitié, skolka vrémièni',
      bg: 'metro',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'seychas-dva-chasa',
      theme: 'heure',
      lines: [
        {
          text: 'Сейчас два часа.',
          translation: { fr: 'Il est deux heures.', ar: 'الساعة الآن الثانية.', en: 'It is two o’clock.' },
        },
      ],
      key: 'Сейчас',
      keyMeaning: { fr: 'maintenant', ar: 'الآن', en: 'now' },
      note: {
        fr: '1 → час, 2 à 4 → часа, 5 et plus → часов.',
        ar: '1 ← час، من 2 إلى 4 ← часа، 5 فأكثر ← часов.',
        en: '1 → час, 2 to 4 → часа, 5 and up → часов.',
      },
      pron: 'siétchas dva tchassa',
      bg: 'agenda',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'dialogue-rue',
      theme: 'dialogue',
      lines: [
        {
          text: 'Извините, сколько времени?',
          translation: {
            fr: 'Excusez-moi, quelle heure est-il ?',
            ar: 'عذرًا، كم الساعة؟',
            en: 'Excuse me, what time is it?',
          },
        },
        {
          text: 'Сейчас три часа.',
          translation: { fr: 'Il est trois heures.', ar: 'الساعة الآن الثالثة.', en: 'It is three o’clock.' },
        },
        { text: 'Спасибо!', translation: { fr: 'Merci !', ar: 'شكرًا!', en: 'Thank you!' } },
        {
          text: 'Сколько это стоит?',
          translation: { fr: 'Combien ça coûte ?', ar: 'كم سعر هذا؟', en: 'How much is this?' },
        },
        { text: 'Двадцать.', translation: { fr: 'Vingt.', ar: 'عشرون.', en: 'Twenty.' } },
        { text: 'Спасибо!', translation: { fr: 'Merci !', ar: 'شكرًا!', en: 'Thank you!' } },
      ],
      key: 'Сколько',
      keyMeaning: { fr: 'combien', ar: 'كم', en: 'how much' },
      note: {
        fr: 'Deux questions de la rue, l’heure et le prix, et leurs réponses les plus courtes.',
        ar: 'سؤالان من الشارع، الساعة والسعر، وأقصر جوابين لهما.',
        en: 'Two street questions, the time and the price, with their shortest answers.',
      },
      bg: 'saint-basile',
      lesson: 'chiffres-et-heure',
    },
    {
      id: 'poka',
      theme: 'saluer',
      lines: [{ text: 'Пока.', translation: { fr: 'À plus !', ar: 'سلام!', en: 'Bye!' } }],
      key: 'Пока',
      keyMeaning: { fr: 'salut, en partant', ar: 'تحية الوداع بين الأصدقاء', en: 'bye, when leaving' },
      note: {
        fr: 'Familier : entre amis seulement, comme Привет à l’arrivée.',
        ar: 'غير رسمية: بين الأصدقاء فقط، مثل Привет عند الوصول.',
        en: 'Informal: among friends only, like Привет on arrival.',
      },
      pron: 'paka',
      bg: 'etudiantes',
      lesson: 'salutations',
    },
    {
      id: 'do-zavtra',
      theme: 'saluer',
      lines: [
        { text: 'До завтра.', translation: { fr: 'À demain.', ar: 'إلى الغد.', en: 'See you tomorrow.' } },
      ],
      key: 'завтра',
      keyMeaning: { fr: 'demain', ar: 'غدًا', en: 'tomorrow' },
      note: {
        fr: 'До + moment : la façon la plus simple de dire quand on se revoit.',
        ar: 'До + الموعد: أبسط طريقة لقول متى نلتقي من جديد.',
        en: 'До + a time: the simplest way to say when you meet again.',
      },
      pron: 'da zavtra',
      bg: 'neva',
      lesson: 'salutations',
    },
  ],
};
