class Controller {
    view = null

    constructor() {
        this.view = new View()
    }
    inputHandler() {
        const input = document.querySelector('[data-input]')
        input.addEventListener('click', this.buttonHandler)
    }

    buttonHandler({ target }) {
        console.log(this.view)
        if (target !== this.view.selectors.searchBtn) return
        const inputValue = +this.view.selectors.inputField.value
        if (
            !(typeof inputValue === 'number') ||
            !(inputValue > 0) ||
            !(inputValue <= 100)
        )
            throw new Error('You entered invalid "Id"')
        Model.requestHandler(inputValue)
    }

    viewPostHandler() {
        myModal.hide()
        const comments = Model.getComments(View.searchedPostId)
        comments.then(console.log)
    }
}

const c = new Controller()
// console.log(c.view.selectors.searchBtn)
c.inputHandler()
