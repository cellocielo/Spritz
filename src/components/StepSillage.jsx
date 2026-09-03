import React from 'react';
import { VolumeX, Volume1, Volume2, Sparkles, Wand2 } from 'lucide-react';

export default function StepSillage({ sillage, setSillage, onSubmit, onPrev, isGenerating }) {
  const sillageOptions = [
    {
      id: 'skin-scent',
      title: 'Subtle & Intimate',
      subtitle: 'Soft skin scent discovered only at close distance',
      icon: VolumeX,
      badge: 'Intimate'
    },
    {
      id: 'pleasant-trail',
      title: 'Balanced Scent Trail',
      subtitle: 'Leaves an alluring, elegant aura as you walk past',
      icon: Volume1,
      badge: 'Moderate'
    },
    {
      id: 'beast-mode',
      title: 'Commanding Projection',
      subtitle: 'High projection and long-lasting room presence',
      icon: Volume2,
      badge: 'Strong'
    }
  ];

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Scent Presence & Trail
        </h2>
        <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium">
          Choose your preferred projection strength and trail.
        </p>
      </div>

      <div className="space-y-3">
        {sillageOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = sillage === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setSillage(opt.id)}
              className={`p-4 rounded-3xl cursor-pointer transition-all border ${
                isSelected 
                  ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md' 
                  : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-2xl border shrink-0 ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold flex items-center gap-2">
                      {opt.title}
                      {isSelected && <Sparkles className="w-3.5 h-3.5 text-white fill-white" />}
                    </h3>
                    <span className={`text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full border font-bold ${isSelected ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {opt.badge}
                    </span>
                  </div>
                  <p className={`text-xs font-medium ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
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
          disabled={isGenerating}
          className="w-1/3 py-4 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] font-semibold text-xs hover:bg-stone-200 transition-colors disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          onClick={onSubmit}
          disabled={isGenerating}
          className="w-2/3 py-4 rounded-2xl bg-[#1c1917] text-white font-bold text-sm shadow-md hover:bg-stone-800 transition-all flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Curating Matches...</span>
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4 text-white" />
              <span>Generate Scent Match →</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
