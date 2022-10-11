let arr = [];
for (i = 0; i < 6; i++) {
  arr.push(prompt("Введіть число або букву"));
}
arr.sort();
console.log(arr);
arr.splice(1, 3);
console.log(arr);
