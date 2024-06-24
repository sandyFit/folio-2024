/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textLight: '#36332d',
        skyIce: {
          100: '#9d9efc',
          200: '#8d8ffc',
          300: '#7c5dec',
          400: '#6148bd',
          500: '#5540a3',
          600: '#4c3896',
          700: '#38296e',
          800: '#291e52',
          900: '#1b1830',
          950: '#151226'
        },

        peachy: {
          200: '#FEF6E5',
          500: '#FF4552'
        },

        darksh: {
          900: '#262523'
        },

        hotpink: {
          400: '#FF00D2',
          600: '#FF69B4',
          700: '#7d2953'
        },

        plomo: {
          200: '#8d8df7',
          600: '#181830'
        },

        skyIceRgba: {
          300: '#7c5dec99'
        },

        salmon: {
          100: '#faa5b5',
          200: '#fa8ca0',
          300: '#fc7991',
          400: '#ff637f',
          500: '#fa4d6c',
          600: '#cf4a62',
          700: '#a83449',
          800: '#802837',
          900: '#541a24',
          950: '#290c11'
        },
        
        salmonRgba: {
          300: '#d4d4d8b3',
        },

        greish: {
          500: '#2d3234'
        },

        orangi: {
          100: '#fca7af',
          200: '#ed858f',
          400: '#E8464E'
        },

        orangy: {
          100: '#fc9799',
          200: '#fa787a',
          300: '#f45A3F',
          400: '#fb4b4e',
        },

        peachyGreen: {
          300: '#00cdc0'
        },

        redish: {
          600: '#C82222'
        },

        electro: {
          100: '#89fa8f',
          200: '#50fa59',
          300: '#2ef938'
        },

        bluish: {
          300: '#2294A4',
          400: '#008791'
        },

        petal: {
          50: '#ebcee2',
          100: '#D3A6C5',
          200: '#db8fc3',
          300: '#db7eb',
          400: '#b34f93',
          500: '#913675',
          600: '#7a235f',
          700: '#5c1446'
        },

        curuba: {
          100: '#fee1dd',
          300: '#F3B2BA'
        },

      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(254, 202, 202, 1) 0%, rgba(165, 243, 252, 1) 100%)',
      },

      screens: {
        'sm': '320px',
        'md': '420px',
        'base': '500px',
        'lg': '650px',
        'xl': '1100px',
        '2xl': '1300px',
        '3xl': '1500px',
        
      },

      gridTemplateRows: {
        'customHero': '1fr 1fr 1fr 1fr 1fr 1fr', // Default for smaller screens
        'customHero-lg': '15vh 15vh 15vh 15vh 15vh 15vh', // For larger screens
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