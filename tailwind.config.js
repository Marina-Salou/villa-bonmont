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
      colors: {
        primary: '#1a1a1a',
        secondary: '#c9a866',
        border: 'rgba(0,0,0,0.05)'
      },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial'],
        serif: ['Crimson Text','serif']
      }
    }
  },
  plugins: []
};
