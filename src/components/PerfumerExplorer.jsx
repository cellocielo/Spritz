import React from 'react';
import { Sparkles, Users, Award, Compass, ChevronRight, Layers } from 'lucide-react';
import { FRAGRANCE_DATABASE } from '../data/fragrances';
import BottleVisualizer from './BottleVisualizer';

export default function PerfumerExplorer({ ownedFragranceNames = [], onSelectDetail }) {
  // Collect perfumers represented in owned fragrances
  const ownedFragranceObjects = FRAGRANCE_DATABASE.filter(f =>
    ownedFragranceNames.some(name => name.toLowerCase() === f.name.toLowerCase() || name.toLowerCase() === f.id.toLowerCase())
  );

  const ownedPerfumers = Array.from(new Set(ownedFragranceObjects.map(f => f.perfumer).filter(Boolean)));

  // If none owned yet, default to top master perfumers
  const targetPerfumers = ownedPerfumers.length > 0 ? ownedPerfumers : ['Francis Kurkdjian', 'Olivier Polge', 'Dominique Ropion'];

  // Find fragrances created by the same master perfumers that the user doesn't own yet
  const perfumerMatches = FRAGRANCE_DATABASE.filter(f =>
    targetPerfumers.includes(f.perfumer) &&
    !ownedFragranceObjects.some(o => o.id === f.id)
  );

  return (
    <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4 text-stone-900">
      
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-950 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
            ✨ Relational Perfumer Network
          </span>
          <h3 className="font-serif font-bold text-xl text-stone-900 mt-1">
            Master Perfumer Connections
          </h3>
        </div>
      </div>

      <p className="text-xs text-stone-600 font-medium leading-relaxed">
        Famous master perfumers who create iconic designer signatures also compose lesser-known niche masterpieces with similar artistic DNA.
      </p>

      {/* Perfumer Cards List */}
      <div className="space-y-3">
        {targetPerfumers.map(perfumer => {
          const perfumerBottles = FRAGRANCE_DATABASE.filter(f => f.perfumer === perfumer);
          const ownedOfPerfumer = ownedFragranceObjects.find(f => f.perfumer === perfumer) || perfumerBottles[0];
          const nicheSuggestions = perfumerBottles.filter(f => f.id !== ownedOfPerfumer?.id);

          return (
            <div key={perfumer} className="p-4 rounded-2xl bg-[#faf9f6] border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Master Artist: {perfumer}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium">
                    Signature style: {ownedOfPerfumer ? `Creator of ${ownedOfPerfumer.name}` : 'Niche & Fine Fragrance'}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-700 bg-white px-2.5 py-1 rounded-xl border border-stone-200">
                  {perfumerBottles.length} Creations
                </span>
              </div>

              {nicheSuggestions.length > 0 && (
                <div className="space-y-2 pt-1 border-t border-stone-200">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">
                    Niche & Hidden Creations by {perfumer}:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {nicheSuggestions.map(bottle => (
                      <div
                        key={bottle.id}
                        onClick={() => onSelectDetail(bottle)}
                        className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-2 cursor-pointer hover:border-stone-400 transition-all"
                      >
                        <div className="min-w-0 space-y-0.5">
                          <h5 className="font-serif font-bold text-xs text-stone-900 truncate">{bottle.name}</h5>
                          <p className="text-[10px] text-stone-500 font-semibold">{bottle.brand} • {bottle.estimatedPrice}</p>
                        </div>
                        <BottleVisualizer fragrance={bottle} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
