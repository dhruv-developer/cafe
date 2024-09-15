module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./components/7.jpeg')", // Use your image path here
      },
      colors:{
        // 'custom-nav': '#C1C4A4',
        'custom-nav': '#384031',
        'custom-text': '#4A5846',
        'custom-menu': '#687664',
        'custom-back': '#D8D8D8',

      },
    },
  },
  plugins: [],
};
