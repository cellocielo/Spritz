import React from 'react';
import { X, Sparkles, Heart, Clock, Wind, Tag, Layers, Check, AlertTriangle, Users, Crown } from 'lucide-react';
import BottleVisualizer from './BottleVisualizer';
import { getCollectorRarity } from '../data/fragrances';

export default function FragranceDetailModal({ 
  fragrance, 
  onClose, 
  isWishlisted, 
  onToggleWishlist,
  onOpenLayering 
}) {
  if (!fragrance) return null;

  const {
    name,
    brand,
    category,
    estimatedPrice,
    notes = { top: [], heart: [], base: [] },
    vibeCheck,
    pros = [],
    cons = [],
    longevity,
    sillage,
    genderVibe,
    matchPercentage,
    collectorsCount = 1
  } = fragrance;

  const rarity = getCollectorRarity(collectorsCount);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-3 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="w-full max-w-[390px] sm:max-w-md mx-auto bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl max-h-[88%] overflow-y-auto shadow-2xl relative text-stone-900">
        
        {/* Header Visual Backdrop */}
        <div className="p-6 bg-[#faf9f6] relative overflow-hidden rounded-t-3xl border-b border-stone-200">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white text-stone-700 hover:text-stone-900 transition-colors border border-stone-300 shadow-2xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pt-2">
            <BottleVisualizer fragrance={fragrance} size="lg" />

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className={`text-[10px] uppercase font-sans tracking-wider px-2.5 py-0.5 rounded-full border ${rarity.color}`}>
                  {rarity.badge}
                </span>
                <span className="text-[10px] uppercase font-sans tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 font-bold text-stone-700">
                  {category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                {name}
              </h2>
              <p className="text-xs font-sans uppercase tracking-widest text-stone-500 font-semibold">
                {brand} • <span className="font-serif font-bold text-stone-900 text-sm">{estimatedPrice}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">

          {/* Collector Rarity Box */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-900 text-xs font-bold">
              <Crown className="w-4 h-4 text-amber-600" />
              <span>Collector Rarity & Ownership</span>
            </div>
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              {rarity.description}
            </p>
          </div>

          {/* Dupe / Alternative Callout */}
          {fragrance.dupeOf && (
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-amber-800 font-bold block">
                  Dupe / Value Alternative
                </span>
                <p className="text-xs font-semibold text-amber-950">
                  Formulated to match {fragrance.dupeOf}
                </p>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-white text-amber-900 border border-amber-300 font-bold shadow-2xs shrink-0">
                Budget Alternative
              </span>
            </div>
          )}

          {/* Scent Profile Banner */}
          {vibeCheck && (
            <div className="p-4 rounded-2xl bg-[#faf9f6] border border-stone-200 space-y-1">
              <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 block font-bold">
                Scent Profile
              </span>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {vibeCheck}
              </p>
            </div>
          )}

          {/* Sillage & Longevity Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-500 text-xs font-bold">
                <Clock className="w-4 h-4 text-stone-900" />
                <span>Longevity</span>
              </div>
              <p className="text-sm font-bold text-stone-900 font-serif">
                {longevity || '8+ hours'}
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-500 text-xs font-bold">
                <Wind className="w-4 h-4 text-stone-900" />
                <span>Scent Trail</span>
              </div>
              <p className="text-sm font-bold text-stone-900 font-serif capitalize">
                {(sillage || 'pleasant-trail').replace('-', ' ')}
              </p>
            </div>
          </div>

          {/* Full Note Pyramid */}
          <div className="space-y-3">
            <h3 className="text-xs font-serif font-bold text-stone-900 uppercase tracking-wider">
              Complete Olfactory Note Pyramid
            </h3>
            
            <div className="space-y-2">
              <div className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Top Notes (Opening 0-30 mins)</span>
                  <span className="text-xs text-stone-700 font-medium">{notes.top?.join(', ') || 'Fresh Citrus'}</span>
                </div>
                <span className="text-lg">🍊</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Heart Notes (30 mins - 3 hours)</span>
                  <span className="text-xs text-stone-700 font-medium">{notes.heart?.join(', ') || 'Spiced Florals'}</span>
                </div>
                <span className="text-lg">🌸</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Base Notes (3 hours - All Day)</span>
                  <span className="text-xs text-stone-700 font-medium">{notes.base?.join(', ') || 'Woody Woods & Amber'}</span>
                </div>
                <span className="text-lg">🪵</span>
              </div>
            </div>
          </div>

          {/* Contextual Review Breakdown */}
          {(pros.length > 0 || cons.length > 0) && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Contextual Review Summary
              </h3>
              
              <div className="space-y-2 text-xs">
                {pros.length > 0 && (
                  <div className="p-3 rounded-2xl bg-[#faf9f6] border border-emerald-300 space-y-1">
                    <span className="font-bold text-emerald-900 uppercase text-[10px]">What Experts Love</span>
                    <ul className="list-disc list-inside space-y-1 text-stone-800">
                      {pros.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                )}
                {cons.length > 0 && (
                  <div className="p-3 rounded-2xl bg-[#faf9f6] border border-rose-300 space-y-1">
                    <span className="font-bold text-rose-900 uppercase text-[10px]">Fit Warnings & Considerations</span>
                    <ul className="list-disc list-inside space-y-1 text-stone-800">
                      {cons.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
            <button
              onClick={() => onToggleWishlist(fragrance)}
              className={`w-full py-3.5 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-300 text-rose-600'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
