-- ============================================================
-- RusStudy — E-learning : privilèges de table et stockage.
-- Migration 3/3.
--
-- Rappel : PostgreSQL vérifie les privilèges AVANT les politiques de
-- ligne. Sans GRANT, un utilisateur connecté reçoit une erreur 42501
-- avant même que la RLS soit évaluée.
-- ============================================================

-- ------------------------------------------------------------
-- Privilèges de table
-- ------------------------------------------------------------
do $$
declare
  t text;
begin
  foreach t in array array[
    'courses', 'lessons', 'lesson_blocks', 'enrollments',
    'lesson_progress', 'exercise_attempts', 'teachers',
    'tutoring_slots', 'tutoring_bookings'
  ]
  loop
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
  end loop;
end $$;

-- ------------------------------------------------------------
-- Exercices : privilège de colonne
--
-- La RLS filtre des lignes, jamais des colonnes : une politique `select`
-- sur `exercises` exposerait `answer` à l'étudiant, qui lirait la
-- réponse avant de répondre. Le privilège est donc accordé colonne par
-- colonne, `answer` exclue. La correction passe exclusivement par
-- public.grade_exercise, `security definer`, qui lit la réponse sans
-- jamais la renvoyer.
-- ------------------------------------------------------------
revoke all on public.exercises from authenticated;

grant select (id, lesson_id, position, kind, prompt, options, explanation, audio_url, created_at, updated_at)
  on public.exercises to authenticated;

grant all on public.exercises to service_role;

-- ------------------------------------------------------------
-- Stockage : un seul compartiment, non public.
--
-- Les diapositives et les voix off ne sont pas servies par URL
-- publique : le client demande une URL signée de courte durée, ce qui
-- empêche de rediffuser un cours payant par simple partage de lien.
-- ------------------------------------------------------------
-- Selon le projet, le rôle qui exécute ce script n'est pas toujours
-- propriétaire de storage.objects. L'échec de ces politiques ne doit pas
-- faire avorter la migration : le compartiment et ses règles se créent
-- alors depuis l'onglet Storage du tableau de bord.
do $$
begin
  insert into storage.buckets (id, name, public)
  values ('course-assets', 'course-assets', false)
  on conflict (id) do nothing;
exception when insufficient_privilege or undefined_table then
  raise notice 'Compartiment course-assets à créer depuis le tableau de bord.';
end $$;

do $$
begin
  drop policy if exists course_assets_read on storage.objects;
  create policy course_assets_read on storage.objects
    for select to authenticated
    using (bucket_id = 'course-assets');

  drop policy if exists course_assets_write_admin on storage.objects;
  create policy course_assets_write_admin on storage.objects
    for all to authenticated
    using (bucket_id = 'course-assets' and public.is_admin())
    with check (bucket_id = 'course-assets' and public.is_admin());
exception when insufficient_privilege or undefined_table then
  raise notice 'Politiques de stockage à créer depuis le tableau de bord.';
end $$;
