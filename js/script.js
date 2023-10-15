'use strict';
let a = prompt('Please, enter a number');
if (a === null){
    alert('ви не ввели число')
} else if (isNaN(+a)){
    alert('ви ввели некоректне число')
} else if (a === ''){
    alert('пустий рядок')
}
let b = prompt('Please, enter power of a number ');

let result = null;
function calcPower(){
    result = a ** b;
    console.log(result);
}
calcPower();