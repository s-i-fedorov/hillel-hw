'use strict';

const exponentiation = (numberOne, numberTwo)=>{
    let result = numberOne ** numberTwo;
    return alert(`${numberOne} в степені ${numberTwo} дорівнює ${result}`);
};
const mainFunction = (callback)=>{
    let numberOne = +prompt('введіть перше число');
    let numberTwo = +prompt('введіть друге число');
    callback(numberOne,numberTwo);
};

mainFunction(exponentiation);

// Callback функція multiply
// 2. У тілі функції нам потрібно помножити (*) перший аргумент на другий аргумент і записати результат
// цієї операції у змінну

const multiply = (numberOne, numberTwo)=>{
    let result = numberOne * numberTwo;
    return alert(`${numberOne} помножити на ${numberTwo} дорівнює ${result}`);
};
const mainFunction2 = (callback)=>{
    let numberOne = +prompt('введіть перше число');
    let numberTwo = +prompt('введіть друге число');
    callback(numberOne,numberTwo);
};

mainFunction2(multiply);

// Callback функція division
// 2. У тілі функції нам потрібно поділити (/) перший аргумент на другий аргумент та записати результат
// цієї операції у змінну

const division = (numberOne, numberTwo)=>{
    let result = numberOne / numberTwo;
    return alert(`${numberOne} поділити на ${numberTwo} дорівнює ${result}`);
};
const mainFunction3 = (callback)=>{
    let numberOne = +prompt('введіть перше число');
    let numberTwo = +prompt('введіть друге число');
    callback(numberOne,numberTwo);
};

mainFunction3(division);

// Callback функція modulo
// 2. У тілі функції нам потрібно обчислити залишок від поділу (%) першого аргументу на другий аргумент
// та записати результат цієї операції у змінну

const modulo = (numberOne, numberTwo)=>{
    let result = numberOne % numberTwo;
    return alert(`Залишок від ділення ${numberOne} на ${numberTwo} дорівнює ${result}`);
};
const mainFunction4 = (callback)=>{
    let numberOne = +prompt('введіть перше число');
    let numberTwo = +prompt('введіть друге число');
    callback(numberOne,numberTwo);
};

mainFunction4(modulo);