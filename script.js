function operate(firstNumber,secondNumber,operator){

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    if(operator === "+"){
        result = num1 + num2
    }
    else if(operator === "-"){
        result = num1 - num2;
    }
    else if ( operator === "x"){
        result = num1 * num2;
    }
    else if( operator === "/"){
        if( num2 === 0){
            return "cannot divide by zero";
        }
        else{
            result = num1 / num2;
        }
    }

    else{
        result = "Invalid case";
    }
    
    if( typeof result === "number"){
        result = Number(result.toFixed(6));
    }

    return result;
}


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.row button');

let firstNumber ="";
let secondNumber ="";
let operator ="";

buttons.forEach(button =>{
    button.addEventListener('click',()=> {


        if(button.innerText === "="){

            if(firstNumber !="" && secondNumber !="" && operator !=""){

            result = operate(firstNumber,secondNumber,operator);
            
            if(result === "cannot divide by zero"){
                firstNumber = "";
            }
            else{
                firstNumber = result.toString();
            }
            display.innerText = result;
            secondNumber = "";
            operator = "";
        
        }
        return;
    }


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

            if(button.innerText === "." && firstNumber === ""){
                display.innerText = "0.";
                firstNumber+=display.innerText;
                return;
            }
            else{

                if(button.innerText === "." && firstNumber.includes(".")){
                return;
                }

                firstNumber+=button.innerText;
            }
        }
    
        else{

            if(button.innerText === "." && secondNumber === ""){
                let secondText = "0.";
                display.innerText += secondText;
                secondNumber+=secondText;
                hasDecimal = true;
                return;
            }
            else{
                if(button.innerText === "." && secondNumber.includes(".")){
                return;
                }

                secondNumber+=button.innerText;
                }
        }

        if(display.innerText === '0'){
            display.innerText = button.innerText;
        }

        else{
            display.innerText += button.innerText;
        }

        
    });
});