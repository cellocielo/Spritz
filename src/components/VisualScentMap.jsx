import React, { useState, useMemo } from 'react';
import { Compass, Grid, X, Search, RotateCcw, Check, Sparkles } from 'lucide-react';
import { FRAGRANCE_DATABASE } from '../data/fragrances';
import BottleVisualizer from './BottleVisualizer';
import BottleClipart from './BottleClipart';

// ----- 8-SECTOR RADAR FRAMEWORK (45° INTERVALS) MATCHING SCENT WHEEL STRUCTURE -----
export const EIGHT_RADAR_CATEGORIES = [
  { id: 'CitrusFresh', name: 'Citrus', fullName: 'Citrus', angle: -90, color: '#0ea5e9' },
  { id: 'Woody', name: 'Woody', fullName: 'Woody', angle: -45, color: '#78350f' },
  { id: 'AromaticGreen', name: 'Green', fullName: 'Green / Botanical', angle: 0, color: '#10b981' },
  { id: 'Spicy', name: 'Spicy', fullName: 'Spicy', angle: 45, color: '#ef4444' },
  { id: 'Floral', name: 'Floral', fullName: 'Floral', angle: 90, color: '#ec4899' },
  { id: 'Gourmand', name: 'Sweet', fullName: 'Powdery / Sweet', angle: 135, color: '#f59e0b' },
  { id: 'Fresh', name: 'Fresh', fullName: 'Fresh / Aquatic', angle: 180, color: '#06b6d4' },
  { id: 'AmberResinous', name: 'Amber', fullName: 'Amber / Resinous', angle: 225, color: '#d97706' }
];

// SEMANTIC NOTE DICTIONARY FOR PRECISE SCENT ATTRIBUTION
const SEMANTIC_NOTE_DICT = {
  CitrusFresh: [
    'citrus', 'lemon', 'grapefruit', 'bergamot', 'mandarin', 'orange', 'yuzu', 'lime', 'neroli', 
    'aldehydes', 'aldehydic', 'blood orange', 'clementine', 'citron'
  ],
  Fresh: [
    'aquatic', 'marine', 'calone', 'sea', 'salt', 'ozonic', 'water', 'watery', 'clean', 'mineral', 'driftwood'
  ],
  AromaticGreen: [
    'green', 'mint', 'basil', 'sage', 'clary sage', 'lavender', 'rosemary', 'thyme', 'tea', 'black tea', 
    'matcha', 'grass', 'pine', 'pine needles', 'juniper', 'juniper berries', 'eucalyptus', 'fern', 
    'fougere', 'petitgrain', 'herbal', 'chamomile', 'blackcurrant leaf', 'fig leaf', 'green notes'
  ],
  Floral: [
    'floral', 'rose', 'damask rose', 'may rose', 'jasmine', 'moroccan jasmine', 'indian jasmine', 
    'white floral', 'iris', 'orris', 'lily', 'violet', 'violet accord', 'peony', 'tuberose', 'ylang', 
    'ylang-ylang', 'orchid', 'geranium', 'osmanthus', 'heliotrope', 'magnolia', 'freesia', 
    'orange blossom', 'powdery', 'gardenia', 'hedione'
  ],
  Spicy: [
    'spicy', 'warm spicy', 'soft spicy', 'fresh spicy', 'pepper', 'pink pepper', 'sichuan pepper', 
    'green pepper', 'cardamom', 'cinnamon', 'clove', 'cloves', 'nutmeg', 'ginger', 'saffron', 
    'coriander', 'cumin', 'star anise', 'pimento'
  ],
  Gourmand: [
    'gourmand', 'sweet', 'vanilla', 'vanille', 'vanilla bean', 'bourbon vanilla', 'caramel', 
    'chocolate', 'cacao', 'coffee', 'honey', 'almond', 'tonka', 'tonka bean', 'praline', 
    'hazelnut', 'sugar', 'marshmallow', 'rum', 'rum absolute', 'cognac', 'boozy', 'chestnut', 'coconut'
  ],
  AmberResinous: [
    'amber', 'resin', 'resinous', 'frankincense', 'myrrh', 'benzoin', 'labdanum', 'opoponax', 
    'incense', 'balsam', 'peru balsam', 'fir resin', 'amberwood', 'ambergris', 'ambrox', 
    'ambroxan', 'ambrette', 'musk', 'white musk', 'pink musk', 'olibanum', 'copal', 'styrax'
  ],
  Woody: [
    'woody', 'wood', 'woody notes', 'cedar', 'cedarwood', 'sandalwood', 'mysore sandalwood', 
    'white sandalwood', 'vetiver', 'haitian vetiver', 'java vetiver oil', 'patchouli', 'oud', 
    'rare oud wood', 'agarwood', 'oakmoss', 'moss', 'leather', 'tobacco', 'tobacco leaf', 'smoke', 
    'smoky', 'iso e super', 'cashmeran', 'gaïac wood', 'guaiac', 'birch', 'cypress', 'fig wood', 'rosewood', 'oak'
  ]
};

// CALCULATE FRAGRANCE RADAR WEIGHTS ACROSS 8 AXES
export function calculateFragranceAccordWeights(fragrance) {
  if (!fragrance) return {};

  const rawScores = {
    CitrusFresh: 0,
    Woody: 0,
    AromaticGreen: 0,
    Spicy: 0,
    Floral: 0,
    Gourmand: 0,
    Fresh: 0,
    AmberResinous: 0
  };

  const nameLower = (fragrance.name || '').toLowerCase();
  const isFresh = nameLower.includes('edt') || nameLower.includes('cologne') || nameLower.includes("l'eau");
  const weightFactors = isFresh 
    ? { top: 0.5, heart: 0.3, base: 0.2 }
    : { top: 0.2, heart: 0.3, base: 0.5 };

  const mapNoteToCategory = (note) => {
    if (!note || typeof note !== 'string') return null;
    const lower = note.toLowerCase().trim();
    for (const cat of EIGHT_RADAR_CATEGORIES) {
      if (SEMANTIC_NOTE_DICT[cat.id]?.some(kw => lower.includes(kw))) {
        return cat.id;
      }
    }
    return null;
  };

  const processTier = (notesList, factor) => {
    if (!Array.isArray(notesList) || notesList.length === 0) return;
    const validCategories = notesList.map(mapNoteToCategory).filter(Boolean);
    if (validCategories.length === 0) return;
    const scorePerNote = factor / validCategories.length;
    validCategories.forEach(catId => {
      rawScores[catId] = (rawScores[catId] || 0) + scorePerNote;
    });
  };

  processTier(fragrance.notes?.top, weightFactors.top);
  processTier(fragrance.notes?.heart, weightFactors.heart);
  processTier(fragrance.notes?.base, weightFactors.base);

  if (Array.isArray(fragrance.mainAccords)) {
    fragrance.mainAccords.forEach(acc => {
      const accName = typeof acc === 'string' ? acc : acc?.name;
      const cat = mapNoteToCategory(accName);
      if (cat) {
        rawScores[cat] = (rawScores[cat] || 0) + ((acc.score || 50) / 100) * 0.4;
      }
    });
  }

  // Check fallback vector if empty
  const totalRaw = Object.values(rawScores).reduce((a, b) => a + b, 0);
  if (totalRaw === 0 && fragrance.accordVector) {
    rawScores.Fresh = fragrance.accordVector.fresh || 0;
    rawScores.Gourmand = fragrance.accordVector.gourmand || 0;
    rawScores.Woody = fragrance.accordVector.woody || 0;
    rawScores.Floral = fragrance.accordVector.floral || 0;
    rawScores.AmberResinous = fragrance.accordVector.resin || 0;
  }

  const finalTotal = Object.values(rawScores).reduce((a, b) => a + b, 0);
  const normalized = {};
  EIGHT_RADAR_CATEGORIES.forEach(cat => {
    normalized[cat.id] = finalTotal > 0 ? parseFloat((rawScores[cat.id] / finalTotal).toFixed(2)) : 0.12;
  });

  return normalized;
}

export default function VisualScentMap({ ownedFragranceNames = [], onSelectDetail }) {
  const [activeTab, setActiveTab] = useState('radar'); // 'radar' or 'grid'
  const [selectedBottleId, setSelectedBottleId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState(null);
  const [activeCategoryHighlight, setActiveCategoryHighlight] = useState(null);

  // User owned items resolved
  const userOwnedList = useMemo(() => {
    return FRAGRANCE_DATABASE.filter(f => 
      ownedFragranceNames.some(name => 
        name.toLowerCase() === f.name.toLowerCase() || 
        name.toLowerCase() === f.id.toLowerCase()
      )
    );
  }, [ownedFragranceNames]);

  // Combined full display shelf for selector (ensures at least 9 popular bottles are browseable)
  const displayShelf = useMemo(() => {
    const combined = [...userOwnedList];
    FRAGRANCE_DATABASE.forEach(f => {
      if (!combined.some(existing => existing.id === f.id)) {
        combined.push(f);
      }
    });
    return combined;
  }, [userOwnedList]);

  // Filtered bottle list based on search query
  const filteredBottles = useMemo(() => {
    if (!searchQuery.trim()) return displayShelf;
    const q = searchQuery.toLowerCase().trim();
    return displayShelf.filter(b => 
      b.name.toLowerCase().includes(q) || 
      b.brand.toLowerCase().includes(q)
    );
  }, [displayShelf, searchQuery]);

  // Active collection for baseline footprint
  const baselineCollection = userOwnedList.length > 0 ? userOwnedList : displayShelf.slice(0, 9);

  // Radar Constants
  const SVG_SIZE = 340;
  const CENTER = SVG_SIZE / 2;
  const R_MAX = 110;
  const CONCENTRIC_LEVELS = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Concentric Octagonal Grid Points
  const concentricOctagons = useMemo(() => {
    return CONCENTRIC_LEVELS.map(level => {
      const radius = R_MAX * level;
      const points = EIGHT_RADAR_CATEGORIES.map(cat => {
        const rad = (cat.angle * Math.PI) / 180;
        const x = CENTER + radius * Math.cos(rad);
        const y = CENTER + radius * Math.sin(rad);
        return `${x},${y}`;
      }).join(' ');
      return { level, points };
    });
  }, [CENTER, R_MAX]);

  // Aggregate Collection Footprint Math (Global Footprint)
  const aggregateFootprint = useMemo(() => {
    const sums = {};
    EIGHT_RADAR_CATEGORIES.forEach(c => { sums[c.id] = 0; });

    baselineCollection.forEach(bottle => {
      const weights = calculateFragranceAccordWeights(bottle);
      EIGHT_RADAR_CATEGORIES.forEach(c => {
        sums[c.id] += (weights[c.id] || 0.05);
      });
    });

    const N = Math.max(1, baselineCollection.length);
    const avgScores = {};
    let maxAvg = 0;
    EIGHT_RADAR_CATEGORIES.forEach(c => {
      const val = sums[c.id] / N;
      avgScores[c.id] = val;
      if (val > maxAvg) maxAvg = val;
    });

    const vertices = EIGHT_RADAR_CATEGORIES.map(cat => {
      const score = avgScores[cat.id];
      const intensity = maxAvg > 0 ? Math.min(0.95, Math.max(0.18, (score / maxAvg) * 0.9)) : 0.4;
      const rad = (cat.angle * Math.PI) / 180;
      const r = R_MAX * intensity;
      return {
        cat,
        score,
        r,
        x: CENTER + r * Math.cos(rad),
        y: CENTER + r * Math.sin(rad)
      };
    });

    return {
      pointsString: vertices.map(v => `${v.x},${v.y}`).join(' '),
      vertices
    };
  }, [baselineCollection, CENTER, R_MAX]);

  // Selected Overlay Bottle Math
  const overlayBottleData = useMemo(() => {
    if (!selectedBottleId) return null;
    const bottle = displayShelf.find(b => b.id === selectedBottleId);
    if (!bottle) return null;

    const weights = calculateFragranceAccordWeights(bottle);
    const scores = EIGHT_RADAR_CATEGORIES.map(c => weights[c.id] || 0);
    const maxScore = Math.max(...scores, 0.01);

    const vertices = EIGHT_RADAR_CATEGORIES.map(cat => {
      const score = weights[cat.id] || 0;
      const intensity = Math.min(0.95, Math.max(0.15, (score / maxScore) * 0.95));
      const rad = (cat.angle * Math.PI) / 180;
      const r = R_MAX * intensity;
      const percent = Math.round((weights[cat.id] || 0) * 100);
      return {
        cat,
        score,
        percent,
        r,
        x: CENTER + r * Math.cos(rad),
        y: CENTER + r * Math.sin(rad)
      };
    });

    // Accord breakdown sorted by strength
    const sortedAccords = [...vertices]
      .filter(v => v.percent > 0)
      .sort((a, b) => b.percent - a.percent);

    // Primary accent color (defaults to emerald #10B981 or warm amber #F59E0B or bottle accent)
    const accentColor = bottle.accentColor || (bottle.category === 'Luxury' ? '#F59E0B' : '#10B981');

    return {
      bottle,
      accentColor,
      pointsString: vertices.map(v => `${v.x},${v.y}`).join(' '),
      vertices,
      sortedAccords
    };
  }, [selectedBottleId, displayShelf, CENTER, R_MAX]);

  const handleToggleSelectBottle = (bottleId) => {
    if (selectedBottleId === bottleId) {
      setSelectedBottleId(null);
      setActiveCategoryHighlight(null);
    } else {
      setSelectedBottleId(bottleId);
      setActiveCategoryHighlight(null);
    }
  };

  return (
    <div className="w-full space-y-3 sm:space-y-4 text-stone-900 animate-fadeIn select-none pb-8">
      
      {/* Top Header: "My Shelf" */}
      <div className="space-y-2">
        <h1 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
          My Shelf
        </h1>

        {/* Tab Navigation with active underline indicator */}
        <div className="flex border-b border-stone-200">
          <button
            onClick={() => setActiveTab('radar')}
            className={`pb-2 px-1 font-semibold text-sm transition-all relative flex items-center gap-2 ${
              activeTab === 'radar' 
                ? 'text-stone-900 border-b-2 border-stone-900 font-bold -mb-[2px]' 
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Radar Map</span>
          </button>

          <button
            onClick={() => setActiveTab('grid')}
            className={`ml-6 pb-2 px-1 font-semibold text-sm transition-all relative flex items-center gap-2 ${
              activeTab === 'grid' 
                ? 'text-stone-900 border-b-2 border-stone-900 font-bold -mb-[2px]' 
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span>Collection Grid</span>
          </button>
        </div>
      </div>

      {activeTab === 'radar' ? (
        <div className="space-y-4">
          
          {/* 1. DUAL-POLYGON RADAR MAP SECTION (Centered with Octagonal Mesh) */}
          <div className="flex flex-col items-center justify-center relative pt-1 pb-2">
            
            {/* Status & Quick Action Bar (only renders when bottle is selected to minimize empty gap) */}
            {selectedBottleId && (
              <div className="w-full flex items-center justify-between px-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200 flex items-center gap-1.5 shadow-2xs">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: overlayBottleData?.accentColor || '#10b981' }}
                    ></span>
                    Overlaying: <span className="font-bold">{overlayBottleData?.bottle.name}</span>
                  </span>
                  <span className="text-[11px] text-stone-400 hidden sm:inline">
                    (Shelf Footprint dimmed in background)
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedBottleId(null);
                    setActiveCategoryHighlight(null);
                  }}
                  className="text-xs font-bold text-stone-500 hover:text-stone-900 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-stone-100 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset View</span>
                </button>
              </div>
            )}

            {/* SVG Radar Canvas */}
            <div className="relative flex items-center justify-center mt-1 mb-2">
              <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="overflow-visible select-none">
                <defs>
                  {/* Dynamic Gradient for Selected Highlight Polygon */}
                  <linearGradient id="selectedPolygonGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={overlayBottleData?.accentColor || '#10b981'} stopOpacity="0.70" />
                    <stop offset="100%" stopColor={overlayBottleData?.accentColor || '#059669'} stopOpacity="0.45" />
                  </linearGradient>

                  {/* Neutral Slate/Indigo Gradient for Global Shelf Footprint */}
                  <linearGradient id="globalFootprintGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>

                  {/* Shadow filter for active node dots */}
                  <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* Concentric Octagonal Grid Lines */}
                {concentricOctagons.map((oct, idx) => (
                  <polygon
                    key={`oct-${idx}`}
                    points={oct.points}
                    fill="none"
                    stroke="#e7e5e4"
                    strokeWidth={oct.level === 1.0 ? "1.2" : "0.75"}
                  />
                ))}

                {/* 8 Radial Axis Lines & Labels */}
                {EIGHT_RADAR_CATEGORIES.map(cat => {
                  const rad = (cat.angle * Math.PI) / 180;
                  const x2 = CENTER + R_MAX * Math.cos(rad);
                  const y2 = CENTER + R_MAX * Math.sin(rad);

                  // Outer Label Position
                  const labelRadius = R_MAX + 24;
                  const labelX = CENTER + labelRadius * Math.cos(rad);
                  const labelY = CENTER + labelRadius * Math.sin(rad);

                  const isCatHighlighted = activeCategoryHighlight === cat.id;

                  return (
                    <g 
                      key={cat.id}
                      className="cursor-pointer group"
                      onClick={() => setActiveCategoryHighlight(activeCategoryHighlight === cat.id ? null : cat.id)}
                    >
                      <line
                        x1={CENTER}
                        y1={CENTER}
                        x2={x2}
                        y2={y2}
                        stroke={isCatHighlighted ? (overlayBottleData?.accentColor || "#10b981") : "#e7e5e4"}
                        strokeWidth={isCatHighlighted ? "1.8" : "1"}
                        className="transition-colors duration-200"
                      />
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fontSize={isCatHighlighted ? "12" : "11"}
                        fontWeight={isCatHighlighted ? "800" : "600"}
                        fill={isCatHighlighted ? (overlayBottleData?.accentColor || "#0f172a") : "#44403c"}
                        className="font-sans select-none tracking-wide transition-all duration-200"
                      >
                        {cat.name}
                      </text>
                    </g>
                  );
                })}

                {/* 1. PRIMARY GLOBAL FOOTPRINT POLYGON */}
                {/* Default: Slate/Indigo #4F46E5 at 40% opacity | When Selected: Dimmed to faint 15% opacity */}
                <polygon
                  points={aggregateFootprint.pointsString}
                  fill="url(#globalFootprintGrad)"
                  fillOpacity={selectedBottleId ? 0.15 : 0.40}
                  stroke="#4f46e5"
                  strokeOpacity={selectedBottleId ? 0.25 : 0.85}
                  strokeWidth={selectedBottleId ? "1.5" : "2"}
                  strokeLinejoin="round"
                  className="transition-all duration-400 ease-out"
                />

                {/* 2. HIGHLIGHT SELECTED POLYGON (Visible only in Active Selection State) */}
                {overlayBottleData && (
                  <polygon
                    points={overlayBottleData.pointsString}
                    fill="url(#selectedPolygonGrad)"
                    fillOpacity={0.60}
                    stroke={overlayBottleData.accentColor || "#10b981"}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="transition-all duration-300 ease-out animate-fadeIn"
                  />
                )}

                {/* 3. CLICKABLE AXIS NODE DOTS (Rendered ONLY in Active Selection State) */}
                {overlayBottleData && overlayBottleData.vertices.map((v, i) => {
                  const isNodeHighlighted = activeCategoryHighlight === v.cat.id;
                  const nodeColor = overlayBottleData.accentColor || '#10b981';

                  return (
                    <g 
                      key={`active-node-${i}`} 
                      className="cursor-pointer group"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategoryHighlight(activeCategoryHighlight === v.cat.id ? null : v.cat.id);
                      }}
                    >
                      {/* Wide invisible hit area to prevent mouse flicker / jittering */}
                      <circle cx={v.x} cy={v.y} r={14} fill="transparent" />

                      {/* Outer pulse aura for active/hover state */}
                      <circle
                        cx={v.x}
                        cy={v.y}
                        r={isNodeHighlighted ? 10 : 8}
                        fill={nodeColor}
                        fillOpacity={isNodeHighlighted ? 0.35 : 0}
                        className="transition-all duration-200 group-hover:fill-opacity-25 pointer-events-none"
                      />

                      {/* Main Node Circle */}
                      <circle
                        cx={v.x}
                        cy={v.y}
                        r={isNodeHighlighted ? 5.5 : 4.5}
                        fill={nodeColor}
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        filter="url(#dotGlow)"
                        className="transition-all duration-200 pointer-events-none"
                      />
                      
                      {/* Center Pin */}
                      <circle
                        cx={v.x}
                        cy={v.y}
                        r={1.5}
                        fill="#ffffff"
                        className="pointer-events-none"
                      />
                    </g>
                  );
                })}

                {/* Center dot */}
                <circle cx={CENTER} cy={CENTER} r={3} fill="#a8a29e" />
              </svg>
            </div>

            {/* 4. FLOATING POPOVER BREAKDOWN CARD FOR SELECTED BOTTLE */}
            {overlayBottleData && (
              <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200/90 p-4 shadow-lg animate-fadeIn space-y-3 mt-2 max-h-[340px] overflow-y-auto overscroll-contain">
                <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-12 shrink-0 flex items-center justify-center p-1 bg-stone-50 rounded-xl border border-stone-200">
                      <BottleClipart fragrance={overlayBottleData.bottle} size="sm" className="w-8 h-10 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm text-stone-900 truncate">
                        {overlayBottleData.bottle.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 uppercase tracking-wider truncate">
                        {overlayBottleData.bottle.brand} • {overlayBottleData.bottle.genderVibe || 'Unisex'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => onSelectDetail && onSelectDetail(overlayBottleData.bottle)}
                      className="text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-lg transition-all"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBottleId(null);
                        setActiveCategoryHighlight(null);
                      }}
                      className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Accord Breakdown Matrix */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    <span>Estimated Accord Profile</span>
                    <span>Intensity</span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1">
                    {overlayBottleData.sortedAccords.map((accord) => {
                      const isHighlighted = activeCategoryHighlight === accord.cat.id;
                      return (
                        <div
                          key={accord.cat.id}
                          onClick={() => setActiveCategoryHighlight(isHighlighted ? null : accord.cat.id)}
                          className={`p-2 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                            isHighlighted 
                              ? 'bg-stone-900 text-white border-stone-900 ring-1 ring-stone-900' 
                              : 'bg-stone-50/80 border-stone-200/80 hover:bg-stone-100'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-medium truncate ${isHighlighted ? 'text-white font-bold' : 'text-stone-800'}`}>
                              {accord.cat.name}
                            </span>
                            <span className={`text-[11px] font-mono font-bold ${isHighlighted ? 'text-teal-300' : 'text-stone-600'}`}>
                              {accord.percent}%
                            </span>
                          </div>
                          
                          {/* Mini Progress Bar */}
                          <div className="w-full bg-stone-200/60 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-300"
                              style={{ 
                                width: `${Math.min(100, Math.max(10, accord.percent))}%`,
                                backgroundColor: isHighlighted ? '#2dd4bf' : (overlayBottleData.accentColor || '#10b981')
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Vibe Quote */}
                {overlayBottleData.bottle.vibeCheck && (
                  <div className="bg-stone-50/90 p-2.5 rounded-xl border border-stone-100">
                    <p className="text-xs italic text-stone-600 leading-relaxed">
                      "{overlayBottleData.bottle.vibeCheck}"
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* 2. SELECT BOTTLE TO OVERLAY SECTION */}
          <div className="space-y-4 pt-2">
            
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold tracking-widest text-stone-500 uppercase">
                Select Bottle to Overlay
              </h2>
              {selectedBottleId && (
                <span className="text-[11px] text-teal-700 font-medium">
                  1 selected
                </span>
              )}
            </div>

            {/* Search Bar with Magnifying Glass */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your shelf..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-100/70 border border-stone-200 rounded-2xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* 3-Column Bottle Cards Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {filteredBottles.map(bottle => {
                const isSelected = selectedBottleId === bottle.id;

                return (
                  <div
                    key={bottle.id}
                    onClick={() => handleToggleSelectBottle(bottle.id)}
                    className={`rounded-2xl border p-3 flex flex-col items-center justify-between text-center transition-all cursor-pointer min-h-[160px] ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-500 ring-2 ring-teal-500/30 shadow-xs'
                        : 'bg-[#faf9f6] border-stone-200 hover:border-stone-300 hover:bg-white'
                    }`}
                  >
                    {/* Bottle Clipart Visual */}
                    <div className="w-full flex-1 flex items-center justify-center py-1">
                      <BottleClipart
                        fragrance={bottle}
                        size="md"
                        className="w-16 h-20"
                      />
                    </div>

                    {/* Bottle Name */}
                    <div className="w-full mt-2 pt-1 border-t border-stone-100/60">
                      <p className="text-[11px] font-medium text-stone-900 leading-tight line-clamp-2">
                        {bottle.name}
                      </p>
                      <p className="text-[9px] text-stone-500 truncate mt-0.5 uppercase tracking-wider">
                        {bottle.brand}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredBottles.length === 0 && (
              <div className="py-8 text-center bg-stone-50 rounded-2xl border border-stone-200">
                <p className="text-sm text-stone-500">No fragrances matching "{searchQuery}"</p>
              </div>
            )}

          </div>

        </div>
      ) : (
        /* GRID VIEW (8 Olfactory Category Cards) */
        <div className="grid grid-cols-2 gap-3">
          {EIGHT_RADAR_CATEGORIES.map(cat => {
            const bottlesInCat = baselineCollection.filter(b => {
              const weights = calculateFragranceAccordWeights(b);
              return (weights[cat.id] || 0) > 0.15;
            });

            return (
              <div 
                key={cat.id} 
                onClick={() => setSelectedCategoryForModal({ cat, bottles: bottlesInCat })}
                className="bg-[#faf9f6] rounded-2xl p-4 border border-stone-200 shadow-2xs flex flex-col h-44 cursor-pointer hover:border-stone-400 transition-all"
              >
                <div className="flex items-center justify-between border-b border-stone-200/70 pb-2">
                  <h3 className="font-serif font-bold text-sm text-stone-900">{cat.fullName || cat.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-600">
                    {bottlesInCat.length}
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto mt-2 space-y-1.5 pr-1 scrollbar-hide">
                  {bottlesInCat.length > 0 ? (
                    bottlesInCat.slice(0, 2).map(bottle => (
                      <div 
                        key={bottle.id} 
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectDetail(bottle);
                        }}
                        className="p-1.5 rounded-xl bg-white border border-stone-200 flex items-center gap-2 hover:border-stone-400 transition-all"
                      >
                        <BottleClipart fragrance={bottle} size="sm" className="w-6 h-8 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-[11px] text-stone-900 truncate">{bottle.name}</h4>
                          <p className="text-[9px] text-stone-400 uppercase truncate">{bottle.brand}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-[11px] text-stone-400 italic">No shelf bottles</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CATEGORY MODAL FOR GRID MODE */}
      {selectedCategoryForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 border border-stone-200 shadow-2xl space-y-4 max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-stone-900">
                {selectedCategoryForModal.cat.fullName}
              </h3>
              <button 
                onClick={() => setSelectedCategoryForModal(null)}
                className="p-1.5 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
              {selectedCategoryForModal.bottles.length > 0 ? (
                selectedCategoryForModal.bottles.map(b => (
                  <div
                    key={b.id}
                    onClick={() => {
                      setSelectedCategoryForModal(null);
                      onSelectDetail(b);
                    }}
                    className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex items-center gap-3 hover:border-stone-400 cursor-pointer transition-all"
                  >
                    <BottleClipart fragrance={b} size="sm" className="w-8 h-10 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm text-stone-900 truncate">{b.name}</h4>
                      <p className="text-xs text-stone-500 uppercase">{b.brand}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-stone-400 italic text-center py-4">No bottles in this category.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
