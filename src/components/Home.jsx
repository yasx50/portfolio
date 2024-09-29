import { useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaSmile,
} from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import Logo from "../assets/coding-svgrepo-com.svg";
import Photo from "../assets/yashpro.jpg";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <>
      <section id="home" >
      <div
  className="w-full font-dela min-h-screen bg-black border-white border-1 "
 
>          {/* Navbar */}
          <Navbar />

          <div className=" md:m-0 mt-[4rem] ">
            {/* Profile Section */}
          <div className="text-white flex flex-col items-center p-3 justify-center animate-bottom-to-top ">
            {/* Profile Image */}
            <div className="mb-4">
              <img
                src={Photo}
                alt="the profile pic of yash"
                className="md:h-[13rem] md:w-[13rem] image-center w-[10rem] h-[10rem] rounded-full border-2"
              />
            </div>

            {/* Profile Text */}
            <div className="text-center justify-center  text-purple-300 px-4 md:px-0">
              <h5 className="text-xl md:text-2xl  lg:text-3xl text-center animate-bounce-1 italic">This is    Yash Yadav</h5>
              <h1 className="text-3xl border-1 w-[100%] md:text-4xl lg:text-6xl m-2 md:p-4 lg:p-5 text-center">Full-Stack Developer</h1>
              <p className="text-slate-500 md:text-base lg:text-lg max-w-xl text-center p-2 md:ml-6 justify-center items-center">
                Crafting responsive and engaging web experiences, I blend creativity with code to build intuitive digital solutions.
              </p>
              
          <p className="mt-6 text-slate-500 italic sm:animate-bottom-to-top text-center block md:hidden">
  <b>"Code is like humor. When you have to explain it, it’s bad."</b>
</p>
            </div>
          </div>


    

          {/* Down Arrow */}
          <div className="text-center mt-6 md:mt-4">
            <a href="#about">
              <FaAnglesDown className="bg-black inline-block text-purple-300 animate-bounce h-10 md:h-10 md:w-20" />
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
