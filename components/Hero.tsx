
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenPlanning: () => void;
  onViewWork: () => void;
}

const HERO_IMAGES = [
  "/IMG_4761.JPEG", // Ishitha Raj personal image
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-12 md:pt-16 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full xl:col-span-7"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6 lg:mb-8">
            <div className="h-[1px] w-6 sm:w-8 md:w-12 bg-zinc-300"></div>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] text-zinc-400 leading-tight">
              Architect | Event & Wedding Planner | Spatial Designer
            </span>
          </div>
          
          <h1 className="text-[6.5vw] sm:text-[5.5vw] md:text-[5vw] lg:text-[4.5vw] xl:text-[3.5vw] font-bold tracking-tighter leading-[0.9] mb-6 md:mb-10 lg:mb-12">
            MOMENTS <br />
            <span className="text-zinc-300 italic font-serif font-light">ORCHESTRA.</span>
          </h1>
          
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-10 max-w-2xl font-medium">
            Creating extraordinary experiences through meticulous planning, spatial vision, and vendor excellence. 
            I design moments that become lifelong memories.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 lg:gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenPlanning}
              className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg md:shadow-xl lg:shadow-2xl flex items-center justify-center sm:justify-start gap-2 md:gap-3"
            >
              Start Your Vision <ArrowRight size={12} className="hidden sm:block" />
            </motion.button>
            <button 
              onClick={onViewWork}
              className="text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all"
            >
              Explore Portfolio
            </button>
          </div>
        </motion.div>

        <div className="w-full xl:col-span-5 relative mt-6 md:mt-8 lg:mt-0">
          <motion.div 
            style={{ y: y1 }}
            className="relative z-20 w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden shadow-xl md:shadow-2xl lg:shadow-3xl border-[6px] sm:border-[8px] md:border-[10px] lg:border-[12px] border-white/50 backdrop-blur-sm"
          >
            <img 
              alt="Ishitha Raj - Architect & Event Planner" 
              className="w-full h-auto object-cover" 
              src={HERO_IMAGES[0]}
              loading="lazy"
            />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-20 -right-4 sm:-right-6 md:-right-10 lg:-right-12 z-10 aspect-square w-28 sm:w-32 md:w-48 lg:w-64 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl hidden md:block"
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
            className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-10 -left-6 sm:-left-8 lg:-left-10 z-30 bg-white/80 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-[20px] md:rounded-[30px] shadow-lg md:shadow-2xl max-w-[200px] sm:max-w-[220px] md:max-w-[240px] border border-white/20 hidden lg:block"
          >
            <Sparkles className="text-zinc-400 mb-2 sm:mb-3 md:mb-4" size={20} />
            <p className="text-[10px] sm:text-xs md:text-xs font-bold leading-snug md:leading-relaxed text-zinc-800 uppercase tracking-tighter">
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
