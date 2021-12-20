// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputPlace = document.querySelector("#validation-input");
const lengthData = parseInt(inputPlace.dataset.length);


const addDeleteClass = (add, remove) => {
   inputPlace.classList.add(add);
   inputPlace.classList.remove(remove);
};

const countLetters = (event) => {
   // console.log(inputPlace.value.length);
   // console.log(lengthData);
   if (inputPlace.value.length === lengthData) { 
      addDeleteClass("valid", "invalid"); 
      return
   } 
     addDeleteClass("invalid", "valid"); 
};

inputPlace.addEventListener("blur", countLetters);