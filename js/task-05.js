// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector('#name-input');
const outputHi = document.querySelector('#name-output');
// console.log(inputName.value);
inputName.addEventListener("input", hiName);

 function hiName(event) {
    if (inputName.value !== "") { 
       outputHi.textContent = inputName.value;
       return
    }
   outputHi.textContent = "Anonymous";
};