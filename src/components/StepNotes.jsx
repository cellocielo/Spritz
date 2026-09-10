import React from 'react';
import { Sparkles, Trees, Citrus, Cake, Flower2, Shirt, Flame, Feather } from 'lucide-react';

export default function StepNotes({ 
  rankedNotes = [], 
  setRankedNotes, 
  onNext, 
  onPrev 
}) {
  const noteCategories = [
    { id: 'woods', label: 'Woods & Smoky', simpleTerm: 'Cedarwood, Sandalwood & Incense', icon: Trees },
    { id: 'fresh-citrus', label: 'Fresh & Citrus', simpleTerm: 'Bergamot, Grapefruit & Crisp Mint', icon: Citrus },
    { id: 'sweet-gourmand', label: 'Sweet & Gourmand', simpleTerm: 'Vanilla, Caramel & Honey', icon: Cake },
    { id: 'floral', label: 'Floral & Rose', simpleTerm: 'Jasmine, Iris & Rose Petals', icon: Flower2 },
    { id: 'clean-laundry', label: 'Clean & Laundry', simpleTerm: 'Fresh Linen & White Musk', icon: Shirt },
    { id: 'leather-spice', label: 'Leather & Spice', simpleTerm: 'Cardamom, Cinnamon & Leather', icon: Flame },
    { id: 'amber-oriental', label: 'Warm Amber & Oud', simpleTerm: 'Exotic Resins & Saffron', icon: Sparkles },
    { id: 'green-fig', label: 'Green & Fig', simpleTerm: 'Crushed Fig Leaf & Sage', icon: Feather }
  ];

  const handleToggleRankedNote = (id) => {
    if (rankedNotes.includes(id)) {
      setRankedNotes(rankedNotes.filter(n => n !== id));
    } else {
      if (rankedNotes.length < 3) {
        setRankedNotes([...rankedNotes, id]);
      }
    }
  };

  const getRankBadge = (id) => {
    const idx = rankedNotes.indexOf(id);
    if (idx === 0) return { label: '1st Dominant', color: 'bg-[#ff5500] text-white font-bold' };
    if (idx === 1) return { label: '2nd Secondary', color: 'bg-stone-700 text-white font-semibold' };
    if (idx === 2) return { label: '3rd Accent', color: 'bg-stone-300 text-stone-900 font-medium' };
    return null;
  };

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Favorite Fragrance Notes
        </h2>
        <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium">
          Rank your preferred scent notes in order of priority (up to 3).
        </p>
      </div>

      {/* RANKED SCENT NOTES SELECTOR */}
      <div className="space-y-4 animate-fadeIn">
        <div className="text-center space-y-1">
          <p className="text-xs text-[#1c1917] font-bold">
            Select your top scent accords:
          </p>
          <p className="text-[11px] text-stone-600 font-medium">
            Tap in order: <span className="font-bold text-[#1c1917]">1st Dominant</span> ➔ <span className="font-semibold text-stone-800">2nd Secondary</span> ➔ <span className="text-stone-600">3rd Accent</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {noteCategories.map((item) => {
            const Icon = item.icon;
            const rank = getRankBadge(item.id);
            const isSelected = !!rank;

            return (
              <div
                key={item.id}
                onClick={() => handleToggleRankedNote(item.id)}
                className={`p-3 rounded-3xl cursor-pointer transition-all border text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-stone-800 text-white border-stone-700 shadow-md'
                    : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
                }`}
              >
                {rank && (
                  <span className={`absolute top-2 right-2 text-[9px] uppercase px-1.5 py-0.5 rounded-full ${rank.color}`}>
                    {rank.label}
                  </span>
                )}
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center mb-1.5 border ${isSelected ? 'bg-stone-900 border-stone-700 text-[#ff5500]' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#ff5500]' : 'text-[#1c1917]'}`} />
                </div>
                <h3 className="text-xs font-bold font-serif">
                  {item.label}
                </h3>
                <p className={`text-[10px] leading-tight pt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                  {item.simpleTerm}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-2 flex items-center gap-3">
        <button
          onClick={onPrev}
          className="w-1/3 py-3.5 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] font-semibold text-xs hover:bg-stone-200 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={rankedNotes.length === 0}
          className={`w-2/3 py-3.5 rounded-2xl font-bold text-sm transition-all ${
            rankedNotes.length > 0
              ? 'bg-[#1c1917] text-white shadow-md hover:bg-stone-800' 
              : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
          }`}
        >
          Next: Scent Presence & Trail →
        </button>
      </div>

    </div>
  );
}
