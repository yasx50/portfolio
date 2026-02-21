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
import ContactScreen from "./components/contacts/Contact";
import HomeScreen from "./components/home/Home";
import AboutScreen from "./components/about/about";
import ProjectsScreen from "./components/projects/Project";

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

      {/* Fixed Navbar with Orange Circle - MOVED TO END with higher z-index */}
      <nav className="fixed top-0 left-0 right-0 z-[60] pointer-events-none font-luckyguy">
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="pointer-events-auto bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-orange-600 transition-all"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

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