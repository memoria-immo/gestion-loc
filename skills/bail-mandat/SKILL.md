---
name: bail-mandat
description: Lire un bail d'habitation ou un mandat de gestion locative (PDF ou texte), extraire les champs clés, vérifier clauses et annexes obligatoires (loi du 6 juillet 1989, loi Hoguet). À utiliser quand un bail ou un mandat arrive ou doit être contrôlé avant signature.
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
- **Zone encadrée** (`data/encadrement-loyers.md`) : loyer de référence, référence majoré et loyer de base mentionnés ; loyer de base ≤ référence majoré ; complément de loyer justifié et absent si DPE F/G.
- **DPE** (`data/dpe-calendrier.md`) : classe compatible avec la mise en location à la date d'effet.
- **Clauses réputées non écrites** (art. 4, loi de 1989 ; exemples fréquents) : prélèvement automatique imposé, pénalités forfaitaires pour retard, interdiction d'héberger des proches, résiliation pour motif autre que les cas légaux, cumul assurance imposée par le bailleur…
- **Annexes obligatoires** : dossier de diagnostic technique (DPE ; CREP si construction < 1949 ; état amiante ; état de l'installation électrique et gaz si > 15 ans ; état des risques (ERP) si zone concernée ; diagnostic bruit si zone d'exposition aéroportuaire), notice d'information, état des lieux d'entrée, extraits du règlement de copropriété le cas échéant, inventaire du mobilier (meublé), grille de vétusté si convenue.

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

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : sauvegardez l'extraction en `extractions/<type>-<ref>-<date>.md` (ou JSON si l'humain préfère), à côté du PDF source.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : écrivez le bail sur la fiche du bien (`memoria_bien_update`), enregistrez un mandat via `memoria_mandat_register` (propriétaire + bien + mandat en une transaction), et liez le PDF (`memoria_document_link`). Toute particularité durable du bien ou du proprio détectée au passage → proposer une mémoire scopée (`memoria_memoire_upsert`), avec confirmation humaine.
