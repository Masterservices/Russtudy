# Chaîne de production d'une leçon

Trois scripts, à lancer dans l'ordre. Chacun relit et réécrit le même
`lesson.json`, qui reste modifiable à la main entre deux étapes.

```
cours.pptx ─┐
            ├─► extract_course.py ─► lesson.json + slide-NN.png
cours.pdf  ─┘                            │
                                         ├─► narrate.py ─► audio-NN.mp3
                                         │
                                         └─► import_lesson.py ─► Supabase
```

## 1. Extraction

```bash
python3 -I scripts/elearning/extract_course.py cours.pptx /tmp/lecon-01 \
    --lang ru --ui fr --lesson-slug salutations
```

| Source | Texte | Notes du conférencier | Images des diapositives |
|---|---|---|---|
| `.pdf` | oui | — | **oui** |
| `.pptx` | oui | **oui**, reprises comme narration | LibreOffice, ou extraction directe |

Sur un PowerPoint, le script tente d'abord LibreOffice, puis se rabat
sur l'extraction directe des images : beaucoup de decks exportés depuis
un outil de design n'ont aucun texte, chaque diapositive étant une
image pleine page. Dans ce cas l'image d'origine est le meilleur rendu
possible, et elle s'extrait sans LibreOffice.

Un deck fait d'images ne livre donc aucun texte : il faut écrire
`title`, `lines` et `narration` à la main, en regardant les diapositives.
C'est ce qui a été fait pour la leçon de phonétique française.

## 2. Narration

Le texte d'une diapositive n'est presque jamais un bon texte lu à voix
haute. Le champ `narration` est donc laissé à relire : les notes du
conférencier le pré-remplissent quand elles existent, sinon il faut
l'écrire.

```bash
export ELEVENLABS_API_KEY=...
python3 -I scripts/elearning/narrate.py /tmp/lecon-01 --list-voices
python3 -I scripts/elearning/narrate.py /tmp/lecon-01 --voice <voice_id>
```

Le nom de chaque fichier audio dépend du texte narré : corriger une
phrase produit un nouveau fichier, et l'ancien n'est jamais servi par
erreur. Un bloc déjà narré n'est pas régénéré — chaque appel coûte des
crédits. `--dry-run` liste le travail sans rien dépenser.

Le modèle par défaut, `eleven_multilingual_v2`, rend correctement le
russe et le français, qui sont les deux langues enseignées.

### Une voix par cours

**Règle : toutes les leçons d'un même cours sont narrées par la même
voix**, native de la langue enseignée. Changer de voix d'une leçon à
l'autre fait entendre deux professeurs pour un seul cours, et pour une
leçon de prononciation, deux modèles à imiter.

La voix de chaque cours est inscrite dans `scripts/elearning/voix.json`.
Avant de narrer une leçon, on y lit la voix de son cours ; on n'en
choisit jamais une nouvelle. Pour un nouveau cours, on choisit la voix
une fois, on l'inscrit, puis on s'y tient.

En cas de doute sur la voix réellement utilisée, on la **mesure** plutôt
que de se fier à la mémoire : la hauteur médiane de la voix (F0) sépare
nettement une voix masculine (≈ 100–150 Hz) d'une voix féminine
(≈ 170–250 Hz).

Une narration générée par le connecteur se dépose sous son nom
canonique avec :

```bash
python3 -I scripts/elearning/deposer_audio.py <dossier-lecon> <numero-bloc> <url-mp3>
```

Générer **une narration à la fois** : des requêtes en parallèle sur un
compte gratuit déclenchent la détection d'« activité inhabituelle »
d'ElevenLabs, qui coupe l'accès.

### Choisir une voix native

La voix doit parler nativement la langue enseignée. Un modèle
multilingue fait lire du français à une voix anglophone, mais avec son
accent d'origine : pour une leçon de prononciation, l'élève répéterait
précisément les sons que la leçon corrige.

Les voix intégrées au plan gratuit sont toutes anglophones, à une voix
arabe près. Une voix française vient donc de la *bibliothèque*
ElevenLabs — et c'est là qu'une limite se présente :

| Chemin | Voix intégrée | Voix de bibliothèque |
|---|---|---|
| API directe, plan gratuit | oui | **non — 402** |
| API directe, plan payant | oui | oui |
| Connecteur ElevenLabs | oui | oui |

`narrate.py` appelle l'API directe. Avec une voix de bibliothèque et un
plan gratuit, il échoue donc sur `402 paid_plan_required`. Deux issues :
passer au plan Creator, ou générer par le connecteur et déposer les MP3
dans le dossier de la leçon sous le nom `audio-NN-<empreinte>.mp3`,
l'empreinte étant les dix premiers caractères du SHA-1 du texte narré.

La leçon de phonétique française a été produite de la seconde manière,
avec la voix *Paul K* (masculine, accent parisien neutre).

## 3. Import

```bash
export SUPABASE_URL=https://xxxx.supabase.co
export SUPABASE_SECRET_KEY=sb_secret_...   # ou SUPABASE_SERVICE_ROLE_KEY
python3 -I scripts/elearning/import_lesson.py /tmp/lecon-01 \
    --course russe-a1 --position 1 --free --publish
```

Le parcours doit exister au préalable dans la table `courses` :

```bash
psql "$SUPABASE_DB_URL" -f supabase/seed/courses.sql
```

Une leçon complète est fournie comme exemple dans
`supabase/seed/lessons/francais-a1/sons-du-francais/` : quinze
diapositives, narration en russe et six exercices corrigés.

L'import est idempotent : relancé sur le même dossier, il met à jour la
leçon au lieu d'en créer une seconde. Les blocs sont remplacés
intégralement, pour qu'une leçon corrigée ne conserve pas ses anciennes
diapositives.

`--free` marque la leçon comme leçon d'essai : lisible sans inscription
active. Sans ce drapeau, elle demande une inscription.

> **La clé secrète contourne la RLS.** C'est l'ancienne `service_role`,
> renommée `secret` (`sb_secret_…`) par Supabase : elle lit et écrit
> toutes les tables sans qu'aucune politique ne s'applique. Ce script
> tourne en local ou en intégration continue, jamais dans le navigateur,
> et cette clé n'a rien à faire dans une variable `NEXT_PUBLIC_*`.
>
> La clé *publiable* (`sb_publishable_…`, ex-`anon`) est l'inverse :
> conçue pour être exposée au navigateur, elle ne peut rien faire que
> vos politiques RLS n'autorisent.
