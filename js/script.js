'use strict';
(function (){

    const data = {
        typing: [],
        field: document.querySelector('.work-field'),
        result: document.querySelector('.result'),
        storageKey: 'calcHist',
        get typingJoin (){
            return this.typing.join('')
        },
        get typingWithSpaces(){
            if(!data.typing.length) return 0
            return this.typingJoin.replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
        },
        get totalResult(){
            if(!data.typing.length) return 0
            const result = eval(this.typingJoin.replace(' ',''));
            return result.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
        }
    }

    const currentDate = {
        newDate: new Date(),
        get fullDate(){
            return this.newDate.toLocaleString()
        },
    }

    function pushToTyping (e){
        data.typing.push(e.target.innerHTML);
    }
    
    function fillTypingField(someData){
        data.field.innerHTML = data.typingWithSpaces;
    }
    
    function fillResultField(e){
        if(e.target.hasAttribute('data-operand')) return
        data.result.innerHTML = data.totalResult
    }
    function getData(){
        const getData = JSON.parse(localStorage.getItem(data.storageKey));
        return getData ? getData : [];
    }
    function saveData(){
        const fullData = getData();
        const currentData = {
            typing: data.typingWithSpaces,
            result: data.totalResult,
            date: currentDate.fullDate
        }
        fullData.push(currentData)
        localStorage.setItem(data.storageKey, JSON.stringify(fullData))
    }
    function buttonHandler(e){

        if(e.target.hasAttribute('data-digit')
        || e.target.hasAttribute('data-operand')) {
            pushToTyping(e)
        }

        if(e.target.hasAttribute('data-c')) {
            data.typing = []
        }
        if(e.target.hasAttribute('data-backspace')) {
            data.typing.pop()
        }
        if(e.target.hasAttribute('data-equal')){
            try {
                saveData();
                data.typing = [data.totalResult];
            }
            catch (e) {
                data.field.innerHTML = 'Error'
                data.result.innerHTML = 'Error'
                console.log(e)
            }
        }
        fillTypingField(e);
        fillResultField(e);
        }
    document.addEventListener("click", buttonHandler)

    let a = [];
    // console.log(a.length)
    // console.log(a)
    // console.log(currentDate.fullDate)


})()