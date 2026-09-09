import React, { useState } from 'react';
import { Search, Plus, X, Sparkles, Info, Compass, Check } from 'lucide-react';
import { MOCK_SEARCH_SUGGESTIONS, FRAGRANCE_DATABASE } from '../data/fragrances';

export default function StepCollection({ ownedFragrances, setOwnedFragrances, onNext }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredSuggestions = MOCK_SEARCH_SUGGESTIONS.filter(
    item => item.toLowerCase().includes(query.toLowerCase()) && !ownedFragrances.includes(item)
  );

  const addFragrance = (name) => {
    if (name && !ownedFragrances.includes(name)) {
      setOwnedFragrances([...ownedFragrances, name]);
      setQuery('');
    }
  };

  const removeFragrance = (name) => {
    setOwnedFragrances(ownedFragrances.filter(item => item !== name));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      addFragrance(query.trim());
    }
  };

  const popularPicksDetailed = FRAGRANCE_DATABASE.slice(0, 8);

  return (
    <div className="space-y-6 text-stone-900">
      
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold tracking-wide">
          Your Current Collection
        </h2>
        <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium">
          Select or search fragrances you already own so we can match your signature taste.
        </p>
      </div>

      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyDown={handleKeyDown}
            placeholder="Search fragrances (e.g. Santal 33, Sauvage)..."
            className="w-full bg-[#f4f0ea] text-[#1c1917] placeholder-stone-500 text-sm pl-11 pr-24 py-3.5 rounded-2xl border border-stone-300 focus:border-[#1c1917] outline-none transition-all shadow-xs"
          />
          {query.trim() && (
            <button
              onClick={() => addFragrance(query.trim())}
              className="absolute right-2 px-3 py-1.5 bg-[#1c1917] hover:bg-stone-800 text-white font-semibold text-xs rounded-xl flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Add
            </button>
          )}
        </div>

        {isFocused && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-300 rounded-2xl shadow-xl overflow-hidden z-30 max-h-48 overflow-y-auto">
            {filteredSuggestions.map((item) => (
              <button
                key={item}
                onMouseDown={() => addFragrance(item)}
                className="w-full text-left px-4 py-2.5 text-xs text-[#1c1917] font-medium hover:bg-[#f4f0ea] flex items-center justify-between transition-colors border-b border-stone-200 last:border-0"
              >
                <span>{item}</span>
                <Plus className="w-3.5 h-3.5 text-stone-500" />
              </button>
            ))}
          </div>
        )}
      </div>

      {ownedFragrances.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-[#1c1917] uppercase tracking-wider">
            Your Wardrobe ({ownedFragrances.length} added)
          </p>
          <div className="flex flex-wrap gap-2">
            {ownedFragrances.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] text-xs font-bold shadow-xs animate-fadeIn"
              >
                <Sparkles className="w-3 h-3 text-[#1c1917]" />
                {name}
                <button
                  onClick={() => removeFragrance(name)}
                  className="hover:text-red-600 p-0.5 rounded-full hover:bg-stone-200 transition-colors ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-stone-600 tracking-wide uppercase font-bold">
            Browse Popular Classics To Quickly Add:
          </p>
          <span className="text-[10px] text-stone-500 font-semibold">Scroll horizontal ➔</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
          {popularPicksDetailed.map((frag) => {
            const isAdded = ownedFragrances.includes(frag.name);

            return (
              <div
                key={frag.id}
                onClick={() => isAdded ? removeFragrance(frag.name) : addFragrance(frag.name)}
                className={`w-48 shrink-0 p-3.5 rounded-3xl border cursor-pointer transition-all text-left flex flex-col justify-between ${
                  isAdded
                    ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md'
                    : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] uppercase font-sans tracking-wider font-bold px-1.5 py-0.5 rounded border ${isAdded ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {frag.category}
                    </span>
                    <span className={`text-xs font-bold font-serif ${isAdded ? 'text-white' : 'text-[#1c1917]'}`}>
                      {frag.estimatedPrice}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm line-clamp-1">
                    {frag.name}
                  </h4>
                  <p className={`text-[10px] uppercase tracking-widest ${isAdded ? 'text-stone-300' : 'text-stone-500'}`}>
                    {frag.brand}
                  </p>
                  <p className={`text-[10px] font-sans line-clamp-2 pt-1 ${isAdded ? 'text-stone-300' : 'text-stone-600'}`}>
                    {frag.vibeCheck}
                  </p>
                </div>

                <div className="pt-3">
                  <button
                    className={`w-full py-1.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
                      isAdded 
                        ? 'bg-white text-[#1c1917]' 
                        : 'bg-[#1c1917] text-white hover:bg-stone-800'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Added to Wardrobe</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3" />
                        <span>Add to Wardrobe</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex items-center gap-3">
        {ownedFragrances.length === 0 && (
          <button
            onClick={onNext}
            className="w-1/3 py-3.5 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] font-semibold text-xs hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            I'm New / Skip
          </button>
        )}
        
        <button
          onClick={onNext}
          className={`${ownedFragrances.length === 0 ? 'w-2/3' : 'w-full'} py-3.5 rounded-2xl bg-[#1c1917] text-white font-bold text-sm shadow-md hover:bg-stone-800 transition-all`}
        >
          Continue ({ownedFragrances.length} added) →
        </button>
      </div>

    </div>
  );
}
