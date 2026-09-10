import React from 'react';
import { Settings } from 'lucide-react';
import SpritzLogo from './SpritzLogo';

export default function TopBar({ 
  userTag = '@owen_scents',
  userAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  onProfileClick,
  onOpenSettings
}) {
  const displayTag = userTag.startsWith('@') ? userTag : `@${userTag}`;

  return (
    <header 
      id="top-bar"
      className="sticky top-0 z-30 w-full bg-[#faf9f6]/95 backdrop-blur-md px-3 sm:px-4 py-2.5 border-b border-stone-200/60 shadow-2xs transition-all"
    >
      <div className="max-w-xl mx-auto relative flex items-center justify-between gap-2">
        
        {/* Left: Profile Picture */}
        <div className="flex items-center justify-start shrink-0 z-10">
          <button
            id="center-profile-picture-button"
            onClick={onProfileClick}
            className="relative group transition-transform active:scale-95 focus:outline-none shrink-0"
            title="View Profile / Shelf"
            aria-label="View Profile"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full p-0.5 bg-gradient-to-tr from-orange-500 via-amber-400 to-stone-200 ring-1 ring-orange-200/90 shadow-xs group-hover:ring-orange-400 transition-all">
              <img
                src={userAvatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Online / Active status badge */}
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#faf9f6]" />
          </button>
        </div>

        {/* Center: Spritz Brand Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto">
          <button
            id="brand-logo-button"
            onClick={onProfileClick}
            className="flex items-center justify-center p-1 rounded-xl hover:bg-orange-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            title="Spritz Home"
            aria-label="Spritz Home"
          >
            <SpritzLogo 
              size="md" 
              showWordmark={false}
            />
          </button>
        </div>

        {/* Right Section: Settings */}
        <div className="flex items-center justify-end shrink-0 z-10">
          <button
            id="top-settings-button"
            onClick={onOpenSettings}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-orange-600 bg-white/95 hover:bg-white border border-stone-200/90 shadow-2xs transition-all active:scale-95 hover:border-orange-300/80 hover:bg-orange-50/40 shrink-0"
            title="Settings"
            aria-label="Settings"
          >
            <Settings className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.9]" />
          </button>
        </div>

      </div>
    </header>
  );
}
