-- ============================================================
-- RusStudy — couche de compatibilité Supabase → Neon
--
-- Les migrations de `supabase/migrations/` supposent l'environnement Supabase :
-- schéma `auth` (table `auth.users`, fonction `auth.uid()`), rôles `anon`,
-- `authenticated` et `service_role`, schéma `storage` et extension `pg_net`.
--
-- Ce fichier recrée ces points d'appui sur Neon pour que les migrations se
-- rejouent sans réécriture, et surtout pour que les politiques RLS
-- continuent de protéger les données dans la base.
--
-- Identité : Neon Auth (Better Auth) écrit les comptes dans `neon_auth."user"`.
-- Un trigger les recopie dans `auth.users`, ce qui déclenche le trigger
-- existant `on_auth_user_created` (création du profil).
--
-- Contexte de requête : le code serveur ouvre une transaction, passe au rôle
-- `authenticated` et renseigne `request.jwt.claim.sub` avec l'id de
-- l'utilisateur connecté. `auth.uid()` lit cette valeur.
-- ============================================================

create schema if not exists auth;
create schema if not exists storage;
create schema if not exists net;
create schema if not exists extensions;

-- ------------------------------------------------------------
-- Rôles applicatifs (sans connexion directe)
-- ------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then
    create role anon nologin;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then
    create role authenticated nologin;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'service_role') then
    create role service_role nologin;
  end if;
end $$;

-- Le propriétaire de la base doit pouvoir endosser ces rôles (SET LOCAL ROLE).
grant anon, authenticated, service_role to current_user;

-- ------------------------------------------------------------
-- auth.users et auth.uid()
-- ------------------------------------------------------------
create table if not exists auth.users (
  id                 uuid primary key,
  email              text,
  raw_user_meta_data jsonb not null default '{}'::jsonb,
  created_at         timestamptz not null default now()
);

comment on table auth.users is
  'Miroir de neon_auth."user", alimenté par trigger. Cible des clés étrangères héritées de Supabase.';

create or replace function auth.uid()
returns uuid
language sql
stable
as $$
  select coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub'
  )::uuid
$$;

grant usage on schema auth to anon, authenticated, service_role;
grant execute on function auth.uid() to anon, authenticated, service_role;

create or replace function auth.sync_neon_auth_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    insert into auth.users (id, email, raw_user_meta_data, created_at)
    values (
      new.id,
      new.email,
      jsonb_build_object('full_name', coalesce(new.name, '')),
      coalesce(new."createdAt", now())
    )
    on conflict (id) do update set email = excluded.email;
    return new;
  elsif tg_op = 'UPDATE' then
    update auth.users set email = new.email where id = new.id;
    return new;
  else
    delete from auth.users where id = old.id;
    return old;
  end if;
end;
$$;

drop trigger if exists sync_to_auth_users on neon_auth."user";
create trigger sync_to_auth_users
  after insert or update of email or delete on neon_auth."user"
  for each row execute function auth.sync_neon_auth_user();

-- Comptes déjà présents dans Neon Auth avant l'installation du trigger.
insert into auth.users (id, email, raw_user_meta_data, created_at)
select u.id, u.email, jsonb_build_object('full_name', coalesce(u.name, '')), coalesce(u."createdAt", now())
from neon_auth."user" u
on conflict (id) do nothing;

-- ------------------------------------------------------------
-- storage : tables de structure seulement
-- Les fichiers vivent dans le stockage objet Neon (S3). Ces tables gardent
-- les migrations exécutables ; les règles d'accès qu'elles portent sont
-- appliquées côté serveur (can_access_dossier) avant de signer un lien.
-- ------------------------------------------------------------
create table if not exists storage.buckets (
  id         text primary key,
  name       text not null,
  public     boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists storage.objects (
  id         uuid primary key default gen_random_uuid(),
  bucket_id  text references storage.buckets (id),
  name       text,
  owner      uuid,
  created_at timestamptz not null default now()
);

alter table storage.objects enable row level security;
grant usage on schema storage to anon, authenticated, service_role;

-- ------------------------------------------------------------
-- net.http_post : file d'attente à la place de pg_net (absent de Neon)
-- Les notifications push sont envoyées par le code serveur qui lit cette file.
-- ------------------------------------------------------------
create table if not exists net.http_request_queue (
  id         bigserial primary key,
  url        text not null,
  headers    jsonb not null default '{}'::jsonb,
  body       jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  sent_at    timestamptz
);

create or replace function net.http_post(
  url                  text,
  body                 jsonb default '{}'::jsonb,
  params               jsonb default '{}'::jsonb,
  headers              jsonb default '{}'::jsonb,
  timeout_milliseconds integer default 5000
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  request_id bigint;
begin
  insert into net.http_request_queue (url, headers, body)
  values (url, headers, body)
  returning id into request_id;
  return request_id;
end;
$$;
