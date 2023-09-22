import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 11155111, 80001],
});

export default function Navbar() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');
  const { activate, deactivate, account } = useWeb3React();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (account) {
      console.log('Account', account);
      setAddress(account);
      navigate('/select');
      // Automatically redirect to /select when the wallet is account
    }
  }, [account]);

  const connectOrDisconnectWallet = async () => {
    console.log('Connecting or disconnecting wallet...');
    try {
      if (connected) {
        // If the account exists, it means the wallet is account
        await deactivate();
        console.log('Wallet disaccount');
setConnected(false);
      } else {
        await activate(injectedConnector);
        console.log('Wallet account');
        console.log('Account', account);
setConnected(true);
      }
    } catch (error) {
      console.error('Failed to connect or disconnect', error);
    }
  };

const handleMouseEnter = () => {
  if (connected) {
    // Show the overlay box when hovering over the "Disconnect Wallet" button
    const overlayBox = document.getElementById('wallet-overlay-box');
    if (overlayBox) {
      overlayBox.style.display = 'block';
    }
  }
};

const handleMouseLeave = () => {
  // Hide the overlay box when moving the mouse out
  const overlayBox = document.getElementById('wallet-overlay-box');
  if (overlayBox) {
    overlayBox.style.display = 'none';
  }
};

  return (
    <div className="bg-black flex w-full h-[70px] sticky top-0 z-50">
      <img src="/3.png" alt="" className="w-[100px] rounded-b-2xl" />
      <nav className="w-full flex justify-end md:ml-5">
        <Link
          to="/"
          className="rounded-lg mt-2 self-center md:p-2 hover:bg-slate-900 text-white"
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          className="rounded-lg mt-2 self-center md:p-2 hover:bg-slate-900 text-white"
        >
          About
        </Link>
        <button
          onClick={connectOrDisconnectWallet}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`border-2 border-green-400 bg-[#adff45] hover:bg-green-500 px-2 rounded-3xl m-2 hover:text-white ${
            account ? 'bg-red-600 hover:bg-red-500' : ''
          }`}
        >
          {account ? 'Disconnect Wallet' : 'Connect Wallet'}
          {account && (
            <div
              id="wallet-overlay-box"
              className="absolute bg-white border border-gray-300 p-2 rounded-md shadow-md text-black"
              style={{ display: 'none', top: '100%', left: '50%', transform: 'translateX(-50%)' }}
            >
              {address}
            </div>
          )}
        </button>
      </nav>
    </div>
  );
}
