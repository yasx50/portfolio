import {useState} from "react";
import { FaGithub, FaTwitter, FaInstagram ,FaBars} from "react-icons/fa";
import Logo from '../assets/coding-svgrepo-com.svg'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {/* from here i have started the main div all elements are in this div */}

      <div className=" w-full min-h-screen bg-black  border-white border-1 ">

        {/* here i am starting my navbar */}
        
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
