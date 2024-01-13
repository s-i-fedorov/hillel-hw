'use strict';
(function (){

    const CONST = {
        typing: [],
        counter: 0,
    }

    function buttonHandler(e){
        console.log(e.target.classList);
        const field = document.querySelector('.work-field')
        const result = document.querySelector('.result')



        if(e.target.classList.contains('button')){
            if(e.target.hasAttribute('data-operand')){CONST.counter=0}
            CONST.typing.push(e.target.innerHTML)
            field.innerHTML = CONST.typing.join('')
            result.innerHTML = CONST.typing.join('')
            if(e.target.hasAttribute('data-digit')){
                CONST.counter++
                if(CONST.counter===3){
                    CONST.typing.push(' ')
                    CONST.counter=0
                }
            }
        }
        if(e.target.hasAttribute('data-c')) {
            CONST.typing = []
            CONST.counter = 0
            field.innerHTML = '0'
            result.innerHTML = '0'
        }
        if(e.target.hasAttribute('data-equal')){
            let a = CONST.typing.join('');
            console.log(a)
            field.innerHTML = eval(a);
            result.innerHTML = eval(a);
        }
        }
    document.addEventListener("click", buttonHandler)

    let a = 18;
    let b = 3;
    let c = '+';
    let d = a+c+b;
    let z = new Date()
    let fullDate = z.getDate()+'.'+z.getMonth()+1+'.'+z.getFullYear()+' '+z.getHours()+':'+z.getMinutes()
    console.log(fullDate)
    // console.log(eval(d))
    // console.log(parseInt('8+3',10))
    // console.log(a.trim())


})()