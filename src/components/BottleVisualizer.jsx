import React from 'react';

/**
 * Custom SVG/CSS Fragrance Bottle Graphic Component
 * Generates visual perfume bottles with custom glass shapes, cap textures, and fluid colors.
 */
export default function BottleVisualizer({ fragrance, size = "md" }) {
  const {
    id = "generic",
    name = "Fragrance",
    brand = "Boutique",
    accentColor = "#f59e0b",
    gradient = "from-amber-600 to-amber-950"
  } = fragrance || {};

  // Custom bottle silhouette styling based on fragrance profile
  const getBottleSpecs = () => {
    switch (id) {
      case 'br540':
        return {
          cap: 'gold-cube',
          glassColor: 'linear-gradient(135deg, #d97706 0%, #991b1b 60%, #451a03 100%)',
          liquidColor: '#fbbf24',
          labelBg: '#7f1d1d',
          labelText: '#fef3c7',
          shape: 'square-luxury'
        };
      case 'replica-jazz-club':
      case 'replica-by-the-fireplace':
        return {
          cap: 'apothecary-silver',
          glassColor: 'linear-gradient(180deg, rgba(251, 191, 36, 0.3) 0%, rgba(180, 83, 9, 0.8) 100%)',
          liquidColor: '#d97706',
          labelBg: '#fef3c7',
          labelText: '#1c1917',
          shape: 'apothecary'
        };
      case 'diptyque-philosykos':
        return {
          cap: 'black-oval',
          glassColor: 'linear-gradient(180deg, rgba(16, 185, 129, 0.2) 0%, rgba(15, 118, 110, 0.7) 100%)',
          liquidColor: '#34d399',
          labelBg: '#ffffff',
          labelText: '#064e3b',
          shape: 'oval-classic'
        };
      case 'bleu-de-chanel':
        return {
          cap: 'magnetic-navy',
          glassColor: 'linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%)',
          liquidColor: '#60a5fa',
          labelBg: 'transparent',
          labelText: '#e0f2fe',
          shape: 'square-heavy'
        };
      case 'santal-33':
        return {
          cap: 'silver-industrial',
          glassColor: 'linear-gradient(180deg, rgba(254, 240, 138, 0.4) 0%, rgba(217, 119, 6, 0.6) 100%)',
          liquidColor: '#fef08a',
          labelBg: '#fefce8',
          labelText: '#292524',
          shape: 'apothecary-lab'
        };
      case 'angels-share':
        return {
          cap: 'crystal-cut',
          glassColor: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
          liquidColor: '#f59e0b',
          labelBg: '#451a03',
          labelText: '#fef3c7',
          shape: 'crystal-tumbler'
        };
      case 'sauvage-elixir':
        return {
          cap: 'midnight-black',
          glassColor: 'linear-gradient(180deg, #1e1b4b 0%, #020617 100%)',
          liquidColor: '#818cf8',
          labelBg: '#0f172a',
          labelText: '#c7d2fe',
          shape: 'potion-heavy'
        };
      case 'glossier-you':
        return {
          cap: 'pink-sculpted',
          glassColor: 'linear-gradient(180deg, #fbcfe8 0%, #f43f5e 100%)',
          liquidColor: '#fda4af',
          labelBg: '#fff1f2',
          labelText: '#881337',
          shape: 'thumbprint-soft'
        };
      case 'creed-aventus':
        return {
          cap: 'crown-black',
          glassColor: 'linear-gradient(180deg, #334155 0%, #0f172a 100%)',
          liquidColor: '#fbbf24',
          labelBg: '#020617',
          labelText: '#fef3c7',
          shape: 'flacon-regal'
        };
      default:
        return {
          cap: 'champagne-gold',
          glassColor: 'linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(120, 53, 15, 0.8) 100%)',
          liquidColor: accentColor,
          labelBg: '#fffbebf0',
          labelText: '#1c1917',
          shape: 'classic'
        };
    }
  };

  const specs = getBottleSpecs();

  const sizeClasses = {
    sm: "w-16 h-24",
    md: "w-24 h-36",
    lg: "w-32 h-48"
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${sizeClasses[size] || sizeClasses.md} mx-auto my-1 shrink-0 group`}>
      
      {/* Ambient Bottle Backlight Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none"
        style={{ background: specs.liquidColor }}
      />

      {/* Bottle Cap */}
      <div className="w-1/3 h-5 bg-gradient-to-b from-stone-200 via-amber-200 to-stone-400 rounded-t-sm shadow-md border border-stone-300/40 relative z-10 flex items-center justify-center">
        <div className="w-full h-1 bg-stone-900/30" />
      </div>

      {/* Bottle Spray Collar */}
      <div className="w-1/4 h-2 bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 shadow-sm relative z-10" />

      {/* Glass Bottle Body */}
      <div 
        className="w-full flex-1 rounded-2xl border border-white/40 shadow-2xl relative overflow-hidden flex flex-col items-center justify-between p-2 backdrop-blur-sm"
        style={{ background: specs.glassColor }}
      >
        {/* Glass reflection shine */}
        <div className="absolute top-0 left-1.5 w-2 h-full bg-gradient-to-r from-white/40 to-transparent transform -skew-x-12 pointer-events-none" />

        {/* Brand & Name Label Sticker */}
        <div 
          className="w-5/6 my-auto p-1.5 rounded-lg border border-stone-300/30 shadow-md text-center backdrop-blur-md"
          style={{ background: specs.labelBg, color: specs.labelText }}
        >
          <p className="text-[7px] font-sans uppercase tracking-widest opacity-80 leading-none">
            {brand}
          </p>
          <h5 className="text-[9px] font-serif font-bold tracking-tight line-clamp-1 mt-0.5">
            {name}
          </h5>
        </div>

        {/* Liquid Base Amber Line */}
        <div 
          className="w-full h-1.5 rounded-b-xl opacity-80"
          style={{ background: specs.liquidColor }}
        />
      </div>

    </div>
  );
}
