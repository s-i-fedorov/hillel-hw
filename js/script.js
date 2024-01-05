'use strict';
(function (){

    const arr = [1,2,3,4,5]
    arr.reverse()

    let iterator = arr[Symbol.iterator]()

    console.log(iterator.next())

    console.log('-------task_2-------')

    function* fibNumbers(){
        let a = 0;
        let b = 1;
        for(let i = 3; ; i++){
            let c=a+b;
            a=b;
            b=c;
            yield b;
        }
    }

    const fibonacci = fibNumbers()
    console.log(fibonacci.next())
    console.log(fibonacci.next())
    console.log(fibonacci.next())
    console.log(fibonacci.next())
    console.log(fibonacci.next())

    console.log('-------task_3-------')

    const someObj = {
        name: 'Username',
        surname: 'UserSurname',
        age: 'userAge',
        city: 'userCity',
        born: 'userBorn',
        car: 'userCar'
    }

    function foo(obj){
        obj=someObj
        let itr = Object.keys(obj)[Symbol.iterator]()
        return itr.next
    }

    const funcForObj = foo()
    funcForObj()
    console.log(funcForObj())
    console.log(funcForObj())

    // let itr = Object.keys(obj)[Symbol.iterator]()
    // console.log(itr.next())
    // console.log(itr.next())
    // console.log(itr.next())

})()