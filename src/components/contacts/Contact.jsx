import React from 'react';
import SocialLinks from '../SocialLinks'; // ✅ Now matches default export

const ContactScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-8 text-center">
          GET IN TOUCH
        </h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6">
          <h2 className="text-3xl font-black text-black mb-6">LET'S CONNECT!</h2>
          <p className="text-lg text-gray-800 mb-8">
            I'm always excited to collaborate on interesting projects or discuss new ideas. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-2xl border-4 border-orange-500 font-bold text-lg focus:outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-2xl border-4 border-orange-500 font-bold text-lg focus:outline-none focus:border-black"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-6 py-4 rounded-2xl border-4 border-orange-500 font-bold text-lg focus:outline-none focus:border-black resize-none"
            />
            <button className="w-full bg-black text-orange-400 py-4 rounded-2xl font-black text-xl hover:bg-gray-900 transform hover:scale-105 transition-all">
              SEND MESSAGE 🚀
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-black font-black text-xl mb-4">OR FIND ME ON</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
