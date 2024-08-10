import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";

const Contact = () => {
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
            <a href="https://github.com/yasx50">
              <FaGithub className="text-purple-300 h-8 w-8" target="__blank"/>
            </a>
            <a href="https://www.instagram.com/yash___yadu1c/" target="__blank">
              <FaInstagram className="text-purple-300 h-8 w-8" />
            </a>
            <a href="">
              <FaTwitter className="text-purple-300 h-8 w-8" />
            </a>
          </div>
        </nav>

        {/* Contact Heading */}
        <div className="text-purple-300 text-left text-3xl md:text-5xl p-6 md:p-10">
          Got a Project in Mind? <br />
          Let's Talk
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto mt-6 p-4">
          <form className="bg-white p-6 rounded-lg shadow-lg" action="/submit">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project"
              >
                Project Context
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="project"
                type="text"
                placeholder="Enter Project Context"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
