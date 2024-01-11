'use strict';
(function (){

    const CONST = {
        typing: [],
    }

    function buttonHandler(e){
        console.dir(e.target);
        const field = document.querySelector('.work-field')
        const result = document.querySelector('.result')
        // console.log(field)

        if(e.target.className==='button' || e.target.hasAttribute('data-btn')){
            CONST.typing.push(e.target.innerHTML)
            field.innerHTML = CONST.typing.join('')
            result.innerHTML = CONST.typing.join('')
        }
        if(e.target.hasAttribute('data-c')) {
            CONST.typing = []
            field.innerHTML = '0'
            result.innerHTML = '0'
            // console.log(1)
        }
        }
    document.addEventListener("click", buttonHandler)

    let a = '5+3*2';
    console.log(a.trim())


})()