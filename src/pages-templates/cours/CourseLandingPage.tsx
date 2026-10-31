import Link from 'next/link';
import type { Lang } from '../../i18n';
import type { CourseSlug } from '../../content/cours/registry';
import { COURSE_COPY } from '../../content/cours/copy';
import { SECTION_IMAGES } from '../../content/images/registry';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { basePathFor } from '../basePath';
import { COURSES_LABEL, ELEARNING_PATH, APP_CTA, FAQ_LABEL } from './labels';
import type { HeroVariant } from '../../components/PageHeroCanvas';

const HERO: Record<CourseSlug, { image: keyof typeof SECTION_IMAGES; variant: HeroVariant }> = {
  russe: { image: 'apprendre-russe', variant: 'violet' },
  francais: { image: 'comparatif-france', variant: 'sky' },
};

export default function CourseLandingPage({ lang, slug }: { lang: Lang; slug: CourseSlug }) {
  const copy = COURSE_COPY[slug][lang];
  const basePath = basePathFor(lang);
  const hero = HERO[slug];

  const breadcrumb = buildBreadcrumb(`/cours/${slug}`, lang, {
    cours: COURSES_LABEL[lang],
    [slug]: copy.h1,
  });

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <PageHero image={SECTION_IMAGES[hero.image]} lang={lang} variant={hero.variant} />

      <span className="t-kicker text-[0.74rem] font-bold uppercase tracking-wide opacity-60">
        {copy.kicker}
      </span>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mt-1 mb-3">
        {copy.h1}
      </h1>
      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <div className="mb-10">
        <Link
          href={ELEARNING_PATH}
          className="t-btn-primary inline-block font-bold text-[0.95rem] px-7 py-4 rounded-full"
        >
          {copy.ctaPrimary} →
        </Link>
        <p className="text-[0.8rem] opacity-60 mt-2 max-w-md">{copy.ctaNote}</p>
      </div>

      <div className="flex flex-col gap-2 max-w-2xl mb-10">
        {copy.sections.map((section) => (
          <section key={section.heading} className="t-card rounded-[18px] p-6">
            <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="text-[0.9rem] leading-[1.65] opacity-80 mb-2 last:mb-0">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="flex flex-col gap-1.5">
                {section.bullets.map((b) => (
                  <li key={b} className="text-[0.9rem] leading-[1.6] opacity-80">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="max-w-2xl mb-10">
        <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-3">{FAQ_LABEL[lang]}</h2>
        <div className="flex flex-col gap-2">
          {copy.faq.map((entry) => (
            <details key={entry.question} className="t-card rounded-[18px] p-5">
              <summary className="t-display font-bold text-[0.95rem] cursor-pointer">
                {entry.question}
              </summary>
              <p className="text-[0.88rem] leading-[1.7] opacity-80 mt-2">{entry.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Link
        href={`${basePath}/cours`}
        className="t-chip inline-block text-[0.82rem] font-semibold px-4 py-2"
      >
        ← {COURSES_LABEL[lang]}
      </Link>
      <Link
        href={ELEARNING_PATH}
        className="t-btn-primary inline-block font-bold text-[0.9rem] px-6 py-3 rounded-full ms-2"
      >
        {APP_CTA[lang]} →
      </Link>
    </ContentPageShell>
  );
}
