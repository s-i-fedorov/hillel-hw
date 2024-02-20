class Controller {
    view = new View()
    model = new Model()
    static searchedPostId = null

    inputHandler() {
        this.view.selectors.input.addEventListener('click', this.buttonHandler)
        this.view.selectors.commentBtn.addEventListener(
            'click',
            this.viewPostHandler
        )
    }

    buttonHandler = ({ target }) => {
        if (target !== this.view.selectors.searchBtn) return
        const inputValue = +this.view.selectors.inputField.value
        if (
            !(typeof inputValue === 'number') ||
            !(inputValue > 0) ||
            !(inputValue <= 100)
        )
            throw new Error('You entered invalid "Id"')
        this.model.requestHandler(inputValue)
    }

    viewPostHandler = () => {
        this.view.myModal.hide()
        console.log(Controller.searchedPostId)
        const comments = this.model.getComments(Controller.searchedPostId)
        comments.then(console.log)
    }
}

const c = new Controller()
c.inputHandler()
