import {useState} from "react";
import { FaGithub, FaLinkedin, FaInstagram ,FaBars} from "react-icons/fa";
import Logo from '../assets/coding-svgrepo-com.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
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
            <a href="https://www.linkedin.com/in/yash-yadav-y05/ " target="__blank">
              <FaLinkedin className="text-purple-300 h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/yash___yadu1c/" target="__blank">
              <FaInstagram className="text-purple-300 h-8 w-8" />
            </a>
          </div>
        </nav>
      
    </div>
  )
}

export default Navbar

