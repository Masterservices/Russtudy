import type { Lang } from '../../i18n';
import { buildVisaCopy } from '../../content/visa/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { VISA_SECTION_LABEL } from './labels';

export default function VisaPage({ lang }: { lang: Lang }) {
  const copy = buildVisaCopy(lang);
  const breadcrumb = buildBreadcrumb('/visa', lang, { visa: VISA_SECTION_LABEL[lang] });

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {copy.h1}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-8">{copy.intro}</p>

      <div className="flex flex-col gap-2 max-w-2xl mb-9">
        {copy.steps.map((step) => (
          <div key={step.title} className="t-card rounded-[18px] p-6">
            <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{step.title}</h2>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="t-card-dark rounded-[18px] p-6 max-w-2xl mb-5">
        <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{copy.guaranteeTitle}</h2>
        <p className="text-[0.9rem] leading-[1.65] opacity-85">{copy.guaranteeText}</p>
      </div>

      <div className="t-card rounded-[18px] p-6 max-w-2xl" style={{ borderStyle: 'dashed', borderColor: 'var(--gold)' }}>
        <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{copy.padfacTitle}</h2>
        <p className="text-[0.9rem] leading-[1.65] opacity-80">{copy.padfacText}</p>
      </div>
    </ContentPageShell>
  );
}
