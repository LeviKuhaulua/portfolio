/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "oklab(91.92% 0.020 -0.03)",
        background: "oklab(15.68% 0.023 -0.04)",
        primary: "oklab(71.59% 0.077 -0.10)",
        secondary: "oklab(48.82% 0.060 0.08)",
        accent: "oklab(75.43% -0.056 0.12)",
      },
    },
  },
  plugins: [],
};
