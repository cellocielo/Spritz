import React from 'react';
import { Briefcase, Flame, Sparkles, Dumbbell, Wine } from 'lucide-react';

export default function StepOccasion({ occasion, setOccasion, onNext, onPrev }) {
  const occasionOptions = [
    {
      id: 'daily',
      title: 'Daily Signature Scent',
      subtitle: 'Your personal fragrance identity',
      description: 'Versatile, comforting, and effortless. Works smoothly from morning coffee to evening errands.',
      icon: Sparkles,
      vibe: 'Effortless & Chic'
    },
    {
      id: 'date',
      title: 'Date Night & Romance',
      subtitle: 'Intimate, warm & alluring',
      description: 'Seductive accords designed for close proximity. Rich vanilla, warm rum, sweet tobacco, or amber velvet.',
      icon: Wine,
      vibe: 'Alluring & Cozy'
    },
    {
      id: 'office',
      title: 'Office & Professional',
      subtitle: 'Refined, polished & respectful',
      description: 'Clean vetiver, crisp iris, or understated cedar. Keeps you smelling sharp without overpowering coworkers.',
      icon: Briefcase,
      vibe: 'Polished & Elegant'
    },
    {
      id: 'clubbing',
      title: 'Clubbing & Night Out',
      subtitle: 'Bold, commanding & seductive',
      description: 'Unapologetic projection that cuts through crowded rooms. Honey, sweet tonka, and dark elixirs.',
      icon: Flame,
      vibe: 'Bold Head-Turner'
    },
    {
      id: 'fresh-gym',
      title: 'Gym & Fresh Everyday',
      subtitle: 'Crisp, clean & invigorating',
      description: 'Sparkling citrus, clean linen, and refreshing herbal tea accords to feel rejuvenated on the move.',
      icon: Dumbbell,
      vibe: 'Clean & Energizing'
    }
  ];

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Purpose & Occasion
        </h2>
        <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
          Why are you buying this fragrance? Choose the primary vibe or moment you want to craft.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {occasionOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = occasion === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setOccasion(opt.id)}
              className={`p-3.5 rounded-3xl cursor-pointer transition-all border ${
                isSelected 
                  ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md' 
                  : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-2xl border ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold truncate">
                      {opt.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${isSelected ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {opt.vibe}
                    </span>
                  </div>
                  <p className={`text-xs truncate pt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {opt.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 flex items-center gap-3">
        <button
          onClick={onPrev}
          className="w-1/3 py-3.5 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] font-semibold text-xs hover:bg-stone-200 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="w-2/3 py-3.5 rounded-2xl bg-[#1c1917] text-white font-bold text-sm shadow-md hover:bg-stone-800 transition-all"
        >
          Next: Budget Range →
        </button>
      </div>

    </div>
  );
}
