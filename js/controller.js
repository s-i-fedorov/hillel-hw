class Controller {
    #model = new Model();
    #albumId = null;
    constructor() {
        this.#loadedHandler()
    }

    #loadedHandler() {
        document.addEventListener('DOMContentLoaded', this.#model.getAlbumsList);
        View.selectors.albumList.addEventListener('click', this.#clickHandler)
    }

    #clickHandler = (e) => {
        const {target}=e;
        this.#albumId = target.getAttribute('data-album-id');
    };

}

const c = new Controller()
