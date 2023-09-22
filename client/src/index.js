import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";



function getLibrary(provider) {
  return new Web3Provider(provider);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);