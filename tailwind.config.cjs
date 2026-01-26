// Tailwind configuration for Villa Bonmont
// - Prefix: tw- (all generated utilities will start with "tw-")
// - Preflight disabled to avoid resetting existing styles in css/styles.css

module.exports = {
  prefix: 'tw-',
  content: [
    './*.html',
    './pages/**/*.html',
    './js/**/*.js'
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {}
  },
  plugins: []
};
