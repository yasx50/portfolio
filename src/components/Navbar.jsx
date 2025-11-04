import React, { useState } from "react";
import {
  AiFillHome,
} from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const Navigation = ({ activeScreen, setActiveScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Circle Button */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-5 right-5 z-50 w-10 h-10 bg-orange-500 rounded-full cursor-pointer flex items-center justify-center transition-all duration-700 hover:bg-orange-600"
      >
        {!isMenuOpen ? (
          <span className="text-white text-xl">☰</span>
        ) : (
          <span className="text-white text-xl">✕</span>
        )}
      </div>

      {/* Expanding Circle Background */}
      <div
        className={`fixed top-5 right-5 bg-orange-500 rounded-full z-40 transition-all duration-700 ease-in-out ${
          isMenuOpen ? "w-[3000px] h-[3000px]" : "w-10 h-10"
        }`}
        style={{ transform: "translate(50%, -50%)" }}
      ></div>

      {/* Fullscreen Menu Content */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-10 text-white text-3xl font-bold transition-opacity duration-700">
          <button
            onClick={() => {
              setActiveScreen("home");
              setIsMenuOpen(false);
            }}
            className={`flex items-center space-x-3 hover:text-black ${
              activeScreen === "home" ? "text-black" : ""
            }`}
          >
            <AiFillHome size={30} />
            <span>Home</span>
          </button>

          <button
            onClick={() => {
              setActiveScreen("about");
              setIsMenuOpen(false);
            }}
            className={`flex items-center space-x-3 hover:text-black ${
              activeScreen === "about" ? "text-black" : ""
            }`}
          >
            <BsFillPersonFill size={30} />
            <span>About</span>
          </button>

          <button
            onClick={() => {
              setActiveScreen("projects");
              setIsMenuOpen(false);
            }}
            className={`flex items-center space-x-3 hover:text-black ${
              activeScreen === "projects" ? "text-black" : ""
            }`}
          >
            <BsFillBriefcaseFill size={30} />
            <span>Projects</span>
          </button>

          <button
            onClick={() => {
              setActiveScreen("contact");
              setIsMenuOpen(false);
            }}
            className={`flex items-center space-x-3 hover:text-black ${
              activeScreen === "contact" ? "text-black" : ""
            }`}
          >
            <BsFillEnvelopeFill size={30} />
            <span>Contact</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
