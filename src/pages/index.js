import React, { useState, useEffect } from 'react';
import { getContract } from '../contracts/getContract';
import { ethers } from 'ethers';

const contractAddress = require('../contracts/contractAddresses.json').GasCalculatorAndAddressBook;
const contractABI = require('../contracts/contractAbi');

if (typeof window !== 'undefined' && window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
   signer = provider.getSigner();
} else {
  // Handle the case where the window object or Ethereum provider is not available
  console.error('Ethereum provider not found');
}

function App() {
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [etherValue, setEtherValue] = useState('');
  const [gasPrice, setGasPrice] = useState(0);
  const [gasLimit, setGasLimit] = useState(0);
  const [gasCost, setGasCost] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const contract = getContract(contractABI, contractAddress, signer);
        const addresses = await contract.getAddressList();
        setAddressList(addresses);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function handleAddAddress() {
    try {
      const contract = getContract(contractABI, contractAddress, signer);
      await contract.addAddress(selectedAddress);
      setAddressList([...addressList, selectedAddress]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteAddress(address) {
    try {
      const contract = getContract(contractABI, contractAddress, signer);
      await contract.removeAddress(address);
      setAddressList(addressList.filter((a) => a !== address));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEstimateGas() {
    try {
      const contract = getContract(contractABI, contractAddress, signer);
      const gas = await contract.estimateGas(selectedAddress, ethers.utils.parseEther(etherValue));
      const gasPrice = await provider.getGasPrice();
      setGasPrice(ethers.utils.formatEther(gasPrice));
      setGasLimit(gas.toNumber());
      setGasCost(ethers.utils.formatEther(gas.mul(gasPrice)));
    } catch (error) {
      console.error(error);
    }
  }

  function handleAddressChange(event) {
    setSelectedAddress(event.target.value);
  }

  function handleEtherChange(event) {
    setEtherValue(event.target.value);
  }

  return (
    <><div>
      <h1>Gas Calculator and Address Book</h1>
      <h2>Address Book</h2>
      <ul>
        {addressList.map((address) => (
          <li key={address}>
            {address}{' '}
            <button onClick={() => handleDeleteAddress(address)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={selectedAddress} onChange={handleAddressChange} />
        <button onClick={handleAddAddress}>Add Address</button>
      </div>
      <h2>Gas Calculator</h2>
      <div>
        <label>Recipient Address:</label>
        <input type="text" value={selectedAddress} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Ether Value:</label>
        <input type="text" value={etherValue} onChange={handleEtherChange} />
      </div>
      <button onClick={handleEstimateGas}>Estimate Gas</button>
      <label>Gas Price:</label>
      <span>{gasPrice} ETH</span>
    </div><div>
        <label>Gas Limit:</label>
        <span>{gasLimit}</span>
      </div><div>
        <label>Gas Cost:</label>
        <span>{gasCost} ETH</span>
      </div></>
    
    
  )
}

export default App;