# Squirrel 🐿️

Completely decentralized, non front-runnable, payment links. Deployed on Polygon and Ethereum L2 Optimism.

This is an unstoppable app: both a decentralized frontend and backend. Check it out on IPFS:

[https://bafybeiar5s5dbur3rjdr6rrzh72762h763rpctzhpr7duxnughf47wrcl4.ipfs.nftstorage.link/](https://bafybeiar5s5dbur3rjdr6rrzh72762h763rpctzhpr7duxnughf47wrcl4.ipfs.nftstorage.link/)

Pull Requests open!

## Features


- Decentralized frontend
- Decentralized backend
- Front-running protection by means of a 2-phase withrawal process with a time-lock
- Denial of Service protection through a variable withdraw deposit fee
- multi chain deployment (Polygon, Eth L2 Optimism, Goerli)
- squirrels 🐿️

## Contracts

Polygon: [0xc5A2A997b6D370383b2fA1254939DbA2A73aBa8C](https://polygonscan.com/address/0xc5A2A997b6D370383b2fA1254939DbA2A73aBa8C)

Optimism: [0x8d1a17a3a4504aeb17515645ba8098f1d75237f7](https://optimistic.etherscan.io/address/0x8d1a17a3a4504aeb17515645ba8098f1d75237f7)

Moonbeam: [0x897F8EDdB345F0d16081615823F76055Ad60A00c](https://moonscan.io/address/0x897F8EDdB345F0d16081615823F76055Ad60A00c)

Goerli: [0x2e0092beE1fF5902278D64d4E760920C6Fd10974](https://goerli.etherscan.io/address/0x2e0092beE1fF5902278D64d4E760920C6Fd10974)

## FAQ

> Is it decentralised?
>
> > Yes, Squirrel is unstoppable, fully decentralised and its frontend is on IPFS.
> > Why does it matter?
> > It's your right to be a cyber squirrel!
> > Uses cases?
> > Wallet-less stashing for yourself, send crypto seamlessly, reward puzzle solving!
> > Can I build on this?
> > Yes, it's all unlicensed and the few bits of js and css we used are MIT or unlicensed. Let us know what thoughts you have!
> > Is it safe?
> > We don't know but we hope so. Try attacking it and let us know!

## Team

> Check out our other projects
>
> > hugo
> > konrad
> > special thanks to roshan & justin, and the entire ethberlin 22 crowd
> > we'd love hear from you and see what you build on this
> > unlicense

## Roadmap

zk-SNARKs based smart contract version. Higher gas cost to verify zk Proof, but requires only one transaction to withdraw. Totally feasible on cheap chains like Optimism and Polygon (would be unfeasible on Ethereum L1, >$30 gas cost).

## Licences etc
 
everything is mit or unlicense or otherwise public domain. special thanks to geoff and justin at ethberlin 22 for their help and support.

## The problem 🐿 Cybersquirrel.xyz solves
https://tella.video/cybersquirrelxyz-4m1q
It's annoying to send crypto to wallets. With Cybersquirrel, you don't even need to know the wallet address. Simply send a link through your preferred channel.

It's also hard to airdrop rewards to your audiences. You don't have a list of wallets of your telegrams, discords etc. With Cybersquirrel, simply send them a link. This works really well for rewards and puzzles, too. Just make the correct answer to the puzzle be the passphrase.

There are dozens of other use cases that are annoying to setup because of frontrunning or having to have dedicated frontends for micro applications. Squirrel solves this. Oh, and squirrel is unstoppable. The frontend is on IPFS, and the SC is deployment on mainnet. Even if we wanted to, we could not undeploy this anymore. It's now in space: https://bafybeih6dkiogw4slnqjbtwxsohrw5g7u4mmbegpa4sbulxzjo5uhrlpem.ipfs.nftstorage.link/

## Challenges we ran into
Frontrunning was the greatest challenge with this. Our use case is a textbook example for frontrunning. Alice (stasher) wants to send money to anyone who knows a specific phrase (fetcher). How can you do that on the blockchain, where you can't store private data? First, we thought about ZK proofs because they're super cool. But gas cost of proving a zk-SNARK is still around 500k gwei, so we transitioned to a much cheapert two-phase time-locked transaction mechanism, which is also super cool. This has a smaller attack surface and is a more mature method of doing things. The way it works is this: when someone wants to claim funds, they make a deposit to lock the smart contract for 15 minutes to only allow retrievals to their address. The deposit only gets refunded if the fetcher then submits the correct passphrase. The required deposit amount can be set by the stasher. The two-phase mechanic prevents denial of service attacks and the deposits make DoS attacks very costly.

The second challenge was making this an unstoppable app. This means setting up the smart contract completely non-custodially, and hosting the frontend as a single static file. This is pretty unusual, and we had to adapt the tooling to us.

The third challenge was coming up with a cool story and design for this unstoppable app. We went with a space squirrel theme because we like to watch how squirrels stash stuff. And squirrels should not be sanctioned, because stashing and fetching is a right ʕ⁎̯͡⁎ʔ༄


## Pictures

![squirrel-logo-plain](https://user-images.githubusercontent.com/10008415/190924853-3b1ff3fc-27cb-4b7a-8c45-5e80195a80d7.PNG)
![squirrel-fetchconfirmed](https://user-images.githubusercontent.com/10008415/190924854-351a567c-ef16-493e-8615-6088d179e06e.PNG)
![squirrel-landingpage](https://user-images.githubusercontent.com/10008415/190924855-dd99c655-7129-4c2f-b092-ec2e0154fe08.PNG)
![squirrel-tx-confirmed](https://user-images.githubusercontent.com/10008415/190924856-a161a808-a135-46d1-bf81-319b272ca94d.PNG)
![squirrel-logo](https://user-images.githubusercontent.com/10008415/190924858-423b2478-40dd-4de5-aa28-cee444b0f5d6.PNG)
