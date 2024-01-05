'use strict';
(function (){

    const example = [1,2,3,4,5]

    function iterFunc (arr) {
        let counter = arr.length;
        function next (){
            counter--;
            while (counter>=0) {
                return arr[counter]
            }
        }
        return next
    }

    const foo = iterFunc(example);
    console.log(foo())
    console.log(foo())
    console.log(foo())
    console.log(foo())
    console.log(foo())
    console.log(foo())


})()