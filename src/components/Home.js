import React from "react";
import Card from "./Card";
import CardData from "./CardData";

export default function Home() {

  return (
    <>
      <div className="flex flex-col flex-wrap bg-gray-200 h-auto">
        <div className="flex md:flex-row my-5 flex-col-reverse md:mt-10">
          <div className="md:w-[50%]">
            <img
              src={"/home-1.png"}
              alt="home-image-1"
              className="md:mt-20 md:ml-28 md:w-[60%]"
            />
          </div>
          <div className="flex flex-col items-center md:w-[50%] my-5 md:mt-28">
            <h1 className="text-[#adff45] font-bold font-Pantel text-6xl">
              BitLogiX
            </h1>
            <h3 className="text-xl font-semibold text-center font-mono my-3">
              Elevate Your Business with Tron/BTTC
            </h3>
            <span className="text-justify mt-3 font-medium w-[80%] tracking-wide text-lg hidden md:block">
              Experience the synergy of our Tron-based supply chain DApp, where
              blockchain technology converges with efficient supply chain
              management. Engage with industry experts and collaborative
              partners in a secure and confidential environment. Uncover
              transparency through real-time feedback and ratings, empowering
              informed decisions for your business. Accessible and
              cost-effective, our DApp revolutionizes supply chain services,
              removing barriers to streamlined operations.
            </span>
            <span className="text-left mt-3 font-medium w-[80%] tracking-wide text-lg md:hidden">
              Experience the future with our Tron-powered supply chain DApp.
              With real-time tracking, instant payments, and token rewards,
              unlock endless possibilities. Connect, collaborate, and streamline
              your supply chain for a brighter tomorrow.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row-reverse my-5 flex-col-reverse md:mt-10">
          <div className="md:w-[50%] hidden md:block">
            <img
              src={"/tron.png"}
              alt="home-image-1"
              className="md:ml-28 md:w-[60%]"
            />
          </div>
          <div className="flex flex-col items-center md:w-[50%] my-5 md:mt-28">
            <h1 className="text-[#76b62a] text-center font-bold font-Pantel text-4xl">
              Secure,Swift & Rewarding
            </h1>
            <span className="text-justify mt-3 font-medium w-[80%] tracking-normal text-lg">
              Revolutionize your supply chain with our DApp. The global supply
              chain market, valued at $37.4 billion by 2027, demands
              modernization. Our solution leverages decentralization, smart
              contracts, and cryptographic security. Experience the future with
              real-time tracking, instant payments, and token rewards, unlocking
              endless possibilities.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center mt-28">
          <span className="text-4xl font-semibold font-Pantel">
            WHY <span className="text-[#adff45]">BitLogiX</span> ?
          </span>
          <div className="flex flex-col md:flex-row flex-wrap justify-center z-10">
          {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
          </div>
        </div>
      </div>
    </>
  );
}
