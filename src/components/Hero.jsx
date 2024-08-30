import React from "react";
import fleche from "../assets/fleche.png";
import fleche2 from "../assets/fleche2.png";
import discoball from "../assets/anim.gif";
import { stats } from "../constants";
const Hero = () => {
  return (
    <>
      <div className="relative flex items-center m-auto max-w-6xl px-7 sm-max:px-10 lg-max:flex-col">
        <h1 className="text-white font-bold font-mix text-[2.7rem] w-2/4 tracking-wide mt-10 lg-max:w-full lg-max:text-center">
          The best and most UI friendly crypto chart website in the world
        </h1>
        <img
          src={discoball}
          alt="purple ball"
          className="absolute rounded-full w-[450px] h-[450px] right-0 top-5 lg-max:relative md-max:w-[300px] md-max:h-[300px]"
        />
      </div>

      <div className="m-auto max-w-6xl  sm-max:px-10 mt-[6rem] px-7">
        <div className="flex items-center text-white lg-max:justify-center">
          <p className="max-w-xs font-mono opacity-90 sm-max:text-sm">
            A new generation of gaming and finance is arriving, where AI bots
            compete and interact with each other.
          </p>
          <img
            src={fleche}
            alt="arrow"
            className="rotate-45 w-[200px] h-[100px] opacity-90 md-max:mt-[5rem]"
          />
        </div>

        <div className="flex items-center text-white ml-[5rem] lg-max:justify-center lg-max:ml-0">
          <img
            src={fleche2}
            alt="arrow"
            className="rotate-45 w-[200px] h-[100px] opacity-60"
          />
          <p className="max-w-xs opacity-60 font-mono lg:text-gradient sm-max:text-sm">
            Altered State Machine is a platform layer using NFT's to create,
            trade, train and utilise these AI's
          </p>
        </div>
      </div>

      <div className="flex m-auto justify-between items-center  max-w-6xl mt-10 md-max:flex-col px-7">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center m-3 ">
            <h4 className="font-poppins font-semibold text-2xl text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal text-2xl text-gradient-purple uppercase ml-3">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
