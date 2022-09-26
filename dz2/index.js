// завдання 2 варіант 1
// let numOne = Number(prompt("введіть число"));
// let numTwo = Number(prompt("введіть число"));
// let sub = numOne - numTwo;
// let mult = numOne * numTwo;
// let add = numOne + numTwo;
// let div = numOne / numTwo;
// alert(`${sub}; ${mult}; ${add}; ${div}`);


// завдання 2 варіант 2
// let a = Number(prompt("введіть число"));
// let b = Number(prompt("введіть число"));
// alert(`${a}-${b}=${a - b}; ${a}+${b}=${a+b}; ${a}/${b}=${a/b}; ${a}*${b}=${a*b}.`
// );


// завдання 3 варіант 1
// let operator = prompt('Введіть оператор обчислення: /,+,*,-');
// let numOne = Number(prompt("Введіть перше число"));
// let numTwo = Number(prompt("Введіть друге число"));
// if (operator === "/"){
//     alert(`${numOne}/${numTwo} = ${numOne/numTwo}`)
// }else if(operator === "+"){
//     alert(`${numOne}+${numTwo} = ${numOne+numTwo}`)
// }  else if(operator === "*"){
//     alert(`${numOne}*${numTwo} = ${numOne*numTwo}`)
// } else if(operator === "-"){
//     alert(`${numOne}-${numTwo} = ${numOne-numTwo}`)
// } else{
//     alert("Не вірний оператор, спробуйте ще раз")
// }


// завдання 3 варіант 2
// let operator = prompt("введіть оператор /,+,*,-");
// let numOne;
// let numTwo;
// switch (operator) {
//   case "/":
//     numOne = Number(prompt("введіть число"));
//     numTwo = Number(prompt("введіть число"));
//     alert(`${numOne} / ${numTwo} = ${(numOne / numTwo)}`);
//     break
//   case "+":
//     numOne = Number(prompt("введіть число"));
//     numTwo = Number(prompt("введіть число"));
//     alert(`${numOne} + ${numTwo} = ${(numOne + numTwo)}`);
//     break;
//   case "*":
//     numOne = Number(prompt("введіть число"));
//     numTwo = Number(prompt("введіть число"));
//     alert(`${numOne} * ${numTwo} = ${(numOne * numTwo)}`);
//     break;
//   case "-":
//     numOne = Number(prompt("введіть число"));
//     numTwo = Number(prompt("введіть число"));
//     alert(`${numOne} - ${numTwo} = ${(numOne - numTwo)}`);
//     break;
//   default:
//     alert("Не вірний оператор");
// }


// завдання 4 
// let numberOfHours = Number(prompt("Введіть кількість годин", 5));
// let secondsInOneHour = 3600;
// let result = numberOfHours * secondsInOneHour;
// if (numberOfHours >= 2) {
//   alert(`В ${numberOfHours} годинах, ${result} секунд.`);
// } else if (numberOfHours === 0) {
//   alert(`В ${numberOfHours} годинах, ${result} секунд.`);
// } else if (numberOfHours === 1) {
//   alert(`В ${numberOfHours} годині, ${result} секунд.`);
// } else {
//   alert("Введіть тільки число!");
// }



// завдання 5
// let firstNum = Number(prompt("Введіть перше число", 2));
// let secondNum = Number(prompt("Введіть друге число", 2));
// let thirdNum = Number(prompt("Введіть третє число", 2));
// let result = (firstNum + secondNum + thirdNum) / 3;
// if (firstNum && secondNum && thirdNum >= 0) {
//   alert(`Середнє арифметичне: ${result}`);
// } else {
//   alert(
//     `Упс! Помилка! Перевірте правильність вводу чисел (${firstNum}+${secondNum}+${thirdNum}).Спробуйте ще раз`
//   );
// }
