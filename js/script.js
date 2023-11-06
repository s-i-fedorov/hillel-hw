'use strict';
// Створіть функцію counter, яка створюватиме лічильник і матиме один необов'язковий параметр типу number.
// Виклик функції повинен повертати об'єкт (лічильник) із трьома методами: increase, decrease, value.
//
// Виклик методу value повинен повертати поточне значення лічильника, increase – збільшувати його на 1,
//     а decrease – зменшувати на 1.
//
// Виклик функції counter повинен створювати незалежний лічильник – це означає, що виклик методів одного
// лічильника не повинен впливати на будь-який інший лічильник.
//
//     Додатково Якщо хочете оцінку 100 балів
//
// Необхідно підраховувати скільки разів були викликані функції (increase, decrease, get)
//
// Додати метод getStatistic який поверне нам об'єкт з даними, які ми підраховували в пункті вище
//
// Додати метод який буде обнулювати наш лічильник

(function (){

function counter (number=0){
    let counter = number;
    let get = 0;
    function increase(){
        counter++;
        get++;
    }
    function decrease(){
        counter--;
        get++;
    }
    function value(){
        return console.log(counter)
    }
    function getStatistic(){
        get++;
        console.log(`Кількість визовів методів: ${get}`)
    }
    function reset(){
        return counter=number
    }
    return {
        increase: increase,
        decrease: decrease,
        value: value,
        reset: reset,
        get: getStatistic
    }
}
const var1 = counter();
var1.value()
var1.increase()
    var1.increase()
    var1.value()
    console.log('var2==========')
    const var2 = counter();
    var2.increase()
    var2.increase()
    var2.increase()
    var2.value()
    var2.reset()
    var2.value()
    var2.get()

    // console.log(counter())


//
// function counter(a=0){
//     // let a = 0;
//     function increment(){
//         a++;
//         console.log(a)
//     }
//     function decrement(){
//         a--;
//         console.log(a)
//     }
//     return {
//         incr: increment,
//     decr: decrement
//     }
// }
// const a=counter();
//    a.incr()
//     a.incr()
//     a.incr()

})()

