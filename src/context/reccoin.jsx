/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { reccoinABI } from './reccoin-abi';
import PropTypes from 'prop-types';

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
        if (window.ethereum) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(ethereumProvider);

          const signer = ethereumProvider.getSigner();
          const contractAddress = '0x2A4230ED132ed5cdf340BDf468103d51cf888e18'; // Replace with the actual contract address
          const contract = new ethers.Contract(contractAddress, reccoinABI, signer);
          setContract(contract);

          const name = await contract.name();
          const symbol = await contract.symbol();
          const decimals = await contract.decimals();
          const totalSupply = await contract.totalSupply();
          const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048'; // Replace with your actual Ethereum address
          const accountBalance = await contract.balanceOf(yourAccountAddress);

          setName(name);
          setSymbol(symbol);
          setDecimals(decimals);
          setTotalSupply(totalSupply);
          setAccountBalance(accountBalance);
          setLoading(false);
        } else {
          throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
        }
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    };

    initializeContract();
  }, []);

  const transferTokens = async (recipient, amount) => {
    try {
      if (contract) {
        const transaction = await contract.transfer(recipient, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
      } else {
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      console.error('Error transferring tokens:', error);
    }
  };

    // Add the mintTokens and burnTokens functions
  const mintTokens = async (account, amount) => {
    try {
      if (contract) {
        const transaction = await contract.mint(account, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
      } else {
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      console.error('Error minting tokens:', error);
    }
  };

  const burnTokens = async (amount) => {
    try {
      if (contract) {
        const transaction = await contract.burn(amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
      } else {
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      console.error('Error burning tokens:', error);
    }
  };

  const approveTokens = async (spender, amount) => {
    try {
      if (contract) {
        const transaction = await contract.approve(spender, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
      } else {
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      console.error('Error approving tokens:', error);
    }
  };

  const transferFrom = async (sender, recipient, amount) => {
    try {
      if (contract) {
        const transaction = await contract.transferFrom(sender, recipient, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
      } else {
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      console.error('Error transferring tokens from:', error);
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
        provider, // Include the provider in the context value
        transferTokens,
        mintTokens,
        burnTokens,
        approveTokens,
        transferFrom,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};