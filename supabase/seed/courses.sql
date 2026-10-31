-- ============================================================
-- Parcours de langue — données de départ.
--
-- À exécuter une fois, après les migrations, avant d'importer la
-- première leçon :
--
--   psql "$SUPABASE_DB_URL" -f supabase/seed/courses.sql
--
-- ou en collant ce fichier dans l'éditeur SQL du tableau de bord.
--
-- Idempotent : relancé, il met à jour les libellés sans créer de
-- doublon ni toucher aux leçons déjà importées.
-- ============================================================

insert into public.courses (slug, target_lang, ui_langs, level, title, description, position, is_published)
values
  (
    'russe-a1',
    'ru',
    array['fr', 'ar'],
    'A1',
    jsonb_build_object(
      'fr', 'Russe A1 — débutant complet',
      'ar', 'الروسية A1 — مبتدئ تمامًا',
      'en', 'Russian A1 — complete beginner',
      'ru', 'Русский A1 — с нуля'
    ),
    jsonb_build_object(
      'fr', 'De l''alphabet cyrillique aux premières phrases de la vie quotidienne.',
      'ar', 'من الأبجدية السيريلية إلى أولى جمل الحياة اليومية.',
      'en', 'From the Cyrillic alphabet to the first everyday sentences.',
      'ru', 'От кириллицы до первых бытовых фраз.'
    ),
    1,
    true
  ),
  (
    'francais-a1',
    'fr',
    array['ru'],
    'A1',
    jsonb_build_object(
      'ru', 'Французский A1 — с нуля',
      'fr', 'Français A1 — débutant complet',
      'en', 'French A1 — complete beginner',
      'ar', 'الفرنسية A1 — مبتدئ تمامًا'
    ),
    jsonb_build_object(
      'ru', 'Сначала произношение: звуки, которых нет в русском.',
      'fr', 'La prononciation d''abord : les sons qui n''existent pas en russe.',
      'en', 'Pronunciation first: the sounds that do not exist in Russian.',
      'ar', 'النطق أولًا: الأصوات التي لا وجود لها في الروسية.'
    ),
    2,
    true
  )
on conflict (slug) do update
  set title       = excluded.title,
      description = excluded.description,
      ui_langs    = excluded.ui_langs,
      level       = excluded.level,
      position    = excluded.position,
      is_published = excluded.is_published;
