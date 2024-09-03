import { FaReact, FaNode } from "react-icons/fa";
import { BiLogoMongodb,BiLogoFlask,BiLogoDjango } from "react-icons/bi";
import { SiExpress,SiNumpy,SiPandas,SiSpring ,SiMysql, SiOracle ,SiCss3, SiHtml5, SiTailwindcss, SiBootstrap, SiLinux,SiVisualstudiocode, SiPostman, SiGit, SiGithub  } from "react-icons/si";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="w-full min-h-screen bg-black text-purple-300  border-white border-1">
          <div className="all">
            <h2 className="text-4xl  p-10 border-1 block animate-pulse">
              Technical Expertise
            </h2>

            {/* Flex container for the webdev, python, and java sections */}
            <div className="flex flex-row flex-wrap items-start justify-center space-x-4 mt-5">
              {/* Webdev section */}
              <div className="webdev border-2 inline-block p-5 rounded-2xl">
                <h2 className="text-rose-400 text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md inline-block">
                  Mern Stack
                </h2>
                <div className="logos flex flex-row items-center mt-4">
                  <BiLogoMongodb className="h-20 w-20 text-green-900 ml-2" />
                  <SiExpress className="h-20 w-20 text-white ml-5" />
                  <FaReact className="h-20 w-20 text-blue-500 ml-5 animate-spin-slow" />
                  <FaNode className="h-20 w-20 text-green-500 ml-5" />
                </div>
              </div>

              {/* Python section */}
              <div className="python border-2 inline-block p-5 rounded-2xl">
                <h2 className="text-rose-400 text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md inline-block">
                  Python
                </h2>
                <div className="logos flex flex-row items-center mt-4">
                  {/* Replace these icons with relevant Python stack icons */}
                  <BiLogoFlask className="h-20 w-20 text-green-900 ml-2" />
                  <BiLogoDjango className="h-20 w-20 text-white ml-5" />
                  <SiNumpy className="h-20 w-20 text-blue-500 ml-5 " />
                  {/* <SiPandas className="h-20 w-20 text-green-500 ml-5" /> */}
                </div>
              </div>

              {/* database section */}
              <div className="java border-2 inline-block p-5 rounded-2xl">
                <h2 className="text-rose-400 text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md inline-block">
                  Database
                </h2>
                <div className="logos flex flex-row items-center mt-4">
                  {/* Replace these icons with relevant Java stack icons */}
                  {/* <SiSpring  className="h-20 w-20 text-green-900 ml-2" /> */}
                  <SiMysql className="h-20 w-20 text-white ml-5" />
                  <SiOracle className="h-20 w-20 text-blue-500 ml-5 " />
                  <BiLogoMongodb className="h-20 w-20 text-green-900 ml-2" />

                </div>
              </div>
              {/* additional skills  section */}
              <div className="java border-2 inline-block p-5 rounded-2xl mt-5">
                <h2 className="text-rose-400 text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md inline-block">
                additional skills 
                </h2>
                <div className="logos flex flex-row items-center mt-4">
                  {/* Replace these icons with relevant Java stack icons */}
                  {/* <SiSpring  className="h-20 w-20 text-green-900 ml-2" /> */}
                  <SiLinux className="h-20 w-20 text-zinc-300 ml-5" />
                  <SiBootstrap className="h-20 w-20 text-purple-300 ml-5 " />
                  <SiTailwindcss className="h-20 w-20 text-blue-400 ml-2" />
                  <SiHtml5 className="h-20 w-20  ml-2" />
                  <SiCss3 className="h-20 w-20 ml-2" />

                </div>
              </div>
              {/* tools skills  section */}
              <div className="java border-2 inline-block p-5 rounded-2xl mt-5">
                <h2 className="text-rose-400 text-2xl mt-5 p-3 bg-zinc-800 border-2 rounded-md inline-block">
                Tools
                </h2>
                <div className="logos flex flex-row items-center mt-4">
                  {/* Replace these icons with relevant Java stack icons */}
                  {/* <SiSpring  className="h-20 w-20 text-green-900 ml-2" /> */}
                  <SiVisualstudiocode className="h-20 w-20  text-blue-600 ml-2" />
                  <SiGit className="h-20 w-20 text-purple-300 ml-5 " />
                  <SiGithub className="h-20 w-20 text-zinc-300 ml-5" />
                  <SiPostman className="h-20 w-20 text-orange-400 ml-2" />
                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
