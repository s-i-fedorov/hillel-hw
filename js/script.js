'use strict';
(function (){

    let typing = [];
    function buttonHandler(e){
        console.dir(e.target);
        const field = document.querySelector('.work-field')
        const result = document.querySelector('.result')
        // console.log(field)

        if(e.target.className==='button' || e.target.hasAttribute('data-btn')){
            typing.push(e.target.innerHTML)
            field.innerHTML = typing.join('')
            result.innerHTML = typing.join('')
        }
        if(e.target.hasAttribute('data-c')) {
            typing = []
            field.innerHTML = '0'
            result.innerHTML = '0'
            // console.log(1)
        }
        }
    document.addEventListener("click", buttonHandler)

})()