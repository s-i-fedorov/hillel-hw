'use strict';
let choice = prompt('Please, choice one option: add, sub, mult or div',)
let firstOperand = prompt('Write the first operand',);
let secondOperand = prompt('Write the second operand',);

if (choice=='add'){
    console.log(firstOperand+'+'+secondOperand+'='+(Number(firstOperand)+Number(secondOperand)))}
if (choice=='sub'){
    console.log(firstOperand+'-'+secondOperand+'='+(Number(firstOperand)-Number(secondOperand)))}
if (choice=='mult'){
    console.log(firstOperand+'*'+secondOperand+'='+(Number(firstOperand)*Number(secondOperand)))}
if (choice=='div'){
    console.log(firstOperand+'/'+secondOperand+'='+(Number(firstOperand)/Number(secondOperand)))}

console.log(firstOperand);
console.log(secondOperand);
console.log(choice);