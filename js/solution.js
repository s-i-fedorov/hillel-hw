'use strict';
//     Рішення пишемо у файлі solution.js
// Ми маємо дерево, структуроване як вкладені списки ul/li.
//     Напишіть код, який виведе кожен елемент списку в консоль:
//     Використовуйте цикл for..of
// Вивести загальну кількість елементів в консоль
//     Витягнути текст із тегів li і записати текст, що міститься в кожному елементі в масив —
//     вивести цей масив у консоль
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
    // console.log(li[1].outerText)
})()