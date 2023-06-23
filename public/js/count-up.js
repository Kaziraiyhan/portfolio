const countUp = document.querySelectorAll(".countUp");
const interval = 5000;
console.log(countUp)
countUp.forEach((count) =>{
let startValue = 0;
const endValue = parseInt(count.getAttribute('data-val'));

console.log(endValue)

 const duration = Math.floor(interval / endValue);
 let counter = setInterval(function (){
 startValue  += 1;

 count.textContent = startValue;
   console.log(startValue)
  if (startValue == endValue){
    clearInterval(counter)
  }
 },duration);
});