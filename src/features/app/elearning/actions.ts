'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getAuth } from '../../../lib/neon/auth';
import { getAuthUser, getServerDb } from '../../../lib/neon/server';
import { getAppSession } from '../data/session';

export interface GradeResult {
  correct: boolean;
  explanation: string;
  /** Vrai lorsque la base n'est pas branchée : réponse non vérifiée. */
  demo?: boolean;
}

/**
 * Correction d'un exercice.
 *
 * Le verdict vient de la fonction grade_exercise, `security definer` :
 * la bonne réponse ne quitte jamais la base, et un privilège de colonne
 * interdit déjà au client de lire `exercises.answer`. Corriger côté
 * navigateur reviendrait à publier le corrigé dans le HTML.
 */
export async function gradeExercise(
  exerciseId: string,
  given: string,
  fallbackLang?: string,
): Promise<GradeResult> {
  // Pas de session : un visiteur corrige les exercices de la leçon
  // d'essai. La base le lui accorde pour ces leçons seulement, et
  // n'enregistre alors aucune tentative — il n'y a personne à qui la
  // rattacher.
  const session = await getAppSession();

  const client = await getServerDb();
  if (!client) {
    // Mode démonstration : aucune correction n'est possible sans base,
    // et il vaut mieux le dire que d'afficher un faux verdict.
    return { correct: false, explanation: '', demo: true };
  }

  const { data, error } = await client.rpc('grade_exercise', {
    target_exercise: exerciseId,
    given: { ru: given },
  });

  if (error) return { correct: false, explanation: '' };

  const payload = (data ?? {}) as { correct?: boolean; explanation?: Record<string, string> };
  const explanation = payload.explanation ?? {};
  const lang = session?.user.lang ?? fallbackLang ?? 'fr';

  return {
    correct: Boolean(payload.correct),
    explanation: explanation[lang] ?? explanation.ru ?? explanation.fr ?? '',
  };
}

/** Enregistre la position atteinte et, le cas échéant, l'achèvement. */
export async function saveLessonProgress(
  lessonId: string,
  blockPosition: number,
  completed: boolean,
): Promise<{ saved: boolean }> {
  const session = await getAppSession();
  if (!session) return { saved: false };

  const client = await getServerDb();
  if (!client) return { saved: false };

  const { error } = await client.from('lesson_progress').upsert(
    {
      user_id: session.user.id,
      lesson_id: lessonId,
      last_block_pos: blockPosition,
      ...(completed ? { completed_at: new Date().toISOString() } : {}),
    },
    { onConflict: 'user_id,lesson_id' },
  );

  return { saved: !error };
}

export interface LearnerAuthState {
  error?: string;
}

/**
 * Destination d'après connexion, bornée à la plateforme.
 *
 * Sans ce filtre, le paramètre fourni dans l'URL deviendrait une
 * redirection ouverte. Et le borner à `/elearning` dit aussi la règle
 * du lieu : on ne sort pas d'ici en se connectant, surtout pas vers un
 * dossier de candidature.
 */
function safeLearnerNext(value: FormDataEntryValue | null): string {
  const raw = typeof value === 'string' ? value : '';
  if (!raw.startsWith('/elearning') || raw.startsWith('/elearning//')) return '/elearning';
  return raw;
}

/** Connexion d'un apprenant, qui le laisse là où il était. */
export async function signInLearner(
  _prev: LearnerAuthState,
  formData: FormData,
): Promise<LearnerAuthState> {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const next = safeLearnerNext(formData.get('suivant'));

  if (!email || !password) return { error: 'missing' };

  const auth = getAuth();
  if (!auth) return { error: 'unavailable' };

  const { error } = await auth.signIn.email({ email, password });
  if (error) {
    // La cause exacte reste dans les journaux : la dire à l'écran
    // révélerait quelles adresses sont enregistrées.
    console.error('[elearning][signin]', error.status, error.code, error.message);
    return { error: error.status === 429 ? 'rate' : 'credentials' };
  }

  revalidatePath('/elearning', 'layout');
  redirect(next);
}

export async function signOutLearner(): Promise<void> {
  const auth = getAuth();
  if (auth) await auth.signOut({});

  revalidatePath('/elearning', 'layout');
  redirect('/elearning');
}

/**
 * Marque une leçon comme terminée.
 *
 * L'identité vient de la session Neon Auth plutôt que de la session
 * applicative : un apprenant n'a pas forcément de fiche `profiles`, et
 * exiger un rôle de la plateforme de suivi pour cocher une leçon de
 * langue reviendrait à recoudre les deux espaces. La politique
 * `lesson_progress_upsert` vérifie de son côté que la leçon est bien
 * accessible — c'est la base qui tranche, pas cette fonction.
 */
export async function markLessonDone(
  lessonId: string,
  blockPosition: number,
): Promise<{ saved: boolean }> {
  const client = await getServerDb();
  if (!client) return { saved: false };

  const user = await getAuthUser();
  if (!user) return { saved: false };

  const { error } = await client.from('lesson_progress').upsert(
    {
      user_id: user.id,
      lesson_id: lessonId,
      last_block_pos: blockPosition,
      completed_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,lesson_id' },
  );

  if (error) {
    console.error('[elearning][progress]', error.code, error.message);
    return { saved: false };
  }

  revalidatePath('/elearning', 'layout');
  return { saved: true };
}
