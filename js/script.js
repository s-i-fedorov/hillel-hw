'use strict';
// 9. Якщо змінна a більша за нуль і менше 5-ти, то виведіть 'Вірно', інакше виведіть 'Невірно'.
// 10. Якщо змінна a дорівнює нулю або дорівнює двом, додайте до неї 7, інакше поділіть її на 10. Виведіть
// нове значення змінної на екран.
// 11. Якщо змінна a дорівнює або менше 1, а змінна b більша або дорівнює 3, то виведіть суму цих змінних,
// інакше виведіть їх різницю (результат віднімання).
// 12. Якщо змінна a більше 2-х і менше 11-ти, або змінна b більша або дорівнює 6-ти і менше 14-ти,
// то виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення 1, то в змінну result
//     запишемо зима, якщо має значення 2 - весна і так далі. Розв'яжіть завдання через switch-case.
let a = 1;
// 1
// let b = a === 0 ? console.log('True') : console.log('False');
// 2
// let b = a > 0 ? console.log('True') : console.log('False');
// 3
// let b = a < 0 ? console.log('True') : console.log('False');
// 4
let b = a >= 0 ? console.log('True') : console.log('False');
// 5
let b = a <= 0 ? console.log('True') : console.log('False');
// 6
let b = a !== 0 ? console.log('True') : console.log('False');
// 7
let b = a === 'test' ? console.log('True') : console.log('False');
// 8
let b = a === 1 ? console.log('True') : console.log('False');
// 9
let b = 5 > a > 0 ? console.log('True') : console.log('False');
// 10
let b = a === 0 || a === 2 ? console.log(a+7) : console.log(a/10);