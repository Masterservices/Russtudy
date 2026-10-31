# Base de données RusStudy (Supabase)

Ce dossier contient le schéma complet de l'application `/app` : tables, politiques
RLS, bucket de stockage et données de référence.

**Projet Supabase du site :** `ugangicvbgiwncrhyexd`
(`https://ugangicvbgiwncrhyexd.supabase.co`)

## 1. Créer le projet

1. Le projet existe déjà — cette étape ne concerne qu'un nouvel environnement.
2. Récupérer dans **Project Settings → API** :
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - clé publique → `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (format `sb_publishable_…`)
     ou, pour un projet plus ancien, `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY` (serveur uniquement, jamais exposée au client)
3. Renseigner ces variables dans `.env.local` en local, et dans **Vercel → Settings →
   Environment Variables** pour la production.

La clé publique n'est pas un secret : elle est envoyée au navigateur à chaque
chargement. C'est la RLS qui protège les données. La clé `service_role`, elle,
contourne la RLS et ne doit jamais quitter le serveur.

## 2. Appliquer les migrations

### Option A — CLI Supabase (recommandé)

```bash
npx supabase link --project-ref ugangicvbgiwncrhyexd
npx supabase db push
```

### Option B — SQL Editor

Exécuter dans l'ordre, depuis le SQL Editor du dashboard :

1. `migrations/20260803000100_app_schema.sql`
2. `migrations/20260803000200_app_rls.sql`
3. `migrations/20260803000300_app_reference_data.sql`
4. `migrations/20260803000400_app_grants.sql`
5. `migrations/20260805000100_fix_role_bootstrap.sql`

La quatrième migration n'est pas optionnelle : PostgreSQL vérifie les
privilèges (`GRANT`) **avant** les politiques RLS. Sans elle, un utilisateur
connecté reçoit une erreur `42501` sur chaque table, quelles que soient ses
politiques.

## 3. Authentification

Dans **Authentication → URL Configuration** :

- *Site URL* : `https://www.russieetudes.com`
- *Redirect URLs* : `https://www.russieetudes.com/app/**` et `http://localhost:3000/app/**`

Un profil (`public.profiles`) est créé automatiquement à chaque inscription par le
trigger `on_auth_user_created`, avec le rôle `student` par défaut.

## 4. Promouvoir un compte

Le rôle n'est jamais modifiable par l'utilisateur lui-même (trigger
`profiles_guard_role`). Pour créer le premier administrateur, depuis le SQL Editor :

```sql
update public.profiles set role = 'admin' where email = 'admin@russieetudes.com';
```

Puis, depuis l'application, un administrateur peut promouvoir un consultant.

## 5. Modèle de sécurité

| Rôle | Portée |
|---|---|
| `student` | uniquement ses propres dossiers, documents, messages, devis, notifications |
| `consultant` | les dossiers dont il est le consultant assigné (lecture + écriture) |
| `admin` | accès complet, écriture sur les universités, la tarification et les rôles |

Les helpers `is_admin()`, `can_access_dossier()` et `can_write_dossier()` sont
`security definer` : ils lisent `public.profiles` sans repasser par RLS, ce qui
évite toute récursion de politique.

Le bucket de stockage `documents` est **privé**. Les fichiers y sont rangés sous
`<dossier_id>/<nom>` et l'accès est contrôlé par les mêmes helpers ; les
téléchargements passent par des URLs signées à durée de vie courte.

## 6. Serveur MCP Supabase

Le dépôt déclare le serveur MCP Supabase dans `.mcp.json` (portée projet), ce qui
permet aux outils d'IA d'interroger la base, la documentation et les logs du
projet `ugangicvbgiwncrhyexd`.

L'authentification est un flux OAuth interactif : elle doit être lancée depuis un
**vrai terminal**, pas depuis une extension d'IDE ni une session distante.

```bash
claude /mcp        # sélectionner « supabase », puis « Authenticate »
```

Optionnel — compétences dédiées Supabase :

```bash
npx skills add supabase/agent-skills
```

## 7. Mode démonstration

Sans variables d'environnement Supabase, l'application démarre en **mode
démonstration** : jeu de données fictif en lecture seule, aucune écriture
possible. Cela permet de construire, prévisualiser et déployer `/app` avant
d'avoir branché la base.
