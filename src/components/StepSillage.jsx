import React from 'react';
import { VolumeX, Volume1, Volume2, Sparkles, Wand2 } from 'lucide-react';

export default function StepSillage({ sillage, setSillage, onSubmit, onPrev, isGenerating }) {
  const sillageOptions = [
    {
      id: 'skin-scent',
      title: 'Subtle Skin Scent',
      subtitle: 'Just for me and those close',
      description: 'Intimate and warm. Discovered only when hugged or standing right beside someone.',
      icon: VolumeX,
      badge: 'Close & Intimate'
    },
    {
      id: 'pleasant-trail',
      title: 'Inviting Scent Trail',
      subtitle: 'A pleasant aura as I walk by',
      description: 'The golden balance. Leaves an elegant scent trail behind you in hallways without overpowering a room.',
      icon: Volume1,
      badge: 'Balanced Trail'
    },
    {
      id: 'beast-mode',
      title: 'Commanding Presence',
      subtitle: 'Walk in and be noticed',
      description: 'Make your presence known immediately upon entering a room. Long performance and strong projection.',
      icon: Volume2,
      badge: 'Strong Projection'
    }
  ];

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Scent Presence & Trail
        </h2>
        <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
          How strong do you want your fragrance aura to be when you enter a room?
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
              <div className="flex items-start gap-3.5">
                <div className={`p-3 rounded-2xl border shrink-0 ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold flex items-center gap-2">
                      {opt.title}
                      {isSelected && <Sparkles className="w-4 h-4 text-white fill-white" />}
                    </h3>
                    <span className={`text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full border font-bold ${isSelected ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {opt.badge}
                    </span>
                  </div>
                  <p className={`text-xs font-semibold ${isSelected ? 'text-stone-300' : 'text-stone-800'}`}>
                    "{opt.subtitle}"
                  </p>
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
