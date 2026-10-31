import type { FiliereSlug } from '../filieres/registry';
import type { UniversitySlug } from './registry';

/*
 * Données factuelles des universités, indépendantes de la langue.
 *
 * Trois statuts, et trois seulement. « unknown » n'est pas un défaut de
 * remplissage : c'est une information en soi, affichée telle quelle sur la
 * page. Un champ absent de nos sources n'est jamais comblé par une valeur
 * plausible, ni déduit du comportement d'un autre établissement.
 *
 * Sources : pages institutionnelles des universités (site officiel, pages
 * destinées aux étudiants internationaux, pages d'admission et de facultés).
 *
 * ATTENTION À LA MISE À JOUR : les programmes ouverts aux internationaux et
 * la langue d'enseignement changent d'une année universitaire à l'autre. Ces
 * champs sont présentés sur le site comme étant à vérifier auprès de
 * l'établissement, jamais comme une garantie.
 */

/** Fait binaire vérifié, ou absence de vérification suffisante. */
export type FactStatus = 'yes' | 'no' | 'unknown';

/** Statut d'une filière vis-à-vis des étudiants internationaux. */
export type ProgramStatus = 'offered' | 'not-offered' | 'unknown';

export interface UniversitySource {
  label: string;
  url: string;
}

export interface UniversityFacts {
  /** Site officiel de l'établissement. */
  officialSite?: string;
  /** Faculté ou département préparatoire pour étudiants étrangers. */
  prepFaculty: FactStatus;
  /** Statut de chacune des cinq filières documentées par le site. */
  programs: Record<FiliereSlug, ProgramStatus>;
  teachingRussian: FactStatus;
  teachingEnglish: FactStatus;
  housing: FactStatus;
  /** Précision factuelle sur le parc de logement, uniquement si vérifiée. */
  housingDetail?: { fr: string; en: string; ar: string; ru: string };
  sources: UniversitySource[];
}

const NO_PROGRAMS: Record<FiliereSlug, ProgramStatus> = {
  'medecine-generale': 'not-offered',
  'medecine-dentaire': 'not-offered',
  pharmacie: 'not-offered',
  'ingenierie-tech': 'unknown',
  'economie-business': 'unknown',
};

export const UNIVERSITY_FACTS: Record<UniversitySlug, UniversityFacts> = {
  'universite-detat-de-moscou': {
    officialSite: 'https://www.msu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'unknown',
      pharmacie: 'unknown',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'unknown',
    housing: 'yes',
    sources: [
      { label: 'MGU — histoire et traditions', url: 'https://openday.msu.ru/en/history' },
      { label: 'MGU — programmes pour candidats internationaux', url: 'https://openday.msu.ru/en/programs' },
      { label: "MGU — faculté d'économie, étudiants étrangers", url: 'https://www.econ.msu.ru/students/foreign/' },
    ],
  },
  'polytechnique-de-saint-petersbourg': {
    officialSite: 'https://www.spbstu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'not-offered',
      'medecine-dentaire': 'not-offered',
      pharmacie: 'not-offered',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'yes',
    housing: 'yes',
    housingDetail: {
      fr: 'Le campus comprend un complexe de dix-huit résidences.',
      en: 'The campus includes a complex of eighteen halls of residence.',
      ar: 'يضمّ الحرم الجامعي مجمّعًا من ثماني عشرة إقامة.',
      ru: 'Кампус включает комплекс из восемнадцати общежитий.',
    },
    sources: [
      { label: 'SPbPU — histoire', url: 'https://english.spbstu.ru/university/about-the-university/history/' },
      { label: 'SPbPU — programmes préparatoires', url: 'https://int.spbstu.ru/en/programmy_dovuzovskoy_podgotovki/' },
      { label: 'SPbPU — catalogue des programmes', url: 'https://int.spbstu.ru/en/catalogue/master/' },
    ],
  },
  'universite-de-medecine-pirogov': {
    officialSite: 'https://rsmu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'offered',
      pharmacie: 'offered',
      'ingenierie-tech': 'not-offered',
      'economie-business': 'not-offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'yes',
    housing: 'unknown',
    sources: [
      { label: 'Pirogov — informations officielles', url: 'https://rsmu.ru/sveden/common/' },
      { label: 'Pirogov — cours préparatoires pour étrangers', url: 'https://rsmu.ru/academics/for-school-students/preparation-for-international-students' },
      { label: 'Pirogov — médecine générale', url: 'https://rsmu.ru/academics/undergraduate/general-medicine' },
      { label: 'Pirogov — pharmacie', url: 'https://rsmu.ru/academics/undergraduate/pharmacy' },
    ],
  },
  'universite-rudn': {
    officialSite: 'https://www.rudn.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'offered',
      pharmacie: 'offered',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'yes',
    housing: 'yes',
    housingDetail: {
      fr: "L'université annonce plus de neuf mille places sur sa page officielle de logement.",
      en: 'The university states more than nine thousand places on its official accommodation page.',
      ar: 'تعلن الجامعة أكثر من تسعة آلاف مقعد على صفحتها الرسمية للسكن.',
      ru: 'На официальной странице о проживании университет указывает более девяти тысяч мест.',
    },
    sources: [
      { label: 'RUDN — informations officielles', url: 'https://www.rudn.ru/sveden/common/' },
      { label: 'RUDN — faculté préparatoire', url: 'https://ru.rudn.ru/foreign-students/podgotovitelnyy-fakultet/' },
      { label: 'RUDN — admissions des citoyens étrangers', url: 'https://www.rudn.ru/admissions/admission-for-foreign-citizens/admission-current-year' },
      { label: 'RUDN — logement', url: 'https://www.rudn.ru/life/accomodation' },
    ],
  },
  'universite-technique-bauman': {
    officialSite: 'https://bmstu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'not-offered',
      'medecine-dentaire': 'not-offered',
      pharmacie: 'not-offered',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'yes',
    housing: 'yes',
    housingDetail: {
      fr: 'Les pages internationales de l’université mentionnent dix résidences.',
      en: 'The university international pages mention ten halls of residence.',
      ar: 'تذكر الصفحات الدولية للجامعة عشر إقامات.',
      ru: 'На международных страницах университета упоминаются десять общежитий.',
    },
    sources: [
      { label: 'Bauman — informations officielles', url: 'https://ib.bmstu.ru/about/' },
      { label: 'Bauman — département préparatoire pour étrangers', url: 'https://backend.do.bmstu.ru/foreign-students/' },
      { label: 'Bauman — présentation internationale', url: 'https://opendoors.bmstu.ru/eng.html' },
    ],
  },
  'universite-de-kazan': {
    officialSite: 'https://kpfu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'offered',
      pharmacie: 'offered',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'yes',
    housing: 'yes',
    sources: [
      { label: 'KFU — histoire', url: 'https://eng.kpfu.ru/history-honors/' },
      { label: 'KFU — étudiants étrangers', url: 'https://www.kpfu.ru/philology-culture/inostrannym-studentam' },
      { label: 'KFU — logement des étudiants étrangers', url: 'https://admissions.kpfu.ru/prozhivanie/zaselenie-inostrannyx-grazhdan/' },
    ],
  },
  'institut-stroganov-dart': {
    officialSite: 'https://mghpa.ru/',
    prepFaculty: 'unknown',
    programs: NO_PROGRAMS,
    teachingRussian: 'unknown',
    teachingEnglish: 'unknown',
    housing: 'unknown',
    sources: [{ label: 'Académie Stroganov — site officiel', url: 'https://mghpa.ru/' }],
  },
  'universite-detat-de-toula': {
    officialSite: 'https://tulsu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'unknown',
      pharmacie: 'unknown',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'unknown',
    housing: 'yes',
    housingDetail: {
      fr: 'Le campus étudiant comprend douze résidences.',
      en: 'The student campus comprises twelve halls of residence.',
      ar: 'يضمّ الحرم الطلابي اثنتي عشرة إقامة.',
      ru: 'Студенческий кампус включает двенадцать общежитий.',
    },
    sources: [
      { label: 'TulGU — informations officielles', url: 'https://tulsu.ru/sveden/common' },
      { label: 'TulGU — activité internationale', url: 'https://tulsu.ru/international-cooperation/international-activity-statistics/international-activity-statistics' },
      { label: "TulGU — règles d'admission et logement", url: 'https://abitur71.tsu.tula.ru/rules' },
    ],
  },
  'universite-detat-elets-bounine': {
    officialSite: 'https://elsu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'unknown',
      pharmacie: 'offered',
      'ingenierie-tech': 'unknown',
      'economie-business': 'unknown',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'unknown',
    housing: 'yes',
    sources: [
      { label: 'EGU — département préparatoire pour étrangers', url: 'https://elsu.ru/structure/world/17866-podgotovitelnoe-otdelenie-dlja-inostrannyh-grazhdan.html' },
      { label: 'EGU — institut médical', url: 'https://med.elsu.ru/o-fakultete/' },
    ],
  },
  'universite-technique-detat-de-lipetsk': {
    officialSite: 'https://stu.lipetsk.ru/',
    prepFaculty: 'unknown',
    programs: {
      'medecine-generale': 'unknown',
      'medecine-dentaire': 'unknown',
      pharmacie: 'unknown',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'unknown',
    teachingEnglish: 'unknown',
    housing: 'unknown',
    sources: [{ label: 'LGTU — présentation et histoire', url: 'https://stu.lipetsk.ru/common/about.html' }],
  },
  'universite-detat-de-voronej': {
    officialSite: 'https://www.vsu.ru/',
    prepFaculty: 'yes',
    programs: {
      'medecine-generale': 'unknown',
      'medecine-dentaire': 'unknown',
      pharmacie: 'offered',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'yes',
    teachingEnglish: 'yes',
    housing: 'yes',
    housingDetail: {
      fr: 'Plusieurs résidences disposent explicitement de places pour étudiants étrangers.',
      en: 'Several halls explicitly have places for international students.',
      ar: 'عدة إقامات بها صراحة مقاعد للطلبة الأجانب.',
      ru: 'В нескольких общежитиях прямо предусмотрены места для иностранных студентов.',
    },
    sources: [
      { label: 'VSU — histoire', url: 'https://www.vsu.ru/ru/university/general/history/' },
      { label: 'VSU — préparatoire pour étudiants internationaux', url: 'https://www.vsu.ru/english/study/pre_university.html' },
      { label: 'VSU — résidences universitaires', url: 'https://www.vsu.ru/ru/university/education/dorm.html' },
    ],
  },
  'universite-detat-tourgueniev-dorel': {
    officialSite: 'https://oreluniver.ru/',
    prepFaculty: 'unknown',
    programs: {
      'medecine-generale': 'offered',
      'medecine-dentaire': 'offered',
      pharmacie: 'offered',
      'ingenierie-tech': 'offered',
      'economie-business': 'offered',
    },
    teachingRussian: 'unknown',
    teachingEnglish: 'unknown',
    housing: 'unknown',
    sources: [
      { label: 'OGU — activité internationale', url: 'https://oreluniver.ru/international/target' },
      { label: 'OGU — enseignement médical', url: 'https://oreluniver.ru/edustruc/chair/243' },
    ],
  },
};
