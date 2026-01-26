#!/usr/bin/env node

// Simple image conversion script using sharp
// Usage: node scripts/convert-images.js <directory> <size1> <size2> ...

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const argv = process.argv.slice(2);
const dir = argv[0] || 'images/equipamiento';
const sizes = argv.slice(1).map(s => parseInt(s, 10)).filter(Boolean) || [800, 1200];

(async () => {
  try {
    const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
    if (!files.length) {
      console.log('No images found in', dir);
      return;
    }

    for (const file of files) {
      const input = path.join(dir, file);
      const name = path.parse(file).name;

      for (const size of sizes) {
        const out = path.join(dir, `${name}-${size}.webp`);
        await sharp(input)
          .resize({ width: size })
          .webp({ quality: 80 })
          .toFile(out);
        console.log(`Created ${out}`);
      }
    }

    console.log('Conversion finished.');
  } catch (err) {
    console.error('Error converting images:', err);
    process.exit(1);
  }
})();