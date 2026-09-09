import React from 'react';
import { Heart, Sparkles, CheckCircle2, AlertTriangle, ChevronRight, Layers, Users, Plus, Check } from 'lucide-react';
import BottleVisualizer from './BottleVisualizer';
import { getCollectorRarity } from '../data/fragrances';

export default function FragranceCard({ 
  fragrance, 
  onSelectDetail, 
  isWishlisted, 
  onToggleWishlist,
  onOpenLayeringModal,
  isOwned,
  onToggleOwned
}) {
  const {
    name,
    brand,
    category,
    estimatedPrice,
    notes = { top: [], heart: [], base: [] },
    vibeCheck,
    pros = [],
    cons = [],
    whyItFits,
    matchPercentage,
    collectorsCount = 1
  } = fragrance;

  const rarity = getCollectorRarity(collectorsCount);

  return (
    <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm relative overflow-hidden group text-stone-900 transition-all hover:border-stone-300 hover:shadow-md">
      
      {/* Top Header Row: Collector Count & Wishlist */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] px-2.5 py-1 rounded-full border bg-amber-50 text-amber-900 border-amber-200 font-bold shadow-2xs">
            {collectorsCount.toLocaleString()} Collectors
          </span>
          <span className={`text-[10px] uppercase tracking-wider font-sans px-2 py-0.5 rounded-md border font-bold ${
            category === 'Dupe' 
              ? 'text-amber-800 bg-amber-100/90 border-amber-300' 
              : category === 'Designer' 
                ? 'text-blue-900 bg-blue-50 border-blue-200' 
                : 'text-stone-600 bg-stone-100 border-stone-200'
          }`}>
            {category}
          </span>
          {fragrance.dupeOf && (
            <span className="text-[10px] font-sans text-amber-900 bg-amber-50/90 px-2 py-0.5 rounded-md border border-amber-200 font-semibold truncate max-w-[170px]">
              Dupe of {fragrance.dupeOf}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {matchPercentage && (
            <div className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-mono font-bold shadow-2xs">
              {matchPercentage}% Match
            </div>
          )}
          <button
            onClick={() => onToggleWishlist(fragrance)}
            className={`p-2 rounded-full border transition-all ${
              isWishlisted 
                ? 'bg-rose-50 border-rose-300 text-rose-600' 
                : 'bg-[#faf9f6] border-stone-200 text-stone-400 hover:text-stone-800'
            }`}
            title={isWishlisted ? "Remove from Favorites" : "Save to Favorites"}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Content Layout with Visual Bottle */}
      <div className="flex items-start gap-4 mb-4 relative z-10">
        
        {/* Visual Bottle Graphic */}
        <div 
          onClick={() => onSelectDetail(fragrance)}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <BottleVisualizer fragrance={fragrance} size="md" />
        </div>

        {/* Name, Brand, Price */}
        <div className="flex-1 space-y-1 min-w-0">
          <h3 
            onClick={() => onSelectDetail(fragrance)}
            className="text-xl font-serif font-bold text-stone-900 leading-tight hover:underline cursor-pointer truncate"
          >
            {name}
          </h3>
          <p className="text-xs font-sans text-stone-500 uppercase tracking-widest font-semibold">
            {brand}
          </p>
          <div className="flex items-center gap-2 pt-0.5">
            <span className="text-sm font-serif font-bold text-stone-900">
              {estimatedPrice}
            </span>
            <span className="text-[11px] text-stone-500">
              • {collectorsCount.toLocaleString()} Collectors
            </span>
          </div>

          {whyItFits && (
            <div className="pt-1 text-xs text-stone-700 leading-snug">
              <span className="font-bold text-stone-900 block text-[10px] uppercase tracking-wider">Why It Fits You:</span>
              <p className="text-stone-600 font-medium line-clamp-2">{whyItFits}</p>
            </div>
          )}
        </div>

      </div>

      {/* Scent Profile Description */}
      {vibeCheck && (
        <div className="mb-3.5 p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 space-y-0.5">
          <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 block font-bold">
            Scent Profile
          </span>
          <p className="text-xs text-stone-700 leading-relaxed font-sans line-clamp-2">
            {vibeCheck}
          </p>
        </div>
      )}

      {/* Note Pyramid */}
      {notes?.top && notes.top.length > 0 && (
        <div className="mb-4 space-y-1">
          <span className="text-[10px] uppercase font-sans tracking-wider text-stone-500 font-bold block">
            Accords & Notes
          </span>
          <div className="flex flex-wrap gap-1">
            {notes.top.slice(0, 2).map((n) => (
              <span key={n} className="text-[10px] px-2 py-0.5 rounded-md bg-[#faf9f6] border border-stone-200 text-stone-700 font-medium">
                🍊 {n}
              </span>
            ))}
            {notes.base.slice(0, 2).map((n) => (
              <span key={n} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-900 font-bold">
                🪵 {n}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Card Actions */}
      <div className="pt-3 flex items-center gap-2 border-t border-stone-200">
        <button
          onClick={() => onSelectDetail(fragrance)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-xs"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {onToggleOwned && (
          <button
            onClick={() => onToggleOwned(fragrance)}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center gap-1 transition-colors border ${
              isOwned
                ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                : 'bg-white text-stone-900 border-stone-300 hover:bg-stone-50'
            }`}
          >
            {isOwned ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Owned</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-stone-700" />
                <span>Add</span>
              </>
            )}
          </button>
        )}
      </div>

    </div>
  );
}
