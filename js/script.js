'use strict';
let choise = prompt('Please, choise one option: add, sub, mult or div',)
let firstOperand = prompt('Write the first operand',);
let secondOperand = prompt('Write the second operand',);

if (choise=='add'){
    console.log(firstOperand+'+'+secondOperand+'='+(Number(firstOperand)+Number(secondOperand)))}
if (choise=='sub'){
    console.log(firstOperand+'-'+secondOperand+'='+(Number(firstOperand)-Number(secondOperand)))}
if (choise=='mult'){
    console.log(firstOperand+'*'+secondOperand+'='+(Number(firstOperand)*Number(secondOperand)))}
if (choise=='div'){
    console.log(firstOperand+'/'+secondOperand+'='+(Number(firstOperand)/Number(secondOperand)))}

console.log(firstOperand);
console.log(secondOperand);
console.log(choise);