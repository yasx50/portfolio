import React from 'react';

const Details = () => {
  return (
    <>
      <div className="details border-red-700 border-2 h-[50vh] w-2/3 m-4 flex flex-col justify-between relative mx-auto overflow-visible px-4 py-4  rounded rounded-tr-lg rounded-br-lg">
        
        {/* ⬆️ Top Row: Combined Left + Right */}
        <div className="flex justify-between items-center w-full">
          {/* Left (Image) */}
          <div className="b border-red-700 border-2 w-[35vh] h-[30vh]">
            <img src="/yashpro.jpg" alt="ML Visual" className="w-full h-full object-fill" />
          </div>
          
          {/* Right (Text) */}
          <div className=" border-red-700 border-2 bg-black h-[30vh] text-zinc-500 sarpanch-regular text-2xl p-10 w-[70%] relative right-[-4%] rounded rounded-tr-lg rounded-br-lg">
            I'm Yash Yadav, a Computer Science student from Mumbai, Maharashtra, and a passionate full-stack developer dedicated to building clean, user-focused digital solutions.
          </div>
        </div>

        {/* ⬇️ Bottom Row: AlgoArtist + Tagline */}
        <div className="flex justify-between items-center w-full mt-4">
          {/* Left (AlgoArtist Text) */}
          <div className="text-4xl silkscreen-regular pl-2 w-32 text-red-600 h-20 flex items-center">
            AlgoArtist
          </div>

          {/* Right (Tagline) */}
          <div className=" border-red-700 border-2 bg-black h-20 text-zinc-500 sarpanch-regular text-2xl pl-10 pt-5 w-[70%] relative right-[-4%] rounded rounded-tr-lg rounded-br-lg">
            ML experts who also build beautiful web UIs.
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
