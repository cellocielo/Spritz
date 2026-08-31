import React, { useState } from 'react';
import { X, Heart, Trash2, Copy, Check, Sparkles } from 'lucide-react';

export default function WishlistDrawer({ wishlist, onClose, onRemoveFromWishlist, onSelectDetail }) {
  const [copied, setCopied] = useState(false);

  const handleCopyWishlist = () => {
    if (wishlist.length === 0) return;
    const text = "✨ My ScentMatch Fragrance Wishlist:\n\n" + 
      wishlist.map(item => `• ${item.name} by ${item.brand} (${item.estimatedPrice})`).join("\n") +
      "\n\nCurated with ScentMatch";
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="w-full max-w-md bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl p-6 space-y-5 shadow-2xl relative max-h-[85vh] overflow-y-auto text-stone-900">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#faf9f6] text-stone-600 hover:text-stone-900 transition-colors border border-stone-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Saved Favorites ({wishlist.length})
            </h2>
          </div>
          <p className="text-xs text-stone-600 font-medium">
            Your saved fragrance recommendations for quick reference & sampling.
          </p>
        </div>

        {/* Wishlist Items List */}
        {wishlist.length === 0 ? (
          <div className="text-center py-12 space-y-3 bg-[#faf9f6] rounded-3xl border border-stone-200 p-6">
            <div className="w-12 h-12 rounded-full bg-white border border-stone-300 flex items-center justify-center mx-auto text-stone-400">
              <Heart className="w-6 h-6" />
            </div>
            <p className="text-sm font-serif text-stone-900 font-bold">Your wishlist is currently empty</p>
            <p className="text-xs text-stone-600 font-medium">
              Tap the heart icon on any fragrance card to save it here for later sampling.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-3xl bg-[#faf9f6] border border-stone-200 flex items-center justify-between gap-3 hover:border-stone-400 transition-colors"
              >
                <div 
                  onClick={() => {
                    onClose();
                    onSelectDetail(item);
                  }}
                  className="flex-1 cursor-pointer space-y-0.5"
                >
                  <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-1.5">
                    {item.name}
                    <span className="text-xs font-sans text-stone-600 font-bold">
                      {item.estimatedPrice}
                    </span>
                  </h4>
                  <p className="text-xs text-stone-500 font-sans uppercase tracking-wider font-semibold">
                    {item.brand}
                  </p>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(item.id)}
                  className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        {wishlist.length > 0 && (
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={handleCopyWishlist}
              className="flex-1 py-3 px-4 rounded-2xl bg-stone-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-stone-800 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Wishlist Copied!' : 'Copy Wishlist Text'}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
