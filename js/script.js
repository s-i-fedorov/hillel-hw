'use strict';
// Написати свою реалізацію функції bind
// При реалізації функції bind заборонено використовувати методи call та apply
function example(){
    console.log(this.name)
}

const a = {
    name: 'Serhii',
    age: 36,
}
const b = {
    name: 'Vika',
    age: 29
}
const res = example.bind(a)
res()

// console.log( example.bind(a))