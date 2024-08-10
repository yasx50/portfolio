import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../assets/coding-svgrepo-com.svg'

const Contact = () => {
  return (
    <>
    <div className='w-full min-h-screen bg-black  border-white border-1 '>
        {/* here i am starting my navbar */}
        <nav className="flex">
          <h2 className="text-purple-300 h-[3rem] font-mono inline-block text-5xl ml-20 mt-4 border-white border-1">
            Yash
          </h2>
          <ul className=" flex space-x-20 text-xl ml-40 text-purple-300  mt-6 border-white border-1">
            <a href="/"><li>Home</li></a>
           <a href="/About"> <li>About</li></a>
            <a href="/Projects"><li>Projects</li></a>
            <a href="/Contact"><li>Contact</li></a>
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
        
      
        </div>
    </>
  )
}

export default Contact
