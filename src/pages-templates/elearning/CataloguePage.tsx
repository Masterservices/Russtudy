import Link from 'next/link';
import type { Lang } from '../../i18n';
import type { PublicCourse } from '../../features/app/elearning/public';
import { EL } from '../../features/app/elearning/labels';
import { pick } from '../../features/app/elearning/types';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ElearningShell from './ElearningShell';
import { ELEARNING_LABEL, accessRequestHref, TAUGHT_LANGUAGE } from './labels';
import { lessonCount } from './plural';

/**
 * Catalogue des parcours.
 *
 * Une carte par parcours, et rien de plus : le détail des leçons
 * appartient à la page du parcours. Le catalogue sert à choisir une
 * langue, pas à parcourir un sommaire.
 */
export default function CataloguePage({ lang, courses }: { lang: Lang; courses: PublicCourse[] }) {
  const L = EL[lang];
  const breadcrumb = buildBreadcrumb('/elearning', lang, { elearning: ELEARNING_LABEL[lang] });
  const accessHref = accessRequestHref(lang);

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessHref}
      accessLabel={L.signupCta}
    >
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {L.title}
      </h1>
      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-10">{L.subtitle}</p>

      {courses.length === 0 ? (
        <p className="t-card rounded-[20px] p-6 text-[0.95rem] leading-[1.65] opacity-80 max-w-2xl">
          {L.emptyHint}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mb-10">
          {courses.map((course, idx) => {
            const free = course.lessons.filter((l) => l.isFree).length;
            const minutes = course.lessons.reduce((sum, l) => sum + l.durationMin, 0);
            const taught = TAUGHT_LANGUAGE[course.targetLang];

            return (
              <Link
                key={course.slug}
                href={`/elearning/${course.slug}`}
                // La palette compte cinq teintes : au sixième parcours,
                // `t-c6` n'existerait pas et la carte retomberait en
                // blanc au milieu des autres. Elle recommence au début.
                // Une carte cliquable se comporte comme telle : elle se
                // soulève sous le doigt et s'enfonce au contact.
                className={`t-card t-c${(idx % 5) + 1} border-transparent rounded-[22px] p-6 flex flex-col transition-transform duration-150 hover:-translate-y-[3px] hover:shadow-[0_18px_38px_rgba(10,10,10,0.22)] active:translate-y-0 active:scale-[0.995]`}
              >
                <span className="t-chip text-[0.72rem] font-bold px-3 py-1 rounded-full self-start">
                  {taught && (
                    <span aria-hidden="true" className="me-1.5">
                      {taught.flag}
                    </span>
                  )}
                  {taught ? `${taught.label[lang]} · ` : ''}
                  {course.level}
                </span>
                <h2 className="t-display font-bold text-xl tracking-[-0.02em] mt-3 mb-2">
                  {pick(course.title, lang)}
                </h2>
                <p className="text-[0.9rem] leading-[1.6] opacity-80 mb-4 flex-1">
                  {pick(course.description, lang)}
                </p>
                <p className="text-[0.82rem] opacity-65 mb-3">
                  {lessonCount(lang, course.lessons.length)} · {minutes} min
                  {free > 0 ? ` · ${free} ${L.freeCount}` : ''}
                </p>
                {/* Une pastille pleine, pas un texte souligné : sur une
                    carte colorée, le soulignement se lit comme de la
                    décoration et personne ne le prend pour un bouton. */}
                <span className="self-start inline-flex items-center gap-2 text-[0.86rem] font-bold bg-white/90 text-[var(--ink)] rounded-full px-4 py-2">
                  {L.start} <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      )}

      <p className="text-[0.92rem] leading-[1.65] opacity-70 max-w-2xl mb-8">{L.moreSoon}</p>

      <a
        href={accessHref}
        className="t-btn-primary inline-block font-bold text-[0.95rem] px-7 py-4 rounded-full"
      >
        {L.signupCta} →
      </a>
    </ElearningShell>
  );
}
