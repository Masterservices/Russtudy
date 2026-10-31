import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';
import type { UniversityFacts } from './copy';

const FAQ: Record<Lang, (f: UniversityFacts) => FaqEntry[]> = {
  fr: (f) => [
    {
      question: `Le diplôme de ${f.name} est-il reconnu en Tunisie ?`,
      answer: `Oui. ${f.name} est une université d'État russe (${f.rank}), et les diplômes délivrés par les universités d'État russes sont reconnus en Tunisie ainsi qu'à l'international ; les cursus de médecine bénéficient en plus de la reconnaissance de l'OMS.`,
    },
    {
      question: `Comment RusStudy accompagne mon admission à ${f.name} ?`,
      answer: `RusStudy gère votre dossier de bout en bout pour ${f.name} : traduction assermentée des documents, suivi de l'admission auprès de l'université, obtention de la lettre d'invitation officielle, dossier de visa et accueil à l'arrivée en Russie.`,
    },
  ],
  en: (f) => [
    {
      question: `Is a degree from ${f.name} recognized in Tunisia?`,
      answer: `Yes. ${f.name} is a Russian state university (${f.rank}), and degrees issued by Russian state universities are recognized in Tunisia and internationally; medicine programs additionally benefit from WHO recognition.`,
    },
    {
      question: `How does RusStudy support my admission to ${f.name}?`,
      answer: `RusStudy manages your file end to end for ${f.name}: sworn translation of documents, follow-up with the university, the official invitation letter, the visa file and airport pickup on arrival in Russia.`,
    },
  ],
  ar: (f) => [
    {
      question: `هل شهادة ${f.name} معترف بها في تونس؟`,
      answer: `نعم. ${f.name} هي جامعة حكومية روسية (${f.rank})، والشهادات الصادرة عن الجامعات الحكومية الروسية معترف بها في تونس وعالميًا؛ كما تحظى تخصصات الطب باعتراف إضافي من منظمة الصحة العالمية.`,
    },
    {
      question: `كيف ترافقني RusStudy للقبول في ${f.name}؟`,
      answer: `تتكفل RusStudy بملفك بالكامل من أجل ${f.name}: الترجمة المحلفة للوثائق، متابعة القبول لدى الجامعة، الحصول على رسالة الدعوة الرسمية، ملف التأشيرة والاستقبال عند الوصول إلى روسيا.`,
    },
  ],
  ru: (f) => [
    {
      question: `Признаётся ли диплом ${f.name} в Тунисе?`,
      answer: `Да. ${f.name} — государственный российский вуз (${f.rank}), и дипломы государственных российских вузов признаются в Тунисе и на международном уровне; медицинские программы дополнительно признаются ВОЗ.`,
    },
    {
      question: `Как RusStudy сопровождает поступление в ${f.name}?`,
      answer: `RusStudy полностью ведёт ваше досье для поступления в ${f.name}: заверенный перевод документов, сопровождение при поступлении, получение официального приглашения, визовое досье и встреча по прибытии в Россию.`,
    },
  ],
};

export function buildUniversityFaq(lang: Lang, facts: UniversityFacts): FaqEntry[] {
  return FAQ[lang](facts);
}
