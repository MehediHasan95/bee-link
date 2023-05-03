/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        hanPurple: "#582FF5",
        raisinBlack: "#202020",
        deepPink: "#F52D3A",
        malachite: "#00DD73",
        paradisePink: "#E74F5B",
      },
      backgroundColor: {
        hanPurple: "#582FF5",
        raisinBlack: "#202020",
        deepPink: "#F52D3A",
        malachite: "#00DD73",
        paradisePink: "#E74F5B",
      },
      minHeight: {
        85: " calc(100vh - 15vh)",
      },
      maxWidth: {
        screen4xl: "1920px",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
