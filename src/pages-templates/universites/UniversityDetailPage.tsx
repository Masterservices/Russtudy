import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import { buildUniversityDetailCopy } from '../../content/universites/copy';
import { buildCollegeSchema } from '../../seo/schema/college';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { UNIVERSITES_SECTION_LABEL, basePathFor } from './labels';

export default function UniversityDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const item = translations[lang].universities.items[index];
  const slug = UNIVERSITY_SLUGS[index];
  const copy = buildUniversityDetailCopy(lang, item);
  const schema = buildCollegeSchema({ name: item.name, city: item.city });
  const breadcrumb = buildBreadcrumb(`/universites/${slug}`, lang, {
    universites: UNIVERSITES_SECTION_LABEL[lang],
    [slug]: item.name,
  });
  const basePath = basePathFor(lang);

  const others = translations[lang].universities.items
    .map((u, i) => ({ ...u, slug: UNIVERSITY_SLUGS[i] }))
    .filter((_, i) => i !== index);

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <span className="t-chip inline-block text-[0.7rem] font-bold px-3 py-1.5 mb-3">{item.rank}</span>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">{item.name}</h1>
      <p className="text-sm t-muted mb-4">{item.city}</p>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85">{copy.intro}</p>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{UNIVERSITES_SECTION_LABEL[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {others.map((u) => (
          <Link key={u.slug} href={`${basePath}/universites/${u.slug}`} className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity">
            <div className="font-bold text-sm">{u.name}</div>
            <div className="text-xs opacity-60 mt-0.5">{u.city} · {u.rank}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
