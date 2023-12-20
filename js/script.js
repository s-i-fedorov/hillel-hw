'use strict';

(function (){

    const CONSTANTS = {
        form: document.querySelector('#todoForm'),
        todoContainer: document.querySelector('[data-todo-items]'),
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
            const savedData = model.saveData(data);
            if(savedData){
                view.renderElement(data);
                view.resetForm()
            }
        },

        loadedHandler() {
            model.setId();
            console.log(this)
            CONSTANTS.form.addEventListener('submit',this.formHandler.bind(this));
            model.get().forEach(item=>view.renderElement(item));
            // CONSTANTS.todoContainer.addEventListener('click', removeTodoItemHandler)
        },
        init() {
            document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
        }
    }

    const view = {
        renderElement (data){
            const template = this.createElement(data);
            this.renderTodoItem(template)
        },

        resetForm(){
            CONSTANTS.form.reset()
        },

        renderTodoItem (elementToRender){
            CONSTANTS.todoContainer.prepend(elementToRender);
            return elementToRender;
        },

        createElement(data){
            const wrapper = document.createElement('div');
            wrapper.className = 'col-4';
            wrapper.setAttribute('data-todo-item',data.id);

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
        currentId: 0,

        saveData(data){
            this.currentId++;
            const dataCopy = {...data};
            dataCopy.id = this.currentId;
            const savedData = this.get();
            savedData.push(dataCopy)
            try {
                localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedData))
                return this.get().at(-1)
            } catch (e) {
                alert('Error save data')
            }
        },
        get(){
            const dataFromStorage = JSON.parse(localStorage.getItem(CONSTANTS.dataKey)) ;
            return dataFromStorage ? dataFromStorage : [];
        },

        setId(){
          const items = this.get();
          if(!items.length) return;
          this.currentId = +items.at(-1).id;
        }
    }

    controller.init()

})()
