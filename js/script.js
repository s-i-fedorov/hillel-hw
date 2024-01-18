'use strict';
(function (){

    const CONST = {
        typing: [],
        counter: 0,
        field: document.querySelector('.work-field'),
        result: document.querySelector('.result')
    }

    const currentDate = {
        newDate: new Date(),
        get fullDate(){
            return this.newDate.toLocaleString()
        },
    }

    function pushToTyping (e){
        CONST.typing.push(e.target.innerHTML)
        // CONST.typing.join('').replace(/(\d)(?=(\d{3})+$)/g, "$1 ")

    }
    function showResult(){
        const data = CONST.typing.join('');
        const correctData = data.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
        CONST.field.innerHTML = correctData
        CONST.result.innerHTML = correctData
    }

    function buttonHandler(e){



        if(e.target.hasAttribute('data-digit')) {
            pushToTyping(e)
            showResult()

        }
        if(e.target.hasAttribute('data-operand')){
            CONST.typing.push(e.target.innerHTML);
            CONST.field.innerHTML = CONST.typing.join('')
        }


        if(e.target.hasAttribute('data-c')) {
            CONST.typing = []
            CONST.field.innerHTML = '0'
            CONST.result.innerHTML = '0'
        }
        if(e.target.hasAttribute('data-equal')){
            let resultToString = CONST.typing.join('');
            let resultRepl = resultToString.replace(' ','');

            try {const finalResult = eval(resultRepl);}
            catch (e) {
                CONST.field.innerHTML = 'Error'
                CONST.result.innerHTML = 'Error'
                // console.log(e)
            }


            CONST.typing = [finalResult];
            console.log(resultRepl);
            showResult();
            // CONST.field.innerHTML = finalResult;
            // CONST.result.innerHTML = finalResult;
        }
        }
    document.addEventListener("click", buttonHandler)

    let a = [1,2,3,4,5];
    a.splice(-3,0,'')
    // console.log(a)
    // console.log(currentDate.fullDate)


})()