<div align="center">
  <h1>BitLogix</h1>
  <p>
    <strong>Blockchain-Powered Supply Chain Magic</strong>
  </p>

</div>

Welcome to the BitLogix Supply Chain Management DApp, a pioneering solution poised to redefine how enterprises manage their logistics. Built on the [BitTorrent-chain](https://testscan.bt.io), BitLogix empowers businesses with real-time transparency, secure transactions, and streamlined operations.

As businesses navigate the complex world of logistics, BitLogix emerges as a beacon of technological advancement. Our DApp is designed to streamline supply chain operations, reducing friction and enhancing trust between stakeholders. With our DApp, businesses can navigate the complexities of logistics with confidence, knowing that they have a trusted partner.


# Features

- **Effortless Registration**: Simplified onboarding for enterprises and recipients.
- **Transparent Tracking**: Track products in real-time with immutable blockchain records.
- **Automated Payments**: Smart contracts for instant, error-free payments upon receipt confirmation.
- **Token Rewards**: Token reward system allows users to claim tokens as a one-time reward, promoting active participation and collaboration within the supply chain ecosystem. 
- **Quality Control:** Enterprises can control product quality and ensure compliance.
- **NFT Rewards:** Enterprises can issue NFTs as rewards to the Person-in-Charge.
- **Inventory Management with Automatic Ordering:** Any recipient can efficiently manage product inventory on a periodic basis. This capability empowers recipients to maintain optimal stock levels.
- **Robust Security**: Built with a decentralized architecture for data integrity.
 
# Architecture
![BitLogix](https://github.com/suraj719/BitLogix/assets/102855092/05a7d677-bfdb-48f4-bd23-2c62fd7546ed)





## Components

* **Frontend:** The frontend of our Dapp offers an intuitive interface for users to manage their supply chains efficiently, with seamless integration of Metamask for secure transactions.
* **BitLogix Smart Contract:** The BitLogix core smart contract manages registration, product creation, payment automation, and token rewards.
* **BitLogixNFT Smart Contract:** A specialized smart contract that allows enterprises to mint and transfer NFTs as reward to recipient associated with products for maintaining quality of product leads to enhancing quality control.
* **Metamask:** Metamask, a popular Ethereum wallet extension, is seamlessly integrated to facilitate secure transactions, account management, and interactions with the BitTorrent chain.
* **Backend:** BitLogix's backend infrastructure supports data management and decentralized file storage.
* **MongoDB:** A scalable and flexible NoSQL database that stores essential data related to user accounts, product details, and transaction history.
* **IPFS:** A distributed file system for storing and retrieving large files and IPFS URIs associated with NFTs. IPFS ensures data availability and reliability while reducing centralized data dependencies.

# Local installation

1. Clone the repository

First, you need to clone the repository

```
git clone https://github.com/suraj719/BitLogix
```

2. Install Dependencies

Install the project's dependencies:

```
npm install
```

3. Start the Project

Once all the dependencies are installed, you can start the project:

```
npm start
```

The project should now be running on `http://localhost:3000`

# Usage

* Enterprises and recipients can easily register to access BitLogix.
* Metamask integration ensures secure transactions and interactions with the BitTorrent chain.
* Enterprises create products, recipients confirm receipt for efficient tracking.
* Active participants earn tokens as one-time rewards within the ecosystem.
* Enterprises ensure product quality and compliance by contacting the Person-in-Charge.
* Enterprises issue NFTs as rewards to the Person-in-Charge for quality control and communication enhancement.
* Recipients can efficiently manage inventory on a periodic basis, ensuring optimal stock levels.

# Smart contract Documentation

BitLogix relies on two essential smart contracts deployed on the BitTorrent chain:

* **BitLogix Smart Contract**
* **BitLogixNFT Smart Contract** 

## BitLogix Smart Contract

The BitLogix Smart Contract serves as the backbone of our supply chain management DApp. It manages user registration, product creation, payment automation, and token rewards.

**Functions**

```
registerEntity(string memory name, string memory businessDetails, string memory govAuthorizedID) external
```
* Allows enterprises to register within the BitLogix ecosystem.

```
registerRecipient(string memory name, string memory placeOfBusiness, string memory govAuthorizedID) external
```
* Allows recipients to register within the BitLogix ecosystem.

```
claimTokens() external
```
* Enables registered entities and recipients to claim tokens as a one-time reward.

```
deposit() external payable
```

* Lets users deposit BTT tokens into the contract.

```
createProduct(string memory name, uint256 Price, uint256 quantity, string memory pickupPlace, string memory destinationPlace, address recipientAddress) external
```
* Allows registered enterprises to create products for delivery, automating payment and product tracking.

```
confirmReceipt(address entityAddress, uint256 productIndex) external
```
* Allows recipients to confirm product receipt and release payment to the enterprise.

```
getContractBalance() external view returns (uint256)
```
* Allows users to check the token balance of the contract.

```
withdrawPlatformFees() external
```
* Lets the contract owner withdraw platform fees.

## BitLogixNFT Smart Contract

The BitLogixNFT Smart Contract enhances quality control within BitLogix. It allows enterprises to mint and transfer NFTs associated with products.

**Inheritance**

**ERC721URIStorage:** Inherits from OpenZeppelin's ERC721URIStorage, providing standard NFT functionality with URI storage.

**Ownable:** Inherits from OpenZeppelin's Ownable, allowing for ownership control of the contract.

**Functions**

```
constructor()
```

* Initializes the BitLogixNFT contract with the name "BitLogixNFT" and the symbol "BLNFT" for the NFTs.

```
mintNFT(address recipient, string memory tokenURI)
```

* Allows any address to mint new NFTs and assign them to specific recipients.

# Troubleshooting

* **Metamask Connectivity Issues**

If you're experiencing difficulties connecting Metamask to the BitTorrent network, start by ensuring that your internet connection is stable. Additionally, check whether you are on the correct network which is BitTorrent Chain Donau. Sometimes, simply switching networks can resolve connectivity problems.

* **Registration Problems**

If you encounter obstacles during the registration process, it's important to verify that you meet the registration criteria and provide accurate information. Make sure your Metamask account is unlocked to complete the registration successfully. If issues persist, consider refreshing the registration page and attempting the process again.

* **Token Reward Challenges**

If you are unable to claim tokens or face issues with token rewards, start by confirming your registration status. Token rewards are typically a one-time claim, so ensure that you haven't already claimed them. To confirm receipt, check your wallet balance to see if the tokens have been credited.

* **Product Management Issues**

For problems related to creating products, confirming receipt, or tracking products, it's essential to check your registration status. Only registered entities and recipients can access these features. Ensure that you have correctly entered product details and review your Metamask transactions for any errors or pending transactions.

* **Quality Control and NFTs**

If you are encountering problems with quality control, NFT issuance, or communication with the Person-in-Charge, first, make use of the provided contact information to reach out directly. Ensure that you possess the necessary permissions to control product quality and issue NFTs within the BitLogix ecosystem.

# Contribution guideline

We welcome contributions from anyone who would like to help improve our dapp.

To contribute, please follow the following steps:

1. Fork the repository to your own GitHub account: https://github.com/Hemanthbugata/BitLogix.git
2. Create a new branch from the main branch for your changes.
3. Make your changes and commit them with clear commit messages.
4. Push your changes to your forked repository.
5. Open a pull request to merge your changes into the main branch.

# Team Members

* Nidhi Sharma
* Kushal Sapra
* Hemanth Bugata
* Suraj Thammi
* Hardik Malani

# Acknowledgement 

We would like to acknowledge the following individuals and resources for their contributions and support:

* **BitTorrent Chain:** BitLogix harnesses the power and innovation of BitTorrent Chain to facilitate secure and efficient transactions, ensuring the integrity of our supply chain management system.

* **IPFS (InterPlanetary File System):** Our decentralized file storage solution is made possible by IPFS, which enables reliable and distributed storage of large files and metadata associated with NFTs.
"# BitLogix" 
"# BitLogix" 
