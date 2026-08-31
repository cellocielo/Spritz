import React, { useState } from 'react';
import { Search, PlusCircle, Plus } from 'lucide-react';
import { FRAGRANCE_DATABASE } from '../data/fragrances';
import FragranceCard from './FragranceCard';
import BlindScentMode, { BlindFragranceCard } from './BlindScentMode';
import NicheSubmissionModal from './NicheSubmissionModal';

export default function BrowseFeed({ 
  wishlist = [], 
  ownedFragrances = [],
  onToggleWishlist, 
  onToggleOwned,
  onSelectDetail, 
  customSubmissions = [],
  onSubmitNewFragrance
}) {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isBlindMode, setIsBlindMode] = useState(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);

  const fullDatabase = [...customSubmissions, ...FRAGRANCE_DATABASE];

  let displayedFragrances = fullDatabase;

  // Filter logic
  if (filterCategory === 'niche') {
    displayedFragrances = fullDatabase.filter(f => f.category?.toLowerCase().includes('niche'));
  } else if (filterCategory === 'designer') {
    displayedFragrances = fullDatabase.filter(f => f.category?.toLowerCase() === 'designer');
  }

  if (searchQuery.trim()) {
    displayedFragrances = displayedFragrances.filter(f => 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (f.olfactoryFamilies || []).some(fam => fam.includes(searchQuery.toLowerCase())) ||
      (f.mainAccords || []).some(acc => acc.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  return (
    <div className="space-y-6 pb-12 animate-fadeIn text-stone-900">
      
      {/* Minimal Header */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Add Fragrances
        </h2>
        <button
          onClick={() => setIsSubmissionOpen(true)}
          className="px-3.5 py-1.5 rounded-2xl bg-amber-50 text-amber-950 border border-amber-200 hover:bg-amber-100 font-bold text-xs flex items-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4 text-amber-600" />
          <span>Submit Unlisted Bottle</span>
        </button>
      </div>

      {/* Blind Scent Mode Toggle */}
      <BlindScentMode
        isBlindMode={isBlindMode}
        setIsBlindMode={setIsBlindMode}
        wishlist={wishlist}
        onToggleWishlist={onToggleWishlist}
        onSelectDetail={onSelectDetail}
      />

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 w-4.5 h-4.5 text-stone-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, brand, or note..."
          className="w-full bg-white text-stone-900 text-xs pl-11 pr-4 py-3.5 rounded-2xl border border-stone-300 focus:border-stone-900 outline-none transition-all shadow-2xs placeholder:text-stone-400 font-medium"
        />
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold">
        <button
          onClick={() => setFilterCategory('all')}
          className={`px-3.5 py-2 rounded-xl border shrink-0 transition-all ${
            filterCategory === 'all' 
              ? 'bg-stone-900 text-white border-stone-900 shadow-xs' 
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          All ({fullDatabase.length})
        </button>

        <button
          onClick={() => setFilterCategory('niche')}
          className={`px-3.5 py-2 rounded-xl border shrink-0 transition-all ${
            filterCategory === 'niche' 
              ? 'bg-stone-900 text-white border-stone-900 shadow-xs' 
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          💎 Niche
        </button>

        <button
          onClick={() => setFilterCategory('designer')}
          className={`px-3.5 py-2 rounded-xl border shrink-0 transition-all ${
            filterCategory === 'designer' 
              ? 'bg-stone-900 text-white border-stone-900 shadow-xs' 
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          ✨ Designer
        </button>
      </div>

      {/* Fragrance List */}
      <div className="space-y-4">
        {displayedFragrances.map((item) => {
          const isOwned = ownedFragrances.some(name => name.toLowerCase() === item.name.toLowerCase() || name.toLowerCase() === item.id.toLowerCase());
          const isWishlisted = Boolean(wishlist?.some(w => w.id === item.id));

          if (isBlindMode) {
            return (
              <BlindFragranceCard
                key={item.id}
                fragrance={item}
                isBlindMode={isBlindMode}
                onSelectDetail={onSelectDetail}
                isWishlisted={isWishlisted}
                onToggleWishlist={onToggleWishlist}
              />
            );
          }

          return (
            <FragranceCard
              key={item.id}
              fragrance={item}
              onSelectDetail={onSelectDetail}
              isWishlisted={isWishlisted}
              onToggleWishlist={onToggleWishlist}
              isOwned={isOwned}
              onToggleOwned={onToggleOwned}
            />
          );
        })}

        {displayedFragrances.length === 0 && (
          <div className="p-8 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
            <h3 className="font-serif font-bold text-base text-stone-900">Fragrance Not Found in Dataset</h3>
            <p className="text-xs text-stone-600 font-medium">
              We couldn't find "{searchQuery}". Be the first to submit it to the crowdsourced database!
            </p>
            <button
              onClick={() => setIsSubmissionOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-stone-900 text-white font-bold text-xs"
            >
              Submit "{searchQuery}" as Niche Fragrance
            </button>
          </div>
        )}
      </div>

      {/* Crowdsourced Niche Submission Modal */}
      <NicheSubmissionModal
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
        initialQuery={searchQuery}
        onSubmitNewFragrance={onSubmitNewFragrance}
      />

    </div>
  );
}
