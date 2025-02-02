import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import VtoA from "../assets/vta2.jpg";
import Scrapping from "../assets/Scraping.png";
import gaming from "../assets/gameDev.png";
import { Link } from "react-router-dom";
import websummarizer from "../assets/web summarizer.png";
import hospital_management from "../assets/food_management.png";
import location from "../assets/location.png";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="w-full font-dela min-h-screen bg-black text-purple-300 border-white border-1">
          <h1 className="text-4xl p-10 mb-6 text-left">
            <b>Projects</b>
          </h1>

          <div className="flex flex-col items-center justify-center gap-10 p-5">
            {/* Web Summarizer Project */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={websummarizer}
                  alt="ChatScrape"
                  className="h-40 w-full rounded-2xl object-fill"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">ScrapeGPT</h2>
                <p className="text-left mb-4">
                  An AI-powered tool that instantly summarizes websites for quick and easy insights.
                </p>
                <a
                  href="https://scrapegpt-bice.vercel.app/"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGlobe />
                  <b>Use ScrapeGPT</b>
                </a>
              </div>
            </div>

          

            {/* Hospital Food Management System Project */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={hospital_management}
                  alt="HealthPlate Manager"
                  className="h-40 w-full rounded-2xl object-fill"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">HealthPlate Manager</h2>
                <p className="text-left mb-4">
                  Streamline hospital meal planning and staff management with a smart food management system.
                </p>
                <a
                  href="https://hospital-food-management-system-1.onrender.com/"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGlobe />
                  <b>Manage HealthPlates</b>
                </a>
              </div>
            </div>

            {/* GeoQuest Location Game */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={location}
                  alt="GeoQuest"
                  className="h-40 w-full rounded-2xl object-fill"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">GeoQuest</h2>
                <p className="text-left mb-4">
                  A smart mapping tool for effortless exploration and location discovery.
                </p>
                <a
                  href="https://optacloud-1.onrender.com/"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGlobe />
                  <b>Find Your Way</b>
                </a>
              </div>
            </div>

            {/* All Projects Button */}
            <div className="flex justify-end items-center p-10">
              <Link
                to="/projects"
                className="flex items-center gap-2 bg-black border-2 border-zinc-900 text-purple-300 px-6 py-2 rounded-full hover:bg-zinc-900 transition-all"
              >
                <b>View All Projects</b>
                <FaAnglesRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
