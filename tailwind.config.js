const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all relevant files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keep Inter available if needed specifically via font-inter if you want to use `font-inter` class
        inter: ["Inter", "sans-serif"],
      },
    },
    // Define all primary font families here
    // This will override Tailwind's defaults, so we define what we need.
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Playfair Display", "serif"],
      // You can add mono here if you use it, e.g., using Tailwind's default mono stack
      // mono: ['ui-monospace', 'SFMono-Regular', /* ... */],
    },
  },
  plugins: [],
});
