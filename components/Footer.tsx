
import React from 'react';
import { Box, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 bg-black flex items-center justify-center text-white rounded-2xl">
                <Box size={24} />
              </div>
              <div>
                <h2 className="text-black text-xl font-bold tracking-tighter leading-none">Ishitha Raj</h2>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400">Creative Studio</span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs font-medium leading-relaxed max-w-[200px]">
              Creating extraordinary experiences through architecture, events, and spatial design.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8">Studio</h4>
            <ul className="space-y-4 text-xs font-bold text-zinc-500">
              <li><a href="#about" className="hover:text-black transition-colors">Narrative</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a></li>
              <li><a href="#travel" className="hover:text-black transition-colors">Design Journeys</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8">Connect</h4>
            <ul className="space-y-4 text-xs font-bold text-zinc-500">
              <li className="flex items-center gap-2"><Instagram size={14} /><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li className="flex items-center gap-2"><Linkedin size={14} /><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li className="flex items-center gap-2"><Twitter size={14} /><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8">Inquiries</h4>
            <div className="flex border-b border-zinc-100 pb-2 group focus-within:border-black transition-colors">
              <input 
                className="bg-transparent border-none text-xs w-full focus:ring-0 px-0 placeholder:text-zinc-200 font-bold" 
                placeholder="Your Email" 
                type="email"
              />
              <button className="text-zinc-300 group-hover:text-black transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-300">
            © {new Date().getFullYear()} Ishitha Raj Studio. Moments Orchestrated.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-zinc-300 hover:text-black">Privacy</a>
            <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-zinc-300 hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
