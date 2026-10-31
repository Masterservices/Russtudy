-- ------------------------------------------------------------
-- Correction : pg_net s'installe dans le schéma `net`
--
-- La migration précédente appelait `extensions.net.http_post`. PostgreSQL lit
-- alors ce nom comme base.schéma.fonction et refuse la référence
-- (« cross-database references are not implemented »).
--
-- Conséquence : le déclencheur échouait, et comme il s'exécute dans la même
-- transaction que l'insertion, il faisait échouer TOUTE création de
-- notification — donc toute demande d'étape, confirmation, signature,
-- décision sur une pièce et tout envoi de message.
--
-- Deux corrections plutôt qu'une :
--   1. le bon schéma (`net`) ;
--   2. l'échec d'un envoi ne doit jamais annuler l'événement qui l'a produit.
--      Une notification non transmise reste consultable dans l'application ;
--      une notification perdue avec son étape, non.
-- ------------------------------------------------------------

create or replace function public.dispatch_push_notification()
returns trigger
language plpgsql
security definer
set search_path = public, net
as $$
declare
  endpoint_url text;
  shared_secret text;
begin
  select value into endpoint_url from public.app_config where key = 'push_endpoint';
  select value into shared_secret from public.app_config where key = 'push_secret';

  -- Tant que le porteur n'est pas configuré, la notification reste interne :
  -- c'est une dégradation, pas une panne.
  if endpoint_url is null or shared_secret is null then
    return new;
  end if;

  begin
    perform net.http_post(
      url := endpoint_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'X-Push-Secret', shared_secret
      ),
      body := jsonb_build_object('notificationId', new.id),
      timeout_milliseconds := 5000
    );
  exception when others then
    -- L'alerte système est un confort. L'événement métier, non.
    raise warning 'push dispatch failed: %', sqlerrm;
  end;

  return new;
end;
$$;
