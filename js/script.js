'use strict';
(function (){

    const saveData = (data= null)=>{
        localStorage.setItem('dataForm', JSON.stringify(data))
    }

    const formHandler = (e)=>{
        e.stopPropagation()
        e.preventDefault()
        const {target} = e
        const data = {}
        // const tar = target.querySelectorAll('input, textarea, select')
        target
            .querySelectorAll('input, textarea, select')
            .forEach(elem=>{
                data[elem.name] = elem.value
            })
        saveData(data)
        // console.log(data)
    }

    const loadedHandler = (e)=>{
        const form = document.querySelector('#form')
        form.addEventListener('submit', formHandler)
    }

    document.addEventListener('DOMContentLoaded', loadedHandler)

})()