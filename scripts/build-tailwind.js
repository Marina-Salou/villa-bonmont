const fs = require('fs');
const postcss = require('postcss');
// Ensure Tailwind runs in development mode during local builds so we get all utilities during debugging
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const tailwindPlugin = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('../tailwind.config.js');

(async () => {
  try {
    const input = fs.readFileSync('css/tailwind.css', 'utf8');
    // Use the postcss plugin and pass the actual config object to ensure `prefix` and safelist are read
    const mergedConfig = Object.assign({}, tailwindConfig, { content: [...tailwindConfig.content, './test-content.html'] });
    console.log('Tailwind config being used in build:', JSON.stringify({ prefix: mergedConfig.prefix, content: mergedConfig.content, safelist: mergedConfig.safelist }, null, 2));
    const result = await postcss([tailwindPlugin(mergedConfig), autoprefixer]).process(input, {
      from: 'css/tailwind.css',
      to: 'css/tailwind.generated.css'
    });

    fs.writeFileSync('css/tailwind.generated.css', result.css);
    console.log('Generated css/tailwind.generated.css');

    // NOTE: removed post-processing aliasing; Tailwind v3 should generate prefixed utilities directly from config

  } catch (err) {
    console.error('Error building Tailwind:', err);
    process.exit(1);
  }
})();