'use strict';
// У нас есть дерево, структурированное как вложенные списки ul/li.
//     Напишите код, который выведет каждый элемент списка в консоль :
// Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута
// в массив — вывести этот массив в консоль
//      Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
//      Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// Удалить у тега ul атрибут ‘data-dog-tail‘
(function (){

    const li = document.querySelectorAll('li');
    const ul= document.querySelector('ul')

// У нас есть дерево, структурированное как вложенные списки ul/li.
//     Напишите код, который выведет каждый элемент списка в консоль :
    li.forEach(item=> console.log(item))

 // Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута
//  в массив — вывести этот массив в консоль
//      Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
let arrValue = []
    let arrName = []
    for (let element of ul.attributes) {
        arrValue.push(element.value)
        arrName.push(element.name)
    }
    console.log(arrValue)
    console.log(arrName)
// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
  let lastLi = document.body.querySelector('li:last-child')
    lastLi.innerHTML='Hello, my name is Serhii'

//      Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
    let firstLi = document.body.querySelector('li:first-child')
    firstLi.setAttribute('data-my-name','Serhii')

})()