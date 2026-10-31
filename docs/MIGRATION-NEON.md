# Migration RusStudy : Supabase → Neon

État au 31 octobre 2026. Branche Git : `claude/russtudy-neon-migration-d8y2x4`.
Le site en production tourne toujours sur Supabase : rien n'est basculé.

## Projet Neon

| Élément | Valeur |
|---|---|
| Projet | `Russtudy` — `solitary-fire-57374519` (aws-eu-central-1, Postgres 18) |
| Branche production | `production` — `br-green-wildflower-b9qod8qz` |
| Branche de test | `migration-test` — `br-tiny-salad-b9h132aj` |
| Auth | Neon Auth (Managed Better Auth), e-mail + mot de passe, Google (partagé) |
| Stockage | bucket privé `assets`, identifiant `russtudy-app-storage` |

## Fait

- [x] `neon.ts`, `.neon`, dépendances `@neon/config` et `@neon/env`.
- [x] Driver `pg` + `@vercel/functions` : `src/lib/neon/db.ts` (URL poolée).
- [x] Stockage S3 : `src/lib/neon/storage.ts` (liens signés, bucket privé). Testé de bout en bout.
- [x] Auth Neon testée hors application : inscription, connexion, session (HTTP 200).
- [x] Route de contrôle `GET /api/neon/health` : base, auth, stockage.
- [x] Couche de compatibilité `neon/migrations/00000000000000_supabase_compat.sql`.
- [x] Script `scripts/neon/apply-migrations.mjs` (WebSocket, port 443).
- [x] Schéma complet appliqué et validé sur `migration-test` : 26 tables, 67 politiques RLS,
      57 fonctions, 17 triggers, 8 tests de sécurité réussis.
- [ ] Schéma sur `production` : volontairement en attente, jusqu'à ce que le code soit migré.

## Principe retenu : la RLS reste dans la base

Les politiques Supabase sont conservées telles quelles. Pour chaque requête faite au nom
d'un utilisateur, le code serveur doit :

```sql
begin;
set local role authenticated;
select set_config('request.jwt.claim.sub', '<id utilisateur Neon Auth>', true);
-- requêtes de l'application
commit;
```

`auth.uid()` lit cette valeur. Un compte créé dans Neon Auth (`neon_auth."user"`) est recopié
dans `auth.users` par trigger, ce qui crée son profil (`public.profiles`, rôle `student`).

## Reste à faire, dans l'ordre

1. **Connexion** : remplacer Supabase Auth par Neon Auth (`@neon/auth`) — `src/lib/supabase/*`,
   `src/proxy.ts`, `src/app/app/auth/callback/route.ts`, `src/features/app/actions/auth.ts`,
   bouton Google.
2. **Couche de données** : helper `withUser(userId, fn)` qui applique le bloc SQL ci-dessus,
   puis migration des appels `.from(...)` module par module : cours, profils, dossiers,
   messages, devis, paiements.
3. **Fichiers** : remplacer `storage.from('documents')` par `src/lib/neon/storage.ts`, avec
   contrôle `public.can_access_dossier()` avant de signer un lien.
4. **Notifications push** : traiter la file `net.http_request_queue` côté serveur.
5. **Tests de bout en bout** sur une prévisualisation Vercel branchée sur `migration-test`.
6. **Bascule** : appliquer le schéma sur `production`
   (`MIGRATION_DATABASE_URL=<url directe> node scripts/neon/apply-migrations.mjs`),
   variables Vercel de production, puis mise en ligne.

## Sécurité — à faire à la fin

- Réinitialiser une dernière fois le mot de passe de `neondb_owner` (console Neon).
- Faire tourner la clé de stockage :
  `neon credentials rotate nak_live_1bd46810dcc34661a8d977b6027c7163 --project-id solitary-fire-57374519 --branch production`
- Supprimer la branche `migration-test`.

## Contraintes de l'environnement Claude Code

Le port 5432 est fermé dans le conteneur : utiliser le transport WebSocket
(`@neondatabase/serverless`) ou les outils MCP Neon. La CLI `neon` n'y est pas connectée.
