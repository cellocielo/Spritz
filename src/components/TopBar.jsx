import React from 'react';
import { Settings } from 'lucide-react';

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
      className="sticky top-0 z-30 w-full bg-[#faf9f6]/90 backdrop-blur-md px-3 sm:px-4 py-2.5 border-b border-stone-200/60 shadow-2xs transition-all"
    >
      <div className="max-w-xl mx-auto grid grid-cols-3 items-center">
        
        {/* Top-Left: User Tag */}
        <div className="flex items-center justify-start">
          <button
            id="user-tag-button"
            onClick={onProfileClick}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 hover:bg-white border border-stone-200/90 shadow-2xs hover:border-stone-300 transition-all text-xs font-semibold text-stone-800 tracking-tight active:scale-95 group shrink-0"
            title="Your Profile Tag"
          >
            <span className="text-amber-700 font-mono font-bold text-xs">@</span>
            <span className="font-medium text-stone-700 group-hover:text-stone-900 transition-colors truncate max-w-[95px] sm:max-w-[130px]">
              {displayTag.replace(/^@/, '')}
            </span>
          </button>
        </div>

        {/* Center: Profile Picture */}
        <div className="flex items-center justify-center">
          <button
            id="center-profile-picture-button"
            onClick={onProfileClick}
            className="relative group transition-transform active:scale-95 focus:outline-none shrink-0"
            title="View Profile / Shelf"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-400/40 via-stone-300/40 to-stone-400/40 ring-1 ring-stone-200 shadow-xs group-hover:ring-stone-400 transition-all">
              <img
                src={userAvatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Online / Active status badge */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#faf9f6]" />
          </button>
        </div>

        {/* Top-Right: Settings Icon */}
        <div className="flex items-center justify-end">
          <button
            id="top-settings-button"
            onClick={onOpenSettings}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 bg-white/95 hover:bg-white border border-stone-200/90 shadow-2xs transition-all active:scale-95 hover:border-stone-300 shrink-0"
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
