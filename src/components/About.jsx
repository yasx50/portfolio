import React from "react";
import { FaGithub, FaTwitter, FaInstagram,FaSmile  } from "react-icons/fa";
import Logo from "../assets/coding-svgrepo-com.svg";
import Photo from "../assets/my_photo.jpg";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black  border-white border-1 ">
        {/* here i am starting my navbar */}
        <nav className="flex">
          <h2 className="text-purple-300 h-[3rem] font-mono inline-block text-5xl ml-20 mt-4 border-white border-1">
            Yash
          </h2>
          <ul className=" flex space-x-20 text-xl ml-40 text-purple-300  mt-6 border-white border-1">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/About">
              {" "}
              <li>About</li>
            </a>
            <a href="/Projects">
              <li>Projects</li>
            </a>
            <a href="/Contact">
              <li>Contact</li>
            </a>
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
        {/* here i have completed the navbar */}
        {/* here is pick up line */}

        <div>
          <h2 className="text-purple-300 text-5xl text-center p-10">
            The best code isn't just written—it's rewritten, refined, and
            improved with every iteration.
          </h2>
        </div>
        <div className="text-white flex p-5">
          <img
            src={Photo}
            alt="the profile pic of yash"
            className="h-[30rem] w-[27rem] rounded-3xl border-purple-400 border-1 "
          />
          <div className="text-purple-300 ">
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
