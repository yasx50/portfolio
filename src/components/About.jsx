import { FaReact, FaNode, FaJava, FaKey, FaCode } from "react-icons/fa";
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

            {/* Grid container for the different sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {/* Webdev section */}
              <div className="webdev border-2 p-5 rounded-2xl border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Mern Stack
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" alt="" />
                </div>
              </div>

              {/* Python section */}
              <div className="python border-2 p-5 rounded-2xl border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Python
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <img src="https://skillicons.dev/icons?i=python,django,flask" alt="python" />
                </div>
              </div>

              {/* Database section */}
              <div className="java border-2 p-5 rounded-2xl border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Database
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <img src="https://skillicons.dev/icons?i=mongodb,postgres,mysql" alt="databases" />
                </div>
              </div>

              {/* Additional skills section */}
              <div className="java border-2 p-5 rounded-2xl border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Additional Skills
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <img src="https://skillicons.dev/icons?i=html,css,javascript,typescript,bootstrap,tailwind,linux
" alt="" />
                </div>
              </div>

              {/* Tools section */}
              <div className="java border-2 p-5 rounded-2xl border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                  Tools
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <img src="https://skillicons.dev/icons?i=vscode,postman,git,github,figma
" alt="tools" />
                </div>
              </div>
              {/*Currently Exploring */}
              <div className="java border-2 p-5 rounded-2xl border-zinc-900">
                <h2 className="text-rose-400 text-center text-2xl mt-2 p-2 bg-zinc-800 border-2 rounded-md border-zinc-900">
                Currently Exploring
                </h2>
                <div className="logos flex flex-wrap justify-center mt-4">
                  <img src="https://skillicons.dev/icons?i=nextjs,svelte,docker
" alt="tools" />
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