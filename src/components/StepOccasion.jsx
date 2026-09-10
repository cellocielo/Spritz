import React from 'react';
import { Briefcase, Flame, Sparkles, Dumbbell, Wine } from 'lucide-react';

export default function StepOccasion({ occasion, setOccasion, onNext, onPrev }) {
  const occasionOptions = [
    {
      id: 'daily',
      title: 'Daily Signature',
      subtitle: 'Versatile, comforting, and effortless everyday presence',
      icon: Sparkles,
      vibe: 'Daily'
    },
    {
      id: 'date',
      title: 'Date Night & Romance',
      subtitle: 'Seductive vanilla, warm rum, sweet tobacco, and amber',
      icon: Wine,
      vibe: 'Romantic'
    },
    {
      id: 'office',
      title: 'Office & Professional',
      subtitle: 'Clean vetiver, crisp iris, and polished cedarwood',
      icon: Briefcase,
      vibe: 'Polished'
    },
    {
      id: 'clubbing',
      title: 'Night Out & Events',
      subtitle: 'Bold projecting statement scents that command attention',
      icon: Flame,
      vibe: 'Bold'
    },
    {
      id: 'fresh-gym',
      title: 'Active & Fresh',
      subtitle: 'Invigorating citrus, clean linen, and herbal notes',
      icon: Dumbbell,
      vibe: 'Fresh'
    }
  ];

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Purpose & Occasion
        </h2>
        <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium">
          Select the primary setting for this fragrance.
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
                <div className={`p-2.5 rounded-2xl border shrink-0 ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-sm font-bold truncate">
                      {opt.title}
                    </h3>
                    <span className={`text-[9px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full border font-bold ${isSelected ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {opt.vibe}
                    </span>
                  </div>
                  <p className={`text-xs truncate ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {opt.subtitle}
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
