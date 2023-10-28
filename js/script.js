'use strict';
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const arrOne = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. Знайти суму та кількість позитивних елементів.
const arrPositive = [];
let sumElement = 0;
arrOne.forEach(item => {
    if(item<=0) return;
    arrPositive.push(item);
});
console.log(`Кількість позитивних елементів масиву: ${arrPositive.length}`);
arrPositive.forEach(item=>{
    sumElement+=item
})
console.log(`Сума позитивних елементів масиву: ${sumElement}`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const arrTemp = arrOne.slice();
const arrSort = arrTemp.sort((a,b)=>a-b);
console.log(`Мінімальний елемент масиву: ${arrSort[0]}`);
console.log(`Порядковий номер мінімального елементу в масиві: ${arrOne.indexOf(arrSort[0])+1}`);

// 3. Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Максимальний елемент масиву: ${arrSort[arrSort.length-1]}`);
console.log(`Порядковий номер максимального елементу в масиві: ${arrOne.indexOf(arrSort[arrSort.length-1])+1}`);

// 4. Визначити кількість негативних елементів.
const arrNegative = [];
arrOne.forEach(item=> {
    if (item>=0) return;
    arrNegative.push(item);
})
console.log(`Кількість негативних елементів масиву: ${arrNegative.length}`);

//     5. Знайти кількість непарних позитивних елементів.
let countOddPositive = null;
arrPositive.forEach(item => {
    if(item%2!==0) countOddPositive++;
})
console.log(`Кількість непарних позитивних елементів: ${countOddPositive}`);
//     6. Знайти кількість парних позитивних елементів.
//     7. Знайти суму парних позитивних елементів.
//     8. Знайти суму непарних позитивних елементів.
//     9. Знайти добуток позитивних елементів.
//     10. Знайти найбільший серед елементів масиву, остальні обнулити.