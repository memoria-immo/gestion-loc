# Modèle d'annonce de location

> Squelette utilisé par le skill `annonce-location`. Les variables sont entre `{{ }}`. Supprimer les blocs non applicables.

## Titre (≤ 120 caractères)

{{type}} {{nb_pieces}} pièces {{surface}} m² — {{quartier_ou_commune}}{{atout_court}}

## Corps

{{accroche_une_phrase}}

**Le logement.** {{type}} de {{surface}} m² ({{nb_pieces}} pièces, {{nb_chambres}} chambre·s), au {{etage}}{{ascenseur}}. {{description_pieces_orientation_rangements}}. {{meuble_ou_vide}}. Chauffage {{chauffage}}. {{exterieur_stationnement_cave}}.

**L'immeuble et le quartier.** {{immeuble}}. {{transports_commerces_ecoles}}.

**Disponibilité.** {{date_disponibilite}}.

**Conditions financières.**
- Loyer : {{loyer_cc}} € par mois charges comprises (loyer de base {{loyer_hc}} € + {{charges}} € de {{provision_ou_forfait}} de charges).
- <!-- Zone encadrée uniquement --> Zone soumise à encadrement des loyers. Loyer de référence majoré : {{ref_majore}} €. Loyer de base : {{loyer_hc}} €. {{complement_loyer_et_justification}}
- Dépôt de garantie : {{depot}} €.
- Honoraires à la charge du locataire : {{honoraires_ttc}} € TTC, dont {{honoraires_edl}} € TTC pour l'état des lieux d'entrée.

**Diagnostic énergétique.** Classe énergie : {{classe_dpe}}. Classe climat : {{classe_ges}}. Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre {{energie_min}} € et {{energie_max}} € (prix de l'énergie indexés au {{annee_reference}}). <!-- F ou G uniquement --> Logement à consommation énergétique excessive.

**Contact.** {{contact}} — {{reference_annonce}}.
