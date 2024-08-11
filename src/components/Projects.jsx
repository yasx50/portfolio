import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import firstS from "../assets/sc1.png";
import secondS from "../assets/sc2.png";
import thirdS from "../assets/sc3.png";
import Navbar from "./Navbar";

const Projects = () => {

  return (
    <>
      <div className="w-full min-h-screen bg-black border-white border-1">
        {/* Navbar */}
        <Navbar/>
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
