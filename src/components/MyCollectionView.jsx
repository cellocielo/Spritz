import React, { useState } from 'react';
import { Sparkles, Heart, Plus, Star, Layers, ShieldCheck, Search, Trash2, ArrowRight } from 'lucide-react';
import { FRAGRANCE_DATABASE, getCollectorRarity } from '../data/fragrances';
import BottleVisualizer from './BottleVisualizer';

export default function MyCollectionView({ 
  ownedFragranceNames = [], 
  wishlist = [], 
  onToggleWishlist, 
  onSelectDetail, 
  onGoToAdd,
  onOpenQuiz
}) {
  const [activeTab, setActiveTab] = useState('owned'); // 'owned' or 'wishlist'
  const [filterRarity, setFilterRarity] = useState('all');

  // Match owned fragrance names to database objects
  const ownedItems = FRAGRANCE_DATABASE.filter(f => 
    ownedFragranceNames.some(name => name.toLowerCase() === f.name.toLowerCase() || name.toLowerCase() === f.id.toLowerCase())
  );

  // Fallback for default display if empty
  const displayOwned = ownedItems.length > 0 ? ownedItems : FRAGRANCE_DATABASE.slice(0, 3);

  // Filtered owned items
  const filteredOwned = displayOwned.filter(frag => {
    if (filterRarity === 'rare') return (frag.collectorsCount || 0) <= 25;
    return true;
  });

  // Calculate total collection stats
  const totalValue = displayOwned.reduce((acc, f) => {
    const val = parseInt((f.estimatedPrice || '$150').replace(/[^0-9]/g, ''), 10) || 150;
    return acc + val;
  }, 0);

  const rareCount = displayOwned.filter(f => (f.collectorsCount || 0) <= 25).length;

  return (
    <div className="space-y-6 animate-fadeIn py-2 text-stone-900">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              My Fragrance Shelf
            </h2>
          </div>
          
          <button
            onClick={onGoToAdd}
            className="px-3.5 py-2 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white hover:text-orange-200 font-bold text-xs shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 border border-stone-800 hover:border-orange-500/40"
          >
            <Plus className="w-4 h-4 text-orange-400" />
            <span>Add</span>
          </button>
        </div>

        {/* Collection Quick Stats Bar */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 text-center">
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Bottles</span>
            <span className="text-xl font-serif font-bold text-stone-900">{displayOwned.length}</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 text-center">
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Est. Value</span>
            <span className="text-xl font-serif font-bold text-emerald-800">${totalValue}</span>
          </div>
        </div>
      </div>

      {/* Sub Tab Switcher: Owned vs Wishlist */}
      <div className="flex items-center justify-between bg-stone-100 p-1 rounded-2xl border border-stone-200 text-xs">
        <div className="flex gap-1 w-full">
          <button
            onClick={() => setActiveTab('owned')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'owned'
                ? 'bg-white text-stone-900 shadow-xs border border-orange-200/90'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className={`w-3.5 h-3.5 ${activeTab === 'owned' ? 'text-orange-600' : ''}`} />
            <span>Owned ({displayOwned.length})</span>
          </button>
          
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'wishlist'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Wishlist ({wishlist.length})</span>
          </button>
        </div>
      </div>

      {/* OWNED BOTTLES LIST */}
      {activeTab === 'owned' && (
        <div className="space-y-3">
          {displayOwned.map((frag, idx) => {
            const isWishlisted = Boolean(wishlist?.some(w => w.id === frag.id));

            return (
              <div 
                key={frag.id}
                className="bg-white rounded-3xl p-4 border border-stone-200 shadow-xs hover:border-stone-400 transition-all flex items-center gap-4"
              >
                {/* Visualizer Bottle */}
                <div 
                  onClick={() => onSelectDetail(frag)}
                  className="w-16 h-20 shrink-0 bg-[#faf9f6] rounded-2xl border border-stone-200 p-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <BottleVisualizer fragrance={frag} size="sm" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                    #{idx + 1} • {frag.brand}
                  </span>

                  <h3 
                    onClick={() => onSelectDetail(frag)}
                    className="font-serif font-bold text-base text-stone-900 hover:underline cursor-pointer truncate"
                  >
                    {frag.name}
                  </h3>

                  <div className="flex items-center gap-2 pt-0.5 text-xs text-stone-600 font-medium">
                    <span>{frag.estimatedPrice}</span>
                    <span>•</span>
                    <span className="font-bold text-orange-950 bg-orange-50/90 px-2 py-0.5 rounded border border-orange-200 text-[10px]">
                      {(frag.collectorsCount || 1).toLocaleString()} Collectors
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center justify-center gap-2 shrink-0 w-12">
                  <button
                    onClick={() => onSelectDetail(frag)}
                    className="w-full py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white hover:text-orange-300 font-bold text-xs transition-colors text-center"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onToggleWishlist(frag)}
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors ${
                      isWishlisted 
                        ? 'bg-rose-50 border-rose-200 text-rose-600' 
                        : 'bg-[#faf9f6] border-stone-200 text-stone-400 hover:text-stone-700'
                    }`}
                    title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}

          {displayOwned.length === 0 && (
            <div className="p-8 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
              <p className="text-sm text-stone-600 font-medium">No fragrances found in your shelf.</p>
              <button 
                onClick={onGoToAdd}
                className="px-4 py-2 bg-stone-900 text-white font-bold text-xs rounded-2xl"
              >
                Browse Fragrance Catalog
              </button>
            </div>
          )}
        </div>
      )}

      {/* WISHLIST BOTTLES LIST */}
      {activeTab === 'wishlist' && (
        <div className="space-y-3">
          {wishlist.length > 0 ? (
            wishlist.map((frag) => {
              const rarity = getCollectorRarity(frag.collectorsCount);

              return (
                <div 
                  key={frag.id}
                  className="bg-white rounded-3xl p-4 border border-stone-200 shadow-xs flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div 
                      onClick={() => onSelectDetail(frag)}
                      className="w-14 h-16 shrink-0 bg-[#faf9f6] rounded-2xl border border-stone-200 p-1 flex items-center justify-center cursor-pointer"
                    >
                      <BottleVisualizer fragrance={frag} size="sm" />
                    </div>
                    
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider font-bold block">
                        {frag.brand}
                      </span>
                      <h4 
                        onClick={() => onSelectDetail(frag)}
                        className="font-serif font-bold text-stone-900 text-sm hover:underline truncate cursor-pointer"
                      >
                        {frag.name}
                      </h4>
                      <span className={`inline-block text-[9px] px-2 py-0.5 rounded-full border ${rarity.color}`}>
                        {rarity.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDetail(frag)}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onToggleWishlist(frag)}
                      className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 flex items-center justify-center"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
              <Heart className="w-8 h-8 text-stone-300 mx-auto" />
              <h3 className="font-serif font-bold text-base text-stone-900">Your Wishlist is Empty</h3>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Explore the fragrance catalog and save your dream bottles.
              </p>
              <button
                onClick={onGoToAdd}
                className="px-4 py-2.5 rounded-2xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800"
              >
                Explore Fragrance Catalog
              </button>
            </div>
          )}
        </div>
      )}

      {/* Scent Matcher Quiz Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-white">
              Find Your Signature Scent
            </h3>
            <p className="text-xs text-amber-100 leading-relaxed max-w-xs">
              Take a 30-second quiz to discover fragrances tailored to your style and mood.
            </p>
          </div>
          <button
            onClick={onOpenQuiz}
            className="px-4 py-2.5 rounded-2xl bg-white text-amber-950 font-bold text-xs shadow-sm hover:bg-amber-50 transition-colors shrink-0 flex items-center gap-1"
          >
            <span>Start Quiz</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
