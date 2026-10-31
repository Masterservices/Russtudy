-- ------------------------------------------------------------
-- Canal « université » réservé à l'administration
--
-- Règle métier : un étudiant ne s'adresse jamais directement à une
-- université, et un consultant non plus. Toute communication avec une
-- université passe par l'administration.
--
-- La vérification applicative (actions/app.ts) affiche un message utile ;
-- l'autorité reste ici : une requête forgée contre l'API REST doit échouer
-- au même titre qu'un clic dans l'interface.
-- ------------------------------------------------------------

-- conversations : l'ouverture d'un fil « university » est réservée aux admins.
drop policy if exists conversations_write on public.conversations;

drop policy if exists conversations_insert on public.conversations;
create policy conversations_insert on public.conversations
  for insert to authenticated
  with check (
    public.can_access_dossier(dossier_id)
    and (topic <> 'university' or public.is_admin())
  );

drop policy if exists conversations_update on public.conversations;
create policy conversations_update on public.conversations
  for update to authenticated
  using (public.can_access_dossier(dossier_id))
  with check (
    public.can_access_dossier(dossier_id)
    and (topic <> 'university' or public.is_admin())
  );

drop policy if exists conversations_delete on public.conversations;
create policy conversations_delete on public.conversations
  for delete to authenticated
  using (public.can_access_dossier(dossier_id) and public.is_admin());

-- messages : écrire dans un fil « university » est également réservé aux
-- admins. La lecture reste ouverte aux personnes rattachées au dossier :
-- l'étudiant doit pouvoir suivre ce qui se dit de son dossier.
drop policy if exists messages_insert on public.messages;
create policy messages_insert on public.messages
  for insert to authenticated
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and public.can_access_dossier(c.dossier_id)
        and (c.topic <> 'university' or public.is_admin())
    )
  );

-- messages_update reste inchangée : elle ne sert qu'aux accusés de lecture,
-- qui ne constituent pas une communication.
