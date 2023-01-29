/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        maximum: "1200px"
      }
    },
    colors: {
      "green-1": "#081C15",
      "green-2": "#1B4332",
      "green-3": "#2D6A4F",
      "green-4": "#40916C",
      "green-5": "#52B788",
      "green-6": "#74C69D",
      "green-7": "#95D5B2",
      "green-8": "#B7E4C7",
      "green-9": "#D8F3DC"
    }
  },
  plugins: [require("daisyui")]
}
