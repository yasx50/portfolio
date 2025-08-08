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
    <div className="relative sarpanch-regular bg-black border border-red-600 text-white mt-10 h-auto md:h-40 w-[90%] md:w-2/3 flex items-center mx-auto overflow-hidden px-4 py-2 rounded-lg shadow-lg">

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
          <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-red-500 rounded-full text-xs font-semibold shadow-lg shadow-green-500/50 animate-pulse whitespace-nowrap text-black">
            {category}
          </div>
        </div>

        {/* Description - Single Line */}
        <p className="text-sm text-gray-300 mb-3 line-clamp-1 overflow-hidden">
          {description}
        </p>

        {/* Bottom Section - Tech Stack and Action Links */}
        <div className="flex items-center justify-between">
          {/* Tech Stack Icons - Static Display */}
          {techIcons.length > 0 && (
            <div className="w-[30%] relative bg-gray-900 rounded-lg p-2 border border-gray-700">
              <div className="flex space-x-2 justify-center">
                {/* Display first 4 icons statically */}
                {techIcons.slice(0, 4).map((IconComponent, idx) => (
                  <div key={idx} className="text-lg md:text-xl flex-shrink-0 hover:scale-110 transition-transform">
                    {IconComponent}
                  </div>
                ))}
                {/* Show +N if more than 4 icons */}
                {techIcons.length > 4 && (
                  <div className="text-xs text-gray-400 flex items-center">
                    +{techIcons.length - 4}
                  </div>
                )}
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
  );
};

export default ProjectCard;
