+++
title = "Mining Dogecoin"
date = "2021-10-22"
type = "how-to"

[ author ]
  name = "Dogecoin"
+++

Miners and mining are at the center of Dogecoin's Proof of Work consensus mechanism. Check these Dogepedia articles to understand what miners do, how they interact with nodes, and why mining pools come into play when it comes to mining:

- [**What is a miner?**](/dogepedia/articles/what-is-a-miner/)
- [**What is a mining pool?**](/dogepedia/articles/what-is-a-mining-pool/)
- [**What is a node?**](/dogepedia/articles/what-is-a-node/)

### Mining Dogecoin
Mining Dogecoin used to be much simpler in the early days. A miner only needed a computer with enough disk space and a gaming GPU - and this was enough to mine Dogecoin. Soon enough, the total [**mining hashrate of the network**](/dogepedia/articles/what-is-a-miner/#hashing-power) had grown so much that the likelihood of a miner finding a block while mining solo had been reduced drastically. 

For this reason, [**mining pools**](/dogepedia/articles/what-is-a-mining-pool/) for Dogecoin miners - the equivalent of those already existing for Bitcoin, Litecoin, and other PoW cryptocurrencies - were created, and people joined them to combine their hashing power with the hashing power of hundreds and then thousands of other miners. Mining revenues were split with the mining pool and with all the other miners following a set of rules established by the mining pool operators.

Then, in 2014, Dogecoin was modified to allow [**merged mining**](/dogepedia/articles/what-is-a-miner/#merged-mining) with other cryptocurrencies sharing the same Proof of Work algorithm (called *Scrypt*). The most popular cryptocurrency using Scrypt was, at the time, Litecoin. Since then, miners can mine Litecoin and any other classic Scrypt crypto and contribute also to the Dogecoin network, receiving the mining rewards from multiple blockchains at once for the same amount of work.

Generally, mining in a mining pool is still the way to mine Dogecoin for most miners, with a crucial difference in equipment: nowadays, all miners mining Dogecoin and other Scrypt coins profitably do so using specialized hardware called **Application-Specific Integrated Circuits (ASICs)**, in particular ASIC miners built specifically for Proof of Work cryptocurrencies using the Scrypt algorithm.

### What you Need to Mine Dogecoin for Profit {#dogecoin-mining-recipe}
To mine Dogecoin profitably, nowadays you usually need:

- A Windows/Linux/Mac OS computer
- One or more ASIC miners for Scrypt-based cryptocurrencies
- Power supplies for your ASIC miners
- An account with a mining pool
- Access to relatively cheap electricity
- A [Dogecoin wallet](/dogepedia/articles/how-do-i-get-a-wallet/) where the mining pool will send your mining rewards

### ASIC Miners {#ASICs}
ASICs are devices optimized to perform one specific task; in the case of Scrypt ASIC miners, this task consists in calculating as many hashes as possible over a short period of time. This allows miners to have more chances of finding the proper hash for a block they have prepared. Read more about this in our article about [miners](/dogepedia/articles/what-is-a-miner/#the-role-of-miners).

ASIC miners are generally very expensive, difficult to get your hands on, and require a bit of experience to be set up and housed properly. In comparison to GPUs, they are louder and usually generate more heat. This means that ASICs need to be housed in a dedicated room, such as a garage or a basement, or in a purpose-built shed. It is recommended that the location where ASIC miners and the computer used to control them are housed has proper ventilation and can be cooled down easily.

You can buy ASIC miners directly from their manufacturers, but there is normally a long waiting list and a significant amount of money to pay in advance. It is also recommended that you do your own research before prepaying for an ASIC miner and that you purchase your ASICs only from sources with a good reputation. 

eBay is an option, as well, but it is better suited to experienced miners. Make sure to rely on well-known sellers with a higher number of feedback ratings and an overall positive score. eBay usually offers some form of buyer protection (always check the conditions), making it a good platform to find second-hand miners. It is recommended that you reinstall the ASIC miner's firmware before using a second-hand ASIC miner.

Keep in mind that old ASIC models will always be less profitable than newer ones, because for the same amount of energy consumption they are generally capable of generating less work than newer models. At the same time, starting with older ASICs, which might be more readily available, and then upgrading to newer ones reinvesting your mining profits might be a sensible strategy.

You can find a list of current Scrypt ASIC miners and their profitability on [Minerstat](https://minerstat.com/algorithm/scrypt/profitability) (this website is not affiliated with Dogecoin).

### Can You Mine Dogecoin with a GPU? {#dogecoin-mining-with-a-gpu}
You can still try to mine Dogecoin, and contribute to the hashrate of the network, using a computer with a gaming GPU. But this will lead to close to no profits, high energy bills, and to a small contribution to the total Mining Hashrate of the network.

Users interested in obtaining Dogecoin by mining with their gaming GPUs normally use mining pools where they mine cryptos that are still mineable profitably using GPUs, like Ethereum (at the time of this writing). They then exchange these cryptos for Dogecoin. Unfortunately, this does not contribute to the overall security of the Dogecoin network.

In order to mine with a GPU, you will need to install some kind of mining software in the computer housing the GPU. 

### Which Computer Do You Need? {#dogecoin-mining-computer}
If you are mining Dogecoin with one or several ASIC miners, any computer capable of connecting to an Ethernet network will work just fine. 

You will need the computer only to set up the ASIC miners connected to the same local network. The computer can also be configured to act as a monitoring tool using one of the many applications available for this purpose.

If you are planning to mine with a GPU, then the computer housing the CPU should ideally have a decent multicore CPU and enough RAM (8GB+ is recommended) to ensure smooth operation.

### Picking a Mining Pool {#dogecoin-mining-pools}
There are many mining pools allowing you to mine Dogecoin; most of them will allow you to mine Litecoin and contribute to the Dogecoin network at the same time. Most mining pools will have a pool fee (normally around 1%), which will be deducted from your mining rewards. There are several websites which you can use to compare mining pools.

Head to the mining pool's website, and register for an account. You will be asked to accept the rules (read them carefully, as they usually concern also their payout criteria). You will be able to enter your account information, including the address of the wallet where the mining pool will be sending your mining rewards.

### Setting Up Your "Rig" {#dogecoin-mining-basic-setup}
Setting up Scrypt ASIC miners to mine Dogecoin usually consists in the following steps:

- Connect the ASIC miners to their power supplies
- Connect the ASIC miners to your router/switch using an Ethernet cable. Most ASIC miners do NOT include a Wi-Fi connection. This is because reliability is crucial to running a profitable miner.
- Using a computer connected to the same local network, access your router to find out the IPs assigned to the ASIC miners.
- (Optional, but recommended for easy monitoring) Assign a static local IP to your ASIC miner(s), using your router's network configurator. Please refer to your router's manual to do so.
- Input the IP of the ASIC miners in your browser's address bar. Most ASIC miners should display a login page at this point. Login using the default username and password (which you can usually find in the manufacturer's manual).
- Using the ASIC miner's control panel, enter the configuration page for mining pools. Refer to your mining pool of choice to enter the right Protocol, Address, and Username/Address to add a pool.
- At this point, the ASIC miner should be ready to go. There is normally a mining status page in the ASIC miner's control panel which you can use to check this.
- Pools will send your mining rewards to the wallet you specified.
- You can configure an external computer to act as a monitoring tool for your miners; there are several solutions out there, and new ones are being released frequently. Join a community for miners and pick a monitoring tool that is in widespread use in the community.

### Use Renewable Energy {#dogecoin-renewable-energy}
Mining, by design, consumes a lot of electricity. New ASIC miners consume less electricity and generate more hashpower, but the cost of electricity in your area is still critical if you want to mine Dogecoin profitably. Electricity is necessary to power the ASIC miners, but also to keep the room where they are housed cool enough for them to operate properly.

The Dogecoin community also recommends relying on renewable energy whenever possible. Mining with renewable energy is the responsible thing to do for the environment, and can, in the long term, lead to more profits for the miners. Remember: Dogecoin is about Doing Only Good Every Day. Making some efforts to make sure you are mining using only renewable energy, and encouraging your "colleagues" to do the same, is a gift to the community and to the future users of Dogecoin.

### Keep It Cool {#dogecoin-mining-room}
It is recommended that the location where ASIC miners are housed has proper ventilation and can be cooled down easily. If you live in a consistently cold climate, proper ventilation with fresh air coming from the outside should be enough. Otherwise, you might need to invest in air conditioning and more complex solutions to make sure your ASICs are not overheating.

Most of the costs and complexities of running a profitable mining setup, especially if consisting of more than one ASIC miner, involve careful planning and regular maintenance. Some of it can be automated, but due to the high intensity of the work involved, ASICs are prone to hardware failure when improperly configured and maintained.

### Finding Help as a Dogecoin Miner {#finding-help}
You must educate yourself if you are serious about mining. There are several communities where you can find help in setting up and operating your mining equipment. On reddit, you can ask questions on [r/dogecoin](https://www.reddit.com/r/dogecoin/), [r/dogemining](https://www.reddit.com/r/dogemining/), but also on [Litecoin Mining](https://www.reddit.com/r/litecoinmining/), since Dogecoin and Litecoin can be mined at the same time.














