// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Найти сумму и количество положительных элементов.
// let positivNum = arr.filter(function (num) {
//   return num > 0;
// });
// console.log(positivNum.length);
// let res = positivNum.reduce(function (sum, elem) {
//   return sum + elem;
// });
// console.log(res);

// Найти минимальный элемент массива и его порядковый номер.
// let minNum = Math.min(...arr);
// console.log(minNum);
// let number = arr.indexOf(minNum);
// console.log(number);

// Найти максимальный элемент массива и его порядковый номер.
// let maxNum = Math.max(...arr);
// console.log(maxNum);
// let number = arr.indexOf(maxNum);
// console.log(number);

// Определить количество отрицательных элементов.
// let negativeNum = arr.filter(function (num) {
//   return num < 0;
// });
// console.log(negativeNum.length);

// Найти количество нечетных положительных элементов.
// let positivNum = arr.filter(function (num) {
//   return num > 0 && num % 2 != 0;
// });
// console.log(positivNum.length);

// Найти количество четных положительных элементов.
// let positivNum = arr.filter(function (num) {
//   return num > 0 && num % 2 == 0;
// });
// console.log(positivNum.length);

// Найти сумму четных положительных элементов.
// let positivNum = arr.filter(function (num) {
//   return num > 0 && num % 2 == 0;
// });
// let res = positivNum.reduce(function (sum, elem) {
//   return sum + elem;
// });
// console.log(res);

// Найти сумму нечетных положительных элементов.
// let positivNum = arr.filter(function (num) {
//   return num > 0 && num % 2 != 0;
// });
// let res = positivNum.reduce(function (sum, elem) {
//   return sum + elem;
// });
// console.log(res);

// Найти произведение положительных элементов.
// let positivNum = arr.filter(function (num) {
//   return num > 0;
// });
// let res = positivNum.reduce(function (sum, elem) {
//   return sum * elem;
// });
// console.log(res);

// Найти наибольший среди элементов массива, остальные обнулить.
// let maxNum = Math.max(...arr);
// let result = arr.map(function (num) {
//   return num == maxNum ? num : 0;
// });
// console.log(result);
