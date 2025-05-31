import React from 'react';
import { volunteerRoles } from '../data';
import { Heart, Users } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <section id="volunteer" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Volunteer Roles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Making a positive impact through community engagement and service
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerRoles.map((role) => (
            <div 
              key={role.id}
              className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{role.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{role.description}</p>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                <Users size={16} />
                <span>{role.organization}</span>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                {role.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;