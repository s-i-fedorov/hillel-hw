'use strict';
(function (){

    const user = {
        name: 'Serhii',
        surname: 'Fedorov'

    }

    Object.defineProperty(user,'name',{
        writable: false
    });

    // console.log(Object.getOwnPropertyDescriptor(user, 'name'));

    Object.defineProperty(user, 'age', {
        value: 36,
        writable: true,
        enumerable: false

    })

    // console.log(Object.getOwnPropertyDescriptor(user, 'age'));

    console.log(Object.keys(user));

    for (const userKey in user) {
        console.log(userKey + ': ' + user[userKey])
    }


    console.log('--------Task 1.1 -------')



    console.log('--------addition task -------')


})()