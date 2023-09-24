# StableHR - FE 

## Project Snapshots 

<img width="2031" alt="Screenshot 2023-09-24 at 8 26 46 AM" src="https://github.com/erwinqxy/stablehr-fe/assets/72030222/fc1bee86-c5b9-4cde-95ba-12b6fe6f6bfd">

<img width="2026" alt="Screenshot 2023-09-24 at 8 27 14 AM" src="https://github.com/erwinqxy/stablehr-fe/assets/72030222/3aa0683f-7deb-4b23-9ced-f10fba4ff029">

<img width="2030" alt="Screenshot 2023-09-24 at 8 27 21 AM" src="https://github.com/erwinqxy/stablehr-fe/assets/72030222/8251d06b-d2ea-4c54-aeb5-98cf9e8d9f92">

<img width="2018" alt="Screenshot 2023-09-24 at 8 00 00 AM" src="https://github.com/erwinqxy/stablehr-fe/assets/72030222/ce41cfd3-52ca-4071-8c5a-6ea3f77a86f2">

<img width="2026" alt="Screenshot 2023-09-24 at 8 00 08 AM" src="https://github.com/erwinqxy/stablehr-fe/assets/72030222/316548cd-111d-4d70-b15c-236697442320">

<img width="2023" alt="Screenshot 2023-09-24 at 8 00 15 AM" src="https://github.com/erwinqxy/stablehr-fe/assets/72030222/76d992ed-4b69-4595-9ec4-d64a05783c1e">


StableHR is a cross-border automated payment system that allows efficient, low-cost, multi-currency transfers. 

## Table of Contents 
[Description](#description)
[How it works](#Howitworks)
[Features](#features) 
[Usage](#usage) 

## Description 
Current Payment systems have inefficient multi-currency transfers due to unaligned real-time gross settlement hours in global banking and high costs in fees and poor exchange rates StableHR is a cross-border automated payroll system that utilizes blockchain technology and DeFi for organizations. 

## Project Description
Current Payment systems have inefficient multi-currency transfers due to unaligned real-time gross settlement hours in global banking, high costs in fees, and poor exchange rates. Additionally, StableHr plans to help empower and bring currencies closer to people in currencies with weak currencies. This will allow them to be financially sustainable and not be entrapped by their domestic broken financial system. Our project aims to solve this problem by implementing, StableHR, a cross-border automated payment system that allows efficient, low-cost, multi-currency transfers. We plan to target Companies & Organizations requiring global payments to remote workers, freelancers, and outsourced vendors.

How it works: The company uses WalletConnect's Web3Modal v3 to connect the wallets of the employees. The smart contract encompasses using Unlimit to onramp FIAT to USDC and then using 1Inch’s Swap API for the most efficient paths for a token swap to stablecoin. The stablecoin is transferred to the employee’s wallet and can offramp using Unlimit to FIAT. The employee will be notified of the payment through XMTP messages.

## Features:

1) Multi-currency transfers allow remote-first companies to pay employees around the world with competitive exchange rates. 
2) Automated payroll system 
3) Instant and secure transactions
4) Lowest cost and eliminates high banking fees
5) Remove price volatility using stablecoins
6) Dashboard data analytics for company HR finances
7) Automated messages and email notifications sent to employees 


## How it's Made
Our DeFi application interacts with the Polygon test net Mumbai chain. We aim to target the greater public good by incorporating features like account abstraction and gasless transactions. We also plan to make banking more accessible and cheaper to everyone through the power of blockchain and digitalization. For the first time, we ventured into forking the main chain and successfully integrated our project with 1Inch's Quote and Swap API. The fork was prompted by the lack of support for testnet on 1Inch.

Next, to facilitate wallet connection functionality, we implemented WalletConnect’s Web3Modal V3, allowing users to seamlessly connect their diverse blockchain wallets.

Moreover, our aim is to make the application accessible to everyone, including those who are not familiar with the blockchain space. To achieve this, we introduced Web3Auth, enabling users to log in using their web2.0 accounts, with an associated address generated for them.

To onboard users into the world of cryptocurrency, we harnessed the power of Unlimit's Onramp SDK and built upon the account abstraction starter kit. The process involves two main steps: onboarding through Unlimit and subsequent swapping/exchanging via 1Inch API. Our goal is to attract new users by offering competitive exchange rates compared to traditional payment methods, while also leveraging blockchain technology for fast, instant, and transparent transactions.

Additionally, we employ Filecoin's Web3.storage to store Nouns artwork, which is then randomly fetched and rendered for users. Our vision is to become the premier DeFi platform for working adults, irrespective of economic conditions, addressing issues related to accessing funds.

Lastly, we integrated XMTP as a discreet chat feature, allowing users to interact with their fellow Web3 enthusiasts. Our focus is on making this chat as lightweight and user-friendly as possible.

As a team of five undergraduates from the National University of Singapore, we are aspiring entrepreneurs who have relocated to Toronto to gain experience in various startups, spanning blockchain, AI, tech consulting, and the robotics industry. Our long-term plan is to establish a company, and we believe this project serves as a significant stepping stone to making a meaningful and positive impact on the world.


### TLDR: Tech Stack

- WalletConnect and Web3Auth for wallet integration and account management
- 1Inch for a comprehensive crypto quote and swap APIs
- Unlimit’s Onramp SDK for users to convert fiat to crypto
- Filecoin’s Web3Storage to store website assets
- XMTP for integrated messaging protocol
- Nouns artworks to beautify and add personality to the project
- Polygon Mumbai testnet for application transactions


## How it works
The company uses WalletConnect's Web3Modal v3 to connect the wallets of the employees. Each employee has a unique Polygon ID to maintain a Self-Sovereign Identity and preserve their privacy. The smart contract encompasses using Unlimit to onramp FIAT to USDC and then using 1Inch’s Swap API for the most efficient paths for a token swap to stablecoin. The stablecoin is transferred to the employee’s wallet and can offramp using Unlimit to FIAT.

## Additional Repo 
Backend Repo: https://github.com/eugenetayyj/stable-be 
