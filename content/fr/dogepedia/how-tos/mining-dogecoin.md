+++
title = "Minage de Dogecoin"
date = "2021-10-22"
type = "how-to"

[ author ]
  name = "Dogecoin"
+++

Les mineurs et le minage sont au centre du mécanisme de consensus Proof of Work de Dogecoin. Consultez ces articles de Dogepedia pour comprendre ce que font les mineurs, comment ils interagissent avec les nœuds, et pourquoi les pools miniers entrent en jeu lorsqu'il s'agit de miner :

- [**Qu'est-ce qu'un mineur ?**](/fr/dogepedia/articles/what-is-a-miner/)
- [**Qu'est-ce qu'un pool de minage ?**](/fr/dogepedia/articles/what-is-a-mining-pool/)
- [**Qu'est-ce qu'un nœud ?**](/fr/dogepedia/articles/what-is-a-node/)

### Minage de Dogecoin
Au début, le minage de Dogecoin était beaucoup plus simple. Un mineur n'avait besoin que d'un ordinateur avec suffisamment d'espace disque et un GPU de jeu - et cela suffisait pour miner du Dogecoin. Très vite, le [**hashrate de minage du réseau**](/fr/dogepedia/articles/what-is-a-miner/#hashing-power) total a tellement augmenté que la probabilité qu'un mineur trouve un bloc en minant en solo a été considérablement réduite. 

Pour cette raison, des [**pools de minage**](/fr/dogepedia/articles/what-is-a-mining-pool/) pour les mineurs de Dogecoin - l'équivalent de ceux qui existent déjà pour le Bitcoin, le Litecoin et d'autres crypto-monnaies PoW - ont été créés, et les gens les ont rejoints pour combiner leur puissance de hachage avec celle de centaines puis de milliers d'autres mineurs. Les revenus miniers étaient partagés entre le pool de minage et tous les autres mineurs, selon un ensemble de règles établies par les opérateurs du pool de minage.

Puis, en 2014, Dogecoin a été modifié pour permettre le [**minage simultané**](/fr/dogepedia/articles/what-is-a-miner/#merged-mining) avec d'autres crypto-monnaies partageant le même algorithme de preuve de travail (appelé *Scrypt*). La crypto-monnaie la plus populaire utilisant Scrypt était, à l'époque, le Litecoin. Depuis lors, les mineurs peuvent extraire le Litecoin et toute autre crypto classique de Scrypt et contribuer également au réseau Dogecoin, en recevant les récompenses de minage de plusieurs blockchains à la fois pour la même quantité de travail.

En général, le minage dans un pool de minage est toujours la façon de miner du Dogecoin pour la plupart des mineurs, avec une différence cruciale dans l'équipement : aujourd'hui, tous les mineurs qui minent du Dogecoin et d'autres pièces Scrypt de façon rentable le font en utilisant du matériel spécialisé appelé **Application-Specific Integrated Circuits (ASICs)**, en particulier les mineurs ASIC construits spécifiquement pour les crypto-monnaies Proof of Work utilisant l'algorithme Scrypt.

### Ce dont vous avez besoin pour miner du Dogecoin à des fins lucratives {#dogecoin-mining-recipe}
Pour miner du Dogecoin de manière rentable, il faut généralement aujourd'hui :

- Un ordinateur Windows/Linux/Mac OS
- Un ou plusieurs mineurs ASIC pour les crypto-monnaies basées sur Scrypt
- Une alimentation pour vos mineurs ASIC
- Un compte avec un pool de minage
- Un accès à une électricité relativement bon marché
- Un [portefeuille Dogecoin](/fr/dogepedia/articles/how-do-i-get-a-wallet/) où le pool de minage enverra vos récompenses minières

### Mineurs ASIC {#ASICs}
Les ASIC sont des dispositifs optimisés pour effectuer une tâche spécifique; dans le cas des mineurs ASIC de Scrypt, cette tâche consiste à calculer le plus grand nombre de hachages possible en un court laps de temps. Cela permet aux mineurs d'avoir plus de chances de trouver le bon hachage pour un bloc qu'ils ont préparé. Pour en savoir plus, consultez notre article sur les [mineurs](/fr/dogepedia/articles/what-is-a-miner/#the-role-of-miners).

Les mineurs ASIC sont généralement très chers, difficiles à obtenir et nécessitent un peu d'expérience pour être configurés et hébergés correctement. Par rapport aux GPU, ils sont plus bruyants et génèrent généralement plus de chaleur. Cela signifie que les ASIC doivent être hébergés dans une pièce dédiée, comme un garage ou un sous-sol, ou dans un hangar spécialement conçu à cet effet. Il est recommandé que l'endroit où sont logés les mineurs ASIC et l'ordinateur utilisé pour les contrôler soit correctement ventilé et puisse être refroidi facilement.

Vous pouvez acheter des mineurs ASIC directement auprès de leurs fabricants, mais il y a normalement une longue liste d'attente et une somme importante à payer d'avance. Il est également recommandé de faire vos propres recherches avant de payer d'avance pour un mineur ASIC et de n'acheter vos ASIC qu'auprès de sources ayant une bonne réputation. 

eBay est également une option, mais elle convient mieux aux mineurs expérimentés. Veillez à vous en remettre à des vendeurs connus ayant un nombre élevé de commentaires et une note globale positive. eBay offre généralement une forme de protection de l'acheteur (vérifiez toujours les conditions), ce qui en fait une bonne plate-forme pour trouver des mineurs d'occasion. Il est recommandé de réinstaller le micrologiciel du mineur ASIC avant d'utiliser un mineur ASIC d'occasion.

Gardez à l'esprit que les anciens modèles d'ASIC seront toujours moins rentables que les plus récents, car pour une même consommation d'énergie, ils sont généralement capables de générer moins de travail que les modèles plus récents. Dans le même temps, commencer avec des ASIC plus anciens, qui peuvent être plus facilement disponibles, puis passer à des modèles plus récents en réinvestissant vos profits miniers peut être une stratégie judicieuse.

Vous pouvez trouver une liste des mineurs ASIC actuels de Scrypt et leur rentabilité sur [Minerstat](https://minerstat.com/algorithm/scrypt/profitability) (ce site n'est pas affilié à Dogecoin).

### Peut-on miner du Dogecoin avec un GPU ? {#dogecoin-mining-with-a-gpu}
Vous pouvez toujours essayer de miner du Dogecoin, et contribuer au hashrate du réseau, en utilisant un ordinateur avec un GPU de jeu. Mais cela ne vous apportera pratiquement aucun bénéfice, des factures d'énergie élevées et une faible contribution au taux de minage total du réseau.

Les utilisateurs désireux d'obtenir du Dogecoin en le minant à l'aide de leurs GPU de jeu utilisent normalement des pools miniers où ils minent des cryptomonnaies qui peuvent encore être exploitées de manière rentable à l'aide de GPU, comme Ethereum (au moment de la rédaction de cet article). Ils échangent ensuite ces cryptomonnaies contre du Dogecoin. Malheureusement, cela ne contribue pas à la sécurité globale du réseau Dogecoin.

Pour exploiter un GPU, vous devez installer un logiciel d'exploitation minière dans l'ordinateur qui abrite le GPU. 

### De quel ordinateur avez-vous besoin ? {#dogecoin-mining-computer}
Si vous exploitez le Dogecoin avec un ou plusieurs mineurs ASIC, tout ordinateur capable de se connecter à un réseau Ethernet fonctionnera parfaitement. 

Vous aurez besoin de l'ordinateur uniquement pour configurer les mineurs ASIC connectés au même réseau local. L'ordinateur peut également être configuré pour servir d'outil de surveillance en utilisant l'une des nombreuses applications disponibles à cet effet.

Si vous prévoyez de miner avec un GPU, l'ordinateur qui héberge le CPU devrait idéalement être équipé d'un CPU multicore décent et d'une mémoire vive suffisante (8 Go et plus sont recommandés) pour garantir un fonctionnement fluide.

### Choisir un pool de minage {#dogecoin-mining-pools}
Il existe de nombreux pools miniers vous permettant de miner du Dogecoin; la plupart d'entre eux vous permettront de miner du Litecoin et de contribuer au réseau Dogecoin en même temps. La plupart des pools miniers ont des frais de pool (normalement autour de 1%), qui seront déduits de vos récompenses minières. Il existe plusieurs sites Web que vous pouvez utiliser pour comparer les pools miniers.

Rendez-vous sur le site Web du pool de minage et créez un compte. Il vous sera demandé d'accepter les règles (lisez-les attentivement, car elles concernent généralement aussi leurs critères de paiement). Vous pourrez saisir les informations relatives à votre compte, notamment l'adresse du portefeuille où le pool de minage enverra vos récompenses.

### Mise en place de votre "Rig" {#dogecoin-mining-basic-setup}
La mise en place de mineurs ASIC Scrypt pour miner du Dogecoin consiste généralement en les étapes suivantes :

- Connectez les mineurs ASIC à leurs alimentations
- Connectez les mineurs ASIC à votre routeur/commutateur à l'aide d'un câble Ethernet. La plupart des mineurs ASIC n'incluent PAS de connexion Wi-Fi. Cela est dû au fait que la fiabilité est cruciale pour faire fonctionner un mineur rentable.
- À l'aide d'un ordinateur connecté au même réseau local, accédez à votre routeur pour découvrir les adresses IP attribuées aux mineurs ASIC.
- (Facultatif, mais recommandé pour faciliter le contrôle) Attribuez une adresse IP locale statique à votre ou vos mineurs ASIC, en utilisant le configurateur de réseau de votre routeur. Veuillez vous référer au manuel de votre routeur pour le faire.
- Saisissez l'adresse IP du mineur ASIC dans la barre d'adresse de votre navigateur. La plupart des mineurs ASIC devraient afficher une page de connexion à ce stade. Connectez-vous en utilisant le nom d'utilisateur et le mot de passe par défaut (que vous pouvez généralement trouver dans le manuel du fabricant).
- En utilisant le panneau de contrôle du mineur ASIC, entrez dans la page de configuration des pools miniers. Reportez-vous au pool de minage de votre choix pour entrer le bon protocole, l'adresse et le nom d'utilisateur/adresse pour ajouter un pool.
- À ce stade, le mineur ASIC devrait être prêt à fonctionner. Il y a normalement une page d'état de l'exploitation minière dans le panneau de contrôle du mineur ASIC que vous pouvez utiliser pour vérifier cela.
- Les pools enverront vos récompenses minières au portefeuille que vous avez spécifié.
- Vous pouvez configurer un ordinateur externe pour qu'il serve d'outil de surveillance de vos mineurs. Il existe plusieurs solutions, et de nouvelles sont publiées fréquemment. Rejoignez une communauté de mineurs et choisissez un outil de surveillance qui est largement utilisé dans la communauté.

### Utiliser les énergies renouvelables {#dogecoin-renewable-energy}
Le minage, de par sa conception, consomme beaucoup d'électricité. Les nouveaux mineurs ASIC consomment moins d'électricité et génèrent plus de courant, mais le coût de l'électricité dans votre région reste essentiel si vous voulez exploiter le Dogecoin de manière rentable. L'électricité est nécessaire pour alimenter les mineurs ASIC, mais aussi pour que la pièce où ils sont logés reste suffisamment fraîche pour qu'ils puissent fonctionner correctement.

La communauté Dogecoin recommande également de s'appuyer sur les énergies renouvelables chaque fois que cela est possible. L'exploitation minière à l'aide d'énergies renouvelables est la chose responsable à faire pour l'environnement, et peut, à long terme, conduire à plus de profits pour les mineurs. N'oubliez pas : Dogecoin, c'est faire le bien tous les jours. Faire des efforts pour s'assurer que le minage n'utilise que de l'énergie renouvelable, et encourager vos "collègues" à faire de même, est un cadeau à la communauté et aux futurs utilisateurs de Dogecoin.

### Garder le froid {#dogecoin-mining-room}
Il est recommandé que l'endroit où sont logés les mineurs ASIC soit correctement ventilé et puisse être refroidi facilement. Si vous vivez dans un climat constamment froid, une bonne ventilation avec de l'air frais venant de l'extérieur devrait suffire. Sinon, vous devrez peut-être investir dans une climatisation et des solutions plus complexes pour vous assurer que vos ASIC ne surchauffent pas.

La plupart des coûts et des complexités liés à l'exploitation d'une installation minière rentable, en particulier si elle est composée de plusieurs mineurs ASIC, impliquent une planification minutieuse et une maintenance régulière. Une partie de ces opérations peut être automatisée, mais en raison de l'intensité élevée du travail nécessaire, les ASIC sont sujets à des défaillances matérielles lorsqu'ils sont mal configurés et mal entretenus.

### Trouver de l'aide en tant que mineur de Dogecoin {#finding-help}
Vous devez vous instruire si vous voulez vraiment exploiter le minage. Il existe plusieurs communautés où vous pouvez trouver de l'aide pour installer et utiliser votre équipement de minage. Sur reddit, vous pouvez poser des questions sur [r/dogecoin](https://www.reddit.com/r/dogecoin/), [r/dogemining](https://www.reddit.com/r/dogemining/), mais aussi sur [Litecoin Mining](https://www.reddit.com/r/litecoinmining/), puisque le Dogecoin et le Litecoin peuvent être minés en même temps.














