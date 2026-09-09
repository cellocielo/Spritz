import React from 'react';

/**
 * BottleClipart Component
 * Renders custom, bespoke vector clipart illustrations for each iconic fragrance bottle.
 * Styled with soft gradients, glass specular highlights, authentic cap details, labels,
 * and realistic ambient drop shadows matching the clean clipart style.
 */
export default function BottleClipart({ fragrance, size = "md", className = "" }) {
  const {
    id = "generic",
    name = "Fragrance",
    brand = "Boutique",
    accentColor = "#d97706"
  } = fragrance || {};

  const sizeDimensions = {
    sm: "w-14 h-20",
    md: "w-20 h-28",
    lg: "w-28 h-40"
  };

  const svgScale = {
    sm: "w-12 h-18",
    md: "w-20 h-26",
    lg: "w-28 h-38"
  };

  const renderClipartBottle = () => {
    switch (id) {
      // 1. BLEU DE CHANEL (Matches user reference image left card)
      case 'bleu-de-chanel':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bdc-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="35%" stopColor="#38bdf8" />
                <stop offset="70%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="bdc-outer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="bdc-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="30%" stopColor="#475569" />
                <stop offset="70%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <filter id="bdc-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.32" />
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.25" />
              </filter>
            </defs>

            <g filter="url(#bdc-shadow)">
              {/* Cap */}
              <rect x="36" y="10" width="28" height="22" rx="3" fill="url(#bdc-cap)" stroke="#0f172a" strokeWidth="1.2" />
              <line x1="38" y1="13" x2="62" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <rect x="42" y="30" width="16" height="5" fill="#1e293b" />

              {/* Outer Thick Glass Bottle */}
              <rect x="16" y="34" width="68" height="82" rx="8" fill="#64748b" opacity="0.4" stroke="#334155" strokeWidth="1.5" />
              
              {/* Inner Liquid Reservoir */}
              <rect x="20" y="38" width="60" height="72" rx="5" fill="url(#bdc-glass)" />

              {/* Dip tube */}
              <line x1="50" y1="36" x2="50" y2="108" stroke="#ffffff" strokeWidth="1" opacity="0.2" />

              {/* White Minimalist Label */}
              <rect x="32" y="58" width="36" height="30" rx="1.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="34" y="60" width="32" height="26" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
              
              {/* Label Lines */}
              <line x1="42" y1="68" x2="58" y2="68" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="38" y1="74" x2="62" y2="74" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
              <line x1="44" y1="80" x2="56" y2="80" stroke="#64748b" strokeWidth="0.8" strokeLinecap="round" />

              {/* Specular Glass Highlight */}
              <path d="M 23 44 L 23 104" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
              <path d="M 27 44 L 27 60" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
            </g>
          </svg>
        );

      // 2. SANTAL 33 (Matches user reference image right card)
      case 'santal-33':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="s33-liquid" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="25%" stopColor="#f59e0b" />
                <stop offset="55%" stopColor="#fbbf24" />
                <stop offset="85%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
              <linearGradient id="s33-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1c1917" />
                <stop offset="35%" stopColor="#44403c" />
                <stop offset="70%" stopColor="#292524" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>
              <filter id="s33-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#b45309" floodOpacity="0.3" />
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#292524" floodOpacity="0.2" />
              </filter>
            </defs>

            <g filter="url(#s33-shadow)">
              {/* Black Cylindrical Cap */}
              <rect x="38" y="10" width="24" height="24" rx="2" fill="url(#s33-cap)" stroke="#0c0a09" strokeWidth="1" />
              <line x1="41" y1="12" x2="59" y2="12" stroke="#78716c" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
              
              {/* Neck */}
              <rect x="44" y="32" width="12" height="6" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="0.8" />

              {/* Apothecary Rounded Shoulder Bottle Body */}
              <path
                d="M 24,54 C 24,40 36,36 50,36 C 64,36 76,40 76,54 L 76,104 C 76,116 66,120 50,120 C 34,120 24,116 24,104 Z"
                fill="url(#s33-liquid)"
                stroke="#451a03"
                strokeWidth="1.2"
              />

              {/* Thick Glass Base */}
              <path
                d="M 25,108 C 28,116 38,119 50,119 C 62,119 72,116 75,108 L 75,104 C 72,112 62,115 50,115 C 38,115 28,112 25,104 Z"
                fill="#fef3c7"
                opacity="0.6"
              />

              {/* Wrapped Full-Width White Label */}
              <rect x="23.5" y="60" width="53" height="34" fill="#ffffff" stroke="#e7e5e4" strokeWidth="0.8" />
              
              {/* Le Labo Typewriter Rule Lines */}
              <line x1="28" y1="66" x2="68" y2="66" stroke="#1c1917" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="28" y1="72" x2="72" y2="72" stroke="#78716c" strokeWidth="0.8" strokeLinecap="round" />
              <line x1="28" y1="78" x2="72" y2="78" stroke="#a8a29e" strokeWidth="0.6" />
              <line x1="28" y1="84" x2="48" y2="84" stroke="#78716c" strokeWidth="0.8" />
              <line x1="52" y1="84" x2="65" y2="84" stroke="#a8a29e" strokeWidth="0.6" />

              {/* Specular Curved Highlight */}
              <path d="M 27 50 C 27 44 34 40 42 39" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M 26 56 L 26 106" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            </g>
          </svg>
        );

      // 3. BACCARAT ROUGE 540
      case 'br540':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="br540-liquid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="br540-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="40%" stopColor="#fde047" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <filter id="br540-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.35" />
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#78350f" floodOpacity="0.2" />
              </filter>
            </defs>
            <g filter="url(#br540-shadow)">
              {/* Gold Cap */}
              <rect x="36" y="8" width="28" height="24" rx="2" fill="url(#br540-gold)" stroke="#b45309" strokeWidth="1" />
              <line x1="38" y1="11" x2="62" y2="11" stroke="#fef08a" strokeWidth="1" opacity="0.8" />
              <rect x="42" y="30" width="16" height="5" fill="#f59e0b" />

              {/* Crystal Square Flacon */}
              <rect x="18" y="34" width="64" height="82" rx="4" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
              <rect x="22" y="38" width="56" height="74" rx="2" fill="url(#br540-liquid)" />

              {/* Iconic Crimson Red Label */}
              <rect x="30" y="56" width="40" height="36" rx="2" fill="#991b1b" stroke="url(#br540-gold)" strokeWidth="1.5" />
              
              {/* Gold Emblem & Lines */}
              <rect x="34" y="60" width="32" height="28" fill="none" stroke="#fde047" strokeWidth="0.5" strokeDasharray="1 1" />
              <circle cx="50" cy="68" r="3.5" fill="#fde047" />
              <line x1="38" y1="76" x2="62" y2="76" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="42" y1="81" x2="58" y2="81" stroke="#fef08a" strokeWidth="0.8" strokeLinecap="round" />

              {/* Glass Reflection */}
              <line x1="21" y1="36" x2="21" y2="114" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        );

      // 4. REPLICA JAZZ CLUB
      case 'replica-jazz-club':
      case 'replica-by-the-fireplace': {
        const isFireplace = id === 'replica-by-the-fireplace';
        const liquidColor1 = isFireplace ? '#78350f' : '#b45309';
        const liquidColor2 = isFireplace ? '#9a3412' : '#d97706';
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`rep-liq-${id}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={liquidColor1} />
                <stop offset="50%" stopColor={liquidColor2} />
                <stop offset="100%" stopColor={liquidColor1} />
              </linearGradient>
              <filter id={`rep-sh-${id}`} x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor={liquidColor1} floodOpacity="0.3" />
              </filter>
            </defs>
            <g filter={`url(#rep-sh-${id})`}>
              {/* Metallic Silver Spray Nozzle */}
              <rect x="45" y="8" width="10" height="14" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />
              <circle cx="50" cy="13" r="1.5" fill="#475569" />

              {/* Wrapped Cotton Rope Collar */}
              <rect x="42" y="22" width="16" height="12" rx="1" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="0.8" />
              <line x1="42" y1="25" x2="58" y2="25" stroke="#a8a29e" strokeWidth="0.8" />
              <line x1="42" y1="28" x2="58" y2="28" stroke="#a8a29e" strokeWidth="0.8" />
              <line x1="42" y1="31" x2="58" y2="31" stroke="#a8a29e" strokeWidth="0.8" />

              {/* Cylindrical Glass Bottle */}
              <rect x="26" y="34" width="48" height="84" rx="6" fill={`url(#rep-liq-${id})`} stroke="#44403c" strokeWidth="1" />
              
              {/* Vintage Cloth Fabric Label */}
              <rect x="29" y="52" width="42" height="48" rx="1" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="0.8" />
              
              {/* Margiela REPLICA Stamp & Lines */}
              <rect x="33" y="56" width="34" height="8" rx="0.5" fill="#f5f5f4" />
              <text x="50" y="62" textAnchor="middle" fill="#1c1917" fontSize="5" fontWeight="800" fontFamily="monospace">REPLICA</text>
              <line x1="33" y1="69" x2="67" y2="69" stroke="#1c1917" strokeWidth="0.8" />
              <line x1="33" y1="74" x2="65" y2="74" stroke="#78716c" strokeWidth="0.6" />
              <line x1="33" y1="79" x2="67" y2="79" stroke="#78716c" strokeWidth="0.6" />
              <line x1="33" y1="84" x2="60" y2="84" stroke="#a8a29e" strokeWidth="0.6" />
              <line x1="33" y1="89" x2="55" y2="89" stroke="#a8a29e" strokeWidth="0.6" />

              {/* Glass Rim */}
              <path d="M 28 38 L 28 114" stroke="#ffffff" strokeWidth="1.2" opacity="0.5" />
            </g>
          </svg>
        );
      }

      // 5. DIPTYQUE PHILOSYKOS
      case 'diptyque-philosykos':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dip-liquid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0fdf4" />
                <stop offset="50%" stopColor="#dcfce7" />
                <stop offset="100%" stopColor="#bbf7d0" />
              </linearGradient>
              <linearGradient id="dip-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#09090b" />
                <stop offset="40%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <filter id="dip-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#15803d" floodOpacity="0.25" />
              </filter>
            </defs>
            <g filter="url(#dip-shadow)">
              {/* Glossy Black Oval Cap */}
              <ellipse cx="50" cy="18" rx="14" ry="10" fill="url(#dip-cap)" stroke="#09090b" strokeWidth="1" />
              <ellipse cx="50" cy="15" rx="9" ry="3" fill="#52525b" opacity="0.4" />
              <rect x="45" y="26" width="10" height="6" fill="#18181b" />

              {/* Oval Rounded Glass Bottle */}
              <rect x="22" y="32" width="56" height="86" rx="28" fill="url(#dip-liquid)" stroke="#14532d" strokeWidth="1.2" />

              {/* Iconic Oval Label */}
              <ellipse cx="50" cy="74" rx="20" ry="26" fill="#ffffff" stroke="#18181b" strokeWidth="1.4" />
              <ellipse cx="50" cy="74" rx="17.5" ry="23.5" fill="none" stroke="#27272a" strokeWidth="0.6" strokeDasharray="2 1" />
              
              {/* Diptyque Dancing Letters / Fig Icon */}
              <circle cx="50" cy="65" r="4" fill="#166534" opacity="0.8" />
              <path d="M 50 61 C 52 57 56 57 56 59" stroke="#14532d" strokeWidth="0.8" fill="none" />
              <text x="50" y="78" textAnchor="middle" fill="#09090b" fontSize="6.5" fontWeight="700" fontFamily="serif">diptyque</text>
              <line x1="38" y1="84" x2="62" y2="84" stroke="#18181b" strokeWidth="0.8" />
              <text x="50" y="91" textAnchor="middle" fill="#52525b" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">PHILOSYKOS</text>

              {/* Specular Highlight */}
              <path d="M 26 50 C 26 40 36 34 50 34" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            </g>
          </svg>
        );

      // 6. BYREDO GYPSY WATER
      case 'byredo-gypsy-water':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="byr-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#09090b" />
                <stop offset="35%" stopColor="#27272a" />
                <stop offset="70%" stopColor="#18181b" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <filter id="byr-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#27272a" floodOpacity="0.25" />
              </filter>
            </defs>
            <g filter="url(#byr-shadow)">
              {/* Half-Dome Black Cap */}
              <path d="M 34,26 C 34,14 41,8 50,8 C 59,8 66,14 66,26 Z" fill="url(#byr-cap)" stroke="#09090b" strokeWidth="1" />
              <path d="M 38,20 C 40,14 45,11 50,11" stroke="#52525b" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <rect x="44" y="26" width="12" height="6" fill="#18181b" />

              {/* Minimal Cylinder Flacon */}
              <rect x="25" y="32" width="50" height="84" rx="4" fill="#fafaf9" stroke="#27272a" strokeWidth="1.2" />
              
              {/* Thick Crystal Base */}
              <rect x="26" y="104" width="48" height="11" fill="#e7e5e4" opacity="0.7" />

              {/* Stark White Minimalist Label */}
              <rect x="28" y="52" width="44" height="42" fill="#ffffff" stroke="#e5e5e5" strokeWidth="0.8" />
              <text x="50" y="66" textAnchor="middle" fill="#09090b" fontSize="6.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.8">BYREDO</text>
              <text x="50" y="75" textAnchor="middle" fill="#18181b" fontSize="5" fontWeight="600" fontFamily="sans-serif">GYPSY WATER</text>
              <line x1="38" y1="80" x2="62" y2="80" stroke="#737373" strokeWidth="0.5" />
              <text x="50" y="86" textAnchor="middle" fill="#737373" fontSize="4" fontFamily="sans-serif">EAU DE PARFUM</text>

              {/* Highlight */}
              <line x1="28" y1="36" x2="28" y2="108" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            </g>
          </svg>
        );

      // 7. KILIAN ANGELS' SHARE
      case 'angels-share':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ang-liquid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="ang-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <filter id="ang-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#d97706" floodOpacity="0.4" />
              </filter>
            </defs>
            <g filter="url(#ang-shadow)">
              {/* Heavy Polished Gold Cap */}
              <rect x="34" y="8" width="32" height="22" rx="3" fill="url(#ang-gold)" stroke="#92400e" strokeWidth="1" />
              <line x1="36" y1="12" x2="64" y2="12" stroke="#fef9c3" strokeWidth="1" />
              <rect x="42" y="30" width="16" height="4" fill="#b45309" />

              {/* Cut-Crystal Cognac Tumbler */}
              <path d="M 22,34 L 78,34 L 74,116 L 26,116 Z" fill="url(#ang-liquid)" stroke="#78350f" strokeWidth="1.2" />

              {/* Faceted Crystal Grooves */}
              <line x1="32" y1="36" x2="35" y2="114" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
              <line x1="42" y1="36" x2="43" y2="114" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
              <line x1="58" y1="36" x2="57" y2="114" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
              <line x1="68" y1="36" x2="65" y2="114" stroke="#ffffff" strokeWidth="1" opacity="0.4" />

              {/* Diamond cut chevron lines */}
              <path d="M 24,50 L 50,70 L 76,50" stroke="#fef08a" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M 25,75 L 50,95 L 75,75" stroke="#fef08a" strokeWidth="0.8" fill="none" opacity="0.5" />

              {/* Gold Metallic Plaque Label */}
              <rect x="32" y="58" width="36" height="24" rx="2" fill="url(#ang-gold)" stroke="#78350f" strokeWidth="1" />
              <rect x="34" y="60" width="32" height="20" fill="none" stroke="#78350f" strokeWidth="0.5" />
              <text x="50" y="68" textAnchor="middle" fill="#451a03" fontSize="5.5" fontWeight="800" fontFamily="serif">Kilian</text>
              <text x="50" y="75" textAnchor="middle" fill="#451a03" fontSize="4" fontWeight="700" fontFamily="serif">ANGELS' SHARE</text>
            </g>
          </svg>
        );

      // 8. DIOR SAUVAGE ELIXIR
      case 'sauvage-elixir':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sau-body" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#020617" />
                <stop offset="35%" stopColor="#0f172a" />
                <stop offset="65%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <filter id="sau-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#1e3a8a" floodOpacity="0.4" />
              </filter>
            </defs>
            <g filter="url(#sau-shadow)">
              {/* Midnight Ribbed Cap */}
              <rect x="36" y="8" width="28" height="24" rx="2" fill="#020617" stroke="#334155" strokeWidth="1" />
              <line x1="38" y1="13" x2="62" y2="13" stroke="#475569" strokeWidth="1" />
              <line x1="38" y1="17" x2="62" y2="17" stroke="#475569" strokeWidth="1" />
              <line x1="38" y1="21" x2="62" y2="21" stroke="#475569" strokeWidth="1" />
              <line x1="38" y1="25" x2="62" y2="25" stroke="#475569" strokeWidth="1" />

              {/* Deep Midnight Blue Lacquered Body */}
              <rect x="25" y="32" width="50" height="84" rx="6" fill="url(#sau-body)" stroke="#1e293b" strokeWidth="1.2" />

              {/* Silver Inscribed Dior Sauvage Lettering */}
              <text x="50" y="64" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.2">SAUVAGE</text>
              <line x1="38" y1="70" x2="62" y2="70" stroke="#94a3b8" strokeWidth="0.8" />
              <text x="50" y="78" textAnchor="middle" fill="#38bdf8" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">ELIXIR</text>
              <text x="50" y="94" textAnchor="middle" fill="#64748b" fontSize="4" fontWeight="600" fontFamily="sans-serif">Dior</text>

              {/* Glossy Edge Highlight */}
              <line x1="28" y1="36" x2="28" y2="110" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5" />
            </g>
          </svg>
        );

      // 9. GLOSSIER YOU
      case 'glossier-you':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="glo-pink" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fdf2f8" />
                <stop offset="40%" stopColor="#fbcfe8" />
                <stop offset="80%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="glo-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#831843" />
                <stop offset="50%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
              <filter id="glo-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#f472b6" floodOpacity="0.35" />
              </filter>
            </defs>
            <g filter="url(#glo-shadow)">
              {/* Glossy Scarlet Cap */}
              <rect x="42" y="10" width="16" height="20" rx="3" fill="url(#glo-cap)" stroke="#881337" strokeWidth="1" />
              <line x1="44" y1="13" x2="56" y2="13" stroke="#fda4af" strokeWidth="0.8" />
              
              {/* Sculpted Soft Pebble Bottle with Thumbprint Indent */}
              <path
                d="M 28,46 C 28,34 38,30 50,30 C 62,30 72,34 72,46 L 72,70 C 64,74 62,86 72,90 L 72,104 C 72,116 62,120 50,120 C 38,120 28,116 28,104 Z"
                fill="url(#glo-pink)"
                stroke="#db2777"
                strokeWidth="1.2"
              />

              {/* Ergonomic Thumbprint Groove */}
              <ellipse cx="64" cy="80" rx="7" ry="11" fill="#f43f5e" opacity="0.25" />
              <path d="M 61,72 C 67,76 67,84 61,88" stroke="#be185d" strokeWidth="1" fill="none" opacity="0.6" />

              {/* Glossier You Text */}
              <text x="44" y="68" textAnchor="middle" fill="#831843" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">Glossier</text>
              <text x="44" y="78" textAnchor="middle" fill="#9d174d" fontSize="6" fontWeight="700" fontFamily="sans-serif">you</text>

              {/* Specular Highlight */}
              <path d="M 32 40 C 36 34 44 32 50 32" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
            </g>
          </svg>
        );

      // 10. JO MALONE WOOD SAGE & SEA SALT
      case 'wood-sage-sea-salt':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="jm-chrome" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="40%" stopColor="#f8fafc" />
                <stop offset="80%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <filter id="jm-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#64748b" floodOpacity="0.25" />
              </filter>
            </defs>
            <g filter="url(#jm-shadow)">
              {/* Chrome Sphere/Ball Cap */}
              <circle cx="50" cy="18" r="12" fill="url(#jm-chrome)" stroke="#475569" strokeWidth="1" />
              <ellipse cx="47" cy="14" rx="4" ry="2" fill="#ffffff" opacity="0.8" />
              <rect x="44" y="28" width="12" height="5" fill="#94a3b8" />

              {/* Tall Rectangular Glass Flacon */}
              <rect x="28" y="33" width="44" height="84" rx="3" fill="#f8fafc" stroke="#475569" strokeWidth="1.2" />

              {/* Jo Malone Cream Label with Double Pinstripe */}
              <rect x="31" y="48" width="38" height="50" fill="#fffbeb" stroke="#d6d3d1" strokeWidth="0.8" />
              <rect x="33" y="50" width="34" height="46" fill="none" stroke="#1c1917" strokeWidth="0.5" />
              
              {/* Typography */}
              <text x="50" y="60" textAnchor="middle" fill="#1c1917" fontSize="4.5" fontWeight="700" fontFamily="serif" letterSpacing="0.5">JO MALONE</text>
              <text x="50" y="65" textAnchor="middle" fill="#78716c" fontSize="3.5" fontFamily="serif">LONDON</text>
              <line x1="38" y1="70" x2="62" y2="70" stroke="#1c1917" strokeWidth="0.6" />
              <text x="50" y="78" textAnchor="middle" fill="#1c1917" fontSize="4" fontWeight="600" fontFamily="serif">WOOD SAGE</text>
              <text x="50" y="83" textAnchor="middle" fill="#1c1917" fontSize="3.5" fontFamily="serif">& SEA SALT</text>
              <text x="50" y="91" textAnchor="middle" fill="#78716c" fontSize="3" fontFamily="sans-serif">COLOGNE</text>

              {/* Edge Glass Shine */}
              <line x1="30" y1="36" x2="30" y2="114" stroke="#ffffff" strokeWidth="1.5" />
            </g>
          </svg>
        );

      // 11. CREED AVENTUS
      case 'creed-aventus':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="crd-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#09090b" />
                <stop offset="50%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <filter id="crd-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#09090b" floodOpacity="0.35" />
              </filter>
            </defs>
            <g filter="url(#crd-shadow)">
              {/* Crown Cap */}
              <path d="M 38,10 L 62,10 L 60,26 L 40,26 Z" fill="url(#crd-cap)" stroke="#09090b" strokeWidth="1" />
              <line x1="41" y1="13" x2="59" y2="13" stroke="#71717a" strokeWidth="1" />
              <rect x="43" y="26" width="14" height="6" fill="#18181b" />

              {/* Flacon Body */}
              <path d="M 22,46 C 22,34 34,32 50,32 C 66,32 78,34 78,46 L 78,114 C 78,118 72,120 50,120 C 28,120 22,118 22,114 Z" fill="#ffffff" stroke="#27272a" strokeWidth="1.2" />

              {/* Black Textured Leather Bottom Wrap */}
              <path d="M 22,70 L 78,70 L 78,114 C 78,118 72,120 50,120 C 28,120 22,118 22,114 Z" fill="#18181b" />

              {/* Silver Creed Medallion Plate */}
              <rect x="32" y="76" width="36" height="24" rx="2" fill="#e4e4e7" stroke="#71717a" strokeWidth="0.8" />
              <circle cx="50" cy="85" r="4.5" fill="#27272a" />
              {/* Horse & Rider Vector Glyph */}
              <path d="M 48,84 L 52,83 L 50,87 Z" fill="#e4e4e7" />
              <text x="50" y="96" textAnchor="middle" fill="#09090b" fontSize="4" fontWeight="800" fontFamily="serif">AVENTUS</text>

              {/* Top Glass Section Logo */}
              <text x="50" y="52" textAnchor="middle" fill="#09090b" fontSize="6" fontWeight="900" fontFamily="serif">CREED</text>
              <text x="50" y="60" textAnchor="middle" fill="#71717a" fontSize="3.5" fontFamily="serif">1760</text>
            </g>
          </svg>
        );

      // 12. TOM FORD OUD WOOD
      case 'tom-ford-oud-wood':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tf-glass" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1c1917" />
                <stop offset="35%" stopColor="#44403c" />
                <stop offset="70%" stopColor="#292524" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>
              <linearGradient id="tf-silver" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <filter id="tf-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#292524" floodOpacity="0.4" />
              </filter>
            </defs>
            <g filter="url(#tf-shadow)">
              {/* Chess Piece Stepped Square Cap */}
              <rect x="34" y="6" width="32" height="12" rx="2" fill="url(#tf-glass)" stroke="#0c0a09" strokeWidth="1" />
              <rect x="38" y="18" width="24" height="12" fill="url(#tf-glass)" stroke="#0c0a09" strokeWidth="1" />
              <line x1="36" y1="9" x2="62" y2="9" stroke="#78716c" strokeWidth="0.8" />

              {/* Architectural Pillar Body */}
              <rect x="26" y="30" width="48" height="88" rx="3" fill="url(#tf-glass)" stroke="#0c0a09" strokeWidth="1.2" />

              {/* Silver Metallic Label Plaque */}
              <rect x="30" y="54" width="40" height="34" rx="1.5" fill="url(#tf-silver)" stroke="#64748b" strokeWidth="0.8" />
              <text x="50" y="66" textAnchor="middle" fill="#0f172a" fontSize="5.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.8">TOM FORD</text>
              <line x1="36" y1="71" x2="64" y2="71" stroke="#334155" strokeWidth="0.8" />
              <text x="50" y="78" textAnchor="middle" fill="#0f172a" fontSize="5" fontWeight="700" fontFamily="sans-serif">OUD WOOD</text>
              <text x="50" y="84" textAnchor="middle" fill="#475569" fontSize="3.5" fontFamily="sans-serif">EAU DE PARFUM</text>

              {/* Pillar Edge Highlight */}
              <line x1="28" y1="32" x2="28" y2="116" stroke="#a8a29e" strokeWidth="1" opacity="0.4" />
            </g>
          </svg>
        );

      // 13. PARFUMS DE MARLY LAYTON
      case 'pdm-layton':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pdm-blue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="pdm-silver" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <filter id="pdm-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#1e3a8a" floodOpacity="0.4" />
              </filter>
            </defs>
            <g filter="url(#pdm-shadow)">
              {/* Heavy Silver Sculpted Cap */}
              <path d="M 38,12 C 42,6 58,6 62,12 L 60,26 L 40,26 Z" fill="url(#pdm-silver)" stroke="#475569" strokeWidth="1" />
              <circle cx="50" cy="9" r="2.5" fill="#f8fafc" />

              {/* Midnight Blue Sculpted Flacon */}
              <rect x="22" y="28" width="56" height="90" rx="8" fill="url(#pdm-blue)" stroke="#312e81" strokeWidth="1.2" />

              {/* Embossed Dual Horses Shield Crest */}
              <path d="M 38,52 C 34,46 44,40 50,45 C 56,40 66,46 62,52 C 60,62 50,68 50,68 C 50,68 40,62 38,52 Z" fill="#312e81" stroke="#60a5fa" strokeWidth="0.8" opacity="0.6" />
              <text x="50" y="58" textAnchor="middle" fill="#93c5fd" fontSize="5" fontWeight="900" fontFamily="serif">PDM</text>
              <text x="50" y="80" textAnchor="middle" fill="#e2e8f0" fontSize="6.5" fontWeight="800" fontFamily="serif">LAYTON</text>
              <text x="50" y="88" textAnchor="middle" fill="#94a3b8" fontSize="4" fontFamily="serif">PARFUMS DE MARLY</text>

              {/* Subtle Blue Rim Light */}
              <path d="M 25 36 C 25 30 32 30 38 30" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            </g>
          </svg>
        );

      // 14. JEAN PAUL GAULTIER LE MALE ELIXIR
      case 'gaultier-le-male-elixir':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="jpg-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="30%" stopColor="#f59e0b" />
                <stop offset="60%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
              <filter id="jpg-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.4" />
              </filter>
            </defs>
            <g filter="url(#jpg-shadow)">
              {/* Bronze Atomizer & Safety Pin Ring */}
              <circle cx="50" cy="14" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
              <circle cx="50" cy="14" r="2.5" fill="none" stroke="#78350f" strokeWidth="1" />

              {/* Sculpted Torso Silhouette */}
              <path
                d="M 44,22 L 56,22 C 62,24 74,28 72,42 C 70,52 64,56 65,70 C 66,84 70,94 68,114 C 68,118 60,120 50,120 C 40,120 32,118 32,114 C 30,94 34,84 35,70 C 36,56 30,52 28,42 C 26,28 38,24 44,22 Z"
                fill="url(#jpg-gold)"
                stroke="#78350f"
                strokeWidth="1.2"
              />

              {/* Iconic Sailor Stripe Grooves */}
              <line x1="30" y1="46" x2="70" y2="46" stroke="#451a03" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <line x1="32" y1="56" x2="68" y2="56" stroke="#451a03" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <line x1="34" y1="66" x2="66" y2="66" stroke="#451a03" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <line x1="35" y1="76" x2="65" y2="76" stroke="#451a03" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <line x1="34" y1="86" x2="66" y2="86" stroke="#451a03" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <line x1="33" y1="96" x2="67" y2="96" stroke="#451a03" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />

              {/* Gold Specular Highlight */}
              <path d="M 33 34 C 36 28 44 26 50 26" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            </g>
          </svg>
        );

      // 15. CLEAN RESERVE WARM COTTON
      case 'clean-reserve-warm-cotton':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cr-wood" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="50%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>
              <filter id="cr-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.2" />
              </filter>
            </defs>
            <g filter="url(#cr-shadow)">
              {/* Sustainable Wooden Block Cap */}
              <rect x="32" y="8" width="36" height="24" rx="2" fill="url(#cr-wood)" stroke="#292524" strokeWidth="1" />
              <line x1="36" y1="14" x2="64" y2="14" stroke="#a16207" strokeWidth="0.8" opacity="0.5" />
              <line x1="36" y1="20" x2="64" y2="20" stroke="#a16207" strokeWidth="0.8" opacity="0.5" />

              {/* Clear Glass Heavy Cube */}
              <rect x="18" y="34" width="64" height="82" rx="4" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.2" />
              <rect x="22" y="38" width="56" height="74" rx="2" fill="#e0f2fe" opacity="0.6" />

              {/* Minimalist White Label */}
              <rect x="28" y="56" width="44" height="38" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
              <text x="50" y="68" textAnchor="middle" fill="#0f172a" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">CLEAN</text>
              <text x="50" y="75" textAnchor="middle" fill="#64748b" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">RESERVE</text>
              <line x1="36" y1="80" x2="64" y2="80" stroke="#94a3b8" strokeWidth="0.6" />
              <text x="50" y="87" textAnchor="middle" fill="#0284c7" fontSize="4" fontWeight="700" fontFamily="sans-serif">WARM COTTON</text>
            </g>
          </svg>
        );

      // 16. CHANEL NO 5 L'EAU
      case 'chanel-no-5-leau':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="ch5-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#64748b" floodOpacity="0.25" />
              </filter>
            </defs>
            <g filter="url(#ch5-shadow)">
              {/* Octagonal Faceted Stopper Cap */}
              <polygon points="38,8 62,8 66,18 62,28 38,28 34,18" fill="#ffffff" stroke="#18181b" strokeWidth="1" />
              <polygon points="41,11 59,11 62,18 59,25 41,25 38,18" fill="#f4f4f5" stroke="#a1a1aa" strokeWidth="0.5" />
              <rect x="44" y="28" width="12" height="4" fill="#18181b" />

              {/* Beveled Emerald-Cut Shoulder Flacon */}
              <polygon points="24,40 32,32 68,32 76,40 76,112 72,118 28,118 24,112" fill="#ffffff" stroke="#18181b" strokeWidth="1.2" />
              
              {/* Pale Champagne Liquid Fill */}
              <polygon points="27,42 34,35 66,35 73,42 73,110 70,115 30,115 27,110" fill="#fefce8" opacity="0.8" />

              {/* Iconic Minimal Chanel Label */}
              <rect x="32" y="54" width="36" height="38" fill="#ffffff" stroke="#18181b" strokeWidth="1" />
              <rect x="34" y="56" width="32" height="34" fill="none" stroke="#e4e4e7" strokeWidth="0.5" />
              <text x="50" y="68" textAnchor="middle" fill="#000000" fontSize="7" fontWeight="900" fontFamily="sans-serif">N°5</text>
              <text x="50" y="77" textAnchor="middle" fill="#18181b" fontSize="5.5" fontWeight="800" fontFamily="sans-serif">CHANEL</text>
              <text x="50" y="85" textAnchor="middle" fill="#71717a" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">L'EAU</text>

              {/* Faceted Specular Line */}
              <line x1="26" y1="42" x2="26" y2="110" stroke="#ffffff" strokeWidth="2" />
            </g>
          </svg>
        );

      // 17. YSL Y EAU DE PARFUM
      case 'ysl-y-edp':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ysl-body" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#09090b" />
                <stop offset="40%" stopColor="#1e293b" />
                <stop offset="80%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="ysl-silver" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <filter id="ysl-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.35" />
              </filter>
            </defs>
            <g filter="url(#ysl-shadow)">
              {/* Black Ribbed Cylinder Cap */}
              <rect x="36" y="8" width="28" height="24" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1" />
              <line x1="38" y1="12" x2="62" y2="12" stroke="#52525b" strokeWidth="1" />
              <line x1="38" y1="16" x2="62" y2="16" stroke="#52525b" strokeWidth="1" />
              <line x1="38" y1="20" x2="62" y2="20" stroke="#52525b" strokeWidth="1" />

              {/* Dark Gradient Flacon */}
              <rect x="25" y="32" width="50" height="84" rx="4" fill="url(#ysl-body)" stroke="#1e293b" strokeWidth="1.2" />

              {/* Iconic Silver Metallic 'Y' Slit/Band */}
              <polygon points="18,62 38,62 56,76 44,76 30,66 18,66" fill="url(#ysl-silver)" stroke="#334155" strokeWidth="0.8" />
              <polygon points="56,76 72,76 72,72 56,72" fill="url(#ysl-silver)" stroke="#334155" strokeWidth="0.8" />

              <text x="50" y="94" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="900" fontFamily="sans-serif">Y</text>
              <text x="50" y="104" textAnchor="middle" fill="#94a3b8" fontSize="4" fontWeight="600" fontFamily="sans-serif">EAU DE PARFUM</text>
            </g>
          </svg>
        );

      // 18. BOADICEA BLUE SAPPHIRE
      case 'boadicea-blue-sapphire':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="boa-sapphire" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
              <linearGradient id="boa-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <filter id="boa-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.4" />
              </filter>
            </defs>
            <g filter="url(#boa-shadow)">
              {/* Gold Domed Cap */}
              <path d="M 38,24 C 38,12 43,8 50,8 C 57,8 62,12 62,24 Z" fill="url(#boa-gold)" stroke="#78350f" strokeWidth="1" />

              {/* Circular Sapphire Blue Flacon */}
              <circle cx="50" cy="74" r="40" fill="url(#boa-sapphire)" stroke="#1e3a8a" strokeWidth="1.5" />

              {/* Golden Ornate Celtic Knotwork Medallion */}
              <circle cx="50" cy="74" r="26" fill="url(#boa-gold)" stroke="#78350f" strokeWidth="1" />
              <circle cx="50" cy="74" r="22" fill="none" stroke="#78350f" strokeWidth="0.8" strokeDasharray="2 1.5" />
              <circle cx="50" cy="74" r="6" fill="#1e3a8a" stroke="url(#boa-gold)" strokeWidth="1" />

              {/* Specular curved shine */}
              <path d="M 22 55 C 30 38 46 36 60 38" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>
          </svg>
        );

      // 19. XERJOFF RICHWOOD
      case 'xerjoff-richwood':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="xer-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="40%" stopColor="#fde047" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="xer-liquid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <filter id="xer-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.35" />
              </filter>
            </defs>
            <g filter="url(#xer-shadow)">
              {/* Iconic Xerjoff Sweeping Golden Crown Horn Cap */}
              <path d="M 40,26 C 36,18 42,6 50,6 C 58,6 64,18 60,26 Z" fill="url(#xer-gold)" stroke="#78350f" strokeWidth="1" />
              <path d="M 38,26 L 62,26 L 58,30 L 42,30 Z" fill="url(#xer-gold)" />

              {/* Sculpted Fluted Italian Flacon */}
              <path
                d="M 28,40 L 72,40 L 68,114 C 68,118 60,120 50,120 C 40,120 32,118 32,114 Z"
                fill="url(#xer-liquid)"
                stroke="#b45309"
                strokeWidth="1.2"
              />

              {/* Golden Crest Shield Label */}
              <path d="M 36,60 L 64,60 L 60,86 L 50,94 L 40,86 Z" fill="url(#xer-gold)" stroke="#78350f" strokeWidth="1" />
              <text x="50" y="72" textAnchor="middle" fill="#451a03" fontSize="6.5" fontWeight="900" fontFamily="serif">X</text>
              <text x="50" y="82" textAnchor="middle" fill="#451a03" fontSize="4" fontWeight="800" fontFamily="serif">RICHWOOD</text>

              {/* Glass Rim */}
              <line x1="30" y1="42" x2="30" y2="112" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            </g>
          </svg>
        );

      // 20. INITIO MUSK THERAPY
      case 'musk-therapy':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="musk-body" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3e8ff" />
                <stop offset="40%" stopColor="#e9d5ff" />
                <stop offset="100%" stopColor="#d8b4fe" />
              </linearGradient>
              <linearGradient id="musk-silver" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <filter id="musk-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#c084fc" floodOpacity="0.3" />
              </filter>
            </defs>
            <g filter="url(#musk-shadow)">
              {/* Wide Flat Silver Cap with Stepped Base */}
              <rect x="28" y="8" width="44" height="18" rx="2" fill="url(#musk-silver)" stroke="#64748b" strokeWidth="0.8" />
              <line x1="30" y1="12" x2="70" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
              <rect x="42" y="26" width="16" height="6" fill="#cbd5e1" />

              {/* Lilac Opaque Flacon */}
              <rect x="24" y="32" width="52" height="86" rx="5" fill="url(#musk-body)" stroke="#c084fc" strokeWidth="1.2" />

              {/* White Minimal Plaque */}
              <rect x="30" y="52" width="40" height="42" rx="2" fill="#ffffff" stroke="#e9d5ff" strokeWidth="1" />
              <rect x="32" y="54" width="36" height="38" fill="none" stroke="#d8b4fe" strokeWidth="0.5" />
              <text x="50" y="66" textAnchor="middle" fill="#6b21a8" fontSize="5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">INITIO</text>
              <line x1="36" y1="72" x2="64" y2="72" stroke="#a855f7" strokeWidth="0.6" />
              <text x="50" y="80" textAnchor="middle" fill="#581c87" fontSize="4.5" fontWeight="700" fontFamily="serif">MUSK</text>
              <text x="50" y="86" textAnchor="middle" fill="#581c87" fontSize="4" fontWeight="600" fontFamily="serif">THERAPY</text>

              {/* Specular Highlight */}
              <line x1="26" y1="36" x2="26" y2="114" stroke="#ffffff" strokeWidth="1.8" opacity="0.8" />
            </g>
          </svg>
        );

      // 21. BDK GRIS CHARNEL
      case 'gris-charnel':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bdk-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f5f5f4" />
                <stop offset="40%" stopColor="#e7e5e4" />
                <stop offset="100%" stopColor="#a8a29e" />
              </linearGradient>
              <linearGradient id="bdk-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#292524" />
                <stop offset="50%" stopColor="#57534e" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>
              <filter id="bdk-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#57534e" floodOpacity="0.3" />
              </filter>
            </defs>
            <g filter="url(#bdk-shadow)">
              {/* Grand Beveled Dark Cap */}
              <polygon points="34,10 66,10 68,26 32,26" fill="url(#bdk-cap)" stroke="#1c1917" strokeWidth="1" />
              <line x1="36" y1="13" x2="64" y2="13" stroke="#a8a29e" strokeWidth="1" opacity="0.6" />
              <rect x="42" y="26" width="16" height="6" fill="#292524" />

              {/* Heavy Rounded Rectangle Glass Flacon */}
              <rect x="24" y="32" width="52" height="86" rx="6" fill="url(#bdk-glass)" stroke="#57534e" strokeWidth="1.2" />

              {/* BDK Minimalist Label */}
              <rect x="29" y="54" width="42" height="38" fill="#ffffff" stroke="#d6d3d1" strokeWidth="0.8" />
              <text x="50" y="68" textAnchor="middle" fill="#1c1917" fontSize="7" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">BDK</text>
              <line x1="34" y1="73" x2="66" y2="73" stroke="#78716c" strokeWidth="0.8" />
              <text x="50" y="81" textAnchor="middle" fill="#292524" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">GRIS CHARNEL</text>

              {/* Specular */}
              <line x1="27" y1="36" x2="27" y2="114" stroke="#ffffff" strokeWidth="1.8" opacity="0.8" />
            </g>
          </svg>
        );

      // 22. MOLECULE 01
      case 'molecule-01':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mol-liquid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="50%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>
              <filter id="mol-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.25" />
              </filter>
            </defs>
            <g filter="url(#mol-shadow)">
              {/* Silver/Translucent Spray Head */}
              <rect x="45" y="8" width="10" height="14" rx="2" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="50" cy="13" r="1.5" fill="#0284c7" />
              <rect x="42" y="22" width="16" height="10" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="0.8" />

              {/* Minimal Clear Flat Glass Flacon */}
              <rect x="22" y="32" width="56" height="86" rx="4" fill="url(#mol-liquid)" stroke="#38bdf8" strokeWidth="1.2" />

              {/* Geometric Binary / Molecule Graphic */}
              <rect x="28" y="48" width="44" height="48" fill="#ffffff" opacity="0.9" stroke="#7dd3fc" strokeWidth="0.6" />
              <text x="50" y="62" textAnchor="middle" fill="#0369a1" fontSize="5" fontWeight="900" fontFamily="sans-serif">Escentric</text>
              <text x="50" y="70" textAnchor="middle" fill="#0284c7" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">Molecules</text>
              <line x1="32" y1="76" x2="68" y2="76" stroke="#38bdf8" strokeWidth="0.8" />
              <text x="50" y="86" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="900" fontFamily="sans-serif">01</text>

              {/* Specular */}
              <line x1="24" y1="36" x2="24" y2="114" stroke="#ffffff" strokeWidth="1.8" />
            </g>
          </svg>
        );

      // 23. DIPTYQUE L'OMBRE DANS L'EAU
      case 'lombre-dans-leau':
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lomb-green" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#14532d" />
                <stop offset="50%" stopColor="#166534" />
                <stop offset="100%" stopColor="#052e16" />
              </linearGradient>
              <linearGradient id="lomb-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#09090b" />
                <stop offset="40%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <filter id="lomb-shadow" x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#166534" floodOpacity="0.35" />
              </filter>
            </defs>
            <g filter="url(#lomb-shadow)">
              {/* Glossy Black Oval Cap */}
              <ellipse cx="50" cy="18" rx="14" ry="10" fill="url(#lomb-cap)" stroke="#09090b" strokeWidth="1" />
              <ellipse cx="50" cy="15" rx="9" ry="3" fill="#52525b" opacity="0.4" />
              <rect x="45" y="26" width="10" height="6" fill="#18181b" />

              {/* Dark Forest Green Oval Rounded Glass Bottle */}
              <rect x="22" y="32" width="56" height="86" rx="28" fill="url(#lomb-green)" stroke="#052e16" strokeWidth="1.2" />

              {/* Iconic Oval Label with Black Background / Swan */}
              <ellipse cx="50" cy="74" rx="20" ry="26" fill="#18181b" stroke="#ffffff" strokeWidth="1.4" />
              <ellipse cx="50" cy="74" rx="17.5" ry="23.5" fill="none" stroke="#a1a1aa" strokeWidth="0.6" strokeDasharray="2 1" />
              
              {/* Swan motif & typography */}
              <circle cx="50" cy="63" r="3.5" fill="#22c55e" opacity="0.7" />
              <text x="50" y="76" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="700" fontFamily="serif">diptyque</text>
              <line x1="38" y1="81" x2="62" y2="81" stroke="#a1a1aa" strokeWidth="0.6" />
              <text x="50" y="87" textAnchor="middle" fill="#e2e8f0" fontSize="3.5" fontWeight="700" fontFamily="sans-serif">L'OMBRE</text>
              <text x="50" y="92" textAnchor="middle" fill="#94a3b8" fontSize="3" fontFamily="sans-serif">DANS L'EAU</text>

              {/* Specular Highlight */}
              <path d="M 26 50 C 26 40 36 34 50 34" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            </g>
          </svg>
        );

      // DEFAULT / PROCEDURAL BOTTLE CLIPART for any other fragrance
      default:
        return (
          <svg viewBox="0 0 100 130" className="w-full h-full object-contain overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`gen-liquid-${id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor={accentColor} />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id={`gen-cap-${id}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1c1917" />
                <stop offset="50%" stopColor="#44403c" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>
              <filter id={`gen-shadow-${id}`} x="-30%" y="-10%" width="160%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor={accentColor} floodOpacity="0.3" />
              </filter>
            </defs>
            <g filter={`url(#gen-shadow-${id})`}>
              {/* Cap */}
              <rect x="36" y="10" width="28" height="22" rx="3" fill={`url(#gen-cap-${id})`} stroke="#1c1917" strokeWidth="1" />
              <rect x="42" y="30" width="16" height="5" fill="#292524" />

              {/* Glass Flacon */}
              <rect x="22" y="34" width="56" height="82" rx="6" fill={`url(#gen-liquid-${id})`} stroke="#292524" strokeWidth="1.2" />

              {/* White Minimalist Label */}
              <rect x="28" y="56" width="44" height="38" rx="2" fill="#ffffff" stroke="#e7e5e4" strokeWidth="0.8" />
              <line x1="36" y1="66" x2="64" y2="66" stroke="#1c1917" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="33" y1="73" x2="67" y2="73" stroke="#78716c" strokeWidth="1" strokeLinecap="round" />
              <line x1="38" y1="80" x2="62" y2="80" stroke="#a8a29e" strokeWidth="0.8" strokeLinecap="round" />

              {/* Glass Highlight */}
              <line x1="25" y1="38" x2="25" y2="112" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeDimensions[size] || sizeDimensions.md} shrink-0 group select-none ${className}`}>
      <div className={`transition-transform duration-300 group-hover:scale-105 ${svgScale[size] || svgScale.md} flex items-center justify-center`}>
        {renderClipartBottle()}
      </div>
    </div>
  );
}
