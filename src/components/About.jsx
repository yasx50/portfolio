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
import Photo from "../assets/my_photo_2.jpg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="w-full min-h-screen bg-black border-white border-1">
          {/* Navbar */}
          <Navbar />

          {/* Profile Section */}
          <div className="text-white flex flex-col items-center p-5 justify-center">
            {/* Profile Image */}
            <div className="mb-4">
              <img
                src={Photo}
                alt="the profile pic of yash"
                className="md:h-[13rem] md:w-[13rem] w-[10rem] h-[10rem] rounded-full border-2"
              />
            </div>

            {/* Profile Text */}
            <div className="text-center text-purple-300 px-4 md:px-0">
              <h5 className="text-xl md:text-2xl lg:text-3xl">This is    Yash Yadav</h5>
              <h1 className="text-2xl md:text-4xl lg:text-6xl p-2 md:p-4 lg:p-5">Full-Stack Developer</h1>
              <p className="text-sm md:text-base lg:text-lg max-w-xl">
                Crafting responsive and engaging web experiences, I blend creativity with code to build intuitive digital solutions.
              </p>
            </div>
          </div>

          {/* Down Arrow */}
          <div className="text-center mt-6">
            <a href="#home">
              <FaAnglesDown className="bg-black inline-block text-purple-300 animate-bounce h-10 md:h-10 md:w-20" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
