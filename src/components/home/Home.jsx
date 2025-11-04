import SocialLinks from '../SocialLinks'; // ✅ Now matches default export
const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <h1 className="text-7xl md:text-8xl font-black text-black">HI</h1>
            <span className="text-6xl animate-bounce">👋</span>
          </div>
          <div className="bg-white rounded-3xl p-2 mb-8 shadow-2xl">
            <img
              src="/api/placeholder/300/300"
              alt="Yash"
              className="w-full rounded-2xl"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">THIS IS YASH</h2>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-red-500 p-3 rounded-xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-black">
              BUILDING<br/>MLSIMPLIFIED
            </h3>
            <div className="text-5xl">🏆</div>
          </div>
        </div>
        
        <div className="space-y-3 mb-8">
          <div className="bg-black text-orange-400 py-3 px-6 rounded-2xl font-black text-xl text-center transform -rotate-1">
            ✨ CONTENT CREATION
          </div>
          <div className="bg-black text-orange-400 py-3 px-6 rounded-2xl font-black text-xl text-center transform rotate-1">
            🤖 MACHINE LEARNING
          </div>
          <div className="bg-black text-orange-400 py-3 px-6 rounded-2xl font-black text-xl text-center transform -rotate-1">
            💻 WEB DEVELOPMENT
          </div>
        </div>

        <SocialLinks />

        <p className="text-center text-black font-black text-sm mt-8">
          ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};
export {

HomeScreen
} 