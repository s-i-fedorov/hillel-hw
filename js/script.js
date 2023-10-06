'use strict';
// 9. Якщо змінна a більша за нуль і менше 5-ти, то виведіть 'Вірно', інакше виведіть 'Невірно'.
// 10. Якщо змінна a дорівнює нулю або дорівнює двом, додайте до неї 7, інакше поділіть її на 10. Виведіть
// нове значення змінної на екран.
// 11. Якщо змінна a дорівнює або менше 1, а змінна b більша або дорівнює 3, то виведіть суму цих змінних,
// інакше виведіть їх різницю (результат віднімання).
// 12. Якщо змінна a більше 2-х і менше 11-ти, або змінна b більша або дорівнює 6-ти і менше 14-ти,
// то виведіть 'Вірно', інакше виведіть 'Невірно'.
// 13. Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення 1, то в змінну result
//     запишемо зима, якщо має значення 2 - весна і так далі. Розв'яжіть завдання через switch-case.
let a = 3;
let b = 7;
// 1
let c1 = a === 0 ? console.log('True') : console.log('False');
// 2
let c2 = a > 0 ? console.log('True') : console.log('False');
// 3
let c3 = a < 0 ? console.log('True') : console.log('False');
// 4
let c4 = a >= 0 ? console.log('True') : console.log('False');
// 5
let c5 = a <= 0 ? console.log('True') : console.log('False');
// 6
let c6 = a !== 0 ? console.log('True') : console.log('False');
// 7
let c7 = a === 'test' ? console.log('True') : console.log('False');
// 8
let c8 = a === 1 ? console.log('True') : console.log('False');
// 9
let c9 = 5 > a > 0 ? console.log('True') : console.log('False');
// 10
let c10 = a === 0 || a === 2 ? console.log(a+7) : console.log(a/10);
// 11
let c11 = a <= 1 && b >=3 ? console.log(a+b) : console.log(a-b);
// 12
// let c12 = (11 > a > 2) && (14 > b >= 6) ? console.log('true') : console.log('false');
// let c12 = (11 > a > 2) ? console.log('true') : (14 > b >= 6) ? console.log('true') : console.log('false');
if (11 > a > 2){
    console.log('true')
}
// 13
let num = 4;
let result = num;
switch (num){
    case 1:
        console.log('winter');
        break;
    case 2:
        console.log('spring');
        break;
    case 3:
        console.log('summer');
        break;
    case 4:
        console.log('autumn');
        break;
    default:
        console.log('Error');
}