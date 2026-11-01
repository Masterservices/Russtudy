import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { FILIERE_SLUGS } from '../../content/filieres/registry';
import { buildFiliereDetailCopy } from '../../content/filieres/copy';
import { buildCourseSchema } from '../../seo/schema/course';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { FILIERES_SECTION_LABEL, basePathFor } from './labels';

export default function FiliereDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const item = translations[lang].programs.items[index];
  const slug = FILIERE_SLUGS[index];
  const copy = buildFiliereDetailCopy(lang, item);
  const schema = buildCourseSchema({
    slug: `filieres/${slug}`,
    lang,
    title: copy.title,
    description: copy.description,
    h1: item.name,
    schemaType: 'Course',
    updatedAt: '2026-07-08',
    name: item.name,
    duration: item.duration,
    priceFrom: item.price,
    language: [],
  });
  const breadcrumb = buildBreadcrumb(`/filieres/${slug}`, lang, {
    filieres: FILIERES_SECTION_LABEL[lang],
    [slug]: item.name,
  });
  const basePath = basePathFor(lang);

  const others = translations[lang].programs.items.map((p, i) => ({ ...p, slug: FILIERE_SLUGS[i] })).filter((_, i) => i !== index);

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <span className="t-chip inline-block text-[0.7rem] font-bold px-3 py-1.5 mb-3">{item.tag}</span>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">{item.name}</h1>
      <p className="text-sm t-muted mb-4">{item.duration} · {item.price}</p>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-5">{copy.intro}</p>

      <ul className="space-y-1.5 text-[0.9rem] max-w-xl">
        {item.details.map((d) => (
          <li key={d} className="t-card rounded-[12px] px-4 py-2.5">✓ {d}</li>
        ))}
      </ul>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{FILIERES_SECTION_LABEL[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {others.map((p) => (
          <Link key={p.slug} href={`${basePath}/filieres/${p.slug}`} className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity">
            <div className="font-bold text-sm">{p.name}</div>
            <div className="text-xs opacity-60 mt-0.5">{p.duration} · {p.price}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
