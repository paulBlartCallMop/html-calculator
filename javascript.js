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