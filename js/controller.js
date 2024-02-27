class Controller {
    #model = new Model()
    constructor() {
        this.#loadedHandler()
    }

    #loadedHandler() {
        document.addEventListener('DOMContentLoaded', this.#model.getAlbumsList);
        View.selectors.albumList.addEventListener('click', this.#clickHandler)
    }

    #clickHandler = ({target}) => {
        window.location.href = "./album.html";
        alert(target)
        console.log(target)
    };

    // buttonHandler = ({ target }) => {
    //     if (target !== View.selectors.searchBtn) return
    //     const inputValue = +View.selectors.inputField.value
    //     if (
    //         !(typeof inputValue === 'number') ||
    //         !(inputValue > 0) ||
    //         !(inputValue <= 100)
    //     )
    //         throw new Error('You entered invalid "Id"')
    //     this.model.requestHandler(inputValue)
    // }
    //
    // viewPostHandler = () => {
    //     View.myModal.hide()
    //     const comments = this.model.getComments(Controller.searchedPostId)
    //     comments.then(console.log)
    // }
}

const c = new Controller()
