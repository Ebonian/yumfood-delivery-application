module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AF0039",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      prompt: ["Prompt"],
    },
  },
  plugins: [],
};
