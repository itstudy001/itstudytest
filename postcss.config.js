module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        // your browsers list configuration here
      ],
      grid: true,
      remove: false, // This line may be needed depending on your configuration
      browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'not dead'],
      features: {
        'color-adjust-pref': false,
      },
    },
  },
};
