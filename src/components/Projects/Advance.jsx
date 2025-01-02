import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import madara from '../assets/advanced.jpg'
const Advance = () => {
  return (
    <>
    this is advance
    
    <div className="Scraping border-2  border-zinc-900  h-[21rem]   rounded-2xl max-w-xs md:max-w-sm">
              <div className="image   ">
                <img
                  src={madara}
                  alt="logo of project"
                  className="h-42 w-full rounded-2xl"
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
    </>
  )
}

export default Advance
