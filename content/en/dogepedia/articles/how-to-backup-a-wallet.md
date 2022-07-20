+++
title = "How do I backup a Dogecoin wallet?"
date = "2022-07-20"
type = "article"

[ author ]
  name = "Dogecoin"
+++

A wallet is just a collection of *private keys* and *public keys*. 

Each one of the wallet’s private keys is a randomised 256-bit number unique to your wallet, and it is what you need to be able to access and spend your coins. Your public address - the address which other Dogecoin wallets can use to send Dogecoin to your wallet - is a hashed version of the public key associated with the private key.

Most Dogecoin holders use some kind of [*wallet application*](/dogepedia/articles/how-do-i-get-a-wallet), like Dogecoin Core, or devices like [*hardware wallets*](/dogepedia/articles/dogecoin-hardware-wallets/) to manage their wallets. Each of these might involve a different process to generate a backup. 

### Wallet Backups with Dogecoin Core

Dogecoin Core, Dogecoin's "reference implementation" and the software commonly used to run a Dogecoin node, is often used as a wallet application. In order to create a backup with Dogecoin Core, follow these steps:

- (Optional, but recommended) First, encrypt your wallet. To do so, go to Settings -> Encrypt wallet. You will be asked to enter a password. It is crucial that you store this password somewhere safe and that you never lose it. Without it, you would be unable to access the funds in your encrypted wallet. 

   On the other hand, this password adds an extra layer of security to your backup. Without it, even if an attacker gains access to your wallet file, they will still be unable to spend your Dogecoin, unless they succeed in brute forcing or guessing the encryption password.
- Go to File -> Backup Wallet. This will generate a wallet.dat file, which stores a list of all the key pairs you have used. Restoring this file will give you access to your Dogecoin. Store it somewhere safe, in a device not connected to the internet.

Whenever you generate a new public address with Dogecoin Core or you spend coins, it is recommended that you create a new backup, as the old wallet.dat files might not contain a copy of the private key associated with the new public address or with possible change addresses - thus, upon restoring the wallet, you might be missing part of your Dogecoin.

*Remember: whoever gains access to the wallet.dat file will be able to spend your Dogecoin*.

#### Saving Private Keys and Public Keys in a Text File
The wallet.dat file is not a plain-text file. It is a BDB (Berkeley Database). For this reason, it might be a good idea to create a plain text backup of your wallet, containing a list of all private and public keys currently in use by Dogecoin Core. In order to do so:

- Go to Help -> Debug Window
- Select the Console tab
- If your wallet is encrypted, temporarily decrypt it using the *walletpassphrase* command, specifying the amount of seconds after which the decrypted copy will be deleted.
  ```console
    walletpassphrase "yourpasswordhere" 120
    ```
    The console should return "null".
- Dump your wallet in a file using the *dumpwallet* command and specifying the path to the file.

  For **Dogecoin Core versions older than 1.14.6**, the dumpwallet command allows you to specify a full path to the wallet file, like this:
  ```console
    dumpwallet "/Users/Cheemz/BackupDirectory/mywallet.txt"
    ```
    The console should return "null".

  For **Dogecoin Core versions newer than 1.14.6**, the dumpwallet command allows you to specify only the name of the wallet file. The file will be generated in the directory specified with the -backupdir option. When -backupdir is not specified, Dogecoin Core will store the backup file in a directory called *backups* inside the default [*data directory*](/dogepedia/how-tos/operating-a-node/#data-directory):
  ```console
    dumpwallet "mywallet.txt"
    ```
    The console should return "null".

- Optional: encrypt the wallet file. You can use your operating system's disk encryption options or a zip program allowing you to password-protect a file and encrypt it with a secure algorithm (AES256, for example). Make sure the password used for the encryption is impossible to forget or stored properly as well.
- Copy the backup in multiple safe locations, NOT connected to the internet. 

*Remember: whoever gains access to the plain-text wallet file will be able to spend your Dogecoin*.

### Wallet Backups with Wallets Using Seed Phrases

Many modern wallets rely on the use of a seed phrase. A seed phrases — also called “mnemonic phrase” or “mnemonic seed” — *usually* consists of a sequence of 12 or 24 words. Every seed phrase is unique and identifies a distinct wallet where a certain amount of Dogecoin might be stored. A seed phrase acts as a sort of master key which the wallet software uses to calculate all the private keys (and public addresses) needed to access and spend the Doge you are holding.

It is crucial that you backup your seed phrase and that you store it in multiple secure locations, where nobody but you can access it. Anyone who knows your seed phrase will have full access to your Dogecoin. This is why you should never, under any circumstance, share your seed phrase or private key with anyone that you do not trust. 

**Remember**: 
- **It is always more secure to ensure that your seed phrase or private keys are stored on a device that is NOT connected to the internet.** [*Hardware wallets*](/dogepedia/articles/dogecoin-hardware-wallets/) offer a way to store your coins safely while also being able to access them easily, if needed.
- Your wallet’s private keys (or seed phrase) grant the holder access to your Dogecoin – no matter what wallet you use.
- Dogecoin transactions are permanent, so there would be no way to recover any Dogecoin that an attacker has stolen from your wallet.
