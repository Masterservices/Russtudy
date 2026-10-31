-- ============================================================
-- RusStudy — E-learning : la leçon d'essai lisible sans compte.
-- Migration 4/4.
--
-- Une leçon d'essai sert d'appât : elle doit se lire sans inscription
-- et s'indexer. Le rôle `anon` reçoit donc de quoi lire le catalogue
-- publié et le contenu des seules leçons marquées `is_free`.
--
-- Rien d'autre ne s'ouvre : `exercises.answer` reste hors du privilège
-- de colonne, et les médias d'une leçon payante restent refusés au
-- stockage.
-- ============================================================

create or replace function public.is_free_lesson(target_lesson uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.lessons l
    join public.courses c on c.id = l.course_id
    where l.id = target_lesson and l.is_published and l.is_free and c.is_published
  );
$$;

drop policy if exists courses_select_anon on public.courses;
create policy courses_select_anon on public.courses
  for select to anon using (is_published);

-- Le sommaire d'une leçon payante reste visible : c'est lui qui donne
-- envie de s'inscrire. Seul son contenu est protégé.
drop policy if exists lessons_select_anon on public.lessons;
create policy lessons_select_anon on public.lessons
  for select to anon using (
    is_published and exists (select 1 from public.courses c where c.id = course_id and c.is_published)
  );

drop policy if exists lesson_blocks_select_anon on public.lesson_blocks;
create policy lesson_blocks_select_anon on public.lesson_blocks
  for select to anon using (public.is_free_lesson(lesson_id));

drop policy if exists exercises_select_anon on public.exercises;
create policy exercises_select_anon on public.exercises
  for select to anon using (public.is_free_lesson(lesson_id));

grant select on public.courses to anon;
grant select on public.lessons to anon;
grant select on public.lesson_blocks to anon;

revoke all on public.exercises from anon;
grant select (id, lesson_id, position, kind, prompt, options, explanation, audio_url, created_at, updated_at)
  on public.exercises to anon;

-- Les médias d'une leçon d'essai sont signables par un visiteur ; ceux
-- des leçons payantes restent refusés. La règle porte sur le chemin de
-- l'objet, qui suit toujours <parcours>/<leçon>/<fichier>.
drop policy if exists course_assets_read_free on storage.objects;
create policy course_assets_read_free on storage.objects
  for select to anon
  using (
    bucket_id = 'course-assets'
    and exists (
      select 1 from public.lessons l
      join public.courses c on c.id = l.course_id
      where l.is_published and l.is_free and c.is_published
        and storage.objects.name like c.slug || '/' || l.slug || '/%'
    )
  );

-- La correction tolère l'absence de compte : le verdict est rendu, mais
-- aucune tentative n'est enregistrée — il n'y a personne à qui la
-- rattacher, et `exercise_attempts.user_id` n'accepte pas de valeur nulle.
create or replace function public.grade_exercise(target_exercise uuid, given jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  ex      public.exercises%rowtype;
  correct boolean;
begin
  select * into ex from public.exercises where id = target_exercise;
  if not found then
    raise exception 'exercise_not_found';
  end if;
  if not public.can_access_lesson(ex.lesson_id) then
    raise exception 'forbidden';
  end if;

  correct := (ex.answer = given);

  if auth.uid() is not null then
    insert into public.exercise_attempts (user_id, exercise_id, given, is_correct)
    values (auth.uid(), target_exercise, given, correct);
  end if;

  return jsonb_build_object('correct', correct, 'explanation', ex.explanation);
end;
$$;

grant execute on function public.grade_exercise(uuid, jsonb) to anon;
