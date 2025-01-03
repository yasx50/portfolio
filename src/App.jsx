import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter   } from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import AllProjects from './components/AllProjects';
import MainPage from './components/MainPage';


function App() {
  

  return (
  <>
 <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="/projects" element={<AllProjects />} />
        
      </Routes>
    </BrowserRouter>
    </>


  )
}

export default App
