
import React from 'react';
import { X, ArrowDown } from 'lucide-react';
import { ARCHIVE_WORKS } from './SelectedWorks';

interface ProjectShowcaseProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projectId, onClose }) => {
  if (!projectId) return null;

  const project = ARCHIVE_WORKS.find(w => w.id === projectId);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-0 md:p-12 overflow-y-auto">
      <div 
        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[1400px] bg-white rounded-none md:rounded-[60px] shadow-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        {/* Header Controls */}
        <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-black text-white rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">∞</span>
            </div>
            <span className="text-black font-bold tracking-tighter uppercase text-[10px] tracking-[0.2em]">Ishitha Raj Archive</span>
          </div>
          <button 
            onClick={onClose}
            className="size-14 bg-black/5 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Visual Side */}
          <div className="h-[50vh] lg:h-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] scale-110 hover:scale-100"
            />
          </div>

          {/* Editorial Side */}
          <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 mb-8 block">Case Study / {project.tag}</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-12 text-black">
              {project.title}
            </h2>
            
            <div className="grid grid-cols-3 gap-12 mb-20">
              {Object.entries(project.stats).map(([label, value]) => (
                <div key={label}>
                  <span className="block text-[9px] uppercase tracking-widest text-zinc-300 font-bold mb-3">{label}</span>
                  <span className="text-xl font-bold tracking-tight text-black">{value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8 max-w-lg mb-16">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">The Brief</h4>
              <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                Our objective was to redefine what a {project.tag.toLowerCase()} could be. We implemented a surgical approach to logistics while maintaining a high-art aesthetic that mirrored the client's global stature.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
              {['Visual Strategy', 'Technical Direction', 'On-site Orchestration', 'Guest Journey'].map(tag => (
                <span key={tag} className="px-6 py-2 rounded-full border border-zinc-100 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>

            <button 
              className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-black"
              onClick={onClose}
            >
              <div className="size-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowDown size={18} />
              </div>
              Explore Detailed Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
