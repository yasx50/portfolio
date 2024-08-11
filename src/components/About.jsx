import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars, FaSmile } from "react-icons/fa";
import Logo from "../assets/coding-svgrepo-com.svg";
import Photo from "../assets/my_photo_2.jpg";
import Navbar from "./Navbar";

const About = () => {
  
  return (
    <>
      <div className="w-full min-h-screen bg-black border-white border-1">
        {/* Navbar */}
        <Navbar/>

        {/* Pick Up Line */}
        <div>
  <h2 className="text-purple-300 text-3xl md:text-4xl lg:text-5xl text-center p-6 md:p-8 lg:p-10">
    The best code isn't just written—it's rewritten, refined, and
    improved with every iteration.
  </h2>
</div>


        {/* Profile Section */}
        <div className="text-white flex flex-col md:flex-row p-5">
          <img
            src={Photo}
            alt="the profile pic of yash"
            className="h-[30rem] w-[27rem] rounded-3xl border-purple-400 border-1"
          />
          <div className="text-purple-300 md:ml-10">
            <ul className="text-left text-2xl p-5 mt-2">
              <li className="flex gap-4">Hey <FaSmile /></li>
              <li className="mt-5">
                this is <b>Yash Yadav</b>
              </li>
              <li className="mt-5">
                Passionate <b>full-stack developer</b> with expertise in both <b>front-end
                and back-end</b> technologies, creating seamless and dynamic web
                applications.
              </li>
              <li className="mt-5">
                Skilled in full-stack <b>Python development</b>, leveraging frameworks and tools to build robust and scalable solutions.
              </li>
              <li className="mt-5">
                Currently pursuing a <b>BSc in Computer Science</b>, continuously
                expanding my knowledge and staying up-to-date with the latest
                industry trends.
              </li>
              <li className="mt-5">
                Driven by a love for coding and <b>problem-solving</b>, I thrive on turning complex challenges into innovative and efficient solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
