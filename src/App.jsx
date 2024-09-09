import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter   } from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  

  return (<>

    
    <Home />
    <About />
    <Projects />
    <Contact />
    </>


  )
}

export default App
