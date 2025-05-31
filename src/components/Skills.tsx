import React from 'react';
import { skills } from '../data';
import { FileCode, FileType as FileTypeCss, FileType as FileTypeJs, FileType as FileTypeReactjs, FileType as FileTypeTypescript, Server, Paintbrush as PaintBrush, GitBranch } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'file-code':
      return <FileCode size={32} />;
    case 'file-type-css':
      return <FileTypeCss size={32} />;
    case 'file-type-js':
      return <FileTypeJs size={32} />;
    case 'file-type-reactjs':
      return <FileTypeReactjs size={32} />;
    case 'file-type-typescript':
      return <FileTypeTypescript size={32} />;
    case 'server':
      return <Server size={32} />;
    case 'paintbrush':
      return <PaintBrush size={32} />;
    case 'git-branch':
      return <GitBranch size={32} />;
    default:
      return <FileCode size={32} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills\" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="text-lg font-medium text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;