import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { reccoinABI } from './reccoin-abi';

// Create a context for the ERC20 token
const TokenContext = createContext();

// Custom hook to access the TokenContext
export const useToken = () => useContext(TokenContext);

// TokenContext provider component
export const TokenProvider = ({ children, contractAddress }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Initialize ethers provider and contract on component mount
  useEffect(() => {
    const initializeContract = async () => {
      try {
        // Connect to Ethereum provider
        const ethereumProvider = window.ethereum;
        await ethereumProvider.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(ethereumProvider);
        setProvider(provider);

        // Create contract instance
        const signer = provider.getSigner();
        // const abi = [
        //   // ABI data here
        // ];
        const contract = new ethers.Contract(contractAddress, reccoinABI, signer);
        setContract(contract);

        // Fetch token information and account balance
        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const accountBalance = await contract.balanceOf(yourAccountAddress);

        setName(name);
        setSymbol(symbol);
        setDecimals(decimals);
        setTotalSupply(totalSupply);
        setAccountBalance(accountBalance);
        setLoading(false);
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    };

    initializeContract();
  }, []);

  // Transfer tokens to a recipient address
  const transferTokens = async (recipient, amount) => {
    try {
      const transaction = await contract.transfer(recipient, amount);
      await transaction.wait();
      // Perform any additional actions or update state as needed
    } catch (error) {
      console.error('Error transferring tokens:', error);
    }
  };

  return (
    <TokenContext.Provider
      value={{
        name,
        symbol,
        decimals,
        totalSupply,
        accountBalance,
        loading,
        transferTokens,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
