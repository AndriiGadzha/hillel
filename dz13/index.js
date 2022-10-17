// -Дан массив с элементами разных типов. Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.
// let arr = [1,true,false,null, 2, -7, 58, "ssfsdf",{"khij": "dfkf"}, 34];
// let newArray = [];
// let sum = 0;
// function arithmeticMean() {
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] < 0 || arr[i] > 0) && arr[i] !== true) {
//       newArray.push(arr[i]);
//     }
//   }
//   for (s of newArray) {
//     sum += s;
//   }
//   return sum / newArray.length;
// }
// console.log(arithmeticMean());

// -Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.
// function calc() {
//     const x = prompt("Введіть перше число", 12);
//     const znak  = prompt("Введіть оператор : +, -, *, /, %","*");
//     const y = prompt("Введіть друге число", 12);
//     const result = {
//     "-" :x - y,
//     "+" : +x + +y,
//     "*" : x * y,
//     "/" : x / y,
//     "%" : x % y
//       }[znak];
//       return result == +result && result || "Не вірний оператор";
//     }
// alert(calc());

// -Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь.
// function makeArr (lengthMainArr, lengthOtherArrs, ...args){
//     let arr = Array();
//     let count = 0;
//     for (let i = 0; i < lengthMainArr; i++){
//         if (count === args.length) break;
//         for (let j = 0; j < lengthOtherArrs; j++) {
//             if (args[count] === undefined) break;
//             if (j === 0) arr.push(Array());
//             arr[i].push(args[count]);
//             count++;
//         }
//     }
//     return arr;
// }
// console.log(makeArr(4, 3, 123,123,123,234,345,6547, 24, 1,45,45));  Але я так і не зрозумів як воно працює(((
 


// -Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь
//  Це завдання я так і не зрозумів як зробити...



