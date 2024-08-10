import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars, FaSmile } from "react-icons/fa";
import Logo from "../assets/coding-svgrepo-com.svg";
import Photo from "../assets/my_photo.jpg";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen bg-black border-white border-1">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex justify-between items-center w-full md:w-auto">
            <h2 className="text-purple-300 h-[3rem] font-mono text-3xl md:text-5xl">
              Yash
            </h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-purple-300"
            >
              <FaBars className="h-8 w-8" />
            </button>
          </div>
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10 text-xl text-purple-300 mt-4 md:mt-0`}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Projects">Projects</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <a href="https://github.com/yasx50" target="__blank">
              <FaGithub className="text-purple-300 h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/yash___yadu1c/" target="__blank">
              <FaInstagram className="text-purple-300 h-8 w-8" />
            </a>
            <a href="">
              <FaTwitter className="text-purple-300 h-8 w-8" />
            </a>
          </div>
        </nav>

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
