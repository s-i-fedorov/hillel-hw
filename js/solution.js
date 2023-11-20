'use strict';
(function (){

    let bodyEl = document.body
    let li = bodyEl.childNodes[1].children
    let arr = []
    console.log('----------Task 1')
    for (let liElement of li) {
        console.log(liElement)
    }
    console.log('----------Task 2')
    console.log('Кількість елементів у списку - ' + li.length)
    console.log('----------Task 3')
    for (let liElement of li) {
        arr.push(liElement.outerText)
    }
    console.log(arr)

})()