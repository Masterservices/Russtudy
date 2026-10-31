-- ------------------------------------------------------------
-- Notifications
--
-- La table existait mais rien ne l'alimentait. Les notifications sont
-- produites en base, au plus près de l'événement : quel que soit le client
-- qui écrit, personne ne peut oublier de prévenir.
--
-- `kind` est une clé traduite à l'affichage et `body` porte son paramètre
-- (clé d'étape, nom de pièce, nom d'expéditeur). `title` reste un libellé
-- français lisible, utile à qui lit la table directement.
-- ------------------------------------------------------------

create or replace function public.notify_user(
  target uuid,
  kind text,
  title text,
  body text,
  href text
)
returns void
language sql
security definer
set search_path = public
as $$
  insert into public.notifications (user_id, kind, title, body, href)
  select target, kind, title, body, href
  where target is not null;
$$;

revoke all on function public.notify_user(uuid, text, text, text, text) from public, anon, authenticated;

-- ------------------------------------------------------------
-- Chaîne de validation : chaque geste prévient celui dont c'est le tour
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
  consultant uuid;
  recipient uuid;
begin
  select * into target from public.dossier_steps where id = step;
  if not found then
    raise exception 'step_not_found';
  end if;

  select d.student_id, d.consultant_id into student, consultant
    from public.dossiers d where d.id = target.dossier_id;

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

  if consultant is not null then
    perform public.notify_user(
      consultant, 'step_requested', 'Validation demandée', target.step_key,
      '/app/consultant/etudiants/' || target.dossier_id || '/timeline'
    );
  else
    -- Dossier sans consultant : c'est à l'administration de reprendre.
    for recipient in select id from public.profiles where role = 'admin' loop
      perform public.notify_user(
        recipient, 'step_requested', 'Validation demandée', target.step_key,
        '/app/admin/dossiers/' || target.dossier_id
      );
    end loop;
  end if;
end;
$$;

create or replace function public.confirm_dossier_step(step uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target public.dossier_steps%rowtype;
  student uuid;
  recipient uuid;
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

  select d.student_id into student from public.dossiers d where d.id = target.dossier_id;

  perform public.notify_user(
    student, 'step_confirmed', 'Étape confirmée', target.step_key,
    '/app/etudiant/dossier/timeline'
  );

  -- La signature revient à l'administration : elle doit le savoir.
  for recipient in select id from public.profiles where role = 'admin' loop
    perform public.notify_user(
      recipient, 'step_confirmed', 'Signature attendue', target.step_key,
      '/app/admin/dossiers/' || target.dossier_id
    );
  end loop;
end;
$$;

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

-- ------------------------------------------------------------
-- Décision sur une pièce : l'étudiant est prévenu
-- ------------------------------------------------------------
create or replace function public.notify_document_decision()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  student uuid;
begin
  if new.status = old.status or new.status not in ('validated', 'rejected') then
    return new;
  end if;

  select d.student_id into student from public.dossiers d where d.id = new.dossier_id;

  perform public.notify_user(
    student,
    case when new.status = 'validated' then 'document_validated' else 'document_rejected' end,
    case when new.status = 'validated' then 'Pièce validée' else 'Pièce refusée' end,
    new.name,
    '/app/etudiant/documents/' || new.id
  );

  return new;
end;
$$;

drop trigger if exists documents_notify_decision on public.documents;
create trigger documents_notify_decision
  after update of status on public.documents
  for each row execute function public.notify_document_decision();

-- ------------------------------------------------------------
-- Nouveau message : les autres participants du dossier sont prévenus
-- ------------------------------------------------------------
create or replace function public.notify_new_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  dossier uuid;
  sender_name text;
  student uuid;
  consultant uuid;
begin
  select c.dossier_id into dossier from public.conversations c where c.id = new.conversation_id;
  if dossier is null then
    return new;
  end if;

  select coalesce(nullif(p.full_name, ''), p.email) into sender_name
    from public.profiles p where p.id = new.sender_id;

  select d.student_id, d.consultant_id into student, consultant
    from public.dossiers d where d.id = dossier;

  if student is distinct from new.sender_id then
    perform public.notify_user(
      student, 'message_received', 'Nouveau message', sender_name,
      '/app/etudiant/messages/' || new.conversation_id
    );
  end if;

  if consultant is distinct from new.sender_id then
    perform public.notify_user(
      consultant, 'message_received', 'Nouveau message', sender_name,
      '/app/consultant/messages/' || new.conversation_id
    );
  end if;

  return new;
end;
$$;

drop trigger if exists messages_notify_new on public.messages;
create trigger messages_notify_new
  after insert on public.messages
  for each row execute function public.notify_new_message();

-- Les notifications sont produites par ces déclencheurs, jamais par un client.
drop policy if exists notifications_insert on public.notifications;
