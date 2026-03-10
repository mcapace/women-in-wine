/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3F0",
        "cream-dark": "#EDE8E3",
        charcoal: "#2C2926",
        "rich-black": "#1A1815",
        gold: "#C9A961",
        "gold-light": "#E4D4A8",
        "gold-dark": "#5D4A36",
        burgundy: "#6B2737",
        "burgundy-light": "#8B3547",
        slate: "#6B6560",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
