import { FRAGRANCE_DATABASE, calculateCosineSimilarity } from '../data/fragrances';

/**
 * Calculates a personalized match score (0 to 100) based on Content-Based Cosine Similarity Vector Math & Note Pyramid.
 */
export function generateRecommendations(preferences, limit = 3, offset = 0) {
  const {
    ownedFragrances = [],
    climate = 'all-year',
    occasion = 'daily',
    budget = '150-300',
    rankedNotes = [],
    sillage = 'pleasant-trail'
  } = preferences;

  // Build user target accord vector from preferences
  const targetVector = { fresh: 0.5, gourmand: 0.5, woody: 0.5, floral: 0.5, resin: 0.5 };
  if (rankedNotes.includes('fresh-citrus') || rankedNotes.includes('clean-laundry')) targetVector.fresh += 0.4;
  if (rankedNotes.includes('sweet-gourmand')) targetVector.gourmand += 0.4;
  if (rankedNotes.includes('woods')) targetVector.woody += 0.4;
  if (rankedNotes.includes('green-fig')) { targetVector.fresh += 0.2; targetVector.woody += 0.2; }
  if (rankedNotes.includes('floral')) targetVector.floral += 0.4;
  if (rankedNotes.includes('leather-spice')) { targetVector.woody += 0.2; targetVector.resin += 0.3; }
  if (rankedNotes.includes('amber-oriental')) targetVector.resin += 0.4;

  const isBeginner = (ownedFragrances || []).length === 0;

  // Resolve olfactory families of owned fragrances
  const ownedFamilies = new Set();
  (ownedFragrances || []).forEach(name => {
    const found = FRAGRANCE_DATABASE.find(f => 
      f.name.toLowerCase() === name.toLowerCase() || 
      f.id.toLowerCase() === name.toLowerCase()
    );
    if (found && Array.isArray(found.olfactoryFamilies)) {
      found.olfactoryFamilies.forEach(fam => ownedFamilies.add(fam));
    }
  });

  const scoredFragrances = FRAGRANCE_DATABASE.map(fragrance => {
    let score = 40;

    // Vector Cosine Similarity (40% Weight)
    if (fragrance.accordVector) {
      const cosSim = calculateCosineSimilarity(targetVector, fragrance.accordVector);
      score += Math.round(cosSim * 40);
    } else {
      score += 20;
    }

    // 2. Climate & Season Match (20%)
    if (fragrance.climates.includes(climate) || fragrance.climates.includes('all-year')) {
      score += 20;
    } else {
      score += 4;
    }

    // 3. Occasion Match (20%)
    if (fragrance.occasions.includes(occasion)) {
      score += 20;
    } else {
      score += 8;
    }

    // 4. Price Compatibility (15%)
    if (fragrance.priceRange === budget) {
      score += 15;
    } else {
      score += 6;
    }

    // 5. Sillage / Presence Match (10%)
    if (fragrance.sillage === sillage) {
      score += 10;
    } else {
      score += 4;
    }

    // Collection Gap Synergy Bonus
    const offersNewDimension = (fragrance.olfactoryFamilies || []).some(fam => !ownedFamilies.has(fam));
    if (ownedFragrances.length > 0 && offersNewDimension) {
      score += 5;
    }

    const finalMatchPercentage = Math.min(99, Math.max(82, Math.round(score)));
    const whyItFits = buildWhyItFitsExplanation(fragrance, preferences, offersNewDimension);

    // Contextual Pros & Cons customization (Requirement #3)
    const contextualPros = [...fragrance.pros];
    const contextualCons = [...fragrance.cons];

    // Check 1: Beginner starter versatility check
    const isHighlyVersatile = fragrance.climates.includes('all-year') && fragrance.occasions.includes('daily');
    if (isBeginner && isHighlyVersatile) {
      contextualPros.unshift("✨ Ideal Starter Signature: High 365-day versatility for your first scent.");
    } else if (isBeginner && !isHighlyVersatile) {
      contextualCons.unshift("⚠️ Specialized First Fragrance: Bold & niche rather than an all-day versatile starter.");
    }

    // Check 2: Regional Climate Mismatch check
    const isHeavyGourmandWinter = fragrance.climates.includes('winter') && !fragrance.climates.includes('summer');
    if (climate === 'summer' && isHeavyGourmandWinter) {
      contextualCons.unshift("⚠️ Warm Climate Mismatch: Heavy rum & sweet vanilla can feel suffocating in humid summer heat.");
    } else if (climate === 'summer' && fragrance.climates.includes('summer')) {
      contextualPros.unshift("☀️ Tropical Heat Ready: Crisp notes project beautifully without overwhelming in humidity.");
    }

    return {
      ...fragrance,
      matchPercentage: finalMatchPercentage,
      whyItFits,
      offersNewDimension,
      pros: contextualPros,
      cons: contextualCons
    };
  });

  scoredFragrances.sort((a, b) => b.matchPercentage - a.matchPercentage);
  const sliced = scoredFragrances.slice(offset, offset + limit);

  const badgeTitles = [
    { badge: "Top Recommendation", tag: "Highest Match" },
    { badge: "Complementary Choice", tag: "Fills Wardrobe Gap" },
    { badge: "Boutique Discovery", tag: "Unique Profile" }
  ];

  return sliced.map((item, index) => ({
    ...item,
    matchBadge: badgeTitles[index % badgeTitles.length].badge,
    matchBadgeTag: badgeTitles[index % badgeTitles.length].tag
  }));
}

function buildWhyItFitsExplanation(fragrance, prefs, offersNewDimension) {
  const parts = [];

  if (fragrance.priceRange === prefs.budget) {
    parts.push(`Fits your ${fragrance.estimatedPrice} budget`);
  } else {
    parts.push(`Priced at ${fragrance.estimatedPrice}`);
  }

  const climateMap = {
    'summer': 'warm weather',
    'winter': 'cozy cold climates',
    'spring': 'mild spring days',
    'fall': 'crisp autumn weather',
    'all-year': 'year-round versatility'
  };
  parts.push(`perfect for ${climateMap[prefs.climate] || 'your climate'}`);

  const occasionMap = {
    'daily': 'daily signature wear',
    'date': 'date nights and romantic evenings',
    'office': 'professional office settings',
    'clubbing': 'night outs and high-energy events',
    'fresh-gym': 'active workouts and post-gym freshness'
  };
  if (prefs.occasion && occasionMap[prefs.occasion]) {
    parts.push(`tailored for ${occasionMap[prefs.occasion]}`);
  }

  if (Array.isArray(prefs.rankedNotes) && prefs.rankedNotes.length > 0) {
    const formattedNotes = prefs.rankedNotes.slice(0, 2).map(n => n.replace('-', ' '));
    parts.push(`features your preferred ${formattedNotes.join(' & ')} notes`);
  }

  return parts.join(', ') + '.';
}

export function generateAdaptiveBrowseFeed(wishlist = []) {
  if (wishlist.length === 0) {
    return {
      similarToLiked: [],
      exploreNewProfiles: FRAGRANCE_DATABASE.slice(0, 8),
      topLikedFamilies: []
    };
  }

  const familyCounts = {};
  wishlist.forEach(item => {
    if (item.olfactoryFamilies) {
      item.olfactoryFamilies.forEach(fam => {
        familyCounts[fam] = (familyCounts[fam] || 0) + 1;
      });
    }
  });

  const wishlistIds = new Set(wishlist.map(w => w.id));
  const sortedFamilies = Object.keys(familyCounts).sort((a, b) => familyCounts[b] - familyCounts[a]);
  const favoriteFamily = sortedFamilies[0];

  const similarToLiked = FRAGRANCE_DATABASE.filter(f => 
    !wishlistIds.has(f.id) && f.olfactoryFamilies.includes(favoriteFamily)
  ).map(f => ({
    ...f,
    adaptiveTag: `Similar note profile (${favoriteFamily.replace('-', ' ')}) to your saved favorites`
  }));

  const exploreNewProfiles = FRAGRANCE_DATABASE.filter(f => 
    !wishlistIds.has(f.id) && !f.olfactoryFamilies.includes(favoriteFamily)
  ).map(f => ({
    ...f,
    adaptiveTag: `New Horizon: Expand your collection with fresh ${f.olfactoryFamilies[0].replace('-', ' ')} notes`
  }));

  return {
    similarToLiked: similarToLiked.slice(0, 4),
    exploreNewProfiles: exploreNewProfiles.slice(0, 6),
    topLikedFamilies: sortedFamilies
  };
}
