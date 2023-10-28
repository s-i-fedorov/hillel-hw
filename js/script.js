'use strict';
// Вам потрібно реалізувати функції
// indexOf,lastIndexOf,find,findIndex,includes,every та some,
//     вони працюють так само, як одноіменні методи масивів.
//      arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса,
//      на котором был найден искомый элемент, в противном случае -1.
const arrOne = [1,2,3,4,5,6,1];
const indexOf = (arr, item, from = 0) => {
    for(from;from <= arr.length;from++) {
        if(arr[from]===item) return console.log(from);
    }
    return console.log(-1);
}
indexOf(arrOne,6,3)

const lastIndexOf = (arr, item, from = arr.length) => {
    for(from;from <= arr.length;from--) {
        if(arr[from]===item) return console.log(from);
    }
    return console.log(-1);
}
lastIndexOf(arrOne,1)