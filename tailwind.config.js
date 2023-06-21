



module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'primary' : '#6dff85',
        'text': '#1f1f1f',

        'color-lite': '#fff',
        'color-gray': '#999999',
        
        'secondary': '#203239',
        'color-dark':'#202124',
  
        'Dark_secondary':'#0f181c',

       

      },
      screens: {
        'lg': '950px',
        // => @media (min-width: 640px) { ... }


      },
      fontFamily: {
        'sans': ['Poppins','ui-sans-serif', 'system-ui', ],
    
      }
    },
  },
  plugins: [],
}



