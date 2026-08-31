import React, { useState } from 'react';
import { Sparkles, Trees, Citrus, Cake, Flower2, Shirt, Flame, Feather, Compass, MapPin, Check } from 'lucide-react';
import { VIBE_SETTINGS } from '../data/fragrances';

export default function StepNotes({ 
  prefMode, 
  setPrefMode, 
  selectedVibeSetting, 
  setSelectedVibeSetting,
  rankedNotes, 
  setRankedNotes, 
  onNext, 
  onPrev 
}) {
  const noteCategories = [
    { id: 'woods', label: 'Woods & Smoky', simpleTerm: 'Cedarwood, Sandalwood & Incense', icon: Trees },
    { id: 'fresh-citrus', label: 'Fresh & Citrus', simpleTerm: 'Bergamot, Grapefruit & Crisp Mint', icon: Citrus },
    { id: 'sweet-gourmand', label: 'Sweet & Gourmand', simpleTerm: 'Vanilla, Caramel & Honey', icon: Cake },
    { id: 'floral', label: 'Floral & Rose', simpleTerm: 'Jasmine, Iris & Rose Petals', icon: Flower2 },
    { id: 'clean-laundry', label: 'Clean & Laundry', simpleTerm: 'Fresh Linen & White Musk', icon: Shirt },
    { id: 'leather-spice', label: 'Leather & Spice', simpleTerm: 'Cardamom, Cinnamon & Leather', icon: Flame },
    { id: 'amber-oriental', label: 'Warm Amber & Oud', simpleTerm: 'Exotic Resins & Saffron', icon: Sparkles },
    { id: 'green-fig', label: 'Green & Fig', simpleTerm: 'Crushed Fig Leaf & Sage', icon: Feather }
  ];

  const handleToggleRankedNote = (id) => {
    if (rankedNotes.includes(id)) {
      setRankedNotes(rankedNotes.filter(n => n !== id));
    } else {
      if (rankedNotes.length < 3) {
        setRankedNotes([...rankedNotes, id]);
      }
    }
  };

  const getRankBadge = (id) => {
    const idx = rankedNotes.indexOf(id);
    if (idx === 0) return { label: '1st Dominant', color: 'bg-[#1c1917] text-white font-bold' };
    if (idx === 1) return { label: '2nd Secondary', color: 'bg-stone-700 text-white font-semibold' };
    if (idx === 2) return { label: '3rd Accent', color: 'bg-stone-300 text-stone-900 font-medium' };
    return null;
  };

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Scent & Vibe Preferences
        </h2>
        <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
          How would you like to define your fragrance preference?
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex rounded-2xl bg-[#f4f0ea] p-1 border border-stone-300 text-xs">
        <button
          onClick={() => setPrefMode('vibe')}
          className={`flex-1 py-3 px-3 rounded-xl font-medium flex items-center justify-center gap-1.5 transition-all ${
            prefMode === 'vibe'
              ? 'bg-[#1c1917] text-white font-bold shadow-xs'
              : 'text-stone-700 hover:text-stone-900'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Option A: Pick a Vibe / Setting</span>
        </button>

        <button
          onClick={() => setPrefMode('notes')}
          className={`flex-1 py-3 px-3 rounded-xl font-medium flex items-center justify-center gap-1.5 transition-all ${
            prefMode === 'notes'
              ? 'bg-[#1c1917] text-white font-bold shadow-xs'
              : 'text-stone-700 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Option B: Ranked Scent Notes</span>
        </button>
      </div>

      {/* OPTION A: VIBE / SETTING SELECTOR */}
      {prefMode === 'vibe' && (
        <div className="space-y-3 animate-fadeIn">
          <p className="text-xs text-stone-700 font-bold text-center">
            Choose an atmosphere that appeals to you most:
          </p>

          <div className="grid grid-cols-1 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
            {VIBE_SETTINGS.map((vibe) => {
              const isSelected = selectedVibeSetting === vibe.id;

              return (
                <div
                  key={vibe.id}
                  onClick={() => setSelectedVibeSetting(vibe.id)}
                  className={`p-3.5 rounded-3xl cursor-pointer transition-all border text-left ${
                    isSelected
                      ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md'
                      : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl p-2 rounded-2xl bg-white text-[#1c1917] border border-stone-200 shrink-0 shadow-xs">
                      {vibe.icon}
                    </span>
                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-base font-bold flex items-center gap-1.5">
                          {vibe.title}
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </h3>
                      </div>
                      <p className={`text-xs font-semibold ${isSelected ? 'text-stone-300' : 'text-stone-800'}`}>
                        {vibe.subtitle}
                      </p>
                      <p className={`text-[11px] leading-snug pt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                        {vibe.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* OPTION B: RANKED SCENT NOTES SELECTOR */}
      {prefMode === 'notes' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="text-center space-y-1">
            <p className="text-xs text-[#1c1917] font-bold">
              Rank your preferred scent notes by priority (1st, 2nd, 3rd):
            </p>
            <p className="text-[11px] text-stone-600 font-medium">
              Tap in order: <span className="font-bold text-[#1c1917]">1st Dominant</span> ➔ <span className="font-semibold text-stone-800">2nd Secondary</span> ➔ <span className="text-stone-600">3rd Accent</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {noteCategories.map((item) => {
              const Icon = item.icon;
              const rank = getRankBadge(item.id);
              const isSelected = !!rank;

              return (
                <div
                  key={item.id}
                  onClick={() => handleToggleRankedNote(item.id)}
                  className={`p-3 rounded-3xl cursor-pointer transition-all border text-left relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md'
                      : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
                  }`}
                >
                  {rank && (
                    <span className={`absolute top-2 right-2 text-[9px] uppercase px-1.5 py-0.5 rounded-full ${rank.color}`}>
                      {rank.label}
                    </span>
                  )}
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center mb-1.5 border ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold font-serif">
                    {item.label}
                  </h3>
                  <p className={`text-[10px] leading-tight pt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {item.simpleTerm}
                  </p>
                </div>
              );
            })}
          </div>

          {rankedNotes.length > 0 && (
            <div className="p-3 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-xs text-[#1c1917] flex items-center justify-between font-medium">
              <span className="font-bold">Your Selected Rank:</span>
              <div className="flex items-center gap-1 text-[11px]">
                {rankedNotes.map((nId, idx) => (
                  <span key={nId} className="px-2 py-0.5 rounded bg-white text-[#1c1917] border border-stone-300 font-bold">
                    #{idx + 1}: {nId.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="pt-2 flex items-center gap-3">
        <button
          onClick={onPrev}
          className="w-1/3 py-3.5 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] font-semibold text-xs hover:bg-stone-200 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={prefMode === 'notes' && rankedNotes.length === 0}
          className={`w-2/3 py-3.5 rounded-2xl font-bold text-sm transition-all ${
            (prefMode === 'vibe' || rankedNotes.length > 0)
              ? 'bg-[#1c1917] text-white shadow-md hover:bg-stone-800' 
              : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
          }`}
        >
          Next: Scent Presence & Trail →
        </button>
      </div>

    </div>
  );
}
