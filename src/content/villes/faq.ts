import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';
import type { CityFacts } from './copy';

const FAQ: Record<Lang, (f: CityFacts) => FaqEntry[]> = {
  fr: (f) => [
    {
      question: `Le logement est-il garanti pour étudier à ${f.name} ?`,
      answer: `Oui : RusStudy pré-réserve votre chambre dans les résidences universitaires sécurisées de ${f.name} avant votre arrivée, avec surveillance 24h/24, ou vous oriente vers un appartement partagé selon votre budget.`,
    },
    {
      question: `Y a-t-il une communauté tunisienne à ${f.name} ?`,
      answer: `Oui : RusStudy dispose de correspondants et d'une communauté étudiante tunisienne active dans chacune de ses villes universitaires partenaires, dont ${f.name}, pour faciliter votre intégration dès l'arrivée.`,
    },
  ],
  en: (f) => [
    {
      question: `Is housing guaranteed for studying in ${f.name}?`,
      answer: `Yes: RusStudy pre-books your room in secure university residences in ${f.name} before you arrive, monitored 24/7, or guides you toward a shared apartment depending on your budget.`,
    },
    {
      question: `Is there a Tunisian community in ${f.name}?`,
      answer: `Yes: RusStudy has local contacts and an active Tunisian student community in each of its partner university cities, including ${f.name}, to help you settle in from day one.`,
    },
  ],
  ar: (f) => [
    {
      question: `هل السكن مضمون للدراسة في ${f.name}؟`,
      answer: `نعم: تحجز RusStudy مسبقًا غرفتك في الإقامات الجامعية الآمنة في ${f.name} قبل وصولك، مع مراقبة على مدار الساعة، أو توجهك نحو شقة مشتركة حسب ميزانيتك.`,
    },
    {
      question: `هل توجد جالية تونسية في ${f.name}؟`,
      answer: `نعم: تمتلك RusStudy مراسلين وجالية طلابية تونسية نشطة في كل مدنها الجامعية الشريكة، بما فيها ${f.name}، لتسهيل اندماجك منذ وصولك.`,
    },
  ],
  ru: (f) => [
    {
      question: `Гарантировано ли жильё при учёбе в городе ${f.name}?`,
      answer: `Да: RusStudy заранее бронирует для вас место в охраняемом студенческом общежитии в городе ${f.name} с круглосуточным наблюдением, либо помогает подобрать долю в квартире в зависимости от бюджета.`,
    },
    {
      question: `Есть ли тунисское сообщество в городе ${f.name}?`,
      answer: `Да: у RusStudy есть представители и активное сообщество тунисских студентов в каждом партнёрском университетском городе, включая ${f.name}, что помогает быстрее адаптироваться по прибытии.`,
    },
  ],
};

export function buildCityFaq(lang: Lang, facts: CityFacts): FaqEntry[] {
  return FAQ[lang](facts);
}
