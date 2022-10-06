// -Вывести на страницу в одну строку через запятую числа от 10 до 20
// let str = "";
// for (let i = 10; i <= 20; i++) {
//   str += ", " + i;
// }
// // console.log(str.substring(1));
// console.log(str.slice(-42));

// -Вывести квадраты чисел от 10 до 20
// let str = "";
// for (let i = 10; i <= 20; i++) {
//   str += ", " + i * i;
// }
// console.log(str.substring(1));

// for (let i = 10; i <= 20; i++) {
//   console.log(i*i);
// }

// -Вывести таблицу умножения на 7
// let num = 7;
// let result;
// for (let i = 1; i <= 9; i++) {
//     result = `${num}*${i}=${num * i}`
//   console.log(result);
// }

// -Найти сумму всех целых чисел от 1 до 15
// let num = 15
// let sum = num*(num+1)/2
// console.log(sum);

// function sumNum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     } return sum;
// } console.log(sumNum(15));

// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log(sum);

// -Найти произведение всех целых чисел от 15 до 35
// let res = 1;
// for (let i = 15; i <= 35; i++) {
//  res *= i;
// }
// console.log(res);

// let i = 15;
// let sum = 1;
// while (i <= 35) {
//   sum *= i;
//   i++;
// }
// console.log(sum);

// -Найти среднее арифметическое всех целых чисел от 1 до 500
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//     sum += i;
// }
// console.log(sum/500);

// -Вывести сумму только четных чисел в диапазоне от 30 до 80
// let sum = 0;
// for (let i = 30; i <= 80; i = i + 2) {
//   sum += i;
// }
// console.log(sum);

// let i = 30;
// let sum = 0;
// while (i <= 80) {
//   sum += i;
//   i=i+2
// }
// console.log(sum);

// -Вывести все числа в диапазоне от 100 до 200 кратные 3
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// -Дано натуральное число. Найти и вывести на страницу все его делители.
// let num = 40;
// let res = "";
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0 ) {
//     res += i + " ";
//   }
// }
// console.log(res);

// -Определить количество его четных делителей
// let num = 40;
// let res = 0;
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0 && i % 2 == 0) {
//     res++;
//   }
// }
// console.log(res);


// -Найти сумму его четных делителей
// let num = 40;
// let res = 0;
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0 && i % 2 == 0) {
//     res+= i;
//   }
// }
// console.log(res);


// -Напечатать полную таблицу умножения от 1 до 10
// let i;
// let k;
// for (let i = 1; i <= 10; i++) {
//   for (let k = 1; k <= 10; k++) {
//     console.log(`${i} * ${k} = ${i * k} `);
//   }
//   console.log("_________");
// }
