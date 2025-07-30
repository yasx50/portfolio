import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black w-full h-16 flex items-center justify-between px-6 md:px-10 relative border- border-red-700">
        
        {/* Left: Red Box (Toggle button on mobile) */}
        <div
          className="h-10 w-20 bg-successGreen flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-white font-bold"></span>
        </div>

        {/* Center: Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex text-zinc-500 text-lg md:text-2xl space-x-6 sarpanch-regular">
          <p className="hover:text-red-700 cursor-pointer">home</p>
          <p className="hover:text-red-700 cursor-pointer">projects</p>
          <p className="hover:text-red-700 cursor-pointer">contact</p>
        </div>

        {/* Right: YASH */}
        <div className="text-white silkscreen-regular text-2xl md:text-3xl">
          YASH
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-b-2 border-red-700 text-zinc-500 text-lg space-y-3 p-4 sarpanch-regular">
          <p className="hover:text-red-700 cursor-pointer">home</p>
          <p className="hover:text-red-700 cursor-pointer">projects</p>
          <p className="hover:text-red-700 cursor-pointer">contact</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
