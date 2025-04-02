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
        grotesk: ['Familjen Grotesk', 'sans-serif'],
        inter: ["Inter Tight", 'sans-serif'],
        syne: ["Syne", 'sans-serif'],
        changa: ["Changa", 'sans-serif'],
        radio: ["Radio Canada", 'sans-serif'],
        noto: ["Noto Sans Display", 'sans-serif'],
        philo: ["Philosopher", 'sans-serif'],
        abee: ["ABeeZee", 'sans-serif'],
        mono: ["Space Mono", 'sans-serif'],
        playfair: ["Playfair", 'serif'],
        mono: ["Space Mono", 'sans-serif'],
        choris: ["Charis SIL", 'serif'],
        stick: ["Stick No Bills", 'sans-serif'],
        train: ["Train One", 'system-ui'],
        redres: ["Redressed", 'cursive'],
        manuale: ["Manuale", 'serif'],
        nova: ["Nova Round", 'system-ui'],
        metamorphous: ["Metamorphous", 'serif'],
        gugi: ["Gugi", 'sans-serif'],
        prosto: ["Prosto On", 'sans-serif'],
        arya: ["Arya", 'sans-serif'],
        robotoSerif: ["Roboto Serif", 'serif'],
        chivo: ["Chivo Mono", 'monospace'],
        magra: ["Pragati Narrow", 'sans-serif'],
        spaceGrotesk: ["Space Grotesk", 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
        marckScript: ["Marck Script", 'cursive'],
        tangerine: ["Tangerine", 'cursive'],
        allura: ["Allura", ' cursive'],
        playfair: ["Playfair Display", 'serif'],
        inspiration: ["Inspiration", 'cursive'],
        robotoCondensed: ["Roboto Condensed", 'sans-serif'],
        bitmap: ['BitxMap Font tfb', 'monospace'],
        roboto: ["Roboto", 'sans-serif']
      },

      gridTemplateColumns: {
        '60/40': '60% 40%', // Custom grid-template-columns
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(.23,1,.32,1)',
      },

      backgroundImage: {
        'circle-gradient': 'radial-gradient(circle, rgba(245,216,252,1) 0%, rgba(148,187,233,1) 100%);',
        'font-gradient': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)'
      }
    },
  },
  plugins: [],
}
