/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffecaa",
          secondary: "#47efd0",
          accent: "#3ee05c",
          neutral: "#222534",
          "base-100": "#FAF9FB",
          info: "#4781EB",
          success: "#18B49A",
          warning: "#EBC714",
          error: "#F92810",
        },
        dark: {
          primary: "#421882",
          secondary: "#ef64c8",
          accent: "#d590e5",
          neutral: "#28222A",
          "base-100": "#353A4B",
          info: "#468CE2",
          success: "#1F9E56",
          warning: "#F0D051",
          error: "#F23168",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
