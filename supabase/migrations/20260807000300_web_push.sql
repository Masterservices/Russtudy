-- ------------------------------------------------------------
-- Notifications système (Web Push)
--
-- Une notification en base ne réveille pas un téléphone. Pour qu'elle
-- devienne une alerte système, il faut :
--   1. l'abonnement du navigateur (push_subscriptions)
--   2. un porteur qui signe et transmet l'envoi (route /api/app/push)
--
-- L'insertion d'une notification déclenche un appel HTTP sortant vers cette
-- route via pg_net. La base reste ainsi la seule source de vérité : tout ce
-- qui crée une notification déclenche l'alerte, sans que le code applicatif
-- ait à y penser.
-- ------------------------------------------------------------

create extension if not exists pg_net with schema extensions;

-- ------------------------------------------------------------
-- Abonnements des navigateurs
-- ------------------------------------------------------------
create table if not exists public.push_subscriptions (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles (id) on delete cascade,
  endpoint   text not null unique,
  p256dh     text not null,
  auth       text not null,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists push_subscriptions_user_idx on public.push_subscriptions (user_id);

alter table public.push_subscriptions enable row level security;

-- Chacun ne voit et ne gère que ses propres appareils.
drop policy if exists push_subscriptions_select on public.push_subscriptions;
create policy push_subscriptions_select on public.push_subscriptions
  for select to authenticated using (user_id = auth.uid());

drop policy if exists push_subscriptions_insert on public.push_subscriptions;
create policy push_subscriptions_insert on public.push_subscriptions
  for insert to authenticated with check (user_id = auth.uid());

drop policy if exists push_subscriptions_delete on public.push_subscriptions;
create policy push_subscriptions_delete on public.push_subscriptions
  for delete to authenticated using (user_id = auth.uid());

grant select, insert, delete on public.push_subscriptions to authenticated;
grant all on public.push_subscriptions to service_role;
revoke all on public.push_subscriptions from anon;

-- ------------------------------------------------------------
-- Réglages du porteur d'envoi
--
-- L'URL et le secret partagé ne sont lus que par des fonctions
-- `security definer` : aucun rôle client n'y accède.
-- ------------------------------------------------------------
create table if not exists public.app_config (
  key   text primary key,
  value text not null
);

alter table public.app_config enable row level security;
revoke all on public.app_config from anon, authenticated;
grant all on public.app_config to service_role;

-- ------------------------------------------------------------
-- Toute notification déclenche une tentative d'envoi
-- ------------------------------------------------------------
create or replace function public.dispatch_push_notification()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
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

  perform extensions.net.http_post(
    url := endpoint_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'X-Push-Secret', shared_secret
    ),
    body := jsonb_build_object('notificationId', new.id),
    timeout_milliseconds := 5000
  );

  return new;
end;
$$;

drop trigger if exists notifications_dispatch_push on public.notifications;
create trigger notifications_dispatch_push
  after insert on public.notifications
  for each row execute function public.dispatch_push_notification();
