# Le parcours locatif — du mandat à l'entrée du locataire

Cette carte décrit toutes les actions d'un professionnel de la gestion locative, de la signature du mandat avec un propriétaire jusqu'à l'installation du locataire. Elle sert de table d'orientation : à chaque phase, quels skills du repo s'appliquent, et **ce que l'agence possède peut-être déjà**.

## Le principe : l'agence existante d'abord

Ces skills ne s'adressent pas qu'à une agence qui démarre. Une agence installée a déjà ses outils, ses documents types, ses règles maison. Le mécanisme est le suivant :

1. **Un mémo d'agence** (`memo-agence.md`, modèle dans [`templates/memo-agence.md`](templates/memo-agence.md)) recense ce que l'agence possède : outils, documents types, règles de sélection, prestataires. L'agent le consulte **avant chaque skill**.
2. **Question juste-à-temps** : si l'information nécessaire manque au mémo, l'agent pose la question à ce moment-là (« Avez-vous déjà une trame de bail ? Votre propre barème d'honoraires ? »), une ou deux questions maximum, note la réponse dans le mémo, et continue. Jamais de grand questionnaire d'onboarding : le mémo se remplit en travaillant.
3. **Le document de l'agence prime toujours** sur les modèles génériques de `templates/`. Les modèles du repo sont un filet, pas une norme.
4. Avec [memoria](https://memoria.immo), ce mémo devient superflu : les templates d'agence (`memoria_templates_list`) et la mémoire d'agence (`memoria_memoire_list`) jouent ce rôle, versionnés et partagés par toute l'équipe.

Dans les phases ci-dessous, les encadrés **« L'agence a peut-être déjà »** listent les questions à poser au premier passage.

---

## Phase 1 — Prise de mandat avec le propriétaire

1. **Premier contact et visite conseil** : visiter le bien, évaluer son état, estimer le loyer de marché — et vérifier ce que le droit permet (encadrement des loyers, gel du loyer si DPE F/G, plafonnement de la relocation en zone tendue).
2. **Vérifications côté propriétaire** : identité, titre de propriété, RIB ; si copropriété, règlement et restrictions éventuelles ; si indivision ou SCI, pouvoir du signataire.
3. **Audit de louabilité** : décence (≥ 9 m², 2,20 m sous plafond, équipements minimaux) et DPE compatible ([`data/dpe-calendrier.md`](data/dpe-calendrier.md)) ; sinon, conseiller les travaux avant toute mise en location.
4. **Collecte des diagnostics** : DPE, CREP (avant 1949), amiante, électricité/gaz (> 15 ans), ERP, bruit (zone aéroportuaire). Commander les manquants.
5. **Signature du mandat** : écrit, deux exemplaires, numéro au registre des mandats, missions et honoraires précis, mentions loi Hoguet. → skill [`bail-mandat`](skills/bail-mandat/SKILL.md) pour le contrôle.
6. **Cadrage avec le propriétaire** : loyer et charges, meublé/vide, critères de sélection objectifs écrits, garanties souhaitées (Visale, GLI, garant), disponibilité, jeux de clés.

> **L'agence a peut-être déjà** : son mandat type (validé par son juriste ou son réseau) ; sa grille d'estimation des loyers ou son outil ; son diagnostiqueur partenaire ; sa fiche « nouveau propriétaire » ; son barème d'honoraires. → Demander une fois, noter dans le mémo, réutiliser ensuite.

## Phase 2 — Préparation de la mise en location

7. **Préparer le bien** : photos, ménage et reprises, inventaire du mobilier chiffré si meublé.
8. **Conditions financières définitives** : loyer vs référence majoré si zone encadrée ([`data/encadrement-loyers.md`](data/encadrement-loyers.md)), dépôt de garantie (1 mois vide / 2 meublé), honoraires dans les plafonds ([`data/honoraires-plafonds.md`](data/honoraires-plafonds.md)), part bailleur ≥ part locataire.
9. **Annonce et diffusion** : rédaction conforme et publication portails. → skill [`annonce-location`](skills/annonce-location/SKILL.md).

> **L'agence a peut-être déjà** : sa trame d'annonce et son style maison ; son photographe ou ses règles de prise de vue ; ses portails habituels et sa passerelle de diffusion ; son inventaire type de meublé. → Le style maison prime sur `templates/annonce.md`.

## Phase 3 — Leads et visites

10. **Traiter les leads** : accuser réception vite, dédupliquer entre portails, qualifier en une ou deux questions, journaliser. → skill [`emails-locatifs`](skills/emails-locatifs/SKILL.md).
11. **Organiser les visites** : créneaux, confirmations, rappels, feuille de visite ; ne pas exiger le dossier complet comme condition de visite.
12. **Compte-rendu au propriétaire** : contacts, visites, retours marché ; si le bien ne part pas, recommandation chiffrée. → skill [`emails-locatifs`](skills/emails-locatifs/SKILL.md).

> **L'agence a peut-être déjà** : ses templates d'emails (les siens priment sur `templates/emails/`) ; son outil de prise de rendez-vous ; son rythme de compte-rendu proprio (hebdo ? à chaque visite ?) ; sa boîte mail dédiée ou son CRM où journaliser.

## Phase 4 — Dossiers et choix du locataire

13. **Collecter les dossiers** : uniquement les pièces du décret 2015-1437 ([`data/pieces-justificatives.md`](data/pieces-justificatives.md)), canal sécurisé, DossierFacile accepté. → skill [`dossier-candidature`](skills/dossier-candidature/SKILL.md).
14. **Analyser** : complétude, taux d'effort, cohérence des pièces, garants ou Visale, éligibilité GLI vérifiée AVANT de présenter le dossier.
15. **Présenter au propriétaire** : synthèse comparative sur critères objectifs ; la décision reste au bailleur.
16. **Notifier** : acceptation sous réserve de signature ; refus courtois, rapide, sans motif. → skill [`emails-locatifs`](skills/emails-locatifs/SKILL.md).

> **L'agence a peut-être déjà** : sa politique de taux d'effort (33 % ? 35 % ? modulée ?) ; son contrat GLI et les critères d'éligibilité de SON assureur ; son canal de collecte des dossiers ; sa trame de synthèse pour les proprios ; sa règle de conservation RGPD des dossiers refusés.

## Phase 5 — Du oui à la signature

17. **Souscrire la GLI** si prévue — l'agrément de l'assureur conditionne la suite.
18. **Rédiger le bail** : bail type du décret 2015-587, annexes complètes (DDT, notice, extraits de règlement de copro, inventaire meublé, grille de vétusté), clause de solidarité si colocation. → contrôle par [`bail-mandat`](skills/bail-mandat/SKILL.md).
19. **Collecter avant signature** : attestation d'assurance habitation du locataire, acte de cautionnement signé du garant, visa Visale le cas échéant.
20. **Signer et encaisser** : signature (électronique ou présentiel), puis dépôt de garantie, premier loyer au prorata et honoraires — jamais avant la signature.

> **L'agence a peut-être déjà** : sa trame de bail et son acte de cautionnement ; son outil de signature électronique ; son process d'encaissement (compte séquestre, virement, dates de reversement mandant).

## Phase 6 — L'entrée dans les lieux

21. **État des lieux d'entrée** : contradictoire, pièce par pièce, photos datées, relevés de compteurs, annexé au bail. C'est lui qui décidera du sort du dépôt de garantie des années plus tard.
22. **Remise des clés** : inventaire des jeux remis, consignes pratiques, contacts d'urgence.
23. **Bascules administratives** : contrats d'énergie, information du syndic, aide CAF/APL si demandée.
24. **Clôture** : quittance du premier loyer, reversement au propriétaire, compte-rendu de mise en location, archivage complet du dossier. La gestion courante prend le relais — et c'est là que la mémoire d'agence devient précieuse.

> **L'agence a peut-être déjà** : son app ou sa trame d'état des lieux ; son livret d'accueil locataire ; son logiciel de quittancement et son calendrier de reversement ; son plan de classement des dossiers.

---

## Couverture actuelle et suites

Les skills v1 couvrent les étapes 5, 9–16, 18 (contrôle). Les manques les plus utiles pour une v2, dans l'ordre du parcours : **préparation de mise en location** (étapes 3–4, check-list louabilité/diagnostics), **rédaction de bail et cautionnement** (18–19), **état des lieux** (21), puis quittancement/IRL, régularisation de charges, préavis et sortie.
