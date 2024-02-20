class Controller {
    model = new Model()
    static searchedPostId = null

    constructor() {
        this.#inputHandler()
    }

    #inputHandler() {
        View.selectors.input.addEventListener('click', this.buttonHandler)
        View.selectors.commentBtn.addEventListener(
            'click',
            this.viewPostHandler
        )
    }

    buttonHandler = ({ target }) => {
        if (target !== View.selectors.searchBtn) return
        const inputValue = +View.selectors.inputField.value
        if (
            !(typeof inputValue === 'number') ||
            !(inputValue > 0) ||
            !(inputValue <= 100)
        )
            throw new Error('You entered invalid "Id"')
        this.model.requestHandler(inputValue)
    }

    viewPostHandler = () => {
        View.myModal.hide()
        const comments = this.model.getComments(Controller.searchedPostId)
        comments.then(console.log)
    }
}

const c = new Controller()
