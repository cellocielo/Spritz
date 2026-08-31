import React, { useState } from 'react';
import { X, Layers, Sparkles, Plus } from 'lucide-react';

export default function LayeringGuideModal({ recommendedFragrance, ownedFragrances, onClose }) {
  const [selectedOwned, setSelectedOwned] = useState(
    ownedFragrances.length > 0 ? ownedFragrances[0] : 'Fresh Citrus Cologne'
  );

  if (!recommendedFragrance) return null;

  const buildLayeringRecipe = () => {
    return {
      baseLayer: `${recommendedFragrance.name} (${recommendedFragrance.brand})`,
      baseInstruction: "Apply 2 sprays onto pulse points (wrists, behind neck) as the heavy rich base anchor.",
      topLayer: selectedOwned,
      topInstruction: "Wait 60 seconds, then layer 1 spray of your top scent over the chest to create an airy halo.",
      resultingVibe: `Harmonious blend of ${recommendedFragrance.notes.base[0] || 'Rich Woods'} anchored with elevated fresh notes from ${selectedOwned}.`,
      proTip: "Never rub your wrists together after spraying! Let the perfume oils dry naturally so top notes blossom."
    };
  };

  const recipe = buildLayeringRecipe();

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="w-full max-w-lg bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl p-6 space-y-6 shadow-2xl relative text-[#1c1917]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f0ea] text-stone-600 hover:text-[#1c1917] transition-colors border border-stone-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#1c1917]" />
            <h2 className="text-2xl font-serif font-bold text-[#1c1917]">
              Fragrance Layering Studio
            </h2>
          </div>
          <p className="text-xs text-stone-600 font-medium">
            Combine your new match with fragrances in your existing collection for a custom signature.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-[#1c1917] uppercase tracking-wider block">
            Select a scent from your wardrobe to layer with:
          </label>
          {ownedFragrances.length > 0 ? (
            <select
              value={selectedOwned}
              onChange={(e) => setSelectedOwned(e.target.value)}
              className="w-full bg-[#f4f0ea] border border-stone-300 rounded-xl px-4 py-3 text-xs text-[#1c1917] font-semibold focus:outline-none focus:border-[#1c1917]"
            >
              {ownedFragrances.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          ) : (
            <div className="p-3 rounded-xl bg-[#f4f0ea] border border-stone-300 text-xs text-stone-700 font-medium">
              Default pairing: Fresh Citrus / Clean Musk accord
            </div>
          )}
        </div>

        <div className="glass-panel p-4 rounded-3xl border border-stone-300 space-y-4 bg-[#f4f0ea]">
          
          <div className="flex items-center justify-between text-xs text-stone-800 font-bold">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1c1917] inline-block" />
              <span>{recommendedFragrance.name}</span>
            </div>
            <Plus className="w-4 h-4 text-[#1c1917]" />
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-stone-600 inline-block" />
              <span>{selectedOwned}</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-stone-300 text-xs space-y-1">
            <span className="font-bold text-[#1c1917] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#1c1917]" /> Resulting Custom Scent Profile:
            </span>
            <p className="text-stone-800 italic font-serif leading-relaxed">
              "{recipe.resultingVibe}"
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-2xl bg-white border border-stone-200 space-y-0.5">
              <span className="font-bold text-[#1c1917] uppercase text-[10px]">Step 1 (Base Anchor)</span>
              <p className="text-stone-800 font-medium">{recipe.baseInstruction}</p>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-stone-200 space-y-0.5">
              <span className="font-bold text-[#1c1917] uppercase text-[10px]">Step 2 (Top Halo)</span>
              <p className="text-stone-800 font-medium">{recipe.topInstruction}</p>
            </div>
          </div>

          <div className="text-[11px] text-stone-700 bg-white p-3 rounded-2xl border border-stone-300 font-medium">
            💡 <span className="font-bold text-[#1c1917]">Perfumer Secret:</span> {recipe.proTip}
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-2xl bg-[#1c1917] hover:bg-stone-800 text-white font-bold text-xs transition-colors"
        >
          Close Layering Guide
        </button>

      </div>
    </div>
  );
}
