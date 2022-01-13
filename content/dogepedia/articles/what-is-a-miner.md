+++
title = "What is a miner?"
date = "2021-10-22"
[ author ]
  name = "Dogecoin"
+++

A **Miner** is a specialized [node](/dogepedia/how-tos/what-is-a-node/) in the Dogecoin network.

After regular [nodes](/dogepedia/articles/what-is-a-node#full-nodes) in the network, by referencing the blockchain, have verified that a Dogecoin transaction is valid, the transaction is shown in a "pending" state. It stays in this state until a **miner** or a collective of miners known as a [**mining pool**](/dogepedia/articles/what-is-a-mining-pool) picks up the transaction and includes it in a new block, which is then added to the blockchain.

### The Role of Miners in the Dogecoin Network

Miners play several fundamental roles.

- They confirm transactions by adding them into a new block
- They secure the blockchain
- They introduce new coins into circulation

All the miners in the Dogecoin network are in a constant competition to solve computationally-intensive puzzles, consisting in finding a special number called a **nonce** (*number used once*). The first miner - or the first mining pool - that is able to find a nonce that, when *hashed* along with the content of the block header, returns a number smaller than the current network's difficulty target, is the one allowed to write a new block into the blockchain. 

The difficulty target is a way to measure how difficult it is for a miner in the network to produce a valid block; the lower the target value, the more difficult it will be for a miner to generate a valid block because finding a proper nonce takes a longer period of time. Dogecoin's difficulty is adjusted at every block using the Digishield algorithm.

A **block** is a data structure made of a block header, containing important information including the hash of the past block, followed by a long list of transactions, making the bulk of its content. Every block that is created contains the hash of the preceding block in its header, which in turn contains the hash of its preceding block, so on and so forth creating a chain all the way back to Dogecoin’s genesis block. By chaining together blocks in this way, miners secure the blockchain.

In return for all this work, a miner is awarded 10,000 newly minted Dogecoin, known as a **block reward**. In addition to this block reward, miners are awarded the transaction fees associated with the transactions they have included into the block. Historically, transaction fees represent a small portion of a miner's income. Currently, transaction fees make up significantly less than 1% of the total income of most miners in the network.

Dogecoin blocks have a maximum size of 1MB and a new block is generated every minute. Considering an average transaction size of 250 bytes, a miner could *theoretically* include up to 4,000 Dogecoin transactions in a single block.

### Mining Dogecoin 

Mining Dogecoin *profitably* requires specialized (and expensive) hardware (ASIC miners); additionally, mining consumes significant amounts of electricity and involves significant maintenance costs and experience.

Miners usually prefer to work together in mining new blocks, as sharing increases the likelihood of  

If you are interested, please check [our introduction to mining](/dogepedia/how-tos/mining-dogecoin/) to get you started.