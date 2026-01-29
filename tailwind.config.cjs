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
    { pattern: /^md:tw-/ },
    { pattern: /^lg:tw-/ },
    'md:tw-flex',
    'md:tw-hidden',
    'md:tw-grid-cols-2',
    'md:tw-grid-cols-4',
    'md:tw-justify-end',
    'md:tw-items-center',
    'md:tw-col-span-2',
    'lg:tw-flex',
    'lg:tw-grid',
    { pattern: /^tw-hidden$/ },
    { pattern: /^tw-flex$/ }
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
