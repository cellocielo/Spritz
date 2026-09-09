// Comprehensive database of curated designer and niche fragrances with settings, ranked notes, and adaptive metadata

export const VIBE_SETTINGS = [
  {
    id: "dewy-rainforest",
    title: "Dewy Amazon Rainforest",
    subtitle: "Misty green leaves, fresh soil & crushed figs",
    icon: "🌿",
    families: ["green-fig", "woods", "clean-laundry"],
    description: "Walking under a tropical canopy right after warm rain, surrounded by lush green foliage and sunlit mist."
  },
  {
    id: "cozy-jazz-lounge",
    title: "Dimly-Lit Jazz Lounge",
    subtitle: "Aged leather armchairs, rum & sweet tobacco smoke",
    icon: "🍸",
    families: ["woods", "leather-spice", "sweet-gourmand"],
    description: "Sitting in a plush velvet booth with a crystal glass of dark rum and subtle cigar smoke hanging in tungsten light."
  },
  {
    id: "parisian-bakery",
    title: "Parisian Pastry Shop",
    subtitle: "Warm vanilla, roasted tonka bean & caramelized sugar",
    icon: "🥐",
    families: ["sweet-gourmand", "amber-oriental"],
    description: "Stepping into a cozy bakery on a cold morning filled with freshly baked pastries, salted caramel, and bourbon vanilla."
  },
  {
    id: "fresh-linen-morning",
    title: "Crisp Sunlit Cotton Linen",
    subtitle: "White sheets drying in a summer breeze & clean musk",
    icon: "🧺",
    families: ["clean-laundry", "fresh-citrus", "floral"],
    description: "Wrapping yourself in fresh-out-of-the-dryer white cotton sheets on a bright Sunday morning."
  },
  {
    id: "mediterranean-cliff",
    title: "Mediterranean Coastal Cliff",
    subtitle: "Salty sea mist, bergamot & sun-warmed driftwood",
    icon: "🌊",
    families: ["fresh-citrus", "clean-laundry", "green-fig"],
    description: "Standing on an Italian cliffside overlooking ocean waves, with salty coastal breezes blowing through lemon groves."
  },
  {
    id: "alpine-campfire",
    title: "Alpine Campfire in Winter",
    subtitle: "Smoky cedar, crackling chestnuts & crisp pine needles",
    icon: "🪵",
    families: ["woods", "leather-spice", "sweet-gourmand"],
    description: "Roasting chestnuts by an open outdoor hearth under a starry snow-covered pine forest night."
  },
  {
    id: "royal-gala",
    title: "Chandelier Ballroom & Silk",
    subtitle: "Airy saffron, amberwood & glowing crystal elegance",
    icon: "✨",
    families: ["amber-oriental", "sweet-gourmand", "woods"],
    description: "Gliding across a marble ballroom floor in evening silk velvet under sparkling crystal chandeliers."
  },
  {
    id: "blooming-garden",
    title: "Sun-Drenched Bloom Garden",
    subtitle: "Morning dew, blooming jasmine & soft pink rose petals",
    icon: "🌹",
    families: ["floral", "clean-laundry", "fresh-citrus"],
    description: "Strolling through a private botanical garden filled with white jasmine, soft iris, and fresh rose petals."
  }
];

export function calculateCosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB) return 0;
  const keys = ['fresh', 'gourmand', 'woody', 'floral', 'resin'];
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (const k of keys) {
    const valA = vecA[k] || 0;
    const valB = vecB[k] || 0;
    dotProduct += valA * valB;
    normA += valA * valA;
    normB += valB * valB;
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function getCollectorRarity(count = 1) {
  const num = Number(count) || 1;
  return {
    tier: num <= 5 ? 'Niche Gem' : 'Popular',
    badge: `${num.toLocaleString()} Collectors`,
    color: 'bg-amber-50 text-amber-900 border-amber-200 font-semibold',
    description: `${num.toLocaleString()} collectors have this fragrance in their collection.`
  };
}

export const FRAGRANCE_DATABASE = [
  {
    "id": "br540",
    "imageUrl": "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/10103752_fpx.tif?wid=1000&fmt=jpeg",
    "name": "Baccarat Rouge 540",
    "brand": "Maison Francis Kurkdjian",
    "perfumer": "Francis Kurkdjian",
    "category": "Niche",
    "collectorsCount": 1240,
    "accordVector": {
      "fresh": 0.2,
      "gourmand": 0.9,
      "woody": 0.7,
      "floral": 0.6,
      "resin": 0.8
    },
    "priceRange": "luxury-300",
    "estimatedPrice": "$325",
    "climates": [
      "fall",
      "winter",
      "spring",
      "all-year"
    ],
    "occasions": [
      "date",
      "special",
      "clubbing"
    ],
    "olfactoryFamilies": [
      "amber-oriental",
      "sweet-gourmand",
      "woods"
    ],
    "vibeSettings": [
      "royal-gala",
      "parisian-bakery"
    ],
    "sillage": "beast-mode",
    "longevity": "12+ hours",
    "genderVibe": "Unisex",
    "notes": {
      "top": [
        "Jasmine",
        "Saffron"
      ],
      "heart": [
        "Amberwood",
        "Ambergris"
      ],
      "base": [
        "Fir Resin",
        "Cedarwood"
      ]
    },
    "mainAccords": [
      {
        "name": "Amber",
        "score": 100
      },
      {
        "name": "Almond",
        "score": 80
      },
      {
        "name": "Woody",
        "score": 60
      },
      {
        "name": "Warm Spicy",
        "score": 40
      }
    ],
    "vibeCheck": "Liquid gold in a crystal tumbler. Feels like floating through a chandelier-lit ballroom in silk velvet. Sweet, airy saffron intertwined with warm amberwood.",
    "pros": [
      "Unmatched projection & signature scent status",
      "Extremely long-lasting (12+ hours)",
      "Addictive, luxurious complement puller"
    ],
    "cons": [
      "High price point ($325+)",
      "Some people become nose-blind to saffron quickly",
      "Widely recognized in luxury nightlife circles"
    ],
    "gradient": "from-amber-600 via-red-900 to-amber-950",
    "accentColor": "#f59e0b",
    "dominantCategory": "AmberResinous",
    "accordWeights": {
      "CitrusFresh": 0,
      "AromaticGreen": 0,
      "Floral": 0.1,
      "Fruity": 0,
      "Spicy": 0.1,
      "Gourmand": 0,
      "AmberResinous": 0.55,
      "Woody": 0.25
    }
  },
  {
    id: "replica-jazz-club",
    imageUrl: "https://www.sephora.com/productimages/sku/s1602259-main-zoom.jpg",
    name: "REPLICA Jazz Club",
    brand: "Maison Margiela",
    perfumer: "Alienor Massenet",
    category: "Niche",
    collectorsCount: 840,
    accordVector: { fresh: 0.1, gourmand: 0.8, woody: 0.9, floral: 0.1, resin: 0.7 },
    priceRange: "50-150",
    estimatedPrice: "$165",
    climates: ["fall", "winter"],
    occasions: ["date", "clubbing", "daily"],
    olfactoryFamilies: ["woods", "leather-spice", "sweet-gourmand"],
    vibeSettings: ["cozy-jazz-lounge", "alpine-campfire"],
    sillage: "pleasant-trail",
    longevity: "7-9 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Pink Pepper", "Neroli", "Lemon"],
      heart: ["Rum Absolute", "Clary Sage", "Java Vetiver Oil"],
      base: ["Tobacco Leaf", "Vanilla Bean", "Styrax"]
    },
    mainAccords: [{ name: "Rum", score: 100 }, { name: "Tobacco", score: 80 }, { name: "Vanilla", score: 60 }, { name: "Woody", score: 40 }, { name: "Warm Spicy", score: 20 }],
    vibeCheck: "Sitting in a leather armchair in a dimly lit Brooklyn jazz lounge. A crystal glass of dark aged rum resting on oak, with a sweet hint of hand-rolled cigar smoke.",
    pros: [
      "Incredible cozy autumn/winter date night vibe",
      "Unique rum & sweet tobacco composition",
      "Very approachable price for niche storytelling"
    ],
    cons: [
      "Too heavy for humid summer afternoons",
      "Subdues slightly after 6 hours on skin"
    ],
    gradient: "from-amber-800 via-orange-950 to-stone-900",
    accentColor: "#d97706"
  },
  {
    id: "diptyque-philosykos",
    imageUrl: "https://n.nordstrommedia.com/id/sr3/452cf529-5ffc-4977-83eb-259df95a5639.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Philosykos EDP",
    brand: "Diptyque",
    perfumer: "Olivia Giacobetti",
    category: "Niche",
    collectorsCount: 310,
    accordVector: { fresh: 0.9, gourmand: 0.3, woody: 0.8, floral: 0.5, resin: 0.2 },
    priceRange: "150-300",
    estimatedPrice: "$230",
    climates: ["spring", "summer", "warm"],
    occasions: ["daily", "office", "fresh-gym"],
    olfactoryFamilies: ["green-fig", "woods", "clean-laundry"],
    vibeSettings: ["dewy-rainforest", "mediterranean-cliff"],
    sillage: "pleasant-trail",
    longevity: "6-8 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Fig Leaf", "Fig Tree"],
      heart: ["Green Notes", "Coconut"],
      base: ["Fig Wood", "Cedar", "Woody Notes"]
    },
    mainAccords: [{ name: "Green", score: 100 }, { name: "Woody", score: 80 }, { name: "Fruity", score: 60 }, { name: "Fresh", score: 40 }, { name: "Sweet", score: 20 }],
    vibeCheck: "Walking through a sun-drenched wild fig grove along the coast of Greece. The crush of fresh green leaves underfoot, milky unripe figs overhead, and cedar breezes.",
    pros: [
      "Masterpiece natural fig scent, hyper-realistic",
      "Uplifting, sophisticated & never cloying",
      "Perfect non-offensive daily signature"
    ],
    cons: [
      "Moderate scent trail (prefers close quarters)",
      "Requires reapplication after 6 hours"
    ],
    gradient: "from-emerald-800 via-teal-950 to-stone-900",
    accentColor: "#10b981"
  },
  {
    id: "bleu-de-chanel",
    imageUrl: "https://www.sephora.com/productimages/sku/s1685651-main-zoom.jpg",
    name: "Bleu de Chanel EDP",
    brand: "Chanel",
    perfumer: "Jacques Polge",
    category: "Designer",
    collectorsCount: 1890,
    accordVector: { fresh: 0.9, gourmand: 0.1, woody: 0.8, floral: 0.2, resin: 0.5 },
    priceRange: "50-150",
    estimatedPrice: "$158",
    climates: ["all-year", "spring", "summer", "fall"],
    occasions: ["office", "daily", "date", "fresh-gym"],
    olfactoryFamilies: ["fresh-citrus", "woods", "clean-laundry"],
    vibeSettings: ["mediterranean-cliff", "fresh-linen-morning"],
    sillage: "pleasant-trail",
    longevity: "8-10 hours",
    genderVibe: "Masculine / Sophisticated",
    notes: {
      top: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
      heart: ["Ginger", "Nutmeg", "Jasmine", "Iso E Super"],
      base: ["Incense", "Vetiver", "Cedar", "Sandalwood", "Patchouli"]
    },
    mainAccords: [{ name: "Citrus", score: 100 }, { name: "Woody", score: 80 }, { name: "Warm Spicy", score: 60 }, { name: "Aromatic", score: 40 }],
    vibeCheck: "A tailored navy suit stepping out into a crisp metropolitan morning. Sparkling citrus elegance grounded by smoky incense and silky sandalwood.",
    pros: [
      "Ultimate versatility—works 365 days a year anywhere",
      "Flawless crowd pleaser with high quality ingredients",
      "Refined, modern & timeless"
    ],
    cons: [
      "Very popular—you won't be the only one wearing it",
      "Safe signature choice rather than avant-garde"
    ],
    gradient: "from-blue-900 via-slate-950 to-stone-950",
    accentColor: "#3b82f6"
  },
  {
    id: "santal-33",
    imageUrl: "https://n.nordstrommedia.com/id/sr3/70a1a511-b841-4770-985c-05ecfa30ba68.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Santal 33",
    brand: "Le Labo",
    perfumer: "Frank Voelkl",
    category: "Niche",
    collectorsCount: 960,
    accordVector: { fresh: 0.4, gourmand: 0.1, woody: 1.0, floral: 0.3, resin: 0.6 },
    priceRange: "luxury-300",
    estimatedPrice: "$320",
    climates: ["all-year", "fall", "spring"],
    occasions: ["daily", "office", "date"],
    olfactoryFamilies: ["woods", "leather-spice", "green-fig"],
    vibeSettings: ["alpine-campfire", "cozy-jazz-lounge"],
    sillage: "beast-mode",
    longevity: "10-12 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Violet Accord", "Cardamom"],
      heart: ["Iris", "Ambrox"],
      base: ["Australian Sandalwood", "Cedarwood", "Leather"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Powdery", score: 80 }, { name: "Leather", score: 60 }, { name: "Warm Spicy", score: 40 }],
    vibeCheck: "An open campfire under the star-lit sky of the American West. Smoky sandalwood, raw leather saddle, and crisp dry paper notebook pages.",
    pros: [
      "Iconic cult scent with unmistakable trail",
      "Huge longevity and projection",
      "Chic, artistic downtown aesthetic"
    ],
    cons: [
      "Distinctive violet/sandalwood note can read as pickle to 5% of noses",
      "High luxury price point"
    ],
    gradient: "from-yellow-950 via-amber-900 to-stone-950",
    accentColor: "#eab308"
  },
  {
    id: "byredo-gypsy-water",
    imageUrl: "https://n.nordstrommedia.com/id/sr3/73ca35fb-f7ec-44fc-a0f5-da7327891df9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Gypsy Water",
    brand: "Byredo",
    perfumer: "Jerome Epinette",
    category: "Niche",
    collectorsCount: 420,
    accordVector: { fresh: 0.7, gourmand: 0.4, woody: 0.7, floral: 0.3, resin: 0.5 },
    priceRange: "150-300",
    estimatedPrice: "$225",
    climates: ["spring", "summer", "fall", "all-year"],
    occasions: ["daily", "office", "fresh-gym"],
    olfactoryFamilies: ["woods", "clean-laundry", "fresh-citrus"],
    vibeSettings: ["dewy-rainforest", "fresh-linen-morning"],
    sillage: "skin-scent",
    longevity: "5-7 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Bergamot", "Lemon", "Pepper", "Juniper Berries"],
      heart: ["Incense", "Pine Needles", "Orris"],
      base: ["Amber", "Vanilla", "Sandalwood"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Aromatic", score: 80 }, { name: "Citrus", score: 60 }, { name: "Powdery", score: 40 }, { name: "Vanilla", score: 20 }],
    vibeCheck: "Morning mist over a pine forest clearing. Crisp bergamot and fresh juniper berries giving way to gentle vanilla smoke and clean sandalwood skin scent.",
    pros: [
      "Ethereal, romantic & effortlessly chic",
      "Perfect intimate skin scent that never overwhelms",
      "Beautiful minimalist aesthetic"
    ],
    cons: [
      "Intimate scent trail—requires close proximity",
      "May require re-application for all-day wear"
    ],
    gradient: "from-stone-700 via-neutral-900 to-stone-950",
    accentColor: "#a8a29e"
  },
  {
    id: "angels-share",
    imageUrl: "https://www.sephora.com/productimages/sku/s2366888-main-zoom.jpg",
    name: "Angels' Share",
    brand: "Kilian Paris",
    perfumer: "Benoist Lapouza",
    category: "Niche",
    collectorsCount: 280,
    accordVector: { fresh: 0.1, gourmand: 1.0, woody: 0.7, floral: 0.1, resin: 0.8 },
    priceRange: "150-300",
    estimatedPrice: "$245",
    climates: ["winter", "fall"],
    occasions: ["date", "clubbing", "special"],
    olfactoryFamilies: ["sweet-gourmand", "leather-spice", "amber-oriental"],
    vibeSettings: ["parisian-bakery", "cozy-jazz-lounge"],
    sillage: "beast-mode",
    longevity: "10-12 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Cognac"],
      heart: ["Cinnamon", "Tonka Bean", "Oak"],
      base: ["Praline", "Vanilla", "Sandalwood"]
    },
    mainAccords: [{ name: "Warm Spicy", score: 100 }, { name: "Vanilla", score: 80 }, { name: "Woody", score: 60 }, { name: "Sweet", score: 40 }, { name: "Boozy", score: 20 }],
    vibeCheck: "Warm home-baked apple pie drizzled with salted caramel, enjoyed alongside a snifter of aged Cognac by a crackling fireplace on a snowy winter evening.",
    pros: [
      "Decadent, world-class gourmand composition",
      "Insane compliment magnet in cold weather",
      "Stunning crystal cut glass bottle design"
    ],
    cons: [
      "Strictly autumn/winter warmth",
      "Very sweet gourmand profile"
    ],
    gradient: "from-amber-700 via-orange-950 to-amber-950",
    accentColor: "#f59e0b"
  },
  {
    id: "sauvage-elixir",
    imageUrl: "https://www.sephora.com/productimages/sku/s2494425-main-zoom.jpg",
    name: "Sauvage Elixir",
    brand: "Dior",
    perfumer: "Francois Demachy",
    category: "Designer",
    collectorsCount: 1450,
    accordVector: { fresh: 0.6, gourmand: 0.2, woody: 0.9, floral: 0.1, resin: 0.8 },
    priceRange: "150-300",
    estimatedPrice: "$250",
    climates: ["winter", "fall", "all-year"],
    occasions: ["clubbing", "date", "special"],
    olfactoryFamilies: ["leather-spice", "woods", "amber-oriental"],
    vibeSettings: ["alpine-campfire", "cozy-jazz-lounge"],
    sillage: "beast-mode",
    longevity: "14+ hours",
    genderVibe: "Masculine / Power",
    notes: {
      top: ["Nutmeg", "Cinnamon", "Cardamom", "Grapefruit"],
      heart: ["Lavender"],
      base: ["Licorice", "Sandalwood", "Amber", "Patchouli", "Haitian Vetiver"]
    },
    mainAccords: [{ name: "Warm Spicy", score: 100 }, { name: "Woody", score: 80 }, { name: "Lavender", score: 60 }, { name: "Fresh Spicy", score: 40 }],
    vibeCheck: "Midnight thunderstorm in a high-desert forest. Dark spicy cinnamon, rich lavender, and creamy sandalwood concentrated to pure parfum strength.",
    pros: [
      "Nuclear longevity (lasts on clothes for days)",
      "Rich, complex overhaul of the Sauvage DNA",
      "Commands attention effortlessly"
    ],
    cons: [
      "Easy to overspray (1-2 sprays maximum)",
      "Strong dark opening"
    ],
    gradient: "from-blue-950 via-slate-900 to-indigo-950",
    accentColor: "#6366f1"
  },
  {
    id: "glossier-you",
    imageUrl: "https://www.sephora.com/productimages/sku/s2641777-main-zoom.jpg",
    name: "You Eau de Parfum",
    brand: "Glossier",
    perfumer: "Dora Baghriche",
    category: "Indie",
    collectorsCount: 1120,
    accordVector: { fresh: 0.7, gourmand: 0.3, woody: 0.5, floral: 0.6, resin: 0.2 },
    priceRange: "under-50",
    estimatedPrice: "$72",
    climates: ["all-year", "spring", "summer"],
    occasions: ["daily", "office", "fresh-gym"],
    olfactoryFamilies: ["clean-laundry", "floral", "woods"],
    vibeSettings: ["fresh-linen-morning", "blooming-garden"],
    sillage: "skin-scent",
    longevity: "6-8 hours",
    genderVibe: "Unisex / Comforting",
    notes: {
      top: ["Pink Pepper"],
      heart: ["Iris", "Ambrette Seeds"],
      base: ["Ambrox", "Musk"]
    },
    mainAccords: [{ name: "Musky", score: 100 }, { name: "Powdery", score: 80 }, { name: "Iris", score: 60 }, { name: "Soft Spicy", score: 40 }],
    vibeCheck: "Freshly washed cashmere sweater straight out of the dryer. Soft pink pepper sparkling over warm, human musk that adapts uniquely to your body chemistry.",
    pros: [
      "Hyper-affordable crowd favourite",
      "Smells like 'you, but elevated'",
      "Inoffensive for hospitals/offices"
    ],
    cons: [
      "Subtle projection (skin scent design)",
      "Formula updated in recent years"
    ],
    gradient: "from-pink-900 via-rose-950 to-stone-900",
    accentColor: "#ec4899"
  },
  {
    id: "wood-sage-sea-salt",
    imageUrl: "https://www.sephora.com/productimages/sku/s1640168-main-zoom.jpg",
    name: "Wood Sage & Sea Salt",
    brand: "Jo Malone London",
    perfumer: "Christine Nagel",
    category: "Niche",
    collectorsCount: 670,
    accordVector: { fresh: 1.0, gourmand: 0.0, woody: 0.6, floral: 0.3, resin: 0.2 },
    priceRange: "150-300",
    estimatedPrice: "$155",
    climates: ["summer", "spring", "all-year"],
    occasions: ["daily", "office", "fresh-gym"],
    olfactoryFamilies: ["clean-laundry", "green-fig", "woods"],
    vibeSettings: ["mediterranean-cliff", "fresh-linen-morning"],
    sillage: "skin-scent",
    longevity: "4-6 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Ambrette Seeds"],
      heart: ["Sea Salt"],
      base: ["Sage"]
    },
    mainAccords: [{ name: "Aromatic", score: 100 }, { name: "Salty", score: 80 }, { name: "Marine", score: 60 }, { name: "Woody", score: 40 }, { name: "Herbal", score: 20 }],
    vibeCheck: "Walking along wind-swept English coastal cliffs. Salty ocean mist spraying against driftwood and wild earthy sage.",
    pros: [
      "Incredibly refreshing and airy ocean breeze vibe",
      "Stunning scent for fragrance layering",
      "Completely unique non-aquatic freshie"
    ],
    cons: [
      "Moderate performance (needs touch-ups)",
      "Soft skin scent"
    ],
    gradient: "from-teal-900 via-slate-900 to-cyan-950",
    accentColor: "#06b6d4"
  },
  {
    id: "creed-aventus",
    imageUrl: "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/11545628_fpx.tif?wid=1000&fmt=jpeg",
    name: "Aventus",
    brand: "Creed",
    perfumer: "Olivier Creed",
    category: "Niche",
    collectorsCount: 2100,
    accordVector: { fresh: 0.8, gourmand: 0.2, woody: 0.9, floral: 0.2, resin: 0.6 },
    priceRange: "luxury-300",
    estimatedPrice: "$495",
    climates: ["all-year", "spring", "summer", "fall"],
    occasions: ["office", "special", "daily", "date"],
    olfactoryFamilies: ["fresh-citrus", "woods", "leather-spice"],
    vibeSettings: ["royal-gala", "mediterranean-cliff"],
    sillage: "beast-mode",
    longevity: "9-11 hours",
    genderVibe: "Masculine / Executive",
    notes: {
      top: ["Pineapple", "Bergamot", "Blackcurrant", "Apple"],
      heart: ["Birch", "Patchouli", "Moroccan Jasmine", "Rose"],
      base: ["Musk", "Oakmoss", "Ambergris", "Vanille"]
    },
    mainAccords: [{ name: "Fruity", score: 100 }, { name: "Smoky", score: 80 }, { name: "Woody", score: 60 }, { name: "Citrus", score: 40 }, { name: "Leather", score: 20 }],
    vibeCheck: "Smoky grilled pineapple served in a private executive lounge with views of Manhattan. Regal, assertive, and brimming with confident masculine energy.",
    pros: [
      "Historic titan of complement pullers",
      "Unrivaled fruity-smoky pineapple signature",
      "High status aura"
    ],
    cons: [
      "Very high luxury price tag",
      "Frequent batch variation discussions"
    ],
    gradient: "from-stone-800 via-neutral-900 to-black",
    accentColor: "#fbbf24"
  },
  {
    id: "replica-by-the-fireplace",
    imageUrl: "https://www.sephora.com/productimages/sku/s1788058-main-zoom.jpg",
    name: "REPLICA By the Fireplace",
    brand: "Maison Margiela",
    perfumer: "Marie Salamagne",
    category: "Niche",
    collectorsCount: 780,
    accordVector: { fresh: 0.1, gourmand: 0.9, woody: 1.0, floral: 0.1, resin: 0.7 },
    priceRange: "50-150",
    estimatedPrice: "$165",
    climates: ["winter", "fall"],
    occasions: ["date", "daily", "special"],
    olfactoryFamilies: ["woods", "sweet-gourmand", "leather-spice"],
    vibeSettings: ["alpine-campfire", "parisian-bakery"],
    sillage: "pleasant-trail",
    longevity: "8-10 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Cloves", "Pink Pepper", "Orange Blossom"],
      heart: ["Chestnut", "Gaïac Wood", "Juniper"],
      base: ["Vanilla", "Peru Balsam", "Cashmeran"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Vanilla", score: 80 }, { name: "Warm Spicy", score: 60 }, { name: "Balsamic", score: 40 }, { name: "Nuts", score: 20 }],
    vibeCheck: "Roasting sweet chestnuts over an open hearth while snow falls outside a cozy Alpine chalet. Smoky wood ash blended with creamy warm vanilla syrup.",
    pros: [
      "Evokes pure nostalgia & warmth",
      "Best realistic woodsmoke + vanilla balance",
      "Long-lasting cozy trail"
    ],
    cons: [
      "Distinct smoky opening isn't for everyone",
      "Strictly cold weather scent"
    ],
    gradient: "from-orange-950 via-red-950 to-stone-950",
    accentColor: "#f97316"
  },
  {
    id: "tom-ford-oud-wood",
    imageUrl: "https://www.sephora.com/productimages/sku/s1449289-main-zoom.jpg",
    name: "Oud Wood",
    brand: "Tom Ford",
    perfumer: "Richard Herpin",
    category: "Niche",
    collectorsCount: 890,
    accordVector: { fresh: 0.2, gourmand: 0.3, woody: 1.0, floral: 0.1, resin: 0.9 },
    priceRange: "luxury-300",
    estimatedPrice: "$295",
    climates: ["fall", "winter", "all-year"],
    occasions: ["office", "date", "special"],
    olfactoryFamilies: ["woods", "leather-spice", "amber-oriental"],
    vibeSettings: ["cozy-jazz-lounge", "royal-gala"],
    sillage: "pleasant-trail",
    longevity: "7-9 hours",
    genderVibe: "Unisex / Elegant",
    notes: {
      top: ["Rare Oud Wood", "Rosewood", "Cardamom"],
      heart: ["Sichuan Pepper", "Sandalwood", "Vetiver"],
      base: ["Tonka Bean", "Vanilla", "Amber"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Oud", score: 80 }, { name: "Warm Spicy", score: 60 }, { name: "Aromatic", score: 40 }],
    vibeCheck: "Polished dark mahogany sanctuary lined with leather-bound books and rare exotic spices. Smooth, smoky agarwood wrapped in warm cardamom and tonka bean.",
    pros: [
      "The gold standard approachable western Oud",
      "Ultra-sophisticated C-suite presence",
      "Refined and smooth without harshness"
    ],
    cons: [
      "Moderate performance for Private Blend price",
      "Luxury investment"
    ],
    gradient: "from-stone-900 via-amber-950 to-neutral-950",
    accentColor: "#a16207"
  },
  {
    id: "pdm-layton",
    imageUrl: "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/9779344_fpx.tif?wid=1000&fmt=jpeg",
    name: "Layton",
    brand: "Parfums de Marly",
    perfumer: "Hamid Merati-Kashani",
    category: "Niche",
    collectorsCount: 340,
    accordVector: { fresh: 0.5, gourmand: 0.8, woody: 0.7, floral: 0.4, resin: 0.6 },
    priceRange: "150-300",
    estimatedPrice: "$265",
    climates: ["fall", "winter", "spring"],
    occasions: ["date", "office", "special", "clubbing"],
    olfactoryFamilies: ["sweet-gourmand", "woods", "fresh-citrus"],
    vibeSettings: ["parisian-bakery", "royal-gala"],
    sillage: "beast-mode",
    longevity: "10-12 hours",
    genderVibe: "Masculine / Magnetic",
    notes: {
      top: ["Apple", "Lavender", "Bergamot", "Mandarin Orange"],
      heart: ["Geranium", "Violet", "Jasmine"],
      base: ["Vanilla", "Cardamom", "Guaiac Wood", "Pepper", "Patchouli"]
    },
    mainAccords: [{ name: "Warm Spicy", score: 100 }, { name: "Vanilla", score: 80 }, { name: "Aromatic", score: 60 }, { name: "Fruity", score: 40 }, { name: "Woody", score: 20 }],
    vibeCheck: "Royal gardens of Versailles under moonlight. Crisp green apple dusted with cardamom spice dipping into rich bourbon vanilla.",
    pros: [
      "Massive crowd-pleasing luxury niche fragrance",
      "Outstanding versatility for cool weather",
      "Hypnotic scent trail"
    ],
    cons: [
      "Heavy bottle, slightly pricey",
      "Warm vanilla drydown can feel thick in heat"
    ],
    gradient: "from-blue-950 via-amber-950 to-stone-950",
    accentColor: "#eab308"
  },
  {
    id: "clean-reserve-warm-cotton",
    imageUrl: "https://www.sephora.com/productimages/sku/s1770635-main-zoom.jpg",
    name: "Warm Cotton",
    brand: "CLEAN Reserve",
    perfumer: "Steven Claisse",
    category: "Accessible",
    collectorsCount: 190,
    accordVector: { fresh: 1.0, gourmand: 0.0, woody: 0.2, floral: 0.5, resin: 0.1 },
    priceRange: "under-50",
    estimatedPrice: "$48",
    climates: ["summer", "spring", "all-year"],
    occasions: ["daily", "office", "fresh-gym"],
    olfactoryFamilies: ["clean-laundry", "fresh-citrus"],
    vibeSettings: ["fresh-linen-morning", "mediterranean-cliff"],
    sillage: "pleasant-trail",
    longevity: "6-8 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Aldehydes", "Ginger", "Watery Accord"],
      heart: ["Mint", "Green Pepper", "Floral Accord"],
      base: ["Musk", "Incense", "Vetiver"]
    },
    mainAccords: [{ name: "Fresh", score: 100 }, { name: "Clean", score: 80 }, { name: "Aldehydic", score: 60 }, { name: "Citrus", score: 40 }],
    vibeCheck: "Crisp white cotton sheets fresh off the sunshine clothesline on a bright April afternoon. Pure, invigorating, squeaky-clean perfection.",
    pros: [
      "The quintessential fresh laundry scent",
      "Very budget-friendly & eco-conscious",
      "Ideal for post-workout or clean office wear"
    ],
    cons: [
      "Linear scent profile (stays fresh without dramatic morphing)",
      "Simple composition"
    ],
    gradient: "from-cyan-900 via-sky-950 to-stone-950",
    accentColor: "#38bdf8"
  },
  {
    id: "gaultier-le-male-elixir",
    imageUrl: "https://www.sephora.com/productimages/sku/s2685410-main-zoom.jpg",
    name: "Le Male Elixir",
    brand: "Jean Paul Gaultier",
    perfumer: "Quentin Bisch",
    category: "Designer",
    collectorsCount: 1560,
    accordVector: { fresh: 0.3, gourmand: 0.9, woody: 0.5, floral: 0.4, resin: 0.8 },
    priceRange: "50-150",
    estimatedPrice: "$145",
    climates: ["winter", "fall"],
    occasions: ["clubbing", "date", "special"],
    olfactoryFamilies: ["sweet-gourmand", "amber-oriental", "leather-spice"],
    vibeSettings: ["parisian-bakery", "cozy-jazz-lounge"],
    sillage: "beast-mode",
    longevity: "12+ hours",
    genderVibe: "Masculine / Tempting",
    notes: {
      top: ["Lavender", "Mint"],
      heart: ["Vanilla", "Benzoin"],
      base: ["Honey", "Tonka Bean", "Tobacco"]
    },
    mainAccords: [{ name: "Honey", score: 100 }, { name: "Vanilla", score: 80 }, { name: "Sweet", score: 60 }, { name: "Warm Spicy", score: 40 }, { name: "Tobacco", score: 20 }],
    vibeCheck: "Golden honey dripping over dark roasted lavender and rich caramelized tonka bean. A warm, intoxicating magnet designed for high-energy nightlife.",
    pros: [
      "Extremely attractive complement getter",
      "Long performance (12+ hours)",
      "Luxurious gold torso bottle"
    ],
    cons: [
      "Very sweet profile",
      "Not suited for strict professional office environments"
    ],
    gradient: "from-amber-600 via-yellow-950 to-stone-950",
    accentColor: "#f59e0b"
  },
  {
    id: "chanel-no-5-leau",
    imageUrl: "https://www.sephora.com/productimages/sku/s1861053-main-zoom.jpg",
    name: "No. 5 L'Eau",
    brand: "Chanel",
    perfumer: "Olivier Polge",
    category: "Designer",
    collectorsCount: 520,
    accordVector: { fresh: 0.8, gourmand: 0.1, woody: 0.4, floral: 0.9, resin: 0.3 },
    priceRange: "150-300",
    estimatedPrice: "$172",
    climates: ["spring", "summer", "all-year"],
    occasions: ["office", "daily", "special"],
    olfactoryFamilies: ["floral", "clean-laundry", "fresh-citrus"],
    vibeSettings: ["blooming-garden", "fresh-linen-morning"],
    sillage: "pleasant-trail",
    longevity: "6-8 hours",
    genderVibe: "Feminine / Modern Classic",
    notes: {
      top: ["Aldehydes", "Lemon", "Mandarin Orange", "Neroli"],
      heart: ["Ylang-Ylang", "Jasmine", "May Rose"],
      base: ["Cedar", "White Musk", "Vanilla", "Orris"]
    },
    mainAccords: [{ name: "Citrus", score: 100 }, { name: "Aldehydic", score: 80 }, { name: "Fresh", score: 60 }, { name: "Floral", score: 40 }, { name: "Woody", score: 20 }],
    vibeCheck: "Sunlit marble courtyard filled with blooming jasmine and lemon trees. Modernized, effervescent aldehydes dancing over soft white rose petals.",
    pros: [
      "Fresh, younger modern reboot of iconic No. 5",
      "Radiates clean French sophistication",
      "High quality floral aldehydes"
    ],
    cons: [
      "Lighter than vintage EDP",
      "Gentle scent trail"
    ],
    gradient: "from-amber-800 via-rose-950 to-stone-950",
    accentColor: "#fb7185"
  },
  {
    id: "ysl-y-edp",
    imageUrl: "https://www.sephora.com/productimages/sku/s2116036-main-zoom.jpg",
    name: "Y Eau de Parfum",
    brand: "Yves Saint Laurent",
    perfumer: "Dominique Ropion",
    category: "Designer",
    collectorsCount: 1380,
    accordVector: { fresh: 0.9, gourmand: 0.3, woody: 0.7, floral: 0.2, resin: 0.4 },
    priceRange: "50-150",
    estimatedPrice: "$148",
    climates: ["all-year", "spring", "summer", "fall"],
    occasions: ["daily", "office", "clubbing", "fresh-gym"],
    olfactoryFamilies: ["fresh-citrus", "clean-laundry", "woods"],
    vibeSettings: ["mediterranean-cliff", "fresh-linen-morning"],
    sillage: "beast-mode",
    longevity: "10-12 hours",
    genderVibe: "Masculine / Youthful Executive",
    notes: {
      top: ["Apple", "Ginger", "Bergamot"],
      heart: ["Sage", "Juniper Berries", "Geranium"],
      base: ["Amberwood", "Tonka Bean", "Cedar", "Olibanum"]
    },
    mainAccords: [{ name: "Aromatic", score: 100 }, { name: "Woody", score: 80 }, { name: "Fruity", score: 60 }, { name: "Fresh Spicy", score: 40 }],
    vibeCheck: "Crisp blue jacket on a high-energy day. Crisp green apple meets spicy ginger and aromatic sage, projecting clean confidence across every room.",
    pros: [
      "Insane longevity for a fresh blue fragrance",
      "Incredible mass-appeal score",
      "Versatile day-to-night warrior"
    ],
    cons: [
      "Can project very strongly if over-applied",
      "Widely popular"
    ],
    gradient: "from-blue-800 via-indigo-950 to-stone-950",
    accentColor: "#60a5fa"
  },
  {
    id: "boadicea-blue-sapphire",
    imageUrl: "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/11559865_fpx.tif?wid=1000&fmt=jpeg",
    name: "Blue Sapphire Pure",
    brand: "Boadicea the Victorious",
    perfumer: "Christian Provenzano",
    category: "Ultra Niche Grail",
    collectorsCount: 1,
    accordVector: { fresh: 0.3, gourmand: 0.2, woody: 0.9, floral: 0.5, resin: 1.0 },
    priceRange: "luxury-300",
    estimatedPrice: "$890",
    climates: ["all-year", "fall", "winter"],
    occasions: ["special", "royal-gala"],
    olfactoryFamilies: ["woods", "amber-oriental", "leather-spice"],
    vibeSettings: ["royal-gala"],
    sillage: "beast-mode",
    longevity: "24+ hours",
    genderVibe: "Royal Unisex",
    notes: {
      top: ["Lemon", "Chamomile", "Sage", "Tagetes"],
      heart: ["Rose", "Indian Jasmine", "Saffron"],
      base: ["Oud", "Patchouli", "Amber"]
    },
    mainAccords: [{ name: "Oud", score: 100 }, { name: "Amber", score: 80 }, { name: "Rose", score: 60 }, { name: "Warm Spicy", score: 40 }],
    vibeCheck: "Liquid sapphire handcrafted for monarchs. Rare Cambodian Oud fused with Iranian saffron and wild rose.",
    pros: [
      "👑 1 of 1 Grail: Ultra-rare collector holy grail",
      "Astronomical projection and 24h performance",
      "Crafted with genuine gold shield on glass"
    ],
    cons: [
      "Extremely rare and expensive ($890+)",
      "Heavy royal presence"
    ],
    gradient: "from-blue-900 via-amber-700 to-amber-950",
    accentColor: "#3b82f6"
  },
  {
    id: "xerjoff-richwood",
    imageUrl: "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/10978926_fpx.tif?wid=1000&fmt=jpeg",
    name: "Richwood 1861",
    brand: "Xerjoff",
    perfumer: "Chris Maurice",
    category: "Ultra Niche Grail",
    collectorsCount: 3,
    accordVector: { fresh: 0.2, gourmand: 0.4, woody: 1.0, floral: 0.6, resin: 0.9 },
    priceRange: "luxury-300",
    estimatedPrice: "$650",
    climates: ["fall", "winter"],
    occasions: ["special", "date"],
    olfactoryFamilies: ["woods", "amber-oriental"],
    vibeSettings: ["cozy-jazz-lounge", "royal-gala"],
    sillage: "beast-mode",
    longevity: "12+ hours",
    genderVibe: "Unisex / Ultra-Luxury",
    notes: {
      top: ["Bergamot", "Grapefruit", "Tangerine"],
      heart: ["Damask Rose", "Blackcurrant"],
      base: ["Mysore Sandalwood", "Patchouli", "Vanilla", "Musk"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Patchouli", score: 80 }, { name: "Warm Spicy", score: 60 }, { name: "Rose", score: 40 }],
    vibeCheck: "Sensual Mysore Sandalwood aged to perfection in oak barrels with velvet Damask Rose.",
    pros: [
      "💎 Rare Niche Grail (Only 3 collectors in circle)",
      "Finest Mysore Sandalwood on Earth",
      "Hand-cut quartz crystal bottle"
    ],
    cons: [
      "Rare availability",
      "Very high price"
    ],
    gradient: "from-amber-900 via-rose-950 to-stone-950",
    accentColor: "#d97706"
  },
  {
    id: "musk-therapy",
    imageUrl: "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/11993425_fpx.tif",
    name: "Musk Therapy",
    brand: "Initio Parfums Privés",
    perfumer: "Alexandra Kosinski",
    category: "Niche",
    collectorsCount: 420,
    accordVector: { fresh: 0.8, gourmand: 0.4, woody: 0.6, floral: 0.6, resin: 0.5 },
    priceRange: "luxury-300",
    estimatedPrice: "$390",
    climates: ["all-year", "spring", "summer"],
    occasions: ["daily", "date", "office"],
    olfactoryFamilies: ["clean-laundry", "fresh-citrus", "floral"],
    vibeSettings: ["fresh-linen-morning", "blooming-garden"],
    sillage: "pleasant-trail",
    longevity: "8-10 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Bergamot", "Mandarin Orange"],
      heart: ["White Magnolia", "Blackcurrant", "Hedione"],
      base: ["White Musk", "White Sandalwood", "Pink Musk"]
    },
    mainAccords: [{ name: "Musky", score: 100 }, { name: "Citrus", score: 75 }, { name: "Powdery", score: 65 }, { name: "Woody", score: 50 }],
    vibeCheck: "A velvety, uplifting wave of white musk and milky sandalwood enveloped in sparkling mandarin.",
    pros: ["Addictive clean cloud aura", "High compliments", "Silky smooth blending"],
    cons: ["High price point"],
    gradient: "from-purple-900 via-stone-900 to-indigo-950",
    accentColor: "#c084fc",
    dominantCategory: "CitrusFresh"
  },
  {
    id: "gris-charnel",
    imageUrl: "https://www.luckyscent.com/images/products/84000.jpg",
    name: "Gris Charnel",
    brand: "BDK Parfums",
    perfumer: "Mathilde Bijaoui",
    category: "Niche",
    collectorsCount: 610,
    accordVector: { fresh: 0.3, gourmand: 0.6, woody: 0.9, floral: 0.3, resin: 0.7 },
    priceRange: "150-300",
    estimatedPrice: "$230",
    climates: ["fall", "winter", "spring"],
    occasions: ["date", "daily", "office"],
    olfactoryFamilies: ["woods", "leather-spice", "amber-oriental"],
    vibeSettings: ["cozy-jazz-lounge", "parisian-bakery"],
    sillage: "pleasant-trail",
    longevity: "8-10 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Cardamom", "Fig", "Black Tea"],
      heart: ["Iris", "Bourbon Vetiver", "Cistus"],
      base: ["Sandalwood", "Tonka Bean"]
    },
    mainAccords: [{ name: "Warm Spicy", score: 100 }, { name: "Woody", score: 85 }, { name: "Fig", score: 70 }, { name: "Aromatic", score: 60 }],
    vibeCheck: "A sensual Parisian evening along the Seine. Creamy spiced sandalwood, black tea, and velvety ripe fig.",
    pros: ["Exquisite cardamom and fig blend", "Exceptional cozy all-weather signature", "Sophisticated sillage"],
    cons: ["Can feel slightly heavy in extreme heat"],
    gradient: "from-stone-800 via-neutral-900 to-zinc-950",
    accentColor: "#78716c",
    dominantCategory: "Spicy"
  },
  {
    id: "molecule-01",
    imageUrl: "https://www.luckyscent.com/images/products/37600.jpg",
    name: "Molecule 01",
    brand: "Escentric Molecules",
    perfumer: "Geza Schoen",
    category: "Niche",
    collectorsCount: 890,
    accordVector: { fresh: 0.7, gourmand: 0.1, woody: 0.9, floral: 0.1, resin: 0.4 },
    priceRange: "50-150",
    estimatedPrice: "$150",
    climates: ["all-year", "spring", "summer"],
    occasions: ["daily", "office", "fresh-gym"],
    olfactoryFamilies: ["woods", "clean-laundry"],
    vibeSettings: ["fresh-linen-morning"],
    sillage: "intimate-bubble",
    longevity: "10+ hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Iso E Super"],
      heart: ["Iso E Super"],
      base: ["Iso E Super"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Musky", score: 80 }, { name: "Amber", score: 50 }],
    vibeCheck: "The ultimate skin scent pheromone aura. Soft cedarwood that vanishes and reappears in magnetic waves.",
    pros: ["Incredible layering companion", "Hypnotic effect on people around you", "Pure minimalism"],
    cons: ["Wearer can become anosmic quickly"],
    gradient: "from-sky-900 via-slate-900 to-blue-950",
    accentColor: "#38bdf8",
    dominantCategory: "Woody"
  },
  {
    id: "lombre-dans-leau",
    imageUrl: "https://n.nordstrommedia.com/id/sr3/64c39cb0-1f9c-48c9-bc4c-f1df4a7eb06b.jpeg",
    name: "L'Ombre Dans L'Eau",
    brand: "Diptyque",
    perfumer: "Serge Kalouguine",
    category: "Niche",
    collectorsCount: 380,
    accordVector: { fresh: 0.8, gourmand: 0.2, woody: 0.6, floral: 0.8, resin: 0.3 },
    priceRange: "150-300",
    estimatedPrice: "$230",
    climates: ["spring", "summer"],
    occasions: ["daily", "office", "date"],
    olfactoryFamilies: ["green-fig", "floral", "fresh-citrus"],
    vibeSettings: ["dewy-rainforest", "blooming-garden"],
    sillage: "pleasant-trail",
    longevity: "7-9 hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Blackcurrant Leaf", "Blackcurrant"],
      heart: ["Damask Rose"],
      base: ["Petitgrain", "Ambergris", "Musk"]
    },
    mainAccords: [{ name: "Green", score: 100 }, { name: "Fruity", score: 80 }, { name: "Rose", score: 75 }, { name: "Aromatic", score: 60 }],
    vibeCheck: "An English garden asleep beside a calm river. Crushed blackcurrant leaves in morning dew and dewy garden roses.",
    pros: ["Poetic botanical greenery", "Fresh crisp rose without heaviness", "Timeless artistic elegance"],
    cons: ["Very tart green opening"],
    gradient: "from-emerald-900 via-green-950 to-stone-950",
    accentColor: "#059669",
    dominantCategory: "AromaticGreen"
  },

  // DESIGNER FRAGRANCES
  {
    id: "dior-sauvage",
    name: "Sauvage Eau de Toilette",
    brand: "Dior",
    perfumer: "François Demachy",
    category: "Designer",
    collectorsCount: 3840,
    accordVector: { fresh: 0.9, gourmand: 0.2, woody: 0.7, floral: 0.3, resin: 0.5 },
    priceRange: "50-150",
    estimatedPrice: "$120",
    climates: ["all-year", "spring", "summer", "fall"],
    occasions: ["daily", "office", "clubbing", "date"],
    olfactoryFamilies: ["fresh-citrus", "woods", "leather-spice"],
    vibeSettings: ["mediterranean-cliff", "fresh-linen-morning"],
    sillage: "beast-mode",
    longevity: "9+ hours",
    genderVibe: "Masculine",
    notes: {
      top: ["Calabrian Bergamot", "Sichuan Pepper"],
      heart: ["Lavender", "Pink Pepper", "Vetiver", "Patchouli"],
      base: ["Ambroxan", "Cedarwood", "Labdanum"]
    },
    mainAccords: [{ name: "Fresh Spicy", score: 100 }, { name: "Amber", score: 85 }, { name: "Citrus", score: 75 }, { name: "Aromatic", score: 70 }],
    vibeCheck: "Crisp, peppery bergamot blasted over an intoxicating wave of warm ambroxan and cedarwood. The ultimate crowd-pleasing signature.",
    pros: ["Mass-appealing compliment magnet", "Year-round versatility in any climate", "Tremendous projection and longevity"],
    cons: ["Very popular and easily recognizable", "Opening can be sharp for sensitive noses"],
    gradient: "from-blue-900 via-indigo-950 to-slate-900",
    accentColor: "#3b82f6",
    dominantCategory: "CitrusFresh"
  },
  {
    id: "ysl-libre",
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    perfumer: "Anne Flipo & Carlos Benaïm",
    category: "Designer",
    collectorsCount: 2950,
    accordVector: { fresh: 0.5, gourmand: 0.6, woody: 0.4, floral: 0.9, resin: 0.5 },
    priceRange: "150-300",
    estimatedPrice: "$155",
    climates: ["all-year", "fall", "spring", "winter"],
    occasions: ["daily", "office", "date", "special"],
    olfactoryFamilies: ["floral", "amber-oriental", "fresh-citrus"],
    vibeSettings: ["blooming-garden", "royal-gala"],
    sillage: "pleasant-trail",
    longevity: "8+ hours",
    genderVibe: "Feminine / Unisex",
    notes: {
      top: ["Lavender", "Mandarin Orange", "Blackcurrant"],
      heart: ["Orange Blossom", "Jasmine"],
      base: ["Madagascar Vanilla", "Cedarwood", "Ambergris", "Musk"]
    },
    mainAccords: [{ name: "White Floral", score: 100 }, { name: "Citrus", score: 80 }, { name: "Lavender", score: 75 }, { name: "Vanilla", score: 70 }],
    vibeCheck: "The tension between masculine French diva lavender and sensual Moroccan orange blossom, wrapped in creamy Madagascar vanilla.",
    pros: ["Sleek, empowering modern classic", "Perfect balance of fresh lavender and sweet vanilla", "Flawless transitions from boardroom to evening"],
    cons: ["Bold presence may overpower tight shared spaces"],
    gradient: "from-amber-400 via-amber-600 to-stone-900",
    accentColor: "#f59e0b",
    dominantCategory: "Floral"
  },
  {
    id: "prada-lhomme",
    name: "L'Homme Prada",
    brand: "Prada",
    perfumer: "Daniela Andrier",
    category: "Designer",
    collectorsCount: 2480,
    accordVector: { fresh: 0.8, gourmand: 0.3, woody: 0.6, floral: 0.8, resin: 0.4 },
    priceRange: "50-150",
    estimatedPrice: "$125",
    climates: ["all-year", "spring", "summer"],
    occasions: ["daily", "office", "special"],
    olfactoryFamilies: ["clean-laundry", "floral", "woods"],
    vibeSettings: ["fresh-linen-morning"],
    sillage: "pleasant-trail",
    longevity: "7+ hours",
    genderVibe: "Masculine / Unisex",
    notes: {
      top: ["Neroli", "Black Pepper", "Cardamom"],
      heart: ["Iris", "Violet", "Geranium"],
      base: ["Cedarwood", "Patchouli", "Amber"]
    },
    mainAccords: [{ name: "Iris", score: 100 }, { name: "Powdery", score: 85 }, { name: "Clean", score: 80 }, { name: "Woody", score: 65 }],
    vibeCheck: "The ultimate clean-laundry luxury scent. Freshly pressed white Egyptian cotton shirts, expensive Italian soap, and powdery regal iris.",
    pros: ["The benchmark for clean office elegance", "Completely inoffensive and universally liked", "Exceptional powdery iris formulation"],
    cons: ["Subtle projection for those wanting loud sillage"],
    gradient: "from-slate-300 via-stone-400 to-stone-700",
    accentColor: "#94a3b8",
    dominantCategory: "AromaticGreen"
  },
  {
    id: "tom-ford-black-orchid",
    name: "Black Orchid Eau de Parfum",
    brand: "Tom Ford",
    perfumer: "David Apel & Pierre Negrin",
    category: "Designer",
    collectorsCount: 2610,
    accordVector: { fresh: 0.2, gourmand: 0.8, woody: 0.7, floral: 0.7, resin: 0.9 },
    priceRange: "150-300",
    estimatedPrice: "$180",
    climates: ["fall", "winter"],
    occasions: ["date", "special", "clubbing"],
    olfactoryFamilies: ["amber-oriental", "sweet-gourmand", "woods"],
    vibeSettings: ["cozy-jazz-lounge", "royal-gala"],
    sillage: "beast-mode",
    longevity: "10+ hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Truffle", "Gardenia", "Blackcurrant", "Ylang-Ylang"],
      heart: ["Orchid", "Spices", "Fruity Notes"],
      base: ["Mexican Chocolate", "Patchouli", "Vanilla", "Incense", "Amber"]
    },
    mainAccords: [{ name: "Warm Spicy", score: 100 }, { name: "Earthly Truffle", score: 90 }, { name: "Chocolate", score: 80 }, { name: "Patchouli", score: 75 }],
    vibeCheck: "Dark, dramatic, and hypnotic. Rich earthy black truffles steeped in dark Mexican chocolate, voluptuous orchids, and smoky incense.",
    pros: ["Sensual, unforgettable evening statement", "Phenomenal longevity and decadent sillage", "Cult-favorite status among luxury perfume lovers"],
    cons: ["Too heavy and opulent for hot humid weather", "Polarizing note combination"],
    gradient: "from-purple-950 via-stone-900 to-black",
    accentColor: "#6b21a8",
    dominantCategory: "AmberResinous"
  },
  {
    id: "adg-parfum",
    name: "Acqua di Giò Parfum",
    brand: "Giorgio Armani",
    perfumer: "Alberto Morillas",
    category: "Designer",
    collectorsCount: 3120,
    accordVector: { fresh: 0.9, gourmand: 0.1, woody: 0.7, floral: 0.3, resin: 0.6 },
    priceRange: "50-150",
    estimatedPrice: "$145",
    climates: ["spring", "summer", "all-year"],
    occasions: ["daily", "office", "date"],
    olfactoryFamilies: ["fresh-citrus", "woods", "green-fig"],
    vibeSettings: ["mediterranean-cliff"],
    sillage: "pleasant-trail",
    longevity: "8+ hours",
    genderVibe: "Masculine",
    notes: {
      top: ["Marine Notes", "Calabrian Bergamot"],
      heart: ["Rosemary", "Clary Sage", "Bourbon Geranium"],
      base: ["Olibanum Incense", "Guatemalan Patchouli"]
    },
    mainAccords: [{ name: "Marine", score: 100 }, { name: "Aromatic", score: 85 }, { name: "Smoky Incense", score: 70 }, { name: "Woody", score: 65 }],
    vibeCheck: "Deep oceanic waves crashing against sun-baked Mediterranean rock faces, infused with mystical incense smoke and aromatic rosemary.",
    pros: ["Modern update to the greatest aquatic fragrance of all time", "Smoky incense gives masculine depth", "Exceptional versatility"],
    cons: ["Heritage profile is familiar to many"],
    gradient: "from-cyan-900 via-slate-900 to-stone-950",
    accentColor: "#0891b2",
    dominantCategory: "CitrusFresh"
  },
  {
    id: "coco-mademoiselle",
    name: "Coco Mademoiselle EDP",
    brand: "Chanel",
    perfumer: "Jacques Polge",
    category: "Designer",
    collectorsCount: 3400,
    accordVector: { fresh: 0.7, gourmand: 0.4, woody: 0.6, floral: 0.8, resin: 0.5 },
    priceRange: "150-300",
    estimatedPrice: "$165",
    climates: ["all-year", "spring", "fall"],
    occasions: ["daily", "special", "date", "office"],
    olfactoryFamilies: ["floral", "fresh-citrus", "woods"],
    vibeSettings: ["blooming-garden", "royal-gala"],
    sillage: "pleasant-trail",
    longevity: "9+ hours",
    genderVibe: "Feminine",
    notes: {
      top: ["Orange", "Mandarin", "Bergamot"],
      heart: ["Turkish Rose", "Jasmine", "Mimosa"],
      base: ["Patchouli", "White Musk", "Vanilla", "Vetiver"]
    },
    mainAccords: [{ name: "Citrus", score: 100 }, { name: "Patchouli", score: 85 }, { name: "White Floral", score: 80 }, { name: "Rose", score: 75 }],
    vibeCheck: "Sparkling, vivacious citrus opening cascading into velvety rose petals and aristocratic Parisian patchouli.",
    pros: ["Effortlessly chic and timeless", "Superb all-season versatility", "Top-tier Chanel blending and projection"],
    cons: ["Very common in social settings"],
    gradient: "from-amber-200 via-rose-300 to-rose-900",
    accentColor: "#f43f5e",
    dominantCategory: "Floral"
  },

  // DUPES & VALUE ALTERNATIVES
  {
    id: "cdnim",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    perfumer: "Armaf Fragrance Team",
    category: "Dupe",
    dupeOf: "Creed Aventus",
    collectorsCount: 4200,
    accordVector: { fresh: 0.8, gourmand: 0.2, woody: 0.8, floral: 0.2, resin: 0.7 },
    priceRange: "under-50",
    estimatedPrice: "$35",
    climates: ["all-year", "spring", "summer", "fall"],
    occasions: ["daily", "office", "clubbing", "date"],
    olfactoryFamilies: ["fresh-citrus", "woods", "leather-spice"],
    vibeSettings: ["mediterranean-cliff", "alpine-campfire"],
    sillage: "beast-mode",
    longevity: "10+ hours",
    genderVibe: "Masculine",
    notes: {
      top: ["Lemon", "Pineapple", "Blackcurrant", "Bergamot"],
      heart: ["Birch", "Jasmine", "Rose"],
      base: ["Musk", "Ambergris", "Patchouli", "Vanilla"]
    },
    mainAccords: [{ name: "Citrus", score: 100 }, { name: "Smoky Birch", score: 85 }, { name: "Fruity", score: 80 }, { name: "Leather", score: 70 }],
    vibeCheck: "The undisputed king of clones. Smoky birch tar and crisp tart pineapple replicating the drydown of Creed Aventus at a fraction of the price.",
    pros: ["Virtually identical to Aventus in the air (90%+ match)", "Under $40 with 10+ hour beast-mode projection", "Massive compliment getter"],
    cons: ["Opening 10 minutes can be sharp lemon before smoothing into smokiness"],
    gradient: "from-stone-900 via-neutral-900 to-black",
    accentColor: "#1c1917",
    dominantCategory: "CitrusFresh"
  },
  {
    id: "lattafa-khamrah",
    name: "Khamrah",
    brand: "Lattafa",
    perfumer: "Lattafa Fragrance Team",
    category: "Dupe",
    dupeOf: "Kilian Angels' Share",
    collectorsCount: 3750,
    accordVector: { fresh: 0.1, gourmand: 0.95, woody: 0.6, floral: 0.3, resin: 0.85 },
    priceRange: "under-50",
    estimatedPrice: "$38",
    climates: ["fall", "winter"],
    occasions: ["date", "special", "clubbing"],
    olfactoryFamilies: ["sweet-gourmand", "amber-oriental", "leather-spice"],
    vibeSettings: ["parisian-bakery", "cozy-jazz-lounge"],
    sillage: "beast-mode",
    longevity: "12+ hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Cinnamon", "Nutmeg", "Bergamot"],
      heart: ["Dates", "Praline", "Tuberose", "Mahonial"],
      base: ["Vanilla", "Tonka Bean", "Benzoin", "Amberwood", "Myrrh"]
    },
    mainAccords: [{ name: "Sweet Warm Gourmand", score: 100 }, { name: "Cinnamon", score: 90 }, { name: "Dates & Praline", score: 85 }, { name: "Vanilla", score: 80 }],
    vibeCheck: "Warm caramelized apple pie laced with boozy cinnamon, sweet Medjool dates, praline, and decadent vanilla cream.",
    pros: ["Sensational $38 alternative to $245+ boozy gourmands", "Heavy crystal decanter bottle design", "Beast-mode 12+ hour staying power"],
    cons: ["Extremely sweet—not for those who dislike gourmands", "Strictly cool weather wear"],
    gradient: "from-amber-600 via-amber-800 to-amber-950",
    accentColor: "#d97706",
    dominantCategory: "Gourmand"
  },
  {
    id: "afnan-9pm",
    name: "9 PM",
    brand: "Afnan",
    perfumer: "Afnan Perfumes",
    category: "Dupe",
    dupeOf: "Jean Paul Gaultier Ultra Male",
    collectorsCount: 3900,
    accordVector: { fresh: 0.5, gourmand: 0.85, woody: 0.5, floral: 0.4, resin: 0.7 },
    priceRange: "under-50",
    estimatedPrice: "$32",
    climates: ["fall", "winter", "spring"],
    occasions: ["clubbing", "date", "daily"],
    olfactoryFamilies: ["sweet-gourmand", "amber-oriental", "fresh-citrus"],
    vibeSettings: ["parisian-bakery", "royal-gala"],
    sillage: "beast-mode",
    longevity: "10+ hours",
    genderVibe: "Masculine / Unisex",
    notes: {
      top: ["Crisp Apple", "Cinnamon", "Wild Lavender", "Bergamot"],
      heart: ["Orange Blossom", "Lily of the Valley"],
      base: ["Vanilla", "Tonka Bean", "Amber", "Patchouli"]
    },
    mainAccords: [{ name: "Vanilla", score: 100 }, { name: "Sweet Apple", score: 90 }, { name: "Warm Spicy", score: 80 }, { name: "Amber", score: 75 }],
    vibeCheck: "Spicy bubblegum sweetness, crisp candied red apples, and intoxicating bourbon vanilla. The undisputed king of youth nightlife fragrances.",
    pros: ["Outperforms the reformulated original Ultra Male", "Incredible value ($30 range)", "Legendary club and party compliment getter"],
    cons: ["Too sweet for formal business meetings"],
    gradient: "from-indigo-900 via-purple-900 to-slate-900",
    accentColor: "#6366f1",
    dominantCategory: "Gourmand"
  },
  {
    id: "cdn-untold",
    name: "Club de Nuit Untold",
    brand: "Armaf",
    perfumer: "Armaf Fragrance Team",
    category: "Dupe",
    dupeOf: "Maison Francis Kurkdjian Baccarat Rouge 540",
    collectorsCount: 3100,
    accordVector: { fresh: 0.2, gourmand: 0.85, woody: 0.7, floral: 0.6, resin: 0.8 },
    priceRange: "under-50",
    estimatedPrice: "$45",
    climates: ["all-year", "fall", "winter", "spring"],
    occasions: ["date", "special", "clubbing"],
    olfactoryFamilies: ["amber-oriental", "sweet-gourmand", "woods"],
    vibeSettings: ["royal-gala", "parisian-bakery"],
    sillage: "beast-mode",
    longevity: "12+ hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Saffron", "Jasmine"],
      heart: ["Amberwood", "Ambergris"],
      base: ["Fir Resin", "Cedarwood"]
    },
    mainAccords: [{ name: "Amber", score: 100 }, { name: "Airy Saffron", score: 85 }, { name: "Woody", score: 70 }, { name: "Warm Spicy", score: 65 }],
    vibeCheck: "Airy caramelized burnt sugar, sparkling saffron threads, and warm ambergris recreating the exact signature BR540 sillage trail for $45.",
    pros: ["Virtually indistinguishable from $325+ BR540 in the air", "Iridescent rainbow chrome bottle", "Massive projection without causing quick nose fatigue"],
    cons: ["Synthetic opening for the first 3 minutes"],
    gradient: "from-rose-500 via-amber-500 to-indigo-600",
    accentColor: "#ec4899",
    dominantCategory: "AmberResinous"
  },
  {
    id: "amber-oud-gold",
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    perfumer: "Al Haramain Team",
    category: "Dupe",
    dupeOf: "Xerjoff Erba Pura",
    collectorsCount: 2890,
    accordVector: { fresh: 0.8, gourmand: 0.8, woody: 0.5, floral: 0.4, resin: 0.7 },
    priceRange: "50-150",
    estimatedPrice: "$52",
    climates: ["spring", "summer", "all-year"],
    occasions: ["daily", "clubbing", "special"],
    olfactoryFamilies: ["sweet-gourmand", "fresh-citrus", "amber-oriental"],
    vibeSettings: ["royal-gala", "mediterranean-cliff"],
    sillage: "beast-mode",
    longevity: "14+ hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Bergamot", "Green Notes"],
      heart: ["Sweet Melon", "Pineapple", "Gourmand Notes", "Amber"],
      base: ["Vanilla", "White Musk", "Woody Notes"]
    },
    mainAccords: [{ name: "Sweet Fruity", score: 100 }, { name: "Melon & Pineapple", score: 90 }, { name: "Amber", score: 80 }, { name: "Musk", score: 75 }],
    vibeCheck: "A luscious explosion of juicy sweet honeydew melon and pineapple resting on an opulent base of amber and golden vanilla.",
    pros: ["Nuclear longevity (easily 14+ hours on skin)", "Exact DNA of Xerjoff Erba Pura at 1/5th the price", "Heavy luxury gold metal casing"],
    cons: ["Spray lightly—2 sprays easily fills a room"],
    gradient: "from-yellow-400 via-amber-500 to-yellow-700",
    accentColor: "#eab308",
    dominantCategory: "Gourmand"
  },
  {
    id: "zara-ebony-wood",
    name: "Ebony Wood",
    brand: "Zara",
    perfumer: "Jo Malone CBE",
    category: "Dupe",
    dupeOf: "Jo Malone London Wood & Spices",
    collectorsCount: 2650,
    accordVector: { fresh: 0.3, gourmand: 0.4, woody: 0.9, floral: 0.2, resin: 0.7 },
    priceRange: "under-50",
    estimatedPrice: "$39",
    climates: ["fall", "winter", "spring"],
    occasions: ["daily", "office", "date"],
    olfactoryFamilies: ["woods", "leather-spice"],
    vibeSettings: ["alpine-campfire", "cozy-jazz-lounge"],
    sillage: "pleasant-trail",
    longevity: "7+ hours",
    genderVibe: "Unisex",
    notes: {
      top: ["Pink Pepper", "Grapefruit"],
      heart: ["Clove", "Nutmeg", "Black Pepper"],
      base: ["Ebony Wood", "Cedarwood", "Patchouli"]
    },
    mainAccords: [{ name: "Woody", score: 100 }, { name: "Warm Spicy", score: 85 }, { name: "Clove", score: 70 }, { name: "Aromatic", score: 65 }],
    vibeCheck: "Rich dark ebony wood, crackling clove spice, and pink pepper creating an understated, refined autumn ambiance.",
    pros: ["Formulated directly by Dame Jo Malone CBE", "Punching way above its $39 price point", "Sophisticated woody spice signature"],
    cons: ["Can sell out quickly at retail stores"],
    gradient: "from-stone-700 via-stone-800 to-stone-950",
    accentColor: "#78716c",
    dominantCategory: "Woody"
  }
];

export const MOCK_SEARCH_SUGGESTIONS = [
  "Bleu de Chanel",
  "Dior Sauvage",
  "Baccarat Rouge 540",
  "Maison Margiela Replica Jazz Club",
  "Diptyque Philosykos",
  "Le Labo Santal 33",
  "Byredo Gypsy Water",
  "Kilian Angels' Share",
  "Tom Ford Oud Wood",
  "Creed Aventus",
  "Glossier You",
  "Jo Malone Wood Sage & Sea Salt",
  "Parfums de Marly Layton",
  "CLEAN Reserve Warm Cotton",
  "Jean Paul Gaultier Le Male Elixir",
  "Chanel No. 5 L'Eau",
  "YSL Y EDP",
  "Initio Musk Therapy",
  "BDK Gris Charnel",
  "Molecule 01",
  "Diptyque L'Ombre Dans L'Eau"
];
