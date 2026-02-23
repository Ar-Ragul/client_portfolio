
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenPlanning: () => void;
  onViewWork: () => void;
}

const HERO_IMAGES = [
  "/assets/IMG_4761.JPEG", // Ishitha Raj personal image
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Modern office/spatial
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200", // Event setup
];

export const Hero: React.FC<HeroProps> = ({ onOpenPlanning, onViewWork }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-zinc-300"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              Architect | Event & Wedding Planner | Spatial Designer
            </span>
          </div>
          
          <h1 className="text-[12vw] lg:text-[8vw] font-bold tracking-tighter leading-[0.85] mb-12">
            MOMENTS <br />
            <span className="text-zinc-300 italic font-serif font-light">ORCHESTRA.</span>
          </h1>
          
          <p className="text-zinc-500 text-xl leading-relaxed mb-12 max-w-lg font-medium">
            Creating extraordinary experiences through meticulous planning, spatial vision, and vendor excellence. 
            I design moments that become lifelong memories.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenPlanning}
              className="bg-black text-white px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-2xl flex items-center gap-3"
            >
              Start Your Vision <ArrowRight size={16} />
            </motion.button>
            <button 
              onClick={onViewWork}
              className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all"
            >
              Explore Portfolio
            </button>
          </div>
        </motion.div>

        <div className="lg:col-span-5 relative">
          <motion.div 
            style={{ y: y1 }}
            className="relative z-20 aspect-[3/4] rounded-[60px] overflow-hidden shadow-3xl border-[12px] border-white/50 backdrop-blur-sm"
          >
            <img 
              alt="Ishitha Raj - Architect & Event Planner" 
              className="w-full h-full object-cover" 
              src={HERO_IMAGES[0]}
            />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-20 -right-12 z-10 aspect-square w-64 rounded-[40px] overflow-hidden shadow-2xl hidden xl:block"
          >
            <img 
              alt="Spatial Design Detail" 
              className="w-full h-full object-cover grayscale" 
              src={HERO_IMAGES[1]}
            />
          </motion.div>

          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-10 -left-10 z-30 bg-white/80 backdrop-blur-md p-8 rounded-[30px] shadow-2xl max-w-[240px] border border-white/20"
          >
            <Sparkles className="text-zinc-400 mb-4" size={24} />
            <p className="text-xs font-bold leading-relaxed text-zinc-800 uppercase tracking-tighter">
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-zinc-100/50 rounded-full blur-[120px] -z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
    </>
  );
};
