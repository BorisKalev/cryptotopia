/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"], // Make sure all your file extensions are covered
  theme: {
    extend: {
      fontFamily: {
        mix: ["Poppins", "Roboto", "Inter", "sans-serif"],
        cryptopia: ["Orbitron", "sans-serif"],
        montserrat: ["Montserrat Alt 1", "sans-serif"],
        brandmark: ["Rajdhani", "sans-serif"],
      },
      screens: {
        "sm-max": { max: "640px" },
        "md-max": { max: "768px" },
        "lg-max": { max: "1024px" },
        "xl-max": { max: "1280px" },
        "2xl-max": { max: "1536px" },
        "3xl-max": { max: "1920px" },
        "4xl-max": { max: "2560px" },
        "2xl": { min: "1536px" },
        "3xl": { min: "1920px" },
        "4xl": { min: "2560px" },
      },
      backgroundImage: {
        "gradient-green-blue":
          "linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)",
        "gradient-orange-blue":
          "linear-gradient(220.55deg, #FF9D7E 0%, #4D6AD0 100%)",
        "gradient-purple-red":
          "linear-gradient(220.55deg, #DD7BFF 0%, #FF6C6C 100%)",
        "gradient-red-blue":
          "linear-gradient(220.55deg, #FF3F3F 0%, #063CFF 100%)",
        "gradient-dark-blue":
          "linear-gradient(220.55deg, #4063BC 0%, #6B0013 100%)",
        "gradient-white-purple":
          "linear-gradient(to right, #FFFFFF 0%, #8D5FE3 100%);",
        "gradient-brown": "linear-gradient(to bottom, #483e3d, #1d100f)",
      },
    },
  },
  plugins: [],
};
