import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Home from './components/home/Home';
import Project from './components/projects/Project';
import Contact from './components/contacts/Contact';
import Footer from './components/Footer';

const ScrollToContact = ({ contactRef }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, contactRef]);

  return null;
};

const MainLayout = () => {
  const contactRef = useRef(null);

  return (
    <>
      <ScrollToContact contactRef={contactRef} />
      <Home />
      <Project />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/contact" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

// Separate full-page project route (can customize this component as needed)
const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-black text-white ">
      <Project />
    </div>
  );
};

export default App;
