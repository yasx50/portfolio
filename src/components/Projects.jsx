import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { SiPython } from "react-icons/si";

import Navbar from "./Navbar";
import VtoA from "../assets/vta2.jpg";
import Scrapping from '../assets/Scraping.png'
import gaming from '../assets/gameDev.png'

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="w-full font-dela min-h-screen bg-black text-purple-300  border-white border-1">
          <h1 className="text-4xl p-10 border-1 block  ">
            <b>Projects</b>
          </h1>

          <div className="all border-1 md:flex md:flex-wrap md:flex-row flex flex-col  items-start justify-center gap-4  p-5">
          <div className="VideoToAudio border-2  border-zinc-900   md:h-[21rem]  mt-1 rounded-2xl max-w-xs md:max-w-sm">
              <div className="image   ">
                <img
                  src={VtoA}
                  alt="logo of project"
                  className="h-40 w-full rounded-2xl"
                />
              </div>
              <div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md  gap-4">
                  <b>Video To Audio</b>
                </h2>
                <p className="text-center ">
                Whether you need to extract audio from a video for podcasting, transcription, or any other purpose, this tool provides an easy-to-use solution.
                </p>

                <div className=" flex justify-center items-center text-center">
                <div className="border-zinc-900 border-2 rounded-md w-full   m-1 ">
                    <a
                      href="https://github.com/yasx50/converting-video-to-audio"
                      className=""
                    >
                      <div className="flex flex-row gap-5  justify-center items-center  ">
                      <FaGithub className="" />
                      <b>Get Source Code</b>
                      </div>
                    </a>
                  </div>
                </div>
               
              </div>
            </div>

                    {/* new */}

                    <div className="Scraping border-2  border-zinc-900  h-[21rem]   rounded-2xl max-w-xs md:max-w-sm">
              <div className="image   ">
                <img
                  src={Scrapping}
                  alt="logo of project"
                  className="h-40 w-full rounded-2xl"
                />
              </div>
              <div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md  gap-4">
                  <b>Scrapping The Data</b>
                </h2>
                <p className="text-center ">
                This project demonstrates how to perform web scraping using Flask and BeautifulSoup to extract data from websites efficiently. 
                    </p>
                    <div className=" flex justify-center items-center text-center">
                <div className="border-zinc-900 border-2 rounded-md w-full   m-1 ">
                    <a
                      href="https://github.com/yasx50/vpnDigitalsServices"
                      className=""
                    >
                      <div className="flex flex-row gap-5  justify-center items-center  ">
                      <FaGithub className="" />
                      <b>Get Source Code</b>
                      </div>
                    </a>
                  </div>
                </div>
               
              
               
              </div>
            </div>  

                    {/* end */}


                       {/* new */}

                       <div className="Scraping border-2  border-zinc-900  h-[21rem]   rounded-2xl max-w-xs md:max-w-sm">
              <div className="image   ">
                <img
                  src={gaming}
                  alt="logo of project"
                  className="h-40 w-full rounded-2xl"
                />
              </div>
              <div>
                <h2 className=" text-left text-2xl mt-2 p-3  border- rounded-md  gap-4">
                  <b>Balloon Pop Frenzy</b>
                </h2>
                <p className="text-center ">
                Showcasing Phaser.js expertise, this game challenges players to fill balloons with air and pop them in a fun.
                    </p>
                    <div className=" flex justify-center items-center text-center">
                <div className="border-zinc-900 border-2 rounded-md w-full   m-1 ">
                    <a
                      href="https://idz-digital-private-limited-f459.onrender.com/"
                      className=""
                    >
                      <div className="flex flex-row gap-5  justify-center items-center  ">
                      <FaGlobe  className="" />
                      <b>Get in the Game</b>
                      </div>
                    </a>
                  </div>
                </div>
               
              
               
              </div>
            </div>  

                    {/* end */}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Projects;
