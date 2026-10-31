import Link from 'next/link';
import type { Lang } from '../../i18n';
import { COURSE_SLUGS } from '../../content/cours/registry';
import { COURSE_COPY, COURSE_INDEX_COPY } from '../../content/cours/copy';
import { SECTION_IMAGES } from '../../content/images/registry';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { basePathFor } from '../basePath';
import { COURSES_LABEL, ELEARNING_PATH, APP_CTA } from './labels';

export default function CoursIndexPage({ lang }: { lang: Lang }) {
  const copy = COURSE_INDEX_COPY[lang];
  const basePath = basePathFor(lang);
  const breadcrumb = buildBreadcrumb('/cours', lang, { cours: COURSES_LABEL[lang] });

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <PageHero image={SECTION_IMAGES['apprendre-russe']} lang={lang} variant="violet" />

      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {copy.h1}
      </h1>
      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-8">{copy.intro}</p>

      <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mb-10">
        {COURSE_SLUGS.map((slug, idx) => {
          const course = COURSE_COPY[slug][lang];
          return (
            <Link
              key={slug}
              href={`${basePath}/cours/${slug}`}
              className={`t-card t-c${idx + 1} rounded-[22px] p-6 hover:opacity-90 transition-opacity`}
            >
              <span className="t-kicker text-[0.72rem] font-bold uppercase tracking-wide opacity-60">
                {course.kicker}
              </span>
              <h2 className="t-display font-bold text-xl tracking-[-0.02em] mt-1 mb-2">{course.h1}</h2>
              <p className="text-[0.88rem] leading-[1.6] opacity-80 mb-3">{course.intro}</p>
              <span className="text-[0.82rem] font-bold underline">{copy.cardCta} →</span>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 max-w-2xl mb-8">
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

      <Link
        href={ELEARNING_PATH}
        className="t-btn-primary inline-block font-bold text-[0.95rem] px-7 py-4 rounded-full"
      >
        {APP_CTA[lang]} →
      </Link>
    </ContentPageShell>
  );
}
