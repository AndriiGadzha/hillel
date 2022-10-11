let age = +prompt("Вік","18")
let mess = age < 18? " Підліток" : 
(age < 8)? "Дитина": 
(age < 30)?"вітаю":"Вибачте"
alert(mess)