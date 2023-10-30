'use strict';
// Вам потрібно реалізувати функції
// indexOf,lastIndexOf,find,findIndex,includes,every та some,
//     вони працюють так само, як одноіменні методи масивів.

const arrOne = [1,2,3,4,5,18];
const arrString = ['apple', 'banana', 'orange', 'chery', 'peach'];

const indexOf = (arr, item, from = 0) => {
    if (from>=arr.length) return console.log(-1);
    for(from;from <= arr.length;from++) {
        if (from<0) from=arr.length+from;
        if(arr[from]===item) return console.log(from);
    }
    return console.log(-1);
}
console.log('-----------indexOf:');
indexOf(arrOne,6,-0)

const lastIndexOf = (arr, item, from = arr.length) => {
    if (from<0) from = from+arr.length;
    if(from<0) return console.log(-1);
    for (from; from >= 0; from--) {
        if (arr[from] === item) return console.log(from);
    }
    return console.log(-1);
}
console.log('-----------lastIndexOf:');
lastIndexOf(arrOne,5,-2)

//function find
const find = (arr, callback) => {
    for(let i = 0; i<=arr.length;i++){
        let element = arr[i];
        if(callback(element)) return console.log(arr[i])
    }
    return console.log('undefined');
};
console.log('-----------find:')
find(arrOne,item=>item>6);
find(arrString,item=>item.length>5)

const findIndex = (arr, callback) => {
    for(let i = 0; i<=arr.length;i++){
        let element = arr[i];
        if(callback(element)) return console.log(i)
    }
    return console.log(-1);
};
console.log('-----------findIndex:');
findIndex(arrString,item=>item==='peach')

const includes = (arr, item, from = 0) => {
    if (from>=arr.length) return console.log(false);
    for(from;from <= arr.length;from++) {
        if (from<0) from=arr.length+from;
        if(arr[from]===item) return console.log(true);
    }
    return console.log(false);
}
console.log('-----------includes:')
includes(arrOne, 1,5)

const every = (arr, callback) => {
    for(let i = 0; i<=arr.length;i++){
        let element = callback(arr[i]);
        if(element) return console.log(true)
    }
    return console.log(false);
}
console.log('-----------every:');
every(arrOne,item=>item>=1);

//function some
const some = (arr, callback) => {
for(let i = 0; i<=arr.length;i++){
    let element = callback(arr[i]);
    if(element) return console.log(true)
}
    return console.log(false);
}
console.log('-----------some:')
some(arrString,item=>item==='asdf')