# Contribuer à gestion-loc

Merci de contribuer. Quatre règles :

1. **Toute affirmation juridique cite sa source** : texte (loi, décret, arrêté), article, et date. Les fiches `data/` portent en tête une ligne « Dernière vérification : … » ; mettez-la à jour quand vous vérifiez.
2. **Les skills restent agnostiques** : du Markdown lisible par n'importe quel agent, pas de dépendance à un outil. Les intégrations (memoria ou autres) restent dans la section « Persistance (optionnel) » en fin de skill. Cette section nomme l'outil et l'intention (« journaliser via `memoria_email_log` »), jamais son contrat technique (idempotence, formats, énumérations, versioning) : les contrats vivent dans les skills d'orchestration de l'outil concerné, pas ici.
3. **Une PR = un sujet** : une règle corrigée, un template ajouté, un skill nouveau.
4. **Idées de skills bienvenues** : état des lieux, quittancement et révision IRL, régularisation de charges, préavis et sortie, GLI/Visale, colocation, impayés (phase amiable).

Pour signaler une règle obsolète sans proposer de correctif : ouvrez une issue avec la source qui contredit la fiche.
