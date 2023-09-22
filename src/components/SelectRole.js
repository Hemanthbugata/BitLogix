import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Enterprise from "./Enterprise";
import Recipient from "./Recipient";
import Navbar from "./Navbar";

export default function Register() {
  const navigate = useNavigate();

  const [type, setType] = useState("");

  const handleSubmit = () => {
    if (type === "Enterprise") {
      navigate("/enterprise");
    } else if (type === "Recipient") {
      navigate("/recipient");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-[90%] md:w-1/2 mt-12">
          <img src="./role.png" alt="Role" className="w-full mr-10"/>
        </div>
        <div className="flex flex-col justify-center items-center mt-20 md:mt-32">
          <div>
            <p className="font-bold text-4xl">Select your role</p>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <button
              className={`${
                type === "Enterprise"
                  ? "bg-green-400 text-gr font-bold outline outline-green-600"
                  : "outline outline-offset-2 outline-green-500 outline-1 hover:outline-2 hover:bg-green-200"
              } rounded-full p-3 w-32 `}
              onClick={() => setType("Enterprise")}
            >
              Enterprise
            </button>
            <button
              className={`${
                type === "Recipient"
                  ? "bg-green-400 text-gr font-bold outline outline-green-600"
                  : "outline outline-offset-2 outline-green-500 outline-1 hover:outline-2 hover:bg-green-200"
              } rounded-full p-3 w-32 `}
              onClick={() => setType("Recipient")}
            >
              Recipient
            </button>
          </div>
          <div>
            {type ? (
              <>
                {type === "Enterprise" ? (
                  <Link to="/enterprise"></Link>
                ) : (
                  <Link to="/recipient"></Link>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          <div>
            <button
              className="bg-sky-400 font-semibold rounded-lg p-3 mt-10 hover:bg-sky-300 hover:text-white"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
