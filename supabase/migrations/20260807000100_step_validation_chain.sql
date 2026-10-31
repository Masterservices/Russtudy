-- ------------------------------------------------------------
-- Chaîne de validation d'une étape du dossier
--
-- Une étape ne devient « faite » qu'au terme de trois gestes distincts :
--   1. l'étudiant déclare l'avoir accomplie   (requested_*)
--   2. le consultant confirme                  (confirmed_*)
--   3. l'administration signe                  (validated_*)
--
-- La signature de l'administration est seule à basculer l'étape en `done`,
-- à dater l'événement, à faire passer l'étape suivante en `current` et à
-- recalculer l'avancement du dossier.
--
-- Le passage par des fonctions `security definer` évite d'ouvrir l'UPDATE de
-- `dossier_steps` à l'étudiant : il ne peut poser qu'une demande, sur une
-- étape de son propre dossier, et rien d'autre.
-- ------------------------------------------------------------

alter table public.dossier_steps
  add column if not exists requested_at timestamptz,
  add column if not exists requested_by uuid references public.profiles (id) on delete set null,
  add column if not exists confirmed_at timestamptz,
  add column if not exists confirmed_by uuid references public.profiles (id) on delete set null,
  add column if not exists validated_at timestamptz,
  add column if not exists validated_by uuid references public.profiles (id) on delete set null;

-- Retrouver rapidement ce qui attend une décision, pour les tableaux de bord.
create index if not exists dossier_steps_pending_idx
  on public.dossier_steps (dossier_id)
  where requested_at is not null and validated_at is null;

-- ------------------------------------------------------------
-- 1. L'étudiant déclare l'étape accomplie
-- ------------------------------------------------------------
create or replace function public.request_dossier_step(step uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target public.dossier_steps%rowtype;
  student uuid;
begin
  select * into target from public.dossier_steps where id = step;
  if not found then
    raise exception 'step_not_found';
  end if;

  select d.student_id into student from public.dossiers d where d.id = target.dossier_id;
  if student is distinct from auth.uid() then
    raise exception 'forbidden';
  end if;

  if target.status = 'done' then
    raise exception 'step_already_done';
  end if;

  -- `coalesce` : une seconde demande ne réécrit pas la date de la première.
  update public.dossier_steps
     set requested_at = coalesce(requested_at, now()),
         requested_by = coalesce(requested_by, auth.uid())
   where id = step;
end;
$$;

-- ------------------------------------------------------------
-- 2. Le consultant confirme
-- ------------------------------------------------------------
create or replace function public.confirm_dossier_step(step uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target public.dossier_steps%rowtype;
begin
  select * into target from public.dossier_steps where id = step;
  if not found then
    raise exception 'step_not_found';
  end if;

  if not public.can_write_dossier(target.dossier_id) then
    raise exception 'forbidden';
  end if;

  if target.requested_at is null then
    raise exception 'step_not_requested';
  end if;

  update public.dossier_steps
     set confirmed_at = coalesce(confirmed_at, now()),
         confirmed_by = coalesce(confirmed_by, auth.uid())
   where id = step;
end;
$$;

-- ------------------------------------------------------------
-- 3. L'administration signe
-- ------------------------------------------------------------
create or replace function public.validate_dossier_step(step uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target public.dossier_steps%rowtype;
  total integer;
  achieved integer;
begin
  select * into target from public.dossier_steps where id = step;
  if not found then
    raise exception 'step_not_found';
  end if;

  if not public.is_admin() then
    raise exception 'forbidden';
  end if;

  if target.confirmed_at is null then
    raise exception 'step_not_confirmed';
  end if;

  update public.dossier_steps
     set validated_at = coalesce(validated_at, now()),
         validated_by = coalesce(validated_by, auth.uid()),
         status = 'done',
         occurred_at = coalesce(occurred_at, now())
   where id = step;

  -- La première étape encore à venir prend le relais.
  update public.dossier_steps
     set status = 'current'
   where dossier_id = target.dossier_id
     and status = 'upcoming'
     and position = (
       select min(position)
         from public.dossier_steps
        where dossier_id = target.dossier_id
          and status = 'upcoming'
     );

  -- L'avancement affiché à l'étudiant suit les étapes réellement signées.
  select count(*), count(*) filter (where status = 'done')
    into total, achieved
    from public.dossier_steps
   where dossier_id = target.dossier_id;

  if total > 0 then
    update public.dossiers
       set progress = round(achieved * 100.0 / total)
     where id = target.dossier_id;
  end if;
end;
$$;

-- Ces fonctions écrivent avec les droits du propriétaire : elles ne doivent
-- être appelables que par un utilisateur authentifié, jamais par `anon`.
revoke all on function public.request_dossier_step(uuid) from public, anon;
revoke all on function public.confirm_dossier_step(uuid) from public, anon;
revoke all on function public.validate_dossier_step(uuid) from public, anon;

grant execute on function public.request_dossier_step(uuid) to authenticated;
grant execute on function public.confirm_dossier_step(uuid) to authenticated;
grant execute on function public.validate_dossier_step(uuid) to authenticated;
