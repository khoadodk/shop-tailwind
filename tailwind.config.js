module.exports = {
  content: [
    './assets/*.liquid',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/**/*.liquid', // or "./**/*/.{liquid,json}"
  ],
  theme: {
    extend: {
      height: {
        "94": '22rem',
      }
    },
  },
  plugins: [],
};
