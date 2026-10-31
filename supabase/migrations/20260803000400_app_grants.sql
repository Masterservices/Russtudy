-- ============================================================
-- RusStudy — privilèges de table (migration 4/4)
--
-- La RLS ne suffit pas : PostgreSQL vérifie d'abord les privilèges
-- (GRANT), et seulement ensuite les politiques de ligne. Sans ces
-- GRANT, un utilisateur connecté reçoit une erreur 42501
-- (« permission denied ») avant même que ses politiques soient évaluées.
--
-- Un projet Supabase applique normalement des privilèges par défaut aux
-- tables du schéma `public`, mais cela dépend du rôle qui exécute le
-- CREATE TABLE (CLI, SQL Editor, API Management…). Les accorder
-- explicitement rend le schéma autonome et reproductible partout.
--
-- Répartition :
--   * `authenticated` : lecture et écriture, la RLS décidant des lignes ;
--   * `anon`          : aucun accès — toutes les politiques ciblent
--                       `authenticated`, et un visiteur non connecté est
--                       de toute façon redirigé vers l'écran de connexion ;
--   * `service_role`  : accès complet (scripts serveur, imports).
-- ============================================================

grant usage on schema public to anon, authenticated, service_role;

do $$
declare
  t text;
begin
  foreach t in array array[
    'profiles', 'universities', 'dossiers', 'dossier_steps', 'documents',
    'conversations', 'messages', 'notifications', 'quotes', 'quote_items',
    'payments', 'pricing_items', 'audit_logs'
  ]
  loop
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('grant all privileges on public.%I to service_role', t);
    -- Aucun privilège pour `anon` : révocation explicite pour que rejouer
    -- cette migration corrige aussi un octroi accidentel.
    execute format('revoke all privileges on public.%I from anon', t);
  end loop;
end $$;

-- Tables créées ultérieurement dans `public` : mêmes règles par défaut.
alter default privileges in schema public
  grant select, insert, update, delete on tables to authenticated;

alter default privileges in schema public
  grant all privileges on tables to service_role;
