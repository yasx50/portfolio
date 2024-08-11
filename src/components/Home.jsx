import {useState} from "react";
import { FaGithub, FaTwitter, FaInstagram ,FaBars} from "react-icons/fa";
import Logo from '../assets/coding-svgrepo-com.svg'
import Navbar from "./Navbar";


const Home = () => {
 

  return (
    <>
    {/* from here i have started the main div all elements are in this div */}

      <div className=" w-full min-h-screen bg-black  border-white border-1 ">

        {/* here i am starting my navbar */}
       <Navbar/>

        {/* this is heading showing text full-stack developer */}
        <div className="text-purple-300 p-10 flex flex-col md:flex-row items-center justify-center">
  <div className="text-center md:text-left text-[5rem] md:text-[9rem] leading-tight">
    Full-stack<br />Developer
  </div>
  <img src={Logo} alt="Logo" className="h-[15rem] md:h-[30rem] mt-10 md:mt-0 md:ml-20" />
</div>

      </div>

    </>
  );
};

export default Home;
