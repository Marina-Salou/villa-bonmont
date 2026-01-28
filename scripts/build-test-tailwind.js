const fs = require('fs');
const postcss = require('postcss');
const tailwindPlugin = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
(async () => {
  try {
    const path = require('path');
    const testDir = path.join(__dirname, '..', 'test-tailwind');
    const input = fs.readFileSync(path.join(testDir, 'tailwind.css'), 'utf8');
    const config = require(path.join(testDir, 'tailwind.config.cjs'));
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    const result = await postcss([tailwindPlugin({ config }), autoprefixer]).process(input, {
      from: 'test-tailwind/tailwind.css',
      to: 'test-tailwind/tailwind.generated.css'
    });
    fs.writeFileSync(path.join(testDir, 'tailwind.generated.css'), result.css);
    console.log('WROTE', path.join(testDir, 'tailwind.generated.css'));
  } catch (e) {
    console.error('ERR', e);
    process.exit(1);
  }
})();