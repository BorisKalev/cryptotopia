import React from "react";
import logo from "../assets/logo.png";
import { FaTwitter, FaDiscord, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-[10rem] max-w-6xl  m-auto font-mix text-white md-max:flex-col">
        <div className="flex flex-col w-2/5 mb-12 md-max:w-full">
          <img
            src={logo}
            alt="logo cryptotopia"
            className="w-[300px] object-contain"
          />
          <p className="text-white opacity-75 w-3/5 ml-8">
            A new way to buy & sell cryptocurrencies, reliable and secure.
          </p>
        </div>
        {/* Links columns */}
        <div className="flex flex-wrap justify-between w-3/5 md-max:w-full md-max:px-8">
          {/* First Column */}
          <div className="flex flex-col w-1/3 mt-10">
            <h1 className="text-white mb-4">Useful Links</h1>
            <ul className="flex-grow opacity-60 flex flex-col justify-start">
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Content
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  How it Works
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Create
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Terms and services
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="flex flex-col md-max:text-center w-1/3 mt-10">
            <h1 className="text-white mb-4">Community</h1>
            <ul className="flex-grow opacity-60 flex flex-col justify-start">
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Partners
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Suggestions
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex flex-col w-1/3 mt-10 md-max:text-end">
            <h1 className="text-white mb-4">Partner</h1>
            <ul className="flex-grow opacity-60 flex flex-col justify-start">
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Our partner
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-purple-400">
                  Become a partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[1px] max-w-6xl m-auto bg-purple-300 opacity-75 mt-5 px-7" />

      <div className="flex justify-between max-w-6xl m-auto text-white mt-7 mb-10 font-mix md-max:flex-col md-max:justify-normal items-center">
        <h1 className="ml-8 md-max:ml-0">
          2024 Cryptopia©. All Rights Reserved
        </h1>
        <div className="flex text-xl gap-5 mr-8 md-max:mr-0 md-max:mt-5">
          <FaTwitter className="hover:text-purple-400 cursor-pointer" />
          <FaDiscord className="hover:text-purple-400 cursor-pointer" />
          <FaFacebook className="hover:text-purple-400 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Footer;
