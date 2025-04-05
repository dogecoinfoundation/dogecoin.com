+++
title = "Exploiter un nœud Dogecoin"
date = "2022-01-22"
[ author ]
  name = "Dogecoin"
+++

Le réseau Dogecoin est un réseau de paiement peer-to-peer composé de milliers d'ordinateurs appelés [**nœuds**](/fr/dogepedia/articles/what-is-a-node/). Chacun de ces nœuds exécute un logiciel spécialisé. **Dogecoin Core**, l'*implémentation de référence* de Dogecoin, est le logiciel le plus couramment utilisé pour faire fonctionner un nœud Dogecoin. Il peut être téléchargé depuis le site officiel [**Dogecoin.com**](https://dogecoin.com/) et directement depuis le [**Dépôt Github**](https://github.com/dogecoin/dogecoin/releases).

L'exploitation d'un [**nœud complet**](/fr/dogepedia/articles/what-is-a-node/#full-nodes) est un service que des volontaires du réseau, appelés *opérateurs de nœuds*, fournissent à la communauté Dogecoin. Contrairement à ce qui se passe lors du minage, l'exploitation d'un nœud n'entraîne pas d'incitations ou de récompenses directes, mais elle rend le réseau Dogecoin plus résilient, contribuant ainsi à son utilité et à son adoption. 

Un nœud complet fonctionnant sur une machine disposant d'un espace disque et d'une bande passante suffisants contribuera à :

- Protéger contre la censure
- Protéger contre les attaques par déni de service (DoS) du réseau
- Assurer la redondance du réseau en fournissant une plus grande largeur de bande, ce qui peut s'avérer crucial lors des pics d'activité
- [Établir une base pour les frais et les limites de poussière en définissant des politiques de relais](/fr/dogepedia/how-tos/operating-a-node/#minrelaytxfee) (depuis Dogecoin Core v1.14.4)

Vous pouvez en savoir plus sur la blockchain et les nœuds de Dogecoin dans ces articles de Dogepedia :

- [**Qu'est-ce qu'une blockchain?**](/fr/dogepedia/articles/what-is-a-blockchain/)
- [**Qu'est-ce qu'un nœud?**](/fr/dogepedia/articles/what-is-a-node/)

Depuis Dogecoin Core 1.14.4, la communauté a fait des efforts importants pour fournir une documentation plus à jour pour les opérateurs de nœuds. La documentation, utile également pour les utilisateurs avancés et ceux qui prévoient de construire un paquet pour leur système d'exploitation spécifique, est incluse dans le dépôt Dogecoin Core disponible sur Github. Vous pouvez également la lire en ligne [ici](https://github.com/dogecoin/dogecoin/tree/master/doc).

## Sommaire

- [Exigences minimales](/fr/dogepedia/how-tos/operating-a-node/#minimum-requirements)
- [Répertoire de données](/fr/dogepedia/how-tos/operating-a-node/#data-directory)
- [Avis de non-responsabilité : Sécurité](/fr/dogepedia/how-tos/operating-a-node/#security)
- [Déploiement d'un nœud](/fr/dogepedia/how-tos/operating-a-node/#generic-instructions)
    - [Construire à partir de la source](/fr/dogepedia/how-tos/operating-a-node/#dogecoin-core-build)
    - [Windows](/fr/dogepedia/how-tos/operating-a-node/#windows-instructions)
    - [macOS](/fr/dogepedia/how-tos/operating-a-node/#macos-instructions)
    - [Linux](/fr/dogepedia/how-tos/operating-a-node/#linux-instructions)
- [Mise à jour de Dogecoin Core](/fr/dogepedia/how-tos/operating-a-node/#generic-upgrade-instructions)
- [Configuration du réseau](/fr/dogepedia/how-tos/operating-a-node/#network-configuration)
- [Configuration avancée](/fr/dogepedia/how-tos/operating-a-node/#advanced-configuration)
- [Dogecoin CLI](/fr/dogepedia/how-tos/operating-a-node/#dogecoin-cli)
- [Aide et soutien](/fr/dogepedia/how-tos/operating-a-node/#finding-help)

<hr />

## Exigences minimales {#minimum-requirements}
Faire fonctionner un nœud n'est pas aussi compliqué que de miner du Dogecoin, car cela n'implique pas de matériel spécialisé et ne consomme pas autant d'électricité. En fait, si vous disposez déjà d'un ordinateur allumé 24 heures sur 24 et d'une connexion Internet sans compteur, l'exécution d'un nœud peut se faire en arrière-plan. Les conditions requises pour faire fonctionner un nœud sont les suivantes :

- Actuellement, au moins 60 Go d'espace disque, éventuellement sur un disque rapide, pour stocker une copie complète de la blockchain. Vous aurez besoin de plus d'espace disque au fur et à mesure que la blockchain se développe, donc commencer avec un disque plus grand est une bonne idée. 
- 2 GO de RAM.
- Une Connexion Internet non mesurée ou, au moins, une connexion Internet qui autorise une quantité importante de trafic sortant. Au cours d'un mois moyen, un nœud populaire peut consommer jusqu'à 1 To de transfert de données. Cette consommation augmente considérablement pendant les périodes de forte activité sur le réseau.
- Un processeur multi-core est recommandé si vous prévoyez de travailler/utiliser l'ordinateur pendant que le nœud fonctionne.
- Si vous voulez fournir un service précieux au réseau, il est important que le nœud puisse rester en ligne pendant une longue période - idéalement, le nœud devrait fonctionner en continu, 24/24.

De nombreux opérateurs de nœuds utilisent des services VPS pour héberger leurs nœuds Dogecoin. Si l'on dispose de suffisamment d'espace HD, d'un processeur multi-core moderne et d'un transfert de données sortant suffisant, il est possible d'héberger un site Web sur le même serveur que celui où fonctionne le nœud.

<hr />

## Répertoire de données {#data-directory}

Le répertoire de données est l'emplacement où sont stockés les fichiers de la blockchain, ainsi que les fichiers journaux et les fichiers de portefeuille. Vous devez vous assurer que ce répertoire est situé sur un lecteur disposant d'un espace disque suffisant. L'emplacement de ce répertoire peut être modifié en utilisant l'argument -datadir= lors du démarrage de votre nœud Dogecoin ou en utilisant le même paramètre dans le [fichier dogecoin.conf](/fr/dogepedia/how-tos/operating-a-node/#advanced-configuration).

Il s'agit de l'emplacement par défaut du répertoire des données de base de Dogecoin :

Platform | Data directory path
---------|--------------------
Linux    | `$HOME/.dogecoin`
macOS    | `$HOME/Library/Application Support/Dogecoin`
Windows  | `%APPDATA%\Dogecoin`

<hr />

## Avis de non-responsabilité : Sécurité {#security}
Ce guide se concentre sur la fourniture d'instructions pour le fonctionnement d'un nœud de support du réseau Dogecoin. 

L'exécution d'un nœud complet peut également être utile pour les entreprises ou les fournisseurs de services. Dans ces cas, des précautions supplémentaires peuvent être nécessaires concernant la sécurité de la machine où le nœud est exécuté. Ce point n'est pas abordé dans cet article et peut nécessiter un administrateur système expérimenté.

En général, l'exécution d'un nœud n'est pas intrinsèquement différente ou moins sûre que l'exécution de tout autre service pair-à-pair sur votre ordinateur, tant que vous maintenez votre logiciel Dogecoin Core à jour. Quoi qu'il en soit, le nœud est un service public : à moins que vous ne l'exécutiez derrière un système de proxy, votre IP, et donc votre emplacement, seront diffusés au monde extérieur. Pour cette raison, il est souvent recommandé de NE PAS utiliser le nœud pour détenir de grandes quantités de Dogecoin (en fait, Dogecoin Core peut également être utilisé comme une application de portefeuille). Pour cela, il est recommandé de s'appuyer sur une solution de portefeuille froid, comme un [*portefeuille matériel*](/fr/dogepedia/articles/dogecoin-hardware-wallets/).

<hr />

## Déploiement d'un nœud {#generic-instructions}
L'installation d'un nœud est extrêmement facile - en gros, c'est comme l'installation de toute autre application, à condition que votre machine réponde aux exigences énumérées ci-dessus. 

Ce processus s'applique à toutes les plateformes :

- Téléchargez Dogecoin Core depuis le site officiel [**Dogecoin.com**](https://dogecoin.com/) ou depuis le [**Dogecoin Github repository**](https://github.com/dogecoin/dogecoin/releases). Choisissez la version correspondant à votre système d'exploitation. Au moment de la rédaction de ce document, le dépôt Github comprend des versions pour les machines Windows, macOS et Linux. D'autres versions spécialisées sont disponibles et maintenues par les contributeurs de Dogecoin.
- Installez Dogecoin Core comme vous le feriez pour toute autre application.
- Démarrez Dogecoin Core (version Daemon ou GUI).
- Attendez que Dogecoin Core se synchronise avec le réseau : la première fois que vous démarrez Dogecoin Core, cela peut prendre plus de 24 heures, en fonction des conditions du réseau et de votre connexion Internet. Patience !
- Dans la plupart des cas, vous devrez peut-être ouvrir le port 22556 dans votre routeur/pare-feu pour permettre les connexions entrantes.

### Construire Dogecoin Core à partir des sources {#dogecoin-core-build}
La communauté fournit des paquets préconstruits pour les systèmes d'exploitation et les distributions les plus populaires, et de nouveaux paquets sont ajoutés régulièrement. Quoi qu'il en soit, la documentation officielle fournie avec Dogecoin Core comprend des instructions de construction pour plusieurs systèmes d'exploitation, y compris plusieurs distributions Linux, qui sont utiles pour tous les utilisateurs qui doivent ou veulent construire Dogecoin Core à partir des sources.

Les instructions de construction sont disponibles [ici](https://github.com/dogecoin/dogecoin/tree/master/doc).

### Instructions pour Windows {#windows-instructions}
- Après avoir téléchargé la version Dogecoin Core pour Windows, allez dans votre dossier de téléchargement et exécutez le programme d'installation en double-cliquant sur l'icône.
- Windows vous demandera de confirmer. Cliquez sur Oui.
- Il est possible que vous receviez un avertissement de votre logiciel antivirus concernant un malware contenu dans Dogecoin Core. Si vous l'avez téléchargé à partir du site officiel Dogecoin.com ou du dépôt Github, il n'y a aucun risque à installer Dogecoin Core - l'avertissement est un faux positif. Mettez Dogecoin Core sur une liste blanche dans le panneau de contrôle de l'antivirus, puis essayez de l'installer à nouveau.
- Après l'installation, Dogecoin Core devrait se trouver dans votre menu Démarrer. Cliquez sur l'icône, et Dogecoin Core s'ouvrira.
- Si tout s'est bien passé, Dogecoin Core commencera à télécharger une copie de la blockchain. Cela peut prendre plus de 24 heures, voire plusieurs jours dans certains cas.
- Pour soutenir le réseau Dogecoin, vous devez autoriser les connexions entrantes en ouvrant le port 22556 dans votre pare-feu et votre routeur. Consultez la section [**Configuration du réseau**](/fr/dogepedia/how-tos/operating-a-node/#network-configuration) pour obtenir des instructions à ce sujet.

Une fois que le téléchargement initial de la blockchain est terminé et que vous avez activé les connexions entrantes, Dogecoin Core est prêt à fonctionner comme un nœud à part entière du réseau. Quoi qu'il en soit, vous voudrez peut-être encore modifier quelques paramètres.

- Assurez-vous que les connexions entrantes sont activées dans votre Dogecoin Core. Allez dans Paramètres -> Options. Dans l'onglet Réseau, l'option "Autoriser les connexions entrantes" doit être cochée.
   {{< figure src="windows-network-options.png" alt="Installation de Dogecoin Core sous Windows - Options réseau" >}}
- Si vous voulez laisser Dogecoin Core démarrer automatiquement lorsque vous démarrez votre machine, allez dans Paramètres -> Options. Dans l'onglet Principal, activez l'option "Démarrer Dogecoin Core à la connexion du système".
{{< figure src="windows-enable-startup.png" alt="Installation de Dogecoin Core sous Windows - Démarrage à la connexion du système" >}}
- Si vous voulez changer la langue de l'interface, allez dans Paramètres -> Options. Dans l'onglet Affichage, vous pourrez passer à l'une des langues actuellement prises en charge par Dogecoin Core.
{{< figure src="windows-display-options.png" alt="Installation de Dogecoin Core sous Windows - Changer de langue" >}}

Des paramètres de configuration supplémentaires sont disponibles dans la section [**Configuration avancée**](/fr/dogepedia/how-tos/operating-a-node/#advanced-configuration).

#### Dogecoin CLI sur Windows {#windows-cli-instructions}
Les développeurs et tous ceux qui n'ont pas besoin d'utiliser la version GUI (Graphical User Interface) de Dogecoin peuvent utiliser le Dogecoin Core Daemon.

- Ouvrez le menu Démarrer, puis tapez "cmd" et cliquez sur l'icône de l'invite de commande.
- Dans la fenêtre d'invite de commande, tapez la commande suivante pour démarrer le démon :
    ```console
    C:\Users\shibetoshi> cd "C:\Program Files\Dogecoin\daemon\"
    C:\Program Files\Dogecoin\daemon> dogecoind -daemon    
    ```
    Vous devrez ajuster le chemin si vous n'avez pas installé Dogecoin dans le chemin d'installation par défaut. 
- Le Daemon Dogecoin Core démarre maintenant. Vous pouvez maintenant accéder à l'interface JSON-RPC de Dogecoin Core en utilisant la CLI (Command Line Interface) de Dogecoin, qui, dans une installation Windows par défaut, est disponible ici :
    ```console
    C:\Program Files\Dogecoin\daemon> dogecoin-cli
    ```
- Utilisez la commande help pour obtenir la liste de toutes les commandes disponibles :
    ```console
    C:\Program Files\Dogecoin\daemon> dogecoin-cli help
    ```
- Pour obtenir de l'aide sur une commande spécifique :
    ```console
    C:\Program Files\Dogecoin\daemon> dogecoin-cli help getblock 
    ```

Pour plus d'informations sur l'utilisation de Dogecoin CLI, consultez la section [**Dogecoin CLI**](/fr/dogepedia/how-tos/operating-a-node/#dogecoin-cli).

### Instructions pour macOS {#macos-instructions}
- Après avoir téléchargé la version Dogecoin Core pour Mac OSX, allez dans votre dossier Téléchargements et double-cliquez sur l'icône.
- Vous verrez apparaître une fenêtre vous permettant de faire glisser Dogecoin Core dans le dossier Applications. Faites-le pour terminer l'installation.
- Allez dans votre dossier Applications et lancez Dogecoin Core.
- Si tout s'est bien passé, Dogecoin Core commencera à télécharger une copie de la blockchain. Cela peut prendre plus de 24 heures, voire plusieurs jours dans certains cas.
- Pour prendre en charge le réseau Dogecoin, vous devez autoriser les connexions entrantes en ouvrant le port 22556 dans votre pare-feu et votre routeur. Consultez la section [**Configuration du réseau**](/fr/dogepedia/how-tos/operating-a-node/#network-configuration) pour obtenir des instructions à ce sujet.

Une fois que le téléchargement initial de la blockchain est terminé et que vous avez activé les connexions entrantes, Dogecoin Core est prêt à fonctionner comme un nœud complet dans le réseau. Quoi qu'il en soit, vous voudrez peut-être encore modifier quelques paramètres.

- Assurez-vous que les connexions entrantes sont activées dans votre Dogecoin Core. Allez dans Dogecoin Core -> Préférences. Dans l'onglet Réseau, l'option "Autoriser les connexions entrantes" doit être cochée.
   {{< figure src="macosx-network-options.png" alt="Installation de Dogecoin Core sur macOS - Options du réseau" >}}
- Si vous voulez laisser Dogecoin Core démarrer automatiquement lorsque vous démarrez votre machine, allez dans Dogecoin Core -> Préférences. Dans l'onglet Principal, activez l'option "Démarrer Dogecoin Core à la connexion du système".
   {{< figure src="macosx-enable-startup.png" alt="Installation de Dogecoin Core sur macOS - Démarrer à la connexion du système" >}}
- Si vous voulez changer la langue de l'interface, allez dans Dogecoin Core -> Préférences. Dans l'onglet Affichage, vous pourrez passer à l'une des langues actuellement prises en charge par Dogecoin Core.
   {{< figure src="macosx-display-options.png" alt="Installation de Dogecoin Core sur macOS - Changer de langue" >}}


### Instructions pour Linux {#linux-instructions}

L'exécution du nœud Dogecoin Core sur une machine Linux est relativement simple. Les plans VPS fonctionnent très bien pour l'exécution d'un nœud sans tête car ils sont généralement fournis avec des connexions réseau rapides et fiables, mais assurez-vous que le plan que vous avez choisi comprend suffisamment de transfert de données par mois et au moins 60 Go d'espace disque, comme spécifié dans la [section des exigences minimales](/fr/dogepedia/how-tos/operating-a-node/#minimum-requirements). Idéalement, vous devriez exécuter les commandes suivantes en tant qu'utilisateur Linux non root - consultez le manuel de votre distribution Linux si vous n'êtes pas un administrateur de serveur expérimenté.

- Téléchargez la dernière version Linux depuis le [**Dogecoin Github repository**].(https://github.com/dogecoin/dogecoin/releases):
    ```console
    shibetoshi:~$ wget https://github.com/dogecoin/dogecoin/releases/download/v1.14.6/dogecoin-1.14.6-x86_64-linux-gnu.tar.gz
    ```
- Untar et unzip le paquet que vous venez de télécharger
    ```console
    shibetoshi:~$ tar -xvzf dogecoin-1.14.6-x86_64-linux-gnu.tar.gz
    ```
- Entrez dans le répertoire bin à l'intérieur du répertoire où Dogecoin Core a été untarred :
    ```console
    shibetoshi:~$ cd dogecoin-1.14.6/bin
    ```
- Démarrer le processus headless Dogecoin Daemon :
    ```console
    shibetoshi:~$ dogecoind -daemon
    ```
- Si vous préférez et qu'il ne s'agisse pas d'une installation à distance, vous pouvez utiliser la version GUI de Dogecoin Core :
    ```console
    shibetoshi:~$ dogecoin-qt
    ```
- Le Daemon Dogecoin est maintenant en marche.
- Vous pouvez maintenant utiliser l'outil dogecoin-cli pour interagir avec l'interface JSON-RPC de Dogecoin Core. Utilisez la commande help pour obtenir une liste de toutes les commandes disponibles.
    ```console
    shibetoshi:~$ dogecoin-cli help
    ```
- Pour obtenir de l'aide sur une commande spécifique :
    ```console
    shibetoshi:~ dogecoin-cli help getblock 
    ```
- Vous pouvez suivre le processus de synchronisation en lisant le contenu du fichier debug.log contenu dans le répertoire de données. Allez dans le [répertoire de données](/fr/dogepedia/how-tos/operating-a-node/#data-directory), et tapez la commande suivante :
    ```console
    shibetoshi:~$ tail -f debug.log
    ```
- Dans la plupart des configurations, vous pouvez arrêter d'"écouter" la sortie du fichier debug.log en appuyant sur CTRL+C.

Pour plus d'informations sur l'utilisation de Dogecoin CLI, consultez la section [**Dogecoin CLI**](/fr/dogepedia/how-tos/operating-a-node/#dogecoin-cli). Des paramètres de configuration supplémentaires peuvent être trouvés dans la section [**Configuration avancée**](/fr/dogepedia/how-tos/operating-a-node/#advanced-configuration). Par exemple, si vous n'utilisez pas Dogecoin Core comme portefeuille, il peut être judicieux de désactiver complètement la fonctionnalité de portefeuille.

<hr />

## Mise à jour de Dogecoin Core {#generic-upgrade-instructions}
Une fois que vous l'avez installé et configuré, la mise à niveau d'une version récente de Dogecoin Core est généralement aussi facile que la mise à niveau de toute autre application.

- Si vous utilisez Core comme portefeuille, [faites une sauvegarde](/fr/dogepedia/articles/how-to-backup-a-wallet/) de vos fichiers de portefeuille. Il est recommandé de faire également une sauvegarde en texte brut, surtout si vous utilisez une ancienne version de Dogecoin Core. Stockez-la dans un endroit sûr - quiconque a accès aux sauvegardes a accès à votre portefeuille.
- Fermez votre Dogecoin Core. Cela peut être fait soit en fermant l'application Dogecoin Core GUI et en attendant qu'elle termine le processus d'arrêt, soit, pour les utilisateurs de CLI, en lançant la commande *dogecoin-cli stop* via le shell. Plus d'informations pour les utilisateurs CLI sont disponibles [ici](#dogecoin-cli).
- Une fois fait, suivez les instructions d'installation ci-dessus pour votre système d'exploitation actuel.

<hr />

## Configuration du réseau {#network-configuration}
Par défaut, dans la plupart des configurations, votre nœud Dogecoin Core peut être capable d'établir uniquement des connexions sortantes. Pour supporter le réseau Dogecoin, vous devez autoriser les connexions entrantes via le port 22556.

Selon la configuration de votre réseau local, cela peut nécessiter une configuration supplémentaire de votre routeur et/ou de votre modem, ainsi que l'ajout de quelques règles supplémentaires à votre pare-feu.

Tout d'abord, vous devez vérifier si les connexions entrantes fonctionnent ou non. Lorsque les connexions entrantes ne sont pas activées, Dogecoin Core ne pourra établir que 8 connexions sortantes. Si le nombre total de connexions de votre nœud est supérieur à 8, cela signifie que votre nœud autorise les connexions entrantes.

Vous pouvez vérifier le nombre et le type de connexions très facilement en utilisant l'interface graphique de Dogecoin Core. Si vous regardez dans le coin inférieur droit de la fenêtre Dogecoin Core, vous verrez une icône représentant l'état actuel du réseau. Survolez l'icône (ne cliquez pas) et une fenêtre contextuelle devrait apparaître, affichant le nombre total de connexions. 

{{< figure src="windows-connection-hover-debug.png" alt="Dogecoin Core GUI - Hover To See Connection Count" >}}

Sinon, allez dans le menu Aide -> Debug, et vous devriez voir un aperçu détaillé de l'état de votre réseau.

{{< figure src="windows-connection-debug.png" alt="Dogecoin Core GUI - Network Debug" >}}

Dans ces deux exemples, seules les connexions entrantes sont activées.

Si vous utilisez la CLI de Dogecoin, vous pouvez vérifier le nombre total de connexions en utilisant la commande *getconnectioncount* :

```console
shibetoshi:~$ dogecoin-cli getconnectioncount
12
```

Dans ce cas, comme il y a plus de 8 connexions actives, nous savons que le nœud autorise déjà les connexions entrantes. 

Gardez à l'esprit que votre nœud ne pourra accepter les connexions entrantes qu'après avoir téléchargé une copie complète de la blockchain. Attendez que la phase de synchronisation soit terminée, puis attendez quelques heures avant de vérifier si les connexions entrantes fonctionnent.

#### Forward le port 22556 dans votre routeur
Cette étape n'est généralement pas nécessaire si vous exécutez Dogecoin Core sur un serveur VPS, puisque la plupart des services permettent à toutes les connexions entrantes d'atteindre vos serveurs. Cependant, dans certains cas, certains hôtes peuvent avoir un pare-feu devant votre serveur - dans ce cas, vous devrez peut-être demander à leur service clientèle de transférer le port 22556 pour vous.

Dans la plupart des foyers, les ordinateurs se connectent à Internet par le biais d'un modem ou d'un routeur, qui est configuré pour bloquer les connexions entrantes sur la plupart des ports. Pour transférer le port 22556, vous devez suivre les étapes suivantes. Veuillez consulter le manuel de votre routeur pour obtenir des instructions spécifiques.

- Accédez au panneau de configuration de votre routeur à l'aide de votre navigateur Internet. En général, la plupart des routeurs disposent d'un panneau de commande accessible à l'adresse https://192.168.0.1 ou https://192.168.1.1. Parfois, un autocollant indiquant l'adresse IP est apposé sur le dessous ou le côté du routeur.
- Connectez-vous au panneau de configuration du routeur. Vous devrez utiliser le nom d'utilisateur et le mot de passe fournis par le fabricant du routeur. Parfois, un autocollant est placé sur le dessous ou le côté du routeur pour révéler le mot de passe administrateur. Voici quelques mots de passe par défaut courants utilisés par les fabricants de routeurs les plus connus :

    Manufacturer | Username | Password
    -------------|----------|---------
    D-Link       |  admin   | (blank)
    Netgear      |  admin   | password
    Linksys      |  admin   | admin
    Asus         |  admin   | admin
    DrayTek      |  admin   | admin
    ZyXel        |  admin   | 1234
    TP-Link      |  admin   | admin
    Belkin       |  admin   | (blank)

- Dans le panneau de contrôle du routeur, attribuez une IP statique à la machine qui exécute Dogecoin Core. Cela se fait normalement dans la page du protocole de configuration dynamique des hôtes (DHCP).
- Dans le panneau de configuration du routeur, configurez le transfert de port, en transférant tout le trafic entrant vers le port 22556 de votre routeur vers l'IP statique que vous avez attribué à la machine exécutant Dogecoin Core.

#### Ouvrez le port 22556 dans la configuration de votre pare-feu.
Enfin, dans certaines configurations et systèmes d'exploitation, vous devrez également ouvrir le port 22556 dans la machine où Dogecoin Core est installé. Les instructions pour le faire varient d'un système d'exploitation à l'autre. Certains logiciels antivirus peuvent inclure un pare-feu - consultez le manuel fourni par le développeur.

- [Instructions pour Windows 10 et 11](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule)
- [Instructions pour macOS (généralement inutiles ; le pare-feu est désactivé par défaut)](https://support.apple.com/en-us/HT201642)
- [Instructions Ubuntu : Pare-feu UFW](https://ubuntu.com/server/docs/security-firewall)

<hr />

## Configuration avancée {#advanced-configuration}

Dogecoin Core est hautement configurable. Les paramètres de configuration pour le Daemon Dogecoin Core ou l'interface graphique Dogecoin Core peuvent être utilisés comme argument lors du démarrage de Dogecoin Core ou peuvent être enregistrés dans le fichier dogecoin.conf, qui doit être placé dans le [répertoire de données](/fr/dogepedia/how-tos/operating-a-node/#dogecoin-cli).

Pour démarrer Dogecoin GUI avec des paramètres personnalisés :

```
dogecoind-qt -maxconnections=50 -datadir=/dogecoin/data
```

Pour démarrer le Dogecoin Daemon avec des paramètres personnalisés :
```
dogecoind -maxconnections=50 -datadir=/dogecoin/data -daemon
```

Sinon, vous pouvez enregistrer les paramètres de configuration dans le fichier *dogecoin.conf* et ils seront appliqués chaque fois que vous démarrez Dogecoin Core :
```
datadir=/dogecoin/data
maxconnections=50
```

Vous pouvez obtenir une liste de tous les paramètres de configuration disponibles en utilisant la commande *help* :

```console
shibetoshi:~$ dogecoind -help
```

Le répertoire d'exemples du dépôt Github de Dogecoin comprend un fichier dogecoin.conf avec des commentaires détaillés sur les différents paramètres. Consultez-le [ici](https://github.com/dogecoin/dogecoin/blob/master/contrib/debian/examples/dogecoin.conf).

#### Chemin vers dogecoin.conf
Vous pouvez spécifier un chemin personnalisé vers dogecoin.conf lors du démarrage de Dogecoin Core.

Pour l'interface graphique de Dogecoin Core :

```
dogecoind-qt -conf=/cheemz/dogecoin.conf
```

Pour le Dogecoin Core Daemon :
```
dogecoind -conf=/cheemz/dogecoin.conf
```

#### Fixer le montant minimum des frais de relais {#minrelaytxfee}
En tant qu'opérateur de nœud, vous pouvez définir les frais de relais minimums pour votre nœud. Les transactions dont les frais sont inférieurs à ce montant (en DOGE/kB) ne seront pas relayées par votre nœud. Valeur par défaut : 0.001.

```
minrelaytxfee=<amt>
```

#### Fixer le montant maximal des frais de relais {#maxtxfee}
Les transactions dont les frais totaux maximums sont supérieurs à ce montant (en DOGE) ne seront pas relayées. Valeur par défaut : 100.00.

```
maxtxfee=<amt>
```

#### Accepter les commandes RPC {#rpcserver}
Activez les commandes RPC pour dogecoind et dogecoin-qt. L'interface est exposée sur le port 25555.

```
server=1
```

#### Nom d'utilisateur et mot de passe RPC (obsolète) {#rpccredentials}
Lors de l'interaction avec l'interface RPC, l'authentification est requise. Dogecoin Core utilise un cookie aléatoire lorsqu'aucun justificatif d'authentification n'est fourni. Les utilisateurs peuvent configurer un nom d'utilisateur et un mot de passe pour accéder à l'interface RPC. **Soyez extrêmement prudent en n'exposant pas un portefeuille. Toute personne ayant accès aux informations d'identification RPC a un accès complet à votre portefeuille. Le nom d'utilisateur et le mot de passe ne sont pas cryptés lors de la connexion à un serveur RPC distant**.

```
rpcuser=shibetoshi
rpcpassword=impossibletoguesspassword
```

#### RPC Auth {#rpcauth}
Au lieu de stocker le mot de passe brut dans le fichier de configuration, vous pouvez stocker son hachage. Le client peut se connecter normalement en utilisant les arguments rpcuser et rpcpassword. Le format est le suivant :

```
rpcauth=<USERNAME>:<SALT>$<HASH>
```

Un script python permettant de générer les informations d'identification de l'utilisateur est inclus dans le [répertoire share/rpcuser](https://github.com/dogecoin/dogecoin/tree/master/share/rpcuser) dans le dépôt Github de Dogecoin.

#### RPC Bind {#rpcbind}
Se lier à une adresse donnée pour écouter les connexions JSON-RPC. **Soyez extrêmement prudent en n'exposant pas votre portefeuille. Toute personne ayant accès aux informations d'identification RPC a un accès complet à votre portefeuille**.

```
rpcbind=<addr>
```

#### RPC Autoriser les IPs {#rpcallowip}
Autorise les connexions JSON-RPC uniquement à partir des IP spécifiées. Spécifiez plusieurs fois pour autoriser les connexions à partir de plusieurs IP. **Soyez extrêmement prudent en n'exposant pas votre portefeuille. Toute personne ayant accès aux informations d'identification RPC a un accès complet à votre portefeuille.**

```
rpcallowip=<addr>
```

#### Port RPC {#rpcpor}
Se lie au port donné pour écouter les connexions JSON-RPC (par défaut : 25555). **Soyez extrêmement prudent en n'exposant pas votre portefeuille. Toute personne ayant accès aux informations d'identification RPC a un accès complet à votre portefeuille**.

```
rpcport=<port>
```

#### Répertoire de données personnalisé {#data-directory}
Vous pouvez configurer un emplacement personnalisé pour le répertoire de données.
```
datadir=/dogecoin/data
```

#### Répertoire de sauvegarde personnalisé (Dogecoin Core versions > 1.14.6) {#backup-directory}
Vous pouvez configurer un emplacement personnalisé pour le répertoire utilisé pour stocker les sauvegardes lorsque vous utilisez les commandes CLI *dumpwallet* et *backupwallet*.
```
backupdir=/Users/Cheemz/SecretCannolo/
```

#### Désactiver la fonctionnalité de portefeuille {#disable-wallet}
Si vous utilisez Dogecoin Core pour soutenir le réseau, il est probable que vous ne l'utilisiez pas également comme portefeuille Dogecoin. Pour désactiver la fonctionnalité de portefeuille, utilisez le paramètre *disablewallet*.
```
disablewallet=1
```

#### Bind à une IP {#bind-to-ip}
Se lie à l'adresse donnée et écoute toujours sur celle-ci.
```
bind=<ipaddress>
```

#### Réduire le trafic et l'utilisation de la bande passante {#reduce-traffic}
Pour réduire l'utilisation de la bande passante, vous pouvez réduire le nombre de connexions et le trafic autorisés par Dogecoin Core. Par défaut, Dogecoin Core autorise jusqu'à 125 connexions, dont 8 sont sortantes.

Vous pouvez réduire le nombre maximum de connexions en utilisant le paramètre *maxconnection*. Si votre bande passante est limitée, commencez par un nombre inférieur de connexions maximales et augmentez-le progressivement. 50 connexions peut être une bonne valeur de départ.
```
maxconnections=50
```

Vous pouvez réduire la quantité maximale de bande passante utilisée pour servir les blocs historiques (les blocs servis lorsqu'un nouveau nœud se synchronise pour la première fois). Cela permettra de réduire considérablement l'utilisation de la bande passante :
```
maxuploadtarget=<MiB per day>
```

#### Personnalisez votre nœud {#uacomment}
Si vous souhaitez ajouter une chaîne de texte à l'agent utilisateur diffusé par votre nœud, vous pouvez utiliser le paramètre *uacomment*. Si vous exploitez votre nœud depuis votre domicile et que vous ne souhaitez pas révéler votre identité, il est recommandé de ne pas inclure d'informations d'identification.
```
uacomment=Cheemz
```

<hr />

## Dogecoin CLI {#dogecoin-cli}
Le Dogecoin CLI est un outil vous permettant d'accéder à l'interface JSON-RPC fournie avec Dogecoin Core. Il est recommandé d'explorer les différentes commandes listées en utilisant la commande *help*, où les commandes seront soigneusement divisées en catégories.

Le dépôt Github contient une [bonne introduction à l'utilisation de l'outil Dogecoin CLI](https://github.com/dogecoin/dogecoin/blob/master/doc/getting-started.md).

```console
shibetoshi:~$ dogecoin-cli help
```

A partir de Dogecoin Core 1.14.6, voici le résultat de la commande :

```console
    == Blockchain ==
    getbestblockhash
    getblock "blockhash" ( verbose )
    getblockchaininfo
    getblockcount
    getblockhash height
    getblockheader "hash" ( verbose )
    getchaintips
    getdifficulty
    getmempoolancestors txid (verbose)
    getmempooldescendants txid (verbose)
    getmempoolentry txid
    getmempoolinfo
    getrawmempool ( verbose )
    gettxout "txid" n ( include_mempool )
    gettxoutproof ["txid",...] ( blockhash )
    gettxoutsetinfo
    preciousblock "blockhash"
    pruneblockchain
    verifychain ( checklevel nblocks )
    verifytxoutproof "proof"

    == Control ==
    getinfo
    getmemoryinfo
    help ( "command" )
    stop

    == Generating ==
    generate nblocks ( maxtries auxpow )
    generatetoaddress nblocks address (maxtries auxpow)

    == Mining ==
    createauxblock <address>
    getauxblock (hash auxpow)
    getblocktemplate ( TemplateRequest )
    getmininginfo
    getnetworkhashps ( nblocks height )
    prioritisetransaction <txid> <priority delta> <fee delta>
    submitauxblock <hash> <auxpow>
    submitblock "hexdata" ( "jsonparametersobject" )

    == Network ==
    addnode "node" "add|remove|onetry"
    clearbanned
    disconnectnode "address" 
    getaddednodeinfo ( "node" )
    getconnectioncount
    getnettotals
    getnetworkinfo
    getpeerinfo
    listbanned
    ping
    setban "subnet" "add|remove" (bantime) (absolute)
    setmaxconnections
    setnetworkactive true|false

    == Rawtransactions ==
    createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,"data":"hex",...} ( locktime )
    decoderawtransaction "hexstring"
    decodescript "hexstring"
    fundrawtransaction "hexstring" ( options )
    getrawtransaction "txid" ( verbose )
    sendrawtransaction "hexstring" ( allowhighfees )
    signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )

    == Util ==
    createmultisig nrequired ["key",...]
    estimatefee nblocks
    estimatepriority nblocks
    estimatesmartfee nblocks
    estimatesmartpriority nblocks
    signmessagewithprivkey "privkey" "message"
    validateaddress "address"
    verifymessage "address" "signature" "message"

    == Wallet ==
    abandontransaction "txid"
    addmultisigaddress nrequired ["key",...] ( "account" )
    addwitnessaddress "address"
    backupwallet "destination"
    bumpfee "txid" ( options ) 
    dumpprivkey "address"
    dumpwallet "filename"
    getaccount "address"
    getaccountaddress "account"
    getaddressesbyaccount "account"
    getbalance ( "account" minconf include_watchonly )
    getnewaddress ( "account" )
    getrawchangeaddress
    getreceivedbyaccount "account" ( minconf )
    getreceivedbyaddress "address" ( minconf )
    gettransaction "txid" ( include_watchonly )
    getunconfirmedbalance
    getwalletinfo
    importaddress "address" ( "label" rescan p2sh )
    importmulti "requests" "options"
    importprivkey "dogecoinprivkey" ( "label" ) ( rescan )
    importprunedfunds
    importpubkey "pubkey" ( "label" rescan )
    importwallet "filename"
    keypoolrefill ( newsize )
    listaccounts ( minconf include_watchonly)
    listaddressgroupings
    listlockunspent
    listreceivedbyaccount ( minconf include_empty include_watchonly)
    listreceivedbyaddress ( minconf include_empty include_watchonly)
    listsinceblock ( "blockhash" target_confirmations include_watchonly)
    liststucktransactions ( verbose include_watchonly )
    listtransactions ( "account" count skip include_watchonly)
    listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] [query_options])
    lockunspent unlock ([{"txid":"txid","vout":n},...])
    move "fromaccount" "toaccount" amount ( minconf "comment" )
    removeprunedfunds "txid"
    rescan ( "height" )
    sendfrom "fromaccount" "toaddress" amount ( minconf "comment" "comment_to" )
    sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
    sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount )
    setaccount "address" "account"
    settxfee amount
    signmessage "address" "message"
    walletlock
    walletpassphrase "passphrase" timeout
    walletpassphrasechange "oldpassphrase" "newpassphrase"
```

Vous pouvez également obtenir de l'aide et des informations sur n'importe quelle commande en utilisant la commande *help* avec l'argument supplémentaire :

```console
shibetoshi:~$ dogecoin-cli help <command>
```

Certaines commandes utiles sont énumérées ci-dessous.

#### Gestion de votre daemon Dogecoin Core

- Vous pouvez arrêter votre démon Dogecoin Core proprement en utilisant la commande *stop* :
    ```console
    shibetoshi:~$ dogecoin-cli stop
    ```
- Obtenez des informations sur votre nœud :
    ```console
    shibetoshi:~$ dogecoin-cli getinfo
    ```
- Rescanner la blockchain à partir d'un bloc spécifique (depuis Dogecoin Core 1.14.6) :

Cette commande permet aux opérateurs de nœuds de rescanner la chaîne pour les transactions de portefeuilles à partir d'une certaine hauteur.
    ```console
    shibetoshi:~$ dogecoin-cli rescan <block height>
    ```
- Obtenir le nombre total de connexions :
    ```console
    shibetoshi:~$ dogecoin-cli getconnectioncount
    ```
- Définir le nombre maximum de connexions (depuis Dogecoin Core 1.14.6) :
    ```console
    shibetoshi:~$ dogecoin-cli setmaxconnections <desired_amount>
    ```
- Ajoute un noeud à la liste addnode :
    ```console
    shibetoshi:~$ dogecoin-cli addnode <addr> add
    ```
- Supprime un nœud de la liste addnode :
    ```console
    shibetoshi:~$ dogecoin-cli addnode <addr> add
    ```
- Se déconnecter d'un nœud :
    ```console
    shibetoshi:~$ dogecoin-cli disconnectnode <addr>
    ```
- Obtenir des informations sur le traitement de la blockchain :
    ```console
    shibetoshi:~$ dogecoin-cli getblockchaininfo
    ```
- Obtenir des informations sur un bloc spécifique :
    ```console
    shibetoshi:~$ dogecoin-cli getblock <blockhash>
    ```
- Obtenir des informations sur une transaction spécifique :
    ```console
    shibetoshi:~$ dogecoin-cli gettransaction <txid>
    ```
- Lister et explorer les transactions "bloquées" (depuis Dogecoin Core 1.14.6) :
Si vous utilisez votre nœud Dogecoin pour envoyer et recevoir des transactions, il peut être utile d'identifier les transactions "bloquées" (non minées et non présentes dans le mempool) avant une mise à niveau des politiques locales en matière de frais et de poussière qui pourraient permettre à d'anciennes transactions oubliées d'être "débloquées" en raison de politiques plus permissives.

La méthode peut être appelée avec :

```console
shibetoshi:~$ dogecoin-cli liststucktransactions
```


En général, il est recommandé d'explorer et de "jouer" avec les différentes commandes disponibles ; il n'y a pas de meilleur moyen d'apprendre. L'interface JSON-RPC peut être utilisée pour développer des services et automatiser la gestion de votre nœud Dogecoin Core.

<hr />

## Trouver de l'aide en tant qu'opérateur de nœuds Dogecoin {#finding-help}
Il existe plusieurs communautés où vous pouvez trouver de l'aide pour configurer et faire fonctionner votre nœud. Sur reddit, vous pouvez poser des questions sur [r/dogecoin](https://www.reddit.com/r/dogecoin/) ou [r/dogeducation](https://www.reddit.com/r/dogeducation/). Vous pouvez également trouver de l'aide sur d'autres réseaux sociaux - il existe une communauté active de shibes exploitant des nœuds Dogecoin.
