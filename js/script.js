(function () {
  class TaskManager {
    #tasks = null;

    // #currentId = null;

    constructor() {
      this.#tasks = new Map();
    }

    addTask(id, task) {
      if (!this.validateId(id) || !this.validateTask(task)) throw new Error('You entered wrong id or task');
      if (this.#tasks.has(id)) {
        throw new Error('This id already exists');
      } else {
        this.#tasks.set(id, task);
        console.log('Task was successfully added');
      }
    }

    removeTask(id) {
      if (!this.validateId(id)) throw new Error('Id is not correct');
      if (!this.#tasks.has(id)) {
        throw new Error('This id does not exist');
      } else {
        this.#tasks.delete(id);
        console.log(`Task #${id} was successfully deleted`);
      }
    }

    findTask(id) {
      if (!this.validateId(id)) throw new Error('Id is not correct');
      if (!this.#tasks.has(id)) {
        throw new Error('This id does not exist');
      } else {
        console.log(this.#tasks.get(id));
      }
    }

    displayTasks() {
      this.#tasks.forEach((value, key) => {
        console.log(`Task #${key} = ${value}`);
      });
    }

    updateTaskDescription(id, newDescription) {
      if (!this.validateId(id)) throw new Error('Id is not correct');
      if (!this.#tasks.has(id)) {
        throw new Error('This id does not exist');
      } else if (this.#tasks.has(id)) {
        this.#tasks.set(id, newDescription);
        console.log(`Task #${id} was rewritten with value '${newDescription}'`);
      }
    }

    validateId(id) {
      let validated = false;
      if (typeof (id) === 'number') {
        validated = true;
      }
      return validated;
    }

    validateTask(task) {
      let validated = false;
      if (typeof (task) === 'string' && task.trim().length > 1) {
        validated = true;
      }
      return validated;
    }
  }

  const taskManager = new TaskManager();
  taskManager.addTask(1, 'complete the hw');
  taskManager.addTask(2, 'go to bed');
  taskManager.addTask(3, 'go to kitchen');
  taskManager.addTask(4, 'to do exercises');

  taskManager.removeTask(3);
  taskManager.findTask(2);
  taskManager.updateTaskDescription(4, 'push hw to github');

  taskManager.displayTasks();
  console.log(taskManager);
}());
