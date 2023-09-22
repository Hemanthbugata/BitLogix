import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
// import { useWeb3Context } from ''
const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 11155111, 80001],
});
const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export default function Navbar() {
  // const context = useWeb3Context()
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const { activate, active, account } = useWeb3React();
  // console.log(context.account);
  useEffect(() => {
    if (account) {
      console.log("Account", account);
      setAddress(account);
    }
  }, [account]);

  const connectWallet = async () => {
    console.log("Connecing to wallet...");
    try {
      activate(injectedConnector);
      console.log("wallet connected");
      console.log("Account", account);
      setConnected(true);
    } catch (error) {
      console.error("Failed to connect", error);
    }
  };

  return (
    <div className="bg-black flex items-center w-full h-[70px] sticky top-0 z-50 px-3">
      <Link to="/">
        <img src="/3.png" alt="" className="w-[100px] rounded-b-2xl" />
      </Link>
      <nav className="w-full flex justify-end md:ml-5">
        <Link
          to="/"
          className="rounded-lg mt-2 self-center md:p-2 hover:bg-slate-900 text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="rounded-lg mt-2 self-center md:p-2 hover:bg-slate-900 text-white"
        >
          About
        </Link>
        <button
          className={`font-bold border-2 bg-green-400 border-none hover:bg-green-500 px-3 py-1 rounded-full  ${
            account ? "bg-gray-400 hover:bg-gray-500" : ""
          }`}
          onClick={connectWallet}
        >
          {account ? "Disconnect Wallet" : "Connect Wallet"}
        </button>
      </nav>
    </div>
  );
}