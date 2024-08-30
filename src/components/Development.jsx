import React from "react";
import design from "../assets/purple-img.webp";
const Development = () => {
  return (
    <div className="flex flex-col text-white mt-[10rem] text-center max-w-6xl px-7 m-auto font-mix">
      <div className="flex flex-col">
        <h2 className="text-xl opacity-80 font-bold">Arrested Development</h2>
        <h1 className="text-4xl mt-5 font-bold">
          We’re Building The Future. Want To Help?
        </h1>
      </div>
      <div className="mt-10 relative m-auto flex flex-col">
        <button className="absolute p-3 left-[42%] top-[2%] sm-max:left-[30%] bg-gradient-brown w-[130px] rounded-xl">
          Get started
        </button>
        <img
          src={design}
          alt="Arrested Development"
          className="w-[800px] h-[800px] md-max:w-full md-max:h-full"
        />
        <div className="absolute w-[1000px] lg-max:w-full  -right-[10%] h-full purple__gradient -z-[10] bottom-[20%] rounded-full" />
        <div className="absolute w-[1000px] lg-max:w-full -right-[10%] h-full purple__gradient -z-[10] bottom-[10%] rounded-full" />
      </div>
    </div>
  );
};

export default Development;
