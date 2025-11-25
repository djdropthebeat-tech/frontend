import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
              <Code2 size={20} />
            </div>
            <span className="text-xl font-bold">NexusDev</span>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} NexusDev. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;