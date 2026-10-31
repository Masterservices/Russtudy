# Migration RusStudy : Supabase → Neon

État au 31 octobre 2026. Branche Git : `claude/neon-migration-obhema`.
Le site en production tourne toujours sur Supabase tant que les variables Neon ne sont pas
posées sur Vercel : sans elles, `/app` reste en mode démonstration.

## Décisions

- Les comptes sont **recréés** dans Neon Auth : aucun compte ni donnée de test Supabase n'est repris.
- Les pièces des dossiers vivent dans le **stockage objet Neon** (bucket privé, préfixe `documents/`).
- La RLS reste dans la base ; l'application ne fait que lui transmettre l'identité.

## Projet Neon

| Élément | Valeur |
|---|---|
| Projet | `Russtudy` — `solitary-fire-57374519` (aws-eu-central-1, Postgres 18) |
| Branche production | `production` — `br-green-wildflower-b9qod8qz` (**vide** : schéma pas encore appliqué) |
| Branche de test | `migration-test` — `br-tiny-salad-b9h132aj` (schéma complet, validé) |
| Auth | Neon Auth, e-mail + mot de passe, Google (partagé) |
| Stockage | bucket privé `assets` |

## Fait dans le code

- `src/lib/neon/db.ts` : pool Postgres (types alignés sur l'ancien format PostgREST).
- `src/lib/neon/query.ts` : constructeur de requêtes à l'API de `supabase-js` ; chaque requête
  s'exécute en transaction, rôle `authenticated`/`anon`, `request.jwt.claim.sub` = utilisateur.
  Les 189 appels `.from()/.rpc()` existants n'ont donc pas été réécrits.
- `src/lib/neon/auth.ts`, `server.ts`, `proxy.ts`, `auth-client.ts` : Neon Auth (session, garde `/app`).
- `src/app/api/auth/[...path]/route.ts` : proxy d'authentification.
- Actions de connexion, inscription, déconnexion, réinitialisation de mot de passe
  (+ nouvelle page `/app/mot-de-passe/nouveau`), connexion Google.
- Pièces : `actions/documents.ts` (lien d'envoi présigné après contrôle d'accès au dossier) ;
  téléchargement et aperçus signés après relecture de la ligne `documents` sous RLS.
- Médias de cours : `signed()` signe `course-assets/<chemin>` (chemins issus de lignes lues sous RLS).
- Push : le trigger écrit dans `net.http_request_queue` ; `lib/neon/push.ts` vide la file
  après chaque écriture (`after()`).
- Dépendances `@supabase/*` retirées ; `src/lib/supabase/` supprimé.

## Vérifié

- `tsc`, `eslint` et `next build` (mode démonstration) sans erreur.
- Sur `migration-test` : le compte créé dans Neon Auth reçoit un profil `student` ; un étudiant
  voit son profil et pas celui d'un autre ; il ne peut pas s'attribuer le rôle admin
  (`role_change_forbidden`) ; `anon` n'a pas accès à `profiles`.

## Non vérifié (à tester sur une prévisualisation Vercel)

- Connexion, inscription et Google de bout en bout (nécessite les variables Neon).
- **CORS du bucket Neon** pour l'envoi direct depuis le navigateur (`PUT` présigné). Si le
  navigateur le refuse, remplacer par un envoi via route serveur (limite Vercel ~4,5 Mo).
- Envoi réel d'une notification push.

## À faire par vous

1. Variables Vercel (voir `.env.example`) : `DATABASE_URL` (URL poolée), `NEON_AUTH_BASE_URL`,
   `NEON_AUTH_COOKIE_SECRET`, `NEON_STORAGE_*`, et les clés VAPID.
2. Neon → Auth : ajouter le domaine `https://www.russieetudes.com` aux origines de confiance.
3. Bascule : appliquer le schéma sur `production`
   (`MIGRATION_DATABASE_URL=<url directe> node scripts/neon/apply-migrations.mjs`).
4. Premier administrateur, après inscription du compte :
   `update public.profiles set role = 'admin' where email = '<email>';`
5. Push : `insert into public.app_config (key, value) values ('push_endpoint','internal'), ('push_secret','internal') on conflict (key) do update set value = excluded.value;`
6. Les scripts d'import de cours (`scripts/elearning/*.py`) écrivent encore dans Supabase :
   à porter vers Neon avant de réimporter des leçons.

## Déploiement Vercel (état vérifié le 31 octobre 2026)

- Projet : `rustudystudiov5` (`prj_rcAupCATbh9QhKSqalK39zW76TSA`), équipe `team_DX8OyfiHwJ4bLD3YTerhzjoj`
  (`ghorbeloussama44-gmailcoms-projects`). Domaines : `www.russieetudes.com` (principal), apex en 308.
- Variables Neon posées en **Preview** uniquement. **Production** : volontairement non posées tant que le
  test n'est pas fait. Ne pas écraser les clés VAPID et `PUSH_HOOK_SECRET` de Production (appareils déjà abonnés).
- Schéma appliqué sur la branche Neon `production` (26 tables sous RLS, 73 politiques, 18 migrations).
- Domaines autorisés dans Neon Auth : `www.russieetudes.com` et l'URL de prévisualisation de la branche.
- **Lien Git Vercel ↔ GitHub non confirmé** : l'API Vercel répond « repository can't be found » pour
  `ghorbeloussama44-source/Rustudystudiov5`, et le projet n'apparaît pas parmi les projets reliés à un dépôt.
  Aucun déploiement n'est donc créé à l'ouverture d'une PR. À rétablir dans Vercel → Settings → Git.

## Sécurité — à faire à la fin

- Réinitialiser le mot de passe de `neondb_owner` (console Neon).
- Faire tourner la clé de stockage utilisée pendant la migration.
- Supprimer la branche `migration-test`.

## Contraintes de l'environnement Claude Code

Le port 5432 est fermé dans le conteneur : utiliser le transport WebSocket
(`@neondatabase/serverless`) ou les outils MCP Neon.
