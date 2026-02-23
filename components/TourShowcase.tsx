
import React from 'react';
import { X, Diamond, Zap, UtensilsCrossed, Lock } from 'lucide-react';
import { TOURS } from './Travel';

interface TourShowcaseProps {
  tourTitle: string | null;
  onClose: () => void;
  onPlan: (title: string) => void;
}

export const TourShowcase: React.FC<TourShowcaseProps> = ({ tourTitle, onClose, onPlan }) => {
  if (!tourTitle) return null;
  const tour = TOURS.find(t => t.title === tourTitle);
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl bg-white rounded-none md:rounded-[50px] overflow-hidden shadow-3xl animate-in zoom-in-95 duration-500 flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/2 h-[40vh] md:h-auto overflow-hidden relative">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
          <button onClick={onClose} className="absolute top-10 right-10 size-12 flex items-center justify-center hover:bg-zinc-50 rounded-full transition-all">
            <X size={20} />
          </button>

          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6 block">{tour.tag}</span>
          <h2 className="text-5xl font-bold tracking-tighter mb-8">{tour.title}</h2>
          
          <div className="space-y-10 mb-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-black">The Signature Experience</h4>
              <p className="text-zinc-500 text-lg leading-relaxed font-medium">{tour.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { Icon: Diamond, label: 'Ultra-Luxury Accommodation' },
                { Icon: Zap, label: 'Private Jet / Helicopter Logistics' },
                { Icon: UtensilsCrossed, label: 'Curated Gastronomy' },
                { Icon: Lock, label: 'Discreet On-site Support' }
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <item.Icon size={20} className="text-zinc-300" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-12 border-t border-zinc-50">
            <button 
              onClick={() => onPlan(tour.title)}
              className="bg-black text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl"
            >
              Start Planning This Journey
            </button>
            <button onClick={onClose} className="border border-zinc-100 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
