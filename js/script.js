'use strict';

let foo = prompt('Введіть елементи масиву через кому');
const arrOne = foo.split(',')
alert(`Ви ввели масив:\n [${arrOne}]`);

const arrTwo = arrOne.sort((a,b)=>a-b);
alert(`Масив відсортовано за зростанням:\n [${arrTwo}]`);

arrTwo.splice(1,3)

alert(`З масиву видалені елементи з 2 по 4 включно:\n [${arrTwo}]`);
