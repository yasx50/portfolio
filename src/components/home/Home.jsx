import { useState, useEffect } from "react";
import  SocialLinks  from "../SocialLinks.jsx";
const HomeScreen = () => {
  const [float, setFloat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloat((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const floatY = Math.sin(float * 0.05) * 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-black opacity-5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-md w-full text-center relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <h1 className="text-7xl md:text-8xl font-black text-black animate-pulse">HI</h1>
          <span className="text-6xl animate-bounce">👋</span>
        </div>
        
        <div 
          className="bg-white rounded-3xl p-2 mb-8 shadow-2xl transform transition-transform hover:scale-105"
          style={{ transform: `translateY(${floatY}px)` }}
        >
          <img src="ghibli.png" alt="Yash" className="w-full rounded-2xl" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-black mb-4 animate-pulse">
          THIS IS YASH
        </h2>
        
        <div className="flex items-center justify-center space-x-3 mb-8">
          <a href="https://www.youtube.com/@MLSimplified-u2y" className="transform hover:scale-110 transition-transform">
            <img className="w-12 mix-blend-multiply" src="ytt.jpeg" alt="" />
          </a>
          <h3 className="text-3xl md:text-4xl font-black text-black">
            BUILDING
            <br />
            MLSIMPLIFIED
          </h3>
          <a href="https://www.youtube.com/@MLSimplified-u2y" className="transform hover:scale-110 transition-transform">
            <img className="w-12 mix-blend-multiply" src="trophy.jpeg" alt="" />
          </a>
        </div>

        <div className="space-y-3 mb-8">
          {[
            "✨ CONTENT CREATION",
            "🤖 MACHINE LEARNING",
            "💻 WEB DEVELOPMENT",
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-black text-orange-400 py-3 px-6 rounded-2xl font-black text-xl text-center transform transition-all hover:scale-105 ${
                i % 2 ? "rotate-1 hover:rotate-2" : "-rotate-1 hover:-rotate-2"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <SocialLinks />

        <p className="text-center text-black font-black text-sm mt-8">
          ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};
export default HomeScreen;