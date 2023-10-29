'use strict';
// Вам потрібно реалізувати функції
// indexOf,lastIndexOf,find,findIndex,includes,every та some,
//     вони працюють так само, як одноіменні методи масивів.

const arrOne = [1,2,3,4,5,6];

const callback = (element, index, arr) => {}

const indexOf = (arr, item, from = 0) => {
    if (from>=arr.length) return console.log(-1);
    // if (from<0) from=arr.length+from;
    // return  console.log(from);
    for(from;from <= arr.length;from++) {
        if (from<0) from=arr.length+from;
        if(arr[from]===item) return console.log(from);
    }
    return console.log(-1);
}
indexOf(arrOne,6,-0)

const lastIndexOf = (arr, item, from = arr.length) => {
    if (from<0) from = from+arr.length;
    if(from<0) return console.log(-1);
    for (from; from >= 0; from--) {
        if (arr[from] === item) return console.log(from);
    }
    return console.log(-1);
}
lastIndexOf(arrOne,5,-2)


const find = () => {}

const findIndex = () => {}

const includes = (arr, item, from = 0) => {
    if (from>=arr.length) return console.log(false);
    for(from;from <= arr.length;from++) {
        if (from<0) from=arr.length+from;
        if(arr[from]===item) return console.log(true);
    }
    return console.log(false);
}
includes(arrOne, 1,5)

const every = () => {}

const some = (arr, callback) => {

}
some(arrOne,element=>element>10)