//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract GasCalculatorAndAddressBook {
    mapping (address => uint256) private addressCount;
    address[] private addressList;
    constructor(){
        addressList.length==0;
    }

    function addAddress(address newAddress) public {
        addressCount[newAddress] += 1;
        addressList.push(newAddress);
    }

    function removeAddress(address targetAddress) public {
        require(addressCount[targetAddress] > 0, "Address not found in the address book");
        for (uint i = 0; i < addressList.length; i++) {
            if (addressList[i] == targetAddress) {
                addressList[i] = addressList[addressList.length - 1];
                addressList.pop();
                addressCount[targetAddress] = 0;
                break;
            }
        }
    }

    function getTopAddresses(uint256 count) public view returns (address[] memory) {
        require(count > 0, "Count should be greater than zero");
        uint256 length = addressList.length;
        uint256[] memory countList = new uint256[](length);
        for (uint256 i = 0; i < length; i++) {
            countList[i] = addressCount[addressList[i]];
        }
        uint256[] memory sortedIndices = _sortIndices(countList, length);
        address[] memory topAddresses = new address[](count);
        for (uint256 i = 0; i < count && i < length; i++) {
            topAddresses[i] = addressList[sortedIndices[length - i - 1]];
        }
        return topAddresses;
    }

    function _sortIndices(uint256[] memory a, uint256 n) private pure returns (uint256[] memory) {
        uint256[] memory indices = new uint256[](n);
        for (uint256 i = 0; i < n; i++) {
            indices[i] = i;
        }
        for (uint256 i = 0; i < n - 1; i++) {
            for (uint256 j = i + 1; j < n; j++) {
                if (a[indices[i]] < a[indices[j]]) {
                    uint256 temp = indices[i];
                    indices[i] = indices[j];
                    indices[j] = temp;
                }
            }
        }
        return indices;
    }

   function calculateGasFee(uint256 amount) public view returns (uint256) {
        // Calculate the amount of gas required for the transaction
        uint256 gasRequired = estimateGasRequired(amount);
        
        // Estimate the gas price
        uint256 gasPrice = estimateGasPrice();
        
        // Calculate the gas fee in Gwei
        uint256 gasFee = gasPrice * gasRequired;
        
        // Convert the gas fee to ether
        uint256 etherFee = gasFee / 10**9;
        
        return etherFee;
    }
    
    function estimateGasPrice() private view returns (uint256) {
        // Use the basefee as the gas price, which represents the minimum gas price
        // required to include a transaction in a block.
        uint256 baseFee = block.basefee;
        
        // If the basefee is 0, use a default value of 10 Gwei.
        if (baseFee == 0) {
            return 10 * 10**9;
        }
        
        // Otherwise, return the basefee.
        return baseFee;
    }
    
    function estimateGasRequired(uint256 amount) private view returns (uint256) {
        // Use the gaslimit as an estimate for the maximum amount of gas that can be used
        // for the transaction.
        uint256 gasLimit = block.gaslimit;
        
        // Use a gas usage multiplier of 1.5 to account for the possibility that the
        // transaction may require more gas than the gas limit.
        uint256 gasUsageMultiplier = 15 * 10**16; // 1.5 * 10**16
        
        // Estimate the amount of gas required for the transaction.
        uint256 gasRequired = amount * gasUsageMultiplier / gasLimit;
        
        // Add a buffer of 10% to the estimated gas required to account for
        // any unforeseen circumstances.
        uint256 gasBuffer = gasRequired / 10;
        
        return gasRequired + gasBuffer;
    }


    //getFunctions
    function getArrayLength()public view returns(uint256){
        return addressList.length;
    
    }
    function getAddressCount(address name)public view returns(uint256){
        return addressCount[name];
    }
}
