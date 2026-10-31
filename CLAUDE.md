# CLAUDE.md

# Projet

Nom officiel : RussieEtudes.com

Plateforme interne : RusStudy

Le site public est RussieEtudes.com.

RusStudy est la plateforme SaaS permettant la gestion des étudiants, consultants et administrateurs.

Le dépôt GitHub Rustudystudiov5 reste la base officielle du projet.

Ne jamais renommer le dépôt.

Le domaine officiel est :

https://www.russieetudes.com

(www est le domaine principal servi en production ; l'apex russieetudes.com redirige en 301 vers www.)

---

# Philosophie

Le projet doit pouvoir évoluer pendant plusieurs années.

Toujours privilégier :

- qualité
- évolutivité
- modularité
- performances
- SEO
- accessibilité
- maintenabilité

Ne jamais casser les fonctionnalités existantes.

Toujours améliorer sans régression.

---

# Git

main

Production.

develop

Préproduction.

feature/*

Nouvelle fonctionnalité.

release/*

Préparation avant publication.

hotfix/*

Correction urgente.

Ne jamais développer directement sur main.

---

# SEO

Le SEO est prioritaire.

Chaque nouvelle page doit posséder :

- Meta Title unique
- Meta Description
- Canonical
- OpenGraph
- Twitter Cards
- Schema.org
- Breadcrumb
- FAQ si pertinente
- URL propre
- H1 unique
- H2 cohérents

## Données structurées — règles strictes

Toute donnée structurée (JSON-LD) doit refléter un contenu réellement visible sur la page. Ne jamais baliser une note, un avis, un prix ou un fait qui n'apparaît pas dans le contenu affiché : c'est du spam de données structurées, passible d'une action manuelle Google.

Ne jamais ajouter `aggregateRating`, `Review` ou `AggregateRating` sur notre propre entité (`Organization`, `EducationalOrganization`, `LocalBusiness` ou tout sous-type) publiée sur notre propre site : ce sont des avis "self-serving", inéligibles aux rich results selon les consignes Google. Les étoiles ne peuvent venir que de plateformes tierces (Google Business Profile, Trustpilot, etc.).

Un `aggregateRating` reste autorisé uniquement sur une entité tierce réellement notée par nos utilisateurs (ex. une université), avec des avis authentiques, vérifiables et affichés sur la page.

Ne jamais inventer de valeurs (note, nombre d'avis) : toute donnée chiffrée balisée doit provenir d'une source réelle et vérifiable.

Le sitemap est dynamique.

Toute nouvelle page doit être ajoutée automatiquement.

robots.txt doit rester valide.

---

# Architecture

Toujours privilégier :

components

pages

layouts

hooks

services

utils

constants

types

schemas

seo

config

assets

images

icons

locales

Chaque composant doit avoir une responsabilité unique.

Réduire les duplications.

Toutes les pages du site (accueil et pages de contenu) doivent inclure le menu de navigation complet (header) et le footer complet, via les composants partagés `SiteHeader` et `SiteFooter`.

Ne jamais créer une nouvelle page sans le menu et le footer.

---

# Voix des cours

Une voix par cours, native de la langue enseignée, la même pour toutes les leçons du cours.

La voix de chaque cours est inscrite dans `scripts/elearning/voix.json`. Ne jamais narrer une leçon avec une autre voix que celle de son cours, ni en choisir une nouvelle pour un cours existant.

---

# Multilingue

Le projet supporte :

Français

Arabe

Anglais

Russe

Détection automatique.

Le choix utilisateur est mémorisé.

Toutes les chaînes doivent être traduisibles.

Ne jamais coder des textes directement dans les composants lorsqu'une traduction est possible.

---

# Performance

Objectif :

Lighthouse supérieur à 95.

Utiliser :

Lazy Loading

Code Splitting

Images optimisées

Bundle minimal

Accessibilité élevée

Responsive parfait

---

# RusStudy

RusStudy est une plateforme.

Fonctionnalités futures :

Dashboard étudiant

Dashboard consultant

Dashboard administrateur

CRM

Suivi du dossier

Documents

Visa

Invitation

Paiement

Communauté

Blog

FAQ

Assistant IA

API

Notifications

Applications mobiles

VPN

Guides

---

# Qualité

Avant chaque commit :

Compiler le projet.

Vérifier TypeScript.

Vérifier ESLint.

Vérifier Responsive.

Vérifier SEO.

Vérifier les performances.

Ne jamais laisser d'erreur.

---

# Convention

Toujours privilégier :

Code lisible

Composants réutilisables

Architecture modulaire

Commentaires uniquement lorsque nécessaires

Éviter les dépendances inutiles

Conserver la compatibilité avec Vercel.

Ne jamais modifier le domaine officiel.

Toujours produire un rapport des modifications effectuées.

---

# Infrastructure — acquis, ne plus redemander à l'utilisateur

Ces points sont réglés. Les relire ici, ne pas demander à l'utilisateur de les refaire, de se
reconnecter ou de répéter un historique. Détail et état de la migration : `docs/MIGRATION-NEON.md`.

## Base de données, auth, fichiers : Neon (remplace Supabase)

- Projet Neon `Russtudy` : `solitary-fire-57374519` (aws-eu-central-1). Branche `production` :
  `br-green-wildflower-b9qod8qz`. Branche de test jetable : `migration-test` : `br-tiny-salad-b9h132aj`.
- Schéma appliqué sur `production` (26 tables sous RLS). Authentification : Neon Auth. Fichiers : stockage objet
  Neon, bucket privé `assets`, préfixes `documents/` et `course-assets/`.
- Code : `src/lib/neon/*` (API de requêtes à la `supabase-js`, exécutée sous les rôles `authenticated`/`anon`).
  Ne pas réintroduire `@supabase/*`.
- Les comptes sont recréés dans Neon Auth : aucune donnée de test Supabase n'est reprise.

## Vercel

- Projet `rustudystudiov5` : `prj_rcAupCATbh9QhKSqalK39zW76TSA`, équipe `team_DX8OyfiHwJ4bLD3YTerhzjoj`
  (`ghorbeloussama44-gmailcoms-projects`). Domaine principal `www.russieetudes.com`.
- La connexion GitHub ↔ Vercel fonctionne : les fusions sur `main` déploient la production. Ne jamais conclure
  qu'elle est cassée à partir de la liste des projets « reliés » ni d'une erreur de `create_deployment`.
- L'équipe Vercel demande une autorisation par session : appeler `authorize_team_access` et donner le lien
  (un clic de l'utilisateur), sans rien lui redemander d'autre.
- Variables d'environnement : tu peux les poser toi-même avec l'outil Vercel. Les variables Neon sont en
  Preview ; la Production attend la validation du test. Ne jamais écraser les clés VAPID ni `PUSH_HOOK_SECRET`
  de Production (appareils déjà abonnés). Les secrets ne se collent jamais dans un commit.

## Comptes GitHub

- Le dépôt actif est **`Masterservices/Russtudy`** (compte Masterservices, application Claude et application Vercel
  installées). `ghorbeloussama44-source` est abandonné : ne plus l'utiliser. Ne pas demander quel compte employer.
- `main` de `Russtudy` = production, `develop` = préproduction. La PR de migration Neon est `Masterservices/Russtudy#1`
  (branche `claude/neon-migration-obhema`). Ne pas fusionner dans `main` avant que les variables Neon soient posées
  en Production (sinon `/app` passe en mode démonstration en ligne).
- Déployer une prévisualisation : outil Vercel `create_deployment` avec
  `gitSource: { type: "github", org: "Masterservices", repo: "Russtudy", ref: "<branche>" }`. Adresse stable de test :
  `https://rustudystudiov5-git-d8f1f0-ghorbeloussama44-gmailcoms-projects.vercel.app` (autorisée dans Neon Auth).
- Diagnostic de connexion : `/api/neon/health` (base, auth, stockage, et cookies de session du navigateur).

## Connexion Neon Auth — pièges connus

- Au retour de Google, Neon Auth ajoute `neon_auth_session_verifier` à l'URL ; seul le middleware Neon l'échange
  contre le cookie de session. `src/lib/neon/proxy.ts` doit donc l'exécuter même sur une page publique.
- Les journaux d'exécution Vercel ne remontent pas les `console.error` de la connexion : utiliser `/api/neon/health`.

## Règles de travail

- Ne pas écrire sur la base `production`, ouvrir une PR ou fusionner sans demande explicite de l'utilisateur.
  Une fois la demande reçue, agir sans redemander les étapes déjà décrites ici.
- Faire soi-même tout ce que les outils (Neon, Vercel, GitHub) permettent : l'utilisateur travaille depuis
  un téléphone et veut le minimum d'étapes manuelles.
