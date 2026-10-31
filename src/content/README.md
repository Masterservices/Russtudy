# src/content — source de vérité du contenu (V6)

**Statut : fondation V6.0.** Ces fichiers ne sont pas encore consommés par le
site en production (`App.tsx` / `index.html` restent la source active tant que
la migration V6.1 — voir `docs/ARCHITECTURE-V6.md` — n'est pas faite). Ils
préparent la structure pour que chaque nouvelle page soit un fichier de
contenu, jamais un composant dupliqué.

## Contenu déjà réel (migré depuis `index.html`, aucune donnée inventée)

- `faq/faq.json` — les 6 questions/réponses déjà publiées (`FAQPage` actuel).
- `blog/copy.ts` + `blog/registry.ts` — premier article publié (`/blog/orientation-universitaire-tunisie-2026`),
  routé et indexé au même titre que les autres sections de contenu (voir `src/app/[[...lang]]/`).

## Dossiers réservés (types définis dans `src/types/content.ts`)

Ces dossiers sont vides intentionnellement : aucune donnée n'existe encore
côté produit (noms d'universités, tarifs, témoignages réels...). Les remplir
avec des exemples fictifs créerait de fausses informations publiables — ils
seront alimentés avec les vraies données au moment de la rédaction (voir plan
éditorial, §6.3 du rapport d'architecture) :

| Dossier | Type TS correspondant | Généré par |
|---|---|---|
| `universites/` | `University` | `seo/schema/educationalOrganization.ts` |
| `filieres/` | `Program` | `seo/schema/course.ts` |
| `villes/` | `City` | `seo/schema/place.ts` |
| `visa/` | `VisaGuide` | `seo/schema/article.ts` |
| `programmes/` | — (pages produit, ex. PadFac — à cadrer) | `seo/schema/course.ts` ou dédié |
| `guides/` | `Article` | `seo/schema/article.ts` |
| `temoignages/` | `Testimonial` | — |
| `comparatif/` | `Comparison` | `seo/schema/article.ts` |

Chaque fichier de contenu doit respecter l'interface `PageSEO` (voir
`src/types/seo.ts`) en plus des champs propres à son type.
