module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_4c: "#ffffff4c", A700: "#ffffff" },
        gray: { 100: "#f4f3f3", 500: "#a8a8a8" },
        blue_gray: { 100: "#cfcfcf", 700: "#525252" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        red: { A400: "#ed174d" },
      },
      fontFamily: {
        ibmplexsans: "IBM Plex Sans",
        inter: "Inter",
        mako: "Mako",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
