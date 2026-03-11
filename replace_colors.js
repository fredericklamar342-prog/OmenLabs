const fs = require('fs');
const path = require('path');

const replacers = [
  // Primary Accents (Text, bg, border, hovers, strokes, fills)
  { regex: /\[\#2B5C92\]/g, replacement: '[#43B6D5]' }, 
  { regex: /\[\#0E2F76\]/g, replacement: '[#43B6D5]' }, 
  
  // Gradients and dark blue bits
  { regex: /\[\#0C1446\]/g, replacement: '[#2A8FA8]' }, // A slightly darker cyan for gradient depth
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const { regex, replacement } of replacers) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'apps/web/src'));
