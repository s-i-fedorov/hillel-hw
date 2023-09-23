'use strict';
let firstOperand = prompt('Write the first operand',);
let secondOperand = prompt('Write the second operand',);

let add = 'Результат:'+firstOperand+'+'+secondOperand+'='+(Number(firstOperand)+Number(secondOperand));
let sub = 'Результат:'+firstOperand+'-'+secondOperand+'='+(Number(firstOperand)-Number(secondOperand));
let mult = 'Результат:'+firstOperand+'*'+secondOperand+'='+(Number(firstOperand)*Number(secondOperand));
let div = 'Результат:'+firstOperand+'/'+secondOperand+'='+(Number(firstOperand)/Number(secondOperand));

console.log(firstOperand);
console.log(secondOperand);
console.log(add,sub,mult,div);