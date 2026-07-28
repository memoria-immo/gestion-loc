---
name: louabilite-diagnostics
description: Vérifier qu'un bien peut être mis en location (décence, DPE) et contrôler le dossier de diagnostics (présence, validité). À utiliser à la prise de mandat, avant de préparer une annonce, ou quand un propriétaire confie un bien dont l'état est incertain.
---

# Louabilité et diagnostics

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.
>
> **Avant de commencer** : si un fichier `memo-agence.md` existe à la racine de l'espace de travail, lisez-le ; les outils et documents de l'agence priment sur les modèles du repo. S'il n'existe pas, ne le faites pas remplir : demandez uniquement ce qui manque pour la tâche en cours, et proposez d'y noter la réponse.

Vous vérifiez qu'un bien confié à l'agence peut légalement être loué, et que son dossier de diagnostics sera complet le jour de la signature. Mettre en location un logement indécent ou un G, c'est exposer le bailleur à un contentieux perdu d'avance ; découvrir un diagnostic manquant la veille de la signature, c'est une entrée reportée. Ce contrôle se fait à la prise de mandat, pas au moment du bail.

## Étape 0 : rassembler les faits

Demandez ce qui manque, ne supposez jamais :

- **Bien** : adresse, surface habitable et hauteur sous plafond (ou volume), nombre de pièces, équipements (cuisine, sanitaires, chauffage), meublé ou vide.
- **Histoire** : année de construction ou date du permis de construire, âge des installations électricité et gaz.
- **Énergie** : classe DPE et date du diagnostic.
- **Diagnostics en main** : lesquels le propriétaire possède déjà, avec leurs dates.

## Étape 1 : le bien est-il louable ?

Contrôlez contre la fiche `data/decence.md` :

1. **Surface** : pièce principale ≥ 9 m² avec 2,20 m sous plafond, ou volume ≥ 20 m³. En colocation à baux individuels, chaque espace privatif fait au moins 9 m² et 20 m³.
2. **DPE** (`data/dpe-calendrier.md`) : classe G → **stop**, location interdite depuis le 1er janvier 2025 ; orientez vers un audit énergétique et des travaux. Classe F → louable jusqu'à fin 2027, loyer gelé : dites au propriétaire ce qui l'attend. DPE daté d'avant juillet 2021 → il n'est plus valable, à refaire.
3. **Équipements et sécurité** : passez la liste de la fiche (eau, sanitaires, chauffage, électricité, aération, nuisibles). Notez chaque manque avec sa conséquence.

Un point douteux (hauteur sous plafond limite, installation vétuste) se tranche sur place ou par un professionnel, jamais sur photo.

## Étape 2 : le dossier de diagnostics sera-t-il complet ?

Déroulez la fiche `data/diagnostics-location.md` : pour chaque diagnostic, dites s'il est **exigé** pour ce bien (selon l'année du permis, l'âge des installations, la zone), **présent**, et **encore valable à la date de signature envisagée**. Attention à l'état des risques : sa mention est obligatoire dès l'annonce dans les zones concernées, et il expire en 6 mois.

## Sortie

Produisez : (1) un verdict de louabilité (louable / louable avec réserves / non louable en l'état), chaque réserve sourcée ; (2) le tableau des diagnostics exigés, présents, manquants et périmés ; (3) la liste des diagnostics à commander, formulée pour être envoyée telle quelle au propriétaire (le diagnostiqueur partenaire de l'agence est peut-être dans le mémo). Les travaux et leur chiffrage se décident avec le propriétaire : vous signalez, vous ne validez pas.

Étape suivante du parcours : l'annonce (`annonce-location`), une fois le bien louable et le DPE en main.

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : enregistrez le verdict et le tableau des diagnostics dans `biens/<ref>/louabilite-<date>.md`, et notez le diagnostiqueur habituel au mémo d'agence.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : consultez et complétez la fiche du bien (`memoria_bien_get`, `memoria_bien_update`, dont la classe DPE et la période de construction) ; une particularité durable du bien (accès, compteurs, historique de travaux) → proposer une mémoire (`memoria_memoire_upsert`), avec confirmation humaine.
