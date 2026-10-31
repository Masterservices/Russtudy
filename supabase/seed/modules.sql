-- ============================================================
-- RusStudy — E-learning : politiques des modules, et modules eux-mêmes.
--
-- À coller dans l'éditeur SQL du tableau de bord Supabase, ou à jouer
-- avec psql :
--
--   psql "$SUPABASE_DB_URL" -f supabase/seed/modules.sql
--
-- Idempotent : relancé, il remet les politiques en place et met à jour
-- les libellés sans créer de doublon. Les leçons déjà rattachées le
-- restent.
--
-- Deux parties. La première achève la migration 20261024000100, dont
-- la table et les droits sont déjà en base mais pas les politiques :
-- sans elles, RLS étant actif, personne ne lit rien et les leçons
-- s'affichent « hors section ». La seconde crée deux modules par
-- parcours et y range les six leçons.
-- ============================================================

-- ------------------------------------------------------------
-- 1. Sécurité : un module suit son parcours.
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

-- ------------------------------------------------------------
-- 2. Les modules.
--
-- Deux par parcours : ce qu'on apprend à déchiffrer, puis ce qu'on
-- apprend à dire. Un découpage en deux temps suffit à six leçons —
-- un module par leçon n'apporterait qu'une hiérarchie vide.
--
-- Les libellés suivent la langue du public, pas celle enseignée : le
-- parcours de russe s'adresse à des francophones et arabophones, celui
-- de français à des russophones.
-- ------------------------------------------------------------
with cible as (
  select
    c.id as course_id,
    m.position,
    m.key,
    m.title
  from public.courses c
  join (
    values
      ('russe-a1', 1, 'ru-dechiffrer', jsonb_build_object(
        'fr', 'Lire et prononcer',
        'ar', 'القراءة والنطق',
        'en', 'Reading and pronouncing',
        'ru', 'Читать и произносить'
      )),
      ('russe-a1', 2, 'ru-echanger', jsonb_build_object(
        'fr', 'Premiers échanges',
        'ar', 'أولى المحادثات',
        'en', 'First exchanges',
        'ru', 'Первые разговоры'
      )),
      ('francais-a1', 1, 'fr-sons', jsonb_build_object(
        'ru', 'Звуки и произношение',
        'fr', 'Les sons du français',
        'ar', 'أصوات الفرنسية',
        'en', 'The sounds of French'
      )),
      ('francais-a1', 2, 'fr-phrases', jsonb_build_object(
        'ru', 'Первые фразы',
        'fr', 'Premières phrases',
        'ar', 'أولى الجمل',
        'en', 'First sentences'
      ))
  ) as m (course_slug, position, key, title) on m.course_slug = c.slug
)
insert into public.modules (course_id, position, title)
select course_id, position, title from cible
on conflict do nothing;

-- `modules` n'a pas de contrainte d'unicité : on rattrape par
-- (parcours, position) plutôt que de risquer un doublon à chaque
-- exécution. Les libellés sont remis à jour au passage.
update public.modules m
set title = v.title
from (
  select c.id as course_id, x.position, x.title
  from public.courses c
  join (
    values
      ('russe-a1', 1, jsonb_build_object('fr', 'Lire et prononcer', 'ar', 'القراءة والنطق', 'en', 'Reading and pronouncing', 'ru', 'Читать и произносить')),
      ('russe-a1', 2, jsonb_build_object('fr', 'Premiers échanges', 'ar', 'أولى المحادثات', 'en', 'First exchanges', 'ru', 'Первые разговоры')),
      ('francais-a1', 1, jsonb_build_object('ru', 'Звуки и произношение', 'fr', 'Les sons du français', 'ar', 'أصوات الفرنسية', 'en', 'The sounds of French')),
      ('francais-a1', 2, jsonb_build_object('ru', 'Первые фразы', 'fr', 'Premières phrases', 'ar', 'أولى الجمل', 'en', 'First sentences'))
  ) as x (course_slug, position, title) on x.course_slug = c.slug
) v
where m.course_id = v.course_id and m.position = v.position;

-- Supprime les modules surnuméraires qu'une exécution précédente
-- aurait pu créer en double.
delete from public.modules m
using public.modules autre
where m.course_id = autre.course_id
  and m.position = autre.position
  and m.ctid > autre.ctid;

-- ------------------------------------------------------------
-- 3. Rattachement des leçons.
--
-- La première leçon de chaque parcours ouvre le module de
-- déchiffrage ; les deux suivantes, celui de la pratique.
-- ------------------------------------------------------------
update public.lessons l
set module_id = m.id
from public.courses c, public.modules m
where l.course_id = c.id
  and m.course_id = c.id
  and (
    (c.slug = 'russe-a1'    and l.slug = 'alphabet-cyrillique'  and m.position = 1) or
    (c.slug = 'russe-a1'    and l.slug = 'salutations'          and m.position = 2) or
    (c.slug = 'russe-a1'    and l.slug = 'chiffres-et-heure'    and m.position = 2) or
    (c.slug = 'francais-a1' and l.slug = 'sons-du-francais'     and m.position = 1) or
    (c.slug = 'francais-a1' and l.slug = 'saluer-se-presenter'  and m.position = 2) or
    (c.slug = 'francais-a1' and l.slug = 'articles-et-genre'    and m.position = 2)
  );

-- ------------------------------------------------------------
-- Vérification : quatre modules, six leçons rattachées, trois
-- politiques.
-- ------------------------------------------------------------
select
  (select count(*) from public.modules)                            as modules,
  (select count(*) from public.lessons where module_id is not null) as lecons_rattachees,
  (select count(*) from pg_policies where tablename = 'modules')    as politiques;
