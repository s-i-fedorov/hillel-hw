'use strict';

let a = prompt('Введіть число');
let b = prompt('Введіть ступінь');
let result = null;
function calcPower(a, b = 2){
    if (a === null || b === null){
    return alert('ви не ввели число або ступінь')
} else if (isNaN(+a) || isNaN(+b)){
    return alert('ви ввели некоректне число або ступінь')
} else if (a.trim() === '' || b.trim() === ''){
    return alert('пустий рядок замість числа чи ступеня')
}
    result = a ** b;
    alert(result);
}
calcPower(a,b);