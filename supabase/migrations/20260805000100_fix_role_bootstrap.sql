-- ============================================================
-- RusStudy — correction du garde-fou sur le changement de rôle
--
-- `guard_profile_role` refusait toute modification de `role` dès lors que
-- l'appelant n'était pas administrateur. Intention correcte pour un
-- utilisateur connecté, mais l'implémentation bloquait aussi les connexions
-- **sans contexte JWT** : SQL Editor, CLI, clé de service, API Management.
--
-- Conséquence : impossible de nommer le tout premier administrateur, puisque
-- l'opération exige déjà d'en être un. La procédure documentée dans
-- `supabase/README.md` échouait silencieusement — `update` sans effet.
--
-- Correctif : n'appliquer le refus qu'en présence d'un utilisateur
-- authentifié. La propriété de sécurité visée est intacte — un compte
-- connecté ne peut jamais s'octroyer un rôle — tandis que l'amorçage par un
-- canal privilégié redevient possible.
-- ============================================================

create or replace function public.guard_profile_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role
     and auth.uid() is not null
     and not public.is_admin() then
    raise exception 'role_change_forbidden';
  end if;
  return new;
end;
$$;
