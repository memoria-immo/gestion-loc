# Journal des versions

Ce journal raconte ce qui change à chaque version, en français courant. Si vous avez installé **location** comme plugin Claude, chaque mise à jour du plugin vous apporte tout ce qui est décrit ici.

## Version 0.5 (3 août 2026)

- **gestion-loc devient location.** Le projet couvre la mise en location — de la prise de mandat à l'installation du locataire — et son nom le dit désormais. Le repo devient `memoria-immo/location` (l'ancienne adresse redirige automatiquement) et l'identifiant du plugin devient `location`. Si vous aviez installé le plugin sous l'ancien identifiant, réinstallez-le : `/plugin marketplace add memoria-immo/location` puis `/plugin install location@location`. La gestion locative au quotidien (quittancement, régularisation de charges, sortie, impayés…) reste un périmètre distinct, à venir.

## Version 0.4 (28 juillet 2026)

- **Trois nouvelles fiches de référence**, datées et sourcées : les zones tendues (les 28 agglomérations historiques, l'extension de 2023, ce que la zone change — préavis d'un mois, plafonnement de la relocation, taxe sur les logements vacants — et les trois zonages à ne pas confondre), la fixation du loyer à la mise en location (gel des F et G, plafond de relocation en zone tendue et ses exceptions, encadrement, avec un cas travaillé : Toulouse, logement vacant depuis plus de 18 mois), et le préavis du locataire (délais, cas de préavis réduit, forme et point de départ).
- **Les fiches d'abord, le web ensuite** : chaque skill métier se termine désormais par une section « Références » qui liste ses fiches `data/` et pose la règle — le droit stable est dans les fiches, la recherche en ligne sert à vérifier ce qui évolue (arrêtés locaux, revues échues), pas à retrouver ce que les fiches contiennent déjà.
- **Zone tendue n'est pas encadrement des loyers** : la fiche d'encadrement le dit désormais noir sur blanc (Toulouse est en zone tendue sans encadrement), et les skills d'annonce et de bail vérifient aussi le plafond de relocation, pas seulement le loyer de référence.
- **Un frontmatter plus utile** : chaque skill porte sa date de dernière revue (`metadata.last_updated`) et une description enrichie de mots-clés déclencheurs, plafonnée à 600 caractères — c'est elle que l'agent lit pour choisir le bon skill. Les contrôles automatiques vérifient le tout.

## Version 0.3 (28 juillet 2026)

- **Trois nouveaux skills** qui complètent le parcours jusqu'à l'entrée du locataire : vérifier qu'un bien peut être loué et contrôler ses diagnostics (`louabilite-diagnostics`), préparer le bail à signer et l'acte de cautionnement (`redaction-bail`), préparer l'état des lieux d'entrée (`etat-des-lieux-entree`).
- **Trois nouvelles fiches de référence**, datées et sourcées : les critères de décence, les diagnostics exigibles en location avec leurs durées de validité, et les clauses interdites et annexes obligatoires du bail, qui devient la référence commune de `bail-mandat` et `redaction-bail`.
- **La colocation traitée là où elle change les règles** : annonce par chambre ou annonce unique, un dossier par colocataire, solidarité en bail collectif, décence des espaces privatifs en baux individuels.
- **Deux modèles de plus** : la grille de préparation d'état des lieux d'entrée, et l'email de compte-rendu au propriétaire (le skill `emails-locatifs` décrivait la situation, le modèle manquait).

## Version 0.2 (28 juillet 2026)

- **Un guide de démarrage** (`demarrage`) : à la première utilisation, ou quand vous demandez « par où commencer ? », « que pouvez-vous faire ? », l'agent présente les skills, crée votre mémo d'agence en deux questions (nom, communes ; il déduit lui-même encadrement des loyers et zone d'honoraires, et vous les fait confirmer), puis enchaîne sur votre tâche du moment. Jamais de questionnaire : le reste du mémo se remplit en travaillant.
- **Le mémo d'agence consulté systématiquement** : chaque skill métier commence désormais par lire `memo-agence.md` s'il existe : vos outils et vos documents priment sur les modèles du repo, avec ou sans passage par le guide de démarrage.

## Version 0.1 (27 juillet 2026)

Première version publique.

- **Quatre skills** : rédiger une annonce de location conforme (`annonce-location`), constituer et analyser un dossier de candidature (`dossier-candidature`), lire et contrôler un bail ou un mandat de gestion (`bail-mandat`), écrire les emails du cycle locatif (`emails-locatifs`).
- **Les fiches de référence**, toutes datées et sourcées : le calendrier DPE (logements G interdits à la location depuis 2025, F en 2028), l'encadrement des loyers (villes concernées en 2026), les plafonds d'honoraires applicables aux baux signés depuis le 1er janvier 2026 (arrêté du 13 novembre 2025), et la liste des pièces justificatives qu'on peut exiger d'un candidat, avec celles qui sont interdites.
- **Les modèles** : une trame d'annonce, six emails types (réponse à un lead, invitation à visiter, demande de pièces, acceptation, refus, accusé de préavis) et le mémo d'agence, que votre agent remplit au fil du travail pour retenir vos façons de faire.
- **La carte du parcours** (`PARCOURS.md`) : les 6 phases et 24 actions du cycle locatif, de la signature du mandat à l'entrée du locataire, avec le bon skill au bon endroit.
