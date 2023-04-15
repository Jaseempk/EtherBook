export const formatAddress = (address) => {
    if (!address) {
      return '';
    }
  
    const trimmed = address.slice(0, 6) + '...' + address.slice(-4);
    return trimmed.toLowerCase();
  };
  