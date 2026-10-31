import Link from 'next/link';
import type { Lang } from '../../i18n';
import type { PublicCourseDetail, PublicLesson } from '../../features/app/elearning/public';
import { EL } from '../../features/app/elearning/labels';
import { pick } from '../../features/app/elearning/types';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { buildElearningCourseSchema } from '../../seo/schema/elearning';
import ElearningShell from './ElearningShell';
import { ELEARNING_LABEL, accessRequestHref } from './labels';
import { lessonCount, moduleCount } from './plural';

function LessonRow({
  lesson,
  courseSlug,
  lang,
  labels,
  done,
  open,
}: {
  lesson: PublicLesson;
  courseSlug: string;
  lang: Lang;
  labels: Record<string, string>;
  done: boolean;
  /** Vrai quand la base accepte de livrer cette leçon à ce visiteur. */
  open: boolean;
}) {
  const body = (
    <span className="flex items-center justify-between gap-3 w-full">
      <span className="min-w-0">
        <span className="block font-semibold text-[0.95rem] truncate">
          {pick(lesson.title, lang)}
        </span>
        <span className="block text-[0.82rem] opacity-65">{lesson.durationMin} min</span>
      </span>
      <span className="t-chip text-[0.72rem] font-bold px-3 py-1 rounded-full shrink-0">
        {done ? labels.completed : lesson.isFree ? labels.free : open ? labels.open : labels.locked}
      </span>
    </span>
  );

  return (
    <li className="border-t border-black/10 dark:border-white/10 first:border-t-0">
      {open ? (
        <Link
          href={`/elearning/${courseSlug}/${lesson.slug}`}
          className="flex px-4 py-3.5 hover:opacity-80 transition-opacity"
        >
          {body}
        </Link>
      ) : (
        <span className="flex px-4 py-3.5 opacity-55">{body}</span>
      )}
    </li>
  );
}

/**
 * Page d'un parcours : le programme avant la première leçon.
 *
 * C'est le niveau qui manquait entre le catalogue et la leçon. Il
 * montre la matière — modules, nombre de leçons, durée totale, ce
 * qu'on saura faire — et c'est lui qui donne envie de commencer.
 */
export default function CoursePage({
  lang,
  detail,
  completed,
  accessible,
  signedIn,
}: {
  lang: Lang;
  detail: PublicCourseDetail;
  /** Slugs des leçons terminées ; vide hors session. */
  completed: Set<string>;
  /** Slugs que la base accepte de livrer : essai, inscription, équipe. */
  accessible: Set<string>;
  signedIn: boolean;
}) {
  const L = EL[lang];
  const { course, modules, loose, totalMinutes, freeCount } = detail;
  const title = pick(course.title, lang);
  const accessHref = accessRequestHref(lang, title);

  const breadcrumb = buildBreadcrumb(`/elearning/${course.slug}`, lang, {
    elearning: ELEARNING_LABEL[lang],
    [course.slug]: title,
  });

  const open = (lesson: PublicLesson) => lesson.isFree || accessible.has(lesson.slug);
  const firstOpen = course.lessons.find(open);
  const resume = course.lessons.find((l) => open(l) && !completed.has(l.slug)) ?? firstOpen;
  const doneCount = course.lessons.filter((l) => completed.has(l.slug)).length;
  const percent = course.lessons.length
    ? Math.round((doneCount / course.lessons.length) * 100)
    : 0;

  const sections = [
    ...modules.map((m) => ({ key: m.id, title: pick(m.title, lang), lessons: m.lessons })),
    ...(loose.length ? [{ key: 'loose', title: '', lessons: loose }] : []),
  ].filter((s) => s.lessons.length > 0);

  const courseSchema = buildElearningCourseSchema({
    slug: course.slug,
    name: title,
    description: pick(course.description, lang),
    level: course.level,
    inLanguage: lang,
    totalMinutes,
    modules: modules.map((m) => pick(m.title, lang)),
    hasFreeLesson: freeCount > 0,
  });

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessHref}
      accessLabel={L.signupCta}
      jsonLd={[courseSchema]}
    >
      <span className="t-chip text-[0.72rem] font-bold px-3 py-1 rounded-full">{course.level}</span>

      <h1 className="t-display font-bold text-[clamp(1.7rem,5.5vw,2.8rem)] tracking-[-0.04em] leading-[1.1] mt-3 mb-3">
        {title}
      </h1>

      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-4">
        {pick(course.description, lang)}
      </p>

      <p className="text-[0.88rem] opacity-65 mb-6">
        {/* Un parcours sans module annoncé n'en invente pas : la
            section « hors module » n'est pas un module. */}
        {modules.length > 0 ? `${moduleCount(lang, modules.length)} · ` : ''}
        {lessonCount(lang, course.lessons.length)} · {totalMinutes} min
        {freeCount > 0 ? ` · ${freeCount} ${L.freeCount}` : ''}
      </p>

      {resume && (
        <Link
          href={`/elearning/${course.slug}/${resume.slug}`}
          className="t-btn-primary inline-block font-bold text-[0.95rem] px-7 py-4 rounded-full mb-10"
        >
          {doneCount > 0 ? L.resume : L.start} →
        </Link>
      )}

      {/* La progression se suit avec un compte : une barre tenue dans
          le navigateur disparaîtrait en changeant d'appareil. */}
      {signedIn && course.lessons.length > 0 && (
        <div className="max-w-3xl mb-10">
          <div className="h-2 rounded-full bg-black/10 dark:bg-white/15 overflow-hidden">
            <div className="h-full rounded-full bg-current" style={{ width: `${percent}%` }} />
          </div>
          <p className="text-[0.84rem] opacity-70 mt-2">
            {doneCount} / {lessonCount(lang, course.lessons.length)} — {L.lessonsDone}
          </p>
        </div>
      )}

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-4">{L.programme}</h2>

      <div className="flex flex-col gap-4 max-w-3xl mb-12">
        {sections.map((section, idx) => (
          <section key={section.key} className="t-card rounded-[20px] overflow-hidden">
            {section.title && (
              <header className="flex items-baseline justify-between gap-3 px-4 py-3.5 border-b border-black/10 dark:border-white/10">
                <h3 className="font-bold text-[0.98rem]">
                  <span className="t-accent-text text-[0.78rem] font-bold uppercase tracking-wide me-2">
                    {L.module} {idx + 1}
                  </span>
                  {section.title}
                </h3>
                <span className="text-[0.8rem] opacity-60 shrink-0">
                  {lessonCount(lang, section.lessons.length)}
                </span>
              </header>
            )}
            <ul>
              {section.lessons.map((lesson) => (
                <LessonRow
                  key={lesson.slug}
                  lesson={lesson}
                  courseSlug={course.slug}
                  lang={lang}
                  labels={L}
                  done={completed.has(lesson.slug)}
                  open={open(lesson)}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>

      {course.lessons.some((l) => !open(l)) && (
      <section className="t-card rounded-[22px] p-7 max-w-3xl">
        <h2 className="t-display font-bold text-xl tracking-[-0.02em] mb-2">{L.lockedTitle}</h2>
        <p className="text-[0.95rem] leading-[1.65] opacity-80 mb-5">{L.lockedHint}</p>
        <a
          href={accessHref}
          className="t-btn-primary inline-block font-bold text-[0.92rem] px-6 py-3.5 rounded-full"
        >
          {L.signupCta} →
        </a>
      </section>
      )}
    </ElearningShell>
  );
}
