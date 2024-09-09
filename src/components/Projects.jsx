import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram,  } from "react-icons/fa";
import { SiPython } from "react-icons/si";

import Navbar from "./Navbar";
import image from '../assets/vta2.jpg'

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="w-full font-dela min-h-screen bg-black text-purple-300  border-white border-1">
          <h1 className="text-4xl p-10 border-1 block  "><b>Projects</b></h1>

          <div className="all border-1 flex flex-wrap items-start justify-center gap-4 mt-5 ">
          <div className="VideoToAudio border-2 p-5 rounded-2xl max-w-xs md:max-w-sm">
                <div className="image flex flex-wrap justify-center mt-4">
                  <img src={image} alt="logo of project" className="h-40 w-[20rem] rounded-2xl" />
                  
                </div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md flex gap-4">
                   <b>Video To Audio</b> <div className="flex gap-10"><SiPython/><a href="https://github.com/yasx50/converting-video-to-audio"><FaGithub/></a></div>
                </h2>
                <p className="text-center text-">
               This repository contains a simple yet efficient tool for converting video files to audio files.
                </p>
              </div>
          <div className="VideoToAudio border-2 p-5 rounded-2xl max-w-xs md:max-w-sm">
                <div className="image flex flex-wrap justify-center mt-4">
                  <img src={image} alt="logo of project" className="h-40 w-[20rem] rounded-2xl" />
                  
                </div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md flex gap-4">
                   <b>Video To Audio</b> <div className="flex gap-10"><SiPython/><a href="https://github.com/yasx50/converting-video-to-audio"><FaGithub/></a></div>
                </h2>
                <p className="text-center text-">
               This repository contains a simple yet efficient tool for converting video files to audio files.
                </p>
              </div>
          <div className="VideoToAudio border-2 p-5 rounded-2xl max-w-xs md:max-w-sm">
                <div className="image flex flex-wrap justify-center mt-4">
                  <img src={image} alt="logo of project" className="h-40 w-[20rem] rounded-2xl" />
                  
                </div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md flex gap-4">
                   <b>Video To Audio</b> <div className="flex gap-10"><SiPython/><a href="https://github.com/yasx50/converting-video-to-audio"><FaGithub/></a></div>
                </h2>
                <p className="text-center text-">
               This repository contains a simple yet efficient tool for converting video files to audio files.
                </p>
              </div>
          <div className="VideoToAudio border-2 p-5 rounded-2xl max-w-xs md:max-w-sm">
                <div className="image flex flex-wrap justify-center mt-4">
                  <img src={image} alt="logo of project" className="h-40 w-[20rem] rounded-2xl" />
                  
                </div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md flex gap-4">
                   <b>Video To Audio</b> <div className="flex gap-10"><SiPython/><a href="https://github.com/yasx50/converting-video-to-audio"><FaGithub/></a></div>
                </h2>
                <p className="text-center text-">
               This repository contains a simple yet efficient tool for converting video files to audio files.
                </p>
              </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
