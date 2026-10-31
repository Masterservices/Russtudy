# Rapport de nuit — 24 octobre

## Une seule chose à faire ce matin

Appliquer la migration `supabase/migrations/20261024000100_elearning_modules.sql`,
et elle seule : la table `modules` et la colonne `lessons.module_id` existent déjà,
il manque ses politiques RLS et ses droits (`modules_select`, `modules_select_anon`,
`modules_write_admin`, et les `grant` à `anon`, `authenticated`, `service_role`).

Le connecteur Supabase demande désormais une réautorisation depuis les réglages
claude.ai — je ne peux pas la lancer d'ici. Le plus simple reste l'éditeur SQL du
tableau de bord : copier le fichier, exécuter.

**Rien ne casse en attendant.** Sans ces droits, la requête des modules renvoie une
liste vide et les leçons s'affichent « hors section ». Aucune erreur visible, aucune
page en panne. C'était la condition que vous avez posée : dormir sans intervenir.

Une fois la migration passée, il restera à créer les sections elles-mêmes et à y
rattacher les leçons — c'est du contenu, pas du schéma, et ça peut attendre.

## Ce qui a été livré cette nuit

Cinq fusions, dans l'ordre : page de parcours, onglets de leçon, pied de page du
catalogue, animateur et sous-titres, cinq leçons de contenu — regroupées dans la
**PR #130**. Puis la **#131** (une faute d'accord, « entre ami ») et la **#132**
(l'animateur qui ne reste plus figé).

### La plateforme est séparée du suivi de dossier

`/elearning` a sa propre coque : son logotype, son menu — Leçons, Visio — et son
pied de page construit depuis le catalogue en base. Plus un seul lien ne mène vers
`/app` : qui vient travailler sa prononciation ne se retrouve plus dans un dossier
de candidature. Vérifié, zéro lien.

Le menu des études à l'étranger n'est servi qu'en français et en arabe, sous forme
de bannière et sous le contenu. Un russophone venu apprendre le français ne la voit
pas — il n'est pas candidat au départ, et le lui montrer brouillait les deux offres.

### L'audio suit enfin la diapositive

Changer la source d'un `<audio>` déjà monté ne la recharge pas : la narration de la
diapositive précédente continuait, en contradiction avec le texte affiché. Une clé
liée au bloc force React à remonter l'élément. Corrigé, vérifié.

### L'animateur et le mouvement

Bulle en bas à gauche, avec anneau pulsant à la lecture et un balancement de tête
en plus de la respiration. Les diapositives dérivent lentement — zoom 1,07 vers
1,025 pendant la parole, figé à la pause — en trois variantes alternées pour que la
succession ne batte pas la mesure. Tout s'annule sous `prefers-reduced-motion`.

Sous-titre incrusté pendant la lecture seulement, pour ne pas masquer la diapositive
quand on la lit en silence.

**Les lèvres mobiles ne sont pas faisables avec la clé Gemini fournie.** Elle expose
les modèles d'image mais leur quota est fermé : le texte répond, l'image renvoie
`429 : check your plan and billing details`. Testé sur trois modèles. Le balancement
est ce qui tient sans facturation.

## État vérifié

6 leçons publiées · 82 diapositives · 82 images · 54 narrations · 36 exercices ·
sitemap à 433 URL. `/elearning`, les deux parcours et les deux leçons gratuites
répondent 200 ; une leçon réservée renvoie au catalogue, pas vers l'app.

## Ce qui reste en attente, et pourquoi

**Le déploiement.** Le lien GitHub↔Vercel est toujours rompu et mon connecteur
Vercel est en lecture seule sur l'équipe : chaque écriture renvoie 403. Depuis votre
machine : `git pull` puis `vercel deploy`. Le ticket au support GitHub pour le compte
signalé reste ouvert de votre côté.

**La voix off des deux leçons payantes** (`saluer-se-presenter`,
`articles-et-genre`) : 5 457 caractères, au-delà du quota ElevenLabs gratuit
restant. Il se recharge vers le 22 novembre.

**Lot 4, non commencé** : `/elearning/connexion`, icône de compte, « marquer comme
terminée ».

**Signalé plus tôt, jamais demandé** : quatre pages commerciales trop courtes pour
être indexées utilement — `/cout-des-etudes` (231 mots), `/guides` (232), `/visa`
(234), `/accompagnement` (289).
