import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-10 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600" 
                alt="About our team" 
                className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>

          <div>
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We translate your vision into reality.
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2024, NexusDev has quickly become a leading provider of digital solutions. Our team of expert developers and designers work tirelessly to ensure your digital presence stands out.
            </p>
            
            <div className="space-y-4">
              {['Innovative Strategies', 'Expert Team', '24/7 Support', 'Global Reach'].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle2 className="text-indigo-600 w-5 h-5 mr-3" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;