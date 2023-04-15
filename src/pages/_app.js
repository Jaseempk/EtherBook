import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getContract } from '../contracts/getContract';
import contractAddresses from '../contracts/contractAddresses.json';
import { parseEther } from '@ethersproject/units';
import { getGasPriceFromOracle, estimateGasRequired } from '../utils/gasCalculator';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mainContract, setMainContract] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [mostFrequentAddresses, setMostFrequentAddresses] = useState([]);
  const [gasPrice, setGasPrice] = useState(null);
  
  // Fetch and set contract instance
  useEffect(() => {
    const fetchMainContractInstance = async () => {
      try {
        const contractInstance = await getContract(contractAddresses.GasCalculatorAndAddressBook, web3Provider.getSigner());
        setMainContract(contractInstance);
      } catch (error) {
        console.error('Error fetching main contract instance: ', error);
      }
    }

    const web3Provider = window.ethereum;
    if (web3Provider) {
      fetchMainContractInstance();
    } else {
      console.error('Web3 provider not found. Please install MetaMask');
    }
  }, []);

  //Event Listener
  /**
   * 
  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };
  
    router.events.on('routeChangeStart', handleRouteChange);
  
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [onClose, router]);
  */
  

  // Fetch and set addressList
  useEffect(() => {
    const fetchAddressList = async () => {
      try {
        const addresses = await mainContract.getAddresses();
        setAddressList(addresses);
      } catch (error) {
        console.error('Error fetching address list: ', error);
      }
    }

    if (mainContract) {
      fetchAddressList();
    }
  }, [mainContract]);

  // Calculate gas price
  useEffect(() => {
    const calculateGasPrice = async () => {
      try {
        const gasPriceFromOracle = await getGasPriceFromOracle();
        setGasPrice(gasPriceFromOracle);
      } catch (error) {
        console.error('Error calculating gas price: ', error);
      }
    }
    
    calculateGasPrice();
  }, []);

  
  // Fetch and set most frequent addresses
  useEffect(() => {
    const calculateFrequentAddresses = async () => {
      try {
        const gasCalculatorAndAddressBookContract=await ethers.getContract("GasCalculatorAndAddressBook");
        const gasPriceInWei = parseEther(gasPrice.toString());
        const addresses = await gasCalculatorAndAddressBookContract.getTopAddresses(gasPriceInWei);
        setMostFrequentAddresses(addresses);
      } catch (error) {
        console.error('Error fetching most frequent addresses: ', error);
      }
    }

    if (gasPrice && gasCalculatorAndAddressBookContract) {
      calculateFrequentAddresses();
    }
  }, []);

  // Add an address
  const addAddress = async (address) => {
    try {
      await gasCalculatorAndAddressBookContract.addAddress(address);
      setAddressList([...addressList, address]);
    } catch (error) {
      console.error('entho error')
    }
  }
  addAddress();
  const removeAddress =async(address)=>{
    if (!addressList) {
      console.error('AddressList contract not found');
      return;
    }
  
    try {
      const tx = await addressList.removeAddress(address);
      const receipt = await tx.wait();
      console.log('Address removed: ', receipt);
    } catch (error) {
      console.error('Error removing address: ', error);
    }
  }

  removeAddress();
  



return (
  <ChakraProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} addressList={addressList} mostFrequentAddresses={mostFrequentAddresses} gasPrice={gasPrice} addAddress={addAddress} removeAddress={removeAddress} />
    </Web3ReactProvider>
  </ChakraProvider>
);
}

export default MyApp;

