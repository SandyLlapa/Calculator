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
  console.log("OG EXPRESSION: "+ expression);


  let current=0;

  while(expression.length!=1){

    firstNum=expression[0];
    console.log("FIRST NUM: "+firstNum);
    secNum=expression[2];
    console.log("SECOND NUM: "+secNum);
    operator=expression[1];

    if(operator=="+"){
      current=add(firstNum,secNum);
      console.log("CURRENT RESULT: "+current);
      
    }
    else if(operator=="-"){
      current=subtract(firstNum,secNum);
    }
    else if(operator=="x"){
      current=multiply(firstNum,secNum);
    }
    else if(operator=="÷"){
      current=divide(firstNum,secNum);
    }

    expression.splice(0,3);
    expression.unshift(current);
    console.log("EXPRESSION: " + expression);

  }


  

  currentScreen.textContent=current;
  return;
  

}





function add(a,b){


  return Number(a)+Number(b);
}

function subtract(a,b){
  return Number(a)-Number(b);
}

function multiply(a,b){
  return Number(a)*Number(b);
}

function divide(a,b){
  return Number(a)/Number(b);
}







