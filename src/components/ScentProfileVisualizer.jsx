import React from 'react';
import { Sparkles, Compass, Sliders, Shield } from 'lucide-react';

export default function ScentProfileVisualizer({ preferences }) {
  const { climate, occasion, budget, notes = [], sillage } = preferences;

  const computeMetrics = () => {
    let warmth = 40;
    let freshness = 50;
    let projection = 50;
    let elegance = 60;

    if (climate === 'winter') { warmth += 35; freshness -= 20; }
    if (climate === 'summer') { freshness += 35; warmth -= 20; }

    if (notes.includes('woods') || notes.includes('sweet-gourmand') || notes.includes('amber-oriental')) {
      warmth += 25;
    }
    if (notes.includes('fresh-citrus') || notes.includes('clean-laundry') || notes.includes('green-fig')) {
      freshness += 25;
    }

    if (sillage === 'beast-mode') projection = 95;
    if (sillage === 'pleasant-trail') projection = 70;
    if (sillage === 'skin-scent') projection = 40;

    if (budget === 'luxury-300' || budget === '150-300') elegance += 25;

    return {
      warmth: Math.min(98, Math.max(20, warmth)),
      freshness: Math.min(98, Math.max(20, freshness)),
      projection: Math.min(98, Math.max(20, projection)),
      elegance: Math.min(98, Math.max(20, elegance))
    };
  };

  const metrics = computeMetrics();

  return (
    <div className="glass-panel rounded-3xl p-5 border border-stone-300 bg-[#f4f0ea] space-y-4 shadow-xs text-[#1c1917]">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#1c1917]" />
          <h3 className="text-xs font-serif font-bold text-[#1c1917] uppercase tracking-wider">
            Your Olfactory Spectrum DNA
          </h3>
        </div>
        <span className="text-[10px] uppercase font-sans tracking-widest text-[#1c1917] font-bold px-2 py-0.5 rounded bg-white border border-stone-300">
          Personal Profile
        </span>
      </div>

      {/* Bars Grid */}
      <div className="space-y-3">
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-stone-800 font-semibold">
            <span>Warmth & Cozy Accords</span>
            <span className="font-mono text-[#1c1917] font-bold">{metrics.warmth}%</span>
          </div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-stone-300">
            <div 
              className="h-full bg-[#1c1917] rounded-full transition-all duration-700"
              style={{ width: `${metrics.warmth}%` }}
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-stone-800 font-semibold">
            <span>Freshness & Sparkle</span>
            <span className="font-mono text-[#1c1917] font-bold">{metrics.freshness}%</span>
          </div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-stone-300">
            <div 
              className="h-full bg-[#44403c] rounded-full transition-all duration-700"
              style={{ width: `${metrics.freshness}%` }}
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-stone-800 font-semibold">
            <span>Scent Presence & Projection</span>
            <span className="font-mono text-[#1c1917] font-bold">{metrics.projection}%</span>
          </div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-stone-300">
            <div 
              className="h-full bg-[#1c1917] rounded-full transition-all duration-700"
              style={{ width: `${metrics.projection}%` }}
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-stone-800 font-semibold">
            <span>Sophistication Index</span>
            <span className="font-mono text-[#1c1917] font-bold">{metrics.elegance}%</span>
          </div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-stone-300">
            <div 
              className="h-full bg-[#78350f] rounded-full transition-all duration-700"
              style={{ width: `${metrics.elegance}%` }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
