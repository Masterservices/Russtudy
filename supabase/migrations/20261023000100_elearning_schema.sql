-- ============================================================
-- RusStudy — E-learning : types, tables, index, triggers.
-- Migration 1/3 : aucune politique RLS ici (voir …000200).
--
-- Deux parcours au lancement :
--   * russe pour un public tunisien   (interface fr / ar) ;
--   * français pour un public russe   (interface ru).
--
-- Les textes sont stockés en jsonb indexé par code de langue
-- ({"fr": "...", "ar": "..."}) plutôt qu'en colonnes par langue : une
-- troisième langue d'interface n'imposera pas de migration de schéma.
--
-- Modèle d'accès retenu : les premières leçons de chaque parcours sont
-- libres (`lessons.is_free`), la suite demande une inscription active.
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- Types énumérés
-- ------------------------------------------------------------
do $$ begin
  create type lesson_block_kind as enum ('slide', 'text', 'audio', 'video', 'vocabulary', 'dialogue');
exception when duplicate_object then null; end $$;

do $$ begin
  create type exercise_kind as enum ('mcq', 'fill_blank', 'match', 'order', 'listening', 'speaking');
exception when duplicate_object then null; end $$;

do $$ begin
  create type enrollment_status as enum ('active', 'expired', 'revoked');
exception when duplicate_object then null; end $$;

do $$ begin
  create type tutoring_status as enum ('requested', 'confirmed', 'done', 'cancelled');
exception when duplicate_object then null; end $$;

-- ------------------------------------------------------------
-- Parcours
-- ------------------------------------------------------------
create table if not exists public.courses (
  id            uuid primary key default gen_random_uuid(),
  slug          text        not null unique,
  -- Langue enseignée ('ru' pour le parcours de russe, 'fr' pour celui de français).
  target_lang   text        not null check (target_lang in ('ru', 'fr', 'en', 'ar')),
  -- Langues d'interface dans lesquelles ce parcours est proposé.
  ui_langs      text[]      not null default array['fr'],
  -- Niveau visé, échelle CECR.
  level         text        not null default 'A1' check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  title         jsonb       not null default '{}'::jsonb,
  description   jsonb       not null default '{}'::jsonb,
  cover_url     text,
  position      int         not null default 0,
  is_published  boolean     not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists courses_published_idx on public.courses (is_published, position);

-- ------------------------------------------------------------
-- Leçons
-- ------------------------------------------------------------
create table if not exists public.lessons (
  id            uuid primary key default gen_random_uuid(),
  course_id     uuid        not null references public.courses (id) on delete cascade,
  position      int         not null default 0,
  slug          text        not null,
  title         jsonb       not null default '{}'::jsonb,
  summary       jsonb       not null default '{}'::jsonb,
  -- Objectifs pédagogiques affichés en tête de leçon.
  objectives    jsonb       not null default '[]'::jsonb,
  -- Leçon d'essai : lisible sans inscription active.
  is_free       boolean     not null default false,
  duration_min  int         not null default 10 check (duration_min > 0),
  is_published  boolean     not null default false,
  -- Fichier d'origine (PowerPoint ou PDF) dont la leçon a été extraite.
  source_file   text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (course_id, slug),
  unique (course_id, position) deferrable initially deferred
);

create index if not exists lessons_course_idx on public.lessons (course_id, position);
create index if not exists lessons_free_idx on public.lessons (course_id) where is_free;

-- ------------------------------------------------------------
-- Blocs de contenu d'une leçon
--
-- Une diapositive importée produit un bloc `slide` : son image dans
-- `media_url`, son texte dans `content`, sa voix off dans `audio_url` et
-- le texte lu dans `transcript`. Le lecteur sait composer les deux sans
-- qu'un montage vidéo soit nécessaire.
-- ------------------------------------------------------------
create table if not exists public.lesson_blocks (
  id          uuid primary key default gen_random_uuid(),
  lesson_id   uuid              not null references public.lessons (id) on delete cascade,
  position    int               not null default 0,
  kind        lesson_block_kind not null default 'slide',
  content     jsonb             not null default '{}'::jsonb,
  media_url   text,
  audio_url   text,
  -- Texte effectivement lu par la voix off : sert aussi de sous-titre.
  transcript  jsonb             not null default '{}'::jsonb,
  created_at  timestamptz       not null default now(),
  updated_at  timestamptz       not null default now()
);

create index if not exists lesson_blocks_lesson_idx on public.lesson_blocks (lesson_id, position);

-- ------------------------------------------------------------
-- Exercices
--
-- `answer` n'est jamais exposé au client : la correction passe par la
-- fonction public.grade_exercise, qui ne renvoie que le verdict.
-- ------------------------------------------------------------
create table if not exists public.exercises (
  id           uuid primary key default gen_random_uuid(),
  lesson_id    uuid          not null references public.lessons (id) on delete cascade,
  position     int           not null default 0,
  kind         exercise_kind not null default 'mcq',
  prompt       jsonb         not null default '{}'::jsonb,
  options      jsonb         not null default '[]'::jsonb,
  answer       jsonb         not null default '{}'::jsonb,
  explanation  jsonb         not null default '{}'::jsonb,
  audio_url    text,
  created_at   timestamptz   not null default now(),
  updated_at   timestamptz   not null default now()
);

create index if not exists exercises_lesson_idx on public.exercises (lesson_id, position);

-- ------------------------------------------------------------
-- Inscriptions
--
-- Au lancement, l'accès payant est ouvert à la main depuis l'espace
-- d'administration : `granted_by` garde la trace de qui l'a accordé.
-- Un prestataire de paiement pourra plus tard écrire dans cette même
-- table sans rien changer au reste.
-- ------------------------------------------------------------
create table if not exists public.enrollments (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid              not null references auth.users (id) on delete cascade,
  course_id   uuid              not null references public.courses (id) on delete cascade,
  status      enrollment_status not null default 'active',
  granted_by  uuid              references auth.users (id) on delete set null,
  granted_at  timestamptz       not null default now(),
  expires_at  timestamptz,
  note        text,
  created_at  timestamptz       not null default now(),
  updated_at  timestamptz       not null default now(),
  unique (user_id, course_id)
);

create index if not exists enrollments_user_idx on public.enrollments (user_id, status);

-- ------------------------------------------------------------
-- Progression
-- ------------------------------------------------------------
create table if not exists public.lesson_progress (
  user_id        uuid        not null references auth.users (id) on delete cascade,
  lesson_id      uuid        not null references public.lessons (id) on delete cascade,
  started_at     timestamptz not null default now(),
  completed_at   timestamptz,
  -- Dernier bloc vu : permet de reprendre la leçon où elle a été laissée.
  last_block_pos int         not null default 0,
  score          int         check (score between 0 and 100),
  primary key (user_id, lesson_id)
);

create index if not exists lesson_progress_user_idx on public.lesson_progress (user_id, completed_at);

create table if not exists public.exercise_attempts (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid        not null references auth.users (id) on delete cascade,
  exercise_id  uuid        not null references public.exercises (id) on delete cascade,
  given        jsonb       not null default '{}'::jsonb,
  is_correct   boolean     not null,
  answered_at  timestamptz not null default now()
);

create index if not exists exercise_attempts_user_idx on public.exercise_attempts (user_id, exercise_id);

-- ------------------------------------------------------------
-- Professeurs et visioconférence
--
-- La visio s'appuie sur une salle Jitsi nommée : aucun compte ni clé
-- d'API n'est requis. `room_name` est tiré au sort à la confirmation,
-- donc non devinable depuis l'extérieur.
-- ------------------------------------------------------------
create table if not exists public.teachers (
  id          uuid primary key references public.profiles (id) on delete cascade,
  langs       text[]      not null default array['ru'],
  headline    jsonb       not null default '{}'::jsonb,
  bio         jsonb       not null default '{}'::jsonb,
  avatar_url  text,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.tutoring_slots (
  id          uuid primary key default gen_random_uuid(),
  teacher_id  uuid        not null references public.teachers (id) on delete cascade,
  starts_at   timestamptz not null,
  ends_at     timestamptz not null,
  created_at  timestamptz not null default now(),
  check (ends_at > starts_at)
);

create index if not exists tutoring_slots_teacher_idx on public.tutoring_slots (teacher_id, starts_at);

create table if not exists public.tutoring_bookings (
  id          uuid primary key default gen_random_uuid(),
  slot_id     uuid            not null unique references public.tutoring_slots (id) on delete cascade,
  student_id  uuid            not null references auth.users (id) on delete cascade,
  course_id   uuid            references public.courses (id) on delete set null,
  status      tutoring_status not null default 'requested',
  room_name   text,
  student_note text,
  created_at  timestamptz     not null default now(),
  updated_at  timestamptz     not null default now()
);

create index if not exists tutoring_bookings_student_idx on public.tutoring_bookings (student_id, status);

-- ------------------------------------------------------------
-- Horodatage automatique
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
  foreach t in array array[
    'courses', 'lessons', 'lesson_blocks', 'exercises',
    'enrollments', 'teachers', 'tutoring_bookings'
  ]
  loop
    execute format('drop trigger if exists %I_touch on public.%I', t, t);
    execute format(
      'create trigger %I_touch before update on public.%I
         for each row execute function public.touch_updated_at()', t, t
    );
  end loop;
end $$;

-- ------------------------------------------------------------
-- Salle de visio : nom tiré au sort à la confirmation
-- ------------------------------------------------------------
create or replace function public.assign_tutoring_room()
returns trigger
language plpgsql
as $$
begin
  if new.status = 'confirmed' and (new.room_name is null or new.room_name = '') then
    new.room_name := 'russtudy-' || replace(gen_random_uuid()::text, '-', '');
  end if;
  return new;
end;
$$;

drop trigger if exists tutoring_bookings_room on public.tutoring_bookings;
create trigger tutoring_bookings_room
  before insert or update on public.tutoring_bookings
  for each row execute function public.assign_tutoring_room();
