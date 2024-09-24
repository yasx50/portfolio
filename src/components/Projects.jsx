import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiPython } from "react-icons/si";

import Navbar from "./Navbar";
import VtoA from "../assets/vta2.jpg";
import Scrapping from '../assets/Scraping.png'

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="w-full font-dela min-h-screen bg-black text-purple-300  border-white border-1">
          <h1 className="text-4xl p-10 border-1 block  ">
            <b>Projects</b>
          </h1>

          <div className="all border-1 flex flex-wrap items-start justify-center gap-4  p-5">
          <div className="VideoToAudio border-2 flex flex-row border-zinc-900     rounded-2xl max-w-xs md:max-w-sm">
              <div className="image   justify-center p-2">
                <img
                  src={VtoA}
                  alt="logo of project"
                  className="h-40 w-[25rem] rounded-2xl"
                />
              </div>
              <div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md  gap-4">
                  <b>Video To Audio</b>
                </h2>
                <p className="text-center text-">
                  This repository contains a simple yet efficient tool for
                  converting video files to audio files.

                  <div className="border-zinc-900 border-2 rounded-md   m-1 mr-[2rem]">
                    <a
                      href="https://github.com/yasx50/converting-video-to-audio"
                      className=""
                    >
                      <div className="flex flex-row gap-5 text-center justify-center items-center  ">
                      <FaGithub className="" />
                      <b>Get Source Code</b>
                      </div>
                    </a>
                  </div>
                </p>
               
              </div>
            </div>

            <div className="Scraping border-2 flex flex-row border-zinc-900     rounded-2xl max-w-xs md:max-w-sm">
              <div className="image   justify-center p-2">
                <img
                  src={Scrapping}
                  alt="logo of project"
                  className="h-40 w-[25rem] rounded-2xl"
                />
              </div>
              <div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md  gap-4">
                  <b>Scrapping The Data</b>
                </h2>
                <p className="text-center text-">
                This project demonstrates how to perform web scraping using Flask and BeautifulSoup to extract data from websites efficiently. 
                  <div className="border-zinc-900 border-2 rounded-md   m-1 mr-[2rem]">
                    <a
                      href="https://github.com/yasx50/converting-video-to-audio"
                      className=""
                    >
                      <div className="flex flex-row gap-5 text-center justify-center items-center  ">
                      <FaGithub className="" />
                      <b>Get Source Code</b>
                      </div>
                    </a>
                  </div>
                </p>
               
              </div>
            </div>          
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Projects;
