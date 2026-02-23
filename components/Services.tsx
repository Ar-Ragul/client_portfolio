
import React from 'react';
import { motion } from 'motion/react';
import { Building2, PartyPopper, Layout, Users } from 'lucide-react';

const SERVICES = [
  {
    icon: <Building2 size={32} />,
    title: 'Architectural Design',
    description: 'Structural conceptualization and spatial planning for high-end residential and commercial environments.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <PartyPopper size={32} />,
    title: 'Event & Wedding Planning',
    description: 'Bespoke luxury experiences crafted with surgical precision. We handle the complexity of high-profile celebrations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Layout size={32} />,
    title: 'Spatial Design',
    description: 'Transforming raw spaces into immersive narratives through lighting, texture, and flow optimization.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Users size={32} />,
    title: 'Vendor Coordination',
    description: 'Surgical management of world-class vendors to ensure absolute perfection in every detail of execution.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-40 border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="mb-24">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">
            02 / Expertise
          </span>
          <h2 className="text-5xl font-bold tracking-tighter mb-4">Multidisciplinary Mastery.</h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white/50 backdrop-blur-sm p-10 rounded-[40px] border border-zinc-100 hover:border-black transition-all duration-500 hover:shadow-2xl"
            >
              <div className="size-16 bg-zinc-100 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 tracking-tighter">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-medium h-20 overflow-hidden">
                {s.description}
              </p>
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
