import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaAnglesRight,FaAnglesLeft } from "react-icons/fa6";
import VtoA from "../assets/vta2.jpg";
import Scrapping from "../assets/Scraping.png";
import gaming from "../assets/gameDev.png";
import websummarizer from "../assets/web summarizer.jpg";
import location from "../assets/location.jpg";
import treanding from "../assets/treanding.jpg";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Projects = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back to home page click
  const goToHomePage = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      <section id="projects">
        <div className="w-full font-dela min-h-screen bg-black text-purple-300 border-white border-1">
          {/* Back to Home Page Button */}
          

          <h1 className=" items-center  gap-5 text-4xl p-10 -b-2 mb-6 text-center">
          <button
            onClick={goToHomePage} // Add click event to go back to the home page
            className=" flex text-purple-300  items-center text-center  mr-5 border-zinc-900 animate-pulse "
          >
           <FaAnglesLeft/>
          </button>
            <b>Explore My Portfolio of Projects</b>
          </h1>

          <div className="all flex flex-col items-center justify-center gap-10 p-5">
            {/* Web Summarizer Project */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="image md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={websummarizer}
                  alt="ChatScrape"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">ChatScrape</h2>
                <p className="text-left mb-4">
                  An AI-powered tool that instantly summarizes websites for quick and easy insights.
                </p>
                <a
                  href="https://scrapegpt-bice.vercel.app/"
                  className="flex justify-center md:justify-start items-center  gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGlobe />
                  <b>Use ChatScrape</b>
                </a>
              </div>
            </div>

            {/* Balloon Pop Frenzy Game */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="image md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={gaming}
                  alt="Balloon Pop Frenzy Game"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Balloon Pop Frenzy</h2>
                <p className="text-left mb-4">
                  A fun game built with Phaser.js where players fill and pop balloons. Try it out!
                </p>
                <a
                  href="https://idz-digital-private-limited-f459.onrender.com/"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGlobe />
                  <b>Play The Game</b>
                </a>
              </div>
            </div>

            {/* Video To Audio Project */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="image md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={VtoA}
                  alt="Video To Audio project"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Video To Audio</h2>
                <p className="text-left mb-4">
                  Extract audio from videos for podcasts, transcription, or any other use case with ease using this tool.
                </p>
                <a
                  href="https://github.com/yasx50/converting-video-to-audio"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGithub />
                  <b>Get Source Code</b>
                </a>
              </div>
            </div>

            {/* Scraping Project */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="image md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={Scrapping}
                  alt="Scraping project"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Scraping The Data</h2>
                <p className="text-left mb-4">
                  Learn how to extract data from websites using Flask and BeautifulSoup with this web scraping tool.
                </p>
                <a
                  href="https://github.com/yasx50/vpnDigitalsServices"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGithub />
                  <b>Get Source Code</b>
                </a>
              </div>
            </div>

            {/* GeoQuest Location Game */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="image md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={location}
                  alt="GeoQuest"
                  className="h-40 w-full rounded-2xl object-cover"
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

            {/* TrendPulse Twitter Automation */}
            <div className="flex flex-col md:flex-row items-center md:items-start border-2 border-zinc-900 rounded-2xl w-full max-w-4xl p-4">
              <div className="image md:w-1/2 w-full mb-4 md:mb-0">
                <img
                  src={treanding}
                  alt="TrendPulse"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full md:px-8 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">TrendPulse</h2>
                <p className="text-left mb-4">
                  A Python automation tool that captures the 5 most trending topics on Twitter using Selenium.
                </p>
                <a
                  href="https://stir-o1w7.onrender.com"
                  className="flex justify-center md:justify-start items-center gap-3 border-2 border-zinc-900 rounded-md px-4 py-2 hover:bg-zinc-900 transition-all"
                >
                  <FaGlobe />
                  <b>View Trending Now</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
