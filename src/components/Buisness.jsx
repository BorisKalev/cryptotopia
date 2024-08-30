import React from "react";

import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row items-center rounded-[20px] md-max:first:mt-10 hover:bg-gradient-brown p-3 hover:rounded-xl ${
      index !== features.length - 1 ? "mb-10" : "mb-0"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-[#8D5FE3] bg-opacity-30 `}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 ml-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px] opacity-75 ml-2">
        {content}
      </p>
    </div>
  </div>
);

const Buisness = () => {
  return (
    <>
      <div className="mt-[10rem] max-w-6xl m-auto flex items-center justify-between font-mix px-7 md-max:flex-col">
        {/* Left Column */}
        <div className="flex flex-col text-white w-2/5 md-max:w-full">
          <h1 className="text-4xl font-bold">
            You do the business, we’ll handle the money.
          </h1>

          <p className="mt-10 opacity-75">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>

          <button className="p-2 w-[150px] border border-[#8D5FE3] rounded-lg bg-purple-gradient mt-10">
            Get started
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-2/4 md-max:w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              className={``}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Buisness;
