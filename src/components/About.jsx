export const AboutScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-8 text-center">ABOUT ME</h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6">
          <h2 className="text-3xl font-black text-black mb-4">WHO I AM</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            I'm Yash, a passionate creator and builder focused on simplifying machine learning concepts
            through engaging content and practical applications. I believe in making complex technologies
            accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black text-orange-400 rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-black mb-4">🎥 CONTENT CREATOR</h3>
            <p className="text-white">Creating educational content that breaks down complex ML concepts into digestible pieces for learners at all levels.</p>
          </div>
          
          <div className="bg-black text-orange-400 rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-black mb-4">🤖 ML ENTHUSIAST</h3>
            <p className="text-white">Building practical machine learning solutions and sharing knowledge through the MLSimplified platform.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-black mb-4">SKILLS & EXPERTISE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Python', 'TensorFlow', 'React', 'Node.js', 'Docker', 'AWS'].map((skill, index) => (
              <div key={index} className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};