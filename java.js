const contain = document.getElementById('container');
const display = document.getElementById('Text');
const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('button');           
const toDisplay = document.querySelectorAll(".todisplay");        
const numericBtns = document.querySelectorAll(".numeric");
const operators = document.querySelectorAll('.operators');                                                  
const equal = document.getElementById('=');
const dotBtn = document.getElementById('.')
const clearBtn = document.getElementById('clear');
const backSpace = document.getElementById('backSpace')

let num1 = '';
let num2 = '';
let operator = '';


let add = (num1,num2) => parseFloat(num1) + parseFloat(num2);
let subtract = (num1,num2)=> num1-num2;
let multiply1 = (num1,num2) => num1*num2;    
let divide1 = (num1,num2) =>num1/num2;

function clear(){
  num1 = '';
  num2 = '';
  operator = '';
  text.value = '';
  dotBtn.disabled = false;
}

operators.forEach((button)=>{
   button.addEventListener("click", e => {
    operator = e.target.innerText;
 })
})

dotBtn.addEventListener('click',e =>{
  dot = e.target.innerText
})

// numericBtns.forEach((numeric)=> {
//    numeric.addEventListener('click',e =>{
//     if (operator === ''){
//       num1 += e.target.innerText; 
//       if(num1.includes('.') && operator === ''){
//         dotBtn.disabled = true}
//       } else {
//       num2 += e.target.innerText;  
//       dotBtn.disabled = false;
//       if(num2.includes('.'))
//       {dotBtn.disabled = true}
//     } if (num1.length >= 11 || num2.length >= 11 || text.length >=11 ){
//       text.value = "Too long"
//     }
//   });
// })  

toDisplay.forEach((button)=>{
    button.addEventListener('click',display)})


function operate(){
  switch(operator) {
        case '+':
          result = add(num1,num2)
          break;
        case '-':
          result = subtract(num1,num2)
          break;
        case '*':
          result =  multiply1(num1,num2)
          break;
        case '/':
          result = divide1(num1,num2)
          break;
         default:
          result = ''
      }
      display.innerText = result
}

clearBtn.addEventListener('click',clear)
equal.addEventListener('click',operate)
// backSpace.addEventListener('click',deleteNum)

contain.addEventListener('click',e =>{
   if (e.target.matches('button')){
   const key = e.target
   const action = key.dataset.action
   const keyContent = key.textContent
   const displayedNum = display.textContent
   if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }

   }
})
