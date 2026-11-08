# ColisTrack — J3 | Audit, corrections et pull request

## Le contexte
Cette troisième base de code est indépendante de CinéPass (J1) et ÉcoMétrique (J2).
**Son code est déjà lisible, nommé et mis en forme.** L'objectif n'est pas de refaire
le J1 : il s'agit de détecter des écarts métier et de confidentialité, les prouver
par des tests, de les corriger et de les faire relire dans une PR.

## Prérequis et commandes (depuis la racine ColisTrack-J3)
- Node.js >= 18 : `npm test` (aucun `npm install` requis).
- PHP CLI >= 8 : `php tests/TrackingPresenter.test.php` puis
  `php -l src/php/TrackingPresenter.php`.
- Git et GitHub : **fork du dépôt formateur** ; branche dans le fork et PR
  initialement brouillon vers le `main` du formateur, selon `docs/PROCEDURE_GIT.md`.

Les tests de départ ne couvrent **pas** toutes les exigences. Un test vert ne
prouve pas l'absence de défauts. Lisez `docs/REGLES_METIER.md` avant l'audit.

## Dossiers
- `src/` : code JavaScript et PHP à auditer.
- `tests/` : témoins initiaux à conserver ; enrichissez-les avant chaque correctif.
- `docs/` : cahier des règles, procédures et modèles à remplir.

## Ce que vous remettez
Une PR ciblée avec tests, rapport d'audit, description claire, revue par un pair,
réponse aux commentaires et validation finale documentée. Suivre `docs/LIVRABLES.md`.
