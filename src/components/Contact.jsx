import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send it to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section id="contact">
        <div className="w-full font-dela min-h-screen bg-black border-white border-1">
          {/* Navbar */}
          {/* <Navbar /> */}

          {/* Contact Heading */}
          <div className="text-purple-300 text-left text-3xl md:text-4xl p-6 md:p-10">
            <b>
              Got a Project in Mind? <br />
              Let's Talk
            </b>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto mt-6 p-4">
            <form
              className="bg-white p-6 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.project}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Submit :)
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
