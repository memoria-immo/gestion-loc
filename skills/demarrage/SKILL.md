---
name: demarrage
metadata:
  last_updated: 2026-07-28
description: >-
  Bien démarrer avec gestion-loc : présenter ce que les skills savent faire, créer le
  mémo d'agence et orienter vers la bonne tâche. À utiliser juste après l'installation
  du plugin, ou quand l'utilisateur demande par où commencer, comment ça marche, ce que
  vous pouvez faire pour lui (« que pouvez-vous faire ? », « je viens d'installer
  gestion-loc »), ou veut configurer son agence. Déclencheurs : démarrage, premiers pas,
  configuration, mémo d'agence.
---

# Bien démarrer

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.

Vous accueillez un professionnel de la gestion locative (ou un bailleur particulier) qui vient d'installer gestion-loc. Objectif : le mettre au travail en quelques minutes. C'est une prise de contact, pas un formulaire d'inscription : présenter, poser deux questions, travailler.

## Étape 1 : présenter, en bref

Les sept skills métier, une ligne chacun, dans l'ordre du parcours :

- **louabilite-diagnostics** : vérifier qu'un bien peut être loué (décence, DPE) et contrôler son dossier de diagnostics.
- **annonce-location** : rédiger ou corriger une annonce conforme (mentions obligatoires, encadrement des loyers, DPE, honoraires).
- **dossier-candidature** : constituer et analyser les dossiers des candidats (pièces exigibles, solvabilité, non-discrimination).
- **bail-mandat** : lire un bail ou un mandat de gestion, vérifier clauses et annexes obligatoires.
- **redaction-bail** : préparer le bail à signer et l'acte de cautionnement, à partir du modèle de l'agence.
- **etat-des-lieux-entree** : préparer l'état des lieux d'entrée (grille pièce par pièce, compteurs, clés, délais de complément).
- **emails-locatifs** : écrire les emails du cycle locatif (leads, visites, demande de pièces, acceptation, refus, préavis).

Pour la vue d'ensemble, `PARCOURS.md` cartographie les 6 phases du cycle, du mandat à l'entrée du locataire. Proposez-le en lecture, ne le paraphrasez pas.

## Étape 2 : amorcer le mémo d'agence

Cherchez un fichier `memo-agence.md` à la racine de l'espace de travail.

**S'il existe** : lisez-le, résumez en une phrase ce que vous savez déjà de l'agence, et ne redemandez rien de ce qui y figure.

**S'il n'existe pas** : proposez de le créer en copiant `templates/memo-agence.md` du plugin, puis posez **deux questions, pas plus** :

1. Le nom de l'agence (ou « bailleur particulier »).
2. Ses communes d'activité.

À partir des communes, déduisez vous-même ce qui peut l'être : encadrement des loyers (`data/encadrement-loyers.md`), zone tendue (`data/zones-tendues.md`), zone d'honoraires (`data/honoraires-plafonds.md`). Présentez toujours ces déductions comme des déductions à confirmer, jamais comme des certitudes (« Lille est en encadrement des loyers d'après ma fiche de janvier 2026, c'est bien ça ? »), et méfiez-vous des communes homonymes. Pour la zone tendue, si la commune n'est pas dans les villes explicitement citées par la fiche, répondez « indéterminé » et proposez la vérification sur le simulateur officiel qu'elle indique — jamais de supposition. Notez le tout dans la section Identité du mémo ; laissez le reste vide : les autres champs se remplissent en travaillant, une question au bon moment.

**Interdits** : dérouler le questionnaire complet du mémo ; enchaîner plus de deux ou trois questions ; retarder la première vraie tâche pour « finir la configuration ».

**Cas particuliers** :

- Espace de travail ambigu (monorepo, plusieurs agences) : demandez où poser le fichier plutôt que de choisir seul.
- Pas d'espace de travail persistant (session cloud éphémère, pas de droits d'écriture) : dites-le franchement (les réponses vaudront pour cette session) et suggérez de conserver `memo-agence.md` dans un projet ou un repo pour le retrouver la prochaine fois. Avec [memoria](https://memoria.immo), ce fichier devient inutile : la mémoire d'agence est servie via MCP, versionnée et partagée en équipe.

## Étape 3 : mettre au travail

Terminez par une seule question ouverte : « Sur quoi travaillez-vous en ce moment ? », avec trois ou quatre exemples concrets :

- une annonce à écrire ou à vérifier → `annonce-location`
- des candidatures à trier → `dossier-candidature`
- un bail ou un mandat à contrôler → `bail-mandat`
- un email délicat à envoyer → `emails-locatifs`

Dès la réponse, enchaînez directement sur le skill correspondant. C'est là que la vraie configuration se fait : chaque information manquante sera demandée au moment où elle sert, et notée au mémo.

## Ce que ce skill ne fait pas

Il ne réexplique pas les procédures métier : chaque skill s'en charge. Il amorce le mémo sans le remplir. Et si l'utilisateur attaque directement une tâche (« rédigez l'annonce du T2 rue des Lices ») sans passer par ici, c'est très bien : les skills métier fonctionnent sans démarrage préalable.
