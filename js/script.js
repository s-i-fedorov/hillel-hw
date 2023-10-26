'use strict';
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     1. Знайти суму та кількість позитивних елементів.
//     2. Знайти мінімальний елемент масиву та його порядковий номер.
//     3. Знайти максимальний елемент масиву та його порядковий номер.
//     4. Визначити кількість негативних елементів.
//     5. Знайти кількість непарних позитивних елементів.
//     6. Знайти кількість парних позитивних елементів.
//     7. Знайти суму парних позитивних елементів.
//     8. Знайти суму непарних позитивних елементів.
//     9. Знайти добуток позитивних елементів.
//     10. Знайти найбільший серед елементів масиву, остальні обнулити.
const arrOne = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1
let arrPositive = [];
let sumElement = 0;
for(let i = 0; i<arrOne.length; i++){
    if(arrOne[i]<0) continue;
    if (arrOne[i]>0){
        arrPositive.push(arrOne[i])
    }
}
console.log(arrPositive.length);
for(let i = 0; i<arrPositive.length; i++){
    sumElement+=arrPositive[i];
}
console.log(sumElement);

// 2
let arrTemp = arrOne.slice();
let arrTwo = arrTemp.sort((a,b)=>a-b);
console.log(arrTwo[0]);
console.log(arrOne.indexOf(arrTwo[0])+1);

// 3
console.log(arrTwo[arrTwo.length-1]);
console.log(arrOne.indexOf(arrTwo[arrTwo.length-1])+1);

