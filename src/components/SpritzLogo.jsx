import React from 'react';

/**
 * Spritz Brand Logo component using /logo.png
 */
export function SpritzIcon({ 
  className = "h-8 w-auto", 
  alt = "Spritz",
  ...props 
}) {
  return (
    <img 
      src="/logo.png" 
      alt={alt}
      className={`object-contain select-none ${className}`}
      {...props}
    />
  );
}

/**
 * Complete Spritz Brand Logo
 * Renders the brand logo from logo.png directly.
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
    xs: { img: "h-5 w-auto", text: "text-xs", gap: "gap-1" },
    sm: { img: "h-7 sm:h-8 w-auto", text: "text-base sm:text-lg", gap: "gap-1" },
    md: { img: "h-10 sm:h-11 w-auto", text: "text-xl sm:text-2xl", gap: "gap-1.5" },
    lg: { img: "h-14 sm:h-16 w-auto", text: "text-2xl sm:text-3xl", gap: "gap-2" },
    xl: { img: "h-20 sm:h-24 w-auto", text: "text-3xl sm:text-4xl", gap: "gap-3" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center ${currentSize.gap} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Brand Icon / Logo Image */}
      <div className="flex items-center justify-center hover:scale-105 transition-transform shrink-0">
        <img 
          src="/logo.png" 
          alt="Spritz Logo" 
          className={`${currentSize.img} object-contain select-none pointer-events-none`}
        />
      </div>

      {/* Typography Wordmark (optional) */}
      {showWordmark && (
        <span className={`font-brand ${weight} ${currentSize.text} leading-none tracking-tighter text-[#ff5500] select-none`}>
          {text}
        </span>
      )}
    </div>
  );
}
