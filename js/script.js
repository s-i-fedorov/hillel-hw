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
let countNoOddPos = null;
arrPositive.forEach(item => {
    if(item%2!==0) countNoOddPos++;
})
console.log(`Кількість непарних позитивних елементів: ${countNoOddPos}`);

//     6. Знайти кількість парних позитивних елементів.
let countOddPos = null;
arrPositive.forEach(item => {
    if(item%2===0) countOddPos++;
})
console.log(`Кількість парних позитивних елементів: ${countOddPos}`);

//     7. Знайти суму парних позитивних елементів.
let sumOddPos = null;
arrPositive.forEach(item => {
    if(item%2===0) sumOddPos+=item;
})
console.log(`Сума парних позитивних елементів: ${sumOddPos}`);

//     8. Знайти суму непарних позитивних елементів.
let sumNoOddPos = null;
arrPositive.forEach(item => {
    if(item%2!==0) sumNoOddPos+=item;
})
console.log(`Сума непарних позитивних елементів: ${sumNoOddPos}`);

//     9. Знайти добуток позитивних елементів.
let multPos = 1n;
arrPositive.forEach(item=>{
    multPos*=BigInt(item)
})
console.log(`Добуток позитивних елементів масиву: ${multPos}`);

//     10. Знайти найбільший серед елементів масиву, остальні обнулити.
const arrWithZero  = arrOne.map(item=> {
    if (item !== arrSort[arrSort.length-1])
        return  item=0;
else return item = arrSort[arrSort.length-1];
})
console.log(arrWithZero);