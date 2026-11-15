import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { SITE } from '../../../config/site';
import {
  getAccessibleLessons,
  getCompletedLessons,
  getPublicCourse,
  getPublicLesson,
  isSignedIn,
} from '../../../features/app/elearning/public';
import { EL } from '../../../features/app/elearning/labels';
import { pick } from '../../../features/app/elearning/types';
import CataloguePage from '../../../pages-templates/elearning/CataloguePage';
import SignInPage from '../../../pages-templates/elearning/SignInPage';
import { ACCOUNT } from '../../../pages-templates/elearning/shell-labels';
import CoursePage from '../../../pages-templates/elearning/CoursePage';
import LessonPage from '../../../pages-templates/elearning/LessonPage';
import VisioPage from '../../../pages-templates/elearning/VisioPage';
import ShortsPage from '../../../pages-templates/elearning/ShortsPage';
import ShortsHubPage from '../../../pages-templates/elearning/ShortsHubPage';
import { deckCopy, shortsCopy } from '../../../pages-templates/elearning/shorts-copy';
import { SHORTS_SEGMENT, SHORT_COURSE_SLUGS, getShortDeck } from '../../../content/shorts/registry';
import type { ShortDeckSource } from '../../../content/shorts/types';
import type { ShortsTab } from '../../../components/elearning/shorts/ShortsTabBar';
import { resolveElearning } from './resolve';
import { SECTION_IMAGES } from '../../../content/images/registry';
import type { Lang } from '../../../i18n';

/**
 * Carte sociale d'une page e-learning.
 *
 * Les pages publiques du site en ont une depuis toujours ; l'espace
 * e-learning n'en avait pas, et un lien partagé vers un parcours
 * s'affichait nu. L'image suit la langue enseignée.
 */
function social(opts: {
  title: string;
  description: string;
  canonical: string;
  targetLang?: string;
  lang: Lang;
}) {
  const image = opts.targetLang === 'fr'
    ? SECTION_IMAGES['comparatif-france']
    : SECTION_IMAGES['apprendre-russe'];
  const url = `${SITE.domain}${image.src}`;
  return {
    alternates: { canonical: opts.canonical },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    openGraph: {
      siteName: SITE.name,
      title: opts.title,
      description: opts.description,
      type: 'website' as const,
      url: opts.canonical,
      images: [{ url, width: image.width, height: image.height, alt: image.alt[opts.lang] }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: opts.title,
      description: opts.description,
      images: [url],
    },
  };
}

/** Vue du fil demandée par un lien : `?vue=reviser`. */
const SHORTS_VIEWS: Record<string, ShortsTab> = {
  explorer: 'explore',
  reviser: 'review',
  carnet: 'notebook',
};

/**
 * Espace e-learning : catalogue, leçon d'essai et réservation de visio.
 *
 * Les trois vivent sous une même route attrape-tout pour que la
 * disposition, seule capable d'écrire l'attribut `lang` du document,
 * connaisse la langue du parcours avant d'afficher quoi que ce soit.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = await resolveElearning(slug);
  const base = { metadataBase: new URL(SITE.domain) };

  if (route.kind === 'catalogue') {
    const L = EL[route.lang];
    const title = `${L.title} — RusStudy`;
    return {
      ...base,
      title,
      description: L.subtitle,
      ...social({
        title,
        description: L.subtitle,
        canonical: `${SITE.domain}/elearning`,
        lang: route.lang,
      }),
    };
  }

  if (route.kind === 'shorts-hub') {
    const copy = shortsCopy(route.lang).hub;
    return {
      ...base,
      title: copy.metaTitle,
      description: copy.metaDescription,
      ...social({
        title: copy.metaTitle,
        description: copy.metaDescription,
        canonical: `${SITE.domain}/elearning/${SHORTS_SEGMENT}`,
        lang: route.lang,
      }),
    };
  }

  if (route.kind === 'shorts') {
    // Le lien partagé d'un short (`?s=…`) montre la même page : une
    // seule adresse canonique, sans paramètre.
    const copy = deckCopy(route.lang, route.deck.targetLang, route.deck.level);
    return {
      ...base,
      title: copy.metaTitle,
      description: copy.metaDescription,
      ...social({
        title: copy.metaTitle,
        description: copy.metaDescription,
        canonical: `${SITE.domain}/elearning/${route.courseSlug}/${SHORTS_SEGMENT}`,
        targetLang: route.deck.targetLang,
        lang: route.lang,
      }),
    };
  }

  if (route.kind === 'course') {
    const title = `${pick(route.course.title, route.lang)} — RusStudy`;
    const description = pick(route.course.description, route.lang);
    return {
      ...base,
      title,
      description,
      ...social({
        title,
        description,
        canonical: `${SITE.domain}/elearning/${route.courseSlug}`,
        targetLang: route.course.targetLang,
        lang: route.lang,
      }),
    };
  }

  if (route.kind === 'lesson') {
    const detail = await getPublicLesson(route.courseSlug, route.lessonSlug);
    // Une leçon réservée n'est pas indexable : son contenu n'est pas
    // servi à un visiteur sans inscription — et un robot n'en a pas —,
    // alors proposer la page à Google reviendrait à lui promettre ce
    // qu'elle ne montre pas. Le test porte sur `isFree` et non sur la
    // présence du détail : celui-ci est désormais livré aux inscrits,
    // et l'indexabilité ne doit pas dépendre de qui demande.
    if (!detail || !detail.lesson.isFree) {
      return { ...base, robots: { index: false, follow: false } };
    }

    const title = `${pick(detail.lesson.title, route.lang)} — ${pick(detail.course.title, route.lang)}`;
    const description = pick(detail.lesson.summary, route.lang);
    return {
      ...base,
      title,
      description,
      ...social({
        title,
        description,
        canonical: `${SITE.domain}/elearning/${route.courseSlug}/${route.lessonSlug}`,
        targetLang: route.course.targetLang,
        lang: route.lang,
      }),
    };
  }

  // Visioconférence et connexion : deux pages de service. Hors index,
  // puisqu'elles n'ont rien à proposer à un moteur — mais titrées, car
  // un onglet sans nom reste un onglet qu'on ne retrouve pas.
  const service = { ...base, robots: { index: false, follow: false } };

  if (route.kind === 'signin') {
    return { ...service, title: `${ACCOUNT[route.lang].title} — RusStudy` };
  }

  if (route.kind === 'visio') {
    return { ...service, title: `${EL[route.lang].visioTitle} — RusStudy` };
  }

  return service;
}

export default async function ElearningRoute({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const route = await resolveElearning(slug);

  if (route.kind === 'catalogue') {
    return <CataloguePage lang={route.lang} courses={route.courses} />;
  }

  if (route.kind === 'visio') {
    return <VisioPage />;
  }

  if (route.kind === 'shorts-hub') {
    const decks = SHORT_COURSE_SLUGS.map(getShortDeck).filter(
      (deck): deck is ShortDeckSource => deck !== null,
    );
    return <ShortsHubPage lang={route.lang} decks={decks} />;
  }

  if (route.kind === 'shorts') {
    const query = await searchParams;
    const requested = typeof query.s === 'string' ? query.s : null;
    const view = typeof query.vue === 'string' ? SHORTS_VIEWS[query.vue] ?? null : null;
    // Sans parcours en base, aucune leçon n'est à relier : pas de requête.
    const accessible = route.course ? await getAccessibleLessons(route.courseSlug) : new Set<string>();

    return (
      <ShortsPage
        lang={route.lang}
        deck={route.deck}
        course={route.course}
        accessible={accessible}
        initialShortId={requested}
        initialTab={view}
      />
    );
  }

  if (route.kind === 'signin') {
    const next = (await searchParams).suivant;
    return <SignInPage lang={route.lang} next={typeof next === 'string' ? next : undefined} />;
  }

  if (route.kind === 'course') {
    const detail = await getPublicCourse(route.courseSlug);
    if (!detail) notFound();

    const [completed, accessible, signedIn] = await Promise.all([
      getCompletedLessons(route.courseSlug),
      getAccessibleLessons(route.courseSlug),
      isSignedIn(),
    ]);

    return (
      <CoursePage
        lang={route.lang}
        detail={detail}
        completed={completed}
        accessible={accessible}
        signedIn={signedIn}
      />
    );
  }

  if (route.kind === 'lesson') {
    const known = route.course.lessons.some((l) => l.slug === route.lessonSlug);
    if (!known) notFound();

    const detail = await getPublicLesson(route.courseSlug, route.lessonSlug);
    // Leçon réservée : retour au catalogue plutôt qu'une page vide ou
    // une 404, puisque la leçon existe et que l'adresse est bonne. Pas
    // de renvoi vers la plateforme de suivi : qui vient apprendre une
    // langue n'a pas à se retrouver dans un dossier de candidature.
    if (!detail) redirect('/elearning');

    const [completed, accessible, signedIn] = await Promise.all([
      getCompletedLessons(route.courseSlug),
      getAccessibleLessons(route.courseSlug),
      isSignedIn(),
    ]);

    return (
      <LessonPage
        lang={route.lang}
        detail={detail}
        signedIn={signedIn}
        completed={completed.has(route.lessonSlug)}
        accessible={accessible}
      />
    );
  }

  notFound();
}
