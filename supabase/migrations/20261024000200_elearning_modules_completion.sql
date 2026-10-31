-- ============================================================
-- RusStudy — Ce que la migration 20261024000100 n'avait pas appliqué,
-- et un tour de vis sur les fonctions.
--
-- La migration des modules n'était passée qu'à moitié : la table, ses
-- index et ses droits existaient, mais ni ses politiques RLS ni son
-- déclencheur `updated_at`. Sans politique et RLS actif, personne ne
-- lisait rien, et les leçons s'affichaient « hors section ».
--
-- RLS était malgré tout actif sur la table : c'est le déclencheur
-- d'événement `rls_auto_enable` qui l'allume sur toute table créée.
-- Un garde-fou utile, qui a ici masqué l'application partielle.
-- ============================================================

-- ------------------------------------------------------------
-- 1. Les politiques manquantes.
--
-- Le sommaire d'un parcours publié est public, leçons réservées
-- comprises : c'est lui qui donne envie. Seul le contenu des leçons
-- est protégé, et il l'est ailleurs.
-- ------------------------------------------------------------
drop policy if exists modules_select on public.modules;
create policy modules_select on public.modules
  for select to authenticated using (
    public.is_admin()
    or exists (select 1 from public.courses c where c.id = course_id and c.is_published)
  );

drop policy if exists modules_select_anon on public.modules;
create policy modules_select_anon on public.modules
  for select to anon using (
    exists (select 1 from public.courses c where c.id = course_id and c.is_published)
  );

drop policy if exists modules_write_admin on public.modules;
create policy modules_write_admin on public.modules
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- ------------------------------------------------------------
-- 2. Le déclencheur manquant.
-- ------------------------------------------------------------
drop trigger if exists modules_touch on public.modules;
create trigger modules_touch before update on public.modules
  for each row execute function public.touch_updated_at();

-- ------------------------------------------------------------
-- 3. search_path figé sur les deux fonctions qui en manquaient.
--
-- Une fonction sans `search_path` explicite résout ses noms dans les
-- schémas du rôle appelant : un schéma glissé devant `public` lui fait
-- exécuter autre chose que prévu.
-- ------------------------------------------------------------
alter function public.touch_updated_at()     set search_path = public;
alter function public.assign_tutoring_room() set search_path = public;

-- ------------------------------------------------------------
-- 4. Les fonctions de déclencheur sortent de l'API publique.
--
-- PostgreSQL accorde EXECUTE à PUBLIC sur toute fonction créée, ce qui
-- les publiait sous /rest/v1/rpc/. PostgREST refuse d'appeler une
-- fonction qui renvoie `trigger`, donc le risque réel était nul — mais
-- une surface inutile reste une surface.
--
-- Retirer ce droit ne casse aucun déclencheur : PostgreSQL ne vérifie
-- pas EXECUTE au déclenchement, seulement à la création du
-- déclencheur. Vérifié sur `courses_touch` après coup.
--
-- Les fonctions d'aide aux politiques (`is_admin`, `can_access_lesson`,
-- `is_free_lesson`…) gardent le leur : une politique les évalue avec
-- les droits du rôle qui interroge, et les leur retirer rendrait
-- toutes les tables illisibles.
-- ------------------------------------------------------------
do $$
declare f record;
begin
  for f in
    select p.oid::regprocedure as sig
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and pg_get_function_result(p.oid) in ('trigger', 'event_trigger')
  loop
    execute format('revoke execute on function %s from public, anon, authenticated', f.sig);
  end loop;
end $$;
