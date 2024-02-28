class ControllerAlbum {
    #modelAlbum = new ModelAlbum();
    #albumId = null;
    constructor() {
        this.#loadedHandler()
    }

    #loadedHandler() {
        document.addEventListener('DOMContentLoaded', this.#dataHandler);
        // View.selectors.albumList.addEventListener('click', this.#clickHandler)
    }

    #dataHandler = () => {
        const urlData = new URLSearchParams(window.location.search)
        this.#albumId = urlData.get('albumId')
        const data = this.#modelAlbum.getAlbum(this.#albumId)
        console.log(data)
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
