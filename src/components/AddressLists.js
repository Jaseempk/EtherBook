import React, { useState } from 'react';

const AddressList = ({ contract }) => {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  
  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const addAddress = async () => {
    try {
      await contract.addAddress(address);
      setMessage('Address added successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to add address!');
    }
  };

  const removeAddress = async (address) => {
    try {
      await contract.removeAddress(address);
      setMessage('Address removed successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to remove address!');
    }
  };

  const getTopAddresses = async () => {
    try {
      const topAddresses = await contract.getTopAddresses();
      setMessage(`Top addresses: ${topAddresses}`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to get top addresses!');
    }
  };

  return (
    <div>
      <h2>Address List</h2>
      <div>
        <label htmlFor="address">Address:</label>
        <input id="address" type="text" value={address} onChange={handleInputChange} />
        <button onClick={addAddress}>Add Address</button>
      </div>
      <button onClick={getTopAddresses}>Get Top Addresses</button>
      <div>{message}</div>
    </div>
  );
};

export default AddressList;
