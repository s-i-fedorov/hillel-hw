'use strict';

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
            model.saveData(data);
            view.renderElement(data);
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
        renderElement (data){
            const template = this.createElement(data);
            this.renderTodoItem(template)
        },

        renderTodoItem (elementToRender){
            //there is a problem in a row below
            const todoContainer = document.querySelector('#todoForm');
            todoContainer.prepend(elementToRender);
            return elementToRender;
        },

        createElement(data){
            const wrapper = document.createElement('div');
            wrapper.className = 'col-4';
            wrapper.setAttribute('data-todo-item','');

            const taskWrapper = document.createElement('div');
            taskWrapper.className = 'taskWrapper';
            wrapper.appendChild(taskWrapper);

            const taskHeading = document.createElement('div');
            taskHeading.className = 'taskHeading';
            taskHeading.innerHTML = data.title;
            taskWrapper.appendChild(taskHeading);

            const taskDescription = document.createElement('div');
            taskDescription.className = 'taskDescription';
            taskDescription.innerHTML = data.description;
            taskWrapper.appendChild(taskDescription);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-sm btn-danger';
            deleteBtn.innerText = 'X';
            deleteBtn.setAttribute('data-remove-btn','');
            taskWrapper.appendChild(deleteBtn);

            return wrapper;
        }
    }

    const model = {
        saveData(data){
            const savedData = this.get();
            savedData.push(data)
            localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedData))
        },
        get(){
            const dataFromStorage = JSON.parse(localStorage.getItem(CONSTANTS.dataKey)) ;
            return dataFromStorage ? dataFromStorage : [];
        }
    }

})()
