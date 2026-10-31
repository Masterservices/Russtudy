import Link from 'next/link';
import type { Lang } from '../../i18n';
import type { PublicLessonDetail } from '../../features/app/elearning/public';
import { EL } from '../../features/app/elearning/labels';
import { pick, pickList } from '../../features/app/elearning/types';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { buildElearningLessonSchema } from '../../seo/schema/elearning';
import { COURS_ANIME } from '../../content/cours-anime/registre';
import CoursAnime from '../../components/elearning/CoursAnime';
import ElearningShell from './ElearningShell';
import LessonViewer from '../../components/elearning/LessonViewer';
import ExerciseBoard from '../../components/elearning/ExerciseBoard';
import LessonTabs from '../../components/elearning/LessonTabs';
import MarkDoneButton from '../../components/elearning/MarkDoneButton';
import { ELEARNING_LABEL, accessRequestHref } from './labels';
import { PROGRESS } from './shell-labels';

/**
 * Une leçon d'essai, lisible sans compte.
 *
 * Trois onglets : la leçon, les exercices, et le texte intégral. Ce
 * dernier remplace la rubrique « ressources » d'usage, souvent vide :
 * ici elle porte toujours quelque chose d'utile — tout ce qui est dit,
 * à relire ou à imprimer.
 */
export default function LessonPage({
  lang,
  detail,
  signedIn,
  completed,
  accessible,
}: {
  lang: Lang;
  detail: PublicLessonDetail;
  signedIn: boolean;
  /** Vrai lorsque cette leçon est déjà marquée terminée. */
  completed: boolean;
  /** Slugs que la base accepte de livrer à ce visiteur. */
  accessible: Set<string>;
}) {
  const L = EL[lang];
  const P = PROGRESS[lang];
  const { course, lesson } = detail;
  const title = pick(lesson.title, lang);
  const objectives = pickList(detail.objectives, lang);
  const accessHref = accessRequestHref(lang, pick(course.title, lang));

  const breadcrumb = buildBreadcrumb(`/elearning/${course.slug}/${lesson.slug}`, lang, {
    elearning: ELEARNING_LABEL[lang],
    [course.slug]: pick(course.title, lang),
    [lesson.slug]: title,
  });

  const cleAnime = `${course.slug}/${lesson.slug}`;
  const anime = COURS_ANIME.has(cleAnime) ? cleAnime : null;

  // Seule une leçon ouverte à tous s'annonce : ce qui n'est pas servi
  // au visiteur n'a rien à déclarer à un moteur.
  const lessonSchema = lesson.isFree
    ? buildElearningLessonSchema({
        courseSlug: course.slug,
        courseName: pick(course.title, lang),
        lessonSlug: lesson.slug,
        name: title,
        description: pick(lesson.summary, lang),
        durationMin: lesson.durationMin,
        inLanguage: lang,
      })
    : null;

  const lessonPane = (
    <>
      {objectives.length > 0 && (
        <section className="t-card rounded-[20px] p-6 mb-7">
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-3">{L.objectives}</h2>
          <ul className="flex flex-col gap-1.5">
            {objectives.map((objective) => (
              <li key={objective} className="text-[0.95rem] leading-[1.6] opacity-80">
                {objective}
              </li>
            ))}
          </ul>
        </section>
      )}

      <LessonViewer blocks={detail.blocks} lang={lang} spokenLang={course.targetLang} labels={L} />
    </>
  );

  const exercisePane =
    detail.exercises.length > 0 ? (
      <ExerciseBoard exercises={detail.exercises} lang={lang} labels={L} />
    ) : (
      <p className="text-[0.95rem] opacity-70">{L.emptyHint}</p>
    );

  const resourcePane = (
    <section>
      <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-1">{L.fullTranscript}</h2>
      <p className="text-[0.88rem] opacity-65 mb-5">{L.transcriptHint}</p>
      <ol className="flex flex-col gap-5">
        {detail.blocks.map((block, idx) => {
          const spoken = block.transcript[course.targetLang as Lang] ?? '';
          const translation = course.targetLang !== lang ? (block.transcript[lang] ?? '') : '';
          if (!spoken && !translation) return null;

          return (
            <li key={block.id} className="t-card rounded-[16px] p-5">
              <p className="t-kicker text-[0.72rem] font-bold uppercase tracking-wide opacity-55 mb-2">
                {L.slideOf} {idx + 1}
              </p>
              {spoken && (
                <p className="text-[0.95rem] leading-[1.7] opacity-90" lang={course.targetLang}>
                  {spoken}
                </p>
              )}
              {translation && (
                <p className="text-[0.92rem] leading-[1.7] opacity-65 mt-2">{translation}</p>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessHref}
      accessLabel={L.signupCta}
      jsonLd={lessonSchema ? [lessonSchema] : undefined}
    >
      <div className="flex items-center gap-3 flex-wrap mb-3">
        <span className="t-chip text-[0.72rem] font-bold px-3 py-1 rounded-full">
          {lesson.isFree ? L.free : L.open}
        </span>
        <span className="text-[0.84rem] opacity-65">{lesson.durationMin} min</span>
      </div>

      <h1 className="t-display font-bold text-[clamp(1.6rem,5vw,2.6rem)] tracking-[-0.04em] leading-[1.12] mb-3">
        {title}
      </h1>

      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-2">
        {pick(lesson.summary, lang)}
      </p>
      {lesson.isFree && (
        <p className="text-[0.88rem] leading-[1.6] max-w-2xl opacity-65 mb-6">{L.freeNotice}</p>
      )}

      {/* Version animée, quand la leçon en a une. Le moteur n'est
          chargé qu'au clic : lire la leçon en diaporama ne paie rien. */}
      {anime && (
        <div className="mb-9">
          <CoursAnime
            id={anime}
            audios={detail.blocks.map((b) => b.audioUrl)}
            labels={{
              ouvrir: L.animeOpen,
              fermer: L.animeClose,
              chargement: L.animeLoading,
              echec: L.animeFail,
            }}
          />
        </div>
      )}

      <LessonTabs
        labels={L}
        exerciseCount={detail.exercises.length}
        lesson={lessonPane}
        exercises={exercisePane}
        resources={resourcePane}
      />

      {/* L'achèvement se déclare, il ne se devine pas : avoir fait
          défiler les diapositives ne dit pas qu'on a compris. */}
      <div className="mt-9 max-w-3xl">
        {signedIn ? (
          <MarkDoneButton
            lessonId={detail.lessonId}
            blockCount={detail.blocks.length}
            done={completed}
            labels={{ markDone: L.markDone, doneLabel: L.doneLabel, failed: P.failed }}
          />
        ) : (
          <p className="text-[0.88rem] opacity-70">
            {P.invite}{' '}
            <Link
              href={`/elearning/connexion?suivant=${encodeURIComponent(
                `/elearning/${course.slug}/${lesson.slug}`,
              )}`}
              className="font-bold underline"
            >
              {P.inviteCta}
            </Link>
          </p>
        )}
      </div>

      <nav className="flex items-center justify-between gap-3 mt-8 max-w-3xl">
        <Link
          href={`/elearning/${course.slug}`}
          className="text-[0.88rem] font-bold underline opacity-75 hover:opacity-100"
        >
          ← {L.backToCourseList}
        </Link>
        {detail.nextSlug && (
          <Link
            href={`/elearning/${course.slug}/${detail.nextSlug}`}
            className="t-btn-primary font-bold text-[0.88rem] px-5 py-2.5 rounded-full"
          >
            {L.next} →
          </Link>
        )}
      </nav>

      <section className="t-card rounded-[20px] p-6 max-w-3xl mt-10">
        <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-4">{L.courseContent}</h2>
        <ul className="flex flex-col">
          {course.lessons.map((item) => {
            const current = item.slug === lesson.slug;
            const row = (
              <span className="flex items-center justify-between gap-3 w-full">
                <span className="min-w-0">
                  <span className={`block text-[0.92rem] truncate ${current ? 'font-bold' : ''}`}>
                    {pick(item.title, lang)}
                  </span>
                  <span className="block text-[0.8rem] opacity-60">{item.durationMin} min</span>
                </span>
                {!item.isFree && !accessible.has(item.slug) && (
                  <span className="t-chip text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full shrink-0">
                    {L.locked}
                  </span>
                )}
              </span>
            );

            return (
              <li
                key={item.slug}
                className={`border-t border-black/10 dark:border-white/10 first:border-t-0 ${
                  current ? 'ps-3 border-s-2 border-s-current' : ''
                }`}
              >
                {(item.isFree || accessible.has(item.slug)) && !current ? (
                  <Link
                    href={`/elearning/${course.slug}/${item.slug}`}
                    className="flex py-3 hover:opacity-80 transition-opacity"
                  >
                    {row}
                  </Link>
                ) : (
                  <span
                    className={`flex py-3 ${
                      item.isFree || accessible.has(item.slug) ? '' : 'opacity-55'
                    }`}
                  >
                    {row}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {course.lessons.some((l) => !l.isFree && !accessible.has(l.slug)) && (
      <section className="t-card rounded-[22px] p-7 max-w-3xl mt-6">
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
