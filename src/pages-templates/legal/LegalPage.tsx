import type { Lang } from '../../i18n';
import { buildLegalCopy, type LegalKind } from '../../content/legal/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { LEGAL_PATH, LEGAL_SECTION_LABEL } from './labels';

export default function LegalPage({ lang, kind }: { lang: Lang; kind: LegalKind }) {
  const copy = buildLegalCopy(kind, lang);
  const path = LEGAL_PATH[kind];
  const segment = path.replace(/^\//, '');
  const breadcrumb = buildBreadcrumb(path, lang, { [segment]: LEGAL_SECTION_LABEL[kind][lang] });

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">
        {copy.h1}
      </h1>
      <p className="text-[0.78rem] opacity-55 mb-4">{copy.updated}</p>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-8">{copy.intro}</p>

      <div className="flex flex-col gap-2 max-w-2xl">
        {copy.sections.map((section) => (
          <section key={section.heading} className="t-card rounded-[18px] p-6">
            <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[0.9rem] leading-[1.65] opacity-80 mb-2 last:mb-0">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </ContentPageShell>
  );
}
