import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaDocker,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiLangchain,
  SiRender,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si';

const Skills_Icon = () => {
  const icons = [
    <FaReact />,
    <SiExpress />,
    <FaNodeJs />,
    <SiMongodb />,
    <FaPython />,
    <SiFastapi />,
    <SiFlask />,
    <SiMysql />,
    <SiLangchain />,
    <SiRender />,
    <FaGitAlt />,
    <SiNumpy />,
    <SiPandas />,
    <SiScikitlearn />,
    <SiTensorflow />,
    <SiPytorch />,
    <FaDatabase />,
    <FaDocker />,
  ];

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="rounded relative my-10 border-red-700 border-2 h-auto md:h-20 w-[90%] md:w-2/3 flex items-center mx-auto overflow-hidden px-4 py-2 rounded-tr-lg rounded-br-lg bg-black">
        {/* Moving Icons Container */}
        <div className="flex animate-marquee space-x-10 text-white text-3xl md:text-4xl">
          {/* First set of icons */}
          {icons.map((Icon, index) => (
            <div key={index} className="hover:text-red-700 flex-shrink-0 mr-10">{Icon}</div>
          ))}
          {/* Second set of icons for seamless loop */}
          {icons.map((Icon, index) => (
            <div key={`duplicate-${index}`} className="hover:text-yellow-400 flex-shrink-0 mr-10">{Icon}</div>
          ))}
        </div>

        {/* Decorative Image on Left - 50% inside and 50% outside */}
        <img
          src="progress.png"
          alt="progress"
          className="absolute  top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[45px] md:h-[55px] w-auto border-red-700 border-2 rounded-full bg-black"
        />
      </div>
    </>
  );
};

export default Skills_Icon;
 