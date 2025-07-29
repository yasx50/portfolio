import React from 'react';

const Main = () => {
  return (
    <>
      <div className=" rounded relative text-red-600 sarpanch-regular my-10 border-red-700 border-2 h-auto md:h-20 w-[90%] md:w-2/3 flex items-center justify-center mx-auto overflow-visible px-4 py-2 rounded-tr-lg rounded-br-lg">
        
        {/* Headline */}
        <div className="text text-2xl md:text-4xl text-left flex justify-center items-center">
          building ML Simplified
        </div>
        
        {/* Decorative Image */}
        <img
          src="progress.png"
          alt="image"
          className="absolute right-[-20px] md:right-[-30px] h-[45px] md:h-[55px] w-auto border-red-700 border-2 rounded-full"
        />
      </div>
    </>
  );
};

export default Main;
