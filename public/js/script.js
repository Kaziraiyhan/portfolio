const menu_bar = document.querySelector('.menu_bar');
const menu_close = document.querySelector('.menu_close')
const menu = document.querySelector('.menu')

menu_bar.addEventListener("click", function() {
    // Add a class to the button
    menu_bar.classList.add("hidden");
    menu_close.classList.remove("hidden");
    menu.classList.add('flex')
    menu.classList.remove('hidden')

  });
  menu_close.addEventListener("click", function() {
    // Add a class to the button
    
    menu_close.classList.remove("inline-block");
    menu_close.classList.add("hidden");
    menu_bar.classList.remove("hidden");
    menu_bar.classList.add("inline-block");
    menu.classList.add('hidden')



    
  });


  $(document).ready(function(){
 

 
    $('.slaider').slick({
       
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow : '<button class="slick_prev" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slick_next" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',

        responsive: [
          {
            breakpoint: 1165,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
        
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              }
          },
   
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      

      });    
  });
//   