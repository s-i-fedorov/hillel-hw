'use strict';
//     Створіть функцію InsertWordInto, яка приймає 1 параметр у типі string. Цей параметр може містити набір слів,
//     розділених пробілом, одне слово або порожній рядок.
//Функція InsertWordInto повертає нову функцію, яка також приймає 1 параметр (не порожній рядок)
//  Виклик внутрішньої функції вставляє значення свого аргументу в будь-яке місце (початок, кінець) рядка, який
//  був переданий у зовнішню функцію.
//Якщо внутрішня функція вставляє слово в середину рядка, вона може вставляти слова тільки замість пробілів,
//не змінюючи при цьому самі слова.
//     Слово, яке вставляється в рядок, повинно мати прогалини з кожної сторони.
//
// const insert = insertWordInto('hello world')
// const result = insert('Odesa') // -> 'hello Odesa world'
// const secondResult = insert('Odesa') // -> 'Odesa hello world'
// const thirdResult = insert('Odesa') // -> 'hello world Odesa'
// // optional
//      const fourthResult = insert('Odesa') // -> 'Odesa hello world': лише на цьому кроці вставка слова повторилась,
//      бо до цього вже були перебрані всі 3 можливі варіанти вставки
(function (){
    function insertWordInto(row){
        // let a=row;
        let b=-1;
        return (word)=>{
            let rowToArr = row.split(' ')
            b++
            if (typeof word==="undefined") console.log('Error. Enter word')
            else if (b<=rowToArr.length){
                rowToArr.splice(b,0,word);
            return console.log(rowToArr.join(' '));
            }
            else console.log('All options are exhausted')
        }
    }

const insertW = insertWordInto('hello world')
    // insertW('bla-bla')
    insertW('Odessa')
    insertW('damn')
    insertW('damn')
    insertW('damn')
    insertW('damn')
    insertW('damn')
    insertW('damn')
    insertW()





})()