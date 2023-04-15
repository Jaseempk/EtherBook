import { ethers } from 'ethers';
const contractAbi=require('../../artifacts/contracts/EtherBook.sol/GasCalculatorAndAddressBook.json');

const getContract = async (contractAddress, signerOrProvider) => {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signerOrProvider);
    return contract;
  } catch (error) {
    console.error(`Error getting contract: ${error}`);
  }
};

export default getContract;
