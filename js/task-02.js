{/* <ul id="ingredients"></ul>

В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.
 */}


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrList = [];

ingredients.map(ingr => { 
  const ingrItem = document.createElement("li");
  // console.log(ingrItem);
  ingrItem.textContent = ingr;
  ingrItem.classList.add('item');
  ingrList.push(ingrItem);
  return ingrList
})
// console.log(...ingrList);
document.querySelector('#ingredients').after(...ingrList)