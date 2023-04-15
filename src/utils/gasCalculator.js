import axios from 'axios';
import { BigNumber } from '@ethersproject/bignumber';

const GAS_PRICE_API_URL = 'https://www.gasnow.org/api/v3/gas/price?utm_source=:your_app_name';

export const getGasPriceFromOracle = async () => {
  try {
    const response = await axios.get(GAS_PRICE_API_URL);
    const { rapid, fast, standard } = response.data.data;
    // Use the standard gas price (in Gwei) to avoid overpaying
    return BigNumber.from(standard).mul('1000000000');
  } catch (error) {
    console.error('Error getting gas price from oracle: ', error);
    throw error;
  }
};

export const calculateGasRequired = async (contract, methodName, args) => {
  try {
    const gasEstimate = await contract.estimateGas[methodName](...args);
    // Add some buffer to the gas estimate to avoid running out of gas
    return gasEstimate.mul('120').div('100');
  } catch (error) {
    console.error('Error calculating gas required: ', error);
    throw error;
  }
};
