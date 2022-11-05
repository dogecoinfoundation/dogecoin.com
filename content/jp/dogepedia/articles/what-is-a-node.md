+++
title = "What is a node and why is it important? Do I need to run one?"
date = "2021-10-22"
type = "article"

[ author ]
  name = "Dogecoin"
+++

The Dogecoin network is a peer-to-peer payment network consisting of thousands of computers called nodes. Each of these nodes is running specialized software, called Dogecoin Core. Transaction information is recorded into a database, split into blocks chained to each other, and distributed and replicated across the nodes of the network: this database is known as the *Dogecoin blockchain*. 

In practice, this results in transaction information being shared across the entire network and, subsequently, not needing to be stored in one centralized place. This is why cryptocurrencies like Dogecoin are often referred to as being *decentralized*.

In short, a node is software that is running on a computer that is connected to the Dogecoin network. This software communicates with other nodes on the network and in doing so keeps the distributed ledger in sync and up-to-date, in addition to providing new nodes that need to download the full Dogecoin blockchain with information about past blocks.

There are several types of nodes, depending on the role they play in the network.


### Full Nodes and Light Nodes {#full-nodes}
*Full nodes* are the backbone of the Dogecoin network. Each full node is able to fully validate transactions and blocks. *Most* full nodes in the Dogecoin network contain a copy of the entire blockchain, the full history of all transactions that ever occurred in the Dogecoin network. Full nodes support the network by accepting transactions and blocks from other full nodes, validating those transactions and blocks, and then relaying them to further full nodes.

*Light nodes* (like the *Multidoge wallet*), also known as SPV nodes, depend on full nodes for functioning. They require much less storage and resources than full nodes, since they do not need to store the entire blockchain. Light nodes are still capable of performing a task - which is to verify transactions by using a method called Simрlifiеd Pауmеnt Vеrifiсаtiоn (SPV).

### Why Full Nodes Are Important {#why-full-nodes-are-important}
Without node operators running full nodes, the Dogecoin network could not function. By being able to fully validate transactions and blocks and by hosting a full copy of the blockchain, full nodes perform crucial tasks in the network, including validating transactions, keeping a historic record of all transactions, and dictating and enforcing the rules of the network.

In practice, a Dogecoin node operator running a node properly, on a machine with enough disk space and bandwidth, will help to:

- Protect against censorship
- Protect against network denial of service (DoS) attacks
- Provide redundancy to the network by providing more bandwidth, which could be critical during spikes in activity
- Establish a baseline for fees and dust limits through setting relay policies (since Dogecoin Core v1.14.4)

### Do You Need to Run a Full Node? {#do-you-need-to-run-a-full-node}
Running a full node requires a computer with enough disk space to host a full copy of the blockchain (currently around 70GB) and an unmetered broadband connection to the internet (a full node can consume several TB of data per month in periods of intense network activity). 

Learning to run a node, and to maintain it, can be a fun and educational experience. But running a node in a way that is useful for the Dogecoin network for a prolonged period of time involves a bit of dedication and know-how.

If you are up to the task, please check our [Operating a Dogecoin Node Guide](/dogepedia/how-tos/operating-a-node/) to get you started.

There are no direct incentives in running a node. The reward consists in providing a service to the Dogecoin network and thus, hopefully, bringing value to it.

### Miners {#miners}
A **miner** is a specialized node in the Dogecoin network.

Miners have the task of creating new blocks in the blockchain by solving computationally-intensive cryptographic puzzles, in a process referred to as "mining". Miners confirm transactions by including them in a new block, secure the blockchain, and are rewarded for their work with so-called block rewards, consisting in 10,000 Dogecoin per mined block, and with the transaction fees associated with the transactions they have included into the block.

Mining Dogecoin requires specialized hardware and consumes significant amounts of electricity. Additionally, maintenance costs and experience required to maintain a profitable mining setup in working order are much more considerable than those needed for running a node.

A detailed overview of the role of miners in the Dogecoin network can be found [here](/dogepedia/articles/what-is-a-miner/)