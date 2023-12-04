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
        target
            .querySelectorAll('input, textarea, select')
            .forEach(el=>{
                if(el.name==='terms'){
                    data['agreed'] = el.value
                }
                else
                if(el.name==='option'){
                    data['selected option'] = el.value
                }
                else{
                    data[el.name] = el.value
                }
            })
        saveData(data)
    }

    const loadedHandler = (e)=>{
        const form = document.querySelector('#form')
        form.addEventListener('submit', formHandler)
    }

    document.addEventListener('DOMContentLoaded', loadedHandler)

})()