# Règles métier contractuelles — ColisTrack v1

Ces règles sont **la référence** de l'audit. Les tests fournis initialement ne
prouvent pas toutes ces règles. Les exemples de données sont entièrement fictifs.

| ID | Exigence à vérifier |
|---|---|
| CT-01 | Un colis neuf possède le statut `created` et un historique `['created']`. |
| CT-02 | Parcours obligatoire : `created -> prepared -> in_transit -> delivered`. Aucune transition sautée, arrière ou répétée. |
| CT-03 | `delivered` et `canceled` sont terminaux. Une transition interdite lève une `Error` sans modifier l'objet fourni. |
| CT-04 | L'annulation n'est autorisée qu'à partir de `created` ou `prepared`. Elle ajoute `canceled` à l'historique. |
| CT-05 | Frais : FR = 4 €, EU = 8 € ; chaque kilogramme entier commencé **au-delà de 2 kg** ajoute 2 €. Ex. 3 kg EU = 10 €. |
| CT-06 | Masse : nombre **fini strictement positif**. Zone : `FR` ou `EU`. Toute autre entrée lève une `RangeError`. |
| CT-07 | Vue publique JavaScript : exactement `reference`, `status`, `history`. Ni courriel du destinataire, ni poids, ni zone. L'historique retourné n'expose pas le tableau interne par référence. |
| CT-08 | Carte publique PHP : exactement `reference`, `statusLabel`. Aucun `recipientEmail`. Les libellés du contrat existant sont conservés. |
| CT-09 | Une modification est acceptable seulement avec preuve de non-régression : tests existants + nouveaux tests révélateurs, commandes et diff relu. |

Note : la présence d'une donnée personnelle dans la structure métier interne peut
être nécessaire ; cela ne l'autorise pas à sortir dans une représentation publique.
