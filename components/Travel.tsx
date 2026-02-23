
import React from 'react';
import { motion } from 'motion/react';
import { Map, ArrowRight, Globe } from 'lucide-react';

export const TOURS = [
  {
    tag: 'Architectural Pilgrimage',
    title: 'Modernist Masterpieces: Brazil',
    description: 'A curated journey through the works of Oscar Niemeyer and Lina Bo Bardi. Private access to residential icons and urban landmarks.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    tag: 'Design Sanctuary',
    title: 'The Kyoto Spatial Retreat',
    description: 'Exploring the intersection of traditional Japanese architecture and modern minimalism. Exclusive tea house visits and garden design workshops.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200'
  }
];

interface TravelProps {
  onPlanTour: (tourTitle: string) => void;
  onViewTour: (tourTitle: string) => void;
}

export const Travel: React.FC<TravelProps> = ({ onPlanTour, onViewTour }) => {
  return (
    <section className="py-40 bg-zinc-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">
              03 / Global Curation
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              Design<br/>Journeys.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              We extend our architectural vision to global design pilgrimages. Every journey is a curated exploration of spatial excellence.
            </p>
          </motion.div>
        </div>

        <div className="space-y-40">
          {TOURS.map((tour, index) => (
            <motion.div 
              key={tour.title} 
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div 
                className="flex-1 w-full group overflow-hidden rounded-[60px] shadow-3xl bg-zinc-200 cursor-pointer border border-zinc-200"
                onClick={() => onViewTour(tour.title)}
              >
                <div className="relative h-full w-full">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xl">View Details</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[400px]">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6 block">
                  {tour.tag}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
                  {tour.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-medium">
                  {tour.description}
                </p>
                <div className="flex flex-col gap-6 items-start">
                  <button 
                    onClick={() => onViewTour(tour.title)}
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group border-b border-zinc-200 pb-1 hover:border-black transition-all"
                  >
                    Explore Itinerary
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPlanTour(tour.title)}
                    className="bg-black text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
                  >
                    Book Your Journey
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-20 rounded-[60px] shadow-sm border border-zinc-100 max-w-4xl mx-auto"
          >
            <div className="size-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-10">
              <Globe className="text-zinc-400" size={32} />
            </div>
            <h4 className="text-3xl font-bold tracking-tighter mb-6 italic">Seeking a specific design destination?</h4>
            <p className="text-zinc-500 mb-12 font-medium max-w-xl mx-auto leading-relaxed">
              Our design curators specialize in architectural access. From remote desert sanctuaries to private brutalist takeovers, we curate the world of form for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => onPlanTour('Custom Design Pilgrimage')}
                className="bg-black text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl"
              >
                Inquire About Custom Journeys
              </button>
              <a href="mailto:studio@ishitharaj.com" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">
                Direct Studio Line
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
