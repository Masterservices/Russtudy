-- ============================================================
-- RusStudy — données de référence (migration 3/3)
-- Universités partenaires et grille tarifaire par défaut.
-- Idempotent : rejouable sans effet de bord.
-- ============================================================

insert into public.universities (slug, name, city, tuition_min_rub, tuition_max_rub)
values
  ('universite-etat-kazan',        'Université d''État de Kazan',            'Kazan',            280000, 420000),
  ('universite-etat-moscou',       'Université d''État de Moscou',           'Moscou',           350000, 560000),
  ('spbpu',                        'SPbPU — Polytechnique Saint-Pétersbourg', 'Saint-Pétersbourg', 300000, 450000),
  ('rudn',                         'RUDN — Université de l''Amitié des Peuples', 'Moscou',        320000, 480000),
  ('universite-etat-kazan-medecine','Université de médecine de Kazan',        'Kazan',            390000, 520000)
on conflict (slug) do update
  set name            = excluded.name,
      city            = excluded.city,
      tuition_min_rub = excluded.tuition_min_rub,
      tuition_max_rub = excluded.tuition_max_rub;

insert into public.pricing_items (key, label, amount, currency, position)
values
  ('dossier_fee',      'Frais de dossier',       120000, 'RUB', 1),
  ('tuition_fee',      'Frais universitaires',   300000, 'RUB', 2),
  ('visa_invitation',  'Visa & invitation',       20000, 'RUB', 3),
  ('medical_insurance','Assurance médicale',          0, 'RUB', 4)
on conflict (key) do update
  set label    = excluded.label,
      amount   = excluded.amount,
      currency = excluded.currency,
      position = excluded.position,
      updated_at = now();
