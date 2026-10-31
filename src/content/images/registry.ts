import type { Lang } from '../../i18n';
import type { UniversitySlug } from '../universites/registry';
import type { FiliereSlug } from '../filieres/registry';
import type { CitySlug } from '../villes/registry';
import type { BlogSlug } from '../blog/registry';

/**
 * Registre central des photos de pages (public/assets/img/pages/*.webp).
 * Chaque image porte un texte alternatif traduit dans les 4 langues du site
 * (SEO image + accessibilité) et, pour les photos Wikimedia Commons, le
 * crédit exigé par la licence.
 */
export interface PageImage {
  src: string;
  width: number;
  height: number;
  alt: Record<Lang, string>;
  /** Attribution requise par la licence (photos Wikimedia Commons). */
  credit?: string;
  /** URL de la licence, exposée dans le JSON-LD ImageObject. */
  licenseUrl?: string;
}

const LICENSES = {
  ccBySa4: 'https://creativecommons.org/licenses/by-sa/4.0/',
  ccBySa3: 'https://creativecommons.org/licenses/by-sa/3.0/',
  ccBy4: 'https://creativecommons.org/licenses/by/4.0/',
  ccBy2: 'https://creativecommons.org/licenses/by/2.0/',
  cc0: 'https://creativecommons.org/publicdomain/zero/1.0/',
  publicDomain: 'https://en.wikipedia.org/wiki/Public_domain',
  fal: 'https://artlibre.org/licence/lal/en/',
  unsplash: 'https://unsplash.com/license',
} as const;

function img(file: string, alt: Record<Lang, string>, credit?: string, licenseUrl?: string): PageImage {
  return {
    src: `/assets/img/pages/${file}.webp`,
    width: 1600,
    height: 1000,
    alt,
    credit,
    licenseUrl: licenseUrl ?? LICENSES.unsplash,
  };
}

export const UNIVERSITY_IMAGES: Record<UniversitySlug, PageImage> = {
  'universite-detat-de-moscou': img(
    'universite-detat-de-moscou',
    {
      fr: "Vue aérienne du bâtiment principal de l'Université d'État de Moscou (MGU)",
      en: 'Aerial view of the main building of Moscow State University (MSU)',
      ar: 'منظر جوي للمبنى الرئيسي لجامعة موسكو الحكومية',
      ru: 'Главное здание МГУ имени М. В. Ломоносова с высоты птичьего полёта',
    },
    'Photo : I.s.kopytov — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'polytechnique-de-saint-petersbourg': img(
    'polytechnique-de-saint-petersbourg',
    {
      fr: "Bâtiment principal de l'Université Polytechnique de Saint-Pétersbourg vu du ciel",
      en: 'Main building of Peter the Great St. Petersburg Polytechnic University from above',
      ar: 'المبنى الرئيسي لجامعة بوليتكنيك سان بطرسبورغ من الأعلى',
      ru: 'Главный корпус Санкт-Петербургского политехнического университета с высоты',
    },
    'Photo : Красный — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'universite-de-medecine-pirogov': img(
    'universite-de-medecine-pirogov',
    {
      fr: "Entrée de l'Université nationale de médecine Pirogov à Moscou",
      en: 'Entrance of Pirogov Russian National Research Medical University in Moscow',
      ar: 'مدخل جامعة بيروغوف الوطنية للطب في موسكو',
      ru: 'Вход в РНИМУ имени Н. И. Пирогова в Москве',
    },
    'Photo : Waleedpak — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
  'universite-rudn': img(
    'universite-rudn',
    {
      fr: "Campus verdoyant de l'Université RUDN (Amitié des Peuples) à Moscou",
      en: "Green campus of RUDN University (Peoples' Friendship) in Moscow",
      ar: 'الحرم الجامعي الأخضر لجامعة الصداقة بين الشعوب RUDN في موسكو',
      ru: 'Зелёный кампус РУДН (Университета дружбы народов) в Москве',
    },
    'Photo : РУДН — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'universite-technique-bauman': img(
    'universite-technique-bauman',
    {
      fr: "Bâtiment principal de l'Université technique Bauman à Moscou",
      en: 'Main building of Bauman Moscow State Technical University',
      ar: 'المبنى الرئيسي لجامعة باومان التقنية في موسكو',
      ru: 'Главное здание МГТУ имени Н. Э. Баумана в Москве',
    },
    'Photo : Gennady Grachev — CC BY 2.0, Wikimedia Commons',
    LICENSES.ccBy2
  ),
  'universite-de-kazan': img(
    'universite-de-kazan',
    {
      fr: "Façade à colonnades de l'Université fédérale de Kazan",
      en: 'Colonnaded facade of Kazan Federal University',
      ar: 'واجهة جامعة قازان الفيدرالية بأعمدتها الكلاسيكية',
      ru: 'Колоннада главного здания Казанского федерального университета',
    },
    'Photo : A.Savin — Licence Art Libre, Wikimedia Commons',
    LICENSES.fal
  ),
  'institut-stroganov-dart': img(
    'institut-stroganov-dart',
    {
      fr: "Façade de l'Académie d'art et d'industrie Stroganov à Moscou",
      en: 'Facade of the Stroganov Academy of Arts and Industry in Moscow',
      ar: 'واجهة أكاديمية سترُوغانوف للفنون في موسكو',
      ru: 'Фасад МГХПА имени С. Г. Строганова в Москве',
    },
    'Photo : Andreykor — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'universite-detat-de-toula': img(
    'universite-detat-de-toula',
    {
      fr: "Bâtiment principal de l'Université d'État de Toula et ses colonnes blanches",
      en: 'Main building of Tula State University with its white columns',
      ar: 'المبنى الرئيسي لجامعة تولا الحكومية بأعمدته البيضاء',
      ru: 'Главный корпус Тульского государственного университета',
    },
    'Photo : Celest — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
  'universite-detat-elets-bounine': img(
    'universite-detat-elets-bounine',
    {
      fr: "Bâtiment principal de l'Université d'État Bounine d'Elets sous un ciel d'été",
      en: 'Main building of Bunin Yelets State University on a summer day',
      ar: 'المبنى الرئيسي لجامعة يلتس الحكومية (بونين) في يوم صيفي',
      ru: 'Главный корпус Елецкого государственного университета имени И. А. Бунина',
    },
    'Photo : Borealex — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'universite-technique-detat-de-lipetsk': img(
    'universite-technique-detat-de-lipetsk',
    {
      fr: "Entrée de l'Université technique d'État de Lipetsk",
      en: 'Entrance of Lipetsk State Technical University',
      ar: 'مدخل جامعة ليبتسك التقنية الحكومية',
      ru: 'Вход в Липецкий государственный технический университет',
    },
    'Photo : Lena Nikolena — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'universite-detat-de-voronej': img(
    'universite-detat-de-voronej',
    {
      fr: "Bâtiment principal de l'Université d'État de Voronej",
      en: 'Main building of Voronezh State University',
      ar: 'المبنى الرئيسي لجامعة فورونيج الحكومية',
      ru: 'Главный корпус Воронежского государственного университета',
    },
    'Photo : Insider51 — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
  'universite-detat-tourgueniev-dorel': img(
    'universite-detat-tourgueniev-dorel',
    {
      fr: "Façade néoclassique de l'Université d'État Tourgueniev d'Orel",
      en: 'Neoclassical facade of Turgenev Orel State University',
      ar: 'الواجهة الكلاسيكية لجامعة أوريول الحكومية (تورغينيف)',
      ru: 'Фасад Орловского государственного университета имени И. С. Тургенева',
    },
    'Photo : Soul Train — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
};

export const CITY_IMAGES: Record<CitySlug, PageImage> = {
  moscou: img('ville-moscou', {
    fr: 'Cathédrale Saint-Basile sur la place Rouge à Moscou',
    en: "Saint Basil's Cathedral on Red Square in Moscow",
    ar: 'كاتدرائية القديس باسيل في الساحة الحمراء بموسكو',
    ru: 'Собор Василия Блаженного на Красной площади в Москве',
  }),
  'saint-petersbourg': img('ville-saint-petersbourg', {
    fr: 'Pont du Palais levé sur la Neva pendant les nuits blanches de Saint-Pétersbourg',
    en: 'Palace Bridge raised over the Neva during Saint Petersburg white nights',
    ar: 'جسر القصر المرفوع فوق نهر نيفا خلال الليالي البيضاء في سان بطرسبورغ',
    ru: 'Разведённый Дворцовый мост над Невой в белые ночи Санкт-Петербурга',
  }),
  kazan: img(
    'ville-kazan',
    {
      fr: 'Mosquée Qol Chärif dans le kremlin de Kazan',
      en: 'Qolşärif Mosque inside the Kazan Kremlin',
      ar: 'مسجد قول شريف داخل كرملين قازان',
      ru: 'Мечеть Кул-Шариф в Казанском кремле',
    },
    'Photo : A.Savin — Licence Art Libre, Wikimedia Commons',
    LICENSES.fal
  ),
  toula: img(
    'ville-toula',
    {
      fr: 'Vue aérienne du kremlin de Toula et de la cathédrale de la Dormition',
      en: 'Aerial view of the Tula Kremlin and the Assumption Cathedral',
      ar: 'منظر جوي لكرملين تولا وكاتدرائية رقاد السيدة',
      ru: 'Тульский кремль и Успенский собор с высоты птичьего полёта',
    },
    'Photo : A.Savin — Licence Art Libre, Wikimedia Commons',
    LICENSES.fal
  ),
  elets: img(
    'ville-elets',
    {
      fr: "Cathédrale de l'Ascension d'Elets sous la neige",
      en: 'Ascension Cathedral in Yelets under the snow',
      ar: 'كاتدرائية الصعود في يلتس تحت الثلج',
      ru: 'Вознесенский собор в Ельце зимой',
    },
    'Photo : Alexxx1979 — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  lipetsk: img(
    'ville-lipetsk',
    {
      fr: 'Cathédrale de la Nativité sur la place de la Cathédrale à Lipetsk',
      en: 'Nativity Cathedral on Cathedral Square in Lipetsk',
      ar: 'كاتدرائية الميلاد في ساحة الكاتدرائية بليبتسك',
      ru: 'Христорождественский собор на Соборной площади Липецка',
    },
    'Photo : Ludvig14 — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  voronej: img(
    'ville-voronej',
    {
      fr: "Cathédrale de l'Annonciation de Voronej en hiver",
      en: 'Annunciation Cathedral of Voronezh in winter',
      ar: 'كاتدرائية البشارة في فورونيج شتاءً',
      ru: 'Благовещенский собор Воронежа зимой',
    },
    'Photo : Alexxx1979 — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  orel: img(
    'ville-orel',
    {
      fr: "Cathédrale de l'Épiphanie dans le centre d'Orel",
      en: 'Epiphany Cathedral in the centre of Oryol',
      ar: 'كاتدرائية الظهور الإلهي في وسط أوريول',
      ru: 'Богоявленский собор в центре Орла',
    },
    'Photo : Vzorets — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
};

export const FILIERE_IMAGES: Record<FiliereSlug, PageImage> = {
  'medecine-generale': img('medecine-generale', {
    fr: 'Médecin en blouse blanche avec stéthoscope — études de médecine en Russie',
    en: 'Doctor in a white coat with a stethoscope — medical studies in Russia',
    ar: 'طبيب بمعطف أبيض وسماعة طبية — دراسة الطب في روسيا',
    ru: 'Врач в белом халате со стетоскопом — обучение медицине в России',
  }),
  'ingenierie-tech': img('ingenierie-tech', {
    fr: "Ingénieure travaillant sur ordinateur dans un laboratoire d'assemblage",
    en: 'Engineer working on a laptop in an assembly laboratory',
    ar: 'مهندسة تعمل على حاسوب محمول في مختبر تجميع',
    ru: 'Инженер за ноутбуком в сборочной лаборатории',
  }),
  // TODO produit : ajouter une photo dédiée pharmacie (officine/laboratoire) ;
  // en attendant, la page réutilise la photo générique de la section filières.
  pharmacie: img('filieres', {
    fr: 'Étudiants internationaux travaillant ensemble sur leurs ordinateurs portables',
    en: 'International students working together on their laptops',
    ar: 'طلاب دوليون يعملون معًا على حواسيبهم المحمولة',
    ru: 'Иностранные студенты вместе работают за ноутбуками',
  }),
  'medecine-dentaire': img('medecine-dentaire', {
    fr: 'Dentiste examinant une radiographie dentaire',
    en: 'Dentist examining a dental X-ray',
    ar: 'طبيب أسنان يفحص صورة أشعة للأسنان',
    ru: 'Стоматолог изучает рентгеновский снимок зубов',
  }),
  'economie-business': img('economie-business', {
    fr: "Tableaux de bord financiers affichés sur un ordinateur portable",
    en: 'Financial dashboards displayed on a laptop',
    ar: 'لوحات بيانات مالية معروضة على حاسوب محمول',
    ru: 'Финансовые графики на экране ноутбука',
  }),
};

export type SectionImageKey =
  | 'universites'
  | 'filieres'
  | 'villes'
  | 'visa'
  | 'cout-des-etudes'
  | 'comparatif'
  | 'faq'
  | 'blog'
  | 'informatique'
  | 'dossier-inscription'
  | 'accompagnement'
  | 'bourses'
  | 'guides'
  | 'logement-etudiant'
  | 'sante-assurance'
  | 'vie-quotidienne'
  | 'calendrier-candidature'
  | 'choisir-universite'
  | 'famille-parents'
  | 'checklist-depart'
  | 'travail-etudiant'
  | 'apprendre-russe'
  | 'comparatif-france'
  | 'comparatif-roumanie'
  | 'comparatif-tunisie'
  | 'comparatif-turquie'
  | 'comparatif-allemagne'
  | 'comparatif-italie'
  | 'comparatif-chine'
  | 'banque-argent'
  | 'transport-mobilite'
  | 'culture-integration'
  | 'programmes-anglais'
  | 'frais-caches'
  | 'rentree-sessions'
  | 'ramadan-mosquee'
  | 'seance-orientation'
  | 'equivalence-diplome'
  | 'annee-preparatoire';

export const SECTION_IMAGES: Record<SectionImageKey, PageImage> = {
  bourses: img('bourses', {
    fr: "Étudiants en salle de cours à l'université — candidats à une bourse d'études",
    en: 'Students in a university classroom — scholarship applicants',
    ar: 'طلاب في قاعة محاضرات جامعية — مترشحون لمنحة دراسية',
    ru: 'Студенты в университетской аудитории — соискатели стипендии',
  }),
  guides: img('guides', {
    fr: 'Étudiants réunis autour de documents et de carnets de notes',
    en: 'Students gathered around documents and notebooks',
    ar: 'طلبة مجتمعون حول وثائق ودفاتر ملاحظات',
    ru: 'Студенты за столом с документами и тетрадями',
  }),
  'logement-etudiant': img('logement-etudiant', {
    fr: 'Chambre en résidence universitaire avec lits superposés',
    en: 'University dormitory room with bunk beds',
    ar: 'غرفة في الإقامة الجامعية بأسرّة طابقية',
    ru: 'Комната в студенческом общежитии с двухъярусными кроватями',
  }),
  'sante-assurance': img('sante-assurance', {
    fr: 'Stéthoscope posé près d’un ordinateur portable — assurance médicale étudiante',
    en: 'Stethoscope beside a laptop — student medical insurance',
    ar: 'سماعة طبية بجانب حاسوب محمول — التأمين الصحي الطلابي',
    ru: 'Стетоскоп рядом с ноутбуком — студенческая медицинская страховка',
  }),
  'vie-quotidienne': img('vie-quotidienne', {
    fr: 'Rayon de fruits et légumes dans un supermarché — courses du quotidien',
    en: 'Fruit and vegetable aisle in a supermarket — everyday shopping',
    ar: 'قسم الخضر والغلال في متجر كبير — تسوق يومي',
    ru: 'Овощной отдел супермаркета — повседневные покупки',
  }),
  'calendrier-candidature': img('calendrier-candidature', {
    fr: "Agenda ouvert et tasse de café — planifier son dossier d'inscription",
    en: 'Open planner and cup of coffee — planning an application timeline',
    ar: 'أجندة مفتوحة وفنجان قهوة — تخطيط رزنامة الترشح',
    ru: 'Открытый ежедневник и чашка кофе — планирование сроков подачи',
  }),
  'choisir-universite': img('choisir-universite', {
    fr: 'Deux personnes comparent des options sur papier et ordinateurs portables',
    en: 'Two people comparing options on paper and laptops',
    ar: 'شخصان يقارنان الخيارات على الورق وعلى الحواسيب',
    ru: 'Двое сравнивают варианты на бумаге и ноутбуках',
  }),
  'famille-parents': img('famille-parents', {
    fr: 'Famille réunie au coucher du soleil — la décision se prend ensemble',
    en: 'Family gathered at sunset — the decision is taken together',
    ar: 'عائلة مجتمعة عند الغروب — القرار يُتخذ معًا',
    ru: 'Семья вместе на закате — решение принимается сообща',
  }),
  'checklist-depart': img('checklist-depart', {
    fr: 'Liste de vérification cochée à la main avant le départ',
    en: 'Handwritten checklist being ticked off before departure',
    ar: 'قائمة تحقق تُؤشَّر يدويًا قبل السفر',
    ru: 'Чек-лист, отмечаемый от руки перед отъездом',
  }),
  'travail-etudiant': img('travail-etudiant', {
    fr: 'Étudiants travaillant ensemble sur leurs ordinateurs portables',
    en: 'Students working together on their laptops',
    ar: 'طلبة يعملون معًا على حواسيبهم المحمولة',
    ru: 'Студенты работают вместе за ноутбуками',
  }),
  'apprendre-russe': img('apprendre-russe', {
    fr: 'Carnet de notes ouvert avec stylo plume et lunettes — apprendre une langue',
    en: 'Open notebook with a fountain pen and glasses — learning a language',
    ar: 'دفتر ملاحظات مفتوح مع قلم حبر ونظارات — تعلم لغة',
    ru: 'Открытый блокнот с перьевой ручкой и очками — изучение языка',
  }),
  'comparatif-france': img(
    'comparatif-france',
    {
      fr: 'Façade de la Sorbonne à Paris — étudier en France',
      en: 'Facade of the Sorbonne in Paris — studying in France',
      ar: 'واجهة جامعة السوربون في باريس — الدراسة في فرنسا',
      ru: 'Фасад Сорбонны в Париже — учёба во Франции',
    },
    'Photo : Pline — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
  'comparatif-roumanie': img(
    'comparatif-roumanie',
    {
      fr: 'Athénée roumain à Bucarest — étudier en Roumanie',
      en: 'Romanian Athenaeum in Bucharest — studying in Romania',
      ar: 'الأتينيوم الروماني في بوخارست — الدراسة في رومانيا',
      ru: 'Румынский Атенеум в Бухаресте — учёба в Румынии',
    },
    'Photo : Diego Delso — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'comparatif-tunisie': img('comparatif-tunisie', {
    fr: "Avenue Habib Bourguiba vue d'en haut à Tunis — étudier en Tunisie",
    en: 'Habib Bourguiba Avenue seen from above in Tunis — studying in Tunisia',
    ar: 'شارع الحبيب بورقيبة من الأعلى بتونس العاصمة — الدراسة في تونس',
    ru: 'Проспект Хабиба Бургибы с высоты в Тунисе — учёба в Тунисе',
  }),
  'comparatif-turquie': img(
    'comparatif-turquie',
    {
      fr: "Porte monumentale de l'université d'Istanbul — étudier en Turquie",
      en: 'Monumental gate of Istanbul University — studying in Türkiye',
      ar: 'البوابة الرئيسية لجامعة إسطنبول — الدراسة في تركيا',
      ru: 'Главные ворота Стамбульского университета — учёба в Турции',
    },
    'Photo : Medelam — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'comparatif-allemagne': img(
    'comparatif-allemagne',
    {
      fr: "Ancienne université de Heidelberg sur la place universitaire — étudier en Allemagne",
      en: 'Old University of Heidelberg on the university square — studying in Germany',
      ar: 'الجامعة القديمة في هايدلبرغ بساحة الجامعة — الدراسة في ألمانيا',
      ru: 'Старый университет Гейдельберга на Университетской площади — учёба в Германии',
    },
    'Photo : Immanuel Giel — domaine public, Wikimedia Commons',
    LICENSES.publicDomain
  ),
  'comparatif-italie': img(
    'comparatif-italie',
    {
      fr: "Facultés de médecine et de biologie de l'université de Bologne — étudier en Italie",
      en: 'Medicine and biology faculty buildings of the University of Bologna — studying in Italy',
      ar: 'كليتا الطب والبيولوجيا بجامعة بولونيا — الدراسة في إيطاليا',
      ru: 'Корпуса медицинского и биологического факультетов Болонского университета — учёба в Италии',
    },
    'Photo : Vlach Pavel — CC0, Wikimedia Commons',
    LICENSES.cc0
  ),
  'comparatif-chine': img(
    'comparatif-chine',
    {
      fr: "Pagode Boya au bord du lac Weiming, campus de l'université de Pékin — étudier en Chine",
      en: 'Boya Pagoda beside Weiming Lake on the Peking University campus — studying in China',
      ar: 'برج بويا على ضفة بحيرة ويمينغ في حرم جامعة بكين — الدراسة في الصين',
      ru: 'Пагода Боя на берегу озера Вэймин в кампусе Пекинского университета — учёба в Китае',
    },
    'Photo : 2502project — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'banque-argent': img(
    'banque-argent',
    {
      fr: "Tour du quartier d'affaires Moskva-City dominant Moscou",
      en: 'Tower of the Moscow-City business district overlooking Moscow',
      ar: 'برج في الحي المالي موسكو سيتي يطل على موسكو',
      ru: 'Башня делового центра «Москва-Сити» над городом',
    },
    'Photo : A.Savin — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
  'transport-mobilite': img(
    'transport-mobilite',
    {
      fr: 'Quai orné de lustres de la station Komsomolskaïa du métro de Moscou',
      en: 'Chandelier-lit platform of Komsomolskaya station on the Moscow metro',
      ar: 'رصيف محطة كومسومولسكايا المزيّن بالثريات في مترو موسكو',
      ru: 'Платформа станции «Комсомольская» Московского метро с люстрами',
    },
    'Photo : A.Savin — CC BY-SA 3.0, Wikimedia Commons',
    LICENSES.ccBySa3
  ),
  'culture-integration': img(
    'culture-integration',
    {
      fr: "Rue piétonne de l'Arbat à Moscou en hiver, boutiques et passants",
      en: 'Arbat pedestrian street in Moscow in winter, with shops and passers-by',
      ar: 'شارع أرابات للمشاة في موسكو شتاءً بمحلاته والمارة فيه',
      ru: 'Пешеходная улица Арбат в Москве зимой, магазины и прохожие',
    },
    'Photo : Florstein — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'programmes-anglais': img(
    'programmes-anglais',
    {
      fr: "Amphithéâtre de l'université Innopolis pendant une session en anglais",
      en: 'Lecture hall at Innopolis University during an English-language session',
      ar: 'مدرج جامعة إينوبوليس خلال حصة باللغة الإنجليزية',
      ru: 'Лекционный зал Университета Иннополис во время занятия на английском языке',
    },
    'Photo : WWELNUR — CC BY 4.0, Wikimedia Commons',
    LICENSES.ccBy4
  ),
  'frais-caches': img(
    'frais-caches',
    {
      fr: 'Rayon frais et étiquettes de prix en roubles dans un supermarché moscovite',
      en: 'Chilled aisle and rouble price tags in a Moscow supermarket',
      ar: 'قسم المبرّدات وبطاقات الأسعار بالروبل في متجر كبير بموسكو',
      ru: 'Холодильная витрина с ценниками в рублях в московском супермаркете',
    },
    'Photo : Retired electrician — CC0, Wikimedia Commons',
    LICENSES.cc0
  ),
  'ramadan-mosquee': img(
    'ramadan-mosquee',
    {
      fr: 'Mosquée cathédrale de Moscou, dôme doré et minarets turquoise',
      en: 'Moscow Cathedral Mosque, golden dome and turquoise minarets',
      ar: 'جامع موسكو الكبير بقبّته الذهبية ومآذنه الفيروزية',
      ru: 'Московская соборная мечеть: золотой купол и бирюзовые минареты',
    },
    'Photo : MBH — CC BY-SA 4.0, Wikimedia Commons',
    LICENSES.ccBySa4
  ),
  'rentree-sessions': img(
    'rentree-sessions',
    {
      fr: 'Allée bordée de tilleuls et de bancs dans le parc Gorki à Moscou',
      en: 'Lime-tree alley lined with benches in Gorky Park, Moscow',
      ar: 'ممشى تحفّه أشجار الزيزفون والمقاعد في حديقة غوركي بموسكو',
      ru: 'Липовая аллея со скамейками в Парке Горького в Москве',
    },
    'Photo : Юрий Д.К. — CC BY 4.0, Wikimedia Commons',
    LICENSES.ccBy4
  ),
  'seance-orientation': img('seance-orientation', {
    fr: "Séance d'information en amphithéâtre pour de futurs étudiants",
    en: 'Information session in a lecture hall for prospective students',
    ar: 'جلسة إعلامية في مدرج لفائدة الطلبة المقبلين',
    ru: 'Информационная сессия в лектории для будущих студентов',
  }),
  'equivalence-diplome': img('equivalence-diplome', {
    fr: "Étudiant remplissant un dossier de reconnaissance de diplôme",
    en: 'Student filling in a diploma recognition application',
    ar: 'طالب يملأ ملف الاعتراف بالشهادة',
    ru: 'Студент заполняет документы на признание диплома',
  }),
  'annee-preparatoire': img('annee-preparatoire', {
    fr: "Cours en salle de classe avec enseignant — année préparatoire de langue russe",
    en: 'Classroom lesson with a teacher — Russian language foundation year',
    ar: 'درس في قاعة مع أستاذ — السنة التحضيرية للغة الروسية',
    ru: 'Занятие в классе с преподавателем — подготовительный год русского языка',
  }),
  universites: img('universites', {
    fr: 'Étudiants diplômés lançant leur toque lors de la remise des diplômes',
    en: 'Graduating students throwing their caps at the graduation ceremony',
    ar: 'طلاب متخرجون يرمون قبعاتهم في حفل التخرج',
    ru: 'Выпускники подбрасывают академические шапочки на церемонии выпуска',
  }),
  filieres: img('filieres', {
    fr: 'Étudiants internationaux travaillant ensemble sur leurs ordinateurs portables',
    en: 'International students working together on their laptops',
    ar: 'طلاب دوليون يعملون معًا على حواسيبهم المحمولة',
    ru: 'Иностранные студенты вместе работают за ноутбуками',
  }),
  villes: img('villes', {
    fr: 'Kremlin de Moscou et cathédrale Saint-Basile sous la neige',
    en: "Moscow Kremlin and Saint Basil's Cathedral under the snow",
    ar: 'كرملين موسكو وكاتدرائية القديس باسيل تحت الثلج',
    ru: 'Московский Кремль и собор Василия Блаженного под снегом',
  }),
  visa: img('visa', {
    fr: "Aile d'avion au-dessus des nuages au coucher du soleil — départ pour étudier en Russie",
    en: 'Airplane wing above the clouds at sunset — departure to study in Russia',
    ar: 'جناح طائرة فوق الغيوم عند الغروب — السفر للدراسة في روسيا',
    ru: 'Крыло самолёта над облаками на закате — вылет на учёбу в Россию',
  }),
  'cout-des-etudes': img('cout-des-etudes', {
    fr: 'Calculatrice et documents de budget étudiant sur un bureau',
    en: 'Calculator and student budget documents on a desk',
    ar: 'آلة حاسبة ووثائق ميزانية الطالب على مكتب',
    ru: 'Калькулятор и документы студенческого бюджета на столе',
  }),
  comparatif: img('comparatif', {
    fr: "Poignée de main entre un conseiller et un étudiant — accompagnement RusStudy",
    en: 'Handshake between an advisor and a student — RusStudy support',
    ar: 'مصافحة بين مستشار وطالب — مرافقة RusStudy',
    ru: 'Рукопожатие консультанта и студента — сопровождение RusStudy',
  }),
  faq: img('faq', {
    fr: "Rayonnages de bibliothèque éclairés par des ampoules suspendues",
    en: 'Library shelves lit by hanging light bulbs',
    ar: 'رفوف مكتبة مضاءة بمصابيح معلقة',
    ru: 'Библиотечные полки, освещённые подвесными лампами',
  }),
  blog: img('blog', {
    fr: "Bureau d'étudiant avec carnet de notes, café et ordinateur portable",
    en: 'Student desk with a notebook, coffee and a laptop',
    ar: 'مكتب طالب مع دفتر ملاحظات وقهوة وحاسوب محمول',
    ru: 'Студенческий стол с блокнотом, кофе и ноутбуком',
  }),
  informatique: img('informatique', {
    fr: "Lignes de code affichées sur un écran d'ordinateur",
    en: 'Lines of code displayed on a computer screen',
    ar: 'أسطر برمجية معروضة على شاشة حاسوب',
    ru: 'Строки программного кода на экране компьютера',
  }),
  accompagnement: img('accompagnement', {
    fr: "Avion à l'atterrissage sous un ciel bleu — arrivée et accueil à l'aéroport en Russie",
    en: 'Airplane landing under a blue sky — arrival and airport pickup in Russia',
    ar: 'طائرة تهبط تحت سماء زرقاء — الوصول والاستقبال في المطار في روسيا',
    ru: 'Самолёт заходит на посадку в голубом небе — прилёт и встреча в аэропорту России',
  }),
  'dossier-inscription': img('dossier-inscription', {
    fr: "Étudiant signant son dossier d'inscription universitaire",
    en: 'Student signing their university application file',
    ar: 'طالب يوقّع ملف تسجيله الجامعي',
    ru: 'Студент подписывает документы для поступления в университет',
  }),
};

/** Illustration thématique de chaque article du blog. */
export const BLOG_IMAGES: Record<BlogSlug, PageImage> = {
  'orientation-universitaire-tunisie-2026': SECTION_IMAGES.filieres,
  'score-orientation-insuffisant-tunisie-2026': SECTION_IMAGES.universites,
  'etudier-medecine-russie-bac-tunisien': FILIERE_IMAGES['medecine-generale'],
  'cout-etudes-russie-etudiant-tunisien-2026': SECTION_IMAGES['cout-des-etudes'],
  'meilleures-universites-russie-etudiants-tunisiens-2026': UNIVERSITY_IMAGES['universite-detat-de-moscou'],
  'inscription-universite-russie-depuis-tunisie-2026': SECTION_IMAGES['dossier-inscription'],
  'etudier-russie-apres-bac-tunisien': CITY_IMAGES.moscou,
  'etudier-informatique-russie-bac-tunisien': SECTION_IMAGES.informatique,
  'etudier-ingenierie-russie-bac-tunisien': FILIERE_IMAGES['ingenierie-tech'],
  'audit-technique-russieetudes-com-2026': SECTION_IMAGES.blog,
  'benchmark-marche-agences-etudes-russie-2026': FILIERE_IMAGES['economie-business'],
  'bourse-etudes-russie-tunisien': SECTION_IMAGES['seance-orientation'],
  'session-fevrier-padfac-russie': SECTION_IMAGES.villes,
  'equivalence-diplome-russe-tunisie': SECTION_IMAGES['equivalence-diplome'],
  'annee-preparatoire-langue-russe': SECTION_IMAGES['annee-preparatoire'],
  'etudier-en-russie-depuis-le-maroc': SECTION_IMAGES.visa,
  'etudier-en-russie-depuis-l-algerie': SECTION_IMAGES.accompagnement,
  'retroplanning-octobre-decembre-session-fevrier': SECTION_IMAGES['calendrier-candidature'],
  'lettre-invitation-etudes-russie-delais': SECTION_IMAGES['dossier-inscription'],
  'refus-visa-etudiant-russie-que-faire': SECTION_IMAGES.visa,
  'choisir-son-universite-russe': SECTION_IMAGES['choisir-universite'],
  'etudier-medecine-dentaire-russie': FILIERE_IMAGES['medecine-dentaire'],
  'etudier-pharmacie-russie-bac-tunisien': FILIERE_IMAGES.pharmacie,
  'guide-des-parents-etudes-russie': SECTION_IMAGES['famille-parents'],
  'preparer-son-depart-hiver-russie': SECTION_IMAGES.villes,
  'valise-depart-russie-checklist': SECTION_IMAGES['checklist-depart'],
  'budget-familial-etudes-russie': SECTION_IMAGES['cout-des-etudes'],
  'reussir-premier-semestre-russie': SECTION_IMAGES['annee-preparatoire'],
  'master-en-russie-apres-licence': SECTION_IMAGES.universites,
  'travailler-pendant-ses-etudes-russie': SECTION_IMAGES['travail-etudiant'],
  'apprendre-le-russe-avant-de-partir': SECTION_IMAGES['apprendre-russe'],
  'programmes-en-anglais-universites-russes': SECTION_IMAGES['programmes-anglais'],
  'frais-caches-etudes-en-russie': SECTION_IMAGES['frais-caches'],
  'rentree-septembre-ou-session-fevrier': SECTION_IMAGES['rentree-sessions'],
  'erreurs-qui-font-rejeter-un-dossier-russie': SECTION_IMAGES['dossier-inscription'],
  'certificats-medicaux-visa-etudiant-russie': SECTION_IMAGES['sante-assurance'],
  'apostille-ou-legalisation-consulaire-tunisie': SECTION_IMAGES['equivalence-diplome'],
  'etudier-en-russie-depuis-la-libye': SECTION_IMAGES.accompagnement,
  'moscou-ou-province-etudier-en-russie': SECTION_IMAGES.villes,
  'verifier-universite-russe-reconnue': SECTION_IMAGES.universites,
  'etudier-la-psychologie-en-russie': SECTION_IMAGES.filieres,
  'enregistrement-migratoire-premiers-jours-russie': SECTION_IMAGES.visa,
  'se-soigner-en-russie-medecin-pharmacie': SECTION_IMAGES['sante-assurance'],
  'noel-nouvel-an-calendrier-universitaire-russe': SECTION_IMAGES['culture-integration'],
  'arriver-en-fevrier-premiere-semaine': SECTION_IMAGES['checklist-depart'],
  'ramadan-et-etudes-en-russie': SECTION_IMAGES['ramadan-mosquee'],
  'apres-le-diplome-exercer-en-tunisie': SECTION_IMAGES['travail-etudiant'],
};
