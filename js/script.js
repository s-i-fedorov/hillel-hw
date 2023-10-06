'use strict';

let a = 11;
let b = 5;
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
let c12 = (11 > a && a > 2) || (14 > b && b >= 6) ? console.log('true') :  console.log('false');
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