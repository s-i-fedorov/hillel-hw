'use strict';
(function (){

    const user = {
        name: 'Serhii',
        surname: 'Fedorov',
        get fullName(){
            return this.name+' '+this.surname
        },
        set fullName(string){
            [this.name,this.surname] = string.split(' ');
        }
    }

    Object.defineProperty(user,'name',{
        writable: false
    });

    // console.log(Object.getOwnPropertyDescriptor(user, 'name'));

    Object.defineProperty(user, 'age', {
        value: 36,
        writable: true
    })

    // console.log(Object.getOwnPropertyDescriptor(user, 'age'));

    console.log(Object.keys(user));

    for (const userKey in user) {
        console.log(userKey + ': ' + user[userKey])
    }


    console.log('--------Task 1.1 -------')

    console.log('Demo getter:  '+user.fullName);

    Object.defineProperty(user,'name',{
        writable: true
    });

    user.fullName='Till Lindemann';
    console.log('Demo setter:  '+user.fullName);


    console.log('--------addition task -------')

    console.log(Object.getOwnPropertyDescriptor(user, 'name'));

    Object.freeze(user);

    Object.defineProperty(user,'name',{
        writable: false
    });

    try {
        Object.defineProperty(user,'name',{
            writable: true
        });
    } catch (err){console.log(err)}


    console.log(Object.getOwnPropertyDescriptor(user, 'name'));

    try {
        user.name = 'Anton';
    } catch (e) {console.log(e)}

})()