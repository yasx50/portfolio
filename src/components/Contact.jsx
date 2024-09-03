import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import Navbar from "./Navbar";

const Contact = () => {
 
  return (
    <>
    <section id="contact">
      <div className="w-full min-h-screen bg-black border-white border-1">
        {/* Navbar */}
        {/* <Navbar/> */}

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
      </section>
    </>
  );
};

export default Contact;
