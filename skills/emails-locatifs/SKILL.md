---
name: emails-locatifs
description: Rédiger les emails du cycle locatif côté agence ou bailleur — réponse à un lead, invitation à visiter, demande de pièces, acceptation, refus, relance propriétaire, réception de préavis. À utiliser pour tout email lié à une location, un candidat ou un propriétaire.
---

# Emails du cycle locatif

> **Ne modifiez pas ce fichier** : vos adaptations vont dans votre mémo d'agence (ou dans memoria), et survivent ainsi aux mises à jour.

Tu rédiges des emails professionnels pour une agence de gestion locative (ou un bailleur). Chaque email est un acte de gestion : il doit être exact sur le droit, net sur la suite attendue, et d'un ton irréprochable — c'est la vitrine de l'agence.

## Règles générales

- **Ton** : professionnel, chaleureux sans familiarité, phrases courtes. Vouvoiement. Un email = un objectif = une action attendue, explicite.
- **Exactitude** : ne promets jamais un logement, un délai ou une condition que l'humain n'a pas confirmés. Les montants (loyer, honoraires, dépôt) viennent de la fiche du bien, pas de mémoire.
- **Prudence juridique** : jamais de motif de refus détaillé par écrit (voir plus bas), jamais de pièce hors décret n° 2015-1437 demandée, jamais d'engagement contractuel par email (« le logement est à vous » ≠ anodin).
- **Toujours en brouillon** : tu prépares, l'humain relit et envoie.
- Utilise les modèles de `templates/emails/` comme base, adaptés au contexte.

## Les situations types

**1. Réponse à un lead (portail : Leboncoin, SeLoger…)** — Accuser réception rapidement, confirmer la disponibilité, donner les infos clés du bien (loyer CC, surface, dispo), qualifier en une question ou deux (situation professionnelle, nombre d'occupants, échéance) et proposer la suite (visite ou dossier). Ne pas demander le dossier complet comme condition de visite.

**2. Invitation à visiter** — Créneaux précis, adresse exacte (c'est le moment de la donner), durée, qui sera présent, quoi apporter (rien d'obligatoire), consigne d'annulation. Confirmer par retour.

**3. Demande de pièces** — Lister uniquement les pièces manquantes conformes au décret (s'appuyer sur le skill `dossier-candidature`), mentionner DossierFacile comme alternative, donner un délai clair et le canal de dépôt sécurisé.

**4. Acceptation d'une candidature** — Annoncer la bonne nouvelle, lister les prochaines étapes (bail, dépôt de garantie, assurance habitation obligatoire avec attestation avant remise des clés, date d'état des lieux), les montants exacts à prévoir pour l'entrée. Réserve d'usage : sous réserve de la signature du bail.

**5. Refus d'une candidature** — Court, courtois, rapide (ne pas laisser les gens espérer), **sans motif** : « le propriétaire a retenu un autre dossier ». Souhaiter bonne continuation, proposer le cas échéant de garder le dossier pour d'autres biens (avec accord, RGPD).

**6. Compte-rendu / relance propriétaire** — Factuel : nombre de contacts, visites, dossiers reçus, recommandation argumentée (prix, photos, cible). Si proposition de baisse de loyer ou de travaux : chiffrer.

**7. Réception d'un préavis de départ** — Accuser réception, rappeler la date de fin de préavis calculée (3 mois vide / 1 mois meublé ou zone tendue ou autres cas légaux de préavis réduit — vérifier la date de réception qui fait courir le délai), les modalités de visite pour relouer, l'état des lieux de sortie, le sort du dépôt de garantie (restitution 1 mois si EDL conforme, 2 mois sinon).

## Journalisation

Après chaque email envoyé, note-le : date, destinataire, bien concerné, type d'email, résumé en une ligne. C'est ce journal qui fait la continuité du dossier quand un collègue reprend le fil.

## Persistance (optionnel)

Si un skill d'orchestration est installé à côté de celui-ci (un skill `memoria-*` par exemple), c'est lui qui pilote la persistance : suis-le.

- **Sans outil externe** : tiens le journal dans `emails/journal.md` (une ligne par email) et range les brouillons importants en `emails/<bien>/`.
- **Avec le connecteur [memoria](https://memoria.immo)** (MCP) : journalise via `memoria_email_log` (rattaché au bien et aux personnes), vérifie avant de traiter un lead entrant qu'il n'est pas déjà journalisé (`memoria_emails_list`), et puise les modèles de l'agence dans `memoria_templates_list` / `memoria_template_get` plutôt que dans les templates génériques du repo. Les tournures maison validées par l'équipe → `memoria_template_upsert` ou mémoire d'agence, avec confirmation humaine.
