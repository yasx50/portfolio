import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";

import Navbar from "./Navbar";
import image from '../assets/my_photo_2.jpg'

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="w-full min-h-screen bg-black text-purple-300  border-white border-1">
          <h1 className="text-4xl p-10 border-1 block animate-pulse "><b>Projects</b></h1>
          <div className="all border-1 flex flex-wrap items-start justify-center gap-4 mt-5 ">
          <div className="AudioToVideo border-2 p-5 rounded-2xl max-w-xs md:max-w-sm">
                <h2 className="text-yellow-400 text-center text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md">
                  Audio To Video
                </h2>
                <div className="image flex flex-wrap justify-center mt-4">
                  <img src={image} alt="" />
                  
                </div>
              </div>

          <div className="webdev border-2 p-5 rounded-2xl max-w-xs md:max-w-sm">
                <h2 className="text-rose-400 text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md">
                  Mern Stack
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                 
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
