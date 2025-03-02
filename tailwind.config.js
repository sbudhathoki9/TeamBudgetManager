/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   "gray-20": "#F8F4EB",
      //   "gray-50": "#EFE6E6",
      //   "gray-100": "#DFCCCC",
      //   "gray-500": "#5E0000",
      //   "primary-100": "#FFE1E0",
      //   "primary-300": "#FFA6A3",
      //   "primary-500": "#FF6B66",
      //   "secondary-400": "#FFCD5B",
      //   "secondary-500": "#FFC132",
      // },
      // backgroundImage: (theme) => ({
      //   "gradient-yellowred":
      //     "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      //   "mobile-home": "url('./assets/HomePageGraphic.png')",
      // }),
     /* colors: {
        "gray-20": "#0A0A0A", // Almost black background
        "gray-50": "#121212", // Dark gray-black
        "gray-100": "#1A1A1A", // Deep dark gray
        "gray-500": "#282828", // Mid-tone gray for contrast
        "primary-100": "#1E1E2E", // Dark indigo-like background
        "primary-300": "#282A36", // Slightly lighter dark grayish-blue
        "primary-500": "#7AA2F7", // Vibrant cyan-blue (AWSLagi's accent)
        "secondary-400": "#BB9AF7", // Soft purple highlight
        "secondary-500": "#A277F7", // More vibrant purple
        "highlight-cyan": "#89DCEB", // Cyan glow (for buttons/hover effects)
      }, */
      colors: {
        "background-light": "#FAF6F2", // Soft off-white background
        "background-accent": "#F5E9DC", // Slight beige-tinted section
        "text-dark": "#000000", // Deep dark gray for text
        "text-light": "#5A5A5A", // Softer gray for secondary text
        "primary-100": "#FFECD1", // Light orange tint
        "primary-300": "#FFBE7B", // Muted orange accent
        "primary-500": "#FF8C42", // Vibrant orange (for active elements)
        "secondary-400": "#F77F00", // Deep orange for interactions
        "secondary-500": "#D96B00", // Darker orange for emphasis
      },
      backgroundImage: (theme) => ({
        "gradient-dark":
          "linear-gradient(90deg, #1F1F1F 0%, #2C2C2C 100%)",
        "mobile-home": "url('./assets/DarkHomeGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}