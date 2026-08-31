import fs from 'fs';

const path = './src/data/fragrances.js';
let content = fs.readFileSync(path, 'utf8');

// We want to replace `mainAccords: ["Amber", "Almond", "Woody", "Warm Spicy"]`
// with `mainAccords: [{name: "Amber", score: 100}, {name: "Almond", score: 80}, ...]`

const regex = /mainAccords:\s*\[(.*?)\]/gs;

content = content.replace(regex, (match, p1) => {
  // If it already looks like objects, skip
  if (p1.includes('{')) return match;
  
  // Parse the strings
  const strings = p1.split(',').map(s => s.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '')).filter(s => s);
  
  const scores = [100, 80, 60, 40, 20, 10];
  
  const objects = strings.map((str, index) => {
    return `{ name: "${str}", score: ${scores[index] || 10} }`;
  });
  
  return `mainAccords: [${objects.join(', ')}]`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed mainAccords');
