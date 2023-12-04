'use strict';
(function (){

    const createList = (data)=>{
        const ul = document.createElement("ul")
        for (const dataKey in data) {
            const li = document.createElement('li')
            li.innerHTML= dataKey+': '+data[dataKey]
            ul.appendChild(li)
        }
        document.body.append(ul)
    }


    const loadData=()=>{
        let data = localStorage.getItem('dataForm')
        if(data===null) return console.log('Data does not exist')
        data = JSON.parse(data)
        createList(data)
    }

    document.addEventListener('DOMContentLoaded', loadData)

})()