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

let a = '';
let b = '';
let operator = '';

let add = (a,b) => parseFloat(a) + parseFloat(b);
let subtract = (a,b)=> a-b;
let multiply1 = (a,b) => a*b;    
let divide1 = (a,b) =>a/b;

function clear(){
  a = '';
  b = '';
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

numericBtns.forEach((numeric)=> {
   numeric.addEventListener('click',e =>{
    if (operator === ''){
      a += e.target.innerText; 
      if(a.includes('.') && operator === ''){
        dotBtn.disabled = true}
      } else {
      b += e.target.innerText;  
      dotBtn.disabled = false;
      if(b.includes('.'))
      {dotBtn.disabled = true}
    } if (a.length >= 11 || b.length >= 11 || text.length >=11 ){
      text.value = "Too long"
    }
  });
})  

toDisplay.forEach((button)=>{
    button.addEventListener('click',display)})

function display(){ 
    text.value += this.innerText
    // if(text.value.includes('.' + '.')){
    //   text.value = text.value.indexOf('.',-1)
    //   console.log(text.value)
    // }
}
function operate(){
  switch(operator) {
        case '+':
          text.value = add(a,b)
          break;
        case '-':
          text.value = subtract(a,b)
          break;
        case '*':
          text.value =  multiply1(a,b)
          break;
        case '/':
          text.value = divide1(a,b)
          break;
         default:
          text.value = '  '
      }
}

clearBtn.addEventListener('click',clear)
equal.addEventListener('click',operate)
backSpace.addEventListener('click',deleteNum)
//operator,a,b

function deleteNum(){

}