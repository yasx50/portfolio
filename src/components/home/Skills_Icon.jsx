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
      
      <div className="relative my-10 border-red-700 border h-auto md:h-20 w-[90%] md:w-2/3 flex items-center mx-auto overflow-hidden px-4 py-2 rounded bg-black">
        {/* Moving Icons Container */}
        <div className="flex animate-marquee space-x-10 text-3xl md:text-4xl">
          {/* First set of icons */}
          <div className="text-blue-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaReact /></div>
          <div className="text-gray-300 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiExpress /></div>
          <div className="text-green-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaNodeJs /></div>
          <div className="text-green-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiMongodb /></div>
          <div className="text-yellow-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaPython /></div>
          <div className="text-teal-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiFastapi /></div>
          <div className="text-gray-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiFlask /></div>
          <div className="text-blue-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiMysql /></div>
          <div className="text-purple-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiLangchain /></div>
          <div className="text-purple-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiRender /></div>
          <div className="text-orange-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaGitAlt /></div>
          <div className="text-blue-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiNumpy /></div>
          <div className="text-yellow-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiPandas /></div>
          <div className="text-orange-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiScikitlearn /></div>
          <div className="text-orange-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiTensorflow /></div>
          <div className="text-red-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiPytorch /></div>
          <div className="text-blue-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaDatabase /></div>
          <div className="text-blue-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaDocker /></div>
          
          {/* Second set of icons for seamless loop */}
          <div className="text-blue-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaReact /></div>
          <div className="text-gray-300 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiExpress /></div>
          <div className="text-green-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaNodeJs /></div>
          <div className="text-green-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiMongodb /></div>
          <div className="text-yellow-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaPython /></div>
          <div className="text-teal-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiFastapi /></div>
          <div className="text-gray-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiFlask /></div>
          <div className="text-blue-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiMysql /></div>
          <div className="text-purple-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiLangchain /></div>
          <div className="text-purple-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiRender /></div>
          <div className="text-orange-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaGitAlt /></div>
          <div className="text-blue-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiNumpy /></div>
          <div className="text-yellow-600 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiPandas /></div>
          <div className="text-orange-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiScikitlearn /></div>
          <div className="text-orange-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiTensorflow /></div>
          <div className="text-red-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><SiPytorch /></div>
          <div className="text-blue-400 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaDatabase /></div>
          <div className="text-blue-500 hover:scale-110 transition-transform flex-shrink-0 mr-10"><FaDocker /></div>
        </div>

        {/* Decorative Element on Right Border */}
        
        
      </div>
    </>
  );
};

export default Skills_Icon;