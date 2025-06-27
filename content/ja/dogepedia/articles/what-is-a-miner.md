+++
title = "What is a miner?"
date = "2021-10-22"
type = "article"

[ author ]
  name = "Dogecoin"
+++

A **Miner** is a specialized [node](/dogepedia/articles/what-is-a-node/) in the Dogecoin network.

After regular [nodes](/dogepedia/articles/what-is-a-node#full-nodes) in the network, by referencing the blockchain, have verified that a Dogecoin transaction is valid, the transaction is shown in a "pending" state. It stays in this state until a **miner** or a collective of miners known as a [**mining pool**](/dogepedia/articles/what-is-a-mining-pool) picks up the transaction.

### Miners: ELI5 {#miners-eli5}

Miners are nodes using special hardware (normally Scrypt ASIC miners) which allows them to solve cryptographic puzzles, in a process referred to as "mining". A miner receives new transactions from the other nodes in the network, combines them in a **block** following predetermined and inviolable rules enforced by the network, and then attempts to solve a puzzle that will generate a special number, called a hash, that is derived by combining the content of the block and a number called **nonce** (*number used once*). 

When a miner solves one of these puzzles before any other miner in the network, it is allowed to create a new block in the blockchain, thus confirming the transactions it has included in it. Miners make the blockchain secure and are rewarded for their work with so-called block rewards, consisting of 10,000 Dogecoin per mined block. Miners are also rewarded with the transaction fees associated with the transactions they have included into the block.

If you want to explore this process more in-depth, you can proceed to the next session - but this should be enough to understand what a miner is and what it does for the Dogecoin network.

### The Role of Miners in the Dogecoin Network {#the-role-of-miners}

Miners play several fundamental roles.

- They confirm transactions by adding them into a new block
- They secure the blockchain
- They introduce new coins into circulation

All the miners in the Dogecoin network are in constant competition to solve computationally-intensive puzzles, consisting in finding a special number called a nonce. The first miner - or the first mining pool - that is able to find a nonce that, when *hashed* along with the content of the block header, returns a number smaller than the current network's difficulty target, is the one allowed to write a new block into the blockchain. 

The process of solving this puzzle is known as **Proof of Work**. By design, generating this proof is computationally intensive and thus requires a significant amount of electricity. This energy expenditure is what secures the network. A potential group of attackers would first need to gain control over a significant amount of expensive mining hardware; then, they would need to spend a lot of energy to sustain a prolonged attack against the network.

Unlike Bitcoin, but like Litecoin and other cryptocurrencies, Dogecoin uses the [*Scrypt algorithm*](https://en.wikipedia.org/wiki/Scrypt) as its underlying Proof of Work function.

The **difficulty target** is a way to measure how difficult it is for a miner in the network to produce a valid block; the lower the target value, the more difficult it will be for a miner to generate a valid block because finding a proper nonce takes a longer period of time. Dogecoin's difficulty is adjusted at every block using the [*Digishield algorithm*](https://dgbwiki.com/index.php?title=DigiShield).

A **block** is a data structure made of a block header, containing important information including the hash of the past block, followed by a long list of transactions, making the bulk of its content. Every block that is created contains the hash of the preceding block in its header, which in turn contains the hash of its preceding block, so on and so forth creating a chain all the way back to Dogecoin’s genesis block. 

After a miner has mined a block, the other nodes in the network must validate it. Finally, the block is propagated throughout the network and is included in the blockchain. By chaining together blocks in this way and creating them by following strict rules enforced by the network, miners secure the blockchain and make it immutable, since the validity of a block depends on all the blocks that preceded it.

In return for all this work, a miner is awarded 10,000 newly minted Dogecoin, known as a **block reward**. In addition to this block reward, miners are awarded the transaction fees associated with the transactions they have included into the block. Historically, transaction fees represent a small portion of a miner's income. Currently, transaction fees make up significantly less than 1% of the total income of most miners in the network.

Dogecoin blocks have a maximum size of 1MB and a new block is generated every minute. Considering an average transaction size of 250 bytes, a miner could *theoretically* include up to 4,000 Dogecoin transactions in a single block.

### Miners and Hashing Power {#hashing-power}

Each miner contributes to the network a certain amount of *hashing power*, a metric used to indicate the computational power of a miner in relation to the puzzle it is attempting to solve when mining a new block. The hashing power depends strictly on the hardware the miner is using. Currently, most profitable miners rely on the computational power of specialized machines called **ASIC Miners**.

The hashing power of all the miners in the network is referred to as **Mining Hashrate**, and it is a key metric in the health of the Dogecoin network as the more hashing power in the network, the greater its security and its overall resistance to attacks.

### AuxPoW or "Merged Mining" With Other Scrypt-based Proof of Work Cryptocurrencies {#merged-mining}

Many coins, including Litecoin and Dogecoin, use the same Scrypt algorithm for their Proof of Work. 

In 2014, since the total hashrate of Dogecoin was declining, the creator of Litecoin, Charlie Lee, proposed a solution: allowing Dogecoin to accept proofs calculated for other cryptocurrencies using the same implementation of the Scrypt algorithm. The proposal was accepted and implemented in 2015 by the Dogecoin Developers. The way this was implemented is commonly referred to as **Auxiliary Proof-of-Work (AuxPoW)**.

As a result, the proof of doing work on Litecoin or in any other classic Scrypt coin can be used as proof for mining a Dogecoin block. To do so, the miner must prepare that block with a reference in its header to the Dogecoin block it is going to mine at the same time. As long as the scrypt proofs are well-formed and match the [difficulty target](/dogepedia/articles/what-is-a-miner/#the-role-of-miners) of the Dogecoin network, then the proof can be accepted as valid.

Simply put, miners can use the same computational power they would use to calculate proofs for a single cryptocurrency to provide proofs to multiple chains simultaneously, receiving rewards from several blockchains at once, thus increasing their profit and working more efficiently.

### Mining Dogecoin 

Mining Dogecoin *profitably* requires specialized (and expensive) hardware (ASIC miners); additionally, mining consumes significant amounts of electricity and involves significant maintenance costs and experience.

Miners usually prefer to work together in so-called [**Mining Pools**](/dogepedia/articles/what-is-a-mining-pool), as combining their hashing power with other miners in the network makes the process of finding new blocks more predictable, and, in the end, more profitable. 

If you are interested, please check [our introduction to mining](/dogepedia/how-tos/mining-dogecoin/) to get you started.
