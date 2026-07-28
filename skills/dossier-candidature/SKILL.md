---
name: dossier-candidature
description: "Constituer, vérifier et analyser un dossier de candidature locative : pièces exigibles (décret n° 2015-1437), solvabilité, garants, non-discrimination. À utiliser quand un candidat postule pour une location ou qu'il faut comparer des dossiers."
---

# Dossier de candidature locative

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.
>
> **Avant de commencer** : si un fichier `memo-agence.md` existe à la racine de l'espace de travail, lisez-le ; les outils et documents de l'agence priment sur les modèles du repo. S'il n'existe pas, ne le faites pas remplir : demandez uniquement ce qui manque pour la tâche en cours, et proposez d'y noter la réponse.

Vous aidez à constituer et analyser des dossiers de candidature de façon rigoureuse ET légale. Deux risques symétriques : accepter un dossier fragile (impayés), ou demander/refuser n'importe comment (amendes, discrimination). Ce skill protège des deux.

## Étape 0 : cadre

Chargez la fiche `data/pieces-justificatives.md`. Règles d'or :

- La liste des pièces exigibles est **limitative** (décret n° 2015-1437). Jamais de relevé bancaire, jamais de chèque de réservation, jamais de pièce hors liste : amende jusqu'à 3 000 € / 15 000 €.
- Les critères de sélection doivent être **objectifs, écrits, appliqués uniformément** à tous les candidats. Aucun critère discriminatoire, même implicite.
- Un dossier **DossierFacile** labellisé est réputé conforme : l'accepter tel quel.

## Étape 1 : contrôle des pièces

Pour chaque personne du dossier (candidat·e·s, garant·e·s), vérifiez la présence d'une pièce par catégorie :

| Catégorie | Candidat | Garant |
|---|---|---|
| Identité | ☐ | ☐ |
| Domicile | ☐ | ☐ |
| Activité professionnelle | ☐ | ☐ |
| Ressources | ☐ (cumul possible) | ☐ |

Produisez la liste exacte de ce qui manque, formulée pour être envoyée telle quelle au candidat (voir skill `emails-locatifs`). Signalez toute pièce fournie qui n'aurait pas dû être demandée, et ne l'exploitez pas.

## Étape 2 : analyse de solvabilité

- **Revenus retenus** : revenus nets récurrents (salaires, pensions, prestations pérennes, revenus d'activité stabilisés). Prudence sur primes exceptionnelles et revenus variables (moyenne sur 3 mois minimum, idéalement l'avis d'imposition en recoupement).
- **Taux d'effort** = loyer charges comprises / revenus nets mensuels. L'usage de place est ≤ 33–35 %, une **pratique de marché, pas une règle de droit** : le dire, et le paramétrer selon la politique de l'agence.
- **Cohérence** : croiser bulletins de salaire ↔ avis d'imposition ↔ employeur (ordre de grandeur, dates, ancienneté). Signaler les incohérences factuellement, sans accuser : un écart peut avoir une explication légitime.
- **Garanties** : garant personne physique (mêmes vérifications, usage courant ≥ 3× le loyer), garantie Visale (gratuite, à privilégier pour les jeunes/CDD), GLI (attention : la plupart des contrats GLI interdisent le cumul avec un garant personne physique, sauf étudiants/apprentis).

## Cas colocation

Un dossier complet par colocataire, avec les mêmes pièces et les mêmes interdits du décret. La solvabilité s'apprécie selon la structure du bail : en **bail collectif** avec clause de solidarité, les revenus se cumulent et un garant peut couvrir l'ensemble des colocataires ; en **baux individuels**, chaque colocataire est évalué seul, sur le loyer de sa chambre. L'acte de cautionnement précise qui il garantit, et le non-cumul GLI + garant personne physique s'apprécie bail par bail.

## Étape 3 : synthèse comparative

Si plusieurs dossiers : tableau comparatif sur critères objectifs uniquement (complétude, taux d'effort, type de garantie, date de disponibilité, ancienneté professionnelle). **Jamais** de colonne ou de commentaire sur l'origine, le nom, la situation familiale, l'âge, la santé, etc. La décision finale appartient au bailleur ; votre rôle est de présenter des faits vérifiables et sourcés.

En cas de refus : aucune obligation légale de motiver. Réponse neutre et rapide (voir `emails-locatifs`) ; ne jamais formuler par écrit un motif qui pourrait être discriminatoire.

## Étape 4 : vérifier

Relisez : ai-je demandé uniquement des pièces de la liste ? Mes critères sont-ils tous objectifs ? Mes calculs de taux d'effort sont-ils refaits (pas estimés) ? Les données personnelles collectées sont-elles limitées au nécessaire et leur conservation bornée (RGPD : pas de conservation des dossiers refusés au-delà de quelques mois sans accord) ?

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suivez-le.

- **Sans outil externe** : produisez la synthèse en `candidatures/<bien>/<candidat>-synthese.md` ; les documents du candidat restent où l'humain les stocke, ne les dupliquez pas inutilement.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : créez/mettez à jour les personnes (`memoria_personne_upsert`), la candidature et son avancement dans le kanban (`memoria_candidature_create` / `memoria_candidature_advance`), et liez les documents (`memoria_document_link`). Les préférences durables du bailleur (« M. Untel veut toujours deux garants ») vont en mémoire scopée (`memoria_memoire_upsert`) avec confirmation humaine.
