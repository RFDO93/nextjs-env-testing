/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.scss",
    "./src/**/*.less",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          background: "#e2e8ed",
          dark: "#5a5a5a",
          light: "#d9d9d9",
          text: "#D9DBE1"
        },
        purple: {
          main: "#c028b9",
        },
      },
    },
  },
  plugins: [
		require( 'tailwindcss/plugin' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	],
}