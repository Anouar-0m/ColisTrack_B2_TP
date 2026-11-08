# Procédure GitHub du J3 — Fork, branche, Draft PR et revue

Cette procédure remplace entièrement l'ancienne méthode consistant à initialiser un dépôt Git personnel. Le **formateur** possède le dépôt central S0 ; l'élève travaille dans un **fork** et ouvre une **unique PR** vers le `main` du formateur dès le matin.

## 09:00 — Créer son fork, cloner, travailler sur une branche

1. Ouvrir dans le navigateur l'URL GitHub **réelle communiquée par le formateur**, de forme `https://github.com/LOGIN_FORMATEUR/colistrack-j3`.
2. Cliquer **Fork**, choisir son compte personnel puis **Create fork**. Dans son fork, bouton **Code**, copier l'URL HTTPS.
3. Dans un terminal, **remplacer** `LOGIN_ELEVE` et `LOGIN_FORMATEUR` par les vrais comptes (ne jamais coller littéralement ces exemples) :

```bash
git clone https://github.com/LOGIN_ELEVE/colistrack-j3.git
cd colistrack-j3
git remote add upstream https://github.com/LOGIN_FORMATEUR/colistrack-j3.git
git remote -v
git switch -c audit/colistrack-ameliorations
git branch --show-current
npm test
php tests/TrackingPresenter.test.php
php -l src/php/TrackingPresenter.php
```

Attendu : `origin` = dépôt forké de l'élève ; `upstream` = dépôt formateur ; branche locale `audit/colistrack-ameliorations`. La base S0 passe **7 tests JS et 3 vérifications PHP**. **Ne pas refaire `git init`** ; **ne pas pousser sur le `main` du formateur**.

## 09:20 — Premier vrai commit documentaire et première publication

Dans `docs/RAPPORT_AUDIT.md`, renseigner `Auteur : @VOTRE_LOGIN`, `Date : 09/11/2026`, `Référence de départ (commit) : SHA_INDIQUÉ_PAR_git_rev_parse`. Pour le SHA, lancer `git rev-parse --short main`. Laisser le tableau d'audit à 7 colonnes, sans correction prématurée du code.

```bash
git add docs/RAPPORT_AUDIT.md
git commit -m "docs: identify audit author and S0 baseline"
git push -u origin audit/colistrack-ameliorations
```

## 09:25 — Créer une PR brouillon VERS le dépôt formateur

1. Dans **le dépôt formateur**, onglet **Pull requests** > **New pull request** ; cliquer **compare across forks** si besoin.
2. Vérifier les quatre choix : `base repository = LOGIN_FORMATEUR/colistrack-j3` ; `base = main` ; `head repository = LOGIN_ELEVE/colistrack-j3` ; `compare = audit/colistrack-ameliorations`.
3. Titre provisoire : `[WIP][ColisTrack] Audit et correctifs — @LOGIN_ELEVE`.
4. Description provisoire : « PR brouillon de suivi du J3. Au départ, seul l'auteur de l'audit est identifié dans le rapport ; le code métier reste S0. Les futurs commits incluront A-01 à A-05, D-01, S1 à S4, les tests, les corrections, et les retours de revue. Ne pas fusionner. »
5. Dans la liste déroulante du bouton de création, choisir **Create draft pull request**. Copier l'URL réelle obtenue et la donner au formateur. **Une branche identique à main sans commit différent ne permet pas de PR** ; d'où le commit documentaire précédent.

## Toute la journée — Commits et push dans cette même PR

Après chaque exercice, exécuter les tests, faire un commit limité, puis un push :

```bash
npm test
php tests/TrackingPresenter.test.php
php -l src/php/TrackingPresenter.php
git diff --check
git status
# après avoir écrit un vrai commit documenté sur audit/colistrack-ameliorations :
git push origin audit/colistrack-ameliorations
```

Repères : 10:20 A-01 ; 11:40 S1 = 10 tests JS ; 12:30 rapport A-01..A-05 et D-01 ; 14:15 S2 = 15 JS ; 14:35 S3 = 19 JS ; 15:00 S4 = 21 JS et 5 PHP. Le formateur voit les changements **poussés**, jamais ceux restés uniquement locaux.

## 15:15 puis 15:30 — Finaliser la même PR

Dans `docs/PR_DESCRIPTION.md`, rédiger le vrai texte complet : contexte, exigences CT, modifications par fichier, commandes **réellement exécutées**, résultats, risques, dette D-01 et demande ciblée au pair. Commiter et pousser ce document. Dans GitHub, ouvrir la Draft PR déjà créée et cliquer **Edit** sur sa description pour remplacer le texte provisoire.

À **15:30**, cliquer **Ready for review** sur cette PR. **Ne pas créer de deuxième PR** et **ne pas fusionner**. Transmettre la même URL au binôme.

## 15:45–16:35 — Revue et correction

Le pair ouvre **Files changed** de la PR dans le dépôt formateur, met au moins deux commentaires associés à une ligne du diff et donne une demande ou un avis motivé. Selon les permissions GitHub, le pair peut pouvoir envoyer une revue formelle **Request changes / Approve** ; sinon il rédige son verdict en commentaire sans prétendre disposer d'un statut GitHub non obtenu.

L'auteur lit les remarques, ajoute les tests ou correctifs utiles, relance les contrôles et pousse un **nouveau commit dans la même branche du même fork**. La PR centrale se met à jour automatiquement ; l'auteur répond à chaque commentaire, le pair relit et donne un verdict final. Ne pas fusionner vers `main` sans ordre du formateur.

## Dépannage

- `origin` pointe vers le formateur : ne pas pousser, cloner son propre fork.
- Rien à comparer : créer un changement documentaire réel, committer et pousser.
- La PR cible le mauvais dépôt : la destination DOIT être `LOGIN_FORMATEUR:main`, source `LOGIN_ELEVE:audit/colistrack-ameliorations`.
- Un nouveau commit n'apparaît pas : `git status`, `git branch --show-current`, `git push origin audit/colistrack-ameliorations`.
- Blocage GitHub : prévenir immédiatement le formateur ; seul lui peut autoriser un repli documenté.
