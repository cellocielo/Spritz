import React, { useState } from 'react';
import { Sparkles, Compass, Search, Heart, Users, ArrowRight, Plus, Star, Briefcase, Wine, Flame } from 'lucide-react';
import { FRAGRANCE_DATABASE } from '../data/fragrances';
import { MOCK_ACTIVITY_FEED } from '../data/friendsData';
import BottleVisualizer from './BottleVisualizer';

export default function HomeView({ 
  onStartQuiz, 
  onStartBrowse, 
  onOpenSocial, 
  onOpenWishlist, 
  wishlist,
  onToggleWishlist,
  onSelectDetail
}) {
  // Mini Quick Rank input on home page
  const [quickFragName, setQuickFragName] = useState('');
  const [quickRating, setQuickRating] = useState('9.5');
  const [quickRankedNotice, setQuickRankedNotice] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('daily');

  const quickOccasions = [
    { id: 'daily', title: 'Daily Signature', icon: '✨', subtitle: 'Versatile & effortless' },
    { id: 'date', title: 'Date Night', icon: '🍷', subtitle: 'Warm vanilla & amber' },
    { id: 'office', title: 'Professional', icon: '💼', subtitle: 'Crisp iris & cedar' },
    { id: 'clubbing', title: 'Night Out', icon: '🔥', subtitle: 'Bold & magnetic' }
  ];

  const handleQuickRankSubmit = (e) => {
    e.preventDefault();
    if (!quickFragName.trim()) return;
    setQuickRankedNotice(true);
    setTimeout(() => {
      setQuickFragName('');
      setQuickRankedNotice(false);
    }, 2000);
  };

  const topFeedFragrances = FRAGRANCE_DATABASE.slice(0, 6);

  return (
    <div className="space-y-8 animate-fadeIn py-2 text-[#1c1917]">
      
      {/* Hero Header */}
      <div className="text-center space-y-2 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-950 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          Personal Fragrance Curator
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1c1917] font-bold tracking-tight leading-tight">
          Find Your Signature Scent
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto font-medium">
          Take a 30-second quiz to discover fragrances tailored to your style and mood.
        </p>
      </div>

      {/* SECTION 1: INTERACTIVE MINI MATCH WIDGET */}
      <div className="glass-card rounded-3xl p-5 border border-stone-200 bg-[#f4f0ea] space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-stone-900 text-orange-400 border border-orange-500/20 flex items-center justify-center shadow-2xs">
              <Search className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                Quick Scent Matcher
              </h3>
              <p className="text-xs text-stone-600">Select an occasion to start your personalized recommendation match</p>
            </div>
          </div>
          <button 
            onClick={onStartQuiz}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-1"
          >
            Full Matcher →
          </button>
        </div>

        {/* Mini Occasion Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {quickOccasions.map((occ) => {
            const isSelected = selectedOccasion === occ.id;
            return (
              <div
                key={occ.id}
                onClick={() => setSelectedOccasion(occ.id)}
                className={`p-2.5 rounded-2xl cursor-pointer border text-left transition-all ${
                  isSelected
                    ? 'bg-stone-800 text-white border-stone-700 shadow-xs'
                    : 'bg-white text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <span className="text-lg block mb-0.5">{occ.icon}</span>
                <h4 className="font-serif font-bold text-xs line-clamp-1">{occ.title}</h4>
                <p className={`text-[10px] line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {occ.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={onStartQuiz}
          className="w-full py-3.5 rounded-2xl bg-[#1c1917] hover:bg-stone-800 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all group border border-stone-800 hover:border-orange-500/40"
        >
          <span>Run Full Scent Matcher Quiz</span>
          <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* SECTION 2: INTERACTIVE EXPLORE FEED WIDGET */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#1c1917]" />
            <h3 className="font-serif font-bold text-xl text-[#1c1917]">
              Explore Fragrance Feed
            </h3>
          </div>
          <button
            onClick={onStartBrowse}
            className="text-xs font-semibold text-stone-700 hover:text-[#1c1917] flex items-center gap-1"
          >
            <span>View All ({FRAGRANCE_DATABASE.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Horizontal Mini Scroll Feed */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
          {topFeedFragrances.map((frag) => {
            const isWishlisted = Boolean(wishlist?.some(w => w.id === frag.id));

            return (
              <div
                key={frag.id}
                className="w-52 shrink-0 p-4 rounded-3xl bg-[#f4f0ea] border border-stone-200 flex flex-col justify-between hover:border-stone-400 transition-all shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase font-sans tracking-wider text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200 font-semibold">
                      {frag.category}
                    </span>
                    <button
                      onClick={() => onToggleWishlist(frag)}
                      className={`p-1.5 rounded-full border transition-colors ${
                        isWishlisted ? 'bg-rose-100 border-rose-300 text-rose-600' : 'bg-white border-stone-200 text-stone-400'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  <BottleVisualizer fragrance={frag} size="sm" />

                  <div className="text-center space-y-0.5">
                    <h4 className="font-serif font-bold text-[#1c1917] text-sm line-clamp-1">
                      {frag.name}
                    </h4>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
                      {frag.brand} • <span className="font-serif font-bold text-[#1c1917]">{frag.estimatedPrice}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onSelectDetail(frag)}
                  className="w-full mt-3 py-2 rounded-xl bg-white border border-stone-300 text-[#1c1917] text-[11px] font-semibold hover:bg-stone-100 transition-colors"
                >
                  View Details & Notes
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: INTERACTIVE SOCIAL & RANKED SHELVES WIDGET */}
      <div className="glass-card rounded-3xl p-5 border border-stone-200 bg-[#f4f0ea] space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#1c1917] text-white flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                Community & Ranked Shelves
              </h3>
              <p className="text-xs text-stone-600">See what friends are wearing & rank your collection</p>
            </div>
          </div>
          <button
            onClick={onOpenSocial}
            className="text-xs font-bold text-[#1c1917] hover:underline flex items-center gap-1"
          >
            Full Network →
          </button>
        </div>

        {/* Quick Rank Form on Home Page */}
        <form onSubmit={handleQuickRankSubmit} className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-2">
          <span className="text-[10px] uppercase font-sans tracking-wider text-stone-600 font-bold block">
            ⚡ Quick Rank a Fragrance You Wear:
          </span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Fragrance Name..."
              value={quickFragName}
              onChange={(e) => setQuickFragName(e.target.value)}
              className="flex-1 bg-[#f4f0ea] border border-stone-300 rounded-xl px-3 py-2 text-xs text-[#1c1917] focus:outline-none focus:border-[#1c1917]"
            />
            <select
              value={quickRating}
              onChange={(e) => setQuickRating(e.target.value)}
              className="bg-[#f4f0ea] border border-stone-300 rounded-xl px-2 py-2 text-xs text-[#1c1917] font-bold"
            >
              <option value="10.0">★ 10.0</option>
              <option value="9.5">★ 9.5</option>
              <option value="9.0">★ 9.0</option>
              <option value="8.5">★ 8.5</option>
            </select>
            <button
              type="submit"
              className="px-3 py-2 bg-[#1c1917] text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition-colors shrink-0"
            >
              Rank
            </button>
          </div>
          {quickRankedNotice && (
            <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Added to your ranked shelf!
            </p>
          )}
        </form>

        {/* Mini Live Friends Feed */}
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-sans tracking-wider text-stone-600 font-bold block">
            Recent Friend Reviews:
          </span>
          {MOCK_ACTIVITY_FEED.slice(0, 2).map((act) => (
            <div key={act.id} className="p-3 rounded-2xl bg-white border border-stone-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <img src={act.avatar} alt={act.friendName} className="w-7 h-7 rounded-full object-cover border border-stone-300" />
                <div>
                  <h4 className="font-bold text-[#1c1917]">{act.friendName}</h4>
                  <p className="text-[10px] text-stone-500">{act.fragranceName} • ★ {act.rating}</p>
                </div>
              </div>
              <span className="text-[10px] text-stone-400">{act.timeAgo}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onOpenSocial}
          className="w-full py-3 rounded-2xl bg-white hover:bg-stone-100 border border-stone-300 text-[#1c1917] font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Open Full Social Network</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
