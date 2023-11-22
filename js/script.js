// 'use strict';
// Написати свою реалізацію функції bind
// При реалізації функції bind заборонено використовувати методи call та apply

(function (){

function showInfo(){
    console.log(this.name+' '+this.age)
}


const a = {
    name: 'Serhii',
    age: 36,
}
const b = {
    name: 'Vika',
    age: 29
}

function myBind(addFunc, addObj){

        addObj.f = addFunc;
        let result = addObj.f();
        delete addObj.f;
        return result;

    }

myBind(showInfo,b)

})()
