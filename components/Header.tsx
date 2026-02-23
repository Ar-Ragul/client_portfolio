
import React from 'react';
import { motion } from 'motion/react';
import { Box, Menu } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  onOpenPlanning: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled, onOpenPlanning }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl py-4 shadow-sm border-b border-zinc-100' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          <div className="size-12 bg-black flex items-center justify-center text-white rounded-2xl transition-all group-hover:rotate-12 group-hover:scale-110">
            <Box size={24} />
          </div>
          <div>
            <h2 className="text-black text-xl font-bold tracking-tighter leading-none">
              Ishitha Raj
            </h2>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400">Creative Studio</span>
          </div>
        </motion.div>
        
        <nav className="hidden lg:flex items-center gap-12">
          {[
            { name: 'About', id: 'about' },
            { name: 'Expertise', id: 'services' },
            { name: 'Portfolio', id: 'portfolio' },
            { name: 'Travel', id: 'travel' }
          ].map((item, idx) => (
            <motion.button 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-black transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenPlanning}
            className="bg-black text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl hidden md:block"
          >
            Start Project
          </motion.button>
          <button className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
