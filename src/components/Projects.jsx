import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/coding-svgrepo-com.svg";
import firstS from "../assets/sc1.png";
import secondS from "../assets/sc2.png";
import thirdS from "../assets/sc3.png";

const Projects = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black  border-white border-1 ">
        {/* here i am starting my navbar */}
        <nav className="flex">
          <h2 className="text-purple-300 h-[3rem] font-mono inline-block text-5xl ml-20 mt-4 border-white border-1">
            Yash
          </h2>
          <ul className=" flex space-x-20 text-xl ml-40 text-purple-300  mt-6 border-white border-1">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/About">
              {" "}
              <li>About</li>
            </a>
            <a href="/Projects">
              <li>Projects</li>
            </a>
            <a href="/Contact">
              <li>Contact</li>
            </a>
          </ul>
          <div className="ml-40 flex gap-3 mt-6">
            <a href="https://github.com/yasx50">
              <FaGithub className="text-purple-300 h-10 w-20 rounded-md" />
            </a>
            <a href="">
              <FaInstagram className="text-purple-300 h-10 w-20" />
            </a>
            <a href="">
              <FaTwitter className="text-purple-300 h-10 w-20" />
            </a>
          </div>
        </nav>
        {/* here nav bar is comp[leted] */}
        {/* here i am heading of product page*/}

        <div className="text-purple-300 text-left text-5xl p-10">
          Explore My Recent E-Commerce Project
        </div>
        <div className="border-1">
          <div className="flex flex-wrap gap-5  justify-center items-center ">
            <img src={firstS} alt="firstimage" className=" w-[30%]" />
            <img src={secondS} alt="firstimage" className=" w-[30%]" />
            <img src={thirdS} alt="firstimage" className=" w-[30%]" />
          </div>
          <div className="text-purple-300 text-xl border-1 text-center mt-5 w-[50rem] ">
            <ul className="">
                <li> Dairy eCommerce Website (MERN Stack) <br />
            Developed a comprehensive eCommerce platform for a dairy business
            using the MERN stack. The website features a full suite of
            functionalities typical of leading eCommerce sites, including
            product listings, shopping cart, secure payment processing, and user
            authentication. Currently in the final stages of development, with
            completion and deployment expected next month.</li>
                <li className="flex gap-10 justify-center items-center mt-5 "><FaGithub className="text-purple-300 h-10 w-20 rounded-md" /><a href="https://github.com/yasx50/dairy-app" className="text-purple-300 "><b>Visit GitHub</b></a></li>
            </ul>
           
          </div>
        </div>
          <div className="flex">
          
          </div>
      </div>
    </>
  );
};

export default Projects;
