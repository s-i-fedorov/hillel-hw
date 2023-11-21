'use strict';

// Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел
// (например [1,2,3]) и генерирует список из элементов:
//
// А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3]) то делать вложенный список.
//     Для проверки на массив используйте Array.isArray()

// <ul>
// <li>1</li>
// <li>2</li>
// <li>
//     <ul>
//         <li>1.1</li>
//         <li>1.2</li>
//         <li>1.3</li>
//     </ul>
// </li>
// <li>3</li>
// </ul>

(function (){

let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.innerHTML = 'text'
    const arr = [1,2,3,4,5,6]

    function generateList(array){
    if (!Array.isArray(array)) return console.log('Error')

    }

    console.log(!Array.isArray(arr))


    // document.body.append(ul)
    // document.querySelector('ul').append(li)
    // console.log(document.querySelector('ul'))


})()