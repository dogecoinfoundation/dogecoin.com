+++
title = "Operate a Dogecoin Node"
date = "2022-01-22"
[ author ]
  name = "Dogecoin"
+++

The Dogecoin network is a peer-to-peer payment network consisting of thousands of computers called [**nodes**](/dogepedia/articles/what-is-a-node/). Each of these nodes is running specialized software, called Dogecoin Core, which can be downloaded from the official [**Dogecoin.com**](https://dogecoin.com/) website and directly from the [**Github repository**](https://github.com/dogecoin/dogecoin/releases).

Running a [**full node**](/dogepedia/articles/what-is-a-node/#full-nodes) is a service that volunteers in the network, called *node operators*, provide to the Dogecoin community. Unlike what happens when mining, operating a node does not lead to direct incentives or rewards, but it makes the Dogecoin network more resilient, thus contributing to utility and adoption. Other nodes will be able to download a copy of the blockchain from your 

A full node running on a machine with enough disk space and bandwidth will help to:

- Protect against censorship
- Protect against network denial of service (DoS) attacks
- Provide redundancy to the network by providing more bandwidth, which could be critical during spikes in activity
- Establish a baseline for fees and dust limits through setting relay policies (since Dogecoin Core v1.14.4)

You can read more about the Dogecoin blockchain and nodes in these Dogepedia articles:

- [**What is a blockchain?**](/dogepedia/articles/what-is-a-blockchain/)
- [**What is a node?**](/dogepedia/articles/what-is-a-node/)

### Minimum Requirements
Running a node is not as complicated as mining Dogecoin, as it does not involve specialized hardware and it does not consume nearly as much electricity. In fact, if you already have a computer turned on 24/24 and an unmetered Internet connection, running a node can be done in the background. The requirements for running a node are the following:

- Currently, at least 60GB of HD space, possibly on a fast drive, for storing a full copy of the blockchain. You will need more disk space as the blockchain grows, so starting with a larger disk means . 
- 2GB of RAM
- Unmetered Internet connection or at least an internet connection that allows a significant amount of outbound traffic. On an average month, a popular node can consume up to 1TB of data transfer - and more, during periods of increased activity in the network.
- Multi-core CPU recommended if you plan to work/use the computer where the node is running.
- If you plan to provide a service to the network, it is important that the node can stay online for a long period of time - ideally, the node should be running continuously, 24/24.

Many node operators use online VPS services for hosting their Dogecoin nodes. Given enough HD space, a modern multi-core CPU, and enough outbound data transfer it is possible to host a website on the same server where a node is running.

### Disclaimer: Security
This guide is focused on providing instructions for running a node for supporting the Dogecoin network. 

Running a full node can be also crucial for businesses or service providers. In these cases, additional precautions might be needed to those included in this article concerning the security of the machine where the node is running, which are not covered in this article and might require an experienced system administrator.

In general, running a node is not inherently different from running any other peer-to-peer service on your computer, as long as you keep your Dogecoin Core software updated. Anyhow, since the node is a public service, unless you are running it behind some proxy system, your IP, and thus your location, would be broadcasted to the outside world. For this reason, it is often recommended NOT to use the node for holding large amounts of Dogecoin - in fact, Dogecoin Core can be used also as a wallet application. For that, it is recommended you rely on a cold wallet solution, such as a [*hardware wallet*](/dogepedia/articles/dogecoin-hardware-wallets/).

### Deploying a Node
Installing a node is extremely easy - basically, it is just like installing any other application, provided that your machine meets the requirements listed above. 

This is the process for all platforms:

- Download Dogecoin Core from the official [**Dogecoin.com website**](https://dogecoin.com/) or from the [**Dogecoin Github repository**](https://github.com/dogecoin/dogecoin/releases). Pick the version for your specific Operating System. At the time of this writing, the Github repository includes builds for Windows, Mac OSX, and Linux machines. Other specialized builds are available and maintained by Dogecoin contributors.
- Install Dogecoin Core as you would install any other application
- Open Dogecoin Core
- Wait for Dogecoin Core to synch with the network: the first time you install it, this might take more than 24 hours, depending on conditions of the network and on your internet connection. Patience!
- In some cases, you might need to open up port 22556 in your router/firewall to enable incoming connections 

### Windows Instructions

- After you have downloaded the Dogecoin Core version for Windows, go to your Downloads folder and run the installer by double-clicking on the icon.
- Windows will ask confirmation. Click Yes.
- You might receive a warning from your antivirus software concerning malware contained within Dogecoin Core. As long as you have downloaded it from the official Dogecoin.com website or from the Github repository, there is no risk in installing Dogecoin Core - the warning is a false positive. Whitelist Dogecoin Core in the antivirus control panel, then try installing it again.
- After the installation, Dogecoin Core should be in your Start menu. Click on the icon, and Dogecoin Core will open.
- If everything went fine, Dogecoin Core will start downloading a copy of the blockchain. This might take more than 24 hours - in some cases, days.
- To support the Dogecoin network, you need to allow incoming connections by opening port 22556 in your firewall and in your router. Go to the [**Network Configuration**](/dogepedia/how-to/operating-a-node/#network-configuration) section for instructions to do so.

After the initial blockchain download is complete and you have enabled incoming connections, Dogecoin Core is ready to operate as a full node in the network. Anyhow, you might still want to change a couple of settings.

- If you want to let Dogecoin Core start automatically when you start your machine, go to Settings -> Options. In the Main tab, enable the "Start Dogecoin Core on system login" option.
{{< figure src="windows-enable-startup.png" alt="Dogecoin Core Installation on Windows - Start on system login" >}}
- If you want to change the language of the interface, go to Settings -> Options. In the Display tab, you will be able to switch to one of the languages currently supported by Dogecoin Core.
{{< figure src="windows-display-options.png" alt="Dogecoin Core Installation on Windows - Start on system login" >}}


### Mac OSX Instructions

- After you have downloaded the Dogecoin Core version for Mac OSX, go to your Downloads folder and double-click the icon.
- You will be shown a window allowing you to drag Dogecoin Core into the Applications folder. Do so to complete the installation.
- Go to your Applications folder and launch Dogecoin Core.
- If everything went fine, Dogecoin Core will start downloading a copy of the blockchain. This might take more than 24 hours - in some cases, days.
- To support the Dogecoin network, you need to allow incoming connections by opening port 22556 in your firewall and in your router. Go to the [**Network Configuration**](/dogepedia/how-to/operating-a-node/#network-configuration) section for instructions to do so.

After the initial blockchain download is complete and you have enabled incoming connections, Dogecoin Core is ready to operate as a full node in the network. Anyhow, you might still want to change a couple of settings.

- If you want to let Dogecoin Core start automatically when you start your machine, go to Dogecoin Core -> Preferences. In the Main tab, enable the "Start Dogecoin Core on system login" option.
{{< figure src="macosx-enable-startup.png" alt="Dogecoin Core Installation on Windows - Start on system login" >}}
- If you want to change the language of the interface, go to Dogecoin Core -> Preferences. In the Display tab, you will be able to switch to one of the languages currently supported by Dogecoin Core.
{{< figure src="macosx-display-options.png" alt="Dogecoin Core Installation on Windows - Start on system login" >}}



### Linux Instructions

