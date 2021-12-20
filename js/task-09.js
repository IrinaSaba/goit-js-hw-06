// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const changeBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  textColor.textContent = color;
});


