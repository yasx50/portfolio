import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaBars } from "react-icons/fa";
import Logo from '../assets/coding-svgrepo-com.svg';

const Navbar = () => {
 

  return (
    <nav className=" top-0 font-dela left-0 w-full p-4 bg-black flex justify-between items-center z-50">
      <div className="flex items-center space-x-4">
        <h2 className="text-purple-300 h-[3rem]  text-3xl md:text-5xl">
          Yash
        </h2>
        
      </div>
      <div className="flex md:space-x-3 gap-1 ml-[-100rem]">
        <a href="https://github.com/yasx50" target="__blank" rel="noopener noreferrer">
          <FaGithub className="text-purple-300  h-5 w-6 md:h-8 md:w-8" />
        </a>
        <a href="https://www.linkedin.com/in/yash-yadav-y05/" target="__blank" rel="noopener noreferrer">
          <FaLinkedin className="text-purple-300  h-5 w-6 md:h-8 md:w-8" />
        </a>
        <a href="https://www.instagram.com/yash___yadu1c/" target="__blank" rel="noopener noreferrer">
          <FaInstagram className="text-purple-300 h-5 w-6 md:h-8 md:w-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
