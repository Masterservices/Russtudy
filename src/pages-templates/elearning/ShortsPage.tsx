import Link from 'next/link';
import type { Lang } from '../../i18n';
import type { PublicCourse } from '../../features/app/elearning/public';
import { EL } from '../../features/app/elearning/labels';
import { SHORTS_LABELS, fill } from '../../features/app/elearning/shorts/labels';
import { pick } from '../../features/app/elearning/types';
import { SHORTS_SEGMENT, resolveShorts, themesOf } from '../../content/shorts/registry';
import type { ShortDeckSource } from '../../content/shorts/types';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { buildElearningShortsSchema } from '../../seo/schema/elearning';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import ShortsApp from '../../components/elearning/shorts/ShortsApp';
import type { LessonLink } from '../../components/elearning/shorts/ShortSheet';
import type { ShortsTab } from '../../components/elearning/shorts/ShortsTabBar';
import ElearningShell from './ElearningShell';
import { ShortsFaq, ShortsSteps } from './ShortsSections';
import { ELEARNING_LABEL, TAUGHT_LANGUAGE, accessRequestHref } from './labels';
import { deckCopy, shortsCopy } from './shorts-copy';

/**
 * Shorts d'un parcours.
 *
 * La page porte deux lectures. Pour l'élève, c'est une affiche : il la
 * touche et le fil s'ouvre en plein écran. Pour un moteur de recherche,
 * c'est la liste de toutes les expressions, écrites en clair avec leur
 * traduction — le fil lui-même n'existe qu'après un geste, et ce qui
 * n'est pas dans la page n'est pas indexé.
 */
export default function ShortsPage({
  lang,
  deck,
  course,
  accessible,
  initialShortId,
  initialTab,
}: {
  lang: Lang;
  deck: ShortDeckSource;
  /** Parcours tel que la base le publie ; `null` si elle ne répond pas. */
  course: PublicCourse | null;
  /** Slugs des leçons que la base accepte de livrer à ce visiteur. */
  accessible: Set<string>;
  initialShortId: string | null;
  initialTab: ShortsTab | null;
}) {
  const L = EL[lang];
  const labels = SHORTS_LABELS[lang];
  const copy = shortsCopy(lang);
  const page = deckCopy(lang, deck.targetLang, deck.level);

  const shorts = resolveShorts(deck.courseSlug, lang);
  const themes = themesOf(shorts, lang);

  const courseTitle = pick(course?.title ?? deck.title, lang);
  const courseHref = `/elearning/${deck.courseSlug}`;
  const pageHref = `${courseHref}/${SHORTS_SEGMENT}`;
  const taught = TAUGHT_LANGUAGE[deck.targetLang];
  const badge = `${taught ? `${taught.flag} ${taught.label[lang]} · ` : ''}${deck.level}`;

  // Seules les leçons auxquelles un short renvoie partent dans le
  // navigateur. Une leçon réservée mène au programme du parcours : la
  // page de la leçon, elle, renverrait le visiteur au catalogue.
  const referenced = new Set(shorts.map((short) => short.lesson).filter(Boolean));
  const lessons: Record<string, LessonLink> = {};
  for (const lesson of course?.lessons ?? []) {
    if (!referenced.has(lesson.slug)) continue;
    const open = lesson.isFree || accessible.has(lesson.slug);
    lessons[lesson.slug] = {
      title: pick(lesson.title, lang),
      open,
      href: open ? `${courseHref}/${lesson.slug}` : courseHref,
    };
  }

  const breadcrumb = buildBreadcrumb(pageHref, lang, {
    elearning: ELEARNING_LABEL[lang],
    [deck.courseSlug]: courseTitle,
    [SHORTS_SEGMENT]: copy.crumb,
  });

  const jsonLd = [
    buildElearningShortsSchema({
      courseSlug: deck.courseSlug,
      courseName: courseTitle,
      name: page.h1,
      description: page.intro,
      level: deck.level,
      inLanguage: lang,
    }),
    buildFaqPageSchema(copy.faq),
  ];

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessRequestHref(lang, courseTitle)}
      accessLabel={L.signupCta}
      jsonLd={jsonLd}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:items-center max-w-5xl mb-14">
        <div>
          <span className="t-chip inline-block text-[0.72rem] font-bold px-3 py-1 rounded-full">{badge}</span>

          <h1 className="t-display font-bold text-[clamp(1.7rem,5.6vw,2.9rem)] tracking-[-0.04em] leading-[1.08] mt-3 mb-3">
            {page.h1}
          </h1>

          <p className="text-[1rem] leading-[1.7] max-w-xl opacity-85 mb-5">{page.intro}</p>

          <ul className="flex flex-wrap gap-2 mb-5">
            <li className="t-chip text-[0.8rem] font-bold px-3.5 py-1.5">
              {fill(labels.launcherCount, shorts.length)}
            </li>
            <li className="t-chip text-[0.8rem] font-bold px-3.5 py-1.5">{labels.launcherFree}</li>
          </ul>

          <Link
            href={courseHref}
            className="inline-block text-[0.9rem] font-bold underline opacity-75 hover:opacity-100"
          >
            {courseTitle} →
          </Link>
        </div>

        <ShortsApp
          course={deck.courseSlug}
          lang={lang}
          targetLang={deck.targetLang}
          shorts={shorts}
          themes={themes}
          labels={labels}
          badge={badge}
          initialShortId={initialShortId}
          initialTab={initialTab}
          lessons={lessons}
          courseHref={courseHref}
        />
      </div>

      <ShortsSteps copy={copy} />

      <section className="max-w-5xl mb-14">
        <h2 className="t-display font-bold text-[clamp(1.35rem,4vw,1.8rem)] tracking-[-0.03em] mb-2">
          {copy.listTitle}
        </h2>
        <p className="text-[0.92rem] opacity-70 mb-5">{fill(copy.listIntro, shorts.length)}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {themes.map((theme) => (
            <section key={theme.id} className="t-card rounded-[20px] px-5 py-4">
              <h3 className="text-[0.78rem] font-bold uppercase tracking-wide opacity-60 mb-1">
                {theme.label}
              </h3>
              <ul>
                {shorts
                  .filter((short) => short.theme === theme.id)
                  .map((short) => (
                    <li key={short.id} className="border-t border-black/10 first:border-t-0">
                      <Link
                        href={`${pageHref}?s=${short.id}`}
                        className="block py-2.5 hover:opacity-70 transition-opacity"
                      >
                        <span
                          lang={deck.targetLang}
                          dir="ltr"
                          className="block font-bold text-[1rem] leading-snug text-start"
                        >
                          {short.lines.map((line) => line.text).join(' ')}
                        </span>
                        <span className="block text-[0.88rem] leading-snug opacity-70">
                          {short.lines.map((line) => line.translation).join(' ')}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <ShortsFaq copy={copy} />
    </ElearningShell>
  );
}
