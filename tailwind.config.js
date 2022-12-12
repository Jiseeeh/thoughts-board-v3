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
          primary: "#f25272",
          secondary: "#4b8caf",
          accent: "#88f7b2",
          neutral: "#252032",
          "base-100": "#FFFFFF",
          info: "#9ECCEA",
          success: "#6EEDC0",
          warning: "#D97B17",
          error: "#DD493C",
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
