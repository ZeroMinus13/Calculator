const contain = document.getElementById('container')
const text = document.getElementById('Text')
const h1 = document.querySelector('h1')
h1.appendChild(text)

const nine = document.getElementById('9')
const eight = document.getElementById('8')
const seven = document.getElementById('7')
const six = document.getElementById('6')
const five = document.getElementById('5')
const four = document.getElementById('4')
const three = document.getElementById('3')
const two = document.getElementById('2')
const one = document.getElementById('1')
const zero = document.getElementById('0')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const equal = document.getElementById('=')

button.addEventListener('click',display)

function display(){
   return text.innerText = this.id
} 