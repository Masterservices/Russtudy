-- ------------------------------------------------------------
-- L'administration peut signer sans attendre le consultant
--
-- La séquence demande → confirmation → signature reste la voie normale, mais
-- elle ne doit pas bloquer l'administration : un consultant absent, un dossier
-- non assigné ou une évidence constatée ailleurs ne justifient pas d'immobiliser
-- un dossier.
--
-- La traçabilité ne perd rien : `confirmed_at` reste vide quand il n'y a pas eu
-- de confirmation, et l'on sait donc toujours si une étape est passée par le
-- consultant ou a été signée directement.
-- ------------------------------------------------------------

create or replace function public.validate_dossier_step(step uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target public.dossier_steps%rowtype;
  student uuid;
  consultant uuid;
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

  if target.status = 'done' then
    raise exception 'step_already_done';
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

  select count(*), count(*) filter (where status = 'done')
    into total, achieved
    from public.dossier_steps
   where dossier_id = target.dossier_id;

  if total > 0 then
    update public.dossiers
       set progress = round(achieved * 100.0 / total)
     where id = target.dossier_id;
  end if;

  select d.student_id, d.consultant_id into student, consultant
    from public.dossiers d where d.id = target.dossier_id;

  perform public.notify_user(
    student, 'step_validated', 'Étape signée', target.step_key,
    '/app/etudiant/dossier/timeline'
  );
  perform public.notify_user(
    consultant, 'step_validated', 'Étape signée', target.step_key,
    '/app/consultant/etudiants/' || target.dossier_id || '/timeline'
  );
end;
$$;
