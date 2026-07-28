---
name: etat-des-lieux-entree
description: "Préparer et sécuriser l'état des lieux d'entrée : cadre légal (art. 3-2 loi de 1989, décret n° 2016-382), grille de préparation pièce par pièce, compteurs, clés, photos, délais de complément. À utiliser quand une entrée dans les lieux approche ou vient d'avoir lieu."
---

# État des lieux d'entrée

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.
>
> **Avant de commencer** : si un fichier `memo-agence.md` existe à la racine de l'espace de travail, lisez-le ; les outils et documents de l'agence priment sur les modèles du repo. S'il n'existe pas, ne le faites pas remplir : demandez uniquement ce qui manque pour la tâche en cours, et proposez d'y noter la réponse.

Vous préparez l'état des lieux d'entrée et vérifiez qu'il tiendra dans le temps : c'est ce document qui décidera du sort du dépôt de garantie, des années plus tard. Sans état des lieux d'entrée, le locataire est présumé avoir reçu le logement en bon état (art. 1731 du code civil) et le bailleur perd presque tout recours à la sortie. Hors périmètre : l'état des lieux de **sortie** (comparaison, vétusté, imputations sur le dépôt), qui arrivera avec le traitement du préavis et du départ.

## Étape 0 : le bon support

L'agence a peut-être déjà son app ou sa trame d'état des lieux (mémo d'agence) : elle prime, votre rôle est alors de préparer la visite, pas le document. À défaut, utilisez `templates/edl-preparation.md` comme grille de préparation ; le document signé le jour J reste celui de l'outil habituel de l'agence, la grille sert à ne rien oublier.

## Étape 1 : vérifier le cadre

- **Contradictoire** : établi en présence du bailleur (ou son mandataire) et du locataire, ou par un commissaire de justice si une partie refuse (frais alors partagés par moitié). Un exemplaire est remis à chaque partie.
- **Forme** (décret n° 2016-382) : type d'état des lieux et date, adresse, parties et domicile du bailleur, relevés des compteurs individuels (eau, électricité, gaz), détail des clés et de leurs accès, description précise des revêtements, équipements et éléments de chaque pièce, signatures. Papier ou électronique.
- **Annexé au bail** (art. 3-2, loi de 1989), sur un support conforme à celui du bail.
- **Facturation** : si l'état des lieux d'entrée est réalisé par un professionnel mandaté, la part du locataire est plafonnée à 3,03 €/m² (`data/honoraires-plafonds.md`). L'état des lieux de sortie, lui, n'est jamais facturable au locataire.
- **Colocation** : tous les colocataires (ou leur mandataire) signent. En baux individuels, un état des lieux par entrée, couvrant l'espace privatif et l'état des parties communes à cette date.

## Étape 2 : préparer la visite

Remplissez la grille en amont avec ce qui est déjà connu (pièces, équipements, mobilier si meublé, en cohérence avec l'inventaire annexé au bail), puis listez ce qui se constate sur place : état de chaque revêtement (sol, murs, plafond), fonctionnement des équipements, relevés de compteurs, nombre de clés, badges et télécommandes. Consignes pour le jour J : décrire avec précision (« rayure de 10 cm sur le parquet, angle sud-ouest » et jamais « bon état » seul), photographier daté ce qui est décrit, tester ce qui se teste (chauffage, chasse d'eau, volets).

## Étape 3 : après la signature

Rappelez au locataire ses droits de complément (art. 3-2, loi de 1989) : 10 jours après l'état des lieux pour tout élément du logement, et le premier mois de la période de chauffe pour le chauffage. Une demande de complément se traite et s'annexe, elle ne se discute pas. Classez le document signé avec le bail, les photos avec lui.

## Sortie

Produisez : (1) la grille de préparation remplie, (2) la liste des points de vigilance propres au bien (équipement fragile, compteur difficile d'accès), (3) les rappels à transmettre au locataire (délais de complément, remise des clés). Ce qui relève d'un désaccord sur l'état du logement se tranche entre les parties ou par commissaire de justice : vous signalez, vous ne validez pas.

Étape suivante du parcours : remise des clés et bascules administratives (phase 6 du parcours).

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : rangez la grille et les photos en `biens/<ref>/edl-entree-<date>/`, avec le document signé quand il arrive.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : le PDF signé, déposé dans le dossier de la candidature via le dashboard, se lie et se retrouve ensuite par `memoria_document_link` ; une particularité durable du bien apprise pendant la visite (accès aux compteurs, code du local à vélos) → mémoire du bien (`memoria_memoire_upsert`), avec confirmation humaine.
