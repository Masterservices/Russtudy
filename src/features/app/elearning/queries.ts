import 'server-only';

import { getServerSupabase } from '../../../lib/supabase/server';
import { DEMO_COURSES, DEMO_LESSONS, DEMO_LESSON_DETAIL } from './demo';
import { asLocalized, asLocalizedList, signed, type Row } from './shared';
import type { CourseSummary, LessonDetail, LessonSummary } from './types';

export async function getCourses(userId: string, demo: boolean): Promise<CourseSummary[]> {
  if (demo) return DEMO_COURSES;

  const client = await getServerSupabase();
  if (!client) return DEMO_COURSES;

  const { data: courses } = await client
    .from('courses')
    .select('id, slug, target_lang, level, title, description')
    .eq('is_published', true)
    .order('position');

  if (!courses?.length) return [];

  const ids = courses.map((c: Row) => c.id as string);

  const [{ data: lessons }, { data: enrollments }, { data: progress }] = await Promise.all([
    client.from('lessons').select('id, course_id, is_free').in('course_id', ids).eq('is_published', true),
    client
      .from('enrollments')
      .select('course_id, status, expires_at')
      .eq('user_id', userId)
      .eq('status', 'active'),
    client.from('lesson_progress').select('lesson_id').eq('user_id', userId).not('completed_at', 'is', null),
  ]);

  const done = new Set((progress ?? []).map((p: Row) => p.lesson_id as string));
  const now = Date.now();
  const access = new Set(
    (enrollments ?? [])
      .filter((e: Row) => !e.expires_at || new Date(e.expires_at as string).getTime() > now)
      .map((e: Row) => e.course_id as string),
  );

  return courses.map((c: Row) => {
    const mine = (lessons ?? []).filter((l: Row) => l.course_id === c.id);
    return {
      id: c.id as string,
      slug: c.slug as string,
      targetLang: c.target_lang as string,
      level: c.level as string,
      title: asLocalized(c.title),
      description: asLocalized(c.description),
      lessonCount: mine.length,
      freeLessonCount: mine.filter((l: Row) => l.is_free).length,
      completedCount: mine.filter((l: Row) => done.has(l.id as string)).length,
      hasAccess: access.has(c.id as string),
    };
  });
}

export async function getCourseLessons(
  courseSlug: string,
  userId: string,
  demo: boolean,
): Promise<{ course: CourseSummary; lessons: LessonSummary[] } | null> {
  if (demo) {
    const course = DEMO_COURSES.find((c) => c.slug === courseSlug);
    if (!course) return null;
    return { course, lessons: DEMO_LESSONS[courseSlug] ?? [] };
  }

  const courses = await getCourses(userId, demo);
  const course = courses.find((c) => c.slug === courseSlug);
  if (!course) return null;

  const client = await getServerSupabase();
  if (!client) return null;

  const [{ data: rows }, { data: progress }] = await Promise.all([
    client
      .from('lessons')
      .select('id, slug, position, title, summary, is_free, duration_min')
      .eq('course_id', course.id)
      .eq('is_published', true)
      .order('position'),
    client.from('lesson_progress').select('lesson_id, completed_at').eq('user_id', userId),
  ]);

  const completed = new Map(
    (progress ?? []).map((p: Row) => [p.lesson_id as string, (p.completed_at as string | null) ?? null]),
  );

  const lessons: LessonSummary[] = (rows ?? []).map((l: Row) => ({
    id: l.id as string,
    slug: l.slug as string,
    position: l.position as number,
    title: asLocalized(l.title),
    summary: asLocalized(l.summary),
    isFree: Boolean(l.is_free),
    durationMin: l.duration_min as number,
    completedAt: completed.get(l.id as string) ?? null,
    unlocked: Boolean(l.is_free) || course.hasAccess,
  }));

  return { course, lessons };
}

export async function getLessonDetail(
  courseSlug: string,
  lessonSlug: string,
  userId: string,
  demo: boolean,
): Promise<LessonDetail | null> {
  if (demo) {
    return DEMO_LESSON_DETAIL.courseSlug === courseSlug && DEMO_LESSON_DETAIL.slug === lessonSlug
      ? DEMO_LESSON_DETAIL
      : null;
  }

  const client = await getServerSupabase();
  if (!client) return null;

  const listing = await getCourseLessons(courseSlug, userId, demo);
  if (!listing) return null;

  const index = listing.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;
  const summary = listing.lessons[index];

  // Verrou de surface : la RLS refuse déjà les blocs d'une leçon non
  // accessible, mais couper ici évite d'afficher une leçon vide plutôt
  // qu'un message clair.
  if (!summary.unlocked) return null;

  const { data: lessonRow } = await client
    .from('lessons')
    .select('objectives')
    .eq('id', summary.id)
    .maybeSingle();

  const [{ data: blockRows }, { data: exerciseRows }, { data: progressRow }] = await Promise.all([
    client
      .from('lesson_blocks')
      .select('id, position, kind, content, media_url, audio_url, transcript')
      .eq('lesson_id', summary.id)
      .order('position'),
    client
      .from('exercises')
      .select('id, position, kind, prompt, options, audio_url')
      .eq('lesson_id', summary.id)
      .order('position'),
    client
      .from('lesson_progress')
      .select('last_block_pos, completed_at')
      .eq('user_id', userId)
      .eq('lesson_id', summary.id)
      .maybeSingle(),
  ]);

  const blocks = await Promise.all(
    (blockRows ?? []).map(async (b: Row) => {
      const content = (b.content ?? {}) as Row;
      return {
        id: b.id as string,
        position: b.position as number,
        kind: b.kind as LessonDetail['blocks'][number]['kind'],
        title: asLocalized(content.title),
        lines: asLocalizedList(content.lines),
        mediaUrl: await signed(client, b.media_url),
        audioUrl: await signed(client, b.audio_url),
        transcript: asLocalized(b.transcript),
      };
    }),
  );

  const exercises = await Promise.all(
    (exerciseRows ?? []).map(async (e: Row) => ({
      id: e.id as string,
      position: e.position as number,
      kind: e.kind as LessonDetail['exercises'][number]['kind'],
      prompt: asLocalized(e.prompt),
      options: asLocalizedList(e.options),
      audioUrl: await signed(client, e.audio_url),
    })),
  );

  return {
    id: summary.id,
    slug: summary.slug,
    courseSlug,
    targetLang: listing.course.targetLang,
    position: summary.position,
    title: summary.title,
    summary: summary.summary,
    objectives: asLocalizedList(lessonRow?.objectives),
    isFree: summary.isFree,
    durationMin: summary.durationMin,
    blocks,
    exercises,
    lastBlockPos: (progressRow?.last_block_pos as number | undefined) ?? 0,
    completedAt: (progressRow?.completed_at as string | null | undefined) ?? null,
    prevSlug: index > 0 ? listing.lessons[index - 1].slug : null,
    nextSlug: index < listing.lessons.length - 1 ? listing.lessons[index + 1].slug : null,
  };
}
