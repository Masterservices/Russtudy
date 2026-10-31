import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import { citySlugForUniversity } from '../../content/villes/registry';
import { buildUniversityDetailCopy } from '../../content/universites/copy';
import { buildCollegeSchema } from '../../seo/schema/college';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildUniversityFaq } from '../../content/universites/faq';
import { getDeepUniversityContent } from '../../content/universites/deep';
import { UNIVERSITY_FACTS } from '../../content/universites/facts';
import { FILIERE_SLUGS } from '../../content/filieres/registry';
import {
  BADGE_CLASS,
  FACT_LABEL,
  PROGRAM_LABEL,
  PROGRAM_NAME,
  UNIVERSITY_SECTIONS,
  factTone,
  programTone,
} from '../../content/universites/factLabels';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { UNIVERSITY_IMAGES } from '../../content/images/registry';
import { UNIVERSITES_SECTION_LABEL, basePathFor } from './labels';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

export default function UniversityDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const item = translations[lang].universities.items[index];
  const slug = UNIVERSITY_SLUGS[index];
  const copy = buildUniversityDetailCopy(lang, item);
  const schema = buildCollegeSchema({
    name: item.name,
    city: item.city,
    alternateName: getDeepUniversityContent(slug, lang)?.identity.officialName,
    url: UNIVERSITY_FACTS[slug].officialSite,
    foundingDate: getDeepUniversityContent(slug, lang)?.identity.founded,
  });
  const faq = buildUniversityFaq(lang, item);
  const faqSchema = buildFaqPageSchema(faq);
  const breadcrumb = buildBreadcrumb(`/universites/${slug}`, lang, {
    universites: UNIVERSITES_SECTION_LABEL[lang],
    [slug]: item.name,
  });
  const basePath = basePathFor(lang);
  const citySlug = citySlugForUniversity(index);
  const deep = getDeepUniversityContent(slug, lang);
  const facts = UNIVERSITY_FACTS[slug];
  const S = UNIVERSITY_SECTIONS[lang];
  const badge = (tone: keyof typeof BADGE_CLASS, text: string) => (
    <span className={`inline-block rounded-full px-2.5 py-1 text-[0.68rem] font-bold ${BADGE_CLASS[tone]}`}>{text}</span>
  );

  const others = translations[lang].universities.items
    .map((u, i) => ({ ...u, slug: UNIVERSITY_SLUGS[i] }))
    .filter((_, i) => i !== index);

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <span className="t-chip inline-block text-[0.7rem] font-bold px-3 py-1.5 mb-3">{item.rank}</span>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">{item.name}</h1>
      <p className="text-sm t-muted mb-4">
        {citySlug ? (
          <Link href={`${basePath}/villes/${citySlug}`} className="hover:underline">
            {item.city} →
          </Link>
        ) : (
          item.city
        )}
      </p>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={UNIVERSITY_IMAGES[slug]} lang={lang} variant="sky" />

      {deep && (
        <div className="t-card rounded-[18px] overflow-auto max-w-2xl mb-4">
          <table className="w-full border-collapse text-[0.85rem]">
            <tbody>
              <tr>
                <th scope="row" className="p-3 text-start align-top border-b t-line-soft whitespace-nowrap">{deep.identity.officialNameLabel}</th>
                <td className="p-3 border-b t-line-soft" lang="ru" dir="ltr">{deep.identity.officialName}</td>
              </tr>
              <tr>
                <th scope="row" className="p-3 text-start align-top border-b t-line-soft whitespace-nowrap">{deep.identity.transliterationLabel}</th>
                <td className="p-3 border-b t-line-soft" dir="ltr">{deep.identity.transliteration}</td>
              </tr>
              <tr>
                <th scope="row" className="p-3 text-start align-top border-b t-line-soft whitespace-nowrap">{deep.identity.foundedLabel}</th>
                <td className="p-3 border-b t-line-soft">
                  {deep.identity.founded ? (
                    <span className="font-bold">{deep.identity.founded}</span>
                  ) : (
                    <span className="opacity-60 italic">{S.unavailable}</span>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row" className="p-3 text-start align-top border-b t-line-soft whitespace-nowrap">{deep.identity.statusLabel}</th>
                <td className="p-3 border-b t-line-soft">{deep.identity.status}</td>
              </tr>
              <tr>
                <th scope="row" className="p-3 text-start align-top whitespace-nowrap">{S.officialSite}</th>
                <td className="p-3">
                  {facts.officialSite ? (
                    <a href={facts.officialSite} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:opacity-70" dir="ltr">
                      {facts.officialSite.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  ) : (
                    <span className="opacity-60 italic">{S.unavailable}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {deep?.sections.map((section) => (
        <section key={section.heading} className="max-w-2xl">
          <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-[0.95rem] leading-[1.7] opacity-85 mb-3">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="flex flex-col gap-2 mt-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="text-[0.92rem] leading-[1.6] opacity-85 ps-4 relative before:content-['—'] before:absolute before:start-0 before:opacity-50">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="max-w-2xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{S.programsHeading}</h2>
        <p className="text-[0.95rem] leading-[1.7] opacity-85 mb-4">{S.programsIntro}</p>
        <div className="t-card rounded-[18px] overflow-auto">
          <table className="w-full border-collapse text-[0.85rem]">
            <tbody>
              {FILIERE_SLUGS.map((f, i) => (
                <tr key={f}>
                  <th scope="row" className={`p-3 text-start font-normal${i < FILIERE_SLUGS.length - 1 ? ' border-b t-line-soft' : ''}`}>
                    {PROGRAM_NAME[lang][f]}
                  </th>
                  <td className={`p-3 text-end${i < FILIERE_SLUGS.length - 1 ? ' border-b t-line-soft' : ''}`}>
                    {badge(programTone(facts.programs[f]), PROGRAM_LABEL[lang][facts.programs[f]])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-2xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{S.languagesHeading}</h2>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-[0.9rem] font-bold">{S.languageRussian}</span>
          {badge(factTone(facts.teachingRussian), FACT_LABEL[lang][facts.teachingRussian])}
          <span className="text-[0.9rem] font-bold ms-3">{S.languageEnglish}</span>
          {badge(factTone(facts.teachingEnglish), FACT_LABEL[lang][facts.teachingEnglish])}
        </div>
        <p className="text-[0.95rem] leading-[1.7] opacity-85">{S.languagesNote}</p>
      </section>

      <section className="max-w-2xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{S.prepHeading}</h2>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-[0.9rem] font-bold">{S.prepLabel}</span>
          {badge(factTone(facts.prepFaculty), FACT_LABEL[lang][facts.prepFaculty])}
        </div>
        <p className="text-[0.95rem] leading-[1.7] opacity-85">
          {facts.prepFaculty === 'yes' ? S.prepYes : facts.prepFaculty === 'no' ? S.prepNo : S.prepUnknown}
        </p>
      </section>

      <section className="max-w-2xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{S.housingHeading}</h2>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-[0.9rem] font-bold">{S.housingLabel}</span>
          {badge(factTone(facts.housing), FACT_LABEL[lang][facts.housing])}
        </div>
        {facts.housingDetail && (
          <p className="text-[0.95rem] leading-[1.7] opacity-85 mb-3">{facts.housingDetail[lang]}</p>
        )}
        <p className="text-[0.95rem] leading-[1.7] opacity-85">
          {facts.housing === 'yes' ? S.housingYes : facts.housing === 'no' ? S.housingNo : S.housingUnknown}
        </p>
      </section>

      <section className="max-w-2xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{S.maghrebHeading}</h2>
        <p className="text-[0.95rem] leading-[1.7] opacity-85 mb-3">{S.maghrebIntro}</p>
        <ol className="flex flex-col gap-2 mt-3 list-decimal ps-5">
          {S.maghrebPoints.map((point) => (
            <li key={point} className="text-[0.92rem] leading-[1.6] opacity-85">{point}</li>
          ))}
        </ol>
      </section>

      <section className="max-w-2xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{S.sourcesHeading}</h2>
        <p className="text-[0.95rem] leading-[1.7] opacity-85 mb-3">{S.sourcesNote}</p>
        <ul className="flex flex-col gap-2">
          {facts.sources.map((source) => (
            <li key={source.url} className="text-[0.88rem] leading-[1.6]">
              <a href={source.url} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:opacity-70">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="t-card rounded-[18px] p-6 max-w-2xl mt-9">
        <h2 className="t-display font-bold text-lg tracking-[-0.03em] mb-2">{S.ctaHeading}</h2>
        <p className="text-[0.92rem] leading-[1.65] opacity-85 mb-4">{S.ctaText}</p>
        <div className="flex flex-wrap gap-2">
          <Link href={`${basePath}/accompagnement`} className="t-btn-primary font-bold text-[0.85rem] px-5 py-2.5 inline-block">
            {S.ctaPrimary}
          </Link>
          <Link href={`${basePath || '/'}#rendezvous`} className="t-btn-dark font-bold text-[0.85rem] px-5 py-2.5 inline-block">
            {S.ctaSecondary}
          </Link>
        </div>
      </section>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{FAQ_HEADING[lang]}</h2>
      <div className="flex flex-col gap-2 max-w-2xl mb-9">
        {faq.map((faqItem) => (
          <div key={faqItem.question} className="t-card rounded-[18px] p-6">
            <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{UNIVERSITES_SECTION_LABEL[lang]}</h2>
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
