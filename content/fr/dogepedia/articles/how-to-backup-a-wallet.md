+++
title = "Comment sauvegarder un portefeuille Dogecoin ?"
date = "2022-07-20"
type = "article"

[ author ]
  name = "Dogecoin"
+++

Un portefeuille est juste une collection de *clés privées* et de *clés publiques*. 

Chacune des clés privées du portefeuille est un nombre aléatoire de 256 bits unique à votre portefeuille, et c'est ce dont vous avez besoin pour pouvoir accéder à vos pièces et les dépenser. Votre adresse publique - l'adresse que les autres portefeuilles Dogecoin peuvent utiliser pour envoyer des Dogecoin à votre portefeuille - est une version hachée de la clé publique associée à la clé privée.

La plupart des détenteurs de Dogecoin utilisent une sorte d'[*application de portefeuille*](/fr/dogepedia/articles/how-do-i-get-a-wallet), comme Dogecoin Core, ou des dispositifs comme les [*portefeuilles matériels*](/fr/dogepedia/articles/dogecoin-hardware-wallets/) pour gérer leurs portefeuilles. Chacun de ces dispositifs peut impliquer un processus différent pour générer une sauvegarde. 

### Sauvegarde des portefeuilles avec Dogecoin Core

Dogecoin Core, la "mise en œuvre de référence" de Dogecoin et le logiciel généralement utilisé pour faire fonctionner un nœud Dogecoin, est souvent utilisé comme application de portefeuille. Afin de créer une sauvegarde avec Dogecoin Core, suivez ces étapes :

- (Facultatif, mais recommandé) Tout d'abord, chiffrer votre portefeuille. Pour ce faire, allez dans Paramètres -> Chiffrer le portefeuille. Il vous sera demandé de saisir un mot de passe. Il est essentiel que vous conserviez ce mot de passe dans un endroit sûr et que vous ne le perdiez jamais. Sans lui, vous ne pourrez pas accéder aux fonds de votre portefeuille chiffré. 

   D'autre part, ce mot de passe ajoute une couche supplémentaire de sécurité à votre sauvegarde. Sans lui, même si un attaquant accède à votre fichier portefeuille, il ne pourra pas dépenser vos Dogecoin, à moins qu'il ne réussisse à le forcer par force brute ou à deviner le mot de passe de chiffrement.
- Allez dans Fichier -> Sauvegarde du portefeuille. Cela va générer un fichier wallet.dat, qui stocke une liste de toutes les paires de clés que vous avez utilisées. La restauration de ce fichier vous donnera accès à vos Dogecoin. Stockez-le dans un endroit sûr, dans un appareil non connecté à Internet.

Chaque fois que vous générez une nouvelle adresse publique avec Dogecoin Core ou que vous dépensez des pièces, il est recommandé de créer une nouvelle sauvegarde, car les anciens fichiers wallet.dat pourraient ne pas contenir une copie de la clé privée associée à la nouvelle adresse publique ou à d'éventuels changements d'adresse - ainsi, lors de la restauration du portefeuille, vous pourriez perdre une partie de vos Dogecoin.

*Rappellez-vous : quiconque obtient l'accès au fichier wallet.dat pourra dépenser vos Dogecoin*.

#### Sauvegarde des clés privées et des clés publiques dans un fichier texte
Le fichier wallet.dat n'est pas un fichier en texte clair. Il s'agit d'une BDB (Berkeley Database). Pour cette raison, il peut être utile de créer une sauvegarde en texte clair de votre portefeuille, contenant une liste de toutes les clés privées et publiques actuellement utilisées par Dogecoin Core. Pour ce faire :

- Allez dans Aide -> Debug Window
- Sélectionnez l'onglet Console
- Si votre portefeuille est chiffré, déchiffrez-le temporairement à l'aide de la commande *walletpassphrase*, en spécifiant le nombre de secondes après lequel la copie déchiffrée sera supprimée.
  ```console
    walletpassphrase "votremotdepasseici" 120
    ```
    La console devrait renvoyer "null".
- Videz votre portefeuille dans un fichier en utilisant la commande *dumpwallet* et en spécifiant le chemin du fichier.

  Pour les versions de **Dogecoin Core antérieures à 1.14.6**, la commande dumpwallet vous permet de spécifier un chemin complet vers le fichier du portefeuille, comme ceci :
  ```console
    dumpwallet "/Users/Cheemz/BackupDirectory/mywallet.txt"
    ```
    La console devrait renvoyer "null".

  Pour les versions de **Dogecoin Core plus récentes que 1.14.6**, la commande dumpwallet vous permet de spécifier uniquement le nom du fichier de portefeuille. Le fichier sera généré dans le répertoire spécifié avec l'option -backupdir. Lorsque -backupdir n'est pas spécifié, Dogecoin Core stockera le fichier de sauvegarde dans un répertoire appelé *backups* à l'intérieur du [*répertoire de données*](/fr/dogepedia/how-tos/operating-a-node/#data-directory) par défaut :
  ```console
    dumpwallet "mywallet.txt"
    ```
    La console devrait renvoyer "null".

- Facultatif : chiffrer le fichier de portefeuille. Vous pouvez utiliser les options de chiffrement du disque de votre système d'exploitation ou un programme zip vous permettant de protéger un fichier par un mot de passe et de le chiffrer avec un algorithme sécurisé (AES256, par exemple). Assurez-vous également que le mot de passe utilisé pour le chiffrement est impossible à oublier ou qu'il est correctement stocké.
- Copiez la sauvegarde dans plusieurs endroits sûrs, NON connectés à l'Internet. 

*Rappelez-vous : quiconque obtient l'accès au fichier de portefeuille en clair pourra dépenser vos Dogecoin*.

### Sauvegardes de portefeuilles avec des portefeuilles utilisant des phrases secrètes

De nombreux portefeuilles modernes reposent sur l'utilisation d'une phrase secrète. Une phrase secrète - également appelée "phrase mnémonique" ou "graine mnémonique" - consiste *généralement* en une séquence de 12 ou 24 mots. Chaque phrase secrète est unique et identifie un portefeuille distinct où une certaine quantité de Dogecoin peut être stockée. Une phrase de semence agit comme une sorte de clé maîtresse que le logiciel du portefeuille utilise pour calculer toutes les clés privées (et les adresses publiques) nécessaires pour accéder aux Dogecoin que vous détenez et les dépenser.

Il est essentiel que vous sauvegardiez votre phrase secrète et que vous la stockiez dans plusieurs endroits sécurisés, où personne d'autre que vous ne peut y accéder. Toute personne connaissant votre phrase de démarrage aura un accès complet à vos Dogecoin. C'est pourquoi vous ne devez en aucun cas partager votre phrase de démarrage ou votre clé privée avec une personne en qui vous n'avez pas confiance. 

**Rappelez-vous** : 
- **Il est toujours plus sûr de s'assurer que votre phrase d'amorçage ou vos clés privées sont stockées sur un appareil qui n'est PAS connecté à l'Internet.** Les [*portefeuilles matériels*](/fr/dogepedia/articles/dogecoin-hardware-wallets/) offrent un moyen de stocker vos pièces en toute sécurité tout en pouvant y accéder facilement, si nécessaire.
- Les clés privées de votre portefeuille (ou phrases secrètes) permettent au détenteur d'accéder à vos Dogecoin, quel que soit le portefeuille que vous utilisez.
- Les transactions en Dogecoin sont permanentes, il n'y a donc aucun moyen de récupérer les Dogecoin qu'un attaquant a volés dans votre portefeuille.
