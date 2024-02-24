/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        midnight: '#07224A',
        navyBlue: '#2d3e5e',
        spaceCadet: '#1D345D', // Petroleum blue
        customGrey: '#2B2F32',
        azure: '#0084FF', // vibrant blue
        spanishBlue: '#53B4DE', // jade blue
        oceanBlue: '#DCEAFF',
        greyBlue: '#7AACFA',
        whiteBlue: '#E3EDFC', // white blueish
        fairBlue: '#CDDFFA',
        lightBlue: '#6B8ECD', // light blue
        niceBlue: '#F0F6FF',
        white: '#F2F2F2',
        white2: '#F2F6FC',
        white3: '#E3EDFC',
        transparent: 'transparent',
        gold: '#F5E105',
  
      },
  
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        bai: ['Bai Jamjuree' , 'sans-serif'],
        cursive: ['WindSong', 'cursive'],
        anybody: ['Anybody', 'sans-serif'],
        inter: ["Inter", 'sans-serif']
      },

      backgroundImage: {
        'custom-gradient-bg-left': 'radial-gradient(at bottom left, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-right': 'radial-gradient(at bottom right, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-inverse-left': 'radial-gradient(at top left, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-inverse-right': 'radial-gradient(at top right, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-cards': 'radial-gradient(at bottom right, rgb(155,81,224) 0%, #3db8ff 65%);',
        'grey-cards': '#2B2F32',
        'custom-gradient-btn': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)',

      },

      animation: {
        'shine-infinite': 'shine-infinite 8s linear infinite',
      },
      keyframes: {
        'shine-infinite': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
      
    },
    plugins: [],
  }

}

