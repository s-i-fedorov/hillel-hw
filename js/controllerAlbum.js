class ControllerAlbum {
    #modelAlbum = new ModelAlbum();
    #albumId = null;
    constructor() {
        this.#loadedHandler()
    }

    #loadedHandler() {
        document.addEventListener('DOMContentLoaded', this.#dataHandler);
    }

    #dataHandler = () => {
        const urlData = new URLSearchParams(window.location.search)
        this.#albumId = urlData.get('albumId')
        this.#modelAlbum.getAlbum(this.#albumId)
        .then(
           result => {
               let dataObj = result[0]
               ViewAlbum.renderAlbumTitle(dataObj)
           }
        )
        this.#modelAlbum.getFotoFromAlbum(this.#albumId)
        .then(
            result => {
                result.forEach(item => ViewAlbum.renderPhotoItem(item))
            }
        )
    };

}

const c = new ControllerAlbum()
