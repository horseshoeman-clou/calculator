const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.row button');

let firstNumber ="";
let secondNumber ="";
let operator ="";

buttons.forEach(button =>{
    button.addEventListener('click',()=> {



        if(button.classList.contains('clear-btn')){
            display.innerText = '0';
            firstNumber="";
            secondNumber="";
            operator="";
            return;
        }

        if(button.innerText === "+" || button.innerText === "-" || button.innerText === "/" || button.innerText === "x"){
            operator = button.innerText;
            display.innerText+=operator;
            return;
        }

        if(operator ===""){
            firstNumber+=button.innerText;
        }
        else{
            secondNumber+=button.innerText;
        }
        
        if(display.innerText === '0'){
            display.innerText = button.innerText;
        }

        else{
            display.innerText += button.innerText;
        }

        
    });
});