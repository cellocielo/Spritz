import fs from 'fs';

const path = './src/data/fragrances.js';
let content = fs.readFileSync(path, 'utf8');

const CATEGORIES = {
  CitrusFresh: 0,
  AromaticGreen: 45,
  Floral: 90,
  Fruity: 135,
  Spicy: 180,
  Gourmand: 225,
  AmberResinous: 270,
  Woody: 315
};

const DICT = {
  // CitrusFresh
  bergamot: 'CitrusFresh', lemon: 'CitrusFresh', grapefruit: 'CitrusFresh', mandarin: 'CitrusFresh', orange: 'CitrusFresh',
  citrus: 'CitrusFresh', aquatic: 'CitrusFresh', water: 'CitrusFresh', marine: 'CitrusFresh', calone: 'CitrusFresh',
  sea: 'CitrusFresh', salt: 'CitrusFresh', ozonic: 'CitrusFresh', neroli: 'CitrusFresh', yuzu: 'CitrusFresh',

  // AromaticGreen
  green: 'AromaticGreen', herbal: 'AromaticGreen', mint: 'AromaticGreen', basil: 'AromaticGreen', sage: 'AromaticGreen',
  lavender: 'AromaticGreen', rosemary: 'AromaticGreen', thyme: 'AromaticGreen', tea: 'AromaticGreen', matcha: 'AromaticGreen',
  fern: 'AromaticGreen', fougere: 'AromaticGreen', grass: 'AromaticGreen', pine: 'AromaticGreen', juniper: 'AromaticGreen',
  absinthe: 'AromaticGreen', eucalyptus: 'AromaticGreen', petitgrain: 'AromaticGreen',

  // Floral
  floral: 'Floral', rose: 'Floral', jasmine: 'Floral', iris: 'Floral', lily: 'Floral', violet: 'Floral', peony: 'Floral',
  tuberose: 'Floral', ylang: 'Floral', orchid: 'Floral', geranium: 'Floral', osmanthus: 'Floral', heliotrope: 'Floral',
  magnolia: 'Floral', freesia: 'Floral', 'orange blossom': 'Floral', powdery: 'Floral',

  // Fruity
  fruity: 'Fruity', apple: 'Fruity', peach: 'Fruity', plum: 'Fruity', berry: 'Fruity', cherry: 'Fruity', mango: 'Fruity',
  pineapple: 'Fruity', coconut: 'Fruity', melon: 'Fruity', pear: 'Fruity', fig: 'Fruity', blackcurrant: 'Fruity',
  raspberry: 'Fruity', strawberry: 'Fruity', lychee: 'Fruity',

  // Spicy
  spicy: 'Spicy', pepper: 'Spicy', cardamom: 'Spicy', cinnamon: 'Spicy', clove: 'Spicy', nutmeg: 'Spicy',
  ginger: 'Spicy', saffron: 'Spicy', coriander: 'Spicy', cumin: 'Spicy', star_anise: 'Spicy', pimento: 'Spicy',

  // Gourmand
  gourmand: 'Gourmand', vanilla: 'Gourmand', caramel: 'Gourmand', chocolate: 'Gourmand', coffee: 'Gourmand',
  honey: 'Gourmand', almond: 'Gourmand', tonka: 'Gourmand', praline: 'Gourmand', cacao: 'Gourmand', hazelnut: 'Gourmand',
  sugar: 'Gourmand', marshmallow: 'Gourmand',

  // AmberResinous
  amber: 'AmberResinous', resin: 'AmberResinous', frankincense: 'AmberResinous', myrrh: 'AmberResinous',
  benzoin: 'AmberResinous', labdanum: 'AmberResinous', opoponax: 'AmberResinous', incense: 'AmberResinous',
  balsam: 'AmberResinous', elemi: 'AmberResinous', copal: 'AmberResinous', styrax: 'AmberResinous',

  // Woody
  woody: 'Woody', cedar: 'Woody', sandalwood: 'Woody', vetiver: 'Woody', patchouli: 'Woody', oud: 'Woody',
  agarwood: 'Woody', moss: 'Woody', oakmoss: 'Woody', leather: 'Woody', tobacco: 'Woody', smoke: 'Woody',
  'iso e super': 'Woody', ambroxan: 'Woody', cashmeran: 'Woody', guaiac: 'Woody', birch: 'Woody', cypress: 'Woody'
};

function getCategory(note) {
  const n = note.toLowerCase();
  for (const [key, val] of Object.entries(DICT)) {
    if (n.includes(key)) return val;
  }
  return null; // Omit if unrecognized
}

// Extract objects using regex and parse them safely
// It's safer to use eval for the array to get JS objects
const dbRegex = /export const FRAGRANCE_DATABASE = \[([\s\S]*?)\];/;
const match = content.match(dbRegex);
if (match) {
  let inner = match[1];
  
  // We have to rewrite the text manually or evaluate it. 
  // Let's evaluate it, mutate, and stringify.
  
  // Create a clean evaluation context
  let fragrances;
  eval(`fragrances = [${inner}]`);

  fragrances.forEach(frag => {
    const isFresh = frag.name.toLowerCase().includes('edt') || frag.name.toLowerCase().includes('cologne') || 
                    (frag.olfactoryFamilies && frag.olfactoryFamilies.includes('fresh-citrus'));
    
    let w = isFresh ? { top: 0.5, heart: 0.3, base: 0.2 } : { top: 0.2, heart: 0.3, base: 0.5 };
    
    const weights = {
      CitrusFresh: 0, AromaticGreen: 0, Floral: 0, Fruity: 0, Spicy: 0, Gourmand: 0, AmberResinous: 0, Woody: 0
    };

    const processNotes = (notes, factor) => {
      if (!notes) return;
      // Filter recognized notes
      const mapped = notes.map(n => getCategory(n)).filter(c => c);
      if (mapped.length === 0) return;
      const val = factor / mapped.length;
      mapped.forEach(c => { weights[c] += val; });
    };

    processNotes(frag.notes?.top, w.top);
    processNotes(frag.notes?.heart, w.heart);
    processNotes(frag.notes?.base, w.base);

    // Normalize
    const total = Object.values(weights).reduce((a, b) => a + b, 0);
    if (total > 0) {
      for (let k in weights) {
        weights[k] = parseFloat((weights[k] / total).toFixed(2));
      }
    }

    let dominant = 'Woody';
    let max = -1;
    for (let k in weights) {
      if (weights[k] > max) { max = weights[k]; dominant = k; }
    }

    frag.dominantCategory = dominant;
    frag.accordWeights = weights;
  });

  // Stringify the db
  const newInner = JSON.stringify(fragrances, null, 2).slice(1, -1);
  const newContent = content.replace(dbRegex, `export const FRAGRANCE_DATABASE = [${newInner}];`);
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully updated fragrance DB with LLM semantics');
} else {
  console.log('Failed to parse DB');
}
