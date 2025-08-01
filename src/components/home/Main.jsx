import React from 'react';

const Details = () => {
  return (
    <>
      <div className=" rounded  bg-black border border-green-600 h-auto md:h-[50vh] w-[90%] md:w-2/3 m-4 flex flex-col justify-between relative mx-auto overflow-hidde px-4 py-4 rounded-tr-lg rounded-br-lg">
        
        {/* ⬆️ Top Row: Combined Left + Right */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          {/* Left (Image) */}
          <div className="border-red-700 border-2 rounded w-full md:w-[35vh] h-[30vh]">
            <img src="/pfp.jpg" alt="ML Visual" className="w-full h-full object-fill rounded" />
          </div>

          {/* Right (Text) */}
          <div className="border-red-700 border rounded   bg-black h-auto md:h-[30vh] text-zinc-400 sarpanch-regular text-lg md:text-2xl p-6 md:p-10 w-full md:w-[70%] md:relative md:right-[-4%] rounded-tr-lg rounded-br-lg">
            I'm Yash Yadav, a Computer Science student from Mumbai, Maharashtra, and a passionate full-stack developer dedicated to building clean, user-focused digital solutions.
          </div>
        </div>

        {/* ⬇️ Bottom Row: AlgoArtist + Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 gap-4">
          {/* Left (AlgoArtist Text) */}
          <div className="text-3xl md:text-4xl silkscreen-regular pl-2 w-full md:w-32 text-white h-20 flex items-center">
            AlgoArtist
          </div>

          {/* Right (Tagline) */}
          <div className="border-red-700 border rounded bg-black h-auto md:h-20 text-zinc-400 sarpanch-regular text-lg md:text-2xl pl-6 pt-4 md:pl-10 md:pt-5 w-full md:w-[70%] md:relative md:right-[-4%] rounded-tr-lg rounded-br-lg">
            ML experts who also build beautiful web UIs.
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
