import 'server-only';

import { getServerSupabase } from '../../../lib/supabase/server';
import { asLocalized, asLocalizedList, signed, type Row } from './shared';
import type { Localized, LocalizedList } from './types';

/**
 * Lecture publique du catalogue et des leçons d'essai.
 *
 * Ce module ne connaît aucun utilisateur : il interroge Supabase sans
 * session, donc avec le rôle `anon`. Ce sont les politiques de la base
 * qui décident de ce qui est lisible — le catalogue publié, et le
 * contenu des seules leçons d'essai. L'application n'a pas à refaire ce
 * tri, et ne peut donc pas se tromper en le refaisant.
 */

export interface PublicLesson {
  slug: string;
  moduleId: string | null;
  position: number;
  title: Localized;
  summary: Localized;
  isFree: boolean;
  durationMin: number;
}

export interface PublicCourse {
  slug: string;
  targetLang: string;
  uiLangs: string[];
  level: string;
  title: Localized;
  description: Localized;
  lessons: PublicLesson[];
}

export interface PublicBlock {
  id: string;
  position: number;
  title: Localized;
  lines: LocalizedList;
  mediaUrl: string | null;
  audioUrl: string | null;
  transcript: Localized;
}

export interface PublicExercise {
  id: string;
  position: number;
  prompt: Localized;
  options: LocalizedList;
}

export interface PublicLessonDetail {
  course: PublicCourse;
  lesson: PublicLesson;
  /** Identifiant de la leçon : requis pour enregistrer la progression. */
  lessonId: string;
  objectives: LocalizedList;
  blocks: PublicBlock[];
  exercises: PublicExercise[];
  prevSlug: string | null;
  nextSlug: string | null;
}

function toCourse(row: Row, lessons: PublicLesson[]): PublicCourse {
  return {
    slug: row.slug as string,
    targetLang: row.target_lang as string,
    uiLangs: (row.ui_langs as string[] | null) ?? ['fr'],
    level: row.level as string,
    title: asLocalized(row.title),
    description: asLocalized(row.description),
    lessons,
  };
}

function toLesson(row: Row): PublicLesson {
  return {
    slug: row.slug as string,
    moduleId: (row.module_id as string | null) ?? null,
    position: row.position as number,
    title: asLocalized(row.title),
    summary: asLocalized(row.summary),
    isFree: Boolean(row.is_free),
    durationMin: (row.duration_min as number) ?? 10,
  };
}

/** Catalogue public : parcours publiés et sommaire de leurs leçons. */
export async function getPublicCatalogue(): Promise<PublicCourse[]> {
  const client = await getServerSupabase();
  if (!client) return [];

  const { data: courses } = await client
    .from('courses')
    .select('id, slug, target_lang, ui_langs, level, title, description')
    .eq('is_published', true)
    .order('position');

  if (!courses?.length) return [];

  const { data: lessons } = await client
    .from('lessons')
    .select('course_id, module_id, slug, position, title, summary, is_free, duration_min')
    .in('course_id', courses.map((c: Row) => c.id as string))
    .eq('is_published', true)
    .order('position');

  return courses.map((c: Row) =>
    toCourse(
      c,
      (lessons ?? []).filter((l: Row) => l.course_id === c.id).map(toLesson),
    ),
  );
}

/**
 * Leçon, telle que la base accepte de la livrer.
 *
 * Aucun tri ici : les politiques décident si les blocs sont lisibles —
 * leçon d'essai pour tout le monde, reste du parcours pour qui a une
 * inscription active, et toujours pour l'équipe. Refuser les leçons
 * payantes dans l'application, comme on le faisait, doublait cette
 * règle d'une seconde qui ignorait les inscriptions : un étudiant à
 * jour se faisait renvoyer au catalogue.
 *
 * Renvoie `null` quand la base ne livre rien : la leçon existe, elle
 * n'est pas ouverte à ce visiteur, et une page vide ne vaut rien.
 */
export async function getPublicLesson(
  courseSlug: string,
  lessonSlug: string,
): Promise<PublicLessonDetail | null> {
  const client = await getServerSupabase();
  if (!client) return null;

  const { data: courseRow } = await client
    .from('courses')
    .select('id, slug, target_lang, ui_langs, level, title, description')
    .eq('slug', courseSlug)
    .eq('is_published', true)
    .maybeSingle();

  if (!courseRow) return null;

  const { data: lessonRows } = await client
    .from('lessons')
    .select('id, module_id, slug, position, title, summary, objectives, is_free, duration_min')
    .eq('course_id', courseRow.id as string)
    .eq('is_published', true)
    .order('position');

  const rows = lessonRows ?? [];
  const index = rows.findIndex((l: Row) => l.slug === lessonSlug);
  if (index === -1) return null;

  const row = rows[index];

  const [{ data: blockRows }, { data: exerciseRows }] = await Promise.all([
    client
      .from('lesson_blocks')
      .select('id, position, content, media_url, audio_url, transcript')
      .eq('lesson_id', row.id as string)
      .order('position'),
    client
      .from('exercises')
      .select('id, position, prompt, options')
      .eq('lesson_id', row.id as string)
      .order('position'),
  ]);

  const blocks = await Promise.all(
    (blockRows ?? []).map(async (b: Row) => {
      const content = (b.content ?? {}) as Row;
      return {
        id: b.id as string,
        position: b.position as number,
        title: asLocalized(content.title),
        lines: asLocalizedList(content.lines),
        mediaUrl: await signed(client, b.media_url),
        audioUrl: await signed(client, b.audio_url),
        transcript: asLocalized(b.transcript),
      };
    }),
  );

  // Aucun bloc : la base a refusé. Rien à afficher.
  if (blocks.length === 0) return null;

  return {
    course: toCourse(courseRow as Row, rows.map(toLesson)),
    lesson: toLesson(row),
    lessonId: row.id as string,
    objectives: asLocalizedList(row.objectives),
    blocks,
    exercises: (exerciseRows ?? []).map((e: Row) => ({
      id: e.id as string,
      position: e.position as number,
      prompt: asLocalized(e.prompt),
      options: asLocalizedList(e.options),
    })),
    prevSlug: index > 0 ? (rows[index - 1].slug as string) : null,
    nextSlug: index < rows.length - 1 ? (rows[index + 1].slug as string) : null,
  };
}

export interface PublicModule {
  id: string;
  position: number;
  title: Localized;
  lessons: PublicLesson[];
}

export interface PublicCourseDetail {
  course: PublicCourse;
  modules: PublicModule[];
  /** Leçons rattachées à aucun module : affichées hors section. */
  loose: PublicLesson[];
  totalMinutes: number;
  freeCount: number;
}

/**
 * Page d'un parcours : son programme, module par module.
 *
 * Le sommaire est public, leçons réservées comprises — c'est lui qui
 * donne envie de demander l'accès. Seul le contenu des leçons est
 * protégé, et il l'est par la base.
 */
export async function getPublicCourse(courseSlug: string): Promise<PublicCourseDetail | null> {
  const course = (await getPublicCatalogue()).find((c) => c.slug === courseSlug);
  if (!course) return null;

  const client = await getServerSupabase();
  if (!client) return null;

  const { data: courseRow } = await client
    .from('courses')
    .select('id')
    .eq('slug', courseSlug)
    .maybeSingle();

  const { data: moduleRows } = courseRow
    ? await client
        .from('modules')
        .select('id, position, title')
        .eq('course_id', courseRow.id as string)
        .order('position')
    : { data: [] };

  const modules: PublicModule[] = (moduleRows ?? []).map((m: Row) => ({
    id: m.id as string,
    position: m.position as number,
    title: asLocalized(m.title),
    lessons: course.lessons.filter((l) => l.moduleId === m.id),
  }));

  const grouped = new Set(modules.flatMap((m) => m.lessons.map((l) => l.slug)));

  return {
    course,
    modules,
    loose: course.lessons.filter((l) => !grouped.has(l.slug)),
    totalMinutes: course.lessons.reduce((sum, l) => sum + l.durationMin, 0),
    freeCount: course.lessons.filter((l) => l.isFree).length,
  };
}

/**
 * Leçons qu'un visiteur peut ouvrir, d'après la base.
 *
 * Plutôt que de rejouer la règle d'accès dans l'application — gratuite,
 * ou inscrite, ou membre de l'équipe — on demande à la base quels blocs
 * elle accepte de livrer. Une seule requête, filtrée par les politiques,
 * et aucune logique en double à tenir d'accord.
 */
export async function getAccessibleLessons(courseSlug: string): Promise<Set<string>> {
  const client = await getServerSupabase();
  if (!client) return new Set();

  const { data: courseRow } = await client
    .from('courses')
    .select('id')
    .eq('slug', courseSlug)
    .maybeSingle();
  if (!courseRow) return new Set();

  const { data: lessons } = await client
    .from('lessons')
    .select('id, slug')
    .eq('course_id', courseRow.id as string)
    .eq('is_published', true);

  const rows = lessons ?? [];
  if (!rows.length) return new Set();

  const bySlug = new Map(rows.map((l: Row) => [l.id as string, l.slug as string]));

  const { data: readable } = await client
    .from('lesson_blocks')
    .select('lesson_id')
    .in('lesson_id', rows.map((l: Row) => l.id as string));

  return new Set(
    (readable ?? [])
      .map((b: Row) => bySlug.get(b.lesson_id as string))
      .filter((slug): slug is string => Boolean(slug)),
  );
}

/**
 * Leçons terminées par l'utilisateur connecté, parmi celles fournies.
 *
 * Renvoie un ensemble vide hors session : la progression se suit avec
 * un compte, pas dans le navigateur. Une barre qui disparaît en
 * changeant d'appareil mentirait sur ce qu'elle mesure.
 */
export async function getCompletedLessons(courseSlug: string): Promise<Set<string>> {
  const client = await getServerSupabase();
  if (!client) return new Set();

  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) return new Set();

  const { data: courseRow } = await client
    .from('courses')
    .select('id')
    .eq('slug', courseSlug)
    .maybeSingle();
  if (!courseRow) return new Set();

  const { data: lessons } = await client
    .from('lessons')
    .select('id, slug')
    .eq('course_id', courseRow.id as string);

  const bySlug = new Map((lessons ?? []).map((l: Row) => [l.id as string, l.slug as string]));

  const { data: progress } = await client
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', user.id)
    .not('completed_at', 'is', null);

  return new Set(
    (progress ?? [])
      .map((p: Row) => bySlug.get(p.lesson_id as string))
      .filter((slug): slug is string => Boolean(slug)),
  );
}

export interface Learner {
  email: string;
  /** Initiale affichée dans la pastille de compte. */
  initial: string;
}

/**
 * Apprenant connecté, réduit à ce que l'en-tête a besoin d'afficher.
 *
 * Ni rôle, ni fiche de profil : la plateforme de langue n'a pas à
 * savoir si la personne suit par ailleurs une candidature.
 */
export async function getLearner(): Promise<Learner | null> {
  const client = await getServerSupabase();
  if (!client) return null;

  const {
    data: { user },
  } = await client.auth.getUser();

  const email = user?.email;
  if (!email) return null;

  return { email, initial: email.slice(0, 1).toUpperCase() };
}

/** Vrai lorsqu'une session est ouverte, sans rien révéler de son titulaire. */
export async function isSignedIn(): Promise<boolean> {
  const client = await getServerSupabase();
  if (!client) return false;
  const {
    data: { user },
  } = await client.auth.getUser();
  return Boolean(user);
}
