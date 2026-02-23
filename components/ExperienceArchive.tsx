
import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { ARCHIVE_WORKS } from './SelectedWorks';

interface ExperienceArchiveProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (id: string) => void;
}

const CATEGORIES = ['All', 'Corporate', 'Weddings', 'Private', 'Travel'];

export const ExperienceArchive: React.FC<ExperienceArchiveProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  if (!isOpen) return null;

  const filteredWorks = activeFilter === 'All' 
    ? ARCHIVE_WORKS 
    : ARCHIVE_WORKS.filter(w => w.tag === activeFilter);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-white"
        onClick={onClose}
      />
      
      <div className="relative w-full h-full bg-white flex flex-col animate-in slide-in-from-bottom-12 duration-700">
        {/* Navigation Header */}
        <div className="w-full px-8 md:px-20 py-12 flex items-center justify-between border-b border-zinc-50">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-black text-white rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">∞</span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tighter leading-none mb-1">Experience Archive</h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Ishitha Raj / Curation {new Date().getFullYear()}</span>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-all"
          >
            Close Archive
            <div className="size-12 border border-zinc-100 group-hover:border-black rounded-full flex items-center justify-center transition-all">
              <X size={20} />
            </div>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="w-full px-8 md:px-20 py-8 flex items-center gap-12 overflow-x-auto no-scrollbar border-b border-zinc-50">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.4em] pb-1 transition-all border-b-2 whitespace-nowrap ${
                activeFilter === cat ? 'border-black text-black' : 'border-transparent text-zinc-300 hover:text-zinc-500'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="flex-1"></div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300 hidden md:block">
            {filteredWorks.length} Results Displayed
          </span>
        </div>

        {/* Dynamic Grid */}
        <div className="flex-1 overflow-y-auto px-8 md:px-20 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {filteredWorks.map((work, idx) => (
              <div 
                key={work.id}
                className={`group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both`}
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => onSelectProject(work.id)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[30px] mb-8 bg-zinc-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 block">
                    {work.tag} / {work.stats.location}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tighter group-hover:tracking-tight transition-all text-black">
                    {work.title}
                  </h3>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                     <span className="text-[9px] font-bold uppercase tracking-widest border-b border-black pb-1">View Narrative</span>
                     <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 pt-20 border-t border-zinc-50 text-center">
            <p className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">The Collection Continues</p>
            <p className="text-zinc-400 max-w-lg mx-auto leading-relaxed text-sm font-medium">
              We maintain an exclusive archive of over 500 bespoke events. Contact our curators for specific industry case studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
