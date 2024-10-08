import React, { useState } from "react";
import { RiMenu4Fill, RiCloseCircleFill } from "react-icons/ri";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuIsOpen(false);
  };
  return (
    <div className="flex items-center justify-between m-auto max-w-6xl font-mix px-7 sm-max:px-10">
      <div className="flex items-center space-x-4 text-white text-center lg-max:space-x-0  lg-max:flex-col md-max:hidden">
        <p onClick={() => scrollToSection("home")} className="cursor-pointer">
          Home
        </p>
        <p
          className="lg-max:mt-3 cursor-pointer"
          onClick={() => scrollToSection("market")}
        >
          Market
        </p>
      </div>
      <img src={logo} alt="cryptopia" className="w-[450px]" />
      <div className="flex items-center text-center space-x-4 lg-max:flex-col md-max:hidden">
        <p
          className="text-[#8D5FE3] cursor-pointer"
          onClick={() => scrollToSection("aboutUs")}
        >
          About us
        </p>
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
        className={`absolute top-[5rem] -right-2 h-[300px] w-1/4 sm-max:w-2/5 bg-gradient-brown rounded-tl-lg rounded-bl-lg p-5 text-white transform transition-transform duration-500 ease-in-out z-50 ${
          menuIsOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <RiCloseCircleFill
          className="absolute text-white right-4 top-4 cursor-pointer"
          onClick={() => setMenuIsOpen(false)}
        />
        <div className="flex flex-col space-y-4 text-center mt-10 z-100">
          <p className="cursor-pointer" onClick={() => scrollToSection("home")}>
            Home
          </p>
          <p
            className="cursor-pointer"
            onClick={() => scrollToSection("market")}
          >
            Market
          </p>
          <p
            className="cursor-pointer"
            onClick={() => scrollToSection("aboutUs")}
          >
            About us
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
