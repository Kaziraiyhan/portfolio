



module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'primary' : '#6dff85',
        'text': '#1f1f1f',
        'color-lite': '#fff',
        'color-gray': '#999999',
        'color-deap': '#555555',
        'secondary': '#203239',
        'color-dark':'#202124',
        'Dark_secondary':'#0f181c',

       

      },
      screens: {

        'lg': '950px',
        'xl': '1180px',
        '2xl': '1220px',
        '3xl': '1420px',


        // => @media (min-width: 640px) { ... }


      },

      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '2rem',
          '2xl': '4rem',
          '3xl': '12rem',
        },
      },

      fontFamily: {
        'sans': ["Inter","sans-serif", ],

        
    
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'spin-rev': 'spin 7s linear infinite reverse',
      }

   
    },
  },
  plugins: [],
}



