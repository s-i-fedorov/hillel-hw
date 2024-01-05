'use strict';
(function (){

    const arr = [1,2,3,4,5]
    arr.reverse()

    let iterator = arr[Symbol.iterator]()

    console.log(iterator.next())

})()