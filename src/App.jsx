import React, { useState, useEffect } from "react";
import {
  Instagram,
  Github,
  Linkedin,
  MessageCircle,
  Home,
  User,
  Briefcase,
  Mail,
  ExternalLink,
  YoutubeIcon
} from "lucide-react";

const Navigation = ({ activeScreen, setActiveScreen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveScreen(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar with Orange Circle */}
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none font-luckyguy">
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="pointer-events-auto bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-orange-600 transition-all"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Expanding Circle Background */}
      <div
        className={`fixed top-5 right-5 bg-orange-500 rounded-full transition-all duration-700 ease-in-out pointer-events-none ${
          menuOpen ? "w-[3000px] h-[3000px] z-40" : "w-10 h-10 -z-10"
        }`}
        style={{ transform: "translate(50%, -50%)" }}
      ></div>

      {/* Fullscreen Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-10 text-white text-3xl font-bold transition-opacity duration-700 pointer-events-auto">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center space-x-3 hover:text-black transition-all ${
                activeScreen === item.id ? "text-black" : ""
              }`}
              style={{
                animation: `fadeIn 0.3s ease ${index * 0.1 + 0.3}s forwards`,
                opacity: 0,
              }}
            >
              <item.icon size={30} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Keyframes for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </>
  );
};

// Social Links Component
const SocialLinks = () => {
  const socialLinks = [
    { icon: YoutubeIcon, color: "hover:bg-indigo-500", label: "Discord", url: "https://www.youtube.com/@MLSimplified-u2y" },
    { icon: Instagram, color: "hover:bg-pink-500", label: "Instagram", url: "https://www.instagram.com/mlsimplifiedbyyash/" },
    { icon: Github, color: "hover:bg-gray-700", label: "GitHub", url: "https://github.com/yasx50" },
    { icon: Linkedin, color: "hover:bg-blue-600", label: "LinkedIn", url: "https://www.linkedin.com/in/yash-yadav-y05/" },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-8">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className={`bg-white p-4 rounded-2xl transition-all ${social.color} hover:text-white transform hover:scale-110`}
          aria-label={social.label}
        >
          <social.icon size={28} strokeWidth={2.5} />
        </a>
      ))}
    </div>
  );
};

// Home Screen with Animations
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

// About Screen
const AboutScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-black text-black mb-8">
        ABOUT ME
      </h1>
      <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6 text-left transform hover:scale-105 transition-transform">
        <h2 className="text-3xl font-black text-black mb-4">WHO I AM</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          I'm Yash, a passionate creator focused on simplifying ML concepts
          through engaging content and projects.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-black text-orange-400 rounded-3xl p-8 transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-black mb-4">🎥 CONTENT CREATOR</h3>
          <p className="text-white">
            Breaking down complex ML concepts into simple educational content.
          </p>
        </div>
        <div className="bg-black text-orange-400 rounded-3xl p-8 transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-black mb-4">🤖 ML ENTHUSIAST</h3>
          <p className="text-white">
            Building real-world ML projects and sharing them via MLSimplified.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Projects Screen with 3 Projects
const ProjectsScreen = () => {
  const projects = [
    {
      title: "ML Tutorial Series",
      description: "Comprehensive machine learning tutorials covering fundamentals to advanced topics",
      tags: ["Python", "TensorFlow", "Scikit-learn"],
      link: "#"
    },
    {
      title: "AI Chatbot Project",
      description: "Building an intelligent chatbot using NLP and deep learning techniques",
      tags: ["NLP", "PyTorch", "Transformers"],
      link: "#"
    },
    {
      title: "Computer Vision App",
      description: "Real-time object detection and image classification application",
      tags: ["OpenCV", "YOLO", "Deep Learning"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-12 text-center">
          MY PROJECTS
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all hover:-rotate-1"
            >
              <h3 className="text-2xl font-black text-black mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center space-x-2 bg-black text-orange-400 px-4 py-2 rounded-xl font-black hover:bg-gray-800 transition-colors"
              >
                <span>VIEW PROJECT</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Screen with EmailJS Setup
const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  // ADD YOUR EMAILJS CREDENTIALS HERE
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Uncomment when you add EmailJS credentials
      // const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     service_id: EMAILJS_SERVICE_ID,
      //     template_id: EMAILJS_TEMPLATE_ID,
      //     user_id: EMAILJS_PUBLIC_KEY,
      //     template_params: formData
      //   })
      // });

      // if (response.ok) {
      //   setStatus("success");
      //   setFormData({ name: "", email: "", message: "" });
      // } else {
      //   setStatus("error");
      // }

      // Demo mode (remove when EmailJS is configured)
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pt-20 md:pt-24 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-8 text-center">
          CONTACT ME
        </h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-black font-black mb-2">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-black font-black mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-black font-black mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-500 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full bg-black text-orange-400 py-4 rounded-xl font-black text-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>
            
            {status === "success" && (
              <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold">
                Message sent successfully! ✓
              </div>
            )}
            
            {status === "error" && (
              <div className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-bold">
                Failed to send message. Please try again.
              </div>
            )}
          </div>
          
          <div className="mt-8 p-4 bg-orange-100 rounded-xl">
            <p className="text-sm text-gray-700 text-center">
              <strong>⚠️ EmailJS Setup Required:</strong> Replace the credentials at the top of ContactScreen component with your EmailJS service ID, template ID, and public key.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

// Main App
const App = () => {
  const [activeScreen, setActiveScreen] = useState("home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "about":
        return <AboutScreen />;
      case "projects":
        return <ProjectsScreen />;
      case "contact":
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="font-sans">
      <Navigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {renderScreen()}
    </div>
  );
};

export default App;