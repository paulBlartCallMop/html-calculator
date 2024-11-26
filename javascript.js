const numkeys = ['7','8','9','4','5','6','1','2','3','0','00','.'];
const numpad = document.querySelector('.numpad');

numkeys.forEach((key) => {
    let button = document.createElement("button");
    button.classList.add("numkey");
    button.textContent = key;
    numpad.appendChild(button);
})

const opKeys = ['+','-','×','÷','='];
const operators = document.querySelector('.operators')

opKeys.forEach((key) => {
    let button = document.createElement('button');
    button.classList.add("opKey");
    button.textContent = key;
    operators.appendChild(button);
})

let num1 = '';
let num2 = '';
let operation;
const input = document.querySelector('.input');
const display = document.querySelector('.display');

input.addEventListener('click',(event)=>{
    let key = event.target.textContent;
    if (numkeys.includes(key)) {
        if (operation === undefined) {
            num1 = num1 + key;
        } else {
            num2 = num2 + key;
        }
    }
    if (opKeys.includes(key)) {
        if (key === '=') {
            alert('cool');
        } else {
            operation = key;
        }
    }
    display.textContent = `${num1} ${operation === undefined ? '' : operation} ${num2}`;
});
