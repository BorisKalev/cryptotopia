import React from "react";
import card from "../assets/card2.png";
const CardOptions = () => {
  return (
    <div className="mt-[10rem] max-w-6xl  m-auto flex px-7 items-center justify-between font-mix lg-max:flex-col">
      <div className="text-white flex flex-col w-2/5 lg-max:w-full ">
        <h1 className="text-4xl font-bold">
          Connect your card in a few easy steps
        </h1>
        <p className="mt-10 opacity-75">
          Connect your card effortlessly, no matter where you are in the world.
          Seamlessly integrate with the blockchain and begin purchasing your
          favorite cryptocurrencies with just a few simple steps.
        </p>

        <button className="p-2 w-[150px] border border-[#8D5FE3] rounded-lg bg-purple-gradient mt-10">
          Get started
        </button>
      </div>
      <div className="mt-10">
        <img src={card} alt="" className="w-[600px]" />
      </div>
    </div>
  );
};

export default CardOptions;
