import React from 'react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { title: 'Project Alpha', category: 'Web Design', imageUrl: 'https://picsum.photos/id/1/600/400' },
  { title: 'Beta App', category: 'Mobile', imageUrl: 'https://picsum.photos/id/119/600/400' },
  { title: 'Gamma Dash', category: 'Dashboard', imageUrl: 'https://picsum.photos/id/48/600/400' },
  { title: 'Delta E-com', category: 'E-Commerce', imageUrl: 'https://picsum.photos/id/20/600/400' },
  { title: 'Epsilon Tech', category: 'Branding', imageUrl: 'https://picsum.photos/id/3/600/400' },
  { title: 'Zeta Finance', category: 'Fintech', imageUrl: 'https://picsum.photos/id/180/600/400' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Works</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h4 className="text-white text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                <p className="text-indigo-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;