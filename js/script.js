'use strict';
(function (){

    const someArr = [1,2,3,4,5]
    function iterArr (array){
        array = someArr.reverse();
        return array[Symbol.iterator]()
    }

    const baz = iterArr()
    console.log(baz.next());
    console.log(baz.next());

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

    function iterObj(obj){
        obj=someObj
        return  Object.keys(obj)[Symbol.iterator]()
    }

    const bar = iterObj()
    console.log(bar.next())
    console.log(bar.next())

})()