# Contribuer à gestion-loc

Merci de contribuer. Cinq règles :

1. **Toute affirmation juridique cite sa source** : texte (loi, décret, arrêté), article, et date. Les fiches `data/` portent en tête une ligne « Dernière vérification : … » ; mettez-la à jour quand vous vérifiez.
2. **Les skills restent agnostiques** : du Markdown lisible par n'importe quel agent, pas de dépendance à un outil. Les intégrations (memoria ou autres) restent dans la section « Persistance (optionnel) » en fin de skill. Cette section nomme l'outil et l'intention (« journaliser via `memoria_email_log` »), jamais son contrat technique (idempotence, formats, énumérations, versioning) : les contrats vivent dans les skills d'orchestration de l'outil concerné, pas ici.
3. **Une PR = un sujet** : une règle corrigée, un template ajouté, un skill nouveau.
4. **Idées de skills bienvenues** : quittancement et révision IRL, régularisation de charges, préavis et sortie (avec l'état des lieux de sortie), GLI/Visale, impayés (phase amiable).
5. **Le frontmatter des skills est minimal et vérifié** : `name` (= nom du dossier), `metadata.last_updated` (date AAAA-MM-JJ de la dernière revue humaine du skill — pas un miroir automatique des fiches `data/`), et `description` en bloc `>-`, **600 caractères maximum** (elle est chargée en contexte à chaque session, pour les 8 skills à la fois), terminée par une ligne « Déclencheurs : … » qui n'ajoute que du vocabulaire absent du reste de la description. Pas de champ `includes` : Claude Code l'ignore, et le packaging (`scripts/package.mjs`) embarque déjà toutes les fiches et tous les modèles dans chaque zip.

Pour signaler une règle obsolète sans proposer de correctif : ouvrez une issue avec la source qui contredit la fiche.
