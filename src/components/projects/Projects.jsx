import React from 'react';

const ProjectCard = () => {
  return (
    <div className="relative bg-black border text-white my-10 border-green-600 h-auto md:h-40 w-[90%] md:w-2/3 flex items-center justify-center mx-auto overflow-hidden px-4 py-2 rounded-lg shadow-lg">
      
      {/* Left Section (30%) - Full Height and Width */}
      <div className="w-[30%] h-full bg-black border-r border-blue-500 flex items-center justify-center z-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-2xl">LOGO</span>
        </div>
      </div>
      
      {/* Right Section (70%) */}
      <div className="w-[70%] p-4 flex flex-col justify-between h-full">
        {/* Top Section - Title and Category */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold truncate flex-1 mr-4">E-Commerce Platform</h2>
          {/* Glowing Category Badge */}
          <div className="px-3 py-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full text-xs font-semibold shadow-lg shadow-orange-500/50 animate-pulse glow-effect">
            FinTech
          </div>
        </div>
        
        {/* Description - Single Line */}
        <p className="text-sm text-gray-300 mb-3 line-clamp-1 overflow-hidden">
          A comprehensive financial platform with payment processing and analytics dashboard
        </p>
        
        {/* Tech Stack with Moving Icons */}
        <div className="relative overflow-hidden bg-gray-900 rounded-lg p-2 border border-gray-700">
          <div className="flex animate-pulse space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xs font-bold">R</span>
              </div>
              <span className="text-xs">React</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-xs font-bold">N</span>
              </div>
              <span className="text-xs">Node</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                <span className="text-xs font-bold">M</span>
              </div>
              <span className="text-xs">Mongo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;