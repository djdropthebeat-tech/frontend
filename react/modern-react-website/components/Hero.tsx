import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-indigo-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            Innovating the Future
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Masterpieces
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-xl text-gray-300 sm:mx-0 mb-8 leading-relaxed">
            We create responsive, high-performance websites that drive growth and engage users across all devices. Your vision, our code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1"
            >
              View Portfolio
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-500/50 text-base font-bold rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm group"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;