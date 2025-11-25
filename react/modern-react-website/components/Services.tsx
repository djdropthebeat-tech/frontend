import React from 'react';
import { Monitor, Smartphone, Globe, Cloud, Shield, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { title: 'Web Development', description: 'Custom websites built with modern frameworks like React and Next.js.', icon: <Monitor /> },
  { title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android.', icon: <Smartphone /> },
  { title: 'SEO Optimization', description: 'Improve your search rankings and drive organic traffic.', icon: <Globe /> },
  { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure setup and management.', icon: <Cloud /> },
  { title: 'Cyber Security', description: 'Protect your digital assets with our advanced security protocols.', icon: <Shield /> },
  { title: 'Data Analytics', description: 'Turn data into actionable insights for business growth.', icon: <BarChart3 /> },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h3>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>

              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
