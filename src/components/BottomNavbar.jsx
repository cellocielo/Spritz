import React from 'react';
import { Layers, PlusCircle, Users, Map } from 'lucide-react';

export default function BottomNavbar({ 
  viewMode, 
  setViewMode 
}) {
  const isShelfActive = viewMode === 'collection' || viewMode === 'home';
  const isMapActive = viewMode === 'map';
  const isAddActive = viewMode === 'add' || viewMode === 'browse';
  const isFriendsActive = viewMode === 'friends' || viewMode === 'social';

  return (
    <div 
      id="bottom-floating-navbar-container"
      className="fixed bottom-8 sm:bottom-10 md:bottom-12 left-0 right-0 z-40 max-w-xl mx-auto px-4 pointer-events-none flex justify-center"
    >
      {/* Floating Centered Icon Dock - Icons only, extra bottom clearance */}
      <nav 
        id="floating-navbar"
        aria-label="Primary Navigation"
        className="pointer-events-auto flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md p-2 rounded-full border border-stone-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/5"
      >
        {/* Tab 1: My Shelf */}
        <button
          id="nav-tab-shelf"
          onClick={() => setViewMode('collection')}
          aria-label="My Shelf"
          title="My Shelf"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            isShelfActive
              ? 'bg-stone-900 text-white shadow-sm scale-105'
              : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100 active:scale-95'
          }`}
        >
          <Layers className="w-5 h-5" />
        </button>

        {/* Tab 2: Map */}
        <button
          id="nav-tab-map"
          onClick={() => setViewMode('map')}
          aria-label="Olfactory Map"
          title="Olfactory Map"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            isMapActive
              ? 'bg-stone-900 text-white shadow-sm scale-105'
              : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100 active:scale-95'
          }`}
        >
          <Map className="w-5 h-5" />
        </button>

        {/* Tab 3: Add */}
        <button
          id="nav-tab-add"
          onClick={() => setViewMode('add')}
          aria-label="Add Fragrance"
          title="Add Fragrance"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            isAddActive
              ? 'bg-stone-900 text-white shadow-sm scale-105'
              : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100 active:scale-95'
          }`}
        >
          <PlusCircle className="w-5 h-5" />
        </button>

        {/* Tab 4: Friends */}
        <button
          id="nav-tab-friends"
          onClick={() => setViewMode('friends')}
          aria-label="Collector Friends"
          title="Collector Friends"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            isFriendsActive
              ? 'bg-stone-900 text-white shadow-sm scale-105'
              : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100 active:scale-95'
          }`}
        >
          <Users className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}
