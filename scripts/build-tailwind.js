const fs = require('fs');
const postcss = require('postcss');
const tailwindPlugin = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

(async () => {
  try {
    const input = fs.readFileSync('css/tailwind.css', 'utf8');
    // Use the postcss plugin and pass the actual config object to ensure `prefix` is read
    const result = await postcss([tailwindPlugin({ config: './tailwind.config.cjs', prefix: 'tw-' }), autoprefixer]).process(input, {
      from: 'css/tailwind.css',
      to: 'css/tailwind.generated.css'
    });

    fs.writeFileSync('css/tailwind.generated.css', result.css);
    console.log('Generated css/tailwind.generated.css');

    // Post-process: create tw- prefixed aliases for utilities if prefixing isn't applied by Tailwind build
    const css = fs.readFileSync('css/tailwind.generated.css', 'utf8');
    const root = postcss.parse(css);

    // Collect new rules to append to root
    const newRules = [];
    root.walkRules(rule => {
      try {
        const selectors = rule.selectors;
        if (!selectors) return;
        const prefixedSelectors = selectors.map(sel => {
          // Prefix each class token in the selector unless it already starts with tw-
          return sel.replace(/\.([A-Za-z0-9_-]+)/g, (m, cls) => {
            if (cls.startsWith('tw-')) return `.${cls}`;
            return `.tw-${cls}`;
          });
        });
        // Skip if no change
        if (prefixedSelectors.join(',') === selectors.join(',')) return;
        const clone = rule.clone({ selector: prefixedSelectors.join(',') });
        newRules.push(clone);
      } catch (e) {
        // ignore unexpected selectors
      }
    });

    // Append new rules to the root
    for (const r of newRules) root.append(r);

    // Write post-processed CSS back
    fs.writeFileSync('css/tailwind.generated.css', root.toString());
    console.log('Post-processed css/tailwind.generated.css to add tw- aliases');
  } catch (err) {
    console.error('Error building Tailwind:', err);
    process.exit(1);
  }
})();