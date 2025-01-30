import { FaReact, FaNode, FaJava, FaKey ,FaCode} from "react-icons/fa";

import { BiLogoMongodb, BiLogoFlask, BiLogoDjango } from "react-icons/bi";
import {
  SiFigma,
  SiExpress,
  SiNumpy,
  SiPandas,
  SiSpring,
  SiMysql,
  SiOracle,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiLinux,
  // SiVisualstudiocode, // Correct import
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <section id="about" className="">
        <div className="w-full font-dela min-h-screen bg-black text-purple-300 border-white border-1">
          <div className="all">
            <h2 className="text-4xl p-10 border-1 block">
              <b>Technical Expertise</b>
            </h2>

            {/* Flex container for the different sections */}
            <div className="flex flex-wrap items-start justify-center gap-4 mt-2">
              {/* Webdev section */}
              <div className="webdev border-2 p-5 rounded-2xl max-w-xs md:max-w-sm border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Mern Stack
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <BiLogoMongodb className="h-12 w-12 md:h-16 md:w-16 text-green-900 m-2" />
                  <SiExpress className="h-12 w-12 md:h-16 md:w-16 text-white m-2" />
                  <FaReact className="h-12 w-12 md:h-16 md:w-16 text-blue-500 m-2 animate-spin-slow" />
                  <FaNode className="h-12 w-12 md:h-16 md:w-16 text-green-500 m-2" />
                </div>
              </div>

              {/* Python section */}
              <div className="python border-2 p-5 rounded-2xl max-w-xs md:max-w-sm border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Python
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <BiLogoFlask className="h-12 w-12 md:h-16 md:w-16 text-green-900 m-2" />
                  <BiLogoDjango className="h-12 w-12 md:h-16 md:w-16 text-white m-2" />
                  <SiNumpy className="h-12 w-12 md:h-16 md:w-16 text-blue-500 m-2" />
                  {/* <SiPandas className="h-12 w-12 md:h-16 md:w-16 text-green-500 m-2" /> */}
                </div>
              </div>

              {/* Database section */}
              <div className="java border-2 p-5 rounded-2xl max-w-xs md:max-w-sm border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Database
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  {/* <SiSpring className="h-12 w-12 md:h-16 md:w-16 text-green-900 m-2" /> */}
                  <SiMysql className="h-12 w-12 md:h-16 md:w-16 text-white m-2" />
                  <SiOracle className="h-12 w-12 md:h-16 md:w-16 text-blue-500 m-2" />
                  <BiLogoMongodb className="h-12 w-12 md:h-16 md:w-16 text-green-900 m-2" />
                  {/* <ChatGptIcon className="h-12 w-12 md:h-16 md:w-16 text-green-900 m-2" /> */}
                </div>
              </div>

              {/* Additional skills section */}
              <div className="java border-2 p-5 rounded-2xl max-w-xs md:max-w-sm border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Additional Skills
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <SiLinux className="h-12 w-12 md:h-16 md:w-16 text-zinc-300 m-2" />
                  <SiBootstrap className="h-12 w-12 md:h-16 md:w-16 text-purple-300 m-2" />
                  <SiTailwindcss className="h-12 w-12 md:h-16 md:w-16 text-blue-400 m-2" />
                  <SiHtml5 className="h-12 w-12 md:h-16 md:w-16 m-2" />
                  <SiCss3 className="h-12 w-12 md:h-16 md:w-16 m-2" />
                </div>
              </div>

              {/* Tools section */}
              <div className="java border-2 p-5 rounded-2xl max-w-xs md:max-w-sm border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Tools
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                <img
        src="https://camo.githubusercontent.com/3083bb2a86bf87e14fd25feb6fa77f609c4ae32d0d50fe87610b4fd612a038cf/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7673636f6465"
        alt="VS Code"
        width={50} // You can adjust the size
      />
                  <SiGit className="h-12 w-12 md:h-16 md:w-16 text-purple-300 m-2" />
                  <SiFigma className="h-12 w-12 md:h-16 md:w-16 text-purple-300 m-2" />
                  <SiGithub className="h-12 w-12 md:h-16 md:w-16 text-zinc-300 m-2" />
                  <SiPostman className="h-12 w-12 md:h-16 md:w-16 text-orange-400 m-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;