
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Box, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  onOpenPlanning: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled, onOpenPlanning }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
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

        <div className="flex items-center gap-4 md:gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenPlanning}
            className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl hidden sm:block"
          >
            Start Project
          </motion.button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-lg"
        >
          <div className="max-w-[1440px] mx-auto px-4 py-6 flex flex-col gap-4">
            {[
              { name: 'About', id: 'about' },
              { name: 'Expertise', id: 'services' },
              { name: 'Portfolio', id: 'portfolio' },
              { name: 'Travel', id: 'travel' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-black transition-colors py-2 border-b border-zinc-50"
              >
                {item.name}
              </button>
            ))}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onOpenPlanning();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-black text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg mt-2"
            >
              Start Project
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
