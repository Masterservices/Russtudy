# Rapport de nuit — 29 octobre

Deux demandes : rectifier le SEO du site, et faire le maximum de cours
animés **en définissant la manière de les faire**, pour que ça devienne
systématique. Les deux sont faites. Tout est poussé sur
`claude/photos-webgl-seo-9by1n2`, en cinq commits.

---

## À regarder en premier

**Les six cours animés, sur ton téléphone :**
https://claude.ai/artifact/3WqFYBMGsgLX75Gaxy3zJS

Un menu, six cours. Quatre ont la voix ; les deux cours de français
pour russophones attendent encore la leur — leurs chapitres défilent
seuls et le bouton de lecture s'efface plutôt que de ne rien faire.

Mets des écouteurs. Tourne le téléphone aussi : la mise en page est
différente, et c'est voulu.

---

## 1. Les cours animés sont devenus un système

Le prototype de phonétique était une pièce unique : sa coquille, son
moteur et sa leçon ne se séparaient pas. Il en sort maintenant trois
choses distinctes, et **une seule se réécrit pour un nouveau cours**.

| Pièce | Où | Ce que c'est |
|---|---|---|
| Le noyau | `public/cours-anime/noyau/` | identique pour tous les cours |
| Les scènes | `public/cours-anime/scenes/` | une idée visuelle par module |
| Les données | `supabase/seed/lessons/*/mise-en-scene.json` | la seule chose écrite à la main |

Le texte des leçons n'est **jamais recopié** : il vient du `lesson.json`
déjà servi par la plateforme. Si une leçon change en base, on régénère
et le cours animé suit.

```bash
node scripts/cours-anime/generer.mjs            # toutes les leçons
node scripts/cours-anime/generer.mjs russe-a1/salutations
```

La méthode complète est écrite dans **`docs/COURS-ANIME.md`** : ce qu'est
une scène, le contrat qu'un nouveau module doit tenir, et les règles qui
ne se renégocient pas.

### Les cinq scènes

Une scène, c'est **une idée, pas un effet**.

- **bouche** — une coupe sagittale qui s'articule pour chaque son : la
  langue avance, les lèvres s'arrondissent, l'air se partage entre la
  bouche et le nez quand la voyelle est nasale.
- **alphabet** — trente-trois lettres qui ne disparaissent jamais et se
  réorganisent : nuage, onde, anneau, mots.
- **carte** — une conversation comme un chemin à deux voies, polie et
  familière. **Elle sert deux leçons**, le russe pour des Tunisiens et
  le français pour des russophones : c'est la preuve que le système
  tient.
- **cadran** — un cadran porte les nombres, l'aiguille désigne celui
  qu'on prononce, puis une seconde aiguille paraît et il lit l'heure.
- **grille** — le tableau des six articles se construit case par case,
  et chaque exemple vient se ranger dans la sienne.

### Dans la plateforme

La page d'une leçon affiche un bouton **« Cours animé »** quand il en
existe un. Le moteur n'est chargé qu'au clic : lire la leçon en
diaporama ne paie ni les 600 Ko de Three.js, ni les polices
cyrilliques. La narration passe par les URL signées de la plateforme —
l'accès aux leçons réservées n'est pas contourné.

### Deux pièges trouvés en vérifiant au navigateur

La feuille de style du cours impose `position: relative` à son hôte :
un calage par `inset-0` ne s'appliquait donc plus et le conteneur
faisait **zéro pixel de haut**. La taille vient maintenant d'un style en
ligne, et le voile plein écran aussi, pour ne pas dépendre de l'ordre
des feuilles. Sans un vrai navigateur, ça passait la compilation sans
rien afficher.

---

## 2. SEO

### Ce qui manquait vraiment : l'espace e-learning

C'était la partie la moins bien dotée du site. Un parcours partagé sur
WhatsApp s'affichait nu, et Google n'avait aucun moyen de reconnaître
un cours.

- **OpenGraph et Twitter Card** sur le catalogue, les parcours et les
  leçons d'essai.
- **Données structurées** : `Course` sur un parcours, `LearningResource`
  sur une leçon d'essai. Tout ce qui y est balisé est écrit sur la page
  — niveau, durée, modules du programme. Aucune note, aucun avis, aucun
  prix : la règle du projet est tenue.
- Les **pages de parcours** manquaient au sitemap.

### Le reste

- **Sitemap multilingue** : chaque page y déclare ses quatre versions
  (`xhtml:link`), ce que seules les balises des pages faisaient.
- **La visite immersive 3D** — liée depuis l'en-tête et le pied de page
  de tout le site — vivait sous `/immersion.html`, absente du sitemap.
  URL propre `/immersion`, 301 depuis l'ancienne, entrée au sitemap.
  Vérifié : pas de boucle, la page se sert toujours.
- **robots.txt** : `Disallow: /app` bloquait par préfixe *tout* chemin
  commençant par « app ». Remplacé par `/app/` et `/app$`.

### Titres et descriptions

Sur 430 pages, **250 avaient un titre ou une description trop longs**
pour les résultats de recherche. Deux règles, au même endroit, en
ramènent la moitié à la bonne taille **sans toucher au contenu** :

- un titre déjà trop long perd sa marque plutôt que sa fin ;
- une description trop longue s'arrête à la fin d'une phrase plutôt
  qu'en plein mot. Si aucune fin de phrase ne tombe au bon endroit,
  rien n'est touché.

La page d'accueil, elle, est réécrite : 75 caractères de titre et 196 de
description, désormais 57 et 153.

**Il reste 96 titres et 92 descriptions trop longs** — surtout des
articles de blog et des fiches d'université. Ceux-là demandent une
réécriture éditoriale, langue par langue : je ne l'ai pas faite seul,
c'est du texte que tu as voulu tel quel.

---

## 3. Vérifications

- `npx tsc --noEmit` : 0 erreur
- `npm run lint` : 0 erreur (8 avertissements `<img>`, antérieurs)
- `npx next build` : succès
- **430 pages servies, toutes en 200** (parcours complet du sitemap)
- Cours animés : capturés au navigateur en portrait, en paysage et sur
  tablette, pour les cinq scènes

---

## 4. Ce qui reste, et une question

**La voix des deux cours de français.** `saluer-se-presenter` et
`articles-et-genre` n'ont pas de narration. Je ne l'ai pas générée
cette nuit pour une raison précise : `scripts/elearning/README.md` dit
que la phonétique française a été produite avec *Paul K*, une voix
**masculine** — mais tu m'as écrit que la voix entendue est féminine.
Je ne peux pas écouter les fichiers pour trancher, et générer 28
narrations avec la mauvaise voix donnerait deux timbres différents dans
le même cours, en brûlant des crédits.

**Dis-moi quelle voix est la bonne** et je lance les 28 narrations ;
tout le reste est prêt à les recevoir, il suffit de régénérer.

**Autre chose, en attente depuis plus longtemps** : la protection contre
les mots de passe divulgués, à activer dans le tableau de bord Supabase
(Authentication → Policies). Ça ne se fait pas en SQL.
