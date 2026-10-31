# Cours animés

Un cours animé est une leçon dont chaque chapitre règle **un seul objet
en trois dimensions**. Pas une suite de diapositives : un objet qui ne
disparaît jamais et que la leçon transforme — une coupe de la bouche
qui s'articule, un alphabet qui se réorganise, un cadran qui se met à
lire l'heure.

Tout tient en trois pièces séparées, et une seule se réécrit à chaque
nouveau cours.

```
public/cours-anime/
  noyau/      le moteur, identique pour tous les cours
  scenes/     un module par idée visuelle  (bouche, alphabet, carte…)
  lecons/     données générées — ne pas modifier à la main
  apercu.html banc d'essai hors plateforme

supabase/seed/lessons/<cours>/<lecon>/
  lesson.json         la leçon, déjà servie par la plateforme
  mise-en-scene.json  la seule chose écrite à la main

scripts/cours-anime/generer.mjs   assemble les deux
```

---

## Ajouter un cours : la marche à suivre

### 1. La leçon existe déjà

`lesson.json` porte les titres, les points de chaque diapositive, la
narration, sa traduction et le nom du fichier audio. **Rien de tout
cela ne se recopie.** Si la leçon change en base, on régénère et le
cours animé suit.

### 2. Choisir une scène

Une scène, c'est **une idée, pas un effet**. Avant d'en écrire une
nouvelle, demander : qu'est-ce que cette leçon montre, au fond ?

| Scène      | L'idée                                               | Utilisée par |
|------------|------------------------------------------------------|--------------|
| `bouche`   | une coupe sagittale qui s'articule pour chaque son     | sons-du-francais |
| `alphabet` | un alphabet qui se réorganise sans jamais disparaître  | alphabet-cyrillique |
| `carte`    | une conversation comme un chemin, à deux voies         | salutations, saluer-se-presenter |
| `cadran`   | un cadran qui compte, puis lit l'heure                 | chiffres-et-heure |
| `grille`   | un tableau qui se construit case par case              | articles-et-genre |

Une scène existante qui convient vaut mieux qu'une scène de plus : la
carte sert deux leçons, dans deux langues et deux sens.

### 3. Écrire `mise-en-scene.json`

À côté du `lesson.json`, dans le même dossier :

```jsonc
{
  "scene": "carte",            // le module de public/cours-anime/scenes
  "ui": "fr",                  // langue de l'interface du parcours
  "langueNarration": "ru",     // langue de la voix, pour les sous-titres
  "config": { },               // posé une fois, à la création de la scène
  "intro": {
    "meta": "RusStudy · Russe A1 · 13 minutes",
    "titre": "Saluer et <em>se présenter</em>",
    "texte": "…",
    "bouton": "Commencer →",
    "note": "Écouteurs recommandés"
  },
  "chapitres": [
    {
      "sur": "Registre poli",        // surtitre, éditorial
      "teinte": "#2460E8",           // facultatif : sinon la palette tourne
      "params": { },                 // ce que ce chapitre règle dans la scène
      "focus": { "ancre": "levres", "texte": "ГУБЫ" },
      "jetons": [
        { "t": "ЗДРАВСТВУЙТЕ", "s": "bonjour", "souffle": "/y/",
          "params": { } }
      ]
    }
  ]
}
```

Un chapitre par diapositive, **dans le même ordre** : le générateur
refuse de travailler si les deux comptes diffèrent.

- `params` — réglages de la scène pour ce chapitre.
- `jetons` — ce que la voix énonce l'un après l'autre. Le jeton courant
  suit l'avancement de l'audio ; ses `params` l'emportent sur ceux du
  chapitre, c'est ainsi que la langue bouge pendant qu'on parle.
- `souffle` — texte court projeté en 3D à la sortie de l'objet.
  Facultatif : sans lui, rien n'est émis.
- `focus` — une étiquette reliée à un point de l'objet par une aiguille.

### 4. Générer

```bash
node scripts/cours-anime/generer.mjs                     # toutes les leçons
node scripts/cours-anime/generer.mjs russe-a1/salutations
```

### 5. Regarder

```bash
python3 -m http.server --directory public 8000
# puis : /cours-anime/apercu.html?lecon=russe-a1/salutations&audio=<base>
```

`audio` est le dossier où trouver les fichiers de narration. Sur la
plateforme, ce sont des URL signées, fournies par la page de la leçon.

---

## Écrire une nouvelle scène

Un module qui pose une fonction dans `window.CoursAnime.scenes`, et
qui rend un objet à six entrées — trois obligatoires :

```js
window.CoursAnime.scenes.maScene = function (THREE, parent) {
  var g = new THREE.Group();
  parent.add(g);
  return {
    groupe: g,                       // obligatoire
    regler: function (p) { },        // obligatoire — p = params du chapitre
    maj: function (dt, niveau, couleur) { },  // obligatoire — chaque image

    cadre: { hauteur: 6.5, largeur: 4 },      // taille du modèle
    configurer: function (c) { },             // appelé une fois, avec config
    ancre: function (nom) { return [x, y]; }, // point désigné par focus
    source: function () { return [x, y]; },   // d'où sortent les jetons
  };
};
```

- `niveau` est le niveau sonore de la voix, entre 0 et 1 : c'est lui
  qui fait respirer l'objet. S'en servir, sobrement.
- `couleur` est la teinte du chapitre. L'objet la porte, le fond la
  reprend : un chapitre a une couleur, pas six.
- `regler` reçoit aussi `index` (le jeton courant), `chapitre` et `vue`.

**Deux sortes de scènes.** Par défaut, le noyau place et dimensionne le
groupe dans la place laissée libre par le texte — la scène n'a qu'à
dessiner son objet centré sur l'origine, et déclarer son `cadre`. Une
scène qui occupe le plateau entier (l'alphabet) pose `libre: true` : le
noyau ne la touche plus et lui donne la vue mesurée, à charge pour elle
de se placer.

### Ce que le noyau offre aux scènes

```js
window.CoursAnime.texte(THREE, 'mot', 110, '800')  // → { tex, ratio }
window.CoursAnime.halo(THREE)                      // → texture d'un point doux
```

---

## Règles tenues

- **La mise en page se mesure.** Un chapitre au titre long ne laisse pas
  la même place qu'un chapitre d'une ligne : le noyau lit la position
  du bloc de texte sur la page rendue et donne le reste à l'objet.
  Jamais de constante choisie devant un seul téléphone.
- **Quatre points à l'écran au plus.** Une diapositive peut en porter
  six ; le panneau « texte intégral » garde tout, l'écran en montre
  quatre.
- **Rien n'est écrit en dur dans le noyau.** Les libellés de
  l'interface viennent du générateur, par langue de parcours.
- **Une leçon sans voix se lit quand même** : les jetons défilent
  d'eux-mêmes et les commandes de lecture s'effacent.
- **Mouvement réduit respecté** : `prefers-reduced-motion` coupe les
  animations d'entrée, la dérive et le grain.
