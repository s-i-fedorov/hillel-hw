'use strict';
(function (){

    const CONST = {
        typing: [],
        counter: 0,
    }

    function buttonHandler(e){
        console.dir(e.target);
        const field = document.querySelector('.work-field')
        const result = document.querySelector('.result')

        if(e.target.className==='button' || e.target.hasAttribute('data-btn')){
            CONST.counter++
            CONST.typing.push(e.target.innerHTML)
            field.innerHTML = CONST.typing.join('')
            result.innerHTML = CONST.typing.join('')
            if(CONST.counter===3){
                CONST.typing.push(' ')
                CONST.counter=0
            }
        }
        if(e.target.hasAttribute('data-c')) {
            CONST.typing = []
            CONST.counter = 0
            field.innerHTML = '0'
            result.innerHTML = '0'
        }
        }
    document.addEventListener("click", buttonHandler)

    let a = '5+3*2';
    console.log(a.trim())


})()