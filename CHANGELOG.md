# Journal des versions

Ce journal raconte ce qui change à chaque version, en français courant. Si vous avez installé gestion-loc comme plugin Claude, chaque mise à jour du plugin vous apporte tout ce qui est décrit ici.

## Version 0.2 (28 juillet 2026)

- **Un guide de démarrage** (`demarrage`) : à la première utilisation, ou quand vous demandez « par où commencer ? », « que pouvez-vous faire ? », l'agent présente les skills, crée votre mémo d'agence en deux questions (nom, communes ; il déduit lui-même encadrement des loyers et zone d'honoraires, et vous les fait confirmer), puis enchaîne sur votre tâche du moment. Jamais de questionnaire : le reste du mémo se remplit en travaillant.
- **Le mémo d'agence consulté systématiquement** : chaque skill métier commence désormais par lire `memo-agence.md` s'il existe : vos outils et vos documents priment sur les modèles du repo, avec ou sans passage par le guide de démarrage.

## Version 0.1 (27 juillet 2026)

Première version publique.

- **Quatre skills** : rédiger une annonce de location conforme (`annonce-location`), constituer et analyser un dossier de candidature (`dossier-candidature`), lire et contrôler un bail ou un mandat de gestion (`bail-mandat`), écrire les emails du cycle locatif (`emails-locatifs`).
- **Les fiches de référence**, toutes datées et sourcées : le calendrier DPE (logements G interdits à la location depuis 2025, F en 2028), l'encadrement des loyers (villes concernées en 2026), les plafonds d'honoraires applicables aux baux signés depuis le 1er janvier 2026 (arrêté du 13 novembre 2025), et la liste des pièces justificatives qu'on peut exiger d'un candidat, avec celles qui sont interdites.
- **Les modèles** : une trame d'annonce, six emails types (réponse à un lead, invitation à visiter, demande de pièces, acceptation, refus, accusé de préavis) et le mémo d'agence, que votre agent remplit au fil du travail pour retenir vos façons de faire.
- **La carte du parcours** (`PARCOURS.md`) : les 6 phases et 24 actions du cycle locatif, de la signature du mandat à l'entrée du locataire, avec le bon skill au bon endroit.
