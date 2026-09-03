import React from 'react';
import BottleClipart from './BottleClipart';

/**
 * Fragrance Bottle Visualizer Component
 * Pure vector clipart rendering of bespoke perfume bottles
 * - Zero external CDN dependencies, 100% reliable
 * - Custom illustrated vector silhouettes (Chanel square, Le Labo rounded apothecary, Kilian tumbler, etc.)
 * - Soft gradients, specular glass reflections, and ambient drop shadows matching the exact clipart aesthetic
 */
export default function BottleVisualizer({ fragrance, size = "md", className = "" }) {
  return (
    <BottleClipart 
      fragrance={fragrance} 
      size={size} 
      className={className} 
    />
  );
}


