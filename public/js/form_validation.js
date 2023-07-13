
let full_name = document.querySelector("#full_name") ;
let email = document.querySelector("#email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var reg = new RegExp('^[0-9]+$');

let number =  document.querySelector("#number")
let barth_date = document.querySelector("#barth_date")

function hide_it(element){
  element.addEventListener('mouseover', function handleMouseOver() {
    full_name.parentElement.classList.add("thing2")
  return hide_it
    });
  
}

hide_it(full_name)


// full_name.parentElement.addEventListener('mouseover', function handleMouseOver() {
//   full_name.parentElement.classList.add("thing2")
//   });



function check_form () {
  var return_val = true ;
  
   if (full_name.value == "") { 
    full_name.parentElement.style.setProperty('--after',"' *Entet Your Name'")
    // full_name.parentElement.style.setProperty('background',"red")
    full_name.parentElement.classList.add("thing1")
    full_name.parentElement.classList.remove("thing2")
   
    console.log("name nai")
   return_val = false }

   if (!full_name.value == "") { 
    console.log("  First name ad")
    full_name.parentElement.style.setProperty('--after',"' *Entet Your Name'")

    full_name.style.setProperty('--after',"' '")
 }






   if (email.value == ""){
     email.style.setProperty( "--after", "'*Enter Email Address'")
    console.log("  First email nai")

     return_val = false

   }else if(!email.value.match(mailformat)){
    return_val = false
    email.style.setProperty( "--after", "'*Enter valid email'")
   }else if(email.value.match(mailformat)){
    email.style.setProperty( "--after", "''")
   }
  
     if(number.value == ""){
    number.style.setProperty("--after", `"Number can't be empty"`)
    console.log("  Number nai")

    return_val = false
  }
  if(number.value !== ""){
    number.style.setProperty("--after", "''")
    
  }
  if(number.length <= 11){
    number.style.setProperty("--after", "'not shfldafsda'")
    return_val = false

  }
//   if(barth_date_input.value == ""){
//     barth_date.style.setProperty("--after", "hellow")
//   }
 
return return_val





//   ////





//   if (radio1.checked) {
//     gender_wrapper.style.setProperty("--after","''")
    
//   } else if (radio2.checked) {
//     gender_wrapper.style.setProperty("--after","''")
//   } else if (radio3.checked) {
//     gender_wrapper.style.setProperty("--after","''")
//   } 
//   else {
//     gender_wrapper.style.setProperty("--after","'Have to select your gender'")
//     return_val = false
//   };
  
//   if (city.value == "") {
//     city_select.style.setProperty("--after", "'select your City'")
//     return_val = false
//   } 
//   if (city.value !== "") {
//     city_select.style.setProperty("--after", "''")
    
//   } 

//   if (country.value == "") {
//     country_select.style.setProperty("--after", "'select your Country'")
//     return_val = false
//   } 
//   if (country.value !== "") {
//     country_select.style.setProperty("--after", "''")
    
//   } 





} 


window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 0, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  // document.querySelector('.hello').scrollIntoView({ 
  //   behavior: 'smooth' 
  // });