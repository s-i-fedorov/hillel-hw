'use strict';
// Переписати код нижче з використанням конструкції switch…case

// let numOrStr = prompt('input number or string');
//     console.log(numOrStr)
//
//     if(numOrStr === null) {
//         console.log('ви скасували')
//     } else if( numOrStr.trim() === '' ) {
//         console.log('Empty String');
//     } else if ( isNaN( +numOrStr ) ) {
//         console.log(' number is Ba_NaN')
//     } else {
//         console.log('OK!')
//     }

let numOrStr = prompt('input number or string');
    console.log(numOrStr)
switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
}
switch (numOrStr.trim())
{
    case '':
        console.log('Empty String');
        break;
}
switch (isNaN( +numOrStr ))
{
    case isNaN( +numOrStr ):
       console.log(' number is Ba_NaN');
       break;
    default:
        console.log('OK!')
}
// console.log('Empty String');
