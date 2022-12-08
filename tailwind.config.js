module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        questrial: ["Questrial"],
        notosans: ["Noto Sans"],
      },
      colors: {
        black: "#191919",
      },
    },
  },
  plugins: [],
};
