
import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section className="py-40">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-8">
              01 / The Narrative
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-12">
              Creating <br/>Extraordinary Experiences.
            </h2>
            <div className="space-y-6 text-zinc-500 text-lg leading-relaxed max-w-md font-medium">
              <p>
                I am Ishitha Raj, an architect and event planner who specializes in creating transformative experiences. I don't just plan events; I orchestrate moments that celebrate life's most important milestones through thoughtful spatial design and flawless execution.
              </p>
              <p>
                My approach blends architectural expertise with creative vision and meticulous vendor coordination. From intimate gatherings to grand celebrations, every detail—from structural elements to vendor relationships—is carefully curated to create magic.
              </p>
            </div>
            <div className="mt-16 flex items-center gap-12 border-t border-zinc-100 pt-12">
              <div>
                <span className="block text-3xl font-bold tracking-tighter mb-1">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-300 font-bold">Years of Design</span>
              </div>
              <div>
                <span className="block text-3xl font-bold tracking-tighter mb-1">800+</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-300 font-bold">Curated Spaces</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative"
          >
            <div className="aspect-[4/3] rounded-[60px] overflow-hidden shadow-3xl bg-zinc-100 border-[1px] border-zinc-200">
              <img 
                src="/IMG_2302.JPEG" 
                alt="Architectural Detail"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="absolute top-1/2 -right-12 translate-y-[-50%] hidden xl:block">
               <div className="bg-black text-white p-12 rounded-[30px] max-w-[240px] shadow-2xl">
                 <p className="text-xs font-serif italic opacity-70 mb-4">"Space is the breath of art."</p>
                 <span className="text-[10px] font-bold uppercase tracking-widest">— Frank Lloyd Wright</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
