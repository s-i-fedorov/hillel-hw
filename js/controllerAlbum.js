class ControllerAlbum {
    #model = new ModelAlbum();
    #albumId = null;
    constructor() {
        this.#loadedHandler()
    }

    #loadedHandler() {
        document.addEventListener('DOMContentLoaded', this.#dataHandler);
        View.selectors.albumList.addEventListener('click', this.#clickHandler)
    }

    #dataHandler = () => {
        const data = this.#model.getAlbum()
        console.log(data)
        const urlData = new URLSearchParams(window.location.search)
        this.#albumId = urlData.get('albumId')
        console.log(this.#albumId)
    };

    #clickHandler = (e) => {
        const {target}=e;
        // e.preventDefault();
        this.#albumId = target.getAttribute('data-album-id');
        console.log(this.#albumId)
        // window.location.href = "./album.html";
        // alert(target)
        // console.log(target)
    };



}

const c = new ControllerAlbum()
