/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
      colors: {

        'palette-1': {
          primary: '#09090b',
          secondary: '#67e8f9',
          
        },
        'palette-2': {
          primary: '#052e16',
          secondary: '#d8b4fe',
        },
        'palette-3': {
          primary: '#172554',
          secondary: '#fda4af',

        },
        'palette-4': {
          primary: '#4c0519',
          secondary: '#fef9c3',

        },

      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(254, 202, 202, 1) 0%, rgba(165, 243, 252, 1) 100%)',
      },

      screens: {
      'sm': '320px',
      'md': '420px',
      'base': '500px',
      'base-sm': '600px',     
        'lg': '650px',
      'lg-sm': '700px',
      'lg-md': '750px', 
      'lg-lg': '800px', 
      'lg-xl': '850px', 
      'lg-2xl': '900px', 
      'xl-sm': '950px', 
      'xl-md': '1000px', 
      'xl': '1050px',
      'xl-lg': '1100px',
      'xl-xl': '1150px',
      'xl-2xl': '1200px',
      '2xl-sm': '1250px',      
      '2xl-md': '1300px',
      '2xl-lg': '1350px',
      '2xl-xl': '1400px',
      '3xl-sm': '1450px',
      '3xl': '1500px',
    },

      fontFamily: {       
        inter: ["Inter Tight", 'sans-serif'],                     
      },

      gridTemplateColumns: {
        '60/40': '60% 40%', // Custom grid-template-columns
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(.23,1,.32,1)',
      },

    },
  },
  plugins: [],
}
