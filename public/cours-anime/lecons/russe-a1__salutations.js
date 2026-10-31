/* Fichier généré par scripts/cours-anime/generer.mjs — ne pas modifier à la main. */
(window.CoursAnimeLecons = window.CoursAnimeLecons || {})["russe-a1/salutations"] = {
 "id": "russe-a1/salutations",
 "scene": "carte",
 "ui": "fr",
 "langueNarration": "ru",
 "titre": "Salutations : dire bonjour et se présenter en russe",
 "duree": 13,
 "intro": {
  "meta": "RusStudy · Russe A1 · 13 minutes",
  "titre": "Saluer et <em>se présenter</em>",
  "texte": "Une conversation est un chemin : saluer, demander comment ça va, donner son prénom, remercier, partir. Et deux voies pour le parcourir — vouvoyer ou tutoyer.",
  "bouton": "Commencer →",
  "note": "Écouteurs recommandés"
 },
 "config": {
  "stations": [
   {
    "id": "salut",
    "titre": "Saluer"
   },
   {
    "id": "cava",
    "titre": "Ça va ?"
   },
   {
    "id": "nom",
    "titre": "Le prénom"
   },
   {
    "id": "origine",
    "titre": "D'où"
   },
   {
    "id": "merci",
    "titre": "Politesse"
   },
   {
    "id": "adieu",
    "titre": "Congé"
   }
  ],
  "voies": [
   "poli",
   "familier"
  ],
  "noms": {
   "poli": "ВЫ · poli",
   "familier": "ТЫ · familier"
  }
 },
 "textes": {
  "ecouter": "Écouter",
  "pause": "Pause",
  "chapitre": "Chapitre",
  "precedent": "Chapitre précédent",
  "suivant": "Chapitre suivant",
  "texteIntegral": "Texte intégral",
  "fermer": "Fermer",
  "titrePanneau": "Texte intégral",
  "notePanneau": "Tout ce qui est dit, à relire ou à imprimer.",
  "progression": "Progression de la narration"
 },
 "chapitres": [
  {
   "n": 1,
   "sur": "Le chemin",
   "titre": "Saluer et se présenter",
   "lignes": [
    "Objectif de la leçon : entrer dans une conversation russe en dix secondes.",
    "Vous apprendrez à saluer, demander comment ça va, et donner votre prénom.",
    "Les prononciations entre guillemets sont approximatives : fiez-vous d'abord à l'audio."
   ],
   "narration": "Здравствуйте! Сегодня мы учим приветствия. Слушайте и повторяйте за мной.",
   "traduction": "Bonjour ! Aujourd'hui, nous apprenons les salutations. Écoutez et répétez après moi.",
   "audio": "audio-01-42d02383f5.mp3",
   "teinte": "#2460E8",
   "params": {
    "allume": [],
    "voie": "deux",
    "mots": []
   },
   "jetons": []
  },
  {
   "n": 2,
   "sur": "Registre poli",
   "titre": "ЗДРАВСТВУЙТЕ — le bonjour poli",
   "lignes": [
    "ЗДРАВСТВУЙТЕ = bonjour (poli, à un inconnu, à un adulte, à un professeur).",
    "Approximation : « zdrastvouïtié ». Le premier В ne se prononce pas.",
    "C'est long, mais c'est le mot le plus utile du russe : apprenez-le en bloc.",
    "À utiliser partout : administration, université, commerce, premier contact."
   ],
   "narration": "Здравствуйте. Здравствуйте. Это вежливое приветствие. Повторите: здравствуйте.",
   "traduction": "Bonjour. Bonjour. C'est la salutation polie. Répétez : bonjour.",
   "audio": "audio-02-af278f6264.mp3",
   "teinte": "#A855F7",
   "params": {
    "allume": [
     "salut"
    ],
    "voie": "poli",
    "mots": [
     {
      "t": "ЗДРАВСТВУЙТЕ",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "ЗДРАВСТВУЙТЕ",
     "s": "bonjour, à un inconnu"
    }
   ]
  },
  {
   "n": 3,
   "sur": "Registre familier",
   "titre": "ПРИВЕТ — le bonjour familier",
   "lignes": [
    "ПРИВЕТ = salut. Approximation : « priviet ».",
    "Réservé aux amis, aux camarades de classe, aux personnes de votre âge.",
    "Règle simple : un inconnu → ЗДРАВСТВУЙТЕ. Un ami → ПРИВЕТ.",
    "Erreur à éviter : dire ПРИВЕТ à un professeur ou à un fonctionnaire."
   ],
   "narration": "Привет! Привет, Анна! Это дружеское приветствие. Привет.",
   "traduction": "Salut ! Salut, Anna ! C'est la salutation amicale. Salut.",
   "audio": "audio-03-aa26a92b40.mp3",
   "teinte": "#FBBB21",
   "params": {
    "allume": [
     "salut"
    ],
    "voie": "familier",
    "mots": [
     {
      "t": "ПРИВЕТ",
      "voie": "familier"
     }
    ]
   },
   "jetons": [
    {
     "t": "ПРИВЕТ",
     "s": "salut, entre amis"
    }
   ]
  },
  {
   "n": 4,
   "sur": "Selon l'heure",
   "titre": "Saluer selon le moment de la journée",
   "lignes": [
    "ДОБРОЕ УТРО = bonjour le matin — « dobroïé outra »",
    "ДОБРЫЙ ДЕНЬ = bonjour la journée — « dobry dién »",
    "ДОБРЫЙ ВЕЧЕР = bonsoir — « dobry viétcher »",
    "ДОБРЫЙ ДЕНЬ est poli, plus court que ЗДРАВСТВУЙТЕ, et toujours correct."
   ],
   "narration": "Доброе утро. Добрый день. Добрый вечер. Утро, день, вечер.",
   "traduction": "Bonjour (le matin). Bonjour (la journée). Bonsoir. Matin, journée, soir.",
   "audio": "audio-04-df863074d7.mp3",
   "teinte": "#EF4444",
   "params": {
    "allume": [
     "salut"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "ДОБРОЕ УТРО",
      "voie": "poli"
     },
     {
      "t": "ДОБРЫЙ ДЕНЬ",
      "voie": "poli"
     },
     {
      "t": "ДОБРЫЙ ВЕЧЕР",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "ДОБРОЕ УТРО",
     "s": "bonjour le matin"
    },
    {
     "t": "ДОБРЫЙ ДЕНЬ",
     "s": "bonjour la journée"
    },
    {
     "t": "ДОБРЫЙ ВЕЧЕР",
     "s": "bonsoir"
    }
   ]
  },
  {
   "n": 5,
   "sur": "Demander",
   "titre": "КАК ДЕЛА ? — comment ça va ?",
   "lignes": [
    "КАК ДЕЛА? = comment ça va ? — « kak diéla »",
    "Version polie : КАК ВАШИ ДЕЛА? — « kak vachi diéla »",
    "Deux mots seulement : КАК (comment) + ДЕЛА (les affaires).",
    "C'est la question que vous entendrez juste après le bonjour."
   ],
   "narration": "Как дела? Как ваши дела? Как дела, Анна?",
   "traduction": "Comment ça va ? Comment allez-vous ? Comment ça va, Anna ?",
   "audio": "audio-05-b1dfcb83e0.mp3",
   "teinte": "#22C55E",
   "params": {
    "allume": [
     "cava"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "КАК ДЕЛА?",
      "voie": "familier"
     },
     {
      "t": "КАК ВАШИ ДЕЛА?",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "КАК ДЕЛА?",
     "s": "comment ça va ?"
    },
    {
     "t": "КАК ВАШИ ДЕЛА?",
     "s": "comment allez-vous ?"
    }
   ]
  },
  {
   "n": 6,
   "sur": "Répondre",
   "titre": "Répondre à КАК ДЕЛА",
   "lignes": [
    "ХОРОШО = bien — « kharacho »",
    "ОЧЕНЬ ХОРОШО = très bien — « otchen kharacho »",
    "НОРМАЛЬНО = ça va, normal — « narmalna »",
    "ПЛОХО = mal — « plokha »",
    "Réponse complète et naturelle : ХОРОШО, СПАСИБО (bien, merci)."
   ],
   "narration": "Хорошо, спасибо. Очень хорошо. Нормально. Плохо.",
   "traduction": "Bien, merci. Très bien. Ça va. Mal.",
   "audio": "audio-06-3046f8baa0.mp3",
   "teinte": "#F97316",
   "params": {
    "allume": [
     "cava"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "ХОРОШО",
      "voie": "familier"
     },
     {
      "t": "ОЧЕНЬ ХОРОШО",
      "voie": "poli"
     },
     {
      "t": "НОРМАЛЬНО",
      "voie": "familier"
     }
    ]
   },
   "jetons": [
    {
     "t": "ХОРОШО",
     "s": "bien"
    },
    {
     "t": "ОЧЕНЬ ХОРОШО",
     "s": "très bien"
    },
    {
     "t": "НОРМАЛЬНО",
     "s": "ça va"
    }
   ]
  },
  {
   "n": 7,
   "sur": "Donner son prénom",
   "titre": "МЕНЯ ЗОВУТ — je m'appelle",
   "lignes": [
    "МЕНЯ ЗОВУТ + prénom = je m'appelle… — « miénia zavout »",
    "МЕНЯ ЗОВУТ АННА. — Je m'appelle Anna.",
    "МЕНЯ ЗОВУТ КАРИМ. — Je m'appelle Karim.",
    "Ne cherchez pas à décomposer la formule : apprenez-la comme un seul bloc."
   ],
   "narration": "Меня зовут Анна. Меня зовут Иван. А вас? Меня зовут...",
   "traduction": "Je m'appelle Anna. Je m'appelle Ivan. Et vous ? Je m'appelle…",
   "audio": "audio-07-c92dcb70e4.mp3",
   "teinte": "#2460E8",
   "params": {
    "allume": [
     "nom"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "МЕНЯ ЗОВУТ…",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "МЕНЯ ЗОВУТ…",
     "s": "je m'appelle…"
    }
   ]
  },
  {
   "n": 8,
   "sur": "Demander le prénom",
   "titre": "Demander le prénom",
   "lignes": [
    "КАК ВАС ЗОВУТ? = comment vous appelez-vous ? (poli) — « kak vaz zavout »",
    "КАК ТЕБЯ ЗОВУТ? = comment tu t'appelles ? (familier) — « kak tiébia zavout »",
    "ВАС va avec ЗДРАВСТВУЙТЕ ; ТЕБЯ va avec ПРИВЕТ.",
    "Raccourci très utile : А ВАС? = et vous ?"
   ],
   "narration": "Как вас зовут? Как тебя зовут? А вас? А тебя?",
   "traduction": "Comment vous appelez-vous ? Comment tu t'appelles ? Et vous ? Et toi ?",
   "audio": "audio-08-bdeae7cdaf.mp3",
   "teinte": "#A855F7",
   "params": {
    "allume": [
     "nom"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "КАК ВАС ЗОВУТ?",
      "voie": "poli"
     },
     {
      "t": "КАК ТЕБЯ ЗОВУТ?",
      "voie": "familier"
     }
    ]
   },
   "jetons": [
    {
     "t": "КАК ВАС ЗОВУТ?",
     "s": "comment vous appelez-vous ?"
    },
    {
     "t": "КАК ТЕБЯ ЗОВУТ?",
     "s": "comment tu t'appelles ?"
    }
   ]
  },
  {
   "n": 9,
   "sur": "Enchanté",
   "titre": "ОЧЕНЬ ПРИЯТНО — enchanté",
   "lignes": [
    "ОЧЕНЬ ПРИЯТНО = enchanté, ravi — « otchen priyatna »",
    "Se dit juste après l'échange des prénoms, homme ou femme, sans changement.",
    "Enchaînement complet : МЕНЯ ЗОВУТ КАРИМ. — ОЧЕНЬ ПРИЯТНО."
   ],
   "narration": "Очень приятно. Меня зовут Иван. Очень приятно!",
   "traduction": "Enchanté. Je m'appelle Ivan. Enchanté !",
   "audio": "audio-09-8b119fad8f.mp3",
   "teinte": "#FBBB21",
   "params": {
    "allume": [
     "nom"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "ОЧЕНЬ ПРИЯТНО",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "ОЧЕНЬ ПРИЯТНО",
     "s": "enchanté"
    }
   ]
  },
  {
   "n": 10,
   "sur": "Son origine",
   "titre": "Dire d'où l'on vient",
   "lignes": [
    "Я ИЗ + lieu = je viens de… — « ya iz »",
    "Я ИЗ ТУНИСА. — Je viens de Tunisie.",
    "Я ИЗ МОСКВЫ. — Je viens de Moscou.",
    "Я СТУДЕНТ (étudiant) / Я СТУДЕНТКА (étudiante)."
   ],
   "narration": "Я из Туниса. Я студент. Я студентка. А вы?",
   "traduction": "Je viens de Tunisie. Je suis étudiant. Je suis étudiante. Et vous ?",
   "audio": "audio-10-c221b9583b.mp3",
   "teinte": "#EF4444",
   "params": {
    "allume": [
     "origine"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "Я ИЗ ТУНИСА",
      "voie": "poli"
     },
     {
      "t": "Я ИЗ МОСКВЫ",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "Я ИЗ ТУНИСА",
     "s": "je viens de Tunisie"
    },
    {
     "t": "Я ИЗ МОСКВЫ",
     "s": "je viens de Moscou"
    }
   ]
  },
  {
   "n": 11,
   "sur": "Trois mots",
   "titre": "Les mots de politesse indispensables",
   "lignes": [
    "СПАСИБО = merci — « spassiba »",
    "ПОЖАЛУЙСТА = s'il vous plaît / je vous en prie — « pajalsta »",
    "ИЗВИНИТЕ = excusez-moi — « izviniTIÉ »",
    "ДА = oui — НЕТ = non",
    "ИЗВИНИТЕ, ПОЖАЛУЙСТА est la meilleure façon d'aborder quelqu'un."
   ],
   "narration": "Спасибо. Пожалуйста. Извините. Да. Нет.",
   "traduction": "Merci. S'il vous plaît. Excusez-moi. Oui. Non.",
   "audio": "audio-11-fb30d7c242.mp3",
   "teinte": "#22C55E",
   "params": {
    "allume": [
     "merci"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "СПАСИБО",
      "voie": "poli"
     },
     {
      "t": "ПОЖАЛУЙСТА",
      "voie": "poli"
     },
     {
      "t": "ИЗВИНИТЕ",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "СПАСИБО",
     "s": "merci"
    },
    {
     "t": "ПОЖАЛУЙСТА",
     "s": "s'il vous plaît"
    },
    {
     "t": "ИЗВИНИТЕ",
     "s": "excusez-moi"
    }
   ]
  },
  {
   "n": 12,
   "sur": "Prendre congé",
   "titre": "Dire au revoir",
   "lignes": [
    "ДО СВИДАНИЯ = au revoir (poli) — « da svidania »",
    "ПОКА = à plus, salut (familier) — « paka »",
    "ДО ЗАВТРА = à demain — « da zavtra »",
    "Même logique que pour le bonjour : poli ou familier, choisissez selon la personne."
   ],
   "narration": "До свидания. Пока. До завтра. До свидания!",
   "traduction": "Au revoir. Salut. À demain. Au revoir !",
   "audio": "audio-12-a67c1643bd.mp3",
   "teinte": "#F97316",
   "params": {
    "allume": [
     "adieu"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "ДО СВИДАНИЯ",
      "voie": "poli"
     },
     {
      "t": "ПОКА",
      "voie": "familier"
     },
     {
      "t": "ДО ЗАВТРА",
      "voie": "poli"
     }
    ]
   },
   "jetons": [
    {
     "t": "ДО СВИДАНИЯ",
     "s": "au revoir"
    },
    {
     "t": "ПОКА",
     "s": "à plus"
    },
    {
     "t": "ДО ЗАВТРА",
     "s": "à demain"
    }
   ]
  },
  {
   "n": 13,
   "sur": "Le chemin entier",
   "titre": "Dialogue complet : votre première conversation",
   "lignes": [
    "— ЗДРАВСТВУЙТЕ! КАК ДЕЛА?",
    "— ХОРОШО, СПАСИБО. А ВЫ?",
    "— ОЧЕНЬ ХОРОШО. КАК ВАС ЗОВУТ?",
    "— МЕНЯ ЗОВУТ КАРИМ. Я ИЗ ТУНИСА.",
    "— ОЧЕНЬ ПРИЯТНО! ДО СВИДАНИЯ!",
    "Entraînement : jouez les deux rôles à voix haute, trois fois."
   ],
   "narration": "Здравствуйте! Как дела? Хорошо, спасибо. Как вас зовут? Меня зовут Карим. Очень приятно! До свидания!",
   "traduction": "Bonjour ! Comment ça va ? Bien, merci. Comment vous appelez-vous ? Je m'appelle Karim. Enchanté ! Au revoir !",
   "audio": "audio-13-ffb138a1a9.mp3",
   "teinte": "#2460E8",
   "params": {
    "allume": [
     "salut",
     "cava",
     "nom",
     "origine",
     "merci",
     "adieu"
    ],
    "voie": "deux",
    "mots": [
     {
      "t": "ЗДРАВСТВУЙТЕ!",
      "voie": "poli",
      "station": "salut"
     },
     {
      "t": "КАК ДЕЛА?",
      "voie": "poli",
      "station": "cava"
     },
     {
      "t": "ХОРОШО, СПАСИБО",
      "voie": "poli",
      "station": "cava"
     },
     {
      "t": "КАК ВАС ЗОВУТ?",
      "voie": "poli",
      "station": "nom"
     },
     {
      "t": "ОЧЕНЬ ПРИЯТНО",
      "voie": "poli",
      "station": "nom"
     },
     {
      "t": "ДО СВИДАНИЯ!",
      "voie": "poli",
      "station": "adieu"
     }
    ]
   },
   "jetons": [
    {
     "t": "ЗДРАВСТВУЙТЕ!",
     "s": "bonjour !"
    },
    {
     "t": "КАК ДЕЛА?",
     "s": "comment ça va ?"
    },
    {
     "t": "ХОРОШО, СПАСИБО",
     "s": "bien, merci"
    },
    {
     "t": "КАК ВАС ЗОВУТ?",
     "s": "comment vous appelez-vous ?"
    },
    {
     "t": "ОЧЕНЬ ПРИЯТНО",
     "s": "enchanté"
    },
    {
     "t": "ДО СВИДАНИЯ!",
     "s": "au revoir !"
    }
   ]
  }
 ]
};
