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
const c = {
    name: 'Miha',
    age: 8
}
const res = example.bind(a)
// res()

function myBind(addFunc, addObj){
    addObj.f=addFunc;
    let result = addObj.f();
    delete addObj.f;
    return result;
}

myBind(example, c)

console.log(c)