import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteer from './components/Volunteer';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Always start in dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Volunteer />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;