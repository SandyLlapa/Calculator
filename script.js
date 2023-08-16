let firstNum="";
let secNum="";
let operator="";
let displayValue="";


const numberButtons = document.querySelectorAll('.numberBtn');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn=document.querySelector('.delete');

const currentScreen = document.querySelector('.current');
const prevScreen = document.querySelector('.prev');
const equal=document.querySelector('.equal');

clearBtn.addEventListener('click',clear);
deleteBtn.addEventListener('click',deleteNum);
equal.addEventListener('click',evaluate);



numberButtons.forEach(button =>{button.addEventListener('click',getNumbers)});
operatorButtons.forEach(button =>{button.addEventListener('click',getOperator)});

function getNumbers(num){
  prevScreen.textContent+=num.target.textContent;

  return;
}
// currentScreen.textContent=5;

function clearDisplay(){
  currentScreen.textContent="";
}


function getOperator(e){
  prevScreen.textContent +=e.target.textContent;
  operator=e.target.textContent;


  return;
}

function clear(){
  return;
}

function deleteNum(){
  return;
}

function evaluate(){
  return;
}

function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}


function operate(op,a,b){

  if(op=="+"){
    add(a,b);
  }
  else if(op=="-"){
    subtract(a,b);
  }
  else if(op=="*"){
    multiply(a,b);
  }
  else if(op=="/"){
    divide(a,b);
  }

}




