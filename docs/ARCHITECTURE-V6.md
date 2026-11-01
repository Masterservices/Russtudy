# RusStudy / RussieEtudes.com — Architecture SEO V6

**Statut :** proposition à valider — aucun code de production modifié.
**Périmètre :** analyse de l'existant, architecture cible, stratégie SEO, roadmap V6.
**Contrainte respectée :** design, animations, formulaires et contenu actuels intacts.

---

## 1. Résumé exécutif

Le site actuel est une **landing page unique** (one-pager), techniquement saine mais
structurellement incapable de porter la stratégie SEO multi-pages décrite dans
`CLAUDE.md` (Universités, Filières, Villes, Visa, Blog, Guides, FAQ, Témoignages,
Comparatif...). Ce n'est pas un problème de qualité de code : c'est une limite
d'architecture (SPA 100% client, une seule URL indexable).

Ce document :
1. dresse l'état des lieux technique réel du dépôt,
2. identifie le verrou technique principal (rendu) à lever avant toute création de pages,
3. propose une architecture de dossiers, d'URLs et de composants SEO réutilisables,
4. propose une stratégie de contenu (mots-clés, clusters, plan éditorial),
5. prépare (sans les développer) les points d'extension pour dashboards, blog,
   communauté, IA, mobile, API, authentification,
6. propose une roadmap V6 séquencée par risque croissant.

**Aucune implémentation n'est faite dans ce rapport.** C'est le plan à valider avant
la phase de construction.

---

## 2. Analyse de l'existant

### 2.1 Stack réelle (vérifiée dans le dépôt)

| Domaine | Constat |
|---|---|
| Bundler | Vite 6 + `@vitejs/plugin-react` |
| UI | React 19, Tailwind 4, `motion` (Framer Motion) |
| Routing | **Aucun** — pas de `react-router`, pas de fichier de routes |
| Pages | **Une seule** : `src/App.tsx` (957 lignes), sections ancrées (`#hero`, `#pourquoi`, `#processus`, `#programmes`, `#simulateur`, `#candidat`, `#temoignages`, `#rendezvous`, `#faq`, `#comparatif`, `#contact`) |
| i18n | Dictionnaire maison dans `src/i18n.ts` (fr/en/ar/ru, 2311 lignes), langue stockée en `localStorage`, **pas dans l'URL** |
| SEO | Meta/OG/Twitter/Schema.org codés en dur dans `index.html`, identiques pour toutes les routes (il n'y en a qu'une) |
| Sitemap | `public/sitemap.xml` statique, 2 URLs |
| robots.txt | valide, minimal |
| Rendu | 100% client-side (CSR) — aucun HTML pré-rendu par page |
| Hébergement cible | Vercel (contrainte CLAUDE.md) |

### 2.2 Ce que cela implique pour le SEO

- Un moteur de recherche ne peut indexer qu'**une seule page** avec un seul jeu de
  meta/canonical/schema. Créer 40 pages "Université X" en tant que sections d'un
  même `App.tsx` ne produirait **aucun gain SEO** : même URL, même `<title>`, même
  `<meta description>` pour tout le monde.
- Le changement de langue étant piloté par `localStorage` + JS, **Google ne voit
  jamais les versions EN/AR/RU** : il n'y a ni `hreflang`, ni URL par langue. Le
  `og:locale:alternate` présent dans `index.html` est cosmétique, il ne remplace
  pas un vrai balisage `hreflang`.
- Le sitemap ne peut pas devenir "dynamique" tant qu'il n'y a pas de source de
  vérité (fichiers de contenu ou CMS) à partir de laquelle le générer.

**Conclusion :** avant de "préparer des dizaines de pages", il faut lever un
verrou technique unique : **passer d'un rendu 100% client à un rendu qui produit
du HTML statique par URL** (SSG/SSR). C'est la seule décision structurante de ce
rapport ; tout le reste (dossiers, composants SEO, contenu) en découle et reste
valable quelle que soit l'option choisie.

### 2.3 Décision technique à valider (Option A recommandée)

| | **Option A — Next.js (App Router)** | **Option B — Vite + SSG additif** |
|---|---|---|
| Principe | Migration du renderer vers Next.js, React 19 conservé, composants existants portés tels quels | Ajout de `react-router` + un plugin de pré-rendu (ex. `vite-react-ssg`) par-dessus le Vite actuel |
| `generateMetadata()`, `sitemap.ts`, `robots.ts` natifs | Oui, standard du framework | À reconstruire à la main |
| Effort de migration | Moyen (portage de `App.tsx` en pages + layout) | Faible (le stack actuel bouge peu) |
| Robustesse long terme (des dizaines/centaines de pages, ISR, ce que demande CLAUDE.md) | Élevée — c'est l'usage prévu du framework | Moyenne — solution assemblée à la main, plus de maintenance |
| Compatibilité Vercel | Native (Next.js est édité par Vercel) | Compatible mais sans les optimisations dédiées |
| Risque sur design/animations/formulaires existants | Faible si migration section par section, avec vérification visuelle à chaque étape | Très faible (changement minimal du build) |

**Recommandation : Option A**, pour la robustesse à 2-3 ans exigée par CLAUDE.md
("le projet doit pouvoir évoluer pendant plusieurs années"). Option B reste une
alternative de repli si une contrainte non documentée l'impose.

**Décision validée (2026-07-08) : Option A — Next.js App Router.** La phase
V6.1 (migration du rendu) sera menée sur cette base. Le reste de ce rapport
(dossiers, contrats d'interface SEO, stratégie de contenu) s'applique aux deux
options et n'a pas besoin d'être retouché suite à cette décision.

---

## 3. Architecture de dossiers cible (V6)

```
src/
├── app/                        # Next.js App Router (Option A) — routes = dossiers
│   ├── (site)/
│   │   ├── page.tsx                        → /            (page d'accueil, contenu actuel)
│   │   ├── universites/
│   │   │   ├── page.tsx                    → /universites             (index)
│   │   │   └── [slug]/page.tsx             → /universites/:slug       (fiche université)
│   │   ├── filieres/
│   │   │   ├── page.tsx                    → /filieres
│   │   │   └── [slug]/page.tsx             → /filieres/:slug
│   │   ├── villes/
│   │   │   ├── page.tsx                    → /villes
│   │   │   └── [slug]/page.tsx             → /villes/:slug
│   │   ├── visa/
│   │   │   ├── page.tsx                    → /visa
│   │   │   └── [slug]/page.tsx             → /visa/:slug
│   │   ├── programmes/                     # ex. "PadFac" et autres offres RusStudy
│   │   │   └── [slug]/page.tsx             → /programmes/:slug
│   │   ├── blog/
│   │   │   ├── page.tsx                    → /blog
│   │   │   └── [slug]/page.tsx             → /blog/:slug
│   │   ├── guides/
│   │   │   ├── page.tsx                    → /guides
│   │   │   └── [slug]/page.tsx             → /guides/:slug
│   │   ├── temoignages/
│   │   │   ├── page.tsx                    → /temoignages
│   │   │   └── [slug]/page.tsx             → /temoignages/:slug
│   │   ├── comparatif/
│   │   │   ├── page.tsx                    → /comparatif
│   │   │   └── [slug]/page.tsx             → /comparatif/:slug        (ex: russie-vs-france)
│   │   └── faq/page.tsx                    → /faq
│   ├── sitemap.ts                          # génération dynamique à partir de /content
│   └── robots.ts
│
├── components/          # composants UI purs, réutilisés (existant : BudgetSimulator, etc.)
├── layouts/              # PageLayout, SectionLayout, DashboardLayout (réservé, non développé)
├── pages-templates/      # 1 template par TYPE de page (voir §4) — zéro duplication
│   ├── UniversityPageTemplate.tsx
│   ├── CityPageTemplate.tsx
│   ├── ProgramPageTemplate.tsx
│   ├── VisaPageTemplate.tsx
│   ├── BlogPostTemplate.tsx
│   ├── GuidePageTemplate.tsx
│   ├── TestimonialPageTemplate.tsx
│   └── ComparisonPageTemplate.tsx
├── content/              # source de vérité du contenu (fichiers structurés, pas de duplication)
│   ├── universites/*.json|.mdx
│   ├── filieres/*.json|.mdx
│   ├── villes/*.json|.mdx
│   ├── visa/*.mdx
│   ├── blog/*.mdx
│   ├── guides/*.mdx
│   └── temoignages/*.json
├── seo/                  # cœur du système SEO automatique (voir §5)
│   ├── meta.ts                 # generatePageMeta()
│   ├── canonical.ts             # buildCanonicalUrl()
│   ├── opengraph.ts             # buildOpenGraph()
│   ├── schema/
│   │   ├── organization.ts
│   │   ├── educationalOrganization.ts
│   │   ├── article.ts           # Blog / Guides
│   │   ├── faqPage.ts
│   │   ├── breadcrumbList.ts
│   │   ├── course.ts            # Filières
│   │   └── place.ts             # Villes
│   ├── breadcrumb.ts            # buildBreadcrumb(pathname)
│   └── sitemap.ts               # collectAllRoutes() → sitemap.ts / sitemap.xml
├── hooks/                # hooks partagés (ex: useLangSwitch, useBreadcrumb)
├── services/             # accès données (lecture /content, futur CMS/API)
├── utils/
├── constants/            # KEYWORDS, PAGE_TYPES, LOCALES
├── types/
│   ├── seo.ts                   # PageSEO, SchemaType, BreadcrumbItem
│   └── content.ts               # University, Program, City, Article, Testimonial...
├── schemas/              # validation de contenu (zod) par type de page
├── config/
│   ├── site.ts                  # domaine, réseaux, coordonnées (source unique)
│   └── routes.ts                # registre central des types de page → slugs
├── locales/              # fr.json / en.json / ar.json / ru.json (remplace i18n.ts à terme)
├── assets/ images/ icons/       # inchangés

_reserve/ (architecture préparée, non développée — voir §7)
├── dashboard-etudiant/
├── dashboard-consultant/
├── dashboard-admin/
├── communaute/
├── assistant-ia/
├── api/
└── auth/
```

**Principe clé (zéro duplication) :** un type de page = **un template**, alimenté
par un fichier de contenu structuré. Ajouter une université = ajouter un fichier
dans `content/universites/`, pas un composant. Le template gère automatiquement
meta, canonical, OG, schema.org et breadcrumb via le module `seo/`.

---

## 4. Structure des URLs

Toutes les URLs en minuscule, sans accent, mots séparés par `-`, précédées de la
langue pour permettre un vrai `hreflang` (actuellement absent) :

```
/                                    → accueil (langue par défaut détectée)
/en/, /ar/, /ru/                     → accueil traduit
/{lang}/universites                              → index universités
/{lang}/universites/universite-de-medecine-kazan → fiche université
/{lang}/filieres                                 → index filières
/{lang}/filieres/medecine-generale               → fiche filière
/{lang}/villes                                   → index villes
/{lang}/villes/moscou                            → fiche ville
/{lang}/visa                                      → guide visa général
/{lang}/visa/lettre-invitation                    → sous-page visa
/{lang}/programmes/{slug}                         → pages produit RusStudy (ex. PadFac)
/{lang}/blog                                      → index blog
/{lang}/blog/{slug}                               → article
/{lang}/guides/{slug}                             → guide pratique
/{lang}/temoignages/{slug}                        → témoignage détaillé
/{lang}/comparatif/{slug}                         → ex. russie-vs-france-medecine
/{lang}/faq                                       → FAQ complète
```

Chaque URL doit avoir un **canonical auto** vers elle-même (langue incluse), et
un jeu de balises `hreflang` réciproques vers les 3 autres langues + `x-default`.

> Note : le libellé exact et le contenu de "PadFac" ne sont pas définis dans les
> instructions reçues — structure prévue sous `/programmes/{slug}`, à confirmer
> avant création du premier contenu.

---

## 5. Système SEO automatique

Objectif : qu'un rédacteur ajoute une page **sans toucher au code**, en remplissant
un fichier de contenu conforme à un schéma TypeScript/zod. Le reste est généré.

### 5.1 Contrat de données commun (`types/seo.ts`)

```ts
export type SchemaType =
  | 'EducationalOrganization' | 'Course' | 'Place'
  | 'Article' | 'FAQPage' | 'BreadcrumbList' | 'Product';

export interface PageSEO {
  slug: string;
  lang: 'fr' | 'en' | 'ar' | 'ru';
  title: string;              // 50-60 caractères, unique
  description: string;        // 140-160 caractères, unique
  h1: string;                 // unique, distinct du title
  keywords?: string[];
  ogImage?: string;
  schemaType: SchemaType;
  updatedAt: string;
  noindex?: boolean;
}
```

### 5.2 Génération automatique par page

- **Meta automatiques** : `generatePageMeta(pageSEO)` produit `<title>`,
  `<meta description>`, `<meta robots>` à partir du contrat ci-dessus — jamais
  écrits à la main dans une page.
- **Canonical automatique** : `buildCanonicalUrl(lang, path)` → toujours
  `https://russieetudes.com/{lang}/{path}`, dérivé de la route, jamais codé en dur.
- **OpenGraph automatique** : `buildOpenGraph(pageSEO)` réutilise title/description/
  image + ajoute `og:locale` et `og:locale:alternate` pour les 3 autres langues.
- **Schema.org par type de page** : un générateur par `schemaType` (fichiers dans
  `seo/schema/`) :
  - Université → `EducationalOrganization` (+ `department` si filière liée)
  - Filière → `Course`
  - Ville → `Place`
  - Blog / Guide → `Article` + `BreadcrumbList`
  - FAQ → `FAQPage` (le contenu FAQ actuel d'`index.html` devient la première
    instance générée par ce module, sans changement de contenu)
- **Breadcrumb automatique** : `buildBreadcrumb(pathname)` déduit le fil d'Ariane
  du chemin de route (`Accueil > Universités > Université de Médecine de Kazan`)
  et produit à la fois le composant visuel et le JSON-LD `BreadcrumbList`
  correspondant, à partir de la même source.
- **Sitemap dynamique** : `sitemap.ts` (Next.js) parcourt `content/**` +
  `config/routes.ts` à chaque build/ISR et régénère `sitemap.xml` automatiquement
  — plus jamais édité à la main. Un nouveau fichier de contenu = une nouvelle
  entrée de sitemap, sans action supplémentaire.

### 5.3 Ce qui ne change pas

Le schema.org `EducationalOrganization` global, le `FAQPage` et le `WebSite`
déjà présents dans `index.html` sont **repris tels quels** comme premiers jeux
de données migrés vers ce système — aucune perte, aucune régression de contenu.

---

## 6. Stratégie de contenu SEO

### 6.1 Mots-clés principaux (page d'accueil / marque)

`étudier en Russie`, `université russe Tunisie`, `médecine en Russie`,
`RusStudy`, `russieetudes`, `études en Russie pas cher`, `bourse Russie Tunisie`.

### 6.2 Clusters SEO (1 cluster = 1 type de page + variantes longue traîne)

| Cluster | Page pilier | Exemples longue traîne |
|---|---|---|
| Médecine en Russie | `/filieres/medecine-generale` | "médecine Russie prix", "diplôme médecine russe reconnu Tunisie", "meilleure université médecine Russie" |
| Ingénierie & Pharmacie | `/filieres/*` | "ingénierie Russie université", "études pharmacie Russie" |
| Villes étudiantes | `/villes/moscou`, `/villes/saint-petersbourg`, `/villes/kazan` | "vie étudiante Moscou", "coût de la vie étudiant Kazan" |
| Visa & admission | `/visa`, `/visa/lettre-invitation` | "visa étudiant Russie tunisien", "délai lettre invitation Russie" |
| Bourses & budget | `/guides/bourse-etat-russe` | "bourse d'état russe tunisien", "budget étudier en Russie" |
| Comparatif pays | `/comparatif/russie-vs-france-medecine` | "étudier médecine Russie ou France", "Russie vs Roumanie médecine" |
| Preuve sociale | `/temoignages/*` | "avis étudiants tunisiens Russie", "témoignage RusStudy" |
| Guides pratiques | `/guides/*` | "comment s'inscrire université russe", "documents inscription Russie" |

Chaque page pilier doit lier vers ses pages satellites (maillage interne),
et chaque satellite doit lier vers son pilier + 2-3 pages du même cluster.

### 6.3 Plan éditorial (indicatif, 2 pages/semaine soutenables)

| Phase | Contenu | Volume |
|---|---|---|
| Mois 1 | 3 villes (Moscou, Saint-Pétersbourg, Kazan) + page Visa générale | 4 pages |
| Mois 2 | 5 filières (Médecine générale, Dentaire, Pharmacie, Ingénierie, Business) | 5 pages |
| Mois 3 | 5 universités phares (une par ville/filière forte) | 5 pages |
| Mois 4 | 4 guides pratiques (dossier, bourse, logement, préparatoire linguistique) | 4 pages |
| Mois 5 | 3 comparatifs (vs France, vs Roumanie, vs Ukraine) + 4 témoignages détaillés | 7 pages |
| Mois 6 | Lancement blog (actualités visa, rentrée, vie étudiante) — 2 articles/mois en continu | ~2/mois |

---

## 7. Architecture d'intégration future (préparée, non développée)

Conformément à la consigne, **rien n'est codé** pour ces modules — seuls les
emplacements et contrats d'interface sont réservés pour ne pas bloquer V6+ :

| Module | Emplacement réservé | Contrat d'interface prévu |
|---|---|---|
| Dashboard étudiant | `src/app/(dashboard)/etudiant/` | consomme `services/student.ts` (à créer plus tard) |
| Dashboard consultant | `src/app/(dashboard)/consultant/` | consomme `services/consultant.ts` |
| Dashboard admin | `src/app/(dashboard)/admin/` | consomme `services/admin.ts` |
| Blog (CMS futur) | `content/blog/` déjà en place | migrable vers un headless CMS sans changer les templates |
| Communauté | `src/app/(community)/` | dépend de l'auth (ci-dessous) |
| Assistant IA | `src/services/ai/` | wrapper autour de `@google/genai` déjà présent en dépendance |
| Applications mobiles | aucun impact — API REST/JSON à exposer séparément le moment venu | `src/app/api/` (Next.js Route Handlers) |
| API | `src/app/api/` | REST ou tRPC, à trancher lors du chantier dashboards |
| Authentification | `src/services/auth.ts` (réservé) | NextAuth/Auth.js recommandé si Option A retenue |

Ces dossiers ne seront créés qu'au moment de développer la fonctionnalité
correspondante — ils sont uniquement documentés ici pour que l'architecture des
pages SEO (§3) n'ait pas à être retouchée quand ces modules arriveront.

---

## 8. Recommandations techniques transverses

- **i18n dans l'URL** : faire évoluer `src/i18n.ts` vers des fichiers
  `locales/{lang}.json` chargés selon le segment `[lang]` de la route — la
  détection automatique et la mémorisation du choix (déjà présentes) sont
  conservées, seule la source de vérité de la langue change (route au lieu du
  seul `localStorage`).
- **Performance** : conserver le lazy-loading déjà en place (`TunnelCanvas`,
  `ProgramBgCanvas`, `FooterGridCanvas` sont déjà en `lazy()` — bonne pratique
  existante à généraliser aux nouveaux templates de page).
- **Accessibilité** : chaque nouveau template doit conserver un `H1` unique et
  une hiérarchie de titres cohérente (exigence déjà dans CLAUDE.md).
- **Qualité avant commit** : `tsc --noEmit` (déjà le script `lint` du projet) +
  vérification build Vite/Next à chaque nouvelle page type.
- **Vercel** : les deux options (Next.js ou Vite+SSG) restent déployables sans
  changement d'hébergeur.

---

## 9. Points à valider avant implémentation

1. ~~**Choix Option A vs B** (§2.3)~~ — **validé : Next.js App Router** (§2.3).
2. **Contenu réel de "PadFac"** — nom, positionnement, non trouvé dans le code
   existant.
3. **Source du contenu** — fichiers `.mdx`/JSON versionnés dans le dépôt (proposé
   ici) ou CMS headless externe dès le départ ?
4. **Stratégie i18n** — accepter le changement d'URL par langue (nécessaire pour
   un vrai `hreflang`) ou conserver `localStorage` (au prix du SEO multilingue) ?

---

## 10. Roadmap V6 détaillée

| Phase | Contenu | Risque | Impact production |
|---|---|---|---|
| **V6.0 — Fondations** | Valider Option A/B, poser `seo/`, `types/`, `config/routes.ts`, `content/` (vides ou avec données migrées d'`index.html`) | Faible | Aucun (additif) |
| **V6.1 — Migration du rendu** | Porter `App.tsx` en page d'accueil du nouveau système, sans changer une ligne de design/animation/formulaire | Moyen | Nécessite recette visuelle complète avant bascule |
| **V6.2 — i18n dans l'URL** | Passage `localStorage` → segment `[lang]`, ajout `hreflang` | Moyen | Redirection 301 des anciennes habitudes d'URL si besoin |
| **V6.3 — Premiers clusters** | Villes + Visa + Filières (mois 1-2 du plan éditorial) | Faible | Additif pur |
| **V6.4 — Universités + Comparatif + Témoignages** | Suite du plan éditorial | Faible | Additif pur |
| **V6.5 — Blog + Guides** | Ouverture du blog, cadence éditoriale continue | Faible | Additif pur |
| **V6.6 — Préparation V7** | Création des dossiers réservés (§7) sans code fonctionnel, pour cadrer le chantier dashboards/API/auth | Nul | Aucun |

---

## 11. Ce que ce rapport ne fait pas

- Ne crée aucune page, aucun contenu, aucun composant.
- Ne modifie ni design, ni animations, ni formulaires, ni contenu existant.
- Ne développe aucune des fonctionnalités listées en §7.
- Ne tranche pas seul la décision d'Option A/B (§2.3) : c'est un choix produit/
  technique qui doit être validé explicitement avant tout code.
