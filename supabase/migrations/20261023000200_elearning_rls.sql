-- ============================================================
-- RusStudy — E-learning : sécurité au niveau ligne.
-- Migration 2/3.
--
-- Règle générale :
--   * tout utilisateur connecté   -> parcours publiés, leçons d'essai ;
--   * inscrit actif               -> toutes les leçons de son parcours ;
--   * professeur                  -> ses créneaux et ses réservations ;
--   * admin                       -> accès complet.
--
-- Attention : la RLS filtre des lignes, jamais des colonnes. C'est le
-- privilège de colonne posé dans la migration …000300 qui empêche un
-- étudiant de lire `exercises.answer` ; la politique ci-dessous décide
-- seulement quelles lignes il voit. La correction passe par
-- public.grade_exercise, `security definer`, qui lit la réponse sans
-- jamais la renvoyer.
-- ============================================================

-- ------------------------------------------------------------
-- Helpers
-- ------------------------------------------------------------
create or replace function public.has_active_enrollment(target_course uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.enrollments e
    where e.course_id = target_course
      and e.user_id = auth.uid()
      and e.status = 'active'
      and (e.expires_at is null or e.expires_at > now())
  );
$$;

create or replace function public.is_teacher()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.teachers t where t.id = auth.uid() and t.is_active);
$$;

/**
 * Accès à une leçon : leçon d'essai, inscription active, ou personnel.
 */
create or replace function public.can_access_lesson(target_lesson uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.lessons l
    join public.courses c on c.id = l.course_id
    where l.id = target_lesson
      and l.is_published
      and c.is_published
      and (
        l.is_free
        or public.has_active_enrollment(c.id)
        or public.is_admin()
        or public.current_app_role() = 'consultant'
        or public.is_teacher()
      )
  );
$$;

-- ------------------------------------------------------------
-- Activation
-- ------------------------------------------------------------
alter table public.courses            enable row level security;
alter table public.lessons            enable row level security;
alter table public.lesson_blocks      enable row level security;
alter table public.exercises          enable row level security;
alter table public.enrollments        enable row level security;
alter table public.lesson_progress    enable row level security;
alter table public.exercise_attempts  enable row level security;
alter table public.teachers           enable row level security;
alter table public.tutoring_slots     enable row level security;
alter table public.tutoring_bookings  enable row level security;

-- ------------------------------------------------------------
-- Parcours : le catalogue publié est visible de tous les connectés.
-- ------------------------------------------------------------
drop policy if exists courses_select on public.courses;
create policy courses_select on public.courses
  for select to authenticated
  using (is_published or public.is_admin());

drop policy if exists courses_write_admin on public.courses;
create policy courses_write_admin on public.courses
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- Leçons : le sommaire reste lisible même sans inscription — c'est lui
-- qui donne envie de s'inscrire. Seul le contenu est protégé.
-- ------------------------------------------------------------
drop policy if exists lessons_select on public.lessons;
create policy lessons_select on public.lessons
  for select to authenticated
  using (
    public.is_admin()
    or (
      is_published
      and exists (select 1 from public.courses c where c.id = course_id and c.is_published)
    )
  );

drop policy if exists lessons_write_admin on public.lessons;
create policy lessons_write_admin on public.lessons
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- Contenu : visible uniquement si la leçon est accessible.
-- ------------------------------------------------------------
drop policy if exists lesson_blocks_select on public.lesson_blocks;
create policy lesson_blocks_select on public.lesson_blocks
  for select to authenticated
  using (public.can_access_lesson(lesson_id));

drop policy if exists lesson_blocks_write_admin on public.lesson_blocks;
create policy lesson_blocks_write_admin on public.lesson_blocks
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists exercises_select on public.exercises;
create policy exercises_select on public.exercises
  for select to authenticated
  using (public.can_access_lesson(lesson_id));

drop policy if exists exercises_write_admin on public.exercises;
create policy exercises_write_admin on public.exercises
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- Inscriptions : lisibles par leur titulaire, accordées par un admin.
-- ------------------------------------------------------------
drop policy if exists enrollments_select on public.enrollments;
create policy enrollments_select on public.enrollments
  for select to authenticated
  using (user_id = auth.uid() or public.is_admin() or public.current_app_role() = 'consultant');

drop policy if exists enrollments_write_admin on public.enrollments;
create policy enrollments_write_admin on public.enrollments
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- Progression : chacun la sienne ; l'équipe peut la consulter.
-- ------------------------------------------------------------
drop policy if exists lesson_progress_select on public.lesson_progress;
create policy lesson_progress_select on public.lesson_progress
  for select to authenticated
  using (
    user_id = auth.uid()
    or public.is_admin()
    or public.current_app_role() = 'consultant'
    or public.is_teacher()
  );

drop policy if exists lesson_progress_upsert on public.lesson_progress;
create policy lesson_progress_upsert on public.lesson_progress
  for insert to authenticated
  with check (user_id = auth.uid() and public.can_access_lesson(lesson_id));

drop policy if exists lesson_progress_update on public.lesson_progress;
create policy lesson_progress_update on public.lesson_progress
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists exercise_attempts_select on public.exercise_attempts;
create policy exercise_attempts_select on public.exercise_attempts
  for select to authenticated
  using (user_id = auth.uid() or public.is_admin() or public.is_teacher());

drop policy if exists exercise_attempts_insert on public.exercise_attempts;
create policy exercise_attempts_insert on public.exercise_attempts
  for insert to authenticated
  with check (user_id = auth.uid());

-- ------------------------------------------------------------
-- Professeurs et créneaux
-- ------------------------------------------------------------
drop policy if exists teachers_select on public.teachers;
create policy teachers_select on public.teachers
  for select to authenticated
  using (is_active or id = auth.uid() or public.is_admin());

drop policy if exists teachers_update_self on public.teachers;
create policy teachers_update_self on public.teachers
  for update to authenticated
  using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

drop policy if exists teachers_write_admin on public.teachers;
create policy teachers_write_admin on public.teachers
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists tutoring_slots_select on public.tutoring_slots;
create policy tutoring_slots_select on public.tutoring_slots
  for select to authenticated
  using (true);

drop policy if exists tutoring_slots_write on public.tutoring_slots;
create policy tutoring_slots_write on public.tutoring_slots
  for all to authenticated
  using (teacher_id = auth.uid() or public.is_admin())
  with check (teacher_id = auth.uid() or public.is_admin());

-- ------------------------------------------------------------
-- Réservations : l'étudiant demande, le professeur ou l'admin confirme.
-- `room_name` n'existe qu'une fois la réservation confirmée.
-- ------------------------------------------------------------
drop policy if exists tutoring_bookings_select on public.tutoring_bookings;
create policy tutoring_bookings_select on public.tutoring_bookings
  for select to authenticated
  using (
    student_id = auth.uid()
    or public.is_admin()
    or exists (
      select 1 from public.tutoring_slots s
      where s.id = slot_id and s.teacher_id = auth.uid()
    )
  );

drop policy if exists tutoring_bookings_insert on public.tutoring_bookings;
create policy tutoring_bookings_insert on public.tutoring_bookings
  for insert to authenticated
  with check (student_id = auth.uid() and status = 'requested');

drop policy if exists tutoring_bookings_update on public.tutoring_bookings;
create policy tutoring_bookings_update on public.tutoring_bookings
  for update to authenticated
  using (
    public.is_admin()
    or exists (
      select 1 from public.tutoring_slots s
      where s.id = slot_id and s.teacher_id = auth.uid()
    )
    -- L'étudiant ne peut que renoncer à sa réservation.
    or student_id = auth.uid()
  )
  with check (
    public.is_admin()
    or exists (
      select 1 from public.tutoring_slots s
      where s.id = slot_id and s.teacher_id = auth.uid()
    )
    or (student_id = auth.uid() and status = 'cancelled')
  );

-- ------------------------------------------------------------
-- Correction d'un exercice
--
-- `security definer` : la fonction lit `answer`, que les politiques
-- n'exposent jamais au client, et ne renvoie que le verdict. La
-- tentative est enregistrée au passage.
-- ------------------------------------------------------------
create or replace function public.grade_exercise(target_exercise uuid, given jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  ex        public.exercises%rowtype;
  correct   boolean;
begin
  select * into ex from public.exercises where id = target_exercise;
  if not found then
    raise exception 'exercise_not_found';
  end if;

  if not public.can_access_lesson(ex.lesson_id) then
    raise exception 'forbidden';
  end if;

  correct := (ex.answer = given);

  insert into public.exercise_attempts (user_id, exercise_id, given, is_correct)
  values (auth.uid(), target_exercise, given, correct);

  return jsonb_build_object(
    'correct', correct,
    'explanation', ex.explanation
  );
end;
$$;

revoke all on function public.grade_exercise(uuid, jsonb) from public;
grant execute on function public.grade_exercise(uuid, jsonb) to authenticated;
