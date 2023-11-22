'use strict';

(function (){


    const a = 5
    const arr = [1,2,3,4,
        [1,2,
            [1,2]
            ,3]
        ,5,6]

    function generateList(array){
    if (!Array.isArray(array)) return console.log('Error, argument isn`t array')
        let ul = document.createElement('ul')
        let liLast = document.querySelectorAll('li')

        if ((document.querySelector('ul:last-child'))===null) document.body.append(ul)
        else {
            liLast[liLast.length-1].append(ul)
        }
        for (let i=0;i<array.length; i++) {
            if (Array.isArray(array[i])) generateList(array[i])
            let li = document.createElement('li')
            if (Array.isArray(array[i])) continue
                    li.innerHTML = array[i]
            ul.append(li)
        }
    }
    generateList(arr)



})()