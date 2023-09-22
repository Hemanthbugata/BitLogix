import './App.css';
import  React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Make sure to import Switch
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
import { Box, Select, Typography } from '@mui/material';
import { Button } from '@mui/base';
import Home from './components/Home';
import AboutUs from './AboutUs';
import Recipient from './components/Recipient';
// import SelectRole from './components/SelectRole';
import Delivery from './components/Delivery';
import Enterprise from './components/Enterprise';
import ProductDetails from './components/ProductDetails';
import AddDelivery from './components/AddDelivery';
import SelectRole from "./components/SelectRole";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './components/Navbar';

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 11155111, 80001],
});


function App() {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/select" element={<SelectRole/>}></Route>
        <Route path= "/aboutus" element={<AboutUs />} ></Route>
        
        <Route path="/recipient" element={<Recipient />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/addproduct" element={<ProductDetails />} />
        <Route path="/adddelivery" element={<AddDelivery />} />
      </Routes>
    </Router>
  );
}

export default App;

