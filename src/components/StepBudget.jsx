import React from 'react';
import { DollarSign, Tag, Sparkles, Gem } from 'lucide-react';

export default function StepBudget({ budget, setBudget, onNext, onPrev }) {
  const budgetOptions = [
    {
      id: 'under-50',
      range: 'Under $50',
      title: 'Accessible Gems',
      description: 'High-value designer clones and everyday staples',
      icon: Tag,
      tag: 'Value'
    },
    {
      id: '50-150',
      range: '$50 – $150',
      title: 'Designer Standards',
      description: 'Popular luxury designer houses and modern classics',
      icon: DollarSign,
      tag: 'Popular'
    },
    {
      id: '150-300',
      range: '$150 – $300',
      title: 'Boutique & Niche',
      description: 'Artisanal houses with high concentration and rare raw notes',
      icon: Sparkles,
      tag: 'Artisanal'
    },
    {
      id: 'luxury-300',
      range: '$300+',
      title: 'Haute Parfumerie',
      description: 'Prestige luxury and statement collector perfumes',
      icon: Gem,
      tag: 'Prestige'
    }
  ];

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Investment & Price Range
        </h2>
        <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium">
          Select your target price point for a full bottle.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {budgetOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = budget === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setBudget(opt.id)}
              className={`p-4 rounded-3xl cursor-pointer transition-all border ${
                isSelected 
                  ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md' 
                  : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`p-3 rounded-2xl border shrink-0 ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-serif text-lg font-bold ${isSelected ? 'text-white' : 'text-[#1c1917]'}`}>
                      {opt.range}
                    </span>
                    <span className={`text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full border font-bold ${isSelected ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {opt.tag}
                    </span>
                  </div>
                  <h3 className={`text-xs font-semibold ${isSelected ? 'text-stone-200' : 'text-stone-800'}`}>
                    {opt.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
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
          Next: Preferences →
        </button>
      </div>

    </div>
  );
}
