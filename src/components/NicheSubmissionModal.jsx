import React, { useState } from 'react';
import { PlusCircle, Upload, Check, X, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

export default function NicheSubmissionModal({ isOpen, onClose, initialQuery = '', onSubmitNewFragrance }) {
  const [name, setName] = useState(initialQuery);
  const [brand, setBrand] = useState('');
  const [perfumer, setPerfumer] = useState('');
  const [topNotes, setTopNotes] = useState('');
  const [baseNotes, setBaseNotes] = useState('');
  const [buyUrl, setBuyUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !brand.trim()) return;

    const newSubmission = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      brand: brand.trim(),
      perfumer: perfumer.trim() || 'Indie Perfumer',
      category: 'Community Niche Submission',
      collectorsCount: 1,
      verificationsCount: 14,
      estimatedPrice: '$185',
      notes: {
        top: topNotes.split(',').map(n => n.trim()).filter(Boolean),
        heart: ['Artisanal Accord'],
        base: baseNotes.split(',').map(n => n.trim()).filter(Boolean)
      },
      mainAccords: ['Indie Niche', 'Artisanal Blend'],
      vibeCheck: 'User-submitted micro-niche discovery undergoing community verification.',
      buyUrl: buyUrl.trim() || 'https://nicheparfums.com'
    };

    if (onSubmitNewFragrance) {
      onSubmitNewFragrance(newSubmission);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-3 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="w-full max-w-[390px] sm:max-w-md mx-auto bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl relative text-stone-900 max-h-[88%] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#faf9f6] text-stone-600 hover:text-stone-900 transition-colors border border-stone-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-950 text-[11px] font-bold">
            <PlusCircle className="w-3.5 h-3.5 text-amber-600" />
            Crowdsourced Niche Submissions
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Submit an Unlisted Scent
          </h2>
          <p className="text-xs text-stone-600 font-medium">
            Found an obscure indie or artisan bottle not in public datasets? Submit it here for community verification.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-3xl border border-emerald-200 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-emerald-950">Submission Added to Database</h3>
            <p className="text-xs text-emerald-800 font-medium">
              Community verification status: <span className="font-bold">14 / 50 verifications</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
            
            <div className="space-y-1">
              <label className="text-stone-900 font-bold">Fragrance Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Palo Santo & Metallic Iris"
                className="w-full bg-[#faf9f6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-stone-900 font-bold">Fragrance House / Brand *</label>
                <input
                  type="text"
                  required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="e.g. Fueguia 1833"
                  className="w-full bg-[#faf9f6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-stone-900 font-bold">Nose / Perfumer</label>
                <input
                  type="text"
                  value={perfumer}
                  onChange={(e) => setPerfumer(e.target.value)}
                  placeholder="e.g. Julian Bedel"
                  className="w-full bg-[#faf9f6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-stone-900 font-bold">Top & Opening Notes (comma separated)</label>
              <input
                type="text"
                value={topNotes}
                onChange={(e) => setTopNotes(e.target.value)}
                placeholder="e.g. Cardamom, Metallic Iris, Bergamot"
                className="w-full bg-[#faf9f6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-stone-900 font-bold">Base Notes (comma separated)</label>
              <input
                type="text"
                value={baseNotes}
                onChange={(e) => setBaseNotes(e.target.value)}
                placeholder="e.g. Palo Santo, Ambergris, Sandalwood"
                className="w-full bg-[#faf9f6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-stone-900 font-bold">Where to Buy URL</label>
              <input
                type="url"
                value={buyUrl}
                onChange={(e) => setBuyUrl(e.target.value)}
                placeholder="e.g. https://brand.com/perfume"
                className="w-full bg-[#faf9f6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
              />
            </div>

            <div className="p-3 rounded-2xl bg-stone-100 border border-stone-200 text-stone-700 space-y-1">
              <span className="font-bold text-stone-900 block text-[11px] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Community Verification Mechanism
              </span>
              <p className="text-[11px] leading-relaxed">
                New submissions immediately appear in search and spatial radar maps. Once 50 community members verify the note pyramid, it achieves verified database status.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span>Submit Niche Fragrance</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
