import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { FILIERE_SLUGS } from '../../content/filieres/registry';
import { buildFiliereIndexCopy } from '../../content/filieres/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { FILIERES_SECTION_LABEL, basePathFor } from './labels';

export default function FilieresIndexPage({ lang }: { lang: Lang }) {
  const items = translations[lang].programs.items.map((p, i) => ({ ...p, slug: FILIERE_SLUGS[i] }));
  const copy = buildFiliereIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/filieres', lang, { filieres: FILIERES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {FILIERES_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((p) => (
          <Link key={p.slug} href={`${basePath}/filieres/${p.slug}`} className="t-card rounded-[18px] p-5 block hover:opacity-80 transition-opacity">
            <span className="bg-black text-white rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-wide">{p.tag}</span>
            <div className="font-bold text-base mt-2">{p.name}</div>
            <div className="text-xs opacity-60 mt-0.5">{p.duration} · {p.price}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
