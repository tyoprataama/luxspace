module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  style: {
    postcss: {
      plugins: [require('tailwindcss')('./tailwind.config'), require('autoprefixer')],
    },
  },
};
