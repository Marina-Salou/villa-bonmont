// Tailwind configuration for Villa Bonmont
// - Prefix: tw- (all generated utilities will start with "tw-")
// - Preflight disabled to avoid resetting existing styles in css/styles.css

module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  content: [
    './*.html',
    './pages/**/*.html',
    './js/**/*.js',
    './safelist.html',
    './test-content.html'
  ],
  corePlugins: {
    preflight: false
  },
  safelist: [
    { pattern: /^tw-flex$/, variants: ['md'] },
    { pattern: /^tw-hidden$/, variants: ['md'] },
    { pattern: /^tw-grid-cols-2$/, variants: ['md'] },
    { pattern: /^tw-grid-cols-4$/, variants: ['md'] },
    { pattern: /^tw-justify-end$/, variants: ['md'] },
    { pattern: /^tw-items-center$/, variants: ['md'] },
    { pattern: /^tw-col-span-2$/, variants: ['md'] },
    { pattern: /^tw-flex$/, variants: ['lg'] },
    { pattern: /^tw-grid$/, variants: ['lg'] }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)']
      }
    }
  },
  plugins: []
};
