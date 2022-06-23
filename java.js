const contain = document.getElementById('container');
const text = document.getElementById('Text');
const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('button');           
const toDisplay = document.querySelectorAll(".todisplay");        
const numericBtns = document.querySelectorAll(".numeric");
const operators = document.querySelectorAll('.operators');
h1.appendChild(text);                                                   
const equal = document.getElementById('=');
const dotBtn = document.getElementById('.')
const clearBtn = document.getElementById('clear');
const backSpace = document.getElementById('backSpace')
const display =  document.getElementById('display')

let num1 = '';
let num2 = '';
let operator = '';
let haveDot = false;
let result = ''


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
  display.textContent = 'Result';
}

operators.forEach((button)=>{
   button.addEventListener("click", e => {
    if (!text.value) return;
    haveDot = false;
    operator += e.target.innerText;
    if(operator !== ''){
      text.value = ''
    }

   })
})

dotBtn.addEventListener('click',e =>{
  dot = e.target.innerText
})

numericBtns.forEach((numeric)=> {
   numeric.addEventListener('click',e =>{
    if(e.target.innerText === '.' && !haveDot){
        haveDot = true
      }else if(e.target.innerText === '.' && haveDot){
      return;
    } 
    text.value +=  e.target.innerText
 })
})

numericBtns.forEach((numeric)=> {
  numeric.addEventListener('click',e =>{
if (operator === ''){
    num1 = text.value
}else if (operator !== ''){
    num2 = parseInt(text.value)
    operate()
  }
})
})
 
function operate(){
  if (isNaN(num1) || isNaN(num2) && result == '')
  return
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
          }
          num2= ''
          operator = ''
     num1 = result
     display.textContent = result
}

clearBtn.addEventListener('click',clear)
equal.addEventListener('click',e=>{
  operate();
})
backSpace.addEventListener('click',deleteNum)

function deleteNum(e){
  text.value = text.value.toString().slice(0,-1)

}

