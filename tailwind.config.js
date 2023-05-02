/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f7707",

          secondary: "#d30236",

          accent: "#c5cff9",

          neutral: "#1A242D",

          "base-100": "#DFE5EC",

          info: "#5BB1E6",

          success: "#1A8474",

          warning: "#9B8008",

          error: "#E42134",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

