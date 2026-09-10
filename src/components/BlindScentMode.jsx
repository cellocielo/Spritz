import React, { useState } from 'react';
import { Eye, EyeOff, Sparkles, Heart, ChevronRight, Layers, Check } from 'lucide-react';
import { FRAGRANCE_DATABASE } from '../data/fragrances';

export default function BlindScentMode({ isBlindMode, setIsBlindMode, wishlist = [], onToggleWishlist, onSelectDetail }) {
  const [revealedIds, setRevealedIds] = useState({});

  const toggleReveal = (id) => {
    setRevealedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4 text-stone-900">
      
      {/* Opt-In Toggle Bar */}
      <div className="bg-white rounded-2xl sm:rounded-3xl px-4 py-3.5 sm:p-4 border border-stone-200 shadow-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 mr-1">
          <div className={`p-1 flex items-center justify-center transition-colors shrink-0 ${
            isBlindMode ? 'text-orange-600' : 'text-stone-700'
          }`}>
            {isBlindMode ? <EyeOff className="w-5 h-5 stroke-[1.8]" /> : <Eye className="w-5 h-5 stroke-[1.8]" />}
          </div>
          <div className="min-w-0">
            <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 tracking-tight">
              Blind Discovery Mode
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-500 font-medium leading-snug">
              Rate scents purely on notes & olfactory structure.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsBlindMode(!isBlindMode)}
          className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-bold text-xs transition-all border shrink-0 whitespace-nowrap ${
            isBlindMode
              ? 'bg-gradient-to-r from-orange-600 to-[#ff5500] text-white border-transparent shadow-xs'
              : 'bg-white text-stone-900 border-stone-300 hover:bg-stone-50 shadow-2xs'
          }`}
        >
          {isBlindMode ? 'Blind Mode On' : 'Blind Mode Off'}
        </button>
      </div>

    </div>
  );
}

export function BlindFragranceCard({ fragrance, isBlindMode, onSelectDetail, isWishlisted, onToggleWishlist }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const {
    id,
    name,
    brand,
    estimatedPrice,
    notes = { top: [], heart: [], base: [] },
    mainAccords = [],
    vibeCheck,
    accentColor = '#d97706',
    collectorsCount = 1
  } = fragrance;

  if (!isBlindMode || isRevealed) {
    // Normal Card behavior
    return (
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-3 relative group">
        {isBlindMode && isRevealed && (
          <div className="inline-block text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
            ✓ Blind Profile Revealed
          </div>
        )}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-serif font-bold text-stone-900">{name}</h3>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">{brand} • {estimatedPrice}</p>
          </div>
          <button
            onClick={() => onToggleWishlist(fragrance)}
            className={`p-2 rounded-full border ${isWishlisted ? 'bg-rose-50 border-rose-300 text-rose-600' : 'bg-stone-50 border-stone-200 text-stone-400'}`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
        <p className="text-xs text-stone-700 font-sans leading-relaxed">{vibeCheck}</p>
        <div className="flex items-center justify-between pt-2 border-t border-stone-200">
          <span className="text-xs text-stone-500 font-medium">{collectorsCount} Collectors</span>
          <button onClick={() => onSelectDetail(fragrance)} className="px-3 py-1.5 rounded-xl bg-stone-900 text-white font-bold text-xs">
            View Details
          </button>
        </div>
      </div>
    );
  }

  // BLIND DISCOVERY CARD (NO BRAND, NO BOTTLE PHOTO, PURE NOTE COLOR & ACCORD STRUCTURAL DISCOVERY)
  return (
    <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4 relative overflow-hidden text-stone-900">
      
      {/* Blind Header Tag & Color Palette Swatch */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-950">
            🔍 Blind Note Profile
          </span>
          {/* Color Vibe Palette Swatch */}
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full border border-stone-300" style={{ backgroundColor: accentColor }} />
            <div className="w-3 h-3 rounded-full bg-stone-300 border border-stone-300" />
            <div className="w-3 h-3 rounded-full bg-stone-800 border border-stone-300" />
          </div>
        </div>

        <button
          onClick={() => onToggleWishlist(fragrance)}
          className={`p-2 rounded-full border ${isWishlisted ? 'bg-rose-50 border-rose-300 text-rose-600' : 'bg-stone-50 border-stone-200 text-stone-400'}`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
        </button>
      </div>

      {/* Accord Vector Pyramid Breakdown */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
          Primary Olfactory Accords:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {mainAccords.map((acc, idx) => {
            const label = typeof acc === 'object' && acc !== null ? acc.name : acc;
            return (
              <span key={typeof label === 'string' ? label : idx} className="text-xs px-3 py-1 rounded-xl bg-[#faf9f6] border border-stone-200 text-stone-900 font-bold">
                ✨ {label}
              </span>
            );
          })}
        </div>
      </div>

      {/* Scent Mood Note */}
      <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-stone-200 space-y-0.5">
        <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 block font-bold">
          Scent Profile
        </span>
        <p className="text-xs text-stone-700 font-sans leading-relaxed">
          {vibeCheck}
        </p>
      </div>

      {/* Note Structure List */}
      <div className="text-xs text-stone-600 space-y-1 font-medium">
        <p><span className="font-bold text-stone-900">Top:</span> {notes.top?.join(', ')}</p>
        <p><span className="font-bold text-stone-900">Base:</span> {notes.base?.join(', ')}</p>
      </div>

      {/* Reveal Brand Action */}
      <div className="pt-2 flex items-center gap-2 border-t border-stone-200">
        <button
          onClick={() => setIsRevealed(true)}
          className="flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all"
        >
          <Eye className="w-4 h-4" />
          <span>Reveal Scent & House</span>
        </button>
      </div>

    </div>
  );
}
