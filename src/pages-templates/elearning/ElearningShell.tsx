import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Lang } from '../../i18n';
import type { BreadcrumbItem } from '../../types/seo';
import { breadcrumbToJsonLd } from '../../seo/breadcrumb';
import { basePathFor } from '../basePath';
import {
  PLATFORM_TAGLINE,
  NAV_LESSONS,
  NAV_VISIO,
  LEGAL_PILLS,
  DISCOVER,
  SOON,
  ACCOUNT,
  DESTINATIONS,
  DESTINATION_SOON,
} from './shell-labels';
import { getPublicCatalogue, getLearner } from '../../features/app/elearning/public';
import { signOutLearner } from '../../features/app/elearning/actions';
import { EL } from '../../features/app/elearning/labels';
import { pick } from '../../features/app/elearning/types';

/**
 * Coque de la plateforme d'apprentissage.
 *
 * Volontairement distincte de celle du site : les rubriques d'un
 * départ à l'étranger — universités, visa, coût des études — n'ont
 * rien à faire devant quelqu'un venu travailler sa prononciation. Un
 * russophone qui apprend le français n'est pas un candidat au départ,
 * et lui servir ce menu brouille les deux offres.
 *
 * L'inverse n'est pas vrai : un Tunisien qui apprend le russe est, lui,
 * susceptible de partir. D'où la bannière de découverte, affichée dans
 * les seules langues du Maghreb, et sous le contenu plutôt que devant.
 */
export default async function ElearningShell({
  lang,
  breadcrumb,
  children,
  accessHref,
  accessLabel,
  jsonLd,
}: {
  lang: Lang;
  breadcrumb: BreadcrumbItem[];
  children: ReactNode;
  /** Schémas propres à la page, en plus du fil d'Ariane. */
  jsonLd?: object[];
  /** Demande d'accès aux leçons réservées. */
  accessHref: string;
  accessLabel: string;
}) {
  const breadcrumbJsonLd = breadcrumbToJsonLd(breadcrumb);
  const basePath = basePathFor(lang);
  const discover = DISCOVER[lang];
  const showDiscover = lang === 'fr' || lang === 'ar';
  const L = EL[lang];
  const A = ACCOUNT[lang];

  // Le pied de page se construit depuis le catalogue : un parcours
  // ajouté en base y apparaît sans qu'on ait pensé à l'y recopier.
  const [courses, learner] = await Promise.all([getPublicCatalogue(), getLearner()]);

  return (
    <div className="t-page min-h-screen relative font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {jsonLd?.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <header className="t-nav sticky top-0 z-[500] flex items-center justify-between gap-4 px-4 md:px-8 py-3.5">
        <Link href="/elearning" className="flex flex-col shrink-0">
          <span className="t-display font-bold text-[1.6rem] tracking-[-0.05em] leading-none" dir="ltr">
            Rus<span className="t-accent-text">Study</span>.
          </span>
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] opacity-50 mt-0.5">
            {PLATFORM_TAGLINE[lang]}
          </span>
        </Link>

        {/* L'en-tête du site n'aligne pas des liens nus mais des pilules :
            noir plein pour les destinations, violet pour l'action
            principale. La plateforme a sa propre coque, pas sa propre
            grammaire visuelle. */}
        <nav className="flex items-center gap-2">
          <Link
            href="/elearning"
            className="t-btn-dark font-bold text-[0.85rem] px-5 py-2.5 whitespace-nowrap hidden md:inline-block"
          >
            {NAV_LESSONS[lang]}
          </Link>
          <Link
            href="/elearning/visio"
            className="t-btn-dark font-bold text-[0.85rem] px-5 py-2.5 whitespace-nowrap hidden sm:inline-block"
          >
            {NAV_VISIO[lang]}
          </Link>

          {/* Compte apprenant. La pastille porte l'initiale plutôt que
              l'adresse entière : elle tient à côté du menu sur un
              téléphone, et l'adresse reste lisible par un lecteur
              d'écran. */}
          {learner ? (
            <form action={signOutLearner} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="t-chip grid place-items-center w-8 h-8 rounded-full font-bold text-[0.82rem] shrink-0"
              >
                {learner.initial}
              </span>
              <span className="sr-only">
                {A.signedInAs} {learner.email}
              </span>
              <button
                type="submit"
                className="t-btn-dark font-bold text-[0.85rem] px-5 py-2.5 whitespace-nowrap hidden sm:inline-block"
              >
                {A.signOut}
              </button>
            </form>
          ) : (
            <Link
              href="/elearning/connexion"
              className="t-btn-dark font-bold text-[0.85rem] px-5 py-2.5 whitespace-nowrap"
            >
              {A.signIn}
            </Link>
          )}

          <a
            href={accessHref}
            className="t-btn-primary font-bold text-[0.85rem] px-5 py-2.5 whitespace-nowrap hidden lg:inline-block"
          >
            {accessLabel}
          </a>
        </nav>
      </header>

      <nav aria-label="Breadcrumb" className="px-4 md:px-8 pt-6 pb-2">
        <ol className="flex flex-wrap gap-1.5 text-[0.78rem] opacity-60">
          {breadcrumb.map((item, idx) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {idx > 0 && <span aria-hidden="true">/</span>}
              {idx === breadcrumb.length - 1 ? (
                <span className="font-semibold">{item.name}</span>
              ) : (
                <Link href={item.path === '/' ? '/elearning' : item.path} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <main className="t-content px-4 md:px-8 pb-16">{children}</main>

      {showDiscover && (
        <section className="px-4 md:px-8 pb-12">
          <div className="t-card-dark rounded-[22px] p-7 max-w-3xl">
            <span className="t-kicker text-[0.7rem] font-bold uppercase tracking-wide opacity-70">
              {discover.kicker}
            </span>
            <h2 className="t-display font-bold text-xl tracking-[-0.02em] mt-1 mb-2">
              {discover.title}
            </h2>
            <p className="text-[0.92rem] leading-[1.65] opacity-80 mb-5">{discover.text}</p>
            <Link
              href={basePath || '/'}
              className="t-btn-light inline-block font-bold text-[0.88rem] px-6 py-3 rounded-full"
            >
              {discover.cta} →
            </Link>
          </div>
        </section>
      )}

      <footer className="t-card-dark mt-4 px-4 md:px-8 py-12">
        <div className="max-w-5xl">
          <p className="t-display font-bold text-[1.4rem] tracking-[-0.05em] leading-none mb-1" dir="ltr">
            Rus<span className="t-accent-text">Study</span>.
          </p>
          <p className="t-kicker text-[0.72rem] font-bold uppercase tracking-[0.08em] opacity-60 mb-9">
            {PLATFORM_TAGLINE[lang]}
          </p>

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {courses.map((course) => {
              const free = course.lessons.find((l) => l.isFree);
              return (
                <nav key={course.slug}>
                  {/* Le titre du parcours suffit : « Apprendre » devant
                      « Французский A1 — с нуля » se lit mal. */}
                  <h2 className="font-bold text-[0.92rem] mb-3">{pick(course.title, lang)}</h2>
                  <ul className="flex flex-col gap-2 text-[0.86rem] opacity-80">
                    <li>
                      <Link href={`/elearning/${course.slug}`} className="hover:underline">
                        {L.programme}
                      </Link>
                    </li>
                    {free && (
                      <li>
                        <Link
                          href={`/elearning/${course.slug}/${free.slug}`}
                          className="hover:underline"
                        >
                          {L.free}
                        </Link>
                      </li>
                    )}
                    <li className="opacity-55">{SOON[lang]}</li>
                  </ul>
                </nav>
              );
            })}

            <nav>
              <h2 className="font-bold text-[0.92rem] mb-3">RusStudy</h2>
              <ul className="flex flex-col gap-2 text-[0.86rem] opacity-80">
                <li>
                  <Link href="/elearning" className="hover:underline">
                    {NAV_LESSONS[lang]}
                  </Link>
                </li>
                <li>
                  <Link href="/elearning/visio" className="hover:underline">
                    {NAV_VISIO[lang]}
                  </Link>
                </li>
                <li>
                  <a href="mailto:contact@russieetudes.com" className="hover:underline">
                    contact@russieetudes.com
                  </a>
                </li>
                <li>
                  <a href="tel:+79964334489" className="hover:underline" dir="ltr">
                    +7 996 433 4489
                  </a>
                </li>
              </ul>
            </nav>

            {/* Le site d'origine n'est proposé qu'au public maghrébin :
                qui apprend le russe depuis la Tunisie peut vouloir y
                partir étudier. Un russophone, non. */}
            {showDiscover && (
              <nav>
                <h2 className="font-bold text-[0.92rem] mb-3">{discover.kicker}</h2>
                <ul className="flex flex-col gap-2 text-[0.86rem] opacity-80">
                  {DESTINATIONS.map((destination) => (
                    <li key={destination.key} className={destination.live ? '' : 'opacity-55'}>
                      {destination.live ? (
                        <Link href={basePath || '/'} className="hover:underline">
                          {destination.label[lang]}
                        </Link>
                      ) : (
                        <>
                          {destination.label[lang]}
                          <span className="ms-1.5 text-[0.76rem]">
                            — {DESTINATION_SOON[lang]}
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] opacity-55 pt-6 border-t border-white/15">
            <span>© {new Date().getFullYear()} RusStudy</span>
            {LEGAL_PILLS.map((pill) => (
              <Link key={pill.path} href={`${basePath}${pill.path}`} className="hover:underline">
                {pill.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
