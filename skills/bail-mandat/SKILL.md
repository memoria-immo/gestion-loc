---
name: bail-mandat
metadata:
  last_updated: 2026-07-28
description: >-
  Lire un bail d'habitation ou un mandat de gestion locative (PDF ou texte), extraire
  les champs clés, vérifier clauses et annexes obligatoires (loi du 6 juillet 1989, loi
  Hoguet). À utiliser quand un bail ou un mandat arrive ou doit être contrôlé avant
  signature. Déclencheurs : relire un bail, contrôler un contrat, mandat de gestion,
  carte G, clause abusive, annexes du bail, registre des mandats.
---

# Analyse de bail et de mandat de gestion

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.
>
> **Avant de commencer** : si un fichier `memo-agence.md` existe à la racine de l'espace de travail, lisez-le ; les outils et documents de l'agence priment sur les modèles du repo. S'il n'existe pas, ne le faites pas remplir : demandez uniquement ce qui manque pour la tâche en cours, et proposez d'y noter la réponse.

Vous lisez des baux d'habitation et des mandats de gestion pour en extraire les données structurées et repérer ce qui manque ou ce qui cloche. Vous n'êtes pas juriste : vous signalez, vous ne validez pas. Un document douteux part chez un professionnel du droit.

## D'abord : identifier le document

Bail d'habitation (résidence principale, vide ou meublé) → section A. Mandat de gestion locative ou mandat de location → section B. Autre (bail commercial, bail mobilité, saisonnier…) : extrayez ce que vous pouvez et dites explicitement que le skill ne couvre pas ce régime.

## A. Bail d'habitation (loi du 6 juillet 1989, bail type du décret n° 2015-587)

### Champs à extraire

Parties (bailleur, locataire·s, mandataire), désignation du logement (adresse, type, surface habitable, pièces, équipements, annexes type cave/parking), date de prise d'effet, **durée** (3 ans vide / 1 an meublé / 9 mois bail étudiant meublé / 1–10 mois bail mobilité), loyer hors charges, modalité des charges (provision ou forfait), révision (IRL, trimestre de référence), dépôt de garantie, clause de solidarité si colocation, honoraires.

### Contrôles

- **Durée et dépôt** cohérents avec le régime : dépôt max 1 mois HC (vide), 2 mois (meublé) ; aucun dépôt exigible pour un bail mobilité.
- **Loyer à la relocation** (`data/fixation-loyer.md`) : en zone tendue (`data/zones-tendues.md`), si le bail succède à un précédent locataire, le loyer ne peut pas dépasser le dernier loyer révisé de l'IRL, sauf exceptions (première location, vacance de plus de 18 mois, travaux importants). Le dernier loyer ne figure pas dans le bail : demandez-le, et notez « non vérifiable » sinon.
- **Zone encadrée** (`data/encadrement-loyers.md`) : loyer de référence, référence majoré et loyer de base mentionnés ; loyer de base ≤ référence majoré ; complément de loyer justifié et absent si DPE F/G.
- **DPE** (`data/dpe-calendrier.md`) : classe compatible avec la mise en location à la date d'effet.
- **Clauses réputées non écrites** (art. 4, loi de 1989) : passez le bail contre la liste de `data/clauses-annexes-bail.md` ; toute clause qui y figure est signalée, même si elle a l'air standard.
- **Annexes obligatoires** : cochez la liste de `data/clauses-annexes-bail.md` (dossier de diagnostic technique détaillé dans `data/diagnostics-location.md`, notice d'information, état des lieux d'entrée, extraits du règlement de copropriété, inventaire du mobilier en meublé, grille de vétusté si convenue).

## B. Mandat de gestion / de location (loi Hoguet, n° 70-9 du 2 janvier 1970)

### Champs à extraire

Mandant (propriétaire, coordonnées, qualité), mandataire (agence, **carte professionnelle G** (gestion) ou T (transaction), garantie financière, RCP), bien(s) confié(s), **numéro d'inscription au registre des mandats**, durée et reconduction, missions confiées (recherche locataire, quittancement, révision, travaux, contentieux…), honoraires (taux/assiette, TTC), conditions de résiliation.

### Contrôles

- **Écrit obligatoire, en deux exemplaires**, numéro de registre reporté sur le mandat : un mandat non conforme est **nul** (l'agence perd son droit à honoraires).
- **Durée déterminée** obligatoire ; reconduction tacite possible mais bornée, avec faculté de dénonciation ; loi Chatel : information annuelle du mandant sur la faculté de ne pas reconduire.
- Honoraires précis (assiette : loyers encaissés ? charges comprises ?), missions non ambiguës (le mandat de gestion n'emporte pas pouvoir de signer n'importe quoi : vérifier ce qui requiert l'accord écrit du mandant).
- Mentions de la carte professionnelle, de la garantie financière (organisme, montant) et de l'assurance RCP.

## Sortie

Produisez : (1) un tableau des champs extraits (avec « non trouvé » explicite : n'inventez jamais une valeur), (2) la liste des contrôles passés/échoués avec la règle et sa source, (3) les points à faire arbitrer par un humain. Si le document est un scan illisible par endroits, dites quelles zones sont illisibles plutôt que de deviner.

## Références

Le droit stable de ce skill vit dans les fiches `data/` ci-dessous : consultez-les d'abord, ne repartez pas chercher sur le web ce qu'elles contiennent déjà. Une vérification en ligne (source officielle : Légifrance, service-public.fr) reste de mise quand une fiche le demande, quand sa « Prochaine revue » est dépassée, quand le cas dépend d'un montant ou d'une liste locale (arrêté préfectoral, quartier), ou quand la fiche et le document en main se contredisent.

- `data/clauses-annexes-bail.md` — clauses réputées non écrites et annexes obligatoires (art. 4, loi de 1989, décret n° 2015-587).
- `data/encadrement-loyers.md` — mentions et plafond du loyer en territoire encadré (art. 140, loi ELAN).
- `data/zones-tendues.md` — la commune est-elle en zone tendue (décret n° 2013-392).
- `data/fixation-loyer.md` — plafond de relocation et ses exceptions (art. 18, loi de 1989).
- `data/dpe-calendrier.md` — classe DPE compatible avec la mise en location à la date d'effet, gel F/G (loi Climat et Résilience).
- `data/diagnostics-location.md` — contenu du dossier de diagnostic technique annexé (art. 3-3, loi de 1989).

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : sauvegardez l'extraction en `extractions/<type>-<ref>-<date>.md` (ou JSON si l'humain préfère), à côté du PDF source.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : écrivez le bail sur la fiche du bien (`memoria_bien_update`), enregistrez un mandat via `memoria_mandat_register` (propriétaire + bien + mandat en une transaction), et liez le PDF (`memoria_document_link`). Toute particularité durable du bien ou du proprio détectée au passage → proposer une mémoire scopée (`memoria_memoire_upsert`), avec confirmation humaine.
