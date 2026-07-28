---
name: redaction-bail
metadata:
  last_updated: 2026-07-28
description: >-
  Préparer un bail d'habitation à signer (vide ou meublé, résidence principale) et
  l'acte de cautionnement : pré-remplir le modèle de l'agence, vérifier champs, clauses
  et annexes avant signature. À utiliser quand un candidat est retenu et que le bail
  doit être rédigé. Déclencheurs : rédiger le bail, bail type, acte de cautionnement,
  caution, colocation, clause de solidarité, trimestre IRL, dépôt de garantie.
---

# Préparation du bail et du cautionnement

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.
>
> **Avant de commencer** : si un fichier `memo-agence.md` existe à la racine de l'espace de travail, lisez-le ; les outils et documents de l'agence priment sur les modèles du repo. S'il n'existe pas, ne le faites pas remplir : demandez uniquement ce qui manque pour la tâche en cours, et proposez d'y noter la réponse.

Vous préparez un dossier de bail prêt à signer : le bail pré-rempli à partir du modèle de l'agence, l'acte de cautionnement si garant, et la liste des annexes à joindre. Vous produisez un document de travail que l'humain relit et fait signer ; vous ne validez rien juridiquement, et un cas inhabituel (démembrement, bail dérogatoire, sous-location) part chez un professionnel du droit. Le skill `bail-mandat` fait le chemin inverse : il contrôle un document déjà rédigé.

## Étape 0 : le bon modèle

Partez de la trame de bail de l'agence (mémo d'agence, ou ses templates memoria) : elle a souvent été validée par un juriste ou un réseau, elle prime. À défaut, rappeler que le bail doit respecter le bail type du décret n° 2015-587, sans le reproduire de tête : proposez d'en obtenir une trame à jour (réseau, syndicat professionnel, juriste) et signalez qu'aucun bail ne sera improvisé. Hors périmètre : bail mobilité, bail commercial, location saisonnière, logement conventionné.

## Étape 1 : rassembler et pré-remplir

Collectez auprès du dossier de candidature et de la fiche du bien (demandez ce qui manque) : parties et signataires, désignation du logement (adresse, surface habitable, pièces, équipements, annexes type cave ou parking), régime (vide 3 ans / meublé 1 an / étudiant meublé 9 mois), date de prise d'effet, loyer hors charges, modalité des charges (provision avec régularisation ou forfait), trimestre IRL de référence, dépôt de garantie (1 mois hors charges en vide, 2 en meublé), honoraires part locataire, zone d'encadrement le cas échéant (loyer de référence et référence majoré, `data/encadrement-loyers.md`), dernier loyer du précédent locataire et durée de vacance si la commune est en zone tendue (`data/zones-tendues.md`).

Pré-remplissez le modèle. Chaque champ sans valeur sûre reste marqué « À COMPLÉTER » : un blanc visible vaut mieux qu'une invention.

## Étape 2 : contrôler avant signature

- **Loyer** : déroulez la démarche de `data/fixation-loyer.md` (gel F/G, plafond de relocation en zone tendue et ses exceptions, loyer de référence majoré en territoire encadré) avant de reporter le montant au bail.
- **Clauses** : passez le bail contre `data/clauses-annexes-bail.md`. Toute clause de la liste des clauses réputées non écrites est retirée ou signalée, même si elle vient du modèle de l'agence.
- **Annexes** : cochez la liste de la même fiche (DDT complet et valable, notice d'information, extraits du règlement de copropriété, inventaire et état détaillé du mobilier en meublé, grille de vétusté si convenue). Un diagnostic périmé à la date de signature → repasser par `louabilite-diagnostics`.
- **Colocation** : bail collectif → clause de solidarité explicite ; la solidarité du colocataire sortant s'éteint quand un remplaçant est au bail, au plus tard 6 mois après la fin de son préavis (art. 8-1, loi de 1989). Baux individuels → un bail par colocataire (espace privatif + parties communes), chaque espace respectant les critères de décence de `data/decence.md`.

## Étape 3 : l'acte de cautionnement

Un acte par garant, sur la trame de l'agence si elle existe. Vérifiez (art. 22-1 de la loi de 1989 et art. 2297 du code civil, régime en vigueur depuis 2022) : la mention par laquelle la caution s'engage, avec le montant maximal garanti en lettres et en chiffres ; la durée (déterminée, ou faculté de résiliation unilatérale si indéterminée) ; la remise d'un exemplaire du bail à la caution. Cumul d'une GLI et d'un garant personne physique : interdit sauf étudiant ou apprenti.

## Sortie

Produisez : (1) le bail pré-rempli avec ses champs « À COMPLÉTER » listés, (2) le ou les actes de cautionnement préparés, (3) la checklist des annexes avec leur statut, (4) les points à faire arbitrer (clause douteuse, montant à confirmer). Rappelez ce qui se collecte avant signature : attestation d'assurance habitation du locataire, acte de cautionnement signé, visa Visale le cas échéant.

Étape suivante du parcours : signature et encaissement, puis `etat-des-lieux-entree`.

## Références

Le droit stable de ce skill vit dans les fiches `data/` ci-dessous : consultez-les d'abord, ne repartez pas chercher sur le web ce qu'elles contiennent déjà. Une vérification en ligne (source officielle : Légifrance, service-public.fr) reste de mise quand une fiche le demande, quand sa « Prochaine revue » est dépassée, quand le cas dépend d'un montant ou d'une liste locale (arrêté préfectoral, quartier), ou quand la fiche et le document en main se contredisent.

- `data/clauses-annexes-bail.md` — clauses interdites et annexes du bail type (décret n° 2015-587).
- `data/zones-tendues.md` — la commune est-elle en zone tendue (décret n° 2013-392).
- `data/fixation-loyer.md` — le loyer proposé est-il licite : gel F/G, plafond de relocation, exceptions (art. 18, loi de 1989).
- `data/encadrement-loyers.md` — loyer de référence et référence majoré à reporter au bail (art. 140, loi ELAN).
- `data/decence.md` — décence des espaces privatifs en colocation à baux individuels (art. 8-1, loi de 1989).

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : rangez le dossier de bail en `baux/<ref-bien>-<date>/` (bail, cautionnement, checklist des annexes), à côté des pièces.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : puisez la trame dans les modèles de l'agence (`memoria_template_get`), complétez la fiche du bien (`memoria_bien_update`), liez le bail signé à la candidature (`memoria_document_link`). Une règle maison stabilisée (« toujours la clause X en meublé ») → mémoire d'agence (`memoria_memoire_upsert`), avec confirmation humaine.
