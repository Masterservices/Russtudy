import type { Lang } from '../../i18n';
import type { FaqEntry } from '../../seo/schema/faqPage';
import type { FiliereFacts } from './copy';

const FAQ: Record<Lang, (f: FiliereFacts) => FaqEntry[]> = {
  fr: (f) => [
    {
      question: `Faut-il parler russe pour étudier ${f.name} ?`,
      answer: `Non, ce n'est pas obligatoire : ${f.name} est accessible en anglais dans les filières les plus demandées, ou via une année préparatoire linguistique en Russie pour les étudiants qui préfèrent apprendre le russe avant de commencer.`,
    },
    {
      question: `Quels sont les frais et la durée pour ${f.name} ?`,
      answer: `Cette filière dure ${f.duration}, pour des frais de scolarité ${f.price} payés directement à l'université partenaire — sans frais cachés ni intermédiaire financier.`,
    },
  ],
  en: (f) => [
    {
      question: `Do I need to speak Russian to study ${f.name}?`,
      answer: `No, it isn't required: ${f.name} is available in English in the most popular tracks, or via a preparatory language year in Russia for students who prefer to learn Russian before starting.`,
    },
    {
      question: `What are the fees and duration for ${f.name}?`,
      answer: `This program lasts ${f.duration}, with tuition of ${f.price} paid directly to the partner university — no hidden fees, no financial middleman.`,
    },
  ],
  ar: (f) => [
    {
      question: `هل يجب التحدث بالروسية لدراسة ${f.name}؟`,
      answer: `لا، الأمر غير إلزامي: يمكن دراسة ${f.name} باللغة الإنجليزية في التخصصات الأكثر طلبًا، أو عبر سنة تحضيرية لغوية في روسيا للطلبة الذين يفضلون تعلّم الروسية قبل البدء.`,
    },
    {
      question: `ما هي الرسوم ومدة الدراسة لتخصص ${f.name}؟`,
      answer: `تمتد هذه الدراسة على ${f.duration}، برسوم ${f.price} تُدفع مباشرة للجامعة الشريكة — دون رسوم خفية أو وسيط مالي.`,
    },
  ],
  ru: (f) => [
    {
      question: `Нужно ли говорить по-русски, чтобы изучать «${f.name}»?`,
      answer: `Нет, это не обязательно: «${f.name}» доступно на английском языке по самым востребованным направлениям, либо через подготовительный языковой год в России для тех, кто предпочитает сначала выучить русский.`,
    },
    {
      question: `Какова стоимость и длительность обучения по направлению «${f.name}»?`,
      answer: `Обучение длится ${f.duration}, стоимость составляет ${f.price} и оплачивается напрямую в партнёрский вуз — без скрытых платежей и финансовых посредников.`,
    },
  ],
};

export function buildFiliereFaq(lang: Lang, facts: FiliereFacts): FaqEntry[] {
  return FAQ[lang](facts);
}
