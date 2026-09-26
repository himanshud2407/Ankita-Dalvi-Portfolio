import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import GitHub from './components/sections/GitHub';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-bg text-fg min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <GitHub />
      </main>
      <Footer />
    </div>
  );
}

export default App;
