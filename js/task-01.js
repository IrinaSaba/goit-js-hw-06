// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const allItemsEl = document.querySelectorAll('li.item');
   console.log(`Number of categories: ${allItemsEl.length}`);
   allItemsEl.forEach(item => { 
      console.log(`Category: ${item.childNodes[1].textContent}`)
      console.log(`Elements: ${item.childNodes[3].children.length}`)
   })










 

