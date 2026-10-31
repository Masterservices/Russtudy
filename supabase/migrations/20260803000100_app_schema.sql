-- ============================================================
-- RusStudy — schéma applicatif (/app)
-- Migration 1/3 : types, tables, index, triggers.
-- Aucune politique RLS ici : voir 20260803000200_app_rls.sql
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- Types énumérés
-- ------------------------------------------------------------
do $$ begin
  create type app_role as enum ('student', 'consultant', 'admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type dossier_status as enum ('draft', 'in_review', 'admitted', 'invitation', 'visa', 'arrived', 'cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type document_status as enum ('missing', 'pending', 'received', 'validated', 'rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type step_status as enum ('done', 'current', 'upcoming');
exception when duplicate_object then null; end $$;

do $$ begin
  create type payment_status as enum ('due', 'paid', 'late', 'refunded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type quote_status as enum ('draft', 'sent', 'accepted', 'refused');
exception when duplicate_object then null; end $$;

do $$ begin
  create type lead_status as enum ('new', 'contacted', 'in_progress', 'admitted', 'lost');
exception when duplicate_object then null; end $$;

-- ------------------------------------------------------------
-- Profils : 1 ligne par utilisateur authentifié
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  role         app_role    not null default 'student',
  full_name    text        not null default '',
  email        text        not null default '',
  phone        text,
  avatar_url   text,
  lang         text        not null default 'fr',
  city         text,
  is_active    boolean     not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

comment on table public.profiles is 'Profil applicatif RusStudy adossé à auth.users.';

-- ------------------------------------------------------------
-- Universités partenaires
-- ------------------------------------------------------------
create table if not exists public.universities (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  name            text not null,
  city            text not null,
  country         text not null default 'Russie',
  logo_url        text,
  tuition_min_rub integer,
  tuition_max_rub integer,
  is_active       boolean not null default true,
  created_at      timestamptz not null default now()
);

-- ------------------------------------------------------------
-- Dossiers de candidature
-- ------------------------------------------------------------
create table if not exists public.dossiers (
  id             uuid primary key default gen_random_uuid(),
  reference      text unique not null,
  student_id     uuid not null references public.profiles (id) on delete cascade,
  consultant_id  uuid references public.profiles (id) on delete set null,
  university_id  uuid references public.universities (id) on delete set null,
  program        text,
  level          text,
  status         dossier_status not null default 'draft',
  lead_status    lead_status not null default 'new',
  progress       smallint not null default 0 check (progress between 0 and 100),
  start_date     date,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create index if not exists dossiers_student_idx    on public.dossiers (student_id);
create index if not exists dossiers_consultant_idx on public.dossiers (consultant_id);
create index if not exists dossiers_status_idx     on public.dossiers (status);

-- ------------------------------------------------------------
-- Étapes de la timeline d'un dossier
-- ------------------------------------------------------------
create table if not exists public.dossier_steps (
  id          uuid primary key default gen_random_uuid(),
  dossier_id  uuid not null references public.dossiers (id) on delete cascade,
  step_key    text not null,
  label       text not null,
  status      step_status not null default 'upcoming',
  position    smallint not null default 0,
  occurred_at timestamptz,
  created_at  timestamptz not null default now(),
  unique (dossier_id, step_key)
);

create index if not exists dossier_steps_dossier_idx on public.dossier_steps (dossier_id, position);

-- ------------------------------------------------------------
-- Documents du dossier
-- ------------------------------------------------------------
create table if not exists public.documents (
  id          uuid primary key default gen_random_uuid(),
  dossier_id  uuid not null references public.dossiers (id) on delete cascade,
  doc_type    text not null,
  name        text not null,
  status      document_status not null default 'missing',
  storage_path text,
  mime_type   text,
  size_bytes  integer,
  note        text,
  received_at timestamptz,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists documents_dossier_idx on public.documents (dossier_id);
create index if not exists documents_status_idx  on public.documents (status);

-- ------------------------------------------------------------
-- Messagerie : conversations liées à un dossier
-- ------------------------------------------------------------
create table if not exists public.conversations (
  id          uuid primary key default gen_random_uuid(),
  dossier_id  uuid not null references public.dossiers (id) on delete cascade,
  topic       text not null default 'general',
  title       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists conversations_dossier_idx on public.conversations (dossier_id);

create table if not exists public.messages (
  id              uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations (id) on delete cascade,
  sender_id       uuid references public.profiles (id) on delete set null,
  body            text not null,
  read_at         timestamptz,
  created_at      timestamptz not null default now()
);

create index if not exists messages_conversation_idx on public.messages (conversation_id, created_at desc);

-- ------------------------------------------------------------
-- Notifications utilisateur
-- ------------------------------------------------------------
create table if not exists public.notifications (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles (id) on delete cascade,
  kind       text not null default 'info',
  title      text not null,
  body       text,
  href       text,
  read_at    timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists notifications_user_idx on public.notifications (user_id, created_at desc);

-- ------------------------------------------------------------
-- Devis et paiements
-- ------------------------------------------------------------
create table if not exists public.quotes (
  id          uuid primary key default gen_random_uuid(),
  dossier_id  uuid not null references public.dossiers (id) on delete cascade,
  reference   text unique not null,
  currency    text not null default 'RUB',
  status      quote_status not null default 'draft',
  total_amount numeric(12, 2) not null default 0,
  issued_at   timestamptz,
  created_at  timestamptz not null default now()
);

create index if not exists quotes_dossier_idx on public.quotes (dossier_id);

create table if not exists public.quote_items (
  id        uuid primary key default gen_random_uuid(),
  quote_id  uuid not null references public.quotes (id) on delete cascade,
  label     text not null,
  amount    numeric(12, 2) not null default 0,
  position  smallint not null default 0
);

create index if not exists quote_items_quote_idx on public.quote_items (quote_id, position);

create table if not exists public.payments (
  id        uuid primary key default gen_random_uuid(),
  quote_id  uuid not null references public.quotes (id) on delete cascade,
  label     text not null,
  amount    numeric(12, 2) not null default 0,
  status    payment_status not null default 'due',
  due_date  date,
  paid_at   timestamptz,
  position  smallint not null default 0
);

create index if not exists payments_quote_idx on public.payments (quote_id, position);

-- ------------------------------------------------------------
-- Tarification de référence (administration)
-- ------------------------------------------------------------
create table if not exists public.pricing_items (
  id         uuid primary key default gen_random_uuid(),
  key        text unique not null,
  label      text not null,
  amount     numeric(12, 2) not null default 0,
  currency   text not null default 'RUB',
  position   smallint not null default 0,
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- Journal d'audit (administration)
-- ------------------------------------------------------------
create table if not exists public.audit_logs (
  id         uuid primary key default gen_random_uuid(),
  actor_id   uuid references public.profiles (id) on delete set null,
  action     text not null,
  entity     text,
  entity_id  uuid,
  metadata   jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists audit_logs_created_idx on public.audit_logs (created_at desc);

-- ------------------------------------------------------------
-- Triggers : updated_at + création automatique du profil
-- ------------------------------------------------------------
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

do $$
declare
  t text;
begin
  foreach t in array array['profiles', 'dossiers', 'documents', 'conversations']
  loop
    execute format('drop trigger if exists %I_touch on public.%I', t, t);
    execute format(
      'create trigger %I_touch before update on public.%I for each row execute function public.touch_updated_at()',
      t, t
    );
  end loop;
end $$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, lang)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'lang', 'fr')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
