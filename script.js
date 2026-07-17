function backspace(){

    if(secondNumber != ""){
        secondNumber = secondNumber.slice(0,-1);
    }
    else if(operator != ""){
        operator = operator.slice(0,-1);
    }
    else if(firstNumber != ""){
        firstNumber = firstNumber.slice(0,-1);
    }

    display.innerText = firstNumber + operator + secondNumber || "0";
}

function clearAll(){
    display.innerText = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

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
const buttons = document.querySelectorAll('.row button, .top-row button');

let firstNumber ="";
let secondNumber ="";
let operator ="";

document.addEventListener("keydown", (event)=>{
    let key = event.key;
    switch(key){
        case "*":
            key = "x";
            break;
        case "Enter":
            event.preventDefault();
            key = "=";
            break;
        case "Escape":
            clearAll();
            break;
        case "Delete":
            clearAll();
            break;
        case "Backspace":
            backspace();
            break;
            
    }

    buttons.forEach(button =>{
        if(button.innerText === key){
            button.click();
    }
});
});

buttons.forEach(button =>{
    button.addEventListener('click',()=> {

        if(button.classList.contains("backspace")){
            backspace();
            return;
        }

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

        if(firstNumber === "" && (button.innerText === "+" || button.innerText === "-" || button.innerText === "/" || button.innerText === "x")){
            display.innerText = 0;
            return;
        }

        if(button.classList.contains('clear-btn')){
          clearAll();
            return;
        }

        if(button.innerText === "+" || button.innerText === "-" || button.innerText === "/" || button.innerText === "x"){
          
            if(operator != ""){
                return;
            }

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

             if(button.innerText === "x" || button.innerText === "+" || button.innerText === "-" || button.innerText === "/"){
                    return;
             }


            if(button.innerText === "." && secondNumber === ""){
                let secondText = "0.";
                display.innerText += secondText;
                secondNumber+=secondText;
                return;
            }
            else{

                if(button.innerText === "." && secondNumber.includes(".")){
                return;
                }

                secondNumber+=button.innerText;
                }
        }

        if(display.innerText === '0' || display.innerText === "cannot divide by zero"){
            display.innerText = button.innerText;
        }

        else{
            display.innerText += button.innerText;
        }

        
    });
});