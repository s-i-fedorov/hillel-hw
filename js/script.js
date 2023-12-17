(function (){

    const CONSTANTS = {
        form: document.querySelector('#todoForm'),
        todoContainer: document.querySelector('#todoItems'),
        dataKey: 'formData',
    }

    const controller = {

        formHandler (e){
            e.preventDefault();
            e.stopPropagation();
            const {target} = e;
            const data = {};
            target
                .querySelectorAll('input, textarea')
                .forEach(el=>{data[el.name] = el.value});
            // console.log(data)
            model.saveData(data)
        },

        loadedHandler() {
            console.log(this)
            CONSTANTS.form.addEventListener('submit',this.formHandler.bind(this));
            // CONSTANTS.todoContainer.addEventListener('click', removeTodoItemHandler)
        },
        init() {
            document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
        }
    }

    controller.init()

    const view = {

    }

    const model = {
        saveData(data){
            console.log(CONSTANTS.dataKey)
            localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(data))
        }
    }

})()
'use strict';
