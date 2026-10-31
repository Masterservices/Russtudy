import type { AppLang } from '../i18n';

/** Texte traduit, indexé par code de langue — reflet du jsonb en base. */
export type Localized = Partial<Record<AppLang, string>>;
export type LocalizedList = Partial<Record<AppLang, string[]>>;

export function pick(value: Localized | null | undefined, lang: AppLang, fallback = ''): string {
  if (!value) return fallback;
  return value[lang] ?? value.fr ?? value.en ?? value.ru ?? value.ar ?? fallback;
}

export function pickList(value: LocalizedList | null | undefined, lang: AppLang): string[] {
  if (!value) return [];
  return value[lang] ?? value.fr ?? value.en ?? value.ru ?? value.ar ?? [];
}

export interface CourseSummary {
  id: string;
  slug: string;
  targetLang: string;
  level: string;
  title: Localized;
  description: Localized;
  lessonCount: number;
  freeLessonCount: number;
  /** Leçons terminées par l'utilisateur courant. */
  completedCount: number;
  /** Inscription active : donne accès aux leçons non libres. */
  hasAccess: boolean;
}

export interface LessonSummary {
  id: string;
  slug: string;
  position: number;
  title: Localized;
  summary: Localized;
  isFree: boolean;
  durationMin: number;
  completedAt: string | null;
  /** Faux lorsque la leçon est verrouillée faute d'inscription active. */
  unlocked: boolean;
}

export interface LessonBlock {
  id: string;
  position: number;
  kind: 'slide' | 'text' | 'audio' | 'video' | 'vocabulary' | 'dialogue';
  title: Localized;
  lines: LocalizedList;
  /** URL signée de l'image, résolue côté serveur. */
  mediaUrl: string | null;
  /** URL signée de l'audio, résolue côté serveur. */
  audioUrl: string | null;
  transcript: Localized;
}

export interface ExercisePublic {
  id: string;
  position: number;
  kind: 'mcq' | 'fill_blank' | 'match' | 'order' | 'listening' | 'speaking';
  prompt: Localized;
  options: LocalizedList;
  audioUrl: string | null;
}

export interface LessonDetail {
  id: string;
  slug: string;
  courseSlug: string;
  /**
   * Langue enseignée par le parcours. La voix off parle cette langue —
   * on n'apprend pas une prononciation dans une autre langue — et la
   * traduction dans la langue d'interface l'accompagne.
   */
  targetLang: string;
  position: number;
  title: Localized;
  summary: Localized;
  objectives: LocalizedList;
  isFree: boolean;
  durationMin: number;
  blocks: LessonBlock[];
  exercises: ExercisePublic[];
  lastBlockPos: number;
  completedAt: string | null;
  prevSlug: string | null;
  nextSlug: string | null;
}
