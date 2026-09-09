import React from 'react';

/**
 * Custom Spritz Atomizer Icon based directly on reference artwork:
 * Vintage bulb atomizer perfume bottle with curved delivery tube,
 * circular flacon, internal dip tube, nozzle orifice, and dynamic
 * triple-stream spray mist with atomized droplets & scent particles.
 * 
 * Transparent background & vibrant luxury orange (#f97316).
 */
export function SpritzIcon({ 
  className = "w-8 h-8 text-orange-500", 
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
      {/* Outer Sweeping Atomizer Delivery Tube */}
      <path 
        d="M45.5 40.5 C34.5 42 30 54 30 65 C30 78 41 86 53 86 C64 86 73 78 73 66" 
        stroke={color} 
        strokeWidth="3.4" 
        strokeLinecap="round" 
      />

      {/* Spherical Perfume Flacon Body */}
      <circle 
        cx="54" 
        cy="65" 
        r="16.5" 
        stroke={color} 
        strokeWidth="3.4" 
        strokeLinecap="round" 
      />

      {/* Internal Dip Tube curved into the scent liquid */}
      <path 
        d="M48.5 48 C48.5 56 46.5 64 43 68.5" 
        stroke={color} 
        strokeWidth="2.8" 
        strokeLinecap="round" 
      />

      {/* Sprayer Collar / Neck */}
      <path 
        d="M45 48 C45 45.5 46.8 44.5 48.5 44.5 C50.2 44.5 52 45.5 52 48 Z" 
        fill={color} 
      />

      {/* Atomizer Nozzle Head */}
      <circle 
        cx="48.5" 
        cy="39.5" 
        r="5.2" 
        fill={color} 
      />
      {/* Spray Orifice Eyelet (Hole) */}
      <circle 
        cx="49.8" 
        cy="39.5" 
        r="2" 
        fill="#ffffff" 
      />

      {/* Triple Spray Jet Mist Rays Shooting to the Right */}
      {/* Upper Stream Ray */}
      <path 
        d="M54.5 37 L73 30.5" 
        stroke={color} 
        strokeWidth="2.6" 
        strokeLinecap="round" 
      />
      {/* Central Stream Ray */}
      <path 
        d="M55.5 39.5 L76.5 39.5" 
        stroke={color} 
        strokeWidth="2.8" 
        strokeLinecap="round" 
      />
      {/* Lower Stream Ray */}
      <path 
        d="M54.5 42 L73 48.5" 
        stroke={color} 
        strokeWidth="2.6" 
        strokeLinecap="round" 
      />

      {/* Fine Atomized Droplets & Mist Particles flying radially */}
      {/* Upper Top Teardrop */}
      <path 
        d="M66 26 C67 24 69 24.5 70 26 C71 27.5 70 29 68.5 29 C67 28.5 65.5 27.5 66 26 Z" 
        fill={color} 
      />
      {/* Upper Outer Droplet */}
      <path 
        d="M74 24.5 C75 23 76.8 23.5 77.5 25 C78.2 26.5 77 27.8 75.8 27.5 C74.5 27 73.5 26 74 24.5 Z" 
        fill={color} 
      />
      {/* Upper Right Mist Dot */}
      <circle cx="80" cy="30" r="1.9" fill={color} />

      {/* Middle Far Droplet */}
      <path 
        d="M80 37.5 C81.5 36.5 83.5 37.5 83.5 39.5 C83.5 41.5 81.5 42.5 80 41.5 C79 40.5 79 38.5 80 37.5 Z" 
        fill={color} 
      />
      {/* Middle Floating Specks */}
      <circle cx="85" cy="39.5" r="1.5" fill={color} />
      <circle cx="79.5" cy="44.5" r="2" fill={color} />

      {/* Lower Teardrop Droplet */}
      <path 
        d="M74 52.5 C73 54 71.5 53.5 70.8 52 C70 50.5 71.2 49.5 72.5 49.8 C73.5 50.2 74.5 51.2 74 52.5 Z" 
        fill={color} 
      />
      {/* Lower Outer Droplet */}
      <circle cx="77.5" cy="54" r="1.8" fill={color} />

      {/* Micro Mist Particles near Nozzle */}
      <circle cx="63" cy="34" r="1.3" fill={color} />
      <circle cx="67" cy="45" r="1.4" fill={color} />
      <circle cx="61.5" cy="44" r="1.2" fill={color} />
    </svg>
  );
}

/**
 * Complete Spritz Brand Lockup with transparent background & orange logo
 */
export default function SpritzLogo({ 
  showWordmark = true, 
  size = "md",
  className = "" 
}) {
  const sizeMap = {
    sm: { icon: "w-6 h-6", text: "text-base", sub: "text-[7px]" },
    md: { icon: "w-8 h-8", text: "text-lg sm:text-xl", sub: "text-[8px] sm:text-[9px]" },
    lg: { icon: "w-11 h-11", text: "text-2xl", sub: "text-[10px]" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Brand Icon Mark - Transparent background, orange icon */}
      <div className="flex items-center justify-center text-orange-500 hover:scale-105 transition-transform shrink-0">
        <SpritzIcon className={`${currentSize.icon} text-orange-500`} />
      </div>

      {/* Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col select-none">
          <span className={`font-serif font-bold ${currentSize.text} leading-none tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors`}>
            Spritz
          </span>
          <span className={`font-sans font-semibold ${currentSize.sub} tracking-widest uppercase text-stone-500 mt-0.5`}>
            Parfumerie
          </span>
        </div>
      )}
    </div>
  );
}
