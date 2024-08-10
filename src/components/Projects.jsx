import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import firstS from "../assets/sc1.png";
import secondS from "../assets/sc2.png";
import thirdS from "../assets/sc3.png";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen bg-black border-white border-1">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex justify-between items-center w-full md:w-auto">
            <h2 className="text-purple-300 h-[3rem] font-mono text-3xl md:text-5xl">
              Yash
            </h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-purple-300"
            >
              <FaBars className="h-8 w-8" />
            </button>
          </div>
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10 text-xl text-purple-300 mt-4 md:mt-0`}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Projects">Projects</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <a href="https://github.com/yasx50" target="__blank">
              <FaGithub className="text-purple-300 h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/yash___yadu1c/" target="__blank">
              <FaInstagram className="text-purple-300 h-8 w-8" />
            </a>
            <a href="">
              <FaTwitter className="text-purple-300 h-8 w-8" />
            </a>
          </div>
        </nav>

        {/* Heading */}
        <div className="text-purple-300 text-left text-3xl md:text-5xl p-6 md:p-10">
          Explore My Recent E-Commerce Project
        </div>

        {/* Project Images */}
        <div className="flex flex-col items-center p-4">
          <div className="flex flex-wrap gap-5 justify-center">
            <img src={firstS} alt="firstimage" className="w-full md:w-1/3 lg:w-1/4" />
            <img src={secondS} alt="secondimage" className="w-full md:w-1/3 lg:w-1/4" />
            <img src={thirdS} alt="thirdimage" className="w-full md:w-1/3 lg:w-1/4" />
          </div>

          {/* Project Description */}
          <div className="text-purple-300 text-base md:text-xl border-1 text-center mt-5 w-full md:w-4/5 lg:w-3/4 px-4">
            <ul className="list-disc list-inside">
              <li className="mt-2">
                Dairy eCommerce Website (MERN Stack) <br />
                Developed a comprehensive <b>eCommerce</b> platform for a dairy business
                using the MERN stack. The website features a full suite of
                functionalities typical of leading eCommerce sites, including
                <b> product listings</b>, <b>shopping cart</b>,<b> secure payment processing, and user
                authentication</b>. Currently in the final stages of development, with
                completion and deployment expected next month.
              </li>
              <li className="flex gap-4 justify-center items-center mt-5">
                <FaGithub className="text-purple-300 h-8 w-8" />
                <a href="https://github.com/yasx50/dairy-app" className="text-purple-300 text-lg">
                  <b>Visit GitHub</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
