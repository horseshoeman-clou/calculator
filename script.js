const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.row button');

buttons.forEach(button =>{
    button.addEventListener('click',()=> {
        
        if(display.innerText === '0'){
            display.innerText = button.innerText;
        }

        else{
            display.innerText += button.innerText;
        }
    });
});