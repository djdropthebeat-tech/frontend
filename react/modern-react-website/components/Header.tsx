import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for navbar and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with offset for header)
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }
      
      // Default to home if at very top
      if (window.scrollY < 50) {
        currentSection = 'home';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses = (href: string) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;
    const baseClasses = "text-sm font-medium transition-colors duration-300 relative group";
    
    // Dynamic text colors based on scroll state and active state
    if (isScrolled) {
      return `${baseClasses} ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`;
    } else {
      return `${baseClasses} ${isActive ? 'text-white' : 'text-gray-200 hover:text-white'}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg text-white transition-colors duration-300 ${isScrolled ? 'bg-indigo-600' : 'bg-indigo-600/80 backdrop-blur-sm'}`}>
              <Code2 size={24} />
            </div>
            <a href="#home" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Nexus<span className="text-indigo-400">Dev</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={navLinkClasses(item.href)}
              >
                {item.label}
                {/* Animated underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-indigo-600' : 'bg-white'} ${activeSection === item.href.substring(1) ? 'w-full' : 'w-0'}`}></span>
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-white text-indigo-600 hover:bg-gray-100'
              }`}
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-lg font-medium border-b border-gray-100 pb-2 ${activeSection === item.href.substring(1) ? 'text-indigo-600' : 'text-gray-800 hover:text-indigo-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;