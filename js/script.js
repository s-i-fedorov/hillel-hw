'use strict';
// Потрібно створити функцію, яка буде зводити число в ступінь
// Запитуємо у користувача число (за допомогою prompt)
// Запитуємо у користувача ступінь, в який це число потрібно звести (за допомогою prompt)
// Створюємо функцію, яка приймає 2 аргументи (число, ступінь)
// Задаємо аргументу, який приймає ступінь значення за замовчуванням.
// Усередині функції потрібно написати перевірку, якщо аргументи не є числами завершити функцію із
// зазначенням того, що користувач ввів неправильні дані, наприклад (return ‘some error’)
// Якщо перевірка пройшла успішно, то звести число до ступеня (працюємо з аргументами функції)
// Повернути результат виконання функції та завершити її
// Результат виклику функції записати в змінну та вивести користувачеві через alert()
// P.S. Для зведення в ступінь можна використовувати
// Math.pow() — https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
//     Оператор ** приклад (2 ** 8) - зводимо число 2 до 8-го ступеня

let a = prompt('Please, enter a number');
let b = prompt('Please, enter power of a number ');
let result = null;
function calcPower(givenNumber, givenPower = 2){
    givenNumber = a;
    givenPower = b;
    if (a === null || b === null){
    return alert('ви не ввели число')
} else if (isNaN(+a) || isNaN(+b)){
    return alert('ви ввели некоректне число')
} else if (a === ''){
    return alert('пустий рядок')
}
    result = a ** b;
    console.log(result);
}
calcPower(a,b);