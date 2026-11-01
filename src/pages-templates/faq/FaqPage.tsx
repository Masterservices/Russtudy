import { translations, type Lang } from '../../i18n';
import { buildFaqPageCopy } from '../../content/faq-page/copy';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { FAQ_PAGE_SECTION_LABEL } from './labels';

export default function FaqPage({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const copy = buildFaqPageCopy(lang);
  const schema = buildFaqPageSchema(t.faq.items);
  const breadcrumb = buildBreadcrumb('/faq', lang, { faq: FAQ_PAGE_SECTION_LABEL[lang] });

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {t.faq.title} {t.faq.titleHl}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-8">{t.faq.sub}</p>

      <div className="flex flex-col gap-2 max-w-2xl">
        {t.faq.items.map((item) => (
          <div key={item.question} className="t-card rounded-[18px] p-6">
            <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{item.question}</h2>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{item.answer}</p>
          </div>
        ))}
      </div>
    </ContentPageShell>
  );
}
