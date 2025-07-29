import React from 'react';

const Main = () => {
  return (
    <>
      <div className="rounded rounded-tr-lg rounded-br-lg  relative text-red-600 sarpanch-regular my-10  border-red-700 border-2 h-20 w-2/3 flex items-center justify-center mx-auto overflow-visible">
        <div className="text m-4 text-4xl text-left flex justify-center items-center">
          building ML Simplified
        </div>
        <img
          src="progress.png"
          alt="image"
          className=" rounded absolute right-[-30px] h-[55px] w-auto   border-red-700 border-2"
        />
      </div>
    </>
  );
};

export default Main;
