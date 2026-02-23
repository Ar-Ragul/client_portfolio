
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onOpenPlanning: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenPlanning }) => {
  return (
    <section className="py-56 text-center relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12"
        >
          Let's architect your<br/>
          <span className="text-zinc-300 italic font-serif">next legacy.</span>
        </motion.h2>
        <p className="text-zinc-400 text-lg font-medium mb-16 max-w-2xl mx-auto">
          Now accepting architectural commissions and spatial design projects for 2025 and 2026.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenPlanning}
            className="bg-black text-white px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-2xl flex items-center gap-3"
          >
            <Calendar size={16} /> Schedule Consultation
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-zinc-200 px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-50 transition-all flex items-center gap-3"
          >
            <Mail size={16} /> Send Inquiry
          </motion.button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-zinc-50/50 -z-10 blur-[100px] rounded-full" />
    </section>
  );
};
