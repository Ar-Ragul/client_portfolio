
import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const WORKS = [
  {
    id: 'glass-pavilion',
    tag: 'Architecture',
    title: 'The Glass Pavilion',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    stats: { area: '4,500 sqft', location: 'Malibu', duration: '18 Months' }
  },
  {
    id: 'lumina-gala',
    tag: 'Spatial Design & Event',
    title: 'Lumina Annual Gala',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200',
    stats: { guests: '1,200', location: 'New York City', duration: '2 Days' }
  },
  {
    id: 'urban-sanctuary',
    tag: 'Spatial Design',
    title: 'The Urban Sanctuary',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    stats: { type: 'Commercial', location: 'London', duration: '6 Months' }
  }
];

// Extended works for the Archive
export const ARCHIVE_WORKS = [
  ...WORKS,
  {
    id: 'desert-retreat',
    tag: 'Architecture',
    title: 'Nomad Oasis Retreat',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
    stats: { guests: '80', location: 'Dubai', duration: '1 Night' }
  },
  {
    id: 'tokyo-summit',
    tag: 'Spatial Design',
    title: 'Zenith Tech Summit',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200',
    stats: { guests: '2,500', location: 'Tokyo', duration: '4 Days' }
  },
  {
    id: 'santorini-vows',
    tag: 'Event Planning',
    title: 'Aegean Blue Nuptials',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    stats: { guests: '120', location: 'Santorini', duration: '2 Days' }
  }
];

interface SelectedWorksProps {
  onProjectClick: (id: string) => void;
  onSeeAllClick: () => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onProjectClick, onSeeAllClick }) => {
  return (
    <section className="py-40 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            Selected<br/>Works
          </motion.h2>
          <div className="max-w-xs space-y-6">
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              A curation of my most ambitious architectural and spatial projects, showcasing a commitment to structural excellence.
            </p>
            <div className="h-[1px] w-20 bg-zinc-800"></div>
          </div>
        </div>

        <div className="space-y-40">
          {WORKS.map((work, index) => (
            <motion.div 
              key={work.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div 
                className="flex-1 w-full group overflow-hidden rounded-[60px] cursor-pointer shadow-2xl bg-zinc-900 border border-white/5"
                onClick={() => onProjectClick(work.id)}
              >
                <div className="relative h-full w-full">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                    <div className="flex gap-8">
                      {Object.entries(work.stats).map(([label, value]) => (
                        <div key={label}>
                          <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold mb-1">{label}</span>
                          <span className="text-xs font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[320px]">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 block">
                  {work.tag}
                </span>
                <h3 className="text-4xl font-bold tracking-tighter mb-10 leading-none">
                  {work.title}
                </h3>
                <button 
                  onClick={() => onProjectClick(work.id)}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group text-white border-b border-zinc-800 pb-1 hover:border-white transition-all"
                >
                  View Case Study 
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSeeAllClick}
            className="border border-zinc-800 px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            See All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};
