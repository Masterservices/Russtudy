-- ============================================================
-- RusStudy — E-learning : modules d'un parcours.
--
-- Un parcours se lit mieux en deux niveaux : des modules, et des
-- leçons dans chacun. C'est ce qui donne au programme sa profondeur
-- visible — « 2 modules · 6 leçons · 52 min » — et ce qui permet de
-- replier ce qu'on ne suit pas encore.
--
-- `lessons.module_id` est nullable : une leçon sans module reste
-- affichée, hors section. Aucune leçon existante n'a besoin d'être
-- rattachée pour que les pages continuent de fonctionner.
-- ============================================================

create table if not exists public.modules (
  id         uuid primary key default gen_random_uuid(),
  course_id  uuid        not null references public.courses (id) on delete cascade,
  position   int         not null default 0,
  title      jsonb       not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists modules_course_idx on public.modules (course_id, position);

alter table public.lessons
  add column if not exists module_id uuid references public.modules (id) on delete set null;

create index if not exists lessons_module_idx on public.lessons (module_id, position);

drop trigger if exists modules_touch on public.modules;
create trigger modules_touch before update on public.modules
  for each row execute function public.touch_updated_at();

-- ------------------------------------------------------------
-- Sécurité : un module suit son parcours.
--
-- Le sommaire d'un parcours publié est public, leçons réservées
-- comprises : c'est lui qui donne envie. Seul le contenu des leçons
-- est protégé, et il l'est ailleurs.
-- ------------------------------------------------------------
alter table public.modules enable row level security;

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

grant select on public.modules to anon;
grant select, insert, update, delete on public.modules to authenticated;
grant all on public.modules to service_role;
