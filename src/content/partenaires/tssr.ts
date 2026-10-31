import type { PartnerProfile } from './types';

/**
 * TSSR — Tunisian Services for Studying in Russia, partenaire vérifié RusStudy.
 * La dénomination complète est celle qui figure sur le logo fourni par TSSR.
 *
 * Vidéo : version « landing », à la charte RusStudy (bouton d'appel vert,
 * écran crème, accent or), distincte de la version aux couleurs de TSSR
 * réservée aux comptes de TSSR. L'image d'attente est extraite de ce
 * montage ; la réextraire à chaque remplacement de la vidéo.
 *
 * Champs encore absents, faute d'élément fourni : ville, date de
 * vérification, charte, montant d'entrée, présentation rédigée par TSSR,
 * critères de vérification et rôle de TSSR à chaque étape. Chacun masque sa
 * section tant qu'il n'est pas renseigné — rien n'est inventé à sa place.
 *
 * `published` repasse à `true` lorsque ces éléments sont en place : la page
 * entre alors dans le sitemap et devient indexable.
 */
export const TSSR: PartnerProfile = {
  slug: 'tssr',
  name: 'TSSR',
  fullName: 'Tunisian Services for Studying in Russia',
  color: '#1f3fbf',
  published: true,

  city: { fr: 'Tunis', ar: 'تونس العاصمة' },
  address: "41, rue d'Iran, bureau 303 — Lafayette, Tunis 1002, Tunisie",
  verifiedOn: '14/10/2026',
  budgetFrom: { fr: '12 000 DT', ar: '12 000 د.ت' },

  logo: '/assets/img/partenaires/tssr-logo.webp',
  videoSrc: '/assets/video/partenaires/tssr-parcours-60s-derja-landing.mp4',
  videoPoster: '/assets/img/partenaires/tssr-video-poster.webp',

  // Témoignages tournés pour TSSR, tirés de la vidéothèque OpenMontage
  // (projet « tssr-temoignages »). Une seule version par témoignage, au
  // format FAQ : une vraie question de visiteur, puis l'étudiant répond.
  // C'est le seul montage qui existe pour chacun, et celui qui lève une
  // objection par vidéo. Les vignettes montrent les visages, tirées du
  // même témoignage. Durées lues sur les fichiers.
  testimonials: [
    {
      id: 'ghofrane-nourhane',
      src: '/assets/video/partenaires/tssr/faq-ghofrane-nourhane-medecine.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-ghofrane-nourhane.jpg',
      durationSec: 33,
      publishedOn: '2026-10-30',
      title: {
        fr: 'Ghofrane & Nourhane — étudier la médecine ensemble',
        ar: 'غفران ونورهان — يقراو الطب مع بعضهم',
      },
    },
    {
      id: 'youssef',
      src: '/assets/video/partenaires/tssr/faq-youssef-facebook.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-youssef.jpg',
      durationSec: 46,
      publishedOn: '2026-10-30',
      title: {
        fr: 'Youssef — TSSR trouvé sur Facebook',
        ar: 'يوسف — لقى TSSR في الفايسبوك',
      },
    },
    {
      id: 'amine-pourquoi',
      src: '/assets/video/partenaires/tssr/faq-amine-pourquoi-russie.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-amine-pourquoi-russie.jpg',
      durationSec: 48,
      publishedOn: '2026-10-30',
      title: {
        fr: 'Amine — pourquoi la Russie',
        ar: 'أمين — علاش روسيا',
      },
    },
    {
      id: 'amine-budget',
      src: '/assets/video/partenaires/tssr/faq-amine-budget.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-amine-budget.jpg',
      durationSec: 43,
      publishedOn: '2026-10-30',
      title: {
        fr: 'Amine — le budget',
        ar: 'أمين — الميزانية',
      },
    },
    {
      id: 'amine-travail',
      src: '/assets/video/partenaires/tssr/faq-amine-travail-langue.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-amine-travail-langue.jpg',
      durationSec: 40,
      publishedOn: '2026-10-30',
      title: {
        fr: 'Amine — le travail et la langue',
        ar: 'أمين — الخدمة واللغة',
      },
    },
    {
      id: 'amine-master',
      src: '/assets/video/partenaires/tssr/faq-amine-master.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-amine-master.jpg',
      durationSec: 40,
      publishedOn: '2026-10-30',
      title: {
        fr: 'Amine — le master',
        ar: 'أمين — الماستر',
      },
    },
    {
      id: 'annee-preparatoire',
      src: '/assets/video/partenaires/tssr/faq-annee-preparatoire.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-annee-preparatoire.jpg',
      durationSec: 58,
      publishedOn: '2026-10-30',
      title: {
        fr: "L'année préparatoire en Russie",
        ar: 'العام التحضيري في روسيا',
      },
    },
    {
      id: 'informatique',
      src: '/assets/video/partenaires/tssr/faq-informatique.mp4',
      poster: '/assets/img/partenaires/tssr/temoignage-informatique.jpg',
      durationSec: 43,
      publishedOn: '2026-10-30',
      title: {
        fr: "Étudier l'informatique en Russie",
        ar: 'قراية الإعلامية في روسيا',
      },
    },
  ],

  copy: {
    fr: {
      metaTitle: 'TSSR × RusStudy — Étudier en Russie depuis la Tunisie',
      metaDescription:
        "TSSR est un partenaire vérifié de la plateforme RusStudy. Un seul suivi, de ton premier message jusqu'à ta chambre en Russie : consultation gratuite, dossier, admission, visa et accueil sur place.",
      h1: 'Étudie en Russie avec TSSR',
      subtitle:
        "Partenaire vérifié de la plateforme RusStudy : un seul suivi, de ton premier message jusqu'à ta chambre en Russie.",

      about:
        "Agence tunisienne de conseil et d'orientation, installée à Tunis, spécialisée dans l'accès aux universités russes. Son activité de base : te conseiller et t'orienter, en face à face, avant et pendant la constitution de ton dossier.",

      verificationChecks: [
        "Bureau agréé par le ministère tunisien de l'Enseignement supérieur et de la Recherche scientifique",
        'Adresse physique à Tunis, où tu peux te rendre en personne',
        'Activité déclarée : conseil pédagogique, orientation et accompagnement des étudiants',
        'Présence publique continue et traçable, suivie par plus de 14 000 personnes',
        'Interlocuteur identifié côté tunisien, en relation directe avec RusStudy',
      ],

      steps: [
        {
          number: '01',
          title: 'Consultation gratuite',
          partnerRole: 'Rendez-vous au bureau de Tunis, ou par téléphone si tu habites loin.',
          platformRole: 'On regarde ton profil ensemble et on te dit franchement ce qui est jouable.',
        },
        {
          number: '02',
          title: 'Préparation du dossier',
          partnerRole: 'Tu déposes tes documents en main propre, à Tunis, et on les vérifie avec toi.',
          platformRole: "On liste les pièces à réunir, dans l'ordre, et on vérifie chacune avant envoi.",
        },
        {
          number: '03',
          title: 'Admission officielle',
          platformRole: "On suit ta candidature auprès de l'université jusqu'à sa réponse écrite.",
        },
        {
          number: '04',
          title: 'Visa & assurance',
          platformRole: "On prépare ton dossier de visa et on t'indique ce que le consulat attend.",
        },
        {
          number: '05',
          title: 'Accueil & installation',
          platformRole: "Un tuteur t'attend à l'aéroport et reste joignable toute l'année.",
        },
      ],

      budgetIncluded: [
        'Frais universitaires',
        'Consulting et orientation',
        'Accompagnement administratif',
        'Dossier visa',
        "Accueil à l'aéroport",
        'Foyer 1 an',
        'Assurance médicale',
      ],
      budgetExcluded: [
        "Billet d'avion",
        "Train ou voiture jusqu'à ta ville",
        'Hôtel et visites à Moscou',
      ],

      faq: [
        {
          question: 'Qui est TSSR, et qui est RusStudy ?',
          answer:
            "TSSR est une entreprise indépendante, partenaire vérifié de RusStudy. RusStudy est la plateforme : c'est elle qui traite ton dossier, suit ton admission et t'accueille en Russie. TSSR t'accompagne côté tunisien et reste ton interlocuteur de proximité.",
        },
        {
          question: 'Que se passe-t-il après mon message ?',
          answer:
            "Ton message arrive sur le WhatsApp de RusStudy, avec la mention TSSR pour qu'on sache d'où tu viens. On te répond pour fixer une consultation gratuite — sans engagement, et sans paiement à ce stade.",
        },
        {
          question: 'Les cours sont-ils en russe ou en anglais ?',
          answer:
            "Les deux existent selon les universités et les filières. Si tu pars en russe, une année préparatoire de langue est prévue avant d'entrer dans le cursus. On vérifie la langue d'enseignement réelle du programme visé, université par université.",
        },
        {
          question: 'Combien de temps dure la procédure ?',
          answer:
            "Compte plusieurs mois entre le dépôt d'un dossier complet et le départ : l'admission, puis la lettre d'invitation, puis la demande de visa s'enchaînent et chacune a son propre délai. Plus tu démarres tôt, plus tu as de choix.",
        },
        {
          question: 'Mon diplôme russe sera-t-il reconnu en Tunisie ?',
          answer:
            "La reconnaissance d'un diplôme étranger suit une procédure conduite par les autorités tunisiennes compétentes. Nous ne donnons aucune garantie à ce sujet : renseigne-toi auprès d'elles avant de partir, et conserve tous tes relevés de notes pendant tes études.",
        },
        {
          question: 'Le logement est-il assuré ?',
          answer:
            "Une place en résidence universitaire est demandée dans le cadre de l'accompagnement, mais son attribution relève de l'université. On te dit ce qui est confirmé et ce qui ne l'est pas encore, à chaque étape.",
        },
        {
          question: 'Est-ce que vous garantissez le visa ?',
          answer:
            "Non, et personne ne le peut : la délivrance d'un visa relève exclusivement des autorités consulaires. Ce qu'on garantit, c'est un dossier complet, dans l'ordre, déposé dans les délais.",
        },
      ],

      videoTranscript:
        "Tout commence par un message · On analyse ton profil · On prépare ton dossier · Admission officielle · Visa et assurance · Direction Moscou · Bienvenue en Russie · Train ou voiture jusqu'à ta ville · TSSR, partenaire vérifié sur RusStudy — réserve ta consultation avec TSSR.",
    },

    ar: {
      metaTitle: 'TSSR × RusStudy — اقرا في روسيا من تونس',
      metaDescription:
        'TSSR شريك موثّق على منصّة RusStudy. متابعة وحدة، من أوّل ميساج حتى لبيتك في روسيا: استشارة مجانية، الدوسي، القبول، الفيزا والاستقبال في روسيا.',
      h1: 'اقرا في روسيا مع TSSR',
      subtitle: 'شريك موثّق على منصّة RusStudy: نتبّعو الدوسي متاعك من أوّل ميساج حتى لبيتك في روسيا.',

      about:
        'وكالة تونسية للاستشارة والتوجيه، مركزها تونس العاصمة، مختصّة في الدخول للجامعات الروسية. النشاط الأساسي متاعها: تنصحك وتوجّهك، وجهًا لوجه، قبل تحضير الدوسي وفي وقتو.',

      verificationChecks: [
        'مكتب مرخّص له من وزارة التعليم العالي والبحث العلمي التونسية',
        'عنوان حقيقي في تونس العاصمة، تنجّم تمشيلو بنفسك',
        'نشاط مصرّح بيه: الاستشارة البيداغوجية والتوجيه ومرافقة الطلبة',
        'حضور عمومي متواصل ومعروف، يتابعو أكثر من 14 ألف شخص',
        'مخاطب معروف في تونس، في علاقة مباشرة مع RusStudy',
      ],

      steps: [
        {
          number: '01',
          title: 'استشارة مجانية',
          partnerRole: 'موعد في المكتب في تونس العاصمة، ولا بالتليفون كان ساكن بعيد.',
          platformRole: 'نشوفو بروفيلك مع بعضنا ونقولولك بصراحة شنوّة ممكن.',
        },
        {
          number: '02',
          title: 'تحضير الدوسي',
          partnerRole: 'تجيب وثائقك بيدك للمكتب في تونس، ونتثبّتو فيهم معاك.',
          platformRole: 'نعطيوك قائمة الوثائق بالترتيب، ونشوفو كلّ وحدة قبل ما تتبعث.',
        },
        {
          number: '03',
          title: 'قبول رسمي',
          platformRole: 'نتبّعو ترشّحك عند الجامعة حتى يوصل الجواب مكتوب.',
        },
        {
          number: '04',
          title: 'الفيزا والتأمين',
          platformRole: 'نحضّرو دوسي الفيزا متاعك ونقولولك شنوّة تستنّى منّك القنصلية.',
        },
        {
          number: '05',
          title: 'الاستقبال والتركيز',
          platformRole: 'تلقى مرافق يستنّاك في المطار ويبقى معاك طول العام.',
        },
      ],

      budgetIncluded: [
        'معاليم الجامعة',
        'الاستشارة والتوجيه',
        'المرافقة الإدارية',
        'دوسي الفيزا',
        'الاستقبال في المطار',
        'الفوييه عام كامل',
        'التأمين الطبّي',
      ],
      budgetExcluded: ['تذكرة الطيّارة', 'التران ولا الكرهبة حتى لمدينتك', 'الأوتيل والزيارات في موسكو'],

      faq: [
        {
          question: 'شكون TSSR وشكون RusStudy؟',
          answer:
            'TSSR مؤسسة مستقلّة، وهي شريك موثّق عند RusStudy. أمّا RusStudy فهي المنصّة: هي اللي تعالج الدوسي متاعك، وتتبّع القبول، وتستقبلك في روسيا. وTSSR ترافقك من تونس وتبقى المخاطب القريب منّك.',
        },
        {
          question: 'شنوّة يصير بعد ما نبعث الميساج؟',
          answer:
            'الميساج متاعك يوصل على الواتساب متاع RusStudy، ومكتوب فيه TSSR باش نعرفو منين جيت. نجاوبوك باش نحدّدو استشارة مجانية — بلا التزام وبلا خلاص في هالمرحلة.',
        },
        {
          question: 'الدروس بالروسي ولا بالإنقليزي؟',
          answer:
            'الزوز موجودين حسب الجامعة والتخصّص. كان باش تقرا بالروسي، فمّة سنة تحضيرية في اللغة قبل ما تدخل للمسار. نتثبّتو من لغة التدريس الحقيقية للبرنامج، جامعة بجامعة.',
        },
        {
          question: 'قدّاش تاخو الإجراءات؟',
          answer:
            'احسب شهور بين ما تكمّل الدوسي ووقت السفر: القبول، وبعدو الدعوة، وبعدها طلب الفيزا — وكلّ وحدة عندها الأجل متاعها. كلّ ما تبدا بكري، كلّ ما يكثر الاختيار.',
        },
        {
          question: 'الشهادة الروسية تتعرّف بيها في تونس؟',
          answer:
            'الاعتراف بالشهادة الأجنبية يمشي بإجراء تتولّاه السلطات التونسية المختصّة. إحنا ما نضمنو شي في هالموضوع: استفسر عندهم قبل ما تسافر، واحفظ كشوف الأعداد الكلّ طول دراستك.',
        },
        {
          question: 'السكن مضمون؟',
          answer:
            'نطلبو بلاصة في الإقامة الجامعية في إطار المرافقة، أمّا الإسناد يرجع للجامعة. نقولولك شنوّة تأكّد وشنوّة مازال، في كلّ مرحلة.',
        },
        {
          question: 'تضمنولي الفيزا؟',
          answer:
            'لا، وحتّى حدّ ما ينجّم: إسناد الفيزا يرجع للسلطات القنصلية برك. اللي نضمنوه هو دوسي كامل، بالترتيب، ومودَع في الوقت.',
        },
      ],

      videoTranscript:
        'كلّ شي يبدا بميساج · نحلّلو بروفيلك · نحضّرو الدوسي متاعك · قبول رسمي · الفيزا والتأمين · يلّا على موسكو · مرحبا بيك في روسيا · تران ولا كرهبة حتى لمدينتك · TSSR، شريك موثّق على RusStudy — احجز استشارتك مع TSSR.',
    },
  },
};
