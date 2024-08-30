import React, { useState } from "react";
import { RiMenu4Fill, RiCloseCircleFill } from "react-icons/ri";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between m-auto max-w-6xl font-mix px-7 sm-max:px-10">
      <div className="flex items-center space-x-4 text-white text-center  lg-max:flex-col md-max:hidden">
        <p>Home</p>
        <p className="lg-max:mt-3">Market</p>
      </div>
      <img src={logo} alt="cryptopia" className="w-[450px]" />
      <div className="flex items-center text-center space-x-4 lg-max:flex-col md-max:hidden">
        <p className="text-[#8D5FE3]">About us</p>
        <button className="p-2 border border-[#8D5FE3] rounded-lg text-[#8D5FE3] lg-max:mt-3">
          Get in touch
        </button>
      </div>

      <div className="md:hidden">
        {menuIsOpen ? (
          ""
        ) : (
          <RiMenu4Fill
            onClick={() => setMenuIsOpen(true)}
            className="text-3xl cursor-pointer text-[#8D5FE3] sm-max:mr-3"
          />
        )}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-1/4 sm-max:w-2/4 bg-[#8D5FE3] p-5 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          menuIsOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <RiCloseCircleFill
          className="absolute text-white right-4 top-4 cursor-pointer"
          onClick={() => setMenuIsOpen(false)}
        />
        <div className="flex flex-col space-y-4 text-center mt-10 z-100">
          <p>Home</p>
          <p>How Cryptopia Works</p>
          <p>About us</p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
