import { useState, useRef } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nmpi3tp', 'template_ita3xki', form.current, {
        publicKey: '_PaY40W8-ouYRmV8k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-zinc-900 p-8 rounded-lg shadow-lg w-full max-w-md text-purple-300"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

        <label className="block mb-2 text-white" htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="w-full p-2 mb-4 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-purple-300"
        />

        <label className="block mb-2 text-white" htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="w-full p-2 mb-4 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-purple-300"
        />

        <label className="block mb-2 text-white" htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          className="w-full p-2 mb-4 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-purple-300"
        />

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
