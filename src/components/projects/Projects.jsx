// NetflixCard.jsx
import React from 'react';
import netflixLogo from '../../assets/advanced.jpg'; // Update this path as needed

const Projects = () => {
  return (
    <div className="relative w-2/3 bg-black border border-green-600 flex overflow-hidden rounded-lg shadow-lg mx-auto">
      {/* Left Section (30%) */}
      <div className="w-[30%] bg-black border-r border-blue-500 flex items-center justify-center relative z-10">
        <img
          src={netflixLogo}
          alt="Netflix Logo"
          className="h-32 object-contain -ml-10"
        />
      </div>

      {/* Right Section (70%) */}
      <div className="w-[70%] text-white p-6">
        <h2 className="text-2xl font-bold">Project Title</h2>
        <p className="mt-2 text-sm">
          This is a brief description of your project. You can showcase what tech you used, what the project does, or its purpose.
        </p>
      </div>
    </div>
  );
};

export default Projects;
