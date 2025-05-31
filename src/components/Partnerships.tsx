import React from 'react';
import { partnerships } from '../data';
import { Handshake } from 'lucide-react';

const Partnerships: React.FC = () => {
  const comingSoon = true;

  if (comingSoon) {
    return (
      <section id="partnerships" className="py-20 bg-gray-900 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnerships & Collaborations</h2>
          <p className="text-gray-400">Coming Soon...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="partnerships" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partnerships & Collaborations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Working together with organizations to create meaningful impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((partnership) => (
            <div 
              key={partnership.id}
              className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-purple-500/10 rounded-lg">
                  <img 
                    src={partnership.logo} 
                    alt={partnership.organization} 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {partnership.organization}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Handshake size={16} />
                    <span className="text-sm">{partnership.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{partnership.description}</p>
              <div className="flex flex-wrap gap-2">
                {partnership.outcomes.map((outcome, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-900 text-purple-400 text-xs font-medium rounded-lg"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;

