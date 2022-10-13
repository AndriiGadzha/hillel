// Реализуйте функцию removeElement(array, item), чтобы удалить элемент item из массива array.
const array = [1, 2, 3, 4, 5, 6, 7].filter(function removeElement(array) {
  return array !== 5;
});
console.log(array);
