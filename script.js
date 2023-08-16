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

numberButtons.forEach(button =>{button.addEventListener('click',getNumbers)});
operatorButtons.forEach(button =>{button.addEventListener('click',getOperator)});

clearBtn.addEventListener('click',clear);
deleteBtn.addEventListener('click',deleteNum);
equal.addEventListener('click',operate);





function getNumbers(num){
  prevScreen.textContent+=num.target.textContent;
  return;
}


function getOperator(e){
  prevScreen.textContent +=e.target.textContent;
  operator=e.target.textContent;


  return;
}

function clear(){
  prevScreen.textContent="";
  firstNum="";
  secNum="";
  operator=""
  return;
}

function deleteNum(){
  return;
}



function operate(){
  displayValue= prevScreen.textContent;
  const operatorRegex =  /(?<=\d)(?=[+\-x÷])|(?<=[+\-x÷])(?=\d)/g;

  let expression = displayValue.split(operatorRegex);
  console.log("EXPRESSION: "+expression);

  let current=0;
  for(let i=0;i<expression.length;i+=2){

    firstNum=expression[i];
    secNum=expression[i+2];
    operator=expression[i+1];

    if(operator=="+"){
      current+=add(firstNum,secNum);
      
    }
    else if(operator=="-"){
      subtract(firstNum,secNum);
    }
    else if(operator=="x"){
      multiply(firstNum,secNum);
    }
    else if(operator=="÷"){
      divide(firstNum,secNum);
    }
    expression[i+2]=current

  }

  

  currentScreen.textContent=current;
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







