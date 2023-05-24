import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { reccoinABI } from './reccoin-abi';

const TokenContext = createContext();

export const useToken = () => useContext(TokenContext);

export const TokenProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initializeContract = async () => {
      try {
        const ethereumProvider = window.ethereum;
        await ethereumProvider.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(ethereumProvider);
        setProvider(provider);

        const signer = provider.getSigner();
        const contractAddress = 'x1227993jnbhdjjkskkskk'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, reccoinABI, signer);
        setContract(contract);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const yourAccountAddress = 'x63792002jnsnjiiiaubuda'; // Replace with your actual Ethereum address
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
