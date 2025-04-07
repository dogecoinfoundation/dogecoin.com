+++
title = "Qu'est-ce qu'un nœud et pourquoi est-il important ? Dois-je en gérer un ?"
date = "2021-10-22"
type = "article"

[ author ]
  name = "Dogecoin"
+++

Le réseau Dogecoin est un réseau de paiement peer-to-peer composé de milliers d'ordinateurs appelés nœuds. Chacun de ces nœuds exécute un logiciel spécialisé, appelé Dogecoin Core. Les informations relatives aux transactions sont enregistrées dans une base de données, divisée en blocs enchaînés les uns aux autres, et distribuée et répliquée à travers les nœuds du réseau : cette base de données est connue sous le nom de *Blockchain Dogecoin*. 

En pratique, les informations relatives aux transactions sont partagées sur l'ensemble du réseau et n'ont donc pas besoin d'être stockées dans un endroit centralisé. C'est pourquoi les crypto-monnaies comme le Dogecoin sont souvent qualifiées de *décentralisées*.

En bref, un nœud est un logiciel qui fonctionne sur un ordinateur connecté au réseau Dogecoin. Ce logiciel communique avec les autres nœuds du réseau et, ce faisant, maintient le grand livre distribué synchronisé et à jour, en plus de fournir aux nouveaux nœuds qui doivent télécharger la blockchain Dogecoin complète des informations sur les blocs précédents.

Il existe plusieurs types de nœuds, en fonction du rôle qu'ils jouent dans le réseau.


### Nœuds Complets et Nœuds Légers {#full-nodes}
*Les noeuds complets* sont l'épine dorsale du réseau Dogecoin. Chaque nœud complet est capable de valider entièrement les transactions et les blocs. *La plupart* des nœuds complets du réseau Dogecoin contiennent une copie de l'ensemble de la blockchain, c'est-à-dire l'historique complet de toutes les transactions qui ont eu lieu sur le réseau Dogecoin. Les noeuds complets soutiennent le réseau en acceptant les transactions et les blocs d'autres noeuds complets, en validant ces transactions et ces blocs, puis en les relayant à d'autres noeuds complets.

*Les nœuds légers* (comme le *portefeuille Multidoge*), également appelés nœuds SPV, dépendent des nœuds complets pour fonctionner. Ils nécessitent beaucoup moins de stockage et de ressources que les nœuds complets, puisqu'ils n'ont pas besoin de stocker la totalité de la blockchain. Les nœuds légers sont tout de même capables d'effectuer une tâche - qui est de vérifier les transactions en utilisant une méthode appelée Simрlifiеd Pауmеnt Vеrifiсаtiоn (SPV).

### Pourquoi les nœuds complets sont importants ? {#why-full-nodes-are-important}
Sans opérateurs de nœuds exploitant des nœuds complets, le réseau Dogecoin ne pourrait pas fonctionner. En étant capables de valider entièrement les transactions et les blocs et en hébergeant une copie complète de la blockchain, les nœuds complets effectuent des tâches cruciales dans le réseau, notamment la validation des transactions, la conservation d'un historique de toutes les transactions, ainsi que la dictée et l'application des règles du réseau.

En pratique, un opérateur de nœud Dogecoin qui fait fonctionner un nœud correctement, sur une machine disposant d'un espace disque et d'une bande passante suffisants, contribuera à :

- Protéger contre la censure
- Protéger contre les attaques par déni de service (DoS) du réseau
- Assurer la redondance du réseau en fournissant une plus grande largeur de bande, ce qui peut s'avérer crucial lors des pics d'activité
- Établir une base de référence pour les frais et les limites de poussière en définissant des politiques de relais (depuis Dogecoin Core v1.14.4)

### Avez-vous besoin d'exécuter un nœud complet ? {#do-you-need-to-run-a-full-node}
Pour faire fonctionner un nœud complet, il faut un ordinateur disposant d'un espace disque suffisant pour héberger une copie complète de la blockchain (actuellement environ 70 Go) et une connexion haut débit à Internet sans compteur (un nœud complet peut consommer plusieurs To de données par mois en période d'activité intense du réseau). 

Apprendre à faire fonctionner un nœud, et à le maintenir, peut être une expérience amusante et éducative. Mais faire fonctionner un nœud d'une manière qui soit utile pour le réseau Dogecoin pendant une période prolongée implique un peu de dévouement et de savoir-faire.

Si vous vous sentez à la hauteur, consultez notre [Guide d'exploitation d'un Nœud Dogecoin](/fr/dogepedia/how-tos/operating-a-node/) pour vous aider à démarrer.

Il n'y a pas d'incitation directe à gérer un nœud. La récompense consiste à fournir un service au réseau Dogecoin et donc, espérons-le, à lui apporter de la valeur.

### Mineurs {#miners}
Un **mineur** est un nœud spécialisé dans le réseau Dogecoin.

Les mineurs ont pour tâche de créer de nouveaux blocs dans la blockchain en résolvant des énigmes cryptographiques exigeantes en termes de calcul, dans un processus appelé "minage". Les mineurs confirment les transactions en les incluant dans un nouveau bloc, sécurisent la blockchain et sont récompensés pour leur travail par ce qu'on appelle des récompenses de bloc, consistant en 10,000 Dogecoin par bloc miné, et par les frais de transaction associés aux transactions qu'ils ont incluses dans le bloc.

Le minage de Dogecoin nécessite du matériel spécialisé et consomme des quantités importantes d'électricité. De plus, les coûts de maintenance et l'expérience nécessaires pour maintenir en état de marche une installation de minage rentable sont beaucoup plus considérables que ceux nécessaires pour faire fonctionner un nœud.

Un aperçu détaillé du rôle des mineurs dans le réseau Dogecoin peut être trouvé [ici](/fr/dogepedia/articles/what-is-a-miner/).