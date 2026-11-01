# CLAUDE.md

# Projet

Nom officiel : RussieEtudes.com

Plateforme interne : RusStudy

Le site public est RussieEtudes.com.

RusStudy est la plateforme SaaS permettant la gestion des étudiants, consultants et administrateurs.

Le dépôt GitHub Rustudystudiov5 reste la base officielle du projet.

Ne jamais renommer le dépôt.

Le domaine officiel est :

https://russieetudes.com

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
