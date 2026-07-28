---
name: annonce-location
metadata:
  last_updated: 2026-07-28
description: >-
  Rédiger une annonce de location conforme au droit français : mentions obligatoires,
  encadrement des loyers, DPE, honoraires. À utiliser pour créer ou corriger l'annonce
  d'un logement à louer (vide ou meublé, résidence principale). Déclencheurs : petite
  annonce, publier, Leboncoin, SeLoger, loyer de référence, complément de loyer, zone
  tendue, photos, mise en location.
---

# Annonce de location conforme

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.
>
> **Avant de commencer** : si un fichier `memo-agence.md` existe à la racine de l'espace de travail, lisez-le ; les outils et documents de l'agence priment sur les modèles du repo. S'il n'existe pas, ne le faites pas remplir : demandez uniquement ce qui manque pour la tâche en cours, et proposez d'y noter la réponse.

Vous aidez un professionnel de l'immobilier (ou un bailleur particulier) à rédiger une annonce de location publiable, exacte et conforme. Une annonce non conforme expose à des amendes administratives ; une annonce médiocre fait perdre des semaines de vacance locative. Les deux comptent.

## Étape 0 : rassembler les faits

Avant d'écrire, collectez (demandez ce qui manque, ne l'inventez jamais) :

- **Bien** : type, surface habitable (m², loi Boutin), nombre de pièces, étage/ascenseur, commune (+ arrondissement le cas échéant ; pas d'adresse exacte dans l'annonce publiée), meublé ou vide, extérieur, stationnement, chauffage.
- **Argent** : loyer hors charges, charges (provision ou forfait, à préciser), dépôt de garantie, honoraires TTC part locataire (dont part état des lieux), date de disponibilité, dernier loyer appliqué au précédent locataire et durée de vacance du logement (nécessaires en zone tendue).
- **Énergie** : classe DPE, classe GES, estimation des dépenses annuelles d'énergie et année de référence des prix.
- **Contexte agence** (si disponible) : préférences du propriétaire, ton maison, historique du bien.

## Étape 1 : contrôles de conformité (bloquants)

Appliquez dans l'ordre, en vous appuyant sur les fiches `data/` du repo :

1. **DPE** (`data/dpe-calendrier.md`) : classe G → **stop**, le logement est interdit à la location depuis le 1er janvier 2025 ; le signaler et proposer d'orienter vers un audit/travaux plutôt que de publier. Classe F → publiable mais mention « Logement à consommation énergétique excessive » obligatoire, loyer gelé, et fin programmée en 2028 : le dire au bailleur.
2. **Fixation du loyer** (`data/fixation-loyer.md`) : si la commune est en zone tendue (`data/zones-tendues.md`), le loyer de relocation ne peut pas dépasser le dernier loyer du précédent locataire révisé de l'IRL — sauf première location, vacance de plus de 18 mois ou travaux d'amélioration d'au moins un an de loyer. Demandez le dernier loyer pratiqué avant de valider le montant, et déroulez la démarche de la fiche.
3. **Encadrement des loyers** (`data/encadrement-loyers.md`) : si la commune est en zone encadrée, exigez le loyer de référence majoré applicable (arrêté préfectoral, quartier, époque, meublé/vide) et vérifiez loyer de base ≤ référence majoré. Complément de loyer : uniquement justifié, jamais pour un F/G.
4. **Honoraires** (`data/honoraires-plafonds.md`) : vérifiez la part locataire contre le plafond de la zone (12,10 / 10,09 / 8,07 €/m² + 3,03 €/m² d'état des lieux pour les baux 2026) et contre la part bailleur.
5. **Dépôt de garantie** : maximum 1 mois de loyer hors charges (vide), 2 mois (meublé).

Si un contrôle échoue, dites-le AVANT de rédiger, avec la règle et la source.

## Étape 2 : mentions obligatoires dans l'annonce

- Loyer mensuel **charges comprises**, suivi de « par mois » et « charges comprises », puis le détail : loyer de base, modalité des charges (provision avec régularisation ou forfait), et le cas échéant complément de loyer.
- En zone encadrée : « zone soumise à encadrement des loyers », loyer de base, loyer de référence majoré.
- Montant du dépôt de garantie.
- Honoraires part locataire **TTC**, en distinguant la part état des lieux.
- Caractère meublé le cas échéant.
- Commune (et arrondissement).
- Surface habitable en m².
- Classes énergie et climat + estimation des dépenses annuelles d'énergie (avec année de référence) ; mention « logement à consommation énergétique excessive » pour F et G.
- En zone concernée par l'état des risques (`data/diagnostics-location.md`) : « Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : www.georisques.gouv.fr ».

## Étape 3 : rédaction

- **Titre** : ≤ 120 caractères, type + pièces + surface + quartier/commune + un atout réel. Pas de superlatifs creux.
- **Corps** : du concret et vérifiable (orientation, étage, rangements, transports, date de disponibilité). Structure courte : accroche, le bien, l'immeuble/le quartier, les conditions financières, contact. Interdit : mensonge, surface embellie, photos trompeuses, critères discriminatoires (« pas de… »). Aucun public ne peut être exclu.
- Utilisez `templates/annonce.md` comme squelette.

## Cas colocation

Le régime change l'annonce. En **bail collectif** : une annonce unique pour le logement entier, qui précise le nombre de chambres et la destination colocation. En **baux individuels** : une annonce par chambre, avec la surface de l'espace privatif, les pièces communes accessibles et le loyer de la chambre ; en zone d'encadrement, la somme des loyers de toutes les chambres reste plafonnée au loyer applicable au logement entier (art. 8-1, loi de 1989). Dans les deux cas, les mentions obligatoires de l'étape 2 s'appliquent inchangées.

## Étape 4 : livrer et vérifier

Produisez l'annonce complète, plus la liste de ce qui a été vérifié et de ce qui reste à confirmer par un humain (montants, arrêté préfectoral en vigueur). Rappelez que les plafonds et listes de villes évoluent : les fiches `data/` sont datées.

## Références

Le droit stable de ce skill vit dans les fiches `data/` ci-dessous : consultez-les d'abord, ne repartez pas chercher sur le web ce qu'elles contiennent déjà. Une vérification en ligne (source officielle : Légifrance, service-public.fr) reste de mise quand une fiche le demande, quand sa « Prochaine revue » est dépassée, quand le cas dépend d'un montant ou d'une liste locale (arrêté préfectoral, quartier), ou quand la fiche et le document en main se contredisent.

- `data/dpe-calendrier.md` — interdictions de location, gel F/G, mentions énergie de l'annonce (loi Climat et Résilience).
- `data/zones-tendues.md` — la commune est-elle en zone tendue, et ce que ça change (décret n° 2013-392).
- `data/fixation-loyer.md` — plafond de relocation et ses exceptions (art. 18, loi de 1989, décret annuel).
- `data/encadrement-loyers.md` — territoires au loyer de référence majoré et mentions d'annonce associées (art. 140, loi ELAN).
- `data/honoraires-plafonds.md` — plafonds de la part locataire par zone (décret n° 2014-890, arrêté du 13 novembre 2025).
- `data/diagnostics-location.md` — état des risques et mention Géorisques dès l'annonce (art. L125-5 du code de l'environnement).

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : enregistrez l'annonce dans un fichier `annonces/<ref-bien>-<date>.md` et proposez de noter les préférences apprises (ton du proprio, quartier, tournures qui marchent) dans un fichier de mémoire local.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : proposez de sauvegarder l'annonce comme version du bien (`memoria_annonce_save`) et les apprentissages durables dans la mémoire d'agence (`memoria_memoire_upsert`), jamais sans l'accord de l'humain pour les consignes.
