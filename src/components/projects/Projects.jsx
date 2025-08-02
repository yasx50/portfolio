import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  title,
  description,
  image,
  category,
  techIcons = [], // Array of imported icon components
  demoLink,
  githubLink,
}) => {
  return (
    <>
      <style jsx>{`
        @keyframes techmarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-techmarquee {
          animation: techmarquee 20s linear infinite;
        }
        
        .animate-techmarquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="relative bg-black border border-green-600 text-white my-10 h-auto md:h-40 w-[90%] md:w-2/3 flex items-center mx-auto overflow-hidden px-4 py-2 rounded-lg shadow-lg">
        
        {/* Left: Project Image (40%) */}
        <div className="w-[40%] h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        
        {/* Right: Details (60%) */}
        <div className="w-[60%] h-full p-4 flex flex-col justify-center relative">
          
          {/* Top Section - Title and Category */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg md:text-xl font-bold truncate flex-1 mr-3">{title}</h2>
            {/* Glowing Category Badge */}
            <div className="px-3 py-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full text-xs font-semibold shadow-lg shadow-orange-500/50 animate-pulse whitespace-nowrap">
              {category}
            </div>
          </div>
          
          {/* Description - Single Line */}
          <p className="text-sm text-gray-300 mb-3 line-clamp-1 overflow-hidden">
            {description}
          </p>
          
          {/* Bottom Section - Tech Stack and Action Links */}
          <div className="flex items-center justify-between">
            {/* Tech Stack Icons with Scrolling Effect - 30% of the 60% section */}
            {techIcons.length > 0 && (
              <div className="w-[30%] relative overflow-hidden bg-gray-900 rounded-lg p-1 border border-gray-700">
                <div className="flex animate-techmarquee space-x-3">
                  {/* First set of icons */}
                  {techIcons.map((IconComponent, idx) => (
                    <div key={`first-${idx}`} className="text-lg md:text-xl flex-shrink-0 hover:scale-110 transition-transform">
                      {IconComponent}
                    </div>
                  ))}
                  {/* Duplicate icons for seamless loop */}
                  {techIcons.map((IconComponent, idx) => (
                    <div key={`second-${idx}`} className="text-lg md:text-xl flex-shrink-0 hover:scale-110 transition-transform">
                      {IconComponent}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Action Links */}
            <div className="flex gap-3">
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 group"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="text-sm text-white group-hover:scale-110 transition-transform" />
                </a>
              )}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200 group"
                  title="GitHub Repository"
                >
                  <FaGithub className="text-sm text-white group-hover:scale-110 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;