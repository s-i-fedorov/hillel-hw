'use strict';
// Написати свою реалізацію функції bind
// При реалізації функції bind заборонено використовувати методи call та apply
function showInfo(){
    console.log(this.name+' '+this.age)
}
function multToNum(a,b){
    let x = a;
    let y = b;
    return x*y;
}

const a = {
    name: 'Serhii',
    age: 36,
}
const b = {
    name: 'Vika',
    age: 29
}
const c = [1,2,3,4,5]

function myBind(addFunc, addObj){
    if (addObj===null) {
        // console.log(args)
        return addFunc()
    } else {
        addObj.f = addFunc;
        let result = addObj.f(args);
        delete addObj.f;
        return result;
    }
    }

// myBind(showInfo,a)
const double = multToNum(3)
// const double = myBind(multToNum,null,3)
console.log(double(2))

// let exemp
// console.log(typeof exemp)

