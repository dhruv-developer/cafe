module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./components/7.jpeg')", // Use your image path here
      },
    },
  },
  plugins: [],
};
