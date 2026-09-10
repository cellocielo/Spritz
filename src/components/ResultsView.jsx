import React, { useEffect, useState } from 'react';
import { RefreshCw, Layers, Compass, Home, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import FragranceCard from './FragranceCard';
import ScentProfileVisualizer from './ScentProfileVisualizer';
import { generateRecommendations } from '../utils/recommendationEngine';

export default function ResultsView({ 
  preferences, 
  onReset, 
  onGoHome,
  onGoBrowse,
  onSelectDetail, 
  wishlist, 
  onToggleWishlist,
  onOpenLayeringModal 
}) {
  const [recommendationOffset, setRecommendationOffset] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [savedAllNotice, setSavedAllNotice] = useState(false);

  useEffect(() => {
    const results = generateRecommendations(preferences, 3, recommendationOffset);
    setRecommendations(results);
  }, [preferences, recommendationOffset]);

  const handleSaveAllAndHome = () => {
    const list = wishlist || [];
    recommendations.forEach(item => {
      if (!list.some(w => w.id === item.id)) {
        onToggleWishlist(item);
      }
    });
    setSavedAllNotice(true);
    setTimeout(() => {
      onGoHome();
    }, 1000);
  };

  const handleShowMore = () => {
    const nextOffset = (recommendationOffset + 3) % 12;
    setRecommendationOffset(nextOffset);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16 text-stone-900">
      
      {/* Header Announcement */}
      <div className="text-center space-y-2 pt-2">
        <h2 className="text-4xl font-serif text-stone-900 font-bold tracking-tight">
          Your Fragrance Matches
        </h2>
        <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
          Based on your climate, occasion, and scent preferences, here are your top curated recommendations.
        </p>
      </div>

      {/* Interactive Scent Profile DNA Spectrum */}
      <ScentProfileVisualizer preferences={preferences} />

      {/* Recommendations Cards (3 Cards) */}
      <div className="space-y-6">
        {recommendations.map((item) => (
          <FragranceCard
            key={item.id}
            fragrance={item}
            onSelectDetail={onSelectDetail}
            isWishlisted={Boolean(wishlist?.some(w => w.id === item.id))}
            onToggleWishlist={onToggleWishlist}
            onOpenLayeringModal={onOpenLayeringModal}
          />
        ))}
      </div>

      {/* Return to Home / Menu Action Bar */}
      <div className="rounded-3xl p-5 border border-stone-200 space-y-4 text-center bg-white shadow-sm">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-bold text-stone-900">
            What would you like to do next?
          </h3>
          <p className="text-xs text-stone-600 font-medium">
            Save your recommendations to your favorites or return to your collection.
          </p>
        </div>

        {savedAllNotice && (
          <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-xs text-emerald-900 font-bold flex items-center justify-center gap-1.5 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            Saved all matches to your favorites! Returning home...
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Save to Favorites & Return Home */}
          <button
            onClick={handleSaveAllAndHome}
            className="py-3.5 px-4 rounded-2xl bg-[#1c1917] hover:bg-stone-800 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-transform"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Save to Favorites & Return Home</span>
          </button>

          {/* Skip & Return Home */}
          <button
            onClick={onGoHome}
            className="py-3.5 px-4 rounded-2xl bg-white hover:bg-stone-100 border border-stone-300 text-[#1c1917] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Main Menu</span>
          </button>
        </div>

        {/* Secondary options */}
        <div className="pt-2 flex items-center justify-center gap-4 text-xs text-stone-600 border-t border-stone-300 font-medium">
          <button
            onClick={handleShowMore}
            className="hover:text-[#1c1917] flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Show 3 Alternatives</span>
          </button>
          <span>•</span>
          <button
            onClick={onGoBrowse}
            className="hover:text-[#1c1917] flex items-center gap-1 transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Browse All Fragrances</span>
          </button>
        </div>

      </div>

    </div>
  );
}
