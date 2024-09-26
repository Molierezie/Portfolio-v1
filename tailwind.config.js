/** @type {import('tailwindcss').Config} */
export default {

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    
    screens: {

      'sm': { 'min': '359px' },

      'md': { 'min': '760px' },

      'lg': { 'min': '1024px' },

      'xl': { 'min': '1324px' },

      
    },

    fontFamily: {
    
      'Title' :  ["Comfortaa", "sans-serif"],
      'Desc' :  ["Orbitron", "sans-serif"],
      'Logo' :  ["Dancing Script", "cursive"],
      'Robot' : ["Silkscreen", "sans-serif"],
      'Croissant' : ["Croissant One", "cursive"]
 
     

     },

 

  },
  plugins: [],
}

