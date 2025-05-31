import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gray-900 py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 text-lg mb-4">Hi there! I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">John</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Doe</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
            Full-Stack Developer
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create exceptional digital experiences that are both beautiful and functional.
            Let's work together to bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-pink-600"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gray-800 text-white font-medium rounded-lg border border-purple-500/30 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;