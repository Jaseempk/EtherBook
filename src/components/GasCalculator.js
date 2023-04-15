import React, { useState } from 'react';

const GasCalculator = ({ contract }) => {
  const [gasFee, setGasFee] = useState(0);
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');
  
  const handleFromAddressChange = (event) => {
    setFromAddress(event.target.value);
  };

  const handleToAddressChange = (event) => {
    setToAddress(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const calculateGasFee = async () => {
    try {
      const gasRequired = await contract.estimateGasRequired(fromAddress, toAddress, amount);
      const gasPrice = await contract.estimateGasPrice();
      const fee = contract.calculateGasFee(gasRequired, gasPrice);
      setGasFee(fee);
      setMessage(`Gas fee: ${fee}`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to calculate gas fee!');
    }
  };

  return (
    <div>
      <h2>Gas Calculator</h2>
      <div>
        <label htmlFor="fromAddress">From Address:</label>
        <input id="fromAddress" type="text" value={fromAddress} onChange={handleFromAddressChange} />
      </div>
      <div>
        <label htmlFor="toAddress">To Address:</label>
        <input id="toAddress" type="text" value={toAddress} onChange={handleToAddressChange} />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input id="amount" type="number" value={amount} onChange={handleAmountChange} />
      </div>
      </div>
   )
};
export default GasCalculator;
