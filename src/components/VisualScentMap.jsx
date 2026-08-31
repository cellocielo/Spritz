import React, { useState, useMemo } from 'react';
import { Compass, Grid, Map as MapIcon, ChevronRight, X, Sparkles, AlertCircle, TrendingUp, ShieldAlert, Award } from 'lucide-react';
import { FRAGRANCE_DATABASE } from '../data/fragrances';

// ----- 8-SECTOR RADAR FRAMEWORK (45° INTERVALS) -----
export const EIGHT_RADAR_CATEGORIES = [
  { id: 'CitrusFresh', name: 'Citrus', fullName: 'Citrus / Fresh', icon: '🍋', angle: 0, color: '#0ea5e9', bg: 'bg-sky-500', lightBg: 'bg-sky-50 text-sky-900 border-sky-200' },
  { id: 'AromaticGreen', name: 'Aromatic', fullName: 'Aromatic / Green', icon: '🌿', angle: 45, color: '#10b981', bg: 'bg-emerald-500', lightBg: 'bg-emerald-50 text-emerald-900 border-emerald-200' },
  { id: 'Floral', name: 'Floral', fullName: 'Floral', icon: '🌹', angle: 90, color: '#ec4899', bg: 'bg-pink-500', lightBg: 'bg-pink-50 text-pink-900 border-pink-200' },
  { id: 'Fruity', name: 'Fruity', fullName: 'Fruity', icon: '🍑', angle: 135, color: '#8b5cf6', bg: 'bg-purple-500', lightBg: 'bg-purple-50 text-purple-900 border-purple-200' },
  { id: 'Spicy', name: 'Spicy', fullName: 'Spicy', icon: '🌶️', angle: 180, color: '#ef4444', bg: 'bg-red-500', lightBg: 'bg-red-50 text-red-900 border-red-200' },
  { id: 'Gourmand', name: 'Gourmand', fullName: 'Gourmand', icon: '🍦', angle: 225, color: '#f59e0b', bg: 'bg-amber-500', lightBg: 'bg-amber-50 text-amber-900 border-amber-200' },
  { id: 'AmberResinous', name: 'Amber', fullName: 'Amber / Resinous', icon: '🍯', angle: 270, color: '#d97706', bg: 'bg-amber-700', lightBg: 'bg-yellow-50 text-yellow-950 border-yellow-200' },
  { id: 'Woody', name: 'Woody', fullName: 'Woody', icon: '🪵', angle: 315, color: '#78350f', bg: 'bg-stone-800', lightBg: 'bg-stone-100 text-stone-900 border-stone-300' }
];

// SEMANTIC NOTE DICTIONARY FOR INDUSTRY-STANDARD CLASSIFICATION
const SEMANTIC_NOTE_DICT = {
  CitrusFresh: [
    'citrus', 'lemon', 'grapefruit', 'bergamot', 'mandarin', 'orange', 'yuzu', 'lime', 'neroli', 
    'aquatic', 'marine', 'calone', 'sea', 'salt', 'ozonic', 'water', 'watery', 'aldehydes', 'aldehydic', 'clean'
  ],
  AromaticGreen: [
    'green', 'mint', 'basil', 'sage', 'clary sage', 'lavender', 'rosemary', 'thyme', 'tea', 'black tea', 
    'matcha', 'grass', 'pine', 'pine needles', 'juniper', 'juniper berries', 'eucalyptus', 'fern', 
    'fougere', 'petitgrain', 'herbal', 'chamomile', 'tagetes', 'absinthe'
  ],
  Floral: [
    'floral', 'rose', 'damask rose', 'may rose', 'jasmine', 'moroccan jasmine', 'indian jasmine', 
    'white floral', 'iris', 'orris', 'lily', 'violet', 'violet accord', 'peony', 'tuberose', 'ylang', 
    'ylang-ylang', 'orchid', 'geranium', 'osmanthus', 'heliotrope', 'magnolia', 'freesia', 
    'orange blossom', 'powdery', 'gardenia'
  ],
  Fruity: [
    'fruity', 'apple', 'peach', 'plum', 'berry', 'berries', 'cherry', 'mango', 'pineapple', 
    'coconut', 'melon', 'pear', 'fig', 'fig leaf', 'fig tree', 'blackcurrant', 'raspberry', 
    'strawberry', 'lychee'
  ],
  Spicy: [
    'spicy', 'warm spicy', 'soft spicy', 'fresh spicy', 'pepper', 'pink pepper', 'sichuan pepper', 
    'green pepper', 'cardamom', 'cinnamon', 'clove', 'cloves', 'nutmeg', 'ginger', 'saffron', 
    'coriander', 'cumin', 'star anise', 'pimento'
  ],
  Gourmand: [
    'gourmand', 'sweet', 'vanilla', 'vanille', 'vanilla bean', 'bourbon vanilla', 'caramel', 
    'chocolate', 'cacao', 'coffee', 'honey', 'almond', 'tonka', 'tonka bean', 'praline', 
    'hazelnut', 'sugar', 'marshmallow', 'rum', 'rum absolute', 'cognac', 'boozy', 'chestnut'
  ],
  AmberResinous: [
    'amber', 'resin', 'resinous', 'frankincense', 'myrrh', 'benzoin', 'labdanum', 'opoponax', 
    'incense', 'balsam', 'peru balsam', 'fir resin', 'amberwood', 'ambergris', 'ambrox', 
    'ambroxan', 'ambrette', 'ambrette seeds', 'musk', 'white musk', 'olibanum', 'copal', 'styrax'
  ],
  Woody: [
    'woody', 'wood', 'woody notes', 'cedar', 'cedarwood', 'sandalwood', 'mysore sandalwood', 
    'vetiver', 'haitian vetiver', 'java vetiver oil', 'patchouli', 'oud', 'rare oud wood', 
    'agarwood', 'oakmoss', 'moss', 'leather', 'tobacco', 'tobacco leaf', 'smoke', 'smoky', 
    'iso e super', 'cashmeran', 'gaïac wood', 'guaiac', 'birch', 'cypress', 'fig wood', 'rosewood', 'oak'
  ]
};

// DYNAMIC NOTE PYRAMID & CONCENTRATION WEIGHTING ENGINE
export function calculateFragranceAccordWeights(fragrance) {
  if (!fragrance) return {};

  const nameLower = (fragrance.name || '').toLowerCase();
  const families = fragrance.olfactoryFamilies || [];
  
  // Concentration Profiling
  const isFreshOrEDT = 
    nameLower.includes('edt') || 
    nameLower.includes('cologne') || 
    nameLower.includes("l'eau") ||
    families.some(f => f.includes('fresh') || f.includes('citrus') || f.includes('clean'));

  // Volatility factors: EDT/Fresh prioritizes Top/Heart (50/30/20); EDP/Parfum prioritizes Base (20/30/50)
  const weightFactors = isFreshOrEDT 
    ? { top: 0.5, heart: 0.3, base: 0.2 }
    : { top: 0.2, heart: 0.3, base: 0.5 };

  const rawScores = {
    CitrusFresh: 0,
    AromaticGreen: 0,
    Floral: 0,
    Fruity: 0,
    Spicy: 0,
    Gourmand: 0,
    AmberResinous: 0,
    Woody: 0
  };

  const mapNoteToCategory = (note) => {
    if (!note || typeof note !== 'string') return null;
    const lower = note.toLowerCase().trim();
    for (const cat of EIGHT_RADAR_CATEGORIES) {
      if (SEMANTIC_NOTE_DICT[cat.id]?.some(kw => lower.includes(kw))) {
        return cat.id;
      }
    }
    // Strict omission: No default to Woody!
    return null;
  };

  const processTier = (notesList, factor) => {
    if (!Array.isArray(notesList) || notesList.length === 0) return;
    const validCategories = notesList.map(mapNoteToCategory).filter(Boolean);
    if (validCategories.length === 0) return;
    const scorePerNote = factor / validCategories.length;
    validCategories.forEach(catId => {
      rawScores[catId] += scorePerNote;
    });
  };

  processTier(fragrance.notes?.top, weightFactors.top);
  processTier(fragrance.notes?.heart, weightFactors.heart);
  processTier(fragrance.notes?.base, weightFactors.base);

  const totalRaw = Object.values(rawScores).reduce((a, b) => a + b, 0);

  // Fallback to accordWeights or mainAccords if notes array was sparse
  if (totalRaw === 0) {
    if (fragrance.accordWeights) {
      return { ...fragrance.accordWeights };
    }
    if (Array.isArray(fragrance.mainAccords)) {
      fragrance.mainAccords.forEach(acc => {
        const cat = mapNoteToCategory(acc.name);
        if (cat) rawScores[cat] += (acc.score || 50) / 100;
      });
    }
  }

  const finalTotal = Object.values(rawScores).reduce((a, b) => a + b, 0);
  const normalized = {};
  EIGHT_RADAR_CATEGORIES.forEach(cat => {
    normalized[cat.id] = finalTotal > 0 ? parseFloat((rawScores[cat.id] / finalTotal).toFixed(2)) : 0;
  });

  return normalized;
}

// ----- MAIN COMPONENT -----
export default function VisualScentMap({ ownedFragranceNames = [], onSelectDetail }) {
  const [viewMode, setViewMode] = useState('radial'); // default to radar
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Resolve user owned fragrances
  const ownedObjects = useMemo(() => {
    return FRAGRANCE_DATABASE.filter(f => 
      ownedFragranceNames.some(name => 
        name.toLowerCase() === f.name.toLowerCase() || 
        name.toLowerCase() === f.id.toLowerCase()
      )
    );
  }, [ownedFragranceNames]);

  // Use owned shelf or a representative sample if shelf is empty
  const activeShelf = ownedObjects.length > 0 ? ownedObjects : FRAGRANCE_DATABASE.slice(0, 6);

  // Precompute individual fragrance accord weights
  const shelfWithWeights = useMemo(() => {
    return activeShelf.map(bottle => ({
      ...bottle,
      computedWeights: calculateFragranceAccordWeights(bottle)
    }));
  }, [activeShelf]);

  // SVG Radar Dimensions
  const SVG_SIZE = 380;
  const CENTER = SVG_SIZE / 2;
  const R_MAX = 135;

  // AGGREGATE COLLECTION FOOTPRINT MATH (8 AXES)
  const collectionAnalysis = useMemo(() => {
    const rawSums = {};
    const contributingMap = {};

    EIGHT_RADAR_CATEGORIES.forEach(cat => {
      rawSums[cat.id] = 0;
      contributingMap[cat.id] = [];
    });

    shelfWithWeights.forEach(bottle => {
      const weights = bottle.computedWeights;
      EIGHT_RADAR_CATEGORIES.forEach(cat => {
        const w = weights[cat.id] || 0;
        if (w > 0) {
          rawSums[cat.id] += w;
          contributingMap[cat.id].push({
            bottle,
            weight: w
          });
        }
      });
    });

    const N = Math.max(1, shelfWithWeights.length);
    const avgScores = {};
    let maxAvg = 0;

    EIGHT_RADAR_CATEGORIES.forEach(cat => {
      const avg = rawSums[cat.id] / N;
      avgScores[cat.id] = avg;
      if (avg > maxAvg) maxAvg = avg;
    });

    // Normalize polygon vertices to 0.0 - 1.0 (with nice baseline radius)
    const vertices = EIGHT_RADAR_CATEGORIES.map(cat => {
      const rawAvg = avgScores[cat.id];
      // Normalized relative weight for radar shape
      const relativeWeight = maxAvg > 0 ? (rawAvg / maxAvg) : 0.15;
      // Clamp between 0.12 (visual minimum) and 0.96 (outer edge)
      const footprintIntensity = Math.min(0.96, Math.max(0.12, relativeWeight * 0.95));

      const angleRad = (cat.angle * Math.PI) / 180;
      const r = R_MAX * footprintIntensity;
      const x = CENTER + r * Math.cos(angleRad);
      const y = CENTER + r * Math.sin(angleRad);

      const isGap = relativeWeight < 0.28 || rawAvg < 0.05;

      return {
        cat,
        rawAvg,
        relativeWeight,
        footprintIntensity,
        r,
        x,
        y,
        isGap,
        contributingBottles: contributingMap[cat.id].sort((a, b) => b.weight - a.weight)
      };
    });

    // Build SVG Polygon points string
    const polygonPoints = vertices.map(v => `${v.x},${v.y}`).join(' ');

    // Sort categories by strength
    const sortedByStrength = [...vertices].sort((a, b) => b.rawAvg - a.rawAvg);
    const dominantCategories = sortedByStrength.filter(v => !v.isGap).slice(0, 3);
    const gapCategories = vertices.filter(v => v.isGap);

    return {
      vertices,
      polygonPoints,
      dominantCategories,
      gapCategories,
      totalBottles: shelfWithWeights.length
    };
  }, [shelfWithWeights, CENTER, R_MAX]);

  // Render Grid View
  const renderGridView = () => {
    return (
      <div className="grid grid-cols-2 gap-3">
        {EIGHT_RADAR_CATEGORIES.map(cat => {
          const vertex = collectionAnalysis.vertices.find(v => v.cat.id === cat.id);
          const bottlesInCat = vertex ? vertex.contributingBottles.map(c => c.bottle) : [];

          return (
            <div key={cat.id} className="bg-white rounded-3xl p-4 border border-stone-200 shadow-2xs flex flex-col h-48">
              <div 
                className="flex items-center justify-between border-b border-stone-100 pb-2 cursor-pointer hover:bg-stone-50 rounded-xl transition-colors -mx-2 px-2"
                onClick={() => setSelectedCategoryForModal({ cat, bottles: bottlesInCat })}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="font-serif font-bold text-xs text-stone-900">{cat.name}</h3>
                </div>
                <div className="flex items-center gap-1">
                  {vertex?.isGap && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Gap
                    </span>
                  )}
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#faf9f6] border border-stone-200 text-stone-600">
                    {bottlesInCat.length}
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto mt-2 space-y-2 pr-1 scrollbar-hide">
                {bottlesInCat.length > 0 ? (
                  bottlesInCat.map(bottle => (
                    <div 
                      key={bottle.id} 
                      onClick={() => onSelectDetail(bottle)}
                      className="p-2.5 rounded-2xl bg-[#faf9f6] border border-stone-200 flex flex-col hover:border-stone-400 transition-all cursor-pointer min-w-0"
                    >
                      <h4 className="font-serif font-bold text-[11px] text-stone-900 truncate">{bottle.name}</h4>
                      <p className="text-[9px] text-stone-500 uppercase truncate">{bottle.brand}</p>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-2">
                    <p className="text-[11px] text-stone-400 font-medium italic">No shelf bottles</p>
                    <span className="text-[9px] text-amber-600 font-bold mt-0.5">Unexplored Territory</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render Aggregated Radar Footprint Map
  const renderRadarView = () => {
    return (
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Radar Map Title Header */}
        <div className="w-full text-center pb-2 border-b border-stone-100 mb-2">
          <p className="text-xs font-serif font-bold text-stone-900">
            Collection Scent Profile: An aggregated multi-accord footprint (8 axes)
          </p>
        </div>

        {/* SVG Visualization */}
        <div className="relative flex items-center justify-center my-2">
          <svg width={SVG_SIZE} height={SVG_SIZE} className="overflow-visible select-none">
            <defs>
              {/* Radial Footprint Gradient */}
              <radialGradient id="footprintGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                <stop offset="65%" stopColor="#d97706" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#b45309" stopOpacity="0.18" />
              </radialGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Concentric Reference Rings (25%, 50%, 75%, 100%) */}
            {[0.25, 0.5, 0.75, 1.0].map((ratio, idx) => (
              <circle
                key={idx}
                cx={CENTER}
                cy={CENTER}
                r={R_MAX * ratio}
                fill="none"
                stroke="#e7e5e4"
                strokeWidth="1"
                strokeDasharray={ratio === 1.0 ? 'none' : '3 3'}
              />
            ))}

            {/* 8 Radial Category Axis Lines & Sector Indicators */}
            {collectionAnalysis.vertices.map(({ cat, isGap }) => {
              const angleRad = (cat.angle * Math.PI) / 180;
              const x2 = CENTER + R_MAX * Math.cos(angleRad);
              const y2 = CENTER + R_MAX * Math.sin(angleRad);

              // Outer Label Placement
              const labelDistance = R_MAX + 24;
              const labelX = CENTER + labelDistance * Math.cos(angleRad);
              const labelY = CENTER + labelDistance * Math.sin(angleRad);

              return (
                <g key={cat.id}>
                  {/* Axis Line */}
                  <line
                    x1={CENTER}
                    y1={CENTER}
                    x2={x2}
                    y2={y2}
                    stroke={isGap ? '#fca5a5' : '#e7e5e4'}
                    strokeWidth={isGap ? '1.5' : '1.2'}
                    strokeDasharray={isGap ? '2 2' : 'none'}
                  />

                  {/* Axis Label */}
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill={isGap ? '#9ca3af' : '#292524'}
                    className="font-serif transition-colors"
                  >
                    {cat.name}
                  </text>
                </g>
              );
            })}

            {/* COLLECTION FOOTPRINT: Filled Semi-Transparent SVG Polygon */}
            <polygon
              points={collectionAnalysis.polygonPoints}
              fill="url(#footprintGradient)"
              stroke="#d97706"
              strokeWidth="2.2"
              strokeLinejoin="round"
              className="transition-all duration-500 hover:opacity-90"
            />

            {/* Gap Highlight Arcs / Badges */}
            {collectionAnalysis.vertices.map(({ cat, isGap, x, y }) => {
              if (!isGap) return null;
              const angleRad = (cat.angle * Math.PI) / 180;
              const gapRingR = R_MAX * 0.28;
              const gapX = CENTER + gapRingR * Math.cos(angleRad);
              const gapY = CENTER + gapRingR * Math.sin(angleRad);

              return (
                <g key={`gap-${cat.id}`} className="animate-pulse">
                  <circle
                    cx={gapX}
                    cy={gapY}
                    r={7}
                    fill="#fef2f2"
                    stroke="#ef4444"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <circle
                    cx={gapX}
                    cy={gapY}
                    r={2.5}
                    fill="#ef4444"
                  />
                </g>
              );
            })}

            {/* INDIVIDUAL BOTTLE NODES ALONG AXIS LINES */}
            {collectionAnalysis.vertices.map(vertex => {
              const { cat, contributingBottles } = vertex;
              const angleRad = (cat.angle * Math.PI) / 180;

              return (
                <g key={`bottles-${cat.id}`}>
                  {contributingBottles.map(({ bottle, weight }, bIdx) => {
                    // Position along axis based on bottle's relative accord weight
                    // Slightly offset radius if multiple bottles to prevent exact stacking
                    const jitter = (bIdx % 3 - 1) * 4;
                    const rBottle = Math.min(R_MAX, Math.max(22, (R_MAX * weight) + jitter));
                    const bx = CENTER + rBottle * Math.cos(angleRad);
                    const by = CENTER + rBottle * Math.sin(angleRad);

                    const isHovered = hoveredNode?.bottle?.id === bottle.id && hoveredNode?.catId === cat.id;

                    return (
                      <g
                        key={`${bottle.id}-${cat.id}`}
                        className="cursor-pointer transition-transform duration-200"
                        style={{
                          transformOrigin: `${bx}px ${by}px`,
                          transform: isHovered ? 'scale(1.4)' : 'scale(1)'
                        }}
                        onMouseEnter={() => setHoveredNode({ bottle, cat, weight, x: bx, y: by })}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => onSelectDetail(bottle)}
                      >
                        {/* Outer Glow on hover */}
                        {isHovered && (
                          <circle cx={bx} cy={by} r={9} fill={cat.color} opacity={0.3} />
                        )}
                        {/* Bottle Marker Dot */}
                        <circle
                          cx={bx}
                          cy={by}
                          r={5}
                          fill={bottle.accentColor || cat.color}
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          className="shadow-sm"
                        />
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Polygon Vertex Points */}
            {collectionAnalysis.vertices.map(({ cat, x, y, isGap, rawAvg }) => (
              <circle
                key={`vertex-${cat.id}`}
                cx={x}
                cy={y}
                r={4}
                fill={isGap ? '#ef4444' : '#d97706'}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            ))}

            {/* Center Anchor Point */}
            <circle cx={CENTER} cy={CENTER} r={5} fill="#faf9f6" stroke="#a8a29e" strokeWidth="1.5" />
          </svg>

          {/* Interactive Hover Tooltip */}
          {hoveredNode && (
            <div
              className="absolute z-20 pointer-events-none bg-stone-900/90 backdrop-blur-md text-white rounded-2xl shadow-xl p-3 min-w-[160px] border border-stone-700 animate-fadeIn"
              style={{
                left: Math.max(10, Math.min(hoveredNode.x - 80, SVG_SIZE - 170)),
                top: Math.max(10, Math.min(hoveredNode.y + 15, SVG_SIZE - 90))
              }}
            >
              <h4 className="font-serif font-bold text-xs text-white leading-tight">{hoveredNode.bottle.name}</h4>
              <p className="text-[9px] text-stone-400 uppercase tracking-wider">{hoveredNode.bottle.brand}</p>
              <div className="mt-2 flex items-center justify-between bg-stone-800 rounded-lg px-2 py-1 border border-stone-700">
                <span className="text-[10px] font-medium text-amber-400">{hoveredNode.cat.fullName}</span>
                <span className="text-[10px] font-bold text-white">{Math.round(hoveredNode.weight * 100)}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Shelf Balance Insights */}
        <div className="w-full mt-4 space-y-3 pt-3 border-t border-stone-100 text-stone-800">
          
          {/* Collection Strengths */}
          <div className="bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/80 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5 shadow-2xs">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xs text-amber-950">Collection Strengths</h4>
              <p className="text-[11px] text-amber-900/90 leading-relaxed mt-0.5">
                Your collection is heavily weighted toward{' '}
                <span className="font-bold">
                  {collectionAnalysis.dominantCategories.map(d => d.cat.name).join(', ')}
                </span>{' '}
                profiles.
              </p>
            </div>
          </div>

          {/* Missing Profiles / Collection Gaps */}
          {collectionAnalysis.gapCategories.length > 0 && (
            <div className="bg-rose-50/80 rounded-2xl p-3.5 border border-rose-200/80 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-500 text-white shrink-0 mt-0.5 shadow-2xs">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-rose-950">Collection Gaps</h4>
                <p className="text-[11px] text-rose-900/90 leading-relaxed mt-0.5">
                  Consider adding{' '}
                  <span className="font-bold">
                    {collectionAnalysis.gapCategories.map(g => g.cat.name).join(', ')}
                  </span>{' '}
                  scents to balance your shelf.
                </p>
              </div>
            </div>
          )}

          {/* Quick 8-Accord Intensity Pill Breakdown */}
          <div className="pt-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Accord Coverage</p>
            <div className="grid grid-cols-4 gap-1.5">
              {collectionAnalysis.vertices.map(({ cat, relativeWeight, isGap }) => (
                <div
                  key={cat.id}
                  className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                    isGap ? 'bg-stone-50 border-stone-200 text-stone-400' : 'bg-[#faf9f6] border-stone-200 text-stone-900'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span className="text-[9px] font-bold mt-0.5 truncate w-full">{cat.name}</span>
                  <span className="text-[9px] font-semibold text-amber-700">
                    {Math.round(relativeWeight * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    );
  };

  return (
    <div className="space-y-4 animate-fadeIn py-2 text-stone-900">
      
      {/* Header & Mode Switcher */}
      <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-xs flex items-center justify-between">
        <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
          <Compass className="w-5 h-5 text-amber-600" />
          <span>My Scent Map</span>
        </h2>

        <div className="flex bg-[#faf9f6] p-1 rounded-2xl border border-stone-200">
          <button
            onClick={() => setViewMode('radial')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'radial' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Radar Web</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'grid' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>
        </div>
      </div>

      {/* Mode View */}
      {viewMode === 'radial' ? renderRadarView() : renderGridView()}

      {/* FULL CATEGORY LIST MODAL (GRID MODE) */}
      {selectedCategoryForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 border border-stone-200 shadow-2xl space-y-4 flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCategoryForModal.cat.icon}</span>
                <h3 className="font-serif font-bold text-lg text-stone-900">{selectedCategoryForModal.cat.fullName || selectedCategoryForModal.cat.name}</h3>
              </div>
              <button 
                onClick={() => setSelectedCategoryForModal(null)}
                className="p-1.5 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {selectedCategoryForModal.bottles.length > 0 ? (
                selectedCategoryForModal.bottles.map(bottle => (
                  <div 
                    key={bottle.id} 
                    onClick={() => {
                      setSelectedCategoryForModal(null);
                      onSelectDetail(bottle);
                    }}
                    className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex flex-col hover:border-stone-400 transition-all cursor-pointer"
                  >
                    <h4 className="font-serif font-bold text-sm text-stone-900">{bottle.name}</h4>
                    <p className="text-xs text-stone-500 uppercase">{bottle.brand}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-stone-500 font-medium italic py-4 text-center">No fragrances in this category on your shelf.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
