import { ethers } from 'ethers';



//const rpcEndpoint = 'https://rpc.sepolia.org';

//const chainId= 11155111;
const provider = new ethers.BrowserProvider('http://127.0.0.1:8545');

export default provider;