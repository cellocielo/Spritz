import React from 'react';
import { Layers, PlusCircle, Users, Map } from 'lucide-react';

function SpritzBottleIcon({ className = "w-5 h-5 text-amber-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Spritzer Cap Button */}
      <path d="M10 4h4" />
      <path d="M12 4v3" />
      {/* Bottle Neck & Collar */}
      <path d="M9 7h6v3H9z" />
      {/* Bottle Body */}
      <rect x="6" y="10" width="12" height="11" rx="3" />
      {/* Spritz Fine Mist Rays */}
      <path d="M4 3l-2-2" />
      <path d="M3 6H1" />
      <path d="M4 9l-2 2" />
    </svg>
  );
}

export default function Header({ 
  viewMode, 
  setViewMode
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-2.5 shadow-2xs">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
        
        {/* Spritz Perfume Bottle Visual Logo (NO TEXT WORDS) */}
        <div 
          onClick={() => setViewMode('collection')}
          className="cursor-pointer group flex items-center shrink-0 pl-1"
          title="ScentMatch"
        >
          <div className="w-10 h-10 rounded-2xl bg-stone-900 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform border border-stone-800">
            <SpritzBottleIcon className="w-5 h-5 text-amber-400" />
          </div>
        </div>

        {/* 4 Minimal Navigation Tabs */}
        <div className="flex items-center bg-stone-100 p-1 rounded-2xl border border-stone-200 text-xs font-bold shrink-0">
          
          {/* Tab 1: My Shelf */}
          <button
            onClick={() => setViewMode('collection')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              viewMode === 'collection' || viewMode === 'home'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>My Shelf</span>
          </button>

          {/* Tab 2: Map */}
          <button
            onClick={() => setViewMode('map')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              viewMode === 'map'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Map</span>
          </button>

          {/* Tab 3: Add */}
          <button
            onClick={() => setViewMode('add')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              viewMode === 'add' || viewMode === 'browse'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>

          {/* Tab 4: Friends */}
          <button
            onClick={() => setViewMode('friends')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              viewMode === 'friends' || viewMode === 'social'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Friends</span>
          </button>

        </div>

      </div>
    </header>
  );
}
