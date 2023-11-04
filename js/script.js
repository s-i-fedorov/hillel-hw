'use strict';

(function (){
// Task #1
    function getFactorial (a) {

        return (a<1) ? 1 : a * getFactorial(a-1);
    }

    const result = getFactorial(6);
    console.log(result);

// Task #2
function pow(num, degree){
        if (degree===1) return num;
        return num*pow(num,degree-1)
}
const resultPow = pow(3,5);
    console.log(resultPow);

// Task #3
function sum(a,b){
    if (b<0) return 'error';
    if(b===0) return a;
    return a+sum(1,b-1)
}
const resultSum = sum(-3,8);
    console.log(resultSum);

})();