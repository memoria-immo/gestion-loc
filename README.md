# location

**Des skills qui apprennent la mise en location en France à l'agent IA de votre agence.**

Une mise en location en France, c'est un empilement de règles : loi du 6 juillet 1989, loi ALUR, loi Hoguet, loi Climat et Résilience, décret sur les pièces justificatives, encadrement des loyers, plafonds d'honoraires, calendrier DPE… Personne ne retient tout ça de tête. Votre agent IA, si.

**location** est une collection de skills en Markdown pur, gratuits et open source, qui donnent à n'importe quel agent IA (Claude, Claude Code, Cursor, Windsurf, ChatGPT…) les règles et les réflexes du métier. Votre agent vérifie qu'un bien est louable, rédige une annonce conforme, contrôle les dossiers de candidature, prépare le bail et l'état des lieux d'entrée, écrit les emails aux candidats. Pas de compte, pas d'API : des fichiers texte que votre agent lit, et c'est tout.

> Maintenu par l'équipe de [memoria](https://memoria.immo).

## Les skills

| Skill | Ce qu'il fait |
|---|---|
| [`louabilite-diagnostics`](skills/louabilite-diagnostics/SKILL.md) | Vérifie qu'un bien peut être loué (décence, DPE) et contrôle le dossier de diagnostics : lesquels sont exigés, lesquels manquent ou expirent. |
| [`annonce-location`](skills/annonce-location/SKILL.md) | Rédige une annonce de location conforme : mentions obligatoires, encadrement des loyers, DPE, honoraires, plafonds 2026. |
| [`dossier-candidature`](skills/dossier-candidature/SKILL.md) | Constitue et analyse un dossier de candidature : pièces exigibles (décret n° 2015-1437), solvabilité, garants, non-discrimination. |
| [`bail-mandat`](skills/bail-mandat/SKILL.md) | Lit un bail d'habitation ou un mandat de gestion, en extrait les champs clés et vérifie les clauses et annexes obligatoires. |
| [`redaction-bail`](skills/redaction-bail/SKILL.md) | Prépare le dossier de bail à signer : pré-remplit le modèle de l'agence, contrôle clauses et annexes, rédige l'acte de cautionnement. |
| [`etat-des-lieux-entree`](skills/etat-des-lieux-entree/SKILL.md) | Prépare l'état des lieux d'entrée : cadre légal, grille pièce par pièce, compteurs, clés, délais de complément. |
| [`emails-locatifs`](skills/emails-locatifs/SKILL.md) | Rédige les emails du cycle locatif : réponse à un lead, invitation à visiter, demande de pièces, acceptation, refus, relances. |

Les skills s'appuient sur des fiches de référence dans [`data/`](data/) (calendrier DPE, villes en encadrement des loyers, zones tendues, fixation du loyer à la relocation, préavis du locataire, plafonds d'honoraires, pièces justificatives, décence, diagnostics, clauses et annexes du bail) et des modèles prêts à l'emploi dans [`templates/`](templates/). À côté des sept skills métier, un guide de démarrage ([`demarrage`](skills/demarrage/SKILL.md)) accueille la première utilisation : il présente les skills, crée votre mémo d'agence en deux questions et enchaîne sur votre tâche du moment.

**Par où commencer :** [`PARCOURS.md`](PARCOURS.md) cartographie tout le cycle, de la signature du mandat à l'entrée du locataire, et situe chaque skill dans le parcours. Votre agence a déjà ses outils et ses documents ? C'est prévu : le [mémo d'agence](templates/memo-agence.md) recense ce que vous possédez, l'agent le remplit en travaillant (une question au bon moment, jamais un questionnaire), et vos documents priment toujours sur les modèles du repo.

## Installation

**Option 1 (plugin Claude, recommandé).**

Dans **Claude Desktop** (l'application Claude) : Paramètres → Plugins → « Ajouter une place de marché » → « Ajouter depuis un dépôt », et collez l'adresse du dépôt :

```
https://github.com/memoria-immo/location
```

Sélectionnez la place de marché et lancez la synchronisation : le plugin **Location** apparaît, cliquez sur « + » pour l'installer. Sa fiche affiche la version installée et un bouton « Mettre à jour » quand une nouvelle version est publiée.

Dans **Claude Code**, deux commandes suffisent :

```
/plugin marketplace add memoria-immo/location
/plugin install location@location
```

(ou via l'interface : Customize → Plugins → ajouter la marketplace `memoria-immo/location`). Les mises à jour ne sont pas automatiques : pour les recevoir, `/plugin marketplace update location` puis `/plugin update location@location`.

Dans les deux cas, les sept skills métier et le guide de démarrage s'installent d'un coup, avec leurs fiches de référence et leurs modèles. Une fois installé, dites « aidez-moi à démarrer » : l'agent se présente, crée votre mémo d'agence (deux questions, pas un questionnaire) et vous met au travail. Le [journal des versions](CHANGELOG.md) raconte ce qui change, en français courant.

> Pas de plugins dans votre environnement (Cowork, Cursor, Windsurf, ChatGPT…) ? Ajoutez les fichiers à la main : le `SKILL.md` du skill voulu dans votre projet, ou le dossier du skill zippé dans vos capacités. Pas besoin de zipper vous-même : chaque [release GitHub](https://github.com/memoria-immo/location/releases) fournit un zip autoportant par skill, fiches et modèles inclus.

**Option 2 (cloner le repo) :**

```bash
git clone https://github.com/memoria-immo/location.git
```

Puis indiquez le dossier à votre agent (dans Cursor/Windsurf : référencez les fichiers dans votre contexte ; dans Claude Code sans plugin : déposez les dossiers de `skills/` dans `.claude/skills/` ; dans Claude.ai : ajoutez le SKILL.md du skill voulu à votre projet).

**Option 3 (un seul skill) :** copiez le contenu du `SKILL.md` qui vous intéresse dans les instructions de votre agent. Chaque skill est autonome.

### Utiliser avec ChatGPT

Portage manuel en Custom GPT : collez le contenu du `SKILL.md` du skill voulu dans les instructions du GPT, et ajoutez les fichiers de [`data/`](data/) et [`templates/`](templates/) dans ses connaissances (knowledge files). La persistance memoria n'existe pas côté ChatGPT : l'étape « Persistance (optionnel) » de chaque skill produit alors simplement des fichiers. Un GPT officiel, maintenu par l'équipe, suivra.

## Exemple

> « Rédigez l'annonce pour le T2 de 45 m² au 3e étage, 12 rue des Lices à Angers, loyer 620 € + 60 € de charges, DPE D, disponible au 1er septembre. »

L'agent applique `annonce-location` : il vérifie les mentions obligatoires, contrôle que la commune n'est pas en zone d'encadrement, calcule le plafond d'honoraires applicable, signale ce qui manque (classe GES, montant du dépôt de garantie…) et produit une annonce publiable.

## Sauvegarder ce que votre agence apprend

Ces skills fonctionnent sans aucun outil externe : l'agent produit des fichiers, vous les rangez où vous voulez.

Mais une agence, c'est de la mémoire : les préférences d'un propriétaire, l'historique d'un bien, vos tournures d'emails, vos règles maison. Si vous voulez que votre agent **retienne** tout ça d'une session à l'autre et le partage avec toute l'équipe, chaque skill se termine par une étape de persistance optionnelle compatible avec [memoria](https://memoria.immo), la mémoire d'agence servie à vos agents IA via MCP. Sans memoria, cette étape produit simplement un fichier local. Rien n'est jamais bloqué.

## Ce que ce projet n'est pas

Ces skills sont une aide à la décision, pas un conseil juridique. Ils ne remplacent ni un administrateur de biens titulaire de la carte G, ni un avocat, ni un notaire. Les règles évoluent (plafonds revalorisés, villes ajoutées à l'encadrement, calendrier DPE…) : les fiches de `data/` sont datées, vérifiez les montants avant un acte engageant. Signalez toute règle obsolète via une issue.

## Contribuer

Les contributions sont bienvenues : correction d'une règle, nouveau template d'email, nouveau skill (quittancement et révision IRL, régularisation de charges, préavis et sortie, impayés, GLI…). Ouvrez une issue ou une PR. Une règle : chaque affirmation juridique doit citer sa source (texte, article, arrêté, date).

## Licence

[MIT](LICENSE) : utilisez, modifiez, redistribuez librement, y compris commercialement.
