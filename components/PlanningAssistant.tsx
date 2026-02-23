
import React, { useState, useEffect } from 'react';
import { X, Check, CheckCircle2, ArrowRight, Building2, Heart, Plane, Glasses } from 'lucide-react';

interface PlanningAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  defaults?: {
    category?: string;
    vision?: string;
  };
}

type Step = 'category' | 'details' | 'contact' | 'success';

export const PlanningAssistant: React.FC<PlanningAssistantProps> = ({ isOpen, onClose, defaults }) => {
  const [step, setStep] = useState<Step>('category');
  const [formData, setFormData] = useState({
    category: '',
    date: '',
    guests: '',
    location: '',
    name: '',
    email: '',
    vision: ''
  });

  // Handle defaults when modal opens
  useEffect(() => {
    if (isOpen) {
      if (defaults?.category) {
        setFormData(prev => ({ 
          ...prev, 
          category: defaults.category || '',
          vision: defaults.vision || '' 
        }));
        setStep('details');
      } else {
        setStep('category');
      }
    }
  }, [isOpen, defaults]);

  if (!isOpen) return null;

  const handleCategorySelect = (category: string) => {
    setFormData({ ...formData, category });
    setStep('details');
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('contact');
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const resetAndClose = () => {
    setFormData({
      category: '',
      date: '',
      guests: '',
      location: '',
      name: '',
      email: '',
      vision: ''
    });
    setStep('category');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-white/60 backdrop-blur-3xl"
        onClick={resetAndClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-[50px] shadow-3xl overflow-hidden border border-zinc-100 flex flex-col md:flex-row min-h-[600px] animate-in zoom-in-95 duration-300">
        {/* Left Side: Progress/Branding */}
        <div className="w-full md:w-1/3 bg-[#111] p-12 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="size-8 bg-white text-black rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">∞</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Ishitha Raj</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tighter leading-none mb-8">
              {formData.category === 'Curated Travel' ? 'Your Journey Starts Here.' : 'Orchestrating Excellence.'}
            </h2>
            
            <p className="text-zinc-500 text-sm leading-relaxed mb-12">
              {formData.category === 'Curated Travel' 
                ? 'Tell us where you want to go. We handle the logistical artistry required to get you there.' 
                : 'Tell us your vision. We handle the surgical precision required to make it reality.'}
            </p>
          </div>

          <div className="space-y-4">
            {['Category', 'Details', 'Contact'].map((s, i) => {
              const isActive = (step === 'category' && i === 0) || 
                             (step === 'details' && i === 1) || 
                             (step === 'contact' && i === 2) ||
                             (step === 'success');
              const isPast = (step === 'details' && i === 0) || 
                            (step === 'contact' && i < 2) ||
                            (step === 'success');
              
              return (
                <div key={s} className="flex items-center gap-4 group">
                  <div className={`size-6 rounded-full border flex items-center justify-center transition-all ${
                    isActive ? 'border-white bg-white text-black' : 
                    isPast ? 'border-zinc-700 bg-zinc-700 text-white' : 
                    'border-zinc-800 text-zinc-800'
                  }`}>
                    {isPast ? <Check size={14} /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-zinc-700'}`}>
                    {s}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="flex-1 p-12 md:p-20 relative bg-white overflow-y-auto max-h-[90vh] no-scrollbar">
          <button 
            onClick={resetAndClose}
            className="absolute top-10 right-10 size-10 flex items-center justify-center rounded-full hover:bg-zinc-50 transition-colors z-10"
          >
            <X size={20} />
          </button>

          {step === 'category' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6 block">Step 01</span>
              <h3 className="text-4xl font-bold tracking-tighter mb-12">What are we planning?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Corporate Event', icon: Building2 },
                  { label: 'Luxury Wedding', icon: Heart },
                  { label: 'Private Soirée', icon: Glasses },
                  { label: 'Curated Travel', icon: Plane }
                ].map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.label}
                      onClick={() => handleCategorySelect(cat.label)}
                      className="p-8 border border-zinc-100 rounded-[30px] text-left hover:border-black hover:bg-zinc-50 transition-all group flex items-start justify-between"
                    >
                      <div>
                        <Icon className="mb-4 block text-zinc-400 group-hover:text-black transition-colors" size={24} />
                        <span className="font-bold tracking-tight text-lg">{cat.label}</span>
                      </div>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 'details' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6 block">Step 02 / {formData.category}</span>
              <h3 className="text-4xl font-bold tracking-tighter mb-12">
                {formData.category === 'Curated Travel' ? 'The Itinerary' : 'The Logistics'}
              </h3>
              <form onSubmit={handleDetailsSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {formData.category === 'Curated Travel' ? 'Travel Date' : 'Target Date'}
                    </label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-zinc-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-black transition-all font-medium"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {formData.category === 'Curated Travel' ? 'Travelers' : 'Guest Count'}
                    </label>
                    <input 
                      required
                      type="number" 
                      placeholder={formData.category === 'Curated Travel' ? 'e.g. 2' : 'e.g. 150'}
                      className="w-full bg-zinc-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-black transition-all font-medium"
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {formData.category === 'Curated Travel' ? 'Primary Destination' : 'Preferred Location'}
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder={formData.category === 'Curated Travel' ? 'e.g. Amalfi Coast' : 'City or Venue Preference'}
                    className="w-full bg-zinc-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-black transition-all font-medium"
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="flex items-center justify-between pt-8">
                  <button type="button" onClick={() => setStep('category')} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black">
                    {defaults?.category ? 'Cancel' : 'Back'}
                  </button>
                  <button type="submit" className="bg-black text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">Continue</button>
                </div>
              </form>
            </div>
          )}

          {step === 'contact' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6 block">Step 03 / Contact</span>
              <h3 className="text-4xl font-bold tracking-tighter mb-12">Your Vision</h3>
              <form onSubmit={handleFinalSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-black transition-all font-medium"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-black transition-all font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {formData.category === 'Curated Travel' ? 'Itinerary Notes' : 'Brief Narrative'}
                  </label>
                  <textarea 
                    placeholder={formData.category === 'Curated Travel' ? 'Any specific desires for this journey?' : 'Tell us what excellence looks like for this event...'}
                    value={formData.vision}
                    className="w-full bg-zinc-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-black transition-all font-medium min-h-[120px]"
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                  />
                </div>
                <div className="flex items-center justify-between pt-8">
                  <button type="button" onClick={() => setStep('details')} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black">Back</button>
                  <button type="submit" className="bg-black text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
                    {formData.category === 'Curated Travel' ? 'Submit Inquiry' : 'Submit Proposal'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'success' && (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-1000">
              <div className="size-24 bg-zinc-50 rounded-full flex items-center justify-center mb-10">
                <CheckCircle2 className="text-black" size={40} />
              </div>
              <h3 className="text-4xl font-bold tracking-tighter mb-6">Inquiry Received.</h3>
              <p className="text-zinc-500 max-w-sm mb-12 font-medium">
                Our curators will review your vision with surgical care. Expect a refined response within 24 hours.
              </p>
              <button 
                onClick={resetAndClose}
                className="border border-black px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                Return to Gallery
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
