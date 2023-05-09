/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundImage: {
      "black-1": "linear-gradient(108.18deg, #201606 2.46%, #000000 99.84%);",
      "green-1": "linear-gradient(120deg, #1db954, #191414);",
      "gradient-1": "linear-gradient(#ff758c, #ff7eb3)",
      "gradient-2": "linear-gradient(#ad5389, #3c1053)",
      "gradient-3": "linear-gradient(#ffd89b, #19547b)",
      "gradient-4": "linear-gradient(#1e130c, #9a8478)",
      "gradient-5": "linear-gradient(#0f2027, #203a43)",
      "gradient-6": "linear-gradient(#6a3093, #a044ff)",
      "gradient-7": "linear-gradient(#000000, #e74c3c)",
      "gradient-8": "linear-gradient(#1a2a6c, #b21f1f)",
      "gradient-9": "linear-gradient(#bdc3c7, #2c3e50)",
      "gradient-10": "linear-gradient(#0f2027, #203a43)",
      "gradient-11": "linear-gradient(#093028, #237a57)",
      "gradient-12": "linear-gradient(#833ab4, #fd1d1d)",
      "gradient-13": "linear-gradient(#654ea3, #eaafc8)",
      "gradient-14": "linear-gradient(#ff416c, #ff4b2b)",
      "gradient-15": "linear-gradient(#a80077, #66ff00)",
      "gradient-16": "linear-gradient(#000000, #0f9b0f)",
      "gradient-17": "linear-gradient(#d1913c, #ffd194)",
      "gradient-18": "linear-gradient(#73c8a9, #373b44)",
      "gradient-19": "linear-gradient(#1c92d2, #f2fcfe)",
      "gradient-20": "linear-gradient(#ff4b2b, #ff416c)",
      "purple-1": "linear-gradient(135deg, #4300ff 0%, #717371 100%);",
      "search-icon": "url('https://i.ibb.co/1KG6Gss/search.png')",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    screens: {
      usm: "500px",
      // => @media (min-width: 500px) { ... }

      sm: "998px",
      // => @media (min-width: 640px) { ... }

      xl: { max: "998px" },
    },
  },
  plugins: [],
};
