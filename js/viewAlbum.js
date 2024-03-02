class ViewAlbum {

    static selectors = {
        albumTitle: document.querySelector('[data-title]'),
        row: document.querySelector('[data-row]'),
    }

    static renderAlbumTitle(data) {
        ViewAlbum.selectors.albumTitle.textContent = `Album #${data.id}. Title: ${data.title}`
    }
    static renderPhotoItem(data){
        const photoItem = document.createElement('div');
            photoItem.classList = "col";
        photoItem.innerHTML =

            `<div class="card">
                    <img src="${data.url}" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Album ${data.albumId}, Photo ${data.id}</h5>
                <p class="card-text">
                ${data.title}
                </p>
            </div>
            </div>`

        ViewAlbum.selectors.row.append(photoItem)

    }


}
