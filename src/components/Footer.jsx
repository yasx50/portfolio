import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black text-white sarpanch-regular flex items-center justify-between px-10 py-4">
      {/* Left green box */}
      <div className="w-20 h-10 bg-green-500"></div>
      
      {/* Center content */}
      <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
        <Star className="h-6 w-6" />
        <span>designed by @yash yadav</span>
      </div>
      
      {/* Empty right space to balance the layout */}
      <div className="w-20"></div>
    </div>
  );
};

export default Footer;