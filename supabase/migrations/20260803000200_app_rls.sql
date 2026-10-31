-- ============================================================
-- RusStudy — sécurité au niveau ligne (RLS)
-- Migration 2/3.
--
-- Règle générale :
--   * étudiant   -> uniquement ses propres données ;
--   * consultant -> les dossiers dont il est le consultant assigné ;
--   * admin      -> accès complet.
--
-- Les helpers sont `security definer` : ils lisent public.profiles sans
-- repasser par RLS, ce qui évite toute récursion de politique.
-- ============================================================

-- ------------------------------------------------------------
-- Helpers
-- ------------------------------------------------------------
create or replace function public.current_app_role()
returns app_role
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select role from public.profiles where id = auth.uid()) = 'admin', false);
$$;

create or replace function public.can_access_dossier(target uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.dossiers d
    where d.id = target
      and (
        d.student_id = auth.uid()
        or d.consultant_id = auth.uid()
        or public.is_admin()
      )
  );
$$;

create or replace function public.can_write_dossier(target uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.dossiers d
    where d.id = target
      and (d.consultant_id = auth.uid() or public.is_admin())
  );
$$;

-- ------------------------------------------------------------
-- Activation RLS
-- ------------------------------------------------------------
alter table public.profiles      enable row level security;
alter table public.universities  enable row level security;
alter table public.dossiers      enable row level security;
alter table public.dossier_steps enable row level security;
alter table public.documents     enable row level security;
alter table public.conversations enable row level security;
alter table public.messages      enable row level security;
alter table public.notifications enable row level security;
alter table public.quotes        enable row level security;
alter table public.quote_items   enable row level security;
alter table public.payments      enable row level security;
alter table public.pricing_items enable row level security;
alter table public.audit_logs    enable row level security;

-- ------------------------------------------------------------
-- profiles
-- ------------------------------------------------------------
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select to authenticated
  using (
    id = auth.uid()
    or public.is_admin()
    or public.current_app_role() = 'consultant'
    or exists (
      select 1 from public.dossiers d
      where d.student_id = auth.uid() and d.consultant_id = public.profiles.id
    )
  );

drop policy if exists profiles_update_self on public.profiles;
create policy profiles_update_self on public.profiles
  for update to authenticated
  using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

drop policy if exists profiles_insert_admin on public.profiles;
create policy profiles_insert_admin on public.profiles
  for insert to authenticated
  with check (id = auth.uid() or public.is_admin());

-- Le rôle n'est jamais modifiable par l'utilisateur lui-même : seul un admin
-- (ou la clé de service) peut le changer.
create or replace function public.guard_profile_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role and not public.is_admin() then
    raise exception 'role_change_forbidden';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_guard_role on public.profiles;
create trigger profiles_guard_role
  before update on public.profiles
  for each row execute function public.guard_profile_role();

-- ------------------------------------------------------------
-- universities : lecture pour tout utilisateur connecté, écriture admin
-- ------------------------------------------------------------
drop policy if exists universities_select on public.universities;
create policy universities_select on public.universities
  for select to authenticated using (true);

drop policy if exists universities_write on public.universities;
create policy universities_write on public.universities
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- dossiers
-- ------------------------------------------------------------
drop policy if exists dossiers_select on public.dossiers;
create policy dossiers_select on public.dossiers
  for select to authenticated
  using (student_id = auth.uid() or consultant_id = auth.uid() or public.is_admin());

drop policy if exists dossiers_insert on public.dossiers;
create policy dossiers_insert on public.dossiers
  for insert to authenticated
  with check (
    student_id = auth.uid()
    or public.current_app_role() in ('consultant', 'admin')
  );

drop policy if exists dossiers_update on public.dossiers;
create policy dossiers_update on public.dossiers
  for update to authenticated
  using (consultant_id = auth.uid() or public.is_admin())
  with check (consultant_id = auth.uid() or public.is_admin());

drop policy if exists dossiers_delete on public.dossiers;
create policy dossiers_delete on public.dossiers
  for delete to authenticated using (public.is_admin());

-- ------------------------------------------------------------
-- dossier_steps
-- ------------------------------------------------------------
drop policy if exists dossier_steps_select on public.dossier_steps;
create policy dossier_steps_select on public.dossier_steps
  for select to authenticated using (public.can_access_dossier(dossier_id));

drop policy if exists dossier_steps_write on public.dossier_steps;
create policy dossier_steps_write on public.dossier_steps
  for all to authenticated
  using (public.can_write_dossier(dossier_id))
  with check (public.can_write_dossier(dossier_id));

-- ------------------------------------------------------------
-- documents : l'étudiant dépose, le consultant valide
-- ------------------------------------------------------------
drop policy if exists documents_select on public.documents;
create policy documents_select on public.documents
  for select to authenticated using (public.can_access_dossier(dossier_id));

drop policy if exists documents_insert on public.documents;
create policy documents_insert on public.documents
  for insert to authenticated with check (public.can_access_dossier(dossier_id));

drop policy if exists documents_update on public.documents;
create policy documents_update on public.documents
  for update to authenticated
  using (public.can_access_dossier(dossier_id))
  with check (public.can_access_dossier(dossier_id));

drop policy if exists documents_delete on public.documents;
create policy documents_delete on public.documents
  for delete to authenticated using (public.can_write_dossier(dossier_id));

-- ------------------------------------------------------------
-- conversations / messages
-- ------------------------------------------------------------
drop policy if exists conversations_select on public.conversations;
create policy conversations_select on public.conversations
  for select to authenticated using (public.can_access_dossier(dossier_id));

drop policy if exists conversations_write on public.conversations;
create policy conversations_write on public.conversations
  for all to authenticated
  using (public.can_access_dossier(dossier_id))
  with check (public.can_access_dossier(dossier_id));

drop policy if exists messages_select on public.messages;
create policy messages_select on public.messages
  for select to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id and public.can_access_dossier(c.dossier_id)
    )
  );

drop policy if exists messages_insert on public.messages;
create policy messages_insert on public.messages
  for insert to authenticated
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id and public.can_access_dossier(c.dossier_id)
    )
  );

drop policy if exists messages_update on public.messages;
create policy messages_update on public.messages
  for update to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id and public.can_access_dossier(c.dossier_id)
    )
  )
  with check (
    exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id and public.can_access_dossier(c.dossier_id)
    )
  );

-- ------------------------------------------------------------
-- notifications
-- ------------------------------------------------------------
drop policy if exists notifications_select on public.notifications;
create policy notifications_select on public.notifications
  for select to authenticated using (user_id = auth.uid() or public.is_admin());

drop policy if exists notifications_update on public.notifications;
create policy notifications_update on public.notifications
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists notifications_insert on public.notifications;
create policy notifications_insert on public.notifications
  for insert to authenticated
  with check (public.current_app_role() in ('consultant', 'admin') or user_id = auth.uid());

-- ------------------------------------------------------------
-- quotes / quote_items / payments
-- ------------------------------------------------------------
drop policy if exists quotes_select on public.quotes;
create policy quotes_select on public.quotes
  for select to authenticated using (public.can_access_dossier(dossier_id));

drop policy if exists quotes_write on public.quotes;
create policy quotes_write on public.quotes
  for all to authenticated
  using (public.can_write_dossier(dossier_id))
  with check (public.can_write_dossier(dossier_id));

drop policy if exists quote_items_select on public.quote_items;
create policy quote_items_select on public.quote_items
  for select to authenticated
  using (
    exists (
      select 1 from public.quotes q
      where q.id = quote_items.quote_id and public.can_access_dossier(q.dossier_id)
    )
  );

drop policy if exists quote_items_write on public.quote_items;
create policy quote_items_write on public.quote_items
  for all to authenticated
  using (
    exists (
      select 1 from public.quotes q
      where q.id = quote_items.quote_id and public.can_write_dossier(q.dossier_id)
    )
  )
  with check (
    exists (
      select 1 from public.quotes q
      where q.id = quote_items.quote_id and public.can_write_dossier(q.dossier_id)
    )
  );

drop policy if exists payments_select on public.payments;
create policy payments_select on public.payments
  for select to authenticated
  using (
    exists (
      select 1 from public.quotes q
      where q.id = payments.quote_id and public.can_access_dossier(q.dossier_id)
    )
  );

drop policy if exists payments_write on public.payments;
create policy payments_write on public.payments
  for all to authenticated
  using (
    exists (
      select 1 from public.quotes q
      where q.id = payments.quote_id and public.can_write_dossier(q.dossier_id)
    )
  )
  with check (
    exists (
      select 1 from public.quotes q
      where q.id = payments.quote_id and public.can_write_dossier(q.dossier_id)
    )
  );

-- ------------------------------------------------------------
-- pricing_items : lecture connectée, écriture admin
-- ------------------------------------------------------------
drop policy if exists pricing_select on public.pricing_items;
create policy pricing_select on public.pricing_items
  for select to authenticated using (true);

drop policy if exists pricing_write on public.pricing_items;
create policy pricing_write on public.pricing_items
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- audit_logs : lecture admin, écriture par tout utilisateur connecté
-- (traçabilité des actions applicatives)
-- ------------------------------------------------------------
drop policy if exists audit_select on public.audit_logs;
create policy audit_select on public.audit_logs
  for select to authenticated using (public.is_admin());

drop policy if exists audit_insert on public.audit_logs;
create policy audit_insert on public.audit_logs
  for insert to authenticated with check (actor_id = auth.uid());

-- ------------------------------------------------------------
-- Stockage des pièces jointes : bucket privé `documents`
-- Chemin normalisé : <dossier_id>/<nom_du_fichier>
-- ------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

drop policy if exists documents_bucket_read on storage.objects;
create policy documents_bucket_read on storage.objects
  for select to authenticated
  using (
    bucket_id = 'documents'
    and public.can_access_dossier(nullif(split_part(name, '/', 1), '')::uuid)
  );

drop policy if exists documents_bucket_write on storage.objects;
create policy documents_bucket_write on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'documents'
    and public.can_access_dossier(nullif(split_part(name, '/', 1), '')::uuid)
  );

drop policy if exists documents_bucket_delete on storage.objects;
create policy documents_bucket_delete on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'documents'
    and public.can_write_dossier(nullif(split_part(name, '/', 1), '')::uuid)
  );
