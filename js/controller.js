class Controller {
    #model = new Model();

    constructor() {
        this.#loadedHandler()
    }

    #loadedHandler() {
        document.addEventListener('DOMContentLoaded', this.#pageHandler);
    }
    #pageHandler = () => {
        this.#model.getAlbumsList()
        .then(
            result => {
                result.forEach(item => View.renderListItem(item))
            }
        )
    };
}

const c = new Controller()
