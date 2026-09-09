import React from 'react';

/**
 * Custom Spritz S-Bottle Icon:
 * Accurately crafted from the reference brand artwork:
 * An iconic, bold-line perfume bottle and letter "S" hybrid with:
 * - Atomizer spray cap with nozzle orifice
 * - Dual spray mist emission arcs & 4 circular mist droplets
 * - Slanted central dip tube
 * - Right shoulder contour with round cap
 * - Inner upper 'S' loop
 * - Continuous outer 'S' silhouette wrapping into the circular bottom flacon
 * - Enclosed liquid reservoir contour in the base
 *
 * Transparent background, uniform stroke weight, round caps and joins.
 */
export function SpritzIcon({ 
  className = "w-8 h-8 text-[#ff5500]", 
  color = "currentColor",
  ...props 
}) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <g 
        stroke={color} 
        strokeWidth="5.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Spray Mist Emission Trails */}
        <path d="M 65 14.5 C 69 13 72.5 11.5 76 9.5" />
        <path d="M 65 19 C 69 21.5 72.5 24 76 26" />

        {/* 4 Spray Mist Droplets */}
        <circle cx="81.5" cy="8.5" r="2.7" fill={color} stroke="none" />
        <circle cx="75.5" cy="17.5" r="2.7" fill={color} stroke="none" />
        <circle cx="84.5" cy="17.5" r="2.7" fill={color} stroke="none" />
        <circle cx="81.5" cy="26.5" r="2.7" fill={color} stroke="none" />

        {/* Atomizer Pump Cap with Nozzle Orifice Notch */}
        <path d="M 47 24 V 13 H 55 C 57.5 13 58 14 58 15.5 V 17 H 54.5 V 20.5 H 58 V 24" />

        {/* Dip Tube descending through waist into liquid */}
        <path d="M 50.5 24 C 49.5 38 47.5 52 44.5 65" />

        {/* Right Shoulder Curve */}
        <path d="M 58 24 C 64 25.5 72 30 72 40" />

        {/* Inner Upper Loop of the 'S' */}
        <path d="M 47 24 C 39 25 36 32 36 38 C 36 43 40 47 47 49 L 66 56 C 71 58 74 62 74 69" />

        {/* Continuous Outer 'S' Contour */}
        <path d="M 47 13.5 C 38 9.5 25 15 25 28 C 25 39 31 47 47 52 L 67 58 C 77 62 84 69 84 78 C 84 88 72 94 53 94 C 35 94 22 86 22 72 C 22 63 24 55 25 47" />

        {/* Liquid Reservoir in Base */}
        <path d="M 27 65 C 35 66.5 53 69 72 70.5 C 69 79.5 62 84.5 53 84.5 C 43 84.5 33 79 27 65 Z" />
      </g>
    </svg>
  );
}

/**
 * Complete Spritz Brand Icon Mark
 * Clean S-shaped bottle emblem with optional wordmark.
 */
export default function SpritzLogo({ 
  showWordmark = false, 
  size = "md",
  text = "spritz",
  weight = "font-normal",
  className = "",
  onClick
}) {
  const sizeMap = {
    xs: { icon: "w-6 h-6", text: "text-base sm:text-lg", gap: "gap-0.5" },
    sm: { icon: "w-7 h-7 sm:w-8 sm:h-8", text: "text-lg sm:text-xl", gap: "gap-1" },
    md: { icon: "w-8 h-8 sm:w-9 sm:h-9", text: "text-2xl sm:text-3xl", gap: "gap-1.5" },
    lg: { icon: "w-14 h-14 sm:w-16 sm:h-16", text: "text-3xl sm:text-4xl", gap: "gap-2" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center ${currentSize.gap} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Brand Icon Mark - Clean S-shaped perfume bottle */}
      <div className="flex items-center justify-center text-[#ff5500] hover:scale-105 transition-transform shrink-0">
        <SpritzIcon className={`${currentSize.icon} text-[#ff5500]`} />
      </div>

      {/* Typography Wordmark (hidden by default per user request) */}
      {showWordmark && (
        <span className={`font-brand ${weight} ${currentSize.text} leading-none tracking-tighter text-[#ff5500] select-none`}>
          {text}
        </span>
      )}
    </div>
  );
}
