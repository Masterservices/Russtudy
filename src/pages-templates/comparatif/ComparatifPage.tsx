import type { Lang } from '../../i18n';
import { buildComparatifCopy } from '../../content/comparatif/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { COMPARATIF_SECTION_LABEL } from './labels';

export default function ComparatifPage({ lang }: { lang: Lang }) {
  const copy = buildComparatifCopy(lang);
  const breadcrumb = buildBreadcrumb('/comparatif', lang, { comparatif: COMPARATIF_SECTION_LABEL[lang] });

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {copy.h1}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-8">{copy.intro}</p>

      <div className="flex flex-col gap-2 max-w-2xl">
        {copy.sections.map((section) => (
          <div key={section.heading} className="t-card rounded-[18px] p-6">
            <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{section.heading}</h2>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{section.text}</p>
          </div>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{copy.tableTitle}</h2>
      <p className="text-[0.9rem] leading-[1.65] max-w-2xl opacity-80 mb-4">{copy.tableIntro}</p>

      <div className="t-card rounded-[18px] overflow-auto max-w-3xl">
        <table className="w-full border-collapse text-[0.8rem] min-w-[680px]">
          <thead>
            <tr>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft"> </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide t-c5 border-b t-line-soft">RusStudy</th>
              {copy.competitors.map((name) => (
                <th key={name} scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copy.table.map((row) => (
              <tr key={row.criterion}>
                <th scope="row" className="p-3 text-start font-bold border-b t-line-soft">{row.criterion}</th>
                <td className="p-3 font-bold t-green-text border-b t-line-soft" style={{ background: 'rgba(168,85,247,.08)' }}>
                  {row.rusStudy}
                </td>
                {row.values.map((value, idx) => (
                  <td key={idx} className="p-3 opacity-70 border-b t-line-soft">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[0.72rem] opacity-50 max-w-2xl mt-2">{copy.tableSourceNote}</p>

      <p className="text-[0.85rem] leading-[1.65] max-w-2xl opacity-75 mt-6">
        {copy.othersIntro} {copy.others.join(' · ')}
      </p>
    </ContentPageShell>
  );
}
