const numkeys = ['7','8','9','4','5','6','1','2','3','0','00','.'];
const numpad = document.querySelector('.numpad');

numkeys.forEach((key) => {
    let button = document.createElement("button");
    button.classList.add("numkey");
    button.textContent = key;
    numpad.appendChild(button);
})

const opKeys = ['C','+','-','×','÷','='];
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
function performOperation(a,b,op) {
    switch(op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            if (b === 0) {alert('Don\'t divide by 0');}
            return Math.floor(a * 100 / b)/100;   
    }
}

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
        if (key === 'C') {
            num1 = '';
            num2 = '';
            operation = undefined;
        } else if (key === '=' || operation != undefined) {
            if ((num1 === '')||(num2 === '')||(operation === undefined)) {
                alert("Please make a valid formula.");
                return;
            }
            let res = performOperation(parseFloat(num1),parseFloat(num2),operation);
            num1 = res;
            num2 = '';
            operation = (key === '=') ? undefined:key;
        } else {
            if (num1 == '') {num1 = '0';}
            operation = key;
        }
    }
    display.textContent = `${num1} ${operation === undefined ? '' : operation} ${num2}`;
});
