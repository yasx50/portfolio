import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter   } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  

  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
