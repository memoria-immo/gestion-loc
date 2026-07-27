---
name: annonce-location
description: Rédiger une annonce de location conforme au droit français — mentions obligatoires, encadrement des loyers, DPE, honoraires. À utiliser pour créer ou corriger l'annonce d'un logement à louer (vide ou meublé, résidence principale).
---

# Annonce de location conforme

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.

Tu aides un professionnel de l'immobilier (ou un bailleur particulier) à rédiger une annonce de location publiable, exacte et conforme. Une annonce non conforme expose à des amendes administratives ; une annonce médiocre fait perdre des semaines de vacance locative. Les deux comptent.

## Étape 0 — Rassembler les faits

Avant d'écrire, collecte (demande ce qui manque, ne l'invente jamais) :

- **Bien** : type, surface habitable (m², loi Boutin), nombre de pièces, étage/ascenseur, commune (+ arrondissement le cas échéant — pas d'adresse exacte dans l'annonce publiée), meublé ou vide, extérieur, stationnement, chauffage.
- **Argent** : loyer hors charges, charges (provision ou forfait — le préciser), dépôt de garantie, honoraires TTC part locataire (dont part état des lieux), date de disponibilité.
- **Énergie** : classe DPE, classe GES, estimation des dépenses annuelles d'énergie et année de référence des prix.
- **Contexte agence** (si disponible) : préférences du propriétaire, ton maison, historique du bien.

## Étape 1 — Contrôles de conformité (bloquants)

Applique dans l'ordre, en t'appuyant sur les fiches `data/` du repo :

1. **DPE** (`data/dpe-calendrier.md`) : classe G → **stop**, le logement est interdit à la location depuis le 1er janvier 2025 ; le signaler et proposer d'orienter vers un audit/travaux plutôt que de publier. Classe F → publiable mais mention « Logement à consommation énergétique excessive » obligatoire, loyer gelé, et fin programmée en 2028 : le dire au bailleur.
2. **Encadrement des loyers** (`data/encadrement-loyers.md`) : si la commune est en zone encadrée, exige le loyer de référence majoré applicable (arrêté préfectoral, quartier, époque, meublé/vide) et vérifie loyer de base ≤ référence majoré. Complément de loyer : uniquement justifié, jamais pour un F/G.
3. **Honoraires** (`data/honoraires-plafonds.md`) : vérifie la part locataire contre le plafond de la zone (12,10 / 10,09 / 8,07 €/m² + 3,03 €/m² d'état des lieux pour les baux 2026) et contre la part bailleur.
4. **Dépôt de garantie** : maximum 1 mois de loyer hors charges (vide), 2 mois (meublé).

Si un contrôle échoue, dis-le clairement AVANT de rédiger, avec la règle et la source.

## Étape 2 — Mentions obligatoires dans l'annonce

- Loyer mensuel **charges comprises**, suivi de « par mois » et « charges comprises », puis le détail : loyer de base, modalité des charges (provision avec régularisation ou forfait), et le cas échéant complément de loyer.
- En zone encadrée : « zone soumise à encadrement des loyers », loyer de base, loyer de référence majoré.
- Montant du dépôt de garantie.
- Honoraires part locataire **TTC**, en distinguant la part état des lieux.
- Caractère meublé le cas échéant.
- Commune (et arrondissement).
- Surface habitable en m².
- Classes énergie et climat + estimation des dépenses annuelles d'énergie (avec année de référence) ; mention « logement à consommation énergétique excessive » pour F et G.

## Étape 3 — Rédaction

- **Titre** : ≤ 120 caractères, type + pièces + surface + quartier/commune + un atout réel. Pas de superlatifs creux.
- **Corps** : du concret et vérifiable (orientation, étage, rangements, transports, date de disponibilité). Structure courte : accroche, le bien, l'immeuble/le quartier, les conditions financières, contact. Interdit : mensonge, surface embellie, photos trompeuses, critères discriminatoires (« pas de… ») — aucun public ne peut être exclu.
- Utilise `templates/annonce.md` comme squelette.

## Étape 4 — Livrer et vérifier

Produis l'annonce complète + une check-list de ce qui a été vérifié et de ce qui reste à confirmer par un humain (montants, arrêté préfectoral en vigueur). Rappelle que les plafonds et listes de villes évoluent : les fiches `data/` sont datées.

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suis-le.

- **Sans outil externe** : enregistre l'annonce dans un fichier `annonces/<ref-bien>-<date>.md` et propose de noter les préférences apprises (ton du proprio, quartier, tournures qui marchent) dans un fichier de mémoire local.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : propose de sauvegarder l'annonce comme version du bien (`memoria_annonce_save`) et les apprentissages durables dans la mémoire d'agence (`memoria_memoire_upsert`) — jamais sans l'accord de l'humain pour les consignes.
