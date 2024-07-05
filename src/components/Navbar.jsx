import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-[#182D4D] py-2   w-full z-40">
      <div className="max-w-7xl mx-auto  flex justify-between items-center  rounded-full px-4 py-1 box-s2">
        {/* Logo */}
        <div className=" mr-6 w-1/2">
          <a
            href="/"
            className=""
          >
            <img src="images/logo.png" className="" alt=" Logo" />
          </a>
        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center w-1/2">
          <a href="/" className="text-white font-medium text-lg px-3 py-2">
          Features
          </a>
          <a href="#about" className="text-white font-medium text-lg px-3 py-2">
          Build
          </a>
          <a href="#col" className="text-white font-medium text-lg px-3 py-2">
          Resources
          </a>

          <a href="#contact" className="text-white font-medium text-lg px-3 py-2">
          Learn
          </a>
          <div className="md:flex items-center">
          <div className=" flex items-center gap-4 text-white  ml-5">
            <a
              href="https://x.com/"
              rel="noreferrer"
              target="_blank"
              className=" px-6 btn-m py-1 font-medium text-lg text-white rounded-full text-center mx-auto"
            >
             Download
            </a>

         
          </div>
        </div>

      
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-white rounded-2xl border-2 border-[#000] px-2 pt-2 pb-3 space-y-1 m-4"
          >
            <a
              href="/"
              className="text-black font-medium text-lg block px-3 py-2"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-black font-medium text-lg block px-3 py-2"
            >
              Build
            </a>
            <a
              href="#col"
              className="text-black font-medium text-lg block px-3 py-2"
            >
             Resources
            </a>

            <div className=" flex items-center gap-4 text-white mb-6 ml-5">
            <a
              href="https://x.com/"
              rel="noreferrer"
              target="_blank"
              className=" px-6 btn-m py-1 font-medium text-lg text-white rounded-full text-center mx-auto"
            >
             Download
            </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
