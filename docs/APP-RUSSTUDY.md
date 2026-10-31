# Plateforme RusStudy — `/app`

Application web responsive (mobile-first) pour les étudiants, consultants et
administrateurs de RussieEtudes.com, adossée à Supabase.

URL de production : `https://www.russieetudes.com/app`

---

## 1. Principes

- **Cloisonnement total avec le site public.** `/app` possède sa propre racine
  (`src/app/app/layout.tsx`), sa propre feuille de style
  (`src/features/app/ui/app.css`) et son propre dictionnaire. Le site public
  (`src/app/[[...lang]]/`) n'est modifié nulle part : aucune régression possible
  dans un sens comme dans l'autre.
- **Espace privé, donc désindexé.** `noindex, nofollow` sur toute l'arborescence,
  `Disallow: /app` dans `robots.txt`, aucune entrée au sitemap. Les règles SEO de
  `CLAUDE.md` visent les pages publiques : baliser un espace authentifié
  n'apporterait rien et exposerait des URLs inutiles au crawl.
- **`SiteHeader` / `SiteFooter` ne s'appliquent pas ici.** La plateforme est une
  application, pas une page de contenu : elle a sa propre ossature (en-tête
  d'écran + barre de navigation basse), conforme à la maquette. Un lien
  « Retour au site » ramène vers le site public depuis l'écran d'accueil.
- **Mode démonstration.** Sans variables Supabase, `/app` démarre sur un jeu de
  données fictif en lecture seule. Le build, les previews Vercel et le
  développement local fonctionnent donc sans base branchée.

---

## 2. Arborescence des écrans (30)

### Commun (4)

| Route | Écran |
|---|---|
| `/app` | Splash + accès connexion / inscription |
| `/app/connexion` | Connexion (email + mot de passe, Google OAuth) |
| `/app/inscription` | Création de compte |
| `/app/mot-de-passe` | Demande de réinitialisation |

### Espace étudiant (11)

| Route | Écran |
|---|---|
| `/app/etudiant` | Accueil : progression, action à mener, alertes |
| `/app/etudiant/dossier` | Fiche du dossier |
| `/app/etudiant/dossier/timeline` | Frise des étapes |
| `/app/etudiant/documents` | Documents (filtres Tous / Requis / Reçus) + dépôt |
| `/app/etudiant/documents/[id]` | Détail d'une pièce + téléchargement signé |
| `/app/etudiant/messages` | Conversations (filtres Consultant / Université) |
| `/app/etudiant/messages/nouveau` | Ouverture d'une conversation |
| `/app/etudiant/messages/[id]` | Fil de discussion + envoi |
| `/app/etudiant/notifications` | Notifications + tout marquer comme lu |
| `/app/etudiant/paiements` | Devis et échéancier + export PDF |
| `/app/etudiant/profil` | Profil, langue, sécurité, déconnexion |
| `/app/etudiant/profil/informations` | Édition des informations personnelles |

### Espace consultant (11)

| Route | Écran |
|---|---|
| `/app/consultant` | Aperçu : indicateurs + activités récentes |
| `/app/consultant/etudiants` | Portefeuille + recherche |
| `/app/consultant/etudiants/[id]` | Fiche étudiant — infos |
| `/app/consultant/etudiants/[id]/documents` | Revue des pièces (valider / refuser) |
| `/app/consultant/documents/[docId]` | Examen d'une pièce : aperçu, téléchargement, décision, reste du dossier |
| `/app/consultant/etudiants/[id]/timeline` | Timeline du dossier |
| `/app/consultant/etudiants/[id]/devis` | Devis du dossier |
| `/app/consultant/messages` | Messagerie tous dossiers |
| `/app/consultant/messages/nouveau` | Ouverture d'une conversation |
| `/app/consultant/messages/[id]` | Fil de discussion |
| `/app/consultant/universites` | Universités partenaires |
| `/app/consultant/agenda` | Agenda (échéances et rentrées, déduites des données) |
| `/app/consultant/parametres` | Paramètres consultant |

### Administration (8)

| Route | Écran |
|---|---|
| `/app/admin` | Tableau de bord + courbe des admissions |
| `/app/admin/etudiants` | Gestion des étudiants |
| `/app/admin/etudiants/[id]` | Fiche étudiant : coordonnées et dossiers |
| `/app/admin/consultants` | Gestion des consultants |
| `/app/admin/consultants/[id]` | Fiche consultant : coordonnées et portefeuille |
| `/app/admin/universites` | Universités |
| `/app/admin/dossiers` | Vue globale des dossiers |
| `/app/admin/tarification` | Grille tarifaire éditable + chiffre d'affaires |
| `/app/admin/parametres` | Paramètres généraux |
| `/app/admin/logs` | Journal d'audit |
| `/app/admin/utilisateurs` | Attribution des rôles |
| `/app/admin/dossiers/nouveau` | Ouverture d'un dossier |
| `/app/admin/dossiers/[id]` | Dossier : informations, pièces, frise, signature des étapes |
| `/app/admin/documents/[docId]` | Examen d'une pièce : aperçu, téléchargement, décision, reste du dossier |
| `/app/admin/messages` | Messagerie tous dossiers, tous canaux |
| `/app/admin/messages/nouveau` | Ouverture d'une conversation, canal université compris |
| `/app/admin/messages/[id]` | Fil de discussion |

---

## 3. Architecture du code

```
src/
  app/app/…                     routes Next.js (App Router)
  features/app/
    actions/                    server actions (auth, app, admin, préférences)
    data/                       session, requêtes, jeu de démonstration
    i18n/                       dictionnaires fr / en / ar / ru + résolution serveur
    types.ts                    modèle de vue (découplé des lignes SQL)
    ui/                         design system et composants partagés
    utils/format.ts             dates, montants, tailles de fichiers
  lib/supabase/                 clients navigateur / serveur / proxy, types de base
supabase/
  migrations/                   schéma, RLS, données de référence, privilèges
  README.md                     procédure d'installation
```

### Actions d'administration

| Action | Qui | Où |
|---|---|---|
| Changer le rôle d'un utilisateur | admin | `/app/admin/utilisateurs` |
| Ouvrir un dossier et sa frise d'étapes | admin | `/app/admin/dossiers/nouveau` |
| Émettre un devis et son échéancier | consultant assigné, admin | fiche étudiant → onglet Devis |
| Valider ou refuser une pièce | consultant assigné, admin | onglet Documents → ouvrir la pièce |
| Ouvrir une conversation | étudiant, consultant, admin | Messages → « Nouvelle conversation » |
| Ouvrir un fil avec une université | admin **seul** | `/app/admin/messages/nouveau` |

**Canal université.** Un étudiant ne s'adresse jamais directement à une
université, un consultant non plus : toute communication passe par
l'administration. La règle est portée par la RLS
(`conversations_insert`, `messages_insert` : `topic <> 'university' or is_admin()`),
la vérification applicative ne servant qu'à afficher un message utile. Étudiant
et consultant conservent la **lecture** de ces fils : rien de ce qui se dit sur
leur dossier ne leur est caché.
| Modifier la grille tarifaire | admin | `/app/admin/tarification` |

Chaque écriture est tracée dans `audit_logs` et reste soumise à la RLS : la
vérification applicative sert à afficher un message utile, pas à protéger.

Points d'entrée : **Dossiers** possède son onglet dans la barre de navigation de
l'administration, les tuiles du tableau de bord mènent à l'écran qu'elles
chiffrent, et un bloc « Actions rapides » ouvre directement la création d'un
dossier et l'attribution des rôles. Une action accessible mais introuvable
n'existe pas pour l'utilisateur.

### Chaîne de validation d'une étape

Une étape ne devient acquise qu'au terme de trois gestes, chacun porté par un
rôle différent :

| Geste | Qui | Où | Effet |
|---|---|---|---|
| Déclarer l'étape accomplie | étudiant | frise de son dossier, étape en cours | `requested_*` |
| Confirmer la déclaration | consultant assigné, admin | fiche étudiant → Timeline | `confirmed_*` |
| Signer | admin **seul** | `/app/admin/dossiers/[id]` | `validated_*`, étape `done`, étape suivante `current`, avancement recalculé |

L'administration **n'attend pas le consultant** : elle peut signer une étape
jamais déclarée ni confirmée. Un consultant absent, un dossier non assigné ou
une évidence constatée ailleurs ne doivent pas immobiliser un dossier. La
traçabilité ne perd rien — `confirmed_at` reste vide, on sait donc toujours si
une étape est passée par le consultant ou a été signée directement.

Les trois gestes passent par des fonctions SQL `security definer`
(`request_dossier_step`, `confirm_dossier_step`, `validate_dossier_step`) :
l'étudiant n'obtient jamais le droit d'`UPDATE` sur `dossier_steps`, il peut
seulement déposer une demande sur une étape de son propre dossier. Chaque
fonction refuse un geste hors séquence — on ne confirme pas une étape non
déclarée, on ne signe pas une étape non confirmée.

L'état est visible partout : la frise l'affiche à l'étudiant, et les tableaux
de bord du consultant et de l'administration ouvrent sur la liste de ce qui
attend une décision.

### Notifications

Produites **en base**, au plus près de l'événement : quel que soit le client qui
écrit, personne ne peut oublier de prévenir.

| Événement | Prévenu |
|---|---|
| L'étudiant déclare une étape faite | son consultant (l'administration si le dossier n'en a pas) |
| Le consultant confirme | l'étudiant, et l'administration à qui revient la signature |
| L'administration signe | l'étudiant et le consultant |
| Une pièce est validée ou refusée | l'étudiant |
| Un message est envoyé | les autres participants du dossier |

Le texte n'est pas stocké : `kind` est une clé traduite à l'affichage et `body`
porte son paramètre (clé d'étape, nom de pièce, nom d'expéditeur). Un étudiant
arabophone et son consultant francophone lisent le même événement, chacun dans
sa langue.

Chaque espace a son écran et sa cloche : `/app/etudiant/notifications`,
`/app/consultant/notifications`, `/app/admin/notifications`.

#### Alertes système (PWA + Web Push)

`/app` est installable : `public/app.webmanifest` (portée `/app`, affichage
`standalone`) et un jeu d'icônes le rendent ajoutable à l'écran d'accueil.

Le service worker `public/app-sw.js` ne met **délibérément rien en cache** :
`/app` est un espace authentifié, et une réponse mise en cache pourrait être
servie à un autre utilisateur du même appareil. Son unique rôle est d'afficher
la notification reçue et d'ouvrir le bon écran au clic.

Chaîne d'envoi :

```
insert into notifications
        ↓ déclencheur SQL (pg_net)
POST /api/app/push  ← en-tête X-Push-Secret
        ↓ web-push, signature VAPID
service worker → notification système
```

La base reste la seule source de vérité : tout ce qui crée une notification
déclenche l'alerte, sans que le code applicatif ait à y penser. Un abonnement
révoqué (410) ou introuvable (404) est supprimé au premier échec.

Mise en service : `node scripts/generate-vapid-keys.mjs`, puis reporter les
trois variables dans Vercel et les deux lignes dans `public.app_config`. Tant
que ce n'est pas fait, les notifications restent internes — c'est une
dégradation, pas une panne.

**iPhone** : le Web Push n'existe qu'à partir d'iOS 16.4 et **uniquement** si
l'utilisateur a ajouté l'application à son écran d'accueil. Depuis Safari,
aucun abonnement n'est possible ; l'écran l'annonce au lieu d'échouer en
silence.

### Navigation et prochaine action

Le retour d'écran suit le parcours réel : `NavDepthTracker` compte les pas
effectués dans `/app` pour l'onglet courant, `BackButton` appelle
`router.back()` tant qu'il reste un pas, et retombe sur la route canonique
sinon (lien profond, notification, onglet neuf). Une route figée renvoyait
l'utilisateur sur un écran qu'il n'avait jamais visité.

`resolveNextAction()` (`features/app/data/nextAction.ts`) détermine ce que
l'étudiant doit faire maintenant : déposer une pièce, régler une échéance, ou
rien — et l'accueil le dit alors franchement plutôt que d'afficher un bouton
sans effet. Seules les actions réellement réalisables dans l'application sont
proposées.

Chaque composant a une responsabilité unique et les écrans partagent leurs
briques : `DossierInfoCard`, `Timeline`, `QuoteCard`, `ConversationList`,
`MessageThread`, `UniversityList`, `PeopleList`, `MonthCalendar` servent à la
fois l'espace étudiant, consultant et l'administration.

---

## 4. Sécurité

| Couche | Rôle |
|---|---|
| `src/proxy.ts` | rafraîchit la session Supabase sur `/app/*` et redirige vers la connexion |
| Layouts d'espace | `requireRole()` : un utilisateur au mauvais endroit est renvoyé vers son propre espace |
| Privilèges (`GRANT`) | `authenticated` accède aux tables, `anon` n'a aucun droit |
| RLS PostgreSQL | autorité finale : étudiant → ses données, consultant → ses dossiers assignés, admin → tout |

Vérifié sur la base réelle avec deux sessions distinctes : un étudiant lit son
dossier mais pas celui d'un autre, ne peut pas modifier son propre dossier
(écriture réservée au consultant), peut modifier son nom, et se voit refuser
toute tentative de passage au rôle `admin` (`role_change_forbidden`).

Le rôle n'est jamais modifiable par l'utilisateur (trigger `profiles_guard_role`).
Le bucket `documents` est privé : les fichiers sont rangés sous
`<dossier_id>/…` et servis par URL signée à durée de vie courte.

---

## 5. Multilingue et accessibilité

- Dictionnaire complet **fr / en / ar / ru** (`src/features/app/i18n/`), typé sur
  le fichier français : toute clé oubliée dans une traduction est une erreur
  TypeScript.
- Langue mémorisée par cookie et reportée sur le profil.
- Arabe : `dir="rtl"` sur `<html>`, mise en page entièrement en propriétés
  logiques (`inset-inline`, `ps/pe`, `text-start`), chevrons et flèches inversés.
- Cibles tactiles ≥ 44 px, libellés associés à chaque champ, `aria-current` sur
  la navigation, statuts annoncés en texte (jamais par la couleur seule),
  `prefers-reduced-motion` respecté.

---

## 6. Performance

- Rendu serveur ; le JavaScript client se limite aux composants réellement
  interactifs (formulaires, dépôt de fichier, navigation basse, sélecteur de
  langue).
- **Session mémorisée pour la durée du rendu** (`cache()` de React). Chaque
  layout traversé et la page appelaient `requireRole`, soit deux allers-retours
  vers Supabase à chaque fois — jusqu'à six sur une fiche imbriquée. Ils n'en
  font plus qu'un.
- **Ossature de chargement** (`loading.tsx`) dans les trois espaces : les pages
  étant rendues à la demande, la navigation restait figée sur l'écran précédent
  le temps des requêtes. Elle répond désormais immédiatement.
- Lectures indépendantes groupées en `Promise.all` plutôt qu'enchaînées, dans
  les tableaux de bord et l'hydratation des dossiers.
- Filtres et onglets pilotés par l'URL : aucun état client à hydrater.
- Graphiques en SVG inline, sans librairie.
- Aucune police web supplémentaire : la plateforme utilise la pile système.

---

## 7. Mise en service

1. Créer le projet Supabase et appliquer les migrations (voir `supabase/README.md`).
2. Renseigner `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans
   Vercel (et `.env.local` en développement).
3. Promouvoir le premier administrateur :
   `update public.profiles set role = 'admin' where email = '…';`
4. Renseigner les URLs de redirection dans **Authentication → URL Configuration**.

Tant que l'étape 2 n'est pas faite, `/app` reste en mode démonstration.
