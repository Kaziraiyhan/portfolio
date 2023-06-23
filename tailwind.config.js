



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
        'xl': '1130px',
        '2xl': '1130px',

        // => @media (min-width: 640px) { ... }


      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        // 'sans': ['Poppins','ui-sans-serif', 'system-ui', ],
        'sans': ["Inter","sans-serif", ],
        // 'sans': ["system-ui", "-apple-system","Segoe UI", "Roboto","Helvetica Neue", "Arial","Noto Sans","Liberation Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji", ],
        // 'sans': [ "SFMono-Regular", "Menlo,Monaco,Consolas" ,"Liberation Mono","Courier New", "monospace ", ],

        
    
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }

   
    },
  },
  plugins: [],
}



