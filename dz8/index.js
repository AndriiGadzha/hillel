// -Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)
// let res = "";
// for (let i = 20; i <= 30; i = i + 0.5) {
//   res += i + " ";
// }
// console.log(res);

// -Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
// let usd = 27;
// let res = "";
// for (let i = 10; i <= 100; i = i + 10) {
//   res += i * usd + " ";
// }
// console.log(res);

// -Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N
// let num = 100;
// for (let i = 1; i <= 100; i++) {
//   if (i * i < num) {
//     console.log(i);
//   }
// }

// -Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).
// let num = 2;
// let res = 0;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     res++;
//   }
// }
// if (res == 0) {
//   console.log("просте число");
// } else {
//   console.log("не просте");
// }

// -Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)
// let num = 81;
// while (num % 3 == 0) {
//   num = num / 3;
// }
// num == 1
//   ? console.log("Число можно получить")
//   : console.log("Число нельзя получить");