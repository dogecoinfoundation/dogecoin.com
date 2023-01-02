+++
title = "Qu'est-ce qu'un mineur ?"
date = "2021-10-22"
type = "article"

[ author ]
  name = "Dogecoin"
+++

Un **Mineur** est un [nœud](/fr/dogepedia/articles/what-is-a-node/) spécialisé dans le réseau Dogecoin.

Après que les [nœuds](/fr/dogepedia/articles/what-is-a-node#full-nodes) réguliers du réseau, en se référant à la blockchain, ont vérifié qu'une transaction Dogecoin est valide, la transaction est affichée dans un état "en attente". Elle reste dans cet état jusqu'à ce qu'un **mineur** ou un collectif de mineurs connu sous le nom de [**pool de minage**](/fr/dogepedia/articles/what-is-a-mining-pool) récupère la transaction.

### Les mineurs : ELI5 {#miners-eli5}

Les mineurs sont des nœuds utilisant un matériel spécial (normalement des mineurs Scrypt ASIC) qui leur permet de résoudre des énigmes cryptographiques, dans un processus appelé "minage". Un mineur reçoit les nouvelles transactions des autres nœuds du réseau, les combine dans un **bloc** selon des règles prédéterminées et inviolables appliquées par le réseau, puis tente de résoudre une énigme qui générera un nombre spécial, appelé hash, obtenu en combinant le contenu du bloc et un nombre appelé **nonce** (*nombre utilisé une fois*). 

Lorsqu'un mineur résout l'une de ces énigmes avant tout autre mineur du réseau, il est autorisé à créer un nouveau bloc dans la blockchain, confirmant ainsi les transactions qu'il y a incluses. Les mineurs sécurisent la blockchain et sont récompensés pour leur travail par des récompenses dites de bloc, consistant en 10,000 Dogecoin par bloc miné. Les mineurs sont également récompensés par les frais de transaction associés aux transactions qu'ils ont incluses dans le bloc.

Si vous souhaitez approfondir ce processus, vous pouvez passer à la session suivante, mais cela devrait suffire pour comprendre ce qu'est un mineur et ce qu'il fait pour le réseau Dogecoin.

### Le rôle des mineurs dans le réseau Dogecoin {#the-role-of-miners}

Les mineurs jouent plusieurs rôles fondamentaux.

- Ils confirment les transactions en les ajoutant à un nouveau bloc
- Ils sécurisent la blockchain
- Ils mettent de nouvelles pièces en circulation

Tous les mineurs du réseau Dogecoin sont en compétition constante pour résoudre des énigmes à forte intensité de calcul, consistant à trouver un nombre spécial appelé nonce. Le premier mineur - ou le premier pool de minage - qui est capable de trouver un nonce qui, lorsqu'il est *hashé* avec le contenu de l'en-tête du bloc, renvoie un nombre inférieur à l'objectif de difficulté du réseau actuel, est celui qui est autorisé à écrire un nouveau bloc dans la blockchain. 

Le processus de résolution de cette énigme est connu sous le nom de **Preuve de Travail**. Par conception, la génération de cette preuve est intensive en calcul et nécessite donc une quantité importante d'électricité. Cette dépense d'énergie est ce qui sécurise le réseau. Un groupe potentiel d'attaquants devrait d'abord prendre le contrôle d'une quantité importante de matériel de minage coûteux; ensuite, il devrait dépenser beaucoup d'énergie pour soutenir une attaque prolongée contre le réseau.

Contrairement au Bitcoin, mais comme le Litecoin et d'autres crypto-monnaies, Dogecoin utilise l'algorithme [*Scrypt*](https://en.wikipedia.org/wiki/Scrypt) comme fonction sous-jacente de preuve de travail.

La **cible de difficulté** est un moyen de mesurer la difficulté pour un mineur du réseau de produire un bloc valide; plus la valeur cible est faible, plus il sera difficile pour un mineur de générer un bloc valide car la recherche d'un nonce approprié prend plus de temps. La difficulté du Dogecoin est ajustée à chaque bloc à l'aide de l'algorithme [*Digishield*](https://dgbwiki.com/index.php?title=DigiShield).

Un **bloc** est une structure de données composée d'un en-tête de bloc, contenant des informations importantes dont le hash du bloc précédent, suivi d'une longue liste de transactions, constituant l'essentiel de son contenu. Chaque bloc créé contient le hachage du bloc précédent dans son en-tête, qui contient à son tour le hachage de son bloc précédent, et ainsi de suite, créant une chaîne qui remonte jusqu'au bloc de genèse de Dogecoin. 

Après qu'un mineur a extrait un bloc, les autres nœuds du réseau doivent le valider. Enfin, le bloc est propagé à travers le réseau et est inclus dans la blockchain. En enchaînant les blocs de cette manière et en les créant en suivant des règles strictes appliquées par le réseau, les mineurs sécurisent la blockchain et la rendent immuable, puisque la validité d'un bloc dépend de tous les blocs qui l'ont précédé.

En échange de tout ce travail, un mineur reçoit 10,000 Dogecoin nouvellement frappés, appelés **récompense de bloc**. En plus de cette récompense de bloc, les mineurs reçoivent les frais de transaction associés aux transactions qu'ils ont incluses dans le bloc. Historiquement, les frais de transaction représentent une petite partie du revenu d'un mineur. Actuellement, les frais de transaction représentent nettement moins de 1 % du revenu total de la plupart des mineurs du réseau.

Les blocs de Dogecoin ont une taille maximale de 1 Mo et un nouveau bloc est généré toutes les minutes. Si l'on considère que la taille moyenne des transactions est de 250 octets, un mineur pourrait *théoriquement* inclure jusqu'à 4,000 transactions Dogecoin dans un seul bloc.

### Mineurs et Puissance de Hachage {#hashing-power}

Chaque mineur apporte au réseau une certaine quantité de *puissance de hachage*, une mesure utilisée pour indiquer la puissance de calcul d'un mineur par rapport au puzzle qu'il tente de résoudre lors du minage d'un nouveau bloc. La puissance de hachage dépend strictement du matériel utilisé par le mineur. Actuellement, les mineurs les plus rentables s'appuient sur la puissance de calcul de machines spécialisées appelées **Mineurs ASIC**.

La puissance de hachage de tous les mineurs du réseau est appelée **Mining Hashrate**, et il s'agit d'une mesure clé de la santé du réseau Dogecoin, car plus la puissance de hachage du réseau est élevée, plus sa sécurité et sa résistance globale aux attaques sont grandes.

### AuxPoW ou "Minage Simultané" avec d'autres crypto-monnaies de Preuve de Travail basées sur Scrypt {#merged-mining}

De nombreuses pièces de monnaie, dont Litecoin et Dogecoin, utilisent le même algorithme Scrypt pour leur Preuve de Travail. 

En 2014, le hashrate total du Dogecoin étant en baisse, le créateur du Litecoin, Charlie Lee, a proposé une solution : permettre au Dogecoin d'accepter les preuves calculées pour d'autres crypto-monnaies en utilisant la même implémentation de l'algorithme Scrypt. La proposition a été acceptée et mise en œuvre en 2015 par les développeurs de Dogecoin. La façon dont cela a été mis en œuvre est communément appelée **Preuve de Travail Auxiliaire (AuxPoW)**.

Par conséquent, la preuve du travail effectué sur Litecoin ou dans toute autre pièce de monnaie Scrypt classique peut être utilisée comme preuve pour miner un bloc Dogecoin. Pour ce faire, le mineur doit préparer ce bloc avec une référence dans son en-tête au bloc Dogecoin qu'il va miner au même moment. Tant que les preuves scrypt sont bien formées et correspondent à la [cible de difficulté](/fr/dogepedia/articles/what-is-a-miner/#the-role-of-miners) du réseau Dogecoin, la preuve peut être acceptée comme valide.

En d'autres termes, les mineurs peuvent utiliser la même puissance de calcul qu'ils utiliseraient pour calculer des preuves pour une seule crypto pour fournir des preuves à plusieurs chaînes simultanément, recevant des récompenses de plusieurs blockchains à la fois, augmentant ainsi leur profit et travaillant plus efficacement.

### Minage de Dogecoin 

Le minage de Dogecoin de manière *profitable* nécessite du matériel spécialisé (et coûteux) (les Mineurs ASIC); en outre, le minage consomme des quantités importantes d'électricité et implique des coûts de maintenance et une expérience considérables.

Les mineurs préfèrent généralement travailler ensemble dans ce qu'on appelle des [**Pools de Minage**](/fr/dogepedia/articles/what-is-a-mining-pool), car la combinaison de leur puissance de hachage avec d'autres mineurs du réseau rend le processus de découverte de nouveaux blocs plus prévisible et, au final, plus rentable. 

Si vous êtes intéressé(e), veuillez consulter [notre introduction au minage](/fr/dogepedia/how-tos/mining-dogecoin/) pour commencer.
